function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-inbox-user-inbox-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-inbox/user-inbox.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-inbox/user-inbox.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserInboxUserInboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  inbox works!\n</p>\n";
    /***/
  },

  /***/
  "./src/app/user/user-inbox/user-inbox-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/user/user-inbox/user-inbox-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: UserInboxRoutingModule */

  /***/
  function srcAppUserUserInboxUserInboxRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInboxRoutingModule", function () {
      return UserInboxRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-inbox.component */
    "./src/app/user/user-inbox/user-inbox.component.ts");

    var routes = [{
      path: '',
      component: _user_inbox_component__WEBPACK_IMPORTED_MODULE_3__["UserInboxComponent"]
    }, {
      path: 'inbox',
      component: _user_inbox_component__WEBPACK_IMPORTED_MODULE_3__["UserInboxComponent"]
    }];

    var UserInboxRoutingModule = function UserInboxRoutingModule() {
      _classCallCheck(this, UserInboxRoutingModule);
    };

    UserInboxRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserInboxRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user-inbox/user-inbox.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/user/user-inbox/user-inbox.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserInboxUserInboxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1pbmJveC91c2VyLWluYm94LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user-inbox/user-inbox.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/user-inbox/user-inbox.component.ts ***!
    \*********************************************************/

  /*! exports provided: UserInboxComponent */

  /***/
  function srcAppUserUserInboxUserInboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInboxComponent", function () {
      return UserInboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserInboxComponent =
    /*#__PURE__*/
    function () {
      function UserInboxComponent() {
        _classCallCheck(this, UserInboxComponent);
      }

      _createClass(UserInboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserInboxComponent;
    }();

    UserInboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-inbox',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-inbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-inbox/user-inbox.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-inbox.component.scss */
      "./src/app/user/user-inbox/user-inbox.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UserInboxComponent);
    /***/
  },

  /***/
  "./src/app/user/user-inbox/user-inbox.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/user/user-inbox/user-inbox.module.ts ***!
    \******************************************************/

  /*! exports provided: UserInboxModule */

  /***/
  function srcAppUserUserInboxUserInboxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInboxModule", function () {
      return UserInboxModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _user_inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-inbox-routing.module */
    "./src/app/user/user-inbox/user-inbox-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var UserInboxModule = function UserInboxModule() {
      _classCallCheck(this, UserInboxModule);
    };

    UserInboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(), _user_inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserInboxRoutingModule"]]
    })], UserInboxModule);
    /***/
  }
}]);
//# sourceMappingURL=user-inbox-user-inbox-module-es5.js.map