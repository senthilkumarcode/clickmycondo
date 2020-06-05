function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-property-my-property-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-alerts/property-alerts-info/property-alerts-info.component.html":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-alerts/property-alerts-info/property-alerts-info.component.html ***!
    \***********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyAlertsPropertyAlertsInfoPropertyAlertsInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-alerts-info-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded && !isNoItemsAvailable\">\n\t\t<div class=\"alerts-info-box\">\n\t\t\t<ng-container *ngFor=\"let alert of alerts; let i = index\">\n\t\t\t\t<div class=\"alert-box\">\n\t\t\t\t\t<div class=\"date\">\n\t\t\t\t\t\t<h6>{{getDate(alert.date1)}}</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<h5>{{alert.assetName}}</h5>\n\t\t\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">Model No - {{alert.modelNo}}</li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">Location - {{alert.assetLocation}}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\t\t</div>\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isDataLoaded && isNoItemsAvailable\">\n\t\t<div class=\"alerts-info-box\">\n\t\t\t<div class=\"alert-box\">\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<h6>No Records Found</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-alerts/property-alerts.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-alerts/property-alerts.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyAlertsPropertyAlertsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-alerts-wrapper\">\n\t\n\t<h4 class=\"main-title-mini float-left mb-3\">Overview</h4>\n\n\t<div class=\"relative-card blue no-border float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t<span class=\"d-inline-block\">Customize Overview</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\n\t<div class=\"carousel-box clear\">\n\t\t\n\t\t<owl-carousel-o [options]=\"customOptions\">\n\t\t\t<ng-container *ngFor=\"let item of alertTypes; let i = index\">\n\t    \t\t<ng-template carouselSlide>\n\t    \t\t\t<div class=\"card\">\n\t    \t\t\t\t<div class=\"card-body\">\n\t    \t\t\t\t\t<h3>{{item.assetCount}}</h3>\n\t    \t\t\t\t\t<h5>{{item.label}}</h5>\n\t    \t\t\t\t</div>\n\t    \t\t\t</div>\n\t    \t\t</ng-template>  \n\t    \t</ng-container> \n\t    \t\t<ng-template carouselSlide>\n\t    \t\t\t<div class=\"card\">\n\t    \t\t\t\t<div class=\"card-body\">\n\t    \t\t\t\t\t<h3>0</h3>\n\t    \t\t\t\t\t<h5>Task to Complete</h5>\n\t    \t\t\t\t</div>\n\t    \t\t\t</div>\n\t    \t\t</ng-template>\n\t    \t\t<ng-template carouselSlide>\n\t    \t\t\t<div class=\"card\">\n\t    \t\t\t\t<div class=\"card-body\">\n\t    \t\t\t\t\t<h3>0</h3>\n\t    \t\t\t\t\t<h5>Certificate in 7 Days</h5>\n\t    \t\t\t\t</div>\n\t    \t\t\t</div>\n\t    \t\t</ng-template> \n  \t\t</owl-carousel-o>\n\n\t</div>\n\n    <div class=\"alerts-tabs-box mt-5\">\n    \t<h4 class=\"main-title-mini float-left \">Asset Details</h4>\n    \t<div class=\"card clear mt-30\">\n\t\t\t<div class=\"card-body border-bottom p-0\">\n\t\t\t\t<nav class=\"nav nav-pills\" id=\"alerts-wrapper\">\n\t\t\t\t\t<ul class=\"tabs mr-auto\" id=\"alerts-tabs\">\n\t\t\t\t\t\t<li *ngFor=\"let item of alertTypes; let i = index\">\n\t\t\t\t\t\t\t<a class=\"nav-item nav-link\" href=\"javascript:void(0)\" (click)=\"getAssetType(i, item)\" [ngClass]=\"isTabActive(i)\">{{item.label}}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a class=\"nav-item nav-link\" href=\"javascript:void(0)\" (click)=\"getAssetType('task','nill')\" [ngClass]=\"isTabActive('task')\">Task to Complete</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a class=\"nav-item nav-link\" href=\"javascript:void(0)\" (click)=\"getAssetType('cert','nill')\" [ngClass]=\"isTabActive('cert')\">Certificate in 7 Days</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"buttons ml-auto\">\n\t\t\t\t\t\t<a class=\"nav-item nav-link prev\" (click)=\"moveTabLeft()\"href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"nav-item nav-link next\" (click)=\"moveTabRight()\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<app-property-alerts-info [alertData]=\"alertData\"></app-property-alerts-info>\n\t\t\t</div>\n\t\t</div>\n    </div>\n\n</div>\t";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category-info/property-asset-category-info.component.html":
  /*!**********************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category-info/property-asset-category-info.component.html ***!
    \**********************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyConfigurationPropertyAssetCategoryPropertyAssetCategoryInfoPropertyAssetCategoryInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  property-asset-category-info works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category.component.html":
  /*!************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category.component.html ***!
    \************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyConfigurationPropertyAssetCategoryPropertyAssetCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-assets-category-wrapper profile-section\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t<ng-container *ngIf=\"isDataLoaded && !isNoItemsAvailable()\">\n\t\n\t\t<h5 class=\"float-left mt-2\">Asset - {{assetCategoryName}}</h5>\n\n\t\t<ul class=\"legends list-inline\">\n\t\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Maintenance Due</li>\n\t\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Maintenance Done</li>\n\t\t</ul>\n\n\t\t<div class=\"card clear\">\n\n\t\t\t<div class=\"card-body p-0\">\n\n\t\t\t\t\t<div class=\"simple-lists\">\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of assetDataList; let i = index\">\n\t\t\t\t\t\t\t<a class=\"no-hover\" href=\"javascript:void(0)\" [ngClass]=\"item.isMaitenance ? 'due' : 'done'\">\n\t\t\t\t\t\t\t\t<h6 class=\"mb-3\">{{item.subCategoryName}}</h6>\n\t\t\t\t\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"grey\">Total Items</span>\n\t\t\t\t\t\t\t\t\t\t<span>{{item.totalNos | notAvailNum}}</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"grey\">Maintenance in 30 days</span>\n\t\t\t\t\t\t\t\t\t\t<span>{{item.maintIn30days | notAvailNum}}</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"grey\">Maintenance in 20 days</span>\n\t\t\t\t\t\t\t\t\t\t<span>{{item.maintIn20days | notAvailNum}}</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"grey\">Maintenance in 10 days</span>\n\t\t\t\t\t\t\t\t\t\t<span>{{item.maintIn10days | notAvailNum}}</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isDataLoaded && isNoItemsAvailable()\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h5 class=\"float-left mt-2\">No Records Found</h5>\n\t\t\t</div>\n\t\t</div>\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-configuration.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-configuration.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyConfigurationPropertyConfigurationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n<ng-container *ngIf=\"isDataLoaded\">\n\t<div class=\"property-configuration-wrapper\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<nav class=\"nav nav-pills\" id=\"property-wrapper\">\n\t\t\t\t\t<ul class=\"tabs mr-auto\" id=\"property-tabs\">\n\t\t\t\t\t\t<li><a class=\"nav-item nav-link\" href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"profile\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">Property Profile</a></li>\n\t\t\t\t\t\t<li><a class=\"nav-item nav-link\" href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"details\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">Property Details</a></li>\n\t\t\t\t\t\t<li><a class=\"nav-item nav-link\" href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"facility\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">Unit Facility Details</a></li>\n\t\t\t\t\t\t<li><a class=\"nav-item nav-link\" href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"parking\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">Parking Details</a></li>\n\t\t\t\t\t\t<li *ngFor=\"let asset of assetCategoriesData\"><a class=\"nav-item nav-link\" href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"asset/{{asset.lookupValueId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">{{asset.lookupValueName}}</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"buttons ml-auto\">\n\t\t\t\t\t\t<a class=\"nav-item nav-link prev\" (click)=\"moveTabLeft()\"href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"nav-item nav-link next\" (click)=\"moveTabRight()\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"d-block mt-5\">\n\t\t\t<div class=\"pt-2\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-details/property-details.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-details/property-details.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyConfigurationPropertyDetailsPropertyDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-details-wrapper profile-section\">\n\t\n\t<h4 class=\"main-title-mini float-left\">Towers</h4>\n\n\t<div class=\"card clear\" id=\"propertyDetailsAccordion\">\n\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t\n\t\t\t\t\t<ng-container  *ngFor=\"let tower of propertyTowerData; let i = index; first as isFirst\">\n\t\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" attr.data-target=\"#towerDetail{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"towerDetail{{i}}\">\n\t\t\t\t\t\t\t<span>{{tower.apartmentBlockNumber}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<div id=\"towerDetail{{i}}\" class=\"collapse\" [ngClass]=\"isFirst ? 'show': ''\" attr.aria-labelledby=\"towerDetail{{i}}\" data-parent=\"#propertyDetailsAccordion\">\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t<app-property-tower-info [tower]=\"tower\"></app-property-tower-info>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</ul>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-info.component.html":
  /*!*********************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-info.component.html ***!
    \*********************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyConfigurationPropertyDetailsPropertyTowerInfoPropertyTowerInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-tower-wrapper\">\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"!isEdit\">\n\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<ng-container *ngIf=\"!isEdit\">\n\n\t\t<form #propertyDetailsForm = \"ngForm\" name=\"propertyDetailsForm\" novalidate>\n\t\t\t\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Construction Area SQ.M</label>\n\t\t\t                <p>{{tower.blockConstructedArea | notAvail}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Common Area SQ.M</label>\n\t\t\t                <p>{{tower.blockCommonArea | notAvail}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Units under construction</label>\n\t\t\t                <p>{{tower.unitsUnderConstruction | notAvail}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Total Units</label>\n\t\t\t                <p>{{totalItems}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isEdit\">\n\t\t\n\t\t<form #propertyDetailsForm = \"ngForm\" name=\"propertyDetailsForm\" novalidate (ngSubmit)=\"submitPropertyDetailsForm(propertyDetailsForm)\">\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Construction Area SQ.M</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"blockConstructedArea\" [(ngModel)]=\"tower.unitsUnderConstruction\">\n\t        \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Common Area SQ.M</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"blockCommonArea\" [(ngModel)]=\"tower.blockCommonArea\">\n\t        \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Units under construction SQ.M</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"constructionInProgress\" [(ngModel)]=\"tower.blockConstructedArea\">\n\t        \t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"propertyDetailsForm.invalid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"!isEdit && isTowersLoaded\">\n\t\t\n\t\t<div id=\"propertyUnitDetailsAccordion\">\n\t\t\t\n\t\t\t<h4 class=\"main-title-mini float-left mb-3\">Units</h4>\n\n\t\t\t<ul class=\"list-group tabs clear border\">\n\t\t\t\n\t\t\t\t<ng-container  *ngFor=\"let unit of towerUnitData | slice:ItemStartIndex:ItemEndIndex; let i = index; first as isFirst\">\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" attr.data-target=\"#unitDetail{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"unitDetail{{i}}\">\n\t\t\t\t\t\t<span>{{unit.apartmentBlockUnitNumber}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<div id=\"unitDetail{{i}}\" class=\"collapse\" [ngClass]=\"isFirst ? 'show': ''\" attr.aria-labelledby=\"unitDetail{{i}}\" data-parent=\"#propertyUnitDetailsAccordion\">\n\t\t\t\t\t\t<div class=\"details\">\n\n\t\t\t\t\t\t\t<app-property-tower-unit-info [unit]=\"unit\" [tower]=\"tower\"></app-property-tower-unit-info>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-container>\n\n\t\t\t</ul>\n\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-unit-info/property-tower-unit-info.component.html":
  /*!***************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-unit-info/property-tower-unit-info.component.html ***!
    \***************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyConfigurationPropertyDetailsPropertyTowerInfoPropertyTowerUnitInfoPropertyTowerUnitInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-tower-unit-wrapper\">\n\t\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"!isEdit\">\n\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<ng-container *ngIf=\"!isEdit\">\n\n\t\t<form #propertyUnitDetailsForm = \"ngForm\" name=\"propertyUnitDetailsForm\" novalidate>\n\t\t\t\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Bulit Area SQ.M</label>\n\t\t                    <p>{{unit.builtupArea | notAvail}}</p>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Unit Construction Area SQ.M</label>\n\t\t                    <p>{{unit.unitConstructionArea | notAvail}}</p>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Unit Type</label>\n\t\t                    <p>{{unit.unitType | notAvail}}</p>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Units Sold</label>\n\t\t\t                <p>{{getBooleanStatus(unit.isSold)}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Units Vacant</label>\n\t\t\t                <p>{{getBooleanStatus(unit.isVacant)}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Pets Allowed</label>\n\t\t\t                <p>{{getBooleanStatus(unit.isPetsAllowed)}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Furnished</label>\n\t\t\t                <p>{{getBooleanStatus(unit.isFurnished)}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isEdit\">\n\t\t\n\t\t<form #propertyUnitDetailsForm = \"ngForm\" name=\"propertyUnitDetailsForm\" novalidate (ngSubmit)=\"submitPropertyUnitDetailsForm(propertyDetailsForm)\">\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Bulit Area SQ.M</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"builtupArea\" [(ngModel)]=\"unit.builtupArea\">\n\t        \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Unit Construction Area SQ.M</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"unitConstructionArea\" [(ngModel)]=\"unit.unitConstructionArea\">\n\t        \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                    <label>Unit Type*</label>\n\t                    <select \n\t\t\t\t\t        name=\"unitType\" \n\t\t\t\t\t        id=\"unitType\" \n\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t        [(ngModel)]=\"unitTypeId\" required>\n\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t        <option *ngFor=\"let item of unitTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t    </select>\n\t        \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" #unitSold class=\"form-check-input\" id=\"unitSlod\" name=\"unitSold\" [(ngModel)]=\"unit.isSold\">\n\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"unitSlod\">Is Sold</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" #unitVacant class=\"form-check-input\" id=\"unitVacant\" name=\"unitVacant\" [(ngModel)]=\"unit.isVacant\">\n\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"unitVacant\">Is Vacant</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" #petsAllowed class=\"form-check-input\" id=\"petsAllowed\" name=\"petsAllowed\" [(ngModel)]=\"unit.isPetsAllowed\">\n\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"petsAllowed\">Is Pets Allowed</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" #furnished class=\"form-check-input\" id=\"petsAllowed\" name=\"furnished\" [(ngModel)]=\"unit.isFurnished\">\n\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"furnished\">Is Furnished</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"propertyUnitDetailsForm.invalid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-facility/property-facility.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-facility/property-facility.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyConfigurationPropertyFacilityPropertyFacilityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-facility-wrapper\">\n\t\n\t<h4 class=\"main-title-mini float-left\" *ngIf=\"isDataLoaded\">Towers</h4>\n\t\t\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"list-boxes clear\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-3 column\" *ngFor=\"let tower of propertyTowerData; let i = index; first as isFirst\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"mb-0\">{{tower.apartmentBlockNumber}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<ng-container  *ngFor=\"let facility of facilityData; let i = index\">\n\t\t\t\t\t\t\t<li *ngIf=\"tower.apartmentBlockId == facility.apartmentBlockID\">\n\t\t\t\t\t\t\t\t<div class=\"title\"><span class=\"dots small mr-2\" [ngClass]=\"facility.class\"></span> {{facility.facilityTypeName}}</div>\n\t\t\t\t\t\t\t\t<div>{{facility.cnt}}</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component.html":
  /*!******************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component.html ***!
    \******************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyConfigurationPropertyFacilityPropertyTowerFacilityPropertyTowerFacilityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-tower-facility-wrapper\">\n\t\n\t\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details-info/property-parking-details-info.component.html":
  /*!*************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details-info/property-parking-details-info.component.html ***!
    \*************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyConfigurationPropertyParkingDetailsPropertyParkingDetailsInfoPropertyParkingDetailsInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-parking-details-info\">\n\t\n\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t<thead>\n\t\t    <tr>\n\t\t      <th scope=\"col\" (click)=\"sortUnitData('assetTagNo')\">Type <span [ngClass]=\"getFieldOrderBy('assetTagNo')\"></span></th>\n\t\t      <th scope=\"col\" (click)=\"sortUnitData('assetTagNo')\">Car <span [ngClass]=\"getFieldOrderBy('assetTagNo')\"></span></th>\n\t\t      <th scope=\"col\" (click)=\"sortUnitData('assetName')\">2 Wheeler <span [ngClass]=\"getFieldOrderBy('assetName')\"></span></th>\n\t\t      <th scope=\"col\" (click)=\"sortUnitData('assetCategoryName')\">Vacent <span [ngClass]=\"getFieldOrderBy('assetCategoryName')\"></span></th>\n\t\t      <th scope=\"col\" (click)=\"sortUnitData('vendorName')\">Ready to rent <span [ngClass]=\"getFieldOrderBy('vendorName')\"></span></th>\n\t\t      <th scope=\"col\" (click)=\"sortUnitData('Condition')\">Available for sale <span [ngClass]=\"getFieldOrderBy('Condition')\"></span></th>\n\t\t    </tr>\n\t    </thead>\n\t    <tbody>\n\t\t    <tr *ngFor=\"let parking of slotDataList | sort : unitFieldType: unitOrder; let i = index\">\n\t\t      <td class=\"name\">{{parking.lookupValueName}}</td>\n\t\t      <td class=\"grey\">{{parking.assetName}}</td>\n\t\t      <td class=\"grey text-capitalize\"></td>\n\t\t      <td class=\"grey text-capitalize\"></td>\n\t\t      <td class=\"grey text-capitalize\"></td>\n\t\t      <td class=\"grey text-capitalize\"></td>\n\t\t    </tr>\n\t    </tbody>\n\t</table>\n\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t<p class=\"snippet\">No Records Found</p>\n\t</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details.component.html":
  /*!**************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details.component.html ***!
    \**************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyConfigurationPropertyParkingDetailsPropertyParkingDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-parking-details-wrapper profile-section\">\n\t\n\t<h4 class=\"main-title-mini float-left\" *ngIf=\"isDataLoaded\">Towers</h4>\n\n\t<div class=\"card clear\" id=\"propertyDetailsAccordion\">\n\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t\n\t\t\t\t\t<ng-container  *ngFor=\"let tower of propertyTowerData; let i = index; first as isFirst\">\n\t\t\t\t\t\t<li class=\"list-group-item\" [ngClass]=\"isFirst ? '': 'collapsed'\" data-toggle=\"collapse\" attr.data-target=\"#towerDetail{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"towerDetail{{i}}\">\n\t\t\t\t\t\t\t<span>{{tower.apartmentBlockNumber}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<div id=\"towerDetail{{i}}\" class=\"collapse\" [ngClass]=\"isFirst ? 'show': ''\" attr.aria-labelledby=\"towerDetail{{i}}\" data-parent=\"#propertyDetailsAccordion\">\n\t\t\t\t\t\t\t<div class=\"details p-0 border-bottom\">\n\t\t\t\t\t\t\t\t<app-property-parking-details-info></app-property-parking-details-info>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</ul>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-profile/property-profile.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-profile/property-profile.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyConfigurationPropertyProfilePropertyProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-profile-wrapper profile-section\">\n\t\n\t<div class=\"card\">\n\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"!isEdit\">\n\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"float-left property-info\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <div class=\"profile-icon\">\n\t\t\t\t\t  \t<img class=\"img-fluid\" src=\"https://picsum.photos/id/1076/300/200\" id=\"propertyProfile\">\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t    <h5 class=\"mt-0\">{{property.apartmentName}}</h5>\n\t\t\t\t\t    <p>{{towersLength}} Towers and {{unitsLength}} Community Units</p>\n\t\t\t\t\t    <ul class=\"other list-inline d-none d-md-block\">\n\t\t\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t\t\t    \t\t<i-feather class=\"icon mail\" name=\"mail\"></i-feather>\n\t\t\t\t\t    \t\t<span>{{property.emailId}}</span>\n\t\t\t\t\t    \t</li>\n\t\t\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t\t\t    \t\t<i-feather class=\"icon phone\" name=\"phone\"></i-feather>\n\t\t\t\t\t    \t\t<span>{{property.phoneNumber}}</span>\n\t\t\t\t\t    \t</li>\n\t\t\t\t\t    </ul>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<ul class=\"other list-inline d-block d-md-none\">\n\t\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t\t    \t\t<i-feather class=\"icon\" name=\"mail\"></i-feather>\n\t\t\t\t    \t\t<span>{{property.emailId}}</span>\n\t\t\t\t    \t</li>\n\t\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t\t    \t\t<i-feather class=\"icon phone\" name=\"phone\"></i-feather>\n\t\t\t\t    \t\t<span>{{property.phoneNumber}}</span>\n\t\t\t\t    \t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<ng-container *ngIf=\"!isEdit\">\n\t\t\t\n\t\t\t\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" novalidate>\n\n\t\t\t\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Property Location</label>\n\t\t\t\t\t\t                <p>{{property.location | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Address</label>\n\t\t\t\t\t\t                <p>{{property.address1 | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Property Type</label>\n\t\t\t\t\t\t                <p>{{getPropertyType(property.propertyTypeId) | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Category</label>\n\t\t\t\t\t\t                <p>{{getPropertyCategory(property.propertyCategoryId) | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Construction Start Date</label>\n\t\t\t\t\t\t                <p>{{getDate(property.constructionStartDate)}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Construction End Date</label>\n\t\t\t\t\t\t                <p>{{getDate(property.constructionEndDate)}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Common Area SQ.M</label>\n\t\t\t\t\t\t                <p>{{property.commonSqMt | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Total SQ.M</label>\n\t\t\t\t\t\t                <p>{{property.totalSqMt | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"isEdit\">\n\t\t\t\t\t\n\t\t\t\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" novalidate (ngSubmit)=\"submitProfileBasicForm(profileBasicForm)\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Property Location*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"location\" [(ngModel)]=\"property.location\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Address*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"address\" [(ngModel)]=\"property.address1\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Phone/Mobile*</label>\n\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"phoneNo\" [(ngModel)]=\"property.phoneNumber\">\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Email*</label>\n\t\t\t\t                    <input type=\"email\" class=\"form-control\" placeholder=\"Enter value\" name=\"email\" [(ngModel)]=\"property.emailId\" required>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>Property Type*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"propertyTypeId\" \n\t\t\t\t\t\t\t\t        id=\"propertyTypeId\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"property.propertyTypeId\">\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of propertyTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>Property Category*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"propertyCategoryId\" \n\t\t\t\t\t\t\t\t        id=\"propertyCategoryId\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"property.propertyCategoryId\">\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of propertyCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Construction Start Date</label>\n\t\t\t\t                    <input class=\"form-control\" name=\"constructionStartDate\" [owlDateTime]=\"constructionStartDate\" [owlDateTimeTrigger]=\"constructionStartDate\" placeholder=\"Date\" [(ngModel)]=\"property.constructionStartDate\">\n\t\t\t\t\t\t\t\t\t<owl-date-time #constructionStartDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"constructionStartDate\">\n\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Construction End Date</label>\n\t\t\t\t                    <input class=\"form-control\" name=\"constructionEndDate\" [owlDateTime]=\"constructionEndDate\" [owlDateTimeTrigger]=\"constructionEndDate\" placeholder=\"Date\" [(ngModel)]=\"property.constructionEndDate\">\n\t\t\t\t\t\t\t\t\t<owl-date-time #constructionEndDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"constructionEndDate\">\n\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Common Area SQ.M</label>\n\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"commonsqmt\" [(ngModel)]=\"property.commonSqMt\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Total SQ.M</label>\n\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"totalsqmt\" [(ngModel)]=\"property.totalSqMt\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\">\n\t\t\t\t\t\t\t\t    <input class=\"form-control\"  #uploader type=\"file\"\n\t\t\t\t\t\t\t\t     [(ngModel)]=\"property.file\" (change)=\"uploadFile($event)\" multiple>\n\t\t\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Upload Image</label>\n\t\t\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isFileAdded\">\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfFiles; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t            \t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"profileBasicForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-tower-details/property-tower-details.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-tower-details/property-tower-details.component.html ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyViewPropertyTowerDetailsPropertyTowerDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" >\n    <div class=\"card-header\">\n    <div class=\"row\">\n     <div class=\"col-sm-6 text-center\">\n        <h5>{{towerDetails.apartmentBlockNumber}} - Tower Details</h5>\n     </div>\n     <div class=\"col-sm-2\">\n        <select \n            name=\"filtertype\" \n            id=\"filtertype\" \n            class=\"form-control\"\n            [(ngModel)]=\"selectedFilterType\" (ngModelChange)=\"loadFilterBased($event)\">\n            <option *ngFor=\"let item of ddlfilterType\" [value]=\"item.TypeId\">{{ item.TypeName }}</option>\n        </select>\n     </div>\n     <div class=\"col-sm-2\">\n        <select \n            name=\"filtertype\" \n            id=\"filtertype\" \n            class=\"form-control\" (ngModelChange)=\"getFilterBasedData($event)\"\n            [(ngModel)]=\"selectedFilterBasedType\">\n            <option *ngFor=\"let item of ddlfilterBased\" [value]=\"item.BasedTypeId\">{{ item.TypeName }}</option>\n        </select>\n     </div>\n     <div class=\"col-sm-2\">\n        <button class=\"btn lime-green\" (click)=\"Goback()\" style=\"float: right;\" >\n            <span>Go Back</span>\n        </button>\n     </div>\n    </div>\n    </div>\n    <div class=\"card-body\">\n    <ng-container>\n    <form #propertyDetailsForm = \"ngForm\" name=\"propertyDetailsForm\" novalidate>\n        <div class=\"data-wrapper\">\n\t\t\t\t\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"input-box\">\n                        <label>Construction Area SQ.M</label>\n                        <p>{{towerDetails.blockConstructedArea | notAvail}}</p>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"input-box\">\n                        <label>Common Area SQ.M</label>\n                        <p>{{towerDetails.blockCommonArea | notAvail}}</p>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"input-box\">\n                        <label>Units under construction</label>\n                        <p>{{towerDetails.unitsUnderConstruction | notAvail}}</p>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"input-box\">\n                        <label>Total Units</label>\n                        <p>{{totalItems}}</p>\n                    </div>\n                </div>\n            </div>\n<hr/>\n       \n        <div class=\"text-center\">\n            <label>Units</label>\n        </div>\n        <div class=\"text-center\">\n            <div *ngIf=\"IsAllUnitStatus\">\n                <span class=\"dot\" style=\"background-color: seagreen;\"></span><label style=\"padding-bottom: 5px;\">Available</label>\n                <span class=\"dot\" style=\"background-color: red;\"></span><label style=\"padding-bottom: 15px;\">Occupied</label>\n                <span class=\"dot\" style=\"background-color: orange;\"></span><label style=\"padding-bottom: 15px;\">Construction</label>\n            </div>\n            <div *ngIf=\"IsAllResidentType\">\n                <span class=\"dot\" style=\"background-color: seagreen;\"></span><label style=\"padding-bottom: 5px;\">Owner</label>\n                <span class=\"dot\" style=\"background-color: red;\"></span><label style=\"padding-bottom: 15px;\">Tenant</label>\n            </div>\n            <div *ngIf=\"IsAllResidentCategory\">\n                <span class=\"dot\" style=\"background-color: seagreen;\"></span><label style=\"padding-bottom: 5px;\">1BHK</label>\n                <span class=\"dot\" style=\"background-color: red;\"></span><label style=\"padding-bottom: 15px;\">2BHK</label>\n                <span class=\"dot\" style=\"background-color: orange;\"></span><label style=\"padding-bottom: 15px;\">3BHK</label>\n                <span class=\"dot\" style=\"background-color: violet\"></span><label style=\"padding-bottom: 15px;\">Pent House</label>\n            </div>\n            <div *ngIf=\"IsAllResidentVehicles\">\n                <span class=\"dot\" style=\"background-color: seagreen;\"></span><label style=\"padding-bottom: 5px;\">Vehicle</label>\n                <span class=\"dot\" style=\"background-color: red;\"></span><label style=\"padding-bottom: 15px;\">No Vehicle</label>\n            </div>\n            <div *ngIf=\"IsAllParkingSlots\">\n                <span class=\"dot\" style=\"background-color: seagreen;\"></span><label style=\"padding-bottom: 5px;\">With Parking Slot</label>\n                <span class=\"dot\" style=\"background-color: red;\"></span><label style=\"padding-bottom: 15px;\">Without Parking Slot</label>\n            </div>\n            <div *ngIf=\"IsAllPets\">\n                <span class=\"dot\" style=\"background-color: seagreen;\"></span><label style=\"padding-bottom: 5px;\">Pets</label>\n                <span class=\"dot\" style=\"background-color: red;\"></span><label style=\"padding-bottom: 15px;\">No Pets</label>\n            </div>\n        </div>\n        <hr/>\n       \n     \n        <div >\n            <p>{{ unitSampleData | json }}</p> \n            <div #tooltip class=\"tooltip\"></div>\n           <li class=\"list-inline-item\" *ngFor=\"let units of towerUnitData\">\n            <div >\n                <!-- <div class=\"card\" >\n                    <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Unit No</label>\n                                        <p #unitNoToolTip></p>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-8\">\n                                    <div class=\"input-box\">\n                                        <label>Unit Type</label>\n                                        <p #unitTypeToolTip></p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"input-box\">\n                                        <label>Advance</label>\n                                        <p #advanceAmtToolTip></p>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"input-box\">\n                                        <label>Rent</label>\n                                        <p #rentAmtToolTip></p>\n                                    </div>\n                                </div>\n                            </div>\n                    </div>\n                </div> -->\n          </div>\n                <svg width=\"6px\" height=\"6px\"  > \n                    <g>\n                        <circle cx=\"3\" cy=\"3\"  r=\"6\"  fill=\"orange\"\n                        style=\"opacity: 1px;\" (mouseenter)=\"showTooltip($event, 'This is blue');\" \n                        (mouseleave)=\"hideTooltip();\" (click)=\"ShowUnits(units)\" \n                        > </circle>\n                     </g>\n                </svg>\n            </li> \n           \n            <!-- <li class=\"list-inline-item\" *ngFor=\"let units of towerUnitData\">\n                <ng-template #UnitPopup>\n                    <div class=\"card\" >\n                        <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Unit No</label>\n                                            <p>{{units.apartmentBlockUnitNumber | notAvail}}</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-8\">\n                                        <div class=\"input-box\">\n                                            <label>Unit Type</label>\n                                            <p>{{units.unitType | notAvail}}</p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"input-box\">\n                                            <label>Advance</label>\n                                            <p>{{units.advanceAmount | notAvail}}</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"input-box\">\n                                            <label>Rent</label>\n                                            <p>{{units.rentAmount | notAvail}}</p>\n                                        </div>\n                                    </div>\n                                </div>\n                        </div>\n                    </div>\n                  </ng-template>\n                <a [ngbTooltip]=\"UnitPopup\" placement=\"top\"  (click)=\"ShowUnits(units)\">{{units.apartmentBlockUnitNumber}}</a>\n            </li> -->\n        </div>\n    </div>\n    </form>\n   </ng-container>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-tower-list/property-tower-list.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-tower-list/property-tower-list.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyViewPropertyTowerListPropertyTowerListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" >\n<div class=\"card-header new text-center\">\n        <h5>Tower List View</h5>\n</div>\n<div class=\"card-body new text-center\">\n    <li class=\"list-inline-item\" *ngFor=\"let item of propertyTowerData\">\n        <div class=\"card\" >\n            <div class=\"card-header new text-center\">\n                <h5>{{item.apartmentBlockNumber}}</h5>\n            </div>\n\n            <div class=\"card-body new text-center\">\n                <button (click)=\"GetDetails(item)\">\n                    <img src=\"assets/images/apartment2-icon.svg\" width=\"120\" height=\"150\" >\n                </button>\n            </div>\n            <div class=\"card-footer\">\n                <h5>Total Floors: 10</h5>\n                <h5>Total Units: 100</h5>\n            </div>\n        </div>\n    </li>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-view-graphic/property-view-graphic.component.html":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-view-graphic/property-view-graphic.component.html ***!
    \***********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyViewPropertyViewGraphicPropertyViewGraphicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>property-view-graphic works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-view-grid/property-view-grid.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-view-grid/property-view-grid.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyViewPropertyViewGridPropertyViewGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"property-grid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <mat-card>\n                <h4 class=\"property-grid-head\">Towers</h4>\n                <mat-card>\n                    <owl-carousel-o [options]=\"customOptions\">\n                        <ng-container *ngFor=\"let tower of towerList; let i = index\" style=\"position:relative;\">\n                            <ng-template carouselSlide>\n                                <div class=\"towerDetail d-flex align-items-center justify-content-center flex-column\"\n                                    (click)=\"selectedTower(tower.apartmentBlockId,tower.description)\">\n                                    <svg version=\"1.1\" class=\"fill-property-svg\" [style.fill]=\"selectedBlockId == tower.apartmentBlockId ? '#000c93': ''\" width=\"60%\" height=\"60%\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 291.958 291.958\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 291.958 291.958\">\n                                        <g>\n                                          <path d=\"m215.56,18.25h-13.082v-12.25c0-3.314-2.686-6-6-6h-101c-3.314,0-6,2.686-6,6v12.25h-13.081c-3.313,0-6,2.687-6,6v261.708c0,3.313 2.687,6 6,6h54.217 30.729 54.217c3.313,0 6-2.687 6-6v-261.708c0-3.313-2.686-6-6-6zm-60.216,261.708h-18.729v-41.278h18.729v41.278zm54.216,0h-42.217v-47.278c0-3.313-2.687-6-6-6h-30.729c-3.313,0-6,2.687-6,6v47.278h-42.217v-249.708h127.163v249.708zm-19.081-267.958v6.25h-89v-6.25h89z\"/>\n                                          <path d=\"m110.237,58.409c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m134.065,58.409c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m157.893,58.409c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m181.721,58.409c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m110.237,88.051c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m134.065,88.051c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m157.893,88.051c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m181.721,88.051c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m110.237,117.693c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m134.065,117.693c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m157.893,117.693c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m181.721,117.693c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m110.237,147.335c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.313-2.687-6-6-6z\"/>\n                                          <path d=\"m134.065,147.335c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.313-2.687-6-6-6z\"/>\n                                          <path d=\"m157.893,147.335c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.313-2.687-6-6-6z\"/>\n                                          <path d=\"m181.721,147.335c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.313-2.687-6-6-6z\"/>\n                                          <path d=\"m110.237,176.978c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m134.065,176.978c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m157.893,176.978c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                          <path d=\"m181.721,176.978c-3.313,0-6,2.687-6,6v8.614c0,3.313 2.687,6 6,6s6-2.687 6-6v-8.614c0-3.314-2.687-6-6-6z\"/>\n                                        </g>\n                                      </svg>\n                                    <!-- <img class=\"fill-property-svg\" [src]=\"tower.towerModel\" alt=\"\"> -->\n                                    <label class=\"tower-name\"\n                                        [style.color]=\"selectedBlockId == tower.apartmentBlockId ? '#419fd5': '#757575ad'\">\n                                        {{tower?.description}}\n                                    </label>\n                                    <span>No of Floors<span class=\"total\"\n                                            [style.color]=\"selectedBlockId == tower.apartmentBlockId ? '#ffffff': '#383737'\"\n                                            [style.background-color]=\"selectedBlockId == tower.apartmentBlockId ? '#000c93': '#eaeaea'\">{{tower?.totalnofloors ? tower?.totalnofloors : 0 }}</span></span>\n                                    <span>No of Units<span class=\"total\"\n                                            [style.color]=\"selectedBlockId == tower.apartmentBlockId ? '#ffffff': '#383737'\"\n                                            [style.background-color]=\"selectedBlockId == tower.apartmentBlockId ? '#000c93': '#eaeaea'\">{{tower?.totalNounits ? tower?.totalNounits : 0}}</span></span>\n                                </div>\n                            </ng-template>\n                        </ng-container>\n                    </owl-carousel-o>\n                </mat-card>\n                <mat-card class=\"property-filter mt-12\"   >\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                            <h6> <img src=\"../../../../../../assets/images/office-block.svg\" alt=\"\"> Tower A Details\n                            </h6>\n                        </div>\n                        <!-- <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 peoprty-actions\">\n                           \n                        </div> -->\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\n                            <label class=\"mt-12\">Filter</label>\n                            <div class=\"form-group d-flex justify-content-between\">\n                                <select class=\"form-control w-75\" name=\"category\" [(ngModel)]=\"selectedFilter\">\n                                    <option value=\"\">Select</option>\n                                    <option *ngFor=\"let item of filterCategory\" [value]=\"item.id\">{{item.name}}\n                                    </option>\n                                </select>\n                                <!-- <button mat-stroked-button>Apply</button> -->\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-wrap\" >\n                            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 filtered\" *ngFor=\"let item of filterList\">\n                                <div class=\"legend\" [style.background-color]=\"item.color\"></div>\n                                <span ngbTooltip=\"{{item?.name}}\">{{item?.name}}</span>\n                                <div class=\"total-count\">{{item?.count}}</div>\n                            </div>\n                        </div>\n                        <div\n                            class=\"col-lg-1 col-md-1 col-sm-12 col-xs-12 peoprty-actions flex-column align-items-center\">\n                            <img src=\"../../../../../../assets/images/refresh-ccw.svg\" alt=\"\">\n                            <img (click)=\"zoomIn()\" src=\"../../../../../../assets/images/plus.svg\" alt=\"\">\n                            <img (click)=\"zoomOut()\" src=\"../../../../../../assets/images/minus.svg\" alt=\"\">\n                            <img (click)=\"downloadPdf()\" class=\"mt-12\" src=\"../../../../../../assets/images/download.svg\" alt=\"\">\n                        </div>\n                    </div>\n                </mat-card>\n                <!-- <pinch-zoom #scene=\"pinchZoom\"  *ngIf=\"floorData.length\"> -->\n                    <div class=\"property-view mt-12\"  *ngIf=\"floorData.length\" [style.transform]=\"scaleIndex\"  id=\"property-view\"  >\n                        <div class=\"row\">\n                            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                                <div class=\"property-view-head\">\n                                    <label>Floors</label>\n                                    <label>Individual Units</label>\n                                </div>\n                                <div class=\"property-view-content\" *ngFor=\"let floor of floorData\">\n                                    <div>\n                                        <span class=\"property-floors\" [ngbTooltip]=\"floorInfo\" container=\"body\" tooltipClass=\"floorDetails\">{{floor?.floorLabel}}</span>\n                                    </div>\n                                    <div>\n                                        <ng-template #floorInfo>\n                                            <div>\n                                                <span>Floor Name</span>\n                                                <span>{{floor?.floorLabel}}</span>\n                                            </div>\n                                        </ng-template>\n                                        <span class=\"property-units\" *ngFor=\"let unit of floor.blockUnits;let i=index\"\n                                            [style.background-color]=\"selectedFilter != '' ? getSelectedUnits(selectedFilter,unit) : '#eaeaea' \"\n                                            [ngbTooltip]=\"unitInfo\" container=\"body\" tooltipClass=\"floorDetails\" >{{unit.apartmentBlockUnitNumber}}\n                                            <ng-template #unitInfo>\n                                                <div>\n                                                    <span>Unit</span>\n                                                    <span>{{unit?.apartmentBlockUnitNumber}}</span>\n                                                </div>\n                                                <div>\n                                                    <span>Primary Contact</span>\n                                                    <span>--</span>\n                                                </div>\n                                                <div>\n                                                    <span>Role</span>\n                                                    <span>--</span>\n                                                </div>\n                                                <div>\n                                                    <span>Phone Number</span>\n                                                    <span>{{unit?.intercom}}</span>\n                                                </div>\n                                            </ng-template>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                <!-- </pinch-zoom> -->\n                <div class=\"property-view mt-12\" *ngIf=\"!floorData.length\" >\n                    <label for=\"\">Please Add Foors and Units in Profile Settings</label>\n                </div>\n            </mat-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyComponentsPropertyViewPropertyViewMainPropertyViewMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-property-view-grid></app-property-view-grid>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/my-property.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/my-property.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMyPropertyMyPropertyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-alerts/property-alerts-info/property-alerts-info.component.scss":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-alerts/property-alerts-info/property-alerts-info.component.scss ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyAlertsPropertyAlertsInfoPropertyAlertsInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-alerts-info-wrapper .alerts-info-box .alert-box {\n  display: flex;\n  padding: 12px 0;\n}\n.property-alerts-info-wrapper .alerts-info-box .alert-box .date {\n  padding: 0 25px 0 0;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-size: 1.6rem;\n  color: #8391a1;\n}\n.property-alerts-info-wrapper .alerts-info-box .alert-box .info {\n  flex: 1;\n  border-bottom: 1px solid #eaeaea;\n  padding: 0 0 15px 0;\n}\n.property-alerts-info-wrapper .alerts-info-box .alert-box .info h5 {\n  padding: 0 0 4px 0;\n  color: #373946;\n}\n.property-alerts-info-wrapper .alerts-info-box .alert-box .info ul li {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-size: 1.4rem;\n  margin: 0 15px 0 0;\n  color: #8391a1;\n}\n.property-alerts-info-wrapper .alerts-info-box .alert-box:last-child .info {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1hbGVydHMvcHJvcGVydHktYWxlcnRzLWluZm8vcHJvcGVydHktYWxlcnRzLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWFsZXJ0cy9wcm9wZXJ0eS1hbGVydHMtaW5mby9wcm9wZXJ0eS1hbGVydHMtaW5mby5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDQyxhQUFBO0VBQ0EsZUFBQTtBQ0xIO0FETUc7RUFDQyxtQkFBQTtFRTJERiwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFJQSxpQkFBQTtFRmpFRSxjR0ZTO0FGR2I7QURDRztFQUNDLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNDLGtCQUFBO0VBQ0EsY0cwRU07QUZ4RVg7QURDSztFRTZDSCwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFJQSxpQkFBQTtFRm5ESSxrQkFBQTtFQUNBLGNHakJPO0FGdUJiO0FEREk7RUFDQyxtQkFBQTtBQ0dMIiwiZmlsZSI6InNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktYWxlcnRzL3Byb3BlcnR5LWFsZXJ0cy1pbmZvL3Byb3BlcnR5LWFsZXJ0cy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5wcm9wZXJ0eS1hbGVydHMtaW5mby13cmFwcGVyIHtcblx0LmFsZXJ0cy1pbmZvLWJveCB7XG5cdFx0LmFsZXJ0LWJveCB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0LmRhdGUge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDI1cHggMCAwO1xuXHRcdFx0XHRAaW5jbHVkZSBkZXNwLW1lZGl1bTtcblx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuXHRcdFx0XHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHR9XG5cdFx0XHQuaW5mbyB7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS00NTA7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMCAxNXB4IDA7XG5cdFx0XHRcdGg1IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgNHB4IDA7XG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHR1bCB7XG5cdFx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgZGVzcC1tZWRpdW07XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAxNXB4IDAgMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCY6bGFzdC1jaGlsZHtcblx0XHRcdFx0LmluZm8ge1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCIucHJvcGVydHktYWxlcnRzLWluZm8td3JhcHBlciAuYWxlcnRzLWluZm8tYm94IC5hbGVydC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG4ucHJvcGVydHktYWxlcnRzLWluZm8td3JhcHBlciAuYWxlcnRzLWluZm8tYm94IC5hbGVydC1ib3ggLmRhdGUge1xuICBwYWRkaW5nOiAwIDI1cHggMCAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtaW5mby13cmFwcGVyIC5hbGVydHMtaW5mby1ib3ggLmFsZXJ0LWJveCAuaW5mbyB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuICBwYWRkaW5nOiAwIDAgMTVweCAwO1xufVxuLnByb3BlcnR5LWFsZXJ0cy1pbmZvLXdyYXBwZXIgLmFsZXJ0cy1pbmZvLWJveCAuYWxlcnQtYm94IC5pbmZvIGg1IHtcbiAgcGFkZGluZzogMCAwIDRweCAwO1xuICBjb2xvcjogIzM3Mzk0Njtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtaW5mby13cmFwcGVyIC5hbGVydHMtaW5mby1ib3ggLmFsZXJ0LWJveCAuaW5mbyB1bCBsaSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgY29sb3I6ICM4MzkxYTE7XG59XG4ucHJvcGVydHktYWxlcnRzLWluZm8td3JhcHBlciAuYWxlcnRzLWluZm8tYm94IC5hbGVydC1ib3g6bGFzdC1jaGlsZCAuaW5mbyB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-alerts/property-alerts-info/property-alerts-info.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-alerts/property-alerts-info/property-alerts-info.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: PropertyAlertsInfoComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyAlertsPropertyAlertsInfoPropertyAlertsInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyAlertsInfoComponent", function () {
      return PropertyAlertsInfoComponent;
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


    var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/Asset */
    "./src/app/api/controllers/Asset.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

    var PropertyAlertsInfoComponent =
    /*#__PURE__*/
    function () {
      function PropertyAlertsInfoComponent(assetService, sharedService, cookieService) {
        _classCallCheck(this, PropertyAlertsInfoComponent);

        this.assetService = assetService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isNoItemsAvailable = false;
      }

      _createClass(PropertyAlertsInfoComponent, [{
        key: "getDate",
        value: function getDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_5__(date).format("MM-DD-YYYY");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this = this;

          if (this.alertData != undefined) {
            this.isDataLoaded = false;
            var params = {
              ApartmentId: parseInt(this.cookieService.get('apartmentId')),
              InputType: this.alertData.type,
              days: this.alertData.count
            };
            this.assetService.getAssetMasterDetail(params).subscribe(function (res) {
              if (res == undefined || res.length == 0) {
                _this.isNoItemsAvailable = true;
              } else {
                _this.alerts = res;
                _this.isNoItemsAvailable = false;
              }

              _this.isDataLoaded = true;
            }, function (error) {
              _this.isDataLoaded = true;
              _this.isNoItemsAvailable = true;
            });
          }
        }
      }]);

      return PropertyAlertsInfoComponent;
    }();

    PropertyAlertsInfoComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_2__["AssetService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PropertyAlertsInfoComponent.prototype, "alertData", void 0);
    PropertyAlertsInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-alerts-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-alerts-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-alerts/property-alerts-info/property-alerts-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-alerts-info.component.scss */
      "./src/app/ams/my-property/components/property-alerts/property-alerts-info/property-alerts-info.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_2__["AssetService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], PropertyAlertsInfoComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-alerts/property-alerts.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-alerts/property-alerts.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyAlertsPropertyAlertsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-alerts-wrapper .carousel-box .card {\n  min-height: 125px;\n}\n.property-alerts-wrapper .carousel-box .card .card-body {\n  text-align: center;\n}\n.property-alerts-wrapper .carousel-box .card .card-body h3 {\n  margin: 0 0 10px 0;\n  font-size: 3.2rem;\n  color: #373946;\n}\n.property-alerts-wrapper .carousel-box .card .card-body h5 {\n  font-size: 1.6rem;\n  color: #8391a1;\n  width: 80%;\n  margin: auto;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills {\n  height: 45px;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  min-width: 3000px;\n  margin: 0 0 0 12px;\n  transition: all 0.3s ease;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li {\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  cursor: grab;\n  cursor: -webkit-grab;\n  vertical-align: middle;\n  padding: 0;\n  border: 0;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li a {\n  padding: 12px 15px !important;\n  font-size: 1.4rem;\n  color: #8391a1;\n  position: relative;\n  background-color: #ffffff;\n  display: inline-block;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li a.active {\n  background-color: #ffffff !important;\n  color: #3f51b5;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li a.active:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100% !important;\n  height: 3px;\n  background-color: #3f51b5;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li a:focus {\n  outline: none;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li:after {\n  content: none;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons {\n  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  -moz-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  right: 0;\n  z-index: 2;\n  top: 0;\n  background-color: #5cd694;\n  width: 60px;\n  height: 49px;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a {\n  display: inline-block;\n  height: 100% !important;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a i {\n  font-size: 2.4rem;\n  color: #ffffff;\n  margin: 0 10px;\n  position: relative;\n  top: 2px;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a:hover, .property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a:focus {\n  outline: none;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a:hover i, .property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a:focus i {\n  color: #1f7a49;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1hbGVydHMvcHJvcGVydHktYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1hbGVydHMvcHJvcGVydHktYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDQyxpQkFBQTtBQ0xIO0FETUc7RUFDQyxrQkFBQTtBQ0pKO0FES0k7RUFDQyxrQkFBQTtFRW1FSCxpQkFBQTtFRmpFRyxjR2tGTTtBRnJGWDtBREtJO0VFK0RGLGlCQUFBO0VGN0RJLGNHTk87RUhPUCxVQUFBO0VBQ0EsWUFBQTtBQ0hOO0FEV0k7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNHLGdCQUFBO0VBQ0gsa0JHMUJBO0FGaUJMO0FEVUs7RUFDQyxrQkc3QkQ7RUg4QkksU0FBQTtFQUNBLFFBQUE7RUFDRCxpQkFBQTtFQUNDLGtCQUFBO0VJTVIseUJKTFE7QUNOVDtBRE9TO0VBQ0MsbUJBQUE7RUFDQSxrQkdwQ0w7RUhxQ0ssa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDTFY7QURNVTtFQUNGLDZCQUFBO0VFNkJOLGlCQUFBO0VGM0JlLGNHeENKO0VIeUNJLGtCRy9DWjtFSGdEWSx5QkdpRVQ7RUhoRVMscUJBQUE7QUNKakI7QURLaUI7RUFDQyxvQ0FBQTtFQUNBLGNHSVQ7QUZQVDtBRElrQjtFQUNDLFdBQUE7RUFDQSxrQkd4RGQ7RUh5RGMsT0FBQTtFQUNBLFNBQUE7RUFDQSxzQkdvR2I7RUhuR2EsV0FBQTtFQUNBLHlCR0pWO0FGRVQ7QURLaUI7RUFDQyxhQUFBO0FDSGxCO0FETU87RUFDVSxhQUFBO0FDSmpCO0FEUUc7RUl0REQsOENKdURFO0VJdERGLG1ESnNERTtFSXJERixzREpxREU7RUFDQSxrQkczRUM7RUg0RUUsUUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EseUJHaENNO0VIaUNOLFdBQUE7RUFDQSxZQUFBO0FDSlA7QURLWTtFQUNDLHFCQUFBO0VBQ0EsdUJHMkVQO0FGOUVOO0FESWE7RUVYWCxpQkFBQTtFRmFZLGNHMkJOO0VIMUJNLGNBQUE7RUFDQSxrQkd4RlQ7RUh5RkcsUUFBQTtBQ0ZSO0FESWE7RUFDQyxhQUFBO0FDRmQ7QURHYztFQUNDLGNBQUE7QUNEZiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWFsZXJ0cy9wcm9wZXJ0eS1hbGVydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIHtcblx0LmNhcm91c2VsLWJveCB7XG5cdFx0LmNhcmQge1xuXHRcdFx0bWluLWhlaWdodDogMTI1cHg7XG5cdFx0XHQuY2FyZC1ib2R5IHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAgMTBweCAwO1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtaDMtMDIpO1xuXHRcdFx0XHRcdGNvbG9yOiAkZ3JleS04MDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aDUge1xuIFx0XHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XG4gXHRcdFx0XHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcbiBcdFx0XHRcdFx0d2lkdGg6IDgwJTtcbiBcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5hbGVydHMtdGFicy1ib3gge1xuXHRcdC5jYXJkIHtcblx0XHRcdC5jYXJkLWJvZHkge1xuXHRcdFx0XHQubmF2LXBpbGxzIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XG5cdFx0XHRcdFx0bWFyZ2luOjAgYXV0bztcblx0XHQgICAgXHRcdG92ZXJmbG93OmhpZGRlbjtcblx0XHRcdFx0XHRwb3NpdGlvbjogJHJlbDtcblx0XHRcdFx0XHQudGFicyB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogJGFicztcblx0XHQgICAgXHRcdFx0bGVmdDowcHg7XG5cdFx0XHRcdFx0ICAgIHRvcDowcHg7XG5cdFx0XHRcdFx0ICBcdG1pbi13aWR0aDozMDAwcHg7XG5cdFx0XHRcdFx0ICAgIG1hcmdpbjogMCAwIDAgMTJweDtcblx0XHQgICAgXHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4zcyBlYXNlKTtcblx0XHQgICAgXHRcdFx0bGkge1xuXHRcdCAgICBcdFx0XHRcdGRpc3BsYXk6dGFibGUtY2VsbDtcblx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbjogJHJlbDtcblx0XHRcdFx0XHRcdCAgICB0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRcdFx0XHRcdCAgICBjdXJzb3I6Z3JhYjtcblx0XHRcdFx0XHRcdCAgICBjdXJzb3I6LXdlYmtpdC1ncmFiO1xuXHRcdFx0XHRcdFx0ICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0XHRcdFx0XHRcdCAgICBwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0ICAgIGJvcmRlcjogMDtcblx0XHRcdFx0XHRcdCAgICBhIHtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDE1cHggIWltcG9ydGFudDtcblx0XHRcdFx0ICAgICAgICAgICAgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdFx0ICAgICAgICAgICAgXHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0cG9zaXRpb246ICRyZWw7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuXHRcdFx0XHQgICAgICAgICAgICBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0ICAgICAgICAgICAgXHQmLmFjdGl2ZSB7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdGNvbG9yOiAkbS1ibHVlO1xuXHRcdFx0XHQgICAgICAgICAgICBcdFx0JjphZnRlciB7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdHBvc2l0aW9uOiAkYWJzO1xuXHRcdFx0XHQgICAgICAgICAgICBcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHQgICAgICAgICAgICBcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdHdpZHRoOiAkZnVsbDtcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdFx0aGVpZ2h0OiAzcHg7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRtLWJsdWU7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHR9XHRcdFx0XHQgICAgICAgICAgICBcdFx0XG5cdFx0XHRcdCAgICAgICAgICAgIFx0fVxuXHRcdFx0XHQgICAgICAgICAgICBcdCY6Zm9jdXMge1xuXHRcdFx0XHQgICAgICAgICAgICBcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0ICAgICAgICAgICAgXHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0Y29udGVudDogbm9uZTtcblx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICBcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0LmJ1dHRvbnN7XG5cdFx0XHRcdEBpbmNsdWRlIGJveC1zaGFkb3coMCAycHggMTBweCAxcHggcmdiYSgkYmxhY2ssIDAuMjUpKTtcblx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHQgICAgcmlnaHQ6IDA7XG5cdFx0XHQgICAgei1pbmRleDogMjtcblx0XHRcdCAgICB0b3A6IDA7XG5cdFx0XHQgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbWUtZ3JlZW47XG5cdFx0XHQgICAgd2lkdGg6IDYwcHg7XG5cdFx0XHQgICAgaGVpZ2h0OiA0OXB4O1xuXHQgICAgICAgICAgIGEge1xuXHQgICAgICAgICAgIFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHQgICAgICAgICAgIFx0aGVpZ2h0OiAkZnVsbDtcblx0ICAgICAgICAgICBcdGkge1xuXHQgICAgICAgICAgIFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bS0wMik7XG5cdCAgICAgICAgICAgXHRcdGNvbG9yOiAkd2hpdGU7XG5cdCAgICAgICAgICAgXHRcdG1hcmdpbjogMCAxMHB4O1x0XG5cdCAgICAgICAgICAgXHRcdHBvc2l0aW9uOiAkcmVsO1xuICAgIFx0XHRcdFx0dG9wOiAycHg7XG5cdCAgICAgICAgICAgXHR9XG5cdCAgICAgICAgICAgXHQmOmhvdmVyLCAmOmZvY3VzIHtcblx0ICAgICAgICAgICBcdFx0b3V0bGluZTogbm9uZTtcblx0ICAgICAgICAgICBcdFx0aSB7XG5cdCAgICAgICAgICAgXHRcdFx0Y29sb3I6IGRhcmtlbigkbGltZS1ncmVlbiwgMzAlKTtcblx0ICAgICAgICAgICBcdFx0fVxuXHQgICAgICAgICAgIFx0fVxuXHQgICAgICAgICAgIH0gXHRcdFxuXHQgICAgICAgIH1cblx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIC5jYXJvdXNlbC1ib3ggLmNhcmQge1xuICBtaW4taGVpZ2h0OiAxMjVweDtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtd3JhcHBlciAuY2Fyb3VzZWwtYm94IC5jYXJkIC5jYXJkLWJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmNhcm91c2VsLWJveCAuY2FyZCAuY2FyZC1ib2R5IGgzIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmNhcm91c2VsLWJveCAuY2FyZCAuY2FyZC1ib2R5IGg1IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjODM5MWExO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLnRhYnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIG1pbi13aWR0aDogMzAwMHB4O1xuICBtYXJnaW46IDAgMCAwIDEycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIC5hbGVydHMtdGFicy1ib3ggLmNhcmQgLmNhcmQtYm9keSAubmF2LXBpbGxzIC50YWJzIGxpIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogZ3JhYjtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtd3JhcHBlciAuYWxlcnRzLXRhYnMtYm94IC5jYXJkIC5jYXJkLWJvZHkgLm5hdi1waWxscyAudGFicyBsaSBhIHtcbiAgcGFkZGluZzogMTJweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLnRhYnMgbGkgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIC5hbGVydHMtdGFicy1ib3ggLmNhcmQgLmNhcmQtYm9keSAubmF2LXBpbGxzIC50YWJzIGxpIGEuYWN0aXZlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xufVxuLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIC5hbGVydHMtdGFicy1ib3ggLmNhcmQgLmNhcmQtYm9keSAubmF2LXBpbGxzIC50YWJzIGxpIGE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIC5hbGVydHMtdGFicy1ib3ggLmNhcmQgLmNhcmQtYm9keSAubmF2LXBpbGxzIC50YWJzIGxpOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtd3JhcHBlciAuYWxlcnRzLXRhYnMtYm94IC5jYXJkIC5jYXJkLWJvZHkgLm5hdi1waWxscyAuYnV0dG9ucyB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2Q2OTQ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYSBpIHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDAgMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtd3JhcHBlciAuYWxlcnRzLXRhYnMtYm94IC5jYXJkIC5jYXJkLWJvZHkgLm5hdi1waWxscyAuYnV0dG9ucyBhOmhvdmVyLCAucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYTpob3ZlciBpLCAucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYTpmb2N1cyBpIHtcbiAgY29sb3I6ICMxZjdhNDk7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gZmxpcCgkZGlyZWN0aW9uKSB7XG4gIHRyYW5zZm9ybSA6IHJvdGF0ZVkoJGRpcmVjdGlvbik7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-alerts/property-alerts.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-alerts/property-alerts.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PropertyAlertsComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyAlertsPropertyAlertsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyAlertsComponent", function () {
      return PropertyAlertsComponent;
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


    var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/Asset */
    "./src/app/api/controllers/Asset.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var PropertyAlertsComponent =
    /*#__PURE__*/
    function () {
      function PropertyAlertsComponent(assetService, cookieService) {
        _classCallCheck(this, PropertyAlertsComponent);

        this.assetService = assetService;
        this.cookieService = cookieService;
        this.itemPositions = [];
        this.currentPosition = 0;
        this.selectedTab = 0;
        this.customOptions = {
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          margin: 15,
          dots: true,
          navSpeed: 700,
          navText: ['', ''],
          responsive: {
            0: {
              items: 2
            },
            400: {
              items: 2
            },
            740: {
              items: 4
            },
            940: {
              items: 5
            }
          },
          nav: false
        };
        this.isDataLoaded = false;
      }

      _createClass(PropertyAlertsComponent, [{
        key: "moveTabRight",
        value: function moveTabRight() {
          if (this.currentPosition + 1 < this.itemPositions.length) {
            document.getElementById("alerts-tabs").style.left = "-" + this.itemPositions[++this.currentPosition] + "px";
          }
        }
      }, {
        key: "moveTabLeft",
        value: function moveTabLeft() {
          if (this.currentPosition - 1 >= 0) {
            document.getElementById("alerts-tabs").style.left = "-" + this.itemPositions[--this.currentPosition] + "px";
          }
        }
      }, {
        key: "widthOfList",
        value: function widthOfList() {
          var _this2 = this;

          this.itemPositions = [];
          var marginWidth = 60;
          var wrapperWidth = document.querySelector('#alerts-wrapper').clientWidth - marginWidth;
          var itemsWidth = 0;
          this.itemPositions.push(0);
          underscore__WEBPACK_IMPORTED_MODULE_4__["each"](this.tabItems, function (item) {
            var itemWidth = item.offsetWidth;
            itemsWidth += itemWidth;

            if (itemsWidth > wrapperWidth) {
              _this2.itemPositions.push(itemsWidth - wrapperWidth);
            }
          });
          return itemsWidth;
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 576 ? true : false;
        }
      }, {
        key: "formatName",
        value: function formatName(name) {
          return name.replace(/-/g, ' ');
        }
      }, {
        key: "getAssetType",
        value: function getAssetType(type, item) {
          this.selectedTab = type;
          this.alertData = item;

          if (item != 'nill') {
            this.alertData = item;
          }
        }
      }, {
        key: "isTabActive",
        value: function isTabActive(type) {
          return this.selectedTab == type ? 'active' : '';
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize(event) {
          this.widthOfList();

          if (this.isMobileView()) {
            document.getElementById("alerts-tabs").style.left = 0 + 'px';
            this.currentPosition = 0;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.alertTypes = [{
            'label': 'Maintenance in 30 days',
            'type': 'MaintenanceInXDays',
            'count': 30
          }, {
            'label': 'Maintenance Expired',
            'type': 'MaintenanceExpired',
            'count': 0
          }, {
            'label': 'Maintenance Completed',
            'type': 'MaintenanceCompleted',
            'count': 0
          }, {
            'label': 'Insurance Expiring in 30 days',
            'type': 'InsuranceExpiringInXDays',
            'count': 30
          }, {
            'label': 'Expired Insurance',
            'type': 'ExpiredInsurance',
            'count': 0
          }];
          underscore__WEBPACK_IMPORTED_MODULE_4__["each"](this.alertTypes, function (item, index) {
            var params = {
              ApartmentId: parseInt(_this3.cookieService.get('apartmentId')),
              InputType: item.type,
              days: item.count
            };

            _this3.assetService.getAssetMasterDetail(params).subscribe(function (res) {
              if (res == undefined || res.length == 0) {
                item.assetCount = 0;
              } else {
                item.assetCount = res.length;
              }

              if (index == _this3.alertTypes.length - 1) {
                _this3.isDataLoaded = true;
              }

              if (index == 0) {
                _this3.alertData = item;
              }
            });
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          setTimeout(function () {
            _this4.tab = document.getElementById('alerts-tabs');
            _this4.tabItems = _this4.tab.getElementsByTagName("li");
            _this4.totalTabItems = _this4.tabItems.length;

            _this4.widthOfList();
          }, 1000);
        }
      }]);

      return PropertyAlertsComponent;
    }();

    PropertyAlertsComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_2__["AssetService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], PropertyAlertsComponent.prototype, "onWindowResize", null);
    PropertyAlertsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-alerts',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-alerts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-alerts/property-alerts.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-alerts.component.scss */
      "./src/app/ams/my-property/components/property-alerts/property-alerts.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_2__["AssetService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])], PropertyAlertsComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category-info/property-asset-category-info.component.scss":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category-info/property-asset-category-info.component.scss ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyAssetCategoryPropertyAssetCategoryInfoPropertyAssetCategoryInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktYXNzZXQtY2F0ZWdvcnkvcHJvcGVydHktYXNzZXQtY2F0ZWdvcnktaW5mby9wcm9wZXJ0eS1hc3NldC1jYXRlZ29yeS1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category-info/property-asset-category-info.component.ts":
  /*!******************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category-info/property-asset-category-info.component.ts ***!
    \******************************************************************************************************************************************************************/

  /*! exports provided: PropertyAssetCategoryInfoComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyAssetCategoryPropertyAssetCategoryInfoPropertyAssetCategoryInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyAssetCategoryInfoComponent", function () {
      return PropertyAssetCategoryInfoComponent;
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


    var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Asset */
    "./src/app/api/controllers/Asset.ts");

    var PropertyAssetCategoryInfoComponent =
    /*#__PURE__*/
    function () {
      function PropertyAssetCategoryInfoComponent(route, assetService) {
        _classCallCheck(this, PropertyAssetCategoryInfoComponent);

        this.route = route;
        this.assetService = assetService;
        this.isDataLoaded = false;
      }

      _createClass(PropertyAssetCategoryInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.assetCategoryId = this.route.params['value'].id;
          this.assetService.getAssetCountsByCategoryId(this.assetCategoryId).subscribe(function (res) {
            _this5.assetDataList = res;
            _this5.isDataLoaded = true;
          });
        }
      }]);

      return PropertyAssetCategoryInfoComponent;
    }();

    PropertyAssetCategoryInfoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PropertyAssetCategoryInfoComponent.prototype, "tower", void 0);
    PropertyAssetCategoryInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-asset-category-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-asset-category-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category-info/property-asset-category-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-asset-category-info.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category-info/property-asset-category-info.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"]])], PropertyAssetCategoryInfoComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category.component.scss":
  /*!**********************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category.component.scss ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyAssetCategoryPropertyAssetCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-assets-category-wrapper .simple-lists a.done, .property-assets-category-wrapper .simple-lists a.due {\n  position: relative;\n}\n.property-assets-category-wrapper .simple-lists a.done:after, .property-assets-category-wrapper .simple-lists a.due:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 6px;\n  height: 100% !important;\n}\n.property-assets-category-wrapper .simple-lists a.due:after {\n  background-color: #e2385e;\n}\n.property-assets-category-wrapper .simple-lists a.done:after {\n  background-color: #5cd694;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LWFzc2V0LWNhdGVnb3J5L3Byb3BlcnR5LWFzc2V0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktY29uZmlndXJhdGlvbi9wcm9wZXJ0eS1hc3NldC1jYXRlZ29yeS9wcm9wZXJ0eS1hc3NldC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRztFQUNDLGtCQ0hDO0FDSEw7QUZPSTtFQUNDLFdBQUE7RUFDQSxrQkNQQTtFRFFBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQ29KQztBQ3pKTjtBRlNJO0VBQ0MseUJDSFE7QUNKYjtBRldJO0VBQ0MseUJDMEJRO0FDbkNiIiwiZmlsZSI6InNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktY29uZmlndXJhdGlvbi9wcm9wZXJ0eS1hc3NldC1jYXRlZ29yeS9wcm9wZXJ0eS1hc3NldC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4ucHJvcGVydHktYXNzZXRzLWNhdGVnb3J5LXdyYXBwZXIge1xuXHQuc2ltcGxlLWxpc3RzIHtcblx0XHRhIHtcblx0XHRcdCYuZG9uZSwgJi5kdWUge1xuXHRcdFx0XHRwb3NpdGlvbjogJHJlbDtcblx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRwb3NpdGlvbjogJGFicztcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHR3aWR0aDogNnB4O1xuXHRcdFx0XHRcdGhlaWdodDogJGZ1bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYuZHVlIHtcblx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGJyaWdodC1yZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYuZG9uZSB7XG5cdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRsaW1lLWdyZWVuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIi5wcm9wZXJ0eS1hc3NldHMtY2F0ZWdvcnktd3JhcHBlciAuc2ltcGxlLWxpc3RzIGEuZG9uZSwgLnByb3BlcnR5LWFzc2V0cy1jYXRlZ29yeS13cmFwcGVyIC5zaW1wbGUtbGlzdHMgYS5kdWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvcGVydHktYXNzZXRzLWNhdGVnb3J5LXdyYXBwZXIgLnNpbXBsZS1saXN0cyBhLmRvbmU6YWZ0ZXIsIC5wcm9wZXJ0eS1hc3NldHMtY2F0ZWdvcnktd3JhcHBlciAuc2ltcGxlLWxpc3RzIGEuZHVlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLnByb3BlcnR5LWFzc2V0cy1jYXRlZ29yeS13cmFwcGVyIC5zaW1wbGUtbGlzdHMgYS5kdWU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzODVlO1xufVxuLnByb3BlcnR5LWFzc2V0cy1jYXRlZ29yeS13cmFwcGVyIC5zaW1wbGUtbGlzdHMgYS5kb25lOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjZDY5NDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category.component.ts":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category.component.ts ***!
    \********************************************************************************************************************************/

  /*! exports provided: PropertyAssetCategoryComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyAssetCategoryPropertyAssetCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyAssetCategoryComponent", function () {
      return PropertyAssetCategoryComponent;
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


    var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Asset */
    "./src/app/api/controllers/Asset.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var PropertyAssetCategoryComponent =
    /*#__PURE__*/
    function () {
      function PropertyAssetCategoryComponent(router, route, assetService, cookieService) {
        var _this6 = this;

        _classCallCheck(this, PropertyAssetCategoryComponent);

        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isError = false;
        this.alertMessage = "";
        this.route.params.subscribe(function (params) {
          if (_this6.router.url.indexOf('property-configuration/asset') != -1) {
            _this6.getAssetCategoryItems();
          }
        });
      }

      _createClass(PropertyAssetCategoryComponent, [{
        key: "getAssetCategoryItems",
        value: function getAssetCategoryItems() {
          var _this7 = this;

          this.isDataLoaded = false;
          this.assetCategoryId = this.route.params['value'].id;
          var params = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            AssetCategoryId: this.assetCategoryId
          };
          this.assetService.getAssetCountsByCategoryId(params).subscribe(function (res) {
            _this7.assetDataList = res;

            if (res == undefined || res.length == 0) {
              _this7.assetCategoryName = "";
            } else {
              _this7.assetCategoryName = res[0].categoryName;
              underscore__WEBPACK_IMPORTED_MODULE_5__["each"](_this7.assetDataList, function (item) {
                if ((item.maintIn30days == 0 || item.maintIn30days == null) && (item.maintIn20days == 0 || item.maintIn20days == null) && (item.maintIn10days == 0 || item.maintIn10days == null)) {
                  item.isMaitenance = false;
                } else {
                  item.isMaitenance = true;
                }
              });
            }

            _this7.isDataLoaded = true;
          }, function (error) {
            _this7.isDataLoaded = true;
            _this7.isError = true;
            _this7.alertMessage = "Some error occured";
          });
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.assetDataList.length == 0 ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PropertyAssetCategoryComponent;
    }();

    PropertyAssetCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    PropertyAssetCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-asset-category',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-asset-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-asset-category.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], PropertyAssetCategoryComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-configuration.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-configuration.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyConfigurationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-configuration-wrapper .card {\n  border-radius: 3px !important;\n}\n.property-configuration-wrapper .card-body .nav-pills {\n  height: 45px;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  min-width: 3000px;\n  margin: 0 0 0 12px;\n  transition: all 0.3s ease;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs li {\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  cursor: grab;\n  cursor: -webkit-grab;\n  vertical-align: middle;\n  padding: 0;\n  border: 0;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs li a {\n  padding: 12px !important;\n  font-size: 1.4rem;\n  color: #8391a1;\n  position: relative;\n  background-color: #ffffff;\n  display: inline-block;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs li a.active {\n  color: #ffffff;\n  background-color: #3f51b5;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs li a:focus {\n  outline: none;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs li:after {\n  content: none;\n}\n.property-configuration-wrapper .card-body .nav-pills .buttons {\n  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  -moz-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  right: 0;\n  z-index: 2;\n  top: 0;\n  background-color: #5cd694;\n  width: 60px;\n  height: 49px;\n}\n.property-configuration-wrapper .card-body .nav-pills .buttons a {\n  display: inline-block;\n  height: 100% !important;\n}\n.property-configuration-wrapper .card-body .nav-pills .buttons a i {\n  font-size: 2.4rem;\n  color: #ffffff;\n  margin: 0 10px;\n  position: relative;\n  top: 2px;\n}\n.property-configuration-wrapper .card-body .nav-pills .buttons a:hover, .property-configuration-wrapper .card-body .nav-pills .buttons a:focus {\n  outline: none;\n}\n.property-configuration-wrapper .card-body .nav-pills .buttons a:hover i, .property-configuration-wrapper .card-body .nav-pills .buttons a:focus i {\n  color: #1f7a49;\n}\n.property-configuration-wrapper .card-body.content {\n  min-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIiwic3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VDRUEsNkJBQUE7QUNIRDtBRktFO0VBQ0MsWUFBQTtFQUNBLGNBQUE7RUFDRyxnQkFBQTtFQUNILGtCR1JFO0FES0w7QUZJRztFQUNDLGtCR1hDO0VIWUUsU0FBQTtFQUNBLFFBQUE7RUFDRCxpQkFBQTtFQUNDLGtCQUFBO0VDd0JOLHlCRHZCTTtBRUFQO0FGQ087RUFDQyxtQkFBQTtFQUNBLGtCR2xCSDtFSG1CRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUVDUjtBRkFRO0VBQ0Ysd0JBQUE7RUkrQ0osaUJBQUE7RUo3Q2EsY0d0QkY7RUh1QkUsa0JHN0JWO0VIOEJVLHlCR21GUDtFSGxGTyxxQkFBQTtBRUVmO0FGRGU7RUFDQyxjR2dGUjtFSC9FUSx5QkdzQlA7QURuQlQ7QUZEZTtFQUNDLGFBQUE7QUVHaEI7QUZBSztFQUNVLGFBQUE7QUVFZjtBRkVHO0VDM0JELDhDRDRCRTtFQzNCRixtREQyQkU7RUMxQkYsc0REMEJFO0VBQ0Esa0JHaERDO0VIaURFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLHlCR0xNO0VITU4sV0FBQTtFQUNBLFlBQUE7QUVFUDtBRkRZO0VBQ0MscUJBQUE7RUFDQSx1QkdzR1A7QURuR047QUZGYTtFSWdCWCxpQkFBQTtFSmRZLGNHc0ROO0VIckRNLGNBQUE7RUFDQSxrQkc3RFQ7RUg4REcsUUFBQTtBRUlSO0FGRmE7RUFDQyxhQUFBO0FFSWQ7QUZIYztFQUNDLGNBQUE7QUVLZjtBRkNFO0VBQ0MsaUJBQUE7QUVDSCIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIHtcblx0LmNhcmQge1xuXHRcdEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoM3B4KTtcblx0fVxuXHQuY2FyZC1ib2R5IHtcblx0XHQubmF2LXBpbGxzIHtcblx0XHRcdGhlaWdodDogNDVweDtcblx0XHRcdG1hcmdpbjowIGF1dG87XG4gICAgXHRcdG92ZXJmbG93OmhpZGRlbjtcblx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0LnRhYnMge1xuXHRcdFx0XHRwb3NpdGlvbjogJGFicztcbiAgICBcdFx0XHRsZWZ0OjBweDtcblx0XHRcdCAgICB0b3A6MHB4O1xuXHRcdFx0ICBcdG1pbi13aWR0aDozMDAwcHg7XG5cdFx0XHQgICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xuICAgIFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuM3MgZWFzZSk7XG4gICAgXHRcdFx0bGkge1xuICAgIFx0XHRcdFx0ZGlzcGxheTp0YWJsZS1jZWxsO1xuXHRcdFx0XHQgICAgcG9zaXRpb246ICRyZWw7XG5cdFx0XHRcdCAgICB0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRcdFx0ICAgIGN1cnNvcjpncmFiO1xuXHRcdFx0XHQgICAgY3Vyc29yOi13ZWJraXQtZ3JhYjtcblx0XHRcdFx0ICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0XHRcdFx0ICAgIHBhZGRpbmc6IDA7XG5cdFx0XHRcdCAgICBib3JkZXI6IDA7XG5cdFx0XHRcdCAgICBhIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEycHggIWltcG9ydGFudDtcblx0XHQgICAgICAgICAgICBcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdCAgICAgICAgICAgIFx0Y29sb3I6ICRsaWdodC1ibHVlO1xuXHRcdCAgICAgICAgICAgIFx0cG9zaXRpb246ICRyZWw7XG5cdFx0ICAgICAgICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cdFx0ICAgICAgICAgICAgXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0ICAgICAgICAgICAgXHQmLmFjdGl2ZSB7XG5cdFx0ICAgICAgICAgICAgXHRcdGNvbG9yOiAkd2hpdGU7XG5cdFx0ICAgICAgICAgICAgXHRcdGJhY2tncm91bmQtY29sb3I6ICRtLWJsdWU7XG5cdFx0ICAgICAgICAgICAgXHR9XG5cdFx0ICAgICAgICAgICAgXHQmOmZvY3VzIHtcblx0XHQgICAgICAgICAgICBcdFx0b3V0bGluZTogbm9uZTtcblx0XHQgICAgICAgICAgICBcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0ICAgICAgICAgICAgXHRjb250ZW50OiBub25lO1xuXHRcdCAgICAgICAgICAgIH1cbiAgICBcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuYnV0dG9uc3tcblx0XHRcdFx0QGluY2x1ZGUgYm94LXNoYWRvdygwIDJweCAxMHB4IDFweCByZ2JhKCRibGFjaywgMC4yNSkpO1xuXHRcdFx0XHRwb3NpdGlvbjogJGFicztcblx0XHRcdCAgICByaWdodDogMDtcblx0XHRcdCAgICB6LWluZGV4OiAyO1xuXHRcdFx0ICAgIHRvcDogMDtcblx0XHRcdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGltZS1ncmVlbjtcblx0XHRcdCAgICB3aWR0aDogNjBweDtcblx0XHRcdCAgICBoZWlnaHQ6IDQ5cHg7XG5cdCAgICAgICAgICAgYSB7XG5cdCAgICAgICAgICAgXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdCAgICAgICAgICAgXHRoZWlnaHQ6ICRmdWxsO1xuXHQgICAgICAgICAgIFx0aSB7XG5cdCAgICAgICAgICAgXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtLTAyKTtcblx0ICAgICAgICAgICBcdFx0Y29sb3I6ICR3aGl0ZTtcblx0ICAgICAgICAgICBcdFx0bWFyZ2luOiAwIDEwcHg7XHRcblx0ICAgICAgICAgICBcdFx0cG9zaXRpb246ICRyZWw7XG4gICAgXHRcdFx0XHR0b3A6IDJweDtcblx0ICAgICAgICAgICBcdH1cblx0ICAgICAgICAgICBcdCY6aG92ZXIsICY6Zm9jdXMge1xuXHQgICAgICAgICAgIFx0XHRvdXRsaW5lOiBub25lO1xuXHQgICAgICAgICAgIFx0XHRpIHtcblx0ICAgICAgICAgICBcdFx0XHRjb2xvcjogZGFya2VuKCRsaW1lLWdyZWVuLCAzMCUpO1xuXHQgICAgICAgICAgIFx0XHR9XG5cdCAgICAgICAgICAgXHR9XG5cdCAgICAgICAgICAgfSBcdFx0XG5cdCAgICAgICAgfVxuXHRcdH1cblx0XHQmLmNvbnRlbnQge1xuXHRcdFx0bWluLWhlaWdodDogMjAwcHg7XG5cdFx0fVxuXHR9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gZmxpcCgkZGlyZWN0aW9uKSB7XG4gIHRyYW5zZm9ybSA6IHJvdGF0ZVkoJGRpcmVjdGlvbik7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xufVxuLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZC1ib2R5IC5uYXYtcGlsbHMge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAudGFicyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgbWluLXdpZHRoOiAzMDAwcHg7XG4gIG1hcmdpbjogMCAwIDAgMTJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAudGFicyBsaSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IGdyYWI7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAudGFicyBsaSBhIHtcbiAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLnRhYnMgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cbi5wcm9wZXJ0eS1jb25maWd1cmF0aW9uLXdyYXBwZXIgLmNhcmQtYm9keSAubmF2LXBpbGxzIC50YWJzIGxpIGE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLnRhYnMgbGk6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMge1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNkNjk0O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0OXB4O1xufVxuLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAuYnV0dG9ucyBhIGkge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYTpob3ZlciwgLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAuYnV0dG9ucyBhOmhvdmVyIGksIC5wcm9wZXJ0eS1jb25maWd1cmF0aW9uLXdyYXBwZXIgLmNhcmQtYm9keSAubmF2LXBpbGxzIC5idXR0b25zIGE6Zm9jdXMgaSB7XG4gIGNvbG9yOiAjMWY3YTQ5O1xufVxuLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZC1ib2R5LmNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-configuration.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-configuration.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: PropertyConfigurationComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyConfigurationComponent", function () {
      return PropertyConfigurationComponent;
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


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var PropertyConfigurationComponent =
    /*#__PURE__*/
    function () {
      function PropertyConfigurationComponent(lookupService) {
        _classCallCheck(this, PropertyConfigurationComponent);

        this.lookupService = lookupService;
        this.itemPositions = [];
        this.currentPosition = 0;
        this.isDataLoaded = false;
      }

      _createClass(PropertyConfigurationComponent, [{
        key: "moveTabRight",
        value: function moveTabRight() {
          if (this.currentPosition + 1 < this.itemPositions.length) {
            document.getElementById("property-tabs").style.left = "-" + this.itemPositions[++this.currentPosition] + "px";
          }
        }
      }, {
        key: "moveTabLeft",
        value: function moveTabLeft() {
          if (this.currentPosition - 1 >= 0) {
            document.getElementById("property-tabs").style.left = "-" + this.itemPositions[--this.currentPosition] + "px";
          }
        }
      }, {
        key: "widthOfList",
        value: function widthOfList() {
          var _this8 = this;

          this.itemPositions = [];
          var marginWidth = 60;
          var wrapperWidth = document.querySelector('#property-wrapper').clientWidth - marginWidth;
          var itemsWidth = 0;
          this.itemPositions.push(0);
          underscore__WEBPACK_IMPORTED_MODULE_3__["each"](this.tabItems, function (item) {
            var itemWidth = item.offsetWidth;
            itemsWidth += itemWidth;

            if (itemsWidth > wrapperWidth) {
              _this8.itemPositions.push(itemsWidth - wrapperWidth);
            }
          });
          return itemsWidth;
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 576 ? true : false;
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize(event) {
          this.widthOfList();

          if (this.isMobileView()) {
            document.getElementById("property-tabs").style.left = 0 + 'px';
            this.currentPosition = 0;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this9 = this;

          var params = {
            LookupTypeId: 19
          }; //get all asset categories

          this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
            _this9.isDataLoaded = true;
            _this9.assetCategoriesData = res.filter(function (item) {
              return item.isActive;
            });
            setTimeout(function () {
              _this9.tab = document.getElementById('property-tabs');
              _this9.tabItems = _this9.tab.getElementsByTagName("li");
              _this9.totalTabItems = _this9.tabItems.length;

              _this9.widthOfList();
            }, 1000);
          });
        }
      }]);

      return PropertyConfigurationComponent;
    }();

    PropertyConfigurationComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], PropertyConfigurationComponent.prototype, "onWindowResize", null);
    PropertyConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-configuration',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-configuration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-configuration.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-configuration.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-configuration.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]])], PropertyConfigurationComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-details/property-details.component.scss":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-details/property-details.component.scss ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyDetailsPropertyDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktZGV0YWlscy9wcm9wZXJ0eS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-details/property-details.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-details/property-details.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: PropertyDetailsComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyDetailsPropertyDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyDetailsComponent", function () {
      return PropertyDetailsComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var PropertyDetailsComponent =
    /*#__PURE__*/
    function () {
      function PropertyDetailsComponent(apartmentService, cookieService) {
        _classCallCheck(this, PropertyDetailsComponent);

        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
      }

      _createClass(PropertyDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockByApartmentId(params).subscribe(function (res) {
            _this10.propertyTowerData = res;
            _this10.isDataLoaded = true;
          });
        }
      }]);

      return PropertyDetailsComponent;
    }();

    PropertyDetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    PropertyDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-details/property-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-details.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-details/property-details.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])], PropertyDetailsComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-info.component.scss":
  /*!*******************************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-info.component.scss ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyDetailsPropertyTowerInfoPropertyTowerInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktZGV0YWlscy9wcm9wZXJ0eS10b3dlci1pbmZvL3Byb3BlcnR5LXRvd2VyLWluZm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-info.component.ts":
  /*!*****************************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-info.component.ts ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: PropertyTowerInfoComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyDetailsPropertyTowerInfoPropertyTowerInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var PropertyTowerInfoComponent =
    /*#__PURE__*/
    function () {
      function PropertyTowerInfoComponent(apartmentService, sharedService, cookieService) {
        _classCallCheck(this, PropertyTowerInfoComponent);

        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEdit = false;
        this.isTowersLoaded = false;
        this.isUnitSold = false;
        this.isUnitVacant = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
      }

      _createClass(PropertyTowerInfoComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "showEditForm",
        value: function showEditForm() {
          this.isEdit = !this.isEdit;
        }
      }, {
        key: "submitPropertyDetailsForm",
        value: function submitPropertyDetailsForm(form) {
          var _this11 = this;

          var details = {
            "apartmentBlockId": parseInt(this.tower.apartmentBlockId),
            "apartmentBlockNumber": this.tower.apartmentBlockNumber,
            "description": this.tower.description,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "isActive": this.tower.isActive,
            "insertedBy": parseInt(this.tower.insertedBy),
            "insertedOn": this.tower.insertedOn,
            "updatedBy": parseInt(this.cookieService.get('userId')),
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
              _this11.isEdit = false;

              _this11.sharedService.setAlertMessage(_this11.tower.apartmentBlockNumber + " updated successfully");
            } else {
              _this11.isEdit = false;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          var params = {
            apartmentBlockId: parseInt(this.tower.apartmentBlockId)
          };
          this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe(function (res) {
            _this12.towerUnitData = res;
            _this12.totalItems = _this12.towerUnitData.length;

            if (_this12.totalItems > _this12.itemLimit) {
              _this12.ItemEndIndex = _this12.itemLimit;
            } else {
              _this12.ItemEndIndex = _this12.totalItems;
            }

            _this12.isTowersLoaded = true;
          });
        }
      }]);

      return PropertyTowerInfoComponent;
    }();

    PropertyTowerInfoComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PropertyTowerInfoComponent.prototype, "tower", void 0);
    PropertyTowerInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-tower-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-tower-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-tower-info.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-info.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], PropertyTowerInfoComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-unit-info/property-tower-unit-info.component.scss":
  /*!*************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-unit-info/property-tower-unit-info.component.scss ***!
    \*************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyDetailsPropertyTowerInfoPropertyTowerUnitInfoPropertyTowerUnitInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktZGV0YWlscy9wcm9wZXJ0eS10b3dlci1pbmZvL3Byb3BlcnR5LXRvd2VyLXVuaXQtaW5mby9wcm9wZXJ0eS10b3dlci11bml0LWluZm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-unit-info/property-tower-unit-info.component.ts":
  /*!***********************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-unit-info/property-tower-unit-info.component.ts ***!
    \***********************************************************************************************************************************************************************/

  /*! exports provided: PropertyTowerUnitInfoComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyDetailsPropertyTowerInfoPropertyTowerUnitInfoPropertyTowerUnitInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var PropertyTowerUnitInfoComponent =
    /*#__PURE__*/
    function () {
      function PropertyTowerUnitInfoComponent(apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, PropertyTowerUnitInfoComponent);

        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
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
          var _this13 = this;

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
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString()
          };
          var params = {
            apartmentBlockUnit: details
          };
          this.apartmentService.updateApartmentBlockUnit(params).subscribe(function (res) {
            if (res.message) {
              _this13.isEdit = false;

              _this13.sharedService.setAlertMessage(_this13.tower.apartmentBlockNumber + " " + _this13.unit.apartmentBlockUnitNumber + " updated successfully");
            } else {
              _this13.isEdit = false;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.unitTypeId = "";
          var unitParams = {
            LookupTypeId: 1
          }; //get unit type

          this.lookupService.getLookupValueByLookupTypeId(unitParams).subscribe(function (res) {
            _this14.unitTypeData = res;
            setTimeout(function () {
              _this14.getUnitType(_this14.unit.unitType);
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
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PropertyTowerUnitInfoComponent.prototype, "tower", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PropertyTowerUnitInfoComponent.prototype, "unit", void 0);
    PropertyTowerUnitInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-tower-unit-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-tower-unit-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-unit-info/property-tower-unit-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-tower-unit-info.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-unit-info/property-tower-unit-info.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], PropertyTowerUnitInfoComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-facility/property-facility.component.scss":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-facility/property-facility.component.scss ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyFacilityPropertyFacilityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media (max-width: 991px) {\n  .property-facility-wrapper .list-boxes .column {\n    margin: 0 0 20px 0;\n  }\n}\n.property-facility-wrapper .list-boxes .card {\n  height: 100% !important;\n}\n.property-facility-wrapper .list-boxes .card h4 {\n  font-size: 1.6rem;\n  color: #373946;\n}\n.property-facility-wrapper .list-boxes .card .card-body {\n  padding: 0 0 5px 0;\n}\n.property-facility-wrapper .list-boxes .card .card-body:hover {\n  background-color: #ffffff;\n}\n.property-facility-wrapper .list-boxes .card .card-body li {\n  list-style: none;\n  margin: 0 !important;\n  padding: 8px 20px;\n  overflow: auto;\n  min-width: auto;\n}\n.property-facility-wrapper .list-boxes .card .card-body li div {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #373946;\n  float: right;\n}\n.property-facility-wrapper .list-boxes .card .card-body li div.title {\n  color: #8391a1;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LWZhY2lsaXR5L3Byb3BlcnR5LWZhY2lsaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LWZhY2lsaXR5L3Byb3BlcnR5LWZhY2lsaXR5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRztFQUREO0lBRU8sa0JBQUE7RUNMUDtBQUNGO0FET0U7RUFDQyx1QkV1Skc7QUQ1Sk47QURNRztFR2lFRCxpQkFBQTtFSC9ERSxjRWdGTztBRHBGWDtBRE1HO0VBQ0Msa0JBQUE7QUNKSjtBREtJO0VBQ0MseUJFa0dHO0FEckdSO0FES0k7RUFDQyxnQkFBQTtFQUNBLG9CQUFBO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0hSO0FESUs7RUdpQ0gsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGlCQUFBO0VIL0NJLGNFZ0VLO0VGL0RMLFlBQUE7QUNFTjtBRERNO0VBQ0MsY0V2Qk07RUZ3Qk4sV0FBQTtBQ0dQIiwiZmlsZSI6InNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktY29uZmlndXJhdGlvbi9wcm9wZXJ0eS1mYWNpbGl0eS9wcm9wZXJ0eS1mYWNpbGl0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4ucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciB7XG5cdC5saXN0LWJveGVzIHtcblx0XHQuY29sdW1uIHtcblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgXHRcdFx0bWFyZ2luOiAwIDAgMjBweCAwO1xuICAgIFx0XHR9XG5cdFx0fVxuXHRcdC5jYXJkIHtcblx0XHRcdGhlaWdodDogJGZ1bGw7XG5cdFx0XHRoNCB7XG5cdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcblx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdH1cblx0XHRcdC5jYXJkLWJvZHkge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDAgNXB4IDA7XG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcblx0ICAgIFx0XHRcdHBhZGRpbmc6IDhweCAyMHB4O1xuXHQgICAgXHRcdFx0b3ZlcmZsb3c6IGF1dG87XG5cdCAgICBcdFx0XHRtaW4td2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0XHRcdCYudGl0bGUge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciAubGlzdC1ib3hlcyAuY29sdW1uIHtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIH1cbn1cbi5wcm9wZXJ0eS1mYWNpbGl0eS13cmFwcGVyIC5saXN0LWJveGVzIC5jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciAubGlzdC1ib3hlcyAuY2FyZCBoNCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzM3Mzk0Njtcbn1cbi5wcm9wZXJ0eS1mYWNpbGl0eS13cmFwcGVyIC5saXN0LWJveGVzIC5jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwIDAgNXB4IDA7XG59XG4ucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciAubGlzdC1ib3hlcyAuY2FyZCAuY2FyZC1ib2R5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5wcm9wZXJ0eS1mYWNpbGl0eS13cmFwcGVyIC5saXN0LWJveGVzIC5jYXJkIC5jYXJkLWJvZHkgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG87XG59XG4ucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciAubGlzdC1ib3hlcyAuY2FyZCAuY2FyZC1ib2R5IGxpIGRpdiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjMzczOTQ2O1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciAubGlzdC1ib3hlcyAuY2FyZCAuY2FyZC1ib2R5IGxpIGRpdi50aXRsZSB7XG4gIGNvbG9yOiAjODM5MWExO1xuICBmbG9hdDogbGVmdDtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-facility/property-facility.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-facility/property-facility.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: PropertyFacilityComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyFacilityPropertyFacilityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyFacilityComponent", function () {
      return PropertyFacilityComponent;
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


    var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Facility */
    "./src/app/api/controllers/Facility.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var PropertyFacilityComponent =
    /*#__PURE__*/
    function () {
      function PropertyFacilityComponent(apartmentService, facilityService, cookieService) {
        _classCallCheck(this, PropertyFacilityComponent);

        this.apartmentService = apartmentService;
        this.facilityService = facilityService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.dotItems = ['high', 'medium', 'low', 'blue', 'cyan'];
      }

      _createClass(PropertyFacilityComponent, [{
        key: "isFacilityEmpty",
        value: function isFacilityEmpty() {
          return this.facilityData.length == 0;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockByApartmentId(params).subscribe(function (res) {
            _this15.propertyTowerData = res;
            var params = {
              ApartmentID: parseInt(_this15.cookieService.get('apartmentId'))
            };

            _this15.facilityService.getPcApartmentFacility(params).subscribe(function (res) {
              _this15.facilityData = res;
              underscore__WEBPACK_IMPORTED_MODULE_5__["each"](_this15.facilityData, function (item, index) {
                _this15.facilityData[index]["class"] = _this15.dotItems[Math.floor(Math.random() * _this15.dotItems.length)];
              });
              _this15.isDataLoaded = true;
            });
          });
        }
      }]);

      return PropertyFacilityComponent;
    }();

    PropertyFacilityComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    PropertyFacilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-facility',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-facility.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-facility/property-facility.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-facility.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-facility/property-facility.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], PropertyFacilityComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component.scss":
  /*!****************************************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component.scss ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyFacilityPropertyTowerFacilityPropertyTowerFacilityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktZmFjaWxpdHkvcHJvcGVydHktdG93ZXItZmFjaWxpdHkvcHJvcGVydHktdG93ZXItZmFjaWxpdHkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component.ts":
  /*!**************************************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component.ts ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: PropertyTowerFacilityComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyFacilityPropertyTowerFacilityPropertyTowerFacilityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyTowerFacilityComponent", function () {
      return PropertyTowerFacilityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PropertyTowerFacilityComponent =
    /*#__PURE__*/
    function () {
      function PropertyTowerFacilityComponent() {
        _classCallCheck(this, PropertyTowerFacilityComponent);

        this.isEdit = false;
        this.isTowersLoaded = false;
      }

      _createClass(PropertyTowerFacilityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PropertyTowerFacilityComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PropertyTowerFacilityComponent.prototype, "tower", void 0);
    PropertyTowerFacilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-tower-facility',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-tower-facility.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-tower-facility.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PropertyTowerFacilityComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details-info/property-parking-details-info.component.scss":
  /*!***********************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details-info/property-parking-details-info.component.scss ***!
    \***********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyParkingDetailsPropertyParkingDetailsInfoPropertyParkingDetailsInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktcGFya2luZy1kZXRhaWxzL3Byb3BlcnR5LXBhcmtpbmctZGV0YWlscy1pbmZvL3Byb3BlcnR5LXBhcmtpbmctZGV0YWlscy1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details-info/property-parking-details-info.component.ts":
  /*!*********************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details-info/property-parking-details-info.component.ts ***!
    \*********************************************************************************************************************************************************************/

  /*! exports provided: PropertyParkingDetailsInfoComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyParkingDetailsPropertyParkingDetailsInfoPropertyParkingDetailsInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyParkingDetailsInfoComponent", function () {
      return PropertyParkingDetailsInfoComponent;
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


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");

    var PropertyParkingDetailsInfoComponent =
    /*#__PURE__*/
    function () {
      function PropertyParkingDetailsInfoComponent(lookupService) {
        _classCallCheck(this, PropertyParkingDetailsInfoComponent);

        this.lookupService = lookupService;
        this.parkingData = "";
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.isDataLoaded = false;
      }

      _createClass(PropertyParkingDetailsInfoComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
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
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          var params = {
            LookupTypeId: 71
          }; //get main slot type

          this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
            //this.isDataLoaded = true;
            _this16.slotDataList = res.filter(function (item) {
              return item.isActive;
            });
          });
        }
      }]);

      return PropertyParkingDetailsInfoComponent;
    }();

    PropertyParkingDetailsInfoComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }];
    };

    PropertyParkingDetailsInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-parking-details-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-parking-details-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details-info/property-parking-details-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-parking-details-info.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details-info/property-parking-details-info.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]])], PropertyParkingDetailsInfoComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details.component.scss":
  /*!************************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details.component.scss ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyParkingDetailsPropertyParkingDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktcGFya2luZy1kZXRhaWxzL3Byb3BlcnR5LXBhcmtpbmctZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details.component.ts":
  /*!**********************************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details.component.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: PropertyParkingDetailsComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyParkingDetailsPropertyParkingDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyParkingDetailsComponent", function () {
      return PropertyParkingDetailsComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var PropertyParkingDetailsComponent =
    /*#__PURE__*/
    function () {
      function PropertyParkingDetailsComponent(apartmentService, cookieService) {
        _classCallCheck(this, PropertyParkingDetailsComponent);

        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
      }

      _createClass(PropertyParkingDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockByApartmentId(params).subscribe(function (res) {
            _this17.propertyTowerData = res;
            _this17.isDataLoaded = true;
          });
        }
      }]);

      return PropertyParkingDetailsComponent;
    }();

    PropertyParkingDetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    PropertyParkingDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-parking-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-parking-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-parking-details.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])], PropertyParkingDetailsComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-profile/property-profile.component.scss":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-profile/property-profile.component.scss ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyProfilePropertyProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-profile-wrapper .property-info {\n  width: 80%;\n}\n.property-profile-wrapper .property-info .profile-icon {\n  display: flex;\n  border-radius: 3px !important;\n  width: 150px;\n  height: 100px;\n  overflow: hidden;\n  margin: 0 20px 0 0;\n}\n@media (max-width: 768px) {\n  .property-profile-wrapper .property-info .profile-icon {\n    width: 85px;\n    height: auto;\n    margin: 0 15px 0 0;\n  }\n}\n.property-profile-wrapper .property-info h5 {\n  font-size: 2rem;\n  padding: 0 0 2px 0;\n  color: #3f51b5;\n}\n.property-profile-wrapper .property-info p {\n  font-size: 1.4rem;\n  color: #5f5f5f;\n}\n.property-profile-wrapper .property-info .other {\n  margin: 8px 0 0 0 !important;\n}\n.property-profile-wrapper .property-info .other li {\n  margin: 0 30px 0 0;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.property-profile-wrapper .property-info .other li .icon {\n  width: 20px;\n  margin: 0 10px 0 0;\n  color: #673ab7;\n}\n.property-profile-wrapper .property-info .other li .icon.phone {\n  width: 18px;\n}\n@media (max-width: 768px) {\n  .property-profile-wrapper .property-info .other {\n    margin: 20px 0 0 0 !important;\n  }\n  .property-profile-wrapper .property-info .other li {\n    display: block;\n  }\n  .property-profile-wrapper .property-info .other li:not(:last-child) {\n    margin: 0 0 10px 0;\n  }\n  .property-profile-wrapper .property-info .other li .icon {\n    margin: 0 16px 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LXByb2ZpbGUvcHJvcGVydHktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktY29uZmlndXJhdGlvbi9wcm9wZXJ0eS1wcm9maWxlL3Byb3BlcnR5LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLFVBQUE7QUNKRjtBREtFO0VBQ0MsYUFBQTtFRURGLDZCQUFBO0VGR0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREg7QURFRztFQVBEO0lBUUUsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ0NGO0FBQ0Y7QURDRTtFRzBEQSxlQUFBO0VIeERDLGtCQUFBO0VBQ0EsY0lzQ007QUhyQ1Q7QURDRTtFR3FEQSxpQkFBQTtFSG5EQyxjSXdFUTtBSHZFWDtBRENFO0VBQ0MsNEJBQUE7QUNDSDtBREFHO0VBQ0Msa0JBQUE7RUc2QkYsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGlCQUFBO0VIM0NFLGNJeEJTO0FIOEJiO0FETEk7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjSUdNO0FISVg7QUROSztFQUNDLFdBQUE7QUNRTjtBREpHO0VBaEJEO0lBaUJFLDZCQUFBO0VDT0Y7RURORTtJQU9DLGNBQUE7RUNFSDtFRFJHO0lBQ0Msa0JBQUE7RUNVSjtFRFJHO0lBQ0Msa0JBQUE7RUNVSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktY29uZmlndXJhdGlvbi9wcm9wZXJ0eS1wcm9maWxlL3Byb3BlcnR5LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciB7XG5cdC5wcm9wZXJ0eS1pbmZvIHtcblx0XHR3aWR0aDogODAlO1xuXHRcdC5wcm9maWxlLWljb24ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoM3B4KTtcblx0XHRcdHdpZHRoOiAxNTBweDtcblx0XHRcdGhlaWdodDogMTAwcHg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0bWFyZ2luOiAwIDIwcHggMCAwO1xuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdHdpZHRoOiA4NXB4O1xuXHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdG1hcmdpbjogMCAxNXB4IDAgMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aDUge1xuXHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1tZWRpdW0pO1xuXHRcdFx0cGFkZGluZzogMCAwIDJweCAwO1xuXHRcdFx0Y29sb3I6ICRtLWJsdWU7XG5cdFx0fVxuXHRcdHAge1xuXHRcdCBcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdFx0Y29sb3I6ICRncmV5LTY1MDtcblx0XHR9XG5cdFx0Lm90aGVyIHtcblx0XHRcdG1hcmdpbjogOHB4IDAgMCAwICFpbXBvcnRhbnQ7XG5cdFx0XHRsaSB7XG5cdFx0XHRcdG1hcmdpbjogMCAzMHB4IDAgMDtcblx0XHRcdFx0QGluY2x1ZGUgZGVzcC1yZWd1bGFyO1xuXHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdFx0Y29sb3I6ICRsaWdodC1ibHVlO1xuXHRcdFx0XHQuaWNvbiB7XG5cdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDEwcHggMCAwO1xuXHRcdFx0XHRcdGNvbG9yOiAkcy12aW9sZXQ7XG5cdFx0XHRcdFx0Ji5waG9uZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHRcdFx0XHRtYXJnaW46IDIwcHggMCAwIDAgIWltcG9ydGFudDtcblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdCY6bm90KDpsYXN0LWNoaWxkKXtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAwIDEwcHggMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDE2cHggMCAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyB7XG4gIHdpZHRoOiA4MCU7XG59XG4ucHJvcGVydHktcHJvZmlsZS13cmFwcGVyIC5wcm9wZXJ0eS1pbmZvIC5wcm9maWxlLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAucHJvZmlsZS1pY29uIHtcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB9XG59XG4ucHJvcGVydHktcHJvZmlsZS13cmFwcGVyIC5wcm9wZXJ0eS1pbmZvIGg1IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAwIDAgMnB4IDA7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAub3RoZXIge1xuICBtYXJnaW46IDhweCAwIDAgMCAhaW1wb3J0YW50O1xufVxuLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAub3RoZXIgbGkge1xuICBtYXJnaW46IDAgMzBweCAwIDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjODM5MWExO1xufVxuLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAub3RoZXIgbGkgLmljb24ge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICBjb2xvcjogIzY3M2FiNztcbn1cbi5wcm9wZXJ0eS1wcm9maWxlLXdyYXBwZXIgLnByb3BlcnR5LWluZm8gLm90aGVyIGxpIC5pY29uLnBob25lIHtcbiAgd2lkdGg6IDE4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAub3RoZXIge1xuICAgIG1hcmdpbjogMjBweCAwIDAgMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9wZXJ0eS1wcm9maWxlLXdyYXBwZXIgLnByb3BlcnR5LWluZm8gLm90aGVyIGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAucHJvcGVydHktcHJvZmlsZS13cmFwcGVyIC5wcm9wZXJ0eS1pbmZvIC5vdGhlciBsaTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIH1cbiAgLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAub3RoZXIgbGkgLmljb24ge1xuICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcbiAgfVxufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIGRlc2VsZWN0ICgpIHtcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1vLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIGZsaXAoJGRpcmVjdGlvbikge1xuICB0cmFuc2Zvcm0gOiByb3RhdGVZKCRkaXJlY3Rpb24pO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-configuration/property-profile/property-profile.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-configuration/property-profile/property-profile.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: PropertyProfileComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyConfigurationPropertyProfilePropertyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyProfileComponent", function () {
      return PropertyProfileComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var PropertyProfileComponent =
    /*#__PURE__*/
    function () {
      function PropertyProfileComponent(apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, PropertyProfileComponent);

        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isEdit = false;
        this.isFileAdded = false;
        this.fileList = [];
        this.listOfFiles = [];
      }

      _createClass(PropertyProfileComponent, [{
        key: "uploadFile",
        value: function uploadFile(event) {
          this.isFileAdded = true;

          for (var i = 0; i <= event.target.files.length - 1; i++) {
            var selectedFile = event.target.files[i];
            this.fileList.push(selectedFile);
            this.listOfFiles.push({
              'name': selectedFile.name,
              'size': selectedFile.size
            });
          }
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(index) {
          // Delete the item from fileNames list
          this.listOfFiles.splice(index, 1); // delete file from FileList

          this.fileList.splice(index, 1);
          this.selectedFile = null;

          if (this.fileList.length == 0 && this.listOfFiles.length == 0) {
            this.isFileAdded = false;
          }
        }
      }, {
        key: "bytesToSize",
        value: function bytesToSize(bytes) {
          if (bytes < 1024) return bytes + " Bytes";else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";else return (bytes / 1073741824).toFixed(3) + " GB";
        }
      }, {
        key: "getPropertyType",
        value: function getPropertyType(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.propertyTypeData, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName;
          }
        }
      }, {
        key: "getPropertyCategory",
        value: function getPropertyCategory(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.propertyCategoryData, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName;
          }
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          if (date === null || date === undefined || date.length == 0) {
            return "NA";
          } else {
            return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD-MM-YYYY");
          }
        }
      }, {
        key: "showEditForm",
        value: function showEditForm() {
          this.isEdit = !this.isEdit;
        }
      }, {
        key: "submitProfileBasicForm",
        value: function submitProfileBasicForm(form) {
          var _this18 = this;

          this.isDataLoaded = false;
          var details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentName": this.property.apartmentName,
            "description": this.property.description,
            "builderName": this.property.builderName,
            "registrationNumber": this.property.registrationNumber,
            "emailId": this.property.emailId,
            "phoneNumber": this.property.phoneNumber,
            "address1": this.property.address1,
            "address2": this.property.address2,
            "city": this.property.city,
            "state": this.property.state,
            "pincode": this.property.pincode,
            "landmark": this.property.landmark,
            "logoImageId": 0,
            "isActive": true,
            "insertedBy": 0,
            "insertedOn": "2020-02-06T16:14:17.670Z",
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString(),
            "updatePersonName": this.property.updatePersonName,
            "insertPersonName": this.property.insertPersonName,
            "location": this.property.location,
            "constructionStartDate": this.property.constructionStartDate,
            "constructionEndDate": this.property.constructionEndDate,
            "occupanyDate": this.property.occupanyDate,
            "propertyTypeId": parseInt(this.property.propertyTypeId),
            "propertyCategoryId": parseInt(this.property.propertyCategoryId),
            "imageId": 0,
            "propertyTypeName": this.property.propertyTypeName,
            "propertyCategoryName": this.property.propertyCategoryName,
            "fileName": this.property.fileName,
            "filePath": this.property.filePath,
            "commonSqMt": this.property.commonSqMt,
            "totalSqMt": this.property.totalSqMt
          };
          var apartmentParams = {
            file: this.fileList[0],
            apartment: details
          };
          this.apartmentService.updateApartment(apartmentParams).subscribe(function (res) {
            if (res.message) {
              _this18.isDataLoaded = true;
              _this18.isEdit = false;

              _this18.sharedService.setAlertMessage("Property updated successfully");
            } else {
              _this18.isDataLoaded = true;
              _this18.isEdit = false;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.property = {};
          this.property.propertyTypeId = "";
          this.property.propertyCategoryId = "";
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            active: 2
          };
          this.apartmentService.getApartmentByApartmentId(params).subscribe(function (res) {
            _this19.property = res[0];
            var params = {
              apartmentId: parseInt(_this19.cookieService.get('apartmentId'))
            };

            _this19.apartmentService.getApartmentBlockByApartmentId(params).subscribe(function (res) {
              _this19.towersLength = res.length;
              var params = {
                apartmentId: parseInt(_this19.cookieService.get('apartmentId'))
              };

              _this19.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe(function (res) {
                _this19.unitsLength = res.length;
              });
            });

            _this19.isDataLoaded = true;
          });
          var propertyParams = {
            LookupTypeId: 65
          }; //get property type

          this.lookupService.getLookupValueByLookupTypeId(propertyParams).subscribe(function (res) {
            _this19.propertyTypeData = res;
          }, function (error) {});
          var propertyCategoryParams = {
            LookupTypeId: 66
          }; //get property category

          this.lookupService.getLookupValueByLookupTypeId(propertyCategoryParams).subscribe(function (res) {
            _this19.propertyCategoryData = res;
          }, function (error) {});
        }
      }]);

      return PropertyProfileComponent;
    }();

    PropertyProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    PropertyProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-profile/property-profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-profile.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-profile/property-profile.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], PropertyProfileComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-view/property-tower-details/property-tower-details.component.scss":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-view/property-tower-details/property-tower-details.component.scss ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyViewPropertyTowerDetailsPropertyTowerDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  width: 21px;\n  height: 21px;\n  border-radius: 4px;\n  padding: 6px;\n  line-height: 21px;\n  cursor: default;\n}\n\na:hover,\na:focus {\n  text-decoration: none;\n  cursor: pointer;\n}\n\na.selected {\n  background: blue;\n  color: white;\n  border: 0;\n}\n\na.available {\n  color: blue;\n  border: 1px solid blue;\n  border-radius: 4px;\n}\n\na.blocked {\n  color: grey;\n  border: 1px solid grey;\n  border-radius: 4px;\n}\n\na.available:hover {\n  color: white;\n  background: blue;\n}\n\na.blocked,\na.blocked:hover {\n  background: #eaeaea;\n  color: #aaa;\n  box-shadow: 0;\n  cursor: default;\n  border: 0;\n}\n\n.dot {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.svg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: move;\n}\n\n.tool-tip {\n  background: orange;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.tooltip {\n  display: none;\n  position: absolute;\n  font-size: 0.75em;\n  background-color: white;\n  border-style: solid;\n  border-color: gray;\n  border-width: 1px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS12aWV3L3Byb3BlcnR5LXRvd2VyLWRldGFpbHMvcHJvcGVydHktdG93ZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktdmlldy9wcm9wZXJ0eS10b3dlci1kZXRhaWxzL3Byb3BlcnR5LXRvd2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7O0VBRUUscUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFOztFQUVFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNFSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNHSjs7QURERTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktdmlldy9wcm9wZXJ0eS10b3dlci1kZXRhaWxzL3Byb3BlcnR5LXRvd2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gIFxuICBhOmhvdmVyLFxuICBhOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICBhLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgXG4gIGEuYXZhaWxhYmxlIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgYS5ibG9ja2VkIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgYS5hdmFpbGFibGU6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICB9XG4gIFxuICBhLmJsb2NrZWQsXG4gIGEuYmxvY2tlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgICBjb2xvcjogI2FhYTtcbiAgICBib3gtc2hhZG93OiAwO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgXG4gIC5kb3Qge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5zdmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICB9XG4gIC50b29sLXRpcCB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgLnRvb2x0aXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBncmF5O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfSIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiAyMXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNnB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5hOmhvdmVyLFxuYTpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG59XG5cbmEuYXZhaWxhYmxlIHtcbiAgY29sb3I6IGJsdWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuYS5ibG9ja2VkIHtcbiAgY29sb3I6IGdyZXk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuYS5hdmFpbGFibGU6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG59XG5cbmEuYmxvY2tlZCxcbmEuYmxvY2tlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gIGNvbG9yOiAjYWFhO1xuICBib3gtc2hhZG93OiAwO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLmRvdCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3ZnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLnRvb2wtdGlwIHtcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50b29sdGlwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogZ3JheTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-view/property-tower-details/property-tower-details.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-view/property-tower-details/property-tower-details.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: PropertyTowerDetailsComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyViewPropertyTowerDetailsPropertyTowerDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyTowerDetailsComponent", function () {
      return PropertyTowerDetailsComponent;
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


    var _property_units_details_property_units_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../property-units-details/property-units-details.component */
    "./src/app/ams/my-property/components/property-view/property-units-details/property-units-details.component.ts");
    /* harmony import */


    var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");

    var PropertyTowerDetailsComponent =
    /*#__PURE__*/
    function () {
      function PropertyTowerDetailsComponent( //private srvPV:PropertyViewService,
      renderer, apartmentService, cd, srvModal) {
        _classCallCheck(this, PropertyTowerDetailsComponent);

        this.renderer = renderer;
        this.apartmentService = apartmentService;
        this.cd = cd;
        this.srvModal = srvModal;
      }

      _createClass(PropertyTowerDetailsComponent, [{
        key: "ddlDataLoad",
        value: function ddlDataLoad() {
          // Filter Type Data
          this.ddlfilterType = [{
            TypeId: "0",
            TypeName: "Select"
          }, {
            TypeId: "1",
            TypeName: "Unit Status"
          }, {
            TypeId: "2",
            TypeName: "Resident Type"
          }, {
            TypeId: "3",
            TypeName: "Resident Category"
          }, {
            TypeId: "4",
            TypeName: "Resident Vehicles"
          }, {
            TypeId: "5",
            TypeName: "Parking Slot"
          }, {
            TypeId: "6",
            TypeName: "Pets"
          }, {
            TypeId: "7",
            TypeName: "Elder People"
          }, {
            TypeId: "8",
            TypeName: "Kids"
          }]; // Filter Based On Data

          this.filterBased = [{
            BasedTypeId: "1",
            TypeId: "1",
            TypeName: "Available"
          }, {
            BasedTypeId: "2",
            TypeId: "1",
            TypeName: "Occupied"
          }, {
            BasedTypeId: "3",
            TypeId: "1",
            TypeName: "Construction"
          }, {
            BasedTypeId: "4",
            TypeId: "1",
            TypeName: "All"
          }, {
            BasedTypeId: "5",
            TypeId: "2",
            TypeName: "Owner"
          }, {
            BasedTypeId: "6",
            TypeId: "2",
            TypeName: "Tenant"
          }, {
            BasedTypeId: "7",
            TypeId: "2",
            TypeName: "All"
          }, {
            BasedTypeId: "8",
            TypeId: "3",
            TypeName: "1BHK"
          }, {
            BasedTypeId: "9",
            TypeId: "3",
            TypeName: "2BHK"
          }, {
            BasedTypeId: "10",
            TypeId: "3",
            TypeName: "3BHK"
          }, {
            BasedTypeId: "11",
            TypeId: "3",
            TypeName: "Pent House"
          }, {
            BasedTypeId: "12",
            TypeId: "3",
            TypeName: "All"
          }, {
            BasedTypeId: "13",
            TypeId: "4",
            TypeName: "Vehicle"
          }, {
            BasedTypeId: "14",
            TypeId: "4",
            TypeName: "No Vehicle"
          }, {
            BasedTypeId: "15",
            TypeId: "4",
            TypeName: "All"
          }, {
            BasedTypeId: "16",
            TypeId: "5",
            TypeName: "With Parking Slot"
          }, {
            BasedTypeId: "17",
            TypeId: "5",
            TypeName: "With out Slot"
          }, {
            BasedTypeId: "18",
            TypeId: "5",
            TypeName: "All"
          }, {
            BasedTypeId: "19",
            TypeId: "6",
            TypeName: "Pets"
          }, {
            BasedTypeId: "20",
            TypeId: "6",
            TypeName: "No Pets"
          }, {
            BasedTypeId: "21",
            TypeId: "6",
            TypeName: "All"
          }, {
            BasedTypeId: "22",
            TypeId: "7",
            TypeName: ">60"
          }, {
            BasedTypeId: "23",
            TypeId: "8",
            TypeName: "<18"
          }];
        }
      }, {
        key: "controlStatus",
        value: function controlStatus() {
          this.IsAllUnitStatus = this.IsAllResidentCategory = this.IsAllResidentType = this.IsAllResidentVehicles = this.IsAllParkingSlots = this.IsAllPets = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ddlDataLoad();
          this.controlStatus();
          this.SampleUnitData();
          console.log(this.unitSampleData); // this.srvPV.Mode.subscribe(res=>{
          //   if (!isNullOrUndefined(res.data)) {
          //   this.towerDetails = res.data;
          //   this.apartmentService.getApartmentBlockUnitByBlockId(parseInt(this.towerDetails.apartmentBlockId)).subscribe((res:any) => {
          //     this.towerUnitData = res;
          //     console.log(this.towerUnitData);
          //     this.totalItems = this.towerUnitData.length;  
          //     this.cd.markForCheck();
          //   });
          //   }
          // });

          this.selectedFilterType = this.ddlfilterType.find(function (x) {
            return x.TypeName === 'Select';
          }).TypeId;
          this.cd.markForCheck();
        }
      }, {
        key: "Goback",
        value: function Goback() {//  this.srvPV.Mode.next({ mode: 'List',data:null });
        }
      }, {
        key: "ShowUnits",
        value: function ShowUnits(units) {
          // this.srvPV.Mode.next({ mode: 'UnitDetails',data:units });
          this.srvModal.showUnitDetailsModal(units);
        }
      }, {
        key: "SampleUnitData",
        value: function SampleUnitData() {
          this.unitSampleData = [{
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "100",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "101",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "102",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "103",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "104",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "105",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "106",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "107",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "108",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "109",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "110",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "111",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "112",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "113",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "114",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "115",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "116",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "117",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "118",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "119",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "120",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "121",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "122",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "123",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "124",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "125",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "126",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "127",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "128",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "129",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "130",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "131",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "132",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "133",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "134",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "135",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "136",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "137",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "138",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "139",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "140",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "141",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "142",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "143",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "144",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "145",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "146",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "147",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "148",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "149",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "150",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "151",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "152",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "153",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "154",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "155",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "156",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "157",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "158",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "159",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "160",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "161",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "162",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "163",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "164",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "165",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "166",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "167",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "168",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "169",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "170",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "171",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "172",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "173",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "174",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "175",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "176",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "177",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "178",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "179",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "180",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "181",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "182",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "183",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "184",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "185",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "186",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "187",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "188",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "189",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "190",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "191",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "192",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "193",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "194",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "195",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "196",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "197",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "198",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F001",
            apartmentBlockUnitNumber: "199",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "1020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "1019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "1020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "200",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "201",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "202",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "203",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "204",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "205",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "206",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "207",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "208",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "209",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "210",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "211",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "212",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "213",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "214",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "215",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "216",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "217",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "218",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "219",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "220",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "221",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "222",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "223",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "224",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "225",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "226",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "227",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "228",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "229",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "230",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "231",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "232",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "233",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "234",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "235",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "236",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "237",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "238",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "239",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "240",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "241",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "242",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "243",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "244",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "245",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "246",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "247",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "248",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "249",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "250",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "251",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "252",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "253",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "254",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "255",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "256",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "257",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "258",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "259",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "260",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "261",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "262",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "263",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "264",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "265",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "266",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "267",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "268",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "269",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "270",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "271",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "272",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "273",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "274",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "275",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "276",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "277",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "278",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "279",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "280",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "281",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "282",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "283",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "284",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "285",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "286",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "287",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "288",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "289",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "290",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "291",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "292",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "293",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "294",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "295",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "296",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "297",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "298",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }, {
            apartmentBlockUnitId: 1,
            FloorNo: "F002",
            apartmentBlockUnitNumber: "299",
            apartmentBlockNumber: "Tower-1",
            unitType: "3BHK",
            builtupArea: 1050,
            carpetArea: 950,
            intercom: "+919-9856985650",
            cars: 3,
            isAvailableForRent: true,
            availableDate: "2020-02-08T00:00:00",
            rentAmount: 10000,
            advanceAmount: 100000,
            isPetsAllowed: true,
            isFurnished: true,
            isVacant: true,
            isSold: true,
            constructionInProgress: false,
            unitConstructionArea: null,
            propertyManagerId: 1,
            isActive: true,
            insertedBy: 1,
            insertedOn: "2019-11-04T14:50:50.97",
            updatedBy: 1,
            updatedOn: "2020-02-14T01:03:39.837"
          }];
        }
      }, {
        key: "loadFilterBased",
        value: function loadFilterBased(evt) {
          this.controlStatus();
          this.ddlfilterBased = [];
          this.ddlfilterBased = this.filterBased.filter(function (x) {
            return x.TypeId === evt;
          });
          this.cd.markForCheck();
        }
      }, {
        key: "getFilterBasedData",
        value: function getFilterBasedData(evt) {
          var _this20 = this;

          var filterTypeName = this.ddlfilterType.find(function (x) {
            return x.TypeId === _this20.selectedFilterType;
          }).TypeName;
          var filterBasedTypeName = this.ddlfilterBased.find(function (x) {
            return x.BasedTypeId === evt;
          }).TypeName;
          console.log(filterTypeName);
          console.log(this.selectedFilterBasedType);

          if (filterTypeName === 'Unit Status' && filterBasedTypeName === 'All') {
            this.IsAllUnitStatus = true;
            this.IsAllResidentCategory = this.IsAllResidentType = this.IsAllResidentVehicles = this.IsAllParkingSlots = this.IsAllPets = false;
          } else if (filterTypeName === 'Resident Type' && filterBasedTypeName === 'All') {
            this.IsAllResidentType = true;
            this.IsAllResidentCategory = this.IsAllUnitStatus = this.IsAllResidentVehicles = this.IsAllParkingSlots = this.IsAllPets = false;
          } else if (filterTypeName === 'Resident Category' && filterBasedTypeName === 'All') {
            this.IsAllResidentCategory = true;
            this.IsAllResidentType = this.IsAllUnitStatus = this.IsAllResidentVehicles = this.IsAllParkingSlots = this.IsAllPets = false;
          } else if (filterTypeName === 'Resident Vehicles' && filterBasedTypeName === 'All') {
            this.IsAllResidentVehicles = true;
            this.IsAllResidentCategory = this.IsAllUnitStatus = this.IsAllResidentType = this.IsAllParkingSlots = this.IsAllPets = false;
          } else if (filterTypeName === 'Parking Slot' && filterBasedTypeName === 'All') {
            this.IsAllParkingSlots = true;
            this.IsAllResidentCategory = this.IsAllUnitStatus = this.IsAllResidentVehicles = this.IsAllResidentType = this.IsAllPets = false;
          } else if (filterTypeName === 'Pets' && filterBasedTypeName === 'All') {
            this.IsAllPets = true;
            this.IsAllResidentCategory = this.IsAllUnitStatus = this.IsAllResidentVehicles = this.IsAllParkingSlots = this.IsAllResidentType = false;
          } else {
            this.controlStatus();
          }
        }
      }, {
        key: "showTooltip",
        value: function showTooltip($event, data) {
          var circle = $event.target;
          var coordinates = circle.getBoundingClientRect();
          var x = "".concat(coordinates.left + 20, "px");
          var y = "".concat(coordinates.top + 20, "px");
          this.renderer.setStyle(this.tooltip.nativeElement, 'left', x);
          this.renderer.setStyle(this.tooltip.nativeElement, 'top', y);
          this.renderer.setStyle(this.tooltip.nativeElement, 'display', 'block');
          this.renderer.setProperty(this.tooltip.nativeElement, 'innerHTML', data);
          console.log(circle); // this.tooltip.nativeElement.html = txt;
          // this.tooltip.nativeElement.style.display = "block";
          // this.tooltip.nativeElement.style.left = evt.pageX + 10 + 'px';
          // this.tooltip.nativeElement.style.top = evt.pageY + 10 + 'px';
        }
      }, {
        key: "hideTooltip",
        value: function hideTooltip() {
          this.renderer.setProperty(this.tooltip.nativeElement, 'innerHTML', '');
          this.renderer.setStyle(this.tooltip.nativeElement, 'display', 'none'); // this.tooltip.nativeElement.style.display = "none";
        }
      }]);

      return PropertyTowerDetailsComponent;
    }();

    PropertyTowerDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_property_units_details_property_units_details_component__WEBPACK_IMPORTED_MODULE_3__["PropertyUnitsDetailsComponent"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _property_units_details_property_units_details_component__WEBPACK_IMPORTED_MODULE_3__["PropertyUnitsDetailsComponent"])], PropertyTowerDetailsComponent.prototype, "child", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("unitNoToolTip"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PropertyTowerDetailsComponent.prototype, "unitNoToolTip", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("unitTypeToolTip"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PropertyTowerDetailsComponent.prototype, "unitTypeToolTip", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("advanceAmtToolTip"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PropertyTowerDetailsComponent.prototype, "advanceAmtToolTip", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("rentAmtToolTip"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PropertyTowerDetailsComponent.prototype, "rentAmtToolTip", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tooltip'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PropertyTowerDetailsComponent.prototype, "tooltip", void 0);
    PropertyTowerDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-tower-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-tower-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-tower-details/property-tower-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-tower-details.component.scss */
      "./src/app/ams/my-property/components/property-view/property-tower-details/property-tower-details.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]])], PropertyTowerDetailsComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-view/property-tower-list/property-tower-list.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-view/property-tower-list/property-tower-list.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyViewPropertyTowerListPropertyTowerListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LXZpZXcvcHJvcGVydHktdG93ZXItbGlzdC9wcm9wZXJ0eS10b3dlci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-view/property-tower-list/property-tower-list.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-view/property-tower-list/property-tower-list.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: PropertyTowerListComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyViewPropertyTowerListPropertyTowerListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyTowerListComponent", function () {
      return PropertyTowerListComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var PropertyTowerListComponent =
    /*#__PURE__*/
    function () {
      function PropertyTowerListComponent( //private srvPV: PropertyViewService,
      apartmentService, cookieService) {
        _classCallCheck(this, PropertyTowerListComponent);

        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
      }

      _createClass(PropertyTowerListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockByApartmentId(params).subscribe(function (res) {
            console.log('Tower Details');
            console.log(res);
            _this21.propertyTowerData = res;
          });
        }
      }, {
        key: "GetDetails",
        value: function GetDetails(item) {
          console.log(item); // this.srvPV.Mode.next({ mode: 'Details',data:item });
        }
      }]);

      return PropertyTowerListComponent;
    }();

    PropertyTowerListComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    PropertyTowerListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-tower-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-tower-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-tower-list/property-tower-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-tower-list.component.scss */
      "./src/app/ams/my-property/components/property-view/property-tower-list/property-tower-list.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])], PropertyTowerListComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-view/property-view-graphic/property-view-graphic.component.scss":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-view/property-view-graphic/property-view-graphic.component.scss ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyViewPropertyViewGraphicPropertyViewGraphicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LXZpZXcvcHJvcGVydHktdmlldy1ncmFwaGljL3Byb3BlcnR5LXZpZXctZ3JhcGhpYy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-view/property-view-graphic/property-view-graphic.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-view/property-view-graphic/property-view-graphic.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: PropertyViewGraphicComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyViewPropertyViewGraphicPropertyViewGraphicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyViewGraphicComponent", function () {
      return PropertyViewGraphicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PropertyViewGraphicComponent =
    /*#__PURE__*/
    function () {
      function PropertyViewGraphicComponent() {
        _classCallCheck(this, PropertyViewGraphicComponent);
      }

      _createClass(PropertyViewGraphicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PropertyViewGraphicComponent;
    }();

    PropertyViewGraphicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-view-graphic',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-view-graphic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-view-graphic/property-view-graphic.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-view-graphic.component.scss */
      "./src/app/ams/my-property/components/property-view/property-view-graphic/property-view-graphic.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PropertyViewGraphicComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-view/property-view-grid/property-view-grid.component.scss":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-view/property-view-grid/property-view-grid.component.scss ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyViewPropertyViewGridPropertyViewGridComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-grid {\n  width: 100%;\n  min-height: calc(100vh - 140px);\n  overflow: hidden;\n}\n.property-grid .property-grid-head {\n  color: #000b86;\n  font-family: \"Lato\", sans-serif;\n  margin-bottom: 12px;\n}\n.property-grid .towerDetail {\n  width: 100%;\n  padding: 12px;\n}\n.property-grid .towerDetail span {\n  margin-top: 12px;\n  color: #757575ad;\n}\n.property-grid .towerDetail .fill-property-svg {\n  fill: #ebebeb;\n}\n.property-grid .towerDetail > img {\n  width: 120px;\n}\n.property-grid .towerDetail .tower-name {\n  color: #757575ad;\n  font-weight: 700;\n  font-size: 12px;\n  font-family: \"Lato\", sans-serif;\n  margin-top: 12px;\n}\n.property-grid .towerDetail .total {\n  margin-left: 12px;\n  width: auto;\n  border-radius: 50%;\n  background-color: #eaeaea;\n  color: #797979;\n  font-size: 10px;\n  padding: 6px;\n}\n.property-grid .property-filter h6 {\n  color: #000b86;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n.property-grid .property-filter h6 img {\n  width: 3.7%;\n}\n.property-grid .property-filter .peoprty-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n.property-grid .property-filter .peoprty-actions img {\n  background-color: #eaeaea;\n  width: 22px;\n  padding: 4px;\n  margin-right: 12px;\n}\n.property-grid .property-filter label {\n  color: #419fd5;\n}\n.property-grid .property-filter .filtered {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.property-grid .property-filter .filtered .legend {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n}\n.property-grid .property-filter .filtered span {\n  color: #757575ad;\n  font-size: 12px;\n  font-family: \"Lato\", sans-serif;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100px;\n  min-width: 100px;\n}\n.property-grid .property-filter .filtered .total-count {\n  background-color: #eaeaea;\n  color: #383737;\n  font-size: 12px;\n  padding: 2px 6px;\n  font-weight: 600;\n}\n.property-grid .property-view {\n  width: 100%;\n  min-height: 800px;\n  padding: 12px;\n  transition: transform 0.25s ease;\n  transform-origin: 0 0;\n}\n.property-grid .property-view .property-view-head {\n  width: 100%;\n}\n.property-grid .property-view .property-view-head label {\n  color: #419fd5;\n}\n.property-grid .property-view .property-view-head label:first-child {\n  width: 10%;\n}\n.property-grid .property-view .property-view-head label:last-child {\n  width: 90%;\n}\n.property-grid .property-view .property-view-content {\n  width: 100%;\n  display: flex;\n}\n.property-grid .property-view .property-view-content div:first-child {\n  width: 10%;\n}\n.property-grid .property-view .property-view-content div:last-child {\n  width: 90%;\n  display: flex;\n  justify-content: flex-start;\n}\n.property-grid .property-view .property-view-content div .property-floors {\n  color: #757575ad;\n  font-family: \"Lato\", sans-serif;\n}\n.property-grid .property-view .property-view-content div .property-units {\n  width: 10px;\n  height: 10px;\n  background-color: #eaeaea;\n  margin-right: 10px;\n  border-radius: 2px;\n  color: white;\n  font-size: 4px;\n  text-align: center;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.floorDetails {\n  z-index: 99999;\n}\n.floorDetails .tooltip-inner {\n  z-index: 99999;\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n}\n.floorDetails .tooltip-inner div {\n  width: 100%;\n  display: flex;\n}\n.floorDetails .tooltip-inner div span {\n  width: 50%;\n}\n.floorDetails .tooltip-inner div span:first-child {\n  color: white;\n  text-align: left;\n}\n.floorDetails .tooltip-inner div span:last-child {\n  color: #419fd5;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS12aWV3L3Byb3BlcnR5LXZpZXctZ3JpZC9wcm9wZXJ0eS12aWV3LWdyaWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LXZpZXcvcHJvcGVydHktdmlldy1ncmlkL3Byb3BlcnR5LXZpZXctZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDRVI7QUREUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHWjtBRERRO0VBQ0ksYUFBQTtBQ0daO0FERFE7RUFDSSxZQUFBO0FDR1o7QUREUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0daO0FERFE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDR1o7QURDUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NaO0FEQVk7RUFDSSxXQUFBO0FDRWhCO0FEQ1E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUNDWjtBREFZO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRWhCO0FEQ1E7RUFDSSxjQUFBO0FDQ1o7QURDUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0NaO0FEQVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRWhCO0FEQVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QURBWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRWhCO0FERUk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtBQ0FSO0FEQ1E7RUFDSSxXQUFBO0FDQ1o7QURBWTtFQUNJLGNBQUE7QUNFaEI7QUREZ0I7RUFDSSxVQUFBO0FDR3BCO0FERGdCO0VBQ0ksVUFBQTtBQ0dwQjtBRENRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDWjtBRENnQjtFQUNJLFVBQUE7QUNDcEI7QURDZ0I7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDQ3BCO0FEQ2dCO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtBQ0NwQjtBRENnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ3BCO0FETUE7RUFDSSxjQUFBO0FDSEo7QURJSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRlI7QURHUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDRFo7QURFWTtFQUNJLFVBQUE7QUNBaEI7QURDZ0I7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDcEI7QURDZ0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNDcEIiLCJmaWxlIjoic3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS12aWV3L3Byb3BlcnR5LXZpZXctZ3JpZC9wcm9wZXJ0eS12aWV3LWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydHktZ3JpZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQwcHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLnByb3BlcnR5LWdyaWQtaGVhZHtcbiAgICAgICAgY29sb3I6ICMwMDBiODY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG4gICAgLnRvd2VyRGV0YWlse1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjojNzU3NTc1YWQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbGwtcHJvcGVydHktc3Zne1xuICAgICAgICAgICAgZmlsbDojZWJlYmViO1xuICAgICAgICB9XG4gICAgICAgID5pbWd7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRvd2VyLW5hbWV7XG4gICAgICAgICAgICBjb2xvcjogIzc1NzU3NWFkO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRvdGFse1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJvcGVydHktZmlsdGVye1xuICAgICAgICBoNntcbiAgICAgICAgICAgIGNvbG9yOiMwMDBiODY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMuNyU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnBlb3BydHktYWN0aW9uc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWx7XG4gICAgICAgICAgICBjb2xvcjojNDE5ZmQ1O1xuICAgICAgICB9XG4gICAgICAgIC5maWx0ZXJlZHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC5sZWdlbmR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3NTc1NzVhZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG90YWwtY291bnR7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM4MzczNztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wcm9wZXJ0eS12aWV3e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgICAgIC5wcm9wZXJ0eS12aWV3LWhlYWR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGxhYmVse1xuICAgICAgICAgICAgICAgIGNvbG9yOiM0MTlmZDU7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByb3BlcnR5LXZpZXctY29udGVudHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9wZXJ0eS1mbG9vcnN7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiM3NTc1NzVhZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvcGVydHktdW5pdHN7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZsb29yRGV0YWlsc3tcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAudG9vbHRpcC1pbm5lciB7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzQxOWZkNTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbn0gXG5cbiIsIi5wcm9wZXJ0eS1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvcGVydHktZ3JpZCAucHJvcGVydHktZ3JpZC1oZWFkIHtcbiAgY29sb3I6ICMwMDBiODY7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5wcm9wZXJ0eS1ncmlkIC50b3dlckRldGFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLnByb3BlcnR5LWdyaWQgLnRvd2VyRGV0YWlsIHNwYW4ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBjb2xvcjogIzc1NzU3NWFkO1xufVxuLnByb3BlcnR5LWdyaWQgLnRvd2VyRGV0YWlsIC5maWxsLXByb3BlcnR5LXN2ZyB7XG4gIGZpbGw6ICNlYmViZWI7XG59XG4ucHJvcGVydHktZ3JpZCAudG93ZXJEZXRhaWwgPiBpbWcge1xuICB3aWR0aDogMTIwcHg7XG59XG4ucHJvcGVydHktZ3JpZCAudG93ZXJEZXRhaWwgLnRvd2VyLW5hbWUge1xuICBjb2xvcjogIzc1NzU3NWFkO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5wcm9wZXJ0eS1ncmlkIC50b3dlckRldGFpbCAudG90YWwge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgY29sb3I6ICM3OTc5Nzk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogNnB4O1xufVxuLnByb3BlcnR5LWdyaWQgLnByb3BlcnR5LWZpbHRlciBoNiB7XG4gIGNvbG9yOiAjMDAwYjg2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb3BlcnR5LWdyaWQgLnByb3BlcnR5LWZpbHRlciBoNiBpbWcge1xuICB3aWR0aDogMy43JTtcbn1cbi5wcm9wZXJ0eS1ncmlkIC5wcm9wZXJ0eS1maWx0ZXIgLnBlb3BydHktYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucHJvcGVydHktZ3JpZCAucHJvcGVydHktZmlsdGVyIC5wZW9wcnR5LWFjdGlvbnMgaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgd2lkdGg6IDIycHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLnByb3BlcnR5LWdyaWQgLnByb3BlcnR5LWZpbHRlciBsYWJlbCB7XG4gIGNvbG9yOiAjNDE5ZmQ1O1xufVxuLnByb3BlcnR5LWdyaWQgLnByb3BlcnR5LWZpbHRlciAuZmlsdGVyZWQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvcGVydHktZ3JpZCAucHJvcGVydHktZmlsdGVyIC5maWx0ZXJlZCAubGVnZW5kIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnByb3BlcnR5LWdyaWQgLnByb3BlcnR5LWZpbHRlciAuZmlsdGVyZWQgc3BhbiB7XG4gIGNvbG9yOiAjNzU3NTc1YWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbi5wcm9wZXJ0eS1ncmlkIC5wcm9wZXJ0eS1maWx0ZXIgLmZpbHRlcmVkIC50b3RhbC1jb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIGNvbG9yOiAjMzgzNzM3O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucHJvcGVydHktZ3JpZCAucHJvcGVydHktdmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgcGFkZGluZzogMTJweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbn1cbi5wcm9wZXJ0eS1ncmlkIC5wcm9wZXJ0eS12aWV3IC5wcm9wZXJ0eS12aWV3LWhlYWQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9wZXJ0eS1ncmlkIC5wcm9wZXJ0eS12aWV3IC5wcm9wZXJ0eS12aWV3LWhlYWQgbGFiZWwge1xuICBjb2xvcjogIzQxOWZkNTtcbn1cbi5wcm9wZXJ0eS1ncmlkIC5wcm9wZXJ0eS12aWV3IC5wcm9wZXJ0eS12aWV3LWhlYWQgbGFiZWw6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMTAlO1xufVxuLnByb3BlcnR5LWdyaWQgLnByb3BlcnR5LXZpZXcgLnByb3BlcnR5LXZpZXctaGVhZCBsYWJlbDpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDkwJTtcbn1cbi5wcm9wZXJ0eS1ncmlkIC5wcm9wZXJ0eS12aWV3IC5wcm9wZXJ0eS12aWV3LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9wZXJ0eS1ncmlkIC5wcm9wZXJ0eS12aWV3IC5wcm9wZXJ0eS12aWV3LWNvbnRlbnQgZGl2OmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5wcm9wZXJ0eS1ncmlkIC5wcm9wZXJ0eS12aWV3IC5wcm9wZXJ0eS12aWV3LWNvbnRlbnQgZGl2Omxhc3QtY2hpbGQge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ucHJvcGVydHktZ3JpZCAucHJvcGVydHktdmlldyAucHJvcGVydHktdmlldy1jb250ZW50IGRpdiAucHJvcGVydHktZmxvb3JzIHtcbiAgY29sb3I6ICM3NTc1NzVhZDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuLnByb3BlcnR5LWdyaWQgLnByb3BlcnR5LXZpZXcgLnByb3BlcnR5LXZpZXctY29udGVudCBkaXYgLnByb3BlcnR5LXVuaXRzIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mbG9vckRldGFpbHMge1xuICB6LWluZGV4OiA5OTk5OTtcbn1cbi5mbG9vckRldGFpbHMgLnRvb2x0aXAtaW5uZXIge1xuICB6LWluZGV4OiA5OTk5OTtcbiAgd2lkdGg6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsb29yRGV0YWlscyAudG9vbHRpcC1pbm5lciBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mbG9vckRldGFpbHMgLnRvb2x0aXAtaW5uZXIgZGl2IHNwYW4ge1xuICB3aWR0aDogNTAlO1xufVxuLmZsb29yRGV0YWlscyAudG9vbHRpcC1pbm5lciBkaXYgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mbG9vckRldGFpbHMgLnRvb2x0aXAtaW5uZXIgZGl2IHNwYW46bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjNDE5ZmQ1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-view/property-view-grid/property-view-grid.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-view/property-view-grid/property-view-grid.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: PropertyViewGridComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyViewPropertyViewGridPropertyViewGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyViewGridComponent", function () {
      return PropertyViewGridComponent;
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


    var _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! html2canvas */
    "./node_modules/html2canvas/dist/html2canvas.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);

    var PropertyViewGridComponent =
    /*#__PURE__*/
    function () {
      function PropertyViewGridComponent(apartmentService, cookieService) {
        _classCallCheck(this, PropertyViewGridComponent);

        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
        this.towerList = [];
        this.filterList = [];
        this.floorData = [];
        this.scaleIndexValue = 1;
        this.scaleIndex = "scale(".concat(this.scaleIndexValue, ")");
        this.filterCategory = [];
        this.selectedFilter = "";
        this.customOptions = {
          // loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          // margin:15,
          dots: false,
          navSpeed: 700,
          navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
          responsive: {
            0: {
              items: 2
            },
            400: {
              items: 2
            },
            740: {
              items: 3
            },
            940: {
              items: 4
            }
          },
          nav: true
        };
      }

      _createClass(PropertyViewGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filterList = [{
            color: "#9c27b0",
            name: "1BHK Units",
            count: 0
          }, {
            color: "#2196f3",
            name: "2BHK Units",
            count: 0
          }, {
            color: "#ff558f",
            name: "3BHK Units",
            count: 0
          }];
          this.filterCategory = [{
            name: 'Unit Status- Vacant,Sale,Occupied,Construction',
            id: 'isVacant',
            isClubbed: true,
            color: '#3777ce'
          }, {
            name: 'Unit Resident type- Owner/Tenant',
            id: 'isAvailableForRent',
            isClubbed: true,
            color: '#e91e63'
          }, {
            name: 'Unit Size Type 1BHK, 2BHK, 3BHK',
            id: 'lookupValueName',
            isClubbed: true,
            typeList: [{
              type: '1BHK',
              color: '#9c27b0'
            }, {
              type: '2 BR',
              color: '#2196f3'
            }, {
              type: '3BHK',
              color: '#ff558f'
            }]
          }, {
            name: 'Units with Parking Status',
            id: '',
            isClubbed: false,
            color: '#2196f3'
          }, {
            name: 'Units with Pets',
            id: 'isPetsAllowed',
            isClubbed: false,
            color: '#009688'
          }, {
            name: 'Units with Elderly residents (Age 60+)',
            id: '',
            isClubbed: false,
            color: '#8bc34a'
          }, {
            name: 'Units with Kids',
            id: '',
            isClubbed: false,
            color: '#ffc107'
          }, {
            name: 'Units with rental Agreement expiring in 30 days',
            id: '',
            isClubbed: false,
            color: '#795548'
          }, {
            name: 'Units with moveout scheduled in 7 days',
            id: '',
            isClubbed: false,
            color: '#607d8b'
          }, {
            name: 'Units with outofcondo Status',
            id: 'isActive',
            isClubbed: false,
            color: '#f44336'
          }];
          this.getBlockList();
        }
      }, {
        key: "getSelectedUnits",
        value: function getSelectedUnits(category, unitObj) {
          console.log(unitObj[category]);

          if (category != '' && unitObj[category]) {
            var selectedCategoryObj = this.filterCategory.find(function (key) {
              if (key.id == category) return key;
            });

            if (selectedCategoryObj.isClubbed) {
              var selectedColor = selectedCategoryObj.typeList.filter(function (item) {
                if (item.type == unitObj[category]) {
                  return item.color;
                }
              });
              return selectedColor[0].color;
            } else {
              return selectedCategoryObj.color;
            }
          }
        }
      }, {
        key: "getBlockList",
        value: function getBlockList() {
          var _this22 = this;

          var param = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockByApartmentId(param).subscribe(function (resp) {
            _this22.towerList = resp;
            _this22.selectedBlockId = _this22.towerList[0].apartmentBlockId;
            _this22.selectedTowerName = _this22.towerList[0].description;

            _this22.getTowerDetails();
          }, function (error) {});
        }
      }, {
        key: "getTowerDetails",
        value: function getTowerDetails() {
          var _this23 = this;

          var param = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentBlockId: this.selectedBlockId
          };
          this.apartmentService.getViewUnitTypeByApartmentId(param).subscribe(function (resp) {
            _this23.floorData = resp;

            _this23.getTotalCount();
          }, function (error) {});
        }
      }, {
        key: "getTotalCount",
        value: function getTotalCount() {
          var _this24 = this;

          if (this.floorData && this.floorData.length) {
            this.floorData.filter(function (key) {
              if (key.lookupValueName == '1BHK') {
                _this24.filterList[0].count += 1;
              } else if (key.lookupValueName == '2BHK') {
                _this24.filterList[1].count += 1;
              } else if (key.lookupValueName == '3BHK') {
                _this24.filterList[2].count += 1;
              }
            });
          }
        }
      }, {
        key: "selectedTower",
        value: function selectedTower(blockId, name) {
          this.scaleIndexValue = 1;
          this.scaleIndex = "scale(".concat(this.scaleIndexValue, ")");
          this.selectedFilter = "";
          this.selectedBlockId = blockId;
          this.selectedTowerName = name;
          this.getTowerDetails();
        }
      }, {
        key: "downloadPdf",
        value: function downloadPdf() {
          var _this25 = this;

          setTimeout(function () {
            var data = document.getElementById('property-view');
            html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(data).then(function (canvas) {
              // Few necessary setting options  
              var imgWidth = 208; // var pageHeight = 295;    

              var imgHeight = canvas.height * imgWidth / canvas.width; // var heightLeft = imgHeight;  

              var contentDataURL = canvas.toDataURL('image/png');
              var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__('p', 'mm', 'a4'); // A4 size page of PDF  

              var position = 0;
              pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
              pdf.save("".concat(_this25.selectedTowerName, ".pdf"));
            });
          }, 1000);
        }
      }, {
        key: "zoomIn",
        value: function zoomIn() {
          if (this.scaleIndexValue <= 2.5) {
            this.scaleIndexValue += 0.5;
            this.scaleIndex = "scale(".concat(this.scaleIndexValue, ")");
          }
        }
      }, {
        key: "zoomOut",
        value: function zoomOut() {
          if (this.scaleIndexValue >= 1.5) {
            this.scaleIndexValue -= 0.5;
            this.scaleIndex = "scale(".concat(this.scaleIndexValue, ")");
          }
        }
      }]);

      return PropertyViewGridComponent;
    }();

    PropertyViewGridComponent.ctorParameters = function () {
      return [{
        type: _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scene', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PropertyViewGridComponent.prototype, "scene", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('propertyView'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PropertyViewGridComponent.prototype, "propertyView", void 0);
    PropertyViewGridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-view-grid',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-view-grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-view-grid/property-view-grid.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-view-grid.component.scss */
      "./src/app/ams/my-property/components/property-view/property-view-grid/property-view-grid.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])], PropertyViewGridComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.scss":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.scss ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyViewPropertyViewMainPropertyViewMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LXZpZXcvcHJvcGVydHktdmlldy1tYWluL3Byb3BlcnR5LXZpZXctbWFpbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: PropertyViewMainComponent */

  /***/
  function srcAppAmsMyPropertyComponentsPropertyViewPropertyViewMainPropertyViewMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyViewMainComponent", function () {
      return PropertyViewMainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PropertyViewMainComponent =
    /*#__PURE__*/
    function () {
      function PropertyViewMainComponent() {
        _classCallCheck(this, PropertyViewMainComponent);
      }

      _createClass(PropertyViewMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PropertyViewMainComponent;
    }();

    PropertyViewMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-view-main',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-view-main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-view-main.component.scss */
      "./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.scss"))["default"]]
    })], PropertyViewMainComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/my-property-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ams/my-property/my-property-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: routes, MyPropertyRoutingModule */

  /***/
  function srcAppAmsMyPropertyMyPropertyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPropertyRoutingModule", function () {
      return MyPropertyRoutingModule;
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


    var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../.././auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _components_property_configuration_property_configuration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/property-configuration/property-configuration.component */
    "./src/app/ams/my-property/components/property-configuration/property-configuration.component.ts");
    /* harmony import */


    var _components_property_configuration_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/property-configuration/property-details/property-details.component */
    "./src/app/ams/my-property/components/property-configuration/property-details/property-details.component.ts");
    /* harmony import */


    var _components_property_configuration_property_profile_property_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/property-configuration/property-profile/property-profile.component */
    "./src/app/ams/my-property/components/property-configuration/property-profile/property-profile.component.ts");
    /* harmony import */


    var _components_property_configuration_property_facility_property_facility_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/property-configuration/property-facility/property-facility.component */
    "./src/app/ams/my-property/components/property-configuration/property-facility/property-facility.component.ts");
    /* harmony import */


    var _components_property_configuration_property_parking_details_property_parking_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/property-configuration/property-parking-details/property-parking-details.component */
    "./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details.component.ts");
    /* harmony import */


    var _components_property_configuration_property_asset_category_property_asset_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/property-configuration/property-asset-category/property-asset-category.component */
    "./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category.component.ts");
    /* harmony import */


    var _components_property_alerts_property_alerts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/property-alerts/property-alerts.component */
    "./src/app/ams/my-property/components/property-alerts/property-alerts.component.ts");
    /* harmony import */


    var _components_property_alerts_property_alerts_info_property_alerts_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/property-alerts/property-alerts-info/property-alerts-info.component */
    "./src/app/ams/my-property/components/property-alerts/property-alerts-info/property-alerts-info.component.ts");
    /* harmony import */


    var _components_property_view_property_view_main_property_view_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/property-view/property-view-main/property-view-main.component */
    "./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'property-configuration',
      pathMatch: 'full'
    }, {
      path: 'property-configuration',
      component: _components_property_configuration_property_configuration_component__WEBPACK_IMPORTED_MODULE_4__["PropertyConfigurationComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      children: [{
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }, {
        path: 'profile',
        component: _components_property_configuration_property_profile_property_profile_component__WEBPACK_IMPORTED_MODULE_6__["PropertyProfileComponent"]
      }, {
        path: 'details',
        component: _components_property_configuration_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_5__["PropertyDetailsComponent"]
      }, {
        path: 'facility',
        component: _components_property_configuration_property_facility_property_facility_component__WEBPACK_IMPORTED_MODULE_7__["PropertyFacilityComponent"]
      }, {
        path: 'parking',
        component: _components_property_configuration_property_parking_details_property_parking_details_component__WEBPACK_IMPORTED_MODULE_8__["PropertyParkingDetailsComponent"]
      }, {
        path: 'asset/:id',
        component: _components_property_configuration_property_asset_category_property_asset_category_component__WEBPACK_IMPORTED_MODULE_9__["PropertyAssetCategoryComponent"]
      }, {
        path: '**',
        redirectTo: 'profile',
        pathMatch: 'full'
      }]
    }, {
      path: 'property-alerts',
      component: _components_property_alerts_property_alerts_component__WEBPACK_IMPORTED_MODULE_10__["PropertyAlertsComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      children: [{
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      }, {
        path: 'all',
        component: _components_property_alerts_property_alerts_info_property_alerts_info_component__WEBPACK_IMPORTED_MODULE_11__["PropertyAlertsInfoComponent"]
      }, {
        path: 'alert/:id',
        component: _components_property_alerts_property_alerts_info_property_alerts_info_component__WEBPACK_IMPORTED_MODULE_11__["PropertyAlertsInfoComponent"]
      }, {
        path: '**',
        redirectTo: 'all',
        pathMatch: 'full'
      }]
    }, {
      path: 'property-view',
      component: _components_property_view_property_view_main_property_view_main_component__WEBPACK_IMPORTED_MODULE_12__["PropertyViewMainComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      children: [{
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: 'all',
        pathMatch: 'full'
      }]
    }, {
      path: '**',
      redirectTo: 'property-configuration',
      pathMatch: 'full'
    }];

    var MyPropertyRoutingModule = function MyPropertyRoutingModule() {
      _classCallCheck(this, MyPropertyRoutingModule);
    };

    MyPropertyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyPropertyRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/my-property/my-property.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/ams/my-property/my-property.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMyPropertyMyPropertyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9teS1wcm9wZXJ0eS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/my-property/my-property.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ams/my-property/my-property.component.ts ***!
    \**********************************************************/

  /*! exports provided: MyPropertyComponent */

  /***/
  function srcAppAmsMyPropertyMyPropertyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPropertyComponent", function () {
      return MyPropertyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyPropertyComponent =
    /*#__PURE__*/
    function () {
      function MyPropertyComponent() {
        _classCallCheck(this, MyPropertyComponent);
      }

      _createClass(MyPropertyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyPropertyComponent;
    }();

    MyPropertyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-property',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-property.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/my-property.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-property.component.scss */
      "./src/app/ams/my-property/my-property.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MyPropertyComponent);
    /***/
  },

  /***/
  "./src/app/ams/my-property/my-property.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ams/my-property/my-property.module.ts ***!
    \*******************************************************/

  /*! exports provided: MyPropertyModule */

  /***/
  function srcAppAmsMyPropertyMyPropertyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPropertyModule", function () {
      return MyPropertyModule;
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


    var _my_property_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-property-routing.module */
    "./src/app/ams/my-property/my-property-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _my_property_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-property.component */
    "./src/app/ams/my-property/my-property.component.ts");
    /* harmony import */


    var _components_property_configuration_property_configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/property-configuration/property-configuration.component */
    "./src/app/ams/my-property/components/property-configuration/property-configuration.component.ts");
    /* harmony import */


    var _components_property_configuration_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/property-configuration/property-details/property-details.component */
    "./src/app/ams/my-property/components/property-configuration/property-details/property-details.component.ts");
    /* harmony import */


    var _components_property_configuration_property_profile_property_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/property-configuration/property-profile/property-profile.component */
    "./src/app/ams/my-property/components/property-configuration/property-profile/property-profile.component.ts");
    /* harmony import */


    var _components_property_configuration_property_facility_property_facility_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/property-configuration/property-facility/property-facility.component */
    "./src/app/ams/my-property/components/property-configuration/property-facility/property-facility.component.ts");
    /* harmony import */


    var _components_property_configuration_property_parking_details_property_parking_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/property-configuration/property-parking-details/property-parking-details.component */
    "./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details.component.ts");
    /* harmony import */


    var _components_property_configuration_property_asset_category_property_asset_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/property-configuration/property-asset-category/property-asset-category.component */
    "./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category.component.ts");
    /* harmony import */


    var _components_property_alerts_property_alerts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/property-alerts/property-alerts.component */
    "./src/app/ams/my-property/components/property-alerts/property-alerts.component.ts");
    /* harmony import */


    var _components_property_configuration_property_details_property_tower_info_property_tower_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/property-configuration/property-details/property-tower-info/property-tower-info.component */
    "./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-info.component.ts");
    /* harmony import */


    var _components_property_configuration_property_details_property_tower_info_property_tower_unit_info_property_tower_unit_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/property-configuration/property-details/property-tower-info/property-tower-unit-info/property-tower-unit-info.component */
    "./src/app/ams/my-property/components/property-configuration/property-details/property-tower-info/property-tower-unit-info/property-tower-unit-info.component.ts");
    /* harmony import */


    var _components_property_configuration_property_facility_property_tower_facility_property_tower_facility_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component */
    "./src/app/ams/my-property/components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component.ts");
    /* harmony import */


    var _components_property_configuration_property_asset_category_property_asset_category_info_property_asset_category_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/property-configuration/property-asset-category/property-asset-category-info/property-asset-category-info.component */
    "./src/app/ams/my-property/components/property-configuration/property-asset-category/property-asset-category-info/property-asset-category-info.component.ts");
    /* harmony import */


    var _components_property_alerts_property_alerts_info_property_alerts_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/property-alerts/property-alerts-info/property-alerts-info.component */
    "./src/app/ams/my-property/components/property-alerts/property-alerts-info/property-alerts-info.component.ts");
    /* harmony import */


    var _components_property_configuration_property_parking_details_property_parking_details_info_property_parking_details_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/property-configuration/property-parking-details/property-parking-details-info/property-parking-details-info.component */
    "./src/app/ams/my-property/components/property-configuration/property-parking-details/property-parking-details-info/property-parking-details-info.component.ts");
    /* harmony import */


    var _components_property_view_property_tower_list_property_tower_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/property-view/property-tower-list/property-tower-list.component */
    "./src/app/ams/my-property/components/property-view/property-tower-list/property-tower-list.component.ts");
    /* harmony import */


    var _components_property_view_property_tower_details_property_tower_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/property-view/property-tower-details/property-tower-details.component */
    "./src/app/ams/my-property/components/property-view/property-tower-details/property-tower-details.component.ts");
    /* harmony import */


    var _components_property_view_property_units_details_property_units_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/property-view/property-units-details/property-units-details.component */
    "./src/app/ams/my-property/components/property-view/property-units-details/property-units-details.component.ts");
    /* harmony import */


    var _components_property_view_property_view_main_property_view_main_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/property-view/property-view-main/property-view-main.component */
    "./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_property_view_property_view_grid_property_view_grid_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/property-view/property-view-grid/property-view-grid.component */
    "./src/app/ams/my-property/components/property-view/property-view-grid/property-view-grid.component.ts");
    /* harmony import */


    var _components_property_view_property_view_graphic_property_view_graphic_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/property-view/property-view-graphic/property-view-graphic.component */
    "./src/app/ams/my-property/components/property-view/property-view-graphic/property-view-graphic.component.ts");

    var MyPropertyModule = function MyPropertyModule() {
      _classCallCheck(this, MyPropertyModule);
    };

    MyPropertyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_my_property_component__WEBPACK_IMPORTED_MODULE_5__["MyPropertyComponent"], _components_property_configuration_property_configuration_component__WEBPACK_IMPORTED_MODULE_6__["PropertyConfigurationComponent"], _components_property_configuration_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_7__["PropertyDetailsComponent"], _components_property_configuration_property_profile_property_profile_component__WEBPACK_IMPORTED_MODULE_8__["PropertyProfileComponent"], _components_property_configuration_property_facility_property_facility_component__WEBPACK_IMPORTED_MODULE_9__["PropertyFacilityComponent"], _components_property_configuration_property_parking_details_property_parking_details_component__WEBPACK_IMPORTED_MODULE_10__["PropertyParkingDetailsComponent"], _components_property_configuration_property_asset_category_property_asset_category_component__WEBPACK_IMPORTED_MODULE_11__["PropertyAssetCategoryComponent"], _components_property_alerts_property_alerts_component__WEBPACK_IMPORTED_MODULE_12__["PropertyAlertsComponent"], _components_property_configuration_property_details_property_tower_info_property_tower_info_component__WEBPACK_IMPORTED_MODULE_13__["PropertyTowerInfoComponent"], _components_property_configuration_property_details_property_tower_info_property_tower_unit_info_property_tower_unit_info_component__WEBPACK_IMPORTED_MODULE_14__["PropertyTowerUnitInfoComponent"], _components_property_configuration_property_facility_property_tower_facility_property_tower_facility_component__WEBPACK_IMPORTED_MODULE_15__["PropertyTowerFacilityComponent"], _components_property_configuration_property_asset_category_property_asset_category_info_property_asset_category_info_component__WEBPACK_IMPORTED_MODULE_16__["PropertyAssetCategoryInfoComponent"], _components_property_alerts_property_alerts_info_property_alerts_info_component__WEBPACK_IMPORTED_MODULE_17__["PropertyAlertsInfoComponent"], _components_property_configuration_property_parking_details_property_parking_details_info_property_parking_details_info_component__WEBPACK_IMPORTED_MODULE_18__["PropertyParkingDetailsInfoComponent"], _components_property_view_property_tower_list_property_tower_list_component__WEBPACK_IMPORTED_MODULE_19__["PropertyTowerListComponent"], _components_property_view_property_tower_details_property_tower_details_component__WEBPACK_IMPORTED_MODULE_20__["PropertyTowerDetailsComponent"], _components_property_view_property_units_details_property_units_details_component__WEBPACK_IMPORTED_MODULE_21__["PropertyUnitsDetailsComponent"], _components_property_view_property_view_main_property_view_main_component__WEBPACK_IMPORTED_MODULE_22__["PropertyViewMainComponent"], _components_property_view_property_view_grid_property_view_grid_component__WEBPACK_IMPORTED_MODULE_24__["PropertyViewGridComponent"], _components_property_view_property_view_graphic_property_view_graphic_component__WEBPACK_IMPORTED_MODULE_25__["PropertyViewGraphicComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _my_property_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyPropertyRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbTooltipModule"]],
      bootstrap: [_my_property_component__WEBPACK_IMPORTED_MODULE_5__["MyPropertyComponent"]]
    })], MyPropertyModule);
    /***/
  }
}]);
//# sourceMappingURL=my-property-my-property-module-es5.js.map