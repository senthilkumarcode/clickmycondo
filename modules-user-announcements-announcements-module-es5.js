(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-announcements-announcements-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/announcements/announcements.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/announcements/announcements.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesUserAnnouncementsAnnouncementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"user-announcements-wrapper col-sm-10 col-offset-2 m-auto\">\n  <mat-tab-group dynamicHeight>\n                 <mat-tab label=\"BroadCast Group Based\">\n<div class=\"row\">\n<div class=\"col-3\"> \n    <angular2-multiselect [data]=\"filterGroupCategory.dropdownList\"\n     name=\"groupTypeDropDown\"\n    [(ngModel)]=\"filterGroupCategory.selectedItems\" \n    [settings]=\"groupCategorySetting\"  \n    (onSelect)=\"filterMessages($event,'broadcastGroup')\">\n</angular2-multiselect>\n</div>\n  \n</div>\n                    \n  <ngb-carousel  class=\"mt-5\" >\n      <ng-template ngbSlide *ngFor=\"let broadCastMessage of broadCastBased\">\n          \n        <div class=\"picsum-img-wrapper\">\n            \n          <img [src]=\"imagePath\" alt=\"Random first slide\">\n         \n        </div>\n        <div class=\"carousel-caption1\">\n          <h5> {{broadCastMessage.CategoryName}}</h5>\n        </div>\n        <div class=\"carousel-caption2\"> \n          <h5><b> {{broadCastMessage.subject}}</b> </h5>\n        </div>\n        <div class=\"carousel-caption3\">\n          <h5>Posted By: {{broadCastMessage.UserName}}</h5>\n          </div>\n      </ng-template>\n     </ngb-carousel>\n</mat-tab>\n                          <mat-tab label=\"Interest Group Based \"> \n                              <div class=\"row\">\n                                  <div class=\"col-3 offset-3\"> \n                                 <angular2-multiselect  [data]=\"interestGroupCategory.dropdownList\" \n                                      name=\"interestGroupTypeDropDown\"\n                                      [(ngModel)]=\"interestGroupCategory.selectedItems\" \n                                      [settings]=\"interestGroupCategorySetting\"\n                                      (onSelect)=\"filterMessages($event,'interestGroup')\"\n                                      >\n                                  </angular2-multiselect>\n                                  </div>\n                                  </div>\n                              \n                            <ngb-carousel class=\"mt-5\" >\n                              \n                              <ng-template ngbSlide *ngFor=\"let broadCastMessage of interestGroupBased\">\n                                <div class=\"picsum-img-wrapper\">\n                                  <img [src]=\"imagePath\" alt=\"Random first slide\">\n                                 \n                                </div>\n                                <div class=\"carousel-caption1\">\n                                  <h5> {{broadCastMessage.CategoryName}}</h5>\n                                </div>\n                                <div class=\"carousel-caption2\"> \n                                  <h5><b> {{broadCastMessage.subject}}</b> </h5>\n                                </div>\n                                <div class=\"carousel-caption3\">\n                                  <h5>Posted By: {{broadCastMessage.UserName}}</h5>\n                                  </div>\n                              </ng-template>\n                              \n                            </ngb-carousel> </mat-tab>\n                          \n                         </mat-tab-group> \n  </div>\n\n";
      /***/
    },

    /***/
    "./src/app/modules/user/announcements/announcements-routing.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/user/announcements/announcements-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: AnnouncementsRoutingModule */

    /***/
    function srcAppModulesUserAnnouncementsAnnouncementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/modules/user/announcements/announcements.component.ts");

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
    "./src/app/modules/user/announcements/announcements.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/user/announcements/announcements.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesUserAnnouncementsAnnouncementsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-announcements-wrapper img {\n  width: 100%;\n}\n.user-announcements-wrapper .carousel-caption1 {\n  position: absolute;\n  right: 10%;\n  top: 50px;\n  left: -30%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.user-announcements-wrapper .carousel-caption2 {\n  position: absolute;\n  top: 100px;\n  left: 22%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.user-announcements-wrapper .carousel-caption3 {\n  position: absolute;\n  right: 15%;\n  bottom: 87px;\n  left: 10%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n.user-announcements-wrapper angular2-multiselect .c-btn {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRztFQUNDLFdBQUE7QUFGSjtBQUlFO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBRk47QUFJRTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSE47QUFLRTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFITjtBQUtFO0VBQ0UsdUJBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1hbm5vdW5jZW1lbnRzLXdyYXBwZXJ7XG4gIC8vIG1hcmdpbi1sZWZ0OiAxMDBweDsgXG4gIC8vIG1hcmdpbi1yaWdodDogMTIxcHg7XG4gICBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNhcm91c2VsLWNhcHRpb24xe1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgIHRvcDogNTBweDtcbiAgICAgIGxlZnQ6IC0zMCU7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNhcm91c2VsLWNhcHRpb24ye1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgLy8gcmlnaHQ6IDI2JTtcbiAgICAgIHRvcDogMTAwcHg7XG4gICAgICBsZWZ0OiAyMiU7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNhcm91c2VsLWNhcHRpb24ze1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDE1JTtcbiAgICAgIGJvdHRvbTo4N3B4O1xuICAgICAgbGVmdDogMTAlO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgYW5ndWxhcjItbXVsdGlzZWxlY3QgLmMtYnRuIHtcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50OyBcbiAgICBcbn1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/modules/user/announcements/announcements.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/user/announcements/announcements.component.ts ***!
      \***********************************************************************/

    /*! exports provided: AnnouncementsComponent */

    /***/
    function srcAppModulesUserAnnouncementsAnnouncementsComponentTs(module, __webpack_exports__, __webpack_require__) {
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


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
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

      var AnnouncementsComponent = /*#__PURE__*/function () {
        function AnnouncementsComponent(broadcastService, sessionService, userService) {
          _classCallCheck(this, AnnouncementsComponent);

          this.broadcastService = broadcastService;
          this.sessionService = sessionService;
          this.userService = userService;
          this.imagePath = "assets/images/announcement_background.jpeg";
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
            this.apartmentID = this.sessionService.apartmentId;
            this.loginUserId = parseInt(this.sessionService.userId);
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
              apartmentId: this.sessionService.apartmentId
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
            this.broadcastService.getAllBroadCastGroupCategories(queryParamBase).subscribe(function (res) {
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

            var users$ = this.userService.getAllUsers();
            var allBroadCastmessages$ = users$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (users) {
              _this3.allUser = users;
              var queryParamBase = {
                apartmentId: _this3.sessionService.apartmentId
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
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }, {
          type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      };

      AnnouncementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-announcements',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./announcements.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/announcements/announcements.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./announcements.component.scss */
        "./src/app/modules/user/announcements/announcements.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], AnnouncementsComponent);
      /***/
    },

    /***/
    "./src/app/modules/user/announcements/announcements.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/modules/user/announcements/announcements.module.ts ***!
      \********************************************************************/

    /*! exports provided: AnnouncementsModule */

    /***/
    function srcAppModulesUserAnnouncementsAnnouncementsModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/modules/user/announcements/announcements-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _announcements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./announcements.component */
      "./src/app/modules/user/announcements/announcements.component.ts");
      /* harmony import */


      var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular2-multiselect-dropdown */
      "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");

      var AnnouncementsModule = function AnnouncementsModule() {
        _classCallCheck(this, AnnouncementsModule);
      };

      AnnouncementsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_announcements_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _announcements_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnnouncementsRoutingModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["AngularMultiSelectModule"]]
      })], AnnouncementsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-user-announcements-announcements-module-es5.js.map