function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcements-announcements-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/announcements/announcements.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/announcements/announcements.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserAnnouncementsAnnouncementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"user-announcements-wrapper col-sm-10 col-offset-2 m-auto\">\n  <mat-tab-group dynamicHeight>\n                 <mat-tab label=\"BroadCast Group Based\">\n<div class=\"row\">\n<div class=\"col-3\"> \n    <angular2-multiselect [data]=\"filterGroupCategory.dropdownList\"\n     name=\"groupTypeDropDown\"\n    [(ngModel)]=\"filterGroupCategory.selectedItems\" \n    [settings]=\"groupCategorySetting\"  \n    (onSelect)=\"filterMessages($event,'broadcastGroup')\">\n</angular2-multiselect>\n</div>\n  \n</div>\n                    \n  <ngb-carousel  class=\"mt-5\" >\n      <ng-template ngbSlide *ngFor=\"let broadCastMessage of broadCastBased\">\n          \n        <div class=\"picsum-img-wrapper\">\n            \n          <img [src]=\"imagePath\" alt=\"Random first slide\">\n         \n        </div>\n        <div class=\"carousel-caption1\">\n          <h5> {{broadCastMessage.CategoryName}}</h5>\n        </div>\n        <div class=\"carousel-caption2\"> \n          <h5><b> {{broadCastMessage.subject}}</b> </h5>\n        </div>\n        <div class=\"carousel-caption3\">\n          <h5>Posted By: {{broadCastMessage.UserName}}</h5>\n          </div>\n      </ng-template>\n     </ngb-carousel>\n</mat-tab>\n                          <mat-tab label=\"Interest Group Based \"> \n                              <div class=\"row\">\n                                  <div class=\"col-3 offset-3\"> \n                                 <angular2-multiselect  [data]=\"interestGroupCategory.dropdownList\" \n                                      name=\"interestGroupTypeDropDown\"\n                                      [(ngModel)]=\"interestGroupCategory.selectedItems\" \n                                      [settings]=\"interestGroupCategorySetting\"\n                                      (onSelect)=\"filterMessages($event,'interestGroup')\"\n                                      >\n                                  </angular2-multiselect>\n                                  </div>\n                                  </div>\n                              \n                            <ngb-carousel class=\"mt-5\" >\n                              \n                              <ng-template ngbSlide *ngFor=\"let broadCastMessage of interestGroupBased\">\n                                <div class=\"picsum-img-wrapper\">\n                                  <img [src]=\"imagePath\" alt=\"Random first slide\">\n                                 \n                                </div>\n                                <div class=\"carousel-caption1\">\n                                  <h5> {{broadCastMessage.CategoryName}}</h5>\n                                </div>\n                                <div class=\"carousel-caption2\"> \n                                  <h5><b> {{broadCastMessage.subject}}</b> </h5>\n                                </div>\n                                <div class=\"carousel-caption3\">\n                                  <h5>Posted By: {{broadCastMessage.UserName}}</h5>\n                                  </div>\n                              </ng-template>\n                              \n                            </ngb-carousel> </mat-tab>\n                          \n                         </mat-tab-group> \n  </div>\n\n";
    /***/
  },

  /***/
  "./src/app/user/announcements/announcements-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/user/announcements/announcements-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: AnnouncementsRoutingModule */

  /***/
  function srcAppUserAnnouncementsAnnouncementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementsRoutingModule", function () {
      return AnnouncementsRoutingModule;
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


    var _announcements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./announcements.component */
    "./src/app/user/announcements/announcements.component.ts");

    var routes = [{
      path: '',
      component: _announcements_component__WEBPACK_IMPORTED_MODULE_3__["AnnouncementsComponent"]
    }, {
      path: 'announcement',
      component: _announcements_component__WEBPACK_IMPORTED_MODULE_3__["AnnouncementsComponent"]
    }];

    var AnnouncementsRoutingModule = function AnnouncementsRoutingModule() {
      _classCallCheck(this, AnnouncementsRoutingModule);
    };

    AnnouncementsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AnnouncementsRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/announcements/announcements.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/user/announcements/announcements.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserAnnouncementsAnnouncementsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-announcements-wrapper img {\n  width: 100%;\n}\n.user-announcements-wrapper .carousel-caption1 {\n  position: absolute;\n  right: 10%;\n  top: 50px;\n  left: -30%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.user-announcements-wrapper .carousel-caption2 {\n  position: absolute;\n  top: 100px;\n  left: 22%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.user-announcements-wrapper .carousel-caption3 {\n  position: absolute;\n  right: 15%;\n  bottom: 87px;\n  left: 10%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n.user-announcements-wrapper angular2-multiselect .c-btn {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC91c2VyL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0c7RUFDQyxXQUFBO0FDRko7QURJRTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FESUU7RUFDSSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0hOO0FES0U7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSE47QURLRTtFQUNFLHVCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC91c2VyL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWFubm91bmNlbWVudHMtd3JhcHBlcntcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwMHB4OyBcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxMjFweDtcbiAgIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY2Fyb3VzZWwtY2FwdGlvbjF7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTAlO1xuICAgICAgdG9wOiA1MHB4O1xuICAgICAgbGVmdDogLTMwJTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY2Fyb3VzZWwtY2FwdGlvbjJ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAvLyByaWdodDogMjYlO1xuICAgICAgdG9wOiAxMDBweDtcbiAgICAgIGxlZnQ6IDIyJTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY2Fyb3VzZWwtY2FwdGlvbjN7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTUlO1xuICAgICAgYm90dG9tOjg3cHg7XG4gICAgICBsZWZ0OiAxMCU7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBhbmd1bGFyMi1tdWx0aXNlbGVjdCAuYy1idG4ge1xuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7IFxuICAgIFxufVxufSIsIi51c2VyLWFubm91bmNlbWVudHMtd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi51c2VyLWFubm91bmNlbWVudHMtd3JhcHBlciAuY2Fyb3VzZWwtY2FwdGlvbjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMCU7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogLTMwJTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItYW5ub3VuY2VtZW50cy13cmFwcGVyIC5jYXJvdXNlbC1jYXB0aW9uMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogMjIlO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1hbm5vdW5jZW1lbnRzLXdyYXBwZXIgLmNhcm91c2VsLWNhcHRpb24zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUlO1xuICBib3R0b206IDg3cHg7XG4gIGxlZnQ6IDEwJTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyLWFubm91bmNlbWVudHMtd3JhcHBlciBhbmd1bGFyMi1tdWx0aXNlbGVjdCAuYy1idG4ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/announcements/announcements.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/user/announcements/announcements.component.ts ***!
    \***************************************************************/

  /*! exports provided: AnnouncementsComponent */

  /***/
  function srcAppUserAnnouncementsAnnouncementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementsComponent", function () {
      return AnnouncementsComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
    /* harmony import */


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AnnouncementsComponent =
    /*#__PURE__*/
    function () {
      function AnnouncementsComponent(broadcastService, cookieService, userService) {
        _classCallCheck(this, AnnouncementsComponent);

        this.broadcastService = broadcastService;
        this.cookieService = cookieService;
        this.userService = userService;
        this.imagePath = "../../../../../assets/images/announcement_background.jpeg";
        this.filterGroupCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.interestGroupCategory = {
          "dropdownList": [],
          "selectedItems": []
        }; //this.modalService = this.injector.get(ModalService);
      }

      _createClass(AnnouncementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
          this.loginUserId = parseInt(this.cookieService.get('userId'));
          this.getAllCategory();
          this.getAllGroupCategory();
          this.getAllBroadcastMessage();
          this.groupCategorySetting = {
            singleSelection: true,
            labelKey: 'name',
            primaryKey: 'value',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.interestGroupCategorySetting = {
            singleSelection: true,
            labelKey: 'name',
            primaryKey: 'value',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.filterGroupCategory.dropdownList = [{
            name: "today",
            value: 0
          }, {
            name: "yesterday",
            value: 1
          }, {
            name: "Past Week",
            value: 7
          }, {
            name: "Past 2 Week",
            value: 14
          }];
          this.interestGroupCategory.dropdownList = [{
            name: "today",
            value: 0
          }, {
            name: "yesterday",
            value: 1
          }, {
            name: "Past Week",
            value: 7
          }, {
            name: "Past 2 Week",
            value: 14
          }];
          this.filterGroupCategory.selectedItems = [{
            name: "today",
            value: 0
          }];
          this.interestGroupCategory.selectedItems = [{
            name: "today",
            value: 0
          }];
        } //Get All Category

      }, {
        key: "getAllCategory",
        value: function getAllCategory() {
          var _this = this;

          var queryParamBase = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.broadcastService.getBroadCastMessageCategories(queryParamBase).subscribe(function (res) {
            _this.allCategory = res;
          });
        }
      }, {
        key: "getAllGroupCategory",
        value: function getAllGroupCategory() {
          var _this2 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getAllBroadCastGroupCategory(queryParamBase).subscribe(function (res) {
            _this2.broadCastGroupCategory = res;
          });
        }
      }, {
        key: "getGroupCategoryName",
        value: function getGroupCategoryName(groupcategoryId) {
          var groupcategory = this.broadCastGroupCategory.filter(function (obj) {
            return obj.broadCastGroupCategoryId == groupcategoryId;
          });
          return groupcategory[0].groupName;
        }
      }, {
        key: "getCategoryName",
        value: function getCategoryName(name) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_5__["filter"](this.allCategory, function (item) {
            if (item.broadCastMessageCategoryId === name) return item;
          });

          if (data === undefined || data === null || data.length == 0) {
            return '';
          } else {
            return data[0].broadCastMessageCategory1;
          }
        }
      }, {
        key: "getBroadcastGroupCategory",
        value: function getBroadcastGroupCategory(item) {}
      }, {
        key: "getUserName",
        value: function getUserName(name) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_5__["filter"](this.allUser, function (item) {
            if (item.userId === name) return item;
          });

          if (data === undefined || data === null || data.length == 0) {
            return '';
          } else {
            return data[0].firstName;
          }
        }
      }, {
        key: "getAllBroadcastMessage",
        value: function getAllBroadcastMessage() {
          var _this3 = this;

          var apartmentId = parseInt(this.cookieService.get('apartmentId'));
          var users$ = this.userService.getAllUsers();
          var allBroadCastmessages$ = users$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (users) {
            _this3.allUser = users;
            var queryParamBase = {
              apartmentId: parseInt(_this3.cookieService.get('apartmentId'))
            };
            return _this3.broadcastService.getAllBroadcastMessages(queryParamBase);
          }));
          allBroadCastmessages$.subscribe(function (res) {
            _this3.broadCastMessages = res;

            _this3.broadCastMessages.forEach(function (element) {
              if (element.broadCastGroupcategoryId == null) {
                element.CategoryName = _this3.getCategoryName(element.broadcastMessageCategoryId);
              } else {
                element.CategoryName = _this3.getGroupCategoryName(element.broadCastGroupcategoryId);
              }

              element.UserName = _this3.getUserName(element.broadcastBy);
            });

            _this3.filterMessages({
              name: "today",
              value: 0
            }, "interestGroup");

            _this3.filterMessages({
              name: "today",
              value: 0
            }, "broadcastGroup");
          });
        }
      }, {
        key: "getDate",
        value: function getDate(inDays) {
          var today = new Date();
          return new Date(today.getFullYear(), today.getMonth(), today.getDate() + inDays * -1);
        }
      }, {
        key: "filterMessages",
        value: function filterMessages(item, messageType) {
          var numberOfDays = item.value;
          var current = new Date();
          var previousDate = this.getDate(numberOfDays);
          var loginUserId = this.loginUserId;

          if (messageType == "interestGroup") {
            this.interestGroupBased = this.broadCastMessages.filter(function (obj) {
              return obj.broadCastGroupcategoryId != null && current > new Date(Date.parse(obj.broadcastOn)) && previousDate < new Date(Date.parse(obj.broadcastOn)) && obj.userIds.split(',').includes(loginUserId.toString());
            });

            if (this.interestGroupBased.length == 0) {
              this.interestGroupBased = [{}];
            }
          }

          if (messageType == "broadcastGroup") {
            this.broadCastBased = this.broadCastMessages.filter(function (obj) {
              return obj.broadCastGroupcategoryId == null && current > new Date(Date.parse(obj.broadcastOn)) && previousDate < new Date(Date.parse(obj.broadcastOn)) && obj.userIds.split(',').includes(loginUserId.toString());
            });

            if (this.broadCastBased.length == 0) {
              this.broadCastBased = [{}];
            }
          }
        }
      }]);

      return AnnouncementsComponent;
    }();

    AnnouncementsComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    AnnouncementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-announcements',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./announcements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/announcements/announcements.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./announcements.component.scss */
      "./src/app/user/announcements/announcements.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], AnnouncementsComponent);
    /***/
  },

  /***/
  "./src/app/user/announcements/announcements.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/user/announcements/announcements.module.ts ***!
    \************************************************************/

  /*! exports provided: AnnouncementsModule */

  /***/
  function srcAppUserAnnouncementsAnnouncementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementsModule", function () {
      return AnnouncementsModule;
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


    var _announcements_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./announcements-routing.module */
    "./src/app/user/announcements/announcements-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _announcements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./announcements.component */
    "./src/app/user/announcements/announcements.component.ts");
    /* harmony import */


    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-multiselect-dropdown */
    "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");

    var AnnouncementsModule = function AnnouncementsModule() {
      _classCallCheck(this, AnnouncementsModule);
    };

    AnnouncementsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_announcements_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _announcements_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnnouncementsRoutingModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["AngularMultiSelectModule"]]
    })], AnnouncementsModule);
    /***/
  }
}]);
//# sourceMappingURL=announcements-announcements-module-es5.js.map