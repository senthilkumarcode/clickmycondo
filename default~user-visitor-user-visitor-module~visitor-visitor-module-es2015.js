(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~user-visitor-user-visitor-module~visitor-visitor-module"],{

/***/ "./src/app/api/services/visitor.service.ts":
/*!*************************************************!*\
  !*** ./src/app/api/services/visitor.service.ts ***!
  \*************************************************/
/*! exports provided: VisitorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorService", function() { return VisitorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

/* tslint:disable */





let VisitorService = class VisitorService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    getAllVisitorsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getAllVisitors`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVisitors() {
        return this.getAllVisitorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVisitorsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getAllVisitorsByStatus`, __body, {
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
    getAllVisitorsByStatus(active) {
        return this.getAllVisitorsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVisitorsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getVisitorsByApartmentId`, __body, {
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
    getVisitorsByApartmentId(apartmentId) {
        return this.getVisitorsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getVisitorsByApartmentIdDateResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getVisitorsByApartmentIdDate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getVisitorsByApartmentIdDate(params) {
        return this.getVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllUnplannedVisitorsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getAllUnplannedVisitors`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllUnplannedVisitors() {
        return this.getAllUnplannedVisitorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllPlannedVisitorsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getAllPlannedVisitors`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllPlannedVisitors() {
        return this.getAllPlannedVisitorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getUnplannedVisitorsByApartmentIdDateResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getUnplannedVisitorsByApartmentIdDate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getUnplannedVisitorsByApartmentIdDate(params) {
        return this.getUnplannedVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getPlannedVisitorsByApartmentIdDateResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getPlannedVisitorsByApartmentIdDate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getPlannedVisitorsByApartmentIdDate(params) {
        return this.getPlannedVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentUnitId undefined
     */
    getVisitorsByApartmentUnitIdResponse(apartmentUnitId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentUnitId != null)
            __params = __params.set('apartmentUnitId', apartmentUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getVisitorsByApartmentUnitId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentUnitId undefined
     */
    getVisitorsByApartmentUnitId(apartmentUnitId) {
        return this.getVisitorsByApartmentUnitIdResponse(apartmentUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param visitorId undefined
     */
    getVisitorByIdResponse(visitorId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (visitorId != null)
            __params = __params.set('visitorId', visitorId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getVisitorById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param visitorId undefined
     */
    getVisitorById(visitorId) {
        return this.getVisitorByIdResponse(visitorId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VisitorService.GetVisitorByApartmentIdVisitorTypeIdParams` containing the following parameters:
     *
     * - `visitorTypeId`:
     *
     * - `apartmentId`:
     */
    getVisitorByApartmentIdVisitorTypeIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.visitorTypeId != null)
            __params = __params.set('visitorTypeId', params.visitorTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getVisitorByApartmentIdVisitorTypeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getVisitorByApartmentIdVisitorTypeId(params) {
        return this.getVisitorByApartmentIdVisitorTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VisitorService.GetVisitorsByApartmentIdVisitorTypeIdParams` containing the following parameters:
     *
     * - `visitorTypeId`:
     *
     * - `apartmentId`:
     */
    getVisitorsByApartmentIdVisitorTypeIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.visitorTypeId != null)
            __params = __params.set('visitorTypeId', params.visitorTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getVisitorsByApartmentIdVisitorTypeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getVisitorsByApartmentIdVisitorTypeId(params) {
        return this.getVisitorsByApartmentIdVisitorTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getVisitorsByVisitorTypeIdDateResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.visitorTypeId != null)
            __params = __params.set('visitorTypeId', params.visitorTypeId.toString());
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getVisitorsByVisitorTypeIdDate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getVisitorsByVisitorTypeIdDate(params) {
        return this.getVisitorsByVisitorTypeIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getYetToCheckoutVisitorsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getYetToCheckoutVisitorsByApartmentId`, __body, {
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
    getYetToCheckoutVisitorsByApartmentId(apartmentId) {
        return this.getYetToCheckoutVisitorsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VisitorService.GetYetToCheckoutVisitorsByApartmentIdVisitorTypeIdParams` containing the following parameters:
     *
     * - `visitorTypeId`:
     *
     * - `apartmentId`:
     */
    getYetToCheckoutVisitorsByApartmentIdVisitorTypeIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.visitorTypeId != null)
            __params = __params.set('visitorTypeId', params.visitorTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getYetToCheckoutVisitorsByApartmentIdVisitorTypeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getYetToCheckoutVisitorsByApartmentIdVisitorTypeId(params) {
        return this.getYetToCheckoutVisitorsByApartmentIdVisitorTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getYetToCheckoutVisitorsByApartmentIdDateResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getYetToCheckoutVisitorsByApartmentIdDate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getYetToCheckoutVisitorsByApartmentIdDate(params) {
        return this.getYetToCheckoutVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param visitor undefined
     */
    addVisitorResponse(visitor) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = visitor;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Visitor/addVisitor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param visitor undefined
     */
    addVisitor(visitor) {
        return this.addVisitorResponse(visitor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param visitor undefined
     */
    updateVisitorResponse(visitor) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = visitor;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Visitor/updateVisitor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param visitor undefined
     */
    updateVisitor(visitor) {
        return this.updateVisitorResponse(visitor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    checkOutVisitorResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.visitorId != null)
            __params = __params.set('visitorId', params.visitorId.toString());
        if (params.updatedBy != null)
            __params = __params.set('updatedBy', params.updatedBy.toString());
        if (params.checkOutTime != null)
            __params = __params.set('checkOutTime', params.checkOutTime.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Visitor/checkOutVisitor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    checkOutVisitor(params) {
        return this.checkOutVisitorResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param visitor undefined
     */
    deleteVisitorResponse(visitor) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = visitor;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Visitor/deleteVisitor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param visitor undefined
     */
    deleteVisitor(visitor) {
        return this.deleteVisitorResponse(visitor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VisitorService.DeleteVisitorByIdParams` containing the following parameters:
     *
     * - `visitorId`:
     *
     * - `deleteBy`:
     */
    deleteVisitorByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.visitorId != null)
            __params = __params.set('visitorId', params.visitorId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Visitor/deleteVisitorById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteVisitorById(params) {
        return this.deleteVisitorByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllExpectedVisitorsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getAllExpectedVisitors`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllExpectedVisitors() {
        return this.getAllExpectedVisitorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllYetToComeExpectedVisitorsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getAllYetToComeExpectedVisitors`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllYetToComeExpectedVisitors() {
        return this.getAllYetToComeExpectedVisitorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllYetToComeExpectedVisitorsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getAllYetToComeExpectedVisitorsByApartmentId`, __body, {
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
    getAllYetToComeExpectedVisitorsByApartmentId(apartmentId) {
        return this.getAllYetToComeExpectedVisitorsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getAllYetToComeExpectedVisitorsByApartmentIdDateResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getAllYetToComeExpectedVisitorsByApartmentIdDate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllYetToComeExpectedVisitorsByApartmentIdDate(params) {
        return this.getAllYetToComeExpectedVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllExpectedVisitorsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getAllExpectedVisitorsByStatus`, __body, {
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
    getAllExpectedVisitorsByStatus(active) {
        return this.getAllExpectedVisitorsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getExpectedVisitorsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getExpectedVisitorsByApartmentId`, __body, {
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
    getExpectedVisitorsByApartmentId(apartmentId) {
        return this.getExpectedVisitorsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getExpectedVisitorsByApartmentIdDateResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getExpectedVisitorsByApartmentIdDate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getExpectedVisitorsByApartmentIdDate(params) {
        return this.getExpectedVisitorsByApartmentIdDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentUnitId undefined
     */
    getExpectedVisitorsByApartmentUnitIdResponse(apartmentUnitId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentUnitId != null)
            __params = __params.set('apartmentUnitId', apartmentUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getExpectedVisitorsByApartmentUnitId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentUnitId undefined
     */
    getExpectedVisitorsByApartmentUnitId(apartmentUnitId) {
        return this.getExpectedVisitorsByApartmentUnitIdResponse(apartmentUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param expectedVisitorId undefined
     */
    getExpectedVisitorByIdResponse(expectedVisitorId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (expectedVisitorId != null)
            __params = __params.set('expectedVisitorId', expectedVisitorId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Visitor/getExpectedVisitorById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param expectedVisitorId undefined
     */
    getExpectedVisitorById(expectedVisitorId) {
        return this.getExpectedVisitorByIdResponse(expectedVisitorId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param expectedVisitor undefined
     */
    addExpectedVisitorResponse(expectedVisitor) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = expectedVisitor;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Visitor/addExpectedVisitor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param expectedVisitor undefined
     */
    addExpectedVisitor(expectedVisitor) {
        return this.addExpectedVisitorResponse(expectedVisitor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param expectedVisitor undefined
     */
    updateExpectedVisitorResponse(expectedVisitor) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = expectedVisitor;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Visitor/updateExpectedVisitor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param expectedVisitor undefined
     */
    updateExpectedVisitor(expectedVisitor) {
        return this.updateExpectedVisitorResponse(expectedVisitor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VisitorService.DeleteExpectedVisitorByIdParams` containing the following parameters:
     *
     * - `expectedVisitorId`:
     *
     * - `deleteBy`:
     */
    deleteExpectedVisitorByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.expectedVisitorId != null)
            __params = __params.set('expectedVisitorId', params.expectedVisitorId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Visitor/deleteExpectedVisitorById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteExpectedVisitorById(params) {
        return this.deleteExpectedVisitorByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
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
VisitorService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VisitorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], VisitorService);



/***/ })

}]);
//# sourceMappingURL=default~user-visitor-user-visitor-module~visitor-visitor-module-es2015.js.map