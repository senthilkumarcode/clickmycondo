(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-user-documents-user-documents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-documents/user-documents.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-documents/user-documents.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  documents works!\n</p>\n");

/***/ }),

/***/ "./src/app/modules/user/user-documents/user-documents-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/user/user-documents/user-documents-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: UserDocumentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDocumentsRoutingModule", function() { return UserDocumentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-documents.component */ "./src/app/modules/user/user-documents/user-documents.component.ts");




const routes = [
    { path: '', component: _user_documents_component__WEBPACK_IMPORTED_MODULE_3__["UserDocumentsComponent"] },
    { path: 'documents', component: _user_documents_component__WEBPACK_IMPORTED_MODULE_3__["UserDocumentsComponent"] }
];
let UserDocumentsRoutingModule = class UserDocumentsRoutingModule {
};
UserDocumentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserDocumentsRoutingModule);



/***/ }),

/***/ "./src/app/modules/user/user-documents/user-documents.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user/user-documents/user-documents.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLWRvY3VtZW50cy91c2VyLWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/user/user-documents/user-documents.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user/user-documents/user-documents.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDocumentsComponent", function() { return UserDocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserDocumentsComponent = class UserDocumentsComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserDocumentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-documents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-documents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-documents/user-documents.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-documents.component.scss */ "./src/app/modules/user/user-documents/user-documents.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UserDocumentsComponent);



/***/ }),

/***/ "./src/app/modules/user/user-documents/user-documents.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user/user-documents/user-documents.module.ts ***!
  \**********************************************************************/
/*! exports provided: UserDocumentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDocumentsModule", function() { return UserDocumentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_documents_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-documents-routing.module */ "./src/app/modules/user/user-documents/user-documents-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_documents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-documents.component */ "./src/app/modules/user/user-documents/user-documents.component.ts");






let UserDocumentsModule = class UserDocumentsModule {
};
UserDocumentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_documents_component__WEBPACK_IMPORTED_MODULE_5__["UserDocumentsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _user_documents_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserDocumentsRoutingModule"]
        ],
        bootstrap: [_user_documents_component__WEBPACK_IMPORTED_MODULE_5__["UserDocumentsComponent"]]
    })
], UserDocumentsModule);



/***/ })

}]);
//# sourceMappingURL=modules-user-user-documents-user-documents-module-es2015.js.map