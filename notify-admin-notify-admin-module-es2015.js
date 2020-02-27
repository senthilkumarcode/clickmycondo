(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notify-admin-notify-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/notify-admin/notify-admin.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/notify-admin/notify-admin.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  notify-admin works!\n</p>\n");

/***/ }),

/***/ "./src/app/user/notify-admin/notify-admin-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/user/notify-admin/notify-admin-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: NotifyAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyAdminRoutingModule", function() { return NotifyAdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notify_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify-admin.component */ "./src/app/user/notify-admin/notify-admin.component.ts");




const routes = [
    { path: '', component: _notify_admin_component__WEBPACK_IMPORTED_MODULE_3__["NotifyAdminComponent"] },
    { path: 'notify', component: _notify_admin_component__WEBPACK_IMPORTED_MODULE_3__["NotifyAdminComponent"] }
];
let NotifyAdminRoutingModule = class NotifyAdminRoutingModule {
};
NotifyAdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NotifyAdminRoutingModule);



/***/ }),

/***/ "./src/app/user/notify-admin/notify-admin.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/notify-admin/notify-admin.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbm90aWZ5LWFkbWluL25vdGlmeS1hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/notify-admin/notify-admin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/notify-admin/notify-admin.component.ts ***!
  \*************************************************************/
/*! exports provided: NotifyAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyAdminComponent", function() { return NotifyAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotifyAdminComponent = class NotifyAdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotifyAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notify-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notify-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/notify-admin/notify-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notify-admin.component.scss */ "./src/app/user/notify-admin/notify-admin.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotifyAdminComponent);



/***/ }),

/***/ "./src/app/user/notify-admin/notify-admin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/notify-admin/notify-admin.module.ts ***!
  \**********************************************************/
/*! exports provided: NotifyAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyAdminModule", function() { return NotifyAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _notify_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify-admin-routing.module */ "./src/app/user/notify-admin/notify-admin-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _notify_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notify-admin.component */ "./src/app/user/notify-admin/notify-admin.component.ts");






let NotifyAdminModule = class NotifyAdminModule {
};
NotifyAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _notify_admin_component__WEBPACK_IMPORTED_MODULE_5__["NotifyAdminComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
            _notify_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotifyAdminRoutingModule"]
        ]
    })
], NotifyAdminModule);



/***/ })

}]);
//# sourceMappingURL=notify-admin-notify-admin-module-es2015.js.map