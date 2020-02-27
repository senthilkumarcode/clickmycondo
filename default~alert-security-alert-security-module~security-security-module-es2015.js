(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~alert-security-alert-security-module~security-security-module"],{

/***/ "./src/app/api/services/alert.service.ts":
/*!***********************************************!*\
  !*** ./src/app/api/services/alert.service.ts ***!
  \***********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

/* tslint:disable */





let AlertService = class AlertService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    getAllAlertEmergencyNumbersResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllAlertEmergencyNumbers`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllAlertEmergencyNumbers() {
        return this.getAllAlertEmergencyNumbersResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllAlertEmergencyNumbersByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllAlertEmergencyNumbersByStatus`, __body, {
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
    getAllAlertEmergencyNumbersByStatus(active) {
        return this.getAllAlertEmergencyNumbersByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param alertEmergencyNumberId undefined
     */
    getAlertEmergencyNumberByAlertEmergencyNumberIdResponse(alertEmergencyNumberId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (alertEmergencyNumberId != null)
            __params = __params.set('alertEmergencyNumberId', alertEmergencyNumberId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAlertEmergencyNumberByAlertEmergencyNumberId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param alertEmergencyNumberId undefined
     */
    getAlertEmergencyNumberByAlertEmergencyNumberId(alertEmergencyNumberId) {
        return this.getAlertEmergencyNumberByAlertEmergencyNumberIdResponse(alertEmergencyNumberId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param alertEmergencyNumber undefined
     */
    addAlertEmergencyNumberResponse(alertEmergencyNumber) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = alertEmergencyNumber;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/addAlertEmergencyNumber`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param alertEmergencyNumber undefined
     */
    addAlertEmergencyNumber(alertEmergencyNumber) {
        return this.addAlertEmergencyNumberResponse(alertEmergencyNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param alertEmergencyNumber undefined
     */
    updateAlertEmergencyNumberResponse(alertEmergencyNumber) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = alertEmergencyNumber;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/updateAlertEmergencyNumber`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param alertEmergencyNumber undefined
     */
    updateAlertEmergencyNumber(alertEmergencyNumber) {
        return this.updateAlertEmergencyNumberResponse(alertEmergencyNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.DeleteAlertEmergencyNumberParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `alertEmergencyNumberId`:
     */
    deleteAlertEmergencyNumberResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.alertEmergencyNumberId != null)
            __params = __params.set('alertEmergencyNumberId', params.alertEmergencyNumberId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/deleteAlertEmergencyNumber`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteAlertEmergencyNumber(params) {
        return this.deleteAlertEmergencyNumberResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitSecurityId undefined
     */
    getAllApartmentBlockUnitSecurityByIdResponse(apartmentBlockUnitSecurityId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentBlockUnitSecurityId != null)
            __params = __params.set('apartmentBlockUnitSecurityId', apartmentBlockUnitSecurityId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitSecurityById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockUnitSecurityId undefined
     */
    getAllApartmentBlockUnitSecurityById(apartmentBlockUnitSecurityId) {
        return this.getAllApartmentBlockUnitSecurityByIdResponse(apartmentBlockUnitSecurityId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.GetAllApartmentBlockUnitSecurityByIdStatusParams` containing the following parameters:
     *
     * - `apartmentBlockUnitSecurityId`:
     *
     * - `active`:
     */
    getAllApartmentBlockUnitSecurityByIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentBlockUnitSecurityId != null)
            __params = __params.set('apartmentBlockUnitSecurityId', params.apartmentBlockUnitSecurityId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitSecurityByIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllApartmentBlockUnitSecurityByIdStatus(params) {
        return this.getAllApartmentBlockUnitSecurityByIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitId undefined
     */
    getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdResponse(apartmentBlockUnitId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitSecurityByApartmentBlockUnitId`, __body, {
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
    getAllApartmentBlockUnitSecurityByApartmentBlockUnitId(apartmentBlockUnitId) {
        return this.getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdResponse(apartmentBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitId undefined
     */
    getHeadSecurityByApartmentBlockUnitIdResponse(apartmentBlockUnitId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getHeadSecurityByApartmentBlockUnitId`, __body, {
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
    getHeadSecurityByApartmentBlockUnitId(apartmentBlockUnitId) {
        return this.getHeadSecurityByApartmentBlockUnitIdResponse(apartmentBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.GetAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatusParams` containing the following parameters:
     *
     * - `apartmentBlockUnitId`:
     *
     * - `active`:
     */
    getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatus(params) {
        return this.getAllApartmentBlockUnitSecurityByApartmentBlockUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitSecurity undefined
     */
    addApartmentBlockUnitSecurityResponse(apartmentBlockUnitSecurity) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = apartmentBlockUnitSecurity;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/addApartmentBlockUnitSecurity`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockUnitSecurity undefined
     */
    addApartmentBlockUnitSecurity(apartmentBlockUnitSecurity) {
        return this.addApartmentBlockUnitSecurityResponse(apartmentBlockUnitSecurity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitSecurity undefined
     */
    updateApartmentBlockUnitSecurityResponse(apartmentBlockUnitSecurity) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = apartmentBlockUnitSecurity;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/updateApartmentBlockUnitSecurity`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockUnitSecurity undefined
     */
    updateApartmentBlockUnitSecurity(apartmentBlockUnitSecurity) {
        return this.updateApartmentBlockUnitSecurityResponse(apartmentBlockUnitSecurity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.DeleteApartmentBlockUnitSecurityParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `apartmentBlockUnitSecurityId`:
     */
    deleteApartmentBlockUnitSecurityResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.apartmentBlockUnitSecurityId != null)
            __params = __params.set('apartmentBlockUnitSecurityId', params.apartmentBlockUnitSecurityId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/deleteApartmentBlockUnitSecurity`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteApartmentBlockUnitSecurity(params) {
        return this.deleteApartmentBlockUnitSecurityResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitAlertId undefined
     */
    getAllApartmentBlockUnitAlertByIdResponse(apartmentBlockUnitAlertId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentBlockUnitAlertId != null)
            __params = __params.set('apartmentBlockUnitAlertId', apartmentBlockUnitAlertId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitAlertById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockUnitAlertId undefined
     */
    getAllApartmentBlockUnitAlertById(apartmentBlockUnitAlertId) {
        return this.getAllApartmentBlockUnitAlertByIdResponse(apartmentBlockUnitAlertId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.GetAllApartmentBlockUnitAlertByIdStatusParams` containing the following parameters:
     *
     * - `apartmentBlockUnitAlertId`:
     *
     * - `active`:
     */
    getAllApartmentBlockUnitAlertByIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentBlockUnitAlertId != null)
            __params = __params.set('apartmentBlockUnitAlertId', params.apartmentBlockUnitAlertId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitAlertByIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllApartmentBlockUnitAlertByIdStatus(params) {
        return this.getAllApartmentBlockUnitAlertByIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllApartmentBlockUnitAlertByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitAlertByApartmentId`, __body, {
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
    getAllApartmentBlockUnitAlertByApartmentId(apartmentId) {
        return this.getAllApartmentBlockUnitAlertByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.GetAllApartmentBlockUnitAlertByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllApartmentBlockUnitAlertByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitAlertByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllApartmentBlockUnitAlertByApartmentIdStatus(params) {
        return this.getAllApartmentBlockUnitAlertByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockId undefined
     */
    getAllApartmentBlockUnitAlertByApartmentBlockIdResponse(apartmentBlockId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentBlockId != null)
            __params = __params.set('apartmentBlockId', apartmentBlockId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockId undefined
     */
    getAllApartmentBlockUnitAlertByApartmentBlockId(apartmentBlockId) {
        return this.getAllApartmentBlockUnitAlertByApartmentBlockIdResponse(apartmentBlockId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.GetAllApartmentBlockUnitAlertByApartmentBlockIdStatusParams` containing the following parameters:
     *
     * - `apartmentBlockId`:
     *
     * - `active`:
     */
    getAllApartmentBlockUnitAlertByApartmentBlockIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentBlockId != null)
            __params = __params.set('apartmentBlockId', params.apartmentBlockId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllApartmentBlockUnitAlertByApartmentBlockIdStatus(params) {
        return this.getAllApartmentBlockUnitAlertByApartmentBlockIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitId undefined
     */
    getAllApartmentBlockUnitAlertByApartmentBlockUnitIdResponse(apartmentBlockUnitId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockUnitId`, __body, {
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
    getAllApartmentBlockUnitAlertByApartmentBlockUnitId(apartmentBlockUnitId) {
        return this.getAllApartmentBlockUnitAlertByApartmentBlockUnitIdResponse(apartmentBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.GetAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatusParams` containing the following parameters:
     *
     * - `apartmentBlockUnitId`:
     *
     * - `active`:
     */
    getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatus(params) {
        return this.getAllApartmentBlockUnitAlertByApartmentBlockUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitAlert undefined
     */
    addApartmentBlockUnitAlertResponse(apartmentBlockUnitAlert) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = apartmentBlockUnitAlert;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/addApartmentBlockUnitAlert`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockUnitAlert undefined
     */
    addApartmentBlockUnitAlert(apartmentBlockUnitAlert) {
        return this.addApartmentBlockUnitAlertResponse(apartmentBlockUnitAlert).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitAlert undefined
     */
    updateApartmentBlockUnitAlertResponse(apartmentBlockUnitAlert) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = apartmentBlockUnitAlert;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/updateApartmentBlockUnitAlert`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockUnitAlert undefined
     */
    updateApartmentBlockUnitAlert(apartmentBlockUnitAlert) {
        return this.updateApartmentBlockUnitAlertResponse(apartmentBlockUnitAlert).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.DeleteApartmentBlockUnitAlertParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `apartmentBlockUnitAlertId`:
     */
    deleteApartmentBlockUnitAlertResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.apartmentBlockUnitAlertId != null)
            __params = __params.set('apartmentBlockUnitAlertId', params.apartmentBlockUnitAlertId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/deleteApartmentBlockUnitAlert`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteApartmentBlockUnitAlert(params) {
        return this.deleteApartmentBlockUnitAlertResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllViolationsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllViolations`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllViolations() {
        return this.getAllViolationsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllViolationsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getAllViolationsByStatus`, __body, {
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
    getAllViolationsByStatus(active) {
        return this.getAllViolationsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getViolationsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getViolationsByApartmentId`, __body, {
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
    getViolationsByApartmentIdStatus(apartmentId) {
        return this.getViolationsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.GetViolationsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getViolationsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getViolationsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getViolationsByApartmentIdStatus_1(params) {
        return this.getViolationsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.GetViolationByViolationUserCategoryIdParams` containing the following parameters:
     *
     * - `violationUserCategoryId`:
     *
     * - `apartmentId`:
     */
    getViolationByViolationUserCategoryIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.violationUserCategoryId != null)
            __params = __params.set('violationUserCategoryId', params.violationUserCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getViolationByViolationUserCategoryId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getViolationByViolationUserCategoryId(params) {
        return this.getViolationByViolationUserCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getViolationsByViolationUserCategoryIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.violationUserCategoryId != null)
            __params = __params.set('violationUserCategoryId', params.violationUserCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getViolationsByViolationUserCategoryIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getViolationsByViolationUserCategoryIdStatus(params) {
        return this.getViolationsByViolationUserCategoryIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.GetViolationsByViolationTypeIdParams` containing the following parameters:
     *
     * - `violationTypeId`:
     *
     * - `apartmentId`:
     */
    getViolationsByViolationTypeIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.violationTypeId != null)
            __params = __params.set('violationTypeId', params.violationTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getViolationsByViolationTypeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getViolationsByViolationTypeId(params) {
        return this.getViolationsByViolationTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getViolationsByViolationTypeIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.violationTypeId != null)
            __params = __params.set('violationTypeId', params.violationTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getViolationsByViolationTypeIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getViolationsByViolationTypeIdStatus(params) {
        return this.getViolationsByViolationTypeIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.GetViolationsByViolationStatusIdParams` containing the following parameters:
     *
     * - `violationStatusId`:
     *
     * - `apartmentId`:
     */
    getViolationsByViolationStatusIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.violationStatusId != null)
            __params = __params.set('violationStatusId', params.violationStatusId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getViolationsByViolationStatusId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getViolationsByViolationStatusId(params) {
        return this.getViolationsByViolationStatusIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param raisedUserId undefined
     */
    getViolationByRaisedUserIdResponse(raisedUserId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (raisedUserId != null)
            __params = __params.set('raisedUserId', raisedUserId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getViolationsByRaisedUserId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param raisedUserId undefined
     */
    getViolationByRaisedUserId(raisedUserId) {
        return this.getViolationByRaisedUserIdResponse(raisedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param violationId undefined
     */
    getViolationByIdResponse(violationId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (violationId != null)
            __params = __params.set('violationId', violationId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Alert/getViolationById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param violationId undefined
     */
    getViolationById(violationId) {
        return this.getViolationByIdResponse(violationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param violation undefined
     */
    addViolationResponse(violation) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = violation;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/addViolation`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param violation undefined
     */
    addViolation(violation) {
        return this.addViolationResponse(violation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param violation undefined
     */
    updateViolationResponse(violation) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = violation;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/updateViolation`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param violation undefined
     */
    updateViolation(violation) {
        return this.updateViolationResponse(violation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AlertService.DeleteViolationParams` containing the following parameters:
     *
     * - `violationId`:
     *
     * - `deleteBy`:
     */
    deleteViolationResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.violationId != null)
            __params = __params.set('violationId', params.violationId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Alert/deleteViolation`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteViolation(params) {
        return this.deleteViolationResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
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
AlertService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AlertService);



/***/ })

}]);
//# sourceMappingURL=default~alert-security-alert-security-module~security-security-module-es2015.js.map