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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-dashboard-wrapper\" *ngIf=\"isApartmentSelected\">\n\t<div class=\"card dashboard-card\">\n\t\t<div class=\"card-body row\">\n\t\t\t<div class=\"col-6 col-sm-3 col-md-3 col-lg-3 col-xl-2\" [ngClass]=\"isMobileView() ? 'mt-3' : 'mt-1 mb-1'\" *ngFor=\"let data of widgetRowOne\">\n\t\t\t\t<img class=\"float-left mt-1\" [ngClass]=\"isMobileView() ? 'mr-3' : 'mr-4 ml-3'\" src=\"assets/images/{{data.icon}}-icon.svg\">\n\t\t\t\t<div>\n\t\t\t\t\t<p class=\"user-wid-name text-nowrap\">{{data.name}}</p>\n\t\t\t\t\t<p class=\"font-weight-bold\" [ngClass]=\"isMobileView() ? 'user-wid-name' : 'user-wid-value'\">{{data.value}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"card dashboard-card mt-4\">\n\t\t<div class=\"card-body row\">\n\t\t\t<div class=\"col-6 col-sm-3 col-md-3 col-lg-3 col-xl-2\" [ngClass]=\"isMobileView() ? 'mt-3' : 'mt-1 mb-1'\" *ngFor=\"let data of widgetRowTwo\">\n\t\t\t\t<img class=\"float-left mt-1\" [ngClass]=\"isMobileView() ? 'mr-3' : ' mr-4 ml-3'\"  src=\"assets/images/{{data.icon}}-icon.svg\">\n\t\t\t\t<div>\n\t\t\t\t\t<p class=\"user-wid-name text-nowrap\">{{data.name}}</p>\n\t\t\t\t\t<p class=\"font-weight-bold\" [ngClass]=\"isMobileView() ? 'user-wid-name' : 'user-wid-value'\">{{data.value}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-4\">\n\t\t<div [ngClass]=\"{'mt-4' : isMobileView()}\" class=\"col-sm-3 user-col-pad\" *ngFor=\"let data of widgetRowThree\">\n\t\t\t<div class=\"card dashboard-card\">\n\t\t\t\t<div class=\"card-body align-left-right\" [ngClass]= \"data.color\">\n\t\t\t\t\t<div class=\"text-left ml-3\">\n\t\t\t\t\t\t<i class=\"icon-sm fa fa-eye text-white link d-block mb-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<img src=\"assets/images/{{data.icon}}-icon.svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text-right mr-3 mt-4\">\n\t\t\t\t\t\t<p class=\"font-weight-bold text-white\">{{data.name}}</p> \n\t\t\t\t\t\t<h5 class=\"font-weight-bold text-white mt-2\">{{data.value}}</h5> \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer align-left-right opacity\" [ngClass]= \"data.color\">\n\t\t\t\t\t<p class=\"text-white\">Last Day</p>\n\t\t\t\t\t<i *ngIf=\"data.name == 'Visitors Checked In'\" class=\"icon-md fa fa-caret-down link text-white\" aria-hidden=\"true\" (click)=\"calenderPopup(data.name)\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div> \n\n\n\t<div class=\"row\" [ngClass]=\"{'mt-4' : !isMobileView()}\">\n\t\t<div class=\"col-sm-6 user-col-pad\" [ngClass]=\"isMobileView() ? 'mt-4 wid-max-height' : 'wid-height'\">\n\t\t\t<div class=\"card dashboard-card meeting-schedule\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<app-dash-meeting></app-dash-meeting>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6 user-col-pad\" [ngClass]=\"isMobileView() ? 'mt-4 wid-max-height' : 'wid-height'\">\n\t\t\t<div class=\"card dashboard-card announcement\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<app-dash-broad-cast></app-dash-broad-cast>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\" [ngClass]=\"{'mt-4' : !isMobileView()}\">\n\t\t<div [ngClass]=\"{'mt-4' : isMobileView()}\" class=\"col-sm-3 user-col-pad\" *ngFor= \"let data of widgetRowFive\">\n\t\t\t<div class=\"card dashboard-card\">\n\t\t\t\t<div class=\"card-body d-flex justify-content-between\">\n\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link d-block mb-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<img src=\"assets/images/{{data.icon}}-icon.svg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-5 pt-2\">{{data.value}}</h5> \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t<p>{{data.name}}</p>\n\t\t\t\t\t<!-- <i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\" [ngClass]=\"{'mt-4' : !isMobileView()}\">\n\t\t<div class=\"col-sm-6 user-col-pad\" [ngClass]=\"isMobileView() ? 'mt-4 wid-max-height' : 'wid-height'\">\n\t\t\t<app-dash-com-list [label]=\"'Emergency Alerts'\"></app-dash-com-list>\n\t\t</div>\n\t\t<div class=\"col-sm-6 user-col-pad\" [ngClass]=\"isMobileView() ? 'mt-4 wid-max-height' : 'wid-height'\">\n\t\t\t<app-dash-com-list [label]=\"'Recent Violations'\"></app-dash-com-list>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\" [ngClass]=\"{'mt-4' : !isMobileView()}\">\n\t\t<div class=\"col-sm-6 user-col-pad\" [ngClass]=\"isMobileView() ? 'mt-4 wid-max-height' : 'wid-height'\">\n\t\t\t<app-dash-com-list [label]=\"'Work Permit'\"></app-dash-com-list>\n\t\t</div>\n\t\t<div class=\"col-sm-6 user-col-pad\"  [ngClass]=\"isMobileView() ? 'mt-4 wid-max-height' : 'wid-height'\">\n\t\t\t<app-dash-com-list [label]=\"'Facility Bookings'\"></app-dash-com-list>\n\t\t</div>\n\t</div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".user-dashboard-wrapper .user-col-pad {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n.user-dashboard-wrapper .bg-dark-blue {\n  background-color: #236aaf;\n}\n.user-dashboard-wrapper .opacity {\n  opacity: 0.8;\n}\n.user-dashboard-wrapper .bg-cyan-03 {\n  background-color: #00d1fa !important;\n}\n.user-dashboard-wrapper .bg-h-cyan {\n  background-color: #03cca6 !important;\n}\n.user-dashboard-wrapper .bg-s-blue {\n  background-color: #529eff !important;\n}\n.user-dashboard-wrapper .dark-blue {\n  color: #236aaf;\n}\n.user-dashboard-wrapper .widget-name {\n  font-size: 1.1rem;\n}\n.user-dashboard-wrapper .wid-height {\n  height: 343px;\n}\n.user-dashboard-wrapper .wid-max-height {\n  max-height: 343px;\n}\n.user-dashboard-wrapper .cyan-color {\n  color: #00d1fa;\n}\n.user-dashboard-wrapper .user-wid-name {\n  font-size: 1.3rem;\n}\n.user-dashboard-wrapper .user-wid-value {\n  font-size: 1.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC91c2VyL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLDZCQUFBO0VBQ0EsOEJBQUE7QUNKRjtBRE9DO0VBQ0MseUJFRmE7QURIZjtBRFFDO0VBQ0MsWUFBQTtBQ05GO0FEU0M7RUFDQyxvQ0FBQTtBQ1BGO0FEVUM7RUFDQyxvQ0FBQTtBQ1JGO0FEV0M7RUFDQyxvQ0FBQTtBQ1RGO0FEWUM7RUFDQyxjRXRCYTtBRFlmO0FEYUM7RUc0Q0MsaUJBQUE7QUZ0REY7QURjQztFQUNDLGFBQUE7QUNaRjtBRGVDO0VBQ0MsaUJBQUE7QUNiRjtBRGdCQztFQUNDLGNFbEJTO0FESVg7QURpQkM7RUc0QkMsaUJBQUE7QUYxQ0Y7QURpQkM7RUd5QkMsaUJBQUE7QUZ2Q0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi51c2VyLWRhc2hib2FyZC13cmFwcGVyIHtcblx0LnVzZXItY29sLXBhZCB7XG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuXHR9XG5cdFxuXHQuYmctZGFyay1ibHVlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlLTAyO1xuXHR9XG5cdFxuXHQub3BhY2l0eSB7XG5cdFx0b3BhY2l0eTogMC44O1xuXHR9XG5cdFxuXHQuYmctY3lhbi0wMyB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGQtY3lhbi0wMyAhaW1wb3J0YW50O1xuXHR9XG5cdFxuXHQuYmctaC1jeWFuIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkaC1jeWFuICFpbXBvcnRhbnQ7XG5cdH1cblx0XG5cdC5iZy1zLWJsdWUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRzLWJsdWUgIWltcG9ydGFudDtcblx0fVxuXHRcblx0LmRhcmstYmx1ZSB7XG5cdFx0Y29sb3IgOiAkZGFyay1ibHVlLTAyO1xuXHR9XG5cdFxuXHQud2lkZ2V0LW5hbWUge1xuXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtYmFzZS0wMik7XG5cdH1cblx0XG5cdC53aWQtaGVpZ2h0IHtcblx0XHRoZWlnaHQ6IDM0M3B4O1xuXHR9XG5cblx0LndpZC1tYXgtaGVpZ2h0IHtcblx0XHRtYXgtaGVpZ2h0OiAzNDNweDtcblx0fVxuXHRcblx0LmN5YW4tY29sb3Ige1xuXHRcdGNvbG9yIDogJGQtY3lhbi0wMztcblx0fVxuXG5cdC51c2VyLXdpZC1uYW1lIHtcblx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsZXIpO1xuXHR9XG5cdC51c2VyLXdpZC12YWx1ZSB7XG5cdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpXG5cdH1cbn1cbiIsIi51c2VyLWRhc2hib2FyZC13cmFwcGVyIC51c2VyLWNvbC1wYWQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xufVxuLnVzZXItZGFzaGJvYXJkLXdyYXBwZXIgLmJnLWRhcmstYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzZhYWY7XG59XG4udXNlci1kYXNoYm9hcmQtd3JhcHBlciAub3BhY2l0eSB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi51c2VyLWRhc2hib2FyZC13cmFwcGVyIC5iZy1jeWFuLTAzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDFmYSAhaW1wb3J0YW50O1xufVxuLnVzZXItZGFzaGJvYXJkLXdyYXBwZXIgLmJnLWgtY3lhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2NjYTYgIWltcG9ydGFudDtcbn1cbi51c2VyLWRhc2hib2FyZC13cmFwcGVyIC5iZy1zLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5ZWZmICFpbXBvcnRhbnQ7XG59XG4udXNlci1kYXNoYm9hcmQtd3JhcHBlciAuZGFyay1ibHVlIHtcbiAgY29sb3I6ICMyMzZhYWY7XG59XG4udXNlci1kYXNoYm9hcmQtd3JhcHBlciAud2lkZ2V0LW5hbWUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi51c2VyLWRhc2hib2FyZC13cmFwcGVyIC53aWQtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAzNDNweDtcbn1cbi51c2VyLWRhc2hib2FyZC13cmFwcGVyIC53aWQtbWF4LWhlaWdodCB7XG4gIG1heC1oZWlnaHQ6IDM0M3B4O1xufVxuLnVzZXItZGFzaGJvYXJkLXdyYXBwZXIgLmN5YW4tY29sb3Ige1xuICBjb2xvcjogIzAwZDFmYTtcbn1cbi51c2VyLWRhc2hib2FyZC13cmFwcGVyIC51c2VyLXdpZC1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4udXNlci1kYXNoYm9hcmQtd3JhcHBlciAudXNlci13aWQtdmFsdWUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */");

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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/DashBoard */ "./src/app/api/controllers/DashBoard.ts");
/* harmony import */ var src_app_ams_dashboard_components_shared_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/ams/dashboard/components/shared/date-model/date-model.component */ "./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts");
/* harmony import */ var _new_user_registration_new_user_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../new-user-registration/new-user-registration.component */ "./src/app/user/new-user-registration/new-user-registration.component.ts");









let UserDashboardComponent = class UserDashboardComponent {
    constructor(userService, sharedService, cookieService, dashboardService, dialog) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dashboardService = dashboardService;
        this.dialog = dialog;
        this.userName = "";
        this.isApartmentSelected = false;
        this.widgetRowOne = [{
                name: 'Parking Slots',
                icon: 'parking-slot'
            }, {
                name: 'Vehicles',
                icon: 'vehicles'
            }, {
                name: 'Family Members',
                icon: 'family'
            }, {
                name: 'Pets',
                icon: 'pets'
            }, {
                name: 'Private Staffs',
                icon: 'maid'
            }, {
                name: 'Interest Groups',
                icon: 'group'
            }];
        this.widgetRowTwo = [{
                name: 'Amount Due',
                value: 5000,
                icon: 'amount-due'
            }, {
                name: 'Penalty Amount',
                value: 6000,
                icon: 'penalty'
            }, {
                name: 'Credit Amount',
                value: 6000,
                icon: 'credit-amount'
            }, {
                name: 'Advance Amount',
                value: 6000,
                icon: 'advance-amount'
            }, {
                name: 'Security Deposit',
                value: 6000,
                icon: 'security-deposit'
            }, {
                name: ' Expiring Rental',
                value: 6000,
                icon: 'rental-agreement'
            }];
        this.widgetRowThree = [{
                name: 'Open Tickets',
                color: 'bg-dark-blue',
                icon: 'open-ticket'
            }, {
                name: 'Visitors Checked In',
                color: 'bg-s-blue',
                icon: 'visitors-checked-in'
            }, {
                name: 'Visitors Not Checked Out',
                color: 'bg-cyan-03',
                icon: 'visitors-not-checked-out'
            }, {
                name: 'Open Violations',
                color: 'bg-h-cyan',
                icon: 'open-violation'
            }];
        this.widgetRowFive = [{
                name: 'Electricity Units Recorded',
                value: '',
                icon: 'electric-meter'
            }, {
                name: 'Water Meter Units Recorded',
                value: '',
                icon: 'watermeter'
            }, {
                name: 'Facility Booking Approved',
                value: '',
                icon: 'party-hall-approved'
            }, {
                name: 'Facility Booking UnApproved',
                value: '',
                icon: 'party-hall-unapproved'
            }];
    }
    isMobileView() {
        return window.innerWidth <= 767 ? true : false;
    }
    calenderPopup(type) {
        const dialogRef = this.dialog.open(src_app_ams_dashboard_components_shared_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_7__["DateModelComponent"], {
            width: '400px',
            height: '175px',
            data: type
        });
        dialogRef.afterClosed().subscribe(result => {
            this.visitotsCheckedin(result);
        });
    }
    visitotsCheckedin(params) {
        params.startDate = params.fromDate;
        params.EndDate = params.toDate;
        params.blockUnitId = parseInt(this.cookieService.get('apartmentBlockUnitID'));
        params.blockUnitUserId = parseInt(this.cookieService.get('apartmentBlockUnitUserId')),
            this.dashboardService.getUDashVisitorcheckedinbyblockunituser(params).subscribe((res) => {
                this.widgetRowThree[1].value = res.visitorsCheckIn;
            });
    }
    firstRow() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            blockUnitId: parseInt(this.cookieService.get('apartmentBlockUnitID')),
            blockUnitUserId: parseInt(this.cookieService.get('apartmentBlockUnitUserId')),
        };
        let entity = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            blockunituserId: parseInt(this.cookieService.get('apartmentBlockUnitUserId')),
        };
        let unitUser = {
            apartmentBlockUnitUserId: parseInt(this.cookieService.get('apartmentBlockUnitUserId')),
        };
        this.dashboardService.getUDashTotalparkingbyblockunitId(params).subscribe((res) => {
            this.widgetRowOne[0].value = res.totalParkingSlots;
        });
        this.dashboardService.getUDashVehiclecountbyblockunituser(entity).subscribe((res) => {
            this.widgetRowOne[1].value = res.vehiclecountbyblockunituser;
        });
        this.userService.getUserFamilyCountByBlockUnitUserId(unitUser).subscribe((res) => {
            this.widgetRowOne[2].value = res[0]; //dummy Need to integrate
        });
        this.dashboardService.getUDashTotalpetstbyblockunituser(entity).subscribe((res) => {
            this.widgetRowOne[3].value = res.totalpetstbyblockunituser;
        });
        this.dashboardService.getUDashPrivateStaffbyblockunituser(entity).subscribe((res) => {
            this.widgetRowOne[4].value = res.totalPrivateStaffbyblockunituser;
        });
        this.userService.getUserInterestGroupCountByBlockUnitUserId(unitUser).subscribe((res) => {
            this.widgetRowOne[5].value = res[0]; //dummy Need to integrate
        });
    }
    thirdRow() {
        let entity = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            blockunituserId: parseInt(this.cookieService.get('apartmentBlockUnitUserId')),
        };
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            fromDate: new Date().toISOString(),
            toDate: new Date().toISOString()
        };
        let visNot = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            blockUnitId: parseInt(this.cookieService.get('apartmentBlockUnitID')),
            blockUnitUserId: parseInt(this.cookieService.get('apartmentBlockUnitUserId')),
        };
        let violation = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            BlockUnitId: parseInt(this.cookieService.get('apartmentBlockUnitID')),
            blockUnitUserID: parseInt(this.cookieService.get('apartmentBlockUnitUserId')),
        };
        this.dashboardService.getUDashOpenticektsbyblockunituser(entity).subscribe((res) => {
            this.widgetRowThree[0].value = res.openticket;
        });
        this.visitotsCheckedin(params);
        this.dashboardService.getUDashVisitorNoTcheckeddoubyblockunitId(visNot).subscribe((res) => {
            this.widgetRowThree[2].value = res.visitorsNotcheckedtoday;
        });
        this.dashboardService.getUDashCurrentViolationsbyblockunituserId(violation).subscribe((res) => {
            this.widgetRowThree[3].value = res.currentViolations;
        });
    }
    fifthRow() {
        let reading = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            BlockUnitId: parseInt(this.cookieService.get('apartmentBlockUnitID')),
            blockUnitUserID: parseInt(this.cookieService.get('apartmentBlockUnitUserId')),
        };
        let entity = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            blockUnitUserID: parseInt(this.cookieService.get('apartmentBlockUnitUserId')),
        };
        // this.dashboardService.getUDashWaterunitsbyblockunitId(reading).subscribe((res:any)=>{
        //   this.widgetRowFive[1].value = res.waterunits;
        // });
        this.dashboardService.getUDashWaterunitsbyblockunitId(reading).subscribe((res) => {
            this.widgetRowFive[1].value = res.waterunits;
        });
        this.dashboardService.getUDapprovedfacilittbookingbyblockunitId(entity).subscribe((res) => {
            this.widgetRowFive[2].value = res.approvedfaclitiesTodayCount;
        });
        // this.dashboardService.getUDapprovedfacilittbookingbyblockunitId(entity).subscribe((res:any)=>{
        //   this.widgetRowFive[3].value = res.waterunits;
        // });
    }
    ngOnInit() {
        let params = {
            userid: parseInt(this.cookieService.get('userId'))
        };
        this.userService.getUserById(params).subscribe((res) => {
            this.userName = res[0].firstName;
            this.userDetails = res[0];
            if (this.userDetails && !this.userDetails.isApproved) {
                let data = this.userDetails;
                data['isOpen'] = true;
                if (this.userDetails.isDocSubmitted == null || !this.userDetails.isDocSubmitted) {
                    data.isOpen = true;
                }
                else if (this.userDetails.isDocSubmitted && !this.userDetails.isApproved) {
                    data.isOpen = false;
                }
                const dialogRef = this.dialog.open(_new_user_registration_new_user_registration_component__WEBPACK_IMPORTED_MODULE_8__["NewUserRegistrationComponent"], {
                    width: 'auto',
                    height: 'auto',
                    data: data
                });
                dialogRef.afterClosed().subscribe(result => {
                    if (result) {
                        // this.getCategoryList();
                    }
                });
            }
        }, error => {
            console.log(error);
        });
        this.sharedService.apartmentselectedcast.subscribe(isApartmentSelected => {
            this.isApartmentSelected = isApartmentSelected;
            if (isApartmentSelected) {
                this.firstRow();
                this.thirdRow();
                this.fifthRow();
            }
        });
    }
};
UserDashboardComponent.ctorParameters = () => [
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_6__["DashBoardService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
UserDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-dashboard.component.scss */ "./src/app/user/user-dashboard/user-dashboard.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
        src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_6__["DashBoardService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
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
/* harmony import */ var src_app_ams_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/ams/dashboard/dashboard.module */ "./src/app/ams/dashboard/dashboard.module.ts");










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
            _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserDashboardRoutingModule"],
            src_app_ams_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"]
        ]
    })
], UserDashboardModule);



/***/ })

}]);
//# sourceMappingURL=user-dashboard-user-dashboard-module-es2015.js.map