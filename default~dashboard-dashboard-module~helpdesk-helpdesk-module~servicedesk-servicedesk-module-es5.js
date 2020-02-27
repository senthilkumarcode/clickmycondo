function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~helpdesk-helpdesk-module~servicedesk-servicedesk-module"], {
  /***/
  "./src/app/api/services/ticket.service.ts":
  /*!************************************************!*\
    !*** ./src/app/api/services/ticket.service.ts ***!
    \************************************************/

  /*! exports provided: TicketService */

  /***/
  function srcAppApiServicesTicketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketService", function () {
      return TicketService;
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


    var TicketService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(TicketService, _base_service__WEBPAC);

      function TicketService(config, http) {
        _classCallCheck(this, TicketService);

        return _possibleConstructorReturn(this, _getPrototypeOf(TicketService).call(this, config, http));
      }

      _createClass(TicketService, [{
        key: "getAllTicketManagersResponse",
        value: function getAllTicketManagersResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTicketManagers", __body, {
            headers: __headers,
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
        key: "getAllTicketManagers",
        value: function getAllTicketManagers() {
          return this.getAllTicketManagersResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllTicketManagersByStatusResponse",
        value: function getAllTicketManagersByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTicketManagersByStatus", __body, {
            headers: __headers,
            params: __params,
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
        key: "getAllTicketManagersByStatus",
        value: function getAllTicketManagersByStatus(active) {
          return this.getAllTicketManagersByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllTicketManagersByApartmentIdResponse",
        value: function getAllTicketManagersByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTicketManagersByApartmentId", __body, {
            headers: __headers,
            params: __params,
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
        key: "getAllTicketManagersByApartmentId",
        value: function getAllTicketManagersByApartmentId(apartmentId) {
          return this.getAllTicketManagersByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param categoryId undefined
         */

      }, {
        key: "getAllTicketManagersByCategoryIdResponse",
        value: function getAllTicketManagersByCategoryIdResponse(categoryId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (categoryId != null) __params = __params.set('categoryId', categoryId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTicketManagersByCategoryId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param categoryId undefined
         */

      }, {
        key: "getAllTicketManagersByCategoryId",
        value: function getAllTicketManagersByCategoryId(categoryId) {
          return this.getAllTicketManagersByCategoryIdResponse(categoryId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param categoryId undefined
         */

      }, {
        key: "getDefaultTicketManagersByCategoryIdResponse",
        value: function getDefaultTicketManagersByCategoryIdResponse(categoryId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (categoryId != null) __params = __params.set('categoryId', categoryId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getDefaultTicketManagersByCategoryId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param categoryId undefined
         */

      }, {
        key: "getDefaultTicketManagersByCategoryId",
        value: function getDefaultTicketManagersByCategoryId(categoryId) {
          return this.getDefaultTicketManagersByCategoryIdResponse(categoryId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param ticketManagerId undefined
         */

      }, {
        key: "getTicketManagerByIdResponse",
        value: function getTicketManagerByIdResponse(ticketManagerId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (ticketManagerId != null) __params = __params.set('ticketManagerId', ticketManagerId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getTicketManagerById", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param ticketManagerId undefined
         */

      }, {
        key: "getTicketManagerById",
        value: function getTicketManagerById(ticketManagerId) {
          return this.getTicketManagerByIdResponse(ticketManagerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param ticketManager undefined
         */

      }, {
        key: "addTicketManagerResponse",
        value: function addTicketManagerResponse(ticketManager) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = ticketManager;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Ticket/addTicketManager", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param ticketManager undefined
         */

      }, {
        key: "addTicketManager",
        value: function addTicketManager(ticketManager) {
          return this.addTicketManagerResponse(ticketManager).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param ticketManager undefined
         */

      }, {
        key: "updateTicketManagerResponse",
        value: function updateTicketManagerResponse(ticketManager) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = ticketManager;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Ticket/updateTicketManager", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param ticketManager undefined
         */

      }, {
        key: "updateTicketManager",
        value: function updateTicketManager(ticketManager) {
          return this.updateTicketManagerResponse(ticketManager).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `TicketService.DeleteTicketManagerParams` containing the following parameters:
         *
         * - `ticketManagerId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteTicketManagerResponse",
        value: function deleteTicketManagerResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.ticketManagerId != null) __params = __params.set('ticketManagerId', params.ticketManagerId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Ticket/deleteTicketManager", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `TicketService.DeleteTicketManagerParams` containing the following parameters:
         *
         * - `ticketManagerId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteTicketManager",
        value: function deleteTicketManager(params) {
          return this.deleteTicketManagerResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllTicketsResponse",
        value: function getAllTicketsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTickets", __body, {
            headers: __headers,
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
        key: "getAllTickets",
        value: function getAllTickets() {
          return this.getAllTicketsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllTicketsByStatusResponse",
        value: function getAllTicketsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTicketsByStatus", __body, {
            headers: __headers,
            params: __params,
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
        key: "getAllTicketsByStatus",
        value: function getAllTicketsByStatus(active) {
          return this.getAllTicketsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param raisedUserId undefined
         */

      }, {
        key: "getTicketsByRaisedUserIdResponse",
        value: function getTicketsByRaisedUserIdResponse(raisedUserId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (raisedUserId != null) __params = __params.set('raisedUserId', raisedUserId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getTicketsByRaisedUserId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param raisedUserId undefined
         */

      }, {
        key: "getTicketsByRaisedUserId",
        value: function getTicketsByRaisedUserId(raisedUserId) {
          return this.getTicketsByRaisedUserIdResponse(raisedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `TicketService.GetTicketsByRaisedUserIdTicketStatusIdParams` containing the following parameters:
         *
         * - `ticketStatusId`:
         *
         * - `raisedUserId`:
         */

      }, {
        key: "getTicketsByRaisedUserIdTicketStatusIdResponse",
        value: function getTicketsByRaisedUserIdTicketStatusIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.ticketStatusId != null) __params = __params.set('ticketStatusId', params.ticketStatusId.toString());
          if (params.raisedUserId != null) __params = __params.set('raisedUserId', params.raisedUserId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getTicketsByRaisedUserIdTicketStatusId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `TicketService.GetTicketsByRaisedUserIdTicketStatusIdParams` containing the following parameters:
         *
         * - `ticketStatusId`:
         *
         * - `raisedUserId`:
         */

      }, {
        key: "getTicketsByRaisedUserIdTicketStatusId",
        value: function getTicketsByRaisedUserIdTicketStatusId(params) {
          return this.getTicketsByRaisedUserIdTicketStatusIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `TicketService.GetTicketsByRaisedUserIdSCategoryIdParams` containing the following parameters:
         *
         * - `ticketCategoryId`:
         *
         * - `raisedUserId`:
         */

      }, {
        key: "getTicketsByRaisedUserIdSCategoryIdResponse",
        value: function getTicketsByRaisedUserIdSCategoryIdResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.ticketCategoryId != null) __params = __params.set('ticketCategoryId', params.ticketCategoryId.toString());
          if (params.raisedUserId != null) __params = __params.set('raisedUserId', params.raisedUserId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getTicketsByRaisedUserIdSCategoryId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `TicketService.GetTicketsByRaisedUserIdSCategoryIdParams` containing the following parameters:
         *
         * - `ticketCategoryId`:
         *
         * - `raisedUserId`:
         */

      }, {
        key: "getTicketsByRaisedUserIdSCategoryId",
        value: function getTicketsByRaisedUserIdSCategoryId(params) {
          return this.getTicketsByRaisedUserIdSCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param insertedUserId undefined
         */

      }, {
        key: "getTicketsByInsertedUserIdResponse",
        value: function getTicketsByInsertedUserIdResponse(insertedUserId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (insertedUserId != null) __params = __params.set('insertedUserId', insertedUserId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getTicketsByInsertedUserId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param insertedUserId undefined
         */

      }, {
        key: "getTicketsByInsertedUserId",
        value: function getTicketsByInsertedUserId(insertedUserId) {
          return this.getTicketsByInsertedUserIdResponse(insertedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getAllTicketsByApartmentIdResponse",
        value: function getAllTicketsByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTicketsByApartmentId", __body, {
            headers: __headers,
            params: __params,
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
        key: "getAllTicketsByApartmentId",
        value: function getAllTicketsByApartmentId(apartmentId) {
          return this.getAllTicketsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `TicketService.GetAllTicketsByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllTicketsByApartmentIdStatusResponse",
        value: function getAllTicketsByApartmentIdStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          if (params.active != null) __params = __params.set('active', params.active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTicketsByApartmentIdStatus", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `TicketService.GetAllTicketsByApartmentIdStatusParams` containing the following parameters:
         *
         * - `apartmentId`:
         *
         * - `active`:
         */

      }, {
        key: "getAllTicketsByApartmentIdStatus",
        value: function getAllTicketsByApartmentIdStatus(params) {
          return this.getAllTicketsByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `TicketService.GetAllTicketsByApartmentIdTicketStatusParams` containing the following parameters:
         *
         * - `ticketStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getAllTicketsByApartmentIdTicketStatusResponse",
        value: function getAllTicketsByApartmentIdTicketStatusResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.ticketStatusId != null) __params = __params.set('ticketStatusId', params.ticketStatusId.toString());
          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTicketsByApartmentIdTicketStatus", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `TicketService.GetAllTicketsByApartmentIdTicketStatusParams` containing the following parameters:
         *
         * - `ticketStatusId`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "getAllTicketsByApartmentIdTicketStatus",
        value: function getAllTicketsByApartmentIdTicketStatus(params) {
          return this.getAllTicketsByApartmentIdTicketStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param ticketId undefined
         */

      }, {
        key: "getTicketByIdResponse",
        value: function getTicketByIdResponse(ticketId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (ticketId != null) __params = __params.set('ticketId', ticketId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getTicketById", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param ticketId undefined
         */

      }, {
        key: "getTicketById",
        value: function getTicketById(ticketId) {
          return this.getTicketByIdResponse(ticketId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param ticket undefined
         */

      }, {
        key: "addTicketResponse",
        value: function addTicketResponse(ticket) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = ticket;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Ticket/addTicket", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param ticket undefined
         */

      }, {
        key: "addTicket",
        value: function addTicket(ticket) {
          return this.addTicketResponse(ticket).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param ticket undefined
         */

      }, {
        key: "updateTicketResponse",
        value: function updateTicketResponse(ticket) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = ticket;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Ticket/updateTicket", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param ticket undefined
         */

      }, {
        key: "updateTicket",
        value: function updateTicket(ticket) {
          return this.updateTicketResponse(ticket).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `TicketService.DeleteTicketParams` containing the following parameters:
         *
         * - `ticketId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteTicketResponse",
        value: function deleteTicketResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.ticketId != null) __params = __params.set('ticketId', params.ticketId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Ticket/deleteTicket", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `TicketService.DeleteTicketParams` containing the following parameters:
         *
         * - `ticketId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteTicket",
        value: function deleteTicket(params) {
          return this.deleteTicketResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }, {
        key: "getAllTicketCommentsResponse",
        value: function getAllTicketCommentsResponse() {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTicketComments", __body, {
            headers: __headers,
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
        key: "getAllTicketComments",
        value: function getAllTicketComments() {
          return this.getAllTicketCommentsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param active undefined
         */

      }, {
        key: "getAllTicketCommentsByStatusResponse",
        value: function getAllTicketCommentsByStatusResponse(active) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (active != null) __params = __params.set('active', active.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTicketCommentsByStatus", __body, {
            headers: __headers,
            params: __params,
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
        key: "getAllTicketCommentsByStatus",
        value: function getAllTicketCommentsByStatus(active) {
          return this.getAllTicketCommentsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param ticketId undefined
         */

      }, {
        key: "getAllTicketCommentsByTicketIdResponse",
        value: function getAllTicketCommentsByTicketIdResponse(ticketId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (ticketId != null) __params = __params.set('ticketId', ticketId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getAllTicketCommentsByTicketId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param ticketId undefined
         */

      }, {
        key: "getAllTicketCommentsByTicketId",
        value: function getAllTicketCommentsByTicketId(ticketId) {
          return this.getAllTicketCommentsByTicketIdResponse(ticketId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param ticketCommentId undefined
         */

      }, {
        key: "getTicketCommentByIdResponse",
        value: function getTicketCommentByIdResponse(ticketCommentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (ticketCommentId != null) __params = __params.set('ticketCommentId', ticketCommentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/Ticket/getTicketCommentById", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param ticketCommentId undefined
         */

      }, {
        key: "getTicketCommentById",
        value: function getTicketCommentById(ticketCommentId) {
          return this.getTicketCommentByIdResponse(ticketCommentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param ticketComment undefined
         */

      }, {
        key: "addTicketCommentResponse",
        value: function addTicketCommentResponse(ticketComment) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = ticketComment;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Ticket/addTicketComment", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param ticketComment undefined
         */

      }, {
        key: "addTicketComment",
        value: function addTicketComment(ticketComment) {
          return this.addTicketCommentResponse(ticketComment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param ticketComment undefined
         */

      }, {
        key: "updateTicketCommentResponse",
        value: function updateTicketCommentResponse(ticketComment) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = ticketComment;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Ticket/updateTicketComment", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param ticketComment undefined
         */

      }, {
        key: "updateTicketComment",
        value: function updateTicketComment(ticketComment) {
          return this.updateTicketCommentResponse(ticketComment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `TicketService.DeleteTicketCommentParams` containing the following parameters:
         *
         * - `ticketCommentId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteTicketCommentResponse",
        value: function deleteTicketCommentResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.ticketCommentId != null) __params = __params.set('ticketCommentId', params.ticketCommentId.toString());
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Ticket/deleteTicketComment", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `TicketService.DeleteTicketCommentParams` containing the following parameters:
         *
         * - `ticketCommentId`:
         *
         * - `deleteBy`:
         */

      }, {
        key: "deleteTicketComment",
        value: function deleteTicketComment(params) {
          return this.deleteTicketCommentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }]);

      return TicketService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

    TicketService.getAllTicketManagersPath = '/api/Ticket/getAllTicketManagers';
    TicketService.getAllTicketManagersByStatusPath = '/api/Ticket/getAllTicketManagersByStatus';
    TicketService.getAllTicketManagersByApartmentIdPath = '/api/Ticket/getAllTicketManagersByApartmentId';
    TicketService.getAllTicketManagersByCategoryIdPath = '/api/Ticket/getAllTicketManagersByCategoryId';
    TicketService.getDefaultTicketManagersByCategoryIdPath = '/api/Ticket/getDefaultTicketManagersByCategoryId';
    TicketService.getTicketManagerByIdPath = '/api/Ticket/getTicketManagerById';
    TicketService.addTicketManagerPath = '/api/Ticket/addTicketManager';
    TicketService.updateTicketManagerPath = '/api/Ticket/updateTicketManager';
    TicketService.deleteTicketManagerPath = '/api/Ticket/deleteTicketManager';
    TicketService.getAllTicketsPath = '/api/Ticket/getAllTickets';
    TicketService.getAllTicketsByStatusPath = '/api/Ticket/getAllTicketsByStatus';
    TicketService.getTicketsByRaisedUserIdPath = '/api/Ticket/getTicketsByRaisedUserId';
    TicketService.getTicketsByRaisedUserIdTicketStatusIdPath = '/api/Ticket/getTicketsByRaisedUserIdTicketStatusId';
    TicketService.getTicketsByRaisedUserIdSCategoryIdPath = '/api/Ticket/getTicketsByRaisedUserIdSCategoryId';
    TicketService.getTicketsByInsertedUserIdPath = '/api/Ticket/getTicketsByInsertedUserId';
    TicketService.getAllTicketsByApartmentIdPath = '/api/Ticket/getAllTicketsByApartmentId';
    TicketService.getAllTicketsByApartmentIdStatusPath = '/api/Ticket/getAllTicketsByApartmentIdStatus';
    TicketService.getAllTicketsByApartmentIdTicketStatusPath = '/api/Ticket/getAllTicketsByApartmentIdTicketStatus';
    TicketService.getTicketByIdPath = '/api/Ticket/getTicketById';
    TicketService.addTicketPath = '/api/Ticket/addTicket';
    TicketService.updateTicketPath = '/api/Ticket/updateTicket';
    TicketService.deleteTicketPath = '/api/Ticket/deleteTicket';
    TicketService.getAllTicketCommentsPath = '/api/Ticket/getAllTicketComments';
    TicketService.getAllTicketCommentsByStatusPath = '/api/Ticket/getAllTicketCommentsByStatus';
    TicketService.getAllTicketCommentsByTicketIdPath = '/api/Ticket/getAllTicketCommentsByTicketId';
    TicketService.getTicketCommentByIdPath = '/api/Ticket/getTicketCommentById';
    TicketService.addTicketCommentPath = '/api/Ticket/addTicketComment';
    TicketService.updateTicketCommentPath = '/api/Ticket/updateTicketComment';
    TicketService.deleteTicketCommentPath = '/api/Ticket/deleteTicketComment';

    TicketService.ctorParameters = function () {
      return [{
        type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], TicketService);
    /***/
  }
}]);
//# sourceMappingURL=default~dashboard-dashboard-module~helpdesk-helpdesk-module~servicedesk-servicedesk-module-es5.js.map