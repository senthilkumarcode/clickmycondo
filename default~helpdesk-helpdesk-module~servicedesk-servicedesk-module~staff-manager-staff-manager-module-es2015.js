(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~helpdesk-helpdesk-module~servicedesk-servicedesk-module~staff-manager-staff-manager-module"],{

/***/ "./src/app/api/services/staff.service.ts":
/*!***********************************************!*\
  !*** ./src/app/api/services/staff.service.ts ***!
  \***********************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

/* tslint:disable */





let StaffService = class StaffService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    getAllStaffsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffs`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllStaffs() {
        return this.getAllStaffsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllStaffsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffsByStatus`, __body, {
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
    getAllStaffsByStatus(active) {
        return this.getAllStaffsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param staffId undefined
     */
    getStaffByStaffIdResponse(staffId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (staffId != null)
            __params = __params.set('staffId', staffId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getStaffByStaffId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param staffId undefined
     */
    getStaffByStaffId(staffId) {
        return this.getStaffByStaffIdResponse(staffId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllStaffsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffsByApartmentId`, __body, {
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
    getAllStaffsByApartmentId(apartmentId) {
        return this.getAllStaffsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.GetAllStaffsByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllStaffsByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllStaffsByApartmentIdStatus(params) {
        return this.getAllStaffsByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitId undefined
     */
    getAllStaffsByApartmentBlockUnitIdResponse(apartmentBlockUnitId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', apartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffsByApartmentBlockUnitId`, __body, {
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
    getAllStaffsByApartmentBlockUnitId(apartmentBlockUnitId) {
        return this.getAllStaffsByApartmentBlockUnitIdResponse(apartmentBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.GetAllStaffsByApartmentBlockUnitIdStatusParams` containing the following parameters:
     *
     * - `apartmentBlockUnitId`:
     *
     * - `active`:
     */
    getAllStaffsByApartmentBlockUnitIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentBlockUnitId != null)
            __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffsByApartmentBlockUnitIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllStaffsByApartmentBlockUnitIdStatus(params) {
        return this.getAllStaffsByApartmentBlockUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.GetAllStaffsByApartmentIdCategoryIdParams` containing the following parameters:
     *
     * - `categoryId`:
     *
     * - `apartmentId`:
     */
    getAllStaffsByApartmentIdCategoryIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.categoryId != null)
            __params = __params.set('categoryId', params.categoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffsByApartmentIdCategoryId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllStaffsByApartmentIdCategoryId(params) {
        return this.getAllStaffsByApartmentIdCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getAllStaffsByApartmentIdCategoryIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.categoryId != null)
            __params = __params.set('categoryId', params.categoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffsByApartmentIdCategoryIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllStaffsByApartmentIdCategoryIdStatus(params) {
        return this.getAllStaffsByApartmentIdCategoryIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.GetAllStaffsByApartmentIdSubCategoryIdParams` containing the following parameters:
     *
     * - `subCategoryId`:
     *
     * - `apartmentId`:
     */
    getAllStaffsByApartmentIdSubCategoryIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.subCategoryId != null)
            __params = __params.set('subCategoryId', params.subCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffsByApartmentIdSubCategoryId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllStaffsByApartmentIdSubCategoryId(params) {
        return this.getAllStaffsByApartmentIdSubCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getAllStaffsByApartmentIdSubCategoryIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.subCategoryId != null)
            __params = __params.set('subCategoryId', params.subCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffsByApartmentIdSubCategoryIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllStaffsByApartmentIdSubCategoryIdStatus(params) {
        return this.getAllStaffsByApartmentIdSubCategoryIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getAllStaffsByApartmentIdCategoryIdSubCategoryIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.subCategoryId != null)
            __params = __params.set('subCategoryId', params.subCategoryId.toString());
        if (params.categoryId != null)
            __params = __params.set('categoryId', params.categoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffsByApartmentIdCategoryIdSubCategoryId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllStaffsByApartmentIdCategoryIdSubCategoryId(params) {
        return this.getAllStaffsByApartmentIdCategoryIdSubCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.subCategoryId != null)
            __params = __params.set('subCategoryId', params.subCategoryId.toString());
        if (params.categoryId != null)
            __params = __params.set('categoryId', params.categoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatus(params) {
        return this.getAllStaffsByApartmentIdCategoryIdSubCategoryIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param staff undefined
     */
    addStaffResponse(staff) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = staff;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/addStaff`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param staff undefined
     */
    addStaff(staff) {
        return this.addStaffResponse(staff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param staff undefined
     */
    updateStaffResponse(staff) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = staff;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/updateStaff`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param staff undefined
     */
    updateStaff(staff) {
        return this.updateStaffResponse(staff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.DeleteStaffParams` containing the following parameters:
     *
     * - `staffId`:
     *
     * - `deleteBy`:
     */
    deleteStaffResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.staffId != null)
            __params = __params.set('staffId', params.staffId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/deleteStaff`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteStaff(params) {
        return this.deleteStaffResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    addStaffPhotoResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let __formData = new FormData();
        __body = __formData;
        if (params.staffId != null)
            __params = __params.set('staffId', params.staffId.toString());
        if (params.file != null) {
            __formData.append('file', params.file);
        }
        if (params.description != null)
            __params = __params.set('description', params.description.toString());
        if (params.addBy != null)
            __params = __params.set('addBy', params.addBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/addStaffPhoto`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    addStaffPhoto(params) {
        return this.addStaffPhotoResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitStaff undefined
     */
    addApartmentBlockUnitStaffResponse(apartmentBlockUnitStaff) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = apartmentBlockUnitStaff;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/addApartmentBlockUnitStaff`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockUnitStaff undefined
     */
    addApartmentBlockUnitStaff(apartmentBlockUnitStaff) {
        return this.addApartmentBlockUnitStaffResponse(apartmentBlockUnitStaff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentBlockUnitStaff undefined
     */
    updateApartmentBlockUnitStaffResponse(apartmentBlockUnitStaff) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = apartmentBlockUnitStaff;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/updateApartmentBlockUnitStaff`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentBlockUnitStaff undefined
     */
    updateApartmentBlockUnitStaff(apartmentBlockUnitStaff) {
        return this.updateApartmentBlockUnitStaffResponse(apartmentBlockUnitStaff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.DeleteApartmentBlockUnitStaffParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `apartmentBlockUnitStaffId`:
     */
    deleteApartmentBlockUnitStaffResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.apartmentBlockUnitStaffId != null)
            __params = __params.set('apartmentBlockUnitStaffId', params.apartmentBlockUnitStaffId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/deleteApartmentBlockUnitStaff`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteApartmentBlockUnitStaff(params) {
        return this.deleteApartmentBlockUnitStaffResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllGatesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllGates`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllGates() {
        return this.getAllGatesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllGatesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllGatesByStatus`, __body, {
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
    getAllGatesByStatus(active) {
        return this.getAllGatesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param gateId undefined
     */
    getGateByGateIdResponse(gateId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (gateId != null)
            __params = __params.set('gateId', gateId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getGateByGateId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param gateId undefined
     */
    getGateByGateId(gateId) {
        return this.getGateByGateIdResponse(gateId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllGatesByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllGatesByApartmentId`, __body, {
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
    getAllGatesByApartmentId(apartmentId) {
        return this.getAllGatesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.GetAllGatesByApartmentId_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllGatesByApartmentId_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllGatesByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllGatesByApartmentId_1(params) {
        return this.getAllGatesByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param gate undefined
     */
    addGateResponse(gate) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = gate;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/addGate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param gate undefined
     */
    addGate(gate) {
        return this.addGateResponse(gate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param gate undefined
     */
    updateGateResponse(gate) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = gate;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/updateGate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param gate undefined
     */
    updateGate(gate) {
        return this.updateGateResponse(gate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.DeleteGateParams` containing the following parameters:
     *
     * - `gateId`:
     *
     * - `deleteBy`:
     */
    deleteGateResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.gateId != null)
            __params = __params.set('gateId', params.gateId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/deleteGate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteGate(params) {
        return this.deleteGateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param gateSecurity undefined
     */
    addGateSecurityResponse(gateSecurity) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = gateSecurity;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/addGateSecurity`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param gateSecurity undefined
     */
    addGateSecurity(gateSecurity) {
        return this.addGateSecurityResponse(gateSecurity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param gateSecurity undefined
     */
    updateGateSecurityResponse(gateSecurity) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = gateSecurity;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/updateGateSecurity`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param gateSecurity undefined
     */
    updateGateSecurity(gateSecurity) {
        return this.updateGateSecurityResponse(gateSecurity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.DeleteGateSecurityParams` containing the following parameters:
     *
     * - `gateSecurityId`:
     *
     * - `deleteBy`:
     */
    deleteGateSecurityResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.gateSecurityId != null)
            __params = __params.set('gateSecurityId', params.gateSecurityId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/deleteGateSecurity`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteGateSecurity(params) {
        return this.deleteGateSecurityResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllShiftsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllShifts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllShifts() {
        return this.getAllShiftsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllShiftsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllShiftsByStatus`, __body, {
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
    getAllShiftsByStatus(active) {
        return this.getAllShiftsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param shiftId undefined
     */
    getShiftByShiftIdResponse(shiftId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (shiftId != null)
            __params = __params.set('shiftId', shiftId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getShiftByShiftId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param shiftId undefined
     */
    getShiftByShiftId(shiftId) {
        return this.getShiftByShiftIdResponse(shiftId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllShiftsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllShiftsByApartmentId`, __body, {
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
    getAllShiftsByApartmentId(apartmentId) {
        return this.getAllShiftsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.GetAllShiftsByApartmentId_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllShiftsByApartmentId_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllShiftsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllShiftsByApartmentId_1(params) {
        return this.getAllShiftsByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param shift undefined
     */
    addShiftResponse(shift) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = shift;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/addShift`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param shift undefined
     */
    addShift(shift) {
        return this.addShiftResponse(shift).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param shift undefined
     */
    updateShiftResponse(shift) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = shift;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/updateShift`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param shift undefined
     */
    updateShift(shift) {
        return this.updateShiftResponse(shift).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.DeleteShiftParams` containing the following parameters:
     *
     * - `shiftId`:
     *
     * - `deleteBy`:
     */
    deleteShiftResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.shiftId != null)
            __params = __params.set('shiftId', params.shiftId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/deleteShift`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteShift(params) {
        return this.deleteShiftResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllAttendancesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllAttendances`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllAttendances() {
        return this.getAllAttendancesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllAttendancesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllAttendancesByStatus`, __body, {
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
    getAllAttendancesByStatus(active) {
        return this.getAllAttendancesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param attendanceId undefined
     */
    getAttendanceByAttendanceIdResponse(attendanceId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (attendanceId != null)
            __params = __params.set('attendanceId', attendanceId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAttendanceByAttendanceId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param attendanceId undefined
     */
    getAttendanceByAttendanceId(attendanceId) {
        return this.getAttendanceByAttendanceIdResponse(attendanceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllAttendancesByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllAttendancesByApartmentId`, __body, {
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
    getAllAttendancesByApartmentId(apartmentId) {
        return this.getAllAttendancesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.GetAllAttendancesByApartmentId_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllAttendancesByApartmentId_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllAttendancesByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllAttendancesByApartmentId_1(params) {
        return this.getAllAttendancesByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    getAllAttendancesByAparmentIdDatesResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllAttendancesByAparmentIdDates`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllAttendancesByAparmentIdDates(params) {
        return this.getAllAttendancesByAparmentIdDatesResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.GetAllAttendancesByDatesParams` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     */
    getAllAttendancesByDatesResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllAttendancesByDates`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllAttendancesByDates(params) {
        return this.getAllAttendancesByDatesResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param attendance undefined
     */
    addAttendanceResponse(attendance) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = attendance;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/addAttendance`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param attendance undefined
     */
    addAttendance(attendance) {
        return this.addAttendanceResponse(attendance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param attendance undefined
     */
    updateAttendanceResponse(attendance) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = attendance;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/updateAttendance`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param attendance undefined
     */
    updateAttendance(attendance) {
        return this.updateAttendanceResponse(attendance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.DeleteAttendanceParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `attendanceId`:
     */
    deleteAttendanceResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.attendanceId != null)
            __params = __params.set('attendanceId', params.attendanceId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/deleteAttendance`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteAttendance(params) {
        return this.deleteAttendanceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllOverTimesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllOverTimes`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllOverTimes() {
        return this.getAllOverTimesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllOverTimesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllOverTimesByStatus`, __body, {
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
    getAllOverTimesByStatus(active) {
        return this.getAllOverTimesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param overTimeId undefined
     */
    getOverTimeByOverTimeIdResponse(overTimeId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (overTimeId != null)
            __params = __params.set('overTimeId', overTimeId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getOverTimeByOverTimeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param overTimeId undefined
     */
    getOverTimeByOverTimeId(overTimeId) {
        return this.getOverTimeByOverTimeIdResponse(overTimeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllOverTimesByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllOverTimesByApartmentId`, __body, {
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
    getAllOverTimesByApartmentId(apartmentId) {
        return this.getAllOverTimesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.GetAllOverTimesByApartmentId_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllOverTimesByApartmentId_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllOverTimesByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllOverTimesByApartmentId_1(params) {
        return this.getAllOverTimesByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param overTime undefined
     */
    addOverTimeResponse(overTime) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = overTime;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/addOverTime`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param overTime undefined
     */
    addOverTime(overTime) {
        return this.addOverTimeResponse(overTime).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param overTime undefined
     */
    updateOverTimeResponse(overTime) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = overTime;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/updateOverTime`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param overTime undefined
     */
    updateOverTime(overTime) {
        return this.updateOverTimeResponse(overTime).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.DeleteOverTimeParams` containing the following parameters:
     *
     * - `overTimeId`:
     *
     * - `deleteBy`:
     */
    deleteOverTimeResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.overTimeId != null)
            __params = __params.set('overTimeId', params.overTimeId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/deleteOverTime`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteOverTime(params) {
        return this.deleteOverTimeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllStaffLeavesResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffLeaves`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllStaffLeaves() {
        return this.getAllStaffLeavesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllStaffLeavesByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffLeavesByStatus`, __body, {
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
    getAllStaffLeavesByStatus(active) {
        return this.getAllStaffLeavesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param staffLeaveId undefined
     */
    getStaffLeaveByStaffLeaveIdResponse(staffLeaveId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (staffLeaveId != null)
            __params = __params.set('staffLeaveId', staffLeaveId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getStaffLeaveByStaffLeaveId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param staffLeaveId undefined
     */
    getStaffLeaveByStaffLeaveId(staffLeaveId) {
        return this.getStaffLeaveByStaffLeaveIdResponse(staffLeaveId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllStaffLeavesByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffLeavesByApartmentId`, __body, {
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
    getAllStaffLeavesByApartmentId(apartmentId) {
        return this.getAllStaffLeavesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.GetAllStaffLeavesByApartmentId_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllStaffLeavesByApartmentId_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllStaffLeavesByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllStaffLeavesByApartmentId_1(params) {
        return this.getAllStaffLeavesByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param staffLeave undefined
     */
    addStaffLeaveResponse(staffLeave) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = staffLeave;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/addStaffLeave`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param staffLeave undefined
     */
    addStaffLeave(staffLeave) {
        return this.addStaffLeaveResponse(staffLeave).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param staffLeave undefined
     */
    updateStaffLeaveResponse(staffLeave) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = staffLeave;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/updateStaffLeave`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param staffLeave undefined
     */
    updateStaffLeave(staffLeave) {
        return this.updateStaffLeaveResponse(staffLeave).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.DeleteStaffLeaveParams` containing the following parameters:
     *
     * - `staffLeaveId`:
     *
     * - `deleteBy`:
     */
    deleteStaffLeaveResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.staffLeaveId != null)
            __params = __params.set('staffLeaveId', params.staffLeaveId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/deleteStaffLeave`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deleteStaffLeave(params) {
        return this.deleteStaffLeaveResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllPayRollsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllPayRolls`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllPayRolls() {
        return this.getAllPayRollsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllPayRollsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllPayRollsByStatus`, __body, {
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
    getAllPayRollsByStatus(active) {
        return this.getAllPayRollsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param payRollId undefined
     */
    getPayRollByPayRollIdResponse(payRollId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (payRollId != null)
            __params = __params.set('payRollId', payRollId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getPayRollByPayRollId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param payRollId undefined
     */
    getPayRollByPayRollId(payRollId) {
        return this.getPayRollByPayRollIdResponse(payRollId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllPayRollsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllPayRollsByApartmentId`, __body, {
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
    getAllPayRollsByApartmentId(apartmentId) {
        return this.getAllPayRollsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.GetAllPayRollsByApartmentId_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllPayRollsByApartmentId_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/getAllPayRollsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    getAllPayRollsByApartmentId_1(params) {
        return this.getAllPayRollsByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param payRoll undefined
     */
    addPayRollResponse(payRoll) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = payRoll;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/addPayRoll`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param payRoll undefined
     */
    addPayRoll(payRoll) {
        return this.addPayRollResponse(payRoll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param payRoll undefined
     */
    updatePayRollResponse(payRoll) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = payRoll;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/updatePayRoll`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param payRoll undefined
     */
    updatePayRoll(payRoll) {
        return this.updatePayRollResponse(payRoll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `StaffService.DeletePayRollParams` containing the following parameters:
     *
     * - `payRollId`:
     *
     * - `deleteBy`:
     */
    deletePayRollResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.payRollId != null)
            __params = __params.set('payRollId', params.payRollId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Staff/deletePayRoll`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    deletePayRoll(params) {
        return this.deletePayRollResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
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
    CalculatePayRollResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.includeDeduction != null)
            __params = __params.set('includeDeduction', params.includeDeduction.toString());
        if (params.includeAllowance != null)
            __params = __params.set('includeAllowance', params.includeAllowance.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Staff/CalculatePayRoll`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
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
    CalculatePayRoll(params) {
        return this.CalculatePayRollResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
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
StaffService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StaffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StaffService);



/***/ })

}]);
//# sourceMappingURL=default~helpdesk-helpdesk-module~servicedesk-servicedesk-module~staff-manager-staff-manager-module-es2015.js.map