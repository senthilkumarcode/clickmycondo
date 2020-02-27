function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~parking-management-parking-management-module~unit-users-unit-users-module"], {
  /***/
  "./src/app/api/services/vehicle.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/api/services/vehicle.service.ts ***!
    \*************************************************/

  /*! exports provided: VehicleService */

  /***/
  function srcAppApiServicesVehicleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleService", function () {
      return VehicleService;
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


    var VehicleService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(VehicleService, _base_service__WEBPAC);

      function VehicleService(config, http) {
        _classCallCheck(this, VehicleService);

        return _possibleConstructorReturn(this, _getPrototypeOf(VehicleService).call(this, config, http));
      }

      _createClass(VehicleService, [{
        key: "getAllVehiclesResponse",
        value: function getAllVehiclesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getAllVehicles", __body, {
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
        key: "getAllVehicles",
        value: function getAllVehicles() {
          return this.getAllVehiclesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVehiclesByStatusResponse",
        value: function getAllVehiclesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getAllVehiclesByStatus", __body, {
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
        key: "getAllVehiclesByStatus",
        value: function getAllVehiclesByStatus(active) {
          return this.getAllVehiclesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vehicleId undefined
         */

      }, {
        key: "getVehicleByVehicleIdResponse",
        value: function getVehicleByVehicleIdResponse(vehicleId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (vehicleId != null) __params = __params.set('vehicleId', vehicleId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getVehicleByVehicleId", __body, {
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
         * @param vehicleId undefined
         */

      }, {
        key: "getVehicleByVehicleId",
        value: function getVehicleByVehicleId(vehicleId) {
          return this.getVehicleByVehicleIdResponse(vehicleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitId undefined
         */

      }, {
        key: "getAllVehiclesByApartmentBlockUnitIdResponse",
        value: function getAllVehiclesByApartmentBlockUnitIdResponse(apartmentBlockUnitId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getAllVehiclesByApartmentBlockUnitId", __body, {
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
        key: "getAllVehiclesByApartmentBlockUnitId",
        value: function getAllVehiclesByApartmentBlockUnitId(apartmentBlockUnitId) {
          return this.getAllVehiclesByApartmentBlockUnitIdResponse(apartmentBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VehicleService.GetAllVehiclesByApartmentBlockUnitIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllVehiclesByApartmentBlockUnitIdStatusResponse",
        value: function getAllVehiclesByApartmentBlockUnitIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getAllVehiclesByApartmentBlockUnitIdStatus", __body, {
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
         * @param params The `VehicleService.GetAllVehiclesByApartmentBlockUnitIdStatusParams` containing the following parameters:
         *
         * - `apartmentBlockUnitId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllVehiclesByApartmentBlockUnitIdStatus",
        value: function getAllVehiclesByApartmentBlockUnitIdStatus(params) {
          return this.getAllVehiclesByApartmentBlockUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vehicle undefined
         */

      }, {
        key: "addVehicleResponse",
        value: function addVehicleResponse(vehicle) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vehicle;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Vehicle/addVehicle", __body, {
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
         * @param vehicle undefined
         */

      }, {
        key: "addVehicle",
        value: function addVehicle(vehicle) {
          return this.addVehicleResponse(vehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vehicle undefined
         */

      }, {
        key: "updateVehicleResponse",
        value: function updateVehicleResponse(vehicle) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vehicle;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Vehicle/updateVehicle", __body, {
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
         * @param vehicle undefined
         */

      }, {
        key: "updateVehicle",
        value: function updateVehicle(vehicle) {
          return this.updateVehicleResponse(vehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VehicleService.DeleteVehicleParams` containing the following parameters:
         *
         * - `vehicleId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVehicleResponse",
        value: function deleteVehicleResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vehicleId != null) __params = __params.set('vehicleId', params.vehicleId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Vehicle/deleteVehicle", __body, {
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
         * @param params The `VehicleService.DeleteVehicleParams` containing the following parameters:
         *
         * - `vehicleId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVehicle",
        value: function deleteVehicle(params) {
          return this.deleteVehicleResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllParkingSlotsResponse",
        value: function getAllParkingSlotsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getAllParkingSlots", __body, {
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
        key: "getAllParkingSlots",
        value: function getAllParkingSlots() {
          return this.getAllParkingSlotsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllParkingSlotsByStatusResponse",
        value: function getAllParkingSlotsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getAllParkingSlotsByStatus", __body, {
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
        key: "getAllParkingSlotsByStatus",
        value: function getAllParkingSlotsByStatus(active) {
          return this.getAllParkingSlotsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param parkingSlotId undefined
         */

      }, {
        key: "getParkingSlotByIdResponse",
        value: function getParkingSlotByIdResponse(parkingSlotId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (parkingSlotId != null) __params = __params.set('parkingSlotId', parkingSlotId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getParkingSlotById", __body, {
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
         * @param parkingSlotId undefined
         */

      }, {
        key: "getParkingSlotById",
        value: function getParkingSlotById(parkingSlotId) {
          return this.getParkingSlotByIdResponse(parkingSlotId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getParkingSlotByApartmentIdResponse",
        value: function getParkingSlotByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getParkingSlotByApartmentId", __body, {
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
        key: "getParkingSlotByApartmentId",
        value: function getParkingSlotByApartmentId(apartmentId) {
          return this.getParkingSlotByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VehicleService.GetParkingSlotByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getParkingSlotByApartmentIdStatusResponse",
        value: function getParkingSlotByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getParkingSlotByApartmentIdStatus", __body, {
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
         * @param params The `VehicleService.GetParkingSlotByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getParkingSlotByApartmentIdStatus",
        value: function getParkingSlotByApartmentIdStatus(params) {
          return this.getParkingSlotByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentIdBlockUnitId undefined
         */

      }, {
        key: "getParkingSlotByApartmentIdUnitIdResponse",
        value: function getParkingSlotByApartmentIdUnitIdResponse(apartmentIdBlockUnitId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentIdBlockUnitId != null) __params = __params.set('apartmentIdBlockUnitId', apartmentIdBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getParkingSlotByApartmentIdUnitId", __body, {
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
         * @param apartmentIdBlockUnitId undefined
         */

      }, {
        key: "getParkingSlotByApartmentIdUnitId",
        value: function getParkingSlotByApartmentIdUnitId(apartmentIdBlockUnitId) {
          return this.getParkingSlotByApartmentIdUnitIdResponse(apartmentIdBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VehicleService.GetParkingSlotByApartmentIdUnitIdStatusParams` containing the following parameters:
         *
         * - `apartmentIdBlockUnitId`:
         *
         * - `active`:
         */

      }, {
        key: "getParkingSlotByApartmentIdUnitIdStatusResponse",
        value: function getParkingSlotByApartmentIdUnitIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentIdBlockUnitId != null) __params = __params.set('apartmentIdBlockUnitId', params.apartmentIdBlockUnitId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getParkingSlotByApartmentIdUnitIdStatus", __body, {
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
         * @param params The `VehicleService.GetParkingSlotByApartmentIdUnitIdStatusParams` containing the following parameters:
         *
         * - `apartmentIdBlockUnitId`:
         *
         * - `active`:
         */

      }, {
        key: "getParkingSlotByApartmentIdUnitIdStatus",
        value: function getParkingSlotByApartmentIdUnitIdStatus(params) {
          return this.getParkingSlotByApartmentIdUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VehicleService.GetParkingSlotByApartmentIdSlotStatusParams` containing the following parameters:
         *
         * - `slotStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getParkingSlotByApartmentIdSlotStatusResponse",
        value: function getParkingSlotByApartmentIdSlotStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.slotStatusId != null) __params = __params.set('slotStatusId', params.slotStatusId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Vehicle/getParkingSlotByApartmentIdSlotStatus", __body, {
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
         * @param params The `VehicleService.GetParkingSlotByApartmentIdSlotStatusParams` containing the following parameters:
         *
         * - `slotStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getParkingSlotByApartmentIdSlotStatus",
        value: function getParkingSlotByApartmentIdSlotStatus(params) {
          return this.getParkingSlotByApartmentIdSlotStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param parkingSlot undefined
         */

      }, {
        key: "addParkingSlotResponse",
        value: function addParkingSlotResponse(parkingSlot) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = parkingSlot;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Vehicle/addParkingSlot", __body, {
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
         * @param parkingSlot undefined
         */

      }, {
        key: "addParkingSlot",
        value: function addParkingSlot(parkingSlot) {
          return this.addParkingSlotResponse(parkingSlot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param parkingSlot undefined
         */

      }, {
        key: "updateParkingSlotResponse",
        value: function updateParkingSlotResponse(parkingSlot) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = parkingSlot;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Vehicle/updateParkingSlot", __body, {
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
         * @param parkingSlot undefined
         */

      }, {
        key: "updateParkingSlot",
        value: function updateParkingSlot(parkingSlot) {
          return this.updateParkingSlotResponse(parkingSlot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VehicleService.DeleteParkingSlotParams` containing the following parameters:
         *
         * - `parkingSlotId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteParkingSlotResponse",
        value: function deleteParkingSlotResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.parkingSlotId != null) __params = __params.set('parkingSlotId', params.parkingSlotId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Vehicle/deleteParkingSlot", __body, {
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
         * @param params The `VehicleService.DeleteParkingSlotParams` containing the following parameters:
         *
         * - `parkingSlotId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteParkingSlot",
        value: function deleteParkingSlot(params) {
          return this.deleteParkingSlotResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitVehicle undefined
         */

      }, {
        key: "addApartmentBlockUnitVehicleResponse",
        value: function addApartmentBlockUnitVehicleResponse(apartmentBlockUnitVehicle) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = apartmentBlockUnitVehicle;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Vehicle/addApartmentBlockUnitVehicle", __body, {
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
         * @param apartmentBlockUnitVehicle undefined
         */

      }, {
        key: "addApartmentBlockUnitVehicle",
        value: function addApartmentBlockUnitVehicle(apartmentBlockUnitVehicle) {
          return this.addApartmentBlockUnitVehicleResponse(apartmentBlockUnitVehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentBlockUnitVehicle undefined
         */

      }, {
        key: "updateApartmentBlockUnitVehicleResponse",
        value: function updateApartmentBlockUnitVehicleResponse(apartmentBlockUnitVehicle) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = apartmentBlockUnitVehicle;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Vehicle/updateApartmentBlockUnitVehicle", __body, {
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
         * @param apartmentBlockUnitVehicle undefined
         */

      }, {
        key: "updateApartmentBlockUnitVehicle",
        value: function updateApartmentBlockUnitVehicle(apartmentBlockUnitVehicle) {
          return this.updateApartmentBlockUnitVehicleResponse(apartmentBlockUnitVehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VehicleService.DeleteApartmentBlockUnitVehicleParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `apartmentBlockUnitVehicleId`:
         */

      }, {
        key: "deleteApartmentBlockUnitVehicleResponse",
        value: function deleteApartmentBlockUnitVehicleResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.apartmentBlockUnitVehicleId != null) __params = __params.set('apartmentBlockUnitVehicleId', params.apartmentBlockUnitVehicleId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Vehicle/deleteApartmentBlockUnitVehicle", __body, {
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
         * @param params The `VehicleService.DeleteApartmentBlockUnitVehicleParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `apartmentBlockUnitVehicleId`:
         */

      }, {
        key: "deleteApartmentBlockUnitVehicle",
        value: function deleteApartmentBlockUnitVehicle(params) {
          return this.deleteApartmentBlockUnitVehicleResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `VehicleService.UploadVehicleDocumentParams` containing the following parameters:
         *
         * - `file`:
         *
         * - `description`:
         *
         * - `aptVehId`:
         *
         * - `addBy`:
         */

      }, {
        key: "uploadVehicleDocumentResponse",
        value: function uploadVehicleDocumentResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;

          var __formData = new FormData();

          __body = __formData;

          if (params.file != null) {
            __formData.append('file', params.file);
          }

          if (params.description != null) __params = __params.set('description', params.description.toString());
          if (params.aptVehId != null) __params = __params.set('aptVehId', params.aptVehId.toString());
          if (params.addBy != null) __params = __params.set('addBy', params.addBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Vehicle/uploadVehicleDocument", __body, {
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
         * @param params The `VehicleService.UploadVehicleDocumentParams` containing the following parameters:
         *
         * - `file`:
         *
         * - `description`:
         *
         * - `aptVehId`:
         *
         * - `addBy`:
         */

      }, {
        key: "uploadVehicleDocument",
        value: function uploadVehicleDocument(params) {
          return this.uploadVehicleDocumentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }]);

      return VehicleService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

    VehicleService.getAllVehiclesPath = '/api/Vehicle/getAllVehicles';
    VehicleService.getAllVehiclesByStatusPath = '/api/Vehicle/getAllVehiclesByStatus';
    VehicleService.getVehicleByVehicleIdPath = '/api/Vehicle/getVehicleByVehicleId';
    VehicleService.getAllVehiclesByApartmentBlockUnitIdPath = '/api/Vehicle/getAllVehiclesByApartmentBlockUnitId';
    VehicleService.getAllVehiclesByApartmentBlockUnitIdStatusPath = '/api/Vehicle/getAllVehiclesByApartmentBlockUnitIdStatus';
    VehicleService.addVehiclePath = '/api/Vehicle/addVehicle';
    VehicleService.updateVehiclePath = '/api/Vehicle/updateVehicle';
    VehicleService.deleteVehiclePath = '/api/Vehicle/deleteVehicle';
    VehicleService.getAllParkingSlotsPath = '/api/Vehicle/getAllParkingSlots';
    VehicleService.getAllParkingSlotsByStatusPath = '/api/Vehicle/getAllParkingSlotsByStatus';
    VehicleService.getParkingSlotByIdPath = '/api/Vehicle/getParkingSlotById';
    VehicleService.getParkingSlotByApartmentIdPath = '/api/Vehicle/getParkingSlotByApartmentId';
    VehicleService.getParkingSlotByApartmentIdStatusPath = '/api/Vehicle/getParkingSlotByApartmentIdStatus';
    VehicleService.getParkingSlotByApartmentIdUnitIdPath = '/api/Vehicle/getParkingSlotByApartmentIdUnitId';
    VehicleService.getParkingSlotByApartmentIdUnitIdStatusPath = '/api/Vehicle/getParkingSlotByApartmentIdUnitIdStatus';
    VehicleService.getParkingSlotByApartmentIdSlotStatusPath = '/api/Vehicle/getParkingSlotByApartmentIdSlotStatus';
    VehicleService.addParkingSlotPath = '/api/Vehicle/addParkingSlot';
    VehicleService.updateParkingSlotPath = '/api/Vehicle/updateParkingSlot';
    VehicleService.deleteParkingSlotPath = '/api/Vehicle/deleteParkingSlot';
    VehicleService.addApartmentBlockUnitVehiclePath = '/api/Vehicle/addApartmentBlockUnitVehicle';
    VehicleService.updateApartmentBlockUnitVehiclePath = '/api/Vehicle/updateApartmentBlockUnitVehicle';
    VehicleService.deleteApartmentBlockUnitVehiclePath = '/api/Vehicle/deleteApartmentBlockUnitVehicle';
    VehicleService.uploadVehicleDocumentPath = '/api/Vehicle/uploadVehicleDocument';

    VehicleService.ctorParameters = function () {
      return [{
        type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], VehicleService);
    /***/
  }
}]);
//# sourceMappingURL=default~parking-management-parking-management-module~unit-users-unit-users-module-es5.js.map