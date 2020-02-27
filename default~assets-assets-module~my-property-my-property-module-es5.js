function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~assets-assets-module~my-property-my-property-module"], {
  /***/
  "./src/app/api/services/asset.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/api/services/asset.service.ts ***!
    \***********************************************/

  /*! exports provided: AssetService */

  /***/
  function srcAppApiServicesAssetServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetService", function () {
      return AssetService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-service */
    "./src/app/api/base-service.ts");
    /* harmony import */


    var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api-configuration */
    "./src/app/api/api-configuration.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* tslint:disable */


    var AssetService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(AssetService, _base_service__WEBPAC);

      function AssetService(config, http) {
        _classCallCheck(this, AssetService);

        return _possibleConstructorReturn(this, _getPrototypeOf(AssetService).call(this, config, http));
      }
      /**
       * @param apartmentId undefined
       */


      _createClass(AssetService, [{
        key: "getAllAssetByApartmentIdResponse",
        value: function getAllAssetByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetByApartmentId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllAssetByApartmentId",
        value: function getAllAssetByApartmentId(apartmentId) {
          return this.getAllAssetByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.GetAllAssetByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllAssetByApartmentIdStatusResponse",
        value: function getAllAssetByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetByApartmentIdStatus", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.GetAllAssetByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllAssetByApartmentIdStatus",
        value: function getAllAssetByApartmentIdStatus(params) {
          return this.getAllAssetByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param assetId undefined
         */

      }, {
        key: "getAllAssetByAssetIdResponse",
        value: function getAllAssetByAssetIdResponse(assetId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (assetId != null) __params = __params.set('assetId', assetId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetByAssetId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param assetId undefined
         */

      }, {
        key: "getAllAssetByAssetId",
        value: function getAllAssetByAssetId(assetId) {
          return this.getAllAssetByAssetIdResponse(assetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param assetCategoryId undefined
         */

      }, {
        key: "getAllAssetByCategoryIdResponse",
        value: function getAllAssetByCategoryIdResponse(assetCategoryId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (assetCategoryId != null) __params = __params.set('assetCategoryId', assetCategoryId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetByCategoryId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param assetCategoryId undefined
         */

      }, {
        key: "getAllAssetByCategoryId",
        value: function getAllAssetByCategoryId(assetCategoryId) {
          return this.getAllAssetByCategoryIdResponse(assetCategoryId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.GetAllAssetByCategoryIdStatusParams` containing the following parameters:
         *
         * - `assetCategoryId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllAssetByCategoryIdStatusResponse",
        value: function getAllAssetByCategoryIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.assetCategoryId != null) __params = __params.set('assetCategoryId', params.assetCategoryId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetByCategoryIdStatus", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.GetAllAssetByCategoryIdStatusParams` containing the following parameters:
         *
         * - `assetCategoryId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllAssetByCategoryIdStatus",
        value: function getAllAssetByCategoryIdStatus(params) {
          return this.getAllAssetByCategoryIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.AddAssetAsyncParams` containing the following parameters:
         *
         * - `file`:
         *
         * - `asset`:
         */

      }, {
        key: "addAssetAsyncResponse",
        value: function addAssetAsyncResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;

          var __formData = new FormData();

          __body = __formData;

          if (params.file != null) {
            __formData.append('file', params.file);
          }

          __body = params.asset;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/addAsset", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.AddAssetAsyncParams` containing the following parameters:
         *
         * - `file`:
         *
         * - `asset`:
         */

      }, {
        key: "addAssetAsync",
        value: function addAssetAsync(params) {
          return this.addAssetAsyncResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.UpdateAssetAsyncParams` containing the following parameters:
         *
         * - `file`:
         *
         * - `asset`:
         */

      }, {
        key: "updateAssetAsyncResponse",
        value: function updateAssetAsyncResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;

          var __formData = new FormData();

          __body = __formData;

          if (params.file != null) {
            __formData.append('file', params.file);
          }

          __body = params.asset;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/updateAsset", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.UpdateAssetAsyncParams` containing the following parameters:
         *
         * - `file`:
         *
         * - `asset`:
         */

      }, {
        key: "updateAssetAsync",
        value: function updateAssetAsync(params) {
          return this.updateAssetAsyncResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.DeleteAssetParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `assetId`:
         */

      }, {
        key: "deleteAssetResponse",
        value: function deleteAssetResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.assetId != null) __params = __params.set('assetId', params.assetId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/deleteAsset", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.DeleteAssetParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `assetId`:
         */

      }, {
        key: "deleteAsset",
        value: function deleteAsset(params) {
          return this.deleteAssetResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllAssetMaintenancePlanByApartmentIdResponse",
        value: function getAllAssetMaintenancePlanByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetMaintenancePlanByApartmentId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllAssetMaintenancePlanByApartmentId",
        value: function getAllAssetMaintenancePlanByApartmentId(apartmentId) {
          return this.getAllAssetMaintenancePlanByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.GetAllAssetMaintenancePlanByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllAssetMaintenancePlanByApartmentIdStatusResponse",
        value: function getAllAssetMaintenancePlanByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetMaintenancePlanByApartmentIdStatus", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.GetAllAssetMaintenancePlanByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllAssetMaintenancePlanByApartmentIdStatus",
        value: function getAllAssetMaintenancePlanByApartmentIdStatus(params) {
          return this.getAllAssetMaintenancePlanByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param assetMaintenancePlanId undefined
         */

      }, {
        key: "getAllAssetMaintenancePlanByIdResponse",
        value: function getAllAssetMaintenancePlanByIdResponse(assetMaintenancePlanId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (assetMaintenancePlanId != null) __params = __params.set('assetMaintenancePlanId', assetMaintenancePlanId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetMaintenancePlanById", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param assetMaintenancePlanId undefined
         */

      }, {
        key: "getAllAssetMaintenancePlanById",
        value: function getAllAssetMaintenancePlanById(assetMaintenancePlanId) {
          return this.getAllAssetMaintenancePlanByIdResponse(assetMaintenancePlanId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param assetId undefined
         */

      }, {
        key: "getAllAssetMaintenancePlanByAssetIdResponse",
        value: function getAllAssetMaintenancePlanByAssetIdResponse(assetId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (assetId != null) __params = __params.set('assetId', assetId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetMaintenancePlanByAssetId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param assetId undefined
         */

      }, {
        key: "getAllAssetMaintenancePlanByAssetId",
        value: function getAllAssetMaintenancePlanByAssetId(assetId) {
          return this.getAllAssetMaintenancePlanByAssetIdResponse(assetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param assetMaintenancePlan undefined
         */

      }, {
        key: "addAssetMaintenancePlanResponse",
        value: function addAssetMaintenancePlanResponse(assetMaintenancePlan) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = assetMaintenancePlan;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/addAssetMaintenancePlan", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param assetMaintenancePlan undefined
         */

      }, {
        key: "addAssetMaintenancePlan",
        value: function addAssetMaintenancePlan(assetMaintenancePlan) {
          return this.addAssetMaintenancePlanResponse(assetMaintenancePlan).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param assetMaintenancePlan undefined
         */

      }, {
        key: "updateAssetMaintenancePlanResponse",
        value: function updateAssetMaintenancePlanResponse(assetMaintenancePlan) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = assetMaintenancePlan;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/updateAssetMaintenancePlan", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param assetMaintenancePlan undefined
         */

      }, {
        key: "updateAssetMaintenancePlan",
        value: function updateAssetMaintenancePlan(assetMaintenancePlan) {
          return this.updateAssetMaintenancePlanResponse(assetMaintenancePlan).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.DeleteAssetMaintenancePlanParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `assetMaintenancePlanId`:
         */

      }, {
        key: "deleteAssetMaintenancePlanResponse",
        value: function deleteAssetMaintenancePlanResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.assetMaintenancePlanId != null) __params = __params.set('assetMaintenancePlanId', params.assetMaintenancePlanId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/deleteAssetMaintenancePlan", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.DeleteAssetMaintenancePlanParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `assetMaintenancePlanId`:
         */

      }, {
        key: "deleteAssetMaintenancePlan",
        value: function deleteAssetMaintenancePlan(params) {
          return this.deleteAssetMaintenancePlanResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllAssetInsurancePlanByApartmentIdResponse",
        value: function getAllAssetInsurancePlanByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetInsurancePlanByApartmentId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllAssetInsurancePlanByApartmentId",
        value: function getAllAssetInsurancePlanByApartmentId(apartmentId) {
          return this.getAllAssetInsurancePlanByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param Id undefined
         */

      }, {
        key: "getAllAssetInsurancePlanByIdResponse",
        value: function getAllAssetInsurancePlanByIdResponse(Id) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (Id != null) __params = __params.set('Id', Id.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetInsurancePlanById", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param Id undefined
         */

      }, {
        key: "getAllAssetInsurancePlanById",
        value: function getAllAssetInsurancePlanById(Id) {
          return this.getAllAssetInsurancePlanByIdResponse(Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param AssetId undefined
         */

      }, {
        key: "getAllAssetInsurancePlanByAssetIdResponse",
        value: function getAllAssetInsurancePlanByAssetIdResponse(AssetId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (AssetId != null) __params = __params.set('AssetId', AssetId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetInsurancePlanByAssetId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param AssetId undefined
         */

      }, {
        key: "getAllAssetInsurancePlanByAssetId",
        value: function getAllAssetInsurancePlanByAssetId(AssetId) {
          return this.getAllAssetInsurancePlanByAssetIdResponse(AssetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param assetInsurancePlan undefined
         */

      }, {
        key: "addAssetInsurancePlanResponse",
        value: function addAssetInsurancePlanResponse(assetInsurancePlan) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = assetInsurancePlan;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/addAssetInsurancePlan", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param assetInsurancePlan undefined
         */

      }, {
        key: "addAssetInsurancePlan",
        value: function addAssetInsurancePlan(assetInsurancePlan) {
          return this.addAssetInsurancePlanResponse(assetInsurancePlan).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param assetInsurancePlan undefined
         */

      }, {
        key: "updateAssetInsurancePlanResponse",
        value: function updateAssetInsurancePlanResponse(assetInsurancePlan) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = assetInsurancePlan;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/updateAssetInsurancePlan", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param assetInsurancePlan undefined
         */

      }, {
        key: "updateAssetInsurancePlan",
        value: function updateAssetInsurancePlan(assetInsurancePlan) {
          return this.updateAssetInsurancePlanResponse(assetInsurancePlan).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.DeleteAssetInsurancePlanParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `assetInsurancePlanId`:
         */

      }, {
        key: "deleteAssetInsurancePlanResponse",
        value: function deleteAssetInsurancePlanResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.assetInsurancePlanId != null) __params = __params.set('assetInsurancePlanId', params.assetInsurancePlanId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/deleteAssetInsurancePlan", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.DeleteAssetInsurancePlanParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `assetInsurancePlanId`:
         */

      }, {
        key: "deleteAssetInsurancePlan",
        value: function deleteAssetInsurancePlan(params) {
          return this.deleteAssetInsurancePlanResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllAssetCheckInOutResponse",
        value: function getAllAssetCheckInOutResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetCheckInOut", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
      }, {
        key: "getAllAssetCheckInOut",
        value: function getAllAssetCheckInOut() {
          return this.getAllAssetCheckInOutResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllAssetCheckInOutByApartmentIdResponse",
        value: function getAllAssetCheckInOutByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetCheckInOutByApartmentId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllAssetCheckInOutByApartmentId",
        value: function getAllAssetCheckInOutByApartmentId(apartmentId) {
          return this.getAllAssetCheckInOutByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.GetAllAssetCheckInOutByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllAssetCheckInOutByApartmentIdStatusResponse",
        value: function getAllAssetCheckInOutByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetCheckInOutByApartmentIdStatus", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.GetAllAssetCheckInOutByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllAssetCheckInOutByApartmentIdStatus",
        value: function getAllAssetCheckInOutByApartmentIdStatus(params) {
          return this.getAllAssetCheckInOutByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param assetCheckInOutId undefined
         */

      }, {
        key: "getAllAssetCheckInOutByIdResponse",
        value: function getAllAssetCheckInOutByIdResponse(assetCheckInOutId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (assetCheckInOutId != null) __params = __params.set('assetCheckInOutId', assetCheckInOutId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetCheckInOutById", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param assetCheckInOutId undefined
         */

      }, {
        key: "getAllAssetCheckInOutById",
        value: function getAllAssetCheckInOutById(assetCheckInOutId) {
          return this.getAllAssetCheckInOutByIdResponse(assetCheckInOutId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllAssetCheckInOutByStatusResponse",
        value: function getAllAssetCheckInOutByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/getAllAssetCheckInOutByStatus", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllAssetCheckInOutByStatus",
        value: function getAllAssetCheckInOutByStatus(active) {
          return this.getAllAssetCheckInOutByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param assetCheckInOut undefined
         */

      }, {
        key: "addAssetCheckInOutResponse",
        value: function addAssetCheckInOutResponse(assetCheckInOut) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = assetCheckInOut;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/addAssetCheckInOut", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param assetCheckInOut undefined
         */

      }, {
        key: "addAssetCheckInOut",
        value: function addAssetCheckInOut(assetCheckInOut) {
          return this.addAssetCheckInOutResponse(assetCheckInOut).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param assetCheckInOut undefined
         */

      }, {
        key: "updateAssetCheckInOutResponse",
        value: function updateAssetCheckInOutResponse(assetCheckInOut) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = assetCheckInOut;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/updateAssetCheckInOut", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param assetCheckInOut undefined
         */

      }, {
        key: "updateAssetCheckInOut",
        value: function updateAssetCheckInOut(assetCheckInOut) {
          return this.updateAssetCheckInOutResponse(assetCheckInOut).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.DeleteAssetCheckInOutParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `assetCheckInOutId`:
         */

      }, {
        key: "deleteAssetCheckInOutResponse",
        value: function deleteAssetCheckInOutResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.assetCheckInOutId != null) __params = __params.set('assetCheckInOutId', params.assetCheckInOutId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Asset/deleteAssetCheckInOut", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.DeleteAssetCheckInOutParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `assetCheckInOutId`:
         */

      }, {
        key: "deleteAssetCheckInOut",
        value: function deleteAssetCheckInOut(params) {
          return this.deleteAssetCheckInOutResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.GetAssetDetailsbyMaintenanceCountParams` containing the following parameters:
         *
         * - `MaintenanceDays`:
         *
         * - `MaintenanceCompletedDays`:
         *
         * - `InsuranceExpDays`:
         *
         * - `ApartmentId`:
         */

      }, {
        key: "GetAssetDetailsbyMaintenanceCountResponse",
        value: function GetAssetDetailsbyMaintenanceCountResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.MaintenanceDays != null) __params = __params.set('MaintenanceDays', params.MaintenanceDays.toString());
          if (params.MaintenanceCompletedDays != null) __params = __params.set('MaintenanceCompletedDays', params.MaintenanceCompletedDays.toString());
          if (params.InsuranceExpDays != null) __params = __params.set('InsuranceExpDays', params.InsuranceExpDays.toString());
          if (params.ApartmentId != null) __params = __params.set('ApartmentId', params.ApartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/GetAssetDetailsbyMaintenanceCount", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.GetAssetDetailsbyMaintenanceCountParams` containing the following parameters:
         *
         * - `MaintenanceDays`:
         *
         * - `MaintenanceCompletedDays`:
         *
         * - `InsuranceExpDays`:
         *
         * - `ApartmentId`:
         */

      }, {
        key: "GetAssetDetailsbyMaintenanceCount",
        value: function GetAssetDetailsbyMaintenanceCount(params) {
          return this.GetAssetDetailsbyMaintenanceCountResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.GetAssetMasterDetailParams` containing the following parameters:
         *
         * - `days`:
         *
         * - `InputType`:
         *
         * - `ApartmentId`:
         */

      }, {
        key: "GetAssetMasterDetailResponse",
        value: function GetAssetMasterDetailResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.days != null) __params = __params.set('days', params.days.toString());
          if (params.InputType != null) __params = __params.set('InputType', params.InputType.toString());
          if (params.ApartmentId != null) __params = __params.set('ApartmentId', params.ApartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/GetAssetMasterDetail", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.GetAssetMasterDetailParams` containing the following parameters:
         *
         * - `days`:
         *
         * - `InputType`:
         *
         * - `ApartmentId`:
         */

      }, {
        key: "GetAssetMasterDetail",
        value: function GetAssetMasterDetail(params) {
          return this.GetAssetMasterDetailResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AssetService.GetAssetCountsByCategoryIdParams` containing the following parameters:
         *
         * - `AssetCategoryId`:
         *
         * - `ApartmentId`:
         */

      }, {
        key: "GetAssetCountsByCategoryIdResponse",
        value: function GetAssetCountsByCategoryIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.AssetCategoryId != null) __params = __params.set('AssetCategoryId', params.AssetCategoryId.toString());
          if (params.ApartmentId != null) __params = __params.set('ApartmentId', params.ApartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Asset/GetAssetCountsByCategoryId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `AssetService.GetAssetCountsByCategoryIdParams` containing the following parameters:
         *
         * - `AssetCategoryId`:
         *
         * - `ApartmentId`:
         */

      }, {
        key: "GetAssetCountsByCategoryId",
        value: function GetAssetCountsByCategoryId(params) {
          return this.GetAssetCountsByCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }]);

      return AssetService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

    AssetService.getAllAssetByApartmentIdPath = '/api/Asset/getAllAssetByApartmentId';
    AssetService.getAllAssetByApartmentIdStatusPath = '/api/Asset/getAllAssetByApartmentIdStatus';
    AssetService.getAllAssetByAssetIdPath = '/api/Asset/getAllAssetByAssetId';
    AssetService.getAllAssetByCategoryIdPath = '/api/Asset/getAllAssetByCategoryId';
    AssetService.getAllAssetByCategoryIdStatusPath = '/api/Asset/getAllAssetByCategoryIdStatus';
    AssetService.addAssetAsyncPath = '/api/Asset/addAsset';
    AssetService.updateAssetAsyncPath = '/api/Asset/updateAsset';
    AssetService.deleteAssetPath = '/api/Asset/deleteAsset';
    AssetService.getAllAssetMaintenancePlanByApartmentIdPath = '/api/Asset/getAllAssetMaintenancePlanByApartmentId';
    AssetService.getAllAssetMaintenancePlanByApartmentIdStatusPath = '/api/Asset/getAllAssetMaintenancePlanByApartmentIdStatus';
    AssetService.getAllAssetMaintenancePlanByIdPath = '/api/Asset/getAllAssetMaintenancePlanById';
    AssetService.getAllAssetMaintenancePlanByAssetIdPath = '/api/Asset/getAllAssetMaintenancePlanByAssetId';
    AssetService.addAssetMaintenancePlanPath = '/api/Asset/addAssetMaintenancePlan';
    AssetService.updateAssetMaintenancePlanPath = '/api/Asset/updateAssetMaintenancePlan';
    AssetService.deleteAssetMaintenancePlanPath = '/api/Asset/deleteAssetMaintenancePlan';
    AssetService.getAllAssetInsurancePlanByApartmentIdPath = '/api/Asset/getAllAssetInsurancePlanByApartmentId';
    AssetService.getAllAssetInsurancePlanByIdPath = '/api/Asset/getAllAssetInsurancePlanById';
    AssetService.getAllAssetInsurancePlanByAssetIdPath = '/api/Asset/getAllAssetInsurancePlanByAssetId';
    AssetService.addAssetInsurancePlanPath = '/api/Asset/addAssetInsurancePlan';
    AssetService.updateAssetInsurancePlanPath = '/api/Asset/updateAssetInsurancePlan';
    AssetService.deleteAssetInsurancePlanPath = '/api/Asset/deleteAssetInsurancePlan';
    AssetService.getAllAssetCheckInOutPath = '/api/Asset/getAllAssetCheckInOut';
    AssetService.getAllAssetCheckInOutByApartmentIdPath = '/api/Asset/getAllAssetCheckInOutByApartmentId';
    AssetService.getAllAssetCheckInOutByApartmentIdStatusPath = '/api/Asset/getAllAssetCheckInOutByApartmentIdStatus';
    AssetService.getAllAssetCheckInOutByIdPath = '/api/Asset/getAllAssetCheckInOutById';
    AssetService.getAllAssetCheckInOutByStatusPath = '/api/Asset/getAllAssetCheckInOutByStatus';
    AssetService.addAssetCheckInOutPath = '/api/Asset/addAssetCheckInOut';
    AssetService.updateAssetCheckInOutPath = '/api/Asset/updateAssetCheckInOut';
    AssetService.deleteAssetCheckInOutPath = '/api/Asset/deleteAssetCheckInOut';
    AssetService.GetAssetDetailsbyMaintenanceCountPath = '/api/Asset/GetAssetDetailsbyMaintenanceCount';
    AssetService.GetAssetMasterDetailPath = '/api/Asset/GetAssetMasterDetail';
    AssetService.GetAssetCountsByCategoryIdPath = '/api/Asset/GetAssetCountsByCategoryId';

    AssetService.ctorParameters = function () {
      return [{
        type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AssetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AssetService);
    /***/
  }
}]);
//# sourceMappingURL=default~assets-assets-module~my-property-my-property-module-es5.js.map