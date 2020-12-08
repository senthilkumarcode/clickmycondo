(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ui-pages-complete-complete-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/pages/complete/complete.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/pages/complete/complete.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/modules/ui/pages/complete/complete-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/ui/pages/complete/complete-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: routes, CompleteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteRoutingModule", function() { return CompleteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _complete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complete.component */ "./src/app/modules/ui/pages/complete/complete.component.ts");




const routes = [
    { path: '', component: _complete_component__WEBPACK_IMPORTED_MODULE_3__["CompleteComponent"] }
];
let CompleteRoutingModule = class CompleteRoutingModule {
};
CompleteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CompleteRoutingModule);



/***/ }),

/***/ "./src/app/modules/ui/pages/complete/complete.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/ui/pages/complete/complete.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvcGFnZXMvY29tcGxldGUvY29tcGxldGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ui/pages/complete/complete.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/ui/pages/complete/complete.component.ts ***!
  \*****************************************************************/
/*! exports provided: CompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteComponent", function() { return CompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let CompleteComponent = class CompleteComponent {
    constructor(_activatedRoute, _router) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
    }
    ngOnInit() {
        this._router.navigate(['/user/payment']);
    }
};
CompleteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CompleteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complete',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./complete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/pages/complete/complete.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./complete.component.scss */ "./src/app/modules/ui/pages/complete/complete.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CompleteComponent);



/***/ }),

/***/ "./src/app/modules/ui/pages/complete/complete.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/ui/pages/complete/complete.module.ts ***!
  \**************************************************************/
/*! exports provided: CompleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteModule", function() { return CompleteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _complete_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complete-routing.module */ "./src/app/modules/ui/pages/complete/complete-routing.module.ts");
/* harmony import */ var _complete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complete.component */ "./src/app/modules/ui/pages/complete/complete.component.ts");







let CompleteModule = class CompleteModule {
};
CompleteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_complete_component__WEBPACK_IMPORTED_MODULE_5__["CompleteComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_complete_routing_module__WEBPACK_IMPORTED_MODULE_4__["routes"]),
            _complete_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompleteRoutingModule"]
        ],
        bootstrap: [
            _complete_component__WEBPACK_IMPORTED_MODULE_5__["CompleteComponent"]
        ]
    })
], CompleteModule);



/***/ })

}]);
//# sourceMappingURL=modules-ui-pages-complete-complete-module-es2015.js.map