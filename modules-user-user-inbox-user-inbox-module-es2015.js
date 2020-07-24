(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-user-inbox-user-inbox-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-inbox/user-inbox.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-inbox/user-inbox.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  inbox works!\n</p>\n");

/***/ }),

/***/ "./src/app/modules/user/user-inbox/user-inbox-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user/user-inbox/user-inbox-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UserInboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInboxRoutingModule", function() { return UserInboxRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-inbox.component */ "./src/app/modules/user/user-inbox/user-inbox.component.ts");




const routes = [
    { path: '', component: _user_inbox_component__WEBPACK_IMPORTED_MODULE_3__["UserInboxComponent"] },
    { path: 'inbox', component: _user_inbox_component__WEBPACK_IMPORTED_MODULE_3__["UserInboxComponent"] },
];
let UserInboxRoutingModule = class UserInboxRoutingModule {
};
UserInboxRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserInboxRoutingModule);



/***/ }),

/***/ "./src/app/modules/user/user-inbox/user-inbox.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/user/user-inbox/user-inbox.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLWluYm94L3VzZXItaW5ib3guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/user/user-inbox/user-inbox.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/user/user-inbox/user-inbox.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserInboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInboxComponent", function() { return UserInboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserInboxComponent = class UserInboxComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserInboxComponent.ctorParameters = () => [];
UserInboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-inbox',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-inbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-inbox/user-inbox.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-inbox.component.scss */ "./src/app/modules/user/user-inbox/user-inbox.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UserInboxComponent);



/***/ }),

/***/ "./src/app/modules/user/user-inbox/user-inbox.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/user/user-inbox/user-inbox.module.ts ***!
  \**************************************************************/
/*! exports provided: UserInboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInboxModule", function() { return UserInboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-inbox-routing.module */ "./src/app/modules/user/user-inbox/user-inbox-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_inbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-inbox.component */ "./src/app/modules/user/user-inbox/user-inbox.component.ts");






let UserInboxModule = class UserInboxModule {
};
UserInboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_inbox_component__WEBPACK_IMPORTED_MODULE_5__["UserInboxComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _user_inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserInboxRoutingModule"]
        ],
        bootstrap: [_user_inbox_component__WEBPACK_IMPORTED_MODULE_5__["UserInboxComponent"]]
    })
], UserInboxModule);



/***/ })

}]);
//# sourceMappingURL=modules-user-user-inbox-user-inbox-module-es2015.js.map