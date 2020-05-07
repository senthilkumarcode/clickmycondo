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


    __webpack_exports__["default"] = "<div class=\"add-resident-wrapper\">\n\n\t<h5 class=\"mb-3\">\n\t\t<span *ngIf=\"!isEditUser\">Add User</span>\n\t\t<span *ngIf=\"isEditUser\">Edit User</span>\n\t</h5>\n\t<div class=\"card clear mb-30\">\n\t\t<!-- <div class=\"card-header\">\n\t\t\t\n    \t\t<div class=\"float-right\" *ngIf=\"!isArrayOne()\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/unapproved\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div> \n\t\t</div>-->\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isUserSubmitted\"></app-loader>\n\t\t\t<form #CheckingEmailForm = \"ngForm\" name=\"CheckingEmailForm\"   novalidate>\n                <div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Email*</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"emailRegister\" [(ngModel)]=\"emailToRegister\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\" style=\"padding-top: 23px;\">\n\t\t\t\t\t\t<button class=\"btn green mr-2\" (click)=\"checkEmail()\">Check</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<hr/>\n                <div class=\"row\" *ngIf=\"isValidEmail\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ng-container *ngIf=\"!isUserSubmitted\">\n\t\t\t\t<form #addResidentForm = \"ngForm\" name=\"addResidentForm\" (ngSubmit)=\"submitAddResidentForm(addResidentForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>User Type*</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"userType\" (change)=\"changeUserType($event)\" id=\"admin\" [(ngModel)]=\"userType\"  value=\"1\" type=\"radio\" required>\n\t\t                            <label class=\"radio-inline\" for=\"admin\">Admin</label>\n\t                     \t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"userType\" (change)=\"changeUserType($event)\" id=\"owner\" [(ngModel)]=\"userType\"  value=\"4\" type=\"radio\" required>\n\t\t                            <label class=\"radio-inline\" for=\"owner\">Owner</label>\n\t                     \t\t</div>\n\t\t                    \t<div class=\"form-group\">\n\t\t                            <input name=\"userType\" (change)=\"changeUserType($event)\" id=\"tenant\" [(ngModel)]=\"userType\" value=\"2\" type=\"radio\" required>\n\t\t                            <label class=\"radio-inline\" for=\"tenant\">Tenant</label>\n\t\t                         </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>First Name*</label>\n\t\t\t                    <input type=\"text\" [disabled]=\"isExistingUSer\" class=\"form-control\" placeholder=\"First Name\" name=\"firstName\" [(ngModel)]=\"user.firstName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Last Name*</label>\n\t\t\t                    <input type=\"text\" [disabled]=\"isExistingUSer\" class=\"form-control\" placeholder=\"Last Name\" name=\"lastName\" [(ngModel)]=\"user.lastName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Gender*</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"genderType\" id=\"male\" [(ngModel)]=\"genderType\"  value=\"43\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"male\">Male</label>\n\t                     \t\t</div>\n\t\t                    \t<div class=\"form-group\">\n\t\t                            <input name=\"genderType\" id=\"female\" [(ngModel)]=\"genderType\" value=\"44\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"female\">Female</label>\n\t\t                         </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf =\"!isAdminRegister\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Block No*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t\t\t\tid=\"blockNo\" \n\t\t\t\t\t\t\t\t\tplaceholder=\"Select Block\"\n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockId\" (ngModelChange)=\"getUnits()\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isBlockSelected && !isAdminRegister\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Unit No*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Select Unit\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockUnitId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isAdminRegister\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Admin Role</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"userRole\" \n\t\t\t\t\t\t\t        id=\"userRole\" \n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Select Role\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"userRoleId\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of userRolesData\" [value]=\"item.roleId\">{{ item.roleName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Phone/Mobile*</label>\n\t\t\t                    <input type=\"number\" [disabled]=\"isExistingUSer\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"PhoneNo\" name=\"phoneNo\" [(ngModel)]=\"user.phoneNumber\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEditUser \">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Password*</label>\n\t\t\t                    <input type=\"password\" [disabled]=\"isAutoGenPassword || isExistingUSer\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"user.password\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEditUser || isExistingUSer\">\n\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left mr-4\" style=\"padding-top: 28px;\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" [disabled]=\"isExistingUSer\" (change)=\"changeAutoGenPass($event)\" class=\"form-check-input\" id=\"autoGenPassword\" name=\"autoGenPassword\" [(ngModel)]=\"isAutoGenPassword\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<label class=\"form-check-label tiny\" for=\"autoGenPassword\">Auto Generate Password & Send To User's Email</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isAdminRegister\">\n\t\t\t\t\t\t\t<div class=\"input-box\" style=\"padding-top: 25px;padding-left: 16px;\">\n\t\t\t\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left mr-4\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"livingcondo\" name=\"livingcondo\" [(ngModel)]=\"user.isLiving\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label tiny\" for=\"livingcondo\">Is Redisiding In Condo</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left mr-4\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"primarycondo\" name=\"primarycondo\" [(ngModel)]=\"user.isPrimaryContact\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label tiny\" for=\"primarycondo\">Is Primary Contact</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Email*</label>\n\t\t\t                    <input type=\"email\" class=\"form-control\" placeholder=\"Enter value\" name=\"email\" [(ngModel)]=\"user.emailId\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t\t\t<label>Notification</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group checker-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left mr-4\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"emailNotify\" name=\"emailNotify\" [(ngModel)]=\"user.isEmailNotify\"\n\t\t\t\t\t\t\t\t\t    disabled=\"true\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"emailNotify\">Email</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left mr-4\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"smsNotify\" name=\"smsNotify\" [(ngModel)]=\"user.isSmsNotify\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"smsNotify\">SMS</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"flashNotify\" name=\"flashNotify\" [(ngModel)]=\"user.isFlashNotify\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"flashNotify\">Flash Notice</label>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Is Primary Contact</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"isPrimary\" id=\"yesPrimary\" [(ngModel)]=\"isPrimary\"  value=\"Yes\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"yesPrimary\">Yes</label>\n\t                     \t\t</div>\n\t\t                    \t<div class=\"form-group\">\n\t\t                            <input name=\"isPrimary\" id=\"NoPrimary\" [(ngModel)]=\"isPrimary\" value=\"No\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"NoPrimary\">No</label>\n\t\t                         </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addResidentForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\n\t\t</div>\n\t</div>\n</div>\n\n";
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


    __webpack_exports__["default"] = "<div class=\"card user-details float-left\" [ngClass]=\"[ isTabSelected() , isNotSlide()]\" id=\"accordion\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<div class=\"card-body p-0\" *ngIf=\"isUserDataLoaded\">\n\n\t\t<div class=\"main\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5 class=\"text-capitalize\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/user-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t<span>{{user.name}}</span>\n\t\t\t\t</h5>\n\t\t\t\t<p>{{getRoleName(user.userRole)}}</p>\n\t\t\t\t<p>{{user.phone}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"showUserInfo()\">\n\t\t\t      \t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(user.id)\">\n\t\t\t\t\t<i-feather class=\"icon delete\" name=\"trash\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\n\t\t<ul class=\"list-group tabs clear\">\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/unit-liner-icon.svg\" /></span>\n\t\t\t\t<span>Unit Details</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p><span>Block No:</span> {{unit.apartmentBlockNumber}}</p>\n\t\t\t\t\t<p><span>Unit No:</span> {{unit.apartmentBlockUnitNumber}}</p>\n\t\t\t\t\t<p><span>Bulitup Area:</span> {{unit.builtupArea}}</p>\n\t\t\t\t\t<p><span>Carpet Area:</span> {{unit.carpetArea}}</p>\n\t\t\t\t\t<p><span>Unit Type:</span> {{unit.unitType}}</p>\n\t\t\t\t\t<p><span>Vacant:</span> {{getunitStatus(unit.isVacant)}}</p>\n\t\t\t\t\t<p><span>Furnished:</span> {{getunitStatus(unit.isFurnished)}}</p>\n\t\t\t\t\t<p><span>Pets Allowed:</span> {{getunitStatus(unit.isPetsAllowed)}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/staff-liner-icon.svg\" /></span>\n\t\t\t\t<span>Unit Staffs</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p>No Records Found</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\">\n\t\t\t\t<span class=\"icon\"><i-feather class=\"feather truck\" name=\"truck\"></i-feather></span>\n\t\t\t\t<span>Unit Vehicles</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p><span>Vehicle Number:</span> {{vehicle.vehicleNumber}}</p>\n\t\t\t\t\t<p><span>Vehicle Type:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p><span>Vehicle Driver Number:</span> {{vehicle.vehicleDriverNumber}}</p>\n\t\t\t\t\t<p><span>Vehicle Manufacturer:</span> {{vehicle.vehicleManufacturer}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseFive\" aria-expanded=\"true\" aria-controls=\"collapseFive\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/dog-liner-icon.svg\" /></span>\n\t\t\t\t<span>Unit Pets</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseFive\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p>No Records Found</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseSix\" aria-expanded=\"true\" aria-controls=\"collapseSix\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/manager-liner-icon.svg\" /></span>\n\t\t\t\t<span>Property Manager</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseSix\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p><span>Available for rent:</span> {{getunitStatus(unit.isAvailableForRent)}}</p>\n\t\t\t\t\t<p><span>Name:</span> {{unit.propertyManagerName}}</p>\n\t\t\t\t\t<p><span>Rent Amount:</span> {{unit.rentAmount}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ul>\n\t</div>\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"approved-user-wrapper\">\n\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\t\n\t<div class=\"card ov mb-20 users-list float-left\" [ngClass]=\"isTabSelected()\" *ngIf=\"isUserDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Approved Users</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Total {{totalUnits}} Units and {{totalItems}} Users</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block mr-0\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body ov p-0 users\">\n\n\t\t\t<ng-container>\n\t\t\t\t\n\t\t\t\t<ng-container *ngFor=\"let item of approvedUsersData | slice:ItemStartIndex:ItemEndIndex; let i = index\">\n\t\t\t\t\t<li class=\"list-group-item\" (click)=\"showApprovedUserDetails(item.id)\" [ngClass]=\"isActive(item.id)\">\n\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t<span class=\"mr-2\">{{getBlockNo(item.apartmentBlockUnit, i)}}</span>\n\t\t\t\t\t\t\t<span>{{getBlockUnitNo(item.apartmentBlockUnit, i)}}</span>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t<div class=\"list\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let user of item.userRole; let j = index\">\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">{{user.roleName}}: </span>\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2 text-capitalize\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t<span><i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t\t<div class=\"pagination-wrapper\">\n\t\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</div>\n\n\t<app-approved-user-details [selectedTab]=\"selectedTab\" *ngIf=\"!isMobileView()\" (outputParams)=\"showUserInfo($event)\"></app-approved-user-details>\n\n\t<!-- user Profile -->\n\t<div class=\"user-info-card clear\" *ngIf=\"isProfile\">\n\t\t<app-my-profile type=\"admin\" [isProfile]=\"isProfile\" [userId]=\"viewUserId\" (outputParams)=\"getParams($event)\"></app-my-profile>\n\t</div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"deactivated-wrapper\">\n\t\t\n    <app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isUserDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>De Activated Resident Accounts <span class=\"badge lime-green\">{{totalUserItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Activate documents</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"deActivatedData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" class=\"select\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"selectAllDeactivatedUser\" \n\t\t\t\t\t\t\t    name=\"selectAllDeactivatedUser\" \n\t\t\t\t\t\t\t    [(ngModel)]=\"selectAllDeactivatedUser\"\n                            \t(ngModelChange)=\"getAllDeactivatedUser()\" >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"selectAllDeactivatedUser\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('name')\">Name <span [ngClass]=\"getFieldOrderBy('name')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('phone')\">Phone <span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('email')\">Email <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No <span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('unitNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let unit of deActivatedListData | simpleSearch: deActivatedData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\" [ngClass]=\"unit.checked ? 'selected' : ''\">\n\t\t\t\t      <td class=\"select\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"{{unit.id}}\" \n\t                            name=\"{{unit.id}}\"\n\t                            [(ngModel)]=\"unit.checked\"\n\t                            (ngModelChange)=\"getSelectedDeActivatedUser(unit)\"\n\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{unit.id}}\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t      \t{{unit.name}}</a>\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Status/Notes</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{getNotes(unit.apartmentBlockUnit)}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Owner/Tenant</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{getUserRole(unit.userRole, i)}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Status/Notes</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{getNotes(unit.apartmentBlockUnit)}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Verification Status</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{unit.status}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t  \t  </td>\n\t\t\t\t      <td class=\"grey\">{{unit.phone}}</td>\n\t\t\t\t      <td class=\"grey\">{{unit.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockNo(unit.apartmentBlockUnit, i)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockUnitNo(unit.apartmentBlockUnit, i)}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"showUserInfo(i)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/unit&users/edit-user/{{unit.id}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t\t<div class=\"button-wrapper border-top\">\n\t\t\t\t<a class=\"btn lime-green sf\"\n\t\t\t\t\t(click)=\"activateUser()\"\n\t\t\t\t\t[ngClass]=\"!isUserSelected ? 'disabled' : ''\">\n\t\t\t\t\t<span>Activate Selected User</span>\n    \t\t\t</a>\n\t\t\t\t<a class=\"btn lime-green sf\"\n\t\t\t\t\t(click)=\"activateUser()\"\n\t\t\t\t\t[ngClass]=\"!isBulkActivate ? 'disabled' : ''\">\n\t\t\t\t\t<span>Bulk Activate</span>\n    \t\t\t</a>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalUserItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemUserStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemUserEndIndex\"\n\t\t\t\t[itemLimit] = \"itemUserLimit\"\n\t\t\t\t(outputParams) = \"getUserIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n\n\t<ng-template #viewDeactivatedUserRef let-user>\n    \t<div class=\"user-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>User Info</h5>\n\t\t\t</div>\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <div class=\"icon mr-4\"><img src=\"assets/images/user-icon.svg\" width=\"36\" /></div>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t    <h5 class=\"mt-0\">{{user.firstName}} {{user.lastName}}</h5>\n\t\t\t\t\t    <p class=\"grey\">{{user.roleName}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">User ID</h6>\n\t\t\t\t\t\t\t<p>{{user.userId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Email</h6>\n\t\t\t\t\t\t\t<p>{{user.emailId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Block No</h6>\n\t\t\t\t\t\t\t<p>{{user.blockNo}} {{user.unitNo}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Phone No</h6>\n\t\t\t\t\t\t\t<p>{{user.phoneNumber}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Blood Group</h6>\n\t\t\t\t\t\t\t<p>{{user.bloodGroup}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Address</h6>\n\t\t\t\t\t\t\t<p>{{user.address1}} {{user.address2}} {{user.zipCode}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\t</ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/signuprequest/signuprequest.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/signuprequest/signuprequest.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsSignuprequestSignuprequestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"unapproved-wrapper\">\n    <div class=\"card ov card-table\" *ngIf=\"isUserDataLoaded\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Self Sign Up Users <span class=\"badge blue\">{{totalUserItems}}</span></h5>\n                <p class=\"d-none d-md-inline-block\">User ID creation requests from Condo Website</p>\n            </div>\n            <ul class=\"float-right\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\" >\n                </li>\n                <li class=\"list-inline-item\">\n                    <a class=\"btn trans-white mt_5\">\n                        <i-feather class=\"icon print\" name=\"printer\"></i-feather>\n                        <span>Print</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"card-body ov p-0\">\n            <table class=\"table table-resizable table-checker\" cellpadding=\"0\" cellspacing=\"0\" [ngClass]=\"isMobileView()\">\n                <thead>\n                    <tr>\n                        <!-- <th scope=\"col\" class=\"select\">\n                            <div class=\"form-group\">\n                                <div class=\"form-check float-left\">\n                                  <input type=\"checkbox\" class=\"form-check-input\" \n                                  id=\"selectAllUnapprovedUser\" \n                                  name=\"selectAllUnapprovedUser\" \n                                  [(ngModel)]=\"selectAllUnapprovedUser\"\n                                  (ngModelChange)=\"getAllUnapprovedUser()\" >\n                                  <label class=\"form-check-label\" for=\"selectAllUnapprovedUser\"></label>\n                              </div>\n                            </div>\n                        </th> -->\n                        <th scope=\"col\">\n                            RequestID \n                            <span (click)=\"sortUnitData('signupUserRequestId')\" [ngClass]=\"getFieldOrderBy('signupUserRequestId')\"></span>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"RequstID\" [(ngModel)]=\"columnField['signupUserRequestId']\" (ngModelChange)=\"selectColInput('signupUserRequestId')\" >\n                        </th>\n                      <th scope=\"col\">\n                          Name \n                          <span (click)=\"sortUnitData('firstName')\" [ngClass]=\"getFieldOrderBy('firstName')\"></span>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['firstName']\" (ngModelChange)=\"selectColInput('firstName')\" >\n                      </th>\n                      <th scope=\"col\">\n                          Phone <span (click)=\"sortUnitData('phoneNumber')\" [ngClass]=\"getFieldOrderBy('phoneNumber')\"></span>\n                           <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"columnField['phoneNumber']\" (ngModelChange)=\"selectColInput('phoneNumber')\" >\n                      </th>\n                      <th scope=\"col\">\n                          Email <span  (click)=\"sortUnitData('emailId')\" [ngClass]=\"getFieldOrderBy('emailId')\"></span>\n                           <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['emailId']\" (ngModelChange)=\"selectColInput('emailId')\" >\n                      </th>\n                      <th scope=\"col\">\n                          Block No <span  (click)=\"sortUnitData('apartmentId')\" [ngClass]=\"getFieldOrderBy('apartmentId')\"></span>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Block No\" [(ngModel)]=\"columnField['apartmentId']\" (ngModelChange)=\"selectColInput('apartmentId')\" >\n                      </th>\n                      <th scope=\"col\">Unit No <span  (click)=\"sortUnitData('apartmentId')\" [ngClass]=\"getFieldOrderBy('apartmentId')\"></span>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Unit No\" [(ngModel)]=\"columnField['apartmentId']\" (ngModelChange)=\"selectColInput('apartmentId')\">\n                      </th>\n                      <th scope=\"col\">Requested On \n                        <span (click)=\"sortUnitData('insertedOn')\" [ngClass]=\"getFieldOrderBy('insertedOn')\"></span>\n                        <app-simple-date-box \n                          [dateModel]=\"insertedOn\"\n                          (inputChange) = \"onDateChange($event, 'insertedOn')\"\n                          ></app-simple-date-box>\n                    </th>\n                      <th scope=\"col\" class=\"simple-actions\">\n                      Actions\n                      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                 <tr *ngFor=\"let unit of unitListData  columnField:selectedInput | simpleSearch: unitData ; let i = index\" \n                 [ngClass]=\"[ unit.checked ? 'selected' : '', unit.isActive  ? '' : 'notactive' ]\" >\n                 <!-- <td class=\"select w-50\">\n                        <div class=\"form-group\">\n                            <div class=\"form-check float-left\">\n                              <input type=\"checkbox\" class=\"form-check-input\" \n                              id=\"{{unit.signupUserRequestId}}\" \n                              name=\"{{unit.signupUserRequestId}}\"\n                              [(ngModel)]=\"unit.checked\"\n                              (ngModelChange)=\"getSelectedUnapprovedUser(unit)\"\n                              >\n                              <label class=\"form-check-label\" for=\"{{unit.signupUserRequestId}}\"></label>\n                          </div>\n                        </div>\n                    </td> -->\n                    <td class=\"grey\">{{unit.signupUserRequestId}}</td>   \n                      <td class=\"name\">\n                          <a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n                          {{unit.firstName}}</a>\n                          <ng-template #popContent>\n                            <div class=\"pop-desp\">\n                                <ul>\n                                    <li>\n                                        <h6>Status/Notes</h6>\n                                        <p>{{getNotes(unit)}}</p>\n                                    </li>\n                                    <li>\n                                        <h6>Owner/Tenant</h6>\n                                        <p>{{getUserType(unit.notes)}}</p>\n                                    </li>\n                                </ul>\n                            </div>\n                        </ng-template>\n                        </td>\n                      <td class=\"grey\">{{unit.phoneNumber}}</td>\n                      <td class=\"grey\">{{unit.emailId}}</td>\n                      <td class=\"grey\">{{getBlockName(unit.notes)}}</td>\n                      <td class=\"grey\">{{getUnitName(unit.notes)}}</td>\n                      <td class=\"grey\">{{getBookedDate(i, unit.insertedOn)}}</td>\n                      <td class=\"simple-actions\">\n                        <a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"EditUserInfo(unit)\"><i-feather class=\"icon plus\" name=\"plus\"></i-feather></a>\n                          <a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"viewSignup(unit)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n                         \n                          <a href=\"javascript:void(0)\" (click)=\"showConfirmModal(unit)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                    </td>\n                    </tr> \n                </tbody>\n            </table>\n            <!-- <div class=\"button-wrapper\">\n                <a class=\"btn lime-green sf\"\n                    (click)=\"approveUsers()\"\n                    [ngClass]=\"!isUserSelected ? 'disabled' : ''\">\n                    <span>Approve Selected Users</span>\n                </a>\n                <a class=\"btn trans-white sf \"\n                    routerLink=\"addunit\" \n                    routerLinkActive=\"active\"\n                    [routerLinkActiveOptions] = \"{exact:true}\"\n                    [ngClass]=\"!isUserSelected ? 'disabled' : ''\">\n                    <span>Re-send verification link</span>\n                </a>\n                <p>Once approved the user will be informed automatically</p>\n            </div> -->\n            <app-pagination \n                [totalItems]=\"totalUserItems\"  \n                [ItemStartIndex]=\"ItemUserStartIndex\"\n                [ItemEndIndex] = \"ItemUserEndIndex\"\n                [itemLimit] = \"itemUserLimit\"\n                (outputParams) = \"getUserIndexParams($event)\">\t\n            </app-pagination>\n    \n        </div>\n    </div>\n</div>\n";
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsUserReportsUserReportDataUserReportDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"user-report-data-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded && (isListOfResidents() || isListOfApprovedUsers())\">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6><i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"/ams/unit&users/reports\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-20 filter-card\">\n\t\t\t\t\t\n\t\t\t<form #incomeFilterForm = \"ngForm\" name=\"incomeFilterForm\" (ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\"  novalidate>\n\t\t\t\t\n\t\t\t\t<div class=\"card-header no-border\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t                   <label>Select Block No</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockId\" \n\t\t\t\t\t\t\t        id=\"blockId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"blockId\" (ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t        <option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card table-card\">\n\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t    \t\t\t<p>Data from {{blockNo}}</p>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline float-right\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitUserName')\">User Name<span [ngClass]=\"getFieldOrderBy('unitUserName')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block Details<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('emailID')\">Email ID<span [ngClass]=\"getFieldOrderBy('emailID')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('userTypeName')\">User Type<span [ngClass]=\"getFieldOrderBy('userTypeName')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span [ngClass]=\"getFieldOrderBy('mobile')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t      <td class=\"name\">{{user.unitUserName}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.blockNo}} {{user.unitNo}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.emailID}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.userTypeName}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.mobile}}</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<!-- De Activated Users -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfDeactivatedUsers()\">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6><i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"/ams/unit&users/reports\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card mb-20 filter-card\">\n\t\t\t\t\t\n\t\t\t<form #incomeFilterForm = \"ngForm\" name=\"incomeFilterForm\" (ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\"  novalidate>\n\t\t\t\t\n\t\t\t\t<div class=\"card-header no-border\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t                   <label>Select Block No</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockId\" \n\t\t\t\t\t\t\t        id=\"blockId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"blockId\" (ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t        <option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card table-card\">\n\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t    \t\t\t<p>Data from {{blockNo}}</p>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline float-right\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitUserName')\">User Name<span [ngClass]=\"getFieldOrderBy('unitUserName')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block Details<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('emailID')\">Email ID<span [ngClass]=\"getFieldOrderBy('emailID')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('userTypeName')\">User Type<span [ngClass]=\"getFieldOrderBy('userTypeName')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span [ngClass]=\"getFieldOrderBy('mobile')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex  ; let i = index\">\n\t\t\t\t\t      <td class=\"name\">{{user.unitUserName}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.blockNo}} {{user.unitNo}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.emailID}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.userTypeName}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.mobile}}</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\n\n\t<!-- vehicle info -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfResidentsVehicleInfo()\">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6><i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"/ams/unit&users/reports\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card mb-20 filter-card\">\n\t\t\t\t\t\n\t\t\t<form #incomeFilterForm = \"ngForm\" name=\"incomeFilterForm\" (ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\"  novalidate>\n\t\t\t\t\n\t\t\t\t<div class=\"card-header no-border\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t                   <label>Select Block No</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockId\" \n\t\t\t\t\t\t\t        id=\"blockId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"blockId\" (ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t        <option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card table-card\">\n\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t    \t\t\t<p>Data from {{blockNo}}</p>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline float-right\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitUserName')\">User Name<span [ngClass]=\"getFieldOrderBy('unitUserName')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block Details<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('vehicleNumber')\">Vehicle Number<span [ngClass]=\"getFieldOrderBy('vehicleNumber')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('vehicleModel')\">Vehicle Model<span [ngClass]=\"getFieldOrderBy('vehicleModel')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('emailID')\">Email ID<span [ngClass]=\"getFieldOrderBy('emailID')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span [ngClass]=\"getFieldOrderBy('mobile')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t      <td class=\"name\">{{user.unitUserName}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.blockNo}} {{user.unitNo}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.vehicleNumber}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.vehicleModel}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.emailID}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.mobile}}</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<!-- Rental info -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfExpiringRental()\">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6><i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"/ams/unit&users/reports\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card mb-20 filter-card\">\n\t\t\t\t\t\n\t\t\t<form #incomeFilterForm = \"ngForm\" name=\"incomeFilterForm\" (ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\"  novalidate>\n\t\t\t\t\n\t\t\t\t<div class=\"card-header no-border\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t                   <label>Select Block No</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockId\" \n\t\t\t\t\t\t\t        id=\"blockId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"blockId\" (ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t        <option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card table-card\">\n\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t    \t\t\t<p>Data from {{blockNo}}</p>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline float-right\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitUserName')\">User Name<span [ngClass]=\"getFieldOrderBy('unitUserName')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block Details<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('agreementStartDate')\">Start Date<span [ngClass]=\"getFieldOrderBy('agreementStartDate')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('agreementEndDate')\">End Date<span [ngClass]=\"getFieldOrderBy('agreementEndDate')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('rentalorLease')\">Rental Lease<span [ngClass]=\"getFieldOrderBy('rentalorLease')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('emailID')\">Email ID<span [ngClass]=\"getFieldOrderBy('emailID')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let user of userReportDataList | slice:ItemStartIndex:ItemEndIndex | simpleSearch: userReportData | orderBy : unitFieldType: unitOrder ; let i = index\">\n\t\t\t\t\t      <td class=\"name\">{{user.unitUserName}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.blockNo}} {{user.unitNo}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{getDate(user.agreementStartDate)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{getDate(user.agreementEndDate)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.rentalorLease}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.emailID}}</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<!-- Pets info -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfUsersWithPets()\">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6><i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"/ams/unit&users/reports\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card mb-20 filter-card\">\n\t\t\t\t\t\n\t\t\t<form #incomeFilterForm = \"ngForm\" name=\"incomeFilterForm\" (ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\"  novalidate>\n\t\t\t\t\n\t\t\t\t<div class=\"card-header no-border\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t                   <label>Select Block No</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockId\" \n\t\t\t\t\t\t\t        id=\"blockId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"blockId\" (ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t        <option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card\">\n\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t    \t\t\t<p>Data from {{blockNo}}</p>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline float-right\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitUserName')\">User Name<span [ngClass]=\"getFieldOrderBy('unitUserName')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block Details<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('petName')\">Pet Name<span [ngClass]=\"getFieldOrderBy('petName')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lastVaccinationDate')\">Last Vaccination Date<span [ngClass]=\"getFieldOrderBy('lastVaccinationDate')\"></span></th>\n\t\t\t\t\t\t  <th scope=\"col\" (click)=\"sortUnitData('emailID')\">Email ID<span [ngClass]=\"getFieldOrderBy('emailID')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span [ngClass]=\"getFieldOrderBy('mobile')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t      <td class=\"name\">{{user.unitUserName}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.blockNo}} {{user.unitNo}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.petName}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{getDate(user.lastVaccinationDate)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.emailID}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{user.mobile}}</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-reports.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-reports.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsUnitUsersComponentsUserReportsUserReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-3\">Reports</h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink = \"{{report.lookupValueName}}/{{report.lookupValueID}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n\n\n\t<!-- <div class=\"card\">\n\t\t\n\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\t\t\t<ul class=\"list-group tabs clear\">\n\n\t\t\t\t<div class=\"tabs-content\" *ngFor=\"let report of unitReportData;let i = index; first as isFirst\">\n\t\t\t\t\t\n\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" attr.data-target=\"#reportData{{report.lookupValueId}}\" aria-expanded=\"true\" attr.aria-controls=\"reportData{{report.lookupValueId}}\"[ngClass]=\"isFirst ? '' : 'collapsed'\"><strong class=\"tc-blue\">{{report.lookupValueName}}</strong></li>\n\t\t\t\t\t<div id=\"reportData{{report.lookupValueId}}\" class=\"collapse\" attr.aria-labelledby=\"reportData{{report.lookupValueId}}\" data-parent=\"#accordion\" [ngClass]=\"isFirst ? 'show' : ''\">\n\t\t\t\t\t\t<div class=\"details p-0\">\n\t\t\t\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockno')\">Report Name</th>\n\t\t\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitno')\">Schedule Report </th>\n\t\t\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('intercom')\">Publish Report</th>\n\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t    <tr *ngFor=\"let item of report.data\">\n\t\t\t\t\t\t\t\t      <td class=\"name\">{{item.name}}</td>\n\t\t\t\t\t\t\t\t      <td class=\"grey\">{{item.status}}</td>\n\t\t\t\t\t\t\t\t      <td class=\"select\">\n\t\t\t\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t\t\t\t    id=\"{{item.name}}\" \n\t\t\t\t\t                            name=\"{{item.name}}\"\n\t\t\t\t\t                            [(ngModel)]=\"item.checked\"\n\t\t\t\t\t                            (ngModelChange)=\"getSelectedReports(item)\"\n\t\t\t\t\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{item.name}}\"></label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t      \t</div>\n\t\t\t\t\t\t\t\t      </td>\n\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t</table> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t</ul>\n\n\t\t</div>\n\n\t\t<div class=\"card-body p-0 border-top\">\n\t\t\t<div class=\"button-wrapper\">\n\t\t\t\t<a class=\"btn lime-green sf\"\n\t\t\t\t\t[ngClass]=\"!isReportSelected() ? 'disabled' : ''\">\n\t\t\t\t\t<span>Publish Selected reports to notice Board</span>\n    \t\t\t</a>\n    \t\t\t\n\t\t\t</div>\n\t\t</div>\n\n\t</div>-->\n\n</div>";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    AccessControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-access-control',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./access-control.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/access-control/access-control.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./access-control.component.scss */
      "./src/app/ams/unit-users/components/access-control/access-control.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AccessControlComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_email_send_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../api/services/email-send.service */
    "./src/app/api/services/email-send.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */
    "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");

    var AddResidentComponent =
    /*#__PURE__*/
    function () {
      function AddResidentComponent(dialog, router, route, userService, emailSendService, apartmentService, lookupService, sharedService, cookieService, cd) {
        _classCallCheck(this, AddResidentComponent);

        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.emailSendService = emailSendService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.cd = cd;
        this.userType = null;
        this.genderType = null;
        this.apartmentBlockId = "";
        this.apartmentBlockUnitId = "";
        this.userRoleId = "";
        this.isEditUser = false;
        this.isBlockSelected = false;
        this.isUserSubmitted = false;
        this.isExistingUSer = false;
        this.isError = false;
        this.errorMessage = "";
        this.isValidEmail = false;
        this.emailToRegister = "";
        this.isAdminRegister = false;
        this.isAutoGenPassword = false;
        this.result = '';
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
              "middleName": "",
              "lastName": this.user.lastName,
              "emailId": this.user.emailId,
              "password": this.user.password,
              "salt": "",
              "address1": "",
              "address2": "",
              "city": "",
              "state": "",
              "country": "",
              "zipCode": "",
              "genderId": parseInt(this.genderType),
              "dob": "2019-11-10T09:58:08.934Z",
              "joinedOn": "2019-11-10T09:58:08.934Z",
              "bloodGroup": "",
              "phoneNumber": this.user.phoneNumber.toString(),
              "emergencyContactNumber": "",
              "emergencyContactPerson": "",
              "emergencyContactNumberSecondary": "",
              "emergencyContactPersonSecondary": "",
              "accessCardNumber": "",
              "notes": "",
              "profilePictureId": null,
              "isLiving": true,
              "isActive": true,
              "isApproved": this.isAdminRegister,
              "resetPassword": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "updatedBy": 0,
              "isDocSubmitted": false,
              "readyForApproval": false
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
                    "isPrimaryContact": _this2.user.isPrimaryContact,
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
                      var emailDetails = {
                        emailAddress: _this2.user.emailId,
                        Name: _this2.user.firstName,
                        Subject: 'User Created',
                        TextMessage: 'User Created'
                      };

                      _this2.emailSendService.SendEmail(emailDetails).subscribe(function (res) {
                        _this2.sharedService.setAlertMessage("Account has been created. User notified via Email ");

                        _this2.router.navigate(['ams/unit&users/unapproved']);
                      }, function (error) {
                        console.log(error);
                      });
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
              "middleName": this.user.middleName,
              "lastName": this.user.lastName,
              "emailId": this.user.emailId,
              "password": this.user.password,
              "salt": this.user.salt,
              "address1": this.user.address1,
              "address2": this.user.address2,
              "city": this.user.city,
              "state": this.user.state,
              "country": this.user.country,
              "zipCode": this.user.zipCode,
              "genderId": parseInt(this.genderType),
              "dob": this.user.dob,
              "joinedOn": this.user.joinedOn,
              "bloodGroup": this.user.bloodGroup,
              "phoneNumber": this.user.phoneNumber.toString(),
              "emergencyContactNumber": this.user.emergencyContactNumber,
              "emergencyContactPerson": this.user.emergencyContactPerson,
              "emergencyContactNumberSecondary": this.user.emergencyContactNumberSecondary,
              "emergencyContactPersonSecondary": this.user.emergencyContactPersonSecondary,
              "accessCardNumber": this.user.accessCardNumber,
              "notes": this.user.notes,
              "profilePictureId": null,
              "isLiving": true,
              "isActive": true,
              "isApproved": this.isAdminRegister,
              "resetPassword": this.user.resetPassword,
              "insertedBy": this.user.insertedBy,
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "isDocSubmitted": this.user.isDocSubmitted,
              "readyForApproval": this.user.readyForApproval
            }; //edit user 

            this.userService.UpdateUser(userDetails).subscribe(function (res) {
              if (res.message) {
                var userId = res.message;
                var userRole = {
                  "userId": userId,
                  "roleId": parseInt(_this2.userType),
                  "isActive": _this2.user.isActive,
                  "insertedBy": parseInt(_this2.cookieService.get('userId')),
                  "insertedOn": _this2.user.insertedOn,
                  "updatedBy": _this2.user.updatedBy,
                  "updatedOn": _this2.user.updatedOn
                };

                _this2.userService.addUserRole(userRole).subscribe(function (res) {
                  var apartmentBlockUnitUser = {
                    "apartmentBlockUnitId": parseInt(_this2.apartmentBlockUnitId),
                    "userId": userId,
                    "isPrimaryContact": _this2.user.isPrimaryContact,
                    "userTypeId": parseInt(_this2.userType),
                    "isActive": _this2.user.isActive,
                    "insertedBy": parseInt(_this2.cookieService.get('userId')),
                    "insertedOn": _this2.user.insertedOn,
                    "updatedBy": _this2.user.updatedBy,
                    "updatedOn": _this2.user.updatedOn
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

          this.user = {};
          this.user.isEmailNotify = true; //get apartment blocks

          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this3.blocksData = res;
          });
          this.userService.getAllRoles(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            console.log(res);
            _this3.userRolesData = res;
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
      }, {
        key: "checkEmail",
        value: function checkEmail() {
          var _this4 = this;

          this.isValidEmail = false;
          var rex = new RegExp(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/);
          var isValid = rex.test(this.emailToRegister);

          if (isValid) {
            // Validate Email
            this.userService.checkUserEmailExists(this.emailToRegister).subscribe(function (data) {
              console.log(data);

              if (data.ErrorMessage == 'EmailId Not Exists.') {
                _this4.isValidEmail = true;
                _this4.isExistingUSer = false;
                _this4.user = {};
                _this4.user.isEmailNotify = true;
              } else {
                var message = "The user Id already exists Do you want to add this user to this condo?";
                var dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogModel"]("Confirm Action", message);

                var dialogRef = _this4.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["CommonConfirmModalComponent"], {
                  panelClass: 'material',
                  disableClose: true,
                  data: dialogData
                });

                dialogRef.afterClosed().subscribe(function (dialogResult) {
                  _this4.result = dialogResult;

                  if (_this4.result) {
                    _this4.isValidEmail = _this4.isExistingUSer = true;
                    _this4.user = data;
                    _this4.user.isEmailNotify = true;
                    _this4.genderType = _this4.user.genderId;
                  } else {
                    _this4.isValidEmail = _this4.isExistingUSer = false;
                  }
                });
              }
            }, function (error) {
              _this4.isValidEmail = false;
              _this4.isError = true;
              _this4.errorMessage = 'Kindly enter proper email...!';
            });
          } else {
            this.sharedService.setAlertMessage("Kindly enter proper email...!");
            this.isError = true;
            this.errorMessage = 'Kindly enter proper email...!';
            this.cd.markForCheck();
          }
        }
      }, {
        key: "changeUserType",
        value: function changeUserType(evt) {
          this.isAdminRegister = false;

          if (evt.target.value == 1) {
            console.log(evt.target.value);
            this.isAdminRegister = true;
          } else {
            this.isAdminRegister = false;
          }
        }
      }, {
        key: "changeAutoGenPass",
        value: function changeAutoGenPass(evt) {
          if (this.isAutoGenPassword) {
            this.user.password = "";
          }
        }
      }]);

      return AddResidentComponent;
    }();

    AddResidentComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_email_send_service__WEBPACK_IMPORTED_MODULE_4__["EmailSendService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_7__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddResidentComponent.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddResidentComponent.prototype, "residentArray", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddResidentComponent.prototype, "outputParams", void 0);
    AddResidentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-resident',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-resident.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-resident.component.scss */
      "./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_email_send_service__WEBPACK_IMPORTED_MODULE_4__["EmailSendService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_7__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], AddResidentComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addUnitForm', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddUsersComponent.prototype, "addUnitForm", void 0);
    AddUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-users',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-users.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-users.component.scss */
      "./src/app/ams/unit-users/components/add-users/add-users.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], AddUsersComponent);
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


    __webpack_exports__["default"] = ".card.user-details {\n  width: 0 !important;\n  height: 0;\n  transition: all 0.15s ease;\n  transform: translate(120%, 0);\n}\n.card.user-details.show {\n  width: 40% !important;\n  height: auto;\n  transform: translate(0);\n  transition: all 0.15s ease;\n  margin: 0 0 0 2%;\n}\n.card.user-details.full {\n  width: 100% !important;\n  margin: 0;\n}\n.card.user-details .main {\n  padding: 20px 15px;\n  overflow: auto;\n}\n.card.user-details .main h5 {\n  padding: 0 0 10px 0;\n  color: #3f51b5;\n}\n.card.user-details .main h5 .icon {\n  margin: 0 8px 0 0;\n}\n.card.user-details .main h5 .icon svg {\n  width: 24px;\n  height: 24px;\n  fill: #3f51b5;\n  margin: -2px 0 0 0;\n  display: inline-block;\n}\n.card.user-details .main p {\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.card.user-details .main li {\n  border: none;\n  padding: 0 0 6px 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #373946;\n}\n.card.user-details .tabs .icon .feather {\n  width: 14px;\n  display: inline-block;\n  margin: -3px 6px 0 0;\n}\n.card.user-details .tabs .icon svg {\n  width: 14px;\n  height: 14px;\n  fill: #373946;\n  display: inline-block;\n  margin: -3px 6px 0 0;\n}\n.card.user-details .tabs span:not(.icon) {\n  display: inline-block;\n  margin: 1px 0 0 4px;\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkLXVzZXItZGV0YWlscy9hcHByb3ZlZC11c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL21peGlucy5zY3NzIiwic3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkLXVzZXItZGV0YWlscy9hcHByb3ZlZC11c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ0MsbUJBQUE7RUFDQSxTQUFBO0VDcUNELDBCRHBDQztFQUNBLDZCQUFBO0FFRkY7QUZHRTtFQUNDLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VDK0JGLDBCRDlCRTtFQUNBLGdCQUFBO0FFQ0g7QUZDRTtFQUNDLHNCRzZJRztFSDVJSCxTQUFBO0FFQ0g7QUZDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBRUNKO0FGQ0k7RUFDQSxtQkFBQTtFQUNBLGNHZ0NLO0FEL0JUO0FGQUk7RUFDQyxpQkFBQTtBRUVMO0FGREs7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFHMEJHO0VIekJILGtCQUFBO0VBQ0cscUJBQUE7QUVHVDtBRkNJO0VJdUNGLGlCQUFBO0VKckNRLGNHOUJHO0FEK0JiO0FGQ0k7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUlOSCxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBbUNBLGlCQUFBO0VKOUJFLGNHNENPO0FEdkNYO0FGQUk7RUFDQyxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBRUVMO0FGQUk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFHK0JNO0VIOUJOLHFCQUFBO0VBQ0Esb0JBQUE7QUVFTDtBRkVJO0VBQ0kscUJBQUE7RUFDSCxtQkFBQTtFSVNILGlCQUFBO0FGUkYiLCJmaWxlIjoic3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkLXVzZXItZGV0YWlscy9hcHByb3ZlZC11c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmNhcmQge1xuXHQmLnVzZXItZGV0YWlscyB7XG5cdFx0d2lkdGg6IDAgIWltcG9ydGFudDtcblx0XHRoZWlnaHQ6IDA7XG5cdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSwgMCk7XG5cdFx0Ji5zaG93IHtcblx0XHRcdHdpZHRoOiA0MCUgIWltcG9ydGFudDtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuXHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0XHRtYXJnaW46IDAgMCAwIDIlO1xuXHRcdH1cblx0XHQmLmZ1bGwge1xuXHRcdFx0d2lkdGg6ICRmdWxsO1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0XHQubWFpbiB7XG5cdFx0XHQgcGFkZGluZzogMjBweCAxNXB4O1xuXHRcdFx0IG92ZXJmbG93OiBhdXRvO1xuXG5cdFx0XHQgaDUge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDAgMTBweCAwO1xuXHRcdFx0XHRjb2xvcjogJG0tYmx1ZTtcblx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdG1hcmdpbjogMCA4cHggMCAwO1xuXHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdFx0XHRcdGZpbGw6ICRtLWJsdWU7XG5cdFx0XHRcdFx0XHRtYXJnaW46IC0ycHggMCAwIDA7XG4gICAgXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCB9XG5cdFx0XHQgcCB7XG5cdFx0XHQgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICAgICAgXHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdCB9XG5cdFx0XHQgbGkge1xuXHRcdFx0IFx0Ym9yZGVyOm5vbmU7XG5cdFx0XHQgXHRwYWRkaW5nOiAwIDAgNnB4IDA7XG5cdFx0XHRcdEBpbmNsdWRlIGhlYWQtcmVndWxhcjtcblx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdGNvbG9yOiAkZ3JleS04MDA7XG5cdFx0XHQgfVxuXHRcdH1cblx0XHQudGFicyB7XG5cdFx0XHQuaWNvbiB7XG5cdFx0XHRcdC5mZWF0aGVyIHtcblx0XHRcdFx0XHR3aWR0aDogMTRweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0bWFyZ2luOiAtM3B4IDZweCAwIDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHR3aWR0aDogMTRweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE0cHg7XG5cdFx0XHRcdFx0ZmlsbDogJGdyZXktODAwO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRtYXJnaW46IC0zcHggNnB4IDAgMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdCY6bm90KC5pY29uKXtcblx0XHRcdFx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRtYXJnaW46IDFweCAwIDAgNHB4O1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiLmNhcmQudXNlci1kZXRhaWxzIHtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSwgMCk7XG59XG4uY2FyZC51c2VyLWRldGFpbHMuc2hvdyB7XG4gIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIG1hcmdpbjogMCAwIDAgMiU7XG59XG4uY2FyZC51c2VyLWRldGFpbHMuZnVsbCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbn1cbi5jYXJkLnVzZXItZGV0YWlscyAubWFpbiB7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY2FyZC51c2VyLWRldGFpbHMgLm1haW4gaDUge1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICBjb2xvcjogIzNmNTFiNTtcbn1cbi5jYXJkLnVzZXItZGV0YWlscyAubWFpbiBoNSAuaWNvbiB7XG4gIG1hcmdpbjogMCA4cHggMCAwO1xufVxuLmNhcmQudXNlci1kZXRhaWxzIC5tYWluIGg1IC5pY29uIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZpbGw6ICMzZjUxYjU7XG4gIG1hcmdpbjogLTJweCAwIDAgMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNhcmQudXNlci1kZXRhaWxzIC5tYWluIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG59XG4uY2FyZC51c2VyLWRldGFpbHMgLm1haW4gbGkge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMCA2cHggMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4uY2FyZC51c2VyLWRldGFpbHMgLnRhYnMgLmljb24gLmZlYXRoZXIge1xuICB3aWR0aDogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IC0zcHggNnB4IDAgMDtcbn1cbi5jYXJkLnVzZXItZGV0YWlscyAudGFicyAuaWNvbiBzdmcge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBmaWxsOiAjMzczOTQ2O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogLTNweCA2cHggMCAwO1xufVxuLmNhcmQudXNlci1kZXRhaWxzIC50YWJzIHNwYW46bm90KC5pY29uKSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcHggMCAwIDRweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
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
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

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
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
        key: "showUserInfo",
        value: function showUserInfo() {
          this.outputParams.emit(true);
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails(userId) {
          var _this5 = this;

          this.userService.getAllApprovedUsers().subscribe(function (res) {
            var approvedUsersData = res.filter(function (item) {
              if (item.id == userId) return item;
            });
            _this5.user = approvedUsersData[0];

            _this5.apartmentService.getApartmentBlockUnitByUserId(userId).subscribe(function (res) {
              _this5.unit = res[0] || {};
              _this5.apartmentBlockUnitId = _this5.unit.apartmentBlockUnitId;

              _this5.vehicleService.getVehicleByVehicleId(_this5.apartmentBlockUnitId).subscribe(function (res) {
                _this5.vehicle = res[0] || {};
                _this5.isUserDataLoaded = true;
              });
            });
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

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
                updateUserId: parseInt(_this6.cookieService.get('userId'))
              };
              _this6.isUserDataLoaded = false;

              _this6.userService.deleteUserById(params).subscribe(function (res) {
                _this6.isUserDataLoaded = true;

                _this6.sharedService.setUnitListDeleteIndex(null);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this7 = this;

          //user details
          if (this.selectedTab != -1) {
            this.isUserDataLoaded = false;
            this.getUserDetails(this.selectedTab);
          }

          this.lookupService.getLookupValueByLookupTypeId(2).subscribe(function (res) {
            _this7.vehicleTypeData = res;
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
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ApprovedUserDetailsComponent.prototype, "selectedTab", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ApprovedUserDetailsComponent.prototype, "outputParams", void 0);
    ApprovedUserDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-approved-user-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./approved-user-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./approved-user-details.component.scss */
      "./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__["VehicleService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_8__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])], ApprovedUserDetailsComponent);
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


    __webpack_exports__["default"] = ".approved-user-wrapper .card.users-list {\n  width: 100%;\n  transition: all 0.15s ease;\n}\n@media (min-width: 991px) {\n  .approved-user-wrapper .card.users-list.show {\n    width: 58%;\n    transition: all 0.15s ease;\n  }\n}\n.approved-user-wrapper .card .card-header {\n  border-bottom: none !important;\n}\n.approved-user-wrapper .card .card-body.users > li {\n  border: none;\n  border-top: 1px solid #eaeaea;\n  padding: 14px 20px;\n  border-radius: 0 !important;\n  cursor: pointer;\n}\n.approved-user-wrapper .card .card-body.users > li h5 {\n  font-size: 1.6rem;\n  padding: 0 0 4px 0;\n  color: #3f51b5;\n}\n.approved-user-wrapper .card .card-body.users > li .list li {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  padding: 5px 0 0 0;\n  border: none;\n  background-color: transparent;\n  color: #8391a1;\n}\n.approved-user-wrapper .card .card-body.users > li .list li span:first-child {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  color: #373946;\n}\n.approved-user-wrapper .card .card-body.users > li .list li:hover {\n  background-color: transparent;\n}\n.approved-user-wrapper .card .card-body.users > li:hover {\n  background-color: #f9f9f9;\n  transition: all 0.15s ease;\n}\n.approved-user-wrapper .card .card-body.users > li:hover h5 {\n  color: #3f51b5;\n}\n.approved-user-wrapper .card .card-body.users > li.active {\n  background-color: #ffffff;\n}\n.approved-user-wrapper .card .card-body.users > li.active:before {\n  content: \"\";\n  width: 4px;\n  height: 100% !important;\n  background-color: #3f51b5;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkL2FwcHJvdmVkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvYW1zL3VuaXQtdXNlcnMvY29tcG9uZW50cy9hcHByb3ZlZC9hcHByb3ZlZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvZm9udHMuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDQyxXQUFBO0VDcUNGLDBCRHBDRTtBRUhIO0FGS0k7RUFERDtJQUVFLFVBQUE7SUNpQ0osMEJEaENJO0VFQUg7QUFDRjtBRkdFO0VBQ0MsOEJBQUE7QUVESDtBRktJO0VBQ0MsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUNqQkosMkJBQUE7RURtQkksZUFBQTtBRURMO0FGRUs7RUdtREgsaUJBQUE7RUhqRFEsa0JBQUE7RUFDQSxjSTZCRDtBRjdCVDtBRkdVO0VHNEJSLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFhQSxpQkFBQTtFSDFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkkrRUU7RUo5RUYsY0k1Qk87QUYrQmI7QUZGTTtFRzZCSiwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUhoQ0ssY0lrREk7QUZ6Q1g7QUZQTTtFQUNDLDZCSXdFQztBRi9EUjtBRkxRO0VBQ0MseUJJNERFO0VIbEVWLDBCRE9RO0FFU1Q7QUZSUztFQUNDLGNJTUQ7QUZJVDtBRlBRO0VBQ0MseUJJMEREO0FGakRSO0FGUk07RUFDQyxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCSWtHRDtFSmpHQyx5QklIRTtFSklGLGtCSTNERjtFSjRERSxNQUFBO0VBQ0EsT0FBQTtBRVVQIiwiZmlsZSI6InNyYy9hcHAvYW1zL3VuaXQtdXNlcnMvY29tcG9uZW50cy9hcHByb3ZlZC9hcHByb3ZlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4uYXBwcm92ZWQtdXNlci13cmFwcGVyIHtcblx0LmNhcmQge1xuXHRcdCYudXNlcnMtbGlzdHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0XHQmLnNob3cge1xuXHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcblx0XHRcdFx0XHR3aWR0aDogNTglO1xuXHRcdFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5jYXJkLWhlYWRlciB7XG5cdFx0XHRib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHRcdC5jYXJkLWJvZHkge1xuXHRcdFx0Ji51c2VycyB7XG5cdFx0XHRcdD4gbGkge1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgJGdyZXktNDUwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE0cHggMjBweDtcblx0XHRcdFx0XHRAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRoNSB7XG5cdFx0XHRcdCAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcblx0XHRcdFx0ICAgICAgcGFkZGluZzogMCAwIDRweCAwO1xuXHRcdFx0XHQgICAgICBjb2xvcjogJG0tYmx1ZTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIC5saXN0IHtcblx0XHRcdFx0ICAgICAgbGkge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgZGVzcC1yZWd1bGFyO1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHggMCAwIDA7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnM7XG5cdFx0XHRcdFx0XHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHRcdFx0XHRzcGFuOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgZGVzcC1tZWRpdW07XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAkZ3JleS04MDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHRyYW5zO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHQgICAgICB9XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICAmOmhvdmVyIHtcblx0XHRcdFx0ICAgIFx0YmFja2dyb3VuZC1jb2xvcjogJGdyZXktMTUwO1xuXHRcdFx0XHQgICAgXHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcblx0XHRcdFx0ICAgIFx0aDUge1xuXHRcdFx0XHQgICAgXHRcdGNvbG9yOiAkbS1ibHVlO1xuXHRcdFx0XHQgICAgXHR9XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICAmLmFjdGl2ZSB7XG5cdFx0XHRcdCAgICBcdGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDRweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAkZnVsbDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJG0tYmx1ZTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHRcdFx0XHRcdHRvcDowO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIi5hcHByb3ZlZC11c2VyLXdyYXBwZXIgLmNhcmQudXNlcnMtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xuICAuYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkLnVzZXJzLWxpc3Quc2hvdyB7XG4gICAgd2lkdGg6IDU4JTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIH1cbn1cbi5hcHByb3ZlZC11c2VyLXdyYXBwZXIgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSBoNSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkgLmxpc3QgbGkge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nOiA1cHggMCAwIDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjODM5MWExO1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkgLmxpc3QgbGkgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4uYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSAubGlzdCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbn1cbi5hcHByb3ZlZC11c2VyLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpOmhvdmVyIGg1IHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4uYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkuYWN0aXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7Il19 */";
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
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

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
        this.isProfile = false;
      }

      _createClass(ApprovedComponent, [{
        key: "showApprovedUserDetails",
        value: function showApprovedUserDetails(id) {
          if (!this.isMobileView()) {
            if (this.selectedTab != id) this.selectedTab = id;else this.selectedTab = -1;
          } else {
            this.router.navigate(['ams/approved-user-details/' + id]);
          }

          this.viewUserId = id;
        }
      }, {
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
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
        key: "getParams",
        value: function getParams(event) {
          this.isProfile = event;
        }
      }, {
        key: "showUserInfo",
        value: function showUserInfo(event) {
          var _this8 = this;

          this.isProfile = false;
          setTimeout(function () {
            _this8.isProfile = event;
          }, 10);
          setTimeout(function () {
            var elem = document.querySelector('.user-info-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 100);
          this.router.navigate(['ams/unit&users/approved/basic', this.viewUserId]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.userService.getAllApprovedUsers().subscribe(function (res) {
            _this9.approvedUsersData = res.filter(function (item) {
              return item.userRole.length != 0 && item.apartmentBlockUnit.length != 0;
            });
            _this9.totalItems = _this9.approvedUsersData.length;

            if (_this9.totalItems > _this9.itemLimit) {
              _this9.ItemEndIndex = _this9.itemLimit;
            } else {
              _this9.ItemEndIndex = _this9.totalItems;
            }

            _this9.isUserDataLoaded = true;
          }, function (error) {
            console.log(error);
          });
          this.apartmentService.getApartmentBlockUnitByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this9.totalUnits = res.length;
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

    ApprovedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-approved',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./approved.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved/approved.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./approved.component.scss */
      "./src/app/ams/unit-users/components/approved/approved.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], ApprovedComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    BroadcastComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-broadcast',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./broadcast.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/broadcast/broadcast.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./broadcast.component.scss */
      "./src/app/ams/unit-users/components/broadcast/broadcast.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BroadcastComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
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
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

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
        this.unitOrder = true;
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
            return this.unitOrder ? 'asc' : 'desc';
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
          var _this10 = this;

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

            _this10.dialog.open(_this10.viewDeactivatedUserRef, {
              panelClass: 'material',
              disableClose: true,
              data: userData
            });
          });
        }
      }, {
        key: "activateUser",
        value: function activateUser() {
          var _this11 = this;

          this.isUserDataLoaded = false;
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.deActivatedListData, function (item, index) {
            if (item.checked) {
              _this11.userService.getUserById(item.id).subscribe(function (res) {
                var user = res[0];
                user.isActive = true;

                _this11.userService.UpdateUser(user).subscribe(function (res) {
                  _this11.deActivatedListData.splice(index, 1);

                  _this11.totalUserItems = _this11.deActivatedListData.length;
                  _this11.isUserDataLoaded = true;
                });
              });
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.userService.getAllUnApprovedUsers().subscribe(function (res) {
            var deActivatedListData = res;
            console.log(res); //filter active true items

            _this12.deActivatedListData = deActivatedListData.filter(function (data) {
              return !data.active;
            });
            _this12.totalUserItems = _this12.deActivatedListData.length;

            if (_this12.totalUserItems > _this12.itemUserLimit) {
              _this12.ItemUserEndIndex = _this12.itemUserLimit;
            } else {
              _this12.ItemUserEndIndex = _this12.totalUserItems;
            }

            _this12.isUserDataLoaded = true;
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
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewDeactivatedUserRef", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], DeActivatedComponent.prototype, "viewDeactivatedUserRef", void 0);
    DeActivatedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-de-activated',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./de-activated.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/de-activated/de-activated.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./de-activated.component.scss */
      "./src/app/ams/unit-users/components/de-activated/de-activated.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], DeActivatedComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/signuprequest/signuprequest.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/signuprequest/signuprequest.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsSignuprequestSignuprequestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".unapproved-wrapper .customize-email {\n  margin: 0 0 25px 0;\n}\n.unapproved-wrapper .customize-email p {\n  font-size: 1.6rem;\n  padding: 0 0 15px 0 !important;\n  color: #585858;\n}\n.unapproved-wrapper .card-body p.info {\n  padding: 10px 0 0 0 !important;\n  font-size: 1.4rem;\n  color: #373946;\n}\n.unapproved-wrapper .user-info-card {\n  margin: 30px 0 0 0;\n}\ntable {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL3NpZ251cHJlcXVlc3Qvc2lnbnVwcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3VuaXQtdXNlcnMvY29tcG9uZW50cy9zaWdudXByZXF1ZXN0L3NpZ251cHJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ0Msa0JBQUE7QUNKRjtBREtFO0VFdUVBLGlCQUFBO0VGckVPLDhCQUFBO0VBQ0EsY0dvRkU7QUZ2Rlg7QURPRTtFQUNPLDhCQUFBO0VFK0RQLGlCQUFBO0VGN0RVLGNHMkVEO0FGaEZYO0FEUUM7RUFDQyxrQkFBQTtBQ05GO0FEVUE7RUFDQyxXQUFBO0FDUEQ7QURVRTtFQUNELGVBQUE7RUFDQSxXQUFBO0FDUEQiLCJmaWxlIjoic3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL3NpZ251cHJlcXVlc3Qvc2lnbnVwcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4udW5hcHByb3ZlZC13cmFwcGVyIHtcblx0LmN1c3RvbWl6ZS1lbWFpbCB7XG5cdFx0bWFyZ2luOiAwIDAgMjVweCAwO1xuXHRcdHAge1xuICAgICAgICBcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcbiAgICAgICAgXHRwYWRkaW5nOiAwIDAgMTVweCAwICFpbXBvcnRhbnQ7XG4gICAgICAgIFx0Y29sb3I6ICRncmV5LTcwMDtcblx0XHR9XG5cdH1cblx0LmNhcmQtYm9keSB7XG5cdFx0cC5pbmZvIHtcbiAgICAgICAgXHRwYWRkaW5nOiAxMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleS04MDA7XG4gICAgICBcdH1cblx0fVxuXHQudXNlci1pbmZvLWNhcmQge1xuXHRcdG1hcmdpbjogMzBweCAwIDAgMDtcblx0XHRcblx0fVxufVxudGFibGUge1xuXHR3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR3aWR0aDogMTAwJTtcbiAgfSIsIi51bmFwcHJvdmVkLXdyYXBwZXIgLmN1c3RvbWl6ZS1lbWFpbCB7XG4gIG1hcmdpbjogMCAwIDI1cHggMDtcbn1cbi51bmFwcHJvdmVkLXdyYXBwZXIgLmN1c3RvbWl6ZS1lbWFpbCBwIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1ODU4NTg7XG59XG4udW5hcHByb3ZlZC13cmFwcGVyIC5jYXJkLWJvZHkgcC5pbmZvIHtcbiAgcGFkZGluZzogMTBweCAwIDAgMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4udW5hcHByb3ZlZC13cmFwcGVyIC51c2VyLWluZm8tY2FyZCB7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/signuprequest/signuprequest.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/signuprequest/signuprequest.component.ts ***!
    \************************************************************************************/

  /*! exports provided: SignuprequestComponent */

  /***/
  function srcAppAmsUnitUsersComponentsSignuprequestSignuprequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignuprequestComponent", function () {
      return SignuprequestComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../.././api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

    var SignuprequestComponent =
    /*#__PURE__*/
    function () {
      function SignuprequestComponent(injector, dialog, router, route, userService, sharedService, cookieService) {
        _classCallCheck(this, SignuprequestComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isUserDataLoaded = false;
        this.isProfile = false;
        this.ItemUserStartIndex = 0;
        this.itemUserLimit = 15;
        this.isMobile = false;
        this.columnField = {};
        this.selectAllUnapprovedUser = false;
        this.isUserSelected = false;
        this.unitData = "";
        this.selectedInput = "";
        this.ItemLogStartIndex = 0;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
      }

      _createClass(SignuprequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.userService.getAllSignupUserRequestByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            // this.userService.getAllSignupUserRequestByApartmentId(3).subscribe((res : any) => {  
            console.log(res);
            var unitLstData = res;
            _this13.unitListData = unitLstData.filter(function (itm) {
              return itm.isActive;
            });
            _this13.totalUserItems = _this13.unitListData.length;

            if (_this13.totalUserItems > _this13.itemUserLimit) {
              _this13.ItemUserEndIndex = _this13.itemUserLimit;
            } else {
              _this13.ItemUserEndIndex = _this13.totalUserItems;
            }

            _this13.isUserDataLoaded = true;
          }, function (error) {
            console.log(error);
          });
          this.userService.getAllUnApprovedUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            var unitListData = res;
            console.log(res);
            console.log(res.name);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "selectColInput",
        value: function selectColInput(value) {
          console.log(value);
          this.selectedInput = value;
        }
      }, {
        key: "getLogIndexParams",
        value: function getLogIndexParams(event) {
          this.ItemLogStartIndex = event.ItemLogStartIndex;
          this.ItemLogEndIndex = event.ItemLogEndIndex;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "getNotes",
        value: function getNotes(data) {
          console.log(data);
          if (data === undefined || data.length == 0) return '';else return data.notes;
        }
      }, {
        key: "getBlockName",
        value: function getBlockName(data) {
          var dt = JSON.parse(data);
          return dt.BlockName;
        }
      }, {
        key: "getUserType",
        value: function getUserType(data) {
          var usrType = 0;
          var dt = JSON.parse(data);
          usrType = dt.UserType;
          var usrName = "";

          if (usrType == 0) {
            usrName = "N/A";
          } else if (usrType == 2) {
            usrName = "Tenant";
          } else if (usrType == 4) {
            usrName = "Owner";
          } else if (usrType == 1) {
            usrName = "Admin";
          }

          return usrName;
        }
      }, {
        key: "getUnitName",
        value: function getUnitName(data) {
          var dt = JSON.parse(data);
          return dt.UnitName;
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
        key: "onDateChange",
        value: function onDateChange(event, type) {
          if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_9__(event).format("DD/MM/YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "getBookedDate",
        value: function getBookedDate(itr, date) {
          underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.unitListData, function (obj, index) {
            obj.facilityBookedForDate = moment__WEBPACK_IMPORTED_MODULE_9__(obj.bookedForDate).format("DD/MM/YYYY");
          });
          return moment__WEBPACK_IMPORTED_MODULE_9__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "getBlockNo",
        value: function getBlockNo(item, data) {
          this.unitListData.map(function (obj) {
            if (obj.id == item.id) {
              obj.apartmentBlockNumber = data;
            }
          });
          return data;
        }
      }, {
        key: "getBlockUnitNo",
        value: function getBlockUnitNo(item, data) {
          this.unitListData.map(function (obj) {
            if (obj.id == item.id) {
              obj.apartmentBlockUnitNumber = data;
            }
          });
          return data;
        }
      }, {
        key: "viewUserInfo",
        value: function viewUserInfo(id) {
          var _this14 = this;

          this.isProfile = false;
          setTimeout(function () {
            _this14.isProfile = true;
          }, 10);
          setTimeout(function () {
            var elem = document.querySelector('.user-info-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 100);
          this.viewUserId = id;
          this.router.navigate(['ams/unit&users/unapproved/basic', this.viewUserId]);
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(data) {
          var _this15 = this;

          this.modalService.showConfirmModal(data.signupUserRequestId);
          var params = {
            signupUserId: data.signupUserRequestId,
            apartmentId: data.apartmentId
          };
          this.userService.UpdateSignupUserRequestByApartmentId(params).subscribe(function (res) {
            if (res.message) {
              _this15.sharedService.setAlertMessage("Signup deleted successfully.");

              _this15.router.navigate(['ams/unit&users/usersignuprequest', _this15.viewUserId]);
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "approveUsers",
        value: function approveUsers() {
          var _this16 = this;

          this.isUserDataLoaded = false;
          underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.unitListData, function (item, index) {
            if (item.checked) {
              _this16.userService.getUserById(item.id).subscribe(function (res) {
                var user = res[0];
                user.isApproved = true;

                _this16.userService.UpdateUser(user).subscribe(function (res) {
                  _this16.unitListData.splice(index, 1);

                  _this16.totalUserItems = _this16.unitListData.length;
                  _this16.isUserDataLoaded = true;
                });
              });
            }
          });
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          if (event.target.innerWidth <= 991) this.isMobile = true;else this.isMobile = false;
        }
      }, {
        key: "getUserIndexParams",
        value: function getUserIndexParams(event) {
          console.log(event);
          this.ItemUserStartIndex = event.ItemUserStartIndex;
          this.ItemUserEndIndex = event.ItemUserEndIndex;
          this.itemUserLimit = event.ItemLimit;

          if (this.totalUserItems > this.itemUserLimit) {
            this.ItemUserEndIndex = this.itemUserLimit;
          } else {
            this.ItemUserEndIndex = this.totalUserItems;
          }
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "getAllUnapprovedUser",
        value: function getAllUnapprovedUser() {
          if (this.selectAllUnapprovedUser) {
            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.unitListData, function (item) {
              item.checked = true;
            });
            this.isUserSelected = true;
          } else {
            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.unitListData, function (item) {
              item.checked = false;
            });
            this.isUserSelected = false;
          }
        }
      }, {
        key: "getSelectedUnapprovedUser",
        value: function getSelectedUnapprovedUser(unit) {
          var length = 0;
          underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.unitListData, function (item) {
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
        key: "EditUserInfo",
        value: function EditUserInfo(data) {
          data.mode = true;
          this.modalService.showSignUpdetailsModal(data);
        }
      }, {
        key: "viewSignup",
        value: function viewSignup(data) {
          data.mode = false;
          this.modalService.showSignUpdetailsModal(data);
        }
      }]);

      return SignuprequestComponent;
    }();

    SignuprequestComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SignuprequestComponent.prototype, "onResize", null);
    SignuprequestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signuprequest',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signuprequest.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/signuprequest/signuprequest.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signuprequest.component.scss */
      "./src/app/ams/unit-users/components/signuprequest/signuprequest.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], SignuprequestComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    StatisticsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-statistics',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./statistics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/statistics/statistics.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./statistics.component.scss */
      "./src/app/ams/unit-users/components/statistics/statistics.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StatisticsComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsUserReportsUserReportDataUserReportDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvdXNlci1yZXBvcnRzL3VzZXItcmVwb3J0LWRhdGEvdXNlci1yZXBvcnQtZGF0YS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: UserReportDataComponent */

  /***/
  function srcAppAmsUnitUsersComponentsUserReportsUserReportDataUserReportDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserReportDataComponent", function () {
      return UserReportDataComponent;
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
    /*! ../../../../.././api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var UserReportDataComponent =
    /*#__PURE__*/
    function () {
      function UserReportDataComponent(router, route, userService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, UserReportDataComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.pageName = "";
        this.pageDesp = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isDataLoaded = false;
        this.blockId = "";
        this.blockNo = "All Blocks";
      }

      _createClass(UserReportDataComponent, [{
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
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "isListOfResidents",
        value: function isListOfResidents() {
          return this.pageName == "List of Residents";
        }
      }, {
        key: "isListOfApprovedUsers",
        value: function isListOfApprovedUsers() {
          return this.pageName == "List of Approved Users";
        }
      }, {
        key: "isListOfDeactivatedUsers",
        value: function isListOfDeactivatedUsers() {
          return this.pageName == "List of De-activated Users";
        }
      }, {
        key: "isListOfResidentsVehicleInfo",
        value: function isListOfResidentsVehicleInfo() {
          return this.pageName == "List of Residents Vehicle Info";
        }
      }, {
        key: "isListOfExpiringRental",
        value: function isListOfExpiringRental() {
          return this.pageName == "List of Expiring Rental / Lease Agreements";
        }
      }, {
        key: "isListOfUsersWithPets",
        value: function isListOfUsersWithPets() {
          return this.pageName == "List of Users with Pets";
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
        }
      }, {
        key: "getBlockDetails",
        value: function getBlockDetails() {
          var _this17 = this;

          this.isDataLoaded = false;
          var blockId;

          if (this.blockId == "") {
            blockId = null;
            this.blockNo = "All Blocks";
          } else {
            blockId = this.blockId;
            var blockDetails = this.unitBlocksData.filter(function (item) {
              return item.apartmentBlockId == blockId;
            });
            this.blockNo = blockDetails[0].apartmentBlockNumber;
          }

          var details = {
            ApartmentID: parseInt(this.cookieService.get('apartmentId')),
            ApartmentBlockID: blockId
          };

          if (this.isListOfResidents()) {
            this.userService.GetReportUnitUserResidentsbyApartmentIdBlockId(details).subscribe(function (res) {
              _this17.userReportDataList = res;
              _this17.isDataLoaded = true;

              _this17.showItems();
            });
          } else if (this.isListOfApprovedUsers()) {
            this.userService.GetReportApprovedUnitUserbyApartmentIdBlockId(details).subscribe(function (res) {
              _this17.userReportDataList = res;
              _this17.isDataLoaded = true;

              _this17.showItems();
            });
          } else if (this.isListOfDeactivatedUsers()) {
            this.userService.GetReportDeActivatedUnitUserbyApartmentIdBlockId(details).subscribe(function (res) {
              _this17.userReportDataList = res;
              _this17.isDataLoaded = true;

              _this17.showItems();
            });
          } else if (this.isListOfResidentsVehicleInfo()) {
            this.userService.GetReportUnitUserResidentsVehicleInfobyApartmentIdBlockId(details).subscribe(function (res) {
              _this17.userReportDataList = res;
              _this17.isDataLoaded = true;

              _this17.showItems();
            });
          } else if (this.isListOfExpiringRental()) {
            this.userService.GetReportExpiredRentLeaseAgreemtbyApartmentIdBlockId(details).subscribe(function (res) {
              _this17.userReportDataList = res;
              _this17.isDataLoaded = true;

              _this17.showItems();
            });
          } else if (this.isListOfUsersWithPets()) {
            this.userService.GetReportUnitUserPetInfobyApartmentIdBlockId(details).subscribe(function (res) {
              _this17.userReportDataList = res;
              _this17.isDataLoaded = true;

              _this17.showItems();
            });
          }
        }
      }, {
        key: "showItems",
        value: function showItems() {
          this.totalItems = this.userReportDataList.length;

          if (this.totalItems > this.itemLimit) {
            this.ItemEndIndex = this.itemLimit;
          } else {
            this.ItemEndIndex = this.totalItems;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.pageName = this.route.params['value'].name;
          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this18.unitBlocksData = res;
          });
          this.lookupService.getLookupValueByLookupTypeId(87).subscribe(function (res) {
            var data = res.filter(function (item) {
              return item.lookupValueId == _this18.route.params['value'].id;
            });
            _this18.pageName = res[0].lookupValueName;
            _this18.pageDesp = res[0].description;
          });
          this.getBlockDetails();
        }
      }]);

      return UserReportDataComponent;
    }();

    UserReportDataComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    UserReportDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-report-data',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-report-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-report-data.component.scss */
      "./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], UserReportDataComponent);
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/user-reports/user-reports.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/user-reports/user-reports.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsUnitUsersComponentsUserReportsUserReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvdXNlci1yZXBvcnRzL3VzZXItcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/unit-users/components/user-reports/user-reports.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/unit-users/components/user-reports/user-reports.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: UserReportsComponent */

  /***/
  function srcAppAmsUnitUsersComponentsUserReportsUserReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserReportsComponent", function () {
      return UserReportsComponent;
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

    var UserReportsComponent =
    /*#__PURE__*/
    function () {
      function UserReportsComponent(lookupService, sharedService, cookieService) {
        _classCallCheck(this, UserReportsComponent);

        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
      }

      _createClass(UserReportsComponent, [{
        key: "formatName",
        value: function formatName(name) {
          return name.replace(/^\s+|\s+$/g, "");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          var details = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 87,
            MenuName: 'UnitUser'
          };
          this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe(function (res) {
            _this19.reportDataList = res;
            _this19.isDataLoaded = true;
          });
        }
      }]);

      return UserReportsComponent;
    }();

    UserReportsComponent.ctorParameters = function () {
      return [{
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    UserReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-reports.component.scss */
      "./src/app/ams/unit-users/components/user-reports/user-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], UserReportsComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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


    var _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/user-reports/user-reports.component */
    "./src/app/ams/unit-users/components/user-reports/user-reports.component.ts");
    /* harmony import */


    var _components_user_reports_user_report_data_user_report_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/user-reports/user-report-data/user-report-data.component */
    "./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.ts");
    /* harmony import */


    var _user_my_profile_components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../user/my-profile/components/profile-vehicles/profile-vehicles.component */
    "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.ts");
    /* harmony import */


    var _user_my_profile_components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../user/my-profile/components/profile-family-members/profile-family-members.component */
    "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.ts");
    /* harmony import */


    var _user_my_profile_components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../user/my-profile/components/profile-pet/profile-pet.component */
    "./src/app/user/my-profile/components/profile-pet/profile-pet.component.ts");
    /* harmony import */


    var _user_my_profile_components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../user/my-profile/components/property-manager/property-manager.component */
    "./src/app/user/my-profile/components/property-manager/property-manager.component.ts");
    /* harmony import */


    var _user_my_profile_components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../user/my-profile/components/profile-unit-details/profile-unit-details.component */
    "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.ts");
    /* harmony import */


    var _user_my_profile_components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component */
    "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.ts");
    /* harmony import */


    var _user_my_profile_components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../user/my-profile/components/profile-lease-info/profile-lease-info.component */
    "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.ts");
    /* harmony import */


    var _user_my_profile_components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../user/my-profile/components/profile-interest-group/profile-interest-group.component */
    "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.ts");
    /* harmony import */


    var _user_my_profile_components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../user/my-profile/components/profile-basic/profile-basic.component */
    "./src/app/user/my-profile/components/profile-basic/profile-basic.component.ts");
    /* harmony import */


    var _user_my_profile_components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../user/my-profile/components/profile-user-absence/profile-user-absence.component */
    "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.ts");
    /* harmony import */


    var _components_signuprequest_signuprequest_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/signuprequest/signuprequest.component */
    "./src/app/ams/unit-users/components/signuprequest/signuprequest.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'unapproved',
      pathMatch: 'full'
    }, {
      path: 'usersignuprequest',
      component: _components_signuprequest_signuprequest_component__WEBPACK_IMPORTED_MODULE_19__["SignuprequestComponent"]
    }, {
      path: 'unapproved',
      component: _components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_4__["UnapprovedComponent"],
      children: [{
        path: 'basic/:id',
        component: _user_my_profile_components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_17__["ProfileBasicComponent"]
      }, {
        path: 'unit/:id',
        component: _user_my_profile_components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_13__["ProfileUnitDetailsComponent"]
      }, {
        path: 'staffs/:id',
        component: _user_my_profile_components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_14__["ProfileUnitStaffsComponent"]
      }, {
        path: 'vehicles/:id',
        component: _user_my_profile_components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_9__["ProfileVehiclesComponent"]
      }, {
        path: 'pets/:id',
        component: _user_my_profile_components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_11__["ProfilePetComponent"]
      }, {
        path: 'propertymanager/:id',
        component: _user_my_profile_components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_12__["PropertyManagerComponent"]
      }, {
        path: 'family/:id',
        component: _user_my_profile_components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_10__["ProfileFamilyMembersComponent"]
      }, {
        path: 'lease/:id',
        component: _user_my_profile_components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_15__["ProfileLeaseInfoComponent"]
      }, {
        path: 'interest/:id',
        component: _user_my_profile_components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_16__["ProfileInterestGroupComponent"]
      }, {
        path: 'absence/:id',
        component: _user_my_profile_components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_18__["ProfileUserAbsenceComponent"]
      }, {
        path: '**',
        redirectTo: 'basic',
        pathMatch: 'full'
      }]
    }, {
      path: 'add-users',
      component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"]
    }, {
      path: 'edit-user/:id',
      component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"]
    }, {
      path: 'approved',
      component: _components_approved_approved_component__WEBPACK_IMPORTED_MODULE_5__["ApprovedComponent"],
      children: [{
        path: 'basic/:id',
        component: _user_my_profile_components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_17__["ProfileBasicComponent"]
      }, {
        path: 'unit/:id',
        component: _user_my_profile_components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_13__["ProfileUnitDetailsComponent"]
      }, {
        path: 'staffs/:id',
        component: _user_my_profile_components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_14__["ProfileUnitStaffsComponent"]
      }, {
        path: 'vehicles/:id',
        component: _user_my_profile_components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_9__["ProfileVehiclesComponent"]
      }, {
        path: 'pets/:id',
        component: _user_my_profile_components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_11__["ProfilePetComponent"]
      }, {
        path: 'propertymanager/:id',
        component: _user_my_profile_components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_12__["PropertyManagerComponent"]
      }, {
        path: 'family/:id',
        component: _user_my_profile_components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_10__["ProfileFamilyMembersComponent"]
      }, {
        path: 'lease/:id',
        component: _user_my_profile_components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_15__["ProfileLeaseInfoComponent"]
      }, {
        path: 'interest/:id',
        component: _user_my_profile_components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_16__["ProfileInterestGroupComponent"]
      }, {
        path: 'absence/:id',
        component: _user_my_profile_components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_18__["ProfileUserAbsenceComponent"]
      }, {
        path: '**',
        redirectTo: 'basic',
        pathMatch: 'full'
      }]
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
      component: _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_7__["UserReportsComponent"]
    }, {
      path: 'reports/:name/:id',
      component: _components_user_reports_user_report_data_user_report_data_component__WEBPACK_IMPORTED_MODULE_8__["UserReportDataComponent"]
    }, {
      path: '**',
      redirectTo: 'unapproved',
      pathMatch: 'full'
    }];

    var UnitUsersRoutingModule = function UnitUsersRoutingModule() {
      _classCallCheck(this, UnitUsersRoutingModule);
    };

    UnitUsersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    UnitUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unit-users',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./unit-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/unit-users.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _unit_users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./unit-users-routing.module */
    "./src/app/ams/unit-users/unit-users-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _user_my_profile_my_profile_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../user/my-profile/my-profile.module */
    "./src/app/user/my-profile/my-profile.module.ts");
    /* harmony import */


    var _unit_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./unit-users.component */
    "./src/app/ams/unit-users/unit-users.component.ts");
    /* harmony import */


    var _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/add-users/add-users.component */
    "./src/app/ams/unit-users/components/add-users/add-users.component.ts");
    /* harmony import */


    var _components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/unapproved/unapproved.component */
    "./src/app/ams/unit-users/components/unapproved/unapproved.component.ts");
    /* harmony import */


    var _components_approved_approved_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/approved/approved.component */
    "./src/app/ams/unit-users/components/approved/approved.component.ts");
    /* harmony import */


    var _components_access_control_access_control_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/access-control/access-control.component */
    "./src/app/ams/unit-users/components/access-control/access-control.component.ts");
    /* harmony import */


    var _components_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/broadcast/broadcast.component */
    "./src/app/ams/unit-users/components/broadcast/broadcast.component.ts");
    /* harmony import */


    var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/statistics/statistics.component */
    "./src/app/ams/unit-users/components/statistics/statistics.component.ts");
    /* harmony import */


    var _components_de_activated_de_activated_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/de-activated/de-activated.component */
    "./src/app/ams/unit-users/components/de-activated/de-activated.component.ts");
    /* harmony import */


    var _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/user-reports/user-reports.component */
    "./src/app/ams/unit-users/components/user-reports/user-reports.component.ts");
    /* harmony import */


    var _components_add_users_add_resident_add_resident_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/add-users/add-resident/add-resident.component */
    "./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.ts");
    /* harmony import */


    var _components_approved_user_details_approved_user_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/approved-user-details/approved-user-details.component */
    "./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.ts");
    /* harmony import */


    var _components_user_reports_user_report_data_user_report_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/user-reports/user-report-data/user-report-data.component */
    "./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.ts");
    /* harmony import */


    var _components_signuprequest_signuprequest_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/signuprequest/signuprequest.component */
    "./src/app/ams/unit-users/components/signuprequest/signuprequest.component.ts");
    /* harmony import */


    var _components_unapproved_edit_modal_unapproved_edit_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/unapproved-edit-modal/unapproved-edit-modal.component */
    "./src/app/ams/unit-users/components/unapproved-edit-modal/unapproved-edit-modal.component.ts");
    /* harmony import */


    var _components_signup_edit_modal_signup_edit_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/signup-edit-modal/signup-edit-modal.component */
    "./src/app/ams/unit-users/components/signup-edit-modal/signup-edit-modal.component.ts");

    var UnitUsersModule = function UnitUsersModule() {
      _classCallCheck(this, UnitUsersModule);
    };

    UnitUsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_7__["AddUsersComponent"], _unit_users_component__WEBPACK_IMPORTED_MODULE_6__["UnitUsersComponent"], _components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_8__["UnapprovedComponent"], _components_approved_approved_component__WEBPACK_IMPORTED_MODULE_9__["ApprovedComponent"], _components_access_control_access_control_component__WEBPACK_IMPORTED_MODULE_10__["AccessControlComponent"], _components_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_11__["BroadcastComponent"], _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"], _components_de_activated_de_activated_component__WEBPACK_IMPORTED_MODULE_13__["DeActivatedComponent"], _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_14__["UserReportsComponent"], _components_add_users_add_resident_add_resident_component__WEBPACK_IMPORTED_MODULE_15__["AddResidentComponent"], _components_approved_user_details_approved_user_details_component__WEBPACK_IMPORTED_MODULE_16__["ApprovedUserDetailsComponent"], _components_user_reports_user_report_data_user_report_data_component__WEBPACK_IMPORTED_MODULE_17__["UserReportDataComponent"], _components_signuprequest_signuprequest_component__WEBPACK_IMPORTED_MODULE_18__["SignuprequestComponent"], _components_unapproved_edit_modal_unapproved_edit_modal_component__WEBPACK_IMPORTED_MODULE_19__["UnapprovedEditModalComponent"], _components_signup_edit_modal_signup_edit_modal_component__WEBPACK_IMPORTED_MODULE_20__["SignupEditModalComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _unit_users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UnitUsersRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _user_my_profile_my_profile_module__WEBPACK_IMPORTED_MODULE_5__["MyProfileModule"]],
      bootstrap: [_unit_users_component__WEBPACK_IMPORTED_MODULE_6__["UnitUsersComponent"]]
    })], UnitUsersModule);
    /***/
  }
}]);
//# sourceMappingURL=unit-users-unit-users-module-es5.js.map