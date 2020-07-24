(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-user-inbox-user-inbox-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-inbox/user-inbox.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-inbox/user-inbox.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesUserUserInboxUserInboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  inbox works!\n</p>\n";
      /***/
    },

    /***/
    "./src/app/modules/user/user-inbox/user-inbox-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/user/user-inbox/user-inbox-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: UserInboxRoutingModule */

    /***/
    function srcAppModulesUserUserInboxUserInboxRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _user_inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-inbox.component */
      "./src/app/modules/user/user-inbox/user-inbox.component.ts");

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

      UserInboxRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserInboxRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/user/user-inbox/user-inbox.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/user/user-inbox/user-inbox.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesUserUserInboxUserInboxComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLWluYm94L3VzZXItaW5ib3guY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/user/user-inbox/user-inbox.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/user/user-inbox/user-inbox.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UserInboxComponent */

    /***/
    function srcAppModulesUserUserInboxUserInboxComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UserInboxComponent = /*#__PURE__*/function () {
        function UserInboxComponent() {
          _classCallCheck(this, UserInboxComponent);
        }

        _createClass(UserInboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserInboxComponent;
      }();

      UserInboxComponent.ctorParameters = function () {
        return [];
      };

      UserInboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-inbox',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-inbox.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-inbox/user-inbox.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-inbox.component.scss */
        "./src/app/modules/user/user-inbox/user-inbox.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UserInboxComponent);
      /***/
    },

    /***/
    "./src/app/modules/user/user-inbox/user-inbox.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/modules/user/user-inbox/user-inbox.module.ts ***!
      \**************************************************************/

    /*! exports provided: UserInboxModule */

    /***/
    function srcAppModulesUserUserInboxUserInboxModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _user_inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-inbox-routing.module */
      "./src/app/modules/user/user-inbox/user-inbox-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _user_inbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-inbox.component */
      "./src/app/modules/user/user-inbox/user-inbox.component.ts");

      var UserInboxModule = function UserInboxModule() {
        _classCallCheck(this, UserInboxModule);
      };

      UserInboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_inbox_component__WEBPACK_IMPORTED_MODULE_5__["UserInboxComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _user_inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserInboxRoutingModule"]],
        bootstrap: [_user_inbox_component__WEBPACK_IMPORTED_MODULE_5__["UserInboxComponent"]]
      })], UserInboxModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-user-user-inbox-user-inbox-module-es5.js.map