function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-notify-admin-notify-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/notify-admin/notify-admin.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/notify-admin/notify-admin.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserNotifyAdminNotifyAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  notify-admin works!\n</p>\n";
    /***/
  },

  /***/
  "./src/app/user/notify-admin/notify-admin-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/user/notify-admin/notify-admin-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: NotifyAdminRoutingModule */

  /***/
  function srcAppUserNotifyAdminNotifyAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifyAdminRoutingModule", function () {
      return NotifyAdminRoutingModule;
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


    var _notify_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notify-admin.component */
    "./src/app/user/notify-admin/notify-admin.component.ts");

    var routes = [{
      path: '',
      component: _notify_admin_component__WEBPACK_IMPORTED_MODULE_3__["NotifyAdminComponent"]
    }, {
      path: 'notify',
      component: _notify_admin_component__WEBPACK_IMPORTED_MODULE_3__["NotifyAdminComponent"]
    }];

    var NotifyAdminRoutingModule = function NotifyAdminRoutingModule() {
      _classCallCheck(this, NotifyAdminRoutingModule);
    };

    NotifyAdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotifyAdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/notify-admin/notify-admin.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/user/notify-admin/notify-admin.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserNotifyAdminNotifyAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbm90aWZ5LWFkbWluL25vdGlmeS1hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/notify-admin/notify-admin.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user/notify-admin/notify-admin.component.ts ***!
    \*************************************************************/

  /*! exports provided: NotifyAdminComponent */

  /***/
  function srcAppUserNotifyAdminNotifyAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifyAdminComponent", function () {
      return NotifyAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotifyAdminComponent =
    /*#__PURE__*/
    function () {
      function NotifyAdminComponent() {
        _classCallCheck(this, NotifyAdminComponent);
      }

      _createClass(NotifyAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotifyAdminComponent;
    }();

    NotifyAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notify-admin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notify-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/notify-admin/notify-admin.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notify-admin.component.scss */
      "./src/app/user/notify-admin/notify-admin.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NotifyAdminComponent);
    /***/
  },

  /***/
  "./src/app/user/notify-admin/notify-admin.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/user/notify-admin/notify-admin.module.ts ***!
    \**********************************************************/

  /*! exports provided: NotifyAdminModule */

  /***/
  function srcAppUserNotifyAdminNotifyAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifyAdminModule", function () {
      return NotifyAdminModule;
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


    var _notify_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notify-admin-routing.module */
    "./src/app/user/notify-admin/notify-admin-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _notify_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notify-admin.component */
    "./src/app/user/notify-admin/notify-admin.component.ts");

    var NotifyAdminModule = function NotifyAdminModule() {
      _classCallCheck(this, NotifyAdminModule);
    };

    NotifyAdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_notify_admin_component__WEBPACK_IMPORTED_MODULE_5__["NotifyAdminComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _notify_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotifyAdminRoutingModule"]]
    })], NotifyAdminModule);
    /***/
  }
}]);
//# sourceMappingURL=user-notify-admin-notify-admin-module-es5.js.map