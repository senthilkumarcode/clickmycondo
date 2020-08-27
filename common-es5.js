(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./src/app/shared/services/shared-toaster.service.ts":
    /*!***********************************************************!*\
      !*** ./src/app/shared/services/shared-toaster.service.ts ***!
      \***********************************************************/

    /*! exports provided: SharedToasterService */

    /***/
    function srcAppSharedServicesSharedToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedToasterService", function () {
        return SharedToasterService;
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


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

      var SharedToasterService = /*#__PURE__*/function () {
        function SharedToasterService(snackBar) {
          _classCallCheck(this, SharedToasterService);

          this.snackBar = snackBar;
        }

        _createClass(SharedToasterService, [{
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this.snackBar.open(message, action, {
              duration: 2000
            });
          }
        }]);

        return SharedToasterService;
      }();

      SharedToasterService.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }];
      };

      SharedToasterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], SharedToasterService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map