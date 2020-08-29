(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-my-property-property-all-units-property-all-units-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-all-units/property-all-units.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-all-units/property-all-units.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsMyPropertyPropertyAllUnitsPropertyAllUnitsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-all-units/property-units-list/property-units-list.component.html":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-all-units/property-units-list/property-units-list.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsMyPropertyPropertyAllUnitsPropertyUnitsListPropertyUnitsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"property-units-wrapper mt-5\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"bg-card shadow filter-box\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"d-flex align-items-center\">\n\t\t\t<div>\n\t\t\t\t<h6><mat-icon svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter By</h6>\n\t\t\t</div>\n\t\t\t<div class=\"ml-3\">\n\t\t\t\t<button mat-flat-button\n\t\t\t\t\tclass=\"mr-3\" \n\t\t\t\t\t[ngClass]=\"filterSelected == 'all' ? 'mat-primary' : 'mat-lined'\"  \n\t\t\t\t\t(click)=\"getAllBlockData('all')\">All Towers</button>\n\t\t\t\t<button mat-flat-button \n\t\t\t\t\t[ngClass]=\"filterSelected != 'all' ? 'mat-primary' : 'mat-lined'\"\n\t\t\t\t\t[matMenuTriggerFor]=\"singleBlockActions\">{{singleBlock}}</button>\n\t\t\t\t\t<mat-menu class=\"mat-actions-menu\"\n\t\t\t\t\t\t\t[xPosition]=\"'before'\"\n\t\t\t\t\t\t\t#singleBlockActions=\"matMenu\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let block of blockListData\">\n\t\t\t\t\t\t\t\t<button mat-menu-item (click)=\"getSingleBlock(block)\">\n\t\t\t\t\t\t\t\t\t{{block.apartmentBlockNumber}}\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</mat-menu>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<condo-card *ngIf=\"isDataLoaded\">\n\n\t\t<div CondoCardHeader>\n\t\t\t<div class=\"d-flex\">\n\t\t\t\t<div>\n\t\t\t\t\t<h4>Unit Details</h4>\n\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div CondoCardBody>\n\t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"unitDataList\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid> \n\n\t\t</div>\n\n\n\t</condo-card>\n\n\t\n\n\t<!-- <div class=\"card clear\" id=\"propertyDetailsAccordion\">\n\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t\n\t\t\t\t\t<ng-container  *ngFor=\"let tower of propertyTowerData; let i = index; first as isFirst\">\n\t\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" attr.data-target=\"#towerDetail{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"towerDetail{{i}}\">\n\t\t\t\t\t\t\t<span>{{tower.apartmentBlockNumber}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<div id=\"towerDetail{{i}}\" class=\"collapse\" [ngClass]=\"isFirst ? 'show': ''\" attr.aria-labelledby=\"towerDetail{{i}}\" data-parent=\"#propertyDetailsAccordion\">\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t<app-property-tower-info [tower]=\"tower\"></app-property-tower-info>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</ul>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\n\t</div> -->\n\n</div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-all-units/property-all-units-routing.module.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-all-units/property-all-units-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: PropertyAllUnitsRoutingModule */

    /***/
    function srcAppModulesAmsMyPropertyPropertyAllUnitsPropertyAllUnitsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyAllUnitsRoutingModule", function () {
        return PropertyAllUnitsRoutingModule;
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


      var _property_all_units_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./property-all-units.component */
      "./src/app/modules/ams/my-property/property-all-units/property-all-units.component.ts");
      /* harmony import */


      var _property_units_list_property_units_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./property-units-list/property-units-list.component */
      "./src/app/modules/ams/my-property/property-all-units/property-units-list/property-units-list.component.ts");

      var routes = [{
        path: '',
        component: _property_all_units_component__WEBPACK_IMPORTED_MODULE_3__["PropertyAllUnitsComponent"],
        children: [{
          path: '',
          redirectTo: 'all-units',
          pathMatch: 'full'
        }, {
          path: 'all-units',
          component: _property_units_list_property_units_list_component__WEBPACK_IMPORTED_MODULE_4__["PropertyUnitsListComponent"]
        }]
      }];

      var PropertyAllUnitsRoutingModule = function PropertyAllUnitsRoutingModule() {
        _classCallCheck(this, PropertyAllUnitsRoutingModule);
      };

      PropertyAllUnitsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PropertyAllUnitsRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-all-units/property-all-units.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-all-units/property-all-units.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsMyPropertyPropertyAllUnitsPropertyAllUnitsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL215LXByb3BlcnR5L3Byb3BlcnR5LWFsbC11bml0cy9wcm9wZXJ0eS1hbGwtdW5pdHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-all-units/property-all-units.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-all-units/property-all-units.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: PropertyAllUnitsComponent */

    /***/
    function srcAppModulesAmsMyPropertyPropertyAllUnitsPropertyAllUnitsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyAllUnitsComponent", function () {
        return PropertyAllUnitsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PropertyAllUnitsComponent = /*#__PURE__*/function () {
        function PropertyAllUnitsComponent() {
          _classCallCheck(this, PropertyAllUnitsComponent);
        }

        _createClass(PropertyAllUnitsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PropertyAllUnitsComponent;
      }();

      PropertyAllUnitsComponent.ctorParameters = function () {
        return [];
      };

      PropertyAllUnitsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-all-units',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./property-all-units.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-all-units/property-all-units.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./property-all-units.component.scss */
        "./src/app/modules/ams/my-property/property-all-units/property-all-units.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PropertyAllUnitsComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-all-units/property-all-units.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-all-units/property-all-units.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: PropertyAllUnitsModule */

    /***/
    function srcAppModulesAmsMyPropertyPropertyAllUnitsPropertyAllUnitsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyAllUnitsModule", function () {
        return PropertyAllUnitsModule;
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


      var _property_all_units_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./property-all-units-routing.module */
      "./src/app/modules/ams/my-property/property-all-units/property-all-units-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var _property_all_units_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./property-all-units.component */
      "./src/app/modules/ams/my-property/property-all-units/property-all-units.component.ts");
      /* harmony import */


      var _property_units_list_property_units_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./property-units-list/property-units-list.component */
      "./src/app/modules/ams/my-property/property-all-units/property-units-list/property-units-list.component.ts");

      var PropertyAllUnitsModule = function PropertyAllUnitsModule() {
        _classCallCheck(this, PropertyAllUnitsModule);
      };

      PropertyAllUnitsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_property_all_units_component__WEBPACK_IMPORTED_MODULE_7__["PropertyAllUnitsComponent"], _property_units_list_property_units_list_component__WEBPACK_IMPORTED_MODULE_8__["PropertyUnitsListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CondoCardModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_6__["SelectModule"], _property_all_units_routing_module__WEBPACK_IMPORTED_MODULE_3__["PropertyAllUnitsRoutingModule"]]
      })], PropertyAllUnitsModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-all-units/property-units-list/property-units-list.component.scss":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-all-units/property-units-list/property-units-list.component.scss ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsMyPropertyPropertyAllUnitsPropertyUnitsListPropertyUnitsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL215LXByb3BlcnR5L3Byb3BlcnR5LWFsbC11bml0cy9wcm9wZXJ0eS11bml0cy1saXN0L3Byb3BlcnR5LXVuaXRzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-all-units/property-units-list/property-units-list.component.ts":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-all-units/property-units-list/property-units-list.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: PropertyUnitsListComponent */

    /***/
    function srcAppModulesAmsMyPropertyPropertyAllUnitsPropertyUnitsListPropertyUnitsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyUnitsListComponent", function () {
        return PropertyUnitsListComponent;
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");

      var PropertyUnitsListComponent = /*#__PURE__*/function () {
        function PropertyUnitsListComponent(router, dialog, apartmentService, sessionService) {
          _classCallCheck(this, PropertyUnitsListComponent);

          this.router = router;
          this.dialog = dialog;
          this.apartmentService = apartmentService;
          this.sessionService = sessionService;
          this.isDataLoaded = false;
          this.filterSelected = "all";
          this.singleBlock = "Select Tower";
        }

        _createClass(PropertyUnitsListComponent, [{
          key: "onGlSearchFilter",
          value: function onGlSearchFilter() {
            var _this = this;

            if (this.unitData != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.unitData;
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
          key: "getAllBlockData",
          value: function getAllBlockData() {
            var _this2 = this;

            this.filterSelected = 'all';
            this.singleBlock = "Select Block";
            var params = {
              apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe(function (res) {
              var unitDataList = res;
              _this2.gridSourceData.localdata = unitDataList;

              _this2.datagrid.updatebounddata('cells');

              _this2.totalItems = unitDataList.length;
            });
          }
        }, {
          key: "getSingleBlock",
          value: function getSingleBlock(block) {
            var _this3 = this;

            this.filterSelected = 'single';
            this.singleBlock = block.apartmentBlockNumber;
            this.selectedBlockId = block.apartmentBlockId;
            var params = {
              apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe(function (res) {
              var unitDataList = res.filter(function (item) {
                return item.apartmentBlockNumber == _this3.singleBlock;
              });
              _this3.gridSourceData.localdata = unitDataList;

              _this3.datagrid.updatebounddata('cells');

              _this3.totalItems = unitDataList.length;
            });
          }
        }, {
          key: "onEditUnitEvent",
          value: function onEditUnitEvent(detail) {}
        }, {
          key: "renderColumns",
          value: function renderColumns() {
            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.columnData = [{
              text: 'Unit No',
              datafield: 'apartmentBlockUnitNumber',
              width: 180,
              pinned: true,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Block No',
              datafield: 'apartmentBlockNumber',
              width: 180,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Bulit Area SQ.M',
              datafield: 'builtupArea',
              width: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Unit Construction Area SQ.M',
              datafield: 'carpetArea',
              width: 240,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Unit Type',
              datafield: 'unitType',
              width: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Is Furnished',
              datafield: 'isFurnished',
              width: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Is PetsAllowed',
              datafield: 'isPetsAllowed',
              width: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Is Vacant',
              datafield: 'isVacant',
              width: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              minwidth: 120,
              datafield: 'isReversed',
              cellsrenderer: function cellsrenderer(row, coloumn, value) {
                var elemId = 'invoiceReverse' + row;
                return '<div class="simple-actions">' + '<a href="javascript:void(0)" class="mr-2 text-secondary" onClick="editUnitEvent(' + row + ')">' + '<i class="fa fa-pencil" aria-hidden="true"></i>' + '</a>' + '<a href="javascript:void(0)" class="mr-2 text-secondary" onClick="deleteUnitEvent(' + row + ')">' + '<i class="fa fa-trash" aria-hidden="true"></i>' + '</a>' + '</div>';
              },
              renderer: columnrenderer
            }];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var params = {
              apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockByApartmentId(params).subscribe(function (res) {
              _this4.blockListData = res;

              _this4.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe(function (res) {
                console.log(res);
                _this4.filterSelected = 'all';
                _this4.singleBlock = "Select Block";
                var unitDataList = res;
                _this4.isDataLoaded = true;
                _this4.totalItems = unitDataList.length;
                _this4.gridSourceData = {
                  localdata: unitDataList,
                  datatype: "array"
                };
                _this4.unitDataList = new jqx.dataAdapter(_this4.gridSourceData);

                _this4.renderColumns();
              });
            });
          }
        }]);

        return PropertyUnitsListComponent;
      }();

      PropertyUnitsListComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
        }];
      };

      PropertyUnitsListComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        onEditUnitEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onEditUnitEvent', ['$event.detail']]
        }]
      };
      PropertyUnitsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-units-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./property-units-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-all-units/property-units-list/property-units-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./property-units-list.component.scss */
        "./src/app/modules/ams/my-property/property-all-units/property-units-list/property-units-list.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])], PropertyUnitsListComponent);

      var editUnitEvent = function editUnitEvent(row) {
        var event = new CustomEvent('onEditUnitEvent', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      };

      window.editUnitEvent = editUnitEvent;
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-ams-my-property-property-all-units-property-all-units-module-es5.js.map