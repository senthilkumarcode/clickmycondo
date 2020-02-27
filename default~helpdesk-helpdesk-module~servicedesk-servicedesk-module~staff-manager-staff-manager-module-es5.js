function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~helpdesk-helpdesk-module~servicedesk-servicedesk-module~staff-manager-staff-manager-module"], {
  /***/
  "./src/app/api/services/staff.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/api/services/staff.service.ts ***!
    \***********************************************/

  /*! exports provided: StaffService */

  /***/
  function srcAppApiServicesStaffServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffService", function () {
      return StaffService;
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


    var StaffService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(StaffService, _base_service__WEBPAC);

      function StaffService(config, http) {
        _classCallCheck(this, StaffService);

        return _possibleConstructorReturn(this, _getPrototypeOf(StaffService).call(this, config, http));
      }

      _createClass(StaffService, [{
        key: "getAllStaffsResponse",
        value: function getAllStaffsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffs", __body, {
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
        key: "getAllStaffs",
        value: function getAllStaffs() {
          return this.getAllStaffsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllStaffsByStatusResponse",
        value: function getAllStaffsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffsByStatus", __body, {
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
        key: "getAllStaffsByStatus",
        value: function getAllStaffsByStatus(active) {
          return this.getAllStaffsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param staffId undefined
         */

      }, {
        key: "getStaffByStaffIdResponse",
        value: function getStaffByStaffIdResponse(staffId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (staffId != null) __params = __params.set('staffId', staffId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getStaffByStaffId", __body, {
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
         * @param staffId undefined
         */

      }, {
        key: "getStaffByStaffId",
        value: function getStaffByStaffId(staffId) {
          return this.getStaffByStaffIdResponse(staffId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllStaffsByApartmentIdResponse",
        value: function getAllStaffsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffsByApartmentId", __body, {
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
        key: "getAllStaffsByApartmentId",
        value: function getAllStaffsByApartmentId(apartmentId) {
          return this.getAllStaffsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllStaffsByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentIdStatusResponse",
        value: function getAllStaffsByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffsByApartmentIdStatus", __body, {
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
         * @param params The `StaffService.GetAllStaffsByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentIdStatus",
        value: function getAllStaffsByApartmentIdStatus(params) {
          return this.getAllStaffsByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitId undefined
         */

      }, {
        key: "getAllStaffsByApartmentBlockUnitIdResponse",
        value: function getAllStaffsByApartmentBlockUnitIdResponse(apartmentBlockUnitId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffsByApartmentBlockUnitId", __body, {
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
        key: "getAllStaffsByApartmentBlockUnitId",
        value: function getAllStaffsByApartmentBlockUnitId(apartmentBlockUnitId) {
          return this.getAllStaffsByApartmentBlockUnitIdResponse(apartmentBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllStaffsByApartmentBlockUnitIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentBlockUnitIdStatusResponse",
        value: function getAllStaffsByApartmentBlockUnitIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffsByApartmentBlockUnitIdStatus", __body, {
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
         * @param params The `StaffService.GetAllStaffsByApartmentBlockUnitIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentBlockUnitIdStatus",
        value: function getAllStaffsByApartmentBlockUnitIdStatus(params) {
          return this.getAllStaffsByApartmentBlockUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllStaffsByApartmentIdCategoryIdParams` containing the following parameters:
         *
         * - `categoryId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getAllStaffsByApartmentIdCategoryIdResponse",
        value: function getAllStaffsByApartmentIdCategoryIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.categoryId != null) __params = __params.set('categoryId', params.categoryId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffsByApartmentIdCategoryId", __body, {
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
         * @param params The `StaffService.GetAllStaffsByApartmentIdCategoryIdParams` containing the following parameters:
         *
         * - `categoryId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getAllStaffsByApartmentIdCategoryId",
        value: function getAllStaffsByApartmentIdCategoryId(params) {
          return this.getAllStaffsByApartmentIdCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllStaffsByApartmentIdCategoryIdStatusParams` containing the following parameters:
         *
         * - `categoryId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentIdCategoryIdStatusResponse",
        value: function getAllStaffsByApartmentIdCategoryIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.categoryId != null) __params = __params.set('categoryId', params.categoryId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffsByApartmentIdCategoryIdStatus", __body, {
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
         * @param params The `StaffService.GetAllStaffsByApartmentIdCategoryIdStatusParams` containing the following parameters:
         *
         * - `categoryId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentIdCategoryIdStatus",
        value: function getAllStaffsByApartmentIdCategoryIdStatus(params) {
          return this.getAllStaffsByApartmentIdCategoryIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllStaffsByApartmentIdSubCategoryIdParams` containing the following parameters:
         *
         * - `subCategoryId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getAllStaffsByApartmentIdSubCategoryIdResponse",
        value: function getAllStaffsByApartmentIdSubCategoryIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.subCategoryId != null) __params = __params.set('subCategoryId', params.subCategoryId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffsByApartmentIdSubCategoryId", __body, {
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
         * @param params The `StaffService.GetAllStaffsByApartmentIdSubCategoryIdParams` containing the following parameters:
         *
         * - `subCategoryId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getAllStaffsByApartmentIdSubCategoryId",
        value: function getAllStaffsByApartmentIdSubCategoryId(params) {
          return this.getAllStaffsByApartmentIdSubCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllStaffsByApartmentIdSubCategoryIdStatusParams` containing the following parameters:
         *
         * - `subCategoryId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentIdSubCategoryIdStatusResponse",
        value: function getAllStaffsByApartmentIdSubCategoryIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.subCategoryId != null) __params = __params.set('subCategoryId', params.subCategoryId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffsByApartmentIdSubCategoryIdStatus", __body, {
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
         * @param params The `StaffService.GetAllStaffsByApartmentIdSubCategoryIdStatusParams` containing the following parameters:
         *
         * - `subCategoryId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentIdSubCategoryIdStatus",
        value: function getAllStaffsByApartmentIdSubCategoryIdStatus(params) {
          return this.getAllStaffsByApartmentIdSubCategoryIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllStaffsByApartmentIdCategoryIdSubCategoryIdParams` containing the following parameters:
         *
         * - `subCategoryId`:
         *
         * - `categoryId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentIdCategoryIdSubCategoryIdResponse",
        value: function getAllStaffsByApartmentIdCategoryIdSubCategoryIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.subCategoryId != null) __params = __params.set('subCategoryId', params.subCategoryId.toString());
          if (params.categoryId != null) __params = __params.set('categoryId', params.categoryId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffsByApartmentIdCategoryIdSubCategoryId", __body, {
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
         * @param params The `StaffService.GetAllStaffsByApartmentIdCategoryIdSubCategoryIdParams` containing the following parameters:
         *
         * - `subCategoryId`:
         *
         * - `categoryId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentIdCategoryIdSubCategoryId",
        value: function getAllStaffsByApartmentIdCategoryIdSubCategoryId(params) {
          return this.getAllStaffsByApartmentIdCategoryIdSubCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllStaffsByApartmentIdCategoryIdSubCategoryIdStatusParams` containing the following parameters:
         *
         * - `subCategoryId`:
         *
         * - `categoryId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatusResponse",
        value: function getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.subCategoryId != null) __params = __params.set('subCategoryId', params.subCategoryId.toString());
          if (params.categoryId != null) __params = __params.set('categoryId', params.categoryId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatus", __body, {
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
         * @param params The `StaffService.GetAllStaffsByApartmentIdCategoryIdSubCategoryIdStatusParams` containing the following parameters:
         *
         * - `subCategoryId`:
         *
         * - `categoryId`:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatus",
        value: function getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatus(params) {
          return this.getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param staff undefined
         */

      }, {
        key: "addStaffResponse",
        value: function addStaffResponse(staff) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = staff;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/addStaff", __body, {
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
         * @param staff undefined
         */

      }, {
        key: "addStaff",
        value: function addStaff(staff) {
          return this.addStaffResponse(staff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param staff undefined
         */

      }, {
        key: "updateStaffResponse",
        value: function updateStaffResponse(staff) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = staff;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/updateStaff", __body, {
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
         * @param staff undefined
         */

      }, {
        key: "updateStaff",
        value: function updateStaff(staff) {
          return this.updateStaffResponse(staff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.DeleteStaffParams` containing the following parameters:
         *
         * - `staffId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteStaffResponse",
        value: function deleteStaffResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.staffId != null) __params = __params.set('staffId', params.staffId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/deleteStaff", __body, {
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
         * @param params The `StaffService.DeleteStaffParams` containing the following parameters:
         *
         * - `staffId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteStaff",
        value: function deleteStaff(params) {
          return this.deleteStaffResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.AddStaffPhotoParams` containing the following parameters:
         *
         * - `staffId`:
         *
         * - `file`:
         *
         * - `description`:
         *
         * - `addBy`:
         */

      }, {
        key: "addStaffPhotoResponse",
        value: function addStaffPhotoResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;

          var __formData = new FormData();

          __body = __formData;
          if (params.staffId != null) __params = __params.set('staffId', params.staffId.toString());

          if (params.file != null) {
            __formData.append('file', params.file);
          }

          if (params.description != null) __params = __params.set('description', params.description.toString());
          if (params.addBy != null) __params = __params.set('addBy', params.addBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/addStaffPhoto", __body, {
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
         * @param params The `StaffService.AddStaffPhotoParams` containing the following parameters:
         *
         * - `staffId`:
         *
         * - `file`:
         *
         * - `description`:
         *
         * - `addBy`:
         */

      }, {
        key: "addStaffPhoto",
        value: function addStaffPhoto(params) {
          return this.addStaffPhotoResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitStaff undefined
         */

      }, {
        key: "addApartmentBlockUnitStaffResponse",
        value: function addApartmentBlockUnitStaffResponse(apartmentBlockUnitStaff) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = apartmentBlockUnitStaff;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/addApartmentBlockUnitStaff", __body, {
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
         * @param apartmentBlockUnitStaff undefined
         */

      }, {
        key: "addApartmentBlockUnitStaff",
        value: function addApartmentBlockUnitStaff(apartmentBlockUnitStaff) {
          return this.addApartmentBlockUnitStaffResponse(apartmentBlockUnitStaff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitStaff undefined
         */

      }, {
        key: "updateApartmentBlockUnitStaffResponse",
        value: function updateApartmentBlockUnitStaffResponse(apartmentBlockUnitStaff) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = apartmentBlockUnitStaff;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/updateApartmentBlockUnitStaff", __body, {
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
         * @param apartmentBlockUnitStaff undefined
         */

      }, {
        key: "updateApartmentBlockUnitStaff",
        value: function updateApartmentBlockUnitStaff(apartmentBlockUnitStaff) {
          return this.updateApartmentBlockUnitStaffResponse(apartmentBlockUnitStaff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.DeleteApartmentBlockUnitStaffParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `apartmentBlockUnitStaffId`:
         */

      }, {
        key: "deleteApartmentBlockUnitStaffResponse",
        value: function deleteApartmentBlockUnitStaffResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.apartmentBlockUnitStaffId != null) __params = __params.set('apartmentBlockUnitStaffId', params.apartmentBlockUnitStaffId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/deleteApartmentBlockUnitStaff", __body, {
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
         * @param params The `StaffService.DeleteApartmentBlockUnitStaffParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `apartmentBlockUnitStaffId`:
         */

      }, {
        key: "deleteApartmentBlockUnitStaff",
        value: function deleteApartmentBlockUnitStaff(params) {
          return this.deleteApartmentBlockUnitStaffResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllGatesResponse",
        value: function getAllGatesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllGates", __body, {
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
        key: "getAllGates",
        value: function getAllGates() {
          return this.getAllGatesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllGatesByStatusResponse",
        value: function getAllGatesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllGatesByStatus", __body, {
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
        key: "getAllGatesByStatus",
        value: function getAllGatesByStatus(active) {
          return this.getAllGatesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param gateId undefined
         */

      }, {
        key: "getGateByGateIdResponse",
        value: function getGateByGateIdResponse(gateId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (gateId != null) __params = __params.set('gateId', gateId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getGateByGateId", __body, {
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
         * @param gateId undefined
         */

      }, {
        key: "getGateByGateId",
        value: function getGateByGateId(gateId) {
          return this.getGateByGateIdResponse(gateId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllGatesByApartmentIdResponse",
        value: function getAllGatesByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllGatesByApartmentId", __body, {
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
        key: "getAllGatesByApartmentId",
        value: function getAllGatesByApartmentId(apartmentId) {
          return this.getAllGatesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllGatesByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllGatesByApartmentId_1Response",
        value: function getAllGatesByApartmentId_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllGatesByApartmentIdStatus", __body, {
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
         * @param params The `StaffService.GetAllGatesByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllGatesByApartmentId_1",
        value: function getAllGatesByApartmentId_1(params) {
          return this.getAllGatesByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param gate undefined
         */

      }, {
        key: "addGateResponse",
        value: function addGateResponse(gate) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = gate;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/addGate", __body, {
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
         * @param gate undefined
         */

      }, {
        key: "addGate",
        value: function addGate(gate) {
          return this.addGateResponse(gate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param gate undefined
         */

      }, {
        key: "updateGateResponse",
        value: function updateGateResponse(gate) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = gate;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/updateGate", __body, {
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
         * @param gate undefined
         */

      }, {
        key: "updateGate",
        value: function updateGate(gate) {
          return this.updateGateResponse(gate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.DeleteGateParams` containing the following parameters:
         *
         * - `gateId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGateResponse",
        value: function deleteGateResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.gateId != null) __params = __params.set('gateId', params.gateId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/deleteGate", __body, {
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
         * @param params The `StaffService.DeleteGateParams` containing the following parameters:
         *
         * - `gateId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGate",
        value: function deleteGate(params) {
          return this.deleteGateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param gateSecurity undefined
         */

      }, {
        key: "addGateSecurityResponse",
        value: function addGateSecurityResponse(gateSecurity) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = gateSecurity;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/addGateSecurity", __body, {
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
         * @param gateSecurity undefined
         */

      }, {
        key: "addGateSecurity",
        value: function addGateSecurity(gateSecurity) {
          return this.addGateSecurityResponse(gateSecurity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param gateSecurity undefined
         */

      }, {
        key: "updateGateSecurityResponse",
        value: function updateGateSecurityResponse(gateSecurity) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = gateSecurity;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/updateGateSecurity", __body, {
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
         * @param gateSecurity undefined
         */

      }, {
        key: "updateGateSecurity",
        value: function updateGateSecurity(gateSecurity) {
          return this.updateGateSecurityResponse(gateSecurity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.DeleteGateSecurityParams` containing the following parameters:
         *
         * - `gateSecurityId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGateSecurityResponse",
        value: function deleteGateSecurityResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.gateSecurityId != null) __params = __params.set('gateSecurityId', params.gateSecurityId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/deleteGateSecurity", __body, {
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
         * @param params The `StaffService.DeleteGateSecurityParams` containing the following parameters:
         *
         * - `gateSecurityId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGateSecurity",
        value: function deleteGateSecurity(params) {
          return this.deleteGateSecurityResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllShiftsResponse",
        value: function getAllShiftsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllShifts", __body, {
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
        key: "getAllShifts",
        value: function getAllShifts() {
          return this.getAllShiftsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllShiftsByStatusResponse",
        value: function getAllShiftsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllShiftsByStatus", __body, {
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
        key: "getAllShiftsByStatus",
        value: function getAllShiftsByStatus(active) {
          return this.getAllShiftsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param shiftId undefined
         */

      }, {
        key: "getShiftByShiftIdResponse",
        value: function getShiftByShiftIdResponse(shiftId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (shiftId != null) __params = __params.set('shiftId', shiftId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getShiftByShiftId", __body, {
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
         * @param shiftId undefined
         */

      }, {
        key: "getShiftByShiftId",
        value: function getShiftByShiftId(shiftId) {
          return this.getShiftByShiftIdResponse(shiftId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllShiftsByApartmentIdResponse",
        value: function getAllShiftsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllShiftsByApartmentId", __body, {
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
        key: "getAllShiftsByApartmentId",
        value: function getAllShiftsByApartmentId(apartmentId) {
          return this.getAllShiftsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllShiftsByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllShiftsByApartmentId_1Response",
        value: function getAllShiftsByApartmentId_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllShiftsByApartmentIdStatus", __body, {
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
         * @param params The `StaffService.GetAllShiftsByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllShiftsByApartmentId_1",
        value: function getAllShiftsByApartmentId_1(params) {
          return this.getAllShiftsByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param shift undefined
         */

      }, {
        key: "addShiftResponse",
        value: function addShiftResponse(shift) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = shift;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/addShift", __body, {
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
         * @param shift undefined
         */

      }, {
        key: "addShift",
        value: function addShift(shift) {
          return this.addShiftResponse(shift).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param shift undefined
         */

      }, {
        key: "updateShiftResponse",
        value: function updateShiftResponse(shift) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = shift;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/updateShift", __body, {
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
         * @param shift undefined
         */

      }, {
        key: "updateShift",
        value: function updateShift(shift) {
          return this.updateShiftResponse(shift).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.DeleteShiftParams` containing the following parameters:
         *
         * - `shiftId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteShiftResponse",
        value: function deleteShiftResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.shiftId != null) __params = __params.set('shiftId', params.shiftId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/deleteShift", __body, {
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
         * @param params The `StaffService.DeleteShiftParams` containing the following parameters:
         *
         * - `shiftId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteShift",
        value: function deleteShift(params) {
          return this.deleteShiftResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllAttendancesResponse",
        value: function getAllAttendancesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllAttendances", __body, {
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
        key: "getAllAttendances",
        value: function getAllAttendances() {
          return this.getAllAttendancesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllAttendancesByStatusResponse",
        value: function getAllAttendancesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllAttendancesByStatus", __body, {
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
        key: "getAllAttendancesByStatus",
        value: function getAllAttendancesByStatus(active) {
          return this.getAllAttendancesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param attendanceId undefined
         */

      }, {
        key: "getAttendanceByAttendanceIdResponse",
        value: function getAttendanceByAttendanceIdResponse(attendanceId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (attendanceId != null) __params = __params.set('attendanceId', attendanceId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAttendanceByAttendanceId", __body, {
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
         * @param attendanceId undefined
         */

      }, {
        key: "getAttendanceByAttendanceId",
        value: function getAttendanceByAttendanceId(attendanceId) {
          return this.getAttendanceByAttendanceIdResponse(attendanceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllAttendancesByApartmentIdResponse",
        value: function getAllAttendancesByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllAttendancesByApartmentId", __body, {
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
        key: "getAllAttendancesByApartmentId",
        value: function getAllAttendancesByApartmentId(apartmentId) {
          return this.getAllAttendancesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllAttendancesByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllAttendancesByApartmentId_1Response",
        value: function getAllAttendancesByApartmentId_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllAttendancesByApartmentIdStatus", __body, {
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
         * @param params The `StaffService.GetAllAttendancesByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllAttendancesByApartmentId_1",
        value: function getAllAttendancesByApartmentId_1(params) {
          return this.getAllAttendancesByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllAttendancesByAparmentIdDatesParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getAllAttendancesByAparmentIdDatesResponse",
        value: function getAllAttendancesByAparmentIdDatesResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllAttendancesByAparmentIdDates", __body, {
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
         * @param params The `StaffService.GetAllAttendancesByAparmentIdDatesParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getAllAttendancesByAparmentIdDates",
        value: function getAllAttendancesByAparmentIdDates(params) {
          return this.getAllAttendancesByAparmentIdDatesResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllAttendancesByDatesParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         */

      }, {
        key: "getAllAttendancesByDatesResponse",
        value: function getAllAttendancesByDatesResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllAttendancesByDates", __body, {
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
         * @param params The `StaffService.GetAllAttendancesByDatesParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         */

      }, {
        key: "getAllAttendancesByDates",
        value: function getAllAttendancesByDates(params) {
          return this.getAllAttendancesByDatesResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param attendance undefined
         */

      }, {
        key: "addAttendanceResponse",
        value: function addAttendanceResponse(attendance) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = attendance;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/addAttendance", __body, {
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
         * @param attendance undefined
         */

      }, {
        key: "addAttendance",
        value: function addAttendance(attendance) {
          return this.addAttendanceResponse(attendance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param attendance undefined
         */

      }, {
        key: "updateAttendanceResponse",
        value: function updateAttendanceResponse(attendance) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = attendance;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/updateAttendance", __body, {
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
         * @param attendance undefined
         */

      }, {
        key: "updateAttendance",
        value: function updateAttendance(attendance) {
          return this.updateAttendanceResponse(attendance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.DeleteAttendanceParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `attendanceId`:
         */

      }, {
        key: "deleteAttendanceResponse",
        value: function deleteAttendanceResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.attendanceId != null) __params = __params.set('attendanceId', params.attendanceId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/deleteAttendance", __body, {
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
         * @param params The `StaffService.DeleteAttendanceParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `attendanceId`:
         */

      }, {
        key: "deleteAttendance",
        value: function deleteAttendance(params) {
          return this.deleteAttendanceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllOverTimesResponse",
        value: function getAllOverTimesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllOverTimes", __body, {
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
        key: "getAllOverTimes",
        value: function getAllOverTimes() {
          return this.getAllOverTimesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllOverTimesByStatusResponse",
        value: function getAllOverTimesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllOverTimesByStatus", __body, {
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
        key: "getAllOverTimesByStatus",
        value: function getAllOverTimesByStatus(active) {
          return this.getAllOverTimesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param overTimeId undefined
         */

      }, {
        key: "getOverTimeByOverTimeIdResponse",
        value: function getOverTimeByOverTimeIdResponse(overTimeId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (overTimeId != null) __params = __params.set('overTimeId', overTimeId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getOverTimeByOverTimeId", __body, {
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
         * @param overTimeId undefined
         */

      }, {
        key: "getOverTimeByOverTimeId",
        value: function getOverTimeByOverTimeId(overTimeId) {
          return this.getOverTimeByOverTimeIdResponse(overTimeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllOverTimesByApartmentIdResponse",
        value: function getAllOverTimesByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllOverTimesByApartmentId", __body, {
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
        key: "getAllOverTimesByApartmentId",
        value: function getAllOverTimesByApartmentId(apartmentId) {
          return this.getAllOverTimesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllOverTimesByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllOverTimesByApartmentId_1Response",
        value: function getAllOverTimesByApartmentId_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllOverTimesByApartmentIdStatus", __body, {
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
         * @param params The `StaffService.GetAllOverTimesByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllOverTimesByApartmentId_1",
        value: function getAllOverTimesByApartmentId_1(params) {
          return this.getAllOverTimesByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param overTime undefined
         */

      }, {
        key: "addOverTimeResponse",
        value: function addOverTimeResponse(overTime) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = overTime;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/addOverTime", __body, {
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
         * @param overTime undefined
         */

      }, {
        key: "addOverTime",
        value: function addOverTime(overTime) {
          return this.addOverTimeResponse(overTime).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param overTime undefined
         */

      }, {
        key: "updateOverTimeResponse",
        value: function updateOverTimeResponse(overTime) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = overTime;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/updateOverTime", __body, {
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
         * @param overTime undefined
         */

      }, {
        key: "updateOverTime",
        value: function updateOverTime(overTime) {
          return this.updateOverTimeResponse(overTime).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.DeleteOverTimeParams` containing the following parameters:
         *
         * - `overTimeId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteOverTimeResponse",
        value: function deleteOverTimeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.overTimeId != null) __params = __params.set('overTimeId', params.overTimeId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/deleteOverTime", __body, {
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
         * @param params The `StaffService.DeleteOverTimeParams` containing the following parameters:
         *
         * - `overTimeId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteOverTime",
        value: function deleteOverTime(params) {
          return this.deleteOverTimeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllStaffLeavesResponse",
        value: function getAllStaffLeavesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffLeaves", __body, {
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
        key: "getAllStaffLeaves",
        value: function getAllStaffLeaves() {
          return this.getAllStaffLeavesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllStaffLeavesByStatusResponse",
        value: function getAllStaffLeavesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffLeavesByStatus", __body, {
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
        key: "getAllStaffLeavesByStatus",
        value: function getAllStaffLeavesByStatus(active) {
          return this.getAllStaffLeavesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param staffLeaveId undefined
         */

      }, {
        key: "getStaffLeaveByStaffLeaveIdResponse",
        value: function getStaffLeaveByStaffLeaveIdResponse(staffLeaveId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (staffLeaveId != null) __params = __params.set('staffLeaveId', staffLeaveId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getStaffLeaveByStaffLeaveId", __body, {
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
         * @param staffLeaveId undefined
         */

      }, {
        key: "getStaffLeaveByStaffLeaveId",
        value: function getStaffLeaveByStaffLeaveId(staffLeaveId) {
          return this.getStaffLeaveByStaffLeaveIdResponse(staffLeaveId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllStaffLeavesByApartmentIdResponse",
        value: function getAllStaffLeavesByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffLeavesByApartmentId", __body, {
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
        key: "getAllStaffLeavesByApartmentId",
        value: function getAllStaffLeavesByApartmentId(apartmentId) {
          return this.getAllStaffLeavesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllStaffLeavesByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffLeavesByApartmentId_1Response",
        value: function getAllStaffLeavesByApartmentId_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllStaffLeavesByApartmentIdStatus", __body, {
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
         * @param params The `StaffService.GetAllStaffLeavesByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllStaffLeavesByApartmentId_1",
        value: function getAllStaffLeavesByApartmentId_1(params) {
          return this.getAllStaffLeavesByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param staffLeave undefined
         */

      }, {
        key: "addStaffLeaveResponse",
        value: function addStaffLeaveResponse(staffLeave) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = staffLeave;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/addStaffLeave", __body, {
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
         * @param staffLeave undefined
         */

      }, {
        key: "addStaffLeave",
        value: function addStaffLeave(staffLeave) {
          return this.addStaffLeaveResponse(staffLeave).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param staffLeave undefined
         */

      }, {
        key: "updateStaffLeaveResponse",
        value: function updateStaffLeaveResponse(staffLeave) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = staffLeave;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/updateStaffLeave", __body, {
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
         * @param staffLeave undefined
         */

      }, {
        key: "updateStaffLeave",
        value: function updateStaffLeave(staffLeave) {
          return this.updateStaffLeaveResponse(staffLeave).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.DeleteStaffLeaveParams` containing the following parameters:
         *
         * - `staffLeaveId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteStaffLeaveResponse",
        value: function deleteStaffLeaveResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.staffLeaveId != null) __params = __params.set('staffLeaveId', params.staffLeaveId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/deleteStaffLeave", __body, {
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
         * @param params The `StaffService.DeleteStaffLeaveParams` containing the following parameters:
         *
         * - `staffLeaveId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteStaffLeave",
        value: function deleteStaffLeave(params) {
          return this.deleteStaffLeaveResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllPayRollsResponse",
        value: function getAllPayRollsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllPayRolls", __body, {
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
        key: "getAllPayRolls",
        value: function getAllPayRolls() {
          return this.getAllPayRollsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllPayRollsByStatusResponse",
        value: function getAllPayRollsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllPayRollsByStatus", __body, {
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
        key: "getAllPayRollsByStatus",
        value: function getAllPayRollsByStatus(active) {
          return this.getAllPayRollsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param payRollId undefined
         */

      }, {
        key: "getPayRollByPayRollIdResponse",
        value: function getPayRollByPayRollIdResponse(payRollId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (payRollId != null) __params = __params.set('payRollId', payRollId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getPayRollByPayRollId", __body, {
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
         * @param payRollId undefined
         */

      }, {
        key: "getPayRollByPayRollId",
        value: function getPayRollByPayRollId(payRollId) {
          return this.getPayRollByPayRollIdResponse(payRollId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllPayRollsByApartmentIdResponse",
        value: function getAllPayRollsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllPayRollsByApartmentId", __body, {
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
        key: "getAllPayRollsByApartmentId",
        value: function getAllPayRollsByApartmentId(apartmentId) {
          return this.getAllPayRollsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.GetAllPayRollsByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllPayRollsByApartmentId_1Response",
        value: function getAllPayRollsByApartmentId_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/getAllPayRollsByApartmentIdStatus", __body, {
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
         * @param params The `StaffService.GetAllPayRollsByApartmentId_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllPayRollsByApartmentId_1",
        value: function getAllPayRollsByApartmentId_1(params) {
          return this.getAllPayRollsByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param payRoll undefined
         */

      }, {
        key: "addPayRollResponse",
        value: function addPayRollResponse(payRoll) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = payRoll;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/addPayRoll", __body, {
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
         * @param payRoll undefined
         */

      }, {
        key: "addPayRoll",
        value: function addPayRoll(payRoll) {
          return this.addPayRollResponse(payRoll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param payRoll undefined
         */

      }, {
        key: "updatePayRollResponse",
        value: function updatePayRollResponse(payRoll) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = payRoll;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/updatePayRoll", __body, {
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
         * @param payRoll undefined
         */

      }, {
        key: "updatePayRoll",
        value: function updatePayRoll(payRoll) {
          return this.updatePayRollResponse(payRoll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.DeletePayRollParams` containing the following parameters:
         *
         * - `payRollId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deletePayRollResponse",
        value: function deletePayRollResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.payRollId != null) __params = __params.set('payRollId', params.payRollId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Staff/deletePayRoll", __body, {
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
         * @param params The `StaffService.DeletePayRollParams` containing the following parameters:
         *
         * - `payRollId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deletePayRoll",
        value: function deletePayRoll(params) {
          return this.deletePayRollResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `StaffService.CalculatePayRollParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `includeDeduction`:
         *
         * - `includeAllowance`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "CalculatePayRollResponse",
        value: function CalculatePayRollResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.includeDeduction != null) __params = __params.set('includeDeduction', params.includeDeduction.toString());
          if (params.includeAllowance != null) __params = __params.set('includeAllowance', params.includeAllowance.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Staff/CalculatePayRoll", __body, {
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
         * @param params The `StaffService.CalculatePayRollParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `includeDeduction`:
         *
         * - `includeAllowance`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "CalculatePayRoll",
        value: function CalculatePayRoll(params) {
          return this.CalculatePayRollResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }]);

      return StaffService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

    StaffService.getAllStaffsPath = '/api/Staff/getAllStaffs';
    StaffService.getAllStaffsByStatusPath = '/api/Staff/getAllStaffsByStatus';
    StaffService.getStaffByStaffIdPath = '/api/Staff/getStaffByStaffId';
    StaffService.getAllStaffsByApartmentIdPath = '/api/Staff/getAllStaffsByApartmentId';
    StaffService.getAllStaffsByApartmentIdStatusPath = '/api/Staff/getAllStaffsByApartmentIdStatus';
    StaffService.getAllStaffsByApartmentBlockUnitIdPath = '/api/Staff/getAllStaffsByApartmentBlockUnitId';
    StaffService.getAllStaffsByApartmentBlockUnitIdStatusPath = '/api/Staff/getAllStaffsByApartmentBlockUnitIdStatus';
    StaffService.getAllStaffsByApartmentIdCategoryIdPath = '/api/Staff/getAllStaffsByApartmentIdCategoryId';
    StaffService.getAllStaffsByApartmentIdCategoryIdStatusPath = '/api/Staff/getAllStaffsByApartmentIdCategoryIdStatus';
    StaffService.getAllStaffsByApartmentIdSubCategoryIdPath = '/api/Staff/getAllStaffsByApartmentIdSubCategoryId';
    StaffService.getAllStaffsByApartmentIdSubCategoryIdStatusPath = '/api/Staff/getAllStaffsByApartmentIdSubCategoryIdStatus';
    StaffService.getAllStaffsByApartmentIdCategoryIdSubCategoryIdPath = '/api/Staff/getAllStaffsByApartmentIdCategoryIdSubCategoryId';
    StaffService.getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatusPath = '/api/Staff/getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatus';
    StaffService.addStaffPath = '/api/Staff/addStaff';
    StaffService.updateStaffPath = '/api/Staff/updateStaff';
    StaffService.deleteStaffPath = '/api/Staff/deleteStaff';
    StaffService.addStaffPhotoPath = '/api/Staff/addStaffPhoto';
    StaffService.addApartmentBlockUnitStaffPath = '/api/Staff/addApartmentBlockUnitStaff';
    StaffService.updateApartmentBlockUnitStaffPath = '/api/Staff/updateApartmentBlockUnitStaff';
    StaffService.deleteApartmentBlockUnitStaffPath = '/api/Staff/deleteApartmentBlockUnitStaff';
    StaffService.getAllGatesPath = '/api/Staff/getAllGates';
    StaffService.getAllGatesByStatusPath = '/api/Staff/getAllGatesByStatus';
    StaffService.getGateByGateIdPath = '/api/Staff/getGateByGateId';
    StaffService.getAllGatesByApartmentIdPath = '/api/Staff/getAllGatesByApartmentId';
    StaffService.getAllGatesByApartmentId_1Path = '/api/Staff/getAllGatesByApartmentIdStatus';
    StaffService.addGatePath = '/api/Staff/addGate';
    StaffService.updateGatePath = '/api/Staff/updateGate';
    StaffService.deleteGatePath = '/api/Staff/deleteGate';
    StaffService.addGateSecurityPath = '/api/Staff/addGateSecurity';
    StaffService.updateGateSecurityPath = '/api/Staff/updateGateSecurity';
    StaffService.deleteGateSecurityPath = '/api/Staff/deleteGateSecurity';
    StaffService.getAllShiftsPath = '/api/Staff/getAllShifts';
    StaffService.getAllShiftsByStatusPath = '/api/Staff/getAllShiftsByStatus';
    StaffService.getShiftByShiftIdPath = '/api/Staff/getShiftByShiftId';
    StaffService.getAllShiftsByApartmentIdPath = '/api/Staff/getAllShiftsByApartmentId';
    StaffService.getAllShiftsByApartmentId_1Path = '/api/Staff/getAllShiftsByApartmentIdStatus';
    StaffService.addShiftPath = '/api/Staff/addShift';
    StaffService.updateShiftPath = '/api/Staff/updateShift';
    StaffService.deleteShiftPath = '/api/Staff/deleteShift';
    StaffService.getAllAttendancesPath = '/api/Staff/getAllAttendances';
    StaffService.getAllAttendancesByStatusPath = '/api/Staff/getAllAttendancesByStatus';
    StaffService.getAttendanceByAttendanceIdPath = '/api/Staff/getAttendanceByAttendanceId';
    StaffService.getAllAttendancesByApartmentIdPath = '/api/Staff/getAllAttendancesByApartmentId';
    StaffService.getAllAttendancesByApartmentId_1Path = '/api/Staff/getAllAttendancesByApartmentIdStatus';
    StaffService.getAllAttendancesByAparmentIdDatesPath = '/api/Staff/getAllAttendancesByAparmentIdDates';
    StaffService.getAllAttendancesByDatesPath = '/api/Staff/getAllAttendancesByDates';
    StaffService.addAttendancePath = '/api/Staff/addAttendance';
    StaffService.updateAttendancePath = '/api/Staff/updateAttendance';
    StaffService.deleteAttendancePath = '/api/Staff/deleteAttendance';
    StaffService.getAllOverTimesPath = '/api/Staff/getAllOverTimes';
    StaffService.getAllOverTimesByStatusPath = '/api/Staff/getAllOverTimesByStatus';
    StaffService.getOverTimeByOverTimeIdPath = '/api/Staff/getOverTimeByOverTimeId';
    StaffService.getAllOverTimesByApartmentIdPath = '/api/Staff/getAllOverTimesByApartmentId';
    StaffService.getAllOverTimesByApartmentId_1Path = '/api/Staff/getAllOverTimesByApartmentIdStatus';
    StaffService.addOverTimePath = '/api/Staff/addOverTime';
    StaffService.updateOverTimePath = '/api/Staff/updateOverTime';
    StaffService.deleteOverTimePath = '/api/Staff/deleteOverTime';
    StaffService.getAllStaffLeavesPath = '/api/Staff/getAllStaffLeaves';
    StaffService.getAllStaffLeavesByStatusPath = '/api/Staff/getAllStaffLeavesByStatus';
    StaffService.getStaffLeaveByStaffLeaveIdPath = '/api/Staff/getStaffLeaveByStaffLeaveId';
    StaffService.getAllStaffLeavesByApartmentIdPath = '/api/Staff/getAllStaffLeavesByApartmentId';
    StaffService.getAllStaffLeavesByApartmentId_1Path = '/api/Staff/getAllStaffLeavesByApartmentIdStatus';
    StaffService.addStaffLeavePath = '/api/Staff/addStaffLeave';
    StaffService.updateStaffLeavePath = '/api/Staff/updateStaffLeave';
    StaffService.deleteStaffLeavePath = '/api/Staff/deleteStaffLeave';
    StaffService.getAllPayRollsPath = '/api/Staff/getAllPayRolls';
    StaffService.getAllPayRollsByStatusPath = '/api/Staff/getAllPayRollsByStatus';
    StaffService.getPayRollByPayRollIdPath = '/api/Staff/getPayRollByPayRollId';
    StaffService.getAllPayRollsByApartmentIdPath = '/api/Staff/getAllPayRollsByApartmentId';
    StaffService.getAllPayRollsByApartmentId_1Path = '/api/Staff/getAllPayRollsByApartmentIdStatus';
    StaffService.addPayRollPath = '/api/Staff/addPayRoll';
    StaffService.updatePayRollPath = '/api/Staff/updatePayRoll';
    StaffService.deletePayRollPath = '/api/Staff/deletePayRoll';
    StaffService.CalculatePayRollPath = '/api/Staff/CalculatePayRoll';

    StaffService.ctorParameters = function () {
      return [{
        type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StaffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], StaffService);
    /***/
  }
}]);
//# sourceMappingURL=default~helpdesk-helpdesk-module~servicedesk-servicedesk-module~staff-manager-staff-manager-module-es5.js.map