(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~assets-assets-module~my-property-my-property-module"],{

/***/ "./src/app/api/services/asset.service.ts":
/*!***********************************************!*\
  !*** ./src/app/api/services/asset.service.ts ***!
  \***********************************************/
/*! exports provided: AssetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetService", function() { return AssetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

/* tslint:disable */





let AssetService = class AssetService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @param apartmentId undefined
     */
    getAllAssetByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetByApartmentId`, __body, {
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
    getAllAssetByApartmentId(apartmentId) {
        return this.getAllAssetByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.GetAllAssetByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllAssetByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.GetAllAssetByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllAssetByApartmentIdStatus(params) {
        return this.getAllAssetByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param assetId undefined
     */
    getAllAssetByAssetIdResponse(assetId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (assetId != null)
            __params = __params.set('assetId', assetId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetByAssetId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param assetId undefined
     */
    getAllAssetByAssetId(assetId) {
        return this.getAllAssetByAssetIdResponse(assetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param assetCategoryId undefined
     */
    getAllAssetByCategoryIdResponse(assetCategoryId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (assetCategoryId != null)
            __params = __params.set('assetCategoryId', assetCategoryId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetByCategoryId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param assetCategoryId undefined
     */
    getAllAssetByCategoryId(assetCategoryId) {
        return this.getAllAssetByCategoryIdResponse(assetCategoryId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.GetAllAssetByCategoryIdStatusParams` containing the following parameters:
     *
     * - `assetCategoryId`:
     *
     * - `active`:
     */
    getAllAssetByCategoryIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.assetCategoryId != null)
            __params = __params.set('assetCategoryId', params.assetCategoryId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetByCategoryIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.GetAllAssetByCategoryIdStatusParams` containing the following parameters:
     *
     * - `assetCategoryId`:
     *
     * - `active`:
     */
    getAllAssetByCategoryIdStatus(params) {
        return this.getAllAssetByCategoryIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.AddAssetAsyncParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `asset`:
     */
    addAssetAsyncResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let __formData = new FormData();
        __body = __formData;
        if (params.file != null) {
            __formData.append('file', params.file);
        }
        __body = params.asset;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/addAsset`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.AddAssetAsyncParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `asset`:
     */
    addAssetAsync(params) {
        return this.addAssetAsyncResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.UpdateAssetAsyncParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `asset`:
     */
    updateAssetAsyncResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let __formData = new FormData();
        __body = __formData;
        if (params.file != null) {
            __formData.append('file', params.file);
        }
        __body = params.asset;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/updateAsset`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.UpdateAssetAsyncParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `asset`:
     */
    updateAssetAsync(params) {
        return this.updateAssetAsyncResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.DeleteAssetParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `assetId`:
     */
    deleteAssetResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.assetId != null)
            __params = __params.set('assetId', params.assetId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/deleteAsset`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.DeleteAssetParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `assetId`:
     */
    deleteAsset(params) {
        return this.deleteAssetResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllAssetMaintenancePlanByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetMaintenancePlanByApartmentId`, __body, {
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
    getAllAssetMaintenancePlanByApartmentId(apartmentId) {
        return this.getAllAssetMaintenancePlanByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.GetAllAssetMaintenancePlanByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllAssetMaintenancePlanByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetMaintenancePlanByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.GetAllAssetMaintenancePlanByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllAssetMaintenancePlanByApartmentIdStatus(params) {
        return this.getAllAssetMaintenancePlanByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param assetMaintenancePlanId undefined
     */
    getAllAssetMaintenancePlanByIdResponse(assetMaintenancePlanId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (assetMaintenancePlanId != null)
            __params = __params.set('assetMaintenancePlanId', assetMaintenancePlanId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetMaintenancePlanById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param assetMaintenancePlanId undefined
     */
    getAllAssetMaintenancePlanById(assetMaintenancePlanId) {
        return this.getAllAssetMaintenancePlanByIdResponse(assetMaintenancePlanId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param assetId undefined
     */
    getAllAssetMaintenancePlanByAssetIdResponse(assetId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (assetId != null)
            __params = __params.set('assetId', assetId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetMaintenancePlanByAssetId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param assetId undefined
     */
    getAllAssetMaintenancePlanByAssetId(assetId) {
        return this.getAllAssetMaintenancePlanByAssetIdResponse(assetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param assetMaintenancePlan undefined
     */
    addAssetMaintenancePlanResponse(assetMaintenancePlan) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = assetMaintenancePlan;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/addAssetMaintenancePlan`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param assetMaintenancePlan undefined
     */
    addAssetMaintenancePlan(assetMaintenancePlan) {
        return this.addAssetMaintenancePlanResponse(assetMaintenancePlan).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param assetMaintenancePlan undefined
     */
    updateAssetMaintenancePlanResponse(assetMaintenancePlan) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = assetMaintenancePlan;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/updateAssetMaintenancePlan`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param assetMaintenancePlan undefined
     */
    updateAssetMaintenancePlan(assetMaintenancePlan) {
        return this.updateAssetMaintenancePlanResponse(assetMaintenancePlan).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.DeleteAssetMaintenancePlanParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `assetMaintenancePlanId`:
     */
    deleteAssetMaintenancePlanResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.assetMaintenancePlanId != null)
            __params = __params.set('assetMaintenancePlanId', params.assetMaintenancePlanId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/deleteAssetMaintenancePlan`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.DeleteAssetMaintenancePlanParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `assetMaintenancePlanId`:
     */
    deleteAssetMaintenancePlan(params) {
        return this.deleteAssetMaintenancePlanResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllAssetInsurancePlanByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetInsurancePlanByApartmentId`, __body, {
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
    getAllAssetInsurancePlanByApartmentId(apartmentId) {
        return this.getAllAssetInsurancePlanByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param Id undefined
     */
    getAllAssetInsurancePlanByIdResponse(Id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (Id != null)
            __params = __params.set('Id', Id.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetInsurancePlanById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param Id undefined
     */
    getAllAssetInsurancePlanById(Id) {
        return this.getAllAssetInsurancePlanByIdResponse(Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param AssetId undefined
     */
    getAllAssetInsurancePlanByAssetIdResponse(AssetId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (AssetId != null)
            __params = __params.set('AssetId', AssetId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetInsurancePlanByAssetId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param AssetId undefined
     */
    getAllAssetInsurancePlanByAssetId(AssetId) {
        return this.getAllAssetInsurancePlanByAssetIdResponse(AssetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param assetInsurancePlan undefined
     */
    addAssetInsurancePlanResponse(assetInsurancePlan) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = assetInsurancePlan;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/addAssetInsurancePlan`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param assetInsurancePlan undefined
     */
    addAssetInsurancePlan(assetInsurancePlan) {
        return this.addAssetInsurancePlanResponse(assetInsurancePlan).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param assetInsurancePlan undefined
     */
    updateAssetInsurancePlanResponse(assetInsurancePlan) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = assetInsurancePlan;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/updateAssetInsurancePlan`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param assetInsurancePlan undefined
     */
    updateAssetInsurancePlan(assetInsurancePlan) {
        return this.updateAssetInsurancePlanResponse(assetInsurancePlan).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.DeleteAssetInsurancePlanParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `assetInsurancePlanId`:
     */
    deleteAssetInsurancePlanResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.assetInsurancePlanId != null)
            __params = __params.set('assetInsurancePlanId', params.assetInsurancePlanId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/deleteAssetInsurancePlan`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.DeleteAssetInsurancePlanParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `assetInsurancePlanId`:
     */
    deleteAssetInsurancePlan(params) {
        return this.deleteAssetInsurancePlanResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    getAllAssetCheckInOutResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetCheckInOut`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllAssetCheckInOut() {
        return this.getAllAssetCheckInOutResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getAllAssetCheckInOutByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetCheckInOutByApartmentId`, __body, {
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
    getAllAssetCheckInOutByApartmentId(apartmentId) {
        return this.getAllAssetCheckInOutByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.GetAllAssetCheckInOutByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllAssetCheckInOutByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetCheckInOutByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.GetAllAssetCheckInOutByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getAllAssetCheckInOutByApartmentIdStatus(params) {
        return this.getAllAssetCheckInOutByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param assetCheckInOutId undefined
     */
    getAllAssetCheckInOutByIdResponse(assetCheckInOutId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (assetCheckInOutId != null)
            __params = __params.set('assetCheckInOutId', assetCheckInOutId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetCheckInOutById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param assetCheckInOutId undefined
     */
    getAllAssetCheckInOutById(assetCheckInOutId) {
        return this.getAllAssetCheckInOutByIdResponse(assetCheckInOutId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllAssetCheckInOutByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/getAllAssetCheckInOutByStatus`, __body, {
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
    getAllAssetCheckInOutByStatus(active) {
        return this.getAllAssetCheckInOutByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param assetCheckInOut undefined
     */
    addAssetCheckInOutResponse(assetCheckInOut) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = assetCheckInOut;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/addAssetCheckInOut`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param assetCheckInOut undefined
     */
    addAssetCheckInOut(assetCheckInOut) {
        return this.addAssetCheckInOutResponse(assetCheckInOut).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param assetCheckInOut undefined
     */
    updateAssetCheckInOutResponse(assetCheckInOut) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = assetCheckInOut;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/updateAssetCheckInOut`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param assetCheckInOut undefined
     */
    updateAssetCheckInOut(assetCheckInOut) {
        return this.updateAssetCheckInOutResponse(assetCheckInOut).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.DeleteAssetCheckInOutParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `assetCheckInOutId`:
     */
    deleteAssetCheckInOutResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        if (params.assetCheckInOutId != null)
            __params = __params.set('assetCheckInOutId', params.assetCheckInOutId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Asset/deleteAssetCheckInOut`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.DeleteAssetCheckInOutParams` containing the following parameters:
     *
     * - `deleteBy`:
     *
     * - `assetCheckInOutId`:
     */
    deleteAssetCheckInOut(params) {
        return this.deleteAssetCheckInOutResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.GetAssetDetailsbyMaintenanceCountParams` containing the following parameters:
     *
     * - `MaintenanceDays`:
     *
     * - `MaintenanceCompletedDays`:
     *
     * - `InsuranceExpDays`:
     *
     * - `ApartmentId`:
     */
    GetAssetDetailsbyMaintenanceCountResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.MaintenanceDays != null)
            __params = __params.set('MaintenanceDays', params.MaintenanceDays.toString());
        if (params.MaintenanceCompletedDays != null)
            __params = __params.set('MaintenanceCompletedDays', params.MaintenanceCompletedDays.toString());
        if (params.InsuranceExpDays != null)
            __params = __params.set('InsuranceExpDays', params.InsuranceExpDays.toString());
        if (params.ApartmentId != null)
            __params = __params.set('ApartmentId', params.ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/GetAssetDetailsbyMaintenanceCount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.GetAssetDetailsbyMaintenanceCountParams` containing the following parameters:
     *
     * - `MaintenanceDays`:
     *
     * - `MaintenanceCompletedDays`:
     *
     * - `InsuranceExpDays`:
     *
     * - `ApartmentId`:
     */
    GetAssetDetailsbyMaintenanceCount(params) {
        return this.GetAssetDetailsbyMaintenanceCountResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.GetAssetMasterDetailParams` containing the following parameters:
     *
     * - `days`:
     *
     * - `InputType`:
     *
     * - `ApartmentId`:
     */
    GetAssetMasterDetailResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.days != null)
            __params = __params.set('days', params.days.toString());
        if (params.InputType != null)
            __params = __params.set('InputType', params.InputType.toString());
        if (params.ApartmentId != null)
            __params = __params.set('ApartmentId', params.ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/GetAssetMasterDetail`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.GetAssetMasterDetailParams` containing the following parameters:
     *
     * - `days`:
     *
     * - `InputType`:
     *
     * - `ApartmentId`:
     */
    GetAssetMasterDetail(params) {
        return this.GetAssetMasterDetailResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `AssetService.GetAssetCountsByCategoryIdParams` containing the following parameters:
     *
     * - `AssetCategoryId`:
     *
     * - `ApartmentId`:
     */
    GetAssetCountsByCategoryIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.AssetCategoryId != null)
            __params = __params.set('AssetCategoryId', params.AssetCategoryId.toString());
        if (params.ApartmentId != null)
            __params = __params.set('ApartmentId', params.ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Asset/GetAssetCountsByCategoryId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `AssetService.GetAssetCountsByCategoryIdParams` containing the following parameters:
     *
     * - `AssetCategoryId`:
     *
     * - `ApartmentId`:
     */
    GetAssetCountsByCategoryId(params) {
        return this.GetAssetCountsByCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
AssetService.getAllAssetByApartmentIdPath = '/api/Asset/getAllAssetByApartmentId';
AssetService.getAllAssetByApartmentIdStatusPath = '/api/Asset/getAllAssetByApartmentIdStatus';
AssetService.getAllAssetByAssetIdPath = '/api/Asset/getAllAssetByAssetId';
AssetService.getAllAssetByCategoryIdPath = '/api/Asset/getAllAssetByCategoryId';
AssetService.getAllAssetByCategoryIdStatusPath = '/api/Asset/getAllAssetByCategoryIdStatus';
AssetService.addAssetAsyncPath = '/api/Asset/addAsset';
AssetService.updateAssetAsyncPath = '/api/Asset/updateAsset';
AssetService.deleteAssetPath = '/api/Asset/deleteAsset';
AssetService.getAllAssetMaintenancePlanByApartmentIdPath = '/api/Asset/getAllAssetMaintenancePlanByApartmentId';
AssetService.getAllAssetMaintenancePlanByApartmentIdStatusPath = '/api/Asset/getAllAssetMaintenancePlanByApartmentIdStatus';
AssetService.getAllAssetMaintenancePlanByIdPath = '/api/Asset/getAllAssetMaintenancePlanById';
AssetService.getAllAssetMaintenancePlanByAssetIdPath = '/api/Asset/getAllAssetMaintenancePlanByAssetId';
AssetService.addAssetMaintenancePlanPath = '/api/Asset/addAssetMaintenancePlan';
AssetService.updateAssetMaintenancePlanPath = '/api/Asset/updateAssetMaintenancePlan';
AssetService.deleteAssetMaintenancePlanPath = '/api/Asset/deleteAssetMaintenancePlan';
AssetService.getAllAssetInsurancePlanByApartmentIdPath = '/api/Asset/getAllAssetInsurancePlanByApartmentId';
AssetService.getAllAssetInsurancePlanByIdPath = '/api/Asset/getAllAssetInsurancePlanById';
AssetService.getAllAssetInsurancePlanByAssetIdPath = '/api/Asset/getAllAssetInsurancePlanByAssetId';
AssetService.addAssetInsurancePlanPath = '/api/Asset/addAssetInsurancePlan';
AssetService.updateAssetInsurancePlanPath = '/api/Asset/updateAssetInsurancePlan';
AssetService.deleteAssetInsurancePlanPath = '/api/Asset/deleteAssetInsurancePlan';
AssetService.getAllAssetCheckInOutPath = '/api/Asset/getAllAssetCheckInOut';
AssetService.getAllAssetCheckInOutByApartmentIdPath = '/api/Asset/getAllAssetCheckInOutByApartmentId';
AssetService.getAllAssetCheckInOutByApartmentIdStatusPath = '/api/Asset/getAllAssetCheckInOutByApartmentIdStatus';
AssetService.getAllAssetCheckInOutByIdPath = '/api/Asset/getAllAssetCheckInOutById';
AssetService.getAllAssetCheckInOutByStatusPath = '/api/Asset/getAllAssetCheckInOutByStatus';
AssetService.addAssetCheckInOutPath = '/api/Asset/addAssetCheckInOut';
AssetService.updateAssetCheckInOutPath = '/api/Asset/updateAssetCheckInOut';
AssetService.deleteAssetCheckInOutPath = '/api/Asset/deleteAssetCheckInOut';
AssetService.GetAssetDetailsbyMaintenanceCountPath = '/api/Asset/GetAssetDetailsbyMaintenanceCount';
AssetService.GetAssetMasterDetailPath = '/api/Asset/GetAssetMasterDetail';
AssetService.GetAssetCountsByCategoryIdPath = '/api/Asset/GetAssetCountsByCategoryId';
AssetService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AssetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AssetService);



/***/ })

}]);
//# sourceMappingURL=default~assets-assets-module~my-property-my-property-module-es2015.js.map