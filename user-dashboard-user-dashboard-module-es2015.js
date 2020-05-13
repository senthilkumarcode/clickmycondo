(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-dashboard-user-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-events-wrapper\">\n\t\n\t<div class=\"row\">\n\t\t\n\t\t<div class=\"col-sm-6\">\n\t\t\t\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body\">\n\t\t\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/calendar-blue-icon.svg\" width=\"20\" />My Meetings</h5>\n\t\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('date')\">Date <span [ngClass]=\"getFieldOrderBy('date')\"></span></th>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('time')\">Time <span [ngClass]=\"getFieldOrderBy('time')\"></span></th>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('subject')\">Subject <span [ngClass]=\"getFieldOrderBy('subject')\"></span></th>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t    </thead>\n\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t    <tr *ngFor=\"let event of meetingsEventData\">\n\t\t\t\t\t\t      <td class=\"name\"><a href=\"javascript:void(0)\">{{event.date}}</a></td>\n\t\t\t\t\t\t      <td class=\"grey\">{{event.time}}</td>\n\t\t\t\t\t\t      <td class=\"grey\">{{event.subject}}</td>\n\t\t\t\t\t    </tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"col-sm-6\">\n\t\t\t\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body\">\n\t\t\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/booking-blue-icon.svg\" width=\"24\" />My Facility Bookings</h5>\n\t\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('date')\">Date <span [ngClass]=\"getFieldOrderBy('date')\"></span></th>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('time')\">Time <span [ngClass]=\"getFieldOrderBy('time')\"></span></th>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('subject')\">Subject <span [ngClass]=\"getFieldOrderBy('subject')\"></span></th>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t    </thead>\n\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t    <tr *ngFor=\"let event of facilityEventData\">\n\t\t\t\t\t\t      <td class=\"name\"><a href=\"javascript:void(0)\">{{event.date}}</a></td>\n\t\t\t\t\t\t      <td class=\"grey\">{{event.time}}</td>\n\t\t\t\t\t\t      <td class=\"grey\">{{event.subject}}</td>\n\t\t\t\t\t    </tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"userdash-main-comp-wrapper\">\n\t\n\t<div class=\"row\">\n\t\t\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body color-box user s-blue\">\n\t\t\t\t\t<h4>13.4K</h4>\n\t\t\t\t\t<h5>Pending Payments</h5>\n\t\t\t\t\t<p>&nbsp;</p>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/credit-white-icon.svg\" width=\"22\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-box text-center\">Pay</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body color-box user l-red\">\n\t\t\t\t\t<h4>12 <span>(OPEN)</span></h4>\n\t\t\t\t\t<h5>My Tickets</h5>\n\t\t\t\t\t<p>from <span>last 7 days</span></p>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/booking-white-icon.svg\" width=\"22\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-box text-center\">Create Ticket</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body color-box user green\">\n\t\t\t\t\t<h4>123</h4>\n\t\t\t\t\t<h5>My Visitors</h5>\n\t\t\t\t\t<p>1 Expected visitor from <span>last 7 days</span></p>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/view-icon.svg\" width=\"22\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-box text-center\">View Visitors</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"userdash-messages-comp-wrapper\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body messages\">\n\t\t\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/alarm-blue-icon.svg\" width=\"20\" />Emergency Alert Messages</h5>\n\t\t\t\t\t<ng-container *ngFor=\"let message of emergencyMessagesData\">\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<span class=\"grey\">{{message.date}}</span>\n\t\t\t\t\t\t\t<span>{{message.text}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body messages\">\n\t\t\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/alarm-blue-icon.svg\" width=\"20\" />Notice Board Messages</h5>\n\t\t\t\t\t<ng-container *ngFor=\"let message of noticeMessagesData\">\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<span class=\"grey\">{{message.date}}</span>\n\t\t\t\t\t\t\t<span>{{message.text}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\t");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-dashboard-wrapper\">\n\n\t\t<div class=\"message-box mb-4\">\n\t\t\t<h4>Hi <span class=\"text-capitialize\">{{userName}}</span></h4>\n\t\t\t<!-- <h5>We are here to help you.</h5> -->\n\t\t</div>\n\n\t\t<app-userdash-main-comp></app-userdash-main-comp>\n\t\t<app-userdash-messages-comp></app-userdash-messages-comp>\n\t\t<app-userdash-events-comp></app-userdash-events-comp>\n\n</div>");

/***/ }),

/***/ "./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kYXNoYm9hcmQvY29tcG9uZW50cy91c2VyZGFzaC1ldmVudHMtY29tcC91c2VyZGFzaC1ldmVudHMtY29tcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UserdashEventsCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdashEventsCompComponent", function() { return UserdashEventsCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserdashEventsCompComponent = class UserdashEventsCompComponent {
    constructor() {
        this.unitFieldType = "unitno";
        this.unitOrder = true;
    }
    sortUnitData(type) {
        this.unitFieldType = type;
        this.unitOrder = !this.unitOrder;
    }
    getFieldOrderBy(type) {
        if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
        }
        else
            return '';
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    ngOnInit() {
        this.meetingsEventData = [
            {
                'date': '24/11/2019',
                'time': '5:00-6:00 PM',
                'subject': 'Annual General Meeting'
            },
            {
                'date': '23/12/2019',
                'time': '4:00-6:00 PM',
                'subject': 'Annual General Meeting'
            }
        ];
        this.facilityEventData = [
            {
                'date': '24/11/2019',
                'time': '5:00-6:00 PM',
                'subject': 'Party Hall'
            },
            {
                'date': '23/12/2019',
                'time': '4:00-6:00 PM',
                'subject': 'Tennis Court'
            }
        ];
    }
};
UserdashEventsCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userdash-events-comp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./userdash-events-comp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./userdash-events-comp.component.scss */ "./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UserdashEventsCompComponent);



/***/ }),

/***/ "./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kYXNoYm9hcmQvY29tcG9uZW50cy91c2VyZGFzaC1tYWluLWNvbXAvdXNlcmRhc2gtbWFpbi1jb21wLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UserdashMainCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdashMainCompComponent", function() { return UserdashMainCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserdashMainCompComponent = class UserdashMainCompComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserdashMainCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userdash-main-comp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./userdash-main-comp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./userdash-main-comp.component.scss */ "./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UserdashMainCompComponent);



/***/ }),

/***/ "./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kYXNoYm9hcmQvY29tcG9uZW50cy91c2VyZGFzaC1tZXNzYWdlcy1jb21wL3VzZXJkYXNoLW1lc3NhZ2VzLWNvbXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: UserdashMessagesCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdashMessagesCompComponent", function() { return UserdashMessagesCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserdashMessagesCompComponent = class UserdashMessagesCompComponent {
    constructor() { }
    ngOnInit() {
        this.emergencyMessagesData = [
            {
                'date': '01/12/2019',
                'text': 'Flood alert in your area'
            },
            {
                'date': '23/11/2019',
                'text': 'Water leakage in Tower-B'
            }
        ];
        this.noticeMessagesData = [
            {
                'date': '25/11/2019',
                'text': 'Playing kids movie this friday'
            },
            {
                'date': '27/11/2019',
                'text': 'Swimming pool maintenance'
            }
        ];
    }
};
UserdashMessagesCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userdash-messages-comp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./userdash-messages-comp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./userdash-messages-comp.component.scss */ "./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UserdashMessagesCompComponent);



/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UserDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardRoutingModule", function() { return UserDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dashboard.component */ "./src/app/user/user-dashboard/user-dashboard.component.ts");




const routes = [
    { path: '', component: _user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"] },
    { path: 'dashboard', component: _user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"] }
];
let UserDashboardRoutingModule = class UserDashboardRoutingModule {
};
UserDashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserDashboardRoutingModule);



/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-dashboard-wrapper .message-box h4 {\n  font-size: 2rem;\n  color: #191c1e;\n  margin: 0 0 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC91c2VyL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdXNlci91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQ3dFQSxlQUFBO0VEdEVJLGNFbUZLO0VGbEZMLGlCQUFBO0FHTE4iLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi51c2VyLWRhc2hib2FyZC13cmFwcGVyIHtcblx0Lm1lc3NhZ2UtYm94IHtcblx0XHRoNCB7XG5cdFx0ICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcblx0XHQgICAgY29sb3I6ICRncmV5LTkwMDtcblx0XHQgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG5cdFx0fVxuXHR9XG59XG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiLCIudXNlci1kYXNoYm9hcmQtd3JhcHBlciAubWVzc2FnZS1ib3ggaDQge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjMTkxYzFlO1xuICBtYXJnaW46IDAgMCA0cHggMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");




let UserDashboardComponent = class UserDashboardComponent {
    constructor(userService, cookieService) {
        this.userService = userService;
        this.cookieService = cookieService;
        this.userName = "";
    }
    ngOnInit() {
        this.userService.getUserById(parseInt(this.cookieService.get('userId'))).subscribe((res) => {
            this.userName = res[0].firstName;
        }, error => {
            console.log(error);
        });
    }
};
UserDashboardComponent.ctorParameters = () => [
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
UserDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-dashboard.component.scss */ "./src/app/user/user-dashboard/user-dashboard.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], UserDashboardComponent);



/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.module.ts ***!
  \**************************************************************/
/*! exports provided: UserDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardModule", function() { return UserDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dashboard-routing.module */ "./src/app/user/user-dashboard/user-dashboard-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-dashboard.component */ "./src/app/user/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _components_userdash_main_comp_userdash_main_comp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/userdash-main-comp/userdash-main-comp.component */ "./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.ts");
/* harmony import */ var _components_userdash_messages_comp_userdash_messages_comp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/userdash-messages-comp/userdash-messages-comp.component */ "./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.ts");
/* harmony import */ var _components_userdash_events_comp_userdash_events_comp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/userdash-events-comp/userdash-events-comp.component */ "./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.ts");









let UserDashboardModule = class UserDashboardModule {
};
UserDashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["UserDashboardComponent"],
            _components_userdash_main_comp_userdash_main_comp_component__WEBPACK_IMPORTED_MODULE_6__["UserdashMainCompComponent"],
            _components_userdash_messages_comp_userdash_messages_comp_component__WEBPACK_IMPORTED_MODULE_7__["UserdashMessagesCompComponent"],
            _components_userdash_events_comp_userdash_events_comp_component__WEBPACK_IMPORTED_MODULE_8__["UserdashEventsCompComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserDashboardRoutingModule"]
        ]
    })
], UserDashboardModule);



/***/ })

}]);
//# sourceMappingURL=user-dashboard-user-dashboard-module-es2015.js.map