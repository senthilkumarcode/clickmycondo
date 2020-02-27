(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~assets-assets-module~expense-tracker-expense-tracker-module~vendor-vendor-module"],{

/***/ "./src/app/api/services/vendor.service.ts":
/*!************************************************!*\
  !*** ./src/app/api/services/vendor.service.ts ***!
  \************************************************/
/*! exports provided: VendorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorService", function() { return VendorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

/* tslint:disable */





let VendorService = class VendorService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    getAllVendorsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getAllVendors`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendors() {
        return this.getAllVendorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getAllVendorsByStatus`, __body, {
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
    getAllVendorsByStatus(active) {
        return this.getAllVendorsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorId undefined
     */
    getVendorByIdResponse(vendorId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (vendorId != null)
            __params = __params.set('vendorId', vendorId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getVendorById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorId undefined
     */
    getVendorById(vendorId) {
        return this.getVendorByIdResponse(vendorId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getVendorByApartmentId`, __body, {
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
    getVendorByApartmentId(apartmentId) {
        return this.getVendorByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VendorService.GetVendorByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getVendorByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `VendorService.GetVendorByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorByApartmentIdStatus(params) {
        return this.getVendorByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendor undefined
     */
    addVendorResponse(vendor) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendor;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vendor/addVendor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendor undefined
     */
    addVendor(vendor) {
        return this.addVendorResponse(vendor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendor undefined
     */
    updateVendorResponse(vendor) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendor;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vendor/updateVendor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendor undefined
     */
    updateVendor(vendor) {
        return this.updateVendorResponse(vendor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VendorService.DeleteVendorParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `deleteBy`:
     */
    deleteVendorResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorId != null)
            __params = __params.set('vendorId', params.vendorId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vendor/deleteVendor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `VendorService.DeleteVendorParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `deleteBy`:
     */
    deleteVendor(params) {
        return this.deleteVendorResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllWaterVendorsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getAllWaterVendors`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllWaterVendors() {
        return this.getAllWaterVendorsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllWaterVendorsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getAllWaterVendorsByStatus`, __body, {
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
    getAllWaterVendorsByStatus(active) {
        return this.getAllWaterVendorsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param waterVendorId undefined
     */
    getWaterVendorByIdResponse(waterVendorId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (waterVendorId != null)
            __params = __params.set('waterVendorId', waterVendorId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getWaterVendorById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param waterVendorId undefined
     */
    getWaterVendorById(waterVendorId) {
        return this.getWaterVendorByIdResponse(waterVendorId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param waterVendor undefined
     */
    addWaterVendorResponse(waterVendor) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = waterVendor;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vendor/addWaterVendor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param waterVendor undefined
     */
    addWaterVendor(waterVendor) {
        return this.addWaterVendorResponse(waterVendor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param waterVendor undefined
     */
    updateWaterVendorResponse(waterVendor) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = waterVendor;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vendor/updateWaterVendor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param waterVendor undefined
     */
    updateWaterVendor(waterVendor) {
        return this.updateWaterVendorResponse(waterVendor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VendorService.DeleteWaterVendorParams` containing the following parameters:
     *
     * - `waterVendorId`:
     *
     * - `deleteBy`:
     */
    deleteWaterVendorResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.waterVendorId != null)
            __params = __params.set('waterVendorId', params.waterVendorId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vendor/deleteWaterVendor`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `VendorService.DeleteWaterVendorParams` containing the following parameters:
     *
     * - `waterVendorId`:
     *
     * - `deleteBy`:
     */
    deleteWaterVendor(params) {
        return this.deleteWaterVendorResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllExpensesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getAllExpenses`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllExpenses() {
        return this.getAllExpensesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllExpensesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getAllExpensesByStatus`, __body, {
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
    getAllExpensesByStatus(active) {
        return this.getAllExpensesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param expenseId undefined
     */
    getExpenseByIdResponse(expenseId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (expenseId != null)
            __params = __params.set('expenseId', expenseId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getExpenseById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param expenseId undefined
     */
    getExpenseById(expenseId) {
        return this.getExpenseByIdResponse(expenseId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getExpenseByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Vendor/getExpenseByApartmentId`, __body, {
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
    getExpenseByApartmentId(apartmentId) {
        return this.getExpenseByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param expense undefined
     */
    addExpenseResponse(expense) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = expense;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vendor/addExpense`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param expense undefined
     */
    addExpense(expense) {
        return this.addExpenseResponse(expense).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param expense undefined
     */
    updateExpenseResponse(expense) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = expense;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vendor/updateExpense`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param expense undefined
     */
    updateExpense(expense) {
        return this.updateExpenseResponse(expense).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `VendorService.DeleteExpenseParams` containing the following parameters:
     *
     * - `expenseId`:
     *
     * - `deleteBy`:
     */
    deleteExpenseResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.expenseId != null)
            __params = __params.set('expenseId', params.expenseId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Vendor/deleteExpense`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `VendorService.DeleteExpenseParams` containing the following parameters:
     *
     * - `expenseId`:
     *
     * - `deleteBy`:
     */
    deleteExpense(params) {
        return this.deleteExpenseResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
VendorService.getAllVendorsPath = '/api/Vendor/getAllVendors';
VendorService.getAllVendorsByStatusPath = '/api/Vendor/getAllVendorsByStatus';
VendorService.getVendorByIdPath = '/api/Vendor/getVendorById';
VendorService.getVendorByApartmentIdPath = '/api/Vendor/getVendorByApartmentId';
VendorService.getVendorByApartmentIdStatusPath = '/api/Vendor/getVendorByApartmentIdStatus';
VendorService.addVendorPath = '/api/Vendor/addVendor';
VendorService.updateVendorPath = '/api/Vendor/updateVendor';
VendorService.deleteVendorPath = '/api/Vendor/deleteVendor';
VendorService.getAllWaterVendorsPath = '/api/Vendor/getAllWaterVendors';
VendorService.getAllWaterVendorsByStatusPath = '/api/Vendor/getAllWaterVendorsByStatus';
VendorService.getWaterVendorByIdPath = '/api/Vendor/getWaterVendorById';
VendorService.addWaterVendorPath = '/api/Vendor/addWaterVendor';
VendorService.updateWaterVendorPath = '/api/Vendor/updateWaterVendor';
VendorService.deleteWaterVendorPath = '/api/Vendor/deleteWaterVendor';
VendorService.getAllExpensesPath = '/api/Vendor/getAllExpenses';
VendorService.getAllExpensesByStatusPath = '/api/Vendor/getAllExpensesByStatus';
VendorService.getExpenseByIdPath = '/api/Vendor/getExpenseById';
VendorService.getExpenseByApartmentIdPath = '/api/Vendor/getExpenseByApartmentId';
VendorService.addExpensePath = '/api/Vendor/addExpense';
VendorService.updateExpensePath = '/api/Vendor/updateExpense';
VendorService.deleteExpensePath = '/api/Vendor/deleteExpense';
VendorService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VendorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], VendorService);



/***/ })

}]);
//# sourceMappingURL=default~assets-assets-module~expense-tracker-expense-tracker-module~vendor-vendor-module-es2015.js.map