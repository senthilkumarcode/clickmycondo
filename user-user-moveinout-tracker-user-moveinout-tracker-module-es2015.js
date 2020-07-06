(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-moveinout-tracker-user-moveinout-tracker-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-moveinout-tracker/user-moveinout-tracker.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-moveinout-tracker/user-moveinout-tracker.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/user/user-moveinout-tracker/user-moveinout-tracker-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/user/user-moveinout-tracker/user-moveinout-tracker-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: UserMoveinoutTrackerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMoveinoutTrackerRoutingModule", function() { return UserMoveinoutTrackerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_user_movein_user_movein_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/user-movein/user-movein.component */ "./src/app/shared/components/user-movein/user-movein.component.ts");
/* harmony import */ var _shared_components_user_moveout_user_moveout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/user-moveout/user-moveout.component */ "./src/app/shared/components/user-moveout/user-moveout.component.ts");
/* harmony import */ var src_app_shared_components_movein_history_movein_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/movein-history/movein-history.component */ "./src/app/shared/components/movein-history/movein-history.component.ts");






const routes = [
    { path: '', redirectTo: 'movein', pathMatch: 'full' },
    { path: 'movein', component: _shared_components_user_movein_user_movein_component__WEBPACK_IMPORTED_MODULE_3__["UserMoveinComponent"] },
    { path: 'moveout', component: _shared_components_user_moveout_user_moveout_component__WEBPACK_IMPORTED_MODULE_4__["UserMoveoutComponent"] },
    { path: 'history', component: src_app_shared_components_movein_history_movein_history_component__WEBPACK_IMPORTED_MODULE_5__["MoveinHistoryComponent"] },
    { path: '**', redirectTo: 'movein', pathMatch: 'full' }
];
let UserMoveinoutTrackerRoutingModule = class UserMoveinoutTrackerRoutingModule {
};
UserMoveinoutTrackerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserMoveinoutTrackerRoutingModule);



/***/ }),

/***/ "./src/app/user/user-moveinout-tracker/user-moveinout-tracker.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/user/user-moveinout-tracker/user-moveinout-tracker.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1tb3ZlaW5vdXQtdHJhY2tlci91c2VyLW1vdmVpbm91dC10cmFja2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/user-moveinout-tracker/user-moveinout-tracker.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user/user-moveinout-tracker/user-moveinout-tracker.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserMoveinoutTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMoveinoutTrackerComponent", function() { return UserMoveinoutTrackerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserMoveinoutTrackerComponent = class UserMoveinoutTrackerComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserMoveinoutTrackerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-moveinout-tracker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-moveinout-tracker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-moveinout-tracker/user-moveinout-tracker.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-moveinout-tracker.component.scss */ "./src/app/user/user-moveinout-tracker/user-moveinout-tracker.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UserMoveinoutTrackerComponent);



/***/ }),

/***/ "./src/app/user/user-moveinout-tracker/user-moveinout-tracker.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/user/user-moveinout-tracker/user-moveinout-tracker.module.ts ***!
  \******************************************************************************/
/*! exports provided: UserMoveinoutTrackerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMoveinoutTrackerModule", function() { return UserMoveinoutTrackerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_moveinout_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-moveinout-tracker-routing.module */ "./src/app/user/user-moveinout-tracker/user-moveinout-tracker-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-moveinout-tracker.component */ "./src/app/user/user-moveinout-tracker/user-moveinout-tracker.component.ts");






let UserMoveinoutTrackerModule = class UserMoveinoutTrackerModule {
};
UserMoveinoutTrackerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__["UserMoveinoutTrackerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _user_moveinout_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserMoveinoutTrackerRoutingModule"]
        ],
        bootstrap: [_user_moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__["UserMoveinoutTrackerComponent"]]
    })
], UserMoveinoutTrackerModule);



/***/ })

}]);
//# sourceMappingURL=user-user-moveinout-tracker-user-moveinout-tracker-module-es2015.js.map