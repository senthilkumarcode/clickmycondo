(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-my-property-property-configuration-property-towers-property-towers-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.html":
    /*!*****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.html ***!
      \*****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsMyPropertyPropertyConfigurationPropertyTowersPropertyTowerInfoPropertyTowerInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"property-tower-wrapper\">\n\n\t<app-loader *ngIf=\"!isTowersLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isTowersLoaded\">\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"d-flex justify-content-end mb-3\">\n\t\t\t\t\t<div class=\"link\" (click)=\"showEditForm()\">\n\t\t\t\t\t\t<mat-icon class=\"icon-md\" [color]=\"'primary'\" *ngIf=\"isEdit\" svgIcon=\"mat_outline:arrow_back_ios\"></mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"icon-md\" [color]=\"'primary'\" *ngIf=\"!isEdit\" svgIcon=\"feather:edit\"></mat-icon>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ng-container *ngIf=\"!isEdit\">\n\n\t\t\t<form #propertyDetailsForm = \"ngForm\" name=\"propertyDetailsForm\" novalidate>\n\t\t\t\t\n\t\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Construction Area SQ.M</label>\n\t\t\t\t\t\t\t\t<p>{{tower.blockConstructedArea | notAvail}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Common Area SQ.M</label>\n\t\t\t\t\t\t\t\t<p>{{tower.blockCommonArea | notAvail}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Units under construction</label>\n\t\t\t\t\t\t\t\t<p>{{tower.unitsUnderConstruction | notAvail}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Total Units</label>\n\t\t\t\t\t\t\t\t<p>{{totalItems}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\n\t\t\t\t</div>\n\t\n\t\t\t</form>\n\t\n\t\t</ng-container>\n\t\n\t\t<ng-container *ngIf=\"isEdit\">\n\t\t\t\n\t\t\t<form #propertyDetailsForm = \"ngForm\" name=\"propertyDetailsForm\" novalidate (ngSubmit)=\"submitPropertyDetailsForm(propertyDetailsForm)\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Construction Area SQ.M</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"blockConstructedArea\" [(ngModel)]=\"tower.blockConstructedArea\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Common Area SQ.M</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"blockCommonArea\" [(ngModel)]=\"tower.blockCommonArea\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Units under construction SQ.M</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"constructionInProgress\" [(ngModel)]=\"tower.unitsUnderConstruction\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t\t\t</form>\n\t\n\t\t</ng-container>\n\n\t</ng-container>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-unit-info/property-tower-unit-info.component.html":
    /*!***************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-unit-info/property-tower-unit-info.component.html ***!
      \***************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsMyPropertyPropertyConfigurationPropertyTowersPropertyTowerUnitInfoPropertyTowerUnitInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"property-tower-unit-wrapper\">\n\t\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"!isEdit\">\n\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<ng-container *ngIf=\"!isEdit\">\n\n\t\t<form #propertyUnitDetailsForm = \"ngForm\" name=\"propertyUnitDetailsForm\" novalidate>\n\t\t\t\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Bulit Area SQ.M</label>\n\t\t                    <p>{{unit.builtupArea | notAvail}}</p>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Unit Construction Area SQ.M</label>\n\t\t                    <p>{{unit.unitConstructionArea | notAvail}}</p>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Unit Type</label>\n\t\t                    <p>{{unit.unitType | notAvail}}</p>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Units Sold</label>\n\t\t\t                <p>{{getBooleanStatus(unit.isSold)}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Units Vacant</label>\n\t\t\t                <p>{{getBooleanStatus(unit.isVacant)}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Pets Allowed</label>\n\t\t\t                <p>{{getBooleanStatus(unit.isPetsAllowed)}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Furnished</label>\n\t\t\t                <p>{{getBooleanStatus(unit.isFurnished)}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isEdit\">\n\t\t\n\t\t<form #propertyUnitDetailsForm = \"ngForm\" name=\"propertyUnitDetailsForm\" novalidate (ngSubmit)=\"submitPropertyUnitDetailsForm(propertyDetailsForm)\">\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Bulit Area SQ.M</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"builtupArea\" [(ngModel)]=\"unit.builtupArea\">\n\t        \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Unit Construction Area SQ.M</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"unitConstructionArea\" [(ngModel)]=\"unit.unitConstructionArea\">\n\t        \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                    <label>Unit Type*</label>\n\t                    <select \n\t\t\t\t\t        name=\"unitType\" \n\t\t\t\t\t        id=\"unitType\" \n\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t        [(ngModel)]=\"unitTypeId\" required>\n\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t        <option *ngFor=\"let item of unitTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t    </select>\n\t        \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" #unitSold class=\"form-check-input\" id=\"unitSlod\" name=\"unitSold\" [(ngModel)]=\"unit.isSold\">\n\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"unitSlod\">Is Sold</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" #unitVacant class=\"form-check-input\" id=\"unitVacant\" name=\"unitVacant\" [(ngModel)]=\"unit.isVacant\">\n\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"unitVacant\">Is Vacant</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" #petsAllowed class=\"form-check-input\" id=\"petsAllowed\" name=\"petsAllowed\" [(ngModel)]=\"unit.isPetsAllowed\">\n\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"petsAllowed\">Is Pets Allowed</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" #furnished class=\"form-check-input\" id=\"petsAllowed\" name=\"furnished\" [(ngModel)]=\"unit.isFurnished\">\n\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"furnished\">Is Furnished</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"propertyUnitDetailsForm.invalid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.html":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsMyPropertyPropertyConfigurationPropertyTowersPropertyTowersComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"property-details-wrapper mt-5\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"d-flex flex-column mb-4\">\n\t\t\t<h6 class=\"text-secondary\" *ngIf=\"isBlockAvailable\">{{blockListData.length}} Records found</h6>\n\t\t</div>\n\n\t</ng-container>\n\n\t<div class=\"bg-card shadow warn\" *ngIf=\"isDataLoaded && !isBlockAvailable\">\n\t\t<h6>No Blocks Available</h6>\n\t</div>\n\n\t<ng-container *ngIf=\"isDataLoaded && isBlockAvailable\">\n\n\t\t<mat-accordion>\n\n\t\t\t<mat-expansion-panel [expanded]=\"i == 0\" *ngFor=\"let tower of blockListData; let i = index\">\n\n\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t<h6 class=\"mb-2\">{{tower.apartmentBlockNumber}}</h6>\n\t\t\t\t\t</mat-panel-title>\n\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t<mat-panel-description>\n\t\t\t\t\t<app-property-tower-info [tower]=\"tower\"></app-property-tower-info>\n\t\t\t\t</mat-panel-description>\n\n\t\t\t</mat-expansion-panel>\n\n\t\t</mat-accordion>\n\n\t</ng-container>\n\n</div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.scss":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.scss ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsMyPropertyPropertyConfigurationPropertyTowersPropertyTowerInfoPropertyTowerInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL215LXByb3BlcnR5L3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktdG93ZXJzL3Byb3BlcnR5LXRvd2VyLWluZm8vcHJvcGVydHktdG93ZXItaW5mby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.ts":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: PropertyTowerInfoComponent */

    /***/
    function srcAppModulesAmsMyPropertyPropertyConfigurationPropertyTowersPropertyTowerInfoPropertyTowerInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyTowerInfoComponent", function () {
        return PropertyTowerInfoComponent;
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


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");

      var PropertyTowerInfoComponent = /*#__PURE__*/function () {
        function PropertyTowerInfoComponent(apartmentService, sharedService, sessionService) {
          _classCallCheck(this, PropertyTowerInfoComponent);

          this.apartmentService = apartmentService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.isEdit = false;
          this.isTowersLoaded = false;
        }

        _createClass(PropertyTowerInfoComponent, [{
          key: "showEditForm",
          value: function showEditForm() {
            this.isEdit = !this.isEdit;
          }
        }, {
          key: "submitPropertyDetailsForm",
          value: function submitPropertyDetailsForm(form) {
            var _this = this;

            var details = {
              "apartmentBlockId": parseInt(this.tower.apartmentBlockId),
              "apartmentBlockNumber": this.tower.apartmentBlockNumber,
              "description": this.tower.description,
              "apartmentId": this.sessionService.apartmentId,
              "isActive": this.tower.isActive,
              "insertedBy": parseInt(this.tower.insertedBy),
              "insertedOn": this.tower.insertedOn,
              "updatedBy": this.sessionService.userId,
              "updatedOn": new Date().toISOString(),
              "totalNounits": parseInt(this.totalItems),
              "blockConstructedArea": parseInt(this.tower.blockConstructedArea),
              "unitsUnderConstruction": parseInt(this.tower.unitsUnderConstruction),
              "blockCommonArea": parseInt(this.tower.blockCommonArea)
            };
            var params = {
              apartmentBlock: details
            };
            this.apartmentService.updateApartmentBlock(params).subscribe(function (res) {
              if (res.message) {
                _this.isEdit = false;

                _this.sharedService.setAlertMessage(_this.tower.apartmentBlockNumber + " updated successfully");
              } else {
                _this.isEdit = false;
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            console.log(this.tower);
            var params = {
              apartmentBlockId: parseInt(this.tower.apartmentBlockId)
            };
            this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe(function (res) {
              _this2.totalItems = res.length;
              _this2.isTowersLoaded = true;
            });
          }
        }]);

        return PropertyTowerInfoComponent;
      }();

      PropertyTowerInfoComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }];
      };

      PropertyTowerInfoComponent.propDecorators = {
        tower: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      PropertyTowerInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-tower-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./property-tower-info.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./property-tower-info.component.scss */
        "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], PropertyTowerInfoComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-unit-info/property-tower-unit-info.component.scss":
    /*!*************************************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-unit-info/property-tower-unit-info.component.scss ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsMyPropertyPropertyConfigurationPropertyTowersPropertyTowerUnitInfoPropertyTowerUnitInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL215LXByb3BlcnR5L3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktdG93ZXJzL3Byb3BlcnR5LXRvd2VyLXVuaXQtaW5mby9wcm9wZXJ0eS10b3dlci11bml0LWluZm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-unit-info/property-tower-unit-info.component.ts":
    /*!***********************************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-unit-info/property-tower-unit-info.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: PropertyTowerUnitInfoComponent */

    /***/
    function srcAppModulesAmsMyPropertyPropertyConfigurationPropertyTowersPropertyTowerUnitInfoPropertyTowerUnitInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyTowerUnitInfoComponent", function () {
        return PropertyTowerUnitInfoComponent;
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


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! underscore */
      "./node_modules/underscore/modules/index-all.js");

      var PropertyTowerUnitInfoComponent = /*#__PURE__*/function () {
        function PropertyTowerUnitInfoComponent(apartmentService, lookupService, sharedService, sessionService) {
          _classCallCheck(this, PropertyTowerUnitInfoComponent);

          this.apartmentService = apartmentService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.isEdit = false;
        }

        _createClass(PropertyTowerUnitInfoComponent, [{
          key: "showEditForm",
          value: function showEditForm() {
            this.isEdit = !this.isEdit;
          }
        }, {
          key: "getBooleanStatus",
          value: function getBooleanStatus(status) {
            return status ? 'Yes' : 'No';
          }
        }, {
          key: "getUnitType",
          value: function getUnitType(name) {
            var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.unitTypeData, function (item) {
              if (item.lookupValueName === name) return item;
            });

            if (data === undefined || data.length == 0) {
              this.unitTypeId = "";
            } else {
              this.unitTypeId = data[0].lookupValueId;
            }
          }
        }, {
          key: "submitPropertyUnitDetailsForm",
          value: function submitPropertyUnitDetailsForm(form) {
            var _this3 = this;

            var details = {
              "apartmentBlockUnitId": parseInt(this.unit.apartmentBlockUnitId),
              "apartmentBlockUnitNumber": this.unit.apartmentBlockUnitNumber,
              "apartmentBlockId": parseInt(this.tower.apartmentBlockId),
              "unitTypeId": parseInt(this.unitTypeId),
              "builtupArea": parseInt(this.unit.builtupArea),
              "carpetArea": parseInt(this.unit.carpetArea),
              "intercom": this.unit.intercom,
              "cars": parseInt(this.unit.cars),
              "isAvailableForRent": this.unit.isAvailableForRent,
              "availableDate": "2020-02-08T06:52:31.682Z",
              "rentAmount": parseInt(this.unit.rentAmount),
              "advanceAmount": parseInt(this.unit.advanceAmount),
              "isPetsAllowed": this.unit.isPetsAllowed,
              "isFurnished": this.unit.isFurnished,
              "isVacant": this.unit.isVacant,
              "isSold": this.unit.isSold,
              "constructionInProgress": this.unit.constructionInProgress || false,
              "unitConstructionArea": this.unit.unitConstructionArea,
              "propertyManagerId": 1,
              "isActive": this.unit.isActive,
              "insertedBy": parseInt(this.unit.insertedBy),
              "insertedOn": this.unit.insertedOn,
              "updatedBy": parseInt(this.sessionService.userId),
              "updatedOn": new Date().toISOString()
            };
            var params = {
              apartmentBlockUnit: details
            };
            this.apartmentService.updateApartmentBlockUnit(params).subscribe(function (res) {
              if (res.message) {
                _this3.isEdit = false;

                _this3.sharedService.setAlertMessage(_this3.tower.apartmentBlockNumber + " " + _this3.unit.apartmentBlockUnitNumber + " updated successfully");
              } else {
                _this3.isEdit = false;
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.unitTypeId = "";
            var unitParams = {
              LookupTypeId: 1
            }; //get unit type

            this.lookupService.getLookupValueByLookupTypeId(unitParams).subscribe(function (res) {
              _this4.unitTypeData = res;
              setTimeout(function () {
                _this4.getUnitType(_this4.unit.unitType);
              }, 1000);
            }, function (error) {});
          }
        }]);

        return PropertyTowerUnitInfoComponent;
      }();

      PropertyTowerUnitInfoComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }];
      };

      PropertyTowerUnitInfoComponent.propDecorators = {
        tower: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        unit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      PropertyTowerUnitInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-tower-unit-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./property-tower-unit-info.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-unit-info/property-tower-unit-info.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./property-tower-unit-info.component.scss */
        "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-unit-info/property-tower-unit-info.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])], PropertyTowerUnitInfoComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers-routing.module.ts":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers-routing.module.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: routes, PropertyTowersRoutingModule */

    /***/
    function srcAppModulesAmsMyPropertyPropertyConfigurationPropertyTowersPropertyTowersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyTowersRoutingModule", function () {
        return PropertyTowersRoutingModule;
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


      var _property_towers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./property-towers.component */
      "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.ts");

      var routes = [{
        path: '',
        component: _property_towers_component__WEBPACK_IMPORTED_MODULE_3__["PropertyTowersComponent"]
      }];

      var PropertyTowersRoutingModule = function PropertyTowersRoutingModule() {
        _classCallCheck(this, PropertyTowersRoutingModule);
      };

      PropertyTowersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PropertyTowersRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.scss":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsMyPropertyPropertyConfigurationPropertyTowersPropertyTowersComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL215LXByb3BlcnR5L3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktdG93ZXJzL3Byb3BlcnR5LXRvd2Vycy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.ts":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: PropertyTowersComponent */

    /***/
    function srcAppModulesAmsMyPropertyPropertyConfigurationPropertyTowersPropertyTowersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyTowersComponent", function () {
        return PropertyTowersComponent;
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

      var PropertyTowersComponent = /*#__PURE__*/function () {
        function PropertyTowersComponent(router, dialog, apartmentService, sessionService) {
          _classCallCheck(this, PropertyTowersComponent);

          this.router = router;
          this.dialog = dialog;
          this.apartmentService = apartmentService;
          this.sessionService = sessionService;
          this.isDataLoaded = false;
          this.isBlockAvailable = false;
          this.filterSelected = "all";
          this.singleBlock = "Select Tower";
        }

        _createClass(PropertyTowersComponent, [{
          key: "onGlSearchFilter",
          value: function onGlSearchFilter() {
            var _this5 = this;

            if (this.towerData != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.towerData;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this5.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          }
        }, {
          key: "renderColumns",
          value: function renderColumns() {
            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            var params = {
              apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockByApartmentId(params).subscribe(function (res) {
              _this6.blockListData = res;
              _this6.isDataLoaded = true;
              console.log(_this6.blockListData);

              if (_this6.blockListData.length > 0) {
                _this6.isBlockAvailable = true;
              } else {
                _this6.isBlockAvailable = false;
              }
            });
          }
        }]);

        return PropertyTowersComponent;
      }();

      PropertyTowersComponent.ctorParameters = function () {
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

      PropertyTowersComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }]
      };
      PropertyTowersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-towers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./property-towers.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./property-towers.component.scss */
        "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])], PropertyTowersComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.module.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.module.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: PropertyTowersModule */

    /***/
    function srcAppModulesAmsMyPropertyPropertyConfigurationPropertyTowersPropertyTowersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyTowersModule", function () {
        return PropertyTowersModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _property_towers_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./property-towers-routing.module */
      "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var _property_towers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./property-towers.component */
      "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.ts");
      /* harmony import */


      var _property_tower_info_property_tower_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./property-tower-info/property-tower-info.component */
      "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.ts");
      /* harmony import */


      var _property_tower_unit_info_property_tower_unit_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./property-tower-unit-info/property-tower-unit-info.component */
      "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-unit-info/property-tower-unit-info.component.ts");

      var PropertyTowersModule = function PropertyTowersModule() {
        _classCallCheck(this, PropertyTowersModule);
      };

      PropertyTowersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_property_towers_component__WEBPACK_IMPORTED_MODULE_8__["PropertyTowersComponent"], _property_tower_info_property_tower_info_component__WEBPACK_IMPORTED_MODULE_9__["PropertyTowerInfoComponent"], _property_tower_unit_info_property_tower_unit_info_component__WEBPACK_IMPORTED_MODULE_10__["PropertyTowerUnitInfoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CondoCardModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_7__["SelectModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_property_towers_routing_module__WEBPACK_IMPORTED_MODULE_4__["routes"]), _property_towers_routing_module__WEBPACK_IMPORTED_MODULE_4__["PropertyTowersRoutingModule"]],
        bootstrap: [_property_towers_component__WEBPACK_IMPORTED_MODULE_8__["PropertyTowersComponent"]]
      })], PropertyTowersModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-ams-my-property-property-configuration-property-towers-property-towers-module-es5.js.map