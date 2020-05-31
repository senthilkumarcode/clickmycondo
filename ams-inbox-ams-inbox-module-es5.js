function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ams-inbox-ams-inbox-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/ams-inbox.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/ams-inbox.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAmsInboxAmsInboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAmsInboxComponentsAmsInboxHistoryAmsInboxHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  ams-inbox-history works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-message/ams-inbox-message.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-message/ams-inbox-message.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAmsInboxComponentsAmsInboxMessageAmsInboxMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>ams-inbox-message works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAmsInboxComponentsAmsInboxNotifyAmsInboxNotifyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"broadcast-message-wrapper\">\n\t\n  <div class=\"card clear form-group\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>\n                  <span>Compose Message</span>\n              </h5>\n          </div>\n          <div class=\"float-right\">\n              <!-- <a href=\"javascript:void(0)\" \n              routerLink=\"/ams/work-permit/settings/approval\" \n              routerLinkActive=\"active\"\n              [routerLinkActiveOptions] = \"{exact:true}\">\n                  <i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n              </a> -->\n          </div>\n      </div>\n      \n      <div class=\"card-body\">\n  \n      <!-- <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message> -->\n      <!-- <ng-container *ngIf=\"!isBroadCastSubmitted\"> -->\n      <ng-container>\n      <form #createBroadcastMessageForm = \"ngForm\" name=\"createBroadcastMessageForm\" (ngSubmit)=\"submitCreateBroadcastMessageForm(createBroadcastMessageForm)\"  novalidate>\n      \n      <div class=\"row\">\n          <div class=\"col-sm-10 offset-sm-1\">\n              <!-- <mat-tab-group dynamicHeight> -->\n                  <!-- <mat-tab label=\"Role Based\"> -->\n\n                      <!-- <ul class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\n                          \n                          <li ><a class=\"nav-item nav-link active\" id=\"nav-menu1-tab\" data-toggle=\"tab\" role=\"tab\" href=\"#menu1\" (click)=\"currentTab('role')\">Role Based</a></li>\n                          <li><a class=\"nav-item nav-link\" id=\"nav-menu2-tab\" data-toggle=\"tab\" role=\"tab\" href=\"#menu2\" (click)=\"currentTab('interest')\">Interest Group based</a></li> \n                          \n                        </ul> -->\n                        <div class=\"tab-content\" id=\"nav-tabContent\">\n\n                          <div id=\"menu1\" role=\"tabpanel\" ria-labelledby=\"nav-menu1-tab\" class=\"tab-pane show active\">\n\n                              <div class=\"row\"> \n                                  <div  class=\"col-sm-4\">\n                                   <div class=\"select-box\">\n                                       <label>Role Type</label>\n                                       <angular2-multiselect [data]=\"roleTypeArr.dropdownList\" name=\"roleTypeDropDown\"\n                                       [(ngModel)]=\"roleTypeArr.selectedItems\"\n                                       [settings]=\"roleTypedropdownSettings\" (onSelect)=\"getAppartmentRole($event)\"\n                                       (onDeSelect)=\"removeRole($event)\" (onDeSelectAll)=\"removeRole($event)\"></angular2-multiselect>\n                                   </div>  \n                                   </div>\n                                   <div  class=\"col-sm-4\">\n                                      <div class=\"select-box\">\n                                          <label>Apartment Block</label>\n                                          <angular2-multiselect [data]=\"apartmentBlock.dropdownList\" name=\"blockdropdown\"\n                                          [(ngModel)]=\"apartmentBlock.selectedItems\"\n                                          [settings]=\"blockdropdownSettings\"\n                                          (onSelect)=\"updateUsers()\"\n                                          (onDeSelect)=\"updateUsers()\"\n                                          (onSelectAll)=\"updateUsers()\"\n                                          (onDeSelectAll)=\"updateUsers()\"\n                                          ></angular2-multiselect>\n                                      </div>  \n                                          </div>\n                                          <div  class=\"col-sm-4\">\n                                              <div class=\"select-box\">\n                                                  <label>Conditions</label>\n                                                  <angular2-multiselect [data]=\"condition.dropdownList\" name=\"conditiondropdown\"\n                                                  [(ngModel)]=\"condition.selectedItems\"\n                                                  [settings]=\"roleDropdownSettings\" \n                                                  (onSelect)=\"updateUsers()\"\n                                                  (onDeSelect)=\"updateUsers()\"\n                                                  (onSelectAll)=\"updateUsers()\"\n                                                  (onDeSelectAll)=\"updateUsers()\"\n                                                  ></angular2-multiselect>\n                                              </div>  \n                                           </div>\n                                      </div>\n                                  <div class=\"row\"> \n                                          <div  class=\"col-sm-4\">\n                                           <div class=\"select-box\">\n                                               <label>Role</label>\n                                               <angular2-multiselect [data]=\"roleCategory.dropdownList\" name=\"roleDropDown\"\n                                               [(ngModel)]=\"roleCategory.selectedItems\"\n                                               [settings]=\"roleDropdownSettings\"\n                                               (onSelect)=\"getstaffCategories($event)\"  (onDeSelect)=\"removeStaffCategories($event)\"\n                                               (onSelectAll)=\"getAllStaffCategories($event)\"  (onDeSelectAll)=\"removeAllStaffCategories($event)\"\n                                               >\n                                                \n                                              </angular2-multiselect>\n                                           </div>  \n                                               </div>\n                                               <div  class=\"col-sm-4\" *ngIf=\"this.roleCategory.selectedItems.length>0 && isStaff\">\n                                                  <div class=\"select-box\">\n                                                      <label>Staff Category</label>\n                                                      <angular2-multiselect [data]=\"staffCategory.dropdownList\" name=\"staffDropDown\"\n                                                      [(ngModel)]=\"staffCategory.selectedItems\"\n                                                      [settings]=\"dropdownSettings\"\n                                                      (onSelect)=\"getStaffSubCategories($event)\" (onDeSelect)=\"removeSubStaffCategories($event)\"\n                                                      (onSelectAll)=\"getAllSubStaffCategories($event)\"  (onDeSelectAll)=\"removeAllSubStaffCategories($event)\" \n                                                       (onGroupDeSelect)=\"getGroupSubStaffCategories($event)\"       (onGroupSelect)=\"removeGroupSubStaffCategories($event)\"                                >\n                                                  </angular2-multiselect>\n                                                  </div>  \n                                                      </div>\n                                                      <div  class=\"col-sm-4\" *ngIf=\"this.staffCategory.selectedItems.length>0\">\n                                                          <div class=\"select-box\">\n                                                              <label>Staff SubCategory</label>\n                                                              <angular2-multiselect [data]=\"staffSubCategory.dropdownList\" name=\"subStaffDropDown\"\n                                                              [(ngModel)]=\"staffSubCategory.selectedItems\"\n                                                              [settings]=\"dropdownSettings\"\n                                                              (onSelect)=\"updateUsers()\"        (onDeSelect)=\"updateUsers()\"\n                                                              (onSelectAll)=\"updateUsers()\"     (onDeSelectAll)=\"updateUsers()\" \n                                                              (onGroupDeSelect)=\"updateUsers()\" (onGroupSelect)=\"updateUsers()\"   \n                                                              ></angular2-multiselect>\n                                                          </div>  \n                                                              </div>\n                                              </div>\n                                           <!-- </mat-tab>\n                          <mat-tab label=\"Interest Group Based \"> \n                              \n                              Content 2 </mat-tab>\n                          \n                         </mat-tab-group>  -->\n                              </div>  \n                      \n\n                        \n\n                        </div>\n\n                        <div class=\"row\">\n                          <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                              <label>Admin</label>\n                              <angular2-multiselect [data]=\"adminList.dropdownList\" name=\"adimnDropDown\"\n                              [(ngModel)]=\"adminList.selectedItems\"\n                              [settings]=\"adminDropdownSettings\" ></angular2-multiselect>\n                          </div>  \n                          </div>\n                          <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                              <label>Tenant</label>\n                              <angular2-multiselect [data]=\"tenantList.dropdownList\" name=\"tenantDropDown\"\n                              [(ngModel)]=\"tenantList.selectedItems\"\n                              [settings]=\"tenantDropdownSettings\" ></angular2-multiselect>\n                          </div>  \n                          </div>\n                          <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                              <label>Staff</label>\n                              <angular2-multiselect [data]=\"staffList.dropdownList\" name=\"staffDropDown\"\n                              [(ngModel)]=\"staffList.selectedItems\"\n                              [settings]=\"staffDropdownSettings\"></angular2-multiselect>\n                          </div>  \n                          </div>\n                          <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                              <label>Owner</label>\n                              <angular2-multiselect [data]=\"ownerList.dropdownList\" name=\"ownerDropDown\"\n                              [(ngModel)]=\"ownerList.selectedItems\"\n                              [settings]=\"ownerDropdownSettings\" ></angular2-multiselect>\n                          </div>  \n                          </div>\n                        </div>\n\n                      \n                            \n\n\n                              <!-- <div class=\"row recipentsDiv\" > \n                                  <div class=\"col-sm-12\">\n                                     <label>Recipients</label>\n                                <div  class=\"col-sm-12 box\" *ngIf=\"IsBroadcast\" >\n                                   <label *ngFor=\"let user of users\" >\n                                       {{user.firstName+\" \"+user.middleName+\" \"+user.lastName+\",\"}}\n                                   </label>\n                                      </div> \n                                 <div  class=\"col-sm-12 box\" *ngIf=\"!IsBroadcast\" >\n                               <label *ngFor=\"let user of AssignInterestUsers\" >\n                                            {{user.userFullName +\",\"}}\n                                        </label>\n                                           </div> \n\n                                      \n                                  </div> \n                              </div> -->\n               \n              <div class=\"row\"> \n                  <div  class=\"col-sm-4\" *ngIf=\"IsBroadcast\">\n                   <div class=\"select-box\">\n                       <label>Broadcast Category*</label>\n                       <angular2-multiselect  [data]=\"broadCastCategory.dropdownList\" name=\"broadcastDropDown\"\n                       [(ngModel)]=\"broadCastCategory.selectedItems\"\n                       [settings]=\"broadCastdropdownSettings\" (onSelect)=\"categoryChange($event)\" required></angular2-multiselect>\n                   </div>  \n                 </div>\n                 <div  class=\"col-sm-4\">\n                  <div class=\"select-box\">\n                      <label>Broadcast Mode*</label>\n                      <angular2-multiselect  [data]=\"broadModeArr.dropdownList\" name=\"BroadCastModeDropDown\"\n                      [(ngModel)]=\"broadModeArr.selectedItems\"\n                      [settings]=\"roleDropdownSettings\"  required></angular2-multiselect>\n                  </div> \n              </div>\n              \n                 <div class=\"col-sm-12\">\n                      <div class=\"input-box\">\n                          <label>Subject*</label>\n                          <input type=\"text\" class=\"form-control form-group\" placeholder=\"Enter\" name=\"subject\" [(ngModel)]=\"message.subject\" required>\n                          <quill-editor\n                              class=\"quill-editor\"\n                              name=\"ckeditor\"\n                              [placeholder]=\"editorPlacehorder\"\n                              [(ngModel)]=\"message.ckeditor\"\n                              (onContentChanged)=\"onContentChanged($event)\">\n                          </quill-editor>\n                      </div>\n                  </div>\n          \n                  <div class=\"col-sm-12\">\n                    <ul class=\"list-inline float-right mt-4\">\n                      <li class=\"list-inline-item\">\n                        <button class=\"btn blue mr-2\" (click)=\"ClearFormData()\">Cancel</button>\n                        <button class=\"btn blue mr-2\" [disabled]=\"createBroadcastMessageForm.invalid\">Submit</button>\n                      </li>\n                    </ul>\n                  </div>\n              </div>\n          </div>\n      </div>\n      \n    </form>\n  </ng-container>\n</div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAmsInboxComponentsAmsInboxReportsAmsInboxReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-3\">Reports</h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink = \"{{report.menuName}}/{{report.lookupValueID}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAmsInboxComponentsAmsInboxSetupAmsInboxSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inbox-setup-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isInboxCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isInboxCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Categories</h4>\n\t\t<ng-container *ngFor=\"let item of inboxCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateInboxCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-none\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteInboxCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4>{{item.lookupValueName}}</h4>\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn blue\" (click)=\"addNewInboxCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h5>Add New Category</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isInboxCategoryNew || isInboxCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5 *ngIf=\"isInboxCategoryNew\">Add Category</h5>\n    \t\t\t<h5 *ngIf=\"!isInboxCategoryNew\">Update Category</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isInboxCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isInboxCategorySubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addInboxCategoryForm = \"ngForm\" name=\"addInboxCategoryForm\" (ngSubmit)=\"submitInboxCategoryForm(addInboxCategoryForm)\"  novalidate>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"inboxCategory\" [(ngModel)]=\"inboxCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Owner*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"inboxCategoryOwner\" \n\t\t\t\t\t\t\t        id=\"inboxCategoryOwner\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"inboxCategoryOwner\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of inboxCategoryOwnerData\" [value]=\"item.userId\">{{ item.firstName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addInboxCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/ams-inbox-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ams/ams-inbox/ams-inbox-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AmsInboxRoutingModule */

  /***/
  function srcAppAmsAmsInboxAmsInboxRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsInboxRoutingModule", function () {
      return AmsInboxRoutingModule;
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


    var _components_ams_inbox_setup_ams_inbox_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/ams-inbox-setup/ams-inbox-setup.component */
    "./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.ts");
    /* harmony import */


    var _components_ams_inbox_notify_ams_inbox_notify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/ams-inbox-notify/ams-inbox-notify.component */
    "./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.ts");
    /* harmony import */


    var _components_ams_inbox_history_ams_inbox_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/ams-inbox-history/ams-inbox-history.component */
    "./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.ts");
    /* harmony import */


    var _components_ams_inbox_reports_ams_inbox_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/ams-inbox-reports/ams-inbox-reports.component */
    "./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.ts");
    /* harmony import */


    var _components_ams_inbox_message_ams_inbox_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/ams-inbox-message/ams-inbox-message.component */
    "./src/app/ams/ams-inbox/components/ams-inbox-message/ams-inbox-message.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, {
      path: 'settings',
      component: _components_ams_inbox_setup_ams_inbox_setup_component__WEBPACK_IMPORTED_MODULE_3__["AmsInboxSetupComponent"]
    }, {
      path: 'notify',
      component: _components_ams_inbox_notify_ams_inbox_notify_component__WEBPACK_IMPORTED_MODULE_4__["AmsInboxNotifyComponent"]
    }, {
      path: 'history',
      component: _components_ams_inbox_history_ams_inbox_history_component__WEBPACK_IMPORTED_MODULE_5__["AmsInboxHistoryComponent"]
    }, {
      path: 'viewMessage',
      component: _components_ams_inbox_message_ams_inbox_message_component__WEBPACK_IMPORTED_MODULE_7__["AmsInboxMessageComponent"]
    }, {
      path: 'reports',
      component: _components_ams_inbox_reports_ams_inbox_reports_component__WEBPACK_IMPORTED_MODULE_6__["AmsInboxReportsComponent"]
    }, {
      path: '**',
      redirectTo: 'settings',
      pathMatch: 'full'
    }];

    var AmsInboxRoutingModule = function AmsInboxRoutingModule() {
      _classCallCheck(this, AmsInboxRoutingModule);
    };

    AmsInboxRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AmsInboxRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/ams-inbox.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/ams/ams-inbox/ams-inbox.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAmsInboxAmsInboxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hbXMtaW5ib3gvYW1zLWluYm94LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/ams-inbox.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ams/ams-inbox/ams-inbox.component.ts ***!
    \******************************************************/

  /*! exports provided: AmsInboxComponent */

  /***/
  function srcAppAmsAmsInboxAmsInboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsInboxComponent", function () {
      return AmsInboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AmsInboxComponent =
    /*#__PURE__*/
    function () {
      function AmsInboxComponent() {
        _classCallCheck(this, AmsInboxComponent);
      }

      _createClass(AmsInboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AmsInboxComponent;
    }();

    AmsInboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ams-inbox',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ams-inbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/ams-inbox.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ams-inbox.component.scss */
      "./src/app/ams/ams-inbox/ams-inbox.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AmsInboxComponent);
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/ams-inbox.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/ams/ams-inbox/ams-inbox.module.ts ***!
    \***************************************************/

  /*! exports provided: AmsInboxModule */

  /***/
  function srcAppAmsAmsInboxAmsInboxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsInboxModule", function () {
      return AmsInboxModule;
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


    var _ams_inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ams-inbox-routing.module */
    "./src/app/ams/ams-inbox/ams-inbox-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ams_inbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ams-inbox.component */
    "./src/app/ams/ams-inbox/ams-inbox.component.ts");
    /* harmony import */


    var _components_ams_inbox_setup_ams_inbox_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/ams-inbox-setup/ams-inbox-setup.component */
    "./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.ts");
    /* harmony import */


    var _components_ams_inbox_notify_ams_inbox_notify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/ams-inbox-notify/ams-inbox-notify.component */
    "./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.ts");
    /* harmony import */


    var _components_ams_inbox_history_ams_inbox_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/ams-inbox-history/ams-inbox-history.component */
    "./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.ts");
    /* harmony import */


    var _components_ams_inbox_reports_ams_inbox_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/ams-inbox-reports/ams-inbox-reports.component */
    "./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.ts");
    /* harmony import */


    var _components_ams_inbox_message_ams_inbox_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/ams-inbox-message/ams-inbox-message.component */
    "./src/app/ams/ams-inbox/components/ams-inbox-message/ams-inbox-message.component.ts");
    /* harmony import */


    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular2-multiselect-dropdown */
    "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");

    var AmsInboxModule = function AmsInboxModule() {
      _classCallCheck(this, AmsInboxModule);
    };

    AmsInboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_ams_inbox_component__WEBPACK_IMPORTED_MODULE_5__["AmsInboxComponent"], _components_ams_inbox_setup_ams_inbox_setup_component__WEBPACK_IMPORTED_MODULE_6__["AmsInboxSetupComponent"], _components_ams_inbox_notify_ams_inbox_notify_component__WEBPACK_IMPORTED_MODULE_7__["AmsInboxNotifyComponent"], _components_ams_inbox_history_ams_inbox_history_component__WEBPACK_IMPORTED_MODULE_8__["AmsInboxHistoryComponent"], _components_ams_inbox_reports_ams_inbox_reports_component__WEBPACK_IMPORTED_MODULE_9__["AmsInboxReportsComponent"], _components_ams_inbox_message_ams_inbox_message_component__WEBPACK_IMPORTED_MODULE_10__["AmsInboxMessageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ams_inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["AmsInboxRoutingModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["AngularMultiSelectModule"]],
      bootstrap: [_ams_inbox_component__WEBPACK_IMPORTED_MODULE_5__["AmsInboxComponent"]]
    })], AmsInboxModule);
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAmsInboxComponentsAmsInboxHistoryAmsInboxHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hbXMtaW5ib3gvY29tcG9uZW50cy9hbXMtaW5ib3gtaGlzdG9yeS9hbXMtaW5ib3gtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AmsInboxHistoryComponent */

  /***/
  function srcAppAmsAmsInboxComponentsAmsInboxHistoryAmsInboxHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsInboxHistoryComponent", function () {
      return AmsInboxHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AmsInboxHistoryComponent =
    /*#__PURE__*/
    function () {
      function AmsInboxHistoryComponent() {
        _classCallCheck(this, AmsInboxHistoryComponent);
      }

      _createClass(AmsInboxHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AmsInboxHistoryComponent;
    }();

    AmsInboxHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ams-inbox-history',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ams-inbox-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ams-inbox-history.component.scss */
      "./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AmsInboxHistoryComponent);
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/components/ams-inbox-message/ams-inbox-message.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/ams-inbox/components/ams-inbox-message/ams-inbox-message.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAmsInboxComponentsAmsInboxMessageAmsInboxMessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hbXMtaW5ib3gvY29tcG9uZW50cy9hbXMtaW5ib3gtbWVzc2FnZS9hbXMtaW5ib3gtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/components/ams-inbox-message/ams-inbox-message.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/ams-inbox/components/ams-inbox-message/ams-inbox-message.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AmsInboxMessageComponent */

  /***/
  function srcAppAmsAmsInboxComponentsAmsInboxMessageAmsInboxMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsInboxMessageComponent", function () {
      return AmsInboxMessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AmsInboxMessageComponent =
    /*#__PURE__*/
    function () {
      function AmsInboxMessageComponent() {
        _classCallCheck(this, AmsInboxMessageComponent);
      }

      _createClass(AmsInboxMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AmsInboxMessageComponent;
    }();

    AmsInboxMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ams-inbox-message',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ams-inbox-message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-message/ams-inbox-message.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ams-inbox-message.component.scss */
      "./src/app/ams/ams-inbox/components/ams-inbox-message/ams-inbox-message.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AmsInboxMessageComponent);
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAmsInboxComponentsAmsInboxNotifyAmsInboxNotifyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".broadcast-message-wrapper .nav-tabs .nav-item.show .nav-link, .broadcast-message-wrapper .nav-tabs .nav-link.active {\n  color: #0062cc;\n  background-color: transparent;\n  border-color: transparent transparent #f3f3f3;\n  border-bottom: 3px solid !important;\n  font-size: 16px;\n  font-weight: bold;\n}\n.broadcast-message-wrapper .tab-content > .active {\n  margin-top: 18px;\n}\n.broadcast-message-wrapper angular2-multiselect {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem !important;\n}\n.broadcast-message-wrapper .selected-list .c-list .c-token {\n  font-size: 1.2rem !important;\n}\n.broadcast-message-wrapper .c-btn {\n  font-size: 1.2rem !important;\n}\n.broadcast-message-wrapper .recipentsDiv {\n  margin-bottom: 10px;\n}\n.broadcast-message-wrapper .recipentsDiv .box {\n  border: 1px solid #ccc;\n  height: 150px;\n  overflow-y: auto;\n}\n.broadcast-message-wrapper .recipentsDiv .box label {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYW1zLWluYm94L2NvbXBvbmVudHMvYW1zLWluYm94LW5vdGlmeS9hbXMtaW5ib3gtbm90aWZ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvYW1zLWluYm94L2NvbXBvbmVudHMvYW1zLWluYm94LW5vdGlmeS9hbXMtaW5ib3gtbm90aWZ5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FESUE7RUFDRSxnQkFBQTtBQ0ZGO0FESUU7RUUrQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFRmpETSw0QkFBQTtBQ0VSO0FEQ0k7RUFDRSw0QkFBQTtBQ0NOO0FERUk7RUFDRSw0QkFBQTtBQ0FOO0FERUk7RUFDRSxtQkFBQTtBQ0FOO0FEQ007RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQVE7RUFDRSxrQkFBQTtBQ0VWIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Ftcy1pbmJveC9jb21wb25lbnRzL2Ftcy1pbmJveC1ub3RpZnkvYW1zLWluYm94LW5vdGlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zY3NzL2ZvbnRzLnNjc3NcIjtcblxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXJ7XG4gIC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAwNjJjYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmM2YzZjM7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRhYi1jb250ZW50Pi5hY3RpdmUgeyAgXG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG4gIGFuZ3VsYXIyLW11bHRpc2VsZWN0e1xuICAgICAgQGluY2x1ZGUgIGRlc3AtcmVndWxhcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc2VsZWN0ZWQtbGlzdCAuYy1saXN0IC5jLXRva2Vue1xuICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYy1idG57XG4gICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucmVjaXBlbnRzRGl2e1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIC5ib3h7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICAgICAgaGVpZ2h0OjE1MHB4O1xuICAgICAgICBvdmVyZmxvdy15OmF1dG87XG4gICAgICAgIGxhYmVse1xuICAgICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgXG59IiwiLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzAwNjJjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2YzZjNmMztcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciAudGFiLWNvbnRlbnQgPiAuYWN0aXZlIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbi5icm9hZGNhc3QtbWVzc2FnZS13cmFwcGVyIGFuZ3VsYXIyLW11bHRpc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnNlbGVjdGVkLWxpc3QgLmMtbGlzdCAuYy10b2tlbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciAuYy1idG4ge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnJlY2lwZW50c0RpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciAucmVjaXBlbnRzRGl2IC5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnJlY2lwZW50c0RpdiAuYm94IGxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: AmsInboxNotifyComponent */

  /***/
  function srcAppAmsAmsInboxComponentsAmsInboxNotifyAmsInboxNotifyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsInboxNotifyComponent", function () {
      return AmsInboxNotifyComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
    /* harmony import */


    var _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var _api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../api/controllers/Staff */
    "./src/app/api/controllers/Staff.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var AmsInboxNotifyComponent =
    /*#__PURE__*/
    function () {
      function AmsInboxNotifyComponent(broadcastService, sharedService, cookieService, userService, staffService, apartmentService, injector) {
        _classCallCheck(this, AmsInboxNotifyComponent);

        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.userService = userService;
        this.staffService = staffService;
        this.apartmentService = apartmentService;
        this.injector = injector;
        this.dropdownSettings = {};
        this.blockdropdownSettings = {};
        this.roleTypedropdownSettings = {};
        this.broadCastdropdownSettings = {};
        this.groupCategorySetting = {};
        this.roleDropdownSettings = {};
        this.adminDropdownSettings = {};
        this.tenantDropdownSettings = {};
        this.staffDropdownSettings = {};
        this.ownerDropdownSettings = {};
        this.staffCategoryMap = new Map();
        this.staffSubCategoryMap = new Map();
        this.roleTypeArr = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.adminList = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.tenantList = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.staffList = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.ownerList = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.roleCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.staffCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.staffSubCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.broadCastCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.apartmentBlock = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.condition = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.broadModeArr = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.broadCastGroupCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.allBroadcastMessageGroup = [];
        this.isFlashNotice = false;
        this.editorPlacehorder = "";
        this.filterOptions = {
          "roleids": "",
          "ApartmentId": 0,
          "blockids": "",
          "keyword": ""
        };
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
      }

      _createClass(AmsInboxNotifyComponent, [{
        key: "onContentChanged",
        value: function onContentChanged(event) {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.message = {};
          this.IsBroadcast = true;
          this.loginedUser = parseInt(this.cookieService.get('userId'));
          this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
          this.getAllUsers();
          this.getAllCategory();
          this.getAllRoleTypesList();
          this.getAllApartmentBlockList();
          this.getAllGroupCategory();
          this.getInterestGroupUsers();
          this.getAllInterestGroupUser();
          this.groupCategorySetting = {
            singleSelection: true,
            enableSearchFilter: true,
            labelKey: 'groupName',
            primaryKey: 'broadCastGroupCategoryId',
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
          this.roleDropdownSettings = {
            singleSelection: false,
            enableSearchFilter: true,
            labelKey: 'name',
            primaryKey: 'value',
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
          this.roleTypedropdownSettings = {
            singleSelection: true,
            primaryKey: 'value',
            labelKey: 'name',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.adminDropdownSettings = {
            singleSelection: true,
            primaryKey: 'userId',
            labelKey: 'userName',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.tenantDropdownSettings = {
            singleSelection: true,
            primaryKey: 'userId',
            labelKey: 'userName',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.staffDropdownSettings = {
            singleSelection: true,
            primaryKey: 'userId',
            labelKey: 'userName',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.ownerDropdownSettings = {
            singleSelection: true,
            primaryKey: 'userId',
            labelKey: 'userName',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.broadCastdropdownSettings = {
            singleSelection: true,
            primaryKey: 'broadCastMessageCategoryId',
            labelKey: 'broadCastMessageCategory1',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.selectedTab = 'role';
        }
      }, {
        key: "currentTab",
        value: function currentTab(item) {
          this.selectedTab = item;

          if (this.selectedTab == 'interest') {
            // this.users=[];
            this.IsBroadcast = false;

            if (this.broadCastGroupCategory.selectedItems.length > 0) {
              this.selectInterestGroup(this.broadCastGroupCategory.selectedItems[0]);
            } else {
              this.users = [];
            }
          }

          if (this.selectedTab == 'role') {
            this.updateUsers();
            this.IsBroadcast = true;
          }
        }
      }, {
        key: "getAllInterestGroupUser",
        value: function getAllInterestGroupUser() {
          var _this = this;

          this.filterOptions.ApartmentId = this.apartmentID;
          this.userService.getUsersByKeyword(this.filterOptions).subscribe(function (res) {
            res.forEach(function (element) {
              element.userFullName = element.userName + " " + element.roleName + " " + element.apartmentBlockNumber + " " + element.apartmentBlockUnitNumber;
            });
            _this.allnterestGroupUsers = res;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          var _this2 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.userService.getUsersByApartmentId(queryParamBase).subscribe(function (res) {
            res.forEach(function (element) {
              element.userFullName = element.userName + " " + element.roleName + " " + element.apartmentBlockNumber + " " + element.apartmentBlockUnitNumber;
            });
            _this2.allUsers = res;

            _this2.updateUsers();
          });
        }
      }, {
        key: "selectInterestGroup",
        value: function selectInterestGroup(item) {
          var categoryUsers = this.interestGroupUsers.filter(function (obj) {
            return obj.broadCastGroupCategoryId == item.broadCastGroupCategoryId;
          });
          var tempAssignUsers = [];

          var tempUsers = _toConsumableArray(this.allnterestGroupUsers);

          categoryUsers.forEach(function (element) {
            tempUsers.forEach(function (obj) {
              var isFound = obj.userId == element.userId && obj.roleID == element.roleId && obj.apartmentBlockID == element.apartmentBlockId && obj.apartmentBlockUnitID == element.unitId;

              if (isFound) {
                tempAssignUsers.push(obj);
              }
            });
          });
          this.AssignInterestUsers = [].concat(tempAssignUsers);
        }
      }, {
        key: "removeInterestGroup",
        value: function removeInterestGroup(item) {
          this.AssignInterestUsers = [];
        } //broadCastGroupCategoryId

      }, {
        key: "flashNotice",
        value: function flashNotice(bool) {
          this.isFlashNotice = bool;
        }
      }, {
        key: "categoryChange",
        value: function categoryChange(item) {
          var id = parseInt(item.broadCastMessageCategoryId);
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.allcategory, function (item) {
            if (item.broadCastMessageCategoryId === id) return item;
          });

          if (data === undefined || data === null || data.length == 0) {
            this.message.ckeditor = '';
          } else {
            this.message.ckeditor = data[0].template;
          }
        }
      }, {
        key: "getAllApartmentBlockList",
        value: function getAllApartmentBlockList() {
          var _this3 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.apartmentService.getApartmentBlockByApartmentId(queryParamBase).subscribe(function (res) {
            _this3.apartmentBlock.dropdownList = res;
            var broadCastModeArr = [{
              "name": "General SMS",
              "value": 40
            }, {
              "name": "Whatsapp",
              "value": 41
            }, {
              "name": "Email",
              "value": 42
            }];
            _this3.broadModeArr.dropdownList = broadCastModeArr;
          });
        } //Get All Broadcast Category

      }, {
        key: "getAllCategory",
        value: function getAllCategory() {
          var _this4 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getBroadCastMessageCategories(queryParamBase).subscribe(function (res) {
            _this4.allcategory = res;
            _this4.broadCastCategory.dropdownList = res;
          });
        }
      }, {
        key: "getAllRoleTypesList",
        value: function getAllRoleTypesList() {
          var _this5 = this;

          this.userService.getAllRoleTypes().subscribe(function (res) {
            _this5.roleTypeArr.dropdownList = res;
          });
        }
      }, {
        key: "getAppartmentRole",
        value: function getAppartmentRole(item) {
          var _this6 = this;

          this.roleCategory.selectedItems = [];
          this.staffCategory.selectedItems = [];
          var params = {
            'RoleTypeId': item.value,
            'ApartmentId': this.apartmentID
          };
          this.userService.getApartmentRolesByRoleTypeId(params).subscribe(function (res) {
            _this6.condtionRequired = parseInt(item.value) == 2 || parseInt(item.value) == 4;
            ;
            _this6.roleCategory.dropdownList = res;
            var conditinArr = [{
              "name": "IsLiving",
              "value": 1
            }, {
              "name": "IsPrimaryContact",
              "value": 2
            }];

            if (_this6.condtionRequired) {
              _this6.condition.dropdownList = conditinArr;
            } else {
              _this6.condition.dropdownList = [];
              _this6.condition.selectedItems = [];
            }

            _this6.updateUsers();
          });
        }
      }, {
        key: "updateUsers",
        value: function updateUsers() {
          var _this7 = this;

          //this.tempUsers=[...this.allUsers];
          this.getUserIds$().subscribe(function (res) {
            if (res.length > 0) {
              _this7.users = _this7.allUsers.filter(function (obj) {
                return res.includes(obj.userId);
              });
              debugger; //filter user based on role, admin,owner, staff,tenent

              _this7.adminUsers = _this7.users.filter(function (obj) {
                return obj.roleName.toLowerCase() == "admin";
              });
              _this7.adminList.dropdownList = _this7.adminUsers;
              _this7.tenantUsers = _this7.users.filter(function (obj) {
                return obj.roleName.toLowerCase() == "tenant";
              });
              _this7.tenantList.dropdownList = _this7.tenantUsers;
              _this7.staffUsers = _this7.users.filter(function (obj) {
                return obj.roleName.toLowerCase() == "staff";
              });
              _this7.staffList.dropdownList = _this7.staffUsers;
              _this7.ownerUsers = _this7.users.filter(function (obj) {
                return obj.roleName.toLowerCase() == "owner";
              });
              _this7.ownerList.dropdownList = _this7.ownerUsers;
            } else {
              _this7.users = [];
            }
          });
        }
      }, {
        key: "getAllGroupCategory",
        value: function getAllGroupCategory() {
          var _this8 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getAllBroadCastGroupCategory(queryParamBase).subscribe(function (res) {
            _this8.broadCastGroupCategory.dropdownList = res;
          });
        }
      }, {
        key: "getInterestGroupUsers",
        value: function getInterestGroupUsers() {
          var _this9 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getBroadCastGroupCategoryUser(queryParamBase).subscribe(function (res) {
            _this9.interestGroupUsers = res;
          });
        }
      }, {
        key: "getstaffCategories",
        value: function getstaffCategories(item) {
          var _this10 = this;

          this.isStaff = this.roleTypeArr.selectedItems[0].name.toLowerCase() == "staff";

          if (this.isStaff) {
            if (this.staffCategoryMap.get(item.value) == undefined) {
              var params = {
                'roleId': item.value,
                'apartmentId': this.apartmentID
              };
              this.staffService.getStaffCategoryByRole(params).subscribe(function (res) {
                var temp = _toConsumableArray(_this10.staffCategory.dropdownList);

                res.forEach(function (element) {
                  element.category = item.name;
                  temp.push(element);
                });

                _this10.staffCategoryMap.set(item.value, res);

                _this10.staffCategory.dropdownList = temp;

                _this10.updateUsers();
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
          var _this11 = this;

          items.forEach(function (element) {
            _this11.getstaffCategories(element);
          });
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
        key: "removeStaffCategories",
        value: function removeStaffCategories(item) {
          var _this12 = this;

          if (this.roleTypeArr.selectedItems[0].name.toLowerCase() == "staff") {
            var removeStaffCategory = this.staffCategoryMap.get(item.value);
            removeStaffCategory.forEach(function (element) {
              _this12.staffCategory.dropdownList = _this12.staffCategory.dropdownList.filter(function (obj) {
                return obj.value !== element.value;
              });
            });
          }

          this.updateUsers();
        }
      }, {
        key: "removeSubStaffCategories",
        value: function removeSubStaffCategories(item) {
          var _this13 = this;

          var removeSubStaffCategory = this.staffSubCategoryMap.get(item.value);
          removeSubStaffCategory.forEach(function (element) {
            _this13.staffSubCategory.dropdownList = _this13.staffSubCategory.dropdownList.filter(function (obj) {
              return obj.value !== element.value;
            });
          });
          this.updateUsers();
        }
      }, {
        key: "getStaffSubCategories",
        value: function getStaffSubCategories(item) {
          var _this14 = this;

          if (this.staffSubCategoryMap.get(item.value) == undefined) {
            var params = {
              'categoryId': item.value,
              'apartmentId': this.apartmentID
            };
            this.staffService.getSubStaffCategoryByCategory(params).subscribe(function (res) {
              var temp = _toConsumableArray(_this14.staffSubCategory.dropdownList);

              res.forEach(function (element) {
                element.category = item.name;
                temp.push(element);
              });

              _this14.staffSubCategoryMap.set(item.value, res);

              _this14.staffSubCategory.dropdownList = temp;

              _this14.updateUsers();
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
        key: "getAllSubStaffCategories",
        value: function getAllSubStaffCategories(items) {
          var _this15 = this;

          items.forEach(function (element) {
            _this15.getStaffSubCategories(element);
          });
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
        key: "removeGroupSubStaffCategories",
        value: function removeGroupSubStaffCategories(items) {
          var _this16 = this;

          items.list.forEach(function (element) {
            _this16.removeSubStaffCategories(element);
          });
          this.updateUsers();
        }
      }, {
        key: "getGroupSubStaffCategories",
        value: function getGroupSubStaffCategories(items) {
          var _this17 = this;

          items.list.forEach(function (element) {
            _this17.getStaffSubCategories(element);
          });
          this.updateUsers();
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
            'apartmentId': this.apartmentID,
            'staffcategoryIds': staffcategoryIds,
            'staffSubCategoryIds': staffSubCategoryIds
          };
          return this.userService.getUsersByFilter(params);
        } //Submit Category

      }, {
        key: "submitCreateBroadcastMessageForm",
        value: function submitCreateBroadcastMessageForm(form) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this18 = this;

            var broadCastGroupCategoryIDs, broadcastModeIds, broadcastMessage, params, roleIds, blockIds, conditionIds, staffcategoryIds, staffSubCategoryIds, _params, params2;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    broadCastGroupCategoryIDs = Array.prototype.map.call(this.broadCastGroupCategory.selectedItems, function (item) {
                      return item.broadCastGroupCategoryId;
                    }).join(",");
                    broadcastModeIds = Array.prototype.map.call(this.broadModeArr.selectedItems, function (item) {
                      return item.value;
                    }).join(",");
                    broadcastMessage = {
                      "broadCastMessageId": 0,
                      "apartmentId": this.apartmentID,
                      "subject": this.message.subject,
                      "broadcastMessage1": this.message.ckeditor,
                      "broadcastBy": this.loginedUser,
                      "broadcastOn": new Date().toISOString(),
                      "broadcastMessageCategoryId": 0,
                      "broadcastModeIds": broadcastModeIds,
                      "broadCastGroupcategoryId": null,
                      "userIds": null,
                      "isReadAllowed": false,
                      "isLater": true,
                      "laterDate": null,
                      "isFlashNotice": this.isFlashNotice,
                      "isActive": true,
                      "insertedBy": this.loginedUser,
                      "insertedOn": new Date().toISOString(),
                      "updatedBy": null,
                      "updatedOn": null,
                      "serialNo": 0,
                      "description": "",
                      "filterId": null
                    };

                    if (this.selectedTab == 'interest') {
                      broadcastMessage.broadCastGroupcategoryId = parseInt(broadCastGroupCategoryIDs);
                      broadcastMessage.broadcastMessageCategoryId = null;
                      broadcastMessage.userIds = Array.prototype.map.call(this.AssignInterestUsers, function (item) {
                        return item.userId;
                      }).join(",");

                      if (broadcastMessage.userIds.length == 0) {
                        this.modalService.showErrorModal("No such Users exists to broadcast message.");
                      } else {
                        params = {
                          "sourceBroadCastMessage_model": broadcastMessage
                        };
                        this.broadcastService.addBroadCastMessage(params).subscribe(function (res) {
                          if (res.message) {
                            _this18.sharedService.setAlertMessage("Broadcast Message sent successfully");

                            _this18.ClearFormData();
                          }
                        });
                      }
                    }

                    if (this.selectedTab == 'role') {
                      broadcastMessage.userIds = Array.prototype.map.call(this.users, function (item) {
                        return item.userId;
                      }).join(",");
                      broadcastMessage.broadcastMessageCategoryId = this.broadCastCategory.selectedItems[0].broadCastMessageCategoryId;
                      broadcastMessage.broadCastGroupcategoryId = null;
                      roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) {
                        return item.apartmentBlockId;
                      }).join(",");
                      conditionIds = Array.prototype.map.call(this.condition.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      staffcategoryIds = Array.prototype.map.call(this.staffCategory.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      staffSubCategoryIds = Array.prototype.map.call(this.staffSubCategory.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      _params = {
                        'filterId': 0,
                        'roleIds': roleIds,
                        'conditions': conditionIds,
                        'appartmentbBlockIds': blockIds,
                        'apartmentId': this.apartmentID,
                        'staffCategoryIds': staffcategoryIds,
                        'subStaffCategoryIds': staffSubCategoryIds,
                        "insertedBy": this.loginedUser,
                        "insertedOn": new Date().toISOString(),
                        "updatedBy": null,
                        "updatedOn": null,
                        'isActive': true,
                        'roleTypeId': this.roleTypeArr.selectedItems[0].value
                      };
                      params2 = {
                        "broadCastFilters_model": _params
                      };
                      this.broadcastService.upsertBroadCastFilters(params2).subscribe(function (res) {
                        broadcastMessage.filterId = parseInt(res.message);

                        if (broadcastMessage.userIds.length == 0) {
                          _this18.modalService.showErrorModal("No such Users exists to broadcast message.");
                        } else {
                          var _params2 = {
                            "sourceBroadCastMessage_model": broadcastMessage
                          };

                          _this18.broadcastService.addBroadCastMessage(_params2).subscribe(function (res) {
                            if (res.message) {
                              _this18.sharedService.setAlertMessage("Broadcast Message sent successfully");

                              _this18.ClearFormData();
                            }
                          });
                        }
                      }); // .subscribe((res)=>{
                      //       broadcastMessage.filterId=parseInt(res);
                      //                   }).toPromise();
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ClearFormData",
        value: function ClearFormData() {
          this.message = {};
          this.roleTypeArr.selectedItems = [];
          this.broadCastCategory.selectedItems = [];
          this.apartmentBlock.selectedItems = [];
          this.broadModeArr.selectedItems = [];
          this.broadCastGroupCategory.selectedItems = [];
          this.removeRole([]);

          if (this.selectedTab == 'role') {
            this.users = _toConsumableArray(this.allUsers);
          }

          if (this.selectedTab == 'interest') {
            this.users = [];
          }
        }
      }]);

      return AmsInboxNotifyComponent;
    }();

    AmsInboxNotifyComponent.ctorParameters = function () {
      return [{
        type: _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__["StaffService"]
      }, {
        type: _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    AmsInboxNotifyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ams-inbox-notify',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ams-inbox-notify.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ams-inbox-notify.component.scss */
      "./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"], _api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__["StaffService"], _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], AmsInboxNotifyComponent);
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAmsInboxComponentsAmsInboxReportsAmsInboxReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hbXMtaW5ib3gvY29tcG9uZW50cy9hbXMtaW5ib3gtcmVwb3J0cy9hbXMtaW5ib3gtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AmsInboxReportsComponent */

  /***/
  function srcAppAmsAmsInboxComponentsAmsInboxReportsAmsInboxReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsInboxReportsComponent", function () {
      return AmsInboxReportsComponent;
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

    var AmsInboxReportsComponent =
    /*#__PURE__*/
    function () {
      function AmsInboxReportsComponent(lookupService, sharedService, cookieService) {
        _classCallCheck(this, AmsInboxReportsComponent);

        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
      }

      _createClass(AmsInboxReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          var details = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 87,
            MenuName: 'Inbox'
          };
          this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe(function (res) {
            _this19.reportDataList = res;
            _this19.isDataLoaded = true;
          });
        }
      }]);

      return AmsInboxReportsComponent;
    }();

    AmsInboxReportsComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    AmsInboxReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ams-inbox-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ams-inbox-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ams-inbox-reports.component.scss */
      "./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], AmsInboxReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAmsInboxComponentsAmsInboxSetupAmsInboxSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hbXMtaW5ib3gvY29tcG9uZW50cy9hbXMtaW5ib3gtc2V0dXAvYW1zLWluYm94LXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AmsInboxSetupComponent */

  /***/
  function srcAppAmsAmsInboxComponentsAmsInboxSetupAmsInboxSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmsInboxSetupComponent", function () {
      return AmsInboxSetupComponent;
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


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AmsInboxSetupComponent =
    /*#__PURE__*/
    function () {
      function AmsInboxSetupComponent(userService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, AmsInboxSetupComponent);

        this.userService = userService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isInboxCategoryLoaded = false;
        this.isInboxCategorySubmitted = true;
        this.isInboxCategoryNew = false;
        this.isInboxCategoryUpdate = false;
        this.inboxCategory = "";
        this.inboxCategoryOwner = "";
        this.inboxCategoryUpdateId = 0;
        this.errorMessage = "";
        this.isError = false;
      }

      _createClass(AmsInboxSetupComponent, [{
        key: "addNewInboxCategory",
        value: function addNewInboxCategory() {
          this.isInboxCategoryNew = true;
          this.isInboxCategoryUpdate = false;
        }
      }, {
        key: "updateInboxCategory",
        value: function updateInboxCategory(item) {
          this.isInboxCategoryUpdate = true;
          this.isInboxCategoryNew = false;
          this.inboxCategory = item.lookupValueName;
          this.inboxCategoryUpdateId = item.lookupValueId;
        }
      }, {
        key: "deleteInboxCategory",
        value: function deleteInboxCategory(item, index) {
          var _this20 = this;

          this.isInboxCategoryLoaded = false;
          var params = {
            lookupValueId: item.lookupValueId,
            updateUserId: parseInt(this.cookieService.get('userId'))
          };
          this.lookupService.deleteLookupvalue(params).subscribe(function (res) {
            _this20.inboxCategoryData.splice(index, 1);

            _this20.isInboxCategoryLoaded = true;
          });
        }
      }, {
        key: "removeCategoryBox",
        value: function removeCategoryBox() {
          this.isInboxCategoryNew = false;
          this.isInboxCategoryUpdate = false;
          this.isError = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.isInboxCategoryLoaded = true;
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          }; //get all users

          this.userService.getAllUsersByApartmentId(params).subscribe(function (res) {
            _this21.inboxCategoryOwnerData = res;
          }, function (error) {});
        }
      }]);

      return AmsInboxSetupComponent;
    }();

    AmsInboxSetupComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    AmsInboxSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ams-inbox-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ams-inbox-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ams-inbox-setup.component.scss */
      "./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], AmsInboxSetupComponent);
    /***/
  }
}]);
//# sourceMappingURL=ams-inbox-ams-inbox-module-es5.js.map