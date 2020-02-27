function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unit-users-unit-users-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/access-control/access-control.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/access-control/access-control.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsAccessControlAccessControlComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  access-control works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsAddUsersAddResidentAddResidentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-resident-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditUser\">Add User</span>\n    \t\t\t\t<span *ngIf=\"isEditUser\">Edit User</span>\n    \t\t\t</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"!isArrayOne()\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/unapproved\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isUserSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isUserSubmitted\">\n\n\t\t\t\t<form #addResidentForm = \"ngForm\" name=\"addResidentForm\" (ngSubmit)=\"submitAddResidentForm(addResidentForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>First Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"firstName\" [(ngModel)]=\"user.firstName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Last Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"lastName\" [(ngModel)]=\"user.lastName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEditUser\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Password*</label>\n\t\t\t                    <input type=\"password\" class=\"form-control\" placeholder=\"Enter value\" name=\"password\" [(ngModel)]=\"user.password\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Block No*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockId\" (ngModelChange)=\"getUnits()\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isBlockSelected\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Unit No*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockUnitId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Phone/Mobile*</label>\n\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"phoneNo\" [(ngModel)]=\"user.phoneNumber\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Email*</label>\n\t\t\t                    <input type=\"email\" class=\"form-control\" placeholder=\"Enter value\" name=\"email\" [(ngModel)]=\"user.emailId\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>User Type*</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"userType\" id=\"owner\" [(ngModel)]=\"userType\"  value=\"4\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"owner\">Owner</label>\n\t                     \t\t</div>\n\t\t                    \t<div class=\"form-group\">\n\t\t                            <input name=\"userType\" id=\"tenant\" [(ngModel)]=\"userType\" value=\"2\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"tenant\">Tenant</label>\n\t\t                         </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Gender*</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"genderType\" id=\"male\" [(ngModel)]=\"genderType\"  value=\"43\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"male\">Male</label>\n\t                     \t\t</div>\n\t\t                    \t<div class=\"form-group\">\n\t\t                            <input name=\"genderType\" id=\"female\" [(ngModel)]=\"genderType\" value=\"44\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"female\">Female</label>\n\t\t                         </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addResidentForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-users.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-users.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsAddUsersAddUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-users-wrapper\">\n\t<ng-container *ngFor=\"let resident of residentArray; let i = index\">\n\t\t<app-add-resident [index]=\"i\" [array]=\"residentArray\" (outputParams) = \"getResidentArray($event)\"></app-add-resident>\n\t</ng-container>\n\t<!-- <a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addResident()\" *ngIf=\"!isEditUser\" [ngClass]=\"isMobileView() ? 'mobile' : ''\">\n\t\t<div class=\"icon\">+<span class=\"text d-sm-none ml-2\">Add User</span></div>\n\t</a> -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsApprovedUserDetailsApprovedUserDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card user-details float-left\" [ngClass]=\"[ isTabSelected() , isNotSlide()]\" id=\"accordion\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<div class=\"card-body p-0\" *ngIf=\"isUserDataLoaded\">\n\n\t\t<div class=\"main\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5 class=\"text-capitalize\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/user-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t<span>{{user.name}}</span>\n\t\t\t\t</h5>\n\t\t\t\t<p>{{getRoleName(user.userRole)}}</p>\n\t\t\t\t<p>{{user.phone}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t      \trouterLink=\"/ams/unit&users/edit-user/{{user.id}}\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t      \t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(user.id)\">\n\t\t\t\t\t<i-feather class=\"icon delete\" name=\"trash\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\n\t\t<ul class=\"list-group tabs clear\">\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/unit-liner-icon.svg\" /></span>\n\t\t\t\t<span>Unit Details</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p><span>Block No:</span> {{unit.apartmentBlockNumber}}</p>\n\t\t\t\t\t<p><span>Unit No:</span> {{unit.apartmentBlockUnitNumber}}</p>\n\t\t\t\t\t<p><span>Bulitup Area:</span> {{unit.builtupArea}}</p>\n\t\t\t\t\t<p><span>Carpet Area:</span> {{unit.carpetArea}}</p>\n\t\t\t\t\t<p><span>Unit Type:</span> {{unit.unitType}}</p>\n\t\t\t\t\t<p><span>Vacant:</span> {{getunitStatus(unit.isVacant)}}</p>\n\t\t\t\t\t<p><span>Furnished:</span> {{getunitStatus(unit.isFurnished)}}</p>\n\t\t\t\t\t<p><span>Pets Allowed:</span> {{getunitStatus(unit.isPetsAllowed)}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/staff-liner-icon.svg\" /></span>\n\t\t\t\t<span>Unit Staffs</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p>No Data Available</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\">\n\t\t\t\t<span class=\"icon\"><i-feather class=\"feather truck\" name=\"truck\"></i-feather></span>\n\t\t\t\t<span>Unit Vehicles</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p><span>Vehicle Number:</span> {{vehicle.vehicleNumber}}</p>\n\t\t\t\t\t<p><span>Vehicle Type:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p><span>Vehicle Driver Number:</span> {{vehicle.vehicleDriverNumber}}</p>\n\t\t\t\t\t<p><span>Vehicle Manufacturer:</span> {{vehicle.vehicleManufacturer}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseFive\" aria-expanded=\"true\" aria-controls=\"collapseFive\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/dog-liner-icon.svg\" /></span>\n\t\t\t\t<span>Unit Pets</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseFive\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p>No Data Available</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseSix\" aria-expanded=\"true\" aria-controls=\"collapseSix\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/manager-liner-icon.svg\" /></span>\n\t\t\t\t<span>Property Manager</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseSix\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p><span>Available for rent:</span> {{getunitStatus(unit.isAvailableForRent)}}</p>\n\t\t\t\t\t<p><span>Name:</span> {{unit.propertyManagerName}}</p>\n\t\t\t\t\t<p><span>Rent Amount:</span> {{unit.rentAmount}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ul>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved/approved.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved/approved.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsApprovedApprovedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"approved-user-wrapper\">\n\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\t\n\t<div class=\"card users-list float-left\" [ngClass]=\"isTabSelected()\" *ngIf=\"isUserDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Approved Users</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Total {{totalUnits}} Units and {{totalItems}} Users</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block mr-0\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body p-0 users\">\n\n\t\t\t<ng-container>\n\t\t\t\t\n\t\t\t\t<ng-container *ngFor=\"let item of approvedUsersData | slice:ItemStartIndex:ItemEndIndex; let i = index\">\n\t\t\t\t\t<li class=\"list-group-item\" (click)=\"showApprovedUserDetails(item.id)\" [ngClass]=\"isActive(item.id)\">\n\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t<span class=\"mr-2\">{{getBlockNo(item.apartmentBlockUnit, i)}}</span>\n\t\t\t\t\t\t\t<span>{{getBlockUnitNo(item.apartmentBlockUnit, i)}}</span>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t<div class=\"list\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let user of item.userRole; let j = index\">\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">{{user.roleName}}: </span>\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2 text-capitalize\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t<span><i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t\t<div class=\"pagination-wrapper\">\n\t\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</div>\n\n\t<app-approved-user-details [selectedTab]=\"selectedTab\" *ngIf=\"!isMobileView()\"></app-approved-user-details>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/broadcast/broadcast.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/broadcast/broadcast.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsBroadcastBroadcastComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  broadcast works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/de-activated/de-activated.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/de-activated/de-activated.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsDeActivatedDeActivatedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"deactivated-wrapper\">\n\t\t\n    <app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<div class=\"card card-table\" *ngIf=\"isUserDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>De Activated Resident Accounts <span class=\"badge lime-green\">{{totalUserItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Activate documents</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"deActivatedData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" class=\"select\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"selectAllDeactivatedUser\" \n\t\t\t\t\t\t\t    name=\"selectAllDeactivatedUser\" \n\t\t\t\t\t\t\t    [(ngModel)]=\"selectAllDeactivatedUser\"\n                            \t(ngModelChange)=\"getAllDeactivatedUser()\" >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"selectAllDeactivatedUser\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('name')\">Name <span [ngClass]=\"getFieldOrderBy('name')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('phone')\">Phone <span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('email')\">Email <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No <span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('unitNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let unit of deActivatedListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: deActivatedData ; let i = index\" [ngClass]=\"unit.checked ? 'selected' : ''\">\n\t\t\t\t      <td class=\"select\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"{{unit.id}}\" \n\t                            name=\"{{unit.id}}\"\n\t                            [(ngModel)]=\"unit.checked\"\n\t                            (ngModelChange)=\"getSelectedDeActivatedUser(unit)\"\n\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{unit.id}}\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t      \t{{unit.name}}</a>\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Status/Notes</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{getNotes(unit.apartmentBlockUnit)}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Owner/Tenant</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{getUserRole(unit.userRole, i)}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Status/Notes</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{getNotes(unit.apartmentBlockUnit)}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Verification Status</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{unit.status}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t  \t  </td>\n\t\t\t\t      <td class=\"grey\">{{unit.phone}}</td>\n\t\t\t\t      <td class=\"grey\">{{unit.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockNo(unit.apartmentBlockUnit, i)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockUnitNo(unit.apartmentBlockUnit, i)}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"showUserInfo(i)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/unit&users/edit-user/{{unit.id}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t\t<div class=\"button-wrapper border-top\">\n\t\t\t\t<a class=\"btn lime-green sf\"\n\t\t\t\t\t(click)=\"activateUser()\"\n\t\t\t\t\t[ngClass]=\"!isUserSelected ? 'disabled' : ''\">\n\t\t\t\t\t<span>Activate Selected User</span>\n    \t\t\t</a>\n\t\t\t\t<a class=\"btn lime-green sf\"\n\t\t\t\t\t(click)=\"activateUser()\"\n\t\t\t\t\t[ngClass]=\"!isBulkActivate ? 'disabled' : ''\">\n\t\t\t\t\t<span>Bulk Activate</span>\n    \t\t\t</a>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalUserItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemUserStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemUserEndIndex\"\n\t\t\t\t[itemLimit] = \"itemUserLimit\"\n\t\t\t\t(outputParams) = \"getUserIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n\n\t<ng-template #viewDeactivatedUserRef let-user>\n    \t<div class=\"user-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>User Info</h5>\n\t\t\t</div>\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <div class=\"icon mr-4\"><img src=\"assets/images/user-icon.svg\" width=\"36\" /></div>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t    <h5 class=\"mt-0\">{{user.firstName}} {{user.lastName}}</h5>\n\t\t\t\t\t    <p class=\"grey\">{{user.roleName}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">User ID</h6>\n\t\t\t\t\t\t\t<p>{{user.userId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Email</h6>\n\t\t\t\t\t\t\t<p>{{user.emailId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Block No</h6>\n\t\t\t\t\t\t\t<p>{{user.blockNo}} {{user.unitNo}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Phone No</h6>\n\t\t\t\t\t\t\t<p>{{user.phoneNumber}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Blood Group</h6>\n\t\t\t\t\t\t\t<p>{{user.bloodGroup}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Address</h6>\n\t\t\t\t\t\t\t<p>{{user.address1}} {{user.address2}} {{user.zipCode}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\t</ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/reports/reports.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/reports/reports.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsReportsReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"unit-reports-wrapper\">\n\t\n\t<div class=\"card\">\n\t\t<div class=\"card-header no-border\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>Reports</h5>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\t\t\t<ul class=\"list-group tabs clear\">\n\n\t\t\t\t<div class=\"tabs-content\" *ngFor=\"let report of unitReportData;let i = index; first as isFirst\">\n\t\t\t\t\t\n\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" attr.data-target=\"#reportData{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"reportData{{i}}\"[ngClass]=\"isFirst ? '' : 'collapsed'\"><strong class=\"tc-blue\">{{report.name}}</strong></li>\n\t\t\t\t\t<div id=\"reportData{{i}}\" class=\"collapse\" attr.aria-labelledby=\"reportData{{i}}\" data-parent=\"#accordion\" [ngClass]=\"isFirst ? 'show' : ''\">\n\t\t\t\t\t\t<div class=\"details p-0\">\n\t\t\t\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockno')\">Report Name</th>\n\t\t\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitno')\">Schedule Report </th>\n\t\t\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('intercom')\">Publish Report</th>\n\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t    <tr *ngFor=\"let item of report.data\">\n\t\t\t\t\t\t\t\t      <td class=\"name\">{{item.name}}</td>\n\t\t\t\t\t\t\t\t      <td class=\"grey\">{{item.status}}</td>\n\t\t\t\t\t\t\t\t      <td class=\"select\">\n\t\t\t\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t\t\t\t    id=\"{{item.name}}\" \n\t\t\t\t\t                            name=\"{{item.name}}\"\n\t\t\t\t\t                            [(ngModel)]=\"item.checked\"\n\t\t\t\t\t                            (ngModelChange)=\"getSelectedReports(item)\"\n\t\t\t\t\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{item.name}}\"></label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t      \t</div>\n\t\t\t\t\t\t\t\t      </td>\n\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t</ul>\n\n\t\t</div>\n\n\t\t<div class=\"card-body p-0 border-top\">\n\t\t\t<div class=\"button-wrapper\">\n\t\t\t\t<a class=\"btn lime-green sf\"\n\t\t\t\t\t[ngClass]=\"!isReportSelected() ? 'disabled' : ''\">\n\t\t\t\t\t<span>Publish Selected reports to notice Board</span>\n    \t\t\t</a>\n    \t\t\t\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/statistics/statistics.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/statistics/statistics.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsStatisticsStatisticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  statistics works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/unapproved/unapproved.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/unapproved/unapproved.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsUnapprovedUnapprovedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"unapproved-wrapper\">\n\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\t\n\t<div class=\"customize-email\" *ngIf=\"isUserDataLoaded\">\n\t\t<p>You can send customized form to users for approving and onboarding the users in clickmycondo application</p>\n\t\t<a class=\"btn lime-green\">\n\t\t\t<span>Customize Approval Email</span>\n\t\t</a>\n\t</div>\n\n\t<div class=\"card card-table\" *ngIf=\"isUserDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Unapproved Users <span class=\"badge blue\">{{totalUserItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit, View and approve documents</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/unit&users/add-users\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add User</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" class=\"select\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"selectAllUnapprovedUser\" \n\t\t\t\t\t\t\t    name=\"selectAllUnapprovedUser\" \n\t\t\t\t\t\t\t    [(ngModel)]=\"selectAllUnapprovedUser\"\n                            \t(ngModelChange)=\"getAllUnapprovedUser()\" >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"selectAllUnapprovedUser\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('name')\">Name <span [ngClass]=\"getFieldOrderBy('name')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('phone')\">Phone <span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('email')\">Email <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No <span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('unitNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let unit of unitListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: unitData ; let i = index\" [ngClass]=\"unit.checked ? 'selected' : ''\">\n\t\t\t\t      <td class=\"select\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"{{unit.id}}\" \n\t                            name=\"{{unit.id}}\"\n\t                            [(ngModel)]=\"unit.checked\"\n\t                            (ngModelChange)=\"getSelectedUnapprovedUser(unit)\"\n\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{unit.id}}\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t      \t{{unit.name}}</a>\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h6>Status/Notes</h6>\n\t\t\t\t\t\t    \t\t\t<small>{{getNotes(unit.apartmentBlockUnit)}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h6>Owner/Tenant</h6>\n\t\t\t\t\t\t    \t\t\t<small>{{getUserRole(unit.userRole, i)}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t  \t  </td>\n\t\t\t\t      <td class=\"grey\">{{unit.phone}}</td>\n\t\t\t\t      <td class=\"grey\">{{unit.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockNo(unit.apartmentBlockUnit, i)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockUnitNo(unit.apartmentBlockUnit, i)}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"showUserInfo(i)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/unit&users/edit-user/{{unit.id}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper\">\n\t\t\t\t<a class=\"btn lime-green sf\"\n    \t\t\t\t(click)=\"approveUsers()\"\n\t\t\t\t\t[ngClass]=\"!isUserSelected ? 'disabled' : ''\">\n\t\t\t\t\t<span>Approve Selected Users</span>\n    \t\t\t</a>\n    \t\t\t<a class=\"btn trans-white sf \"\n    \t\t\t\trouterLink=\"addunit\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"\n\t\t\t\t\t[ngClass]=\"!isUserSelected ? 'disabled' : ''\">\n\t\t\t\t\t<span>Re-send verification link</span>\n    \t\t\t</a>\n    \t\t\t<p>Once approved the user will be informed automatically</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalUserItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemUserStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemUserEndIndex\"\n\t\t\t\t[itemLimit] = \"itemUserLimit\"\n\t\t\t\t(outputParams) = \"getUserIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n\n\t<div class=\"card mt-30\">\n\t\t<div class=\"card-header pointer\" (click)=\"showLogs()\" [ngClass]=\"isLogs ? '' : 'no-border'\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5 class=\"p-0\">Logs</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right switch\" [ngClass]=\"isLogs ? 'up' : 'down'\">\n    \t\t\t<a href=\"javascript:void(0)\"></a>\n    \t\t</div>\n  \t\t</div>\n  \t\t<div class=\"card-body p-0\" *ngIf=\"isLogs\">\n  \t\t\t\n  \t\t\t<app-loader *ngIf=\"!isLogsDataLoaded\"></app-loader>\n\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\" *ngIf=\"isLogsDataLoaded\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockno')\">Date <span [ngClass]=\"getFieldOrderBy('blockno')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitno')\">By <span [ngClass]=\"getFieldOrderBy('unitno')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('sqrt')\">Comment <span [ngClass]=\"getFieldOrderBy('sqrt')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('intercom')\">Before <span [ngClass]=\"getFieldOrderBy('intercom')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('intercom')\">After <span [ngClass]=\"getFieldOrderBy('intercom')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let log of logsData | slice:ItemLogStartIndex:ItemLogEndIndex\">\n\t\t\t\t      <td class=\"name\"><a href=\"javascript:void(0)\">{{log.date}}</a></td>\n\t\t\t\t      <td class=\"grey\">{{log.by}}</td>\n\t\t\t\t      <td class=\"grey\">{{log.comment}}</td>\n\t\t\t\t      <td class=\"grey\">{{log.before}}</td>\n\t\t\t\t      <td class=\"grey\">{{log.after}}</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalLogItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemLogStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemLogEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLogLimit\"\n\t\t\t\t(outputParams) = \"getLogIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\t</div>\n\n\n\t<div class=\"card mt-30\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Mass Upload</h5>\n    \t\t\t<p>To create Residents accounts in mass, Download this\n    \t\t\t<a href=\"javascript:void(0)\" class=\"tc-blue ml-2 t-decor\">Excel Template</a>\n    \t\t\t</p>\n    \t\t</div>\n    \t\t\n  \t\t</div>\n  \t\t<div class=\"card-body\">\n  \t\t\t<a class=\"btn sf lime-green\">\n\t\t\t\t<span>Upload Document</span>\n\t\t\t</a>\n\t\t\t<p class=\"info\">If you have any trouble in uploading document, Please raise a\n\t\t\t<a href=\"javascript:void(0)\" class=\"tc-red ml-2 t-decor\">support ticket</a></p>\n  \t\t</div>\n  \t</div>\n\n\n  \t<ng-template #viewUnapprovedUserRef let-user>\n    \t<div class=\"user-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>User Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <div class=\"icon mr-4\"><img src=\"assets/images/user-icon.svg\" width=\"36\" /></div>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t    <h5 class=\"mt-0\">{{user.firstName}} {{user.lastName}}</h5>\n\t\t\t\t\t    <p class=\"grey\">{{user.roleName}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">User ID</h6>\n\t\t\t\t\t\t\t<p>{{user.userId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Email</h6>\n\t\t\t\t\t\t\t<p>{{user.emailId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Block No</h6>\n\t\t\t\t\t\t\t<p>{{user.blockNo}} {{user.unitNo}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Phone No</h6>\n\t\t\t\t\t\t\t<p>{{user.phoneNumber}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Blood Group</h6>\n\t\t\t\t\t\t\t<p>{{user.bloodGroup}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Address</h6>\n\t\t\t\t\t\t\t<p>{{user.address1}} {{user.address2}} {{user.zipCode}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\t</ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/unit-users.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/unit-users.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersUnitUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/access-control/access-control.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/access-control/access-control.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsAccessControlAccessControlComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvYWNjZXNzLWNvbnRyb2wvYWNjZXNzLWNvbnRyb2wuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/access-control/access-control.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/access-control/access-control.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AccessControlComponent */

  /***/
  function srcAppAmsUnitUsersComponentsAccessControlAccessControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessControlComponent", function () {
      return AccessControlComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AccessControlComponent =
    /*#__PURE__*/
    function () {
      function AccessControlComponent() {
        _classCallCheck(this, AccessControlComponent);
      }

      _createClass(AccessControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccessControlComponent;
    }();

    AccessControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-access-control',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./access-control.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/access-control/access-control.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./access-control.component.scss */
      "./src/app/ams/unit-users/components/access-control/access-control.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AccessControlComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsAddUsersAddResidentAddResidentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvYWRkLXVzZXJzL2FkZC1yZXNpZGVudC9hZGQtcmVzaWRlbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: AddResidentComponent */

  /***/
  function srcAppAmsUnitUsersComponentsAddUsersAddResidentAddResidentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddResidentComponent", function () {
      return AddResidentComponent;
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


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");

    var AddResidentComponent =
    /*#__PURE__*/
    function () {
      function AddResidentComponent(router, route, userService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, AddResidentComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.userType = null;
        this.genderType = null;
        this.apartmentBlockId = "";
        this.apartmentBlockUnitId = "";
        this.isEditUser = false;
        this.isBlockSelected = false;
        this.isUserSubmitted = false;
        this.isError = false;
        this.errorMessage = "";
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AddResidentComponent, [{
        key: "isArrayOne",
        value: function isArrayOne() {
          return this.residentArray.length > 1 ? true : false;
        }
      }, {
        key: "deleteResident",
        value: function deleteResident() {
          this.residentArray.splice(this.index, 1);
          this.outputParams.emit(this.residentArray);
        }
      }, {
        key: "getUnits",
        value: function getUnits() {
          var _this = this;

          this.apartmentService.getApartmentBlockUnitByBlockId(parseInt(this.apartmentBlockId)).subscribe(function (res) {
            _this.isBlockSelected = true;
            _this.unitData = res;

            if (_this.isEditUser) {
              _this.apartmentBlockUnitId = res[0].apartmentBlockUnitId.toString();
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "submitAddResidentForm",
        value: function submitAddResidentForm(form) {
          var _this2 = this;

          this.isUserSubmitted = true;
          this.isError = false;

          if (!this.isEditUser) {
            //add user
            var _userDetails = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "firstName": this.user.firstName,
              "middleName": "string",
              "lastName": this.user.lastName,
              "emailId": this.user.emailId,
              "password": this.user.password,
              "salt": "string",
              "address1": "string",
              "address2": "string",
              "city": "string",
              "state": "string",
              "country": "string",
              "zipCode": "string",
              "genderId": parseInt(this.genderType),
              "dob": "2019-11-10T09:58:08.934Z",
              "joinedOn": "2019-11-10T09:58:08.934Z",
              "bloodGroup": "string",
              "phoneNumber": this.user.phoneNumber.toString(),
              "emergencyContactNumber": "string",
              "emergencyContactPerson": "string",
              "emergencyContactNumberSecondary": "string",
              "emergencyContactPersonSecondary": "string",
              "accessCardNumber": "string",
              "notes": "string",
              "profilePictureId": null,
              "isLiving": true,
              "isActive": true,
              "isApproved": false,
              "resetPassword": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "updatedBy": 0
            }; //add user 

            this.userService.addUser(_userDetails).subscribe(function (res) {
              if (res.message) {
                var userId = res.message;
                var userRole = {
                  "userId": userId,
                  "roleId": parseInt(_this2.userType),
                  "isActive": true,
                  "insertedBy": parseInt(_this2.cookieService.get('userId')),
                  "insertedOn": "2019-11-10T10:00:28.212Z",
                  "updatedBy": 0,
                  "updatedOn": "2019-11-10T10:00:28.212Z"
                };

                _this2.userService.addUserRole(userRole).subscribe(function (res) {
                  var apartmentBlockUnitUser = {
                    "apartmentBlockUnitId": parseInt(_this2.apartmentBlockUnitId),
                    "userId": userId,
                    "userTypeId": parseInt(_this2.userType),
                    "isActive": true,
                    "insertedBy": parseInt(_this2.cookieService.get('userId')),
                    "insertedOn": "2019-11-10T10:38:46.060Z",
                    "updatedBy": 0,
                    "updatedOn": "2019-11-10T10:38:46.060Z"
                  };

                  _this2.apartmentService.addApartmentBlockUnitUser(apartmentBlockUnitUser).subscribe(function (res) {
                    _this2.isUserSubmitted = false;

                    if (res.message) {
                      _this2.sharedService.setAlertMessage("User added successfully");

                      _this2.router.navigate(['ams/unit&users/unapproved']);
                    } else {
                      _this2.isError = true;
                      _this2.errorMessage = res.errorMessage;
                    }
                  }, function (error) {
                    console.log(error);
                  });
                }, function (error) {
                  console.log(error);
                });
              } else {
                _this2.isUserSubmitted = false;
                _this2.isError = true;
                _this2.errorMessage = res.errorMessage;
              }
            }, function (error) {});
          } else {
            //edit user
            var userDetails = {
              "userId": this.route.params['value'].id,
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "firstName": this.user.firstName,
              "middleName": "string",
              "lastName": this.user.lastName,
              "emailId": this.user.emailId,
              "password": this.user.password,
              "salt": "string",
              "address1": "string",
              "address2": "string",
              "city": "string",
              "state": "string",
              "country": "string",
              "zipCode": "string",
              "genderId": parseInt(this.genderType),
              "dob": "2019-11-10T09:58:08.934Z",
              "joinedOn": "2019-11-10T09:58:08.934Z",
              "bloodGroup": "string",
              "phoneNumber": this.user.phoneNumber.toString(),
              "emergencyContactNumber": "string",
              "emergencyContactPerson": "string",
              "emergencyContactNumberSecondary": "string",
              "emergencyContactPersonSecondary": "string",
              "accessCardNumber": "string",
              "notes": "string",
              "profilePictureId": null,
              "isLiving": true,
              "isActive": true,
              "isApproved": this.user.isApproved,
              "resetPassword": true,
              "insertedBy": 0,
              "updatedBy": parseInt(this.cookieService.get('userId'))
            }; //edit user 

            this.userService.UpdateUser(userDetails).subscribe(function (res) {
              if (res.message) {
                var userId = res.message;
                var userRole = {
                  "userId": userId,
                  "roleId": parseInt(_this2.userType),
                  "isActive": true,
                  "insertedBy": parseInt(_this2.cookieService.get('userId')),
                  "insertedOn": "2019-11-10T10:00:28.212Z",
                  "updatedBy": 0,
                  "updatedOn": "2019-11-10T10:00:28.212Z"
                };

                _this2.userService.addUserRole(userRole).subscribe(function (res) {
                  var apartmentBlockUnitUser = {
                    "apartmentBlockUnitId": parseInt(_this2.apartmentBlockUnitId),
                    "userId": userId,
                    "userTypeId": parseInt(_this2.userType),
                    "isActive": true,
                    "insertedBy": parseInt(_this2.cookieService.get('userId')),
                    "insertedOn": "2019-11-10T10:38:46.060Z",
                    "updatedBy": 0,
                    "updatedOn": "2019-11-10T10:38:46.060Z"
                  };

                  _this2.apartmentService.addApartmentBlockUnitUser(apartmentBlockUnitUser).subscribe(function (res) {
                    _this2.isUserSubmitted = false;

                    if (res.message) {
                      _this2.sharedService.setAlertMessage("User updated successfully");

                      _this2.router.navigate(['ams/unit&users/unapproved']);
                    } else {
                      _this2.isError = true;
                      _this2.errorMessage = res.errorMessage;
                    }
                  }, function (error) {
                    console.log(error);
                  });
                }, function (error) {
                  console.log(error);
                });
              } else {
                _this2.isUserSubmitted = false;
                _this2.isError = true;
                _this2.errorMessage = res.errorMessage;
              }
            }, function (error) {});
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.user = {}; //get apartment blocks

          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this3.blocksData = res;
          });

          if (this.route.params['value'].id != undefined) {
            this.isEditUser = true;
            this.userService.getUserById(this.route.params['value'].id).subscribe(function (res) {
              _this3.user = res[0];
              _this3.genderType = _this3.user.genderId.toString(); // get role

              _this3.userService.getRolesByUserId(_this3.route.params['value'].id).subscribe(function (data) {
                _this3.userType = data[0].roleId.toString();
              }, function (error) {}); //get block


              _this3.apartmentService.getApartmentBlockByUserId(_this3.route.params['value'].id).subscribe(function (block) {
                _this3.apartmentBlockId = block[0].apartmentBlockId.toString();

                _this3.getUnits();
              }, function (error) {});
            }, function (error) {});
          }
        }
      }]);

      return AddResidentComponent;
    }();

    AddResidentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddResidentComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddResidentComponent.prototype, "residentArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddResidentComponent.prototype, "outputParams", void 0);
    AddResidentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-resident',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-resident.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-resident.component.scss */
      "./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], AddResidentComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/add-users/add-users.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/add-users/add-users.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsAddUsersAddUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvYWRkLXVzZXJzL2FkZC11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/add-users/add-users.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/add-users/add-users.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AddUsersComponent */

  /***/
  function srcAppAmsUnitUsersComponentsAddUsersAddUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUsersComponent", function () {
      return AddUsersComponent;
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

    var AddUsersComponent =
    /*#__PURE__*/
    function () {
      function AddUsersComponent(router, route) {
        _classCallCheck(this, AddUsersComponent);

        this.router = router;
        this.route = route;
        this.residentCount = 1;
        this.isEditUser = false;
      }

      _createClass(AddUsersComponent, [{
        key: "addResident",
        value: function addResident() {
          this.residentCount++;
          this.residentArray = Array(this.residentCount).fill(0).map(function (x, i) {
            return i;
          });
        }
      }, {
        key: "getResidentArray",
        value: function getResidentArray(event) {
          this.residentArray = event;
          this.residentCount = this.residentArray.length;
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 576;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.route.params['value'].id != undefined) {
            this.isEditUser = true;
          }

          this.residentArray = Array(this.residentCount).fill(0).map(function (x, i) {
            return i;
          });
        }
      }]);

      return AddUsersComponent;
    }();

    AddUsersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addUnitForm', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddUsersComponent.prototype, "addUnitForm", void 0);
    AddUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-users.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-users.component.scss */
      "./src/app/ams/unit-users/components/add-users/add-users.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], AddUsersComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsApprovedUserDetailsApprovedUserDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card.user-details {\n  width: 0 !important;\n  height: 0;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n  -webkit-transform: translate(120%, 0);\n          transform: translate(120%, 0);\n}\n.card.user-details.show {\n  width: 40% !important;\n  height: auto;\n  -webkit-transform: translate(0);\n          transform: translate(0);\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n  margin: 0 0 0 2%;\n}\n.card.user-details.full {\n  width: 100% !important;\n  margin: 0;\n}\n.card.user-details .main {\n  padding: 20px 15px;\n  overflow: auto;\n}\n.card.user-details .main h5 {\n  padding: 0 0 10px 0;\n  color: #3f51b5;\n}\n.card.user-details .main h5 .icon {\n  margin: 0 8px 0 0;\n}\n.card.user-details .main h5 .icon svg {\n  width: 24px;\n  height: 24px;\n  fill: #3f51b5;\n  margin: -2px 0 0 0;\n  display: inline-block;\n}\n.card.user-details .main p {\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.card.user-details .main li {\n  border: none;\n  padding: 0 0 6px 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #373946;\n}\n.card.user-details .tabs .icon .feather {\n  width: 14px;\n  display: inline-block;\n  margin: -3px 6px 0 0;\n}\n.card.user-details .tabs .icon svg {\n  width: 14px;\n  height: 14px;\n  fill: #373946;\n  display: inline-block;\n  margin: -3px 6px 0 0;\n}\n.card.user-details .tabs span:not(.icon) {\n  display: inline-block;\n  margin: 1px 0 0 4px;\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkLXVzZXItZGV0YWlscy9hcHByb3ZlZC11c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL21peGlucy5zY3NzIiwic3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkLXVzZXItZGV0YWlscy9hcHByb3ZlZC11c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ0MsbUJBQUE7RUFDQSxTQUFBO0VDbUNELGtDRGxDQztFQ29DRCwwQkRwQ0M7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FFRkY7QUZHRTtFQUNDLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUM2QkYsa0NENUJFO0VDOEJGLDBCRDlCRTtFQUNBLGdCQUFBO0FFQ0g7QUZDRTtFQUNDLHNCRzJHRztFSDFHSCxTQUFBO0FFQ0g7QUZDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBRUNKO0FGQ0k7RUFDQSxtQkFBQTtFQUNBLGNHbUJLO0FEbEJUO0FGQUk7RUFDQyxpQkFBQTtBRUVMO0FGREs7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFHYUc7RUhaSCxrQkFBQTtFQUNHLHFCQUFBO0FFR1Q7QUZDSTtFSVdGLGlCQUFBO0VKVFEsY0c5Qkc7QUQrQmI7QUZDSTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFSWxDSCxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBbUNBLGlCQUFBO0VKRkUsY0c2Qk87QUR4Qlg7QUZBSTtFQUNDLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FFRUw7QUZBSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUdnQk07RUhmTixxQkFBQTtFQUNBLG9CQUFBO0FFRUw7QUZFSTtFQUNJLHFCQUFBO0VBQ0gsbUJBQUE7RUluQkgsaUJBQUE7QUZvQkYiLCJmaWxlIjoic3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkLXVzZXItZGV0YWlscy9hcHByb3ZlZC11c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmNhcmQge1xuXHQmLnVzZXItZGV0YWlscyB7XG5cdFx0d2lkdGg6IDAgIWltcG9ydGFudDtcblx0XHRoZWlnaHQ6IDA7XG5cdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSwgMCk7XG5cdFx0Ji5zaG93IHtcblx0XHRcdHdpZHRoOiA0MCUgIWltcG9ydGFudDtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuXHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0XHRtYXJnaW46IDAgMCAwIDIlO1xuXHRcdH1cblx0XHQmLmZ1bGwge1xuXHRcdFx0d2lkdGg6ICRmdWxsO1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0XHQubWFpbiB7XG5cdFx0XHQgcGFkZGluZzogMjBweCAxNXB4O1xuXHRcdFx0IG92ZXJmbG93OiBhdXRvO1xuXG5cdFx0XHQgaDUge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDAgMTBweCAwO1xuXHRcdFx0XHRjb2xvcjogJG0tYmx1ZTtcblx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdG1hcmdpbjogMCA4cHggMCAwO1xuXHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdFx0XHRcdGZpbGw6ICRtLWJsdWU7XG5cdFx0XHRcdFx0XHRtYXJnaW46IC0ycHggMCAwIDA7XG4gICAgXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCB9XG5cdFx0XHQgcCB7XG5cdFx0XHQgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICAgICAgXHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdCB9XG5cdFx0XHQgbGkge1xuXHRcdFx0IFx0Ym9yZGVyOm5vbmU7XG5cdFx0XHQgXHRwYWRkaW5nOiAwIDAgNnB4IDA7XG5cdFx0XHRcdEBpbmNsdWRlIGhlYWQtcmVndWxhcjtcblx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdGNvbG9yOiAkZ3JleS04MDA7XG5cdFx0XHQgfVxuXHRcdH1cblx0XHQudGFicyB7XG5cdFx0XHQuaWNvbiB7XG5cdFx0XHRcdC5mZWF0aGVyIHtcblx0XHRcdFx0XHR3aWR0aDogMTRweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0bWFyZ2luOiAtM3B4IDZweCAwIDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHR3aWR0aDogMTRweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE0cHg7XG5cdFx0XHRcdFx0ZmlsbDogJGdyZXktODAwO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRtYXJnaW46IC0zcHggNnB4IDAgMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdCY6bm90KC5pY29uKXtcblx0XHRcdFx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRtYXJnaW46IDFweCAwIDAgNHB4O1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiLmNhcmQudXNlci1kZXRhaWxzIHtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSwgMCk7XG59XG4uY2FyZC51c2VyLWRldGFpbHMuc2hvdyB7XG4gIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIG1hcmdpbjogMCAwIDAgMiU7XG59XG4uY2FyZC51c2VyLWRldGFpbHMuZnVsbCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbn1cbi5jYXJkLnVzZXItZGV0YWlscyAubWFpbiB7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY2FyZC51c2VyLWRldGFpbHMgLm1haW4gaDUge1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICBjb2xvcjogIzNmNTFiNTtcbn1cbi5jYXJkLnVzZXItZGV0YWlscyAubWFpbiBoNSAuaWNvbiB7XG4gIG1hcmdpbjogMCA4cHggMCAwO1xufVxuLmNhcmQudXNlci1kZXRhaWxzIC5tYWluIGg1IC5pY29uIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZpbGw6ICMzZjUxYjU7XG4gIG1hcmdpbjogLTJweCAwIDAgMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNhcmQudXNlci1kZXRhaWxzIC5tYWluIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG59XG4uY2FyZC51c2VyLWRldGFpbHMgLm1haW4gbGkge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMCA2cHggMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4uY2FyZC51c2VyLWRldGFpbHMgLnRhYnMgLmljb24gLmZlYXRoZXIge1xuICB3aWR0aDogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IC0zcHggNnB4IDAgMDtcbn1cbi5jYXJkLnVzZXItZGV0YWlscyAudGFicyAuaWNvbiBzdmcge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBmaWxsOiAjMzczOTQ2O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogLTNweCA2cHggMCAwO1xufVxuLmNhcmQudXNlci1kZXRhaWxzIC50YWJzIHNwYW46bm90KC5pY29uKSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcHggMCAwIDRweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWJjYzczO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ApprovedUserDetailsComponent */

  /***/
  function srcAppAmsUnitUsersComponentsApprovedUserDetailsApprovedUserDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApprovedUserDetailsComponent", function () {
      return ApprovedUserDetailsComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../api/services/vehicle.service */
    "./src/app/api/services/vehicle.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/underscore.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_11__);

    var ApprovedUserDetailsComponent =
    /*#__PURE__*/
    function () {
      function ApprovedUserDetailsComponent(router, route, injector, dialog, userService, apartmentService, vehicleService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, ApprovedUserDetailsComponent);

        this.router = router;
        this.route = route;
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.vehicleService = vehicleService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isSeperatePage = false;
        this.isUserDataLoaded = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
      }

      _createClass(ApprovedUserDetailsComponent, [{
        key: "isTabSelected",
        value: function isTabSelected() {
          return this.selectedTab != -1 ? 'show' : '';
        }
      }, {
        key: "isNotSlide",
        value: function isNotSlide() {
          return this.isSeperatePage ? 'full' : '';
        }
      }, {
        key: "getRoleName",
        value: function getRoleName(role) {
          if (role === undefined || role.length == 0) {
            return '';
          } else {
            this.user.roleName = role[0].roleName;
            return role[0].roleName;
          }
        }
      }, {
        key: "getunitStatus",
        value: function getunitStatus(data) {
          return data ? 'Yes' : 'No';
        }
      }, {
        key: "getVehicleType",
        value: function getVehicleType(id) {
          underscore__WEBPACK_IMPORTED_MODULE_11__["each"](this.vehicleTypeData, function (item, index) {
            if (item.lookupValueId == id) {
              return item.lookupValueName;
            }
          });
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(index) {
          this.modalService.showConfirmModal(index);
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails(userId) {
          var _this4 = this;

          this.userService.getAllApprovedUsers().subscribe(function (res) {
            var approvedUsersData = res.filter(function (item) {
              if (item.id == userId) return item;
            });
            _this4.user = approvedUsersData[0];

            _this4.apartmentService.getApartmentBlockUnitByUserId(userId).subscribe(function (res) {
              _this4.unit = res[0] || {};
              _this4.apartmentBlockUnitId = _this4.unit.apartmentBlockUnitId;

              _this4.vehicleService.getVehicleByVehicleId(_this4.apartmentBlockUnitId).subscribe(function (res) {
                _this4.vehicle = res[0] || {};
                _this4.isUserDataLoaded = true;
              });
            });
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.user = {};
          this.unit = {};
          this.vehicle = {};

          if (this.route.params['value'].id != undefined) {
            this.isSeperatePage = true;
            this.getUserDetails(this.route.params['value'].id);
          } // delete user


          this.sharedService.unitlistdeleteindexcast.subscribe(function (index) {
            if (index != null) {
              var params = {
                userId: index,
                updateUserId: parseInt(_this5.cookieService.get('userId'))
              };
              _this5.isUserDataLoaded = false;

              _this5.userService.deleteUserById(params).subscribe(function (res) {
                _this5.isUserDataLoaded = true;

                _this5.sharedService.setUnitListDeleteIndex(null);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this6 = this;

          //user details
          if (this.selectedTab != -1) {
            this.isUserDataLoaded = false;
            this.getUserDetails(this.selectedTab);
          }

          this.lookupService.getLookupValueByLookupTypeId(2).subscribe(function (res) {
            _this6.vehicleTypeData = res;
          }, function (error) {});
        }
      }]);

      return ApprovedUserDetailsComponent;
    }();

    ApprovedUserDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
      }, {
        type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__["VehicleService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_8__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], ApprovedUserDetailsComponent.prototype, "selectedTab", void 0);
    ApprovedUserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-approved-user-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./approved-user-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./approved-user-details.component.scss */
      "./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__["VehicleService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_8__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])], ApprovedUserDetailsComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/approved/approved.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/approved/approved.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsApprovedApprovedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".approved-user-wrapper .card.users-list {\n  width: 100%;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n}\n@media (min-width: 991px) {\n  .approved-user-wrapper .card.users-list.show {\n    width: 58%;\n    -webkit-transition: all 0.15s ease;\n    transition: all 0.15s ease;\n  }\n}\n.approved-user-wrapper .card .card-header {\n  border-bottom: none !important;\n}\n.approved-user-wrapper .card .card-body.users > li {\n  border: none;\n  border-top: 1px solid #eaeaea;\n  padding: 14px 20px;\n  border-radius: 0 !important;\n  cursor: pointer;\n}\n.approved-user-wrapper .card .card-body.users > li h5 {\n  font-size: 1.6rem;\n  padding: 0 0 4px 0;\n  color: #3f51b5;\n}\n.approved-user-wrapper .card .card-body.users > li .list li {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  padding: 5px 0 0 0;\n  border: none;\n  background-color: transparent;\n  color: #8391a1;\n}\n.approved-user-wrapper .card .card-body.users > li .list li span:first-child {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  color: #373946;\n}\n.approved-user-wrapper .card .card-body.users > li .list li:hover {\n  background-color: transparent;\n}\n.approved-user-wrapper .card .card-body.users > li:hover {\n  background-color: #f9f9f9;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n}\n.approved-user-wrapper .card .card-body.users > li:hover h5 {\n  color: #3f51b5;\n}\n.approved-user-wrapper .card .card-body.users > li.active {\n  background-color: #ffffff;\n}\n.approved-user-wrapper .card .card-body.users > li.active:before {\n  content: \"\";\n  width: 4px;\n  height: 100% !important;\n  background-color: #3f51b5;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkL2FwcHJvdmVkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvYW1zL3VuaXQtdXNlcnMvY29tcG9uZW50cy9hcHByb3ZlZC9hcHByb3ZlZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvZm9udHMuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDQyxXQUFBO0VDbUNGLGtDRGxDRTtFQ29DRiwwQkRwQ0U7QUVISDtBRktJO0VBREQ7SUFFRSxVQUFBO0lDK0JKLGtDRDlCSTtJQ2dDSiwwQkRoQ0k7RUVBSDtBQUNGO0FGR0U7RUFDQyw4QkFBQTtBRURIO0FGS0k7RUFDQyxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQ2pCSiwyQkFBQTtFRG1CSSxlQUFBO0FFREw7QUZFSztFR3VCSCxpQkFBQTtFSHJCUSxrQkFBQTtFQUNBLGNJZ0JEO0FGaEJUO0FGR1U7RUdBUiwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBYUEsaUJBQUE7RUhkSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkkrREU7RUo5REYsY0k1Qk87QUYrQmI7QUZGTTtFR0NKLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFSEpLLGNJbUNJO0FGMUJYO0FGUE07RUFDQyw2Qkl3REM7QUYvQ1I7QUZMUTtFQUNDLHlCSTRDRTtFSHBEVixrQ0RTUTtFQ1BSLDBCRE9RO0FFU1Q7QUZSUztFQUNDLGNJUEQ7QUZpQlQ7QUZQUTtFQUNDLHlCSTBDRDtBRmpDUjtBRlJNO0VBQ0MsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QklnRUQ7RUovREMseUJJaEJFO0VKaUJGLGtCSTNERjtFSjRERSxNQUFBO0VBQ0EsT0FBQTtBRVVQIiwiZmlsZSI6InNyYy9hcHAvYW1zL3VuaXQtdXNlcnMvY29tcG9uZW50cy9hcHByb3ZlZC9hcHByb3ZlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4uYXBwcm92ZWQtdXNlci13cmFwcGVyIHtcblx0LmNhcmQge1xuXHRcdCYudXNlcnMtbGlzdHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0XHQmLnNob3cge1xuXHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcblx0XHRcdFx0XHR3aWR0aDogNTglO1xuXHRcdFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5jYXJkLWhlYWRlciB7XG5cdFx0XHRib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHRcdC5jYXJkLWJvZHkge1xuXHRcdFx0Ji51c2VycyB7XG5cdFx0XHRcdD4gbGkge1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgJGdyZXktNDUwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE0cHggMjBweDtcblx0XHRcdFx0XHRAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRoNSB7XG5cdFx0XHRcdCAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcblx0XHRcdFx0ICAgICAgcGFkZGluZzogMCAwIDRweCAwO1xuXHRcdFx0XHQgICAgICBjb2xvcjogJG0tYmx1ZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIC5saXN0IHtcblx0XHRcdFx0ICAgICAgbGkge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgZGVzcC1yZWd1bGFyO1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHggMCAwIDA7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnM7XG5cdFx0XHRcdFx0XHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHRcdFx0XHRzcGFuOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgZGVzcC1tZWRpdW07XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAkZ3JleS04MDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHRyYW5zO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICAmOmhvdmVyIHtcblx0XHRcdFx0ICAgIFx0YmFja2dyb3VuZC1jb2xvcjogJGdyZXktMTUwO1xuXHRcdFx0XHQgICAgXHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcblx0XHRcdFx0ICAgIFx0aDUge1xuXHRcdFx0XHQgICAgXHRcdGNvbG9yOiAkbS1ibHVlO1xuXHRcdFx0XHQgICAgXHR9XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICAmLmFjdGl2ZSB7XG5cdFx0XHRcdCAgICBcdGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDRweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAkZnVsbDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJG0tYmx1ZTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHRcdFx0XHRcdHRvcDowO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIi5hcHByb3ZlZC11c2VyLXdyYXBwZXIgLmNhcmQudXNlcnMtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xuICAuYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkLnVzZXJzLWxpc3Quc2hvdyB7XG4gICAgd2lkdGg6IDU4JTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIH1cbn1cbi5hcHByb3ZlZC11c2VyLXdyYXBwZXIgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSBoNSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkgLmxpc3QgbGkge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nOiA1cHggMCAwIDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjODM5MWExO1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkgLmxpc3QgbGkgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4uYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSAubGlzdCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbn1cbi5hcHByb3ZlZC11c2VyLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpOmhvdmVyIGg1IHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4uYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkuYWN0aXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzViY2M3MztcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/approved/approved.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/approved/approved.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ApprovedComponent */

  /***/
  function srcAppAmsUnitUsersComponentsApprovedApprovedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApprovedComponent", function () {
      return ApprovedComponent;
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


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");

    var ApprovedComponent =
    /*#__PURE__*/
    function () {
      function ApprovedComponent(router, route, userService, apartmentService, sharedService, cookieService) {
        _classCallCheck(this, ApprovedComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.totalUsers = 0;
        this.unitData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 5;
        this.selectedTab = -1;
        this.isUserDataLoaded = false;
      }

      _createClass(ApprovedComponent, [{
        key: "showApprovedUserDetails",
        value: function showApprovedUserDetails(id) {
          if (!this.isMobileView()) {
            if (this.selectedTab != id) this.selectedTab = id;else this.selectedTab = -1;
          } else {
            this.router.navigate(['ams/approved-user-details/' + id]);
          }

          console.log(this.selectedTab);
        }
      }, {
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
        }
      }, {
        key: "isTabSelected",
        value: function isTabSelected() {
          return this.selectedTab != -1 ? 'show' : '';
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 991;
        }
      }, {
        key: "getBlockNo",
        value: function getBlockNo(data, index) {
          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.approvedUsersData[index].blockNo = data[0].apartmentBlockNumber;
            return data[0].apartmentBlockNumber;
          }
        }
      }, {
        key: "getBlockUnitNo",
        value: function getBlockUnitNo(data, index) {
          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.approvedUsersData[index].unitNo = data[0].apartmentBlockUnitNumber;
            return data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "isActive",
        value: function isActive(num) {
          return this.selectedTab == num ? 'active' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.userService.getAllApprovedUsers().subscribe(function (res) {
            _this7.approvedUsersData = res.filter(function (item) {
              return item.userRole.length != 0 && item.apartmentBlockUnit.length != 0;
            });
            _this7.totalItems = _this7.approvedUsersData.length;

            if (_this7.totalItems > _this7.itemLimit) {
              _this7.ItemEndIndex = _this7.itemLimit;
            } else {
              _this7.ItemEndIndex = _this7.totalItems;
            }

            _this7.isUserDataLoaded = true;
          }, function (error) {
            console.log(error);
          });
          this.apartmentService.getApartmentBlockUnitByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this7.totalUnits = res.length;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ApprovedComponent;
    }();

    ApprovedComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    ApprovedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-approved',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./approved.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved/approved.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./approved.component.scss */
      "./src/app/ams/unit-users/components/approved/approved.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], ApprovedComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/broadcast/broadcast.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/broadcast/broadcast.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsBroadcastBroadcastComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvYnJvYWRjYXN0L2Jyb2FkY2FzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/broadcast/broadcast.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/broadcast/broadcast.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BroadcastComponent */

  /***/
  function srcAppAmsUnitUsersComponentsBroadcastBroadcastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastComponent", function () {
      return BroadcastComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BroadcastComponent =
    /*#__PURE__*/
    function () {
      function BroadcastComponent() {
        _classCallCheck(this, BroadcastComponent);
      }

      _createClass(BroadcastComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BroadcastComponent;
    }();

    BroadcastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-broadcast',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./broadcast.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/broadcast/broadcast.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./broadcast.component.scss */
      "./src/app/ams/unit-users/components/broadcast/broadcast.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BroadcastComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/de-activated/de-activated.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/de-activated/de-activated.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsDeActivatedDeActivatedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvZGUtYWN0aXZhdGVkL2RlLWFjdGl2YXRlZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/de-activated/de-activated.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/de-activated/de-activated.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: DeActivatedComponent */

  /***/
  function srcAppAmsUnitUsersComponentsDeActivatedDeActivatedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeActivatedComponent", function () {
      return DeActivatedComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../.././api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/underscore.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);

    var DeActivatedComponent =
    /*#__PURE__*/
    function () {
      function DeActivatedComponent(injector, dialog, userService, sharedService, cookieService) {
        _classCallCheck(this, DeActivatedComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.deActivatedData = "";
        this.ItemUserStartIndex = 0;
        this.itemUserLimit = 20;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.selectAllDeactivatedUser = false;
        this.isUserSelected = false;
        this.isBulkActivate = false;
        this.isUserDataLoaded = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
      }

      _createClass(DeActivatedComponent, [{
        key: "getSelectedDeActivatedUser",
        value: function getSelectedDeActivatedUser(unit) {
          var length = 0;
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.deActivatedListData, function (item) {
            if (item.checked) {
              length++;
            }
          });

          if (length > 0) {
            this.isUserSelected = true;
          } else {
            this.isUserSelected = false;
          }

          if (length > 1) {
            this.isBulkActivate = true;
            this.isUserSelected = false;
          } else {
            this.isBulkActivate = false;
          }

          if (length == 0) {
            this.selectAllDeactivatedUser = false;
          }

          if (length == this.deActivatedListData.length) {
            this.selectAllDeactivatedUser = true;
          }
        }
      }, {
        key: "getAllDeactivatedUser",
        value: function getAllDeactivatedUser() {
          if (this.selectAllDeactivatedUser) {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.deActivatedListData, function (item) {
              item.checked = true;
            });
            this.isBulkActivate = true;
          } else {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.deActivatedListData, function (item) {
              item.checked = false;
            });
            this.isBulkActivate = false;
          }
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
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
            return this.unitOrder ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "getUserIndexParams",
        value: function getUserIndexParams(event) {
          this.ItemUserStartIndex = event.ItemUserStartIndex;
          this.ItemUserEndIndex = event.ItemUserEndIndex;
        }
      }, {
        key: "getBlockNo",
        value: function getBlockNo(data, index) {
          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.deActivatedListData[index].blockNo = data[0].apartmentBlockNumber;
            return data[0].apartmentBlockNumber;
          }
        }
      }, {
        key: "getBlockUnitNo",
        value: function getBlockUnitNo(data, index) {
          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.deActivatedListData[index].unitNo = data[0].apartmentBlockUnitNumber;
            return data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getNotes",
        value: function getNotes(data) {
          if (data === undefined || data.length == 0) return '';else return data[0].notes;
        }
      }, {
        key: "getUserRole",
        value: function getUserRole(role, index) {
          if (role === undefined || role.length == 0) {
            return '';
          } else {
            this.deActivatedListData[index].roleName = role[0].roleName;
            return role[0].roleName;
          }
        }
      }, {
        key: "getUserRoleInfo",
        value: function getUserRoleInfo(role) {
          if (role.userRole === undefined || role.userRole.length == 0) {
            return '';
          } else {
            return role.userRole[0].roleName;
          }
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(index) {
          this.modalService.showConfirmModal(index);
        }
      }, {
        key: "showUserInfo",
        value: function showUserInfo(index) {
          var _this8 = this;

          var userId = this.deActivatedListData[index].id;
          var blockData = this.deActivatedListData[index].apartmentBlockUnit;
          var userRole = this.deActivatedListData[index].userRole;
          this.userService.getUserById(userId).subscribe(function (res) {
            var userData = res[0];

            if (blockData === undefined || blockData.length == 0) {
              userData.blockNo = "Not Available";
              userData.unitNo = "";
            } else {
              userData.blockNo = blockData[0].apartmentBlockNumber;
              userData.unitNo = blockData[0].apartmentBlockUnitNumber;
            }

            if (userRole === undefined || userRole.length == 0) {
              userData.roleName = "Not Available";
            } else {
              userData.roleName = userRole[0].roleName;
            }

            _this8.dialog.open(_this8.viewDeactivatedUserRef, {
              panelClass: 'material',
              disableClose: true,
              data: userData
            });
          });
        }
      }, {
        key: "activateUser",
        value: function activateUser() {
          var _this9 = this;

          this.isUserDataLoaded = false;
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.deActivatedListData, function (item, index) {
            if (item.checked) {
              _this9.userService.getUserById(item.id).subscribe(function (res) {
                var user = res[0];
                user.isActive = true;

                _this9.userService.UpdateUser(user).subscribe(function (res) {
                  _this9.deActivatedListData.splice(index, 1);

                  _this9.totalUserItems = _this9.deActivatedListData.length;
                  _this9.isUserDataLoaded = true;
                });
              });
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.userService.getAllUnApprovedUsers().subscribe(function (res) {
            var deActivatedListData = res;
            console.log(res); //filter active true items

            _this10.deActivatedListData = deActivatedListData.filter(function (data) {
              return !data.active;
            });
            _this10.totalUserItems = _this10.deActivatedListData.length;

            if (_this10.totalUserItems > _this10.itemUserLimit) {
              _this10.ItemUserEndIndex = _this10.itemUserLimit;
            } else {
              _this10.ItemUserEndIndex = _this10.totalUserItems;
            }

            _this10.isUserDataLoaded = true;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return DeActivatedComponent;
    }();

    DeActivatedComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewDeactivatedUserRef", {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], DeActivatedComponent.prototype, "viewDeactivatedUserRef", void 0);
    DeActivatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-de-activated',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./de-activated.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/de-activated/de-activated.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./de-activated.component.scss */
      "./src/app/ams/unit-users/components/de-activated/de-activated.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], DeActivatedComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/reports/reports.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/reports/reports.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsReportsReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/reports/reports.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/reports/reports.component.ts ***!
    \************************************************************************/

  /*! exports provided: ReportsComponent */

  /***/
  function srcAppAmsUnitUsersComponentsReportsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
      return ReportsComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");

    var ReportsComponent =
    /*#__PURE__*/
    function () {
      function ReportsComponent(sharedService) {
        _classCallCheck(this, ReportsComponent);

        this.sharedService = sharedService;
        this.selectedReports = [];
      }

      _createClass(ReportsComponent, [{
        key: "getSelectedReports",
        value: function getSelectedReports(item) {
          if (item.checked) {
            this.selectedReports.push(item.name);
          } else {
            this.selectedReports = this.selectedReports.filter(function (data) {
              if (data != item.name) return data;
            });
          }
        }
      }, {
        key: "isReportSelected",
        value: function isReportSelected() {
          return this.selectedReports.length > 0 ? true : false;
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.sharedService.getJsonData().subscribe(function (res) {
            _this11.unitReportData = res.unitReport;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ReportsComponent;
    }();

    ReportsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }];
    };

    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reports',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/reports/reports.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reports.component.scss */
      "./src/app/ams/unit-users/components/reports/reports.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])], ReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/statistics/statistics.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/statistics/statistics.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsStatisticsStatisticsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/statistics/statistics.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/statistics/statistics.component.ts ***!
    \******************************************************************************/

  /*! exports provided: StatisticsComponent */

  /***/
  function srcAppAmsUnitUsersComponentsStatisticsStatisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function () {
      return StatisticsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StatisticsComponent =
    /*#__PURE__*/
    function () {
      function StatisticsComponent() {
        _classCallCheck(this, StatisticsComponent);
      }

      _createClass(StatisticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatisticsComponent;
    }();

    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-statistics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./statistics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/statistics/statistics.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./statistics.component.scss */
      "./src/app/ams/unit-users/components/statistics/statistics.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StatisticsComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/unapproved/unapproved.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/unapproved/unapproved.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsUnapprovedUnapprovedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".unapproved-wrapper .customize-email {\n  margin: 0 0 25px 0;\n}\n.unapproved-wrapper .customize-email p {\n  font-size: 1.6rem;\n  padding: 0 0 15px 0 !important;\n  color: #585858;\n}\n.unapproved-wrapper .card-body p.info {\n  padding: 10px 0 0 0 !important;\n  font-size: 1.4rem;\n  color: #373946;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL3VuYXBwcm92ZWQvdW5hcHByb3ZlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3VuaXQtdXNlcnMvY29tcG9uZW50cy91bmFwcHJvdmVkL3VuYXBwcm92ZWQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ0Msa0JBQUE7QUNKRjtBREtFO0VFMkNBLGlCQUFBO0VGekNPLDhCQUFBO0VBQ0EsY0dxRUU7QUZ4RVg7QURPRTtFQUNPLDhCQUFBO0VFbUNQLGlCQUFBO0VGakNVLGNHNEREO0FGakVYIiwiZmlsZSI6InNyYy9hcHAvYW1zL3VuaXQtdXNlcnMvY29tcG9uZW50cy91bmFwcHJvdmVkL3VuYXBwcm92ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLnVuYXBwcm92ZWQtd3JhcHBlciB7XG5cdC5jdXN0b21pemUtZW1haWwge1xuXHRcdG1hcmdpbjogMCAwIDI1cHggMDtcblx0XHRwIHtcbiAgICAgICAgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XG4gICAgICAgIFx0cGFkZGluZzogMCAwIDE1cHggMCAhaW1wb3J0YW50O1xuICAgICAgICBcdGNvbG9yOiAkZ3JleS03MDA7XG5cdFx0fVxuXHR9XG5cdC5jYXJkLWJvZHkge1xuXHRcdHAuaW5mbyB7XG4gICAgICAgIFx0cGFkZGluZzogMTBweCAwIDAgMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG4gICAgICAgICAgICBjb2xvcjogJGdyZXktODAwO1xuICAgICAgXHR9XG5cdH1cblxufSIsIi51bmFwcHJvdmVkLXdyYXBwZXIgLmN1c3RvbWl6ZS1lbWFpbCB7XG4gIG1hcmdpbjogMCAwIDI1cHggMDtcbn1cbi51bmFwcHJvdmVkLXdyYXBwZXIgLmN1c3RvbWl6ZS1lbWFpbCBwIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1ODU4NTg7XG59XG4udW5hcHByb3ZlZC13cmFwcGVyIC5jYXJkLWJvZHkgcC5pbmZvIHtcbiAgcGFkZGluZzogMTBweCAwIDAgMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1YmNjNzM7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4OyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/unapproved/unapproved.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/unapproved/unapproved.component.ts ***!
    \******************************************************************************/

  /*! exports provided: UnapprovedComponent */

  /***/
  function srcAppAmsUnitUsersComponentsUnapprovedUnapprovedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnapprovedComponent", function () {
      return UnapprovedComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../.././api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/underscore.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);

    var UnapprovedComponent =
    /*#__PURE__*/
    function () {
      function UnapprovedComponent(injector, dialog, userService, sharedService, cookieService) {
        _classCallCheck(this, UnapprovedComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.ItemUserStartIndex = 0;
        this.itemUserLimit = 15;
        this.ItemLogStartIndex = 0;
        this.unitData = "";
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
        this.selectAllUnapprovedUser = false;
        this.isUserSelected = false;
        this.isLogs = false;
        this.isUserDataLoaded = false;
        this.isLogsDataLoaded = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
      }

      _createClass(UnapprovedComponent, [{
        key: "getUserIndexParams",
        value: function getUserIndexParams(event) {
          this.ItemUserStartIndex = event.ItemUserStartIndex;
          this.ItemUserEndIndex = event.ItemUserEndIndex;
        }
      }, {
        key: "getLogIndexParams",
        value: function getLogIndexParams(event) {
          this.ItemLogStartIndex = event.ItemLogStartIndex;
          this.ItemLogEndIndex = event.ItemLogEndIndex;
        }
      }, {
        key: "getBlockNo",
        value: function getBlockNo(data, index) {
          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.unitListData[index].blockNo = data[0].apartmentBlockNumber;
            return data[0].apartmentBlockNumber;
          }
        }
      }, {
        key: "getBlockUnitNo",
        value: function getBlockUnitNo(data, index) {
          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.unitListData[index].unitNo = data[0].apartmentBlockUnitNumber;
            return data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getNotes",
        value: function getNotes(data) {
          if (data === undefined || data.length == 0) return '';else return data[0].notes;
        }
      }, {
        key: "getUserRole",
        value: function getUserRole(role, index) {
          if (role === undefined || role.length == 0) {
            return '';
          } else {
            this.unitListData[index].roleName = role[0].roleName;
            return role[0].roleName;
          }
        }
      }, {
        key: "getUserRoleInfo",
        value: function getUserRoleInfo(role) {
          if (role.userRole === undefined || role.userRole.length == 0) {
            return '';
          } else {
            return role.userRole[0].roleName;
          }
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          if (event.target.innerWidth <= 991) this.isMobile = true;else this.isMobile = false;
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
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
            return this.unitOrder ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "getAllUnapprovedUser",
        value: function getAllUnapprovedUser() {
          if (this.selectAllUnapprovedUser) {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.unitListData, function (item) {
              item.checked = true;
            });
            this.isUserSelected = true;
          } else {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.unitListData, function (item) {
              item.checked = false;
            });
            this.isUserSelected = false;
          }
        }
      }, {
        key: "getSelectedUnapprovedUser",
        value: function getSelectedUnapprovedUser(unit) {
          var length = 0;
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.unitListData, function (item) {
            if (item.checked) {
              length++;
            }
          });

          if (length > 0) {
            this.isUserSelected = true;
          } else {
            this.isUserSelected = false;
          }

          if (length == 0) {
            this.selectAllUnapprovedUser = false;
          }

          if (length == this.unitListData.length) {
            this.selectAllUnapprovedUser = true;
          }
        }
      }, {
        key: "approveUsers",
        value: function approveUsers() {
          var _this12 = this;

          this.isUserDataLoaded = false;
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.unitListData, function (item, index) {
            if (item.checked) {
              _this12.userService.getUserById(item.id).subscribe(function (res) {
                var user = res[0];
                user.isApproved = true;

                _this12.userService.UpdateUser(user).subscribe(function (res) {
                  _this12.unitListData.splice(index, 1);

                  _this12.totalUserItems = _this12.unitListData.length;
                  _this12.isUserDataLoaded = true;
                });
              });
            }
          });
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(index) {
          this.modalService.showConfirmModal(index);
        }
      }, {
        key: "showUserInfo",
        value: function showUserInfo(index) {
          var _this13 = this;

          var userId = this.unitListData[index].id;
          var blockData = this.unitListData[index].apartmentBlockUnit;
          var userRole = this.unitListData[index].userRole;
          this.userService.getUserById(userId).subscribe(function (res) {
            var userData = res[0];

            if (blockData === undefined || blockData.length == 0) {
              userData.blockNo = "Not Available";
              userData.unitNo = "";
            } else {
              userData.blockNo = blockData[0].apartmentBlockNumber;
              userData.unitNo = blockData[0].apartmentBlockUnitNumber;
            }

            if (userRole === undefined || userRole.length == 0) {
              userData.roleName = "Not Available";
            } else {
              userData.roleName = userRole[0].roleName;
            }

            _this13.dialog.open(_this13.viewUnapprovedUserRef, {
              panelClass: 'material',
              disableClose: true,
              data: userData
            });
          });
        }
      }, {
        key: "showLogs",
        value: function showLogs() {
          var _this14 = this;

          this.isLogs = !this.isLogs;
          this.sharedService.getJsonData().subscribe(function (res) {
            _this14.isLogsDataLoaded = true;
            _this14.logsData = res.logsData;
            _this14.totalLogItems = _this14.logsData.length;

            if (_this14.totalLogItems > 20) {
              _this14.ItemLogEndIndex = 20;
            } else {
              _this14.ItemLogEndIndex = _this14.totalLogItems;
            }

            _this14.itemLogLimit = _this14.ItemLogEndIndex;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          if (window.innerWidth <= 991) this.isMobile = true;else this.isMobile = false;
          this.userService.getAllUnApprovedUsers().subscribe(function (res) {
            var unitListData = res; //filter active true items

            _this15.unitListData = unitListData.filter(function (data) {
              return data.active;
            });
            _this15.totalUserItems = _this15.unitListData.length;

            if (_this15.totalUserItems > _this15.itemUserLimit) {
              _this15.ItemUserEndIndex = _this15.itemUserLimit;
            } else {
              _this15.ItemUserEndIndex = _this15.totalUserItems;
            }

            _this15.isUserDataLoaded = true;
          }, function (error) {
            console.log(error);
          }); // delete user

          this.sharedService.unitlistdeleteindexcast.subscribe(function (index) {
            if (index != null) {
              var params = {
                userId: _this15.unitListData[index].id,
                updateUserId: parseInt(_this15.cookieService.get('userId'))
              };
              _this15.isUserDataLoaded = false;

              _this15.userService.deleteUserById(params).subscribe(function (res) {
                _this15.unitListData.splice(index, 1);

                _this15.totalUserItems = _this15.unitListData.length;
                _this15.isUserDataLoaded = true;

                _this15.sharedService.setUnitListDeleteIndex(null);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }]);

      return UnapprovedComponent;
    }();

    UnapprovedComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewUnapprovedUserRef", {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], UnapprovedComponent.prototype, "viewUnapprovedUserRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], UnapprovedComponent.prototype, "onResize", null);
    UnapprovedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unapproved',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./unapproved.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/unapproved/unapproved.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./unapproved.component.scss */
      "./src/app/ams/unit-users/components/unapproved/unapproved.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], UnapprovedComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/unit-users-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ams/unit-users/unit-users-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: routes, UnitUsersRoutingModule */

  /***/
  function srcAppAmsUnitUsersUnitUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitUsersRoutingModule", function () {
      return UnitUsersRoutingModule;
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


    var _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/add-users/add-users.component */
    "./src/app/ams/unit-users/components/add-users/add-users.component.ts");
    /* harmony import */


    var _components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/unapproved/unapproved.component */
    "./src/app/ams/unit-users/components/unapproved/unapproved.component.ts");
    /* harmony import */


    var _components_approved_approved_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/approved/approved.component */
    "./src/app/ams/unit-users/components/approved/approved.component.ts");
    /* harmony import */


    var _components_de_activated_de_activated_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/de-activated/de-activated.component */
    "./src/app/ams/unit-users/components/de-activated/de-activated.component.ts");
    /* harmony import */


    var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/reports/reports.component */
    "./src/app/ams/unit-users/components/reports/reports.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'unapproved',
      pathMatch: 'full'
    }, {
      path: 'unapproved',
      component: _components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_4__["UnapprovedComponent"]
    }, {
      path: 'add-users',
      component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"]
    }, {
      path: 'edit-user/:id',
      component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"]
    }, {
      path: 'approved',
      component: _components_approved_approved_component__WEBPACK_IMPORTED_MODULE_5__["ApprovedComponent"]
    }, {
      path: 'access-control',
      component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"]
    }, {
      path: 'broadcast',
      component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"]
    }, {
      path: 'statistics',
      component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"]
    }, {
      path: 'de-activated',
      component: _components_de_activated_de_activated_component__WEBPACK_IMPORTED_MODULE_6__["DeActivatedComponent"]
    }, {
      path: 'reports',
      component: _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"]
    }, {
      path: '**',
      redirectTo: 'unapproved',
      pathMatch: 'full'
    }];

    var UnitUsersRoutingModule = function UnitUsersRoutingModule() {
      _classCallCheck(this, UnitUsersRoutingModule);
    };

    UnitUsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UnitUsersRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/unit-users.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/ams/unit-users/unit-users.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersUnitUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL3VuaXQtdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/unit-users.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/ams/unit-users/unit-users.component.ts ***!
    \********************************************************/

  /*! exports provided: UnitUsersComponent */

  /***/
  function srcAppAmsUnitUsersUnitUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitUsersComponent", function () {
      return UnitUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UnitUsersComponent =
    /*#__PURE__*/
    function () {
      function UnitUsersComponent() {
        _classCallCheck(this, UnitUsersComponent);
      }

      _createClass(UnitUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UnitUsersComponent;
    }();

    UnitUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unit-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./unit-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/unit-users.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./unit-users.component.scss */
      "./src/app/ams/unit-users/unit-users.component.scss"))["default"]]
    })], UnitUsersComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/unit-users.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ams/unit-users/unit-users.module.ts ***!
    \*****************************************************/

  /*! exports provided: UnitUsersModule */

  /***/
  function srcAppAmsUnitUsersUnitUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitUsersModule", function () {
      return UnitUsersModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _unit_users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./unit-users-routing.module */
    "./src/app/ams/unit-users/unit-users-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _unit_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./unit-users.component */
    "./src/app/ams/unit-users/unit-users.component.ts");
    /* harmony import */


    var _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/add-users/add-users.component */
    "./src/app/ams/unit-users/components/add-users/add-users.component.ts");
    /* harmony import */


    var _components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/unapproved/unapproved.component */
    "./src/app/ams/unit-users/components/unapproved/unapproved.component.ts");
    /* harmony import */


    var _components_approved_approved_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/approved/approved.component */
    "./src/app/ams/unit-users/components/approved/approved.component.ts");
    /* harmony import */


    var _components_access_control_access_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/access-control/access-control.component */
    "./src/app/ams/unit-users/components/access-control/access-control.component.ts");
    /* harmony import */


    var _components_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/broadcast/broadcast.component */
    "./src/app/ams/unit-users/components/broadcast/broadcast.component.ts");
    /* harmony import */


    var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/statistics/statistics.component */
    "./src/app/ams/unit-users/components/statistics/statistics.component.ts");
    /* harmony import */


    var _components_de_activated_de_activated_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/de-activated/de-activated.component */
    "./src/app/ams/unit-users/components/de-activated/de-activated.component.ts");
    /* harmony import */


    var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/reports/reports.component */
    "./src/app/ams/unit-users/components/reports/reports.component.ts");
    /* harmony import */


    var _components_add_users_add_resident_add_resident_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/add-users/add-resident/add-resident.component */
    "./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.ts");
    /* harmony import */


    var _components_approved_user_details_approved_user_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/approved-user-details/approved-user-details.component */
    "./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.ts");

    var UnitUsersModule = function UnitUsersModule() {
      _classCallCheck(this, UnitUsersModule);
    };

    UnitUsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_6__["AddUsersComponent"], _unit_users_component__WEBPACK_IMPORTED_MODULE_5__["UnitUsersComponent"], _components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_7__["UnapprovedComponent"], _components_approved_approved_component__WEBPACK_IMPORTED_MODULE_8__["ApprovedComponent"], _components_access_control_access_control_component__WEBPACK_IMPORTED_MODULE_9__["AccessControlComponent"], _components_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_10__["BroadcastComponent"], _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_11__["StatisticsComponent"], _components_de_activated_de_activated_component__WEBPACK_IMPORTED_MODULE_12__["DeActivatedComponent"], _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__["ReportsComponent"], _components_add_users_add_resident_add_resident_component__WEBPACK_IMPORTED_MODULE_14__["AddResidentComponent"], _components_approved_user_details_approved_user_details_component__WEBPACK_IMPORTED_MODULE_15__["ApprovedUserDetailsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(), _unit_users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UnitUsersRoutingModule"]],
      bootstrap: [_unit_users_component__WEBPACK_IMPORTED_MODULE_5__["UnitUsersComponent"]]
    })], UnitUsersModule);
    /***/
  }
}]);
//# sourceMappingURL=unit-users-unit-users-module-es5.js.map