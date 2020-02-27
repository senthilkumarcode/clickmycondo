function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~user-visitor-user-visitor-module~visitor-visitor-module"], {
  /***/
  "./src/app/api/services/visitor.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/api/services/visitor.service.ts ***!
    \*************************************************/

  /*! exports provided: VisitorService */

  /***/
  function srcAppApiServicesVisitorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorService", function () {
      return VisitorService;
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


    var VisitorService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(VisitorService, _base_service__WEBPAC);

      function VisitorService(config, http) {
        _classCallCheck(this, VisitorService);

        return _possibleConstructorReturn(this, _getPrototypeOf(VisitorService).call(this, config, http));
      }

      _createClass(VisitorService, [{
        key: "getAllVisitorsResponse",
        value: function getAllVisitorsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getAllVisitors", __body, {
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
        key: "getAllVisitors",
        value: function getAllVisitors() {
          return this.getAllVisitorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVisitorsByStatusResponse",
        value: function getAllVisitorsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getAllVisitorsByStatus", __body, {
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
        key: "getAllVisitorsByStatus",
        value: function getAllVisitorsByStatus(active) {
          return this.getAllVisitorsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVisitorsByApartmentIdResponse",
        value: function getVisitorsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getVisitorsByApartmentId", __body, {
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
        key: "getVisitorsByApartmentId",
        value: function getVisitorsByApartmentId(apartmentId) {
          return this.getVisitorsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.GetVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVisitorsByApartmentIdDateResponse",
        value: function getVisitorsByApartmentIdDateResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getVisitorsByApartmentIdDate", __body, {
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
         * @param params The `VisitorService.GetVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVisitorsByApartmentIdDate",
        value: function getVisitorsByApartmentIdDate(params) {
          return this.getVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllUnplannedVisitorsResponse",
        value: function getAllUnplannedVisitorsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getAllUnplannedVisitors", __body, {
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
        key: "getAllUnplannedVisitors",
        value: function getAllUnplannedVisitors() {
          return this.getAllUnplannedVisitorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllPlannedVisitorsResponse",
        value: function getAllPlannedVisitorsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getAllPlannedVisitors", __body, {
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
        key: "getAllPlannedVisitors",
        value: function getAllPlannedVisitors() {
          return this.getAllPlannedVisitorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.GetUnplannedVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getUnplannedVisitorsByApartmentIdDateResponse",
        value: function getUnplannedVisitorsByApartmentIdDateResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getUnplannedVisitorsByApartmentIdDate", __body, {
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
         * @param params The `VisitorService.GetUnplannedVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getUnplannedVisitorsByApartmentIdDate",
        value: function getUnplannedVisitorsByApartmentIdDate(params) {
          return this.getUnplannedVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.GetPlannedVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getPlannedVisitorsByApartmentIdDateResponse",
        value: function getPlannedVisitorsByApartmentIdDateResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getPlannedVisitorsByApartmentIdDate", __body, {
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
         * @param params The `VisitorService.GetPlannedVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getPlannedVisitorsByApartmentIdDate",
        value: function getPlannedVisitorsByApartmentIdDate(params) {
          return this.getPlannedVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentUnitId undefined
         */

      }, {
        key: "getVisitorsByApartmentUnitIdResponse",
        value: function getVisitorsByApartmentUnitIdResponse(apartmentUnitId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentUnitId != null) __params = __params.set('apartmentUnitId', apartmentUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getVisitorsByApartmentUnitId", __body, {
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
         * @param apartmentUnitId undefined
         */

      }, {
        key: "getVisitorsByApartmentUnitId",
        value: function getVisitorsByApartmentUnitId(apartmentUnitId) {
          return this.getVisitorsByApartmentUnitIdResponse(apartmentUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param visitorId undefined
         */

      }, {
        key: "getVisitorByIdResponse",
        value: function getVisitorByIdResponse(visitorId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (visitorId != null) __params = __params.set('visitorId', visitorId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getVisitorById", __body, {
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
         * @param visitorId undefined
         */

      }, {
        key: "getVisitorById",
        value: function getVisitorById(visitorId) {
          return this.getVisitorByIdResponse(visitorId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.GetVisitorByApartmentIdVisitorTypeIdParams` containing the following parameters:
         *
         * - `visitorTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVisitorByApartmentIdVisitorTypeIdResponse",
        value: function getVisitorByApartmentIdVisitorTypeIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.visitorTypeId != null) __params = __params.set('visitorTypeId', params.visitorTypeId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getVisitorByApartmentIdVisitorTypeId", __body, {
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
         * @param params The `VisitorService.GetVisitorByApartmentIdVisitorTypeIdParams` containing the following parameters:
         *
         * - `visitorTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVisitorByApartmentIdVisitorTypeId",
        value: function getVisitorByApartmentIdVisitorTypeId(params) {
          return this.getVisitorByApartmentIdVisitorTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.GetVisitorsByApartmentIdVisitorTypeIdParams` containing the following parameters:
         *
         * - `visitorTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVisitorsByApartmentIdVisitorTypeIdResponse",
        value: function getVisitorsByApartmentIdVisitorTypeIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.visitorTypeId != null) __params = __params.set('visitorTypeId', params.visitorTypeId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getVisitorsByApartmentIdVisitorTypeId", __body, {
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
         * @param params The `VisitorService.GetVisitorsByApartmentIdVisitorTypeIdParams` containing the following parameters:
         *
         * - `visitorTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVisitorsByApartmentIdVisitorTypeId",
        value: function getVisitorsByApartmentIdVisitorTypeId(params) {
          return this.getVisitorsByApartmentIdVisitorTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.GetVisitorsByVisitorTypeIdDateParams` containing the following parameters:
         *
         * - `visitorTypeId`:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVisitorsByVisitorTypeIdDateResponse",
        value: function getVisitorsByVisitorTypeIdDateResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.visitorTypeId != null) __params = __params.set('visitorTypeId', params.visitorTypeId.toString());
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getVisitorsByVisitorTypeIdDate", __body, {
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
         * @param params The `VisitorService.GetVisitorsByVisitorTypeIdDateParams` containing the following parameters:
         *
         * - `visitorTypeId`:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVisitorsByVisitorTypeIdDate",
        value: function getVisitorsByVisitorTypeIdDate(params) {
          return this.getVisitorsByVisitorTypeIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getYetToCheckoutVisitorsByApartmentIdResponse",
        value: function getYetToCheckoutVisitorsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getYetToCheckoutVisitorsByApartmentId", __body, {
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
        key: "getYetToCheckoutVisitorsByApartmentId",
        value: function getYetToCheckoutVisitorsByApartmentId(apartmentId) {
          return this.getYetToCheckoutVisitorsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.GetYetToCheckoutVisitorsByApartmentIdVisitorTypeIdParams` containing the following parameters:
         *
         * - `visitorTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getYetToCheckoutVisitorsByApartmentIdVisitorTypeIdResponse",
        value: function getYetToCheckoutVisitorsByApartmentIdVisitorTypeIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.visitorTypeId != null) __params = __params.set('visitorTypeId', params.visitorTypeId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getYetToCheckoutVisitorsByApartmentIdVisitorTypeId", __body, {
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
         * @param params The `VisitorService.GetYetToCheckoutVisitorsByApartmentIdVisitorTypeIdParams` containing the following parameters:
         *
         * - `visitorTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getYetToCheckoutVisitorsByApartmentIdVisitorTypeId",
        value: function getYetToCheckoutVisitorsByApartmentIdVisitorTypeId(params) {
          return this.getYetToCheckoutVisitorsByApartmentIdVisitorTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.GetYetToCheckoutVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getYetToCheckoutVisitorsByApartmentIdDateResponse",
        value: function getYetToCheckoutVisitorsByApartmentIdDateResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getYetToCheckoutVisitorsByApartmentIdDate", __body, {
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
         * @param params The `VisitorService.GetYetToCheckoutVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getYetToCheckoutVisitorsByApartmentIdDate",
        value: function getYetToCheckoutVisitorsByApartmentIdDate(params) {
          return this.getYetToCheckoutVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param visitor undefined
         */

      }, {
        key: "addVisitorResponse",
        value: function addVisitorResponse(visitor) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = visitor;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Visitor/addVisitor", __body, {
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
         * @param visitor undefined
         */

      }, {
        key: "addVisitor",
        value: function addVisitor(visitor) {
          return this.addVisitorResponse(visitor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param visitor undefined
         */

      }, {
        key: "updateVisitorResponse",
        value: function updateVisitorResponse(visitor) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = visitor;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Visitor/updateVisitor", __body, {
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
         * @param visitor undefined
         */

      }, {
        key: "updateVisitor",
        value: function updateVisitor(visitor) {
          return this.updateVisitorResponse(visitor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.CheckOutVisitorParams` containing the following parameters:
         *
         * - `visitorId`:
         *
         * - `updatedBy`:
         *
         * - `checkOutTime`:
         */

      }, {
        key: "checkOutVisitorResponse",
        value: function checkOutVisitorResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.visitorId != null) __params = __params.set('visitorId', params.visitorId.toString());
          if (params.updatedBy != null) __params = __params.set('updatedBy', params.updatedBy.toString());
          if (params.checkOutTime != null) __params = __params.set('checkOutTime', params.checkOutTime.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Visitor/checkOutVisitor", __body, {
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
         * @param params The `VisitorService.CheckOutVisitorParams` containing the following parameters:
         *
         * - `visitorId`:
         *
         * - `updatedBy`:
         *
         * - `checkOutTime`:
         */

      }, {
        key: "checkOutVisitor",
        value: function checkOutVisitor(params) {
          return this.checkOutVisitorResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param visitor undefined
         */

      }, {
        key: "deleteVisitorResponse",
        value: function deleteVisitorResponse(visitor) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = visitor;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Visitor/deleteVisitor", __body, {
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
         * @param visitor undefined
         */

      }, {
        key: "deleteVisitor",
        value: function deleteVisitor(visitor) {
          return this.deleteVisitorResponse(visitor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.DeleteVisitorByIdParams` containing the following parameters:
         *
         * - `visitorId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVisitorByIdResponse",
        value: function deleteVisitorByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.visitorId != null) __params = __params.set('visitorId', params.visitorId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Visitor/deleteVisitorById", __body, {
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
         * @param params The `VisitorService.DeleteVisitorByIdParams` containing the following parameters:
         *
         * - `visitorId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVisitorById",
        value: function deleteVisitorById(params) {
          return this.deleteVisitorByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllExpectedVisitorsResponse",
        value: function getAllExpectedVisitorsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getAllExpectedVisitors", __body, {
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
        key: "getAllExpectedVisitors",
        value: function getAllExpectedVisitors() {
          return this.getAllExpectedVisitorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllYetToComeExpectedVisitorsResponse",
        value: function getAllYetToComeExpectedVisitorsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getAllYetToComeExpectedVisitors", __body, {
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
        key: "getAllYetToComeExpectedVisitors",
        value: function getAllYetToComeExpectedVisitors() {
          return this.getAllYetToComeExpectedVisitorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllYetToComeExpectedVisitorsByApartmentIdResponse",
        value: function getAllYetToComeExpectedVisitorsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getAllYetToComeExpectedVisitorsByApartmentId", __body, {
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
        key: "getAllYetToComeExpectedVisitorsByApartmentId",
        value: function getAllYetToComeExpectedVisitorsByApartmentId(apartmentId) {
          return this.getAllYetToComeExpectedVisitorsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.GetAllYetToComeExpectedVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getAllYetToComeExpectedVisitorsByApartmentIdDateResponse",
        value: function getAllYetToComeExpectedVisitorsByApartmentIdDateResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getAllYetToComeExpectedVisitorsByApartmentIdDate", __body, {
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
         * @param params The `VisitorService.GetAllYetToComeExpectedVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getAllYetToComeExpectedVisitorsByApartmentIdDate",
        value: function getAllYetToComeExpectedVisitorsByApartmentIdDate(params) {
          return this.getAllYetToComeExpectedVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllExpectedVisitorsByStatusResponse",
        value: function getAllExpectedVisitorsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getAllExpectedVisitorsByStatus", __body, {
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
        key: "getAllExpectedVisitorsByStatus",
        value: function getAllExpectedVisitorsByStatus(active) {
          return this.getAllExpectedVisitorsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getExpectedVisitorsByApartmentIdResponse",
        value: function getExpectedVisitorsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getExpectedVisitorsByApartmentId", __body, {
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
        key: "getExpectedVisitorsByApartmentId",
        value: function getExpectedVisitorsByApartmentId(apartmentId) {
          return this.getExpectedVisitorsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.GetExpectedVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getExpectedVisitorsByApartmentIdDateResponse",
        value: function getExpectedVisitorsByApartmentIdDateResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getExpectedVisitorsByApartmentIdDate", __body, {
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
         * @param params The `VisitorService.GetExpectedVisitorsByApartmentIdDateParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getExpectedVisitorsByApartmentIdDate",
        value: function getExpectedVisitorsByApartmentIdDate(params) {
          return this.getExpectedVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentUnitId undefined
         */

      }, {
        key: "getExpectedVisitorsByApartmentUnitIdResponse",
        value: function getExpectedVisitorsByApartmentUnitIdResponse(apartmentUnitId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentUnitId != null) __params = __params.set('apartmentUnitId', apartmentUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getExpectedVisitorsByApartmentUnitId", __body, {
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
         * @param apartmentUnitId undefined
         */

      }, {
        key: "getExpectedVisitorsByApartmentUnitId",
        value: function getExpectedVisitorsByApartmentUnitId(apartmentUnitId) {
          return this.getExpectedVisitorsByApartmentUnitIdResponse(apartmentUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param expectedVisitorId undefined
         */

      }, {
        key: "getExpectedVisitorByIdResponse",
        value: function getExpectedVisitorByIdResponse(expectedVisitorId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (expectedVisitorId != null) __params = __params.set('expectedVisitorId', expectedVisitorId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Visitor/getExpectedVisitorById", __body, {
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
         * @param expectedVisitorId undefined
         */

      }, {
        key: "getExpectedVisitorById",
        value: function getExpectedVisitorById(expectedVisitorId) {
          return this.getExpectedVisitorByIdResponse(expectedVisitorId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param expectedVisitor undefined
         */

      }, {
        key: "addExpectedVisitorResponse",
        value: function addExpectedVisitorResponse(expectedVisitor) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = expectedVisitor;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Visitor/addExpectedVisitor", __body, {
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
         * @param expectedVisitor undefined
         */

      }, {
        key: "addExpectedVisitor",
        value: function addExpectedVisitor(expectedVisitor) {
          return this.addExpectedVisitorResponse(expectedVisitor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param expectedVisitor undefined
         */

      }, {
        key: "updateExpectedVisitorResponse",
        value: function updateExpectedVisitorResponse(expectedVisitor) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = expectedVisitor;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Visitor/updateExpectedVisitor", __body, {
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
         * @param expectedVisitor undefined
         */

      }, {
        key: "updateExpectedVisitor",
        value: function updateExpectedVisitor(expectedVisitor) {
          return this.updateExpectedVisitorResponse(expectedVisitor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VisitorService.DeleteExpectedVisitorByIdParams` containing the following parameters:
         *
         * - `expectedVisitorId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteExpectedVisitorByIdResponse",
        value: function deleteExpectedVisitorByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.expectedVisitorId != null) __params = __params.set('expectedVisitorId', params.expectedVisitorId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Visitor/deleteExpectedVisitorById", __body, {
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
         * @param params The `VisitorService.DeleteExpectedVisitorByIdParams` containing the following parameters:
         *
         * - `expectedVisitorId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteExpectedVisitorById",
        value: function deleteExpectedVisitorById(params) {
          return this.deleteExpectedVisitorByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }]);

      return VisitorService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

    VisitorService.getAllVisitorsPath = '/api/Visitor/getAllVisitors';
    VisitorService.getAllVisitorsByStatusPath = '/api/Visitor/getAllVisitorsByStatus';
    VisitorService.getVisitorsByApartmentIdPath = '/api/Visitor/getVisitorsByApartmentId';
    VisitorService.getVisitorsByApartmentIdDatePath = '/api/Visitor/getVisitorsByApartmentIdDate';
    VisitorService.getAllUnplannedVisitorsPath = '/api/Visitor/getAllUnplannedVisitors';
    VisitorService.getAllPlannedVisitorsPath = '/api/Visitor/getAllPlannedVisitors';
    VisitorService.getUnplannedVisitorsByApartmentIdDatePath = '/api/Visitor/getUnplannedVisitorsByApartmentIdDate';
    VisitorService.getPlannedVisitorsByApartmentIdDatePath = '/api/Visitor/getPlannedVisitorsByApartmentIdDate';
    VisitorService.getVisitorsByApartmentUnitIdPath = '/api/Visitor/getVisitorsByApartmentUnitId';
    VisitorService.getVisitorByIdPath = '/api/Visitor/getVisitorById';
    VisitorService.getVisitorByApartmentIdVisitorTypeIdPath = '/api/Visitor/getVisitorByApartmentIdVisitorTypeId';
    VisitorService.getVisitorsByApartmentIdVisitorTypeIdPath = '/api/Visitor/getVisitorsByApartmentIdVisitorTypeId';
    VisitorService.getVisitorsByVisitorTypeIdDatePath = '/api/Visitor/getVisitorsByVisitorTypeIdDate';
    VisitorService.getYetToCheckoutVisitorsByApartmentIdPath = '/api/Visitor/getYetToCheckoutVisitorsByApartmentId';
    VisitorService.getYetToCheckoutVisitorsByApartmentIdVisitorTypeIdPath = '/api/Visitor/getYetToCheckoutVisitorsByApartmentIdVisitorTypeId';
    VisitorService.getYetToCheckoutVisitorsByApartmentIdDatePath = '/api/Visitor/getYetToCheckoutVisitorsByApartmentIdDate';
    VisitorService.addVisitorPath = '/api/Visitor/addVisitor';
    VisitorService.updateVisitorPath = '/api/Visitor/updateVisitor';
    VisitorService.checkOutVisitorPath = '/api/Visitor/checkOutVisitor';
    VisitorService.deleteVisitorPath = '/api/Visitor/deleteVisitor';
    VisitorService.deleteVisitorByIdPath = '/api/Visitor/deleteVisitorById';
    VisitorService.getAllExpectedVisitorsPath = '/api/Visitor/getAllExpectedVisitors';
    VisitorService.getAllYetToComeExpectedVisitorsPath = '/api/Visitor/getAllYetToComeExpectedVisitors';
    VisitorService.getAllYetToComeExpectedVisitorsByApartmentIdPath = '/api/Visitor/getAllYetToComeExpectedVisitorsByApartmentId';
    VisitorService.getAllYetToComeExpectedVisitorsByApartmentIdDatePath = '/api/Visitor/getAllYetToComeExpectedVisitorsByApartmentIdDate';
    VisitorService.getAllExpectedVisitorsByStatusPath = '/api/Visitor/getAllExpectedVisitorsByStatus';
    VisitorService.getExpectedVisitorsByApartmentIdPath = '/api/Visitor/getExpectedVisitorsByApartmentId';
    VisitorService.getExpectedVisitorsByApartmentIdDatePath = '/api/Visitor/getExpectedVisitorsByApartmentIdDate';
    VisitorService.getExpectedVisitorsByApartmentUnitIdPath = '/api/Visitor/getExpectedVisitorsByApartmentUnitId';
    VisitorService.getExpectedVisitorByIdPath = '/api/Visitor/getExpectedVisitorById';
    VisitorService.addExpectedVisitorPath = '/api/Visitor/addExpectedVisitor';
    VisitorService.updateExpectedVisitorPath = '/api/Visitor/updateExpectedVisitor';
    VisitorService.deleteExpectedVisitorByIdPath = '/api/Visitor/deleteExpectedVisitorById';

    VisitorService.ctorParameters = function () {
      return [{
        type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    VisitorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], VisitorService);
    /***/
  }
}]);
//# sourceMappingURL=default~user-visitor-user-visitor-module~visitor-visitor-module-es5.js.map