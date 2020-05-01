function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meetings-meetings-module"], {
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


    __webpack_exports__["default"] = "<div class=\"meetings-setup-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isMeetingCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes mb-30\" *ngIf=\"isMeetingCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Meeting Types</h4>\n\t\t<ng-container *ngFor=\"let item of meetingCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body no-hover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/meetings/view/{{item.lookupValueId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateMeetingCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-none\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteMeetingCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\n\t\t\t\t\t\t<p>&nbsp;</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewMeetingCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Type</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mb-30\" *ngIf=\"isMeetingCategoryNew || isMeetingCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isMeetingCategoryNew\">Add Meeting Category</h6>\n    \t\t\t<h6 *ngIf=\"!isMeetingCategoryNew\">Update Meeting Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"alertMeetingMessage\" [isError]=\"isCategoryError\" [isSuccess]=\"isCategorySuccess\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isMeetingCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isMeetingCategorySubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addMeetingCategoryForm = \"ngForm\" name=\"addMeetingCategoryForm\" (ngSubmit)=\"submitMeetingCategoryForm(addMeetingCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"meetingCategory\" [(ngModel)]=\"meetingCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addMeetingCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n\t<ng-container>\n\t\t\n\t\t<form #addmeetingForm = \"ngForm\" name=\"addmeetingForm\" (ngSubmit)=\"submitAddmeetingForm(addmeetingForm)\"  novalidate>\n\t\t\t\n\t\t\t<h4 class=\"main-title-mini\">Create Meeting</h4>\n\n\t\t\t<div class=\"card\">\n\t\t\t\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Select Category*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"meetingCategory\" \n\t\t\t\t\t\t\t        id=\"meetingCategory\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"meetingCategory\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of meetingCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Receipents*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"meetingRecepients\" \n\t\t\t\t\t\t\t        id=\"meetingRecepients\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"meetingRecepients\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of recepientsTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Select Date*</label>\n\t\t\t                    <input class=\"form-control\" name=\"meetingDate\" [owlDateTime]=\"meetingDate\" [owlDateTimeTrigger]=\"meetingDate\" placeholder=\"Date\" [(ngModel)]=\"meeting.meetingDate\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #meetingDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"meetingDate\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Start time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"meetingStartTime\" [owlDateTime]=\"meetingStartTime\" [owlDateTimeTrigger]=\"meetingStartTime\" placeholder=\"Date Time\" [(ngModel)]=\"meeting.meetingStartTime\">\n\t\t\t\t\t\t\t\t<owl-date-time #meetingStartTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"meetingStartTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>End time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"meetingEndTime\" [owlDateTime]=\"meetingEndTime\" [owlDateTimeTrigger]=\"meetingEndTime\" placeholder=\"Date Time\" [(ngModel)]=\"meeting.meetingEndTime\">\n\t\t\t\t\t\t\t\t<owl-date-time #meetingEndTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"meetingEndTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Subject*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"meetingSubject\" [(ngModel)]=\"meeting.meetingSubject\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Message*</label>\n\t\t\t                    <textarea placeholder=\"Enter value\" name=\"meetingMessage\" [(ngModel)]=\"meeting.meetingMessage\" required></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addmeetingForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\n</div>";
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


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
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
      }

      _createClass(MeetingsSetupComponent, [{
        key: "addNewMeetingCategory",
        value: function addNewMeetingCategory() {
          this.isMeetingCategoryNew = true;
          this.isMeetingCategoryUpdate = false;
        }
      }, {
        key: "updateMeetingCategory",
        value: function updateMeetingCategory(item) {
          this.isMeetingCategoryUpdate = true;
          this.isMeetingCategoryNew = false;
          this.meetingCategory = item.lookupValueName;
          this.meetingCategoryUpdateId = item.lookupValueId;
        }
      }, {
        key: "deleteMeetingCategory",
        value: function deleteMeetingCategory(item, index) {
          var _this = this;

          this.isMeetingCategoryLoaded = false;
          console.log(item);
          var params = {
            lookupValueId: item.lookupValueId,
            updateUserId: parseInt(this.cookieService.get('userId'))
          };
          this.lookupService.deleteLookupvalue(params).subscribe(function (res) {
            _this.meetingCategoryData.splice(index, 1);

            _this.isMeetingCategoryLoaded = true;
          });
        }
      }, {
        key: "removeCategoryBox",
        value: function removeCategoryBox() {
          this.isMeetingCategoryNew = false;
          this.isMeetingCategoryUpdate = false;
          this.isCategoryError = false;
          this.isCategoryError = false;
        }
      }, {
        key: "submitMeetingCategoryForm",
        value: function submitMeetingCategoryForm(form) {
          var _this2 = this;

          this.isMeetingCategorySubmitted = false;

          if (this.isMeetingCategoryNew) {
            var details = {
              "lookupTypeId": 21,
              "lookupValueName": this.meetingCategory,
              "description": this.meetingCategory,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": "2019-11-20T16:51:24.105Z",
              "updatedBy": 0,
              "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            this.lookupService.addLookupValue(details).subscribe(function (res) {
              if (res.message) {
                _this2.lookupService.getLookupValueByLookupTypeId(21).subscribe(function (res) {
                  _this2.isMeetingCategorySubmitted = true;
                  _this2.isCategorySuccess = true;
                  _this2.alertMeetingMessage = "Meeting Type Added Successfully!";
                  _this2.meetingCategoryData = res.filter(function (item) {
                    return item.isActive;
                  });
                });
              } else {
                _this2.isMeetingCategorySubmitted = true;
                _this2.isCategoryError = true;
                _this2.alertMeetingMessage = res.errorMessage;
              }
            });
          } else {
            var _details = {
              "lookupValueId": this.meetingCategoryUpdateId,
              "lookupTypeId": 21,
              "lookupValueName": this.meetingCategory,
              "description": this.meetingCategory,
              "isActive": true,
              "insertedBy": 0,
              "insertedOn": "2019-11-20T16:51:24.105Z",
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            this.lookupService.updateLookupValue(_details).subscribe(function (res) {
              if (res.message) {
                _this2.lookupService.getLookupValueByLookupTypeId(21).subscribe(function (res) {
                  _this2.isMeetingCategorySubmitted = true;
                  _this2.isCategorySuccess = true;
                  _this2.alertMeetingMessage = "Meeting Type Updated Successfully!";
                  _this2.meetingCategoryData = res.filter(function (item) {
                    return item.isActive;
                  });
                });
              } else {
                _this2.isMeetingCategorySubmitted = true;
                _this2.isCategoryError = true;
                _this2.alertMeetingMessage = res.errorMessage;
              }
            });
          }
        }
      }, {
        key: "submitAddmeetingForm",
        value: function submitAddmeetingForm(form) {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.meeting = {};
          this.lookupService.getLookupValueByLookupTypeId(21).subscribe(function (res) {
            _this3.isMeetingCategoryLoaded = true;
            _this3.meetingCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          });
          this.lookupService.getLookupValueByLookupTypeId(22).subscribe(function (res) {
            _this3.isMeetingCategoryLoaded = true;
            _this3.recepientsTypeData = res.filter(function (item) {
              return item.isActive;
            });
          });
        }
      }]);

      return MeetingsSetupComponent;
    }();

    MeetingsSetupComponent.ctorParameters = function () {
      return [{
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], MeetingsSetupComponent);
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

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, {
      path: 'settings',
      component: _components_meetings_setup_meetings_setup_component__WEBPACK_IMPORTED_MODULE_4__["MeetingsSetupComponent"]
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

    var MeetingsModule = function MeetingsModule() {
      _classCallCheck(this, MeetingsModule);
    };

    MeetingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_meetings_component__WEBPACK_IMPORTED_MODULE_5__["MeetingsComponent"], _components_meetings_reports_meetings_reports_component__WEBPACK_IMPORTED_MODULE_6__["MeetingsReportsComponent"], _components_meetings_setup_meetings_setup_component__WEBPACK_IMPORTED_MODULE_7__["MeetingsSetupComponent"], _components_meetings_view_meetings_view_component__WEBPACK_IMPORTED_MODULE_8__["MeetingsViewComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _meetings_routing_module__WEBPACK_IMPORTED_MODULE_3__["MeetingsRoutingModule"]],
      bootstrap: [_meetings_component__WEBPACK_IMPORTED_MODULE_5__["MeetingsComponent"]]
    })], MeetingsModule);
    /***/
  }
}]);
//# sourceMappingURL=meetings-meetings-module-es5.js.map