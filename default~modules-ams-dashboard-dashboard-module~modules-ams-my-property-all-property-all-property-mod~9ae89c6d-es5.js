(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-ams-dashboard-dashboard-module~modules-ams-my-property-all-property-all-property-mod~9ae89c6d"], {
    /***/
    "./src/app/api/controllers/DashBoard.ts":
    /*!**********************************************!*\
      !*** ./src/app/api/controllers/DashBoard.ts ***!
      \**********************************************/

    /*! exports provided: DashBoardService */

    /***/
    function srcAppApiControllersDashBoardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashBoardService", function () {
        return DashBoardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* tslint:disable:max-line-length */

      /**
       * v1
       * AMS API
       * undefined
       */


      var DashBoardService = /*#__PURE__*/function () {
        function DashBoardService(http) {
          _classCallCheck(this, DashBoardService);

          this.http = http;
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalunitsbyApartmentID */


        _createClass(DashBoardService, [{
          key: "getDashTotalunitsbyApartmentId",
          value: function getDashTotalunitsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashTotalunitsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalTowersbyApartmentID */

        }, {
          key: "getDashTotalTowersbyApartmentId",
          value: function getDashTotalTowersbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  key = _ref4[0],
                  value = _ref4[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashTotalTowersbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalownersbyApartmentID */

        }, {
          key: "getDashTotalownersbyApartmentId",
          value: function getDashTotalownersbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  key = _ref6[0],
                  value = _ref6[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashTotalownersbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalTenantsbyApartmentID */

        }, {
          key: "getDashTotalTenantsbyApartmentId",
          value: function getDashTotalTenantsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  key = _ref8[0],
                  value = _ref8[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashTotalTenantsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalAdminsbyApartmentID */

        }, {
          key: "getDashTotalAdminsbyApartmentId",
          value: function getDashTotalAdminsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                  key = _ref10[0],
                  value = _ref10[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashTotalAdminsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalStaffbyApartmentID */

        }, {
          key: "getDashTotalStaffbyApartmentId",
          value: function getDashTotalStaffbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref11) {
              var _ref12 = _slicedToArray(_ref11, 2),
                  key = _ref12[0],
                  value = _ref12[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashTotalStaffbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnapprovedUsersPendingAdminbyApartmentID */

        }, {
          key: "getDashUnapprovedUsersPendingAdminbyApartmentId",
          value: function getDashUnapprovedUsersPendingAdminbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate,
              toDate: params.toDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref13) {
              var _ref14 = _slicedToArray(_ref13, 2),
                  key = _ref14[0],
                  value = _ref14[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashUnapprovedUsersPendingAdminbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnapprovedUsersPendingusersbyApartmentID */

        }, {
          key: "getDashUnapprovedUsersPendingusersbyApartmentId",
          value: function getDashUnapprovedUsersPendingusersbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate,
              toDate: params.toDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref15) {
              var _ref16 = _slicedToArray(_ref15, 2),
                  key = _ref16[0],
                  value = _ref16[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashUnapprovedUsersPendingusersbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpencommticketsbyApartmentID */

        }, {
          key: "getDashOpencommticketsbyApartmentId",
          value: function getDashOpencommticketsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate,
              toDate: params.toDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref17) {
              var _ref18 = _slicedToArray(_ref17, 2),
                  key = _ref18[0],
                  value = _ref18[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashOpencommticketsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenpersonalticketsbyApartmentID */

        }, {
          key: "getDashOpenpersonalticketsbyApartmentId",
          value: function getDashOpenpersonalticketsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate,
              toDate: params.toDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref19) {
              var _ref20 = _slicedToArray(_ref19, 2),
                  key = _ref20[0],
                  value = _ref20[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashOpenpersonalticketsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashHighpriorityopenpersonalTicketsbyApartmentID */

        }, {
          key: "getDashHighpriorityopenpersonalTicketsbyApartmentId",
          value: function getDashHighpriorityopenpersonalTicketsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate,
              toDate: params.toDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref21) {
              var _ref22 = _slicedToArray(_ref21, 2),
                  key = _ref22[0],
                  value = _ref22[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashHighpriorityopenpersonalTicketsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashHighpriorityopenCommunityTicketsbyApartmentID */

        }, {
          key: "getDashHighpriorityopenCommunityTicketsbyApartmentId",
          value: function getDashHighpriorityopenCommunityTicketsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate,
              toDate: params.toDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref23) {
              var _ref24 = _slicedToArray(_ref23, 2),
                  key = _ref24[0],
                  value = _ref24[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashHighpriorityopenCommunityTicketsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenPersonalAgedTicketsbyApartmentIDbyDays */

        }, {
          key: "getDashOpenPersonalAgedTicketsbyApartmentIDbyDays",
          value: function getDashOpenPersonalAgedTicketsbyApartmentIDbyDays(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              date: params.date,
              noOfDays: params.noOfDays
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref25) {
              var _ref26 = _slicedToArray(_ref25, 2),
                  key = _ref26[0],
                  value = _ref26[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashOpenPersonalAgedTicketsbyApartmentIDbyDays", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenCommunityAgedTicketsbyApartmentIDbyDays */

        }, {
          key: "getDashOpenCommunityAgedTicketsbyApartmentIDbyDays",
          value: function getDashOpenCommunityAgedTicketsbyApartmentIDbyDays(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              date: params.date,
              noOfDays: params.noOfDays
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref27) {
              var _ref28 = _slicedToArray(_ref27, 2),
                  key = _ref28[0],
                  value = _ref28[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashOpenCommunityAgedTicketsbyApartmentIDbyDays", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnassignedpersonalTicketsbyApartmentID */

        }, {
          key: "getDashUnassignedpersonalTicketsbyApartmentId",
          value: function getDashUnassignedpersonalTicketsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref29) {
              var _ref30 = _slicedToArray(_ref29, 2),
                  key = _ref30[0],
                  value = _ref30[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashUnassignedpersonalTicketsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnassignedCommunityTicketsbyApartmentID */

        }, {
          key: "getDashUnassignedCommunityTicketsbyApartmentId",
          value: function getDashUnassignedCommunityTicketsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref31) {
              var _ref32 = _slicedToArray(_ref31, 2),
                  key = _ref32[0],
                  value = _ref32[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashUnassignedCommunityTicketsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashinProgressPanicAlertsbyApartmentID */

        }, {
          key: "getDashinProgressPanicAlertsbyApartmentId",
          value: function getDashinProgressPanicAlertsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref33) {
              var _ref34 = _slicedToArray(_ref33, 2),
                  key = _ref34[0],
                  value = _ref34[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashinProgressPanicAlertsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenPanicAlertsbyApartmentID */

        }, {
          key: "getDashOpenPanicAlertsbyApartmentId",
          value: function getDashOpenPanicAlertsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref35) {
              var _ref36 = _slicedToArray(_ref35, 2),
                  key = _ref36[0],
                  value = _ref36[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashOpenPanicAlertsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsCheckedinbyApartmentID */

        }, {
          key: "getDashVisitorsCheckedinbyApartmentId",
          value: function getDashVisitorsCheckedinbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              startDate: params.startDate,
              EndDate: params.EndDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref37) {
              var _ref38 = _slicedToArray(_ref37, 2),
                  key = _ref38[0],
                  value = _ref38[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashVisitorsCheckedinbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsCheckedouttodaybyApartmentID */

        }, {
          key: "getDashVisitorsCheckedouttodaybyApartmentId",
          value: function getDashVisitorsCheckedouttodaybyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref39) {
              var _ref40 = _slicedToArray(_ref39, 2),
                  key = _ref40[0],
                  value = _ref40[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashVisitorsCheckedouttodaybyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsNotcheckedtodaybyApartmentID */

        }, {
          key: "getDashVisitorsNotcheckedtodaybyApartmentId",
          value: function getDashVisitorsNotcheckedtodaybyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref41) {
              var _ref42 = _slicedToArray(_ref41, 2),
                  key = _ref42[0],
                  value = _ref42[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashVisitorsNotcheckedtodaybyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashunapprovedmoveinbyApartmentID */

        }, {
          key: "getDashunapprovedmoveinbyApartmentId",
          value: function getDashunapprovedmoveinbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              date: params.date
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref43) {
              var _ref44 = _slicedToArray(_ref43, 2),
                  key = _ref44[0],
                  value = _ref44[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashunapprovedmoveinbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashunapprovedmoveoutbyApartmentID */

        }, {
          key: "getDashunapprovedmoveoutbyApartmentId",
          value: function getDashunapprovedmoveoutbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              date: params.date
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref45) {
              var _ref46 = _slicedToArray(_ref45, 2),
                  key = _ref46[0],
                  value = _ref46[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashunapprovedmoveoutbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashupcomingmoveinApartmentID */

        }, {
          key: "getDashupcomingmoveinApartmentId",
          value: function getDashupcomingmoveinApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate,
              toDate: params.toDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref47) {
              var _ref48 = _slicedToArray(_ref47, 2),
                  key = _ref48[0],
                  value = _ref48[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashupcomingmoveinApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashupcomingmoveoutApprovedbyApartmentID */

        }, {
          key: "getDashupcomingmoveoutApprovedbyApartmentId",
          value: function getDashupcomingmoveoutApprovedbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate,
              toDate: params.toDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref49) {
              var _ref50 = _slicedToArray(_ref49, 2),
                  key = _ref50[0],
                  value = _ref50[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashupcomingmoveoutApprovedbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashuptotalparkingslotsbyApartmentID */

        }, {
          key: "getDashuptotalparkingslotsbyApartmentId",
          value: function getDashuptotalparkingslotsbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref51) {
              var _ref52 = _slicedToArray(_ref51, 2),
                  key = _ref52[0],
                  value = _ref52[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashuptotalparkingslotsbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashuptotalparkingslotsunassignedbyApartmentID */

        }, {
          key: "getDashuptotalparkingslotsunassignedbyApartmentId",
          value: function getDashuptotalparkingslotsunassignedbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref53) {
              var _ref54 = _slicedToArray(_ref53, 2),
                  key = _ref54[0],
                  value = _ref54[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashuptotalparkingslotsunassignedbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashufacilitybookingunapprovedbyApartmentID */

        }, {
          key: "getDashufacilitybookingunapprovedbyApartmentId",
          value: function getDashufacilitybookingunapprovedbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref55) {
              var _ref56 = _slicedToArray(_ref55, 2),
                  key = _ref56[0],
                  value = _ref56[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashufacilitybookingunapprovedbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashufacilitybookingapprovedtodaybyApartmentID */

        }, {
          key: "getDashufacilitybookingapprovedtodaybyApartmentId",
          value: function getDashufacilitybookingapprovedtodaybyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref57) {
              var _ref58 = _slicedToArray(_ref57, 2),
                  key = _ref58[0],
                  value = _ref58[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashufacilitybookingapprovedtodaybyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashlistupcomingmeetingbyApartmentID */

        }, {
          key: "getDashlistupcomingmeetingbyApartmentId",
          value: function getDashlistupcomingmeetingbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate,
              toDate: params.toDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref59) {
              var _ref60 = _slicedToArray(_ref59, 2),
                  key = _ref60[0],
                  value = _ref60[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashlistupcomingmeetingbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashlistBroadcastsentbyApartmentID */

        }, {
          key: "getDashlistBroadcastsentbyApartmentId",
          value: function getDashlistBroadcastsentbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              fromDate: params.fromDate,
              toDate: params.toDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref61) {
              var _ref62 = _slicedToArray(_ref61, 2),
                  key = _ref62[0],
                  value = _ref62[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashlistBroadcastsentbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalamtbilledcustomersthismonthbyApartmentID */

        }, {
          key: "getDashTotalamtbilledcustomersthismonthbyApartmentId",
          value: function getDashTotalamtbilledcustomersthismonthbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref63) {
              var _ref64 = _slicedToArray(_ref63, 2),
                  key = _ref64[0],
                  value = _ref64[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashTotalamtbilledcustomersthismonthbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalamtreceivedcustomersthismonthbyApartmentID */

        }, {
          key: "getDashTotalamtreceivedcustomersthismonthbyApartmentId",
          value: function getDashTotalamtreceivedcustomersthismonthbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref65) {
              var _ref66 = _slicedToArray(_ref65, 2),
                  key = _ref66[0],
                  value = _ref66[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashTotalamtreceivedcustomersthismonthbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashpaymentdefaultersasoftodayybyApartmentID */

        }, {
          key: "getDashpaymentdefaultersasoftodayybyApartmentId",
          value: function getDashpaymentdefaultersasoftodayybyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref67) {
              var _ref68 = _slicedToArray(_ref67, 2),
                  key = _ref68[0],
                  value = _ref68[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashpaymentdefaultersasoftodayybyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashcreditnoteappliedbyApartmentID */

        }, {
          key: "getDashcreditnoteappliedbyApartmentId",
          value: function getDashcreditnoteappliedbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref69) {
              var _ref70 = _slicedToArray(_ref69, 2),
                  key = _ref70[0],
                  value = _ref70[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashcreditnoteappliedbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashWPapprovalpendingbyApartmentID */

        }, {
          key: "getDashWPapprovalpendingbyApartmentId",
          value: function getDashWPapprovalpendingbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref71) {
              var _ref72 = _slicedToArray(_ref71, 2),
                  key = _ref72[0],
                  value = _ref72[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashWPapprovalpendingbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashWPupcomingbyApartmentID */

        }, {
          key: "getDashWPupcomingbyApartmentId",
          value: function getDashWPupcomingbyApartmentId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref73) {
              var _ref74 = _slicedToArray(_ref73, 2),
                  key = _ref74[0],
                  value = _ref74[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetDashWPupcomingbyApartmentID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/getUDashVehiclecountbyblockunituser */

        }, {
          key: "getUDashVehiclecountbyblockunituser",
          value: function getUDashVehiclecountbyblockunituser(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockunituserId: params.blockunituserId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref75) {
              var _ref76 = _slicedToArray(_ref75, 2),
                  key = _ref76[0],
                  value = _ref76[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/getUDashVehiclecountbyblockunituser", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashTotalpetstbyblockunituser */

        }, {
          key: "getUDashTotalpetstbyblockunituser",
          value: function getUDashTotalpetstbyblockunituser(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockunituserId: params.blockunituserId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref77) {
              var _ref78 = _slicedToArray(_ref77, 2),
                  key = _ref78[0],
                  value = _ref78[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetUDashTotalpetstbyblockunituser", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashPrivateStaffbyblockunituser */

        }, {
          key: "getUDashPrivateStaffbyblockunituser",
          value: function getUDashPrivateStaffbyblockunituser(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockunituserId: params.blockunituserId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref79) {
              var _ref80 = _slicedToArray(_ref79, 2),
                  key = _ref80[0],
                  value = _ref80[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetUDashPrivateStaffbyblockunituser", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashOpenticektsbyblockunituser */

        }, {
          key: "getUDashOpenticektsbyblockunituser",
          value: function getUDashOpenticektsbyblockunituser(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockunituserId: params.blockunituserId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref81) {
              var _ref82 = _slicedToArray(_ref81, 2),
                  key = _ref82[0],
                  value = _ref82[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetUDashOpenticektsbyblockunituser", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashOpenticektsbyblockunituserTicketpriority */

        }, {
          key: "getUDashOpenticektsbyblockunituserTicketpriority",
          value: function getUDashOpenticektsbyblockunituserTicketpriority(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockunituserId: params.blockunituserId,
              priority: params.priority
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref83) {
              var _ref84 = _slicedToArray(_ref83, 2),
                  key = _ref84[0],
                  value = _ref84[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetUDashOpenticektsbyblockunituserTicketpriority", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashVisitorcheckedinbyblockunituser */

        }, {
          key: "getUDashVisitorcheckedinbyblockunituser",
          value: function getUDashVisitorcheckedinbyblockunituser(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockUnitId: params.blockUnitId,
              startDate: params.startDate,
              EndDate: params.EndDate,
              blockUnitUserId: params.blockUnitUserId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref85) {
              var _ref86 = _slicedToArray(_ref85, 2),
                  key = _ref86[0],
                  value = _ref86[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetUDashVisitorcheckedinbyblockunituser", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashVisitorNOTcheckeddoubyblockunitID */

        }, {
          key: "getUDashVisitorNoTcheckeddoubyblockunitId",
          value: function getUDashVisitorNoTcheckeddoubyblockunitId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockUnitId: params.blockUnitId,
              blockUnitUserId: params.blockUnitUserId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref87) {
              var _ref88 = _slicedToArray(_ref87, 2),
                  key = _ref88[0],
                  value = _ref88[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetUDashVisitorNOTcheckeddoubyblockunitID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashTotalparkingbyblockunitID */

        }, {
          key: "getUDashTotalparkingbyblockunitId",
          value: function getUDashTotalparkingbyblockunitId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockUnitId: params.blockUnitId,
              blockUnitUserId: params.blockUnitUserId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref89) {
              var _ref90 = _slicedToArray(_ref89, 2),
                  key = _ref90[0],
                  value = _ref90[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetUDashTotalparkingbyblockunitID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDapprovedfacilittbookingbyblockunitID */

        }, {
          key: "getUDapprovedfacilittbookingbyblockunitId",
          value: function getUDapprovedfacilittbookingbyblockunitId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockUnitUserID: params.blockUnitUserID
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref91) {
              var _ref92 = _slicedToArray(_ref91, 2),
                  key = _ref92[0],
                  value = _ref92[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetUDapprovedfacilittbookingbyblockunitID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashWaterunitsbyblockunitID */

        }, {
          key: "getUDashWaterunitsbyblockunitId",
          value: function getUDashWaterunitsbyblockunitId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockUnitUserID: params.blockUnitUserID,
              BlockUnitId: params.BlockUnitId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref93) {
              var _ref94 = _slicedToArray(_ref93, 2),
                  key = _ref94[0],
                  value = _ref94[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetUDashWaterunitsbyblockunitID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashCurrentViolationsbyblockunituserID */

        }, {
          key: "getUDashCurrentViolationsbyblockunituserId",
          value: function getUDashCurrentViolationsbyblockunituserId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockUnitUserID: params.blockUnitUserID,
              BlockUnitId: params.BlockUnitId,
              fromDate: params.fromDate,
              toDate: params.toDate
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref95) {
              var _ref96 = _slicedToArray(_ref95, 2),
                  key = _ref96[0],
                  value = _ref96[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetUDashCurrentViolationsbyblockunituserID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashActiveWorkpermitbyblockunituserID */

        }, {
          key: "getUDashActiveWorkpermitbyblockunituserId",
          value: function getUDashActiveWorkpermitbyblockunituserId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              blockUnitUserID: params.blockUnitUserID,
              BlockUnitId: params.BlockUnitId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref97) {
              var _ref98 = _slicedToArray(_ref97, 2),
                  key = _ref98[0],
                  value = _ref98[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetUDashActiveWorkpermitbyblockunituserID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetVehicleNumberbyStaffID */

        }, {
          key: "getVehicleNumberbyStaffId",
          value: function getVehicleNumberbyStaffId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              staffId: params.staffId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref99) {
              var _ref100 = _slicedToArray(_ref99, 2),
                  key = _ref100[0],
                  value = _ref100[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetVehicleNumberbyStaffID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetTicketsassignedtouserbyUserID */

        }, {
          key: "getTicketsassignedtouserbyUserId",
          value: function getTicketsassignedtouserbyUserId(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              UserID: params.UserID,
              TicketType: params.TicketType,
              Priority: params.Priority
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref101) {
              var _ref102 = _slicedToArray(_ref101, 2),
                  key = _ref102[0],
                  value = _ref102[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetTicketsassignedtouserbyUserID", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/Getassetsowned */

        }, {
          key: "getassetsowned",
          value: function getassetsowned(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              staffId: params.staffId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref103) {
              var _ref104 = _slicedToArray(_ref103, 2),
                  key = _ref104[0],
                  value = _ref104[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/Getassetsowned", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetAssetsassignedformaintenance */

        }, {
          key: "getAssetsassignedformaintenance",
          value: function getAssetsassignedformaintenance(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref105) {
              var _ref106 = _slicedToArray(_ref105, 2),
                  key = _ref106[0],
                  value = _ref106[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetAssetsassignedformaintenance", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetLowinventorystock */

        }, {
          key: "getLowinventorystock",
          value: function getLowinventorystock(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              staffId: params.staffId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref107) {
              var _ref108 = _slicedToArray(_ref107, 2),
                  key = _ref108[0],
                  value = _ref108[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetLowinventorystock", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/Getfacilityeventstoday */

        }, {
          key: "getfacilityeventstoday",
          value: function getfacilityeventstoday(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref109) {
              var _ref110 = _slicedToArray(_ref109, 2),
                  key = _ref110[0],
                  value = _ref110[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/Getfacilityeventstoday", {
              params: queryParams
            });
          }
          /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetStaffSalary */

        }, {
          key: "getStaffSalary",
          value: function getStaffSalary(params) {
            var queryParamBase = {
              apartmentId: params.apartmentId,
              staffId: params.staffId
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            Object.entries(queryParamBase).forEach(function (_ref111) {
              var _ref112 = _slicedToArray(_ref111, 2),
                  key = _ref112[0],
                  value = _ref112[1];

              if (value !== undefined) {
                if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                  return queryParams = queryParams.append(key, v);
                });else queryParams = queryParams.set(key, JSON.stringify(value));
              }
            });
            return this.http.get("/api/DashBoard/GetStaffSalary", {
              params: queryParams
            });
          }
        }]);

        return DashBoardService;
      }();

      DashBoardService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      DashBoardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], DashBoardService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modules-ams-dashboard-dashboard-module~modules-ams-my-property-all-property-all-property-mod~9ae89c6d-es5.js.map