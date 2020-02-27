function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~alert-security-alert-security-module~security-security-module"], {
  /***/
  "./src/app/api/services/alert.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/api/services/alert.service.ts ***!
    \***********************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppApiServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
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


    var AlertService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(AlertService, _base_service__WEBPAC);

      function AlertService(config, http) {
        _classCallCheck(this, AlertService);

        return _possibleConstructorReturn(this, _getPrototypeOf(AlertService).call(this, config, http));
      }

      _createClass(AlertService, [{
        key: "getAllAlertEmergencyNumbersResponse",
        value: function getAllAlertEmergencyNumbersResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllAlertEmergencyNumbers", __body, {
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
        key: "getAllAlertEmergencyNumbers",
        value: function getAllAlertEmergencyNumbers() {
          return this.getAllAlertEmergencyNumbersResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllAlertEmergencyNumbersByStatusResponse",
        value: function getAllAlertEmergencyNumbersByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllAlertEmergencyNumbersByStatus", __body, {
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
        key: "getAllAlertEmergencyNumbersByStatus",
        value: function getAllAlertEmergencyNumbersByStatus(active) {
          return this.getAllAlertEmergencyNumbersByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param alertEmergencyNumberId undefined
         */

      }, {
        key: "getAlertEmergencyNumberByAlertEmergencyNumberIdResponse",
        value: function getAlertEmergencyNumberByAlertEmergencyNumberIdResponse(alertEmergencyNumberId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (alertEmergencyNumberId != null) __params = __params.set('alertEmergencyNumberId', alertEmergencyNumberId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAlertEmergencyNumberByAlertEmergencyNumberId", __body, {
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
         * @param alertEmergencyNumberId undefined
         */

      }, {
        key: "getAlertEmergencyNumberByAlertEmergencyNumberId",
        value: function getAlertEmergencyNumberByAlertEmergencyNumberId(alertEmergencyNumberId) {
          return this.getAlertEmergencyNumberByAlertEmergencyNumberIdResponse(alertEmergencyNumberId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param alertEmergencyNumber undefined
         */

      }, {
        key: "addAlertEmergencyNumberResponse",
        value: function addAlertEmergencyNumberResponse(alertEmergencyNumber) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = alertEmergencyNumber;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/addAlertEmergencyNumber", __body, {
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
         * @param alertEmergencyNumber undefined
         */

      }, {
        key: "addAlertEmergencyNumber",
        value: function addAlertEmergencyNumber(alertEmergencyNumber) {
          return this.addAlertEmergencyNumberResponse(alertEmergencyNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param alertEmergencyNumber undefined
         */

      }, {
        key: "updateAlertEmergencyNumberResponse",
        value: function updateAlertEmergencyNumberResponse(alertEmergencyNumber) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = alertEmergencyNumber;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/updateAlertEmergencyNumber", __body, {
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
         * @param alertEmergencyNumber undefined
         */

      }, {
        key: "updateAlertEmergencyNumber",
        value: function updateAlertEmergencyNumber(alertEmergencyNumber) {
          return this.updateAlertEmergencyNumberResponse(alertEmergencyNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.DeleteAlertEmergencyNumberParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `alertEmergencyNumberId`:
         */

      }, {
        key: "deleteAlertEmergencyNumberResponse",
        value: function deleteAlertEmergencyNumberResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.alertEmergencyNumberId != null) __params = __params.set('alertEmergencyNumberId', params.alertEmergencyNumberId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/deleteAlertEmergencyNumber", __body, {
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
         * @param params The `AlertService.DeleteAlertEmergencyNumberParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `alertEmergencyNumberId`:
         */

      }, {
        key: "deleteAlertEmergencyNumber",
        value: function deleteAlertEmergencyNumber(params) {
          return this.deleteAlertEmergencyNumberResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitSecurityId undefined
         */

      }, {
        key: "getAllApartmentBlockUnitSecurityByIdResponse",
        value: function getAllApartmentBlockUnitSecurityByIdResponse(apartmentBlockUnitSecurityId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentBlockUnitSecurityId != null) __params = __params.set('apartmentBlockUnitSecurityId', apartmentBlockUnitSecurityId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitSecurityById", __body, {
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
         * @param apartmentBlockUnitSecurityId undefined
         */

      }, {
        key: "getAllApartmentBlockUnitSecurityById",
        value: function getAllApartmentBlockUnitSecurityById(apartmentBlockUnitSecurityId) {
          return this.getAllApartmentBlockUnitSecurityByIdResponse(apartmentBlockUnitSecurityId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetAllApartmentBlockUnitSecurityByIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitSecurityId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitSecurityByIdStatusResponse",
        value: function getAllApartmentBlockUnitSecurityByIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentBlockUnitSecurityId != null) __params = __params.set('apartmentBlockUnitSecurityId', params.apartmentBlockUnitSecurityId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitSecurityByIdStatus", __body, {
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
         * @param params The `AlertService.GetAllApartmentBlockUnitSecurityByIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitSecurityId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitSecurityByIdStatus",
        value: function getAllApartmentBlockUnitSecurityByIdStatus(params) {
          return this.getAllApartmentBlockUnitSecurityByIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitId undefined
         */

      }, {
        key: "getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdResponse",
        value: function getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdResponse(apartmentBlockUnitId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitSecurityByApartmentBlockUnitId", __body, {
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
         * @param apartmentBlockUnitId undefined
         */

      }, {
        key: "getAllApartmentBlockUnitSecurityByApartmentBlockUnitId",
        value: function getAllApartmentBlockUnitSecurityByApartmentBlockUnitId(apartmentBlockUnitId) {
          return this.getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdResponse(apartmentBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitId undefined
         */

      }, {
        key: "getHeadSecurityByApartmentBlockUnitIdResponse",
        value: function getHeadSecurityByApartmentBlockUnitIdResponse(apartmentBlockUnitId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getHeadSecurityByApartmentBlockUnitId", __body, {
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
         * @param apartmentBlockUnitId undefined
         */

      }, {
        key: "getHeadSecurityByApartmentBlockUnitId",
        value: function getHeadSecurityByApartmentBlockUnitId(apartmentBlockUnitId) {
          return this.getHeadSecurityByApartmentBlockUnitIdResponse(apartmentBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatusResponse",
        value: function getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatus", __body, {
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
         * @param params The `AlertService.GetAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatus",
        value: function getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatus(params) {
          return this.getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitSecurity undefined
         */

      }, {
        key: "addApartmentBlockUnitSecurityResponse",
        value: function addApartmentBlockUnitSecurityResponse(apartmentBlockUnitSecurity) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = apartmentBlockUnitSecurity;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/addApartmentBlockUnitSecurity", __body, {
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
         * @param apartmentBlockUnitSecurity undefined
         */

      }, {
        key: "addApartmentBlockUnitSecurity",
        value: function addApartmentBlockUnitSecurity(apartmentBlockUnitSecurity) {
          return this.addApartmentBlockUnitSecurityResponse(apartmentBlockUnitSecurity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitSecurity undefined
         */

      }, {
        key: "updateApartmentBlockUnitSecurityResponse",
        value: function updateApartmentBlockUnitSecurityResponse(apartmentBlockUnitSecurity) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = apartmentBlockUnitSecurity;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/updateApartmentBlockUnitSecurity", __body, {
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
         * @param apartmentBlockUnitSecurity undefined
         */

      }, {
        key: "updateApartmentBlockUnitSecurity",
        value: function updateApartmentBlockUnitSecurity(apartmentBlockUnitSecurity) {
          return this.updateApartmentBlockUnitSecurityResponse(apartmentBlockUnitSecurity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.DeleteApartmentBlockUnitSecurityParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `apartmentBlockUnitSecurityId`:
         */

      }, {
        key: "deleteApartmentBlockUnitSecurityResponse",
        value: function deleteApartmentBlockUnitSecurityResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.apartmentBlockUnitSecurityId != null) __params = __params.set('apartmentBlockUnitSecurityId', params.apartmentBlockUnitSecurityId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/deleteApartmentBlockUnitSecurity", __body, {
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
         * @param params The `AlertService.DeleteApartmentBlockUnitSecurityParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `apartmentBlockUnitSecurityId`:
         */

      }, {
        key: "deleteApartmentBlockUnitSecurity",
        value: function deleteApartmentBlockUnitSecurity(params) {
          return this.deleteApartmentBlockUnitSecurityResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitAlertId undefined
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByIdResponse",
        value: function getAllApartmentBlockUnitAlertByIdResponse(apartmentBlockUnitAlertId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentBlockUnitAlertId != null) __params = __params.set('apartmentBlockUnitAlertId', apartmentBlockUnitAlertId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitAlertById", __body, {
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
         * @param apartmentBlockUnitAlertId undefined
         */

      }, {
        key: "getAllApartmentBlockUnitAlertById",
        value: function getAllApartmentBlockUnitAlertById(apartmentBlockUnitAlertId) {
          return this.getAllApartmentBlockUnitAlertByIdResponse(apartmentBlockUnitAlertId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetAllApartmentBlockUnitAlertByIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitAlertId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByIdStatusResponse",
        value: function getAllApartmentBlockUnitAlertByIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentBlockUnitAlertId != null) __params = __params.set('apartmentBlockUnitAlertId', params.apartmentBlockUnitAlertId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitAlertByIdStatus", __body, {
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
         * @param params The `AlertService.GetAllApartmentBlockUnitAlertByIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitAlertId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByIdStatus",
        value: function getAllApartmentBlockUnitAlertByIdStatus(params) {
          return this.getAllApartmentBlockUnitAlertByIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByApartmentIdResponse",
        value: function getAllApartmentBlockUnitAlertByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitAlertByApartmentId", __body, {
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
        key: "getAllApartmentBlockUnitAlertByApartmentId",
        value: function getAllApartmentBlockUnitAlertByApartmentId(apartmentId) {
          return this.getAllApartmentBlockUnitAlertByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetAllApartmentBlockUnitAlertByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByApartmentIdStatusResponse",
        value: function getAllApartmentBlockUnitAlertByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitAlertByApartmentIdStatus", __body, {
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
         * @param params The `AlertService.GetAllApartmentBlockUnitAlertByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByApartmentIdStatus",
        value: function getAllApartmentBlockUnitAlertByApartmentIdStatus(params) {
          return this.getAllApartmentBlockUnitAlertByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockId undefined
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByApartmentBlockIdResponse",
        value: function getAllApartmentBlockUnitAlertByApartmentBlockIdResponse(apartmentBlockId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentBlockId != null) __params = __params.set('apartmentBlockId', apartmentBlockId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockId", __body, {
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
         * @param apartmentBlockId undefined
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByApartmentBlockId",
        value: function getAllApartmentBlockUnitAlertByApartmentBlockId(apartmentBlockId) {
          return this.getAllApartmentBlockUnitAlertByApartmentBlockIdResponse(apartmentBlockId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetAllApartmentBlockUnitAlertByApartmentBlockIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByApartmentBlockIdStatusResponse",
        value: function getAllApartmentBlockUnitAlertByApartmentBlockIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentBlockId != null) __params = __params.set('apartmentBlockId', params.apartmentBlockId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockIdStatus", __body, {
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
         * @param params The `AlertService.GetAllApartmentBlockUnitAlertByApartmentBlockIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByApartmentBlockIdStatus",
        value: function getAllApartmentBlockUnitAlertByApartmentBlockIdStatus(params) {
          return this.getAllApartmentBlockUnitAlertByApartmentBlockIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitId undefined
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByApartmentBlockUnitIdResponse",
        value: function getAllApartmentBlockUnitAlertByApartmentBlockUnitIdResponse(apartmentBlockUnitId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockUnitId", __body, {
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
         * @param apartmentBlockUnitId undefined
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByApartmentBlockUnitId",
        value: function getAllApartmentBlockUnitAlertByApartmentBlockUnitId(apartmentBlockUnitId) {
          return this.getAllApartmentBlockUnitAlertByApartmentBlockUnitIdResponse(apartmentBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatusResponse",
        value: function getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatus", __body, {
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
         * @param params The `AlertService.GetAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatus",
        value: function getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatus(params) {
          return this.getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitAlert undefined
         */

      }, {
        key: "addApartmentBlockUnitAlertResponse",
        value: function addApartmentBlockUnitAlertResponse(apartmentBlockUnitAlert) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = apartmentBlockUnitAlert;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/addApartmentBlockUnitAlert", __body, {
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
         * @param apartmentBlockUnitAlert undefined
         */

      }, {
        key: "addApartmentBlockUnitAlert",
        value: function addApartmentBlockUnitAlert(apartmentBlockUnitAlert) {
          return this.addApartmentBlockUnitAlertResponse(apartmentBlockUnitAlert).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitAlert undefined
         */

      }, {
        key: "updateApartmentBlockUnitAlertResponse",
        value: function updateApartmentBlockUnitAlertResponse(apartmentBlockUnitAlert) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = apartmentBlockUnitAlert;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/updateApartmentBlockUnitAlert", __body, {
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
         * @param apartmentBlockUnitAlert undefined
         */

      }, {
        key: "updateApartmentBlockUnitAlert",
        value: function updateApartmentBlockUnitAlert(apartmentBlockUnitAlert) {
          return this.updateApartmentBlockUnitAlertResponse(apartmentBlockUnitAlert).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.DeleteApartmentBlockUnitAlertParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `apartmentBlockUnitAlertId`:
         */

      }, {
        key: "deleteApartmentBlockUnitAlertResponse",
        value: function deleteApartmentBlockUnitAlertResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.apartmentBlockUnitAlertId != null) __params = __params.set('apartmentBlockUnitAlertId', params.apartmentBlockUnitAlertId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/deleteApartmentBlockUnitAlert", __body, {
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
         * @param params The `AlertService.DeleteApartmentBlockUnitAlertParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `apartmentBlockUnitAlertId`:
         */

      }, {
        key: "deleteApartmentBlockUnitAlert",
        value: function deleteApartmentBlockUnitAlert(params) {
          return this.deleteApartmentBlockUnitAlertResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllViolationsResponse",
        value: function getAllViolationsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllViolations", __body, {
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
        key: "getAllViolations",
        value: function getAllViolations() {
          return this.getAllViolationsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllViolationsByStatusResponse",
        value: function getAllViolationsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getAllViolationsByStatus", __body, {
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
        key: "getAllViolationsByStatus",
        value: function getAllViolationsByStatus(active) {
          return this.getAllViolationsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getViolationsByApartmentIdStatusResponse",
        value: function getViolationsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getViolationsByApartmentId", __body, {
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
        key: "getViolationsByApartmentIdStatus",
        value: function getViolationsByApartmentIdStatus(apartmentId) {
          return this.getViolationsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetViolationsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getViolationsByApartmentIdStatus_1Response",
        value: function getViolationsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getViolationsByApartmentIdStatus", __body, {
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
         * @param params The `AlertService.GetViolationsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getViolationsByApartmentIdStatus_1",
        value: function getViolationsByApartmentIdStatus_1(params) {
          return this.getViolationsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetViolationByViolationUserCategoryIdParams` containing the following parameters:
         *
         * - `violationUserCategoryId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getViolationByViolationUserCategoryIdResponse",
        value: function getViolationByViolationUserCategoryIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.violationUserCategoryId != null) __params = __params.set('violationUserCategoryId', params.violationUserCategoryId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getViolationByViolationUserCategoryId", __body, {
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
         * @param params The `AlertService.GetViolationByViolationUserCategoryIdParams` containing the following parameters:
         *
         * - `violationUserCategoryId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getViolationByViolationUserCategoryId",
        value: function getViolationByViolationUserCategoryId(params) {
          return this.getViolationByViolationUserCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetViolationsByViolationUserCategoryIdStatusParams` containing the following parameters:
         *
         * - `violationUserCategoryId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getViolationsByViolationUserCategoryIdStatusResponse",
        value: function getViolationsByViolationUserCategoryIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.violationUserCategoryId != null) __params = __params.set('violationUserCategoryId', params.violationUserCategoryId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getViolationsByViolationUserCategoryIdStatus", __body, {
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
         * @param params The `AlertService.GetViolationsByViolationUserCategoryIdStatusParams` containing the following parameters:
         *
         * - `violationUserCategoryId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getViolationsByViolationUserCategoryIdStatus",
        value: function getViolationsByViolationUserCategoryIdStatus(params) {
          return this.getViolationsByViolationUserCategoryIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetViolationsByViolationTypeIdParams` containing the following parameters:
         *
         * - `violationTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getViolationsByViolationTypeIdResponse",
        value: function getViolationsByViolationTypeIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.violationTypeId != null) __params = __params.set('violationTypeId', params.violationTypeId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getViolationsByViolationTypeId", __body, {
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
         * @param params The `AlertService.GetViolationsByViolationTypeIdParams` containing the following parameters:
         *
         * - `violationTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getViolationsByViolationTypeId",
        value: function getViolationsByViolationTypeId(params) {
          return this.getViolationsByViolationTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetViolationsByViolationTypeIdStatusParams` containing the following parameters:
         *
         * - `violationTypeId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getViolationsByViolationTypeIdStatusResponse",
        value: function getViolationsByViolationTypeIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.violationTypeId != null) __params = __params.set('violationTypeId', params.violationTypeId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getViolationsByViolationTypeIdStatus", __body, {
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
         * @param params The `AlertService.GetViolationsByViolationTypeIdStatusParams` containing the following parameters:
         *
         * - `violationTypeId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getViolationsByViolationTypeIdStatus",
        value: function getViolationsByViolationTypeIdStatus(params) {
          return this.getViolationsByViolationTypeIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.GetViolationsByViolationStatusIdParams` containing the following parameters:
         *
         * - `violationStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getViolationsByViolationStatusIdResponse",
        value: function getViolationsByViolationStatusIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.violationStatusId != null) __params = __params.set('violationStatusId', params.violationStatusId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getViolationsByViolationStatusId", __body, {
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
         * @param params The `AlertService.GetViolationsByViolationStatusIdParams` containing the following parameters:
         *
         * - `violationStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getViolationsByViolationStatusId",
        value: function getViolationsByViolationStatusId(params) {
          return this.getViolationsByViolationStatusIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param raisedUserId undefined
         */

      }, {
        key: "getViolationByRaisedUserIdResponse",
        value: function getViolationByRaisedUserIdResponse(raisedUserId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (raisedUserId != null) __params = __params.set('raisedUserId', raisedUserId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getViolationsByRaisedUserId", __body, {
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
         * @param raisedUserId undefined
         */

      }, {
        key: "getViolationByRaisedUserId",
        value: function getViolationByRaisedUserId(raisedUserId) {
          return this.getViolationByRaisedUserIdResponse(raisedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param violationId undefined
         */

      }, {
        key: "getViolationByIdResponse",
        value: function getViolationByIdResponse(violationId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (violationId != null) __params = __params.set('violationId', violationId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Alert/getViolationById", __body, {
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
         * @param violationId undefined
         */

      }, {
        key: "getViolationById",
        value: function getViolationById(violationId) {
          return this.getViolationByIdResponse(violationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param violation undefined
         */

      }, {
        key: "addViolationResponse",
        value: function addViolationResponse(violation) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = violation;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/addViolation", __body, {
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
         * @param violation undefined
         */

      }, {
        key: "addViolation",
        value: function addViolation(violation) {
          return this.addViolationResponse(violation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param violation undefined
         */

      }, {
        key: "updateViolationResponse",
        value: function updateViolationResponse(violation) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = violation;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/updateViolation", __body, {
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
         * @param violation undefined
         */

      }, {
        key: "updateViolation",
        value: function updateViolation(violation) {
          return this.updateViolationResponse(violation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AlertService.DeleteViolationParams` containing the following parameters:
         *
         * - `violationId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteViolationResponse",
        value: function deleteViolationResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.violationId != null) __params = __params.set('violationId', params.violationId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Alert/deleteViolation", __body, {
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
         * @param params The `AlertService.DeleteViolationParams` containing the following parameters:
         *
         * - `violationId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteViolation",
        value: function deleteViolation(params) {
          return this.deleteViolationResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }]);

      return AlertService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

    AlertService.getAllAlertEmergencyNumbersPath = '/api/Alert/getAllAlertEmergencyNumbers';
    AlertService.getAllAlertEmergencyNumbersByStatusPath = '/api/Alert/getAllAlertEmergencyNumbersByStatus';
    AlertService.getAlertEmergencyNumberByAlertEmergencyNumberIdPath = '/api/Alert/getAlertEmergencyNumberByAlertEmergencyNumberId';
    AlertService.addAlertEmergencyNumberPath = '/api/Alert/addAlertEmergencyNumber';
    AlertService.updateAlertEmergencyNumberPath = '/api/Alert/updateAlertEmergencyNumber';
    AlertService.deleteAlertEmergencyNumberPath = '/api/Alert/deleteAlertEmergencyNumber';
    AlertService.getAllApartmentBlockUnitSecurityByIdPath = '/api/Alert/getAllApartmentBlockUnitSecurityById';
    AlertService.getAllApartmentBlockUnitSecurityByIdStatusPath = '/api/Alert/getAllApartmentBlockUnitSecurityByIdStatus';
    AlertService.getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdPath = '/api/Alert/getAllApartmentBlockUnitSecurityByApartmentBlockUnitId';
    AlertService.getHeadSecurityByApartmentBlockUnitIdPath = '/api/Alert/getHeadSecurityByApartmentBlockUnitId';
    AlertService.getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatusPath = '/api/Alert/getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatus';
    AlertService.addApartmentBlockUnitSecurityPath = '/api/Alert/addApartmentBlockUnitSecurity';
    AlertService.updateApartmentBlockUnitSecurityPath = '/api/Alert/updateApartmentBlockUnitSecurity';
    AlertService.deleteApartmentBlockUnitSecurityPath = '/api/Alert/deleteApartmentBlockUnitSecurity';
    AlertService.getAllApartmentBlockUnitAlertByIdPath = '/api/Alert/getAllApartmentBlockUnitAlertById';
    AlertService.getAllApartmentBlockUnitAlertByIdStatusPath = '/api/Alert/getAllApartmentBlockUnitAlertByIdStatus';
    AlertService.getAllApartmentBlockUnitAlertByApartmentIdPath = '/api/Alert/getAllApartmentBlockUnitAlertByApartmentId';
    AlertService.getAllApartmentBlockUnitAlertByApartmentIdStatusPath = '/api/Alert/getAllApartmentBlockUnitAlertByApartmentIdStatus';
    AlertService.getAllApartmentBlockUnitAlertByApartmentBlockIdPath = '/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockId';
    AlertService.getAllApartmentBlockUnitAlertByApartmentBlockIdStatusPath = '/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockIdStatus';
    AlertService.getAllApartmentBlockUnitAlertByApartmentBlockUnitIdPath = '/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockUnitId';
    AlertService.getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatusPath = '/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatus';
    AlertService.addApartmentBlockUnitAlertPath = '/api/Alert/addApartmentBlockUnitAlert';
    AlertService.updateApartmentBlockUnitAlertPath = '/api/Alert/updateApartmentBlockUnitAlert';
    AlertService.deleteApartmentBlockUnitAlertPath = '/api/Alert/deleteApartmentBlockUnitAlert';
    AlertService.getAllViolationsPath = '/api/Alert/getAllViolations';
    AlertService.getAllViolationsByStatusPath = '/api/Alert/getAllViolationsByStatus';
    AlertService.getViolationsByApartmentIdStatusPath = '/api/Alert/getViolationsByApartmentId';
    AlertService.getViolationsByApartmentIdStatus_1Path = '/api/Alert/getViolationsByApartmentIdStatus';
    AlertService.getViolationByViolationUserCategoryIdPath = '/api/Alert/getViolationByViolationUserCategoryId';
    AlertService.getViolationsByViolationUserCategoryIdStatusPath = '/api/Alert/getViolationsByViolationUserCategoryIdStatus';
    AlertService.getViolationsByViolationTypeIdPath = '/api/Alert/getViolationsByViolationTypeId';
    AlertService.getViolationsByViolationTypeIdStatusPath = '/api/Alert/getViolationsByViolationTypeIdStatus';
    AlertService.getViolationsByViolationStatusIdPath = '/api/Alert/getViolationsByViolationStatusId';
    AlertService.getViolationByRaisedUserIdPath = '/api/Alert/getViolationsByRaisedUserId';
    AlertService.getViolationByIdPath = '/api/Alert/getViolationById';
    AlertService.addViolationPath = '/api/Alert/addViolation';
    AlertService.updateViolationPath = '/api/Alert/updateViolation';
    AlertService.deleteViolationPath = '/api/Alert/deleteViolation';

    AlertService.ctorParameters = function () {
      return [{
        type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AlertService);
    /***/
  }
}]);
//# sourceMappingURL=default~alert-security-alert-security-module~security-security-module-es5.js.map