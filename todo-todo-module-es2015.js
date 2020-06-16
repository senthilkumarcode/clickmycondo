(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-todo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create-category/todo-create-category.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create-category/todo-create-category.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n                <h5 *ngIf=\"data.type == 'create'\">Create Category</h5>\n                <h5 *ngIf=\"data.type == 'edit'\">Edit Meeting</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <ng-container>\n            <form #addmeetingForm = \"ngForm\" name=\"addmeetingForm\" novalidate>\n                <div class=\"row\">\n                    <div  class=\"col-sm-6\">\n                        <div class=\"select-box\">\n                            <label>Category Name</label>\n                            <input type=\"text\" class=\"form-control\" name=\"categoryTitle\" [(ngModel)]=\"category.categoryName\" >\n                        </div>  \n                    </div>\n                </div>\n                <div class=\"row btn-wrapper\">\n                    <div class=\"col-sm-12 text-right\" >\n                        <a *ngIf=\"data.type == 'create'\" href=\"javascript:void(0)\" class=\"btn blue mr-3\" (click)=\"createCategory()\">Submit</a>\n                        <a *ngIf=\"data.type == 'edit'\" href=\"javascript:void(0)\" class=\"btn blue mr-3\" (click)=\"updateCategory()\">Update</a>\n                        <a href=\"javascript:void(0)\" class=\"btn trans-white\">Cancel</a>\n                    </div>\n                </div>\n            </form>\n        </ng-container>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create-dialog/todo-create-dialog.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create-dialog/todo-create-dialog.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n                <h5 *ngIf=\"data.type == 'create'\">Create TODO</h5>\n                <h5 *ngIf=\"data.type == 'edit'\">Edit TODO</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <ng-container>\n            <form #addmeetingForm = \"ngForm\" name=\"addmeetingForm\" novalidate>\n                <div class=\"row\">\n                    <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Category</label>\n                            <select name=\"todoListCategoryId\" [(ngModel)]=\"todoParam.todoListCategoryId\" class=\"form-control\">\n                                    <option *ngFor=\"let item of categoryList\"  value=\"{{item.lookupValueId}}\">{{item.lookupValueName}}</option>\n                            </select>\n                        </div>  \n                    </div>\n                    <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Title</label>\n                             <input type=\"text\" name=\"title\" [(ngModel)]=\"todoParam.title\" class=\"form-control\">\n                        </div>  \n                    </div>\n                    <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Priority</label>\n                            <select class=\"form-control\" name=\"priorityId\" [(ngModel)]=\"todoParam.priorityId\">\n                                <option *ngFor=\"let item of priorityList\"  value=\"{{item.lookupValueId}}\">{{item.lookupValueName}}</option>\n                            </select>\n                        </div>  \n                    </div>\n                    <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Start Date</label>\n                            <input class=\"form-control\" name=\"startDate\"  [(ngModel)]=\"todoParam.beginOn\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                        </div>  \n                     </div>  \n                     <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <div class=\"form-group\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"meetingStartTime\" [owlDateTime]=\"meetingStartTime\" [owlDateTimeTrigger]=\"meetingStartTime\" placeholder=\"Start Time\" [(ngModel)]=\"startTime\">\n                                <owl-date-time [pickerType]=\"'timer'\" #meetingStartTime></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"meetingStartTime\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div>  \n                     </div> \n                      <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Due Date</label>\n                            <input class=\"form-control\" name=\"dueDate\"  [(ngModel)]=\"todoParam.finishOn\" [owlDateTime]=\"dueDate\" [owlDateTimeTrigger]=\"dueDate\" placeholder=\"Due Date\" >\n                                <owl-date-time #dueDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"dueDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                        </div>  \n                     </div>\n                     <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>End Time</label>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" name=\"meetingEndTime\" [owlDateTime]=\"meetingEndTime\" [owlDateTimeTrigger]=\"meetingEndTime\" placeholder=\"End Time\" [(ngModel)]=\"endTime\">\n                                <owl-date-time [pickerType]=\"'timer'\" #meetingEndTime></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"meetingEndTime\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div> \n                        </div>  \n                     </div>\n                     <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Status</label>\n                             <select class=\"form-control\" name=\"todoStatusId\" [(ngModel)]=\"todoParam.todoStatusId\" >\n                                 <option *ngFor=\"let item of statusList\"  value=\"{{item.lookupValueId}}\">{{item.lookupValueName}}</option>\n                             </select>\n                        </div>  \n                    </div>\n                    <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Description</label>\n                             <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"todoParam.description\" cols=\"10\" rows=\"3\"></textarea>\n                        </div>  \n                    </div>\n                </div>\n                <div class=\"row btn-wrapper\">\n                    <div class=\"col-sm-12 text-right\" >\n                        <a *ngIf=\"data.type == 'create'\" href=\"javascript:void(0)\" class=\"btn blue mr-3\" (click)=\"createTODO()\">Submit</a>\n                        <a *ngIf=\"data.type == 'edit'\" href=\"javascript:void(0)\" class=\"btn blue mr-3\" (click)=\"editTODO()\">Update</a>\n                        <a href=\"javascript:void(0)\" class=\"btn trans-white\">Cancel</a>\n                    </div>\n                </div>\n            </form>\n        </ng-container>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create/todo-create.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create/todo-create.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n                <h5>Create TODO</h5>\n            </div>\n        </div>\n    </div> -->\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-lg-9 col-md-9 col-xs-12 col-sm-6\">\n                <jqxScheduler #scheduler\n                    [width]=\"getWidth()\" [height]=\"600\"\n                    [date]=\"date\"\n                    [source]=\"dataAdapter\"\n                    [dayNameFormat]=\"'abbr'\"\n                    [showLegend]=\"true\"\n                    [view]=\"'monthView'\"\n                    [resources]=\"resources\"\n                    [views]=\"views\"\n                    (onAppointmentClick)=\"appointmentClick($event)\"\n                    (onEditDialogOpen)=\"appointmentAdd($event)\"\n                    (onBindingComplete)=\"onDialogClose($event)\"\n                    [appointmentDataFields]=\"appointmentDataFields\">\n                </jqxScheduler>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                <button mat-raised-button class=\"w-100\" color=\"primary\" (click)=\"openCategory()\" >Create Category</button>\n                <mat-card class=\"mt-12 todo-category \" *ngFor=\"let category categoryList\" (click)=\"editCategory(category.todoListCategoryId)\" >\n                    {{category.categoryName}}\n                </mat-card>\n            </div>\n        </div>\n    </div>\n<!-- </div> -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-history/todo-history.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-history/todo-history.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>TODO History</h5>\n              <p class=\"d-none d-md-inline-block\">.........</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"todoList\" [columns]=\"todoListHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-list/todo-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-list/todo-list.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>TODO List</h5>\n              <p class=\"d-none d-md-inline-block\">.........</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <mat-card class=\"todoList\" *ngFor=\"let item of todoList\" [hidden]=\"todoList.length != 0\" [style.border-left]=\"getPriority(item.priorityId)\"  >\n                <!-- <div class=\"w-10\">\n                    <input type=\"checkbox\" class=\"form-check-input\" id=\"\" name=\"\" checked >\n                    <label class=\"form-check-label tiny\" for=\"\"></label>\n                </div> -->\n                <!-- <div class=\"w-10\" >101</div> -->\n                <div class=\"w-20\">{{item?.title}}</div>\n                <div class=\"w-10\">{{item?.description}}</div>\n                <div class=\"w-10\">{{item?.finishOn}}</div>\n                <div class=\"w-40\">\n                    <div class=\"stepper\">\n                        <div class=\"stepperStage fadeInLeft\" *ngFor=\"let step of stepperList\" [ngStyle]=\"step.isActive ? {'background-color':step.color} : '' \">\n                          <span>{{step.name}}</span>\n                          <!-- [ngStyle]=\"step.isActiveLine ? {'background-color':step.bg,'opacity':'1','height':'2px'} : '' \" -->\n                          <!-- [ngStyle]=\"step.isActive ? {'background-color':step.color,'opacity':'1','height':'2px'} : '' \" -->\n                          <div [ngStyle]=\"step.isActive ? {'background-color':step.color,'opacity':'1','height':'2px'} : '' \">\n                          </div>\n                        </div>\n                      </div>\n                </div>\n                <div class=\"w-10\">   \n                    <div class=\"simple-actions d-flex justify-content-between \">\n                        <a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"openEdit(item.todoListId)\"  >\n                            <i class=\"fa fa-pencil icon edit\" aria-hidden=\"true\"></i>\n                        </a>\n                        <a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"deleteList(item.todoListId)\"  >\n                            <i class=\"fa fa-trash icon delete\" aria-hidden=\"true\"></i>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"w-10\">   \n                <!-- <button mat-button color=\"primary\">Completed</button> -->\n                <span class=\"inProgress\" *ngIf=\"item?.todoStatusId == 1\"  (click)=\"changeStatus(item,'inprogress')\"  >\n                    In Progress\n                </span>\n                <span class=\"todoCompleted\" *ngIf=\"item?.todoStatusId == 2\" (click)=\"changeStatus(item,'completed')\">\n                    Completed\n                </span>\n                </div>\n            </mat-card>\n            <mat-card class=\"todoList d-flex justify-content-center\" *ngIf=\"todoList.length == 0\"  >\n                <div>\n                    Data Not Found\n                </div>\n            </mat-card>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-reminder/todo-reminder.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-reminder/todo-reminder.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>TODO Reminder</h5>\n              <p class=\"d-none d-md-inline-block\">.........</p>\n            </div>\n            <ul class=\"list-inline\">\n                <!-- <li class=\"list-inline-item\"> \n                    <a class=\"btn lime-green mt_5\">\n                      <i class=\"fa fa-check-circle\"></i>\n                        <span class=\"ml-4\" >Complete</span>\n                    </a>\n                </li>\n                <li class=\"list-inline-item\"> \n                  <a class=\"btn lime-green mt_5\">\n                      <i class=\"fa fa-spinner\"></i>\n                      <span  class=\"ml-4\" >In Progress</span>\n                  </a>\n              </li> -->\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n            </ul>\n        </div>\n\n    </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6  mt-12\" *ngFor=\"let remind of todoReminderList\">\n        <mat-card class=\"reminder\" [style.border-left]=\"getPriority(remind.priorityId)\" >\n            <!-- <span>\n                    <span *ngFor=\"let star of stars\" [class.mat-text-default]=\"star <= product.rating\" class=\"mat-text-muted\">&#9733;</span>\n                  </span> -->\n                  <!-- <div class=\"remind-action\" >\n                      <input type=\"checkbox\" class=\"form-check-input\" id=\"\" name=\"\" checked>\n                      <label class=\"form-check-label tiny\" for=\"\"></label>\n                  </div> -->\n            <!-- <p>1001</p> -->\n            <p class=\"reminder-title\">{{remind?.title}}</p>\n            <p>{{remind?.todoListCategoryId}}</p>\n            <span class=\"mt-12\">{{remind?.description}}</span>\n            <mat-card-actions>\n                <span class=\"inProgress\" *ngIf=\"remind.todoStatusId == 1\" (click)=\"changeStatus(remind,'inprogress')\"  >\n                    In Progress\n                </span>\n                 <span class=\"todoCompleted\" *ngIf=\"remind.todoStatusId == 2\" (click)=\"changeStatus(remind,'inprogress')\">\n                    Complete\n                </span>\n                <!-- <button mat-button color=\"primary\">Completed</button> -->\n              </mat-card-actions>\n        </mat-card>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/ams/todo/todo-create-category/todo-create-category.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/ams/todo/todo-create-category/todo-create-category.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-right {\n  float: right;\n}\n\ntable thead th {\n  border-top: unset;\n  border-right: unset;\n}\n\ntable thead th:hover {\n  border-top: unset;\n  border-right: unset;\n}\n\n@media (max-width: 767px) {\n  .create-row {\n    display: none;\n  }\n}\n\n@media (min-width: 767px) {\n  .add-row {\n    display: none;\n  }\n}\n\n.recipentsDiv {\n  margin-bottom: 10px;\n}\n\n.recipentsDiv .box {\n  border: 1px solid #dedede;\n  height: 150px;\n  overflow-y: auto;\n}\n\n.recipentsDiv .box label {\n  margin-right: 10px;\n}\n\n::ng-deep .c-btn span {\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdG9kby90b2RvLWNyZWF0ZS1jYXRlZ29yeS90b2RvLWNyZWF0ZS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3RvZG8vdG9kby1jcmVhdGUtY2F0ZWdvcnkvdG9kby1jcmVhdGUtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxZQUFBO0FDSEo7O0FETUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FESUk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDRlI7O0FET0k7RUFESjtJQUVPLGFBQUE7RUNITDtBQUNGOztBRE9JO0VBREo7SUFFUSxhQUFBO0VDSE47QUFDRjs7QURNQTtFQUNJLG1CQUFBO0FDSEo7O0FESUk7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0ZOOztBREdNO0VBQ0Usa0JBQUE7QUNEUjs7QURPSTtFRW9DRixpQkFBQTtBRHZDRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8tY3JlYXRlLWNhdGVnb3J5L3RvZG8tY3JlYXRlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5idXR0b24tcmlnaHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG50YWJsZSB0aGVhZCB0aCB7XG4gICAgYm9yZGVyLXRvcDogdW5zZXQ7O1xuICAgIGJvcmRlci1yaWdodDogdW5zZXQ7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci10b3A6IHVuc2V0OztcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiB1bnNldDtcbiAgICB9XG59XG5cbi5jcmVhdGUtcm93IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogIDc2N3B4KSB7XG4gICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5hZGQtcm93IHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogIDc2N3B4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgIH1cbn1cblxuLnJlY2lwZW50c0RpdntcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC5ib3h7XG4gICAgICBib3JkZXI6MXB4IHNvbGlkICRncmV5LTYwMDtcbiAgICAgIGhlaWdodDoxNTBweDtcbiAgICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICAgIGxhYmVse1xuICAgICAgICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgICAgIH1cbiAgICB9XG59XG5cbjo6bmctZGVlcCAuYy1idG4ge1xuICAgIHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICB9XG59XG5cbiIsIi5idXR0b24tcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbnRhYmxlIHRoZWFkIHRoIHtcbiAgYm9yZGVyLXRvcDogdW5zZXQ7XG4gIGJvcmRlci1yaWdodDogdW5zZXQ7XG59XG50YWJsZSB0aGVhZCB0aDpob3ZlciB7XG4gIGJvcmRlci10b3A6IHVuc2V0O1xuICBib3JkZXItcmlnaHQ6IHVuc2V0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNyZWF0ZS1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIC5hZGQtcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5yZWNpcGVudHNEaXYge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnJlY2lwZW50c0RpdiAuYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5yZWNpcGVudHNEaXYgLmJveCBsYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5jLWJ0biBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/todo/todo-create-category/todo-create-category.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ams/todo/todo-create-category/todo-create-category.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TodoCreateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoCreateCategoryComponent", function() { return TodoCreateCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/controllers/TodoList */ "./src/app/api/controllers/TodoList.ts");





let TodoCreateCategoryComponent = class TodoCreateCategoryComponent {
    constructor(cookieService, dialogRef, todoService, data) {
        this.cookieService = cookieService;
        this.dialogRef = dialogRef;
        this.todoService = todoService;
        this.data = data;
        this.category = {
            "todoListCategoryId": 0,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "staffId": 0,
            "categoryName": "",
            "isActive": true,
            "insertedBy": 0,
            "insertedOn": "2020-06-09T07:29:07.302Z",
            "updatedBy": 0,
            "updatedOn": "2020-06-09T07:29:07.302Z"
        };
        if (this.data && this.data.type == 'edit') {
            for (const key in this.data) {
                this.category[key] = this.data[key];
            }
        }
    }
    ngOnInit() {
    }
    createCategory() {
        this.category.insertedBy = parseInt(this.cookieService.get('userId'));
        this.category.insertedOn = new Date().toISOString();
        this.category.updatedOn = new Date().toISOString();
        this.category.updatedBy = 0;
        let createCategoryParam = {
            todoListCategoryModel: this.category
        };
        this.todoService.addTodoListCategory(createCategoryParam).subscribe(resp => {
            this.dialogRef.close();
        }, errro => {
        });
    }
    updateCategory() {
        this.category.insertedBy = 0;
        this.category.insertedOn = new Date().toISOString();
        this.category.updatedOn = new Date().toISOString();
        this.category.updatedBy = parseInt(this.cookieService.get('userId'));
        let updateCategory = {
            todoListCategoryModel: this.category
        };
        this.todoService.updateTodoListCategory(updateCategory).subscribe(resp => {
            this.dialogRef.close();
        }, errro => {
        });
    }
};
TodoCreateCategoryComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_4__["TodoListService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
TodoCreateCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-create-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo-create-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create-category/todo-create-category.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo-create-category.component.scss */ "./src/app/ams/todo/todo-create-category/todo-create-category.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_4__["TodoListService"], Object])
], TodoCreateCategoryComponent);



/***/ }),

/***/ "./src/app/ams/todo/todo-create-dialog/todo-create-dialog.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/ams/todo/todo-create-dialog/todo-create-dialog.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-right {\n  float: right;\n}\n\ntable thead th {\n  border-top: unset;\n  border-right: unset;\n}\n\ntable thead th:hover {\n  border-top: unset;\n  border-right: unset;\n}\n\n@media (max-width: 767px) {\n  .create-row {\n    display: none;\n  }\n}\n\n@media (min-width: 767px) {\n  .add-row {\n    display: none;\n  }\n}\n\n.recipentsDiv {\n  margin-bottom: 10px;\n}\n\n.recipentsDiv .box {\n  border: 1px solid #dedede;\n  height: 150px;\n  overflow-y: auto;\n}\n\n.recipentsDiv .box label {\n  margin-right: 10px;\n}\n\n::ng-deep .c-btn span {\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdG9kby90b2RvLWNyZWF0ZS1kaWFsb2cvdG9kby1jcmVhdGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvdG9kby90b2RvLWNyZWF0ZS1kaWFsb2cvdG9kby1jcmVhdGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksWUFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRElJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0ZSOztBRE9JO0VBREo7SUFFTyxhQUFBO0VDSEw7QUFDRjs7QURPSTtFQURKO0lBRVEsYUFBQTtFQ0hOO0FBQ0Y7O0FETUE7RUFDSSxtQkFBQTtBQ0hKOztBRElJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNGTjs7QURHTTtFQUNFLGtCQUFBO0FDRFI7O0FET0k7RUVvQ0YsaUJBQUE7QUR2Q0YiLCJmaWxlIjoic3JjL2FwcC9hbXMvdG9kby90b2RvLWNyZWF0ZS1kaWFsb2cvdG9kby1jcmVhdGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5idXR0b24tcmlnaHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG50YWJsZSB0aGVhZCB0aCB7XG4gICAgYm9yZGVyLXRvcDogdW5zZXQ7O1xuICAgIGJvcmRlci1yaWdodDogdW5zZXQ7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci10b3A6IHVuc2V0OztcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiB1bnNldDtcbiAgICB9XG59XG5cbi5jcmVhdGUtcm93IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogIDc2N3B4KSB7XG4gICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5hZGQtcm93IHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogIDc2N3B4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgIH1cbn1cblxuLnJlY2lwZW50c0RpdntcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC5ib3h7XG4gICAgICBib3JkZXI6MXB4IHNvbGlkICRncmV5LTYwMDtcbiAgICAgIGhlaWdodDoxNTBweDtcbiAgICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICAgIGxhYmVse1xuICAgICAgICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgICAgIH1cbiAgICB9XG59XG5cbjo6bmctZGVlcCAuYy1idG4ge1xuICAgIHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICB9XG59IiwiLmJ1dHRvbi1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxudGFibGUgdGhlYWQgdGgge1xuICBib3JkZXItdG9wOiB1bnNldDtcbiAgYm9yZGVyLXJpZ2h0OiB1bnNldDtcbn1cbnRhYmxlIHRoZWFkIHRoOmhvdmVyIHtcbiAgYm9yZGVyLXRvcDogdW5zZXQ7XG4gIGJvcmRlci1yaWdodDogdW5zZXQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY3JlYXRlLXJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgLmFkZC1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnJlY2lwZW50c0RpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucmVjaXBlbnRzRGl2IC5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnJlY2lwZW50c0RpdiAuYm94IGxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLmMtYnRuIHNwYW4ge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/ams/todo/todo-create-dialog/todo-create-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ams/todo/todo-create-dialog/todo-create-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TodoCreateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoCreateDialogComponent", function() { return TodoCreateDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/controllers/TodoList */ "./src/app/api/controllers/TodoList.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let TodoCreateDialogComponent = class TodoCreateDialogComponent {
    constructor(dialogRef, data, lookUpService, cookieService, todoService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.lookUpService = lookUpService;
        this.cookieService = cookieService;
        this.todoService = todoService;
        this.statusList = [];
        this.priorityList = [];
        this.categoryList = [];
        this.startTime = '';
        this.endTime = '';
        this.todoParam = {
            "todoListId": 0,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "emailId": "",
            "description": "",
            "beginOn": "",
            "finishOn": "",
            "todoStatusId": 0,
            "isActive": true,
            "insertedBy": 0,
            "insertedOn": "",
            "updatedBy": 0,
            "updatedOn": "",
            "staffId": 0,
            "title": "",
            "priorityId": 0,
            "todoListCategoryId": 0
        };
    }
    ngOnInit() {
        this.getMasterData();
        if (this.data && this.data.type == 'edit') {
            if (this.data) {
                this.getTodoData(this.data.id);
            }
        }
    }
    getTodoData(id) {
        let getTodoParam = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            todoListId: id
        };
        this.todoService.getTodoListById(getTodoParam).subscribe((resp) => {
            for (const key in resp) {
                this.todoParam[key] = resp[key];
            }
        }, error => {
        });
    }
    getMasterData() {
        let getCategoryParam = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.todoService.getAllTodoListCategorysByApartmentId(getCategoryParam).subscribe((resp) => {
            this.categoryList = resp.filter(key => {
                return key.isActive;
            });
        }, error => {
        });
        let statusParam = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 192
        };
        let priorityParam = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 191
        };
        this.lookUpService.getLookupValueByLookupTypeId(statusParam).subscribe((resp) => {
            this.statusList = resp.filter(key => {
                return key.isActive;
            });
        });
        this.lookUpService.getLookupValueByLookupTypeId(priorityParam).subscribe((resp) => {
            this.priorityList = resp.filter(key => {
                return key.isActive;
            });
        });
    }
    createTODO() {
        let createTodo = this.todoParam;
        createTodo.insertedBy = parseInt(this.cookieService.get('userId'));
        createTodo.insertedOn = new Date().toISOString();
        createTodo.updatedOn = new Date().toISOString();
        createTodo.updatedBy = 0;
        createTodo.beginOn = this.setTime(this.todoParam.beginOn, moment__WEBPACK_IMPORTED_MODULE_6__(this.startTime, 'HH:mm'));
        createTodo.finishOn = this.setTime(this.todoParam.finishOn, moment__WEBPACK_IMPORTED_MODULE_6__(this.endTime, 'HH:mm'));
        let addTodoParam = {
            todoListModel: createTodo
        };
        this.todoService.addTodoList(addTodoParam).subscribe(resp => {
            this.dialogRef.close();
        });
    }
    editTODO() {
        let updateTodo = this.todoParam;
        updateTodo.insertedBy = parseInt(this.cookieService.get('userId'));
        updateTodo.insertedOn = new Date().toISOString();
        updateTodo.updatedOn = new Date().toISOString();
        updateTodo.updatedBy = 0;
        updateTodo.beginOn = this.setTime(this.todoParam.beginOn, moment__WEBPACK_IMPORTED_MODULE_6__(this.startTime, 'HH:mm'));
        updateTodo.finishOn = this.setTime(this.todoParam.finishOn, moment__WEBPACK_IMPORTED_MODULE_6__(this.endTime, 'HH:mm'));
        let updateTodoParam = {
            todoListModel: updateTodo
        };
        this.todoService.updateTodoList(updateTodoParam).subscribe(resp => {
            this.dialogRef.close();
        });
    }
    setTime(date, time) {
        return date.set({
            hour: time.get('hour'),
            minute: time.get('minute'),
            second: time.get('second')
        });
    }
};
TodoCreateDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_5__["TodoListService"] }
];
TodoCreateDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-create-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo-create-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create-dialog/todo-create-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo-create-dialog.component.scss */ "./src/app/ams/todo/todo-create-dialog/todo-create-dialog.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_5__["TodoListService"]])
], TodoCreateDialogComponent);



/***/ }),

/***/ "./src/app/ams/todo/todo-create/todo-create.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ams/todo/todo-create/todo-create.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".todo-category {\n  font-size: 16px;\n  font-family: \"Lato\", sans-serif;\n  padding: 12px;\n  border-left: 12px solid #673ab7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdG9kby90b2RvLWNyZWF0ZS90b2RvLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3RvZG8vdG9kby1jcmVhdGUvdG9kby1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBRUEsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8tY3JlYXRlL3RvZG8tY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8tY2F0ZWdvcnl7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItbGVmdDogMTJweCBzb2xpZCAjNjczYWI3O1xufVxuXG4vLyA6Om5nLWRlZXAgLmpxeC1maWxsLXN0YXRlLXByZXNzZWR7XG4vLyAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmU4ICFpbXBvcnRhbnQ7XG4vLyAgICAgYmFja2dyb3VuZDogIzAwN2JlOCAhaW1wb3J0YW50O1xuLy8gICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICBwYWRkaW5nOiA2cHggMTJweDtcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xuLy8gfVxuLy8gOjpuZy1kZWVwIC5qcXgtZ3JvdXAtYnV0dG9uLW5vcm1hbHtcbi8vICAgICBib3JkZXItY29sb3I6ICMzMDlkZmZjNztcbi8vICAgICBiYWNrZ3JvdW5kOiAjMzA5ZGZmYzc7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyB9IiwiLnRvZG8tY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLWxlZnQ6IDEycHggc29saWQgIzY3M2FiNztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ams/todo/todo-create/todo-create.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ams/todo/todo-create/todo-create.component.ts ***!
  \***************************************************************/
/*! exports provided: TodoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoCreateComponent", function() { return TodoCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxscheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Meeting */ "./src/app/api/controllers/Meeting.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _todo_create_dialog_todo_create_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../todo-create-dialog/todo-create-dialog.component */ "./src/app/ams/todo/todo-create-dialog/todo-create-dialog.component.ts");
/* harmony import */ var _todo_create_category_todo_create_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../todo-create-category/todo-create-category.component */ "./src/app/ams/todo/todo-create-category/todo-create-category.component.ts");
/* harmony import */ var _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api/controllers/TodoList */ "./src/app/api/controllers/TodoList.ts");










let TodoCreateComponent = class TodoCreateComponent {
    constructor(meetingService, cookieService, injector, todoService, dialog) {
        this.meetingService = meetingService;
        this.cookieService = cookieService;
        this.injector = injector;
        this.todoService = todoService;
        this.dialog = dialog;
        this.date = new jqx.date(new Date());
        this.source = {
            dataType: 'array',
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
                { name: 'end', type: 'date' }
            ],
            id: 'id',
        };
        this.printButton = null;
        this.resources = {
            colorScheme: 'scheme05',
            dataField: 'calendar',
            source: new jqx.dataAdapter(this.source)
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
        this.views = [
            'dayView',
            'weekView',
            'monthView',
            'agendaView'
        ];
        this.categoryList = [];
    }
    getWidth() {
        // if (document.body.offsetWidth < 800) {
        //   return '90%';
        // }
        return '100%';
    }
    ngOnInit() {
        this.getMeetingList();
    }
    getCategoryList() {
        let getCategoryParam = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.todoService.getAllTodoListCategorysByApartmentId(getCategoryParam).subscribe((resp) => {
            this.categoryList = resp;
        }, error => {
        });
    }
    appointmentClick(event) {
        let data = event.args.appointment.originalData;
        data['type'] = 'edit';
        const dialogRef = this.dialog.open(_todo_create_dialog_todo_create_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TodoCreateDialogComponent"], {
            width: 'auto',
            height: 'auto',
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getMeetingList();
            }
        });
    }
    appointmentAdd(event) {
        this.myScheduler.closeDialog();
        let data = { type: 'create' };
        const dialogRef = this.dialog.open(_todo_create_dialog_todo_create_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TodoCreateDialogComponent"], {
            width: 'auto',
            height: 'auto',
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getMeetingList();
            }
        });
    }
    openCategory() {
        let data = { type: 'create' };
        const dialogRef = this.dialog.open(_todo_create_category_todo_create_category_component__WEBPACK_IMPORTED_MODULE_8__["TodoCreateCategoryComponent"], {
            width: '500px',
            height: 'auto',
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getCategoryList();
            }
        });
    }
    editCategory(id) {
        this.todoService.getTodoListCategoryById(id).subscribe((resp) => {
            let data = resp;
            data['type'] = 'edit';
            const dialogRef = this.dialog.open(_todo_create_category_todo_create_category_component__WEBPACK_IMPORTED_MODULE_8__["TodoCreateCategoryComponent"], {
                width: '500px',
                height: 'auto',
                data: data
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.getCategoryList();
                }
            });
        }, error => {
        });
    }
    onDialogClose(event) {
        console.log('e', event);
    }
    getMeetingList() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            staffId: 0
        };
        this.todoService.getTodoListByStaffId(params).subscribe((resp) => {
            if (resp.length > 0) {
                this.schedulerList = [];
                resp.forEach((data, i) => {
                    let day = moment__WEBPACK_IMPORTED_MODULE_5__(data.finishOn).day();
                    let entity = {
                        id: data.todoListId,
                        description: data.description,
                        location: '',
                        subject: data.title,
                        calendar: `Room ${day}`,
                        start: this.formStartDate(data.beginOn),
                        end: this.formEndDate(data.finishOn)
                    };
                    this.schedulerList.push(entity);
                });
                this.source.localdata = this.schedulerList;
                this.dataAdapter = new jqx.dataAdapter(this.source);
                //this.resources.source = new jqx.dataAdapter(this.source);
            }
        });
    }
    formStartDate(data) {
        let year = moment__WEBPACK_IMPORTED_MODULE_5__(data).year();
        let month = moment__WEBPACK_IMPORTED_MODULE_5__(data).month();
        let date = moment__WEBPACK_IMPORTED_MODULE_5__(data).date();
        let startHours = moment__WEBPACK_IMPORTED_MODULE_5__(data, 'HH:mm').hour();
        let startMin = moment__WEBPACK_IMPORTED_MODULE_5__(data, 'HH:mm').minute();
        return new Date(year, month, date, startHours, startMin);
    }
    formEndDate(data) {
        let year = moment__WEBPACK_IMPORTED_MODULE_5__(data).year();
        let month = moment__WEBPACK_IMPORTED_MODULE_5__(data).month();
        let date = moment__WEBPACK_IMPORTED_MODULE_5__(data).date();
        let endHours = moment__WEBPACK_IMPORTED_MODULE_5__(data.toTime, 'HH:mm').hour();
        let endMin = moment__WEBPACK_IMPORTED_MODULE_5__(data.toTime, 'HH:mm').minute();
        return new Date(year, month, date, endHours, endMin);
    }
    ngAfterViewInit() {
        this.myScheduler.ensureAppointmentVisible('id1');
    }
};
TodoCreateComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_4__["MeetingService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_9__["TodoListService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduler', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxscheduler__WEBPACK_IMPORTED_MODULE_2__["jqxSchedulerComponent"])
], TodoCreateComponent.prototype, "myScheduler", void 0);
TodoCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create/todo-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo-create.component.scss */ "./src/app/ams/todo/todo-create/todo-create.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_4__["MeetingService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_9__["TodoListService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
], TodoCreateComponent);



/***/ }),

/***/ "./src/app/ams/todo/todo-history/todo-history.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ams/todo/todo-history/todo-history.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8taGlzdG9yeS90b2RvLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/todo/todo-history/todo-history.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ams/todo/todo-history/todo-history.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoHistoryComponent", function() { return TodoHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/controllers/TodoList */ "./src/app/api/controllers/TodoList.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





let TodoHistoryComponent = class TodoHistoryComponent {
    constructor(todoService, cookieService) {
        this.todoService = todoService;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.todoListHeader = [
            {
                text: 'todo id',
                datafield: 'todoListId',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'title',
                datafield: 'title',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'description',
                datafield: 'description',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'status',
                datafield: 'todoStatusId',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'category',
                datafield: 'todoListCategoryId',
                cellsrenderer: cellsrenderer,
                minwidth: 200,
                renderer: columnrenderer
            }, {
                text: 'due date',
                datafield: 'finishOn',
                cellsrenderer: cellsrenderer,
                minwidth: 200,
                renderer: columnrenderer
            }
        ];
        this.getTodoHistory();
    }
    getTodoHistory() {
        // this.todoService.getAllTodoLists().subscribe(
        //   (resp: any) => {
        //     var localData = resp.filter(data => {
        //       return data.isActive
        //     })
        //     this.gridSourceData = {
        //       localdata: localData,
        //       datatype: "array"
        //     }
        //     this.todoList = new jqx.dataAdapter(this.gridSourceData);
        //   },
        //   error => {
        //   }
        // )
    }
};
TodoHistoryComponent.ctorParameters = () => [
    { type: _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_3__["TodoListService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], TodoHistoryComponent.prototype, "datagrid", void 0);
TodoHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-history/todo-history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo-history.component.scss */ "./src/app/ams/todo/todo-history/todo-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_3__["TodoListService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], TodoHistoryComponent);



/***/ }),

/***/ "./src/app/ams/todo/todo-list/todo-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/ams/todo/todo-list/todo-list.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.todoList {\n  display: flex;\n  padding: 0px !important;\n}\n.todoList:hover {\n  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.11);\n}\n.todoList > div {\n  font-family: \"Lato\", sans-serif;\n  font-size: 14px;\n  padding: 12px 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: flex;\n  align-items: center;\n}\n.todoList > div .inProgress {\n  width: auto;\n  border: 1px solid #FF9800;\n  padding: 3px 12px;\n  border-radius: 12px;\n  color: #FF9800;\n}\n.todoList > div .todoCompleted {\n  width: auto;\n  border: 1px solid #24c875;\n  padding: 3px 12px;\n  border-radius: 12px;\n  color: #24c875;\n}\n.todoList > div .stepper {\n  padding: 4px 12px 10px 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n.todoList > div .stepper .stepperStage {\n  width: 24px;\n  height: 24px;\n  background-color: #bdbdbd;\n  border-radius: 50px;\n  margin-right: 33%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n.todoList > div .stepper .stepperStage span {\n  position: absolute;\n  top: 20px;\n  color: #778591;\n  font-size: 12px;\n  font-weight: 700;\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.todoList > div .stepper .stepperStage > div {\n  height: 1px;\n  background-color: #2c4457;\n  opacity: 0.2;\n  margin-bottom: 10px;\n  width: 165px;\n  margin-left: 185px;\n}\n.todoList > div .stepper .stepperStage:before {\n  position: absolute;\n  font-weight: 900;\n  content: \"✓\";\n  width: 24px;\n  font-size: 15px;\n  color: white;\n  height: 24px;\n  background-color: transparent;\n  border-radius: 50%;\n  text-align: center;\n}\n.todoList > div .stepper .stepperStage:last-child {\n  margin-right: 0%;\n}\n.todoList > div .stepper .stepperStage:last-child > div {\n  background: transparent;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1zL3RvZG8vdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdG9kby90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBREVKO0FDREk7RUFDSSw0Q0FBQTtBREdSO0FDREk7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURHUjtBQ0ZRO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QURJVjtBQ0ZNO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QURJVjtBQ0ZRO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBRElaO0FDSFk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBREtkO0FDSGM7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FES2hCO0FDRmM7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURJaEI7QUNEYztFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFHQSxrQkFBQTtBRENoQjtBQ0VjO0VBQ0EsZ0JBQUE7QURBZDtBQ0NnQjtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBRENsQiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udG9kb0xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi50b2RvTGlzdDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xufVxuLnRvZG9MaXN0ID4gZGl2IHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9kb0xpc3QgPiBkaXYgLmluUHJvZ3Jlc3Mge1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGOTgwMDtcbiAgcGFkZGluZzogM3B4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiAjRkY5ODAwO1xufVxuLnRvZG9MaXN0ID4gZGl2IC50b2RvQ29tcGxldGVkIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNGM4NzU7XG4gIHBhZGRpbmc6IDNweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjb2xvcjogIzI0Yzg3NTtcbn1cbi50b2RvTGlzdCA+IGRpdiAuc3RlcHBlciB7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDEwcHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnRvZG9MaXN0ID4gZGl2IC5zdGVwcGVyIC5zdGVwcGVyU3RhZ2Uge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMzJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvZG9MaXN0ID4gZGl2IC5zdGVwcGVyIC5zdGVwcGVyU3RhZ2Ugc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBjb2xvcjogIzc3ODU5MTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvZG9MaXN0ID4gZGl2IC5zdGVwcGVyIC5zdGVwcGVyU3RhZ2UgPiBkaXYge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjNDQ1NztcbiAgb3BhY2l0eTogMC4yO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTY1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxODVweDtcbn1cbi50b2RvTGlzdCA+IGRpdiAuc3RlcHBlciAuc3RlcHBlclN0YWdlOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29udGVudDogXCLinJNcIjtcbiAgd2lkdGg6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b2RvTGlzdCA+IGRpdiAuc3RlcHBlciAuc3RlcHBlclN0YWdlOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDAlO1xufVxuLnRvZG9MaXN0ID4gZGl2IC5zdGVwcGVyIC5zdGVwcGVyU3RhZ2U6bGFzdC1jaGlsZCA+IGRpdiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBub25lO1xufSIsIi50b2RvTGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDE2cHggMCByZ2JhKDAsMCwwLC4xMSk7XG4gICAgfVxuICAgID5kaXZ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuaW5Qcm9ncmVzc3tcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY5ODAwO1xuICAgICAgICAgIHBhZGRpbmc6IDNweCAxMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgY29sb3I6I0ZGOTgwMDtcbiAgICAgIH1cbiAgICAgIC50b2RvQ29tcGxldGVke1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNGM4NzU7XG4gICAgICAgICAgcGFkZGluZzogM3B4IDEycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICBjb2xvcjojMjRjODc1O1xuICAgICAgfVxuICAgICAgICAuc3RlcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweCAxMHB4IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgLnN0ZXBwZXJTdGFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzMlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIFxuICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc4NTkxO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgPiBkaXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzQ0NTc7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2NXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxODVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCLinJNcIjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgLy8gdG9wOiAtM3B4O1xuICAgICAgICAgICAgICAgIC8vIGxlZnQ6IC0zcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCU7XG4gICAgICAgICAgICAgICAgPiBkaXYge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/ams/todo/todo-list/todo-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ams/todo/todo-list/todo-list.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/controllers/TodoList */ "./src/app/api/controllers/TodoList.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _todo_create_dialog_todo_create_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo-create-dialog/todo-create-dialog.component */ "./src/app/ams/todo/todo-create-dialog/todo-create-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");






let TodoListComponent = class TodoListComponent {
    constructor(todoService, cookieService, dialog) {
        this.todoService = todoService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.stepperList = [];
        this.todoList = [];
    }
    ngOnInit() {
        this.stepperList = [
            {
                name: 'Open',
                color: '#fa7b7b',
                isActive: true
            },
            {
                name: 'InProgress',
                color: '#ff9800',
                isActive: true
            },
            {
                name: 'Closed',
                color: '#4caf50',
                isActive: false
            },
        ];
        this.getTodoList();
    }
    getTodoList() {
        let getList = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.todoService.getAllTodoListsByApartmentId(getList).subscribe((resp) => {
            this.todoList = resp.filter(data => {
                return data.isActive;
            });
        }, error => {
        });
    }
    openEdit(id) {
        let data;
        data['id'] = id;
        data['type'] = 'edit';
        const dialogRef = this.dialog.open(_todo_create_dialog_todo_create_dialog_component__WEBPACK_IMPORTED_MODULE_4__["TodoCreateDialogComponent"], {
            width: 'auto',
            height: 'auto',
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getTodoList();
            }
        });
    }
    deleteList(id) {
        let deleteParam = {
            todoListId: id,
            deleteBy: parseInt(this.cookieService.get('userId'))
        };
        this.todoService.deleteTodoList(deleteParam).subscribe((resp) => {
            this.getTodoList();
        }, error => {
        });
    }
    changeStatus(obj, category) {
        let updateTodo = obj;
        if (category == 'inprogress') {
            updateTodo.todoStatusId = 217;
        }
        else if (category == 'completed') {
            updateTodo.todoStatusId = 218;
        }
        updateTodo.insertedBy = parseInt(this.cookieService.get('userId'));
        updateTodo.insertedOn = new Date().toISOString();
        updateTodo.updatedOn = new Date().toISOString();
        updateTodo.updatedBy = 0;
        updateTodo;
        let updateTodoParam = {
            todoListModel: updateTodo
        };
        this.todoService.updateTodoList(updateTodoParam).subscribe(resp => {
            this.getTodoList();
        });
    }
    getPriority(id) {
        if (id == 205) {
            return '4px solid #f44336';
        }
        else if (id == 206) {
            return '4px solid #FF9800';
        }
        else {
            return '4px solid #ffc107';
        }
    }
};
TodoListComponent.ctorParameters = () => [
    { type: _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_2__["TodoListService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
TodoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-list/todo-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/ams/todo/todo-list/todo-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_2__["TodoListService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], TodoListComponent);



/***/ }),

/***/ "./src/app/ams/todo/todo-reminder/todo-reminder.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ams/todo/todo-reminder/todo-reminder.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reminder {\n  font-family: \"Lato\", sans-serif;\n  position: relative;\n  border-left: 4px solid #fdc42a;\n  position: relative;\n}\n.reminder:hover {\n  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.11);\n}\n.reminder .remind-action {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n}\n.reminder p {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 14px;\n}\n.reminder .reminder-title {\n  color: #2196f3;\n}\n.reminder span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  font-size: 12px;\n}\n.reminder .inProgress {\n  width: auto;\n  border: 1px solid #FF9800;\n  padding: 3px 12px;\n  border-radius: 12px;\n  color: #FF9800;\n}\n.reminder .todoCompleted {\n  width: auto;\n  border: 1px solid #24c875;\n  padding: 3px 12px;\n  border-radius: 12px;\n  color: #24c875;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdG9kby90b2RvLXJlbWluZGVyL3RvZG8tcmVtaW5kZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy90b2RvL3RvZG8tcmVtaW5kZXIvdG9kby1yZW1pbmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLDRDQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNFUjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQUk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvYW1zL3RvZG8vdG9kby1yZW1pbmRlci90b2RvLXJlbWluZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlbWluZGVye1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZmRjNDJhO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOmhvdmVye1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxNnB4IDAgcmdiYSgwLDAsMCwuMTEpO1xuICAgIH1cbiAgICAucmVtaW5kLWFjdGlvbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogNHB4O1xuICAgICAgICB0b3A6IDRweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAucmVtaW5kZXItdGl0bGV7XG4gICAgICAgIGNvbG9yOiAjMjE5NmYzO1xuICAgIH1cbiAgICBzcGFue1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmluUHJvZ3Jlc3N7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY5ODAwO1xuICAgICAgICBwYWRkaW5nOiAzcHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgY29sb3I6I0ZGOTgwMDtcbiAgICB9XG4gICAgLnRvZG9Db21wbGV0ZWR7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjRjODc1O1xuICAgICAgICBwYWRkaW5nOiAzcHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgY29sb3I6IzI0Yzg3NTtcbiAgICB9XG59IiwiLnJlbWluZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZkYzQyYTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJlbWluZGVyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XG59XG4ucmVtaW5kZXIgLnJlbWluZC1hY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0cHg7XG4gIHRvcDogNHB4O1xufVxuLnJlbWluZGVyIHAge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucmVtaW5kZXIgLnJlbWluZGVyLXRpdGxlIHtcbiAgY29sb3I6ICMyMTk2ZjM7XG59XG4ucmVtaW5kZXIgc3BhbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJlbWluZGVyIC5pblByb2dyZXNzIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRjk4MDA7XG4gIHBhZGRpbmc6IDNweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cbi5yZW1pbmRlciAudG9kb0NvbXBsZXRlZCB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjRjODc1O1xuICBwYWRkaW5nOiAzcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6ICMyNGM4NzU7XG59Il19 */");

/***/ }),

/***/ "./src/app/ams/todo/todo-reminder/todo-reminder.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ams/todo/todo-reminder/todo-reminder.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodoReminderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoReminderComponent", function() { return TodoReminderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/controllers/TodoList */ "./src/app/api/controllers/TodoList.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");




let TodoReminderComponent = class TodoReminderComponent {
    constructor(todoService, cookieService) {
        this.todoService = todoService;
        this.cookieService = cookieService;
        this.todoReminderList = [];
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getTodoHistory();
    }
    getTodoHistory() {
        let getTodoParam = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.todoService.getAllTodoLists(getTodoParam).subscribe((resp) => {
            this.todoReminderList = resp.filter(data => {
                return data.isActive;
            });
        }, error => {
        });
    }
    changeStatus(obj, category) {
        let updateTodo = obj;
        if (category == 'inprogress') {
            updateTodo.todoStatusId = 217;
        }
        else if (category == 'completed') {
            updateTodo.todoStatusId = 218;
        }
        updateTodo.insertedBy = parseInt(this.cookieService.get('userId'));
        updateTodo.insertedOn = new Date().toISOString();
        updateTodo.updatedOn = new Date().toISOString();
        updateTodo.updatedBy = 0;
        updateTodo;
        let updateTodoParam = {
            todoListModel: updateTodo
        };
        this.todoService.updateTodoList(updateTodoParam).subscribe(resp => {
            this.getTodoHistory();
        });
    }
    getPriority(id) {
        if (id == 205) {
            return '4px solid #f44336';
        }
        else if (id == 206) {
            return '4px solid #FF9800';
        }
        else {
            return '4px solid #ffc107';
        }
    }
};
TodoReminderComponent.ctorParameters = () => [
    { type: _api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_2__["TodoListService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
TodoReminderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-reminder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo-reminder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-reminder/todo-reminder.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo-reminder.component.scss */ "./src/app/ams/todo/todo-reminder/todo-reminder.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_TodoList__WEBPACK_IMPORTED_MODULE_2__["TodoListService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], TodoReminderComponent);



/***/ }),

/***/ "./src/app/ams/todo/todo-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ams/todo/todo-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TodoRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRouting", function() { return TodoRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/ams/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-create/todo-create.component */ "./src/app/ams/todo/todo-create/todo-create.component.ts");
/* harmony import */ var _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-reminder/todo-reminder.component */ "./src/app/ams/todo/todo-reminder/todo-reminder.component.ts");
/* harmony import */ var _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-history/todo-history.component */ "./src/app/ams/todo/todo-history/todo-history.component.ts");







const routes = [
    { path: '', redirectTo: 'todo-creation', pathMatch: 'full' },
    { path: 'todo-creation', component: _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_4__["TodoCreateComponent"] },
    { path: 'todo-list', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"] },
    { path: 'todo-reminder', component: _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__["TodoReminderComponent"] },
    { path: 'todo-history', component: _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__["TodoHistoryComponent"] },
    { path: '**', redirectTo: 'todo-creation', pathMatch: 'full' }
];
let TodoRouting = class TodoRouting {
};
TodoRouting = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TodoRouting);



/***/ }),

/***/ "./src/app/ams/todo/todo.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ams/todo/todo.module.ts ***!
  \*****************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-create/todo-create.component */ "./src/app/ams/todo/todo-create/todo-create.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/ams/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-reminder/todo-reminder.component */ "./src/app/ams/todo/todo-reminder/todo-reminder.component.ts");
/* harmony import */ var _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-history/todo-history.component */ "./src/app/ams/todo/todo-history/todo-history.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo-routing.module */ "./src/app/ams/todo/todo-routing.module.ts");
/* harmony import */ var _todo_create_dialog_todo_create_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo-create-dialog/todo-create-dialog.component */ "./src/app/ams/todo/todo-create-dialog/todo-create-dialog.component.ts");
/* harmony import */ var _todo_create_category_todo_create_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo-create-category/todo-create-category.component */ "./src/app/ams/todo/todo-create-category/todo-create-category.component.ts");











let TodoModule = class TodoModule {
};
TodoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_3__["TodoCreateComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"], _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__["TodoReminderComponent"], _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__["TodoHistoryComponent"], _todo_create_dialog_todo_create_dialog_component__WEBPACK_IMPORTED_MODULE_9__["TodoCreateDialogComponent"], _todo_create_category_todo_create_category_component__WEBPACK_IMPORTED_MODULE_10__["TodoCreateCategoryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _todo_routing_module__WEBPACK_IMPORTED_MODULE_8__["TodoRouting"]
        ],
        entryComponents: [_todo_create_dialog_todo_create_dialog_component__WEBPACK_IMPORTED_MODULE_9__["TodoCreateDialogComponent"], _todo_create_category_todo_create_category_component__WEBPACK_IMPORTED_MODULE_10__["TodoCreateCategoryComponent"]]
    })
], TodoModule);



/***/ })

}]);
//# sourceMappingURL=todo-todo-module-es2015.js.map