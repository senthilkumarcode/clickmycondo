function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-documents-user-documents-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-documents/user-documents.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-documents/user-documents.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserDocumentsUserDocumentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  documents works!\n</p>\n";
    /***/
  },

  /***/
  "./src/app/user/user-documents/user-documents-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/user/user-documents/user-documents-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: UserDocumentsRoutingModule */

  /***/
  function srcAppUserUserDocumentsUserDocumentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDocumentsRoutingModule", function () {
      return UserDocumentsRoutingModule;
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


    var _user_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-documents.component */
    "./src/app/user/user-documents/user-documents.component.ts");

    var routes = [{
      path: '',
      component: _user_documents_component__WEBPACK_IMPORTED_MODULE_3__["UserDocumentsComponent"]
    }, {
      path: 'documents',
      component: _user_documents_component__WEBPACK_IMPORTED_MODULE_3__["UserDocumentsComponent"]
    }];

    var UserDocumentsRoutingModule = function UserDocumentsRoutingModule() {
      _classCallCheck(this, UserDocumentsRoutingModule);
    };

    UserDocumentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserDocumentsRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user-documents/user-documents.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/user/user-documents/user-documents.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserDocumentsUserDocumentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kb2N1bWVudHMvdXNlci1kb2N1bWVudHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/user-documents/user-documents.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/user-documents/user-documents.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserDocumentsComponent */

  /***/
  function srcAppUserUserDocumentsUserDocumentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDocumentsComponent", function () {
      return UserDocumentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserDocumentsComponent =
    /*#__PURE__*/
    function () {
      function UserDocumentsComponent() {
        _classCallCheck(this, UserDocumentsComponent);
      }

      _createClass(UserDocumentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserDocumentsComponent;
    }();

    UserDocumentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-documents',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-documents.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-documents/user-documents.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-documents.component.scss */
      "./src/app/user/user-documents/user-documents.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UserDocumentsComponent);
    /***/
  },

  /***/
  "./src/app/user/user-documents/user-documents.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/user/user-documents/user-documents.module.ts ***!
    \**************************************************************/

  /*! exports provided: UserDocumentsModule */

  /***/
  function srcAppUserUserDocumentsUserDocumentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDocumentsModule", function () {
      return UserDocumentsModule;
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


    var _user_documents_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-documents-routing.module */
    "./src/app/user/user-documents/user-documents-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _user_documents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-documents.component */
    "./src/app/user/user-documents/user-documents.component.ts");

    var UserDocumentsModule = function UserDocumentsModule() {
      _classCallCheck(this, UserDocumentsModule);
    };

    UserDocumentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_documents_component__WEBPACK_IMPORTED_MODULE_5__["UserDocumentsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _user_documents_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserDocumentsRoutingModule"]],
      bootstrap: [_user_documents_component__WEBPACK_IMPORTED_MODULE_5__["UserDocumentsComponent"]]
    })], UserDocumentsModule);
    /***/
  }
}]);
//# sourceMappingURL=user-user-documents-user-documents-module-es5.js.map