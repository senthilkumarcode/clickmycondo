(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-ams-dashboard-dashboard-module~modules-ams-my-property-all-property-all-property-mod~9ae89c6d"],{

/***/ "./src/app/api/controllers/DashBoard.ts":
/*!**********************************************!*\
  !*** ./src/app/api/controllers/DashBoard.ts ***!
  \**********************************************/
/*! exports provided: DashBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardService", function() { return DashBoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* tslint:disable:max-line-length */
/**
 * v1
 * AMS API
 * undefined
 */



let DashBoardService = class DashBoardService {
    constructor(http) {
        this.http = http;
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalunitsbyApartmentID */
    getDashTotalunitsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashTotalunitsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalTowersbyApartmentID */
    getDashTotalTowersbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashTotalTowersbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalownersbyApartmentID */
    getDashTotalownersbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashTotalownersbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalTenantsbyApartmentID */
    getDashTotalTenantsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashTotalTenantsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalAdminsbyApartmentID */
    getDashTotalAdminsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashTotalAdminsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalStaffbyApartmentID */
    getDashTotalStaffbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashTotalStaffbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnapprovedUsersPendingAdminbyApartmentID */
    getDashUnapprovedUsersPendingAdminbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashUnapprovedUsersPendingAdminbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnapprovedUsersPendingusersbyApartmentID */
    getDashUnapprovedUsersPendingusersbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashUnapprovedUsersPendingusersbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpencommticketsbyApartmentID */
    getDashOpencommticketsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashOpencommticketsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenpersonalticketsbyApartmentID */
    getDashOpenpersonalticketsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashOpenpersonalticketsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashHighpriorityopenpersonalTicketsbyApartmentID */
    getDashHighpriorityopenpersonalTicketsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashHighpriorityopenpersonalTicketsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashHighpriorityopenCommunityTicketsbyApartmentID */
    getDashHighpriorityopenCommunityTicketsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashHighpriorityopenCommunityTicketsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenPersonalAgedTicketsbyApartmentIDbyDays */
    getDashOpenPersonalAgedTicketsbyApartmentIDbyDays(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date,
            noOfDays: params.noOfDays,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashOpenPersonalAgedTicketsbyApartmentIDbyDays`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenCommunityAgedTicketsbyApartmentIDbyDays */
    getDashOpenCommunityAgedTicketsbyApartmentIDbyDays(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date,
            noOfDays: params.noOfDays,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashOpenCommunityAgedTicketsbyApartmentIDbyDays`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnassignedpersonalTicketsbyApartmentID */
    getDashUnassignedpersonalTicketsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashUnassignedpersonalTicketsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnassignedCommunityTicketsbyApartmentID */
    getDashUnassignedCommunityTicketsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashUnassignedCommunityTicketsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashinProgressPanicAlertsbyApartmentID */
    getDashinProgressPanicAlertsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashinProgressPanicAlertsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenPanicAlertsbyApartmentID */
    getDashOpenPanicAlertsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashOpenPanicAlertsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsCheckedinbyApartmentID */
    getDashVisitorsCheckedinbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            startDate: params.startDate,
            EndDate: params.EndDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashVisitorsCheckedinbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsCheckedouttodaybyApartmentID */
    getDashVisitorsCheckedouttodaybyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashVisitorsCheckedouttodaybyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsNotcheckedtodaybyApartmentID */
    getDashVisitorsNotcheckedtodaybyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashVisitorsNotcheckedtodaybyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashunapprovedmoveinbyApartmentID */
    getDashunapprovedmoveinbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashunapprovedmoveinbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashunapprovedmoveoutbyApartmentID */
    getDashunapprovedmoveoutbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashunapprovedmoveoutbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashupcomingmoveinApartmentID */
    getDashupcomingmoveinApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashupcomingmoveinApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashupcomingmoveoutApprovedbyApartmentID */
    getDashupcomingmoveoutApprovedbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashupcomingmoveoutApprovedbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashuptotalparkingslotsbyApartmentID */
    getDashuptotalparkingslotsbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashuptotalparkingslotsbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashuptotalparkingslotsunassignedbyApartmentID */
    getDashuptotalparkingslotsunassignedbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashuptotalparkingslotsunassignedbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashufacilitybookingunapprovedbyApartmentID */
    getDashufacilitybookingunapprovedbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashufacilitybookingunapprovedbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashufacilitybookingapprovedtodaybyApartmentID */
    getDashufacilitybookingapprovedtodaybyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashufacilitybookingapprovedtodaybyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashlistupcomingmeetingbyApartmentID */
    getDashlistupcomingmeetingbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashlistupcomingmeetingbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashlistBroadcastsentbyApartmentID */
    getDashlistBroadcastsentbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashlistBroadcastsentbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalamtbilledcustomersthismonthbyApartmentID */
    getDashTotalamtbilledcustomersthismonthbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashTotalamtbilledcustomersthismonthbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalamtreceivedcustomersthismonthbyApartmentID */
    getDashTotalamtreceivedcustomersthismonthbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashTotalamtreceivedcustomersthismonthbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashpaymentdefaultersasoftodayybyApartmentID */
    getDashpaymentdefaultersasoftodayybyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashpaymentdefaultersasoftodayybyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashcreditnoteappliedbyApartmentID */
    getDashcreditnoteappliedbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashcreditnoteappliedbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashWPapprovalpendingbyApartmentID */
    getDashWPapprovalpendingbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashWPapprovalpendingbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashWPupcomingbyApartmentID */
    getDashWPupcomingbyApartmentId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetDashWPupcomingbyApartmentID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/getUDashVehiclecountbyblockunituser */
    getUDashVehiclecountbyblockunituser(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/getUDashVehiclecountbyblockunituser`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashTotalpetstbyblockunituser */
    getUDashTotalpetstbyblockunituser(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetUDashTotalpetstbyblockunituser`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashPrivateStaffbyblockunituser */
    getUDashPrivateStaffbyblockunituser(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetUDashPrivateStaffbyblockunituser`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashOpenticektsbyblockunituser */
    getUDashOpenticektsbyblockunituser(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetUDashOpenticektsbyblockunituser`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashOpenticektsbyblockunituserTicketpriority */
    getUDashOpenticektsbyblockunituserTicketpriority(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId,
            priority: params.priority,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetUDashOpenticektsbyblockunituserTicketpriority`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashVisitorcheckedinbyblockunituser */
    getUDashVisitorcheckedinbyblockunituser(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitId: params.blockUnitId,
            startDate: params.startDate,
            EndDate: params.EndDate,
            blockUnitUserId: params.blockUnitUserId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetUDashVisitorcheckedinbyblockunituser`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashVisitorNOTcheckeddoubyblockunitID */
    getUDashVisitorNoTcheckeddoubyblockunitId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitId: params.blockUnitId,
            blockUnitUserId: params.blockUnitUserId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetUDashVisitorNOTcheckeddoubyblockunitID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashTotalparkingbyblockunitID */
    getUDashTotalparkingbyblockunitId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitId: params.blockUnitId,
            blockUnitUserId: params.blockUnitUserId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetUDashTotalparkingbyblockunitID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDapprovedfacilittbookingbyblockunitID */
    getUDapprovedfacilittbookingbyblockunitId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetUDapprovedfacilittbookingbyblockunitID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashWaterunitsbyblockunitID */
    getUDashWaterunitsbyblockunitId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID,
            BlockUnitId: params.BlockUnitId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetUDashWaterunitsbyblockunitID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashCurrentViolationsbyblockunituserID */
    getUDashCurrentViolationsbyblockunituserId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID,
            BlockUnitId: params.BlockUnitId,
            fromDate: params.fromDate,
            toDate: params.toDate,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetUDashCurrentViolationsbyblockunituserID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashActiveWorkpermitbyblockunituserID */
    getUDashActiveWorkpermitbyblockunituserId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID,
            BlockUnitId: params.BlockUnitId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetUDashActiveWorkpermitbyblockunituserID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetVehicleNumberbyStaffID */
    getVehicleNumberbyStaffId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetVehicleNumberbyStaffID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetTicketsassignedtouserbyUserID */
    getTicketsassignedtouserbyUserId(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            UserID: params.UserID,
            TicketType: params.TicketType,
            Priority: params.Priority,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetTicketsassignedtouserbyUserID`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/Getassetsowned */
    getassetsowned(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/Getassetsowned`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetAssetsassignedformaintenance */
    getAssetsassignedformaintenance(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetAssetsassignedformaintenance`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetLowinventorystock */
    getLowinventorystock(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetLowinventorystock`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/Getfacilityeventstoday */
    getfacilityeventstoday(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/Getfacilityeventstoday`, { params: queryParams });
    }
    /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetStaffSalary */
    getStaffSalary(params) {
        const queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId,
        };
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(queryParamBase).forEach(([key, value]) => {
            if (value !== undefined) {
                if (typeof value === 'string')
                    queryParams = queryParams.set(key, value);
                else if (Array.isArray(value))
                    value.forEach(v => queryParams = queryParams.append(key, v));
                else
                    queryParams = queryParams.set(key, JSON.stringify(value));
            }
        });
        return this.http.get(`/api/DashBoard/GetStaffSalary`, { params: queryParams });
    }
};
DashBoardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DashBoardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DashBoardService);



/***/ })

}]);
//# sourceMappingURL=default~modules-ams-dashboard-dashboard-module~modules-ams-my-property-all-property-all-property-mod~9ae89c6d-es2015.js.map