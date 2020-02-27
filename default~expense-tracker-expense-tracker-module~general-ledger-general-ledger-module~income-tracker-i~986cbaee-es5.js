function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~expense-tracker-expense-tracker-module~general-ledger-general-ledger-module~income-tracker-i~986cbaee"], {
  /***/
  "./src/app/api/services/accounts.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/api/services/accounts.service.ts ***!
    \**************************************************/

  /*! exports provided: AccountsService */

  /***/
  function srcAppApiServicesAccountsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsService", function () {
      return AccountsService;
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


    var AccountsService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(AccountsService, _base_service__WEBPAC);

      function AccountsService(config, http) {
        _classCallCheck(this, AccountsService);

        return _possibleConstructorReturn(this, _getPrototypeOf(AccountsService).call(this, config, http));
      }
      /**
       * @param params The `AccountsService.GetIncomeTrackerCreditNoteByEmailSentParams` containing the following parameters:
       *
       * - `isEmailSent`:
       *
       * - `apartmentId`:
       */


      _createClass(AccountsService, [{
        key: "GetIncomeTrackerCreditNoteByEmailSentResponse",
        value: function GetIncomeTrackerCreditNoteByEmailSentResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.isEmailSent != null) __params = __params.set('isEmailSent', params.isEmailSent.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerCreditNoteByEmailSent", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerCreditNoteByEmailSentParams` containing the following parameters:
         *
         * - `isEmailSent`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerCreditNoteByEmailSent",
        value: function GetIncomeTrackerCreditNoteByEmailSent(params) {
          return this.GetIncomeTrackerCreditNoteByEmailSentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetIncomeTrackerCreditNoteByDateRangeResponse",
        value: function GetIncomeTrackerCreditNoteByDateRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerCreditNoteByDateRange", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerCreditNoteByDateRangeParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerCreditNoteByDateRange",
        value: function GetIncomeTrackerCreditNoteByDateRange(params) {
          return this.GetIncomeTrackerCreditNoteByDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetIncomeTrackerCreditNoteByDateRangeBlockUnitIDResponse",
        value: function GetIncomeTrackerCreditNoteByDateRangeBlockUnitIDResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.aptBlockUnitId != null) __params = __params.set('aptBlockUnitId', params.aptBlockUnitId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerCreditNoteByDateRangeBlockUnitID", __body, {
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

      }, {
        key: "GetIncomeTrackerCreditNoteByDateRangeBlockUnitID",
        value: function GetIncomeTrackerCreditNoteByDateRangeBlockUnitID(params) {
          return this.GetIncomeTrackerCreditNoteByDateRangeBlockUnitIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "GetIncomeTrackerReceiptsByApartmentIdResponse",
        value: function GetIncomeTrackerReceiptsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerReceiptsByApartmentId", __body, {
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
        key: "GetIncomeTrackerReceiptsByApartmentId",
        value: function GetIncomeTrackerReceiptsByApartmentId(apartmentId) {
          return this.GetIncomeTrackerReceiptsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetIncomeTrackerReceiptsByEmaiSentParams` containing the following parameters:
         *
         * - `isEmailSent`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerReceiptsByEmaiSentResponse",
        value: function GetIncomeTrackerReceiptsByEmaiSentResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.isEmailSent != null) __params = __params.set('isEmailSent', params.isEmailSent.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerReceiptsByEmaiSent", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerReceiptsByEmaiSentParams` containing the following parameters:
         *
         * - `isEmailSent`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerReceiptsByEmaiSent",
        value: function GetIncomeTrackerReceiptsByEmaiSent(params) {
          return this.GetIncomeTrackerReceiptsByEmaiSentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetIncomeTrackerReceiptsBySmsSentParams` containing the following parameters:
         *
         * - `isSmsSent`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerReceiptsBySmsSentResponse",
        value: function GetIncomeTrackerReceiptsBySmsSentResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.isSmsSent != null) __params = __params.set('isSmsSent', params.isSmsSent.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerReceiptsBySmsSent", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerReceiptsBySmsSentParams` containing the following parameters:
         *
         * - `isSmsSent`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerReceiptsBySmsSent",
        value: function GetIncomeTrackerReceiptsBySmsSent(params) {
          return this.GetIncomeTrackerReceiptsBySmsSentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetIncomeTrackerReceiptsByReciptNumRangeResponse",
        value: function GetIncomeTrackerReceiptsByReciptNumRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toNum != null) __params = __params.set('toNum', params.toNum.toString());
          if (params.fromNum != null) __params = __params.set('fromNum', params.fromNum.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerReceiptsByReciptNumRange", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerReceiptsByReciptNumRangeParams` containing the following parameters:
         *
         * - `toNum`:
         *
         * - `fromNum`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerReceiptsByReciptNumRange",
        value: function GetIncomeTrackerReceiptsByReciptNumRange(params) {
          return this.GetIncomeTrackerReceiptsByReciptNumRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetIncomeTrackerReceiptsByDateRangeResponse",
        value: function GetIncomeTrackerReceiptsByDateRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerReceiptsByDateRange", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerReceiptsByDateRangeParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerReceiptsByDateRange",
        value: function GetIncomeTrackerReceiptsByDateRange(params) {
          return this.GetIncomeTrackerReceiptsByDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetIncomeTrackerReceiptsByDateRangeBlockunitIDResponse",
        value: function GetIncomeTrackerReceiptsByDateRangeBlockunitIDResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.aptBlockUnitId != null) __params = __params.set('aptBlockUnitId', params.aptBlockUnitId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerReceiptsByDateRangeBlockunitID", __body, {
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

      }, {
        key: "GetIncomeTrackerReceiptsByDateRangeBlockunitID",
        value: function GetIncomeTrackerReceiptsByDateRangeBlockunitID(params) {
          return this.GetIncomeTrackerReceiptsByDateRangeBlockunitIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "GetIncomeTrackerInvoicesByApartmentIdResponse",
        value: function GetIncomeTrackerInvoicesByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerInvoicesByApartmentId", __body, {
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
        key: "GetIncomeTrackerInvoicesByApartmentId",
        value: function GetIncomeTrackerInvoicesByApartmentId(apartmentId) {
          return this.GetIncomeTrackerInvoicesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetIncomeTrackerInvoicesByApartmentBlockIDParams` containing the following parameters:
         *
         * - `aptBlockUnitId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerInvoicesByApartmentBlockIDResponse",
        value: function GetIncomeTrackerInvoicesByApartmentBlockIDResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.aptBlockUnitId != null) __params = __params.set('aptBlockUnitId', params.aptBlockUnitId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerInvoicesByApartmentBlockID", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerInvoicesByApartmentBlockIDParams` containing the following parameters:
         *
         * - `aptBlockUnitId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerInvoicesByApartmentBlockID",
        value: function GetIncomeTrackerInvoicesByApartmentBlockID(params) {
          return this.GetIncomeTrackerInvoicesByApartmentBlockIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetIncomeTrackerInvoicesByEmailSentParams` containing the following parameters:
         *
         * - `isEmailSent`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerInvoicesByEmailSentResponse",
        value: function GetIncomeTrackerInvoicesByEmailSentResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.isEmailSent != null) __params = __params.set('isEmailSent', params.isEmailSent.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerInvoicesByEmailSent", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerInvoicesByEmailSentParams` containing the following parameters:
         *
         * - `isEmailSent`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerInvoicesByEmailSent",
        value: function GetIncomeTrackerInvoicesByEmailSent(params) {
          return this.GetIncomeTrackerInvoicesByEmailSentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetIncomeTrackerInvoicesBySmsSentParams` containing the following parameters:
         *
         * - `isSmsSent`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerInvoicesBySmsSentResponse",
        value: function GetIncomeTrackerInvoicesBySmsSentResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.isSmsSent != null) __params = __params.set('isSmsSent', params.isSmsSent.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerInvoicesBySmsSent", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerInvoicesBySmsSentParams` containing the following parameters:
         *
         * - `isSmsSent`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerInvoicesBySmsSent",
        value: function GetIncomeTrackerInvoicesBySmsSent(params) {
          return this.GetIncomeTrackerInvoicesBySmsSentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetIncomeTrackerInvoicesByInvoiceNumRangeResponse",
        value: function GetIncomeTrackerInvoicesByInvoiceNumRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toNum != null) __params = __params.set('toNum', params.toNum.toString());
          if (params.fromNum != null) __params = __params.set('fromNum', params.fromNum.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerInvoicesByInvoiceNumRange", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerInvoicesByInvoiceNumRangeParams` containing the following parameters:
         *
         * - `toNum`:
         *
         * - `fromNum`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerInvoicesByInvoiceNumRange",
        value: function GetIncomeTrackerInvoicesByInvoiceNumRange(params) {
          return this.GetIncomeTrackerInvoicesByInvoiceNumRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetIncomeTrackerInvoicesByDateRangeResponse",
        value: function GetIncomeTrackerInvoicesByDateRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerInvoicesByDateRange", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerInvoicesByDateRangeParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetIncomeTrackerInvoicesByDateRange",
        value: function GetIncomeTrackerInvoicesByDateRange(params) {
          return this.GetIncomeTrackerInvoicesByDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetIncomeTrackerInvoicesByDateRangeBlockUnitIDResponse",
        value: function GetIncomeTrackerInvoicesByDateRangeBlockUnitIDResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.aptBlockUnitId != null) __params = __params.set('aptBlockUnitId', params.aptBlockUnitId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerInvoicesByDateRangeBlockUnitID", __body, {
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

      }, {
        key: "GetIncomeTrackerInvoicesByDateRangeBlockUnitID",
        value: function GetIncomeTrackerInvoicesByDateRangeBlockUnitID(params) {
          return this.GetIncomeTrackerInvoicesByDateRangeBlockUnitIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetIncomeTrackerInvoicesByAccountIdResponse",
        value: function GetIncomeTrackerInvoicesByAccountIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.collectionStatusId != null) __params = __params.set('collectionStatusId', params.collectionStatusId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          (params.accountId || []).forEach(function (val) {
            if (val != null) __params = __params.append('accountId', val.toString());
          });
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerInvoicesByAccountId", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerInvoicesByAccountIdParams` containing the following parameters:
         *
         * - `collectionStatusId`:
         *
         * - `apartmentId`:
         *
         * - `accountId`:
         */

      }, {
        key: "GetIncomeTrackerInvoicesByAccountId",
        value: function GetIncomeTrackerInvoicesByAccountId(params) {
          return this.GetIncomeTrackerInvoicesByAccountIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "GetIncomeTrackerDefaulterByApartmentIdResponse",
        value: function GetIncomeTrackerDefaulterByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerDefaulterByApartmentId", __body, {
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
        key: "GetIncomeTrackerDefaulterByApartmentId",
        value: function GetIncomeTrackerDefaulterByApartmentId(apartmentId) {
          return this.GetIncomeTrackerDefaulterByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetIncomeTrackerDefaulterByFiltersResponse",
        value: function GetIncomeTrackerDefaulterByFiltersResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toAmt != null) __params = __params.set('toAmt', params.toAmt.toString());
          if (params.postDateBefore != null) __params = __params.set('postDateBefore', params.postDateBefore.toString());
          if (params.invoiceStatusId != null) __params = __params.set('invoiceStatusId', params.invoiceStatusId.toString());
          if (params.fromAmt != null) __params = __params.set('fromAmt', params.fromAmt.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          (params.accountId || []).forEach(function (val) {
            if (val != null) __params = __params.append('accountId', val.toString());
          });
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerDefaulterByFilters", __body, {
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

      }, {
        key: "GetIncomeTrackerDefaulterByFilters",
        value: function GetIncomeTrackerDefaulterByFilters(params) {
          return this.GetIncomeTrackerDefaulterByFiltersResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "GetExpenseTrackerInvoicesByApartmentIdResponse",
        value: function GetExpenseTrackerInvoicesByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetExpenseTrackerInvoicesByApartmentId", __body, {
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
        key: "GetExpenseTrackerInvoicesByApartmentId",
        value: function GetExpenseTrackerInvoicesByApartmentId(apartmentId) {
          return this.GetExpenseTrackerInvoicesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetExpenseTrackerInvoicesByApartmentIdVendorIdParams` containing the following parameters:
         *
         * - `vendorId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetExpenseTrackerInvoicesByApartmentIdVendorIdResponse",
        value: function GetExpenseTrackerInvoicesByApartmentIdVendorIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorId != null) __params = __params.set('vendorId', params.vendorId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetExpenseTrackerInvoicesByApartmentIdVendorId", __body, {
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
         * @param params The `AccountsService.GetExpenseTrackerInvoicesByApartmentIdVendorIdParams` containing the following parameters:
         *
         * - `vendorId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetExpenseTrackerInvoicesByApartmentIdVendorId",
        value: function GetExpenseTrackerInvoicesByApartmentIdVendorId(params) {
          return this.GetExpenseTrackerInvoicesByApartmentIdVendorIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRangeResponse",
        value: function GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorId != null) __params = __params.set('vendorId', params.vendorId.toString());
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRange", __body, {
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

      }, {
        key: "GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRange",
        value: function GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRange(params) {
          return this.GetExpenseTrackerInvoicesByApartmentIdVendorIdDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetExpenseTrackerInvoicesByApartmentIdAccountIdParams` containing the following parameters:
         *
         * - `glAccountId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetExpenseTrackerInvoicesByApartmentIdAccountIdResponse",
        value: function GetExpenseTrackerInvoicesByApartmentIdAccountIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.glAccountId != null) __params = __params.set('glAccountId', params.glAccountId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetExpenseTrackerInvoicesByApartmentIdAccountId", __body, {
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
         * @param params The `AccountsService.GetExpenseTrackerInvoicesByApartmentIdAccountIdParams` containing the following parameters:
         *
         * - `glAccountId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "GetExpenseTrackerInvoicesByApartmentIdAccountId",
        value: function GetExpenseTrackerInvoicesByApartmentIdAccountId(params) {
          return this.GetExpenseTrackerInvoicesByApartmentIdAccountIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "CheckNumberRangeAlreadyExistsByApartmentIdResponse",
        value: function CheckNumberRangeAlreadyExistsByApartmentIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.newTo != null) __params = __params.set('newTo', params.newTo.toString());
          if (params.newFrom != null) __params = __params.set('newFrom', params.newFrom.toString());
          if (params.glDocTypeId != null) __params = __params.set('glDocTypeId', params.glDocTypeId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/CheckNumberRangeAlreadyExistsByApartmentId", __body, {
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

      }, {
        key: "CheckNumberRangeAlreadyExistsByApartmentId",
        value: function CheckNumberRangeAlreadyExistsByApartmentId(params) {
          return this.CheckNumberRangeAlreadyExistsByApartmentIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllCustAdvanceResponse",
        value: function getAllCustAdvanceResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustAdvance", __body, {
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
        key: "getAllCustAdvance",
        value: function getAllCustAdvance() {
          return this.getAllCustAdvanceResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllCustAdvanceByStatusResponse",
        value: function getAllCustAdvanceByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustAdvanceByStatus", __body, {
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
        key: "getAllCustAdvanceByStatus",
        value: function getAllCustAdvanceByStatus(active) {
          return this.getAllCustAdvanceByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getCustAdvanceByApartmentIdStatusResponse",
        value: function getCustAdvanceByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustAdvanceByApartmentId", __body, {
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
        key: "getCustAdvanceByApartmentIdStatus",
        value: function getCustAdvanceByApartmentIdStatus(apartmentId) {
          return this.getCustAdvanceByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustAdvanceByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustAdvanceByApartmentIdStatus_1Response",
        value: function getCustAdvanceByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustAdvanceByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetCustAdvanceByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustAdvanceByApartmentIdStatus_1",
        value: function getCustAdvanceByApartmentIdStatus_1(params) {
          return this.getCustAdvanceByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustAdvanceByUserIdParams` containing the following parameters:
         *
         * - `userId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustAdvanceByUserIdResponse",
        value: function getCustAdvanceByUserIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.userId != null) __params = __params.set('userId', params.userId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustAdvanceByUserId", __body, {
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
         * @param params The `AccountsService.GetCustAdvanceByUserIdParams` containing the following parameters:
         *
         * - `userId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustAdvanceByUserId",
        value: function getCustAdvanceByUserId(params) {
          return this.getCustAdvanceByUserIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custAdvanceId undefined
         */

      }, {
        key: "getCustAdvanceByIdResponse",
        value: function getCustAdvanceByIdResponse(custAdvanceId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (custAdvanceId != null) __params = __params.set('custAdvanceId', custAdvanceId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustAdvanceById", __body, {
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
         * @param custAdvanceId undefined
         */

      }, {
        key: "getCustAdvanceById",
        value: function getCustAdvanceById(custAdvanceId) {
          return this.getCustAdvanceByIdResponse(custAdvanceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custAdvance undefined
         */

      }, {
        key: "addCustAdvanceResponse",
        value: function addCustAdvanceResponse(custAdvance) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custAdvance;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addCustAdvance", __body, {
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
         * @param custAdvance undefined
         */

      }, {
        key: "addCustAdvance",
        value: function addCustAdvance(custAdvance) {
          return this.addCustAdvanceResponse(custAdvance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custAdvance undefined
         */

      }, {
        key: "updateCustAdvanceResponse",
        value: function updateCustAdvanceResponse(custAdvance) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custAdvance;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateCustAdvance", __body, {
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
         * @param custAdvance undefined
         */

      }, {
        key: "updateCustAdvance",
        value: function updateCustAdvance(custAdvance) {
          return this.updateCustAdvanceResponse(custAdvance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteCustAdvanceParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `custAdvanceId`:
         */

      }, {
        key: "deleteCustAdvanceResponse",
        value: function deleteCustAdvanceResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.custAdvanceId != null) __params = __params.set('custAdvanceId', params.custAdvanceId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteCustAdvance", __body, {
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
         * @param params The `AccountsService.DeleteCustAdvanceParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `custAdvanceId`:
         */

      }, {
        key: "deleteCustAdvance",
        value: function deleteCustAdvance(params) {
          return this.deleteCustAdvanceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllVendorAdvancesResponse",
        value: function getAllVendorAdvancesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorAdvances", __body, {
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
        key: "getAllVendorAdvances",
        value: function getAllVendorAdvances() {
          return this.getAllVendorAdvancesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVendorAdvanceByStatusResponse",
        value: function getAllVendorAdvanceByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorAdvanceByStatus", __body, {
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
        key: "getAllVendorAdvanceByStatus",
        value: function getAllVendorAdvanceByStatus(active) {
          return this.getAllVendorAdvanceByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVendorAdvanceByApartmentIdStatusResponse",
        value: function getVendorAdvanceByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorAdvanceByApartmentId", __body, {
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
        key: "getVendorAdvanceByApartmentIdStatus",
        value: function getVendorAdvanceByApartmentIdStatus(apartmentId) {
          return this.getVendorAdvanceByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorAdvanceByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorAdvanceByApartmentIdStatus_1Response",
        value: function getVendorAdvanceByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorAdvanceByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetVendorAdvanceByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorAdvanceByApartmentIdStatus_1",
        value: function getVendorAdvanceByApartmentIdStatus_1(params) {
          return this.getVendorAdvanceByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorAdvanceByUserIdParams` containing the following parameters:
         *
         * - `vendorId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorAdvanceByUserIdResponse",
        value: function getVendorAdvanceByUserIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorId != null) __params = __params.set('vendorId', params.vendorId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorAdvanceByUserId", __body, {
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
         * @param params The `AccountsService.GetVendorAdvanceByUserIdParams` containing the following parameters:
         *
         * - `vendorId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorAdvanceByUserId",
        value: function getVendorAdvanceByUserId(params) {
          return this.getVendorAdvanceByUserIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorAdvanceId undefined
         */

      }, {
        key: "getVendorAdvanceByIdResponse",
        value: function getVendorAdvanceByIdResponse(vendorAdvanceId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (vendorAdvanceId != null) __params = __params.set('vendorAdvanceId', vendorAdvanceId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorAdvanceById", __body, {
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
         * @param vendorAdvanceId undefined
         */

      }, {
        key: "getVendorAdvanceById",
        value: function getVendorAdvanceById(vendorAdvanceId) {
          return this.getVendorAdvanceByIdResponse(vendorAdvanceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorAdvance undefined
         */

      }, {
        key: "addVendorAdvanceResponse",
        value: function addVendorAdvanceResponse(vendorAdvance) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorAdvance;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorAdvance", __body, {
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
         * @param vendorAdvance undefined
         */

      }, {
        key: "addVendorAdvance",
        value: function addVendorAdvance(vendorAdvance) {
          return this.addVendorAdvanceResponse(vendorAdvance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorAdvance undefined
         */

      }, {
        key: "updateVendorAdvanceResponse",
        value: function updateVendorAdvanceResponse(vendorAdvance) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorAdvance;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateVendorAdvance", __body, {
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
         * @param vendorAdvance undefined
         */

      }, {
        key: "updateVendorAdvance",
        value: function updateVendorAdvance(vendorAdvance) {
          return this.updateVendorAdvanceResponse(vendorAdvance).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteVendorAdvanceParams` containing the following parameters:
         *
         * - `vendorAdvanceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorAdvanceResponse",
        value: function deleteVendorAdvanceResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorAdvanceId != null) __params = __params.set('vendorAdvanceId', params.vendorAdvanceId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteVendorAdvance", __body, {
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
         * @param params The `AccountsService.DeleteVendorAdvanceParams` containing the following parameters:
         *
         * - `vendorAdvanceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorAdvance",
        value: function deleteVendorAdvance(params) {
          return this.deleteVendorAdvanceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GenerateMaintenanceInvoiceByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "GenerateMaintenanceInvoiceByApartmentIdStatusResponse",
        value: function GenerateMaintenanceInvoiceByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GenerateMaintenanceInvoiceByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GenerateMaintenanceInvoiceByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "GenerateMaintenanceInvoiceByApartmentIdStatus",
        value: function GenerateMaintenanceInvoiceByApartmentIdStatus(params) {
          return this.GenerateMaintenanceInvoiceByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetARAgingCollectionDueByUnitIdResponse",
        value: function GetARAgingCollectionDueByUnitIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.unitId != null) __params = __params.set('unitId', params.unitId.toString());
          if (params.asOfDate != null) __params = __params.set('asOfDate', params.asOfDate.toString());
          if (params.ApartmentID != null) __params = __params.set('ApartmentID', params.ApartmentID.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetARAgingCollectionDueByUnitId", __body, {
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
         * @param params The `AccountsService.GetARAgingCollectionDueByUnitIdParams` containing the following parameters:
         *
         * - `unitId`:
         *
         * - `asOfDate`:
         *
         * - `ApartmentID`:
         */

      }, {
        key: "GetARAgingCollectionDueByUnitId",
        value: function GetARAgingCollectionDueByUnitId(params) {
          return this.GetARAgingCollectionDueByUnitIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetARAgingCollectionDueSummaryResponse",
        value: function GetARAgingCollectionDueSummaryResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.type != null) __params = __params.set('type', params.type.toString());
          if (params.asOfDate != null) __params = __params.set('asOfDate', params.asOfDate.toString());
          if (params.ApartmentID != null) __params = __params.set('ApartmentID', params.ApartmentID.toString());
          if (params.AgeTo5 != null) __params = __params.set('AgeTo5', params.AgeTo5.toString());
          if (params.AgeTo4 != null) __params = __params.set('AgeTo4', params.AgeTo4.toString());
          if (params.AgeTo3 != null) __params = __params.set('AgeTo3', params.AgeTo3.toString());
          if (params.AgeTo2 != null) __params = __params.set('AgeTo2', params.AgeTo2.toString());
          if (params.AgeTo1 != null) __params = __params.set('AgeTo1', params.AgeTo1.toString());
          if (params.AgeFrom5 != null) __params = __params.set('AgeFrom5', params.AgeFrom5.toString());
          if (params.AgeFrom4 != null) __params = __params.set('AgeFrom4', params.AgeFrom4.toString());
          if (params.AgeFrom3 != null) __params = __params.set('AgeFrom3', params.AgeFrom3.toString());
          if (params.AgeFrom2 != null) __params = __params.set('AgeFrom2', params.AgeFrom2.toString());
          if (params.AgeFrom1 != null) __params = __params.set('AgeFrom1', params.AgeFrom1.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetARAgingCollectionDueSummary", __body, {
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

      }, {
        key: "GetARAgingCollectionDueSummary",
        value: function GetARAgingCollectionDueSummary(params) {
          return this.GetARAgingCollectionDueSummaryResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getInvoiceGLAccountsByApartmentIdStatusResponse",
        value: function getInvoiceGLAccountsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getInvoiceGLAccountsByApartmentId", __body, {
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
        key: "getInvoiceGLAccountsByApartmentIdStatus",
        value: function getInvoiceGLAccountsByApartmentIdStatus(apartmentId) {
          return this.getInvoiceGLAccountsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetInvoiceGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getInvoiceGLAccountsByApartmentIdStatus_1Response",
        value: function getInvoiceGLAccountsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getInvoiceGLAccountsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetInvoiceGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getInvoiceGLAccountsByApartmentIdStatus_1",
        value: function getInvoiceGLAccountsByApartmentIdStatus_1(params) {
          return this.getInvoiceGLAccountsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetInvoiceGLAccountsByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getInvoiceGLAccountsByInvoiceIdResponse",
        value: function getInvoiceGLAccountsByInvoiceIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getInvoiceGLAccountsByInvoiceId", __body, {
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
         * @param params The `AccountsService.GetInvoiceGLAccountsByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getInvoiceGLAccountsByInvoiceId",
        value: function getInvoiceGLAccountsByInvoiceId(params) {
          return this.getInvoiceGLAccountsByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetInvoiceGLAccountByIdParams` containing the following parameters:
         *
         * - `invoiceGlaccountId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getInvoiceGLAccountByIdResponse",
        value: function getInvoiceGLAccountByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceGlaccountId != null) __params = __params.set('invoiceGlaccountId', params.invoiceGlaccountId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getInvoiceGLAccountById", __body, {
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
         * @param params The `AccountsService.GetInvoiceGLAccountByIdParams` containing the following parameters:
         *
         * - `invoiceGlaccountId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getInvoiceGLAccountById",
        value: function getInvoiceGLAccountById(params) {
          return this.getInvoiceGLAccountByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoiceGlaccount undefined
         */

      }, {
        key: "addInvoiceGLAccountsResponse",
        value: function addInvoiceGLAccountsResponse(invoiceGlaccount) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoiceGlaccount;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addInvoiceGLAccounts", __body, {
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
         * @param invoiceGlaccount undefined
         */

      }, {
        key: "addInvoiceGLAccounts",
        value: function addInvoiceGLAccounts(invoiceGlaccount) {
          return this.addInvoiceGLAccountsResponse(invoiceGlaccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoiceGlaccount undefined
         */

      }, {
        key: "updateInvoiceGLAccountsResponse",
        value: function updateInvoiceGLAccountsResponse(invoiceGlaccount) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoiceGlaccount;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateInvoiceGLAccounts", __body, {
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
         * @param invoiceGlaccount undefined
         */

      }, {
        key: "updateInvoiceGLAccounts",
        value: function updateInvoiceGLAccounts(invoiceGlaccount) {
          return this.updateInvoiceGLAccountsResponse(invoiceGlaccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteInvoiceGLAccountsParams` containing the following parameters:
         *
         * - `invoiceGlaccountId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteInvoiceGLAccountsResponse",
        value: function deleteInvoiceGLAccountsResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceGlaccountId != null) __params = __params.set('invoiceGlaccountId', params.invoiceGlaccountId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteInvoiceGLAccounts", __body, {
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
         * @param params The `AccountsService.DeleteInvoiceGLAccountsParams` containing the following parameters:
         *
         * - `invoiceGlaccountId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteInvoiceGLAccounts",
        value: function deleteInvoiceGLAccounts(params) {
          return this.deleteInvoiceGLAccountsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllVendorInvoicesResponse",
        value: function getAllVendorInvoicesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorInvoices", __body, {
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
        key: "getAllVendorInvoices",
        value: function getAllVendorInvoices() {
          return this.getAllVendorInvoicesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVendorInvoicesByStatusResponse",
        value: function getAllVendorInvoicesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorInvoicesByStatus", __body, {
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
        key: "getAllVendorInvoicesByStatus",
        value: function getAllVendorInvoicesByStatus(active) {
          return this.getAllVendorInvoicesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVendorInvoicesByApartmentIdResponse",
        value: function getVendorInvoicesByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoicesByApartmentId", __body, {
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
        key: "getVendorInvoicesByApartmentId",
        value: function getVendorInvoicesByApartmentId(apartmentId) {
          return this.getVendorInvoicesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorInvoicesByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorInvoicesByApartmentIdStatusResponse",
        value: function getVendorInvoicesByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoicesByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetVendorInvoicesByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorInvoicesByApartmentIdStatus",
        value: function getVendorInvoicesByApartmentIdStatus(params) {
          return this.getVendorInvoicesByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "getVendorInvoicesByApartmentDueDateRangeResponse",
        value: function getVendorInvoicesByApartmentDueDateRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoicesByApartmentDueDateRange", __body, {
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
         * @param params The `AccountsService.GetVendorInvoicesByApartmentDueDateRangeParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoicesByApartmentDueDateRange",
        value: function getVendorInvoicesByApartmentDueDateRange(params) {
          return this.getVendorInvoicesByApartmentDueDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorInvoiceByVendorIdParams` containing the following parameters:
         *
         * - `vendorId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceByVendorIdResponse",
        value: function getVendorInvoiceByVendorIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorId != null) __params = __params.set('vendorId', params.vendorId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoiceByVendorId", __body, {
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
         * @param params The `AccountsService.GetVendorInvoiceByVendorIdParams` containing the following parameters:
         *
         * - `vendorId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceByVendorId",
        value: function getVendorInvoiceByVendorId(params) {
          return this.getVendorInvoiceByVendorIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorInvoiceByIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceByIdResponse",
        value: function getVendorInvoiceByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoiceById", __body, {
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
         * @param params The `AccountsService.GetVendorInvoiceByIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceById",
        value: function getVendorInvoiceById(params) {
          return this.getVendorInvoiceByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoice undefined
         */

      }, {
        key: "addVendorInvoiceResponse",
        value: function addVendorInvoiceResponse(invoice) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoice;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorInvoice", __body, {
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
         * @param invoice undefined
         */

      }, {
        key: "addVendorInvoice",
        value: function addVendorInvoice(invoice) {
          return this.addVendorInvoiceResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoice undefined
         */

      }, {
        key: "updateVendorInvoiceResponse",
        value: function updateVendorInvoiceResponse(invoice) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoice;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateVendorInvoice", __body, {
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
         * @param invoice undefined
         */

      }, {
        key: "updateVendorInvoice",
        value: function updateVendorInvoice(invoice) {
          return this.updateVendorInvoiceResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteVendorInvoiceParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorInvoiceResponse",
        value: function deleteVendorInvoiceResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteVendorInvoice", __body, {
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
         * @param params The `AccountsService.DeleteVendorInvoiceParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorInvoice",
        value: function deleteVendorInvoice(params) {
          return this.deleteVendorInvoiceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllVendorInvoiceAttachmentsResponse",
        value: function getAllVendorInvoiceAttachmentsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorInvoiceAttachments", __body, {
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
        key: "getAllVendorInvoiceAttachments",
        value: function getAllVendorInvoiceAttachments() {
          return this.getAllVendorInvoiceAttachmentsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVendorInvoiceAttachmentsByStatusResponse",
        value: function getAllVendorInvoiceAttachmentsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorInvoiceAttachmentsByStatus", __body, {
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
        key: "getAllVendorInvoiceAttachmentsByStatus",
        value: function getAllVendorInvoiceAttachmentsByStatus(active) {
          return this.getAllVendorInvoiceAttachmentsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVendorInvoiceAttachmentsByApartmentIdResponse",
        value: function getVendorInvoiceAttachmentsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoiceAttachmentsByApartmentId", __body, {
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
        key: "getVendorInvoiceAttachmentsByApartmentId",
        value: function getVendorInvoiceAttachmentsByApartmentId(apartmentId) {
          return this.getVendorInvoiceAttachmentsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorInvoiceAttachmentsByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorInvoiceAttachmentsByApartmentIdStatusResponse",
        value: function getVendorInvoiceAttachmentsByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoiceAttachmentsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetVendorInvoiceAttachmentsByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorInvoiceAttachmentsByApartmentIdStatus",
        value: function getVendorInvoiceAttachmentsByApartmentIdStatus(params) {
          return this.getVendorInvoiceAttachmentsByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorInvoiceAttachmentByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceAttachmentByInvoiceIdResponse",
        value: function getVendorInvoiceAttachmentByInvoiceIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoiceAttachmentByInvoiceId", __body, {
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
         * @param params The `AccountsService.GetVendorInvoiceAttachmentByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceAttachmentByInvoiceId",
        value: function getVendorInvoiceAttachmentByInvoiceId(params) {
          return this.getVendorInvoiceAttachmentByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorInvoiceAttachmentByIdParams` containing the following parameters:
         *
         * - `invoiceAttachmentId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceAttachmentByIdResponse",
        value: function getVendorInvoiceAttachmentByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceAttachmentId != null) __params = __params.set('invoiceAttachmentId', params.invoiceAttachmentId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoiceAttachmentById", __body, {
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
         * @param params The `AccountsService.GetVendorInvoiceAttachmentByIdParams` containing the following parameters:
         *
         * - `invoiceAttachmentId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceAttachmentById",
        value: function getVendorInvoiceAttachmentById(params) {
          return this.getVendorInvoiceAttachmentByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoice undefined
         */

      }, {
        key: "addVendorInvoiceAttachmentResponse",
        value: function addVendorInvoiceAttachmentResponse(invoice) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoice;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorInvoiceAttachment", __body, {
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
         * @param invoice undefined
         */

      }, {
        key: "addVendorInvoiceAttachment",
        value: function addVendorInvoiceAttachment(invoice) {
          return this.addVendorInvoiceAttachmentResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoice undefined
         */

      }, {
        key: "updateVendorInvoiceAttachmentResponse",
        value: function updateVendorInvoiceAttachmentResponse(invoice) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoice;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateVendorInvoiceAttachment", __body, {
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
         * @param invoice undefined
         */

      }, {
        key: "updateVendorInvoiceAttachment",
        value: function updateVendorInvoiceAttachment(invoice) {
          return this.updateVendorInvoiceAttachmentResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteVendorInvoiceAttachmentParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorInvoiceAttachmentResponse",
        value: function deleteVendorInvoiceAttachmentResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteVendorInvoiceAttachment", __body, {
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
         * @param params The `AccountsService.DeleteVendorInvoiceAttachmentParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorInvoiceAttachment",
        value: function deleteVendorInvoiceAttachment(params) {
          return this.deleteVendorInvoiceAttachmentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllVendorInvoiceGLAccountsResponse",
        value: function getAllVendorInvoiceGLAccountsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorInvoiceGLAccounts", __body, {
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
        key: "getAllVendorInvoiceGLAccounts",
        value: function getAllVendorInvoiceGLAccounts() {
          return this.getAllVendorInvoiceGLAccountsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVendorInvoiceGLAccountsByStatusResponse",
        value: function getAllVendorInvoiceGLAccountsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorInvoiceGLAccountsByStatus", __body, {
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
        key: "getAllVendorInvoiceGLAccountsByStatus",
        value: function getAllVendorInvoiceGLAccountsByStatus(active) {
          return this.getAllVendorInvoiceGLAccountsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVendorInvoiceGLAccountsByApartmentIdStatusResponse",
        value: function getVendorInvoiceGLAccountsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoiceGLAccountsByApartmentId", __body, {
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
        key: "getVendorInvoiceGLAccountsByApartmentIdStatus",
        value: function getVendorInvoiceGLAccountsByApartmentIdStatus(apartmentId) {
          return this.getVendorInvoiceGLAccountsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorInvoiceGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorInvoiceGLAccountsByApartmentIdStatus_1Response",
        value: function getVendorInvoiceGLAccountsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoiceGLAccountsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetVendorInvoiceGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorInvoiceGLAccountsByApartmentIdStatus_1",
        value: function getVendorInvoiceGLAccountsByApartmentIdStatus_1(params) {
          return this.getVendorInvoiceGLAccountsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorInvoiceGLAccountsByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceGLAccountsByInvoiceIdResponse",
        value: function getVendorInvoiceGLAccountsByInvoiceIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoiceGLAccountsByInvoiceId", __body, {
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
         * @param params The `AccountsService.GetVendorInvoiceGLAccountsByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceGLAccountsByInvoiceId",
        value: function getVendorInvoiceGLAccountsByInvoiceId(params) {
          return this.getVendorInvoiceGLAccountsByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorInvoiceGLAccountByIdParams` containing the following parameters:
         *
         * - `invoiceGlaccountId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceGLAccountByIdResponse",
        value: function getVendorInvoiceGLAccountByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceGlaccountId != null) __params = __params.set('invoiceGlaccountId', params.invoiceGlaccountId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorInvoiceGLAccountById", __body, {
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
         * @param params The `AccountsService.GetVendorInvoiceGLAccountByIdParams` containing the following parameters:
         *
         * - `invoiceGlaccountId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorInvoiceGLAccountById",
        value: function getVendorInvoiceGLAccountById(params) {
          return this.getVendorInvoiceGLAccountByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoiceGlaccount undefined
         */

      }, {
        key: "addVendorInvoiceGLAccountsResponse",
        value: function addVendorInvoiceGLAccountsResponse(invoiceGlaccount) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoiceGlaccount;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorInvoiceGLAccounts", __body, {
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
         * @param invoiceGlaccount undefined
         */

      }, {
        key: "addVendorInvoiceGLAccounts",
        value: function addVendorInvoiceGLAccounts(invoiceGlaccount) {
          return this.addVendorInvoiceGLAccountsResponse(invoiceGlaccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoiceGlaccount undefined
         */

      }, {
        key: "updateVendorInvoiceGLAccountsResponse",
        value: function updateVendorInvoiceGLAccountsResponse(invoiceGlaccount) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoiceGlaccount;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateVendorInvoiceGLAccounts", __body, {
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
         * @param invoiceGlaccount undefined
         */

      }, {
        key: "updateVendorInvoiceGLAccounts",
        value: function updateVendorInvoiceGLAccounts(invoiceGlaccount) {
          return this.updateVendorInvoiceGLAccountsResponse(invoiceGlaccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteVendorInvoiceGLAccountsParams` containing the following parameters:
         *
         * - `invoiceGlaccountId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorInvoiceGLAccountsResponse",
        value: function deleteVendorInvoiceGLAccountsResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceGlaccountId != null) __params = __params.set('invoiceGlaccountId', params.invoiceGlaccountId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteVendorInvoiceGLAccounts", __body, {
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
         * @param params The `AccountsService.DeleteVendorInvoiceGLAccountsParams` containing the following parameters:
         *
         * - `invoiceGlaccountId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorInvoiceGLAccounts",
        value: function deleteVendorInvoiceGLAccounts(params) {
          return this.deleteVendorInvoiceGLAccountsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllVendorPaymentsResponse",
        value: function getAllVendorPaymentsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorPayments", __body, {
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
        key: "getAllVendorPayments",
        value: function getAllVendorPayments() {
          return this.getAllVendorPaymentsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVendorPaymentsByStatusResponse",
        value: function getAllVendorPaymentsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorPaymentsByStatus", __body, {
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
        key: "getAllVendorPaymentsByStatus",
        value: function getAllVendorPaymentsByStatus(active) {
          return this.getAllVendorPaymentsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVendorPaymentsByApartmentIdResponse",
        value: function getVendorPaymentsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorPaymentsByApartmentId", __body, {
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
        key: "getVendorPaymentsByApartmentId",
        value: function getVendorPaymentsByApartmentId(apartmentId) {
          return this.getVendorPaymentsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorPaymentsByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorPaymentsByApartmentIdStatusResponse",
        value: function getVendorPaymentsByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorPaymentsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetVendorPaymentsByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorPaymentsByApartmentIdStatus",
        value: function getVendorPaymentsByApartmentIdStatus(params) {
          return this.getVendorPaymentsByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorPaymentByInstrumentIdParams` containing the following parameters:
         *
         * - `instrumentId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorPaymentByInstrumentIdResponse",
        value: function getVendorPaymentByInstrumentIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.instrumentId != null) __params = __params.set('instrumentId', params.instrumentId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorPaymentByInstrumentId", __body, {
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
         * @param params The `AccountsService.GetVendorPaymentByInstrumentIdParams` containing the following parameters:
         *
         * - `instrumentId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorPaymentByInstrumentId",
        value: function getVendorPaymentByInstrumentId(params) {
          return this.getVendorPaymentByInstrumentIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorPaymentByPayeeIdParams` containing the following parameters:
         *
         * - `payeeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorPaymentByPayeeIdResponse",
        value: function getVendorPaymentByPayeeIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.payeeId != null) __params = __params.set('payeeId', params.payeeId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorPaymentByPayeeId", __body, {
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
         * @param params The `AccountsService.GetVendorPaymentByPayeeIdParams` containing the following parameters:
         *
         * - `payeeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorPaymentByPayeeId",
        value: function getVendorPaymentByPayeeId(params) {
          return this.getVendorPaymentByPayeeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorPaymentByVendorPaymentAccountTypeIdParams` containing the following parameters:
         *
         * - `vendorPaymentAccountTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorPaymentByVendorPaymentAccountTypeIdResponse",
        value: function getVendorPaymentByVendorPaymentAccountTypeIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorPaymentAccountTypeId != null) __params = __params.set('vendorPaymentAccountTypeId', params.vendorPaymentAccountTypeId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorPaymentByVendorPaymentAccountTypeId", __body, {
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
         * @param params The `AccountsService.GetVendorPaymentByVendorPaymentAccountTypeIdParams` containing the following parameters:
         *
         * - `vendorPaymentAccountTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorPaymentByVendorPaymentAccountTypeId",
        value: function getVendorPaymentByVendorPaymentAccountTypeId(params) {
          return this.getVendorPaymentByVendorPaymentAccountTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorPaymentByIdParams` containing the following parameters:
         *
         * - `vendorPaymentId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorPaymentByIdResponse",
        value: function getVendorPaymentByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorPaymentId != null) __params = __params.set('vendorPaymentId', params.vendorPaymentId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorPaymentById", __body, {
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
         * @param params The `AccountsService.GetVendorPaymentByIdParams` containing the following parameters:
         *
         * - `vendorPaymentId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorPaymentById",
        value: function getVendorPaymentById(params) {
          return this.getVendorPaymentByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param payment undefined
         */

      }, {
        key: "addVendorPaymentResponse",
        value: function addVendorPaymentResponse(payment) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = payment;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorPayment", __body, {
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
         * @param payment undefined
         */

      }, {
        key: "addVendorPayment",
        value: function addVendorPayment(payment) {
          return this.addVendorPaymentResponse(payment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoice undefined
         */

      }, {
        key: "updateVendorPaymentResponse",
        value: function updateVendorPaymentResponse(invoice) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoice;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateVendorPayment", __body, {
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
         * @param invoice undefined
         */

      }, {
        key: "updateVendorPayment",
        value: function updateVendorPayment(invoice) {
          return this.updateVendorPaymentResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteVendorPaymentParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorPaymentResponse",
        value: function deleteVendorPaymentResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteVendorPayment", __body, {
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
         * @param params The `AccountsService.DeleteVendorPaymentParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorPayment",
        value: function deleteVendorPayment(params) {
          return this.deleteVendorPaymentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllVendorPaymentInvoicesResponse",
        value: function getAllVendorPaymentInvoicesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorPaymentInvoices", __body, {
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
        key: "getAllVendorPaymentInvoices",
        value: function getAllVendorPaymentInvoices() {
          return this.getAllVendorPaymentInvoicesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVendorPaymentInvoicesByStatusResponse",
        value: function getAllVendorPaymentInvoicesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorPaymentInvoicesByStatus", __body, {
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
        key: "getAllVendorPaymentInvoicesByStatus",
        value: function getAllVendorPaymentInvoicesByStatus(active) {
          return this.getAllVendorPaymentInvoicesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVendorPaymentInvoicesByApartmentIdStatusResponse",
        value: function getVendorPaymentInvoicesByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorPaymentInvoicesByApartmentId", __body, {
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
        key: "getVendorPaymentInvoicesByApartmentIdStatus",
        value: function getVendorPaymentInvoicesByApartmentIdStatus(apartmentId) {
          return this.getVendorPaymentInvoicesByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorPaymentInvoicesByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorPaymentInvoicesByApartmentIdStatus_1Response",
        value: function getVendorPaymentInvoicesByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorPaymentInvoicesByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetVendorPaymentInvoicesByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorPaymentInvoicesByApartmentIdStatus_1",
        value: function getVendorPaymentInvoicesByApartmentIdStatus_1(params) {
          return this.getVendorPaymentInvoicesByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorPaymentInvoiceByVendorPaymentInvoiceIdParams` containing the following parameters:
         *
         * - `vendorInvoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorPaymentInvoiceByVendorPaymentInvoiceIdResponse",
        value: function getVendorPaymentInvoiceByVendorPaymentInvoiceIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorInvoiceId != null) __params = __params.set('vendorInvoiceId', params.vendorInvoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorPaymentInvoiceByVendorPaymentInvoiceId", __body, {
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
         * @param params The `AccountsService.GetVendorPaymentInvoiceByVendorPaymentInvoiceIdParams` containing the following parameters:
         *
         * - `vendorInvoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorPaymentInvoiceByVendorPaymentInvoiceId",
        value: function getVendorPaymentInvoiceByVendorPaymentInvoiceId(params) {
          return this.getVendorPaymentInvoiceByVendorPaymentInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorPaymentInvoice undefined
         */

      }, {
        key: "addVendorPaymentInvoiceResponse",
        value: function addVendorPaymentInvoiceResponse(vendorPaymentInvoice) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorPaymentInvoice;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorPaymentInvoice", __body, {
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
         * @param vendorPaymentInvoice undefined
         */

      }, {
        key: "addVendorPaymentInvoice",
        value: function addVendorPaymentInvoice(vendorPaymentInvoice) {
          return this.addVendorPaymentInvoiceResponse(vendorPaymentInvoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorPaymentInvoice undefined
         */

      }, {
        key: "updateVendorPaymentInvoiceResponse",
        value: function updateVendorPaymentInvoiceResponse(vendorPaymentInvoice) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorPaymentInvoice;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateVendorPaymentInvoice", __body, {
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
         * @param vendorPaymentInvoice undefined
         */

      }, {
        key: "updateVendorPaymentInvoice",
        value: function updateVendorPaymentInvoice(vendorPaymentInvoice) {
          return this.updateVendorPaymentInvoiceResponse(vendorPaymentInvoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteVendorPaymentInvoiceParams` containing the following parameters:
         *
         * - `vendorPaymentInvoiceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorPaymentInvoiceResponse",
        value: function deleteVendorPaymentInvoiceResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorPaymentInvoiceId != null) __params = __params.set('vendorPaymentInvoiceId', params.vendorPaymentInvoiceId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteVendorPaymentInvoice", __body, {
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
         * @param params The `AccountsService.DeleteVendorPaymentInvoiceParams` containing the following parameters:
         *
         * - `vendorPaymentInvoiceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorPaymentInvoice",
        value: function deleteVendorPaymentInvoice(params) {
          return this.deleteVendorPaymentInvoiceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllVendorCreditNotesResponse",
        value: function getAllVendorCreditNotesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorCreditNotes", __body, {
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
        key: "getAllVendorCreditNotes",
        value: function getAllVendorCreditNotes() {
          return this.getAllVendorCreditNotesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVendorCreditNotesByStatusResponse",
        value: function getAllVendorCreditNotesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorCreditNotesByStatus", __body, {
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
        key: "getAllVendorCreditNotesByStatus",
        value: function getAllVendorCreditNotesByStatus(active) {
          return this.getAllVendorCreditNotesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVendorCreditNotesByApartmentIdStatusResponse",
        value: function getVendorCreditNotesByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorCreditNotesByApartmentId", __body, {
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
        key: "getVendorCreditNotesByApartmentIdStatus",
        value: function getVendorCreditNotesByApartmentIdStatus(apartmentId) {
          return this.getVendorCreditNotesByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorCreditNotesByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorCreditNotesByApartmentIdStatus_1Response",
        value: function getVendorCreditNotesByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorCreditNotesByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetVendorCreditNotesByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorCreditNotesByApartmentIdStatus_1",
        value: function getVendorCreditNotesByApartmentIdStatus_1(params) {
          return this.getVendorCreditNotesByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorCreditNotesByPaymentIdParams` containing the following parameters:
         *
         * - `paymentId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorCreditNotesByPaymentIdResponse",
        value: function getVendorCreditNotesByPaymentIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.paymentId != null) __params = __params.set('paymentId', params.paymentId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorCreditNotesByPaymentId", __body, {
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
         * @param params The `AccountsService.GetVendorCreditNotesByPaymentIdParams` containing the following parameters:
         *
         * - `paymentId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorCreditNotesByPaymentId",
        value: function getVendorCreditNotesByPaymentId(params) {
          return this.getVendorCreditNotesByPaymentIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorCreditNotesByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorCreditNotesByInvoiceIdResponse",
        value: function getVendorCreditNotesByInvoiceIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorCreditNotesByInvoiceId", __body, {
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
         * @param params The `AccountsService.GetVendorCreditNotesByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorCreditNotesByInvoiceId",
        value: function getVendorCreditNotesByInvoiceId(params) {
          return this.getVendorCreditNotesByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorCreditNoteByIdParams` containing the following parameters:
         *
         * - `creditNoteId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorCreditNoteByIdResponse",
        value: function getVendorCreditNoteByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.creditNoteId != null) __params = __params.set('creditNoteId', params.creditNoteId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorCreditNoteById", __body, {
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
         * @param params The `AccountsService.GetVendorCreditNoteByIdParams` containing the following parameters:
         *
         * - `creditNoteId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorCreditNoteById",
        value: function getVendorCreditNoteById(params) {
          return this.getVendorCreditNoteByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param creditNote undefined
         */

      }, {
        key: "addVendorCreditNoteResponse",
        value: function addVendorCreditNoteResponse(creditNote) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = creditNote;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorCreditNote", __body, {
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
         * @param creditNote undefined
         */

      }, {
        key: "addVendorCreditNote",
        value: function addVendorCreditNote(creditNote) {
          return this.addVendorCreditNoteResponse(creditNote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param creditNote undefined
         */

      }, {
        key: "updateVendorCreditNoteResponse",
        value: function updateVendorCreditNoteResponse(creditNote) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = creditNote;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateVendorCreditNote", __body, {
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
         * @param creditNote undefined
         */

      }, {
        key: "updateVendorCreditNote",
        value: function updateVendorCreditNote(creditNote) {
          return this.updateVendorCreditNoteResponse(creditNote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteVendorCreditNoteParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `creditNoteId`:
         */

      }, {
        key: "deleteVendorCreditNoteResponse",
        value: function deleteVendorCreditNoteResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.creditNoteId != null) __params = __params.set('creditNoteId', params.creditNoteId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteVendorCreditNote", __body, {
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
         * @param params The `AccountsService.DeleteVendorCreditNoteParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `creditNoteId`:
         */

      }, {
        key: "deleteVendorCreditNote",
        value: function deleteVendorCreditNote(params) {
          return this.deleteVendorCreditNoteResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllVendorTransReversalsResponse",
        value: function getAllVendorTransReversalsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorTransReversals", __body, {
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
        key: "getAllVendorTransReversals",
        value: function getAllVendorTransReversals() {
          return this.getAllVendorTransReversalsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVendorTransReversalsByStatusResponse",
        value: function getAllVendorTransReversalsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorTransReversalsByStatus", __body, {
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
        key: "getAllVendorTransReversalsByStatus",
        value: function getAllVendorTransReversalsByStatus(active) {
          return this.getAllVendorTransReversalsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVendorTransReversalsByApartmentIdStatusResponse",
        value: function getVendorTransReversalsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorTransReversalsByApartmentId", __body, {
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
        key: "getVendorTransReversalsByApartmentIdStatus",
        value: function getVendorTransReversalsByApartmentIdStatus(apartmentId) {
          return this.getVendorTransReversalsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorTransReversalsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorTransReversalsByApartmentIdStatus_1Response",
        value: function getVendorTransReversalsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorTransReversalsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetVendorTransReversalsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorTransReversalsByApartmentIdStatus_1",
        value: function getVendorTransReversalsByApartmentIdStatus_1(params) {
          return this.getVendorTransReversalsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorTransReversalsByVendorPaymentIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorTransReversalsByVendorPaymentIdResponse",
        value: function getVendorTransReversalsByVendorPaymentIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.collectionId != null) __params = __params.set('collectionId', params.collectionId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorTransReversalsByVendorPaymentId", __body, {
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
         * @param params The `AccountsService.GetVendorTransReversalsByVendorPaymentIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorTransReversalsByVendorPaymentId",
        value: function getVendorTransReversalsByVendorPaymentId(params) {
          return this.getVendorTransReversalsByVendorPaymentIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorTransReversalsByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorTransReversalsByInvoiceIdResponse",
        value: function getVendorTransReversalsByInvoiceIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorTransReversalsByInvoiceId", __body, {
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
         * @param params The `AccountsService.GetVendorTransReversalsByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorTransReversalsByInvoiceId",
        value: function getVendorTransReversalsByInvoiceId(params) {
          return this.getVendorTransReversalsByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorTransReversalByIdParams` containing the following parameters:
         *
         * - `custTransReversalId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorTransReversalByIdResponse",
        value: function getVendorTransReversalByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.custTransReversalId != null) __params = __params.set('custTransReversalId', params.custTransReversalId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorTransReversalById", __body, {
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
         * @param params The `AccountsService.GetVendorTransReversalByIdParams` containing the following parameters:
         *
         * - `custTransReversalId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorTransReversalById",
        value: function getVendorTransReversalById(params) {
          return this.getVendorTransReversalByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorTransReversal undefined
         */

      }, {
        key: "addVendorTransReversalResponse",
        value: function addVendorTransReversalResponse(vendorTransReversal) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorTransReversal;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorTransReversal", __body, {
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
         * @param vendorTransReversal undefined
         */

      }, {
        key: "addVendorTransReversal",
        value: function addVendorTransReversal(vendorTransReversal) {
          return this.addVendorTransReversalResponse(vendorTransReversal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custTransReversal undefined
         */

      }, {
        key: "updateVendorTransReversalResponse",
        value: function updateVendorTransReversalResponse(custTransReversal) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custTransReversal;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateVendorTransReversal", __body, {
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
         * @param custTransReversal undefined
         */

      }, {
        key: "updateVendorTransReversal",
        value: function updateVendorTransReversal(custTransReversal) {
          return this.updateVendorTransReversalResponse(custTransReversal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteVendorTransReversalParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `VendorTransReversalId`:
         */

      }, {
        key: "deleteVendorTransReversalResponse",
        value: function deleteVendorTransReversalResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.VendorTransReversalId != null) __params = __params.set('VendorTransReversalId', params.VendorTransReversalId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteVendorTransReversal", __body, {
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
         * @param params The `AccountsService.DeleteVendorTransReversalParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `VendorTransReversalId`:
         */

      }, {
        key: "deleteVendorTransReversal",
        value: function deleteVendorTransReversal(params) {
          return this.deleteVendorTransReversalResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "GetIncomeTrackerSubLedgersByApartmentIdResponse",
        value: function GetIncomeTrackerSubLedgersByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerSubLedgersByApartmentId", __body, {
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
        key: "GetIncomeTrackerSubLedgersByApartmentId",
        value: function GetIncomeTrackerSubLedgersByApartmentId(apartmentId) {
          return this.GetIncomeTrackerSubLedgersByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetIncomeTrackerSubLedgersByApartmentBlockStartNameParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `apartmentBlockStartChar`:
         */

      }, {
        key: "GetIncomeTrackerSubLedgersByApartmentBlockStartNameResponse",
        value: function GetIncomeTrackerSubLedgersByApartmentBlockStartNameResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.apartmentBlockStartChar != null) __params = __params.set('apartmentBlockStartChar', params.apartmentBlockStartChar.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerSubLedgersByApartmentBlockStartName", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerSubLedgersByApartmentBlockStartNameParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `apartmentBlockStartChar`:
         */

      }, {
        key: "GetIncomeTrackerSubLedgersByApartmentBlockStartName",
        value: function GetIncomeTrackerSubLedgersByApartmentBlockStartName(params) {
          return this.GetIncomeTrackerSubLedgersByApartmentBlockStartNameResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "GetIncomeTrackerSubLedgerPrintReceiptsByApartmentIdResponse",
        value: function GetIncomeTrackerSubLedgerPrintReceiptsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerSubLedgerPrintReceiptsByApartmentId", __body, {
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
        key: "GetIncomeTrackerSubLedgerPrintReceiptsByApartmentId",
        value: function GetIncomeTrackerSubLedgerPrintReceiptsByApartmentId(apartmentId) {
          return this.GetIncomeTrackerSubLedgerPrintReceiptsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param ApartmentBlockUnitID undefined
         */

      }, {
        key: "GetAccountHistoryByApartmentUnitIdResponse",
        value: function GetAccountHistoryByApartmentUnitIdResponse(ApartmentBlockUnitID) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (ApartmentBlockUnitID != null) __params = __params.set('ApartmentBlockUnitID', ApartmentBlockUnitID.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetAccountHistoryByApartmentUnitId", __body, {
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
         * @param ApartmentBlockUnitID undefined
         */

      }, {
        key: "GetAccountHistoryByApartmentUnitId",
        value: function GetAccountHistoryByApartmentUnitId(ApartmentBlockUnitID) {
          return this.GetAccountHistoryByApartmentUnitIdResponse(ApartmentBlockUnitID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param VendorID undefined
         */

      }, {
        key: "GetVendorPaymenntHistoryByIdResponse",
        value: function GetVendorPaymenntHistoryByIdResponse(VendorID) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (VendorID != null) __params = __params.set('VendorID', VendorID.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetVendorPaymenntHistoryById", __body, {
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
         * @param VendorID undefined
         */

      }, {
        key: "GetVendorPaymenntHistoryById",
        value: function GetVendorPaymenntHistoryById(VendorID) {
          return this.GetVendorPaymenntHistoryByIdResponse(VendorID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetGLAccountTransactionsByIDResponse",
        value: function GetGLAccountTransactionsByIDResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.Todate != null) __params = __params.set('Todate', params.Todate.toString());
          if (params.GLAccountId != null) __params = __params.set('GLAccountId', params.GLAccountId.toString());
          if (params.FromDate != null) __params = __params.set('FromDate', params.FromDate.toString());
          if (params.ApartmentId != null) __params = __params.set('ApartmentId', params.ApartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetGLAccountTransactionsByID", __body, {
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

      }, {
        key: "GetGLAccountTransactionsByID",
        value: function GetGLAccountTransactionsByID(params) {
          return this.GetGLAccountTransactionsByIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetTrialBalanceByDateResponse",
        value: function GetTrialBalanceByDateResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.ToDate != null) __params = __params.set('ToDate', params.ToDate.toString());
          if (params.FromDate != null) __params = __params.set('FromDate', params.FromDate.toString());
          if (params.ApartmentId != null) __params = __params.set('ApartmentId', params.ApartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetTrialBalanceByDate", __body, {
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
         * @param params The `AccountsService.GetTrialBalanceByDateParams` containing the following parameters:
         *
         * - `ToDate`:
         *
         * - `FromDate`:
         *
         * - `ApartmentId`:
         */

      }, {
        key: "GetTrialBalanceByDate",
        value: function GetTrialBalanceByDate(params) {
          return this.GetTrialBalanceByDateResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetGLCreditDebitTransactionsResponse",
        value: function GetGLCreditDebitTransactionsResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.ToDate != null) __params = __params.set('ToDate', params.ToDate.toString());
          if (params.GlAccountTypeID != null) __params = __params.set('GlAccountTypeID', params.GlAccountTypeID.toString());
          if (params.GLGroupID != null) __params = __params.set('GLGroupID', params.GLGroupID.toString());
          if (params.GLAccountId != null) __params = __params.set('GLAccountId', params.GLAccountId.toString());
          if (params.FromDate != null) __params = __params.set('FromDate', params.FromDate.toString());
          if (params.ApartmentId != null) __params = __params.set('ApartmentId', params.ApartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetGLCreditDebitTransactions", __body, {
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

      }, {
        key: "GetGLCreditDebitTransactions",
        value: function GetGLCreditDebitTransactions(params) {
          return this.GetGLCreditDebitTransactionsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `apartmentBlockUnitId`:
         */

      }, {
        key: "GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdResponse",
        value: function GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitId", __body, {
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
         * @param params The `AccountsService.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `apartmentBlockUnitId`:
         */

      }, {
        key: "GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitId",
        value: function GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitId(params) {
          return this.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRangeResponse",
        value: function GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRange", __body, {
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

      }, {
        key: "GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRange",
        value: function GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRange(params) {
          return this.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitIdDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "GetIncomeTrackerCreditNoteResponse",
        value: function GetIncomeTrackerCreditNoteResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/GetIncomeTrackerCreditNote", __body, {
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
        key: "GetIncomeTrackerCreditNote",
        value: function GetIncomeTrackerCreditNote(apartmentId) {
          return this.GetIncomeTrackerCreditNoteResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorGltransactions undefined
         */

      }, {
        key: "addVendorGltransactionListResponse",
        value: function addVendorGltransactionListResponse(vendorGltransactions) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorGltransactions;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorGltransactionList", __body, {
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
         * @param vendorGltransactions undefined
         */

      }, {
        key: "addVendorGltransactionList",
        value: function addVendorGltransactionList(vendorGltransactions) {
          return this.addVendorGltransactionListResponse(vendorGltransactions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorGltransaction undefined
         */

      }, {
        key: "updateVendorGltransactionResponse",
        value: function updateVendorGltransactionResponse(vendorGltransaction) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorGltransaction;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateVendorGltransaction", __body, {
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
         * @param vendorGltransaction undefined
         */

      }, {
        key: "updateVendorGltransaction",
        value: function updateVendorGltransaction(vendorGltransaction) {
          return this.updateVendorGltransactionResponse(vendorGltransaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteVendorGltransactionParams` containing the following parameters:
         *
         * - `vendorGltransactionId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorGltransactionResponse",
        value: function deleteVendorGltransactionResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorGltransactionId != null) __params = __params.set('vendorGltransactionId', params.vendorGltransactionId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteVendorGltransaction", __body, {
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
         * @param params The `AccountsService.DeleteVendorGltransactionParams` containing the following parameters:
         *
         * - `vendorGltransactionId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorGltransaction",
        value: function deleteVendorGltransaction(params) {
          return this.deleteVendorGltransactionResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllCreditNotesResponse",
        value: function getAllCreditNotesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCreditNotes", __body, {
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
        key: "getAllCreditNotes",
        value: function getAllCreditNotes() {
          return this.getAllCreditNotesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllCreditNotesByStatusResponse",
        value: function getAllCreditNotesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCreditNotesByStatus", __body, {
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
        key: "getAllCreditNotesByStatus",
        value: function getAllCreditNotesByStatus(active) {
          return this.getAllCreditNotesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getCreditNotesByApartmentIdStatusResponse",
        value: function getCreditNotesByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCreditNotesByApartmentId", __body, {
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
        key: "getCreditNotesByApartmentIdStatus",
        value: function getCreditNotesByApartmentIdStatus(apartmentId) {
          return this.getCreditNotesByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCreditNotesByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCreditNotesByApartmentIdStatus_1Response",
        value: function getCreditNotesByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCreditNotesByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetCreditNotesByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCreditNotesByApartmentIdStatus_1",
        value: function getCreditNotesByApartmentIdStatus_1(params) {
          return this.getCreditNotesByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCreditNotesByCollectionIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCreditNotesByCollectionIdResponse",
        value: function getCreditNotesByCollectionIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.collectionId != null) __params = __params.set('collectionId', params.collectionId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCreditNotesByCollectionId", __body, {
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
         * @param params The `AccountsService.GetCreditNotesByCollectionIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCreditNotesByCollectionId",
        value: function getCreditNotesByCollectionId(params) {
          return this.getCreditNotesByCollectionIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCreditNotesByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCreditNotesByInvoiceIdResponse",
        value: function getCreditNotesByInvoiceIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCreditNotesByInvoiceId", __body, {
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
         * @param params The `AccountsService.GetCreditNotesByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCreditNotesByInvoiceId",
        value: function getCreditNotesByInvoiceId(params) {
          return this.getCreditNotesByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCreditNoteByIdParams` containing the following parameters:
         *
         * - `creditNoteId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCreditNoteByIdResponse",
        value: function getCreditNoteByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.creditNoteId != null) __params = __params.set('creditNoteId', params.creditNoteId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCreditNoteById", __body, {
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
         * @param params The `AccountsService.GetCreditNoteByIdParams` containing the following parameters:
         *
         * - `creditNoteId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCreditNoteById",
        value: function getCreditNoteById(params) {
          return this.getCreditNoteByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param creditNote undefined
         */

      }, {
        key: "addCreditNoteResponse",
        value: function addCreditNoteResponse(creditNote) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = creditNote;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addCreditNote", __body, {
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
         * @param creditNote undefined
         */

      }, {
        key: "addCreditNote",
        value: function addCreditNote(creditNote) {
          return this.addCreditNoteResponse(creditNote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param creditNote undefined
         */

      }, {
        key: "updateCreditNoteResponse",
        value: function updateCreditNoteResponse(creditNote) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = creditNote;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateCreditNote", __body, {
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
         * @param creditNote undefined
         */

      }, {
        key: "updateCreditNote",
        value: function updateCreditNote(creditNote) {
          return this.updateCreditNoteResponse(creditNote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteCreditNoteParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `creditNoteId`:
         */

      }, {
        key: "deleteCreditNoteResponse",
        value: function deleteCreditNoteResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.creditNoteId != null) __params = __params.set('creditNoteId', params.creditNoteId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteCreditNote", __body, {
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
         * @param params The `AccountsService.DeleteCreditNoteParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `creditNoteId`:
         */

      }, {
        key: "deleteCreditNote",
        value: function deleteCreditNote(params) {
          return this.deleteCreditNoteResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllCustTransReversalsResponse",
        value: function getAllCustTransReversalsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustTransReversals", __body, {
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
        key: "getAllCustTransReversals",
        value: function getAllCustTransReversals() {
          return this.getAllCustTransReversalsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllCustTransReversalsByStatusResponse",
        value: function getAllCustTransReversalsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustTransReversalsByStatus", __body, {
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
        key: "getAllCustTransReversalsByStatus",
        value: function getAllCustTransReversalsByStatus(active) {
          return this.getAllCustTransReversalsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getCustTransReversalsByApartmentIdStatusResponse",
        value: function getCustTransReversalsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustTransReversalsByApartmentId", __body, {
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
        key: "getCustTransReversalsByApartmentIdStatus",
        value: function getCustTransReversalsByApartmentIdStatus(apartmentId) {
          return this.getCustTransReversalsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustTransReversalsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustTransReversalsByApartmentIdStatus_1Response",
        value: function getCustTransReversalsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustTransReversalsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetCustTransReversalsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustTransReversalsByApartmentIdStatus_1",
        value: function getCustTransReversalsByApartmentIdStatus_1(params) {
          return this.getCustTransReversalsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustTransReversalsByCollectionIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustTransReversalsByCollectionIdResponse",
        value: function getCustTransReversalsByCollectionIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.collectionId != null) __params = __params.set('collectionId', params.collectionId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustTransReversalsByCollectionId", __body, {
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
         * @param params The `AccountsService.GetCustTransReversalsByCollectionIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustTransReversalsByCollectionId",
        value: function getCustTransReversalsByCollectionId(params) {
          return this.getCustTransReversalsByCollectionIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustTransReversalsByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustTransReversalsByInvoiceIdResponse",
        value: function getCustTransReversalsByInvoiceIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustTransReversalsByInvoiceId", __body, {
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
         * @param params The `AccountsService.GetCustTransReversalsByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustTransReversalsByInvoiceId",
        value: function getCustTransReversalsByInvoiceId(params) {
          return this.getCustTransReversalsByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustTransReversalByIdParams` containing the following parameters:
         *
         * - `custTransReversalId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustTransReversalByIdResponse",
        value: function getCustTransReversalByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.custTransReversalId != null) __params = __params.set('custTransReversalId', params.custTransReversalId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustTransReversalById", __body, {
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
         * @param params The `AccountsService.GetCustTransReversalByIdParams` containing the following parameters:
         *
         * - `custTransReversalId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustTransReversalById",
        value: function getCustTransReversalById(params) {
          return this.getCustTransReversalByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custTransReversal undefined
         */

      }, {
        key: "addCustTransReversalResponse",
        value: function addCustTransReversalResponse(custTransReversal) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custTransReversal;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addCustTransReversal", __body, {
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
         * @param custTransReversal undefined
         */

      }, {
        key: "addCustTransReversal",
        value: function addCustTransReversal(custTransReversal) {
          return this.addCustTransReversalResponse(custTransReversal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custTransReversal undefined
         */

      }, {
        key: "updateCustTransReversalResponse",
        value: function updateCustTransReversalResponse(custTransReversal) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custTransReversal;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateCustTransReversal", __body, {
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
         * @param custTransReversal undefined
         */

      }, {
        key: "updateCustTransReversal",
        value: function updateCustTransReversal(custTransReversal) {
          return this.updateCustTransReversalResponse(custTransReversal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteCustTransReversalParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `CustTransReversalId`:
         */

      }, {
        key: "deleteCustTransReversalResponse",
        value: function deleteCustTransReversalResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.CustTransReversalId != null) __params = __params.set('CustTransReversalId', params.CustTransReversalId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteCustTransReversal", __body, {
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
         * @param params The `AccountsService.DeleteCustTransReversalParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `CustTransReversalId`:
         */

      }, {
        key: "deleteCustTransReversal",
        value: function deleteCustTransReversal(params) {
          return this.deleteCustTransReversalResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllCustChequeDetailsResponse",
        value: function getAllCustChequeDetailsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustChequeDetails", __body, {
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
        key: "getAllCustChequeDetails",
        value: function getAllCustChequeDetails() {
          return this.getAllCustChequeDetailsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllCustChequeDetailssByStatusResponse",
        value: function getAllCustChequeDetailssByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustChequeDetailssByStatus", __body, {
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
        key: "getAllCustChequeDetailssByStatus",
        value: function getAllCustChequeDetailssByStatus(active) {
          return this.getAllCustChequeDetailssByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getCustChequeDetailsByApartmentIdStatusResponse",
        value: function getCustChequeDetailsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustChequeDetailsByApartmentId", __body, {
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
        key: "getCustChequeDetailsByApartmentIdStatus",
        value: function getCustChequeDetailsByApartmentIdStatus(apartmentId) {
          return this.getCustChequeDetailsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustChequeDetailsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustChequeDetailsByApartmentIdStatus_1Response",
        value: function getCustChequeDetailsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustChequeDetailsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetCustChequeDetailsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustChequeDetailsByApartmentIdStatus_1",
        value: function getCustChequeDetailsByApartmentIdStatus_1(params) {
          return this.getCustChequeDetailsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustChequeDetailsByCollectionIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailsByCollectionIdResponse",
        value: function getCustChequeDetailsByCollectionIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.collectionId != null) __params = __params.set('collectionId', params.collectionId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustChequeDetailsByCollectionId", __body, {
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
         * @param params The `AccountsService.GetCustChequeDetailsByCollectionIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailsByCollectionId",
        value: function getCustChequeDetailsByCollectionId(params) {
          return this.getCustChequeDetailsByCollectionIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustChequeDetailssByChequeNoParams` containing the following parameters:
         *
         * - `chequeNo`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailssByChequeNoResponse",
        value: function getCustChequeDetailssByChequeNoResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.chequeNo != null) __params = __params.set('chequeNo', params.chequeNo.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustChequeDetailssByChequeNo", __body, {
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
         * @param params The `AccountsService.GetCustChequeDetailssByChequeNoParams` containing the following parameters:
         *
         * - `chequeNo`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailssByChequeNo",
        value: function getCustChequeDetailssByChequeNo(params) {
          return this.getCustChequeDetailssByChequeNoResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustChequeDetailssByApartmentChequeStatusIdParams` containing the following parameters:
         *
         * - `chequeStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailssByApartmentChequeStatusIdResponse",
        value: function getCustChequeDetailssByApartmentChequeStatusIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.chequeStatusId != null) __params = __params.set('chequeStatusId', params.chequeStatusId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustChequeDetailssByApartmentChequeStatusId", __body, {
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
         * @param params The `AccountsService.GetCustChequeDetailssByApartmentChequeStatusIdParams` containing the following parameters:
         *
         * - `chequeStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailssByApartmentChequeStatusId",
        value: function getCustChequeDetailssByApartmentChequeStatusId(params) {
          return this.getCustChequeDetailssByApartmentChequeStatusIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustChequeDetailssByChequeStatusIdParams` containing the following parameters:
         *
         * - `chequeStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailssByChequeStatusIdResponse",
        value: function getCustChequeDetailssByChequeStatusIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.chequeStatusId != null) __params = __params.set('chequeStatusId', params.chequeStatusId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustChequeDetailssByChequeStatusId", __body, {
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
         * @param params The `AccountsService.GetCustChequeDetailssByChequeStatusIdParams` containing the following parameters:
         *
         * - `chequeStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailssByChequeStatusId",
        value: function getCustChequeDetailssByChequeStatusId(params) {
          return this.getCustChequeDetailssByChequeStatusIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "getCustChequeDetailssByChequeStatusId_1Response",
        value: function getCustChequeDetailssByChequeStatusId_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustChequeDetailssByChequeDateRange", __body, {
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
         * @param params The `AccountsService.GetCustChequeDetailssByChequeStatusId_1Params` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailssByChequeStatusId_1",
        value: function getCustChequeDetailssByChequeStatusId_1(params) {
          return this.getCustChequeDetailssByChequeStatusId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "getCustChequeDetailssByDepositDateRangeResponse",
        value: function getCustChequeDetailssByDepositDateRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustChequeDetailssByDepositDateRange", __body, {
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
         * @param params The `AccountsService.GetCustChequeDetailssByDepositDateRangeParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailssByDepositDateRange",
        value: function getCustChequeDetailssByDepositDateRange(params) {
          return this.getCustChequeDetailssByDepositDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustChequeDetailssByIdParams` containing the following parameters:
         *
         * - `custChequeDetailsId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailssByIdResponse",
        value: function getCustChequeDetailssByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.custChequeDetailsId != null) __params = __params.set('custChequeDetailsId', params.custChequeDetailsId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustChequeDetailssById", __body, {
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
         * @param params The `AccountsService.GetCustChequeDetailssByIdParams` containing the following parameters:
         *
         * - `custChequeDetailsId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustChequeDetailssById",
        value: function getCustChequeDetailssById(params) {
          return this.getCustChequeDetailssByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custChequeDetails undefined
         */

      }, {
        key: "addCustChequeDetailsResponse",
        value: function addCustChequeDetailsResponse(custChequeDetails) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custChequeDetails;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addCustChequeDetails", __body, {
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
         * @param custChequeDetails undefined
         */

      }, {
        key: "addCustChequeDetails",
        value: function addCustChequeDetails(custChequeDetails) {
          return this.addCustChequeDetailsResponse(custChequeDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custChequeDetails undefined
         */

      }, {
        key: "updateCustChequeDetailsResponse",
        value: function updateCustChequeDetailsResponse(custChequeDetails) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custChequeDetails;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateCustChequeDetails", __body, {
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
         * @param custChequeDetails undefined
         */

      }, {
        key: "updateCustChequeDetails",
        value: function updateCustChequeDetails(custChequeDetails) {
          return this.updateCustChequeDetailsResponse(custChequeDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteCustChequeDetailsParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `CustChequeDetailsId`:
         */

      }, {
        key: "deleteCustChequeDetailsResponse",
        value: function deleteCustChequeDetailsResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.CustChequeDetailsId != null) __params = __params.set('CustChequeDetailsId', params.CustChequeDetailsId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteCustChequeDetails", __body, {
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
         * @param params The `AccountsService.DeleteCustChequeDetailsParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `CustChequeDetailsId`:
         */

      }, {
        key: "deleteCustChequeDetails",
        value: function deleteCustChequeDetails(params) {
          return this.deleteCustChequeDetailsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllVendorChequeDetailsResponse",
        value: function getAllVendorChequeDetailsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorChequeDetails", __body, {
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
        key: "getAllVendorChequeDetails",
        value: function getAllVendorChequeDetails() {
          return this.getAllVendorChequeDetailsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVendorChequeDetailssByStatusResponse",
        value: function getAllVendorChequeDetailssByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorChequeDetailssByStatus", __body, {
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
        key: "getAllVendorChequeDetailssByStatus",
        value: function getAllVendorChequeDetailssByStatus(active) {
          return this.getAllVendorChequeDetailssByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVendorChequeDetailsByApartmentIdStatusResponse",
        value: function getVendorChequeDetailsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorChequeDetailsByApartmentId", __body, {
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
        key: "getVendorChequeDetailsByApartmentIdStatus",
        value: function getVendorChequeDetailsByApartmentIdStatus(apartmentId) {
          return this.getVendorChequeDetailsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorChequeDetailsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorChequeDetailsByApartmentIdStatus_1Response",
        value: function getVendorChequeDetailsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorChequeDetailsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetVendorChequeDetailsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorChequeDetailsByApartmentIdStatus_1",
        value: function getVendorChequeDetailsByApartmentIdStatus_1(params) {
          return this.getVendorChequeDetailsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorChequeDetailsByVendorIdParams` containing the following parameters:
         *
         * - `vendorId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailsByVendorIdResponse",
        value: function getVendorChequeDetailsByVendorIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorId != null) __params = __params.set('vendorId', params.vendorId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorChequeDetailsByVendorId", __body, {
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
         * @param params The `AccountsService.GetVendorChequeDetailsByVendorIdParams` containing the following parameters:
         *
         * - `vendorId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailsByVendorId",
        value: function getVendorChequeDetailsByVendorId(params) {
          return this.getVendorChequeDetailsByVendorIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorChequeDetailssByChequeNoParams` containing the following parameters:
         *
         * - `chequeNo`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailssByChequeNoResponse",
        value: function getVendorChequeDetailssByChequeNoResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.chequeNo != null) __params = __params.set('chequeNo', params.chequeNo.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorChequeDetailssByChequeNo", __body, {
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
         * @param params The `AccountsService.GetVendorChequeDetailssByChequeNoParams` containing the following parameters:
         *
         * - `chequeNo`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailssByChequeNo",
        value: function getVendorChequeDetailssByChequeNo(params) {
          return this.getVendorChequeDetailssByChequeNoResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorChequeDetailssByApartmentChequeStatusIdParams` containing the following parameters:
         *
         * - `chequeStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailssByApartmentChequeStatusIdResponse",
        value: function getVendorChequeDetailssByApartmentChequeStatusIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.chequeStatusId != null) __params = __params.set('chequeStatusId', params.chequeStatusId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorChequeDetailssByApartmentChequeStatusId", __body, {
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
         * @param params The `AccountsService.GetVendorChequeDetailssByApartmentChequeStatusIdParams` containing the following parameters:
         *
         * - `chequeStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailssByApartmentChequeStatusId",
        value: function getVendorChequeDetailssByApartmentChequeStatusId(params) {
          return this.getVendorChequeDetailssByApartmentChequeStatusIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorChequeDetailssByChequeStatusIdParams` containing the following parameters:
         *
         * - `chequeStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailssByChequeStatusIdResponse",
        value: function getVendorChequeDetailssByChequeStatusIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.chequeStatusId != null) __params = __params.set('chequeStatusId', params.chequeStatusId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorChequeDetailssByChequeStatusId", __body, {
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
         * @param params The `AccountsService.GetVendorChequeDetailssByChequeStatusIdParams` containing the following parameters:
         *
         * - `chequeStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailssByChequeStatusId",
        value: function getVendorChequeDetailssByChequeStatusId(params) {
          return this.getVendorChequeDetailssByChequeStatusIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "getVendorChequeDetailssByChequeStatusId_1Response",
        value: function getVendorChequeDetailssByChequeStatusId_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorChequeDetailssByChequeDateRange", __body, {
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
         * @param params The `AccountsService.GetVendorChequeDetailssByChequeStatusId_1Params` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailssByChequeStatusId_1",
        value: function getVendorChequeDetailssByChequeStatusId_1(params) {
          return this.getVendorChequeDetailssByChequeStatusId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "getVendorChequeDetailssByGivenDateRangeResponse",
        value: function getVendorChequeDetailssByGivenDateRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorChequeDetailssByGivenDateRange", __body, {
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
         * @param params The `AccountsService.GetVendorChequeDetailssByGivenDateRangeParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailssByGivenDateRange",
        value: function getVendorChequeDetailssByGivenDateRange(params) {
          return this.getVendorChequeDetailssByGivenDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorChequeDetailsByIdParams` containing the following parameters:
         *
         * - `vendorChequeDetailsId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailsByIdResponse",
        value: function getVendorChequeDetailsByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorChequeDetailsId != null) __params = __params.set('vendorChequeDetailsId', params.vendorChequeDetailsId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorChequeDetailsById", __body, {
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
         * @param params The `AccountsService.GetVendorChequeDetailsByIdParams` containing the following parameters:
         *
         * - `vendorChequeDetailsId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorChequeDetailsById",
        value: function getVendorChequeDetailsById(params) {
          return this.getVendorChequeDetailsByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorChequeDetails undefined
         */

      }, {
        key: "addvendorChequeDetailsResponse",
        value: function addvendorChequeDetailsResponse(vendorChequeDetails) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorChequeDetails;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorChequeDetails", __body, {
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
         * @param vendorChequeDetails undefined
         */

      }, {
        key: "addvendorChequeDetails",
        value: function addvendorChequeDetails(vendorChequeDetails) {
          return this.addvendorChequeDetailsResponse(vendorChequeDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorChequeDetails undefined
         */

      }, {
        key: "updatevendorChequeDetailsResponse",
        value: function updatevendorChequeDetailsResponse(vendorChequeDetails) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorChequeDetails;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updatevendorChequeDetails", __body, {
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
         * @param vendorChequeDetails undefined
         */

      }, {
        key: "updatevendorChequeDetails",
        value: function updatevendorChequeDetails(vendorChequeDetails) {
          return this.updatevendorChequeDetailsResponse(vendorChequeDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeletevendorChequeDetailsParams` containing the following parameters:
         *
         * - `vendorChequeDetailsId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deletevendorChequeDetailsResponse",
        value: function deletevendorChequeDetailsResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorChequeDetailsId != null) __params = __params.set('vendorChequeDetailsId', params.vendorChequeDetailsId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deletevendorChequeDetails", __body, {
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
         * @param params The `AccountsService.DeletevendorChequeDetailsParams` containing the following parameters:
         *
         * - `vendorChequeDetailsId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deletevendorChequeDetails",
        value: function deletevendorChequeDetails(params) {
          return this.deletevendorChequeDetailsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllGLTotalResponse",
        value: function getAllGLTotalResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllGLTotal", __body, {
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
        key: "getAllGLTotal",
        value: function getAllGLTotal() {
          return this.getAllGLTotalResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllGLTotalsByStatusResponse",
        value: function getAllGLTotalsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllGLTotalsByStatus", __body, {
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
        key: "getAllGLTotalsByStatus",
        value: function getAllGLTotalsByStatus(active) {
          return this.getAllGLTotalsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getGLTotalByApartmentIdStatusResponse",
        value: function getGLTotalByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGLTotalByApartmentId", __body, {
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
        key: "getGLTotalByApartmentIdStatus",
        value: function getGLTotalByApartmentIdStatus(apartmentId) {
          return this.getGLTotalByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetGLTotalByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getGLTotalByApartmentIdStatus_1Response",
        value: function getGLTotalByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGLTotalByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetGLTotalByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getGLTotalByApartmentIdStatus_1",
        value: function getGLTotalByApartmentIdStatus_1(params) {
          return this.getGLTotalByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetGLTotalByYearParams` containing the following parameters:
         *
         * - `year`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLTotalByYearResponse",
        value: function getGLTotalByYearResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.year != null) __params = __params.set('year', params.year.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGLTotalByYear", __body, {
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
         * @param params The `AccountsService.GetGLTotalByYearParams` containing the following parameters:
         *
         * - `year`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLTotalByYear",
        value: function getGLTotalByYear(params) {
          return this.getGLTotalByYearResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetGLTotalByYearStatusParams` containing the following parameters:
         *
         * - `year`:
         *
         * - `active`:
         */

      }, {
        key: "getGLTotalByYearStatusResponse",
        value: function getGLTotalByYearStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.year != null) __params = __params.set('year', params.year.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGLTotalByYearStatus", __body, {
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
         * @param params The `AccountsService.GetGLTotalByYearStatusParams` containing the following parameters:
         *
         * - `year`:
         *
         * - `active`:
         */

      }, {
        key: "getGLTotalByYearStatus",
        value: function getGLTotalByYearStatus(params) {
          return this.getGLTotalByYearStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetGLTotalByYIdParams` containing the following parameters:
         *
         * - `gltotalId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLTotalByYIdResponse",
        value: function getGLTotalByYIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.gltotalId != null) __params = __params.set('gltotalId', params.gltotalId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGLTotalByYId", __body, {
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
         * @param params The `AccountsService.GetGLTotalByYIdParams` containing the following parameters:
         *
         * - `gltotalId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLTotalByYId",
        value: function getGLTotalByYId(params) {
          return this.getGLTotalByYIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param glTotal undefined
         */

      }, {
        key: "addGLTotalResponse",
        value: function addGLTotalResponse(glTotal) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = glTotal;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addGLTotal", __body, {
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
         * @param glTotal undefined
         */

      }, {
        key: "addGLTotal",
        value: function addGLTotal(glTotal) {
          return this.addGLTotalResponse(glTotal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param glTotal undefined
         */

      }, {
        key: "updateGLTotalResponse",
        value: function updateGLTotalResponse(glTotal) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = glTotal;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateGLTotal", __body, {
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
         * @param glTotal undefined
         */

      }, {
        key: "updateGLTotal",
        value: function updateGLTotal(glTotal) {
          return this.updateGLTotalResponse(glTotal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteGLTotalParams` containing the following parameters:
         *
         * - `glTotalId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGLTotalResponse",
        value: function deleteGLTotalResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.glTotalId != null) __params = __params.set('glTotalId', params.glTotalId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteGLTotal", __body, {
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
         * @param params The `AccountsService.DeleteGLTotalParams` containing the following parameters:
         *
         * - `glTotalId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGLTotal",
        value: function deleteGLTotal(params) {
          return this.deleteGLTotalResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllCustInvoicesResponse",
        value: function getAllCustInvoicesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustInvoices", __body, {
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
        key: "getAllCustInvoices",
        value: function getAllCustInvoices() {
          return this.getAllCustInvoicesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllCustInvoicesByStatusResponse",
        value: function getAllCustInvoicesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustInvoicesByStatus", __body, {
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
        key: "getAllCustInvoicesByStatus",
        value: function getAllCustInvoicesByStatus(active) {
          return this.getAllCustInvoicesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getCustInvoicesByApartmentIdResponse",
        value: function getCustInvoicesByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustInvoicesByApartmentId", __body, {
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
        key: "getCustInvoicesByApartmentId",
        value: function getCustInvoicesByApartmentId(apartmentId) {
          return this.getCustInvoicesByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustInvoicesByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustInvoicesByApartmentIdStatusResponse",
        value: function getCustInvoicesByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustInvoicesByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetCustInvoicesByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustInvoicesByApartmentIdStatus",
        value: function getCustInvoicesByApartmentIdStatus(params) {
          return this.getCustInvoicesByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustInvoicesByApartmentBlockUnitIdParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `apartmentBlockUnitId`:
         */

      }, {
        key: "getCustInvoicesByApartmentBlockUnitIdResponse",
        value: function getCustInvoicesByApartmentBlockUnitIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustInvoicesByApartmentBlockUnitId", __body, {
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
         * @param params The `AccountsService.GetCustInvoicesByApartmentBlockUnitIdParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `apartmentBlockUnitId`:
         */

      }, {
        key: "getCustInvoicesByApartmentBlockUnitId",
        value: function getCustInvoicesByApartmentBlockUnitId(params) {
          return this.getCustInvoicesByApartmentBlockUnitIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "getCustInvoicesByApartmentBlockUnitIdStatusResponse",
        value: function getCustInvoicesByApartmentBlockUnitIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustInvoicesByApartmentBlockUnitIdStatus", __body, {
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
         * @param params The `AccountsService.GetCustInvoicesByApartmentBlockUnitIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `apartmentBlockUnitId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustInvoicesByApartmentBlockUnitIdStatus",
        value: function getCustInvoicesByApartmentBlockUnitIdStatus(params) {
          return this.getCustInvoicesByApartmentBlockUnitIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "getCustInvoicesByApartmentCustInvoiceDateRangeResponse",
        value: function getCustInvoicesByApartmentCustInvoiceDateRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustInvoicesByApartmentCustInvoiceDateRange", __body, {
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
         * @param params The `AccountsService.GetCustInvoicesByApartmentCustInvoiceDateRangeParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustInvoicesByApartmentCustInvoiceDateRange",
        value: function getCustInvoicesByApartmentCustInvoiceDateRange(params) {
          return this.getCustInvoicesByApartmentCustInvoiceDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "getCustInvoicesByApartmentDueDateRangeResponse",
        value: function getCustInvoicesByApartmentDueDateRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustInvoicesByApartmentDueDateRange", __body, {
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
         * @param params The `AccountsService.GetCustInvoicesByApartmentDueDateRangeParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustInvoicesByApartmentDueDateRange",
        value: function getCustInvoicesByApartmentDueDateRange(params) {
          return this.getCustInvoicesByApartmentDueDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustInvoiceByIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustInvoiceByIdResponse",
        value: function getCustInvoiceByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustInvoiceById", __body, {
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
         * @param params The `AccountsService.GetCustInvoiceByIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustInvoiceById",
        value: function getCustInvoiceById(params) {
          return this.getCustInvoiceByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoice undefined
         */

      }, {
        key: "addCustInvoiceResponse",
        value: function addCustInvoiceResponse(invoice) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoice;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addCustInvoice", __body, {
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
         * @param invoice undefined
         */

      }, {
        key: "addCustInvoice",
        value: function addCustInvoice(invoice) {
          return this.addCustInvoiceResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoice undefined
         */

      }, {
        key: "updateCustInvoiceResponse",
        value: function updateCustInvoiceResponse(invoice) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoice;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateCustInvoice", __body, {
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
         * @param invoice undefined
         */

      }, {
        key: "updateCustInvoice",
        value: function updateCustInvoice(invoice) {
          return this.updateCustInvoiceResponse(invoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteCustInvoiceParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteCustInvoiceResponse",
        value: function deleteCustInvoiceResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteCustInvoice", __body, {
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
         * @param params The `AccountsService.DeleteCustInvoiceParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteCustInvoice",
        value: function deleteCustInvoice(params) {
          return this.deleteCustInvoiceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "updateCustInvoiceStatusResponse",
        value: function updateCustInvoiceStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.updatedBy != null) __params = __params.set('updatedBy', params.updatedBy.toString());
          if (params.invoiceStatusId != null) __params = __params.set('invoiceStatusId', params.invoiceStatusId.toString());
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateCustInvoiceStatus", __body, {
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
         * @param params The `AccountsService.UpdateCustInvoiceStatusParams` containing the following parameters:
         *
         * - `updatedBy`:
         *
         * - `invoiceStatusId`:
         *
         * - `invoiceId`:
         */

      }, {
        key: "updateCustInvoiceStatus",
        value: function updateCustInvoiceStatus(params) {
          return this.updateCustInvoiceStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllInvoiceDetailsResponse",
        value: function getAllInvoiceDetailsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllInvoiceDetails", __body, {
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
        key: "getAllInvoiceDetails",
        value: function getAllInvoiceDetails() {
          return this.getAllInvoiceDetailsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllInvoiceDetailsByStatusResponse",
        value: function getAllInvoiceDetailsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllInvoiceDetailsByStatus", __body, {
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
        key: "getAllInvoiceDetailsByStatus",
        value: function getAllInvoiceDetailsByStatus(active) {
          return this.getAllInvoiceDetailsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getInvoiceDetailsByApartmentIdStatusResponse",
        value: function getInvoiceDetailsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getInvoiceDetailsByApartmentId", __body, {
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
        key: "getInvoiceDetailsByApartmentIdStatus",
        value: function getInvoiceDetailsByApartmentIdStatus(apartmentId) {
          return this.getInvoiceDetailsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetInvoiceDetailsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getInvoiceDetailsByApartmentIdStatus_1Response",
        value: function getInvoiceDetailsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getInvoiceDetailsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetInvoiceDetailsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getInvoiceDetailsByApartmentIdStatus_1",
        value: function getInvoiceDetailsByApartmentIdStatus_1(params) {
          return this.getInvoiceDetailsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetInvoiceDetailsByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getInvoiceDetailsByInvoiceIdResponse",
        value: function getInvoiceDetailsByInvoiceIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getInvoiceDetailsByInvoiceId", __body, {
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
         * @param params The `AccountsService.GetInvoiceDetailsByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getInvoiceDetailsByInvoiceId",
        value: function getInvoiceDetailsByInvoiceId(params) {
          return this.getInvoiceDetailsByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetInvoiceDetailsByIdParams` containing the following parameters:
         *
         * - `invoiceDetailsId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getInvoiceDetailsByIdResponse",
        value: function getInvoiceDetailsByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceDetailsId != null) __params = __params.set('invoiceDetailsId', params.invoiceDetailsId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getInvoiceDetailsById", __body, {
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
         * @param params The `AccountsService.GetInvoiceDetailsByIdParams` containing the following parameters:
         *
         * - `invoiceDetailsId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getInvoiceDetailsById",
        value: function getInvoiceDetailsById(params) {
          return this.getInvoiceDetailsByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoiceDetails undefined
         */

      }, {
        key: "addInvoiceDetailsResponse",
        value: function addInvoiceDetailsResponse(invoiceDetails) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoiceDetails;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addInvoiceDetails", __body, {
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
         * @param invoiceDetails undefined
         */

      }, {
        key: "addInvoiceDetails",
        value: function addInvoiceDetails(invoiceDetails) {
          return this.addInvoiceDetailsResponse(invoiceDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param invoiceDetails undefined
         */

      }, {
        key: "updateInvoiceDetailsResponse",
        value: function updateInvoiceDetailsResponse(invoiceDetails) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = invoiceDetails;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateInvoiceDetails", __body, {
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
         * @param invoiceDetails undefined
         */

      }, {
        key: "updateInvoiceDetails",
        value: function updateInvoiceDetails(invoiceDetails) {
          return this.updateInvoiceDetailsResponse(invoiceDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteInvoiceDetailsParams` containing the following parameters:
         *
         * - `invoiceDetailsId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteInvoiceDetailsResponse",
        value: function deleteInvoiceDetailsResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceDetailsId != null) __params = __params.set('invoiceDetailsId', params.invoiceDetailsId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteInvoiceDetails", __body, {
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
         * @param params The `AccountsService.DeleteInvoiceDetailsParams` containing the following parameters:
         *
         * - `invoiceDetailsId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteInvoiceDetails",
        value: function deleteInvoiceDetails(params) {
          return this.deleteInvoiceDetailsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllInvoiceGLAccountsResponse",
        value: function getAllInvoiceGLAccountsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllInvoiceGLAccounts", __body, {
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
        key: "getAllInvoiceGLAccounts",
        value: function getAllInvoiceGLAccounts() {
          return this.getAllInvoiceGLAccountsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllInvoiceGLAccountsByStatusResponse",
        value: function getAllInvoiceGLAccountsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllInvoiceGLAccountsByStatus", __body, {
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
        key: "getAllInvoiceGLAccountsByStatus",
        value: function getAllInvoiceGLAccountsByStatus(active) {
          return this.getAllInvoiceGLAccountsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllGLGroupsResponse",
        value: function getAllGLGroupsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllGLGroups", __body, {
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
        key: "getAllGLGroups",
        value: function getAllGLGroups() {
          return this.getAllGLGroupsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllGLGroupsByStatusResponse",
        value: function getAllGLGroupsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllGLGroupsByStatus", __body, {
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
        key: "getAllGLGroupsByStatus",
        value: function getAllGLGroupsByStatus(active) {
          return this.getAllGLGroupsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetAllGLGroupsByAccountTypeIDParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `GlaccountTypeId`:
         */

      }, {
        key: "getAllGLGroupsByAccountTypeIDResponse",
        value: function getAllGLGroupsByAccountTypeIDResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.GlaccountTypeId != null) __params = __params.set('GlaccountTypeId', params.GlaccountTypeId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllGLGroupsByAccountTypeID", __body, {
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
         * @param params The `AccountsService.GetAllGLGroupsByAccountTypeIDParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `GlaccountTypeId`:
         */

      }, {
        key: "getAllGLGroupsByAccountTypeID",
        value: function getAllGLGroupsByAccountTypeID(params) {
          return this.getAllGLGroupsByAccountTypeIDResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetGLGroupByIdParams` containing the following parameters:
         *
         * - `glGroupId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLGroupByIdResponse",
        value: function getGLGroupByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.glGroupId != null) __params = __params.set('glGroupId', params.glGroupId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGLGroupById", __body, {
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
         * @param params The `AccountsService.GetGLGroupByIdParams` containing the following parameters:
         *
         * - `glGroupId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLGroupById",
        value: function getGLGroupById(params) {
          return this.getGLGroupByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetGLGroupByApartmentIdParams` containing the following parameters:
         *
         * - `glGroupId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLGroupByApartmentIdResponse",
        value: function getGLGroupByApartmentIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.glGroupId != null) __params = __params.set('glGroupId', params.glGroupId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGLGroupByApartmentId", __body, {
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
         * @param params The `AccountsService.GetGLGroupByApartmentIdParams` containing the following parameters:
         *
         * - `glGroupId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLGroupByApartmentId",
        value: function getGLGroupByApartmentId(params) {
          return this.getGLGroupByApartmentIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param glGroup undefined
         */

      }, {
        key: "addGLGroupResponse",
        value: function addGLGroupResponse(glGroup) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = glGroup;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addGLGroup", __body, {
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
         * @param glGroup undefined
         */

      }, {
        key: "addGLGroup",
        value: function addGLGroup(glGroup) {
          return this.addGLGroupResponse(glGroup).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param glGroup undefined
         */

      }, {
        key: "updateGLGroupResponse",
        value: function updateGLGroupResponse(glGroup) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = glGroup;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateGLGroup", __body, {
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
         * @param glGroup undefined
         */

      }, {
        key: "updateGLGroup",
        value: function updateGLGroup(glGroup) {
          return this.updateGLGroupResponse(glGroup).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteGLGroupParams` containing the following parameters:
         *
         * - `glGroupId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGLGroupResponse",
        value: function deleteGLGroupResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.glGroupId != null) __params = __params.set('glGroupId', params.glGroupId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteGLGroup", __body, {
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
         * @param params The `AccountsService.DeleteGLGroupParams` containing the following parameters:
         *
         * - `glGroupId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGLGroup",
        value: function deleteGLGroup(params) {
          return this.deleteGLGroupResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllGLAccountsResponse",
        value: function getAllGLAccountsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllGLAccounts", __body, {
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
        key: "getAllGLAccounts",
        value: function getAllGLAccounts() {
          return this.getAllGLAccountsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllGLAccountsByStatusResponse",
        value: function getAllGLAccountsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllGLAccountsByStatus", __body, {
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
        key: "getAllGLAccountsByStatus",
        value: function getAllGLAccountsByStatus(active) {
          return this.getAllGLAccountsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getGLAccountsByApartmentIdStatusResponse",
        value: function getGLAccountsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGLAccountsByApartmentId", __body, {
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
        key: "getGLAccountsByApartmentIdStatus",
        value: function getGLAccountsByApartmentIdStatus(apartmentId) {
          return this.getGLAccountsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetGLAccountsByGroupIdParams` containing the following parameters:
         *
         * - `groupId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLAccountsByGroupIdResponse",
        value: function getGLAccountsByGroupIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.groupId != null) __params = __params.set('groupId', params.groupId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGLAccountsByGroupId", __body, {
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
         * @param params The `AccountsService.GetGLAccountsByGroupIdParams` containing the following parameters:
         *
         * - `groupId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLAccountsByGroupId",
        value: function getGLAccountsByGroupId(params) {
          return this.getGLAccountsByGroupIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getGLAccountsByApartmentIdStatus_1Response",
        value: function getGLAccountsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGLAccountsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetGLAccountsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getGLAccountsByApartmentIdStatus_1",
        value: function getGLAccountsByApartmentIdStatus_1(params) {
          return this.getGLAccountsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetGLAccountsIdParams` containing the following parameters:
         *
         * - `glAccountId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLAccountsIdResponse",
        value: function getGLAccountsIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.glAccountId != null) __params = __params.set('glAccountId', params.glAccountId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGLAccountsId", __body, {
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
         * @param params The `AccountsService.GetGLAccountsIdParams` containing the following parameters:
         *
         * - `glAccountId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGLAccountsId",
        value: function getGLAccountsId(params) {
          return this.getGLAccountsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param glAccount undefined
         */

      }, {
        key: "addGLAccountResponse",
        value: function addGLAccountResponse(glAccount) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = glAccount;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addGLAccount", __body, {
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
         * @param glAccount undefined
         */

      }, {
        key: "addGLAccount",
        value: function addGLAccount(glAccount) {
          return this.addGLAccountResponse(glAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param glAccount undefined
         */

      }, {
        key: "updateGLAccountResponse",
        value: function updateGLAccountResponse(glAccount) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = glAccount;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateGLAccount", __body, {
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
         * @param glAccount undefined
         */

      }, {
        key: "updateGLAccount",
        value: function updateGLAccount(glAccount) {
          return this.updateGLAccountResponse(glAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteGLAccountParams` containing the following parameters:
         *
         * - `glAccountId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGLAccountResponse",
        value: function deleteGLAccountResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.glAccountId != null) __params = __params.set('glAccountId', params.glAccountId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteGLAccount", __body, {
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
         * @param params The `AccountsService.DeleteGLAccountParams` containing the following parameters:
         *
         * - `glAccountId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGLAccount",
        value: function deleteGLAccount(params) {
          return this.deleteGLAccountResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllCustAccountsResponse",
        value: function getAllCustAccountsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustAccounts", __body, {
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
        key: "getAllCustAccounts",
        value: function getAllCustAccounts() {
          return this.getAllCustAccountsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllCustAccountsByStatusResponse",
        value: function getAllCustAccountsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustAccountsByStatus", __body, {
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
        key: "getAllCustAccountsByStatus",
        value: function getAllCustAccountsByStatus(active) {
          return this.getAllCustAccountsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getCustAccountsByApartmentIdStatusResponse",
        value: function getCustAccountsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustAccountsByApartmentId", __body, {
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
        key: "getCustAccountsByApartmentIdStatus",
        value: function getCustAccountsByApartmentIdStatus(apartmentId) {
          return this.getCustAccountsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustAccountsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustAccountsByApartmentIdStatus_1Response",
        value: function getCustAccountsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustAccountsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetCustAccountsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustAccountsByApartmentIdStatus_1",
        value: function getCustAccountsByApartmentIdStatus_1(params) {
          return this.getCustAccountsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustAccountByIdParams` containing the following parameters:
         *
         * - `custAcctId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustAccountByIdResponse",
        value: function getCustAccountByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.custAcctId != null) __params = __params.set('custAcctId', params.custAcctId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustAccountById", __body, {
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
         * @param params The `AccountsService.GetCustAccountByIdParams` containing the following parameters:
         *
         * - `custAcctId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustAccountById",
        value: function getCustAccountById(params) {
          return this.getCustAccountByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custAccount undefined
         */

      }, {
        key: "addCustAccountResponse",
        value: function addCustAccountResponse(custAccount) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custAccount;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addCustAccount", __body, {
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
         * @param custAccount undefined
         */

      }, {
        key: "addCustAccount",
        value: function addCustAccount(custAccount) {
          return this.addCustAccountResponse(custAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custAccount undefined
         */

      }, {
        key: "updateCustAccountResponse",
        value: function updateCustAccountResponse(custAccount) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custAccount;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateCustAccount", __body, {
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
         * @param custAccount undefined
         */

      }, {
        key: "updateCustAccount",
        value: function updateCustAccount(custAccount) {
          return this.updateCustAccountResponse(custAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteCustAccountParams` containing the following parameters:
         *
         * - `glAccountId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteCustAccountResponse",
        value: function deleteCustAccountResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.glAccountId != null) __params = __params.set('glAccountId', params.glAccountId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteCustAccount", __body, {
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
         * @param params The `AccountsService.DeleteCustAccountParams` containing the following parameters:
         *
         * - `glAccountId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteCustAccount",
        value: function deleteCustAccount(params) {
          return this.deleteCustAccountResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllVendorAccountsResponse",
        value: function getAllVendorAccountsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorAccounts", __body, {
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
        key: "getAllVendorAccounts",
        value: function getAllVendorAccounts() {
          return this.getAllVendorAccountsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVendorAccountsByStatusResponse",
        value: function getAllVendorAccountsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorAccountsByStatus", __body, {
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
        key: "getAllVendorAccountsByStatus",
        value: function getAllVendorAccountsByStatus(active) {
          return this.getAllVendorAccountsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVendorAccountsByApartmentIdStatusResponse",
        value: function getVendorAccountsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorAccountsByApartmentId", __body, {
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
        key: "getVendorAccountsByApartmentIdStatus",
        value: function getVendorAccountsByApartmentIdStatus(apartmentId) {
          return this.getVendorAccountsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorAccountsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorAccountsByApartmentIdStatus_1Response",
        value: function getVendorAccountsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorAccountsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetVendorAccountsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorAccountsByApartmentIdStatus_1",
        value: function getVendorAccountsByApartmentIdStatus_1(params) {
          return this.getVendorAccountsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorAccountByIdParams` containing the following parameters:
         *
         * - `custAcctId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorAccountByIdResponse",
        value: function getVendorAccountByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.custAcctId != null) __params = __params.set('custAcctId', params.custAcctId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorAccountById", __body, {
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
         * @param params The `AccountsService.GetVendorAccountByIdParams` containing the following parameters:
         *
         * - `custAcctId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorAccountById",
        value: function getVendorAccountById(params) {
          return this.getVendorAccountByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorAccount undefined
         */

      }, {
        key: "addVendorAccountResponse",
        value: function addVendorAccountResponse(vendorAccount) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorAccount;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorAccount", __body, {
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
         * @param vendorAccount undefined
         */

      }, {
        key: "addVendorAccount",
        value: function addVendorAccount(vendorAccount) {
          return this.addVendorAccountResponse(vendorAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorAccount undefined
         */

      }, {
        key: "updateVendorAccountResponse",
        value: function updateVendorAccountResponse(vendorAccount) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorAccount;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateVendorAccount", __body, {
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
         * @param vendorAccount undefined
         */

      }, {
        key: "updateVendorAccount",
        value: function updateVendorAccount(vendorAccount) {
          return this.updateVendorAccountResponse(vendorAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteVendorAccountParams` containing the following parameters:
         *
         * - `glAccountId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorAccountResponse",
        value: function deleteVendorAccountResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.glAccountId != null) __params = __params.set('glAccountId', params.glAccountId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteVendorAccount", __body, {
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
         * @param params The `AccountsService.DeleteVendorAccountParams` containing the following parameters:
         *
         * - `glAccountId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteVendorAccount",
        value: function deleteVendorAccount(params) {
          return this.deleteVendorAccountResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllCollectionsResponse",
        value: function getAllCollectionsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCollections", __body, {
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
        key: "getAllCollections",
        value: function getAllCollections() {
          return this.getAllCollectionsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllCollectionsByStatusResponse",
        value: function getAllCollectionsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCollectionsByStatus", __body, {
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
        key: "getAllCollectionsByStatus",
        value: function getAllCollectionsByStatus(active) {
          return this.getAllCollectionsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getCollectionsByApartmentIdStatusResponse",
        value: function getCollectionsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCollectionsByApartmentId", __body, {
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
        key: "getCollectionsByApartmentIdStatus",
        value: function getCollectionsByApartmentIdStatus(apartmentId) {
          return this.getCollectionsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCollectionsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCollectionsByApartmentIdStatus_1Response",
        value: function getCollectionsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCollectionsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetCollectionsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCollectionsByApartmentIdStatus_1",
        value: function getCollectionsByApartmentIdStatus_1(params) {
          return this.getCollectionsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param instrumentTypeId undefined
         */

      }, {
        key: "getAllCollectionsByInstrumentTypeIdResponse",
        value: function getAllCollectionsByInstrumentTypeIdResponse(instrumentTypeId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (instrumentTypeId != null) __params = __params.set('instrumentTypeId', instrumentTypeId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCollectionsByInstrumentTypeId", __body, {
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
         * @param instrumentTypeId undefined
         */

      }, {
        key: "getAllCollectionsByInstrumentTypeId",
        value: function getAllCollectionsByInstrumentTypeId(instrumentTypeId) {
          return this.getAllCollectionsByInstrumentTypeIdResponse(instrumentTypeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetAllCollectionsByInstrumentTypeIdStatusParams` containing the following parameters:
         *
         * - `instrumentTypeId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllCollectionsByInstrumentTypeIdStatusResponse",
        value: function getAllCollectionsByInstrumentTypeIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.instrumentTypeId != null) __params = __params.set('instrumentTypeId', params.instrumentTypeId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCollectionsByInstrumentTypeIdStatus", __body, {
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
         * @param params The `AccountsService.GetAllCollectionsByInstrumentTypeIdStatusParams` containing the following parameters:
         *
         * - `instrumentTypeId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllCollectionsByInstrumentTypeIdStatus",
        value: function getAllCollectionsByInstrumentTypeIdStatus(params) {
          return this.getAllCollectionsByInstrumentTypeIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "getAllCollectionsByApartmentIdPostOnResponse",
        value: function getAllCollectionsByApartmentIdPostOnResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCollectionsByApartmentIdPostOn", __body, {
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
         * @param params The `AccountsService.GetAllCollectionsByApartmentIdPostOnParams` containing the following parameters:
         *
         * - `toDate`:
         *
         * - `fromDate`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getAllCollectionsByApartmentIdPostOn",
        value: function getAllCollectionsByApartmentIdPostOn(params) {
          return this.getAllCollectionsByApartmentIdPostOnResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetAllCollectionsByApartmentBlockUnitIdParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `apartmentBlockUnitId`:
         */

      }, {
        key: "getAllCollectionsByApartmentBlockUnitIdResponse",
        value: function getAllCollectionsByApartmentBlockUnitIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCollectionsByApartmentBlockUnitId", __body, {
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
         * @param params The `AccountsService.GetAllCollectionsByApartmentBlockUnitIdParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `apartmentBlockUnitId`:
         */

      }, {
        key: "getAllCollectionsByApartmentBlockUnitId",
        value: function getAllCollectionsByApartmentBlockUnitId(params) {
          return this.getAllCollectionsByApartmentBlockUnitIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "getAllCollectionsByApartmentBlockUnitIdPostOnResponse",
        value: function getAllCollectionsByApartmentBlockUnitIdPostOnResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCollectionsByApartmentBlockUnitIdPostOn", __body, {
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

      }, {
        key: "getAllCollectionsByApartmentBlockUnitIdPostOn",
        value: function getAllCollectionsByApartmentBlockUnitIdPostOn(params) {
          return this.getAllCollectionsByApartmentBlockUnitIdPostOnResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCollectionByCollectionIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCollectionByCollectionIdResponse",
        value: function getCollectionByCollectionIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.collectionId != null) __params = __params.set('collectionId', params.collectionId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCollectionByCollectionId", __body, {
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
         * @param params The `AccountsService.GetCollectionByCollectionIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCollectionByCollectionId",
        value: function getCollectionByCollectionId(params) {
          return this.getCollectionByCollectionIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param collection undefined
         */

      }, {
        key: "addCollectionResponse",
        value: function addCollectionResponse(collection) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = collection;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addCollection", __body, {
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
         * @param collection undefined
         */

      }, {
        key: "addCollection",
        value: function addCollection(collection) {
          return this.addCollectionResponse(collection).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param collection undefined
         */

      }, {
        key: "updateCollectionResponse",
        value: function updateCollectionResponse(collection) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = collection;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateCollection", __body, {
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
         * @param collection undefined
         */

      }, {
        key: "updateCollection",
        value: function updateCollection(collection) {
          return this.updateCollectionResponse(collection).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteCollectionParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `collectionId`:
         */

      }, {
        key: "deleteCollectionResponse",
        value: function deleteCollectionResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.collectionId != null) __params = __params.set('collectionId', params.collectionId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteCollection", __body, {
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
         * @param params The `AccountsService.DeleteCollectionParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `collectionId`:
         */

      }, {
        key: "deleteCollection",
        value: function deleteCollection(params) {
          return this.deleteCollectionResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllCollectionInvoicesResponse",
        value: function getAllCollectionInvoicesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCollectionInvoices", __body, {
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
        key: "getAllCollectionInvoices",
        value: function getAllCollectionInvoices() {
          return this.getAllCollectionInvoicesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllCollectionInvoicesByStatusResponse",
        value: function getAllCollectionInvoicesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCollectionInvoicesByStatus", __body, {
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
        key: "getAllCollectionInvoicesByStatus",
        value: function getAllCollectionInvoicesByStatus(active) {
          return this.getAllCollectionInvoicesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getCollectionInvoicesByApartmentIdStatusResponse",
        value: function getCollectionInvoicesByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCollectionInvoicesByApartmentId", __body, {
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
        key: "getCollectionInvoicesByApartmentIdStatus",
        value: function getCollectionInvoicesByApartmentIdStatus(apartmentId) {
          return this.getCollectionInvoicesByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCollectionInvoicesByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCollectionInvoicesByApartmentIdStatus_1Response",
        value: function getCollectionInvoicesByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCollectionInvoicesByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetCollectionInvoicesByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCollectionInvoicesByApartmentIdStatus_1",
        value: function getCollectionInvoicesByApartmentIdStatus_1(params) {
          return this.getCollectionInvoicesByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetAllCollectionInvoicesByApartmentBlockUnitIdParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `apartmentBlockUnitId`:
         */

      }, {
        key: "getAllCollectionInvoicesByApartmentBlockUnitIdResponse",
        value: function getAllCollectionInvoicesByApartmentBlockUnitIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCollectionInvoicesByApartmentBlockUnitId", __body, {
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
         * @param params The `AccountsService.GetAllCollectionInvoicesByApartmentBlockUnitIdParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `apartmentBlockUnitId`:
         */

      }, {
        key: "getAllCollectionInvoicesByApartmentBlockUnitId",
        value: function getAllCollectionInvoicesByApartmentBlockUnitId(params) {
          return this.getAllCollectionInvoicesByApartmentBlockUnitIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
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

      }, {
        key: "getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRangeResponse",
        value: function getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.toDate != null) __params = __params.set('toDate', params.toDate.toString());
          if (params.fromDate != null) __params = __params.set('fromDate', params.fromDate.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.apartmentBlockUnitId != null) __params = __params.set('apartmentBlockUnitId', params.apartmentBlockUnitId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRange", __body, {
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

      }, {
        key: "getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRange",
        value: function getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRange(params) {
          return this.getAllCollectionInvoicesByApartmentBlockUnitIdAndDateRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCollectionInvoiceByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCollectionInvoiceByInvoiceIdResponse",
        value: function getCollectionInvoiceByInvoiceIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.invoiceId != null) __params = __params.set('invoiceId', params.invoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCollectionInvoiceByInvoiceId", __body, {
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
         * @param params The `AccountsService.GetCollectionInvoiceByInvoiceIdParams` containing the following parameters:
         *
         * - `invoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCollectionInvoiceByInvoiceId",
        value: function getCollectionInvoiceByInvoiceId(params) {
          return this.getCollectionInvoiceByInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCollectionInvoiceByCollectionIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCollectionInvoiceByCollectionIdResponse",
        value: function getCollectionInvoiceByCollectionIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.collectionId != null) __params = __params.set('collectionId', params.collectionId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCollectionInvoiceByCollectionId", __body, {
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
         * @param params The `AccountsService.GetCollectionInvoiceByCollectionIdParams` containing the following parameters:
         *
         * - `collectionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCollectionInvoiceByCollectionId",
        value: function getCollectionInvoiceByCollectionId(params) {
          return this.getCollectionInvoiceByCollectionIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCollectionInvoiceByCollectionInvoiceIdParams` containing the following parameters:
         *
         * - `collectionInvoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCollectionInvoiceByCollectionInvoiceIdResponse",
        value: function getCollectionInvoiceByCollectionInvoiceIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.collectionInvoiceId != null) __params = __params.set('collectionInvoiceId', params.collectionInvoiceId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCollectionInvoiceByCollectionInvoiceId", __body, {
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
         * @param params The `AccountsService.GetCollectionInvoiceByCollectionInvoiceIdParams` containing the following parameters:
         *
         * - `collectionInvoiceId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCollectionInvoiceByCollectionInvoiceId",
        value: function getCollectionInvoiceByCollectionInvoiceId(params) {
          return this.getCollectionInvoiceByCollectionInvoiceIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param collectionInvoice undefined
         */

      }, {
        key: "addCollectionInvoiceResponse",
        value: function addCollectionInvoiceResponse(collectionInvoice) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = collectionInvoice;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addCollectionInvoice", __body, {
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
         * @param collectionInvoice undefined
         */

      }, {
        key: "addCollectionInvoice",
        value: function addCollectionInvoice(collectionInvoice) {
          return this.addCollectionInvoiceResponse(collectionInvoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param collectionInvoice undefined
         */

      }, {
        key: "updateCollectionInvoiceResponse",
        value: function updateCollectionInvoiceResponse(collectionInvoice) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = collectionInvoice;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateCollectionInvoice", __body, {
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
         * @param collectionInvoice undefined
         */

      }, {
        key: "updateCollectionInvoice",
        value: function updateCollectionInvoice(collectionInvoice) {
          return this.updateCollectionInvoiceResponse(collectionInvoice).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteCollectionInvoiceParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `collectionInvoiceId`:
         */

      }, {
        key: "deleteCollectionInvoiceResponse",
        value: function deleteCollectionInvoiceResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.collectionInvoiceId != null) __params = __params.set('collectionInvoiceId', params.collectionInvoiceId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteCollectionInvoice", __body, {
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
         * @param params The `AccountsService.DeleteCollectionInvoiceParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `collectionInvoiceId`:
         */

      }, {
        key: "deleteCollectionInvoice",
        value: function deleteCollectionInvoice(params) {
          return this.deleteCollectionInvoiceResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllGlnumberRangesResponse",
        value: function getAllGlnumberRangesResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllGlnumberRanges", __body, {
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
        key: "getAllGlnumberRanges",
        value: function getAllGlnumberRanges() {
          return this.getAllGlnumberRangesResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllGlnumberRangesByStatusResponse",
        value: function getAllGlnumberRangesByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllGlnumberRangesByStatus", __body, {
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
        key: "getAllGlnumberRangesByStatus",
        value: function getAllGlnumberRangesByStatus(active) {
          return this.getAllGlnumberRangesByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getGlnumberRangesByApartmentIdStatusResponse",
        value: function getGlnumberRangesByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGlnumberRangesByApartmentId", __body, {
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
        key: "getGlnumberRangesByApartmentIdStatus",
        value: function getGlnumberRangesByApartmentIdStatus(apartmentId) {
          return this.getGlnumberRangesByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetGlnumberRangesByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getGlnumberRangesByApartmentIdStatus_1Response",
        value: function getGlnumberRangesByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGlnumberRangesByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetGlnumberRangesByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getGlnumberRangesByApartmentIdStatus_1",
        value: function getGlnumberRangesByApartmentIdStatus_1(params) {
          return this.getGlnumberRangesByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetGlnumberRangeByIdParams` containing the following parameters:
         *
         * - `glnumberRangeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGlnumberRangeByIdResponse",
        value: function getGlnumberRangeByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.glnumberRangeId != null) __params = __params.set('glnumberRangeId', params.glnumberRangeId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getGlnumberRangeById", __body, {
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
         * @param params The `AccountsService.GetGlnumberRangeByIdParams` containing the following parameters:
         *
         * - `glnumberRangeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getGlnumberRangeById",
        value: function getGlnumberRangeById(params) {
          return this.getGlnumberRangeByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param gLNumberRange undefined
         */

      }, {
        key: "addGlnumberRangeResponse",
        value: function addGlnumberRangeResponse(gLNumberRange) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = gLNumberRange;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addGlnumberRange", __body, {
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
         * @param gLNumberRange undefined
         */

      }, {
        key: "addGlnumberRange",
        value: function addGlnumberRange(gLNumberRange) {
          return this.addGlnumberRangeResponse(gLNumberRange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param gLNumberRange undefined
         */

      }, {
        key: "updateGlnumberRangeResponse",
        value: function updateGlnumberRangeResponse(gLNumberRange) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = gLNumberRange;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateGlnumberRange", __body, {
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
         * @param gLNumberRange undefined
         */

      }, {
        key: "updateGlnumberRange",
        value: function updateGlnumberRange(gLNumberRange) {
          return this.updateGlnumberRangeResponse(gLNumberRange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteGlnumberRangeParams` containing the following parameters:
         *
         * - `gLNumberRangeId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGlnumberRangeResponse",
        value: function deleteGlnumberRangeResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.gLNumberRangeId != null) __params = __params.set('gLNumberRangeId', params.gLNumberRangeId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteGlnumberRange", __body, {
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
         * @param params The `AccountsService.DeleteGlnumberRangeParams` containing the following parameters:
         *
         * - `gLNumberRangeId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteGlnumberRange",
        value: function deleteGlnumberRange(params) {
          return this.deleteGlnumberRangeResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllCustGltransactionsResponse",
        value: function getAllCustGltransactionsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustGltransactions", __body, {
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
        key: "getAllCustGltransactions",
        value: function getAllCustGltransactions() {
          return this.getAllCustGltransactionsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllCustGltransactionsByStatusResponse",
        value: function getAllCustGltransactionsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllCustGltransactionsByStatus", __body, {
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
        key: "getAllCustGltransactionsByStatus",
        value: function getAllCustGltransactionsByStatus(active) {
          return this.getAllCustGltransactionsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getCustGltransactionsByApartmentIdStatusResponse",
        value: function getCustGltransactionsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustGltransactionsByApartmentId", __body, {
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
        key: "getCustGltransactionsByApartmentIdStatus",
        value: function getCustGltransactionsByApartmentIdStatus(apartmentId) {
          return this.getCustGltransactionsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustGltransactionsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustGltransactionsByApartmentIdStatus_1Response",
        value: function getCustGltransactionsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustGltransactionsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetCustGltransactionsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getCustGltransactionsByApartmentIdStatus_1",
        value: function getCustGltransactionsByApartmentIdStatus_1(params) {
          return this.getCustGltransactionsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustGltransactionByIdParams` containing the following parameters:
         *
         * - `custGltransactionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustGltransactionByIdResponse",
        value: function getCustGltransactionByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.custGltransactionId != null) __params = __params.set('custGltransactionId', params.custGltransactionId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustGltransactionById", __body, {
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
         * @param params The `AccountsService.GetCustGltransactionByIdParams` containing the following parameters:
         *
         * - `custGltransactionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustGltransactionById",
        value: function getCustGltransactionById(params) {
          return this.getCustGltransactionByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustGltransactionByDocTypeIdParams` containing the following parameters:
         *
         * - `docTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustGltransactionByDocTypeIdResponse",
        value: function getCustGltransactionByDocTypeIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.docTypeId != null) __params = __params.set('docTypeId', params.docTypeId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustGltransactionByDocTypeId", __body, {
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
         * @param params The `AccountsService.GetCustGltransactionByDocTypeIdParams` containing the following parameters:
         *
         * - `docTypeId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustGltransactionByDocTypeId",
        value: function getCustGltransactionByDocTypeId(params) {
          return this.getCustGltransactionByDocTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetCustGltransactionByFiscalYearParams` containing the following parameters:
         *
         * - `fiscalYear`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustGltransactionByFiscalYearResponse",
        value: function getCustGltransactionByFiscalYearResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.fiscalYear != null) __params = __params.set('fiscalYear', params.fiscalYear.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getCustGltransactionByFiscalYear", __body, {
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
         * @param params The `AccountsService.GetCustGltransactionByFiscalYearParams` containing the following parameters:
         *
         * - `fiscalYear`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getCustGltransactionByFiscalYear",
        value: function getCustGltransactionByFiscalYear(params) {
          return this.getCustGltransactionByFiscalYearResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custGltransaction undefined
         */

      }, {
        key: "addCustGltransactionResponse",
        value: function addCustGltransactionResponse(custGltransaction) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custGltransaction;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addCustGltransaction", __body, {
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
         * @param custGltransaction undefined
         */

      }, {
        key: "addCustGltransaction",
        value: function addCustGltransaction(custGltransaction) {
          return this.addCustGltransactionResponse(custGltransaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custGltransactions undefined
         */

      }, {
        key: "addCustGltransactionListResponse",
        value: function addCustGltransactionListResponse(custGltransactions) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custGltransactions;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addCustGltransactionList", __body, {
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
         * @param custGltransactions undefined
         */

      }, {
        key: "addCustGltransactionList",
        value: function addCustGltransactionList(custGltransactions) {
          return this.addCustGltransactionListResponse(custGltransactions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param custGltransaction undefined
         */

      }, {
        key: "updateCustGltransactionResponse",
        value: function updateCustGltransactionResponse(custGltransaction) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = custGltransaction;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/updateCustGltransaction", __body, {
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
         * @param custGltransaction undefined
         */

      }, {
        key: "updateCustGltransaction",
        value: function updateCustGltransaction(custGltransaction) {
          return this.updateCustGltransactionResponse(custGltransaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.DeleteCustGltransactionParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `custGltransactionId`:
         */

      }, {
        key: "deleteCustGltransactionResponse",
        value: function deleteCustGltransactionResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.custGltransactionId != null) __params = __params.set('custGltransactionId', params.custGltransactionId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/deleteCustGltransaction", __body, {
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
         * @param params The `AccountsService.DeleteCustGltransactionParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `custGltransactionId`:
         */

      }, {
        key: "deleteCustGltransaction",
        value: function deleteCustGltransaction(params) {
          return this.deleteCustGltransactionResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllVendorGltransactionsResponse",
        value: function getAllVendorGltransactionsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorGltransactions", __body, {
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
        key: "getAllVendorGltransactions",
        value: function getAllVendorGltransactions() {
          return this.getAllVendorGltransactionsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllVendorGltransactionsByStatusResponse",
        value: function getAllVendorGltransactionsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getAllVendorGltransactionsByStatus", __body, {
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
        key: "getAllVendorGltransactionsByStatus",
        value: function getAllVendorGltransactionsByStatus(active) {
          return this.getAllVendorGltransactionsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getVendorGltransactionsByApartmentIdStatusResponse",
        value: function getVendorGltransactionsByApartmentIdStatusResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorGltransactionsByApartmentId", __body, {
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
        key: "getVendorGltransactionsByApartmentIdStatus",
        value: function getVendorGltransactionsByApartmentIdStatus(apartmentId) {
          return this.getVendorGltransactionsByApartmentIdStatusResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorGltransactionsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorGltransactionsByApartmentIdStatus_1Response",
        value: function getVendorGltransactionsByApartmentIdStatus_1Response(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorGltransactionsByApartmentIdStatus", __body, {
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
         * @param params The `AccountsService.GetVendorGltransactionsByApartmentIdStatus_1Params` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getVendorGltransactionsByApartmentIdStatus_1",
        value: function getVendorGltransactionsByApartmentIdStatus_1(params) {
          return this.getVendorGltransactionsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `AccountsService.GetVendorGltransactionByIdParams` containing the following parameters:
         *
         * - `vendorGltransactionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorGltransactionByIdResponse",
        value: function getVendorGltransactionByIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.vendorGltransactionId != null) __params = __params.set('vendorGltransactionId', params.vendorGltransactionId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Accounts/getVendorGltransactionById", __body, {
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
         * @param params The `AccountsService.GetVendorGltransactionByIdParams` containing the following parameters:
         *
         * - `vendorGltransactionId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getVendorGltransactionById",
        value: function getVendorGltransactionById(params) {
          return this.getVendorGltransactionByIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param vendorGltransaction undefined
         */

      }, {
        key: "addVendorGltransactionResponse",
        value: function addVendorGltransactionResponse(vendorGltransaction) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = vendorGltransaction;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Accounts/addVendorGltransaction", __body, {
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
         * @param vendorGltransaction undefined
         */

      }, {
        key: "addVendorGltransaction",
        value: function addVendorGltransaction(vendorGltransaction) {
          return this.addVendorGltransactionResponse(vendorGltransaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }]);

      return AccountsService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

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

    AccountsService.ctorParameters = function () {
      return [{
        type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AccountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AccountsService);
    /***/
  }
}]);
//# sourceMappingURL=default~expense-tracker-expense-tracker-module~general-ledger-general-ledger-module~income-tracker-i~986cbaee-es5.js.map