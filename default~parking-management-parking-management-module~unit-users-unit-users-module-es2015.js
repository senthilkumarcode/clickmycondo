(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~parking-management-parking-management-module~unit-users-unit-users-module"],{

/***/ "./src/app/api/services/vehicle.service.ts":
/*!*************************************************!*\
  !*** ./src/app/api/services/vehicle.service.ts ***!
  \*************************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

/* tslint:disable */





let VehicleService = class VehicleService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    getAllVehiclesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getAllVehicles`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVehicles() {
        return this.getAllVehiclesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVehiclesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getAllVehiclesByStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param active undefined
     */
    getAllVehiclesByStatus(active) {
        return this.getAllVehiclesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vehicleId undefined
     */
    getVehicleByVehicleIdResponse(vehicleId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (vehicleId != null)
            __params = __params.set('vehicleId', vehicleId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getVehicleByVehicleId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vehicleId undefined
     */
    getVehicleByVehicleId(vehicleId) {
        return this.getVehicleByVehicleIdResponse(vehicleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitId undefined
     */
    getAllVehiclesByApartmentBlockUnitIdResponse(apartmentBlockUnitId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getAllVehiclesByApartmentBlockUnitId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockUnitId undefined
     */
    getAllVehiclesByApartmentBlockUnitId(apartmentBlockUnitId) {
        return this.getAllVehiclesByApartmentBlockUnitIdResponse(apartmentBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VehicleService.GetAllVehiclesByApartmentBlockUnitIdStatusParams` containing the following parameters:
     *
     * - `apartmentBlockUnitId`:
     *
     * - `active`:
     */
    getAllVehiclesByApartmentBlockUnitIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getAllVehiclesByApartmentBlockUnitIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllVehiclesByApartmentBlockUnitIdStatus(params) {
        return this.getAllVehiclesByApartmentBlockUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vehicle undefined
     */
    addVehicleResponse(vehicle) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vehicle;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vehicle/addVehicle`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vehicle undefined
     */
    addVehicle(vehicle) {
        return this.addVehicleResponse(vehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vehicle undefined
     */
    updateVehicleResponse(vehicle) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vehicle;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vehicle/updateVehicle`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vehicle undefined
     */
    updateVehicle(vehicle) {
        return this.updateVehicleResponse(vehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VehicleService.DeleteVehicleParams` containing the following parameters:
     *
     * - `vehicleId`:
     *
     * - `deleteBy`:
     */
    deleteVehicleResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vehicleId != null)
            __params = __params.set('vehicleId', params.vehicleId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vehicle/deleteVehicle`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteVehicle(params) {
        return this.deleteVehicleResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllParkingSlotsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getAllParkingSlots`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllParkingSlots() {
        return this.getAllParkingSlotsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllParkingSlotsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getAllParkingSlotsByStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param active undefined
     */
    getAllParkingSlotsByStatus(active) {
        return this.getAllParkingSlotsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param parkingSlotId undefined
     */
    getParkingSlotByIdResponse(parkingSlotId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (parkingSlotId != null)
            __params = __params.set('parkingSlotId', parkingSlotId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getParkingSlotById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param parkingSlotId undefined
     */
    getParkingSlotById(parkingSlotId) {
        return this.getParkingSlotByIdResponse(parkingSlotId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getParkingSlotByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getParkingSlotByApartmentId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentId undefined
     */
    getParkingSlotByApartmentId(apartmentId) {
        return this.getParkingSlotByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VehicleService.GetParkingSlotByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getParkingSlotByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getParkingSlotByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getParkingSlotByApartmentIdStatus(params) {
        return this.getParkingSlotByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentIdBlockUnitId undefined
     */
    getParkingSlotByApartmentIdUnitIdResponse(apartmentIdBlockUnitId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentIdBlockUnitId != null)
            __params = __params.set('apartmentIdBlockUnitId', apartmentIdBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getParkingSlotByApartmentIdUnitId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentIdBlockUnitId undefined
     */
    getParkingSlotByApartmentIdUnitId(apartmentIdBlockUnitId) {
        return this.getParkingSlotByApartmentIdUnitIdResponse(apartmentIdBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VehicleService.GetParkingSlotByApartmentIdUnitIdStatusParams` containing the following parameters:
     *
     * - `apartmentIdBlockUnitId`:
     *
     * - `active`:
     */
    getParkingSlotByApartmentIdUnitIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentIdBlockUnitId != null)
            __params = __params.set('apartmentIdBlockUnitId', params.apartmentIdBlockUnitId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getParkingSlotByApartmentIdUnitIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getParkingSlotByApartmentIdUnitIdStatus(params) {
        return this.getParkingSlotByApartmentIdUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VehicleService.GetParkingSlotByApartmentIdSlotStatusParams` containing the following parameters:
     *
     * - `slotStatusId`:
     *
     * - `apartmentId`:
     */
    getParkingSlotByApartmentIdSlotStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.slotStatusId != null)
            __params = __params.set('slotStatusId', params.slotStatusId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vehicle/getParkingSlotByApartmentIdSlotStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getParkingSlotByApartmentIdSlotStatus(params) {
        return this.getParkingSlotByApartmentIdSlotStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param parkingSlot undefined
     */
    addParkingSlotResponse(parkingSlot) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = parkingSlot;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vehicle/addParkingSlot`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param parkingSlot undefined
     */
    addParkingSlot(parkingSlot) {
        return this.addParkingSlotResponse(parkingSlot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param parkingSlot undefined
     */
    updateParkingSlotResponse(parkingSlot) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = parkingSlot;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vehicle/updateParkingSlot`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param parkingSlot undefined
     */
    updateParkingSlot(parkingSlot) {
        return this.updateParkingSlotResponse(parkingSlot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VehicleService.DeleteParkingSlotParams` containing the following parameters:
     *
     * - `parkingSlotId`:
     *
     * - `deleteBy`:
     */
    deleteParkingSlotResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.parkingSlotId != null)
            __params = __params.set('parkingSlotId', params.parkingSlotId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vehicle/deleteParkingSlot`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteParkingSlot(params) {
        return this.deleteParkingSlotResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitVehicle undefined
     */
    addApartmentBlockUnitVehicleResponse(apartmentBlockUnitVehicle) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = apartmentBlockUnitVehicle;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vehicle/addApartmentBlockUnitVehicle`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockUnitVehicle undefined
     */
    addApartmentBlockUnitVehicle(apartmentBlockUnitVehicle) {
        return this.addApartmentBlockUnitVehicleResponse(apartmentBlockUnitVehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitVehicle undefined
     */
    updateApartmentBlockUnitVehicleResponse(apartmentBlockUnitVehicle) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = apartmentBlockUnitVehicle;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vehicle/updateApartmentBlockUnitVehicle`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockUnitVehicle undefined
     */
    updateApartmentBlockUnitVehicle(apartmentBlockUnitVehicle) {
        return this.updateApartmentBlockUnitVehicleResponse(apartmentBlockUnitVehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VehicleService.DeleteApartmentBlockUnitVehicleParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `apartmentBlockUnitVehicleId`:
     */
    deleteApartmentBlockUnitVehicleResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.apartmentBlockUnitVehicleId != null)
            __params = __params.set('apartmentBlockUnitVehicleId', params.apartmentBlockUnitVehicleId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vehicle/deleteApartmentBlockUnitVehicle`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteApartmentBlockUnitVehicle(params) {
        return this.deleteApartmentBlockUnitVehicleResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    uploadVehicleDocumentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let __formData = new FormData();
        __body = __formData;
        if (params.file != null) {
            __formData.append('file', params.file);
        }
        if (params.description != null)
            __params = __params.set('description', params.description.toString());
        if (params.aptVehId != null)
            __params = __params.set('aptVehId', params.aptVehId.toString());
        if (params.addBy != null)
            __params = __params.set('addBy', params.addBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vehicle/uploadVehicleDocument`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    uploadVehicleDocument(params) {
        return this.uploadVehicleDocumentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
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
VehicleService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], VehicleService);



/***/ })

}]);
//# sourceMappingURL=default~parking-management-parking-management-module~unit-users-unit-users-module-es2015.js.map