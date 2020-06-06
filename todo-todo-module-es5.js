function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-todo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create/todo-create.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create/todo-create.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsTodoTodoCreateTodoCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<jqxScheduler #scheduler\n    [width]=\"getWidth()\" [height]=\"600\"\n    [date]=\"date\"\n    [source]=\"dataAdapter\"\n    [showLegend]=\"true\"\n    [dayNameFormat]=\"'abbr'\"\n    [resources]=\"resources\"\n    [view]=\"'timelineWeekView'\"\n    [views]=\"views\"\n    [appointmentDataFields]=\"appointmentDataFields\">\n</jqxScheduler>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-history/todo-history.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-history/todo-history.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsTodoTodoHistoryTodoHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>TODO History</h5>\n              <p class=\"d-none d-md-inline-block\">.........</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"todoList\" [columns]=\"todoListHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-list/todo-list.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-list/todo-list.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsTodoTodoListTodoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>TODO List</h5>\n              <p class=\"d-none d-md-inline-block\">.........</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <mat-card class=\"todoList\" *ngFor=\"let item of ['','','']\"   >\n                <div class=\"w-10\">\n                    <input type=\"checkbox\" class=\"form-check-input\" id=\"\" name=\"\" checked >\n                    <label class=\"form-check-label tiny\" for=\"\"></label>\n                </div>\n                <!-- <div class=\"w-10\" >101</div> -->\n                <div class=\"w-20\">Association Meeting</div>\n                <div class=\"w-10\">Meeting</div>\n                <div class=\"w-20\">Meenitng on Audit A</div>\n                <div class=\"w-10\">06/04/2020</div>\n                <div class=\"w-20\">\n                    <div class=\"stepper\" *ngFor=\"let item of stepperList\">\n                        <span [style.backgroundColor]=\"item.isActive ? item.color : '#dadada'\" >\n                        </span>\n                        <pre [style.backgroundColor]=\"item.isActive ? item.color : '#dadada'\"></pre>\n                    </div>\n                </div>\n                <div class=\"w-10\">   \n                    <span class=\"inProgress\" >\n                        In Progress\n                    </span>\n                </div>\n            </mat-card>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-reminder/todo-reminder.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-reminder/todo-reminder.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsTodoTodoReminderTodoReminderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>TODO Reminder</h5>\n              <p class=\"d-none d-md-inline-block\">.........</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n            </ul>\n        </div>\n\n    </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6  mt-12\" *ngFor=\"let product of products\">\n        <mat-card class=\"reminder\">\n            <!-- <span>\n                    <span *ngFor=\"let star of stars\" [class.mat-text-default]=\"star <= product.rating\" class=\"mat-text-muted\">&#9733;</span>\n                  </span> -->\n            <!-- <input type=\"checkbox\" class=\"form-check-input\" id=\"\" name=\"\" checked>\n            <label class=\"form-check-label tiny\" for=\"\"></label> -->\n            <p>1001</p>\n            <p>Meeting</p>\n            <p class=\"reminder-title\">Association Meeting</p>\n            <span class=\"mt-12\">Meeting Would Start at 9PM......................</span>\n            <mat-card-actions>\n                <button mat-button color=\"primary\">Completed</button>\n              </mat-card-actions>\n        </mat-card>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/ams/todo/todo-create/todo-create.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/ams/todo/todo-create/todo-create.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsTodoTodoCreateTodoCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8tY3JlYXRlL3RvZG8tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/todo/todo-create/todo-create.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ams/todo/todo-create/todo-create.component.ts ***!
    \***************************************************************/

  /*! exports provided: TodoCreateComponent */

  /***/
  function srcAppAmsTodoTodoCreateTodoCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoCreateComponent", function () {
      return TodoCreateComponent;
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


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxscheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler.ts");
    /* harmony import */


    var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Facility */
    "./src/app/api/controllers/Facility.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

    var TodoCreateComponent =
    /*#__PURE__*/
    function () {
      function TodoCreateComponent(facilityService, cookieService) {
        _classCallCheck(this, TodoCreateComponent);

        this.facilityService = facilityService;
        this.cookieService = cookieService;
        this.date = new jqx.date(new Date());
        this.source = {
          dataType: 'array',
          dataFields: [{
            name: 'id',
            type: 'string'
          }, {
            name: 'description',
            type: 'string'
          }, {
            name: 'location',
            type: 'string'
          }, {
            name: 'subject',
            type: 'string'
          }, {
            name: 'calendar',
            type: 'string'
          }, {
            name: 'start',
            type: 'date'
          }, {
            name: 'end',
            type: 'date'
          }],
          id: 'id'
        };
        this.resources = {
          colorScheme: 'scheme04',
          dataField: 'calendar',
          orientation: 'vertical'
        };
        this.appointmentDataFields = {
          from: 'start',
          to: 'end',
          id: 'id',
          description: 'description',
          location: 'place',
          subject: 'subject',
          resourceId: 'calendar'
        };
        this.views = [{
          type: 'timelineDayView',
          appointmentHeight: 30
        }, {
          type: 'timelineWeekView',
          appointmentHeight: 30
        }, {
          type: 'timelineMonthView',
          appointmentHeight: 30
        }];
      }

      _createClass(TodoCreateComponent, [{
        key: "getWidth",
        value: function getWidth() {
          if (document.body.offsetWidth < 850) {
            return '90%';
          }

          return 1000;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var slot = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.facilityService.getApartmentFacilitySlotsByApartmentId(slot).subscribe(function (res) {
            _this.facilitySlotData = res.filter(function (item) {
              return item.isActive;
            });
          });
          var categoryParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.facilityService.getApartmentFacilitiesByApartmentId(categoryParams).subscribe(function (res) {
            var facilityCategoryData = res.filter(function (item) {
              return item.isActive;
            });
            var bookingParams = {
              apartmentId: parseInt(_this.cookieService.get('apartmentId'))
            };

            _this.facilityService.getApartmentFacilityBookingsByApartmentId(bookingParams).subscribe(function (res) {
              var facilityBookingData = res.filter(function (item) {
                return item.isActive;
              });
              var calenderData = [];
              var room = 0;
              facilityBookingData.forEach(function (booking) {
                var nameItem = facilityCategoryData.filter(function (item) {
                  return item.apartmentFacilityId == booking.apartmentFacilityId;
                });

                var slotData = _this.facilitySlotData.filter(function (item) {
                  return item.apartmentFacilitySlotId == booking.slotId;
                });

                if (slotData.length > 0 && nameItem.length > 0) {
                  room = room + 1;
                  var year = moment__WEBPACK_IMPORTED_MODULE_5__(booking.bookedForDate).year();
                  var month = moment__WEBPACK_IMPORTED_MODULE_5__(booking.bookedForDate).month();
                  var date = moment__WEBPACK_IMPORTED_MODULE_5__(booking.bookedForDate).date();
                  var day = moment__WEBPACK_IMPORTED_MODULE_5__(booking.bookedForDate).day();
                  var startHours = moment__WEBPACK_IMPORTED_MODULE_5__(slotData[0].slotBeginTime, 'hh:mm:ss').hour();
                  var startMin = moment__WEBPACK_IMPORTED_MODULE_5__(slotData[0].slotBeginTime, 'hh:mm:ss').minute();
                  var endHours = moment__WEBPACK_IMPORTED_MODULE_5__(slotData[0].slotEndTime, 'hh:mm:ss').hour();
                  var endMin = moment__WEBPACK_IMPORTED_MODULE_5__(slotData[0].slotEndTime, 'hh:mm:ss').minute();
                  var entity = {
                    id: booking.apartmentFacilityBookingId,
                    description: '',
                    location: '',
                    subject: nameItem[0].facilityName,
                    calendar: "Rooms 1",
                    start: new Date(year, month, date, startHours, startMin),
                    end: new Date(year, month, date, endHours, endMin)
                  };
                  calenderData.push(entity);
                }
              });
              _this.source.localdata = calenderData;
              _this.dataAdapter = new jqx.dataAdapter(_this.source);
              _this.resources.source = new jqx.dataAdapter(_this.source);
            });
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.myScheduler.ensureAppointmentVisible('id2');
        }
      }]);

      return TodoCreateComponent;
    }();

    TodoCreateComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduler', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxscheduler__WEBPACK_IMPORTED_MODULE_2__["jqxSchedulerComponent"])], TodoCreateComponent.prototype, "myScheduler", void 0);
    TodoCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./todo-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create/todo-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./todo-create.component.scss */
      "./src/app/ams/todo/todo-create/todo-create.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], TodoCreateComponent);
    /***/
  },

  /***/
  "./src/app/ams/todo/todo-history/todo-history.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/ams/todo/todo-history/todo-history.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsTodoTodoHistoryTodoHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8taGlzdG9yeS90b2RvLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/todo/todo-history/todo-history.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ams/todo/todo-history/todo-history.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TodoHistoryComponent */

  /***/
  function srcAppAmsTodoTodoHistoryTodoHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoHistoryComponent", function () {
      return TodoHistoryComponent;
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


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

    var TodoHistoryComponent =
    /*#__PURE__*/
    function () {
      function TodoHistoryComponent() {
        _classCallCheck(this, TodoHistoryComponent);
      }

      _createClass(TodoHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
            return '<div style="padding: 14px">' + value + '</div>';
          };

          this.todoListHeader = [{
            text: 'todo id',
            datafield: 'id',
            width: 200,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'title',
            datafield: 'title',
            minwidth: 200,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'description',
            datafield: 'desc',
            minwidth: 200,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'status',
            datafield: 'status',
            minwidth: 200,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'category',
            datafield: 'category',
            cellsrenderer: cellsrenderer,
            minwidth: 200,
            renderer: columnrenderer
          }, {
            text: 'due date',
            datafield: 'dueDate',
            cellsrenderer: cellsrenderer,
            minwidth: 200,
            renderer: columnrenderer
          }]; //  var ticketListData = res.filter(data => {
          //   return data.isActive
          // })

          var localData = [{
            id: '101',
            title: 'Association Meeting',
            desc: 'Meenitng on Audit A',
            status: 'Pending',
            category: 'Meeting',
            dueDate: '06/04/2020'
          }, {
            id: '101',
            title: 'Association Meeting',
            desc: 'Meenitng on Audit A',
            status: 'Pending',
            category: 'Meeting',
            dueDate: '06/04/2020'
          }, {
            id: '101',
            title: 'Association Meeting',
            desc: 'Meenitng on Audit A',
            status: 'Pending',
            category: 'Meeting',
            dueDate: '06/04/2020'
          }];
          this.gridSourceData = {
            localdata: localData,
            datatype: "array"
          };
          this.todoList = new jqx.dataAdapter(this.gridSourceData);
        }
      }]);

      return TodoHistoryComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])], TodoHistoryComponent.prototype, "datagrid", void 0);
    TodoHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-history',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./todo-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-history/todo-history.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./todo-history.component.scss */
      "./src/app/ams/todo/todo-history/todo-history.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TodoHistoryComponent);
    /***/
  },

  /***/
  "./src/app/ams/todo/todo-list/todo-list.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/ams/todo/todo-list/todo-list.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsTodoTodoListTodoListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".todoList {\n  display: flex;\n  padding: 0px !important;\n}\n.todoList:hover {\n  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.11);\n}\n.todoList > div {\n  font-family: \"Lato\", sans-serif;\n  font-size: 14px;\n  padding: 12px 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: flex;\n  align-items: center;\n}\n.todoList > div:first-child {\n  justify-content: center;\n  border-left: 4px solid #fdc42a;\n}\n.todoList > div .inProgress {\n  width: auto;\n  border: 1px solid #24c875;\n  padding: 3px 12px;\n  border-radius: 12px;\n  color: #24c875;\n}\n.todoList > div .stepper {\n  width: 33%;\n  display: flex;\n  align-items: center;\n  padding: 0px;\n}\n.todoList > div .stepper pre {\n  background-color: #dadada;\n  width: 80%;\n  height: 2px;\n  margin-bottom: 0px;\n}\n.todoList > div .stepper span {\n  width: 20%;\n  height: 15px;\n  border-radius: 50%;\n  background-color: #dadada;\n}\n.todoList > div .stepper:last-child pre {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdG9kby90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvdG9kby90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQ0o7QURBSTtFQUNJLDRDQUFBO0FDRVI7QURBSTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VSO0FERFE7RUFDSSx1QkFBQTtFQUNBLDhCQUFBO0FDR1o7QUREUTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDR1o7QUREUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDR1o7QURGWTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0loQjtBREZZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDSWhCO0FEQWdCO0VBQ0ksYUFBQTtBQ0VwQiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kb0xpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAmOmhvdmVye1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxNnB4IDAgcmdiYSgwLDAsMCwuMTEpO1xuICAgIH1cbiAgICA+ZGl2e1xuICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZmRjNDJhO1xuICAgICAgICB9XG4gICAgICAgIC5pblByb2dyZXNze1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjRjODc1O1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IzI0Yzg3NTtcbiAgICAgICAgfVxuICAgICAgICAuc3RlcHBlcntcbiAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIHByZXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTAlO1xuICAgICAgICAgICAgICAgIHByZXtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnRvZG9MaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4udG9kb0xpc3Q6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKTtcbn1cbi50b2RvTGlzdCA+IGRpdiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvZG9MaXN0ID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZkYzQyYTtcbn1cbi50b2RvTGlzdCA+IGRpdiAuaW5Qcm9ncmVzcyB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjRjODc1O1xuICBwYWRkaW5nOiAzcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6ICMyNGM4NzU7XG59XG4udG9kb0xpc3QgPiBkaXYgLnN0ZXBwZXIge1xuICB3aWR0aDogMzMlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG59XG4udG9kb0xpc3QgPiBkaXYgLnN0ZXBwZXIgcHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi50b2RvTGlzdCA+IGRpdiAuc3RlcHBlciBzcGFuIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG59XG4udG9kb0xpc3QgPiBkaXYgLnN0ZXBwZXI6bGFzdC1jaGlsZCBwcmUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/todo/todo-list/todo-list.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ams/todo/todo-list/todo-list.component.ts ***!
    \***********************************************************/

  /*! exports provided: TodoListComponent */

  /***/
  function srcAppAmsTodoTodoListTodoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
      return TodoListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TodoListComponent =
    /*#__PURE__*/
    function () {
      function TodoListComponent() {
        _classCallCheck(this, TodoListComponent);

        this.stepperList = [];
      }

      _createClass(TodoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.stepperList = [{
            name: 'Open',
            color: '#fa7b7b',
            isActive: true
          }, {
            name: 'InProgress',
            color: '#1da3f9',
            isActive: true
          }, {
            name: 'Closed',
            color: '#24c875',
            isActive: true
          }];
        }
      }]);

      return TodoListComponent;
    }();

    TodoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./todo-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-list/todo-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./todo-list.component.scss */
      "./src/app/ams/todo/todo-list/todo-list.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TodoListComponent);
    /***/
  },

  /***/
  "./src/app/ams/todo/todo-reminder/todo-reminder.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/ams/todo/todo-reminder/todo-reminder.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsTodoTodoReminderTodoReminderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".reminder {\n  font-family: \"Lato\", sans-serif;\n  position: relative;\n}\n.reminder::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  border: 4px solid transparent;\n  border-top: 12px solid transparent;\n  right: 6px;\n  border-top-color: #d50000;\n  border-right-color: #d50000;\n  border-left-color: #d50000;\n}\n.reminder p {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 14px;\n}\n.reminder .reminder-title {\n  color: #2196f3;\n}\n.reminder span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdG9kby90b2RvLXJlbWluZGVyL3RvZG8tcmVtaW5kZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy90b2RvL3RvZG8tcmVtaW5kZXIvdG9kby1yZW1pbmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNKLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDRUo7QURBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRVI7QURBSTtFQUNJLGNBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8tcmVtaW5kZXIvdG9kby1yZW1pbmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZW1pbmRlcntcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICByaWdodDogNnB4O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNkNTAwMDA7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZDUwMDAwO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZDUwMDAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5yZW1pbmRlci10aXRsZXtcbiAgICAgICAgY29sb3I6ICMyMTk2ZjM7XG4gICAgfVxuICAgIHNwYW57XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn0iLCIucmVtaW5kZXIge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yZW1pbmRlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHJpZ2h0OiA2cHg7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkNTAwMDA7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2Q1MDAwMDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNkNTAwMDA7XG59XG4ucmVtaW5kZXIgcCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5yZW1pbmRlciAucmVtaW5kZXItdGl0bGUge1xuICBjb2xvcjogIzIxOTZmMztcbn1cbi5yZW1pbmRlciBzcGFuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/todo/todo-reminder/todo-reminder.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ams/todo/todo-reminder/todo-reminder.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TodoReminderComponent */

  /***/
  function srcAppAmsTodoTodoReminderTodoReminderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoReminderComponent", function () {
      return TodoReminderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TodoReminderComponent =
    /*#__PURE__*/
    function () {
      function TodoReminderComponent() {
        _classCallCheck(this, TodoReminderComponent);

        this.products = [];
        this.num = 1;
        this.stars = [1, 2, 3, 4, 5];

        for (this.num; this.num <= 21; this.num += 1) {
          this.addProducts(this.num);
        }
      }

      _createClass(TodoReminderComponent, [{
        key: "addProducts",
        value: function addProducts(i) {
          this.products.push({
            id: i,
            price: (Math.random() * (0.0 - 10.0) + 10.0).toFixed(2),
            rating: Math.floor(Math.random() * 6),
            status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
            discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
            discount: (Math.random() * (0.0 - 10.0) + 10.0).toFixed(2),
            name: ['Blouse', 'Casual Shirt', 'Plaid Shirt', 'Long Sleeve', 'Denim Jacked', 'Fur Coat', 'Crop Top', 'Stripe Tee'][Math.floor(Math.random() * 8)],
            description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
          });
        }
      }, {
        key: "isOver",
        value: function isOver() {
          return window.matchMedia("(max-width: 960px)").matches;
        }
      }, {
        key: "isMac",
        value: function isMac() {
          var bool = false;

          if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
          }

          return bool;
        }
      }]);

      return TodoReminderComponent;
    }();

    TodoReminderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-reminder',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./todo-reminder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-reminder/todo-reminder.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./todo-reminder.component.scss */
      "./src/app/ams/todo/todo-reminder/todo-reminder.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TodoReminderComponent);
    /***/
  },

  /***/
  "./src/app/ams/todo/todo-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/ams/todo/todo-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: TodoRouting */

  /***/
  function srcAppAmsTodoTodoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoRouting", function () {
      return TodoRouting;
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


    var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./todo-list/todo-list.component */
    "./src/app/ams/todo/todo-list/todo-list.component.ts");
    /* harmony import */


    var _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./todo-create/todo-create.component */
    "./src/app/ams/todo/todo-create/todo-create.component.ts");
    /* harmony import */


    var _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todo-reminder/todo-reminder.component */
    "./src/app/ams/todo/todo-reminder/todo-reminder.component.ts");
    /* harmony import */


    var _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./todo-history/todo-history.component */
    "./src/app/ams/todo/todo-history/todo-history.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'todo-creation',
      pathMatch: 'full'
    }, {
      path: 'todo-creation',
      component: _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_4__["TodoCreateComponent"]
    }, {
      path: 'todo-list',
      component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"]
    }, {
      path: 'todo-reminder',
      component: _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__["TodoReminderComponent"]
    }, {
      path: 'todo-history',
      component: _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__["TodoHistoryComponent"]
    }, {
      path: '**',
      redirectTo: 'todo-creation',
      pathMatch: 'full'
    }];

    var TodoRouting = function TodoRouting() {
      _classCallCheck(this, TodoRouting);
    };

    TodoRouting = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TodoRouting);
    /***/
  },

  /***/
  "./src/app/ams/todo/todo.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/ams/todo/todo.module.ts ***!
    \*****************************************/

  /*! exports provided: TodoModule */

  /***/
  function srcAppAmsTodoTodoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoModule", function () {
      return TodoModule;
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


    var _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./todo-create/todo-create.component */
    "./src/app/ams/todo/todo-create/todo-create.component.ts");
    /* harmony import */


    var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./todo-list/todo-list.component */
    "./src/app/ams/todo/todo-list/todo-list.component.ts");
    /* harmony import */


    var _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todo-reminder/todo-reminder.component */
    "./src/app/ams/todo/todo-reminder/todo-reminder.component.ts");
    /* harmony import */


    var _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./todo-history/todo-history.component */
    "./src/app/ams/todo/todo-history/todo-history.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _todo_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./todo-routing.module */
    "./src/app/ams/todo/todo-routing.module.ts");

    var TodoModule = function TodoModule() {
      _classCallCheck(this, TodoModule);
    };

    TodoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_3__["TodoCreateComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"], _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__["TodoReminderComponent"], _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__["TodoHistoryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _todo_routing_module__WEBPACK_IMPORTED_MODULE_8__["TodoRouting"]]
    })], TodoModule);
    /***/
  }
}]);
//# sourceMappingURL=todo-todo-module-es5.js.map