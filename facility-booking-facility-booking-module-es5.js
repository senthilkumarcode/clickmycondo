function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facility-booking-facility-booking-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFacilityBookingComponentsAllFacilityBookingsAllFacilityBookingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"all-facility-bookings-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isBookingDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isBookingDataLoaded\">\n\t\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Bookings <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bookingData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/user/facility-booking/create-booking\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Booking</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n  \t\t\t\n\t  \t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('facilityId')\">Booking ID <span [ngClass]=\"getFieldOrderBy('facilityId')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('facilityName')\">Facility Name <span [ngClass]=\"getFieldOrderBy('facilityName')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('facilityName')\">Facility Location <span [ngClass]=\"getFieldOrderBy('facilityName')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('slot')\">Slot<span [ngClass]=\"getFieldOrderBy('slot')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('date')\">Booked For <span [ngClass]=\"getFieldOrderBy('Date')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('cost')\">Cost <span [ngClass]=\"getFieldOrderBy('cost')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('facilityBookingStatus')\">Status<span  [ngClass]=\"getFieldOrderBy('facilityBookingStatus')\"></span>\n\t\t\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Action</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t    <tr *ngFor=\"let booking of bookingListData | simpleSearch: bookingData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t\t \n\t\t\t\t  \t  <td class=\"name\">{{booking.apartmentFacilityBookingId}}</td>\n\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t      {{getFacilityBookingName(booking.apartmentFacilityId)}}\n\t\t\t\t      <span class=\"badge small min text-capitalize\" [ngClass]=\"getBookingStatus(booking.facilityBookingStatusId)\">{{getBookingStatus(booking.facilityBookingStatusId)}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t{{getFacilityBookingName(booking.apartmentBlockID)}}\n\t\t\t\t\t\t\t<span class=\"badge small min text-capitalize\" [ngClass]=\"getBookingStatus(booking.apartmentBlockID)\">{{getBookingStatus(booking.apartmentBlockID)}}</span>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t      <td class=\"grey\">{{getFacilityBookingSlot(booking.slotId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBookedDate(booking.bookedForDate)}}</td>\n\t\t\t\t      <td class=\"grey\">\n\t\t\t\t      \t<span *ngIf=\"booking.amount>0\">{{booking.amount}}</span>\n\t\t\t\t      \t<span *ngIf=\"booking.amount==0\">Free</span>\n\t\t\t\t\t  </td>\n\t\t\t\t\t  <td class=\"grey\"><span class=\"badge small min text-capitalize\" [ngClass]=\"getBookingStatus(booking, booking.facilityBookingStatusId)\">{{getBookingStatus(booking, booking.facilityBookingStatusId)}}</span></td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\"\n\t\t\t\t      \trouterLink=\"/ams/facility/edit-booking/{{booking.apartmentFacilityBookingId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(booking)\"><i class=\"fa fa-close\"></i></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t\t    <tr *ngIf=\"isNoItems\"><td colspan=\"6\" class=\"grey text-center\">\n\t\t\t\t    <p class=\"message\">No Items available</p>\n\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t    </tbody>\n\n  \t\t\t</table>\n\n  \t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFacilityBookingComponentsUserFacilityCalendarUserFacilityCalendarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"full-calendar-wrapper\">\n\n  <app-loader *ngIf=\"!isCalenderLoaded\"></app-loader>\n\n  <ng-container *ngIf=\"isCalenderLoaded\">\n    \n    <full-calendar\n      defaultView=\"dayGridMonth\"\n      [plugins]=\"calendarPlugins\"\n      (eventClick)=\"handleEventClick($event)\"\n      [header] =\"{\n      left:   'today, prev,next',\n      center: 'title',\n      right:  'dayGridDay,dayGridWeek,dayGridMonth'}\"\n      [events]=\"calendarEvents\"></full-calendar>\n\n  </ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/facility-booking.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/facility-booking.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFacilityBookingFacilityBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.scss":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFacilityBookingComponentsAllFacilityBookingsAllFacilityBookingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZmFjaWxpdHktYm9va2luZy9jb21wb25lbnRzL2FsbC1mYWNpbGl0eS1ib29raW5ncy9hbGwtZmFjaWxpdHktYm9va2luZ3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: AllFacilityBookingsComponent */

  /***/
  function srcAppUserFacilityBookingComponentsAllFacilityBookingsAllFacilityBookingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllFacilityBookingsComponent", function () {
      return AllFacilityBookingsComponent;
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


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/facility.service */
    "./src/app/api/services/facility.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var AllFacilityBookingsComponent =
    /*#__PURE__*/
    function () {
      function AllFacilityBookingsComponent(router, route, injector, userService, facilityService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, AllFacilityBookingsComponent);

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

      _createClass(AllFacilityBookingsComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "getFacilityBookingName",
        value: function getFacilityBookingName(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.facilityCategoryData, function (item) {
            if (item.apartmentFacilityId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].facilityName;
          }
        }
      }, {
        key: "getFacilityBookingSlot",
        value: function getFacilityBookingSlot(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.facilitySlotData, function (item) {
            if (item.apartmentFacilitySlotId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            var beginTime = moment__WEBPACK_IMPORTED_MODULE_10__(data[0].slotBeginTime, 'HH:mm:ss').toDate();
            var slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_10__(beginTime).format('HH:mm A');
            var EndTime = moment__WEBPACK_IMPORTED_MODULE_10__(data[0].slotEndTime, 'HH:mm:ss').toDate();
            var slotEndTime = moment__WEBPACK_IMPORTED_MODULE_10__(EndTime).format('HH:mm A');
            return slotBeginTime + " - " + slotEndTime;
          }
        }
      }, {
        key: "getBookedDate",
        value: function getBookedDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "getUserName",
        value: function getUserName(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.userListData, function (item) {
            if (item.userId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].firstName;
          }
        }
      }, {
        key: "getBookingStatus",
        value: function getBookingStatus(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.statusTypeData, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "onSelectChange",
        value: function onSelectChange(event, type, name) {
          if (!underscore__WEBPACK_IMPORTED_MODULE_9__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(index) {
          this.modalService.showBookingCancelConfirmModal(index);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.facilityService.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this.facilityCategoryData = res.filter(function (item) {
              return item.isActive;
            });
            console.log(_this.facilityCategoryData);
          }, function (error) {}); //status 

          this.lookupService.getLookupValueByLookupTypeId(40).subscribe(function (res) {
            _this.statusTypeData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
          this.facilityService.getApartmentFacilitySlotsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this.facilitySlotData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
          this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this.userListData = res.filter(function (data) {
              return data.isActive;
            });
          }, function (error) {});
          this.facilityService.getApartmentFacilityBookingsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            console.log(_this.cookieService.get('apartmentId')); //filter active true items and booking related this user

            _this.bookingListData = res.filter(function (data) {
              return data.isActive && data.neededUserId == parseInt(_this.cookieService.get('userId'));
            });

            if (_this.bookingListData.length == 0 || _this.bookingListData == undefined) {
              _this.isNoItems = true;
            }

            _this.totalItems = _this.bookingListData.length;

            if (_this.totalItems > _this.itemLimit) {
              _this.ItemEndIndex = _this.itemLimit;
            } else {
              _this.ItemEndIndex = _this.totalItems;
            }

            _this.isBookingDataLoaded = true;
          }, function (error) {}); // delete booking

          this.sharedService.unitlistdeleteindexcast.subscribe(function (index) {
            if (index != null) {
              var params = {
                apartmentFacilityBookingId: _this.bookingListData[index].apartmentFacilityBookingId,
                deleteBy: parseInt(_this.cookieService.get('userId'))
              };
              _this.isBookingDataLoaded = false;

              _this.facilityService.deleteApartmentFacilityBooking(params).subscribe(function (res) {
                _this.bookingListData.splice(index, 1);

                _this.totalItems = _this.bookingListData.length;
                _this.isBookingDataLoaded = true;

                _this.sharedService.setUnitListDeleteIndex(null);
              }, function (error) {
                console.log(error);
              });
            }
          });
          console.log(this.bookingListData);
        }
      }]);

      return AllFacilityBookingsComponent;
    }();

    AllFacilityBookingsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_facility_service__WEBPACK_IMPORTED_MODULE_4__["FacilityService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    AllFacilityBookingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-facility-bookings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./all-facility-bookings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./all-facility-bookings.component.scss */
      "./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_facility_service__WEBPACK_IMPORTED_MODULE_4__["FacilityService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], AllFacilityBookingsComponent);
    /***/
  },

  /***/
  "./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.scss":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.scss ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFacilityBookingComponentsUserFacilityCalendarUserFacilityCalendarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZmFjaWxpdHktYm9va2luZy9jb21wb25lbnRzL3VzZXItZmFjaWxpdHktY2FsZW5kYXIvdXNlci1mYWNpbGl0eS1jYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: UserFacilityCalendarComponent */

  /***/
  function srcAppUserFacilityBookingComponentsUserFacilityCalendarUserFacilityCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFacilityCalendarComponent", function () {
      return UserFacilityCalendarComponent;
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


    var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/facility.service */
    "./src/app/api/services/facility.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fullcalendar/daygrid */
    "./node_modules/@fullcalendar/daygrid/main.esm.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var UserFacilityCalendarComponent =
    /*#__PURE__*/
    function () {
      function UserFacilityCalendarComponent(router, route, facilityService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, UserFacilityCalendarComponent);

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

      _createClass(UserFacilityCalendarComponent, [{
        key: "handleEventClick",
        value: function handleEventClick(arg) {
          var id = arg.event.id;
          this.router.navigate(['/user/facility-booking/edit-booking', id]);
        }
      }, {
        key: "getFacilityBookingData",
        value: function getFacilityBookingData() {
          var _this2 = this;

          this.facilityService.getApartmentFacilitySlotsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this2.facilitySlotData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
          this.facilityService.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this2.facilityCategoryData = res.filter(function (item) {
              return item.isActive;
            });

            _this2.facilityService.getApartmentFacilityBookingsByApartmentId(parseInt(_this2.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this2.facilityBookingData = res.filter(function (item) {
                return item.isActive && item.neededUserId == parseInt(_this2.cookieService.get('userId'));
              });
              underscore__WEBPACK_IMPORTED_MODULE_9__["each"](_this2.facilityBookingData, function (booking) {
                var date = moment__WEBPACK_IMPORTED_MODULE_8__(booking.bookedForDate).format("YYYY-MM-DD");

                var nameItem = _this2.facilityCategoryData.filter(function (item) {
                  return item.apartmentFacilityId == booking.apartmentFacilityId;
                });

                var slotData = _this2.facilitySlotData.filter(function (item) {
                  return item.apartmentFacilitySlotId == booking.slotId;
                });

                var beginTime = moment__WEBPACK_IMPORTED_MODULE_8__(slotData[0].slotBeginTime, 'HH:mm:ss').toDate();
                var slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_8__(beginTime).format('HH:mm A');
                var EndTime = moment__WEBPACK_IMPORTED_MODULE_8__(slotData[0].slotEndTime, 'HH:mm:ss').toDate();
                var slotEndTime = moment__WEBPACK_IMPORTED_MODULE_8__(EndTime).format('HH:mm A');
                var event = nameItem[0].facilityName + " ( " + slotBeginTime + "-" + slotEndTime + " ) ";

                _this2.calendarEvents.push({
                  title: event,
                  date: date,
                  id: nameItem[0].apartmentFacilityId
                });

                _this2.isCalenderLoaded = true;
              });
            }, function (error) {});
          }, function (error) {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFacilityBookingData();
        }
      }]);

      return UserFacilityCalendarComponent;
    }();

    UserFacilityCalendarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    UserFacilityCalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-facility-calendar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-facility-calendar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-facility-calendar.component.scss */
      "./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], UserFacilityCalendarComponent);
    /***/
  },

  /***/
  "./src/app/user/facility-booking/facility-booking-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/user/facility-booking/facility-booking-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: FacilityBookingRoutingModule */

  /***/
  function srcAppUserFacilityBookingFacilityBookingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityBookingRoutingModule", function () {
      return FacilityBookingRoutingModule;
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


    var _components_all_facility_bookings_all_facility_bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/all-facility-bookings/all-facility-bookings.component */
    "./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.ts");
    /* harmony import */


    var _components_user_facility_calendar_user_facility_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/user-facility-calendar/user-facility-calendar.component */
    "./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.ts");
    /* harmony import */


    var _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/components/facility-create-booking/facility-create-booking.component */
    "./src/app/shared/components/facility-create-booking/facility-create-booking.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'all-bookings',
      pathMatch: 'full'
    }, {
      path: 'all-bookings',
      component: _components_all_facility_bookings_all_facility_bookings_component__WEBPACK_IMPORTED_MODULE_3__["AllFacilityBookingsComponent"]
    }, {
      path: 'create-booking',
      component: _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_5__["FacilityCreateBookingComponent"]
    }, {
      path: 'edit-booking/:id',
      component: _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_5__["FacilityCreateBookingComponent"]
    }, {
      path: 'calendar',
      component: _components_user_facility_calendar_user_facility_calendar_component__WEBPACK_IMPORTED_MODULE_4__["UserFacilityCalendarComponent"]
    }, {
      path: '**',
      redirectTo: 'all-bookings',
      pathMatch: 'full'
    }];

    var FacilityBookingRoutingModule = function FacilityBookingRoutingModule() {
      _classCallCheck(this, FacilityBookingRoutingModule);
    };

    FacilityBookingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FacilityBookingRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/facility-booking/facility-booking.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/user/facility-booking/facility-booking.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFacilityBookingFacilityBookingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZmFjaWxpdHktYm9va2luZy9mYWNpbGl0eS1ib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/facility-booking/facility-booking.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/user/facility-booking/facility-booking.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FacilityBookingComponent */

  /***/
  function srcAppUserFacilityBookingFacilityBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityBookingComponent", function () {
      return FacilityBookingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FacilityBookingComponent =
    /*#__PURE__*/
    function () {
      function FacilityBookingComponent() {
        _classCallCheck(this, FacilityBookingComponent);
      }

      _createClass(FacilityBookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FacilityBookingComponent;
    }();

    FacilityBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facility-booking',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./facility-booking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/facility-booking/facility-booking.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./facility-booking.component.scss */
      "./src/app/user/facility-booking/facility-booking.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FacilityBookingComponent);
    /***/
  },

  /***/
  "./src/app/user/facility-booking/facility-booking.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/user/facility-booking/facility-booking.module.ts ***!
    \******************************************************************/

  /*! exports provided: FacilityBookingModule */

  /***/
  function srcAppUserFacilityBookingFacilityBookingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityBookingModule", function () {
      return FacilityBookingModule;
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


    var _facility_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./facility-booking-routing.module */
    "./src/app/user/facility-booking/facility-booking-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _facility_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./facility-booking.component */
    "./src/app/user/facility-booking/facility-booking.component.ts");
    /* harmony import */


    var _components_all_facility_bookings_all_facility_bookings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/all-facility-bookings/all-facility-bookings.component */
    "./src/app/user/facility-booking/components/all-facility-bookings/all-facility-bookings.component.ts");
    /* harmony import */


    var _components_user_facility_calendar_user_facility_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/user-facility-calendar/user-facility-calendar.component */
    "./src/app/user/facility-booking/components/user-facility-calendar/user-facility-calendar.component.ts");

    var FacilityBookingModule = function FacilityBookingModule() {
      _classCallCheck(this, FacilityBookingModule);
    };

    FacilityBookingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_facility_booking_component__WEBPACK_IMPORTED_MODULE_5__["FacilityBookingComponent"], _components_all_facility_bookings_all_facility_bookings_component__WEBPACK_IMPORTED_MODULE_6__["AllFacilityBookingsComponent"], _components_user_facility_calendar_user_facility_calendar_component__WEBPACK_IMPORTED_MODULE_7__["UserFacilityCalendarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _facility_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__["FacilityBookingRoutingModule"]],
      bootstrap: [_facility_booking_component__WEBPACK_IMPORTED_MODULE_5__["FacilityBookingComponent"]]
    })], FacilityBookingModule);
    /***/
  }
}]);
//# sourceMappingURL=facility-booking-facility-booking-module-es5.js.map