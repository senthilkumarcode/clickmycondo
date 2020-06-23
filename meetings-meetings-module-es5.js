function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meetings-meetings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-create/meetings-create.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-create/meetings-create.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMeetingsComponentsMeetingsCreateMeetingsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n                <h5 *ngIf=\"isAddMeeting\">Create Meeting</h5>\n                <h5 *ngIf=\"!isAddMeeting\">Edit Meeting</h5>\n            </div>\n        <div class=\"col-sm-4\"> \n            <button class=\"btn lime-green\" (click)=\"Goback()\" style=\"float: right;\" >\n                <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"> Go Back</i>\n            </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <ng-container>\n            <form #addmeetingForm = \"ngForm\" name=\"addmeetingForm\" (ngSubmit)=\"submitAddmeetingForm(addmeetingForm)\"  novalidate>\n                <div class=\"row\">\n                    <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Role Type</label>\n                            <angular2-multiselect [data]=\"roleTypeArr.dropdownList\" name=\"roleTypeDropDown\"\n                            [(ngModel)]=\"roleTypeArr.selectedItems\"\n                            [settings]=\"roleTypedropdownSettings\" (onSelect)=\"getAppartmentRole($event)\"\n                            (onDeSelect)=\"removeRole($event)\" (onDeSelectAll)=\"removeRole($event)\"></angular2-multiselect>\n                        </div>  \n                    </div>\n                    <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Apartment Block</label>\n                            <angular2-multiselect [data]=\"apartmentBlock.dropdownList\" name=\"blockdropdown\"\n                            [(ngModel)]=\"apartmentBlock.selectedItems\"\n                            [settings]=\"blockdropdownSettings\"\n                            (onSelect)=\"updateUsers()\"></angular2-multiselect>\n                        </div>  \n                    </div>\n                    <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Conditions</label>\n                            <angular2-multiselect [data]=\"condition.dropdownList\" name=\"conditiondropdown\"\n                            [(ngModel)]=\"condition.selectedItems\"\n                            [settings]=\"roleDropdownSettings\" \n                            (onSelect)=\"updateUsers()\"\n                            ></angular2-multiselect>\n                        </div>  \n                    </div>\n                    <div  class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Role</label>\n                            <angular2-multiselect [data]=\"roleCategory.dropdownList\" name=\"roleDropDown\"\n                            [(ngModel)]=\"roleCategory.selectedItems\"\n                            [settings]=\"roleDropdownSettings\"\n                            (onSelect)=\"getstaffCategories($event)\"  (onDeSelect)=\"removeStaffCategories($event)\"\n                            (onSelectAll)=\"getAllStaffCategories($event)\"  (onDeSelectAll)=\"removeAllStaffCategories($event)\"\n                            ></angular2-multiselect>\n                        </div>  \n                        </div>\n                        <div  class=\"col-sm-4\" *ngIf=\"this.roleCategory.selectedItems.length>0 && isStaff\">\n                        <div class=\"select-box\">\n                            <label>Staff Category</label>\n                            <angular2-multiselect [data]=\"staffCategory.dropdownList\" name=\"staffDropDown\"\n                            [(ngModel)]=\"staffCategory.selectedItems\"\n                            [settings]=\"dropdownSettings\"\n                            (onSelect)=\"getStaffSubCategories($event)\" (onDeSelect)=\"removeSubStaffCategories($event)\"\n                            (onSelectAll)=\"getAllSubStaffCategories($event)\"  (onDeSelectAll)=\"removeAllSubStaffCategories($event)\" \n                                (onGroupDeSelect)=\"getGroupSubStaffCategories($event)\"       (onGroupSelect)=\"removeGroupSubStaffCategories($event)\"                                >\n                            </angular2-multiselect>\n                        </div>  \n                    </div>\n                    <div  class=\"col-sm-4\" *ngIf=\"this.staffCategory.selectedItems.length>0\">\n                        <div class=\"select-box\">\n                            <label>Staff SubCategory</label>\n                            <angular2-multiselect [data]=\"staffSubCategory.dropdownList\" name=\"subStaffDropDown\"\n                            [(ngModel)]=\"staffSubCategory.selectedItems\"\n                            [settings]=\"dropdownSettings\"\n                            (onSelect)=\"updateUsers()\"        (onDeSelect)=\"updateUsers()\"\n                            (onSelectAll)=\"updateUsers()\"     (onDeSelectAll)=\"updateUsers()\" \n                            (onGroupDeSelect)=\"updateUsers()\" (onGroupSelect)=\"updateUsers()\"   \n                            ></angular2-multiselect>\n                        </div>  \n                    </div>\n                </div>\n                <div class=\"row recipentsDiv\" > \n                    <div class=\"col-sm-12\">\n                        <label>Recipients</label>\n                        <div  class=\"col-sm-12 box\" >\n                            <label *ngFor=\"let user of users\" >\n                                {{user.firstName+\" \"+user.middleName+\" \"+user.lastName+\",\"}}\n                            </label>\n                        </div> \n                    </div> \n                </div>\n                <div class=\"row mt-5\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Meeting Type*</label>\n                            <select \n                                name=\"meetingCategory\" \n                                id=\"meetingCategory\" \n                                class=\"form-control\"\n                                placeholder = \"Meeting Type\"\n                                [(ngModel)]=\"meeting.meetingTypeId\"\n                                (ngModelChange)=\"showTable()\" required>\n                                <option value=\"\" disabled selected hidden>Select</option>\n                                <option *ngFor=\"let item of meetingCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\" *ngIf=\"showTableContent\">\n                        <table  class=\"table table-borderless table-resizable table-checker\" cellpadding=\"0\" cellspacing=\"0\" [ngClass]=\"isMobileView()\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Select Date</th>\n                                    <th scope=\"col\">Start Time</th>\n                                    <th scope=\"col\">End Time</th>\n                                    <th scope=\"col\">Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td class=\"select w-30\">\n                                        <input class=\"form-control\" name=\"meetingDate\" [owlDateTime]=\"meetingDate\"\n                                            [owlDateTimeTrigger]=\"meetingDate\" placeholder=\"Date\" [(ngModel)]=\"subMeetingField.meetingDate\">\n                                            <owl-date-time #meetingDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                        <!-- <div class=\"date-btn\">\n                                            <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                        </div> -->\n                                    </td>\n                                    <td class=\"select w-30\">\n                                        <div class=\"form-group\">\n                                            <input class=\"form-control\" name=\"meetingStartTime\" [owlDateTime]=\"meetingStartTime\" [owlDateTimeTrigger]=\"meetingStartTime\" placeholder=\"Start Time\" [(ngModel)]=\"subMeetingField.meetingStartTime\">\n                                            <owl-date-time [pickerType]=\"'timer'\" #meetingStartTime></owl-date-time>\n                                            <div class=\"date-btn\" [owlDateTimeTrigger]=\"meetingStartTime\">\n                                                <!-- <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather> -->\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td class=\"select w-30\">\n                                        <div class=\"form-group\">\n                                            <input class=\"form-control\" name=\"meetingEndTime\" [owlDateTime]=\"meetingEndTime\" [owlDateTimeTrigger]=\"meetingEndTime\" placeholder=\"End Time\" [(ngModel)]=\"subMeetingField.meetingEndTime\">\n                                            <owl-date-time [pickerType]=\"'timer'\" #meetingEndTime></owl-date-time>\n                                            <div class=\"date-btn\" [owlDateTimeTrigger]=\"meetingEndTime\">\n                                                <!-- <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather> -->\n                                            </div>\n                                        </div> \n                                    </td>\n                                    <td class=\"select w-10\">\n                                        <a class=\"btn lime-green create-row\" (click)=\"addMeetingSchedule()\" >\n                                            <i class=\"fa fa-plus\"> Add Row</i>\n                                        </a>\n                                        <a class=\"lime-green add-row\" (click)=\"addMeetingSchedule()\" >\n                                            <i class=\"fa fa-plus lime-green mt-3\" (click)=\"addMeetingSchedule()\"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr *ngFor=\"let item of subMeeting;let i = index\">\n                                    <td class=\"select w-30\">{{item.meetingDate | date : 'dd-MM-yyyy'}}</td>\n                                    <td class=\"select w-30\">{{item.meetingStartTime}}</td>\n                                    <td class=\"select w-30\">{{item.meetingEndTime}}</td>\n                                    <td class=\"select w-10\">\n                                        <a href=\"javascript:void(0)\" (click)=\"editMeetingScheduleRow(item,i)\"><i-feather class=\"icon edit mr-3\" name=\"edit\"></i-feather></a>\n                                        <a href=\"javascript:void(0)\" (click)=\"deleteMeetingScheduleRow(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-9 col-10\">\n                        <div class=\"input-box\">\n                            <label>Subject*</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\" name=\"meetingSubject\" [(ngModel)]=\"meeting.meetingSubject\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Message*</label>\n                            <quill-editor\n                            class=\"quill-editor\"\n                            name=\"ckeditor\"\n                            placeholder=\"Message Description\"\n                            [(ngModel)]=\"meeting.meetingMessage\">\n                            </quill-editor>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <ul class=\"list-inline float-right\">\n                            <li class=\"list-inline-item\">\n                                <button class=\"btn blue mr-2\">Submit</button>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </form>\n        </ng-container>\n    </div>\n</div>\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-list/meetings-list.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-list/meetings-list.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMeetingsComponentsMeetingsListMeetingsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card ov card-table\" *ngIf=\"isMeetingDataLoaded\">\n    <div class=\"card-header\">\n        <div class=\"float-left\">\n            <h5>Meeting List <span class=\"badge blue\">{{totalMeetingItems}}</span></h5>\n        </div>\n        <ul class=\"float-right\">\n            <li class=\"list-inline-item search d-none d-md-inline-block\">\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"meetingFilter\" (ngModelChange)=\"searchData()\" >\n            </li>\n            <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n            <a class=\"btn lime-green mt_5\" (click)=\"addMeeting()\">\n                <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                <span>Add Meeting</span>\n            </a>\n        </ul>\n    </div>\n    <div class=\"card-body ov p-0\">\n        <jqxGrid \n            [theme]=\"'material'\" \n            [width]=\"'100%'\"\n            [rowsheight]=\"48\"\n            [autoheight]=\"true\"\n            [pageable]=\"true\" \n            [filterable]=\"true\" \n            [sortable]=\"true\" \n            [source]=\"lstMeetingData\"\n            [columns]=\"columnData\"\n            [columnsresize]=\"true\"\n            [enablehover]=\"false\" #datagrid>\n\t\t</jqxGrid> \n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-reports/meetings-reports.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-reports/meetings-reports.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMeetingsComponentsMeetingsReportsMeetingsReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  meetings-reports works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-scheduled-list/meetings-scheduled-list.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-scheduled-list/meetings-scheduled-list.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMeetingsComponentsMeetingsScheduledListMeetingsScheduledListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n                <h5>Scheduled List</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <jqxScheduler #scheduler\n                    [width]=\"getWidth()\" [height]=\"600\"\n                    [date]=\"date\"\n                    [source]=\"dataAdapter\"\n                    [dayNameFormat]=\"'abbr'\"\n                    [showLegend]=\"true\"\n                    [view]=\"'agendaView'\"\n                    [resources]=\"resources\"\n                    [views]=\"views\"\n                    (onAppointmentClick)=\"appointmentClick($event)\"\n                    (onEditDialogOpen)=\"appointmentAdd($event)\"\n                    [appointmentDataFields]=\"appointmentDataFields\">\n                </jqxScheduler>\n            </div>\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-setup/meetings-setup.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-setup/meetings-setup.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMeetingsComponentsMeetingsSetupMeetingsSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"meetings-setup-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isMeetingCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes mb-30\" *ngIf=\"isMeetingCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Meeting Types</h4>\n\t\t<ng-container *ngFor=\"let item of meetingCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body no-hover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0)\" routerLink=\"/ams/meetings/view/{{item.lookupValueId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a> -->\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon view\" name=\"eye\" (click)=\"viewMeetingCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateMeetingCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteMeetingCategory(item,i)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\n\t\t\t\t\t\t<p>&nbsp;</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewMeetingCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Type</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mb-30\" *ngIf=\"isMeetingCategoryNew || isMeetingCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isMeetingCategoryNew\">Add Meeting Category</h6>\n\t\t\t\t<h6 *ngIf=\"!isMeetingCategoryNew && !isViewMode\">Edit Meeting Category</h6>\n\t\t\t\t<h6 *ngIf=\"!isMeetingCategoryNew && isViewMode\">View Meeting Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"alertMeetingMessage\" [isError]=\"isCategoryError\" [isSuccess]=\"isCategorySuccess\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isMeetingCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isMeetingCategorySubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addMeetingCategoryForm = \"ngForm\" name=\"addMeetingCategoryForm\" (ngSubmit)=\"submitMeetingCategoryForm(addMeetingCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" [disabled]=\"isViewMode\" class=\"form-control\" placeholder=\"Type\" name=\"meetingCategory\" [(ngModel)]=\"meetingCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Description</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" [disabled]=\"isViewMode\" class=\"form-control\"  placeholder=\"Description\" name=\"meetingCategoryDesc\" [(ngModel)]=\"meetingCategoryDesc\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\" *ngIf=\"!isViewMode\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addMeetingCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-view/meetings-view.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-view/meetings-view.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMeetingsComponentsMeetingsViewMeetingsViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  meetings-view works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/meetings.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/meetings.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMeetingsMeetingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-create/meetings-create.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-create/meetings-create.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsCreateMeetingsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-right {\n  float: right;\n}\n\ntable thead th {\n  border-top: unset;\n  border-right: unset;\n}\n\ntable thead th:hover {\n  border-top: unset;\n  border-right: unset;\n}\n\n@media (max-width: 767px) {\n  .create-row {\n    display: none;\n  }\n}\n\n@media (min-width: 767px) {\n  .add-row {\n    display: none;\n  }\n}\n\n.recipentsDiv {\n  margin-bottom: 10px;\n}\n\n.recipentsDiv .box {\n  border: 1px solid #dedede;\n  height: 150px;\n  overflow-y: auto;\n}\n\n.recipentsDiv .box label {\n  margin-right: 10px;\n}\n\n::ng-deep .c-btn span {\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbWVldGluZ3MvY29tcG9uZW50cy9tZWV0aW5ncy1jcmVhdGUvbWVldGluZ3MtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvbWVldGluZ3MvY29tcG9uZW50cy9tZWV0aW5ncy1jcmVhdGUvbWVldGluZ3MtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksWUFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRElJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0ZSOztBRE9JO0VBREo7SUFFTyxhQUFBO0VDSEw7QUFDRjs7QURPSTtFQURKO0lBRVEsYUFBQTtFQ0hOO0FBQ0Y7O0FETUE7RUFDSSxtQkFBQTtBQ0hKOztBRElJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNGTjs7QURHTTtFQUNFLGtCQUFBO0FDRFI7O0FET0k7RUVvQ0YsaUJBQUE7QUR2Q0YiLCJmaWxlIjoic3JjL2FwcC9hbXMvbWVldGluZ3MvY29tcG9uZW50cy9tZWV0aW5ncy1jcmVhdGUvbWVldGluZ3MtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5idXR0b24tcmlnaHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG50YWJsZSB0aGVhZCB0aCB7XG4gICAgYm9yZGVyLXRvcDogdW5zZXQ7O1xuICAgIGJvcmRlci1yaWdodDogdW5zZXQ7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci10b3A6IHVuc2V0OztcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiB1bnNldDtcbiAgICB9XG59XG5cbi5jcmVhdGUtcm93IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogIDc2N3B4KSB7XG4gICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5hZGQtcm93IHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogIDc2N3B4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgIH1cbn1cblxuLnJlY2lwZW50c0RpdntcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC5ib3h7XG4gICAgICBib3JkZXI6MXB4IHNvbGlkICRncmV5LTYwMDtcbiAgICAgIGhlaWdodDoxNTBweDtcbiAgICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICAgIGxhYmVse1xuICAgICAgICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgICAgIH1cbiAgICB9XG59XG5cbjo6bmctZGVlcCAuYy1idG4ge1xuICAgIHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICB9XG59IiwiLmJ1dHRvbi1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxudGFibGUgdGhlYWQgdGgge1xuICBib3JkZXItdG9wOiB1bnNldDtcbiAgYm9yZGVyLXJpZ2h0OiB1bnNldDtcbn1cbnRhYmxlIHRoZWFkIHRoOmhvdmVyIHtcbiAgYm9yZGVyLXRvcDogdW5zZXQ7XG4gIGJvcmRlci1yaWdodDogdW5zZXQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY3JlYXRlLXJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgLmFkZC1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnJlY2lwZW50c0RpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucmVjaXBlbnRzRGl2IC5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnJlY2lwZW50c0RpdiAuYm94IGxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLmMtYnRuIHNwYW4ge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-create/meetings-create.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-create/meetings-create.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: MeetingsCreateComponent */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsCreateMeetingsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingsCreateComponent", function () {
      return MeetingsCreateComponent;
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


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/api/controllers/Staff */
    "./src/app/api/controllers/Staff.ts");
    /* harmony import */


    var src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/api/controllers/Meeting */
    "./src/app/api/controllers/Meeting.ts");

    var MeetingsCreateComponent =
    /*#__PURE__*/
    function () {
      function MeetingsCreateComponent(lookupService, router, cookieService, apartmentService, staffService, userService, meetingService, cd) {
        _classCallCheck(this, MeetingsCreateComponent);

        this.lookupService = lookupService;
        this.router = router;
        this.cookieService = cookieService;
        this.apartmentService = apartmentService;
        this.staffService = staffService;
        this.userService = userService;
        this.meetingService = meetingService;
        this.cd = cd;
        this.isAddMeeting = true;
        this.subMeeting = [];
        this.subMeetingField = {
          meetingDate: '',
          meetingStartTime: '',
          meetingEndTime: ''
        };
        this.showTableContent = false;
        this.staffCategoryMap = new Map();
        this.roleTypedropdownSettings = {};
        this.roleTypeArr = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.blockdropdownSettings = {};
        this.apartmentBlock = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.condition = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.roleDropdownSettings = {};
        this.roleCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.dropdownSettings = {};
        this.staffSubCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.staffSubCategoryMap = new Map();
        this.staffCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
      }

      _createClass(MeetingsCreateComponent, [{
        key: "Goback",
        value: function Goback() {
          this.router.navigate(['ams/meetings/list']);
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "getAppartmentRole",
        value: function getAppartmentRole(item) {
          var _this = this;

          this.roleCategory.selectedItems = [];
          this.staffCategory.selectedItems = [];
          var params = {
            'ApartmentId': parseInt(this.cookieService.get('apartmentId')),
            'RoleTypeId': item.value
          };
          this.userService.getApartmentRolesByRoleTypeId(params).subscribe(function (res) {
            _this.roleCategory.dropdownList = res;
            var conditinArr = [{
              "name": "IsLiving",
              "value": 1
            }, {
              "name": "IsPrimaryContact",
              "value": 2
            }];

            if (parseInt(item.value) == 2 || parseInt(item.value) == 4) {
              _this.condition.dropdownList = conditinArr;
            } else {
              _this.condition.dropdownList = [];
              _this.condition.selectedItems = [];
            }

            _this.updateUsers();
          });
        }
      }, {
        key: "getUserIds$",
        value: function getUserIds$() {
          var roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) {
            return item.apartmentBlockId;
          }).join(",");
          var conditionIds = Array.prototype.map.call(this.condition.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var staffcategoryIds = Array.prototype.map.call(this.staffCategory.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var staffSubCategoryIds = Array.prototype.map.call(this.staffSubCategory.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var params = {
            'roleIds': roleIds,
            'conditionIds': conditionIds,
            'appartmentbBlockIds': blockIds,
            'apartmentId': parseInt(this.cookieService.get('apartmentId')),
            'staffcategoryIds': staffcategoryIds,
            'staffSubCategoryIds': staffSubCategoryIds
          };
          return this.userService.getUsersByFilter(params);
        }
      }, {
        key: "updateUsers",
        value: function updateUsers() {
          var _this2 = this;

          this.getUserIds$().subscribe(function (res) {
            if (res.length > 0) {
              _this2.users = _this2.allUsers.filter(function (obj) {
                return res.includes(obj.userId);
              });
            } else {
              _this2.users = [];
            }
          });
        }
      }, {
        key: "getstaffCategories",
        value: function getstaffCategories(item) {
          var _this3 = this;

          if (this.roleTypeArr.selectedItems[0].name.toLowerCase() == "staff") {
            if (this.staffCategoryMap.get(item.value) == undefined) {
              var params = {
                'roleId': item.value,
                'apartmentId': parseInt(this.cookieService.get('apartmentId'))
              };
              this.staffService.getStaffCategoryByRole(params).subscribe(function (res) {
                var temp = _toConsumableArray(_this3.staffCategory.dropdownList);

                res.forEach(function (element) {
                  element.category = item.name;
                  temp.push(element);
                });

                _this3.staffCategoryMap.set(item.value, res);

                _this3.staffCategory.dropdownList = temp;

                _this3.updateUsers();
              });
            } else {
              var temp = _toConsumableArray(this.staffCategory.dropdownList);

              var addStaffCategory = this.staffCategoryMap.get(item.value);
              addStaffCategory.forEach(function (element) {
                temp.push(element);
              });
              this.staffCategory.dropdownList = temp;
            }
          }

          this.updateUsers();
        }
      }, {
        key: "getAllStaffCategories",
        value: function getAllStaffCategories(items) {
          var _this4 = this;

          items.forEach(function (element) {
            _this4.getstaffCategories(element);
          });
        }
      }, {
        key: "getStaffSubCategories",
        value: function getStaffSubCategories(item) {
          var _this5 = this;

          if (this.staffSubCategoryMap.get(item.value) == undefined) {
            var params = {
              'categoryId': item.value,
              'apartmentId': parseInt(this.cookieService.get('apartmentId'))
            };
            this.staffService.getSubStaffCategoryByCategory(params).subscribe(function (res) {
              var temp = _toConsumableArray(_this5.staffSubCategory.dropdownList);

              res.forEach(function (element) {
                element.category = item.name;
                temp.push(element);
              });

              _this5.staffSubCategoryMap.set(item.value, res);

              _this5.staffSubCategory.dropdownList = temp;

              _this5.updateUsers();
            });
          } else {
            var addSubStaffCategory = this.staffSubCategoryMap.get(item.value);

            var temp = _toConsumableArray(this.staffSubCategory.dropdownList);

            addSubStaffCategory.forEach(function (element) {
              temp.push(element);
            });
            this.staffSubCategory.dropdownList = temp;
            this.updateUsers();
          }
        }
      }, {
        key: "removeStaffCategories",
        value: function removeStaffCategories(item) {
          var _this6 = this;

          if (this.roleTypeArr.selectedItems[0].name.toLowerCase() == "staff") {
            var removeStaffCategory = this.staffCategoryMap.get(item.value);
            removeStaffCategory.forEach(function (element) {
              _this6.staffCategory.dropdownList = _this6.staffCategory.dropdownList.filter(function (obj) {
                return obj.value !== element.value;
              });
            });
          }

          this.updateUsers();
        }
      }, {
        key: "removeAllStaffCategories",
        value: function removeAllStaffCategories(items) {
          this.roleCategory.selectedItems = [];
          this.staffCategory.dropdownList = [];
          this.staffCategory.selectedItems = [];
          this.updateUsers();
        }
      }, {
        key: "removeRole",
        value: function removeRole(item) {
          this.roleCategory.dropdownList = [];
          this.condition.dropdownList = [];
          this.condition.selectedItems = [];
          this.removeAllStaffCategories([]);
          this.removeAllSubStaffCategories([]);
        }
      }, {
        key: "removeAllSubStaffCategories",
        value: function removeAllSubStaffCategories(items) {
          this.staffSubCategory.dropdownList = [];
          this.staffCategory.selectedItems = [];
          this.updateUsers();
        }
      }, {
        key: "removeSubStaffCategories",
        value: function removeSubStaffCategories(item) {
          var _this7 = this;

          var removeSubStaffCategory = this.staffSubCategoryMap.get(item.value);
          removeSubStaffCategory.forEach(function (element) {
            _this7.staffSubCategory.dropdownList = _this7.staffSubCategory.dropdownList.filter(function (obj) {
              return obj.value !== element.value;
            });
          });
          this.updateUsers();
        }
      }, {
        key: "removeGroupSubStaffCategories",
        value: function removeGroupSubStaffCategories(items) {
          var _this8 = this;

          items.list.forEach(function (element) {
            _this8.removeSubStaffCategories(element);
          });
          this.updateUsers();
        }
      }, {
        key: "getAllSubStaffCategories",
        value: function getAllSubStaffCategories(items) {
          var _this9 = this;

          items.forEach(function (element) {
            _this9.getStaffSubCategories(element);
          });
        }
      }, {
        key: "getGroupSubStaffCategories",
        value: function getGroupSubStaffCategories(items) {
          var _this10 = this;

          items.list.forEach(function (element) {
            _this10.getStaffSubCategories(element);
          });
          this.updateUsers();
        }
      }, {
        key: "showTable",
        value: function showTable() {
          this.showTableContent = true;
        }
      }, {
        key: "addMeetingSchedule",
        value: function addMeetingSchedule() {
          if (this.subMeetingField.meetingDate && this.subMeetingField.meetingStartTime && this.subMeetingField.meetingEndTime) {
            var entity = {
              meetingDate: moment__WEBPACK_IMPORTED_MODULE_7__(this.subMeetingField.meetingDate).format(),
              meetingStartTime: moment__WEBPACK_IMPORTED_MODULE_7__(this.subMeetingField.meetingStartTime).format('hh:mm'),
              meetingEndTime: moment__WEBPACK_IMPORTED_MODULE_7__(this.subMeetingField.meetingEndTime).format('hh:mm')
            };
            this.subMeeting.push(entity);
            this.subMeetingField.meetingDate = '';
            this.subMeetingField.meetingStartTime = '';
            this.subMeetingField.meetingEndTime = '';
          }
        }
      }, {
        key: "editMeetingScheduleRow",
        value: function editMeetingScheduleRow(data, index) {
          this.subMeetingField.meetingDate = moment__WEBPACK_IMPORTED_MODULE_7__(data.meetingDate).format();
          this.subMeetingField.meetingStartTime = moment__WEBPACK_IMPORTED_MODULE_7__(data.meetingStartTime, 'hh:mm a').format();
          this.subMeetingField.meetingEndTime = moment__WEBPACK_IMPORTED_MODULE_7__(data.meetingEndTime, 'hh:mm a').format();
          ;
          this.subMeeting.splice(index, 1);
        }
      }, {
        key: "deleteMeetingScheduleRow",
        value: function deleteMeetingScheduleRow(index) {
          this.subMeeting.splice(index, 1);
        }
      }, {
        key: "submitAddmeetingForm",
        value: function submitAddmeetingForm(data) {
          var _this11 = this;

          var apartment = this.apartmentBlock.selectedItems.reduce(function (acc, data, index) {
            if (index == 0) {
              return JSON.stringify(data.apartmentBlockId);
            } else {
              return acc + ',' + JSON.stringify(data.apartmentBlockId);
            }
          }, '');
          var condition = this.condition.selectedItems.reduce(function (acc, data, index) {
            if (index == 0) {
              return JSON.stringify(data.value);
            } else {
              return acc + ',' + JSON.stringify(data.value);
            }
          }, '');
          var roleIds = this.roleCategory.selectedItems.reduce(function (acc, data, index) {
            if (index == 0) {
              return JSON.stringify(data.value);
            } else {
              return acc + ',' + JSON.stringify(data.value);
            }
          }, '');
          var params = {};
          params.meetingFilters_model = {
            "filterId": 0,
            "roleTypeId": Number(this.roleTypeArr.selectedItems.length > 0 ? this.roleTypeArr.selectedItems[0].value : 0),
            "apartmentBlockIds": String(apartment ? apartment : '0'),
            "conditions": String(condition ? condition : '0'),
            "roleIds": String(roleIds),
            "staffCategoryIds": '0',
            "subStaffCategoryIds": '0',
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null
          };
          this.meetingService.upsertMeetingFilters(params).subscribe(function (res) {
            if (typeof res.message == 'number') {
              var users = _this11.users.reduce(function (acc, data, i) {
                if (i == 0) {
                  return JSON.stringify(data.userId);
                } else {
                  return acc + ',' + JSON.stringify(data.userId);
                }
              }, '');

              var _params = {};

              for (var i = 0; i < _this11.subMeeting.length; i++) {
                _params.meetings = {
                  meetingId: 0,
                  filterId: res.message,
                  apartmentId: parseInt(_this11.cookieService.get('apartmentId')),
                  meetingTypeId: parseInt(_this11.meeting.meetingTypeId),
                  meetingCategoryId: null,
                  meetingRecipientsIds: users,
                  meetingDate: new Date(_this11.subMeeting[i].meetingDate).toISOString(),
                  fromTime: _this11.subMeeting[i].meetingStartTime,
                  toTime: _this11.subMeeting[i].meetingEndTime,
                  subject: _this11.meeting.meetingSubject,
                  message: _this11.meeting.meetingMessage,
                  comments: "string",
                  isActive: true,
                  insertedBy: parseInt(_this11.cookieService.get('userId')),
                  insertedOn: new Date().toISOString(),
                  updatedBy: null,
                  updatedOn: null,
                  meetingStatusId: null,
                  meetingAttendees: "string",
                  meetingminutes: "string",
                  actionitems: "string"
                };

                _this11.meetingService.addMeeting(_params).subscribe(function (res) {
                  console.log(res);
                });
              }
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.meeting = {};
          var params = {
            LookupTypeId: 21
          };
          this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
            _this12.meetingCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          });
          this.userService.getAllRoleTypes().subscribe(function (res) {
            _this12.roleTypeArr.dropdownList = res;
          });
          var users = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.userService.getUsersByApartmentId(users).subscribe(function (res) {
            _this12.allUsers = res;

            _this12.updateUsers();
          });
          var apartmentBlock = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockByApartmentId(apartmentBlock).subscribe(function (res) {
            _this12.apartmentBlock.dropdownList = res;
          });
          this.roleTypedropdownSettings = {
            singleSelection: true,
            primaryKey: 'value',
            labelKey: 'name',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.blockdropdownSettings = {
            singleSelection: false,
            primaryKey: 'apartmentBlockId',
            labelKey: 'apartmentBlockNumber',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.roleDropdownSettings = {
            singleSelection: false,
            enableSearchFilter: true,
            labelKey: 'name',
            primaryKey: 'value',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.dropdownSettings = {
            singleSelection: false,
            enableSearchFilter: true,
            labelKey: 'name',
            primaryKey: 'value',
            groupBy: "category",
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
        }
      }]);

      return MeetingsCreateComponent;
    }();

    MeetingsCreateComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__["StaffService"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_9__["MeetingService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    MeetingsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meetings-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./meetings-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-create/meetings-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./meetings-create.component.scss */
      "./src/app/ams/meetings/components/meetings-create/meetings-create.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__["StaffService"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_9__["MeetingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], MeetingsCreateComponent);
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-list/meetings-list.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-list/meetings-list.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsListMeetingsListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tZWV0aW5ncy9jb21wb25lbnRzL21lZXRpbmdzLWxpc3QvbWVldGluZ3MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-list/meetings-list.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-list/meetings-list.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: MeetingsListComponent */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsListMeetingsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingsListComponent", function () {
      return MeetingsListComponent;
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


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Meeting */
    "./src/app/api/controllers/Meeting.ts");
    /* harmony import */


    var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

    var MeetingsListComponent =
    /*#__PURE__*/
    function () {
      function MeetingsListComponent(router, meetingService, injector, cookieService, dialog) {
        _classCallCheck(this, MeetingsListComponent);

        this.router = router;
        this.meetingService = meetingService;
        this.injector = injector;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.isMeetingDataLoaded = false;
        this.isMobile = false;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(MeetingsListComponent, [{
        key: "getPrintParams",
        value: function getPrintParams(event) {
          this.datagrid.exportdata(event, 'Meeting');
        }
      }, {
        key: "searchData",
        value: function searchData() {
          var _this13 = this;

          if (this.meetingFilter != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.meetingFilter;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield != 'Actions') {
                _this13.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          } else {
            this.datagrid.clearfilters();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMeetingList();

          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
            return '<div style="padding: 14px">' + value + '</div>';
          };

          this.columnData = [{
            text: 'Date',
            datafield: 'meetingDate',
            width: 100,
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_3__(value).format("DD-MM-YYYY") + '</div>';
            },
            renderer: columnrenderer
          }, {
            text: 'From Time',
            datafield: 'fromTime',
            minwidth: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'To Time',
            datafield: 'toTime',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'Type',
            datafield: 'meetingTypeId',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'Catgeory',
            datafield: 'meetingCategoryId',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'Subject',
            datafield: 'subject',
            cellsrenderer: cellsrenderer,
            minwidth: 150,
            renderer: columnrenderer
          }, {
            text: 'Recepients',
            datafield: 'meetingRecipientsId',
            cellsrenderer: cellsrenderer,
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Status',
            datafield: 'meetingStatusId',
            cellsrenderer: cellsrenderer,
            minwidth: 80,
            renderer: columnrenderer
          }];
        }
      }, {
        key: "getMeetingList",
        value: function getMeetingList() {
          var _this14 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.meetingService.getMeetingByApartmentId(params).subscribe(function (res) {
            _this14.lstMeetingData = res;
            _this14.gridSourceData = {
              localdata: _this14.lstMeetingData,
              datatype: "array"
            };
            _this14.lstMeetingData = new jqx.dataAdapter(_this14.gridSourceData);
            _this14.isMeetingDataLoaded = true;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "addMeeting",
        value: function addMeeting() {
          this.router.navigate(['ams/meetings/create']);
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }]);

      return MeetingsListComponent;
    }();

    MeetingsListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_5__["MeetingService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__["jqxGridComponent"])], MeetingsListComponent.prototype, "datagrid", void 0);
    MeetingsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meetings-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./meetings-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-list/meetings-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./meetings-list.component.scss */
      "./src/app/ams/meetings/components/meetings-list/meetings-list.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_5__["MeetingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])], MeetingsListComponent);
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-reports/meetings-reports.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-reports/meetings-reports.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsReportsMeetingsReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tZWV0aW5ncy9jb21wb25lbnRzL21lZXRpbmdzLXJlcG9ydHMvbWVldGluZ3MtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-reports/meetings-reports.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-reports/meetings-reports.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: MeetingsReportsComponent */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsReportsMeetingsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingsReportsComponent", function () {
      return MeetingsReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MeetingsReportsComponent =
    /*#__PURE__*/
    function () {
      function MeetingsReportsComponent() {
        _classCallCheck(this, MeetingsReportsComponent);
      }

      _createClass(MeetingsReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MeetingsReportsComponent;
    }();

    MeetingsReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meetings-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./meetings-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-reports/meetings-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./meetings-reports.component.scss */
      "./src/app/ams/meetings/components/meetings-reports/meetings-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MeetingsReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-scheduled-list/meetings-scheduled-list.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-scheduled-list/meetings-scheduled-list.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsScheduledListMeetingsScheduledListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .cdk-overlay-container .cdk-global-overlay-wrapper {\n  top: 37px !important;\n}\n\n::ng-deep .jqx-scheduler .jqx-grid-column-header, .jqx-scheduler.jqx-widget .jqx-grid-column-header {\n  z-index: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvbWVldGluZ3MvY29tcG9uZW50cy9tZWV0aW5ncy1zY2hlZHVsZWQtbGlzdC9tZWV0aW5ncy1zY2hlZHVsZWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL21lZXRpbmdzL2NvbXBvbmVudHMvbWVldGluZ3Mtc2NoZWR1bGVkLWxpc3QvbWVldGluZ3Mtc2NoZWR1bGVkLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKOztBREdBO0VBQ0kscUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tZWV0aW5ncy9jb21wb25lbnRzL21lZXRpbmdzLXNjaGVkdWxlZC1saXN0L21lZXRpbmdzLXNjaGVkdWxlZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICB0b3AgOjM3cHggIWltcG9ydGFudDtcbn1cblxuXG46Om5nLWRlZXAgLmpxeC1zY2hlZHVsZXIgLmpxeC1ncmlkLWNvbHVtbi1oZWFkZXIsIC5qcXgtc2NoZWR1bGVyLmpxeC13aWRnZXQgLmpxeC1ncmlkLWNvbHVtbi1oZWFkZXIge1xuICAgIHotaW5kZXg6MCAhaW1wb3J0YW50O1xufVxuIiwiOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgdG9wOiAzN3B4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuanF4LXNjaGVkdWxlciAuanF4LWdyaWQtY29sdW1uLWhlYWRlciwgLmpxeC1zY2hlZHVsZXIuanF4LXdpZGdldCAuanF4LWdyaWQtY29sdW1uLWhlYWRlciB7XG4gIHotaW5kZXg6IDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-scheduled-list/meetings-scheduled-list.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-scheduled-list/meetings-scheduled-list.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: MeetingsScheduledListComponent */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsScheduledListMeetingsScheduledListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingsScheduledListComponent", function () {
      return MeetingsScheduledListComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Meeting */
    "./src/app/api/controllers/Meeting.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _meeting_edit_display_meeting_edit_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../meeting-edit-display/meeting-edit-display.component */
    "./src/app/ams/meetings/components/meeting-edit-display/meeting-edit-display.component.ts");

    var MeetingsScheduledListComponent =
    /*#__PURE__*/
    function () {
      function MeetingsScheduledListComponent(meetingService, cookieService, injector, dialog) {
        _classCallCheck(this, MeetingsScheduledListComponent);

        this.meetingService = meetingService;
        this.cookieService = cookieService;
        this.injector = injector;
        this.dialog = dialog;
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
        this.views = ['dayView', 'weekView', 'monthView', 'agendaView'];
      }

      _createClass(MeetingsScheduledListComponent, [{
        key: "getWidth",
        value: function getWidth() {
          if (document.body.offsetWidth < 800) {
            return '90%';
          }

          return 950;
        }
      }, {
        key: "appointmentClick",
        value: function appointmentClick(event) {
          var _this15 = this;

          if (this.cookieService.get('userRole') == 'Admin') {
            var data = event.args.appointment.originalData;
            data.type = 'edit';
            var dialogRef = this.dialog.open(_meeting_edit_display_meeting_edit_display_component__WEBPACK_IMPORTED_MODULE_7__["MeetingEditDisplayComponent"], {
              width: 'auto',
              height: '700px',
              data: data
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this15.getMeetingList();
              }
            });
          }
        }
      }, {
        key: "appointmentAdd",
        value: function appointmentAdd(event) {
          var _this16 = this;

          this.myScheduler.closeDialog();

          if (this.cookieService.get('userRole') == 'Admin') {
            var data = {
              type: 'create'
            };
            var dialogRef = this.dialog.open(_meeting_edit_display_meeting_edit_display_component__WEBPACK_IMPORTED_MODULE_7__["MeetingEditDisplayComponent"], {
              width: 'auto',
              height: '700px',
              data: data
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this16.getMeetingList();
              }
            });
          }
        }
      }, {
        key: "getMeetingList",
        value: function getMeetingList() {
          var _this17 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.meetingService.getMeetingByApartmentId(params).subscribe(function (res) {
            if (res.length > 0) {
              _this17.schedulerList = [];
              res.forEach(function (data, i) {
                var year = moment__WEBPACK_IMPORTED_MODULE_5__(data.meetingDate).year();
                var month = moment__WEBPACK_IMPORTED_MODULE_5__(data.meetingDate).month();
                var date = moment__WEBPACK_IMPORTED_MODULE_5__(data.meetingDate).date();
                var startHours = moment__WEBPACK_IMPORTED_MODULE_5__(data.fromTime, 'HH:mm').hour();
                var startMin = moment__WEBPACK_IMPORTED_MODULE_5__(data.fromTime, 'HH:mm').minute();
                var endHours = moment__WEBPACK_IMPORTED_MODULE_5__(data.toTime, 'HH:mm').hour();
                var endMin = moment__WEBPACK_IMPORTED_MODULE_5__(data.toTime, 'HH:mm').minute();
                var day = moment__WEBPACK_IMPORTED_MODULE_5__(data.meetingDate).day();
                var entity = {
                  id: data.meetingId,
                  description: '',
                  location: '',
                  subject: data.subject,
                  calendar: "Room ".concat(day),
                  start: new Date(year, month, date, startHours, startMin),
                  end: new Date(year, month, date, endHours, endMin)
                };

                _this17.schedulerList.push(entity);
              });
              _this17.source.localdata = _this17.schedulerList;
              _this17.dataAdapter = new jqx.dataAdapter(_this17.source); //this.resources.source = new jqx.dataAdapter(this.source);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMeetingList();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.myScheduler.ensureAppointmentVisible('id1');
        }
      }]);

      return MeetingsScheduledListComponent;
    }();

    MeetingsScheduledListComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_4__["MeetingService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduler', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxscheduler__WEBPACK_IMPORTED_MODULE_2__["jqxSchedulerComponent"])], MeetingsScheduledListComponent.prototype, "myScheduler", void 0);
    MeetingsScheduledListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meetings-scheduled-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./meetings-scheduled-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-scheduled-list/meetings-scheduled-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./meetings-scheduled-list.component.scss */
      "./src/app/ams/meetings/components/meetings-scheduled-list/meetings-scheduled-list.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_4__["MeetingService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])], MeetingsScheduledListComponent);
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-setup/meetings-setup.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-setup/meetings-setup.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsSetupMeetingsSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tZWV0aW5ncy9jb21wb25lbnRzL21lZXRpbmdzLXNldHVwL21lZXRpbmdzLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-setup/meetings-setup.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-setup/meetings-setup.component.ts ***!
    \************************************************************************************/

  /*! exports provided: MeetingsSetupComponent */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsSetupMeetingsSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingsSetupComponent", function () {
      return MeetingsSetupComponent;
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


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var MeetingsSetupComponent =
    /*#__PURE__*/
    function () {
      function MeetingsSetupComponent(lookupService, sharedService, cookieService) {
        _classCallCheck(this, MeetingsSetupComponent);

        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isMeetingCategoryLoaded = false;
        this.isMeetingCategorySubmitted = true;
        this.isMeetingCategoryNew = false;
        this.isMeetingCategoryUpdate = false;
        this.meetingCategory = "";
        this.meetingCategoryUpdateId = 0;
        this.meetingRecepients = "";
        this.alertMeetingMessage = "";
        this.isCategoryError = false;
        this.isCategorySuccess = false;
        this.meetingCategoryDesc = "";
        this.isViewMode = false;
      }

      _createClass(MeetingsSetupComponent, [{
        key: "addNewMeetingCategory",
        value: function addNewMeetingCategory() {
          this.isCategorySuccess = this.isCategoryError = false;
          this.meetingCategoryDesc = this.meetingCategory = "";
          this.isMeetingCategoryNew = true;
          this.isMeetingCategoryUpdate = false;
          this.isViewMode = false;
        }
      }, {
        key: "viewMeetingCategory",
        value: function viewMeetingCategory(item) {
          this.meetingCategory = this.meetingCategoryDesc = "";
          this.isCategorySuccess = this.isCategoryError = false;
          this.isMeetingCategoryUpdate = true;
          this.isMeetingCategoryNew = false;
          this.isViewMode = true;
          this.meetingCategory = item.lookupValueName;
          this.meetingCategoryDesc = item.description;
          this.meetingCategoryUpdateId = item.lookupValueId;
        }
      }, {
        key: "updateMeetingCategory",
        value: function updateMeetingCategory(item) {
          this.meetingCategory = this.meetingCategoryDesc = "";
          this.isCategorySuccess = this.isCategoryError = false;
          this.isMeetingCategoryUpdate = true;
          this.isMeetingCategoryNew = false;
          this.meetingCategory = item.lookupValueName;
          this.meetingCategoryDesc = item.description;
          this.meetingCategoryUpdateId = item.lookupValueId;
          this.isViewMode = false;
        }
      }, {
        key: "deleteMeetingCategory",
        value: function deleteMeetingCategory(item, index) {
          var _this18 = this;

          this.isMeetingCategoryLoaded = false;
          console.log(item);
          var params = {
            lookupValueId: item.lookupValueId,
            updateUserId: parseInt(this.cookieService.get('userId'))
          };
          this.lookupService.deleteLookupvalue(params).subscribe(function (res) {
            _this18.meetingCategoryData.splice(index, 1);

            _this18.isMeetingCategoryLoaded = true;

            _this18.removeCategoryBox();
          });
        }
      }, {
        key: "removeCategoryBox",
        value: function removeCategoryBox() {
          this.isMeetingCategoryNew = false;
          this.isMeetingCategoryUpdate = false;
          this.isCategoryError = false;
          this.isCategoryError = false;
          this.isViewMode = false;
        }
      }, {
        key: "submitMeetingCategoryForm",
        value: function submitMeetingCategoryForm(form) {
          var _this19 = this;

          this.isMeetingCategorySubmitted = false;

          if (this.isMeetingCategoryNew) {
            var details = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "lookupTypeId": 21,
              "lookupValueName": this.meetingCategory,
              "description": this.meetingCategoryDesc,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": null,
              "updatedOn": null
            };
            var params = {
              lookupvalue: details
            };
            this.lookupService.addLookupValue(params).subscribe(function (res) {
              if (res.message) {
                var _params2 = {
                  LookupTypeId: 21
                };

                _this19.lookupService.getLookupValueByLookupTypeId(_params2).subscribe(function (res) {
                  _this19.isMeetingCategorySubmitted = true;
                  _this19.isCategorySuccess = true;

                  _this19.sharedService.setAlertMessage("Meeting Type Added Successfully!");

                  _this19.meetingCategoryData = res.filter(function (item) {
                    return item.isActive;
                  });
                });

                _this19.removeCategoryBox();
              } else {
                _this19.isMeetingCategorySubmitted = true;
                _this19.isCategoryError = true;
                _this19.alertMeetingMessage = res.errorMessage;
              }
            });
          } else {
            var _details = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "lookupValueId": this.meetingCategoryUpdateId,
              "lookupTypeId": 21,
              "lookupValueName": this.meetingCategory,
              "description": this.meetingCategoryDesc,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": null,
              "updatedOn": null
            };
            var _params3 = {
              lookupvalue: _details
            };
            this.lookupService.updateLookupValue(_params3).subscribe(function (res) {
              if (res.message) {
                var _params4 = {
                  LookupTypeId: 21
                };

                _this19.lookupService.getLookupValueByLookupTypeId(_params4).subscribe(function (res) {
                  _this19.isMeetingCategorySubmitted = true;
                  _this19.isCategorySuccess = true;

                  _this19.sharedService.setAlertMessage("Meeting Type Updated Successfully!");

                  _this19.meetingCategoryData = res.filter(function (item) {
                    return item.isActive;
                  });
                });

                _this19.removeCategoryBox();
              } else {
                _this19.isMeetingCategorySubmitted = true;
                _this19.isCategoryError = true;
                _this19.alertMeetingMessage = res.errorMessage;
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.meeting = {};
          var params = {
            LookupTypeId: 21
          };
          this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
            _this20.isMeetingCategoryLoaded = true;
            _this20.meetingCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          });
          var meetingParams = {
            LookupTypeId: 22
          };
          this.lookupService.getLookupValueByLookupTypeId(meetingParams).subscribe(function (res) {
            _this20.isMeetingCategoryLoaded = true;
            _this20.recepientsTypeData = res.filter(function (item) {
              return item.isActive;
            });
          });
        }
      }]);

      return MeetingsSetupComponent;
    }();

    MeetingsSetupComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    MeetingsSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meetings-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./meetings-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-setup/meetings-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./meetings-setup.component.scss */
      "./src/app/ams/meetings/components/meetings-setup/meetings-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], MeetingsSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-view/meetings-view.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-view/meetings-view.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsViewMeetingsViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tZWV0aW5ncy9jb21wb25lbnRzL21lZXRpbmdzLXZpZXcvbWVldGluZ3Mtdmlldy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/meetings/components/meetings-view/meetings-view.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/meetings/components/meetings-view/meetings-view.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: MeetingsViewComponent */

  /***/
  function srcAppAmsMeetingsComponentsMeetingsViewMeetingsViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingsViewComponent", function () {
      return MeetingsViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MeetingsViewComponent =
    /*#__PURE__*/
    function () {
      function MeetingsViewComponent() {
        _classCallCheck(this, MeetingsViewComponent);
      }

      _createClass(MeetingsViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MeetingsViewComponent;
    }();

    MeetingsViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meetings-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./meetings-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/components/meetings-view/meetings-view.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./meetings-view.component.scss */
      "./src/app/ams/meetings/components/meetings-view/meetings-view.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MeetingsViewComponent);
    /***/
  },

  /***/
  "./src/app/ams/meetings/meetings-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ams/meetings/meetings-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MeetingsRoutingModule */

  /***/
  function srcAppAmsMeetingsMeetingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingsRoutingModule", function () {
      return MeetingsRoutingModule;
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


    var _components_meetings_reports_meetings_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/meetings-reports/meetings-reports.component */
    "./src/app/ams/meetings/components/meetings-reports/meetings-reports.component.ts");
    /* harmony import */


    var _components_meetings_setup_meetings_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/meetings-setup/meetings-setup.component */
    "./src/app/ams/meetings/components/meetings-setup/meetings-setup.component.ts");
    /* harmony import */


    var _components_meetings_view_meetings_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/meetings-view/meetings-view.component */
    "./src/app/ams/meetings/components/meetings-view/meetings-view.component.ts");
    /* harmony import */


    var _components_meetings_create_meetings_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/meetings-create/meetings-create.component */
    "./src/app/ams/meetings/components/meetings-create/meetings-create.component.ts");
    /* harmony import */


    var _components_meetings_scheduled_list_meetings_scheduled_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/meetings-scheduled-list/meetings-scheduled-list.component */
    "./src/app/ams/meetings/components/meetings-scheduled-list/meetings-scheduled-list.component.ts");
    /* harmony import */


    var _components_meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/meetings-list/meetings-list.component */
    "./src/app/ams/meetings/components/meetings-list/meetings-list.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, {
      path: 'create',
      component: _components_meetings_create_meetings_create_component__WEBPACK_IMPORTED_MODULE_6__["MeetingsCreateComponent"]
    }, {
      path: 'settings',
      component: _components_meetings_setup_meetings_setup_component__WEBPACK_IMPORTED_MODULE_4__["MeetingsSetupComponent"]
    }, {
      path: 'list',
      component: _components_meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_8__["MeetingsListComponent"]
    }, {
      path: 'scheduled-list',
      component: _components_meetings_scheduled_list_meetings_scheduled_list_component__WEBPACK_IMPORTED_MODULE_7__["MeetingsScheduledListComponent"]
    }, {
      path: 'view/:id',
      component: _components_meetings_view_meetings_view_component__WEBPACK_IMPORTED_MODULE_5__["MeetingsViewComponent"]
    }, {
      path: 'reports',
      component: _components_meetings_reports_meetings_reports_component__WEBPACK_IMPORTED_MODULE_3__["MeetingsReportsComponent"]
    }, {
      path: '**',
      redirectTo: 'settings',
      pathMatch: 'full'
    }];

    var MeetingsRoutingModule = function MeetingsRoutingModule() {
      _classCallCheck(this, MeetingsRoutingModule);
    };

    MeetingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MeetingsRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/meetings/meetings.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/ams/meetings/meetings.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMeetingsMeetingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tZWV0aW5ncy9tZWV0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/meetings/meetings.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ams/meetings/meetings.component.ts ***!
    \****************************************************/

  /*! exports provided: MeetingsComponent */

  /***/
  function srcAppAmsMeetingsMeetingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingsComponent", function () {
      return MeetingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MeetingsComponent =
    /*#__PURE__*/
    function () {
      function MeetingsComponent() {
        _classCallCheck(this, MeetingsComponent);
      }

      _createClass(MeetingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MeetingsComponent;
    }();

    MeetingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meetings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./meetings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/meetings/meetings.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./meetings.component.scss */
      "./src/app/ams/meetings/meetings.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MeetingsComponent);
    /***/
  },

  /***/
  "./src/app/ams/meetings/meetings.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/ams/meetings/meetings.module.ts ***!
    \*************************************************/

  /*! exports provided: MeetingsModule */

  /***/
  function srcAppAmsMeetingsMeetingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingsModule", function () {
      return MeetingsModule;
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


    var _meetings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./meetings-routing.module */
    "./src/app/ams/meetings/meetings-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _meetings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./meetings.component */
    "./src/app/ams/meetings/meetings.component.ts");
    /* harmony import */


    var _components_meetings_reports_meetings_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/meetings-reports/meetings-reports.component */
    "./src/app/ams/meetings/components/meetings-reports/meetings-reports.component.ts");
    /* harmony import */


    var _components_meetings_setup_meetings_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/meetings-setup/meetings-setup.component */
    "./src/app/ams/meetings/components/meetings-setup/meetings-setup.component.ts");
    /* harmony import */


    var _components_meetings_view_meetings_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/meetings-view/meetings-view.component */
    "./src/app/ams/meetings/components/meetings-view/meetings-view.component.ts");
    /* harmony import */


    var _components_meetings_create_meetings_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/meetings-create/meetings-create.component */
    "./src/app/ams/meetings/components/meetings-create/meetings-create.component.ts");
    /* harmony import */


    var _components_meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/meetings-list/meetings-list.component */
    "./src/app/ams/meetings/components/meetings-list/meetings-list.component.ts");
    /* harmony import */


    var _components_meetings_scheduled_list_meetings_scheduled_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/meetings-scheduled-list/meetings-scheduled-list.component */
    "./src/app/ams/meetings/components/meetings-scheduled-list/meetings-scheduled-list.component.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_meeting_add_minutes_meeting_add_minutes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/meeting-add-minutes/meeting-add-minutes.component */
    "./src/app/ams/meetings/components/meeting-add-minutes/meeting-add-minutes.component.ts");
    /* harmony import */


    var _components_meeting_edit_display_meeting_edit_display_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/meeting-edit-display/meeting-edit-display.component */
    "./src/app/ams/meetings/components/meeting-edit-display/meeting-edit-display.component.ts");

    var MeetingsModule = function MeetingsModule() {
      _classCallCheck(this, MeetingsModule);
    };

    MeetingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_meetings_component__WEBPACK_IMPORTED_MODULE_5__["MeetingsComponent"], _components_meetings_reports_meetings_reports_component__WEBPACK_IMPORTED_MODULE_6__["MeetingsReportsComponent"], _components_meetings_setup_meetings_setup_component__WEBPACK_IMPORTED_MODULE_7__["MeetingsSetupComponent"], _components_meetings_view_meetings_view_component__WEBPACK_IMPORTED_MODULE_8__["MeetingsViewComponent"], _components_meetings_create_meetings_create_component__WEBPACK_IMPORTED_MODULE_9__["MeetingsCreateComponent"], _components_meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_10__["MeetingsListComponent"], _components_meetings_scheduled_list_meetings_scheduled_list_component__WEBPACK_IMPORTED_MODULE_11__["MeetingsScheduledListComponent"], _components_meeting_add_minutes_meeting_add_minutes_component__WEBPACK_IMPORTED_MODULE_14__["MeetingAddMinutesComponent"], _components_meeting_edit_display_meeting_edit_display_component__WEBPACK_IMPORTED_MODULE_15__["MeetingEditDisplayComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _meetings_routing_module__WEBPACK_IMPORTED_MODULE_3__["MeetingsRoutingModule"]],
      bootstrap: [_meetings_component__WEBPACK_IMPORTED_MODULE_5__["MeetingsComponent"]]
    })], MeetingsModule);
    /***/
  }
}]);
//# sourceMappingURL=meetings-meetings-module-es5.js.map