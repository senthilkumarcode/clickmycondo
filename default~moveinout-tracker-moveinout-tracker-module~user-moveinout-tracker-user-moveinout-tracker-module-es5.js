function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~moveinout-tracker-moveinout-tracker-module~user-moveinout-tracker-user-moveinout-tracker-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-moveinout-tracker/components/user-movein/user-movein.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-moveinout-tracker/components/user-movein/user-movein.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserMoveinoutTrackerComponentsUserMoveinUserMoveinComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"user-movein-maintain-wrapper\">\n\t\t\n\t<div class=\"d-flex align-items-center\">\n\t\t<h5 class=\"mb-4\">\n\t\t\t<span *ngIf=\"!isEdit\">Add Movein</span>\n\t    \t<span *ngIf=\"isEdit\">Edit Movein</span>\n\t\t</h5>\n\n\t\t<!-- <div class=\"relative-card ml-auto\" *ngIf=\"isEdit\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/moveinout-tracker/movein\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">All Movein</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n\n\t<div class=\"card clear mb-3 details-card\">\n\t\t<div class=\"card-header no-border\" *ngIf=\"isDataLoaded\">\n    \t\t<div class=\"sub-details\">\n    \t\t\t<div class=\"lists\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<img class=\"mr-3 svg\" src=\"assets/images/user-liner-icon.svg\" width=\"20\">\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h6 class=\"head\">User </h6>\n\t\t\t\t\t\t\t<p>{{userName}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<img class=\"mr-3 svg\" src=\"assets/images/apartment2-icon.svg\" width=\"20\">\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h6 class=\"head\">Block No </h6>\n\t\t\t\t\t\t\t<p>{{apartmentBlockNumber}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<img class=\"mr-3 svg\" src=\"assets/images/apartment2-icon.svg\" width=\"20\">\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h6 class=\"head\">Unit No </h6>\n\t\t\t\t\t\t\t<p>{{apartmentBlockUnitNumber}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\t</div>\n\n\t<div class=\"card clear\">\n\n\t\t<form #addMoveInForm = \"ngForm\" name=\"addMoveInForm\" (ngSubmit)=\"submitAddMoveInForm(addMoveInForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isMoveinSubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isMoveinSubmitted\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Family Count*</label>\n\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter count\" name=\"familyCount\" [(ngModel)]=\"movein.familyCount\" required [readonly]=\"isEdit\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>MoveIn Date*</label>\n\t\t\t                    <input class=\"form-control\" name=\"moveInDate\" [owlDateTime]=\"moveInDate\" [owlDateTimeTrigger]=\"moveInDate\" placeholder=\"Date\" [(ngModel)]=\"movein.inDate\">\n\t\t\t\t\t\t\t\t<owl-date-time #moveInDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>MoveIn Time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"moveInTime\" [owlDateTime]=\"moveInTime\" [owlDateTimeTrigger]=\"moveInTime\" placeholder=\"Date\" [(ngModel)]=\"movein.inTime\">\n\t\t\t\t\t\t\t\t<owl-date-time #moveInTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"clock\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box select-box\">\n\t\t\t\t\t\t\t\t<label>Requested By*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"raisedBy\" \n\t\t\t\t\t\t\t        id=\"raisedBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"movein.reqUserId\" required [disabled]=\"isEdit\">\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of raisedByData\" [value]=\"item.userId\">{{ item.firstName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Comments</label>\n\t\t\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"comment\" [(ngModel)]=\"movein.comment\" >\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body border-top\" *ngIf=\"isMoveinSubmitted && !isEdit\">\n\t\t\t\t<h6 class=\"sub-title mb-20\">\n\t\t\t\t\t<span class=\"icon-wrapper\"><i-feather class=\"icon upload\" name=\"upload\" ></i-feather></span>\n\t\t\t\t\t<span>Document to upload</span>\n\t\t\t\t</h6>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box select-box\">\n\t\t\t\t\t\t\t<label>Document type</label>\n\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t        name=\"documentConfigId\" \n\t\t\t\t\t\t        id=\"documentConfigId\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"documentConfigId\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of documentDataList\" [value]=\"item.id\">{{ item.description }}</option>\n\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Comments</label>\n\t\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"comment\" [(ngModel)]=\"documentComment\" >\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"input-box mb-0\">\n\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\" [ngClass]=\"documentConfigId == '' ? 'disabled' : ''\">\n\t\t\t\t\t\t    <input class=\"form-control\"  #uploader type=\"file\"\n\t\t\t\t\t\t    (change)=\"uploadFile($event)\" multiple>\n\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Add file</label>\n\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isFileAdded\">\n\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfFiles; let i = index\">\n\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n                \t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body border-top\" *ngIf=\"isMoveinSubmitted && isEdit\">\n\t\t\t\t<h6 class=\"sub-title mb-20\">\n\t\t\t\t\t<span class=\"icon-wrapper\"><i-feather class=\"icon upload\" name=\"file-text\" ></i-feather></span>\n\t\t\t\t\t<span>Uploaded Documents</span>\n\t\t\t\t</h6>\n\n\t\t\t\t<div class=\"file-lists mt-3\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" *ngFor=\"let item of uploadedDocumentList; let i = index\"></a>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body border-top\" *ngIf=\"isMoveinSubmitted\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"addMoveInForm.invalid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-moveinout-tracker/components/user-moveout/user-moveout.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-moveinout-tracker/components/user-moveout/user-moveout.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserMoveinoutTrackerComponentsUserMoveoutUserMoveoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"user-moveout-maintain-wrapper\">\n\t\n\t<div class=\"d-flex align-items-center\">\n\t\t<h5 class=\"mb-4\">\n\t\t\t<span *ngIf=\"!isEdit\">Add Moveout</span>\n\t    \t<span *ngIf=\"isEdit\">Edit Moveout</span>\n\t\t</h5>\n\n\t\t<div class=\"relative-card ml-auto\" *ngIf=\"isEdit\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/moveinout-tracker/moveout\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">All Movein</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card clear mb-3 details-card\">\n\t\t<div class=\"card-header no-border\" *ngIf=\"isDataLoaded\">\n    \t\t<div class=\"sub-details\">\n    \t\t\t<div class=\"lists\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<img class=\"mr-3 svg\" src=\"assets/images/user-liner-icon.svg\" width=\"20\">\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h6 class=\"head\">User </h6>\n\t\t\t\t\t\t\t<p>{{userName}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<img class=\"mr-3 svg\" src=\"assets/images/apartment2-icon.svg\" width=\"20\">\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h6 class=\"head\">Block No </h6>\n\t\t\t\t\t\t\t<p>{{apartmentBlockNumber}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<img class=\"mr-3 svg\" src=\"assets/images/apartment2-icon.svg\" width=\"20\">\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h6 class=\"head\">Unit No </h6>\n\t\t\t\t\t\t\t<p>{{apartmentBlockUnitNumber}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\t</div>\n\n\t<div class=\"card clear\">\n\t\t\n\t\t<form #addMoveOutForm = \"ngForm\" name=\"addMoveOutForm\" (ngSubmit)=\"submitAddMoveOutForm(addMoveOutForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isMoveoutSubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isMoveoutSubmitted\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Family Count*</label>\n\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter count\" name=\"familyCount\" [(ngModel)]=\"moveout.familyCount\" required [readonly]=\"isEdit\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>moveout Date*</label>\n\t\t\t                    <input class=\"form-control\" name=\"moveoutDate\" [owlDateTime]=\"moveoutDate\" [owlDateTimeTrigger]=\"moveoutDate\" placeholder=\"Date\" [(ngModel)]=\"moveout.outDate\">\n\t\t\t\t\t\t\t\t<owl-date-time #moveoutDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>moveout Time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"moveoutTime\" [owlDateTime]=\"moveoutTime\" [owlDateTimeTrigger]=\"moveoutTime\" placeholder=\"Date Time\" [(ngModel)]=\"moveout.outTime\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #moveoutTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"clock\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box select-box\">\n\t\t\t\t\t\t\t\t<label>Requested By*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"raisedBy\" \n\t\t\t\t\t\t\t        id=\"raisedBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"moveout.reqUserId\" required [disabled]=\"isEdit\">\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of raisedByData\" [value]=\"item.userId\">{{ item.firstName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Comments</label>\n\t\t\t\t                 <textarea placeholder=\"some text here\" name=\"comment\" [(ngModel)]=\"moveout.comment\"></textarea>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"addMoveOutForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./src/app/api/services/move-in-out.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/api/services/move-in-out.service.ts ***!
    \*****************************************************/

  /*! exports provided: MoveInOutService */

  /***/
  function srcAppApiServicesMoveInOutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveInOutService", function () {
      return MoveInOutService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-service */
    "./src/app/api/base-service.ts");
    /* harmony import */


    var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api-configuration */
    "./src/app/api/api-configuration.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* tslint:disable */


    var MoveInOutService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(MoveInOutService, _base_service__WEBPAC);

      function MoveInOutService(config, http) {
        _classCallCheck(this, MoveInOutService);

        return _possibleConstructorReturn(this, _getPrototypeOf(MoveInOutService).call(this, config, http));
      }
      /**
       * @param apartmentId undefined
       */


      _createClass(MoveInOutService, [{
        key: "getMoveInOutConfigByApartmentIdResponse",
        value: function getMoveInOutConfigByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/MoveInOut/getMoveInOutConfigByApartmentId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getMoveInOutConfigByApartmentId",
        value: function getMoveInOutConfigByApartmentId(apartmentId) {
          return this.getMoveInOutConfigByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param Id undefined
         */

      }, {
        key: "getMoveInOutConfigByIdResponse",
        value: function getMoveInOutConfigByIdResponse(Id) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (Id != null) __params = __params.set('Id', Id.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/MoveInOut/getMoveInOutConfigById", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param Id undefined
         */

      }, {
        key: "getMoveInOutConfigById",
        value: function getMoveInOutConfigById(Id) {
          return this.getMoveInOutConfigByIdResponse(Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param moveInOutConfig undefined
         */

      }, {
        key: "addMoveInOutConfigResponse",
        value: function addMoveInOutConfigResponse(moveInOutConfig) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = moveInOutConfig;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/addMoveInOutConfig", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param moveInOutConfig undefined
         */

      }, {
        key: "addMoveInOutConfig",
        value: function addMoveInOutConfig(moveInOutConfig) {
          return this.addMoveInOutConfigResponse(moveInOutConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param moveInOutConfig undefined
         */

      }, {
        key: "updateMoveInOutConfigResponse",
        value: function updateMoveInOutConfigResponse(moveInOutConfig) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = moveInOutConfig;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/updateMoveInOutConfig", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param moveInOutConfig undefined
         */

      }, {
        key: "updateMoveInOutConfig",
        value: function updateMoveInOutConfig(moveInOutConfig) {
          return this.updateMoveInOutConfigResponse(moveInOutConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `MoveInOutService.DeleteMoveInOutConfigParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `Id`:
         */

      }, {
        key: "deleteMoveInOutConfigResponse",
        value: function deleteMoveInOutConfigResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.Id != null) __params = __params.set('Id', params.Id.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/deleteMoveInOutConfig", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `MoveInOutService.DeleteMoveInOutConfigParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `Id`:
         */

      }, {
        key: "deleteMoveInOutConfig",
        value: function deleteMoveInOutConfig(params) {
          return this.deleteMoveInOutConfigResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getMoveInByApartmentIdResponse",
        value: function getMoveInByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/MoveInOut/getMoveInByApartmentId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getMoveInByApartmentId",
        value: function getMoveInByApartmentId(apartmentId) {
          return this.getMoveInByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param Id undefined
         */

      }, {
        key: "getMoveInByIdResponse",
        value: function getMoveInByIdResponse(Id) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (Id != null) __params = __params.set('Id', Id.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/MoveInOut/getMoveInById", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param Id undefined
         */

      }, {
        key: "getMoveInById",
        value: function getMoveInById(Id) {
          return this.getMoveInByIdResponse(Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param moveIn undefined
         */

      }, {
        key: "addMoveInResponse",
        value: function addMoveInResponse(moveIn) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = moveIn;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/addMoveIn", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param moveIn undefined
         */

      }, {
        key: "addMoveIn",
        value: function addMoveIn(moveIn) {
          return this.addMoveInResponse(moveIn).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param moveIn undefined
         */

      }, {
        key: "updateMoveInResponse",
        value: function updateMoveInResponse(moveIn) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = moveIn;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/updateMoveIn", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param moveIn undefined
         */

      }, {
        key: "updateMoveIn",
        value: function updateMoveIn(moveIn) {
          return this.updateMoveInResponse(moveIn).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `MoveInOutService.DeleteMoveInParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `Id`:
         */

      }, {
        key: "deleteMoveInResponse",
        value: function deleteMoveInResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.Id != null) __params = __params.set('Id', params.Id.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/deleteMoveIn", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `MoveInOutService.DeleteMoveInParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `Id`:
         */

      }, {
        key: "deleteMoveIn",
        value: function deleteMoveIn(params) {
          return this.deleteMoveInResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param moveInId undefined
         */

      }, {
        key: "getMoveInDetailsByMoveInIdResponse",
        value: function getMoveInDetailsByMoveInIdResponse(moveInId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (moveInId != null) __params = __params.set('moveInId', moveInId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/MoveInOut/getMoveInDetailsByMoveInId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param moveInId undefined
         */

      }, {
        key: "getMoveInDetailsByMoveInId",
        value: function getMoveInDetailsByMoveInId(moveInId) {
          return this.getMoveInDetailsByMoveInIdResponse(moveInId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param Id undefined
         */

      }, {
        key: "getMoveInDetailsByIdResponse",
        value: function getMoveInDetailsByIdResponse(Id) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (Id != null) __params = __params.set('Id', Id.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/MoveInOut/getMoveInDetailsById", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param Id undefined
         */

      }, {
        key: "getMoveInDetailsById",
        value: function getMoveInDetailsById(Id) {
          return this.getMoveInDetailsByIdResponse(Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `MoveInOutService.AddMoveInDetailsParams` containing the following parameters:
         *
         * - `moveIn`:
         *
         * - `file`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "addMoveInDetailsResponse",
        value: function addMoveInDetailsResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;

          var __formData = new FormData();

          __body = __formData;
          __body = params.moveIn;

          if (params.file != null) {
            __formData.append('file', params.file);
          }

          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/addMoveInDetails", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `MoveInOutService.AddMoveInDetailsParams` containing the following parameters:
         *
         * - `moveIn`:
         *
         * - `file`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "addMoveInDetails",
        value: function addMoveInDetails(params) {
          return this.addMoveInDetailsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `MoveInOutService.UpdateMoveInDetailsParams` containing the following parameters:
         *
         * - `moveIn`:
         *
         * - `file`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "updateMoveInDetailsResponse",
        value: function updateMoveInDetailsResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;

          var __formData = new FormData();

          __body = __formData;
          __body = params.moveIn;

          if (params.file != null) {
            __formData.append('file', params.file);
          }

          if (params.apartmentId != null) __params = __params.set('apartmentId', params.apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/updateMoveInDetails", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `MoveInOutService.UpdateMoveInDetailsParams` containing the following parameters:
         *
         * - `moveIn`:
         *
         * - `file`:
         *
         * - `apartmentId`:
         */

      }, {
        key: "updateMoveInDetails",
        value: function updateMoveInDetails(params) {
          return this.updateMoveInDetailsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `MoveInOutService.DeleteMoveInDetailsParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `Id`:
         */

      }, {
        key: "deleteMoveInDetailsResponse",
        value: function deleteMoveInDetailsResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.Id != null) __params = __params.set('Id', params.Id.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/deleteMoveInDetails", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `MoveInOutService.DeleteMoveInDetailsParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `Id`:
         */

      }, {
        key: "deleteMoveInDetails",
        value: function deleteMoveInDetails(params) {
          return this.deleteMoveInDetailsResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getMoveOutByApartmentIdResponse",
        value: function getMoveOutByApartmentIdResponse(apartmentId) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (apartmentId != null) __params = __params.set('apartmentId', apartmentId.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/MoveInOut/getMoveOutByApartmentId", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param apartmentId undefined
         */

      }, {
        key: "getMoveOutByApartmentId",
        value: function getMoveOutByApartmentId(apartmentId) {
          return this.getMoveOutByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param Id undefined
         */

      }, {
        key: "getMoveOutByIdResponse",
        value: function getMoveOutByIdResponse(Id) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (Id != null) __params = __params.set('Id', Id.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/api/MoveInOut/getMoveOutById", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param Id undefined
         */

      }, {
        key: "getMoveOutById",
        value: function getMoveOutById(Id) {
          return this.getMoveOutByIdResponse(Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param moveOut undefined
         */

      }, {
        key: "addMoveOutResponse",
        value: function addMoveOutResponse(moveOut) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = moveOut;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/addMoveOut", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param moveOut undefined
         */

      }, {
        key: "addMoveOut",
        value: function addMoveOut(moveOut) {
          return this.addMoveOutResponse(moveOut).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param moveOut undefined
         */

      }, {
        key: "updateMoveOutResponse",
        value: function updateMoveOutResponse(moveOut) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          __body = moveOut;
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/updateMoveOut", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param moveOut undefined
         */

      }, {
        key: "updateMoveOut",
        value: function updateMoveOut(moveOut) {
          return this.updateMoveOutResponse(moveOut).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
        /**
         * @param params The `MoveInOutService.DeleteMoveOutParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `Id`:
         */

      }, {
        key: "deleteMoveOutResponse",
        value: function deleteMoveOutResponse(params) {
          var __params = this.newParams();

          var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

          var __body = null;
          if (params.deleteBy != null) __params = __params.set('deleteBy', params.deleteBy.toString());
          if (params.Id != null) __params = __params.set('Id', params.Id.toString());
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/MoveInOut/deleteMoveOut", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
            return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
          }));
        }
        /**
         * @param params The `MoveInOutService.DeleteMoveOutParams` containing the following parameters:
         *
         * - `deleteBy`:
         *
         * - `Id`:
         */

      }, {
        key: "deleteMoveOut",
        value: function deleteMoveOut(params) {
          return this.deleteMoveOutResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r.body;
          }));
        }
      }]);

      return MoveInOutService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

    MoveInOutService.getMoveInOutConfigByApartmentIdPath = '/api/MoveInOut/getMoveInOutConfigByApartmentId';
    MoveInOutService.getMoveInOutConfigByIdPath = '/api/MoveInOut/getMoveInOutConfigById';
    MoveInOutService.addMoveInOutConfigPath = '/api/MoveInOut/addMoveInOutConfig';
    MoveInOutService.updateMoveInOutConfigPath = '/api/MoveInOut/updateMoveInOutConfig';
    MoveInOutService.deleteMoveInOutConfigPath = '/api/MoveInOut/deleteMoveInOutConfig';
    MoveInOutService.getMoveInByApartmentIdPath = '/api/MoveInOut/getMoveInByApartmentId';
    MoveInOutService.getMoveInByIdPath = '/api/MoveInOut/getMoveInById';
    MoveInOutService.addMoveInPath = '/api/MoveInOut/addMoveIn';
    MoveInOutService.updateMoveInPath = '/api/MoveInOut/updateMoveIn';
    MoveInOutService.deleteMoveInPath = '/api/MoveInOut/deleteMoveIn';
    MoveInOutService.getMoveInDetailsByMoveInIdPath = '/api/MoveInOut/getMoveInDetailsByMoveInId';
    MoveInOutService.getMoveInDetailsByIdPath = '/api/MoveInOut/getMoveInDetailsById';
    MoveInOutService.addMoveInDetailsPath = '/api/MoveInOut/addMoveInDetails';
    MoveInOutService.updateMoveInDetailsPath = '/api/MoveInOut/updateMoveInDetails';
    MoveInOutService.deleteMoveInDetailsPath = '/api/MoveInOut/deleteMoveInDetails';
    MoveInOutService.getMoveOutByApartmentIdPath = '/api/MoveInOut/getMoveOutByApartmentId';
    MoveInOutService.getMoveOutByIdPath = '/api/MoveInOut/getMoveOutById';
    MoveInOutService.addMoveOutPath = '/api/MoveInOut/addMoveOut';
    MoveInOutService.updateMoveOutPath = '/api/MoveInOut/updateMoveOut';
    MoveInOutService.deleteMoveOutPath = '/api/MoveInOut/deleteMoveOut';

    MoveInOutService.ctorParameters = function () {
      return [{
        type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MoveInOutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], MoveInOutService);
    /***/
  },

  /***/
  "./src/app/user/user-moveinout-tracker/components/user-movein/user-movein.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/user/user-moveinout-tracker/components/user-movein/user-movein.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserMoveinoutTrackerComponentsUserMoveinUserMoveinComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL3VzZXItbW92ZWluL3VzZXItbW92ZWluLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user-moveinout-tracker/components/user-movein/user-movein.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/user/user-moveinout-tracker/components/user-movein/user-movein.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: UserMoveinComponent */

  /***/
  function srcAppUserUserMoveinoutTrackerComponentsUserMoveinUserMoveinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMoveinComponent", function () {
      return UserMoveinComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/move-in-out.service */
    "./src/app/api/services/move-in-out.service.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

    var UserMoveinComponent =
    /*#__PURE__*/
    function () {
      function UserMoveinComponent(router, route, moveInOutService, userService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, UserMoveinComponent);

        this.router = router;
        this.route = route;
        this.moveInOutService = moveInOutService;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.apartmentBlockNumber = "";
        this.apartmentBlockUnitNumber = "";
        this.isMoveinSubmitted = true;
        this.isEdit = false;
        this.isError = false;
        this.alertMessage = "";
        this.isDataLoaded = false;
        this.userName = "";
        this.documentConfigId = "";
        this.documentComment = "";
        this.isFileAdded = false;
        this.fileList = [];
        this.listOfFiles = [];
      }

      _createClass(UserMoveinComponent, [{
        key: "getBlock",
        value: function getBlock() {
          var _this = this;

          this.apartmentService.getApartmentBlockUnitById(parseInt(this.apartmentBlockUnitId)).subscribe(function (res) {
            _this.apartmentBlockNumber = res[0].apartmentBlockNumber;
            _this.apartmentBlockUnitNumber = res[0].apartmentBlockUnitNumber;
            _this.isDataLoaded = true;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          this.isFileAdded = true;

          for (var i = 0; i <= event.target.files.length - 1; i++) {
            var selectedFile = event.target.files[i];
            this.fileList.push(selectedFile);
            this.listOfFiles.push({
              'name': selectedFile.name,
              'size': selectedFile.size
            });
            console.log(this.fileList[0]);
          }
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(index) {
          // Delete the item from fileNames list
          this.listOfFiles.splice(index, 1); // delete file from FileList

          this.fileList.splice(index, 1);
          this.selectedFile = null;

          if (this.fileList.length == 0 && this.listOfFiles.length == 0) {
            this.isFileAdded = false;
          }
        }
      }, {
        key: "bytesToSize",
        value: function bytesToSize(bytes) {
          if (bytes < 1024) return bytes + " Bytes";else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";else return (bytes / 1073741824).toFixed(3) + " GB";
        }
      }, {
        key: "isFileEmpty",
        value: function isFileEmpty() {
          return this.fileList.length == 0;
        }
      }, {
        key: "submitAddMoveInForm",
        value: function submitAddMoveInForm(form) {
          var _this2 = this;

          this.isMoveinSubmitted = false;

          if (!this.isEdit) {
            var details = {
              "inDate": this.movein.inDate,
              "inTime": moment__WEBPACK_IMPORTED_MODULE_9__(this.movein.inTime).format('HH:mm:ss'),
              "familyCount": this.movein.familyCount,
              "comments": this.movein.comment,
              "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
              "reqUserId": parseInt(this.movein.reqUserId),
              "statusId": 306,
              "approvedBy": null,
              "approvedDate": null,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": new Date().toISOString(),
              "apartmentId": parseInt(this.cookieService.get('apartmentId'))
            };
            this.moveInOutService.addMoveIn(details).subscribe(function (res) {
              if (res.message) {
                var fileDetails = {
                  "moveInId": parseInt(res.message),
                  "moveInOutConfigId": parseInt(_this2.documentConfigId),
                  "fileDetailsId": 0,
                  "comments": _this2.documentComment,
                  "isActive": true,
                  "insertedBy": parseInt(_this2.cookieService.get('userId')),
                  "insertedOn": new Date().toISOString(),
                  "updatedBy": null,
                  "updatedOn": null
                };
                var fileParams = {
                  moveIn: fileDetails,
                  file: _this2.fileList[0],
                  apartmentId: parseInt(_this2.cookieService.get('apartmentId'))
                };

                _this2.moveInOutService.addMoveInDetails(fileParams).subscribe(function (res) {
                  if (res.message) {
                    _this2.isMoveinSubmitted = true;

                    _this2.sharedService.setAlertMessage("Movein added successfully");
                  } else {
                    _this2.isMoveinSubmitted = true;
                    _this2.isError = true;
                    _this2.alertMessage = res.errorMessage;
                  }
                }, function (error) {
                  _this2.isMoveinSubmitted = true;
                });
              } else {
                _this2.isMoveinSubmitted = true;
                _this2.isError = true;
                _this2.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this2.isMoveinSubmitted = true;
            });
          } else {
            var _details = {
              "id": this.movein.id,
              "inDate": this.movein.inDate,
              "inTime": moment__WEBPACK_IMPORTED_MODULE_9__(this.movein.inTime).format('HH:mm:ss'),
              "familyCount": this.movein.familyCount,
              "comments": this.movein.comment,
              "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
              "reqUserId": parseInt(this.movein.reqUserId),
              "statusId": 306,
              "approvedBy": null,
              "approvedDate": null,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": new Date().toISOString(),
              "apartmentId": parseInt(this.cookieService.get('apartmentId'))
            };
            this.moveInOutService.updateMoveIn(_details).subscribe(function (res) {
              if (res.message) {
                _this2.isMoveinSubmitted = true;

                _this2.sharedService.setAlertMessage("Movein updated successfully");

                _this2.router.navigate(['ams/moveinout-tracker/movein']);
              } else {
                _this2.isMoveinSubmitted = true;
                _this2.isError = true;
                _this2.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this2.isMoveinSubmitted = true;
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.movein = {};
          this.movein.statusId = "";
          this.movein.reqUserId = "";
          this.movein.comment = "";
          this.apartmentBlockUnitId = "";

          if (this.route.params['value'].id != undefined) {
            this.isEdit = true;
            this.moveInOutService.getMoveInById(this.route.params['value'].id).subscribe(function (res) {
              _this3.movein = res[0];
              _this3.apartmentBlockUnitId = "" + _this3.movein.apartmentBlockUnitId;

              _this3.getBlock();

              _this3.movein.inTime = moment__WEBPACK_IMPORTED_MODULE_9__(_this3.movein.inTime, 'HH:mm:ss').toDate();
            }, function (error) {});
          } else {
            this.apartmentService.getAllApartmentBlockUnitUsersByUserId(parseInt(this.cookieService.get('userId'))).subscribe(function (res) {
              if (res == undefined || res.length == 0) {
                _this3.apartmentBlockUnitId = "";
              } else {
                _this3.apartmentBlockUnitId = "" + res[0].apartmentBlockUnitId;

                _this3.getBlock();
              }
            }, function (error) {});
          } //get apartment blocks


          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this3.blocksData = res;
          }); //status 

          this.lookupService.getLookupValueByLookupTypeId(73).subscribe(function (res) {
            _this3.statusTypeData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
          this.moveInOutService.getMoveInOutConfigByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this3.documentDataList = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {
            console.log(error);
          }); //get all users

          this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this3.raisedByData = res;

            if (_this3.cookieService.get('userRole') == 'Tenant' || _this3.cookieService.get('userRole') == 'Owner') {
              _this3.raisedByData = res.filter(function (item) {
                return item.userId == parseInt(_this3.cookieService.get('userId'));
              });
              _this3.movein.reqUserId = _this3.raisedByData[0].userId;
              _this3.userName = _this3.raisedByData[0].firstName + ' ' + _this3.raisedByData[0].lastName;
            } else {
              _this3.raisedByData = res.filter(function (item) {
                return item.userId == parseInt(_this3.movein.reqUserId);
              });
              _this3.userName = _this3.raisedByData[0].firstName + ' ' + _this3.raisedByData[0].lastName;
            }
          }, function (error) {});
        }
      }]);

      return UserMoveinComponent;
    }();

    UserMoveinComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    UserMoveinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-movein',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-movein.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-moveinout-tracker/components/user-movein/user-movein.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-movein.component.scss */
      "./src/app/user/user-moveinout-tracker/components/user-movein/user-movein.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], UserMoveinComponent);
    /***/
  },

  /***/
  "./src/app/user/user-moveinout-tracker/components/user-moveout/user-moveout.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/user/user-moveinout-tracker/components/user-moveout/user-moveout.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserMoveinoutTrackerComponentsUserMoveoutUserMoveoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL3VzZXItbW92ZW91dC91c2VyLW1vdmVvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/user-moveinout-tracker/components/user-moveout/user-moveout.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/user/user-moveinout-tracker/components/user-moveout/user-moveout.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: UserMoveoutComponent */

  /***/
  function srcAppUserUserMoveinoutTrackerComponentsUserMoveoutUserMoveoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMoveoutComponent", function () {
      return UserMoveoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/move-in-out.service */
    "./src/app/api/services/move-in-out.service.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

    var UserMoveoutComponent =
    /*#__PURE__*/
    function () {
      function UserMoveoutComponent(router, route, moveInOutService, userService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, UserMoveoutComponent);

        this.router = router;
        this.route = route;
        this.moveInOutService = moveInOutService;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.apartmentBlockNumber = "";
        this.apartmentBlockUnitNumber = "";
        this.isMoveoutSubmitted = true;
        this.isEdit = false;
        this.isError = false;
        this.alertMessage = "";
        this.isDataLoaded = false;
        this.userName = "";
      }

      _createClass(UserMoveoutComponent, [{
        key: "getBlock",
        value: function getBlock() {
          var _this4 = this;

          this.apartmentService.getApartmentBlockUnitById(parseInt(this.apartmentBlockUnitId)).subscribe(function (res) {
            _this4.apartmentBlockNumber = res[0].apartmentBlockNumber;
            _this4.apartmentBlockUnitNumber = res[0].apartmentBlockUnitNumber;
            _this4.isDataLoaded = true;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "submitAddMoveOutForm",
        value: function submitAddMoveOutForm(form) {
          var _this5 = this;

          this.isMoveoutSubmitted = false;

          if (!this.isEdit) {
            var details = {
              "outDate": this.moveout.inDate,
              "outTime": moment__WEBPACK_IMPORTED_MODULE_9__(this.moveout.inTime).format('HH:mm:ss'),
              "familyCount": this.moveout.familyCount,
              "comments": this.moveout.comment,
              "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
              "reqUserId": parseInt(this.moveout.reqUserId),
              "statusId": 306,
              "approvedBy": null,
              "approvedDate": null,
              "noDue": true,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": new Date().toISOString(),
              "apartmentId": parseInt(this.cookieService.get('apartmentId'))
            };
            this.moveInOutService.addMoveOut(details).subscribe(function (res) {
              if (res.message) {
                _this5.isMoveoutSubmitted = true;

                _this5.sharedService.setAlertMessage("Moveout added successfully");
              } else {
                _this5.isMoveoutSubmitted = true;
                _this5.isError = true;
                _this5.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this5.isMoveoutSubmitted = true;
            });
          } else {
            var _details2 = {
              "id": this.moveout.id,
              "outDate": this.moveout.inDate,
              "outTime": moment__WEBPACK_IMPORTED_MODULE_9__(this.moveout.inTime).format('HH:mm:ss'),
              "familyCount": this.moveout.familyCount,
              "comments": this.moveout.comment,
              "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
              "reqUserId": parseInt(this.moveout.reqUserId),
              "statusId": 306,
              "approvedBy": null,
              "approvedDate": null,
              "noDue": true,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": new Date().toISOString(),
              "apartmentId": parseInt(this.cookieService.get('apartmentId'))
            };
            this.moveInOutService.updateMoveOut(_details2).subscribe(function (res) {
              if (res.message) {
                _this5.isMoveoutSubmitted = true;

                _this5.sharedService.setAlertMessage("Moveout updated successfully");

                _this5.router.navigate(['ams/moveinout-tracker/moveout']);
              } else {
                _this5.isMoveoutSubmitted = true;
                _this5.isError = true;
                _this5.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this5.isMoveoutSubmitted = true;
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.moveout = {};
          this.moveout.statusId = "";
          this.moveout.reqUserId = "";
          this.moveout.comment = "";

          if (this.route.params['value'].id != undefined) {
            this.isEdit = true;
            this.moveInOutService.getMoveOutById(this.route.params['value'].id).subscribe(function (res) {
              _this6.moveout = res[0];
              _this6.apartmentBlockUnitId = "" + _this6.moveout.apartmentBlockUnitId;

              _this6.getBlock();

              _this6.moveout.outTime = moment__WEBPACK_IMPORTED_MODULE_9__(_this6.moveout.outTime, 'HH:mm:ss').toDate();
            }, function (error) {});
          } else {
            this.apartmentService.getAllApartmentBlockUnitUsersByUserId(parseInt(this.cookieService.get('userId'))).subscribe(function (res) {
              if (res == undefined || res.length == 0) {
                _this6.apartmentBlockUnitId = "";
              } else {
                _this6.apartmentBlockUnitId = "" + res[0].apartmentBlockUnitId;

                _this6.getBlock();
              }
            }, function (error) {});
          } //get apartment blocks


          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this6.blocksData = res;
          }); //status 

          this.lookupService.getLookupValueByLookupTypeId(9).subscribe(function (res) {
            _this6.statusTypeData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //get all users

          this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this6.raisedByData = res;

            if (_this6.cookieService.get('userRole') == 'Tenant' || _this6.cookieService.get('userRole') == 'Owner') {
              _this6.raisedByData = res.filter(function (item) {
                return item.userId == parseInt(_this6.cookieService.get('userId'));
              });
              _this6.moveout.reqUserId = _this6.raisedByData[0].userId;
              _this6.userName = _this6.raisedByData[0].firstName + ' ' + _this6.raisedByData[0].lastName;
            } else {
              _this6.raisedByData = res.filter(function (item) {
                return item.userId == parseInt(_this6.moveout.reqUserId);
              });
              _this6.userName = _this6.raisedByData[0].firstName + ' ' + _this6.raisedByData[0].lastName;
            }
          }, function (error) {});
          this.apartmentBlockUnitId = "";
        }
      }]);

      return UserMoveoutComponent;
    }();

    UserMoveoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    UserMoveoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-moveout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-moveout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-moveinout-tracker/components/user-moveout/user-moveout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-moveout.component.scss */
      "./src/app/user/user-moveinout-tracker/components/user-moveout/user-moveout.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], UserMoveoutComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~moveinout-tracker-moveinout-tracker-module~user-moveinout-tracker-user-moveinout-tracker-module-es5.js.map