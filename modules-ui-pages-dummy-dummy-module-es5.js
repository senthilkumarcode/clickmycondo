(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ui-pages-dummy-dummy-module"], {
    /***/
    "./src/app/modules/ui/pages/dummy/dummy-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/modules/ui/pages/dummy/dummy-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: DummyRoutingModule */

    /***/
    function srcAppModulesUiPagesDummyDummyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DummyRoutingModule", function () {
        return DummyRoutingModule;
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

      var routes = [];

      var DummyRoutingModule = function DummyRoutingModule() {
        _classCallCheck(this, DummyRoutingModule);
      };

      DummyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DummyRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ui/pages/dummy/dummy.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/modules/ui/pages/dummy/dummy.module.ts ***!
      \********************************************************/

    /*! exports provided: DummyModule */

    /***/
    function srcAppModulesUiPagesDummyDummyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DummyModule", function () {
        return DummyModule;
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


      var _dummy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dummy-routing.module */
      "./src/app/modules/ui/pages/dummy/dummy-routing.module.ts");
      /* harmony import */


      var _dummy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dummy.component */
      "./src/app/modules/ui/pages/dummy/dummy.component.ts");

      var DummyModule = function DummyModule() {
        _classCallCheck(this, DummyModule);
      };

      DummyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dummy_component__WEBPACK_IMPORTED_MODULE_4__["DummyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dummy_routing_module__WEBPACK_IMPORTED_MODULE_3__["DummyRoutingModule"]],
        bootstrap: [_dummy_component__WEBPACK_IMPORTED_MODULE_4__["DummyComponent"]]
      })], DummyModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ui-pages-dummy-dummy-module-es5.js.map