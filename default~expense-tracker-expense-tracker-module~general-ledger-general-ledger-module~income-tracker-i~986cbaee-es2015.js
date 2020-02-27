(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~expense-tracker-expense-tracker-module~general-ledger-general-ledger-module~income-tracker-i~986cbaee"],{

/***/ "./src/app/api/services/accounts.service.ts":
/*!**************************************************!*\
  !*** ./src/app/api/services/accounts.service.ts ***!
  \**************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

/* tslint:disable */





let AccountsService = class AccountsService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerCreditNoteByEmailSentParams` containing the following parameters:
     *
     * - `isEmailSent`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerCreditNoteByEmailSentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.isEmailSent != null)
            __params = __params.set('isEmailSent', params.isEmailSent.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerCreditNoteByEmailSent`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerCreditNoteByEmailSentParams` containing the following parameters:
     *
     * - `isEmailSent`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerCreditNoteByEmailSent(params) {
        return this.GetIncomeTrackerCreditNoteByEmailSentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerCreditNoteByDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerCreditNoteByDateRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerCreditNoteByDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerCreditNoteByDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerCreditNoteByDateRange(params) {
        return this.GetIncomeTrackerCreditNoteByDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerCreditNoteByDateRangeBlockUnitIDParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `aptBlockUnitId`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerCreditNoteByDateRangeBlockUnitIDResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.aptBlockUnitId != null)
            __params = __params.set('aptBlockUnitId', params.aptBlockUnitId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerCreditNoteByDateRangeBlockUnitID`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerCreditNoteByDateRangeBlockUnitIDParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `aptBlockUnitId`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerCreditNoteByDateRangeBlockUnitID(params) {
        return this.GetIncomeTrackerCreditNoteByDateRangeBlockUnitIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    GetIncomeTrackerReceiptsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerReceiptsByApartmentId`, __body, {
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
    GetIncomeTrackerReceiptsByApartmentId(apartmentId) {
        return this.GetIncomeTrackerReceiptsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerReceiptsByEmaiSentParams` containing the following parameters:
     *
     * - `isEmailSent`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerReceiptsByEmaiSentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.isEmailSent != null)
            __params = __params.set('isEmailSent', params.isEmailSent.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerReceiptsByEmaiSent`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerReceiptsByEmaiSentParams` containing the following parameters:
     *
     * - `isEmailSent`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerReceiptsByEmaiSent(params) {
        return this.GetIncomeTrackerReceiptsByEmaiSentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerReceiptsBySmsSentParams` containing the following parameters:
     *
     * - `isSmsSent`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerReceiptsBySmsSentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.isSmsSent != null)
            __params = __params.set('isSmsSent', params.isSmsSent.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerReceiptsBySmsSent`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerReceiptsBySmsSentParams` containing the following parameters:
     *
     * - `isSmsSent`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerReceiptsBySmsSent(params) {
        return this.GetIncomeTrackerReceiptsBySmsSentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerReceiptsByReciptNumRangeParams` containing the following parameters:
     *
     * - `toNum`:
     *
     * - `fromNum`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerReceiptsByReciptNumRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toNum != null)
            __params = __params.set('toNum', params.toNum.toString());
        if (params.fromNum != null)
            __params = __params.set('fromNum', params.fromNum.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerReceiptsByReciptNumRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerReceiptsByReciptNumRangeParams` containing the following parameters:
     *
     * - `toNum`:
     *
     * - `fromNum`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerReceiptsByReciptNumRange(params) {
        return this.GetIncomeTrackerReceiptsByReciptNumRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerReceiptsByDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerReceiptsByDateRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerReceiptsByDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerReceiptsByDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerReceiptsByDateRange(params) {
        return this.GetIncomeTrackerReceiptsByDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerReceiptsByDateRangeBlockunitIDParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `aptBlockUnitId`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerReceiptsByDateRangeBlockunitIDResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.aptBlockUnitId != null)
            __params = __params.set('aptBlockUnitId', params.aptBlockUnitId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerReceiptsByDateRangeBlockunitID`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerReceiptsByDateRangeBlockunitIDParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `aptBlockUnitId`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerReceiptsByDateRangeBlockunitID(params) {
        return this.GetIncomeTrackerReceiptsByDateRangeBlockunitIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    GetIncomeTrackerInvoicesByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerInvoicesByApartmentId`, __body, {
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
    GetIncomeTrackerInvoicesByApartmentId(apartmentId) {
        return this.GetIncomeTrackerInvoicesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByApartmentBlockIDParams` containing the following parameters:
     *
     * - `aptBlockUnitId`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesByApartmentBlockIDResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.aptBlockUnitId != null)
            __params = __params.set('aptBlockUnitId', params.aptBlockUnitId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerInvoicesByApartmentBlockID`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByApartmentBlockIDParams` containing the following parameters:
     *
     * - `aptBlockUnitId`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesByApartmentBlockID(params) {
        return this.GetIncomeTrackerInvoicesByApartmentBlockIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByEmailSentParams` containing the following parameters:
     *
     * - `isEmailSent`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesByEmailSentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.isEmailSent != null)
            __params = __params.set('isEmailSent', params.isEmailSent.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerInvoicesByEmailSent`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByEmailSentParams` containing the following parameters:
     *
     * - `isEmailSent`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesByEmailSent(params) {
        return this.GetIncomeTrackerInvoicesByEmailSentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesBySmsSentParams` containing the following parameters:
     *
     * - `isSmsSent`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesBySmsSentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.isSmsSent != null)
            __params = __params.set('isSmsSent', params.isSmsSent.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerInvoicesBySmsSent`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesBySmsSentParams` containing the following parameters:
     *
     * - `isSmsSent`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesBySmsSent(params) {
        return this.GetIncomeTrackerInvoicesBySmsSentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByInvoiceNumRangeParams` containing the following parameters:
     *
     * - `toNum`:
     *
     * - `fromNum`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesByInvoiceNumRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toNum != null)
            __params = __params.set('toNum', params.toNum.toString());
        if (params.fromNum != null)
            __params = __params.set('fromNum', params.fromNum.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerInvoicesByInvoiceNumRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByInvoiceNumRangeParams` containing the following parameters:
     *
     * - `toNum`:
     *
     * - `fromNum`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesByInvoiceNumRange(params) {
        return this.GetIncomeTrackerInvoicesByInvoiceNumRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesByDateRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerInvoicesByDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesByDateRange(params) {
        return this.GetIncomeTrackerInvoicesByDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByDateRangeBlockUnitIDParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `aptBlockUnitId`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesByDateRangeBlockUnitIDResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.aptBlockUnitId != null)
            __params = __params.set('aptBlockUnitId', params.aptBlockUnitId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerInvoicesByDateRangeBlockUnitID`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByDateRangeBlockUnitIDParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `aptBlockUnitId`:
     *
     * - `apartmentId`:
     */
    GetIncomeTrackerInvoicesByDateRangeBlockUnitID(params) {
        return this.GetIncomeTrackerInvoicesByDateRangeBlockUnitIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByAccountIdParams` containing the following parameters:
     *
     * - `collectionStatusId`:
     *
     * - `apartmentId`:
     *
     * - `accountId`:
     */
    GetIncomeTrackerInvoicesByAccountIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.collectionStatusId != null)
            __params = __params.set('collectionStatusId', params.collectionStatusId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        (params.accountId || []).forEach(val => { if (val != null)
            __params = __params.append('accountId', val.toString()); });
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerInvoicesByAccountId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerInvoicesByAccountIdParams` containing the following parameters:
     *
     * - `collectionStatusId`:
     *
     * - `apartmentId`:
     *
     * - `accountId`:
     */
    GetIncomeTrackerInvoicesByAccountId(params) {
        return this.GetIncomeTrackerInvoicesByAccountIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    GetIncomeTrackerDefaulterByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerDefaulterByApartmentId`, __body, {
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
    GetIncomeTrackerDefaulterByApartmentId(apartmentId) {
        return this.GetIncomeTrackerDefaulterByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerDefaulterByFiltersParams` containing the following parameters:
     *
     * - `toAmt`:
     *
     * - `postDateBefore`:
     *
     * - `invoiceStatusId`:
     *
     * - `fromAmt`:
     *
     * - `apartmentId`:
     *
     * - `accountId`:
     */
    GetIncomeTrackerDefaulterByFiltersResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toAmt != null)
            __params = __params.set('toAmt', params.toAmt.toString());
        if (params.postDateBefore != null)
            __params = __params.set('postDateBefore', params.postDateBefore.toString());
        if (params.invoiceStatusId != null)
            __params = __params.set('invoiceStatusId', params.invoiceStatusId.toString());
        if (params.fromAmt != null)
            __params = __params.set('fromAmt', params.fromAmt.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        (params.accountId || []).forEach(val => { if (val != null)
            __params = __params.append('accountId', val.toString()); });
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerDefaulterByFilters`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerDefaulterByFiltersParams` containing the following parameters:
     *
     * - `toAmt`:
     *
     * - `postDateBefore`:
     *
     * - `invoiceStatusId`:
     *
     * - `fromAmt`:
     *
     * - `apartmentId`:
     *
     * - `accountId`:
     */
    GetIncomeTrackerDefaulterByFilters(params) {
        return this.GetIncomeTrackerDefaulterByFiltersResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    GetExpenseTrackerInvoicesByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetExpenseTrackerInvoicesByApartmentId`, __body, {
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
    GetExpenseTrackerInvoicesByApartmentId(apartmentId) {
        return this.GetExpenseTrackerInvoicesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetExpenseTrackerInvoicesByApartmentIdVendorIdParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `apartmentId`:
     */
    GetExpenseTrackerInvoicesByApartmentIdVendorIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorId != null)
            __params = __params.set('vendorId', params.vendorId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetExpenseTrackerInvoicesByApartmentIdVendorId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetExpenseTrackerInvoicesByApartmentIdVendorIdParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `apartmentId`:
     */
    GetExpenseTrackerInvoicesByApartmentIdVendorId(params) {
        return this.GetExpenseTrackerInvoicesByApartmentIdVendorIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRangeParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorId != null)
            __params = __params.set('vendorId', params.vendorId.toString());
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRangeParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRange(params) {
        return this.GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetExpenseTrackerInvoicesByApartmentIdAccountIdParams` containing the following parameters:
     *
     * - `glAccountId`:
     *
     * - `apartmentId`:
     */
    GetExpenseTrackerInvoicesByApartmentIdAccountIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.glAccountId != null)
            __params = __params.set('glAccountId', params.glAccountId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetExpenseTrackerInvoicesByApartmentIdAccountId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetExpenseTrackerInvoicesByApartmentIdAccountIdParams` containing the following parameters:
     *
     * - `glAccountId`:
     *
     * - `apartmentId`:
     */
    GetExpenseTrackerInvoicesByApartmentIdAccountId(params) {
        return this.GetExpenseTrackerInvoicesByApartmentIdAccountIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.CheckNumberRangeAlreadyExistsByApartmentIdParams` containing the following parameters:
     *
     * - `newTo`:
     *
     * - `newFrom`:
     *
     * - `glDocTypeId`:
     *
     * - `apartmentId`:
     */
    CheckNumberRangeAlreadyExistsByApartmentIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.newTo != null)
            __params = __params.set('newTo', params.newTo.toString());
        if (params.newFrom != null)
            __params = __params.set('newFrom', params.newFrom.toString());
        if (params.glDocTypeId != null)
            __params = __params.set('glDocTypeId', params.glDocTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/CheckNumberRangeAlreadyExistsByApartmentId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.CheckNumberRangeAlreadyExistsByApartmentIdParams` containing the following parameters:
     *
     * - `newTo`:
     *
     * - `newFrom`:
     *
     * - `glDocTypeId`:
     *
     * - `apartmentId`:
     */
    CheckNumberRangeAlreadyExistsByApartmentId(params) {
        return this.CheckNumberRangeAlreadyExistsByApartmentIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllCustAdvanceResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustAdvance`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllCustAdvance() {
        return this.getAllCustAdvanceResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllCustAdvanceByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustAdvanceByStatus`, __body, {
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
    getAllCustAdvanceByStatus(active) {
        return this.getAllCustAdvanceByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getCustAdvanceByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustAdvanceByApartmentId`, __body, {
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
    getCustAdvanceByApartmentIdStatus(apartmentId) {
        return this.getCustAdvanceByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustAdvanceByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustAdvanceByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustAdvanceByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustAdvanceByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustAdvanceByApartmentIdStatus_1(params) {
        return this.getCustAdvanceByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustAdvanceByUserIdParams` containing the following parameters:
     *
     * - `userId`:
     *
     * - `apartmentId`:
     */
    getCustAdvanceByUserIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.userId != null)
            __params = __params.set('userId', params.userId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustAdvanceByUserId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustAdvanceByUserIdParams` containing the following parameters:
     *
     * - `userId`:
     *
     * - `apartmentId`:
     */
    getCustAdvanceByUserId(params) {
        return this.getCustAdvanceByUserIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custAdvanceId undefined
     */
    getCustAdvanceByIdResponse(custAdvanceId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (custAdvanceId != null)
            __params = __params.set('custAdvanceId', custAdvanceId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustAdvanceById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custAdvanceId undefined
     */
    getCustAdvanceById(custAdvanceId) {
        return this.getCustAdvanceByIdResponse(custAdvanceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custAdvance undefined
     */
    addCustAdvanceResponse(custAdvance) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custAdvance;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addCustAdvance`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custAdvance undefined
     */
    addCustAdvance(custAdvance) {
        return this.addCustAdvanceResponse(custAdvance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custAdvance undefined
     */
    updateCustAdvanceResponse(custAdvance) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custAdvance;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateCustAdvance`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custAdvance undefined
     */
    updateCustAdvance(custAdvance) {
        return this.updateCustAdvanceResponse(custAdvance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteCustAdvanceParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `custAdvanceId`:
     */
    deleteCustAdvanceResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.custAdvanceId != null)
            __params = __params.set('custAdvanceId', params.custAdvanceId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteCustAdvance`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteCustAdvanceParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `custAdvanceId`:
     */
    deleteCustAdvance(params) {
        return this.deleteCustAdvanceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllVendorAdvancesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorAdvances`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendorAdvances() {
        return this.getAllVendorAdvancesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorAdvanceByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorAdvanceByStatus`, __body, {
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
    getAllVendorAdvanceByStatus(active) {
        return this.getAllVendorAdvanceByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorAdvanceByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorAdvanceByApartmentId`, __body, {
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
    getVendorAdvanceByApartmentIdStatus(apartmentId) {
        return this.getVendorAdvanceByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorAdvanceByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorAdvanceByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorAdvanceByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorAdvanceByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorAdvanceByApartmentIdStatus_1(params) {
        return this.getVendorAdvanceByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorAdvanceByUserIdParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `apartmentId`:
     */
    getVendorAdvanceByUserIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorId != null)
            __params = __params.set('vendorId', params.vendorId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorAdvanceByUserId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorAdvanceByUserIdParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `apartmentId`:
     */
    getVendorAdvanceByUserId(params) {
        return this.getVendorAdvanceByUserIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorAdvanceId undefined
     */
    getVendorAdvanceByIdResponse(vendorAdvanceId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (vendorAdvanceId != null)
            __params = __params.set('vendorAdvanceId', vendorAdvanceId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorAdvanceById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorAdvanceId undefined
     */
    getVendorAdvanceById(vendorAdvanceId) {
        return this.getVendorAdvanceByIdResponse(vendorAdvanceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorAdvance undefined
     */
    addVendorAdvanceResponse(vendorAdvance) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorAdvance;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorAdvance`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorAdvance undefined
     */
    addVendorAdvance(vendorAdvance) {
        return this.addVendorAdvanceResponse(vendorAdvance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorAdvance undefined
     */
    updateVendorAdvanceResponse(vendorAdvance) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorAdvance;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateVendorAdvance`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorAdvance undefined
     */
    updateVendorAdvance(vendorAdvance) {
        return this.updateVendorAdvanceResponse(vendorAdvance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteVendorAdvanceParams` containing the following parameters:
     *
     * - `vendorAdvanceId`:
     *
     * - `deleteBy`:
     */
    deleteVendorAdvanceResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorAdvanceId != null)
            __params = __params.set('vendorAdvanceId', params.vendorAdvanceId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteVendorAdvance`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteVendorAdvanceParams` containing the following parameters:
     *
     * - `vendorAdvanceId`:
     *
     * - `deleteBy`:
     */
    deleteVendorAdvance(params) {
        return this.deleteVendorAdvanceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GenerateMaintenanceInvoiceByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    GenerateMaintenanceInvoiceByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GenerateMaintenanceInvoiceByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GenerateMaintenanceInvoiceByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    GenerateMaintenanceInvoiceByApartmentIdStatus(params) {
        return this.GenerateMaintenanceInvoiceByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetARAgingCollectionDueByUnitIdParams` containing the following parameters:
     *
     * - `unitId`:
     *
     * - `asOfDate`:
     *
     * - `ApartmentID`:
     */
    GetARAgingCollectionDueByUnitIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.unitId != null)
            __params = __params.set('unitId', params.unitId.toString());
        if (params.asOfDate != null)
            __params = __params.set('asOfDate', params.asOfDate.toString());
        if (params.ApartmentID != null)
            __params = __params.set('ApartmentID', params.ApartmentID.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetARAgingCollectionDueByUnitId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetARAgingCollectionDueByUnitIdParams` containing the following parameters:
     *
     * - `unitId`:
     *
     * - `asOfDate`:
     *
     * - `ApartmentID`:
     */
    GetARAgingCollectionDueByUnitId(params) {
        return this.GetARAgingCollectionDueByUnitIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetARAgingCollectionDueSummaryParams` containing the following parameters:
     *
     * - `type`:
     *
     * - `asOfDate`:
     *
     * - `ApartmentID`:
     *
     * - `AgeTo5`:
     *
     * - `AgeTo4`:
     *
     * - `AgeTo3`:
     *
     * - `AgeTo2`:
     *
     * - `AgeTo1`:
     *
     * - `AgeFrom5`:
     *
     * - `AgeFrom4`:
     *
     * - `AgeFrom3`:
     *
     * - `AgeFrom2`:
     *
     * - `AgeFrom1`:
     */
    GetARAgingCollectionDueSummaryResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.type != null)
            __params = __params.set('type', params.type.toString());
        if (params.asOfDate != null)
            __params = __params.set('asOfDate', params.asOfDate.toString());
        if (params.ApartmentID != null)
            __params = __params.set('ApartmentID', params.ApartmentID.toString());
        if (params.AgeTo5 != null)
            __params = __params.set('AgeTo5', params.AgeTo5.toString());
        if (params.AgeTo4 != null)
            __params = __params.set('AgeTo4', params.AgeTo4.toString());
        if (params.AgeTo3 != null)
            __params = __params.set('AgeTo3', params.AgeTo3.toString());
        if (params.AgeTo2 != null)
            __params = __params.set('AgeTo2', params.AgeTo2.toString());
        if (params.AgeTo1 != null)
            __params = __params.set('AgeTo1', params.AgeTo1.toString());
        if (params.AgeFrom5 != null)
            __params = __params.set('AgeFrom5', params.AgeFrom5.toString());
        if (params.AgeFrom4 != null)
            __params = __params.set('AgeFrom4', params.AgeFrom4.toString());
        if (params.AgeFrom3 != null)
            __params = __params.set('AgeFrom3', params.AgeFrom3.toString());
        if (params.AgeFrom2 != null)
            __params = __params.set('AgeFrom2', params.AgeFrom2.toString());
        if (params.AgeFrom1 != null)
            __params = __params.set('AgeFrom1', params.AgeFrom1.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetARAgingCollectionDueSummary`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetARAgingCollectionDueSummaryParams` containing the following parameters:
     *
     * - `type`:
     *
     * - `asOfDate`:
     *
     * - `ApartmentID`:
     *
     * - `AgeTo5`:
     *
     * - `AgeTo4`:
     *
     * - `AgeTo3`:
     *
     * - `AgeTo2`:
     *
     * - `AgeTo1`:
     *
     * - `AgeFrom5`:
     *
     * - `AgeFrom4`:
     *
     * - `AgeFrom3`:
     *
     * - `AgeFrom2`:
     *
     * - `AgeFrom1`:
     */
    GetARAgingCollectionDueSummary(params) {
        return this.GetARAgingCollectionDueSummaryResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getInvoiceGLAccountsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getInvoiceGLAccountsByApartmentId`, __body, {
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
    getInvoiceGLAccountsByApartmentIdStatus(apartmentId) {
        return this.getInvoiceGLAccountsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetInvoiceGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getInvoiceGLAccountsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getInvoiceGLAccountsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetInvoiceGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getInvoiceGLAccountsByApartmentIdStatus_1(params) {
        return this.getInvoiceGLAccountsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetInvoiceGLAccountsByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getInvoiceGLAccountsByInvoiceIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getInvoiceGLAccountsByInvoiceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetInvoiceGLAccountsByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getInvoiceGLAccountsByInvoiceId(params) {
        return this.getInvoiceGLAccountsByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetInvoiceGLAccountByIdParams` containing the following parameters:
     *
     * - `invoiceGlaccountId`:
     *
     * - `apartmentId`:
     */
    getInvoiceGLAccountByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceGlaccountId != null)
            __params = __params.set('invoiceGlaccountId', params.invoiceGlaccountId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getInvoiceGLAccountById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetInvoiceGLAccountByIdParams` containing the following parameters:
     *
     * - `invoiceGlaccountId`:
     *
     * - `apartmentId`:
     */
    getInvoiceGLAccountById(params) {
        return this.getInvoiceGLAccountByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoiceGlaccount undefined
     */
    addInvoiceGLAccountsResponse(invoiceGlaccount) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoiceGlaccount;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addInvoiceGLAccounts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoiceGlaccount undefined
     */
    addInvoiceGLAccounts(invoiceGlaccount) {
        return this.addInvoiceGLAccountsResponse(invoiceGlaccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoiceGlaccount undefined
     */
    updateInvoiceGLAccountsResponse(invoiceGlaccount) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoiceGlaccount;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateInvoiceGLAccounts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoiceGlaccount undefined
     */
    updateInvoiceGLAccounts(invoiceGlaccount) {
        return this.updateInvoiceGLAccountsResponse(invoiceGlaccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteInvoiceGLAccountsParams` containing the following parameters:
     *
     * - `invoiceGlaccountId`:
     *
     * - `deleteBy`:
     */
    deleteInvoiceGLAccountsResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceGlaccountId != null)
            __params = __params.set('invoiceGlaccountId', params.invoiceGlaccountId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteInvoiceGLAccounts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteInvoiceGLAccountsParams` containing the following parameters:
     *
     * - `invoiceGlaccountId`:
     *
     * - `deleteBy`:
     */
    deleteInvoiceGLAccounts(params) {
        return this.deleteInvoiceGLAccountsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllVendorInvoicesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorInvoices`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendorInvoices() {
        return this.getAllVendorInvoicesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorInvoicesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorInvoicesByStatus`, __body, {
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
    getAllVendorInvoicesByStatus(active) {
        return this.getAllVendorInvoicesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorInvoicesByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoicesByApartmentId`, __body, {
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
    getVendorInvoicesByApartmentId(apartmentId) {
        return this.getVendorInvoicesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoicesByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorInvoicesByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoicesByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoicesByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorInvoicesByApartmentIdStatus(params) {
        return this.getVendorInvoicesByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoicesByApartmentDueDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getVendorInvoicesByApartmentDueDateRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoicesByApartmentDueDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoicesByApartmentDueDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getVendorInvoicesByApartmentDueDateRange(params) {
        return this.getVendorInvoicesByApartmentDueDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceByVendorIdParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceByVendorIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorId != null)
            __params = __params.set('vendorId', params.vendorId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoiceByVendorId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceByVendorIdParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceByVendorId(params) {
        return this.getVendorInvoiceByVendorIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceByIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoiceById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceByIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceById(params) {
        return this.getVendorInvoiceByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoice undefined
     */
    addVendorInvoiceResponse(invoice) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoice;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoice undefined
     */
    addVendorInvoice(invoice) {
        return this.addVendorInvoiceResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoice undefined
     */
    updateVendorInvoiceResponse(invoice) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoice;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateVendorInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoice undefined
     */
    updateVendorInvoice(invoice) {
        return this.updateVendorInvoiceResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteVendorInvoiceParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `deleteBy`:
     */
    deleteVendorInvoiceResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteVendorInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteVendorInvoiceParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `deleteBy`:
     */
    deleteVendorInvoice(params) {
        return this.deleteVendorInvoiceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllVendorInvoiceAttachmentsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorInvoiceAttachments`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendorInvoiceAttachments() {
        return this.getAllVendorInvoiceAttachmentsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorInvoiceAttachmentsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorInvoiceAttachmentsByStatus`, __body, {
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
    getAllVendorInvoiceAttachmentsByStatus(active) {
        return this.getAllVendorInvoiceAttachmentsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorInvoiceAttachmentsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoiceAttachmentsByApartmentId`, __body, {
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
    getVendorInvoiceAttachmentsByApartmentId(apartmentId) {
        return this.getVendorInvoiceAttachmentsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceAttachmentsByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorInvoiceAttachmentsByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoiceAttachmentsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceAttachmentsByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorInvoiceAttachmentsByApartmentIdStatus(params) {
        return this.getVendorInvoiceAttachmentsByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceAttachmentByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceAttachmentByInvoiceIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoiceAttachmentByInvoiceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceAttachmentByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceAttachmentByInvoiceId(params) {
        return this.getVendorInvoiceAttachmentByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceAttachmentByIdParams` containing the following parameters:
     *
     * - `invoiceAttachmentId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceAttachmentByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceAttachmentId != null)
            __params = __params.set('invoiceAttachmentId', params.invoiceAttachmentId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoiceAttachmentById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceAttachmentByIdParams` containing the following parameters:
     *
     * - `invoiceAttachmentId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceAttachmentById(params) {
        return this.getVendorInvoiceAttachmentByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoice undefined
     */
    addVendorInvoiceAttachmentResponse(invoice) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoice;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorInvoiceAttachment`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoice undefined
     */
    addVendorInvoiceAttachment(invoice) {
        return this.addVendorInvoiceAttachmentResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoice undefined
     */
    updateVendorInvoiceAttachmentResponse(invoice) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoice;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateVendorInvoiceAttachment`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoice undefined
     */
    updateVendorInvoiceAttachment(invoice) {
        return this.updateVendorInvoiceAttachmentResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteVendorInvoiceAttachmentParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `deleteBy`:
     */
    deleteVendorInvoiceAttachmentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteVendorInvoiceAttachment`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteVendorInvoiceAttachmentParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `deleteBy`:
     */
    deleteVendorInvoiceAttachment(params) {
        return this.deleteVendorInvoiceAttachmentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllVendorInvoiceGLAccountsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorInvoiceGLAccounts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendorInvoiceGLAccounts() {
        return this.getAllVendorInvoiceGLAccountsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorInvoiceGLAccountsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorInvoiceGLAccountsByStatus`, __body, {
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
    getAllVendorInvoiceGLAccountsByStatus(active) {
        return this.getAllVendorInvoiceGLAccountsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorInvoiceGLAccountsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoiceGLAccountsByApartmentId`, __body, {
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
    getVendorInvoiceGLAccountsByApartmentIdStatus(apartmentId) {
        return this.getVendorInvoiceGLAccountsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorInvoiceGLAccountsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoiceGLAccountsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorInvoiceGLAccountsByApartmentIdStatus_1(params) {
        return this.getVendorInvoiceGLAccountsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceGLAccountsByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceGLAccountsByInvoiceIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoiceGLAccountsByInvoiceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceGLAccountsByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceGLAccountsByInvoiceId(params) {
        return this.getVendorInvoiceGLAccountsByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceGLAccountByIdParams` containing the following parameters:
     *
     * - `invoiceGlaccountId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceGLAccountByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceGlaccountId != null)
            __params = __params.set('invoiceGlaccountId', params.invoiceGlaccountId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorInvoiceGLAccountById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorInvoiceGLAccountByIdParams` containing the following parameters:
     *
     * - `invoiceGlaccountId`:
     *
     * - `apartmentId`:
     */
    getVendorInvoiceGLAccountById(params) {
        return this.getVendorInvoiceGLAccountByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoiceGlaccount undefined
     */
    addVendorInvoiceGLAccountsResponse(invoiceGlaccount) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoiceGlaccount;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorInvoiceGLAccounts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoiceGlaccount undefined
     */
    addVendorInvoiceGLAccounts(invoiceGlaccount) {
        return this.addVendorInvoiceGLAccountsResponse(invoiceGlaccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoiceGlaccount undefined
     */
    updateVendorInvoiceGLAccountsResponse(invoiceGlaccount) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoiceGlaccount;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateVendorInvoiceGLAccounts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoiceGlaccount undefined
     */
    updateVendorInvoiceGLAccounts(invoiceGlaccount) {
        return this.updateVendorInvoiceGLAccountsResponse(invoiceGlaccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteVendorInvoiceGLAccountsParams` containing the following parameters:
     *
     * - `invoiceGlaccountId`:
     *
     * - `deleteBy`:
     */
    deleteVendorInvoiceGLAccountsResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceGlaccountId != null)
            __params = __params.set('invoiceGlaccountId', params.invoiceGlaccountId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteVendorInvoiceGLAccounts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteVendorInvoiceGLAccountsParams` containing the following parameters:
     *
     * - `invoiceGlaccountId`:
     *
     * - `deleteBy`:
     */
    deleteVendorInvoiceGLAccounts(params) {
        return this.deleteVendorInvoiceGLAccountsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllVendorPaymentsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorPayments`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendorPayments() {
        return this.getAllVendorPaymentsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorPaymentsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorPaymentsByStatus`, __body, {
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
    getAllVendorPaymentsByStatus(active) {
        return this.getAllVendorPaymentsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorPaymentsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorPaymentsByApartmentId`, __body, {
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
    getVendorPaymentsByApartmentId(apartmentId) {
        return this.getVendorPaymentsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentsByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorPaymentsByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorPaymentsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentsByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorPaymentsByApartmentIdStatus(params) {
        return this.getVendorPaymentsByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentByInstrumentIdParams` containing the following parameters:
     *
     * - `instrumentId`:
     *
     * - `apartmentId`:
     */
    getVendorPaymentByInstrumentIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.instrumentId != null)
            __params = __params.set('instrumentId', params.instrumentId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorPaymentByInstrumentId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentByInstrumentIdParams` containing the following parameters:
     *
     * - `instrumentId`:
     *
     * - `apartmentId`:
     */
    getVendorPaymentByInstrumentId(params) {
        return this.getVendorPaymentByInstrumentIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentByPayeeIdParams` containing the following parameters:
     *
     * - `payeeId`:
     *
     * - `apartmentId`:
     */
    getVendorPaymentByPayeeIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.payeeId != null)
            __params = __params.set('payeeId', params.payeeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorPaymentByPayeeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentByPayeeIdParams` containing the following parameters:
     *
     * - `payeeId`:
     *
     * - `apartmentId`:
     */
    getVendorPaymentByPayeeId(params) {
        return this.getVendorPaymentByPayeeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentByVendorPaymentAccountTypeIdParams` containing the following parameters:
     *
     * - `vendorPaymentAccountTypeId`:
     *
     * - `apartmentId`:
     */
    getVendorPaymentByVendorPaymentAccountTypeIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorPaymentAccountTypeId != null)
            __params = __params.set('vendorPaymentAccountTypeId', params.vendorPaymentAccountTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorPaymentByVendorPaymentAccountTypeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentByVendorPaymentAccountTypeIdParams` containing the following parameters:
     *
     * - `vendorPaymentAccountTypeId`:
     *
     * - `apartmentId`:
     */
    getVendorPaymentByVendorPaymentAccountTypeId(params) {
        return this.getVendorPaymentByVendorPaymentAccountTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentByIdParams` containing the following parameters:
     *
     * - `vendorPaymentId`:
     *
     * - `apartmentId`:
     */
    getVendorPaymentByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorPaymentId != null)
            __params = __params.set('vendorPaymentId', params.vendorPaymentId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorPaymentById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentByIdParams` containing the following parameters:
     *
     * - `vendorPaymentId`:
     *
     * - `apartmentId`:
     */
    getVendorPaymentById(params) {
        return this.getVendorPaymentByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param payment undefined
     */
    addVendorPaymentResponse(payment) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = payment;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorPayment`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param payment undefined
     */
    addVendorPayment(payment) {
        return this.addVendorPaymentResponse(payment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoice undefined
     */
    updateVendorPaymentResponse(invoice) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoice;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateVendorPayment`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoice undefined
     */
    updateVendorPayment(invoice) {
        return this.updateVendorPaymentResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteVendorPaymentParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `deleteBy`:
     */
    deleteVendorPaymentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteVendorPayment`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteVendorPaymentParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `deleteBy`:
     */
    deleteVendorPayment(params) {
        return this.deleteVendorPaymentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllVendorPaymentInvoicesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorPaymentInvoices`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendorPaymentInvoices() {
        return this.getAllVendorPaymentInvoicesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorPaymentInvoicesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorPaymentInvoicesByStatus`, __body, {
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
    getAllVendorPaymentInvoicesByStatus(active) {
        return this.getAllVendorPaymentInvoicesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorPaymentInvoicesByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorPaymentInvoicesByApartmentId`, __body, {
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
    getVendorPaymentInvoicesByApartmentIdStatus(apartmentId) {
        return this.getVendorPaymentInvoicesByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentInvoicesByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorPaymentInvoicesByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorPaymentInvoicesByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentInvoicesByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorPaymentInvoicesByApartmentIdStatus_1(params) {
        return this.getVendorPaymentInvoicesByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentInvoiceByVendorPaymentInvoiceIdParams` containing the following parameters:
     *
     * - `vendorInvoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorPaymentInvoiceByVendorPaymentInvoiceIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorInvoiceId != null)
            __params = __params.set('vendorInvoiceId', params.vendorInvoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorPaymentInvoiceByVendorPaymentInvoiceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorPaymentInvoiceByVendorPaymentInvoiceIdParams` containing the following parameters:
     *
     * - `vendorInvoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorPaymentInvoiceByVendorPaymentInvoiceId(params) {
        return this.getVendorPaymentInvoiceByVendorPaymentInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorPaymentInvoice undefined
     */
    addVendorPaymentInvoiceResponse(vendorPaymentInvoice) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorPaymentInvoice;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorPaymentInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorPaymentInvoice undefined
     */
    addVendorPaymentInvoice(vendorPaymentInvoice) {
        return this.addVendorPaymentInvoiceResponse(vendorPaymentInvoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorPaymentInvoice undefined
     */
    updateVendorPaymentInvoiceResponse(vendorPaymentInvoice) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorPaymentInvoice;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateVendorPaymentInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorPaymentInvoice undefined
     */
    updateVendorPaymentInvoice(vendorPaymentInvoice) {
        return this.updateVendorPaymentInvoiceResponse(vendorPaymentInvoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteVendorPaymentInvoiceParams` containing the following parameters:
     *
     * - `vendorPaymentInvoiceId`:
     *
     * - `deleteBy`:
     */
    deleteVendorPaymentInvoiceResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorPaymentInvoiceId != null)
            __params = __params.set('vendorPaymentInvoiceId', params.vendorPaymentInvoiceId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteVendorPaymentInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteVendorPaymentInvoiceParams` containing the following parameters:
     *
     * - `vendorPaymentInvoiceId`:
     *
     * - `deleteBy`:
     */
    deleteVendorPaymentInvoice(params) {
        return this.deleteVendorPaymentInvoiceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllVendorCreditNotesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorCreditNotes`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendorCreditNotes() {
        return this.getAllVendorCreditNotesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorCreditNotesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorCreditNotesByStatus`, __body, {
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
    getAllVendorCreditNotesByStatus(active) {
        return this.getAllVendorCreditNotesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorCreditNotesByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorCreditNotesByApartmentId`, __body, {
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
    getVendorCreditNotesByApartmentIdStatus(apartmentId) {
        return this.getVendorCreditNotesByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorCreditNotesByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorCreditNotesByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorCreditNotesByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorCreditNotesByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorCreditNotesByApartmentIdStatus_1(params) {
        return this.getVendorCreditNotesByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorCreditNotesByPaymentIdParams` containing the following parameters:
     *
     * - `paymentId`:
     *
     * - `apartmentId`:
     */
    getVendorCreditNotesByPaymentIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.paymentId != null)
            __params = __params.set('paymentId', params.paymentId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorCreditNotesByPaymentId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorCreditNotesByPaymentIdParams` containing the following parameters:
     *
     * - `paymentId`:
     *
     * - `apartmentId`:
     */
    getVendorCreditNotesByPaymentId(params) {
        return this.getVendorCreditNotesByPaymentIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorCreditNotesByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorCreditNotesByInvoiceIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorCreditNotesByInvoiceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorCreditNotesByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorCreditNotesByInvoiceId(params) {
        return this.getVendorCreditNotesByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorCreditNoteByIdParams` containing the following parameters:
     *
     * - `creditNoteId`:
     *
     * - `apartmentId`:
     */
    getVendorCreditNoteByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.creditNoteId != null)
            __params = __params.set('creditNoteId', params.creditNoteId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorCreditNoteById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorCreditNoteByIdParams` containing the following parameters:
     *
     * - `creditNoteId`:
     *
     * - `apartmentId`:
     */
    getVendorCreditNoteById(params) {
        return this.getVendorCreditNoteByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param creditNote undefined
     */
    addVendorCreditNoteResponse(creditNote) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = creditNote;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorCreditNote`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param creditNote undefined
     */
    addVendorCreditNote(creditNote) {
        return this.addVendorCreditNoteResponse(creditNote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param creditNote undefined
     */
    updateVendorCreditNoteResponse(creditNote) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = creditNote;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateVendorCreditNote`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param creditNote undefined
     */
    updateVendorCreditNote(creditNote) {
        return this.updateVendorCreditNoteResponse(creditNote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteVendorCreditNoteParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `creditNoteId`:
     */
    deleteVendorCreditNoteResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.creditNoteId != null)
            __params = __params.set('creditNoteId', params.creditNoteId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteVendorCreditNote`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteVendorCreditNoteParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `creditNoteId`:
     */
    deleteVendorCreditNote(params) {
        return this.deleteVendorCreditNoteResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllVendorTransReversalsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorTransReversals`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendorTransReversals() {
        return this.getAllVendorTransReversalsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorTransReversalsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorTransReversalsByStatus`, __body, {
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
    getAllVendorTransReversalsByStatus(active) {
        return this.getAllVendorTransReversalsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorTransReversalsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorTransReversalsByApartmentId`, __body, {
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
    getVendorTransReversalsByApartmentIdStatus(apartmentId) {
        return this.getVendorTransReversalsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorTransReversalsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorTransReversalsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorTransReversalsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorTransReversalsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorTransReversalsByApartmentIdStatus_1(params) {
        return this.getVendorTransReversalsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorTransReversalsByVendorPaymentIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getVendorTransReversalsByVendorPaymentIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.collectionId != null)
            __params = __params.set('collectionId', params.collectionId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorTransReversalsByVendorPaymentId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorTransReversalsByVendorPaymentIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getVendorTransReversalsByVendorPaymentId(params) {
        return this.getVendorTransReversalsByVendorPaymentIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorTransReversalsByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorTransReversalsByInvoiceIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorTransReversalsByInvoiceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorTransReversalsByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getVendorTransReversalsByInvoiceId(params) {
        return this.getVendorTransReversalsByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorTransReversalByIdParams` containing the following parameters:
     *
     * - `custTransReversalId`:
     *
     * - `apartmentId`:
     */
    getVendorTransReversalByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.custTransReversalId != null)
            __params = __params.set('custTransReversalId', params.custTransReversalId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorTransReversalById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorTransReversalByIdParams` containing the following parameters:
     *
     * - `custTransReversalId`:
     *
     * - `apartmentId`:
     */
    getVendorTransReversalById(params) {
        return this.getVendorTransReversalByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorTransReversal undefined
     */
    addVendorTransReversalResponse(vendorTransReversal) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorTransReversal;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorTransReversal`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorTransReversal undefined
     */
    addVendorTransReversal(vendorTransReversal) {
        return this.addVendorTransReversalResponse(vendorTransReversal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custTransReversal undefined
     */
    updateVendorTransReversalResponse(custTransReversal) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custTransReversal;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateVendorTransReversal`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custTransReversal undefined
     */
    updateVendorTransReversal(custTransReversal) {
        return this.updateVendorTransReversalResponse(custTransReversal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteVendorTransReversalParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `VendorTransReversalId`:
     */
    deleteVendorTransReversalResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.VendorTransReversalId != null)
            __params = __params.set('VendorTransReversalId', params.VendorTransReversalId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteVendorTransReversal`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteVendorTransReversalParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `VendorTransReversalId`:
     */
    deleteVendorTransReversal(params) {
        return this.deleteVendorTransReversalResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    GetIncomeTrackerSubLedgersByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerSubLedgersByApartmentId`, __body, {
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
    GetIncomeTrackerSubLedgersByApartmentId(apartmentId) {
        return this.GetIncomeTrackerSubLedgersByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerSubLedgersByApartmentBlockStartNameParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockStartChar`:
     */
    GetIncomeTrackerSubLedgersByApartmentBlockStartNameResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.apartmentBlockStartChar != null)
            __params = __params.set('apartmentBlockStartChar', params.apartmentBlockStartChar.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerSubLedgersByApartmentBlockStartName`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerSubLedgersByApartmentBlockStartNameParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockStartChar`:
     */
    GetIncomeTrackerSubLedgersByApartmentBlockStartName(params) {
        return this.GetIncomeTrackerSubLedgersByApartmentBlockStartNameResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    GetIncomeTrackerSubLedgerPrintReceiptsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerSubLedgerPrintReceiptsByApartmentId`, __body, {
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
    GetIncomeTrackerSubLedgerPrintReceiptsByApartmentId(apartmentId) {
        return this.GetIncomeTrackerSubLedgerPrintReceiptsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param ApartmentBlockUnitID undefined
     */
    GetAccountHistoryByApartmentUnitIdResponse(ApartmentBlockUnitID) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (ApartmentBlockUnitID != null)
            __params = __params.set('ApartmentBlockUnitID', ApartmentBlockUnitID.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetAccountHistoryByApartmentUnitId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param ApartmentBlockUnitID undefined
     */
    GetAccountHistoryByApartmentUnitId(ApartmentBlockUnitID) {
        return this.GetAccountHistoryByApartmentUnitIdResponse(ApartmentBlockUnitID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param VendorID undefined
     */
    GetVendorPaymenntHistoryByIdResponse(VendorID) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (VendorID != null)
            __params = __params.set('VendorID', VendorID.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetVendorPaymenntHistoryById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param VendorID undefined
     */
    GetVendorPaymenntHistoryById(VendorID) {
        return this.GetVendorPaymenntHistoryByIdResponse(VendorID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGLAccountTransactionsByIDParams` containing the following parameters:
     *
     * - `Todate`:
     *
     * - `GLAccountId`:
     *
     * - `FromDate`:
     *
     * - `ApartmentId`:
     */
    GetGLAccountTransactionsByIDResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.Todate != null)
            __params = __params.set('Todate', params.Todate.toString());
        if (params.GLAccountId != null)
            __params = __params.set('GLAccountId', params.GLAccountId.toString());
        if (params.FromDate != null)
            __params = __params.set('FromDate', params.FromDate.toString());
        if (params.ApartmentId != null)
            __params = __params.set('ApartmentId', params.ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetGLAccountTransactionsByID`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGLAccountTransactionsByIDParams` containing the following parameters:
     *
     * - `Todate`:
     *
     * - `GLAccountId`:
     *
     * - `FromDate`:
     *
     * - `ApartmentId`:
     */
    GetGLAccountTransactionsByID(params) {
        return this.GetGLAccountTransactionsByIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetTrialBalanceByDateParams` containing the following parameters:
     *
     * - `ToDate`:
     *
     * - `FromDate`:
     *
     * - `ApartmentId`:
     */
    GetTrialBalanceByDateResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.ToDate != null)
            __params = __params.set('ToDate', params.ToDate.toString());
        if (params.FromDate != null)
            __params = __params.set('FromDate', params.FromDate.toString());
        if (params.ApartmentId != null)
            __params = __params.set('ApartmentId', params.ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetTrialBalanceByDate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetTrialBalanceByDateParams` containing the following parameters:
     *
     * - `ToDate`:
     *
     * - `FromDate`:
     *
     * - `ApartmentId`:
     */
    GetTrialBalanceByDate(params) {
        return this.GetTrialBalanceByDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGLCreditDebitTransactionsParams` containing the following parameters:
     *
     * - `ToDate`:
     *
     * - `GlAccountTypeID`:
     *
     * - `GLGroupID`:
     *
     * - `GLAccountId`:
     *
     * - `FromDate`:
     *
     * - `ApartmentId`:
     */
    GetGLCreditDebitTransactionsResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.ToDate != null)
            __params = __params.set('ToDate', params.ToDate.toString());
        if (params.GlAccountTypeID != null)
            __params = __params.set('GlAccountTypeID', params.GlAccountTypeID.toString());
        if (params.GLGroupID != null)
            __params = __params.set('GLGroupID', params.GLGroupID.toString());
        if (params.GLAccountId != null)
            __params = __params.set('GLAccountId', params.GLAccountId.toString());
        if (params.FromDate != null)
            __params = __params.set('FromDate', params.FromDate.toString());
        if (params.ApartmentId != null)
            __params = __params.set('ApartmentId', params.ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetGLCreditDebitTransactions`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGLCreditDebitTransactionsParams` containing the following parameters:
     *
     * - `ToDate`:
     *
     * - `GlAccountTypeID`:
     *
     * - `GLGroupID`:
     *
     * - `GLAccountId`:
     *
     * - `FromDate`:
     *
     * - `ApartmentId`:
     */
    GetGLCreditDebitTransactions(params) {
        return this.GetGLCreditDebitTransactionsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitId(params) {
        return this.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRange(params) {
        return this.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    GetIncomeTrackerCreditNoteResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/GetIncomeTrackerCreditNote`, __body, {
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
    GetIncomeTrackerCreditNote(apartmentId) {
        return this.GetIncomeTrackerCreditNoteResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorGltransactions undefined
     */
    addVendorGltransactionListResponse(vendorGltransactions) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorGltransactions;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorGltransactionList`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorGltransactions undefined
     */
    addVendorGltransactionList(vendorGltransactions) {
        return this.addVendorGltransactionListResponse(vendorGltransactions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorGltransaction undefined
     */
    updateVendorGltransactionResponse(vendorGltransaction) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorGltransaction;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateVendorGltransaction`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorGltransaction undefined
     */
    updateVendorGltransaction(vendorGltransaction) {
        return this.updateVendorGltransactionResponse(vendorGltransaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteVendorGltransactionParams` containing the following parameters:
     *
     * - `vendorGltransactionId`:
     *
     * - `deleteBy`:
     */
    deleteVendorGltransactionResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorGltransactionId != null)
            __params = __params.set('vendorGltransactionId', params.vendorGltransactionId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteVendorGltransaction`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteVendorGltransactionParams` containing the following parameters:
     *
     * - `vendorGltransactionId`:
     *
     * - `deleteBy`:
     */
    deleteVendorGltransaction(params) {
        return this.deleteVendorGltransactionResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllCreditNotesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCreditNotes`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllCreditNotes() {
        return this.getAllCreditNotesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllCreditNotesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCreditNotesByStatus`, __body, {
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
    getAllCreditNotesByStatus(active) {
        return this.getAllCreditNotesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getCreditNotesByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCreditNotesByApartmentId`, __body, {
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
    getCreditNotesByApartmentIdStatus(apartmentId) {
        return this.getCreditNotesByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCreditNotesByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCreditNotesByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCreditNotesByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCreditNotesByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCreditNotesByApartmentIdStatus_1(params) {
        return this.getCreditNotesByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCreditNotesByCollectionIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getCreditNotesByCollectionIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.collectionId != null)
            __params = __params.set('collectionId', params.collectionId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCreditNotesByCollectionId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCreditNotesByCollectionIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getCreditNotesByCollectionId(params) {
        return this.getCreditNotesByCollectionIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCreditNotesByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getCreditNotesByInvoiceIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCreditNotesByInvoiceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCreditNotesByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getCreditNotesByInvoiceId(params) {
        return this.getCreditNotesByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCreditNoteByIdParams` containing the following parameters:
     *
     * - `creditNoteId`:
     *
     * - `apartmentId`:
     */
    getCreditNoteByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.creditNoteId != null)
            __params = __params.set('creditNoteId', params.creditNoteId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCreditNoteById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCreditNoteByIdParams` containing the following parameters:
     *
     * - `creditNoteId`:
     *
     * - `apartmentId`:
     */
    getCreditNoteById(params) {
        return this.getCreditNoteByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param creditNote undefined
     */
    addCreditNoteResponse(creditNote) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = creditNote;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addCreditNote`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param creditNote undefined
     */
    addCreditNote(creditNote) {
        return this.addCreditNoteResponse(creditNote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param creditNote undefined
     */
    updateCreditNoteResponse(creditNote) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = creditNote;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateCreditNote`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param creditNote undefined
     */
    updateCreditNote(creditNote) {
        return this.updateCreditNoteResponse(creditNote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteCreditNoteParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `creditNoteId`:
     */
    deleteCreditNoteResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.creditNoteId != null)
            __params = __params.set('creditNoteId', params.creditNoteId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteCreditNote`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteCreditNoteParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `creditNoteId`:
     */
    deleteCreditNote(params) {
        return this.deleteCreditNoteResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllCustTransReversalsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustTransReversals`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllCustTransReversals() {
        return this.getAllCustTransReversalsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllCustTransReversalsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustTransReversalsByStatus`, __body, {
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
    getAllCustTransReversalsByStatus(active) {
        return this.getAllCustTransReversalsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getCustTransReversalsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustTransReversalsByApartmentId`, __body, {
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
    getCustTransReversalsByApartmentIdStatus(apartmentId) {
        return this.getCustTransReversalsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustTransReversalsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustTransReversalsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustTransReversalsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustTransReversalsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustTransReversalsByApartmentIdStatus_1(params) {
        return this.getCustTransReversalsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustTransReversalsByCollectionIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getCustTransReversalsByCollectionIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.collectionId != null)
            __params = __params.set('collectionId', params.collectionId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustTransReversalsByCollectionId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustTransReversalsByCollectionIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getCustTransReversalsByCollectionId(params) {
        return this.getCustTransReversalsByCollectionIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustTransReversalsByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getCustTransReversalsByInvoiceIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustTransReversalsByInvoiceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustTransReversalsByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getCustTransReversalsByInvoiceId(params) {
        return this.getCustTransReversalsByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustTransReversalByIdParams` containing the following parameters:
     *
     * - `custTransReversalId`:
     *
     * - `apartmentId`:
     */
    getCustTransReversalByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.custTransReversalId != null)
            __params = __params.set('custTransReversalId', params.custTransReversalId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustTransReversalById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustTransReversalByIdParams` containing the following parameters:
     *
     * - `custTransReversalId`:
     *
     * - `apartmentId`:
     */
    getCustTransReversalById(params) {
        return this.getCustTransReversalByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custTransReversal undefined
     */
    addCustTransReversalResponse(custTransReversal) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custTransReversal;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addCustTransReversal`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custTransReversal undefined
     */
    addCustTransReversal(custTransReversal) {
        return this.addCustTransReversalResponse(custTransReversal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custTransReversal undefined
     */
    updateCustTransReversalResponse(custTransReversal) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custTransReversal;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateCustTransReversal`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custTransReversal undefined
     */
    updateCustTransReversal(custTransReversal) {
        return this.updateCustTransReversalResponse(custTransReversal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteCustTransReversalParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `CustTransReversalId`:
     */
    deleteCustTransReversalResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.CustTransReversalId != null)
            __params = __params.set('CustTransReversalId', params.CustTransReversalId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteCustTransReversal`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteCustTransReversalParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `CustTransReversalId`:
     */
    deleteCustTransReversal(params) {
        return this.deleteCustTransReversalResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllCustChequeDetailsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustChequeDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllCustChequeDetails() {
        return this.getAllCustChequeDetailsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllCustChequeDetailssByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustChequeDetailssByStatus`, __body, {
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
    getAllCustChequeDetailssByStatus(active) {
        return this.getAllCustChequeDetailssByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getCustChequeDetailsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustChequeDetailsByApartmentId`, __body, {
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
    getCustChequeDetailsByApartmentIdStatus(apartmentId) {
        return this.getCustChequeDetailsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustChequeDetailsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustChequeDetailsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustChequeDetailsByApartmentIdStatus_1(params) {
        return this.getCustChequeDetailsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailsByCollectionIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailsByCollectionIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.collectionId != null)
            __params = __params.set('collectionId', params.collectionId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustChequeDetailsByCollectionId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailsByCollectionIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailsByCollectionId(params) {
        return this.getCustChequeDetailsByCollectionIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByChequeNoParams` containing the following parameters:
     *
     * - `chequeNo`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssByChequeNoResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.chequeNo != null)
            __params = __params.set('chequeNo', params.chequeNo.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustChequeDetailssByChequeNo`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByChequeNoParams` containing the following parameters:
     *
     * - `chequeNo`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssByChequeNo(params) {
        return this.getCustChequeDetailssByChequeNoResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByApartmentChequeStatusIdParams` containing the following parameters:
     *
     * - `chequeStatusId`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssByApartmentChequeStatusIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.chequeStatusId != null)
            __params = __params.set('chequeStatusId', params.chequeStatusId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustChequeDetailssByApartmentChequeStatusId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByApartmentChequeStatusIdParams` containing the following parameters:
     *
     * - `chequeStatusId`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssByApartmentChequeStatusId(params) {
        return this.getCustChequeDetailssByApartmentChequeStatusIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByChequeStatusIdParams` containing the following parameters:
     *
     * - `chequeStatusId`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssByChequeStatusIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.chequeStatusId != null)
            __params = __params.set('chequeStatusId', params.chequeStatusId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustChequeDetailssByChequeStatusId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByChequeStatusIdParams` containing the following parameters:
     *
     * - `chequeStatusId`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssByChequeStatusId(params) {
        return this.getCustChequeDetailssByChequeStatusIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByChequeStatusId_1Params` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssByChequeStatusId_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustChequeDetailssByChequeDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByChequeStatusId_1Params` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssByChequeStatusId_1(params) {
        return this.getCustChequeDetailssByChequeStatusId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByDepositDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssByDepositDateRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustChequeDetailssByDepositDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByDepositDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssByDepositDateRange(params) {
        return this.getCustChequeDetailssByDepositDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByIdParams` containing the following parameters:
     *
     * - `custChequeDetailsId`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.custChequeDetailsId != null)
            __params = __params.set('custChequeDetailsId', params.custChequeDetailsId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustChequeDetailssById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustChequeDetailssByIdParams` containing the following parameters:
     *
     * - `custChequeDetailsId`:
     *
     * - `apartmentId`:
     */
    getCustChequeDetailssById(params) {
        return this.getCustChequeDetailssByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custChequeDetails undefined
     */
    addCustChequeDetailsResponse(custChequeDetails) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custChequeDetails;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addCustChequeDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custChequeDetails undefined
     */
    addCustChequeDetails(custChequeDetails) {
        return this.addCustChequeDetailsResponse(custChequeDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custChequeDetails undefined
     */
    updateCustChequeDetailsResponse(custChequeDetails) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custChequeDetails;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateCustChequeDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custChequeDetails undefined
     */
    updateCustChequeDetails(custChequeDetails) {
        return this.updateCustChequeDetailsResponse(custChequeDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteCustChequeDetailsParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `CustChequeDetailsId`:
     */
    deleteCustChequeDetailsResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.CustChequeDetailsId != null)
            __params = __params.set('CustChequeDetailsId', params.CustChequeDetailsId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteCustChequeDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteCustChequeDetailsParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `CustChequeDetailsId`:
     */
    deleteCustChequeDetails(params) {
        return this.deleteCustChequeDetailsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllVendorChequeDetailsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorChequeDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendorChequeDetails() {
        return this.getAllVendorChequeDetailsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorChequeDetailssByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorChequeDetailssByStatus`, __body, {
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
    getAllVendorChequeDetailssByStatus(active) {
        return this.getAllVendorChequeDetailssByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorChequeDetailsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorChequeDetailsByApartmentId`, __body, {
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
    getVendorChequeDetailsByApartmentIdStatus(apartmentId) {
        return this.getVendorChequeDetailsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorChequeDetailsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorChequeDetailsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorChequeDetailsByApartmentIdStatus_1(params) {
        return this.getVendorChequeDetailsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailsByVendorIdParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailsByVendorIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorId != null)
            __params = __params.set('vendorId', params.vendorId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorChequeDetailsByVendorId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailsByVendorIdParams` containing the following parameters:
     *
     * - `vendorId`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailsByVendorId(params) {
        return this.getVendorChequeDetailsByVendorIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailssByChequeNoParams` containing the following parameters:
     *
     * - `chequeNo`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailssByChequeNoResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.chequeNo != null)
            __params = __params.set('chequeNo', params.chequeNo.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorChequeDetailssByChequeNo`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailssByChequeNoParams` containing the following parameters:
     *
     * - `chequeNo`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailssByChequeNo(params) {
        return this.getVendorChequeDetailssByChequeNoResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailssByApartmentChequeStatusIdParams` containing the following parameters:
     *
     * - `chequeStatusId`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailssByApartmentChequeStatusIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.chequeStatusId != null)
            __params = __params.set('chequeStatusId', params.chequeStatusId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorChequeDetailssByApartmentChequeStatusId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailssByApartmentChequeStatusIdParams` containing the following parameters:
     *
     * - `chequeStatusId`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailssByApartmentChequeStatusId(params) {
        return this.getVendorChequeDetailssByApartmentChequeStatusIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailssByChequeStatusIdParams` containing the following parameters:
     *
     * - `chequeStatusId`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailssByChequeStatusIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.chequeStatusId != null)
            __params = __params.set('chequeStatusId', params.chequeStatusId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorChequeDetailssByChequeStatusId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailssByChequeStatusIdParams` containing the following parameters:
     *
     * - `chequeStatusId`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailssByChequeStatusId(params) {
        return this.getVendorChequeDetailssByChequeStatusIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailssByChequeStatusId_1Params` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailssByChequeStatusId_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorChequeDetailssByChequeDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailssByChequeStatusId_1Params` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailssByChequeStatusId_1(params) {
        return this.getVendorChequeDetailssByChequeStatusId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailssByGivenDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailssByGivenDateRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorChequeDetailssByGivenDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailssByGivenDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailssByGivenDateRange(params) {
        return this.getVendorChequeDetailssByGivenDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailsByIdParams` containing the following parameters:
     *
     * - `vendorChequeDetailsId`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailsByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorChequeDetailsId != null)
            __params = __params.set('vendorChequeDetailsId', params.vendorChequeDetailsId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorChequeDetailsById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorChequeDetailsByIdParams` containing the following parameters:
     *
     * - `vendorChequeDetailsId`:
     *
     * - `apartmentId`:
     */
    getVendorChequeDetailsById(params) {
        return this.getVendorChequeDetailsByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorChequeDetails undefined
     */
    addvendorChequeDetailsResponse(vendorChequeDetails) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorChequeDetails;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorChequeDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorChequeDetails undefined
     */
    addvendorChequeDetails(vendorChequeDetails) {
        return this.addvendorChequeDetailsResponse(vendorChequeDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorChequeDetails undefined
     */
    updatevendorChequeDetailsResponse(vendorChequeDetails) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorChequeDetails;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updatevendorChequeDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorChequeDetails undefined
     */
    updatevendorChequeDetails(vendorChequeDetails) {
        return this.updatevendorChequeDetailsResponse(vendorChequeDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeletevendorChequeDetailsParams` containing the following parameters:
     *
     * - `vendorChequeDetailsId`:
     *
     * - `deleteBy`:
     */
    deletevendorChequeDetailsResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorChequeDetailsId != null)
            __params = __params.set('vendorChequeDetailsId', params.vendorChequeDetailsId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deletevendorChequeDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeletevendorChequeDetailsParams` containing the following parameters:
     *
     * - `vendorChequeDetailsId`:
     *
     * - `deleteBy`:
     */
    deletevendorChequeDetails(params) {
        return this.deletevendorChequeDetailsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllGLTotalResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllGLTotal`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllGLTotal() {
        return this.getAllGLTotalResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllGLTotalsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllGLTotalsByStatus`, __body, {
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
    getAllGLTotalsByStatus(active) {
        return this.getAllGLTotalsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getGLTotalByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGLTotalByApartmentId`, __body, {
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
    getGLTotalByApartmentIdStatus(apartmentId) {
        return this.getGLTotalByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGLTotalByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getGLTotalByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGLTotalByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGLTotalByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getGLTotalByApartmentIdStatus_1(params) {
        return this.getGLTotalByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGLTotalByYearParams` containing the following parameters:
     *
     * - `year`:
     *
     * - `apartmentId`:
     */
    getGLTotalByYearResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.year != null)
            __params = __params.set('year', params.year.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGLTotalByYear`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGLTotalByYearParams` containing the following parameters:
     *
     * - `year`:
     *
     * - `apartmentId`:
     */
    getGLTotalByYear(params) {
        return this.getGLTotalByYearResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGLTotalByYearStatusParams` containing the following parameters:
     *
     * - `year`:
     *
     * - `active`:
     */
    getGLTotalByYearStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.year != null)
            __params = __params.set('year', params.year.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGLTotalByYearStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGLTotalByYearStatusParams` containing the following parameters:
     *
     * - `year`:
     *
     * - `active`:
     */
    getGLTotalByYearStatus(params) {
        return this.getGLTotalByYearStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGLTotalByYIdParams` containing the following parameters:
     *
     * - `gltotalId`:
     *
     * - `apartmentId`:
     */
    getGLTotalByYIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.gltotalId != null)
            __params = __params.set('gltotalId', params.gltotalId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGLTotalByYId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGLTotalByYIdParams` containing the following parameters:
     *
     * - `gltotalId`:
     *
     * - `apartmentId`:
     */
    getGLTotalByYId(params) {
        return this.getGLTotalByYIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param glTotal undefined
     */
    addGLTotalResponse(glTotal) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = glTotal;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addGLTotal`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param glTotal undefined
     */
    addGLTotal(glTotal) {
        return this.addGLTotalResponse(glTotal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param glTotal undefined
     */
    updateGLTotalResponse(glTotal) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = glTotal;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateGLTotal`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param glTotal undefined
     */
    updateGLTotal(glTotal) {
        return this.updateGLTotalResponse(glTotal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteGLTotalParams` containing the following parameters:
     *
     * - `glTotalId`:
     *
     * - `deleteBy`:
     */
    deleteGLTotalResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.glTotalId != null)
            __params = __params.set('glTotalId', params.glTotalId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteGLTotal`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteGLTotalParams` containing the following parameters:
     *
     * - `glTotalId`:
     *
     * - `deleteBy`:
     */
    deleteGLTotal(params) {
        return this.deleteGLTotalResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllCustInvoicesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustInvoices`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllCustInvoices() {
        return this.getAllCustInvoicesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllCustInvoicesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustInvoicesByStatus`, __body, {
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
    getAllCustInvoicesByStatus(active) {
        return this.getAllCustInvoicesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getCustInvoicesByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustInvoicesByApartmentId`, __body, {
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
    getCustInvoicesByApartmentId(apartmentId) {
        return this.getCustInvoicesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustInvoicesByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustInvoicesByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustInvoicesByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustInvoicesByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustInvoicesByApartmentIdStatus(params) {
        return this.getCustInvoicesByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustInvoicesByApartmentBlockUnitIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    getCustInvoicesByApartmentBlockUnitIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustInvoicesByApartmentBlockUnitId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustInvoicesByApartmentBlockUnitIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    getCustInvoicesByApartmentBlockUnitId(params) {
        return this.getCustInvoicesByApartmentBlockUnitIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustInvoicesByApartmentBlockUnitIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     *
     * - `active`:
     */
    getCustInvoicesByApartmentBlockUnitIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustInvoicesByApartmentBlockUnitIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustInvoicesByApartmentBlockUnitIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     *
     * - `active`:
     */
    getCustInvoicesByApartmentBlockUnitIdStatus(params) {
        return this.getCustInvoicesByApartmentBlockUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustInvoicesByApartmentCustInvoiceDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getCustInvoicesByApartmentCustInvoiceDateRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustInvoicesByApartmentCustInvoiceDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustInvoicesByApartmentCustInvoiceDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getCustInvoicesByApartmentCustInvoiceDateRange(params) {
        return this.getCustInvoicesByApartmentCustInvoiceDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustInvoicesByApartmentDueDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getCustInvoicesByApartmentDueDateRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustInvoicesByApartmentDueDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustInvoicesByApartmentDueDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getCustInvoicesByApartmentDueDateRange(params) {
        return this.getCustInvoicesByApartmentDueDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustInvoiceByIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getCustInvoiceByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustInvoiceById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustInvoiceByIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getCustInvoiceById(params) {
        return this.getCustInvoiceByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoice undefined
     */
    addCustInvoiceResponse(invoice) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoice;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addCustInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoice undefined
     */
    addCustInvoice(invoice) {
        return this.addCustInvoiceResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoice undefined
     */
    updateCustInvoiceResponse(invoice) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoice;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateCustInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoice undefined
     */
    updateCustInvoice(invoice) {
        return this.updateCustInvoiceResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteCustInvoiceParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `deleteBy`:
     */
    deleteCustInvoiceResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteCustInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteCustInvoiceParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `deleteBy`:
     */
    deleteCustInvoice(params) {
        return this.deleteCustInvoiceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.UpdateCustInvoiceStatusParams` containing the following parameters:
     *
     * - `updatedBy`:
     *
     * - `invoiceStatusId`:
     *
     * - `invoiceId`:
     */
    updateCustInvoiceStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.updatedBy != null)
            __params = __params.set('updatedBy', params.updatedBy.toString());
        if (params.invoiceStatusId != null)
            __params = __params.set('invoiceStatusId', params.invoiceStatusId.toString());
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateCustInvoiceStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.UpdateCustInvoiceStatusParams` containing the following parameters:
     *
     * - `updatedBy`:
     *
     * - `invoiceStatusId`:
     *
     * - `invoiceId`:
     */
    updateCustInvoiceStatus(params) {
        return this.updateCustInvoiceStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllInvoiceDetailsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllInvoiceDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllInvoiceDetails() {
        return this.getAllInvoiceDetailsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllInvoiceDetailsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllInvoiceDetailsByStatus`, __body, {
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
    getAllInvoiceDetailsByStatus(active) {
        return this.getAllInvoiceDetailsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getInvoiceDetailsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getInvoiceDetailsByApartmentId`, __body, {
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
    getInvoiceDetailsByApartmentIdStatus(apartmentId) {
        return this.getInvoiceDetailsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetInvoiceDetailsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getInvoiceDetailsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getInvoiceDetailsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetInvoiceDetailsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getInvoiceDetailsByApartmentIdStatus_1(params) {
        return this.getInvoiceDetailsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetInvoiceDetailsByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getInvoiceDetailsByInvoiceIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getInvoiceDetailsByInvoiceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetInvoiceDetailsByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getInvoiceDetailsByInvoiceId(params) {
        return this.getInvoiceDetailsByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetInvoiceDetailsByIdParams` containing the following parameters:
     *
     * - `invoiceDetailsId`:
     *
     * - `apartmentId`:
     */
    getInvoiceDetailsByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceDetailsId != null)
            __params = __params.set('invoiceDetailsId', params.invoiceDetailsId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getInvoiceDetailsById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetInvoiceDetailsByIdParams` containing the following parameters:
     *
     * - `invoiceDetailsId`:
     *
     * - `apartmentId`:
     */
    getInvoiceDetailsById(params) {
        return this.getInvoiceDetailsByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoiceDetails undefined
     */
    addInvoiceDetailsResponse(invoiceDetails) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoiceDetails;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addInvoiceDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoiceDetails undefined
     */
    addInvoiceDetails(invoiceDetails) {
        return this.addInvoiceDetailsResponse(invoiceDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param invoiceDetails undefined
     */
    updateInvoiceDetailsResponse(invoiceDetails) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = invoiceDetails;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateInvoiceDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param invoiceDetails undefined
     */
    updateInvoiceDetails(invoiceDetails) {
        return this.updateInvoiceDetailsResponse(invoiceDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteInvoiceDetailsParams` containing the following parameters:
     *
     * - `invoiceDetailsId`:
     *
     * - `deleteBy`:
     */
    deleteInvoiceDetailsResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceDetailsId != null)
            __params = __params.set('invoiceDetailsId', params.invoiceDetailsId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteInvoiceDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteInvoiceDetailsParams` containing the following parameters:
     *
     * - `invoiceDetailsId`:
     *
     * - `deleteBy`:
     */
    deleteInvoiceDetails(params) {
        return this.deleteInvoiceDetailsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllInvoiceGLAccountsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllInvoiceGLAccounts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllInvoiceGLAccounts() {
        return this.getAllInvoiceGLAccountsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllInvoiceGLAccountsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllInvoiceGLAccountsByStatus`, __body, {
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
    getAllInvoiceGLAccountsByStatus(active) {
        return this.getAllInvoiceGLAccountsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllGLGroupsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllGLGroups`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllGLGroups() {
        return this.getAllGLGroupsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllGLGroupsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllGLGroupsByStatus`, __body, {
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
    getAllGLGroupsByStatus(active) {
        return this.getAllGLGroupsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetAllGLGroupsByAccountTypeIDParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `GlaccountTypeId`:
     */
    getAllGLGroupsByAccountTypeIDResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.GlaccountTypeId != null)
            __params = __params.set('GlaccountTypeId', params.GlaccountTypeId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllGLGroupsByAccountTypeID`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetAllGLGroupsByAccountTypeIDParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `GlaccountTypeId`:
     */
    getAllGLGroupsByAccountTypeID(params) {
        return this.getAllGLGroupsByAccountTypeIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGLGroupByIdParams` containing the following parameters:
     *
     * - `glGroupId`:
     *
     * - `apartmentId`:
     */
    getGLGroupByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.glGroupId != null)
            __params = __params.set('glGroupId', params.glGroupId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGLGroupById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGLGroupByIdParams` containing the following parameters:
     *
     * - `glGroupId`:
     *
     * - `apartmentId`:
     */
    getGLGroupById(params) {
        return this.getGLGroupByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGLGroupByApartmentIdParams` containing the following parameters:
     *
     * - `glGroupId`:
     *
     * - `apartmentId`:
     */
    getGLGroupByApartmentIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.glGroupId != null)
            __params = __params.set('glGroupId', params.glGroupId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGLGroupByApartmentId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGLGroupByApartmentIdParams` containing the following parameters:
     *
     * - `glGroupId`:
     *
     * - `apartmentId`:
     */
    getGLGroupByApartmentId(params) {
        return this.getGLGroupByApartmentIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param glGroup undefined
     */
    addGLGroupResponse(glGroup) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = glGroup;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addGLGroup`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param glGroup undefined
     */
    addGLGroup(glGroup) {
        return this.addGLGroupResponse(glGroup).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param glGroup undefined
     */
    updateGLGroupResponse(glGroup) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = glGroup;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateGLGroup`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param glGroup undefined
     */
    updateGLGroup(glGroup) {
        return this.updateGLGroupResponse(glGroup).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteGLGroupParams` containing the following parameters:
     *
     * - `glGroupId`:
     *
     * - `deleteBy`:
     */
    deleteGLGroupResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.glGroupId != null)
            __params = __params.set('glGroupId', params.glGroupId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteGLGroup`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteGLGroupParams` containing the following parameters:
     *
     * - `glGroupId`:
     *
     * - `deleteBy`:
     */
    deleteGLGroup(params) {
        return this.deleteGLGroupResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllGLAccountsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllGLAccounts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllGLAccounts() {
        return this.getAllGLAccountsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllGLAccountsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllGLAccountsByStatus`, __body, {
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
    getAllGLAccountsByStatus(active) {
        return this.getAllGLAccountsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getGLAccountsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGLAccountsByApartmentId`, __body, {
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
    getGLAccountsByApartmentIdStatus(apartmentId) {
        return this.getGLAccountsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGLAccountsByGroupIdParams` containing the following parameters:
     *
     * - `groupId`:
     *
     * - `apartmentId`:
     */
    getGLAccountsByGroupIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.groupId != null)
            __params = __params.set('groupId', params.groupId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGLAccountsByGroupId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGLAccountsByGroupIdParams` containing the following parameters:
     *
     * - `groupId`:
     *
     * - `apartmentId`:
     */
    getGLAccountsByGroupId(params) {
        return this.getGLAccountsByGroupIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getGLAccountsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGLAccountsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getGLAccountsByApartmentIdStatus_1(params) {
        return this.getGLAccountsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGLAccountsIdParams` containing the following parameters:
     *
     * - `glAccountId`:
     *
     * - `apartmentId`:
     */
    getGLAccountsIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.glAccountId != null)
            __params = __params.set('glAccountId', params.glAccountId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGLAccountsId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGLAccountsIdParams` containing the following parameters:
     *
     * - `glAccountId`:
     *
     * - `apartmentId`:
     */
    getGLAccountsId(params) {
        return this.getGLAccountsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param glAccount undefined
     */
    addGLAccountResponse(glAccount) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = glAccount;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addGLAccount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param glAccount undefined
     */
    addGLAccount(glAccount) {
        return this.addGLAccountResponse(glAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param glAccount undefined
     */
    updateGLAccountResponse(glAccount) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = glAccount;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateGLAccount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param glAccount undefined
     */
    updateGLAccount(glAccount) {
        return this.updateGLAccountResponse(glAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteGLAccountParams` containing the following parameters:
     *
     * - `glAccountId`:
     *
     * - `deleteBy`:
     */
    deleteGLAccountResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.glAccountId != null)
            __params = __params.set('glAccountId', params.glAccountId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteGLAccount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteGLAccountParams` containing the following parameters:
     *
     * - `glAccountId`:
     *
     * - `deleteBy`:
     */
    deleteGLAccount(params) {
        return this.deleteGLAccountResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllCustAccountsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustAccounts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllCustAccounts() {
        return this.getAllCustAccountsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllCustAccountsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustAccountsByStatus`, __body, {
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
    getAllCustAccountsByStatus(active) {
        return this.getAllCustAccountsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getCustAccountsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustAccountsByApartmentId`, __body, {
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
    getCustAccountsByApartmentIdStatus(apartmentId) {
        return this.getCustAccountsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustAccountsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustAccountsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustAccountsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustAccountsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustAccountsByApartmentIdStatus_1(params) {
        return this.getCustAccountsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustAccountByIdParams` containing the following parameters:
     *
     * - `custAcctId`:
     *
     * - `apartmentId`:
     */
    getCustAccountByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.custAcctId != null)
            __params = __params.set('custAcctId', params.custAcctId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustAccountById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustAccountByIdParams` containing the following parameters:
     *
     * - `custAcctId`:
     *
     * - `apartmentId`:
     */
    getCustAccountById(params) {
        return this.getCustAccountByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custAccount undefined
     */
    addCustAccountResponse(custAccount) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custAccount;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addCustAccount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custAccount undefined
     */
    addCustAccount(custAccount) {
        return this.addCustAccountResponse(custAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custAccount undefined
     */
    updateCustAccountResponse(custAccount) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custAccount;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateCustAccount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custAccount undefined
     */
    updateCustAccount(custAccount) {
        return this.updateCustAccountResponse(custAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteCustAccountParams` containing the following parameters:
     *
     * - `glAccountId`:
     *
     * - `deleteBy`:
     */
    deleteCustAccountResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.glAccountId != null)
            __params = __params.set('glAccountId', params.glAccountId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteCustAccount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteCustAccountParams` containing the following parameters:
     *
     * - `glAccountId`:
     *
     * - `deleteBy`:
     */
    deleteCustAccount(params) {
        return this.deleteCustAccountResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllVendorAccountsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorAccounts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendorAccounts() {
        return this.getAllVendorAccountsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorAccountsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorAccountsByStatus`, __body, {
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
    getAllVendorAccountsByStatus(active) {
        return this.getAllVendorAccountsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorAccountsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorAccountsByApartmentId`, __body, {
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
    getVendorAccountsByApartmentIdStatus(apartmentId) {
        return this.getVendorAccountsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorAccountsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorAccountsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorAccountsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorAccountsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorAccountsByApartmentIdStatus_1(params) {
        return this.getVendorAccountsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorAccountByIdParams` containing the following parameters:
     *
     * - `custAcctId`:
     *
     * - `apartmentId`:
     */
    getVendorAccountByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.custAcctId != null)
            __params = __params.set('custAcctId', params.custAcctId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorAccountById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorAccountByIdParams` containing the following parameters:
     *
     * - `custAcctId`:
     *
     * - `apartmentId`:
     */
    getVendorAccountById(params) {
        return this.getVendorAccountByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorAccount undefined
     */
    addVendorAccountResponse(vendorAccount) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorAccount;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorAccount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorAccount undefined
     */
    addVendorAccount(vendorAccount) {
        return this.addVendorAccountResponse(vendorAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorAccount undefined
     */
    updateVendorAccountResponse(vendorAccount) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorAccount;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateVendorAccount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorAccount undefined
     */
    updateVendorAccount(vendorAccount) {
        return this.updateVendorAccountResponse(vendorAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteVendorAccountParams` containing the following parameters:
     *
     * - `glAccountId`:
     *
     * - `deleteBy`:
     */
    deleteVendorAccountResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.glAccountId != null)
            __params = __params.set('glAccountId', params.glAccountId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteVendorAccount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteVendorAccountParams` containing the following parameters:
     *
     * - `glAccountId`:
     *
     * - `deleteBy`:
     */
    deleteVendorAccount(params) {
        return this.deleteVendorAccountResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllCollectionsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCollections`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllCollections() {
        return this.getAllCollectionsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllCollectionsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCollectionsByStatus`, __body, {
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
    getAllCollectionsByStatus(active) {
        return this.getAllCollectionsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getCollectionsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCollectionsByApartmentId`, __body, {
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
    getCollectionsByApartmentIdStatus(apartmentId) {
        return this.getCollectionsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCollectionsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCollectionsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCollectionsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCollectionsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCollectionsByApartmentIdStatus_1(params) {
        return this.getCollectionsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param instrumentTypeId undefined
     */
    getAllCollectionsByInstrumentTypeIdResponse(instrumentTypeId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (instrumentTypeId != null)
            __params = __params.set('instrumentTypeId', instrumentTypeId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCollectionsByInstrumentTypeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param instrumentTypeId undefined
     */
    getAllCollectionsByInstrumentTypeId(instrumentTypeId) {
        return this.getAllCollectionsByInstrumentTypeIdResponse(instrumentTypeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionsByInstrumentTypeIdStatusParams` containing the following parameters:
     *
     * - `instrumentTypeId`:
     *
     * - `active`:
     */
    getAllCollectionsByInstrumentTypeIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.instrumentTypeId != null)
            __params = __params.set('instrumentTypeId', params.instrumentTypeId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCollectionsByInstrumentTypeIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionsByInstrumentTypeIdStatusParams` containing the following parameters:
     *
     * - `instrumentTypeId`:
     *
     * - `active`:
     */
    getAllCollectionsByInstrumentTypeIdStatus(params) {
        return this.getAllCollectionsByInstrumentTypeIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionsByApartmentIdPostOnParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getAllCollectionsByApartmentIdPostOnResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCollectionsByApartmentIdPostOn`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionsByApartmentIdPostOnParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getAllCollectionsByApartmentIdPostOn(params) {
        return this.getAllCollectionsByApartmentIdPostOnResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionsByApartmentBlockUnitIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    getAllCollectionsByApartmentBlockUnitIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCollectionsByApartmentBlockUnitId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionsByApartmentBlockUnitIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    getAllCollectionsByApartmentBlockUnitId(params) {
        return this.getAllCollectionsByApartmentBlockUnitIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionsByApartmentBlockUnitIdPostOnParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    getAllCollectionsByApartmentBlockUnitIdPostOnResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCollectionsByApartmentBlockUnitIdPostOn`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionsByApartmentBlockUnitIdPostOnParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    getAllCollectionsByApartmentBlockUnitIdPostOn(params) {
        return this.getAllCollectionsByApartmentBlockUnitIdPostOnResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCollectionByCollectionIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getCollectionByCollectionIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.collectionId != null)
            __params = __params.set('collectionId', params.collectionId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCollectionByCollectionId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCollectionByCollectionIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getCollectionByCollectionId(params) {
        return this.getCollectionByCollectionIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param collection undefined
     */
    addCollectionResponse(collection) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = collection;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addCollection`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param collection undefined
     */
    addCollection(collection) {
        return this.addCollectionResponse(collection).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param collection undefined
     */
    updateCollectionResponse(collection) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = collection;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateCollection`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param collection undefined
     */
    updateCollection(collection) {
        return this.updateCollectionResponse(collection).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteCollectionParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `collectionId`:
     */
    deleteCollectionResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.collectionId != null)
            __params = __params.set('collectionId', params.collectionId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteCollection`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteCollectionParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `collectionId`:
     */
    deleteCollection(params) {
        return this.deleteCollectionResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllCollectionInvoicesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCollectionInvoices`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllCollectionInvoices() {
        return this.getAllCollectionInvoicesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllCollectionInvoicesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCollectionInvoicesByStatus`, __body, {
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
    getAllCollectionInvoicesByStatus(active) {
        return this.getAllCollectionInvoicesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getCollectionInvoicesByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCollectionInvoicesByApartmentId`, __body, {
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
    getCollectionInvoicesByApartmentIdStatus(apartmentId) {
        return this.getCollectionInvoicesByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCollectionInvoicesByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCollectionInvoicesByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCollectionInvoicesByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCollectionInvoicesByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCollectionInvoicesByApartmentIdStatus_1(params) {
        return this.getCollectionInvoicesByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionInvoicesByApartmentBlockUnitIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    getAllCollectionInvoicesByApartmentBlockUnitIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCollectionInvoicesByApartmentBlockUnitId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionInvoicesByApartmentBlockUnitIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    getAllCollectionInvoicesByApartmentBlockUnitId(params) {
        return this.getAllCollectionInvoicesByApartmentBlockUnitIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionInvoicesByApartmentBlockUnitIdAndDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetAllCollectionInvoicesByApartmentBlockUnitIdAndDateRangeParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     *
     * - `apartmentBlockUnitId`:
     */
    getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRange(params) {
        return this.getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCollectionInvoiceByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getCollectionInvoiceByInvoiceIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.invoiceId != null)
            __params = __params.set('invoiceId', params.invoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCollectionInvoiceByInvoiceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCollectionInvoiceByInvoiceIdParams` containing the following parameters:
     *
     * - `invoiceId`:
     *
     * - `apartmentId`:
     */
    getCollectionInvoiceByInvoiceId(params) {
        return this.getCollectionInvoiceByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCollectionInvoiceByCollectionIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getCollectionInvoiceByCollectionIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.collectionId != null)
            __params = __params.set('collectionId', params.collectionId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCollectionInvoiceByCollectionId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCollectionInvoiceByCollectionIdParams` containing the following parameters:
     *
     * - `collectionId`:
     *
     * - `apartmentId`:
     */
    getCollectionInvoiceByCollectionId(params) {
        return this.getCollectionInvoiceByCollectionIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCollectionInvoiceByCollectionInvoiceIdParams` containing the following parameters:
     *
     * - `collectionInvoiceId`:
     *
     * - `apartmentId`:
     */
    getCollectionInvoiceByCollectionInvoiceIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.collectionInvoiceId != null)
            __params = __params.set('collectionInvoiceId', params.collectionInvoiceId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCollectionInvoiceByCollectionInvoiceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCollectionInvoiceByCollectionInvoiceIdParams` containing the following parameters:
     *
     * - `collectionInvoiceId`:
     *
     * - `apartmentId`:
     */
    getCollectionInvoiceByCollectionInvoiceId(params) {
        return this.getCollectionInvoiceByCollectionInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param collectionInvoice undefined
     */
    addCollectionInvoiceResponse(collectionInvoice) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = collectionInvoice;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addCollectionInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param collectionInvoice undefined
     */
    addCollectionInvoice(collectionInvoice) {
        return this.addCollectionInvoiceResponse(collectionInvoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param collectionInvoice undefined
     */
    updateCollectionInvoiceResponse(collectionInvoice) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = collectionInvoice;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateCollectionInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param collectionInvoice undefined
     */
    updateCollectionInvoice(collectionInvoice) {
        return this.updateCollectionInvoiceResponse(collectionInvoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteCollectionInvoiceParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `collectionInvoiceId`:
     */
    deleteCollectionInvoiceResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.collectionInvoiceId != null)
            __params = __params.set('collectionInvoiceId', params.collectionInvoiceId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteCollectionInvoice`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteCollectionInvoiceParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `collectionInvoiceId`:
     */
    deleteCollectionInvoice(params) {
        return this.deleteCollectionInvoiceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllGlnumberRangesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllGlnumberRanges`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllGlnumberRanges() {
        return this.getAllGlnumberRangesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllGlnumberRangesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllGlnumberRangesByStatus`, __body, {
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
    getAllGlnumberRangesByStatus(active) {
        return this.getAllGlnumberRangesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getGlnumberRangesByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGlnumberRangesByApartmentId`, __body, {
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
    getGlnumberRangesByApartmentIdStatus(apartmentId) {
        return this.getGlnumberRangesByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGlnumberRangesByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getGlnumberRangesByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGlnumberRangesByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGlnumberRangesByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getGlnumberRangesByApartmentIdStatus_1(params) {
        return this.getGlnumberRangesByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetGlnumberRangeByIdParams` containing the following parameters:
     *
     * - `glnumberRangeId`:
     *
     * - `apartmentId`:
     */
    getGlnumberRangeByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.glnumberRangeId != null)
            __params = __params.set('glnumberRangeId', params.glnumberRangeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getGlnumberRangeById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetGlnumberRangeByIdParams` containing the following parameters:
     *
     * - `glnumberRangeId`:
     *
     * - `apartmentId`:
     */
    getGlnumberRangeById(params) {
        return this.getGlnumberRangeByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param gLNumberRange undefined
     */
    addGlnumberRangeResponse(gLNumberRange) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = gLNumberRange;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addGlnumberRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param gLNumberRange undefined
     */
    addGlnumberRange(gLNumberRange) {
        return this.addGlnumberRangeResponse(gLNumberRange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param gLNumberRange undefined
     */
    updateGlnumberRangeResponse(gLNumberRange) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = gLNumberRange;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateGlnumberRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param gLNumberRange undefined
     */
    updateGlnumberRange(gLNumberRange) {
        return this.updateGlnumberRangeResponse(gLNumberRange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteGlnumberRangeParams` containing the following parameters:
     *
     * - `gLNumberRangeId`:
     *
     * - `deleteBy`:
     */
    deleteGlnumberRangeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.gLNumberRangeId != null)
            __params = __params.set('gLNumberRangeId', params.gLNumberRangeId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteGlnumberRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteGlnumberRangeParams` containing the following parameters:
     *
     * - `gLNumberRangeId`:
     *
     * - `deleteBy`:
     */
    deleteGlnumberRange(params) {
        return this.deleteGlnumberRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllCustGltransactionsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustGltransactions`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllCustGltransactions() {
        return this.getAllCustGltransactionsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllCustGltransactionsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllCustGltransactionsByStatus`, __body, {
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
    getAllCustGltransactionsByStatus(active) {
        return this.getAllCustGltransactionsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getCustGltransactionsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustGltransactionsByApartmentId`, __body, {
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
    getCustGltransactionsByApartmentIdStatus(apartmentId) {
        return this.getCustGltransactionsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustGltransactionsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustGltransactionsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustGltransactionsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustGltransactionsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getCustGltransactionsByApartmentIdStatus_1(params) {
        return this.getCustGltransactionsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustGltransactionByIdParams` containing the following parameters:
     *
     * - `custGltransactionId`:
     *
     * - `apartmentId`:
     */
    getCustGltransactionByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.custGltransactionId != null)
            __params = __params.set('custGltransactionId', params.custGltransactionId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustGltransactionById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustGltransactionByIdParams` containing the following parameters:
     *
     * - `custGltransactionId`:
     *
     * - `apartmentId`:
     */
    getCustGltransactionById(params) {
        return this.getCustGltransactionByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustGltransactionByDocTypeIdParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `apartmentId`:
     */
    getCustGltransactionByDocTypeIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docTypeId != null)
            __params = __params.set('docTypeId', params.docTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustGltransactionByDocTypeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustGltransactionByDocTypeIdParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `apartmentId`:
     */
    getCustGltransactionByDocTypeId(params) {
        return this.getCustGltransactionByDocTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetCustGltransactionByFiscalYearParams` containing the following parameters:
     *
     * - `fiscalYear`:
     *
     * - `apartmentId`:
     */
    getCustGltransactionByFiscalYearResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.fiscalYear != null)
            __params = __params.set('fiscalYear', params.fiscalYear.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getCustGltransactionByFiscalYear`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetCustGltransactionByFiscalYearParams` containing the following parameters:
     *
     * - `fiscalYear`:
     *
     * - `apartmentId`:
     */
    getCustGltransactionByFiscalYear(params) {
        return this.getCustGltransactionByFiscalYearResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custGltransaction undefined
     */
    addCustGltransactionResponse(custGltransaction) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custGltransaction;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addCustGltransaction`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custGltransaction undefined
     */
    addCustGltransaction(custGltransaction) {
        return this.addCustGltransactionResponse(custGltransaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custGltransactions undefined
     */
    addCustGltransactionListResponse(custGltransactions) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custGltransactions;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addCustGltransactionList`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custGltransactions undefined
     */
    addCustGltransactionList(custGltransactions) {
        return this.addCustGltransactionListResponse(custGltransactions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param custGltransaction undefined
     */
    updateCustGltransactionResponse(custGltransaction) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = custGltransaction;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/updateCustGltransaction`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param custGltransaction undefined
     */
    updateCustGltransaction(custGltransaction) {
        return this.updateCustGltransactionResponse(custGltransaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.DeleteCustGltransactionParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `custGltransactionId`:
     */
    deleteCustGltransactionResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.custGltransactionId != null)
            __params = __params.set('custGltransactionId', params.custGltransactionId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/deleteCustGltransaction`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.DeleteCustGltransactionParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `custGltransactionId`:
     */
    deleteCustGltransaction(params) {
        return this.deleteCustGltransactionResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllVendorGltransactionsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorGltransactions`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllVendorGltransactions() {
        return this.getAllVendorGltransactionsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllVendorGltransactionsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getAllVendorGltransactionsByStatus`, __body, {
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
    getAllVendorGltransactionsByStatus(active) {
        return this.getAllVendorGltransactionsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getVendorGltransactionsByApartmentIdStatusResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorGltransactionsByApartmentId`, __body, {
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
    getVendorGltransactionsByApartmentIdStatus(apartmentId) {
        return this.getVendorGltransactionsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorGltransactionsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorGltransactionsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorGltransactionsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorGltransactionsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getVendorGltransactionsByApartmentIdStatus_1(params) {
        return this.getVendorGltransactionsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AccountsService.GetVendorGltransactionByIdParams` containing the following parameters:
     *
     * - `vendorGltransactionId`:
     *
     * - `apartmentId`:
     */
    getVendorGltransactionByIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.vendorGltransactionId != null)
            __params = __params.set('vendorGltransactionId', params.vendorGltransactionId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Accounts/getVendorGltransactionById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AccountsService.GetVendorGltransactionByIdParams` containing the following parameters:
     *
     * - `vendorGltransactionId`:
     *
     * - `apartmentId`:
     */
    getVendorGltransactionById(params) {
        return this.getVendorGltransactionByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param vendorGltransaction undefined
     */
    addVendorGltransactionResponse(vendorGltransaction) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = vendorGltransaction;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Accounts/addVendorGltransaction`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param vendorGltransaction undefined
     */
    addVendorGltransaction(vendorGltransaction) {
        return this.addVendorGltransactionResponse(vendorGltransaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
AccountsService.GetIncomeTrackerCreditNoteByEmailSentPath = '/api/Accounts/GetIncomeTrackerCreditNoteByEmailSent';
AccountsService.GetIncomeTrackerCreditNoteByDateRangePath = '/api/Accounts/GetIncomeTrackerCreditNoteByDateRange';
AccountsService.GetIncomeTrackerCreditNoteByDateRangeBlockUnitIDPath = '/api/Accounts/GetIncomeTrackerCreditNoteByDateRangeBlockUnitID';
AccountsService.GetIncomeTrackerReceiptsByApartmentIdPath = '/api/Accounts/GetIncomeTrackerReceiptsByApartmentId';
AccountsService.GetIncomeTrackerReceiptsByEmaiSentPath = '/api/Accounts/GetIncomeTrackerReceiptsByEmaiSent';
AccountsService.GetIncomeTrackerReceiptsBySmsSentPath = '/api/Accounts/GetIncomeTrackerReceiptsBySmsSent';
AccountsService.GetIncomeTrackerReceiptsByReciptNumRangePath = '/api/Accounts/GetIncomeTrackerReceiptsByReciptNumRange';
AccountsService.GetIncomeTrackerReceiptsByDateRangePath = '/api/Accounts/GetIncomeTrackerReceiptsByDateRange';
AccountsService.GetIncomeTrackerReceiptsByDateRangeBlockunitIDPath = '/api/Accounts/GetIncomeTrackerReceiptsByDateRangeBlockunitID';
AccountsService.GetIncomeTrackerInvoicesByApartmentIdPath = '/api/Accounts/GetIncomeTrackerInvoicesByApartmentId';
AccountsService.GetIncomeTrackerInvoicesByApartmentBlockIDPath = '/api/Accounts/GetIncomeTrackerInvoicesByApartmentBlockID';
AccountsService.GetIncomeTrackerInvoicesByEmailSentPath = '/api/Accounts/GetIncomeTrackerInvoicesByEmailSent';
AccountsService.GetIncomeTrackerInvoicesBySmsSentPath = '/api/Accounts/GetIncomeTrackerInvoicesBySmsSent';
AccountsService.GetIncomeTrackerInvoicesByInvoiceNumRangePath = '/api/Accounts/GetIncomeTrackerInvoicesByInvoiceNumRange';
AccountsService.GetIncomeTrackerInvoicesByDateRangePath = '/api/Accounts/GetIncomeTrackerInvoicesByDateRange';
AccountsService.GetIncomeTrackerInvoicesByDateRangeBlockUnitIDPath = '/api/Accounts/GetIncomeTrackerInvoicesByDateRangeBlockUnitID';
AccountsService.GetIncomeTrackerInvoicesByAccountIdPath = '/api/Accounts/GetIncomeTrackerInvoicesByAccountId';
AccountsService.GetIncomeTrackerDefaulterByApartmentIdPath = '/api/Accounts/GetIncomeTrackerDefaulterByApartmentId';
AccountsService.GetIncomeTrackerDefaulterByFiltersPath = '/api/Accounts/GetIncomeTrackerDefaulterByFilters';
AccountsService.GetExpenseTrackerInvoicesByApartmentIdPath = '/api/Accounts/GetExpenseTrackerInvoicesByApartmentId';
AccountsService.GetExpenseTrackerInvoicesByApartmentIdVendorIdPath = '/api/Accounts/GetExpenseTrackerInvoicesByApartmentIdVendorId';
AccountsService.GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRangePath = '/api/Accounts/GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRange';
AccountsService.GetExpenseTrackerInvoicesByApartmentIdAccountIdPath = '/api/Accounts/GetExpenseTrackerInvoicesByApartmentIdAccountId';
AccountsService.CheckNumberRangeAlreadyExistsByApartmentIdPath = '/api/Accounts/CheckNumberRangeAlreadyExistsByApartmentId';
AccountsService.getAllCustAdvancePath = '/api/Accounts/getAllCustAdvance';
AccountsService.getAllCustAdvanceByStatusPath = '/api/Accounts/getAllCustAdvanceByStatus';
AccountsService.getCustAdvanceByApartmentIdStatusPath = '/api/Accounts/getCustAdvanceByApartmentId';
AccountsService.getCustAdvanceByApartmentIdStatus_1Path = '/api/Accounts/getCustAdvanceByApartmentIdStatus';
AccountsService.getCustAdvanceByUserIdPath = '/api/Accounts/getCustAdvanceByUserId';
AccountsService.getCustAdvanceByIdPath = '/api/Accounts/getCustAdvanceById';
AccountsService.addCustAdvancePath = '/api/Accounts/addCustAdvance';
AccountsService.updateCustAdvancePath = '/api/Accounts/updateCustAdvance';
AccountsService.deleteCustAdvancePath = '/api/Accounts/deleteCustAdvance';
AccountsService.getAllVendorAdvancesPath = '/api/Accounts/getAllVendorAdvances';
AccountsService.getAllVendorAdvanceByStatusPath = '/api/Accounts/getAllVendorAdvanceByStatus';
AccountsService.getVendorAdvanceByApartmentIdStatusPath = '/api/Accounts/getVendorAdvanceByApartmentId';
AccountsService.getVendorAdvanceByApartmentIdStatus_1Path = '/api/Accounts/getVendorAdvanceByApartmentIdStatus';
AccountsService.getVendorAdvanceByUserIdPath = '/api/Accounts/getVendorAdvanceByUserId';
AccountsService.getVendorAdvanceByIdPath = '/api/Accounts/getVendorAdvanceById';
AccountsService.addVendorAdvancePath = '/api/Accounts/addVendorAdvance';
AccountsService.updateVendorAdvancePath = '/api/Accounts/updateVendorAdvance';
AccountsService.deleteVendorAdvancePath = '/api/Accounts/deleteVendorAdvance';
AccountsService.GenerateMaintenanceInvoiceByApartmentIdStatusPath = '/api/Accounts/GenerateMaintenanceInvoiceByApartmentIdStatus';
AccountsService.GetARAgingCollectionDueByUnitIdPath = '/api/Accounts/GetARAgingCollectionDueByUnitId';
AccountsService.GetARAgingCollectionDueSummaryPath = '/api/Accounts/GetARAgingCollectionDueSummary';
AccountsService.getInvoiceGLAccountsByApartmentIdStatusPath = '/api/Accounts/getInvoiceGLAccountsByApartmentId';
AccountsService.getInvoiceGLAccountsByApartmentIdStatus_1Path = '/api/Accounts/getInvoiceGLAccountsByApartmentIdStatus';
AccountsService.getInvoiceGLAccountsByInvoiceIdPath = '/api/Accounts/getInvoiceGLAccountsByInvoiceId';
AccountsService.getInvoiceGLAccountByIdPath = '/api/Accounts/getInvoiceGLAccountById';
AccountsService.addInvoiceGLAccountsPath = '/api/Accounts/addInvoiceGLAccounts';
AccountsService.updateInvoiceGLAccountsPath = '/api/Accounts/updateInvoiceGLAccounts';
AccountsService.deleteInvoiceGLAccountsPath = '/api/Accounts/deleteInvoiceGLAccounts';
AccountsService.getAllVendorInvoicesPath = '/api/Accounts/getAllVendorInvoices';
AccountsService.getAllVendorInvoicesByStatusPath = '/api/Accounts/getAllVendorInvoicesByStatus';
AccountsService.getVendorInvoicesByApartmentIdPath = '/api/Accounts/getVendorInvoicesByApartmentId';
AccountsService.getVendorInvoicesByApartmentIdStatusPath = '/api/Accounts/getVendorInvoicesByApartmentIdStatus';
AccountsService.getVendorInvoicesByApartmentDueDateRangePath = '/api/Accounts/getVendorInvoicesByApartmentDueDateRange';
AccountsService.getVendorInvoiceByVendorIdPath = '/api/Accounts/getVendorInvoiceByVendorId';
AccountsService.getVendorInvoiceByIdPath = '/api/Accounts/getVendorInvoiceById';
AccountsService.addVendorInvoicePath = '/api/Accounts/addVendorInvoice';
AccountsService.updateVendorInvoicePath = '/api/Accounts/updateVendorInvoice';
AccountsService.deleteVendorInvoicePath = '/api/Accounts/deleteVendorInvoice';
AccountsService.getAllVendorInvoiceAttachmentsPath = '/api/Accounts/getAllVendorInvoiceAttachments';
AccountsService.getAllVendorInvoiceAttachmentsByStatusPath = '/api/Accounts/getAllVendorInvoiceAttachmentsByStatus';
AccountsService.getVendorInvoiceAttachmentsByApartmentIdPath = '/api/Accounts/getVendorInvoiceAttachmentsByApartmentId';
AccountsService.getVendorInvoiceAttachmentsByApartmentIdStatusPath = '/api/Accounts/getVendorInvoiceAttachmentsByApartmentIdStatus';
AccountsService.getVendorInvoiceAttachmentByInvoiceIdPath = '/api/Accounts/getVendorInvoiceAttachmentByInvoiceId';
AccountsService.getVendorInvoiceAttachmentByIdPath = '/api/Accounts/getVendorInvoiceAttachmentById';
AccountsService.addVendorInvoiceAttachmentPath = '/api/Accounts/addVendorInvoiceAttachment';
AccountsService.updateVendorInvoiceAttachmentPath = '/api/Accounts/updateVendorInvoiceAttachment';
AccountsService.deleteVendorInvoiceAttachmentPath = '/api/Accounts/deleteVendorInvoiceAttachment';
AccountsService.getAllVendorInvoiceGLAccountsPath = '/api/Accounts/getAllVendorInvoiceGLAccounts';
AccountsService.getAllVendorInvoiceGLAccountsByStatusPath = '/api/Accounts/getAllVendorInvoiceGLAccountsByStatus';
AccountsService.getVendorInvoiceGLAccountsByApartmentIdStatusPath = '/api/Accounts/getVendorInvoiceGLAccountsByApartmentId';
AccountsService.getVendorInvoiceGLAccountsByApartmentIdStatus_1Path = '/api/Accounts/getVendorInvoiceGLAccountsByApartmentIdStatus';
AccountsService.getVendorInvoiceGLAccountsByInvoiceIdPath = '/api/Accounts/getVendorInvoiceGLAccountsByInvoiceId';
AccountsService.getVendorInvoiceGLAccountByIdPath = '/api/Accounts/getVendorInvoiceGLAccountById';
AccountsService.addVendorInvoiceGLAccountsPath = '/api/Accounts/addVendorInvoiceGLAccounts';
AccountsService.updateVendorInvoiceGLAccountsPath = '/api/Accounts/updateVendorInvoiceGLAccounts';
AccountsService.deleteVendorInvoiceGLAccountsPath = '/api/Accounts/deleteVendorInvoiceGLAccounts';
AccountsService.getAllVendorPaymentsPath = '/api/Accounts/getAllVendorPayments';
AccountsService.getAllVendorPaymentsByStatusPath = '/api/Accounts/getAllVendorPaymentsByStatus';
AccountsService.getVendorPaymentsByApartmentIdPath = '/api/Accounts/getVendorPaymentsByApartmentId';
AccountsService.getVendorPaymentsByApartmentIdStatusPath = '/api/Accounts/getVendorPaymentsByApartmentIdStatus';
AccountsService.getVendorPaymentByInstrumentIdPath = '/api/Accounts/getVendorPaymentByInstrumentId';
AccountsService.getVendorPaymentByPayeeIdPath = '/api/Accounts/getVendorPaymentByPayeeId';
AccountsService.getVendorPaymentByVendorPaymentAccountTypeIdPath = '/api/Accounts/getVendorPaymentByVendorPaymentAccountTypeId';
AccountsService.getVendorPaymentByIdPath = '/api/Accounts/getVendorPaymentById';
AccountsService.addVendorPaymentPath = '/api/Accounts/addVendorPayment';
AccountsService.updateVendorPaymentPath = '/api/Accounts/updateVendorPayment';
AccountsService.deleteVendorPaymentPath = '/api/Accounts/deleteVendorPayment';
AccountsService.getAllVendorPaymentInvoicesPath = '/api/Accounts/getAllVendorPaymentInvoices';
AccountsService.getAllVendorPaymentInvoicesByStatusPath = '/api/Accounts/getAllVendorPaymentInvoicesByStatus';
AccountsService.getVendorPaymentInvoicesByApartmentIdStatusPath = '/api/Accounts/getVendorPaymentInvoicesByApartmentId';
AccountsService.getVendorPaymentInvoicesByApartmentIdStatus_1Path = '/api/Accounts/getVendorPaymentInvoicesByApartmentIdStatus';
AccountsService.getVendorPaymentInvoiceByVendorPaymentInvoiceIdPath = '/api/Accounts/getVendorPaymentInvoiceByVendorPaymentInvoiceId';
AccountsService.addVendorPaymentInvoicePath = '/api/Accounts/addVendorPaymentInvoice';
AccountsService.updateVendorPaymentInvoicePath = '/api/Accounts/updateVendorPaymentInvoice';
AccountsService.deleteVendorPaymentInvoicePath = '/api/Accounts/deleteVendorPaymentInvoice';
AccountsService.getAllVendorCreditNotesPath = '/api/Accounts/getAllVendorCreditNotes';
AccountsService.getAllVendorCreditNotesByStatusPath = '/api/Accounts/getAllVendorCreditNotesByStatus';
AccountsService.getVendorCreditNotesByApartmentIdStatusPath = '/api/Accounts/getVendorCreditNotesByApartmentId';
AccountsService.getVendorCreditNotesByApartmentIdStatus_1Path = '/api/Accounts/getVendorCreditNotesByApartmentIdStatus';
AccountsService.getVendorCreditNotesByPaymentIdPath = '/api/Accounts/getVendorCreditNotesByPaymentId';
AccountsService.getVendorCreditNotesByInvoiceIdPath = '/api/Accounts/getVendorCreditNotesByInvoiceId';
AccountsService.getVendorCreditNoteByIdPath = '/api/Accounts/getVendorCreditNoteById';
AccountsService.addVendorCreditNotePath = '/api/Accounts/addVendorCreditNote';
AccountsService.updateVendorCreditNotePath = '/api/Accounts/updateVendorCreditNote';
AccountsService.deleteVendorCreditNotePath = '/api/Accounts/deleteVendorCreditNote';
AccountsService.getAllVendorTransReversalsPath = '/api/Accounts/getAllVendorTransReversals';
AccountsService.getAllVendorTransReversalsByStatusPath = '/api/Accounts/getAllVendorTransReversalsByStatus';
AccountsService.getVendorTransReversalsByApartmentIdStatusPath = '/api/Accounts/getVendorTransReversalsByApartmentId';
AccountsService.getVendorTransReversalsByApartmentIdStatus_1Path = '/api/Accounts/getVendorTransReversalsByApartmentIdStatus';
AccountsService.getVendorTransReversalsByVendorPaymentIdPath = '/api/Accounts/getVendorTransReversalsByVendorPaymentId';
AccountsService.getVendorTransReversalsByInvoiceIdPath = '/api/Accounts/getVendorTransReversalsByInvoiceId';
AccountsService.getVendorTransReversalByIdPath = '/api/Accounts/getVendorTransReversalById';
AccountsService.addVendorTransReversalPath = '/api/Accounts/addVendorTransReversal';
AccountsService.updateVendorTransReversalPath = '/api/Accounts/updateVendorTransReversal';
AccountsService.deleteVendorTransReversalPath = '/api/Accounts/deleteVendorTransReversal';
AccountsService.GetIncomeTrackerSubLedgersByApartmentIdPath = '/api/Accounts/GetIncomeTrackerSubLedgersByApartmentId';
AccountsService.GetIncomeTrackerSubLedgersByApartmentBlockStartNamePath = '/api/Accounts/GetIncomeTrackerSubLedgersByApartmentBlockStartName';
AccountsService.GetIncomeTrackerSubLedgerPrintReceiptsByApartmentIdPath = '/api/Accounts/GetIncomeTrackerSubLedgerPrintReceiptsByApartmentId';
AccountsService.GetAccountHistoryByApartmentUnitIdPath = '/api/Accounts/GetAccountHistoryByApartmentUnitId';
AccountsService.GetVendorPaymenntHistoryByIdPath = '/api/Accounts/GetVendorPaymenntHistoryById';
AccountsService.GetGLAccountTransactionsByIDPath = '/api/Accounts/GetGLAccountTransactionsByID';
AccountsService.GetTrialBalanceByDatePath = '/api/Accounts/GetTrialBalanceByDate';
AccountsService.GetGLCreditDebitTransactionsPath = '/api/Accounts/GetGLCreditDebitTransactions';
AccountsService.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdPath = '/api/Accounts/GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitId';
AccountsService.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRangePath = '/api/Accounts/GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRange';
AccountsService.GetIncomeTrackerCreditNotePath = '/api/Accounts/GetIncomeTrackerCreditNote';
AccountsService.addVendorGltransactionListPath = '/api/Accounts/addVendorGltransactionList';
AccountsService.updateVendorGltransactionPath = '/api/Accounts/updateVendorGltransaction';
AccountsService.deleteVendorGltransactionPath = '/api/Accounts/deleteVendorGltransaction';
AccountsService.getAllCreditNotesPath = '/api/Accounts/getAllCreditNotes';
AccountsService.getAllCreditNotesByStatusPath = '/api/Accounts/getAllCreditNotesByStatus';
AccountsService.getCreditNotesByApartmentIdStatusPath = '/api/Accounts/getCreditNotesByApartmentId';
AccountsService.getCreditNotesByApartmentIdStatus_1Path = '/api/Accounts/getCreditNotesByApartmentIdStatus';
AccountsService.getCreditNotesByCollectionIdPath = '/api/Accounts/getCreditNotesByCollectionId';
AccountsService.getCreditNotesByInvoiceIdPath = '/api/Accounts/getCreditNotesByInvoiceId';
AccountsService.getCreditNoteByIdPath = '/api/Accounts/getCreditNoteById';
AccountsService.addCreditNotePath = '/api/Accounts/addCreditNote';
AccountsService.updateCreditNotePath = '/api/Accounts/updateCreditNote';
AccountsService.deleteCreditNotePath = '/api/Accounts/deleteCreditNote';
AccountsService.getAllCustTransReversalsPath = '/api/Accounts/getAllCustTransReversals';
AccountsService.getAllCustTransReversalsByStatusPath = '/api/Accounts/getAllCustTransReversalsByStatus';
AccountsService.getCustTransReversalsByApartmentIdStatusPath = '/api/Accounts/getCustTransReversalsByApartmentId';
AccountsService.getCustTransReversalsByApartmentIdStatus_1Path = '/api/Accounts/getCustTransReversalsByApartmentIdStatus';
AccountsService.getCustTransReversalsByCollectionIdPath = '/api/Accounts/getCustTransReversalsByCollectionId';
AccountsService.getCustTransReversalsByInvoiceIdPath = '/api/Accounts/getCustTransReversalsByInvoiceId';
AccountsService.getCustTransReversalByIdPath = '/api/Accounts/getCustTransReversalById';
AccountsService.addCustTransReversalPath = '/api/Accounts/addCustTransReversal';
AccountsService.updateCustTransReversalPath = '/api/Accounts/updateCustTransReversal';
AccountsService.deleteCustTransReversalPath = '/api/Accounts/deleteCustTransReversal';
AccountsService.getAllCustChequeDetailsPath = '/api/Accounts/getAllCustChequeDetails';
AccountsService.getAllCustChequeDetailssByStatusPath = '/api/Accounts/getAllCustChequeDetailssByStatus';
AccountsService.getCustChequeDetailsByApartmentIdStatusPath = '/api/Accounts/getCustChequeDetailsByApartmentId';
AccountsService.getCustChequeDetailsByApartmentIdStatus_1Path = '/api/Accounts/getCustChequeDetailsByApartmentIdStatus';
AccountsService.getCustChequeDetailsByCollectionIdPath = '/api/Accounts/getCustChequeDetailsByCollectionId';
AccountsService.getCustChequeDetailssByChequeNoPath = '/api/Accounts/getCustChequeDetailssByChequeNo';
AccountsService.getCustChequeDetailssByApartmentChequeStatusIdPath = '/api/Accounts/getCustChequeDetailssByApartmentChequeStatusId';
AccountsService.getCustChequeDetailssByChequeStatusIdPath = '/api/Accounts/getCustChequeDetailssByChequeStatusId';
AccountsService.getCustChequeDetailssByChequeStatusId_1Path = '/api/Accounts/getCustChequeDetailssByChequeDateRange';
AccountsService.getCustChequeDetailssByDepositDateRangePath = '/api/Accounts/getCustChequeDetailssByDepositDateRange';
AccountsService.getCustChequeDetailssByIdPath = '/api/Accounts/getCustChequeDetailssById';
AccountsService.addCustChequeDetailsPath = '/api/Accounts/addCustChequeDetails';
AccountsService.updateCustChequeDetailsPath = '/api/Accounts/updateCustChequeDetails';
AccountsService.deleteCustChequeDetailsPath = '/api/Accounts/deleteCustChequeDetails';
AccountsService.getAllVendorChequeDetailsPath = '/api/Accounts/getAllVendorChequeDetails';
AccountsService.getAllVendorChequeDetailssByStatusPath = '/api/Accounts/getAllVendorChequeDetailssByStatus';
AccountsService.getVendorChequeDetailsByApartmentIdStatusPath = '/api/Accounts/getVendorChequeDetailsByApartmentId';
AccountsService.getVendorChequeDetailsByApartmentIdStatus_1Path = '/api/Accounts/getVendorChequeDetailsByApartmentIdStatus';
AccountsService.getVendorChequeDetailsByVendorIdPath = '/api/Accounts/getVendorChequeDetailsByVendorId';
AccountsService.getVendorChequeDetailssByChequeNoPath = '/api/Accounts/getVendorChequeDetailssByChequeNo';
AccountsService.getVendorChequeDetailssByApartmentChequeStatusIdPath = '/api/Accounts/getVendorChequeDetailssByApartmentChequeStatusId';
AccountsService.getVendorChequeDetailssByChequeStatusIdPath = '/api/Accounts/getVendorChequeDetailssByChequeStatusId';
AccountsService.getVendorChequeDetailssByChequeStatusId_1Path = '/api/Accounts/getVendorChequeDetailssByChequeDateRange';
AccountsService.getVendorChequeDetailssByGivenDateRangePath = '/api/Accounts/getVendorChequeDetailssByGivenDateRange';
AccountsService.getVendorChequeDetailsByIdPath = '/api/Accounts/getVendorChequeDetailsById';
AccountsService.addvendorChequeDetailsPath = '/api/Accounts/addVendorChequeDetails';
AccountsService.updatevendorChequeDetailsPath = '/api/Accounts/updatevendorChequeDetails';
AccountsService.deletevendorChequeDetailsPath = '/api/Accounts/deletevendorChequeDetails';
AccountsService.getAllGLTotalPath = '/api/Accounts/getAllGLTotal';
AccountsService.getAllGLTotalsByStatusPath = '/api/Accounts/getAllGLTotalsByStatus';
AccountsService.getGLTotalByApartmentIdStatusPath = '/api/Accounts/getGLTotalByApartmentId';
AccountsService.getGLTotalByApartmentIdStatus_1Path = '/api/Accounts/getGLTotalByApartmentIdStatus';
AccountsService.getGLTotalByYearPath = '/api/Accounts/getGLTotalByYear';
AccountsService.getGLTotalByYearStatusPath = '/api/Accounts/getGLTotalByYearStatus';
AccountsService.getGLTotalByYIdPath = '/api/Accounts/getGLTotalByYId';
AccountsService.addGLTotalPath = '/api/Accounts/addGLTotal';
AccountsService.updateGLTotalPath = '/api/Accounts/updateGLTotal';
AccountsService.deleteGLTotalPath = '/api/Accounts/deleteGLTotal';
AccountsService.getAllCustInvoicesPath = '/api/Accounts/getAllCustInvoices';
AccountsService.getAllCustInvoicesByStatusPath = '/api/Accounts/getAllCustInvoicesByStatus';
AccountsService.getCustInvoicesByApartmentIdPath = '/api/Accounts/getCustInvoicesByApartmentId';
AccountsService.getCustInvoicesByApartmentIdStatusPath = '/api/Accounts/getCustInvoicesByApartmentIdStatus';
AccountsService.getCustInvoicesByApartmentBlockUnitIdPath = '/api/Accounts/getCustInvoicesByApartmentBlockUnitId';
AccountsService.getCustInvoicesByApartmentBlockUnitIdStatusPath = '/api/Accounts/getCustInvoicesByApartmentBlockUnitIdStatus';
AccountsService.getCustInvoicesByApartmentCustInvoiceDateRangePath = '/api/Accounts/getCustInvoicesByApartmentCustInvoiceDateRange';
AccountsService.getCustInvoicesByApartmentDueDateRangePath = '/api/Accounts/getCustInvoicesByApartmentDueDateRange';
AccountsService.getCustInvoiceByIdPath = '/api/Accounts/getCustInvoiceById';
AccountsService.addCustInvoicePath = '/api/Accounts/addCustInvoice';
AccountsService.updateCustInvoicePath = '/api/Accounts/updateCustInvoice';
AccountsService.deleteCustInvoicePath = '/api/Accounts/deleteCustInvoice';
AccountsService.updateCustInvoiceStatusPath = '/api/Accounts/updateCustInvoiceStatus';
AccountsService.getAllInvoiceDetailsPath = '/api/Accounts/getAllInvoiceDetails';
AccountsService.getAllInvoiceDetailsByStatusPath = '/api/Accounts/getAllInvoiceDetailsByStatus';
AccountsService.getInvoiceDetailsByApartmentIdStatusPath = '/api/Accounts/getInvoiceDetailsByApartmentId';
AccountsService.getInvoiceDetailsByApartmentIdStatus_1Path = '/api/Accounts/getInvoiceDetailsByApartmentIdStatus';
AccountsService.getInvoiceDetailsByInvoiceIdPath = '/api/Accounts/getInvoiceDetailsByInvoiceId';
AccountsService.getInvoiceDetailsByIdPath = '/api/Accounts/getInvoiceDetailsById';
AccountsService.addInvoiceDetailsPath = '/api/Accounts/addInvoiceDetails';
AccountsService.updateInvoiceDetailsPath = '/api/Accounts/updateInvoiceDetails';
AccountsService.deleteInvoiceDetailsPath = '/api/Accounts/deleteInvoiceDetails';
AccountsService.getAllInvoiceGLAccountsPath = '/api/Accounts/getAllInvoiceGLAccounts';
AccountsService.getAllInvoiceGLAccountsByStatusPath = '/api/Accounts/getAllInvoiceGLAccountsByStatus';
AccountsService.getAllGLGroupsPath = '/api/Accounts/getAllGLGroups';
AccountsService.getAllGLGroupsByStatusPath = '/api/Accounts/getAllGLGroupsByStatus';
AccountsService.getAllGLGroupsByAccountTypeIDPath = '/api/Accounts/getAllGLGroupsByAccountTypeID';
AccountsService.getGLGroupByIdPath = '/api/Accounts/getGLGroupById';
AccountsService.getGLGroupByApartmentIdPath = '/api/Accounts/getGLGroupByApartmentId';
AccountsService.addGLGroupPath = '/api/Accounts/addGLGroup';
AccountsService.updateGLGroupPath = '/api/Accounts/updateGLGroup';
AccountsService.deleteGLGroupPath = '/api/Accounts/deleteGLGroup';
AccountsService.getAllGLAccountsPath = '/api/Accounts/getAllGLAccounts';
AccountsService.getAllGLAccountsByStatusPath = '/api/Accounts/getAllGLAccountsByStatus';
AccountsService.getGLAccountsByApartmentIdStatusPath = '/api/Accounts/getGLAccountsByApartmentId';
AccountsService.getGLAccountsByGroupIdPath = '/api/Accounts/getGLAccountsByGroupId';
AccountsService.getGLAccountsByApartmentIdStatus_1Path = '/api/Accounts/getGLAccountsByApartmentIdStatus';
AccountsService.getGLAccountsIdPath = '/api/Accounts/getGLAccountsId';
AccountsService.addGLAccountPath = '/api/Accounts/addGLAccount';
AccountsService.updateGLAccountPath = '/api/Accounts/updateGLAccount';
AccountsService.deleteGLAccountPath = '/api/Accounts/deleteGLAccount';
AccountsService.getAllCustAccountsPath = '/api/Accounts/getAllCustAccounts';
AccountsService.getAllCustAccountsByStatusPath = '/api/Accounts/getAllCustAccountsByStatus';
AccountsService.getCustAccountsByApartmentIdStatusPath = '/api/Accounts/getCustAccountsByApartmentId';
AccountsService.getCustAccountsByApartmentIdStatus_1Path = '/api/Accounts/getCustAccountsByApartmentIdStatus';
AccountsService.getCustAccountByIdPath = '/api/Accounts/getCustAccountById';
AccountsService.addCustAccountPath = '/api/Accounts/addCustAccount';
AccountsService.updateCustAccountPath = '/api/Accounts/updateCustAccount';
AccountsService.deleteCustAccountPath = '/api/Accounts/deleteCustAccount';
AccountsService.getAllVendorAccountsPath = '/api/Accounts/getAllVendorAccounts';
AccountsService.getAllVendorAccountsByStatusPath = '/api/Accounts/getAllVendorAccountsByStatus';
AccountsService.getVendorAccountsByApartmentIdStatusPath = '/api/Accounts/getVendorAccountsByApartmentId';
AccountsService.getVendorAccountsByApartmentIdStatus_1Path = '/api/Accounts/getVendorAccountsByApartmentIdStatus';
AccountsService.getVendorAccountByIdPath = '/api/Accounts/getVendorAccountById';
AccountsService.addVendorAccountPath = '/api/Accounts/addVendorAccount';
AccountsService.updateVendorAccountPath = '/api/Accounts/updateVendorAccount';
AccountsService.deleteVendorAccountPath = '/api/Accounts/deleteVendorAccount';
AccountsService.getAllCollectionsPath = '/api/Accounts/getAllCollections';
AccountsService.getAllCollectionsByStatusPath = '/api/Accounts/getAllCollectionsByStatus';
AccountsService.getCollectionsByApartmentIdStatusPath = '/api/Accounts/getCollectionsByApartmentId';
AccountsService.getCollectionsByApartmentIdStatus_1Path = '/api/Accounts/getCollectionsByApartmentIdStatus';
AccountsService.getAllCollectionsByInstrumentTypeIdPath = '/api/Accounts/getAllCollectionsByInstrumentTypeId';
AccountsService.getAllCollectionsByInstrumentTypeIdStatusPath = '/api/Accounts/getAllCollectionsByInstrumentTypeIdStatus';
AccountsService.getAllCollectionsByApartmentIdPostOnPath = '/api/Accounts/getAllCollectionsByApartmentIdPostOn';
AccountsService.getAllCollectionsByApartmentBlockUnitIdPath = '/api/Accounts/getAllCollectionsByApartmentBlockUnitId';
AccountsService.getAllCollectionsByApartmentBlockUnitIdPostOnPath = '/api/Accounts/getAllCollectionsByApartmentBlockUnitIdPostOn';
AccountsService.getCollectionByCollectionIdPath = '/api/Accounts/getCollectionByCollectionId';
AccountsService.addCollectionPath = '/api/Accounts/addCollection';
AccountsService.updateCollectionPath = '/api/Accounts/updateCollection';
AccountsService.deleteCollectionPath = '/api/Accounts/deleteCollection';
AccountsService.getAllCollectionInvoicesPath = '/api/Accounts/getAllCollectionInvoices';
AccountsService.getAllCollectionInvoicesByStatusPath = '/api/Accounts/getAllCollectionInvoicesByStatus';
AccountsService.getCollectionInvoicesByApartmentIdStatusPath = '/api/Accounts/getCollectionInvoicesByApartmentId';
AccountsService.getCollectionInvoicesByApartmentIdStatus_1Path = '/api/Accounts/getCollectionInvoicesByApartmentIdStatus';
AccountsService.getAllCollectionInvoicesByApartmentBlockUnitIdPath = '/api/Accounts/getAllCollectionInvoicesByApartmentBlockUnitId';
AccountsService.getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRangePath = '/api/Accounts/getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRange';
AccountsService.getCollectionInvoiceByInvoiceIdPath = '/api/Accounts/getCollectionInvoiceByInvoiceId';
AccountsService.getCollectionInvoiceByCollectionIdPath = '/api/Accounts/getCollectionInvoiceByCollectionId';
AccountsService.getCollectionInvoiceByCollectionInvoiceIdPath = '/api/Accounts/getCollectionInvoiceByCollectionInvoiceId';
AccountsService.addCollectionInvoicePath = '/api/Accounts/addCollectionInvoice';
AccountsService.updateCollectionInvoicePath = '/api/Accounts/updateCollectionInvoice';
AccountsService.deleteCollectionInvoicePath = '/api/Accounts/deleteCollectionInvoice';
AccountsService.getAllGlnumberRangesPath = '/api/Accounts/getAllGlnumberRanges';
AccountsService.getAllGlnumberRangesByStatusPath = '/api/Accounts/getAllGlnumberRangesByStatus';
AccountsService.getGlnumberRangesByApartmentIdStatusPath = '/api/Accounts/getGlnumberRangesByApartmentId';
AccountsService.getGlnumberRangesByApartmentIdStatus_1Path = '/api/Accounts/getGlnumberRangesByApartmentIdStatus';
AccountsService.getGlnumberRangeByIdPath = '/api/Accounts/getGlnumberRangeById';
AccountsService.addGlnumberRangePath = '/api/Accounts/addGlnumberRange';
AccountsService.updateGlnumberRangePath = '/api/Accounts/updateGlnumberRange';
AccountsService.deleteGlnumberRangePath = '/api/Accounts/deleteGlnumberRange';
AccountsService.getAllCustGltransactionsPath = '/api/Accounts/getAllCustGltransactions';
AccountsService.getAllCustGltransactionsByStatusPath = '/api/Accounts/getAllCustGltransactionsByStatus';
AccountsService.getCustGltransactionsByApartmentIdStatusPath = '/api/Accounts/getCustGltransactionsByApartmentId';
AccountsService.getCustGltransactionsByApartmentIdStatus_1Path = '/api/Accounts/getCustGltransactionsByApartmentIdStatus';
AccountsService.getCustGltransactionByIdPath = '/api/Accounts/getCustGltransactionById';
AccountsService.getCustGltransactionByDocTypeIdPath = '/api/Accounts/getCustGltransactionByDocTypeId';
AccountsService.getCustGltransactionByFiscalYearPath = '/api/Accounts/getCustGltransactionByFiscalYear';
AccountsService.addCustGltransactionPath = '/api/Accounts/addCustGltransaction';
AccountsService.addCustGltransactionListPath = '/api/Accounts/addCustGltransactionList';
AccountsService.updateCustGltransactionPath = '/api/Accounts/updateCustGltransaction';
AccountsService.deleteCustGltransactionPath = '/api/Accounts/deleteCustGltransaction';
AccountsService.getAllVendorGltransactionsPath = '/api/Accounts/getAllVendorGltransactions';
AccountsService.getAllVendorGltransactionsByStatusPath = '/api/Accounts/getAllVendorGltransactionsByStatus';
AccountsService.getVendorGltransactionsByApartmentIdStatusPath = '/api/Accounts/getVendorGltransactionsByApartmentId';
AccountsService.getVendorGltransactionsByApartmentIdStatus_1Path = '/api/Accounts/getVendorGltransactionsByApartmentIdStatus';
AccountsService.getVendorGltransactionByIdPath = '/api/Accounts/getVendorGltransactionById';
AccountsService.addVendorGltransactionPath = '/api/Accounts/addVendorGltransaction';
AccountsService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AccountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AccountsService);



/***/ })

}]);
//# sourceMappingURL=default~expense-tracker-expense-tracker-module~general-ledger-general-ledger-module~income-tracker-i~986cbaee-es2015.js.map