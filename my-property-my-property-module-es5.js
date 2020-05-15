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


    __webpack_exports__["default"] = "<app-property-tower-list *ngIf = \"Mode ==='List'\"></app-property-tower-list>\n<app-property-tower-details *ngIf = \"Mode ==='Details'\"></app-property-tower-details>\n\n";
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


    __webpack_exports__["default"] = ".property-alerts-info-wrapper .alerts-info-box .alert-box {\n  display: flex;\n  padding: 12px 0;\n}\n.property-alerts-info-wrapper .alerts-info-box .alert-box .date {\n  padding: 0 25px 0 0;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-size: 1.6rem;\n  color: #8391a1;\n}\n.property-alerts-info-wrapper .alerts-info-box .alert-box .info {\n  flex: 1;\n  border-bottom: 1px solid #eaeaea;\n  padding: 0 0 15px 0;\n}\n.property-alerts-info-wrapper .alerts-info-box .alert-box .info h5 {\n  padding: 0 0 4px 0;\n  color: #373946;\n}\n.property-alerts-info-wrapper .alerts-info-box .alert-box .info ul li {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-size: 1.4rem;\n  margin: 0 15px 0 0;\n  color: #8391a1;\n}\n.property-alerts-info-wrapper .alerts-info-box .alert-box:last-child .info {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1hbGVydHMvcHJvcGVydHktYWxlcnRzLWluZm8vcHJvcGVydHktYWxlcnRzLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWFsZXJ0cy9wcm9wZXJ0eS1hbGVydHMtaW5mby9wcm9wZXJ0eS1hbGVydHMtaW5mby5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDQyxhQUFBO0VBQ0EsZUFBQTtBQ0xIO0FETUc7RUFDQyxtQkFBQTtFRTJERiwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFJQSxpQkFBQTtFRmpFRSxjR0ZTO0FGR2I7QURDRztFQUNDLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNDLGtCQUFBO0VBQ0EsY0d3RU07QUZ0RVg7QURDSztFRTZDSCwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFJQSxpQkFBQTtFRm5ESSxrQkFBQTtFQUNBLGNHakJPO0FGdUJiO0FEREk7RUFDQyxtQkFBQTtBQ0dMIiwiZmlsZSI6InNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktYWxlcnRzL3Byb3BlcnR5LWFsZXJ0cy1pbmZvL3Byb3BlcnR5LWFsZXJ0cy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5wcm9wZXJ0eS1hbGVydHMtaW5mby13cmFwcGVyIHtcblx0LmFsZXJ0cy1pbmZvLWJveCB7XG5cdFx0LmFsZXJ0LWJveCB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0LmRhdGUge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDI1cHggMCAwO1xuXHRcdFx0XHRAaW5jbHVkZSBkZXNwLW1lZGl1bTtcblx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuXHRcdFx0XHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHR9XG5cdFx0XHQuaW5mbyB7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS00NTA7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMCAxNXB4IDA7XG5cdFx0XHRcdGg1IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgNHB4IDA7XG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHR1bCB7XG5cdFx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgZGVzcC1tZWRpdW07XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAxNXB4IDAgMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCY6bGFzdC1jaGlsZHtcblx0XHRcdFx0LmluZm8ge1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCIucHJvcGVydHktYWxlcnRzLWluZm8td3JhcHBlciAuYWxlcnRzLWluZm8tYm94IC5hbGVydC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG4ucHJvcGVydHktYWxlcnRzLWluZm8td3JhcHBlciAuYWxlcnRzLWluZm8tYm94IC5hbGVydC1ib3ggLmRhdGUge1xuICBwYWRkaW5nOiAwIDI1cHggMCAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtaW5mby13cmFwcGVyIC5hbGVydHMtaW5mby1ib3ggLmFsZXJ0LWJveCAuaW5mbyB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuICBwYWRkaW5nOiAwIDAgMTVweCAwO1xufVxuLnByb3BlcnR5LWFsZXJ0cy1pbmZvLXdyYXBwZXIgLmFsZXJ0cy1pbmZvLWJveCAuYWxlcnQtYm94IC5pbmZvIGg1IHtcbiAgcGFkZGluZzogMCAwIDRweCAwO1xuICBjb2xvcjogIzM3Mzk0Njtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtaW5mby13cmFwcGVyIC5hbGVydHMtaW5mby1ib3ggLmFsZXJ0LWJveCAuaW5mbyB1bCBsaSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgY29sb3I6ICM4MzkxYTE7XG59XG4ucHJvcGVydHktYWxlcnRzLWluZm8td3JhcHBlciAuYWxlcnRzLWluZm8tYm94IC5hbGVydC1ib3g6bGFzdC1jaGlsZCAuaW5mbyB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiJdfQ== */";
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


    var _api_services_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../api/services/asset.service */
    "./src/app/api/services/asset.service.ts");
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
            this.assetService.GetAssetMasterDetail(params).subscribe(function (res) {
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
        type: _api_services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], PropertyAlertsInfoComponent);
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


    __webpack_exports__["default"] = ".property-alerts-wrapper .carousel-box .card {\n  min-height: 125px;\n}\n.property-alerts-wrapper .carousel-box .card .card-body {\n  text-align: center;\n}\n.property-alerts-wrapper .carousel-box .card .card-body h3 {\n  margin: 0 0 10px 0;\n  font-size: 3.2rem;\n  color: #373946;\n}\n.property-alerts-wrapper .carousel-box .card .card-body h5 {\n  font-size: 1.6rem;\n  color: #8391a1;\n  width: 80%;\n  margin: auto;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills {\n  height: 45px;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  min-width: 3000px;\n  margin: 0 0 0 12px;\n  transition: all 0.3s ease;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li {\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  cursor: grab;\n  cursor: -webkit-grab;\n  vertical-align: middle;\n  padding: 0;\n  border: 0;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li a {\n  padding: 12px 15px !important;\n  font-size: 1.4rem;\n  color: #8391a1;\n  position: relative;\n  background-color: #ffffff;\n  display: inline-block;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li a.active {\n  background-color: #ffffff !important;\n  color: #3f51b5;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li a.active:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100% !important;\n  height: 3px;\n  background-color: #3f51b5;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li a:focus {\n  outline: none;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .tabs li:after {\n  content: none;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons {\n  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  -moz-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  right: 0;\n  z-index: 2;\n  top: 0;\n  background-color: #5cd694;\n  width: 60px;\n  height: 49px;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a {\n  display: inline-block;\n  height: 100% !important;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a i {\n  font-size: 2.4rem;\n  color: #ffffff;\n  margin: 0 10px;\n  position: relative;\n  top: 2px;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a:hover, .property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a:focus {\n  outline: none;\n}\n.property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a:hover i, .property-alerts-wrapper .alerts-tabs-box .card .card-body .nav-pills .buttons a:focus i {\n  color: #1f7a49;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1hbGVydHMvcHJvcGVydHktYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1hbGVydHMvcHJvcGVydHktYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDQyxpQkFBQTtBQ0xIO0FETUc7RUFDQyxrQkFBQTtBQ0pKO0FES0k7RUFDQyxrQkFBQTtFRW1FSCxpQkFBQTtFRmpFRyxjR2dGTTtBRm5GWDtBREtJO0VFK0RGLGlCQUFBO0VGN0RJLGNHTk87RUhPUCxVQUFBO0VBQ0EsWUFBQTtBQ0hOO0FEV0k7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNHLGdCQUFBO0VBQ0gsa0JHMUJBO0FGaUJMO0FEVUs7RUFDQyxrQkc3QkQ7RUg4QkksU0FBQTtFQUNBLFFBQUE7RUFDRCxpQkFBQTtFQUNDLGtCQUFBO0VJTVIseUJKTFE7QUNOVDtBRE9TO0VBQ0MsbUJBQUE7RUFDQSxrQkdwQ0w7RUhxQ0ssa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDTFY7QURNVTtFQUNGLDZCQUFBO0VFNkJOLGlCQUFBO0VGM0JlLGNHeENKO0VIeUNJLGtCRy9DWjtFSGdEWSx5QkcrRFQ7RUg5RFMscUJBQUE7QUNKakI7QURLaUI7RUFDQyxvQ0FBQTtFQUNBLGNHRVQ7QUZMVDtBRElrQjtFQUNDLFdBQUE7RUFDQSxrQkd4RGQ7RUh5RGMsT0FBQTtFQUNBLFNBQUE7RUFDQSxzQkdpR2I7RUhoR2EsV0FBQTtFQUNBLHlCR05WO0FGSVQ7QURLaUI7RUFDQyxhQUFBO0FDSGxCO0FETU87RUFDVSxhQUFBO0FDSmpCO0FEUUc7RUl0REQsOENKdURFO0VJdERGLG1ESnNERTtFSXJERixzREpxREU7RUFDQSxrQkczRUM7RUg0RUUsUUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EseUJHakNNO0VIa0NOLFdBQUE7RUFDQSxZQUFBO0FDSlA7QURLWTtFQUNDLHFCQUFBO0VBQ0EsdUJHd0VQO0FGM0VOO0FESWE7RUVYWCxpQkFBQTtFRmFZLGNHeUJOO0VIeEJNLGNBQUE7RUFDQSxrQkd4RlQ7RUh5RkcsUUFBQTtBQ0ZSO0FESWE7RUFDQyxhQUFBO0FDRmQ7QURHYztFQUNDLGNBQUE7QUNEZiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWFsZXJ0cy9wcm9wZXJ0eS1hbGVydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIHtcblx0LmNhcm91c2VsLWJveCB7XG5cdFx0LmNhcmQge1xuXHRcdFx0bWluLWhlaWdodDogMTI1cHg7XG5cdFx0XHQuY2FyZC1ib2R5IHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAgMTBweCAwO1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtaDMtMDIpO1xuXHRcdFx0XHRcdGNvbG9yOiAkZ3JleS04MDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aDUge1xuIFx0XHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XG4gXHRcdFx0XHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcbiBcdFx0XHRcdFx0d2lkdGg6IDgwJTtcbiBcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5hbGVydHMtdGFicy1ib3gge1xuXHRcdC5jYXJkIHtcblx0XHRcdC5jYXJkLWJvZHkge1xuXHRcdFx0XHQubmF2LXBpbGxzIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XG5cdFx0XHRcdFx0bWFyZ2luOjAgYXV0bztcblx0XHQgICAgXHRcdG92ZXJmbG93OmhpZGRlbjtcblx0XHRcdFx0XHRwb3NpdGlvbjogJHJlbDtcblx0XHRcdFx0XHQudGFicyB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogJGFicztcblx0XHQgICAgXHRcdFx0bGVmdDowcHg7XG5cdFx0XHRcdFx0ICAgIHRvcDowcHg7XG5cdFx0XHRcdFx0ICBcdG1pbi13aWR0aDozMDAwcHg7XG5cdFx0XHRcdFx0ICAgIG1hcmdpbjogMCAwIDAgMTJweDtcblx0XHQgICAgXHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4zcyBlYXNlKTtcblx0XHQgICAgXHRcdFx0bGkge1xuXHRcdCAgICBcdFx0XHRcdGRpc3BsYXk6dGFibGUtY2VsbDtcblx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbjogJHJlbDtcblx0XHRcdFx0XHRcdCAgICB0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRcdFx0XHRcdCAgICBjdXJzb3I6Z3JhYjtcblx0XHRcdFx0XHRcdCAgICBjdXJzb3I6LXdlYmtpdC1ncmFiO1xuXHRcdFx0XHRcdFx0ICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0XHRcdFx0XHRcdCAgICBwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0ICAgIGJvcmRlcjogMDtcblx0XHRcdFx0XHRcdCAgICBhIHtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDE1cHggIWltcG9ydGFudDtcblx0XHRcdFx0ICAgICAgICAgICAgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdFx0ICAgICAgICAgICAgXHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0cG9zaXRpb246ICRyZWw7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuXHRcdFx0XHQgICAgICAgICAgICBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0ICAgICAgICAgICAgXHQmLmFjdGl2ZSB7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdGNvbG9yOiAkbS1ibHVlO1xuXHRcdFx0XHQgICAgICAgICAgICBcdFx0JjphZnRlciB7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdHBvc2l0aW9uOiAkYWJzO1xuXHRcdFx0XHQgICAgICAgICAgICBcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHQgICAgICAgICAgICBcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdHdpZHRoOiAkZnVsbDtcblx0XHRcdFx0ICAgICAgICAgICAgXHRcdFx0aGVpZ2h0OiAzcHg7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRtLWJsdWU7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHR9XHRcdFx0XHQgICAgICAgICAgICBcdFx0XG5cdFx0XHRcdCAgICAgICAgICAgIFx0fVxuXHRcdFx0XHQgICAgICAgICAgICBcdCY6Zm9jdXMge1xuXHRcdFx0XHQgICAgICAgICAgICBcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0ICAgICAgICAgICAgXHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0Y29udGVudDogbm9uZTtcblx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICBcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0LmJ1dHRvbnN7XG5cdFx0XHRcdEBpbmNsdWRlIGJveC1zaGFkb3coMCAycHggMTBweCAxcHggcmdiYSgkYmxhY2ssIDAuMjUpKTtcblx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHQgICAgcmlnaHQ6IDA7XG5cdFx0XHQgICAgei1pbmRleDogMjtcblx0XHRcdCAgICB0b3A6IDA7XG5cdFx0XHQgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbWUtZ3JlZW47XG5cdFx0XHQgICAgd2lkdGg6IDYwcHg7XG5cdFx0XHQgICAgaGVpZ2h0OiA0OXB4O1xuXHQgICAgICAgICAgIGEge1xuXHQgICAgICAgICAgIFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHQgICAgICAgICAgIFx0aGVpZ2h0OiAkZnVsbDtcblx0ICAgICAgICAgICBcdGkge1xuXHQgICAgICAgICAgIFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bS0wMik7XG5cdCAgICAgICAgICAgXHRcdGNvbG9yOiAkd2hpdGU7XG5cdCAgICAgICAgICAgXHRcdG1hcmdpbjogMCAxMHB4O1x0XG5cdCAgICAgICAgICAgXHRcdHBvc2l0aW9uOiAkcmVsO1xuICAgIFx0XHRcdFx0dG9wOiAycHg7XG5cdCAgICAgICAgICAgXHR9XG5cdCAgICAgICAgICAgXHQmOmhvdmVyLCAmOmZvY3VzIHtcblx0ICAgICAgICAgICBcdFx0b3V0bGluZTogbm9uZTtcblx0ICAgICAgICAgICBcdFx0aSB7XG5cdCAgICAgICAgICAgXHRcdFx0Y29sb3I6IGRhcmtlbigkbGltZS1ncmVlbiwgMzAlKTtcblx0ICAgICAgICAgICBcdFx0fVxuXHQgICAgICAgICAgIFx0fVxuXHQgICAgICAgICAgIH0gXHRcdFxuXHQgICAgICAgIH1cblx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIC5jYXJvdXNlbC1ib3ggLmNhcmQge1xuICBtaW4taGVpZ2h0OiAxMjVweDtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtd3JhcHBlciAuY2Fyb3VzZWwtYm94IC5jYXJkIC5jYXJkLWJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmNhcm91c2VsLWJveCAuY2FyZCAuY2FyZC1ib2R5IGgzIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmNhcm91c2VsLWJveCAuY2FyZCAuY2FyZC1ib2R5IGg1IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjODM5MWExO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLnRhYnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIG1pbi13aWR0aDogMzAwMHB4O1xuICBtYXJnaW46IDAgMCAwIDEycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIC5hbGVydHMtdGFicy1ib3ggLmNhcmQgLmNhcmQtYm9keSAubmF2LXBpbGxzIC50YWJzIGxpIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogZ3JhYjtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtd3JhcHBlciAuYWxlcnRzLXRhYnMtYm94IC5jYXJkIC5jYXJkLWJvZHkgLm5hdi1waWxscyAudGFicyBsaSBhIHtcbiAgcGFkZGluZzogMTJweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLnRhYnMgbGkgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIC5hbGVydHMtdGFicy1ib3ggLmNhcmQgLmNhcmQtYm9keSAubmF2LXBpbGxzIC50YWJzIGxpIGEuYWN0aXZlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xufVxuLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIC5hbGVydHMtdGFicy1ib3ggLmNhcmQgLmNhcmQtYm9keSAubmF2LXBpbGxzIC50YWJzIGxpIGE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnByb3BlcnR5LWFsZXJ0cy13cmFwcGVyIC5hbGVydHMtdGFicy1ib3ggLmNhcmQgLmNhcmQtYm9keSAubmF2LXBpbGxzIC50YWJzIGxpOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtd3JhcHBlciAuYWxlcnRzLXRhYnMtYm94IC5jYXJkIC5jYXJkLWJvZHkgLm5hdi1waWxscyAuYnV0dG9ucyB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2Q2OTQ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYSBpIHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDAgMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cbi5wcm9wZXJ0eS1hbGVydHMtd3JhcHBlciAuYWxlcnRzLXRhYnMtYm94IC5jYXJkIC5jYXJkLWJvZHkgLm5hdi1waWxscyAuYnV0dG9ucyBhOmhvdmVyLCAucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYTpob3ZlciBpLCAucHJvcGVydHktYWxlcnRzLXdyYXBwZXIgLmFsZXJ0cy10YWJzLWJveCAuY2FyZCAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYTpmb2N1cyBpIHtcbiAgY29sb3I6ICMxZjdhNDk7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIGRlc2VsZWN0ICgpIHtcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1vLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iXX0= */";
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


    var _api_services_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/asset.service */
    "./src/app/api/services/asset.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var PropertyAlertsComponent =
    /*#__PURE__*/
    function () {
      function PropertyAlertsComponent(assetService, sharedService, cookieService) {
        _classCallCheck(this, PropertyAlertsComponent);

        this.assetService = assetService;
        this.sharedService = sharedService;
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
          underscore__WEBPACK_IMPORTED_MODULE_5__["each"](this.tabItems, function (item) {
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
          underscore__WEBPACK_IMPORTED_MODULE_5__["each"](this.alertTypes, function (item, index) {
            var params = {
              ApartmentId: parseInt(_this3.cookieService.get('apartmentId')),
              InputType: item.type,
              days: item.count
            };

            _this3.assetService.GetAssetMasterDetail(params).subscribe(function (res) {
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
        type: _api_services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], PropertyAlertsComponent);
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


    var _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../api/services/asset.service */
    "./src/app/api/services/asset.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var PropertyAssetCategoryInfoComponent =
    /*#__PURE__*/
    function () {
      function PropertyAssetCategoryInfoComponent(router, route, assetService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, PropertyAssetCategoryInfoComponent);

        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
      }

      _createClass(PropertyAssetCategoryInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.assetCategoryId = this.route.params['value'].id;
          console.log(this.assetCategoryId);
          this.assetService.GetAssetCountsByCategoryId(this.assetCategoryId).subscribe(function (res) {
            console.log(res);
            _this5.assetDataList = res;
            _this5.isDataLoaded = true;
          });
        }
      }]);

      return PropertyAssetCategoryInfoComponent;
    }();

    PropertyAssetCategoryInfoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], PropertyAssetCategoryInfoComponent);
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


    __webpack_exports__["default"] = ".property-assets-category-wrapper .simple-lists a.done, .property-assets-category-wrapper .simple-lists a.due {\n  position: relative;\n}\n.property-assets-category-wrapper .simple-lists a.done:after, .property-assets-category-wrapper .simple-lists a.due:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 6px;\n  height: 100% !important;\n}\n.property-assets-category-wrapper .simple-lists a.due:after {\n  background-color: #e2385e;\n}\n.property-assets-category-wrapper .simple-lists a.done:after {\n  background-color: #5cd694;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LWFzc2V0LWNhdGVnb3J5L3Byb3BlcnR5LWFzc2V0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktY29uZmlndXJhdGlvbi9wcm9wZXJ0eS1hc3NldC1jYXRlZ29yeS9wcm9wZXJ0eS1hc3NldC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRztFQUNDLGtCQ0hDO0FDSEw7QUZPSTtFQUNDLFdBQUE7RUFDQSxrQkNQQTtFRFFBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQ2lKQztBQ3RKTjtBRlNJO0VBQ0MseUJDSFE7QUNKYjtBRldJO0VBQ0MseUJDeUJRO0FDbENiIiwiZmlsZSI6InNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktY29uZmlndXJhdGlvbi9wcm9wZXJ0eS1hc3NldC1jYXRlZ29yeS9wcm9wZXJ0eS1hc3NldC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4ucHJvcGVydHktYXNzZXRzLWNhdGVnb3J5LXdyYXBwZXIge1xuXHQuc2ltcGxlLWxpc3RzIHtcblx0XHRhIHtcblx0XHRcdCYuZG9uZSwgJi5kdWUge1xuXHRcdFx0XHRwb3NpdGlvbjogJHJlbDtcblx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRwb3NpdGlvbjogJGFicztcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHR3aWR0aDogNnB4O1xuXHRcdFx0XHRcdGhlaWdodDogJGZ1bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYuZHVlIHtcblx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGJyaWdodC1yZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYuZG9uZSB7XG5cdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRsaW1lLWdyZWVuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iLCIucHJvcGVydHktYXNzZXRzLWNhdGVnb3J5LXdyYXBwZXIgLnNpbXBsZS1saXN0cyBhLmRvbmUsIC5wcm9wZXJ0eS1hc3NldHMtY2F0ZWdvcnktd3JhcHBlciAuc2ltcGxlLWxpc3RzIGEuZHVlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb3BlcnR5LWFzc2V0cy1jYXRlZ29yeS13cmFwcGVyIC5zaW1wbGUtbGlzdHMgYS5kb25lOmFmdGVyLCAucHJvcGVydHktYXNzZXRzLWNhdGVnb3J5LXdyYXBwZXIgLnNpbXBsZS1saXN0cyBhLmR1ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5wcm9wZXJ0eS1hc3NldHMtY2F0ZWdvcnktd3JhcHBlciAuc2ltcGxlLWxpc3RzIGEuZHVlOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyMzg1ZTtcbn1cbi5wcm9wZXJ0eS1hc3NldHMtY2F0ZWdvcnktd3JhcHBlciAuc2ltcGxlLWxpc3RzIGEuZG9uZTphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2Q2OTQ7XG59Il19 */";
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


    var _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../api/services/asset.service */
    "./src/app/api/services/asset.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var PropertyAssetCategoryComponent =
    /*#__PURE__*/
    function () {
      function PropertyAssetCategoryComponent(router, route, assetService, lookupService, sharedService, cookieService) {
        var _this6 = this;

        _classCallCheck(this, PropertyAssetCategoryComponent);

        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
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
          this.assetService.GetAssetCountsByCategoryId(params).subscribe(function (res) {
            _this7.assetDataList = res;

            if (res == undefined || res.length == 0) {
              _this7.assetCategoryName = "";
            } else {
              _this7.assetCategoryName = res[0].categoryName;
              underscore__WEBPACK_IMPORTED_MODULE_7__["each"](_this7.assetDataList, function (item) {
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
        type: _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], PropertyAssetCategoryComponent);
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


    __webpack_exports__["default"] = ".property-configuration-wrapper .card {\n  border-radius: 3px !important;\n}\n.property-configuration-wrapper .card-body .nav-pills {\n  height: 45px;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  min-width: 3000px;\n  margin: 0 0 0 12px;\n  transition: all 0.3s ease;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs li {\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  cursor: grab;\n  cursor: -webkit-grab;\n  vertical-align: middle;\n  padding: 0;\n  border: 0;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs li a {\n  padding: 12px 15px !important;\n  font-size: 1.4rem;\n  color: #8391a1;\n  position: relative;\n  background-color: #ffffff;\n  display: inline-block;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs li a.active {\n  color: #ffffff;\n  background-color: #3f51b5;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs li a:focus {\n  outline: none;\n}\n.property-configuration-wrapper .card-body .nav-pills .tabs li:after {\n  content: none;\n}\n.property-configuration-wrapper .card-body .nav-pills .buttons {\n  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  -moz-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  right: 0;\n  z-index: 2;\n  top: 0;\n  background-color: #5cd694;\n  width: 60px;\n  height: 49px;\n}\n.property-configuration-wrapper .card-body .nav-pills .buttons a {\n  display: inline-block;\n  height: 100% !important;\n}\n.property-configuration-wrapper .card-body .nav-pills .buttons a i {\n  font-size: 2.4rem;\n  color: #ffffff;\n  margin: 0 10px;\n  position: relative;\n  top: 2px;\n}\n.property-configuration-wrapper .card-body .nav-pills .buttons a:hover, .property-configuration-wrapper .card-body .nav-pills .buttons a:focus {\n  outline: none;\n}\n.property-configuration-wrapper .card-body .nav-pills .buttons a:hover i, .property-configuration-wrapper .card-body .nav-pills .buttons a:focus i {\n  color: #1f7a49;\n}\n.property-configuration-wrapper .card-body.content {\n  min-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIiwic3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VDRUEsNkJBQUE7QUNIRDtBRktFO0VBQ0MsWUFBQTtFQUNBLGNBQUE7RUFDRyxnQkFBQTtFQUNILGtCR1JFO0FES0w7QUZJRztFQUNDLGtCR1hDO0VIWUUsU0FBQTtFQUNBLFFBQUE7RUFDRCxpQkFBQTtFQUNDLGtCQUFBO0VDd0JOLHlCRHZCTTtBRUFQO0FGQ087RUFDQyxtQkFBQTtFQUNBLGtCR2xCSDtFSG1CRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUVDUjtBRkFRO0VBQ0YsNkJBQUE7RUkrQ0osaUJBQUE7RUo3Q2EsY0d0QkY7RUh1QkUsa0JHN0JWO0VIOEJVLHlCR2lGUDtFSGhGTyxxQkFBQTtBRUVmO0FGRGU7RUFDQyxjRzhFUjtFSDdFUSx5QkdvQlA7QURqQlQ7QUZEZTtFQUNDLGFBQUE7QUVHaEI7QUZBSztFQUNVLGFBQUE7QUVFZjtBRkVHO0VDM0JELDhDRDRCRTtFQzNCRixtREQyQkU7RUMxQkYsc0REMEJFO0VBQ0Esa0JHaERDO0VIaURFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLHlCR05NO0VIT04sV0FBQTtFQUNBLFlBQUE7QUVFUDtBRkRZO0VBQ0MscUJBQUE7RUFDQSx1QkdtR1A7QURoR047QUZGYTtFSWdCWCxpQkFBQTtFSmRZLGNHb0ROO0VIbkRNLGNBQUE7RUFDQSxrQkc3RFQ7RUg4REcsUUFBQTtBRUlSO0FGRmE7RUFDQyxhQUFBO0FFSWQ7QUZIYztFQUNDLGNBQUE7QUVLZjtBRkNFO0VBQ0MsaUJBQUE7QUVDSCIsImZpbGUiOiJzcmMvYXBwL2Ftcy9teS1wcm9wZXJ0eS9jb21wb25lbnRzL3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIHtcblx0LmNhcmQge1xuXHRcdEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoM3B4KTtcblx0fVxuXHQuY2FyZC1ib2R5IHtcblx0XHQubmF2LXBpbGxzIHtcblx0XHRcdGhlaWdodDogNDVweDtcblx0XHRcdG1hcmdpbjowIGF1dG87XG4gICAgXHRcdG92ZXJmbG93OmhpZGRlbjtcblx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0LnRhYnMge1xuXHRcdFx0XHRwb3NpdGlvbjogJGFicztcbiAgICBcdFx0XHRsZWZ0OjBweDtcblx0XHRcdCAgICB0b3A6MHB4O1xuXHRcdFx0ICBcdG1pbi13aWR0aDozMDAwcHg7XG5cdFx0XHQgICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xuICAgIFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuM3MgZWFzZSk7XG4gICAgXHRcdFx0bGkge1xuICAgIFx0XHRcdFx0ZGlzcGxheTp0YWJsZS1jZWxsO1xuXHRcdFx0XHQgICAgcG9zaXRpb246ICRyZWw7XG5cdFx0XHRcdCAgICB0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRcdFx0ICAgIGN1cnNvcjpncmFiO1xuXHRcdFx0XHQgICAgY3Vyc29yOi13ZWJraXQtZ3JhYjtcblx0XHRcdFx0ICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0XHRcdFx0ICAgIHBhZGRpbmc6IDA7XG5cdFx0XHRcdCAgICBib3JkZXI6IDA7XG5cdFx0XHRcdCAgICBhIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMTVweCAhaW1wb3J0YW50O1xuXHRcdCAgICAgICAgICAgIFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0ICAgICAgICAgICAgXHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0ICAgICAgICAgICAgXHRwb3NpdGlvbjogJHJlbDtcblx0XHQgICAgICAgICAgICBcdGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblx0XHQgICAgICAgICAgICBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHQgICAgICAgICAgICBcdCYuYWN0aXZlIHtcblx0XHQgICAgICAgICAgICBcdFx0Y29sb3I6ICR3aGl0ZTtcblx0XHQgICAgICAgICAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogJG0tYmx1ZTtcblx0XHQgICAgICAgICAgICBcdH1cblx0XHQgICAgICAgICAgICBcdCY6Zm9jdXMge1xuXHRcdCAgICAgICAgICAgIFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdCAgICAgICAgICAgIFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHQgICAgICAgICAgICBcdGNvbnRlbnQ6IG5vbmU7XG5cdFx0ICAgICAgICAgICAgfVxuICAgIFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5idXR0b25ze1xuXHRcdFx0XHRAaW5jbHVkZSBib3gtc2hhZG93KDAgMnB4IDEwcHggMXB4IHJnYmEoJGJsYWNrLCAwLjI1KSk7XG5cdFx0XHRcdHBvc2l0aW9uOiAkYWJzO1xuXHRcdFx0ICAgIHJpZ2h0OiAwO1xuXHRcdFx0ICAgIHotaW5kZXg6IDI7XG5cdFx0XHQgICAgdG9wOiAwO1xuXHRcdFx0ICAgIGJhY2tncm91bmQtY29sb3I6ICRsaW1lLWdyZWVuO1xuXHRcdFx0ICAgIHdpZHRoOiA2MHB4O1xuXHRcdFx0ICAgIGhlaWdodDogNDlweDtcblx0ICAgICAgICAgICBhIHtcblx0ICAgICAgICAgICBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0ICAgICAgICAgICBcdGhlaWdodDogJGZ1bGw7XG5cdCAgICAgICAgICAgXHRpIHtcblx0ICAgICAgICAgICBcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1tZWRpdW0tMDIpO1xuXHQgICAgICAgICAgIFx0XHRjb2xvcjogJHdoaXRlO1xuXHQgICAgICAgICAgIFx0XHRtYXJnaW46IDAgMTBweDtcdFxuXHQgICAgICAgICAgIFx0XHRwb3NpdGlvbjogJHJlbDtcbiAgICBcdFx0XHRcdHRvcDogMnB4O1xuXHQgICAgICAgICAgIFx0fVxuXHQgICAgICAgICAgIFx0Jjpob3ZlciwgJjpmb2N1cyB7XG5cdCAgICAgICAgICAgXHRcdG91dGxpbmU6IG5vbmU7XG5cdCAgICAgICAgICAgXHRcdGkge1xuXHQgICAgICAgICAgIFx0XHRcdGNvbG9yOiBkYXJrZW4oJGxpbWUtZ3JlZW4sIDMwJSk7XG5cdCAgICAgICAgICAgXHRcdH1cblx0ICAgICAgICAgICBcdH1cblx0ICAgICAgICAgICB9IFx0XHRcblx0ICAgICAgICB9XG5cdFx0fVxuXHRcdCYuY29udGVudCB7XG5cdFx0XHRtaW4taGVpZ2h0OiAyMDBweDtcblx0XHR9XG5cdH1cbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBkZXNlbGVjdCAoKSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xufVxuLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZC1ib2R5IC5uYXYtcGlsbHMge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAudGFicyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgbWluLXdpZHRoOiAzMDAwcHg7XG4gIG1hcmdpbjogMCAwIDAgMTJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAudGFicyBsaSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IGdyYWI7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAudGFicyBsaSBhIHtcbiAgcGFkZGluZzogMTJweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAudGFicyBsaSBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xufVxuLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLnRhYnMgbGkgYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAudGFicyBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAuYnV0dG9ucyB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2Q2OTQ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAuYnV0dG9ucyBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5wcm9wZXJ0eS1jb25maWd1cmF0aW9uLXdyYXBwZXIgLmNhcmQtYm9keSAubmF2LXBpbGxzIC5idXR0b25zIGEgaSB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAuYnV0dG9ucyBhOmhvdmVyLCAucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkgLm5hdi1waWxscyAuYnV0dG9ucyBhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5wcm9wZXJ0eS1jb25maWd1cmF0aW9uLXdyYXBwZXIgLmNhcmQtYm9keSAubmF2LXBpbGxzIC5idXR0b25zIGE6aG92ZXIgaSwgLnByb3BlcnR5LWNvbmZpZ3VyYXRpb24td3JhcHBlciAuY2FyZC1ib2R5IC5uYXYtcGlsbHMgLmJ1dHRvbnMgYTpmb2N1cyBpIHtcbiAgY29sb3I6ICMxZjdhNDk7XG59XG4ucHJvcGVydHktY29uZmlndXJhdGlvbi13cmFwcGVyIC5jYXJkLWJvZHkuY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */";
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var PropertyConfigurationComponent =
    /*#__PURE__*/
    function () {
      function PropertyConfigurationComponent(lookupService, sharedService, cookieService) {
        _classCallCheck(this, PropertyConfigurationComponent);

        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
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
          underscore__WEBPACK_IMPORTED_MODULE_5__["each"](this.tabItems, function (item) {
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

          //get all asset categories
          this.lookupService.getLookupValueByLookupTypeId(19).subscribe(function (res) {
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
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], PropertyConfigurationComponent);
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


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var PropertyDetailsComponent =
    /*#__PURE__*/
    function () {
      function PropertyDetailsComponent(apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, PropertyDetailsComponent);

        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
      }

      _createClass(PropertyDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this10.propertyTowerData = res;
            _this10.isDataLoaded = true;
          });
        }
      }]);

      return PropertyDetailsComponent;
    }();

    PropertyDetailsComponent.ctorParameters = function () {
      return [{
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], PropertyDetailsComponent);
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


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var PropertyTowerInfoComponent =
    /*#__PURE__*/
    function () {
      function PropertyTowerInfoComponent(apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, PropertyTowerInfoComponent);

        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
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
          this.apartmentService.updateApartmentBlock(details).subscribe(function (res) {
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

          this.apartmentService.getApartmentBlockUnitByBlockId(parseInt(this.tower.apartmentBlockId)).subscribe(function (res) {
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
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], PropertyTowerInfoComponent);
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


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
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
          this.apartmentService.updateApartmentBlockUnit(details).subscribe(function (res) {
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

          this.unitTypeId = ""; //get unit type

          this.lookupService.getLookupValueByLookupTypeId(1).subscribe(function (res) {
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
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], PropertyTowerUnitInfoComponent);
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


    __webpack_exports__["default"] = "@media (max-width: 991px) {\n  .property-facility-wrapper .list-boxes .column {\n    margin: 0 0 20px 0;\n  }\n}\n.property-facility-wrapper .list-boxes .card {\n  height: 100% !important;\n}\n.property-facility-wrapper .list-boxes .card h4 {\n  font-size: 1.6rem;\n  color: #373946;\n}\n.property-facility-wrapper .list-boxes .card .card-body {\n  padding: 0 0 5px 0;\n}\n.property-facility-wrapper .list-boxes .card .card-body:hover {\n  background-color: #ffffff;\n}\n.property-facility-wrapper .list-boxes .card .card-body li {\n  list-style: none;\n  margin: 0 !important;\n  padding: 8px 20px;\n  overflow: auto;\n  min-width: auto;\n}\n.property-facility-wrapper .list-boxes .card .card-body li div {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #373946;\n  float: right;\n}\n.property-facility-wrapper .list-boxes .card .card-body li div.title {\n  color: #8391a1;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LWZhY2lsaXR5L3Byb3BlcnR5LWZhY2lsaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LWZhY2lsaXR5L3Byb3BlcnR5LWZhY2lsaXR5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRztFQUREO0lBRU8sa0JBQUE7RUNMUDtBQUNGO0FET0U7RUFDQyx1QkVvSkc7QUR6Sk47QURNRztFR2lFRCxpQkFBQTtFSC9ERSxjRThFTztBRGxGWDtBRE1HO0VBQ0Msa0JBQUE7QUNKSjtBREtJO0VBQ0MseUJFZ0dHO0FEbkdSO0FES0k7RUFDQyxnQkFBQTtFQUNBLG9CQUFBO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0hSO0FESUs7RUdpQ0gsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGlCQUFBO0VIL0NJLGNFOERLO0VGN0RMLFlBQUE7QUNFTjtBRERNO0VBQ0MsY0V2Qk07RUZ3Qk4sV0FBQTtBQ0dQIiwiZmlsZSI6InNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktY29uZmlndXJhdGlvbi9wcm9wZXJ0eS1mYWNpbGl0eS9wcm9wZXJ0eS1mYWNpbGl0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4ucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciB7XG5cdC5saXN0LWJveGVzIHtcblx0XHQuY29sdW1uIHtcblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgXHRcdFx0bWFyZ2luOiAwIDAgMjBweCAwO1xuICAgIFx0XHR9XG5cdFx0fVxuXHRcdC5jYXJkIHtcblx0XHRcdGhlaWdodDogJGZ1bGw7XG5cdFx0XHRoNCB7XG5cdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcblx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdH1cblx0XHRcdC5jYXJkLWJvZHkge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDAgNXB4IDA7XG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcblx0ICAgIFx0XHRcdHBhZGRpbmc6IDhweCAyMHB4O1xuXHQgICAgXHRcdFx0b3ZlcmZsb3c6IGF1dG87XG5cdCAgICBcdFx0XHRtaW4td2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0XHRcdCYudGl0bGUge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciAubGlzdC1ib3hlcyAuY29sdW1uIHtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIH1cbn1cbi5wcm9wZXJ0eS1mYWNpbGl0eS13cmFwcGVyIC5saXN0LWJveGVzIC5jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciAubGlzdC1ib3hlcyAuY2FyZCBoNCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzM3Mzk0Njtcbn1cbi5wcm9wZXJ0eS1mYWNpbGl0eS13cmFwcGVyIC5saXN0LWJveGVzIC5jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwIDAgNXB4IDA7XG59XG4ucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciAubGlzdC1ib3hlcyAuY2FyZCAuY2FyZC1ib2R5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5wcm9wZXJ0eS1mYWNpbGl0eS13cmFwcGVyIC5saXN0LWJveGVzIC5jYXJkIC5jYXJkLWJvZHkgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG87XG59XG4ucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciAubGlzdC1ib3hlcyAuY2FyZCAuY2FyZC1ib2R5IGxpIGRpdiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjMzczOTQ2O1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucHJvcGVydHktZmFjaWxpdHktd3JhcHBlciAubGlzdC1ib3hlcyAuY2FyZCAuY2FyZC1ib2R5IGxpIGRpdi50aXRsZSB7XG4gIGNvbG9yOiAjODM5MWExO1xuICBmbG9hdDogbGVmdDtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */";
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


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../api/services/facility.service */
    "./src/app/api/services/facility.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var PropertyFacilityComponent =
    /*#__PURE__*/
    function () {
      function PropertyFacilityComponent(cdRef, apartmentService, facilityService, lookupService, cookieService) {
        _classCallCheck(this, PropertyFacilityComponent);

        this.cdRef = cdRef;
        this.apartmentService = apartmentService;
        this.facilityService = facilityService;
        this.lookupService = lookupService;
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

          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this15.propertyTowerData = res;

            _this15.facilityService.GetPCApartmentFacility(parseInt(_this15.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this15.facilityData = res;
              underscore__WEBPACK_IMPORTED_MODULE_6__["each"](_this15.facilityData, function (item, index) {
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
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], PropertyFacilityComponent);
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
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var PropertyTowerFacilityComponent =
    /*#__PURE__*/
    function () {
      function PropertyTowerFacilityComponent(apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, PropertyTowerFacilityComponent);

        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEdit = false;
        this.isTowersLoaded = false;
      }

      _createClass(PropertyTowerFacilityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PropertyTowerFacilityComponent;
    }();

    PropertyTowerFacilityComponent.ctorParameters = function () {
      return [{
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PropertyTowerFacilityComponent.prototype, "tower", void 0);
    PropertyTowerFacilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-tower-facility',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-tower-facility.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-tower-facility.component.scss */
      "./src/app/ams/my-property/components/property-configuration/property-facility/property-tower-facility/property-tower-facility.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], PropertyTowerFacilityComponent);
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


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var PropertyParkingDetailsInfoComponent =
    /*#__PURE__*/
    function () {
      function PropertyParkingDetailsInfoComponent(lookupService, sharedService, cookieService) {
        _classCallCheck(this, PropertyParkingDetailsInfoComponent);

        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
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

          //get main slot type
          this.lookupService.getLookupValueByLookupTypeId(71).subscribe(function (res) {
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
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], PropertyParkingDetailsInfoComponent);
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


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var PropertyParkingDetailsComponent =
    /*#__PURE__*/
    function () {
      function PropertyParkingDetailsComponent(apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, PropertyParkingDetailsComponent);

        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
      }

      _createClass(PropertyParkingDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this17.propertyTowerData = res;
            _this17.isDataLoaded = true;
          });
        }
      }]);

      return PropertyParkingDetailsComponent;
    }();

    PropertyParkingDetailsComponent.ctorParameters = function () {
      return [{
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], PropertyParkingDetailsComponent);
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


    __webpack_exports__["default"] = ".property-profile-wrapper .property-info {\n  width: 80%;\n}\n.property-profile-wrapper .property-info .profile-icon {\n  display: flex;\n  border-radius: 3px !important;\n  width: 150px;\n  height: 100px;\n  overflow: hidden;\n  margin: 0 20px 0 0;\n}\n@media (max-width: 768px) {\n  .property-profile-wrapper .property-info .profile-icon {\n    width: 85px;\n    height: auto;\n    margin: 0 15px 0 0;\n  }\n}\n.property-profile-wrapper .property-info h5 {\n  font-size: 2rem;\n  padding: 0 0 2px 0;\n  color: #3f51b5;\n}\n.property-profile-wrapper .property-info p {\n  font-size: 1.4rem;\n  color: #5f5f5f;\n}\n.property-profile-wrapper .property-info .other {\n  margin: 8px 0 0 0 !important;\n}\n.property-profile-wrapper .property-info .other li {\n  margin: 0 30px 0 0;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.property-profile-wrapper .property-info .other li .icon {\n  width: 20px;\n  margin: 0 10px 0 0;\n  color: #673ab7;\n}\n.property-profile-wrapper .property-info .other li .icon.phone {\n  width: 18px;\n}\n@media (max-width: 768px) {\n  .property-profile-wrapper .property-info .other {\n    margin: 20px 0 0 0 !important;\n  }\n  .property-profile-wrapper .property-info .other li {\n    display: block;\n  }\n  .property-profile-wrapper .property-info .other li:not(:last-child) {\n    margin: 0 0 10px 0;\n  }\n  .property-profile-wrapper .property-info .other li .icon {\n    margin: 0 16px 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbXktcHJvcGVydHkvY29tcG9uZW50cy9wcm9wZXJ0eS1jb25maWd1cmF0aW9uL3Byb3BlcnR5LXByb2ZpbGUvcHJvcGVydHktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktY29uZmlndXJhdGlvbi9wcm9wZXJ0eS1wcm9maWxlL3Byb3BlcnR5LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLFVBQUE7QUNKRjtBREtFO0VBQ0MsYUFBQTtFRURGLDZCQUFBO0VGR0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREg7QURFRztFQVBEO0lBUUUsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ0NGO0FBQ0Y7QURDRTtFRzBEQSxlQUFBO0VIeERDLGtCQUFBO0VBQ0EsY0lvQ007QUhuQ1Q7QURDRTtFR3FEQSxpQkFBQTtFSG5EQyxjSXNFUTtBSHJFWDtBRENFO0VBQ0MsNEJBQUE7QUNDSDtBREFHO0VBQ0Msa0JBQUE7RUc2QkYsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGlCQUFBO0VIM0NFLGNJeEJTO0FIOEJiO0FETEk7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjSUVNO0FIS1g7QUROSztFQUNDLFdBQUE7QUNRTjtBREpHO0VBaEJEO0lBaUJFLDZCQUFBO0VDT0Y7RURORTtJQU9DLGNBQUE7RUNFSDtFRFJHO0lBQ0Msa0JBQUE7RUNVSjtFRFJHO0lBQ0Msa0JBQUE7RUNVSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL215LXByb3BlcnR5L2NvbXBvbmVudHMvcHJvcGVydHktY29uZmlndXJhdGlvbi9wcm9wZXJ0eS1wcm9maWxlL3Byb3BlcnR5LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciB7XG5cdC5wcm9wZXJ0eS1pbmZvIHtcblx0XHR3aWR0aDogODAlO1xuXHRcdC5wcm9maWxlLWljb24ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoM3B4KTtcblx0XHRcdHdpZHRoOiAxNTBweDtcblx0XHRcdGhlaWdodDogMTAwcHg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0bWFyZ2luOiAwIDIwcHggMCAwO1xuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdHdpZHRoOiA4NXB4O1xuXHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdG1hcmdpbjogMCAxNXB4IDAgMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aDUge1xuXHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1tZWRpdW0pO1xuXHRcdFx0cGFkZGluZzogMCAwIDJweCAwO1xuXHRcdFx0Y29sb3I6ICRtLWJsdWU7XG5cdFx0fVxuXHRcdHAge1xuXHRcdCBcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdFx0Y29sb3I6ICRncmV5LTY1MDtcblx0XHR9XG5cdFx0Lm90aGVyIHtcblx0XHRcdG1hcmdpbjogOHB4IDAgMCAwICFpbXBvcnRhbnQ7XG5cdFx0XHRsaSB7XG5cdFx0XHRcdG1hcmdpbjogMCAzMHB4IDAgMDtcblx0XHRcdFx0QGluY2x1ZGUgZGVzcC1yZWd1bGFyO1xuXHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdFx0Y29sb3I6ICRsaWdodC1ibHVlO1xuXHRcdFx0XHQuaWNvbiB7XG5cdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDEwcHggMCAwO1xuXHRcdFx0XHRcdGNvbG9yOiAkcy12aW9sZXQ7XG5cdFx0XHRcdFx0Ji5waG9uZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHRcdFx0XHRtYXJnaW46IDIwcHggMCAwIDAgIWltcG9ydGFudDtcblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdCY6bm90KDpsYXN0LWNoaWxkKXtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAwIDEwcHggMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDE2cHggMCAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyB7XG4gIHdpZHRoOiA4MCU7XG59XG4ucHJvcGVydHktcHJvZmlsZS13cmFwcGVyIC5wcm9wZXJ0eS1pbmZvIC5wcm9maWxlLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAucHJvZmlsZS1pY29uIHtcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB9XG59XG4ucHJvcGVydHktcHJvZmlsZS13cmFwcGVyIC5wcm9wZXJ0eS1pbmZvIGg1IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAwIDAgMnB4IDA7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAub3RoZXIge1xuICBtYXJnaW46IDhweCAwIDAgMCAhaW1wb3J0YW50O1xufVxuLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAub3RoZXIgbGkge1xuICBtYXJnaW46IDAgMzBweCAwIDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjODM5MWExO1xufVxuLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAub3RoZXIgbGkgLmljb24ge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICBjb2xvcjogIzY3M2FiNztcbn1cbi5wcm9wZXJ0eS1wcm9maWxlLXdyYXBwZXIgLnByb3BlcnR5LWluZm8gLm90aGVyIGxpIC5pY29uLnBob25lIHtcbiAgd2lkdGg6IDE4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAub3RoZXIge1xuICAgIG1hcmdpbjogMjBweCAwIDAgMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9wZXJ0eS1wcm9maWxlLXdyYXBwZXIgLnByb3BlcnR5LWluZm8gLm90aGVyIGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAucHJvcGVydHktcHJvZmlsZS13cmFwcGVyIC5wcm9wZXJ0eS1pbmZvIC5vdGhlciBsaTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIH1cbiAgLnByb3BlcnR5LXByb2ZpbGUtd3JhcHBlciAucHJvcGVydHktaW5mbyAub3RoZXIgbGkgLmljb24ge1xuICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcbiAgfVxufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIGRlc2VsZWN0ICgpIHtcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1vLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIl19 */";
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


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
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
          this.apartmentService.updateApartmentAsync(apartmentParams).subscribe(function (res) {
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

            _this19.apartmentService.getApartmentBlockByApartmentId(parseInt(_this19.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this19.towersLength = res.length;

              _this19.apartmentService.getApartmentBlockUnitByApartmentId(parseInt(_this19.cookieService.get('apartmentId'))).subscribe(function (res) {
                _this19.unitsLength = res.length;
              });
            });

            _this19.isDataLoaded = true;
          }); //get property type

          this.lookupService.getLookupValueByLookupTypeId(65).subscribe(function (res) {
            _this19.propertyTypeData = res;
          }, function (error) {}); //get property category

          this.lookupService.getLookupValueByLookupTypeId(66).subscribe(function (res) {
            _this19.propertyCategoryData = res;
          }, function (error) {});
        }
      }]);

      return PropertyProfileComponent;
    }();

    PropertyProfileComponent.ctorParameters = function () {
      return [{
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], PropertyProfileComponent);
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


    var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/services */
    "./src/app/api/services.ts");
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
        type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]])], PropertyTowerDetailsComponent);
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


    var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/services */
    "./src/app/api/services.ts");
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

          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
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
        type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])], PropertyTowerListComponent);
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
      function PropertyViewMainComponent( // private srvPV : PropertyViewService, 
      cd) {
        _classCallCheck(this, PropertyViewMainComponent);

        this.cd = cd;
        this.__subscription = {};
      }

      _createClass(PropertyViewMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.srvPV.Mode.pipe(untilDestroyed(this)).subscribe(data => {
          //     if (!isNullOrUndefined(data)) {
          //         this.Mode = data.mode;
          //         this.cd.markForCheck();
          //     }
          // });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.srvPV.Mode.next({ mode: 'List',data:null });
        }
      }]);

      return PropertyViewMainComponent;
    }();

    PropertyViewMainComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    PropertyViewMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-property-view-main',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./property-view-main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./property-view-main.component.scss */
      "./src/app/ams/my-property/components/property-view/property-view-main/property-view-main.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], PropertyViewMainComponent);
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

    var MyPropertyModule = function MyPropertyModule() {
      _classCallCheck(this, MyPropertyModule);
    };

    MyPropertyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_my_property_component__WEBPACK_IMPORTED_MODULE_5__["MyPropertyComponent"], _components_property_configuration_property_configuration_component__WEBPACK_IMPORTED_MODULE_6__["PropertyConfigurationComponent"], _components_property_configuration_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_7__["PropertyDetailsComponent"], _components_property_configuration_property_profile_property_profile_component__WEBPACK_IMPORTED_MODULE_8__["PropertyProfileComponent"], _components_property_configuration_property_facility_property_facility_component__WEBPACK_IMPORTED_MODULE_9__["PropertyFacilityComponent"], _components_property_configuration_property_parking_details_property_parking_details_component__WEBPACK_IMPORTED_MODULE_10__["PropertyParkingDetailsComponent"], _components_property_configuration_property_asset_category_property_asset_category_component__WEBPACK_IMPORTED_MODULE_11__["PropertyAssetCategoryComponent"], _components_property_alerts_property_alerts_component__WEBPACK_IMPORTED_MODULE_12__["PropertyAlertsComponent"], _components_property_configuration_property_details_property_tower_info_property_tower_info_component__WEBPACK_IMPORTED_MODULE_13__["PropertyTowerInfoComponent"], _components_property_configuration_property_details_property_tower_info_property_tower_unit_info_property_tower_unit_info_component__WEBPACK_IMPORTED_MODULE_14__["PropertyTowerUnitInfoComponent"], _components_property_configuration_property_facility_property_tower_facility_property_tower_facility_component__WEBPACK_IMPORTED_MODULE_15__["PropertyTowerFacilityComponent"], _components_property_configuration_property_asset_category_property_asset_category_info_property_asset_category_info_component__WEBPACK_IMPORTED_MODULE_16__["PropertyAssetCategoryInfoComponent"], _components_property_alerts_property_alerts_info_property_alerts_info_component__WEBPACK_IMPORTED_MODULE_17__["PropertyAlertsInfoComponent"], _components_property_configuration_property_parking_details_property_parking_details_info_property_parking_details_info_component__WEBPACK_IMPORTED_MODULE_18__["PropertyParkingDetailsInfoComponent"], _components_property_view_property_tower_list_property_tower_list_component__WEBPACK_IMPORTED_MODULE_19__["PropertyTowerListComponent"], _components_property_view_property_tower_details_property_tower_details_component__WEBPACK_IMPORTED_MODULE_20__["PropertyTowerDetailsComponent"], _components_property_view_property_units_details_property_units_details_component__WEBPACK_IMPORTED_MODULE_21__["PropertyUnitsDetailsComponent"], _components_property_view_property_view_main_property_view_main_component__WEBPACK_IMPORTED_MODULE_22__["PropertyViewMainComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _my_property_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyPropertyRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbTooltipModule"]],
      bootstrap: [_my_property_component__WEBPACK_IMPORTED_MODULE_5__["MyPropertyComponent"]]
    })], MyPropertyModule);
    /***/
  }
}]);
//# sourceMappingURL=my-property-my-property-module-es5.js.map