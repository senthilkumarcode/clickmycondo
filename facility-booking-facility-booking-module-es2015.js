(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facility-booking-facility-booking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"all-facility-bookings-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isBookingDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isBookingDataLoaded\">\n\t\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Bookings <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bookingData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/user/facility-booking/create-booking\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Booking</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n  \t\t\t\n\t  \t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('facilityId')\">Booking ID <span [ngClass]=\"getFieldOrderBy('facilityId')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('facilityName')\">Facility Name <span [ngClass]=\"getFieldOrderBy('facilityName')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('facilityName')\">Facility Location <span [ngClass]=\"getFieldOrderBy('facilityName')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('slot')\">Slot<span [ngClass]=\"getFieldOrderBy('slot')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('date')\">Booked For <span [ngClass]=\"getFieldOrderBy('Date')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('cost')\">Cost <span [ngClass]=\"getFieldOrderBy('cost')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('facilityBookingStatus')\">Status<span  [ngClass]=\"getFieldOrderBy('facilityBookingStatus')\"></span>\n\t\t\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Action</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t    <tr *ngFor=\"let booking of bookingListData | simpleSearch: bookingData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t\t \n\t\t\t\t  \t  <td class=\"name\">{{booking.apartmentFacilityBookingId}}</td>\n\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t      {{getFacilityBookingName(booking.apartmentFacilityId)}}\n\t\t\t\t      <span class=\"badge small min text-capitalize\" [ngClass]=\"getBookingStatus(booking.facilityBookingStatusId)\">{{getBookingStatus(booking.facilityBookingStatusId)}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t{{getFacilityBookingName(booking.apartmentBlockID)}}\n\t\t\t\t\t\t\t<span class=\"badge small min text-capitalize\" [ngClass]=\"getBookingStatus(booking.apartmentBlockID)\">{{getBookingStatus(booking.apartmentBlockID)}}</span>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t      <td class=\"grey\">{{getFacilityBookingSlot(booking.slotId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBookedDate(booking.bookedForDate)}}</td>\n\t\t\t\t      <td class=\"grey\">\n\t\t\t\t      \t<span *ngIf=\"booking.amount>0\">{{booking.amount}}</span>\n\t\t\t\t      \t<span *ngIf=\"booking.amount==0\">Free</span>\n\t\t\t\t\t  </td>\n\t\t\t\t\t  <td class=\"grey\"><span class=\"badge small min text-capitalize\" [ngClass]=\"getBookingStatus(booking, booking.facilityBookingStatusId)\">{{getBookingStatus(booking, booking.facilityBookingStatusId)}}</span></td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\"\n\t\t\t\t      \trouterLink=\"/ams/facility/edit-booking/{{booking.apartmentFacilityBookingId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(booking)\"><i class=\"fa fa-close\"></i></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t\t    <tr *ngIf=\"isNoItems\"><td colspan=\"6\" class=\"grey text-center\">\n\t\t\t\t    <p class=\"message\">No Items available</p>\n\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t    </tbody>\n\n  \t\t\t</table>\n\n  \t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"full-calendar-wrapper\">\n\n  <app-loader *ngIf=\"!isCalenderLoaded\"></app-loader>\n\n  <ng-container *ngIf=\"isCalenderLoaded\">\n    \n    <full-calendar\n      defaultView=\"dayGridMonth\"\n      [plugins]=\"calendarPlugins\"\n      (eventClick)=\"handleEventClick($event)\"\n      [header] =\"{\n      left:   'today, prev,next',\n      center: 'title',\n      right:  'dayGridDay,dayGridWeek,dayGridMonth'}\"\n      [events]=\"calendarEvents\"></full-calendar>\n\n  </ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/facility-booking.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/facility-booking.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZmFjaWxpdHktYm9va2luZy9jb21wb25lbnRzL2FsbC1mYWNpbGl0eS1ib29raW5ncy9hbGwtZmFjaWxpdHktYm9va2luZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AllFacilityBookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllFacilityBookingsComponent", function() { return AllFacilityBookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let AllFacilityBookingsComponent = class AllFacilityBookingsComponent {
    constructor(router, route, injector, userService, facilityService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.injector = injector;
        this.userService = userService;
        this.facilityService = facilityService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isBookingDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.bookingData = "";
        this.staffData = "";
        this.isNoItems = false;
        this.selectedInput = "";
        this.columnField = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
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
    getFacilityBookingName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.facilityCategoryData, function (item) {
            if (item.apartmentFacilityId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].facilityName;
        }
    }
    getFacilityBookingSlot(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.facilitySlotData, function (item) {
            if (item.apartmentFacilitySlotId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            var beginTime = moment__WEBPACK_IMPORTED_MODULE_10__(data[0].slotBeginTime, 'HH:mm:ss').toDate();
            var slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_10__(beginTime).format('HH:mm A');
            var EndTime = moment__WEBPACK_IMPORTED_MODULE_10__(data[0].slotEndTime, 'HH:mm:ss').toDate();
            var slotEndTime = moment__WEBPACK_IMPORTED_MODULE_10__(EndTime).format('HH:mm A');
            return slotBeginTime + " - " + slotEndTime;
        }
    }
    getBookedDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY");
    }
    getUserName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.userListData, function (item) {
            if (item.userId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].firstName;
        }
    }
    getBookingStatus(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.statusTypeData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName.toLowerCase();
        }
    }
    onSelectChange(event, type, name) {
        if (!underscore__WEBPACK_IMPORTED_MODULE_9__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
        }
        else {
            this.columnField = {};
        }
    }
    showConfirmModal(index) {
        this.modalService.showBookingCancelConfirmModal(index);
    }
    ngOnInit() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilitiesByApartmentId(params).subscribe((res) => {
            this.facilityCategoryData = res.filter(item => {
                return item.isActive;
            });
            console.log(this.facilityCategoryData);
        }, error => {
        });
        let statusTypeParams = {
            LookupTypeId: 40
        };
        //status 
        this.lookupService.getLookupValueByLookupTypeId(statusTypeParams).subscribe((res) => {
            this.statusTypeData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let facilityParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilitySlotsByApartmentId(facilityParams).subscribe((res) => {
            this.facilitySlotData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let userListParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.userService.getAllUsersByApartmentId(userListParams).subscribe((res) => {
            this.userListData = res.filter(data => {
                return data.isActive;
            });
        }, error => {
        });
        let bookingListParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilityBookingsByApartmentId(bookingListParams).subscribe((res) => {
            console.log(this.cookieService.get('apartmentId'));
            //filter active true items and booking related this user
            this.bookingListData = res.filter(data => {
                return data.isActive && (data.neededUserId == parseInt(this.cookieService.get('userId')));
            });
            if (this.bookingListData.length == 0 || this.bookingListData == undefined) {
                this.isNoItems = true;
            }
            this.totalItems = this.bookingListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isBookingDataLoaded = true;
        }, error => {
        });
        // delete booking
        this.sharedService.unitlistdeleteindexcast.subscribe(index => {
            if (index != null) {
                var params = {
                    apartmentFacilityBookingId: this.bookingListData[index].apartmentFacilityBookingId,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.isBookingDataLoaded = false;
                this.facilityService.deleteApartmentFacilityBooking(params).subscribe((res) => {
                    this.bookingListData.splice(index, 1);
                    this.totalItems = this.bookingListData.length;
                    this.isBookingDataLoaded = true;
                    this.sharedService.setUnitListDeleteIndex(null);
                }, error => {
                    console.log(error);
                });
            }
        });
        console.log(this.bookingListData);
    }
};
AllFacilityBookingsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_4__["FacilityService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
AllFacilityBookingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-facility-bookings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./all-facility-bookings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./all-facility-bookings.component.scss */ "./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_4__["FacilityService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], AllFacilityBookingsComponent);



/***/ }),

/***/ "./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZmFjaWxpdHktYm9va2luZy9jb21wb25lbnRzL3VzZXItZmFjaWxpdHktY2FsZW5kYXIvdXNlci1mYWNpbGl0eS1jYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: UserFacilityCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFacilityCalendarComponent", function() { return UserFacilityCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");










let UserFacilityCalendarComponent = class UserFacilityCalendarComponent {
    constructor(router, route, facilityService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.facilityService = facilityService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__["default"]]; // important!
        this.calendarEvents = [];
        this.isCalenderLoaded = false;
    }
    handleEventClick(arg) {
        var id = arg.event.id;
        this.router.navigate(['/user/facility-booking/edit-booking', id]);
    }
    getFacilityBookingData() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilitySlotsByApartmentId(params).subscribe((res) => {
            this.facilitySlotData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let categoryParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilitiesByApartmentId(categoryParams).subscribe((res) => {
            this.facilityCategoryData = res.filter(item => {
                return item.isActive;
            });
            let bookingParams = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.facilityService.getApartmentFacilityBookingsByApartmentId(bookingParams).subscribe((res) => {
                this.facilityBookingData = res.filter(item => {
                    return item.isActive && (item.neededUserId == parseInt(this.cookieService.get('userId')));
                });
                underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.facilityBookingData, booking => {
                    var date = moment__WEBPACK_IMPORTED_MODULE_8__(booking.bookedForDate).format("YYYY-MM-DD");
                    var nameItem = this.facilityCategoryData.filter(item => {
                        return item.apartmentFacilityId == booking.apartmentFacilityId;
                    });
                    var slotData = this.facilitySlotData.filter(item => {
                        return item.apartmentFacilitySlotId == booking.slotId;
                    });
                    var beginTime = moment__WEBPACK_IMPORTED_MODULE_8__(slotData[0].slotBeginTime, 'HH:mm:ss').toDate();
                    var slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_8__(beginTime).format('HH:mm A');
                    var EndTime = moment__WEBPACK_IMPORTED_MODULE_8__(slotData[0].slotEndTime, 'HH:mm:ss').toDate();
                    var slotEndTime = moment__WEBPACK_IMPORTED_MODULE_8__(EndTime).format('HH:mm A');
                    var event = nameItem[0].facilityName + " ( " + slotBeginTime + "-" + slotEndTime + " ) ";
                    this.calendarEvents.push({ title: event, date: date, id: nameItem[0].apartmentFacilityId });
                    this.isCalenderLoaded = true;
                });
            }, error => {
            });
        }, error => {
        });
    }
    ngOnInit() {
        this.getFacilityBookingData();
    }
};
UserFacilityCalendarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
UserFacilityCalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-facility-calendar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-facility-calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-facility-calendar.component.scss */ "./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], UserFacilityCalendarComponent);



/***/ }),

/***/ "./src/app/user/facility-booking/facility-booking-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user/facility-booking/facility-booking-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FacilityBookingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityBookingRoutingModule", function() { return FacilityBookingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_all_facility_bookings_all_facility_bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/all-facility-bookings/all-facility-bookings.component */ "./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.ts");
/* harmony import */ var _components_user_facility_calendar_user_facility_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-facility-calendar/user-facility-calendar.component */ "./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.ts");
/* harmony import */ var _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/facility-create-booking/facility-create-booking.component */ "./src/app/shared/components/facility-create-booking/facility-create-booking.component.ts");






const routes = [
    { path: '', redirectTo: 'all-bookings', pathMatch: 'full' },
    { path: 'all-bookings', component: _components_all_facility_bookings_all_facility_bookings_component__WEBPACK_IMPORTED_MODULE_3__["AllFacilityBookingsComponent"] },
    { path: 'create-booking', component: _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_5__["FacilityCreateBookingComponent"] },
    { path: 'edit-booking/:id', component: _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_5__["FacilityCreateBookingComponent"] },
    { path: 'calendar', component: _components_user_facility_calendar_user_facility_calendar_component__WEBPACK_IMPORTED_MODULE_4__["UserFacilityCalendarComponent"] },
    { path: '**', redirectTo: 'all-bookings', pathMatch: 'full' }
];
let FacilityBookingRoutingModule = class FacilityBookingRoutingModule {
};
FacilityBookingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FacilityBookingRoutingModule);



/***/ }),

/***/ "./src/app/user/facility-booking/facility-booking.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/user/facility-booking/facility-booking.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZmFjaWxpdHktYm9va2luZy9mYWNpbGl0eS1ib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/facility-booking/facility-booking.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/facility-booking/facility-booking.component.ts ***!
  \*********************************************************************/
/*! exports provided: FacilityBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityBookingComponent", function() { return FacilityBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FacilityBookingComponent = class FacilityBookingComponent {
    constructor() { }
    ngOnInit() {
    }
};
FacilityBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/facility-booking.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-booking.component.scss */ "./src/app/user/facility-booking/facility-booking.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FacilityBookingComponent);



/***/ }),

/***/ "./src/app/user/facility-booking/facility-booking.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/user/facility-booking/facility-booking.module.ts ***!
  \******************************************************************/
/*! exports provided: FacilityBookingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityBookingModule", function() { return FacilityBookingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _facility_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facility-booking-routing.module */ "./src/app/user/facility-booking/facility-booking-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _facility_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facility-booking.component */ "./src/app/user/facility-booking/facility-booking.component.ts");
/* harmony import */ var _components_all_facility_bookings_all_facility_bookings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/all-facility-bookings/all-facility-bookings.component */ "./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.ts");
/* harmony import */ var _components_user_facility_calendar_user_facility_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-facility-calendar/user-facility-calendar.component */ "./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.ts");








let FacilityBookingModule = class FacilityBookingModule {
};
FacilityBookingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _facility_booking_component__WEBPACK_IMPORTED_MODULE_5__["FacilityBookingComponent"],
            _components_all_facility_bookings_all_facility_bookings_component__WEBPACK_IMPORTED_MODULE_6__["AllFacilityBookingsComponent"],
            _components_user_facility_calendar_user_facility_calendar_component__WEBPACK_IMPORTED_MODULE_7__["UserFacilityCalendarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _facility_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__["FacilityBookingRoutingModule"]
        ],
        bootstrap: [_facility_booking_component__WEBPACK_IMPORTED_MODULE_5__["FacilityBookingComponent"]]
    })
], FacilityBookingModule);



/***/ })

}]);
//# sourceMappingURL=facility-booking-facility-booking-module-es2015.js.map