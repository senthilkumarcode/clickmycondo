(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unit-users-unit-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/access-control/access-control.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/access-control/access-control.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  access-control works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-resident-wrapper\">\n\n\t<h5 class=\"mb-3\">\n\t\t<span *ngIf=\"!isEditUser\">Add User</span>\n\t\t<span *ngIf=\"isEditUser\">Edit User</span>\n\t</h5>\n\t<div class=\"card clear mb-30\">\n\t\t<!-- <div class=\"card-header\">\n\t\t\t\n    \t\t<div class=\"float-right\" *ngIf=\"!isArrayOne()\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/unapproved\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div> \n\t\t</div>-->\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isUserSubmitted\"></app-loader>\n\t\t\t<form #CheckingEmailForm = \"ngForm\" name=\"CheckingEmailForm\"   novalidate>\n                <div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Email*</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"emailRegister\" [(ngModel)]=\"emailToRegister\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\" style=\"padding-top: 23px;\">\n\t\t\t\t\t\t<button class=\"btn green mr-2\" (click)=\"checkEmail()\">Check</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<hr/>\n                <div class=\"row\" *ngIf=\"isValidEmail\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ng-container *ngIf=\"!isUserSubmitted\">\n\t\t\t\t<form #addResidentForm = \"ngForm\" name=\"addResidentForm\" (ngSubmit)=\"submitAddResidentForm(addResidentForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>User Type*</label>\n\t\t\t\t\t\t\t\t<!-- <div class=\"form-group\">\n\t\t                            <input name=\"userType\" (change)=\"changeUserType($event)\" id=\"admin\" [(ngModel)]=\"userType\"  value=\"1\" type=\"radio\" required>\n\t\t                            <label class=\"radio-inline\" for=\"admin\">Admin</label>\n\t                     \t\t</div> -->\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"userType\" (change)=\"changeUserType($event)\" id=\"owner\" [(ngModel)]=\"userType\"  value=\"4\" type=\"radio\" required>\n\t\t                            <label class=\"radio-inline\" for=\"owner\">Owner</label>\n\t                     \t\t</div>\n\t\t                    \t<div class=\"form-group\">\n\t\t                            <input name=\"userType\" (change)=\"changeUserType($event)\" id=\"tenant\" [(ngModel)]=\"userType\" value=\"2\" type=\"radio\" required>\n\t\t                            <label class=\"radio-inline\" for=\"tenant\">Tenant</label>\n\t\t                         </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>First Name*</label>\n\t\t\t                    <input type=\"text\" [disabled]=\"isExistingUSer\" class=\"form-control\" placeholder=\"First Name\" name=\"firstName\" [(ngModel)]=\"user.firstName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Last Name*</label>\n\t\t\t                    <input type=\"text\" [disabled]=\"isExistingUSer\" class=\"form-control\" placeholder=\"Last Name\" name=\"lastName\" [(ngModel)]=\"user.lastName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Gender*</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"genderType\" id=\"male\" [(ngModel)]=\"genderType\"  value=\"43\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"male\">Male</label>\n\t                     \t\t</div>\n\t\t                    \t<div class=\"form-group\">\n\t\t                            <input name=\"genderType\" id=\"female\" [(ngModel)]=\"genderType\" value=\"44\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"female\">Female</label>\n\t\t                         </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isAdminRegister\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Block No*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t\t\t\tid=\"blockNo\" \n\t\t\t\t\t\t\t\t\tplaceholder=\"Select Block\"\n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockId\" (ngModelChange)=\"getUnits()\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isBlockSelected && !isAdminRegister\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Unit No*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Select Unit\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockUnitId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"col-sm-4\" *ngIf=\"isAdminRegister\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Admin Role</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"userRole\" \n\t\t\t\t\t\t\t        id=\"userRole\" \n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Select Role\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"userRoleId\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of userRolesData\" [value]=\"item.roleId\">{{ item.roleName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Mobile*</label>\n\t\t\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" [disabled]=\"isExistingUSer\"  class=\"form-control\" placeholder=\"Mobile No\" name=\"phoneNo\" [(ngModel)]=\"user.phoneNumber\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"false \">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Password*</label>\n\t\t\t                    <input type=\"password\" [disabled]=\"isAutoGenPassword || isExistingUSer\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"user.password\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEditUser || isExistingUSer\">\n\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left mr-4\" style=\"padding-top: 28px;\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" [disabled]=\"isExistingUSer\" (change)=\"changeAutoGenPass($event)\" class=\"form-check-input\" id=\"autoGenPassword\" name=\"autoGenPassword\" [(ngModel)]=\"isAutoGenPassword\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<label class=\"form-check-label tiny\" for=\"autoGenPassword\">Auto Generate Password & Send To User's Email</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isAdminRegister\">\n\t\t\t\t\t\t\t<div class=\"input-box\" style=\"padding-top: 25px;padding-left: 16px;\">\n\t\t\t\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left mr-4\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"livingcondo\" name=\"livingcondo\" [(ngModel)]=\"user.isLiving\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label tiny\" for=\"livingcondo\">{{risidingCondoLabel | lowercase}}</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left mr-4\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"primarycondo\" name=\"primarycondo\" [(ngModel)]=\"user.isPrimaryContact\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label tiny\" for=\"primarycondo\">Is Primary Contact</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Email*</label>\n\t\t\t                    <input type=\"email\" class=\"form-control\" placeholder=\"Enter value\" name=\"email\" [(ngModel)]=\"user.emailId\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t\t\t<label>Notification</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group checker-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left mr-4\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"emailNotify\" name=\"emailNotify\" [(ngModel)]=\"user.isEmailNotify\"\n\t\t\t\t\t\t\t\t\t    disabled=\"true\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"emailNotify\">Email</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left mr-4\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"smsNotify\" name=\"smsNotify\" [(ngModel)]=\"user.isSmsNotify\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"smsNotify\">SMS</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"flashNotify\" name=\"flashNotify\" [(ngModel)]=\"user.isFlashNotify\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"flashNotify\">Flash Notice</label>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Is Primary Contact</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"isPrimary\" id=\"yesPrimary\" [(ngModel)]=\"isPrimary\"  value=\"Yes\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"yesPrimary\">Yes</label>\n\t                     \t\t</div>\n\t\t                    \t<div class=\"form-group\">\n\t\t                            <input name=\"isPrimary\" id=\"NoPrimary\" [(ngModel)]=\"isPrimary\" value=\"No\" type=\"radio\"required>\n\t\t                            <label class=\"radio-inline\" for=\"NoPrimary\">No</label>\n\t\t                         </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addResidentForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\n\t\t</div>\n\t</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-users.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-users.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-users-wrapper\">\n\t<ng-container *ngFor=\"let resident of residentArray; let i = index\">\n\t\t<app-add-resident [index]=\"i\" [array]=\"residentArray\" (outputParams) = \"getResidentArray($event)\"></app-add-resident>\n\t</ng-container>\n\t<!-- <a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addResident()\" *ngIf=\"!isEditUser\" [ngClass]=\"isMobileView() ? 'mobile' : ''\">\n\t\t<div class=\"icon\">+<span class=\"text d-sm-none ml-2\">Add User</span></div>\n\t</a> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card user-details float-left\" [ngClass]=\"[ isTabSelected() , isNotSlide()]\" id=\"accordion\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<div class=\"card-body p-0\" *ngIf=\"isUserDataLoaded\">\n\n\t\t<div class=\"main\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5 class=\"text-capitalize\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/user-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t<span>{{user.name}}</span>\n\t\t\t\t</h5>\n\t\t\t\t<p>{{getRoleName(user.userRole)}}</p>\n\t\t\t\t<p>{{user.phone}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"showUserInfo()\">\n\t\t\t      \t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(user.id)\">\n\t\t\t\t\t<i-feather class=\"icon delete\" name=\"trash\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\n\t\t<ul class=\"list-group tabs clear\">\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/unit-liner-icon.svg\" /></span>\n\t\t\t\t<span>Unit Details</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details row\">\n\t\t\t\t\t<p class=\"col-lg-6\" ><span>Block No:</span> {{unit.apartmentBlockNumber}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Unit No:</span> {{unit.apartmentBlockUnitNumber}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Bulitup Area:</span> {{unit.builtupArea}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Carpet Area:</span> {{unit.carpetArea}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Unit Type:</span> {{unit.unitType}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Vacant:</span> {{getunitStatus(unit.isVacant)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Furnished:</span> {{getunitStatus(unit.isFurnished)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Pets Allowed:</span> {{getunitStatus(unit.isPetsAllowed)}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\">\n\t\t\t\t<span class=\"icon\"><i-feather class=\"feather truck\" name=\"truck\"></i-feather></span>\n\t\t\t\t<span>Unit Vehicles</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details row\">\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Vehicle Number:</span> {{vehicle.vehicleNumber}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Vehicle Type:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Vehicle Driver Number:</span> {{vehicle.vehicleDriverNumber}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Vehicle Manufacturer:</span> {{vehicle.vehicleManufacturer}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseFive\" aria-expanded=\"true\" aria-controls=\"collapseFive\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/dog-liner-icon.svg\" /></span>\n\t\t\t\t<span>Unit Pets</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseFive\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<div class=\"select-box col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<label>Select Unit</label>\n\t\t\t\t\t\t<select \n\t\t\t\t\t\t\tname=\"unitNo\" \n\t\t\t\t\t\t\tid=\"unitNo\" \n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[(ngModel)]=\"userUnitId\" (ngModelChange)=\"showUnitDetails(userUnitId)\" required>\n\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t<option *ngFor=\"let item of unitListData\" [value]=\"item.apartmentBlockUnitId\">{{ getUnitName(item.apartmentBlockUnitId) }}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\" *ngFor=\"let pet of petDataList\"  >\n\t\t\t\t\t\t<p class=\"col-lg-6\"><span>Pet:</span>{{getPetType(pet.pet.petTypeId)}}</p>\n\t\t\t\t\t\t<p class=\"col-lg-6\"><span>Date Of Birth:</span> {{pet?.dob | date :'mediumDate'}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseSix\" aria-expanded=\"true\" aria-controls=\"collapseSix\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/manager-liner-icon.svg\" /></span>\n\t\t\t\t<span>Property Manager</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseSix\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details row\">\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Available for rent:</span> {{getunitStatus(unit.isAvailableForRent)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Name:</span> {{unit.propertyManagerName}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Rent Amount:</span> {{unit.rentAmount}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseSeven\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/staff-liner-icon.svg\" /></span>\n\t\t\t\t<span>Family Memebers</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseSeven\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Name:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Phone/Mobile:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Relationship:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Email:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Date of Birth:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Gender:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Blood Group:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseEight\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/staff-liner-icon.svg\" /></span>\n\t\t\t\t<span>Rental/Lease Information</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseEight\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Start Date:</span> {{vehicle.vehicleNumber}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Expiry Date:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Advance Amount:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Rent Amount:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Lease Amount:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseNine\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/staff-liner-icon.svg\" /></span>\n\t\t\t\t<span>My Intrest Group</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseNine\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details\">\n\t\t\t\t\t<p>No Records Found</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTen\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/staff-liner-icon.svg\" /></span>\n\t\t\t\t<span>Out of Condo/Prolonged Absence</span>\n\t\t\t</li>\n\t\t\t<div id=\"collapseTen\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t<div class=\"details row\">\n\t\t\t\t\t<p class=\"col-lg-6\"><span>From Date:</span> {{vehicle.vehicleNumber}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>To Date:</span> {{getVehicleType(vehicle.vehicleTypeId)}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Local Reprensentative Name:</span> {{vehicle.vehicleDriverNumber}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Phone/Mobile:</span> {{vehicle.vehicleManufacturer}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Email:</span> {{vehicle.vehicleManufacturer}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Local Reprensentative Name:</span> {{vehicle.vehicleManufacturer}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Phone/Mobile:</span> {{vehicle.vehicleManufacturer}}</p>\n\t\t\t\t\t<p class=\"col-lg-6\"><span>Email:</span> {{vehicle.vehicleManufacturer}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ul>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved/approved.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved/approved.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"approved-user-wrapper\">\n\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<div class=\"card ov mb-20 users-list float-left\" [ngClass]=\"isTabSelected()\" *ngIf=\"isUserDataLoaded && !isProfile\">\n\t\t<div class=\"card-header p-4 d-flex align-items-center justify-content-between\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>Approved Users</h5>\n\t\t\t\t<p class=\"d-none d-md-inline-block\">Total {{totalUnits}} Units and {{totalItems}} Users</p>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\" >\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block mr-3\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\">\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block mr-0\">\n\t\t\t\t\t\t<select name=\"blockNo\" id=\"blockNo\" placeholder=\"Select Block\" class=\"form-control\"\n\t\t\t\t\t\t\t[(ngModel)]=\"apartmentBlockId\" required>\n\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t<option *ngFor=\"let item of towerList\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"d-flex mt-4\">\n\t\t\t\t\t\t<div class=\"d-flex align-items-center mr-3\">\n\t\t\t\t\t\t\t<span class=\"material-icons mr-2\">\n\t\t\t\t\t\t\t\tverified\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span>Owner</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t\t\t<span class=\"material-icons mr-2\">\n\t\t\t\t\t\t\t\tperson_outline\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span>Tenant</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body ov p-0 users\">\n\t\t\t<ng-container *ngFor=\"let item of approvedUsersData | slice:ItemStartIndex:ItemEndIndex; let i = index\">\n\t\t\t\t<li class=\"list-group-item row m-0 d-flex justify-content-between align-items-center\">\n\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n\t\t\t\t\t\t<div class=\"list d-flex\" *ngFor=\"let user of item.userInfo; let j = index\">\n\t\t\t\t<li class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12 d-flex align-items-center\">\n\t\t\t\t\t<span class=\"material-icons mr-2\" *ngIf=\"user.roleName == 'Owner'\">\n\t\t\t\t\t\tverified\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"material-icons mr-2\" *ngIf=\"user.roleName == 'Tenant'\">\n\t\t\t\t\t\tperson_outline\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"mr-2 text-capitalize d-flex align-items-center\" *ngIf=\"user.roleName != 'Admin'\" (click)=\"showApprovedUserDetails(user)\">\n\t\t\t\t\t\t<span class=\"mr-2\">{{user.userName}}</span>\n\t\t\t\t\t\t<small class=\"mr-2\" [style.color]=\"'#5cd67c'\" *ngIf=\"user?.isPrimaryContact\">(Primary)</small>\n\t\t\t\t\t\t<small [style.color]=\"'#3f51b5'\" *ngIf=\"user?.isLiving\">(Living)</small>\n\t\t\t\t\t</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex align-items-center\">\n\t\t\t\t\t<small>{{user?.phone}}</small>\n\t\t\t\t</li>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex justify-content-end\">\n\t\t<h5 class=\"p-0\">\n\t\t\t<span class=\"mr-2\">{{item?.apartmentBlockNumber+\"  \"+item.apartmentBlockUnitNumber}}</span>\n\t\t</h5>\n\t</div>\n\n\n\n\t</li>\n\t</ng-container>\n</div>\n\n<div class=\"pagination-wrapper\">\n\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t</app-pagination>\n\n</div>\n\n</div>\n\n<app-approved-user-details [selectedTab]=\"selectedTab\" *ngIf=\"!isMobileView() && !isProfile\"\n\t(outputParams)=\"showUserInfo($event)\"></app-approved-user-details>\n\n<!-- user Profile -->\n<div class=\"user-info-card clear\" *ngIf=\"isProfile\">\n\t<app-my-profile type=\"admin\" [isProfile]=\"isProfile\" [userId]=\"viewUserId\" (outputParams)=\"getParams($event)\">\n\t</app-my-profile>\n</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/broadcast/broadcast.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/broadcast/broadcast.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  broadcast works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/de-activated/de-activated.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/de-activated/de-activated.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"deactivated-wrapper\">\n\t\t\n    <app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isUserDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>De Activated Resident Accounts <span class=\"badge lime-green\">{{totalUserItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Activate documents</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" \n\t\t\t\t\t[(ngModel)]=\"deActivatedData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"deActivatedListData\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t</jqxGrid> \n\t\t\t<!-- <table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" class=\"select\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"selectAllDeactivatedUser\" \n\t\t\t\t\t\t\t    name=\"selectAllDeactivatedUser\" \n\t\t\t\t\t\t\t    [(ngModel)]=\"selectAllDeactivatedUser\"\n                            \t(ngModelChange)=\"getAllDeactivatedUser()\" >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"selectAllDeactivatedUser\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('name')\">Name <span [ngClass]=\"getFieldOrderBy('name')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('phone')\">Phone <span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('email')\">Email <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No <span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('unitNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let unit of deActivatedListData | simpleSearch: deActivatedData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\" [ngClass]=\"unit.checked ? 'selected' : ''\">\n\t\t\t\t      <td class=\"select\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"{{unit.id}}\" \n\t                            name=\"{{unit.id}}\"\n\t                            [(ngModel)]=\"unit.checked\"\n\t                            (ngModelChange)=\"getSelectedDeActivatedUser(unit)\"\n\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{unit.id}}\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t      \t{{unit.name}}</a>\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Status/Notes</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{getNotes(unit.apartmentBlockUnit)}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Owner/Tenant</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{getUserRole(unit.userRole, i)}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Status/Notes</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{getNotes(unit.apartmentBlockUnit)}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Verification Status</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{unit.status}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t  \t  </td>\n\t\t\t\t      <td class=\"grey\">{{unit.phone}}</td>\n\t\t\t\t      <td class=\"grey\">{{unit.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockNo(unit.apartmentBlockUnit, i)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockUnitNo(unit.apartmentBlockUnit, i)}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"showUserInfo(i)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/unit&users/edit-user/{{unit.id}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table> -->\n\n\t\t\t<!-- <div class=\"button-wrapper border-top\">\n\t\t\t\t<a class=\"btn lime-green sf\"\n\t\t\t\t\t(click)=\"activateUser()\"\n\t\t\t\t\t[ngClass]=\"!isUserSelected ? 'disabled' : ''\">\n\t\t\t\t\t<span>Activate Selected User</span>\n    \t\t\t</a>\n\t\t\t\t<a class=\"btn lime-green sf\"\n\t\t\t\t\t(click)=\"activateUser()\"\n\t\t\t\t\t[ngClass]=\"!isBulkActivate ? 'disabled' : ''\">\n\t\t\t\t\t<span>Bulk Activate</span>\n    \t\t\t</a>\n\t\t\t</div> -->\n\t\t\t<!-- <app-pagination \n\t\t\t\t[totalItems]=\"totalUserItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemUserStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemUserEndIndex\"\n\t\t\t\t[itemLimit] = \"itemUserLimit\"\n\t\t\t\t(outputParams) = \"getUserIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\n\t\t</div>\n\t</div>\n\n\t<ng-template #viewDeactivatedUserRef let-user>\n    \t<div class=\"user-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>User Info</h5>\n\t\t\t</div>\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <div class=\"icon mr-4\"><img src=\"assets/images/user-icon.svg\" width=\"36\" /></div>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t    <h5 class=\"mt-0\">{{user.firstName}} {{user.lastName}}</h5>\n\t\t\t\t\t    <p class=\"grey\">{{user.roleName}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">User ID</h6>\n\t\t\t\t\t\t\t<p>{{user.userId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Email</h6>\n\t\t\t\t\t\t\t<p>{{user.emailId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Block No</h6>\n\t\t\t\t\t\t\t<p>{{user.blockNo}} {{user.unitNo}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Phone No</h6>\n\t\t\t\t\t\t\t<p>{{user.phoneNumber}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Blood Group</h6>\n\t\t\t\t\t\t\t<p>{{user.bloodGroup}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Address</h6>\n\t\t\t\t\t\t\t<p>{{user.address1}} {{user.address2}} {{user.zipCode}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\t</ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/signuprequest/signuprequest.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/signuprequest/signuprequest.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"unapproved-wrapper\">\n\n    <app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n    <ng-container *ngIf=\"isUserDataLoaded\">\n\n        <div class=\"card clear table-card\">\n\n            <div class=\"card-header\">\n                <div class=\"float-left\">\n                    <h5>Self Sign Up Users <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n                </div>\n                <ul class=\"list-inline\">\n                    <li class=\"list-inline-item search d-none d-md-inline-block\">\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\"\n                            (ngModelChange)=\"onGlSearchFilter()\">\n                    </li>\n                    <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                </ul>\n            </div>\n\n            <div class=\"card-body p-0\">\n\n                <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                    [filterable]=\"true\" [sortable]=\"true\" [source]=\"unitListData\" [columns]=\"columnData\"\n                    [enablehover]=\"false\" #datagrid>\n                </jqxGrid>\n\n            </div>\n\n        </div>\n\n\n    </ng-container>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/statistics/statistics.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/statistics/statistics.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  statistics works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-report-data-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded && (isListOfResidents() || isListOfApprovedUsers())\">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6>\n\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By\n\t\t\t</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/reports\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-20 filter-card\">\n\n\t\t\t<form #incomeFilterForm=\"ngForm\" name=\"incomeFilterForm\"\n\t\t\t\t(ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\" novalidate>\n\n\t\t\t\t<div class=\"card-header no-border\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t\t\t\t\t\t<label>Select Block No</label>\n\t\t\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card table-card\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t\t\t\t\t<p>Data from {{blockNo}}</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('unitUserName')\">User Name<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('unitUserName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block Details<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('emailID')\">Email ID<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('emailID')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('userTypeName')\">User Type<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('userTypeName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('mobile')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('vehicleModel')\">Vehicle Model<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('vehicleModel')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('vehicleNumber')\">Vehicle Number<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('vehicleNumber')\"></span></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t*ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t\t\t<td class=\"name\">{{user.unitUserName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.blockNo}} {{user.unitNo}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.emailID}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.userTypeName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.mobile}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.vehicleModel}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.vehicleNumber}}</td>\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<!-- De Activated Users -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfDeactivatedUsers()\">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6>\n\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By\n\t\t\t</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/reports\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-20 filter-card\">\n\n\t\t\t<form #incomeFilterForm=\"ngForm\" name=\"incomeFilterForm\"\n\t\t\t\t(ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\" novalidate>\n\n\t\t\t\t<div class=\"card-header no-border\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t\t\t\t\t\t<label>Select Block No</label>\n\t\t\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card table-card\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t\t\t\t\t<p>Data from {{blockNo}}</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('unitUserName')\">User Name<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('unitUserName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block Details<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('emailID')\">Email ID<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('emailID')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('userTypeName')\">User Type<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('userTypeName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('mobile')\"></span></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t*ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex  ; let i = index\">\n\t\t\t\t\t\t\t<td class=\"name\">{{user.unitUserName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.blockNo}} {{user.unitNo}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.emailID}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.userTypeName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.mobile}}</td>\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\n\n\t<!-- vehicle info -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfResidentsVehicleInfo()\">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6>\n\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By\n\t\t\t</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/reports\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-20 filter-card\">\n\n\t\t\t<form #incomeFilterForm=\"ngForm\" name=\"incomeFilterForm\"\n\t\t\t\t(ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\" novalidate>\n\n\t\t\t\t<div class=\"card-header no-border\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t\t\t\t\t\t<label>Select Block No</label>\n\t\t\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card table-card\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t\t\t\t\t<p>Data from {{blockNo}}</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('unitUserName')\">User Name<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('unitUserName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block Details<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('vehicleNumber')\">Vehicle Number<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('vehicleNumber')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('vehicleModel')\">Vehicle Model<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('vehicleModel')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('emailID')\">Email ID<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('emailID')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('mobile')\"></span></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t*ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t\t\t<td class=\"name\">{{user.unitUserName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.blockNo}} {{user.unitNo}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.vehicleNumber}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.vehicleModel}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.emailID}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.mobile}}</td>\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<!-- Rental info -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfExpiringRental()\">\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6>\n\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By\n\t\t\t</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/reports\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-20 filter-card\">\n\n\t\t\t<form #incomeFilterForm=\"ngForm\" name=\"incomeFilterForm\"\n\t\t\t\t(ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\" novalidate>\n\n\t\t\t\t<div class=\"card-header no-border\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t\t\t\t\t\t<label>Select Block No</label>\n\t\t\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card table-card\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t\t\t\t\t<p>Data from {{blockNo}}</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('unitUserName')\">User Name<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('unitUserName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block Details<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('agreementStartDate')\">Start Date<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('agreementStartDate')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('agreementEndDate')\">End Date<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('agreementEndDate')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('rentalorLease')\">Rental Lease<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('rentalorLease')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('emailID')\">Email ID<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('emailID')\"></span></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t*ngFor=\"let user of userReportDataList | slice:ItemStartIndex:ItemEndIndex | simpleSearch: userReportData | orderBy : unitFieldType: unitOrder ; let i = index\">\n\t\t\t\t\t\t\t<td class=\"name\">{{user.unitUserName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.blockNo}} {{user.unitNo}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{getDate(user.agreementStartDate)}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{getDate(user.agreementEndDate)}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.rentalorLease}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.emailID}}</td>\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<!-- Pets info -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfUsersWithPets()\">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6>\n\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By\n\t\t\t</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/reports\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-20 filter-card\">\n\n\t\t\t<form #incomeFilterForm=\"ngForm\" name=\"incomeFilterForm\"\n\t\t\t\t(ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\" novalidate>\n\n\t\t\t\t<div class=\"card-header no-border\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t\t\t\t\t\t<label>Select Block No</label>\n\t\t\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t\t\t\t\t<p>Data from {{blockNo}}</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('unitUserName')\">User Name<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('unitUserName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block Details<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('petName')\">Pet Name<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('petName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('lastVaccinationDate')\">Last Vaccination Date<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('lastVaccinationDate')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('emailID')\">Email ID<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('emailID')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('mobile')\"></span></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t*ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t\t\t<td class=\"name\">{{user.unitUserName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.blockNo}} {{user.unitNo}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.petName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{getDate(user.lastVaccinationDate)}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.emailID}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.mobile}}</td>\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<!-- List of Units -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfUnits() \">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6>\n\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By\n\t\t\t</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/reports\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-20 filter-card\">\n\n\t\t\t<form #incomeFilterForm=\"ngForm\" name=\"incomeFilterForm\"\n\t\t\t\t(ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\" novalidate>\n\n\t\t\t\t<div class=\"card-header no-border\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t\t\t\t\t\t<label>Select Block No</label>\n\t\t\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t\t\t\t\t<!-- <p>Data from {{blockNo}}</p> -->\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('unitType')\">Unit Type<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('unitType')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('apartmentBlockNumber')\">Block Number<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('apartmentBlockUnitNumber')\">Unit Number<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('intercom')\">Mobile<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('intercom')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('availableDate')\">Available Date<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('availableDate')\"></span></th>\n\t\t\t\t\t\t\t<!-- <th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span [ngClass]=\"getFieldOrderBy('mobile')\"></span></th> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t*ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t\t\t<td class=\"name\">{{user.unitType}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.apartmentBlockNumber}}</td>\n\t\t\t\t\t\t\t<td class=\"name\">{{user.apartmentBlockUnitNumber}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.intercom}}</td>\n\t\t\t\t\t\t\t<!-- <td class=\"grey\">{{getDate(user.lastVaccinationDate)}}</td> -->\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.availableDate}}</td>\n\t\t\t\t\t\t\t<!-- <td class=\"grey\">{{user.mobile}}</td> -->\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\t<!-- List of Blocks -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfBlocks() \">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6>\n\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By\n\t\t\t</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/reports\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-20 filter-card\">\n\n\t\t\t<form #incomeFilterForm=\"ngForm\" name=\"incomeFilterForm\"\n\t\t\t\t(ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\" novalidate>\n\n\t\t\t\t<div class=\"card-header no-border\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t\t\t\t\t\t<label>Select Block No</label>\n\t\t\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t\t\t\t\t<!-- <p>Data from {{blockNo}}</p> -->\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('apartmentBlockNumber')\">Block Number<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('blockCommonArea')\">Block Common Area<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('blockCommonArea')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('blockConstructedArea')\">Block Constructed Area<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('blockConstructedArea')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('description')\">Description<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('description')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('totalNounits')\">No of Units<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('totalNounits')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('totalnofloors')\">No of Floors<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('totalnofloors')\"></span></th>\n\t\t\t\t\t\t\t<!-- <th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span [ngClass]=\"getFieldOrderBy('mobile')\"></span></th> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t*ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t\t\t<td class=\"name\">{{user.apartmentBlockNumber}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.blockCommonArea}}</td>\n\t\t\t\t\t\t\t<td class=\"name\">{{user.blockConstructedArea}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.description}}</td>\n\t\t\t\t\t\t\t<!-- <td class=\"grey\">{{getDate(user.lastVaccinationDate)}}</td> -->\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.totalNounits}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.totalnofloors}}</td>\n\t\t\t\t\t\t\t<!-- <td class=\"grey\">{{user.mobile}}</td> -->\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\t<!-- List of Tenant -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfTenants() \">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6>\n\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By\n\t\t\t</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/reports\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-20 filter-card\">\n\n\t\t\t<form #incomeFilterForm=\"ngForm\" name=\"incomeFilterForm\"\n\t\t\t\t(ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\" novalidate>\n\n\t\t\t\t<div class=\"card-header no-border\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t\t\t\t\t\t<label>Select Block No</label>\n\t\t\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t\t\t\t\t<!-- <p>Data from {{blockNo}}</p> -->\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('firstName')\">Name<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('firstName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('phoneNumber')\">Phone Number<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('phoneNumber')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('genderId')\">Gender<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('genderId')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('emailId')\">Email Id<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('emailId')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('dob')\">Date Of Birth<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('dob')\"></span></th>\n\t\t\t\t\t\t\t<!-- <th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span [ngClass]=\"getFieldOrderBy('mobile')\"></span></th> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t*ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t\t\t<td class=\"name\">{{user.firstName+''+user.lastName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.phoneNumber}}</td>\n\t\t\t\t\t\t\t<td class=\"name\">{{user.genderId == 43 ? 'Male' : 'Female'}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.emailId}}</td>\n\t\t\t\t\t\t\t<!-- <td class=\"grey\">{{getDate(user.lastVaccinationDate)}}</td> -->\n\t\t\t\t\t\t\t<td class=\"grey\">{{getDate(user.dob)}}</td>\n\t\t\t\t\t\t\t<!-- <td class=\"grey\">{{user.mobile}}</td> -->\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\t<!-- List of Owners -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfOwners() \">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6>\n\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By\n\t\t\t</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/reports\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-20 filter-card\">\n\n\t\t\t<form #incomeFilterForm=\"ngForm\" name=\"incomeFilterForm\"\n\t\t\t\t(ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\" novalidate>\n\n\t\t\t\t<div class=\"card-header no-border\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t\t\t\t\t\t<label>Select Block No</label>\n\t\t\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t\t\t\t\t<!-- <p>Data from {{blockNo}}</p> -->\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('firstName')\">Name<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('firstName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('phoneNumber')\">Phone Number<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('phoneNumber')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('genderId')\">Gender<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('genderId')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('emailId')\">Email Id<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('emailId')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('dob')\">Date Of Birth<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('dob')\"></span></th>\n\t\t\t\t\t\t\t<!-- <th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span [ngClass]=\"getFieldOrderBy('mobile')\"></span></th> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t*ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t\t\t<td class=\"name\">{{user.firstName+''+user.lastName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.phoneNumber}}</td>\n\t\t\t\t\t\t\t<td class=\"name\">{{user.genderId == 43 ? 'Male' : 'Female'}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.emailId}}</td>\n\t\t\t\t\t\t\t<!-- <td class=\"grey\">{{getDate(user.lastVaccinationDate)}}</td> -->\n\t\t\t\t\t\t\t<td class=\"grey\">{{getDate(user.dob)}}</td>\n\t\t\t\t\t\t\t<!-- <td class=\"grey\">{{user.mobile}}</td> -->\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\t<!-- List of Admins -->\n\t<ng-container *ngIf=\"isDataLoaded && isListOfAdmins() \">\n\n\t\t<div class=\"filter-box float-left mt-4 p-0 no-border\">\n\t\t\t<h6>\n\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By\n\t\t\t</h6>\n\t\t</div>\n\t\t<div class=\"float-right\">\n\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/reports\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"d-inline-block\">View All Report Types</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-20 filter-card\">\n\n\t\t\t<form #incomeFilterForm=\"ngForm\" name=\"incomeFilterForm\"\n\t\t\t\t(ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\" novalidate>\n\n\t\t\t\t<div class=\"card-header no-border\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t\t\t\t\t\t<label>Select Block No</label>\n\t\t\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</div>\n\n\t\t<div class=\"card\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t\t\t\t\t<!-- <p>Data from {{blockNo}}</p> -->\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('firstName')\">Name<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('firstName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('phoneNumber')\">Phone Number<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('phoneNumber')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('genderId')\">Gender<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('genderId')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('emailId')\">Email Id<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('emailId')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('dob')\">Date Of Birth<span\n\t\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('dob')\"></span></th>\n\t\t\t\t\t\t\t<!-- <th scope=\"col\" (click)=\"sortUnitData('mobile')\">Mobile<span [ngClass]=\"getFieldOrderBy('mobile')\"></span></th> -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t*ngFor=\"let user of userReportDataList | simpleSearch: userReportData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t\t\t<td class=\"name\">{{user.firstName+''+user.lastName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.phoneNumber}}</td>\n\t\t\t\t\t\t\t<td class=\"name\">{{user.genderId == 43 ? 'Male' : 'Female'}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{user.emailId}}</td>\n\t\t\t\t\t\t\t<!-- <td class=\"grey\">{{getDate(user.lastVaccinationDate)}}</td> -->\n\t\t\t\t\t\t\t<td class=\"grey\">{{getDate(user.dob)}}</td>\n\t\t\t\t\t\t\t<!-- <td class=\"grey\">{{user.mobile}}</td> -->\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-reports.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-reports.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-3\">Reports</h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink = \"{{getReportRedirectPath(report.lookupValueName)}}/{{report.lookupValueID}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n\n\n\t<!-- <div class=\"card\">\n\t\t\n\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\t\t\t<ul class=\"list-group tabs clear\">\n\n\t\t\t\t<div class=\"tabs-content\" *ngFor=\"let report of unitReportData;let i = index; first as isFirst\">\n\t\t\t\t\t\n\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" attr.data-target=\"#reportData{{report.lookupValueId}}\" aria-expanded=\"true\" attr.aria-controls=\"reportData{{report.lookupValueId}}\"[ngClass]=\"isFirst ? '' : 'collapsed'\"><strong class=\"tc-blue\">{{report.lookupValueName}}</strong></li>\n\t\t\t\t\t<div id=\"reportData{{report.lookupValueId}}\" class=\"collapse\" attr.aria-labelledby=\"reportData{{report.lookupValueId}}\" data-parent=\"#accordion\" [ngClass]=\"isFirst ? 'show' : ''\">\n\t\t\t\t\t\t<div class=\"details p-0\">\n\t\t\t\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockno')\">Report Name</th>\n\t\t\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitno')\">Schedule Report </th>\n\t\t\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('intercom')\">Publish Report</th>\n\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t    <tr *ngFor=\"let item of report.data\">\n\t\t\t\t\t\t\t\t      <td class=\"name\">{{item.name}}</td>\n\t\t\t\t\t\t\t\t      <td class=\"grey\">{{item.status}}</td>\n\t\t\t\t\t\t\t\t      <td class=\"select\">\n\t\t\t\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t\t\t\t    id=\"{{item.name}}\" \n\t\t\t\t\t                            name=\"{{item.name}}\"\n\t\t\t\t\t                            [(ngModel)]=\"item.checked\"\n\t\t\t\t\t                            (ngModelChange)=\"getSelectedReports(item)\"\n\t\t\t\t\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{item.name}}\"></label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t      \t</div>\n\t\t\t\t\t\t\t\t      </td>\n\t\t\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t</table> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t</ul>\n\n\t\t</div>\n\n\t\t<div class=\"card-body p-0 border-top\">\n\t\t\t<div class=\"button-wrapper\">\n\t\t\t\t<a class=\"btn lime-green sf\"\n\t\t\t\t\t[ngClass]=\"!isReportSelected() ? 'disabled' : ''\">\n\t\t\t\t\t<span>Publish Selected reports to notice Board</span>\n    \t\t\t</a>\n    \t\t\t\n\t\t\t</div>\n\t\t</div>\n\n\t</div>-->\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/unit-users.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/unit-users.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/ams/unit-users/components/access-control/access-control.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/access-control/access-control.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvYWNjZXNzLWNvbnRyb2wvYWNjZXNzLWNvbnRyb2wuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/access-control/access-control.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/access-control/access-control.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AccessControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlComponent", function() { return AccessControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AccessControlComponent = class AccessControlComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccessControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-access-control',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./access-control.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/access-control/access-control.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./access-control.component.scss */ "./src/app/ams/unit-users/components/access-control/access-control.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AccessControlComponent);



/***/ }),

/***/ "./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvYWRkLXVzZXJzL2FkZC1yZXNpZGVudC9hZGQtcmVzaWRlbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddResidentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResidentComponent", function() { return AddResidentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_EmailSend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/EmailSend */ "./src/app/api/controllers/EmailSend.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */ "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");











let AddResidentComponent = class AddResidentComponent {
    constructor(dialog, router, route, userService, emailSendService, apartmentService, lookupService, sharedService, cookieService, cd) {
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
        this.risidingCondoLabel = "Is Residing In Condo";
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
    isArrayOne() {
        return this.residentArray.length > 1 ? true : false;
    }
    deleteResident() {
        this.residentArray.splice(this.index, 1);
        this.outputParams.emit(this.residentArray);
    }
    getUnits() {
        let params = {
            apartmentBlockId: parseInt(this.apartmentBlockId)
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe((res) => {
            this.isBlockSelected = true;
            this.unitData = res;
            if (this.isEditUser) {
                this.apartmentBlockUnitId = res[0].apartmentBlockUnitId.toString();
            }
        }, error => {
            console.log(error);
        });
    }
    submitAddResidentForm(form) {
        if (!this.IsvalidatePhoneNo(this.user.phoneNumber))
            return true;
        // if(!this.IsValidEmail(this.user.emailId))
        // return true;
        console.log(this.user);
        console.log(this.isAutoGenPassword);
        console.log(this.genderType);
        console.log(this.isAdminRegister);
        console.log(this.isEditUser);
        this.isUserSubmitted = true;
        this.isError = false;
        if (!this.isEditUser) {
            //add user
            let userDetails = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "firstName": this.user.firstName,
                "middleName": "",
                "lastName": this.user.lastName,
                "emailId": this.isValueValid(this.emailToRegister) ? "" : this.emailToRegister,
                "password": this.isAutoGenPassword ? "" : this.user.password,
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
                "isLiving": this.user.isLiving,
                "isActive": true,
                "isApproved": this.isAdminRegister,
                "resetPassword": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "updatedBy": 0,
                "isDocSubmitted": false,
                "readyForApproval": false
            };
            let params = {
                user: userDetails
            };
            //add user 
            this.userService.addUser(params).subscribe((res) => {
                console.log('user added', res);
                if (res.message) {
                    var userId = res.message;
                    var apartmentBlockUnitUser = {
                        "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
                        "userId": userId,
                        "isPrimaryContact": this.user.isPrimaryContact,
                        "userTypeId": parseInt(this.userType),
                        "isActive": true,
                        "insertedBy": parseInt(this.cookieService.get('userId')),
                        "insertedOn": "2019-11-10T10:38:46.060Z",
                        "updatedBy": 0,
                        "updatedOn": "2019-11-10T10:38:46.060Z",
                        "isDeletePermanently": false
                    };
                    let apartmentParams = {
                        apartmentBlockUnitUser: apartmentBlockUnitUser
                    };
                    this.apartmentService.addApartmentBlockUnitUser(apartmentParams).subscribe((res) => {
                        if (res.message) {
                            let userRole = {
                                "userId": userId,
                                "roleId": parseInt(this.userType),
                                "isActive": true,
                                "insertedBy": parseInt(this.cookieService.get('userId')),
                                "insertedOn": "2019-11-10T10:00:28.212Z",
                                "updatedBy": 0,
                                "apartmentBlockUnitUserId": res.message,
                                "updatedOn": "2019-11-10T10:00:28.212Z"
                            };
                            let params = {
                                userRole: userRole
                            };
                            this.userService.addUserRole(params).subscribe((res) => {
                                if (res.message) {
                                    this.isUserSubmitted = false;
                                    let emailDetails = {
                                        emailAddress: this.user.emailId,
                                        Name: this.user.firstName,
                                        Subject: 'User Created',
                                        TextMessage: 'User Created'
                                    };
                                    this.emailSendService.sendEmail(emailDetails).subscribe((res) => {
                                        console.log('user email');
                                        this.sharedService.setAlertMessage("Account has been created. User notified via Email ");
                                        this.router.navigate(['ams/unit&users/unapproved']);
                                    }, error => {
                                        console.log(error);
                                    });
                                }
                            }, error => {
                                console.log(error);
                            });
                        }
                        else {
                            this.isError = true;
                            this.errorMessage = res.errorMessage;
                        }
                    }, error => {
                        console.log(error);
                    });
                }
                else {
                    this.isUserSubmitted = false;
                    this.isError = true;
                    this.errorMessage = res.errorMessage;
                }
            }, error => {
            });
        }
        else {
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
                "isLiving": this.user.isLiving,
                "isActive": true,
                "isApproved": this.isAdminRegister,
                "resetPassword": this.user.resetPassword,
                "insertedBy": this.user.insertedBy,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "isDocSubmitted": this.user.isDocSubmitted,
                "readyForApproval": this.user.readyForApproval
            };
            let params = {
                user: userDetails
            };
            //edit user 
            this.userService.updateUser(params).subscribe((res) => {
                if (res.message) {
                    var userId = res.message;
                    var apartmentBlockUnitUser = {
                        "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
                        "userId": userId,
                        "isPrimaryContact": this.user.isPrimaryContact,
                        "userTypeId": parseInt(this.userType),
                        "isActive": this.user.isActive,
                        "insertedBy": parseInt(this.cookieService.get('userId')),
                        "insertedOn": this.user.insertedOn,
                        "updatedBy": this.user.updatedBy,
                        "updatedOn": this.user.updatedOn
                    };
                    let apartmentParams = {
                        apartmentBlockUnitUser: apartmentBlockUnitUser
                    };
                    this.apartmentService.addApartmentBlockUnitUser(apartmentParams).subscribe((res) => {
                        this.isUserSubmitted = false;
                        if (res.message) {
                            var userRole = {
                                "userId": userId,
                                "roleId": parseInt(this.userType),
                                "isActive": this.user.isActive,
                                "insertedBy": parseInt(this.cookieService.get('userId')),
                                "insertedOn": this.user.insertedOn,
                                "updatedBy": this.user.updatedBy,
                                "updatedOn": this.user.updatedOn,
                                "apartmentBlockUnitUserId": res.message
                            };
                            let params = {
                                userRole: userRole
                            };
                            this.userService.addUserRole(params).subscribe((res) => {
                                this.sharedService.setAlertMessage("User updated successfully");
                                this.router.navigate(['ams/unit&users/unapproved']);
                            }, error => {
                                console.log(error);
                            });
                        }
                        else {
                            this.isError = true;
                            this.errorMessage = res.errorMessage;
                        }
                    }, error => {
                        console.log(error);
                    });
                }
                else {
                    this.isUserSubmitted = false;
                    this.isError = true;
                    this.errorMessage = res.errorMessage;
                }
            }, error => {
            });
        }
    }
    ngOnInit() {
        this.user = {};
        this.user.isEmailNotify = true;
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        //get apartment blocks
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.blocksData = res;
        });
        var paramsRoles = {
            RoleTypeId: 1,
            ApartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.userService.getAllRolesByRoleTypeIdByApartmentId(paramsRoles).subscribe((res) => {
            console.log(res);
            this.userRolesData = res;
        });
        if (this.route.params['value'].id != undefined) {
            this.isEditUser = true;
            this.userService.getUserById(this.route.params['value'].id).subscribe((res) => {
                console.log(res);
                this.user = res[0];
                this.genderType = this.user.genderId.toString();
                // get role
                this.userService.getRolesByUserId(this.route.params['value'].id).subscribe((data) => {
                    this.userType = data[0].roleId.toString();
                }, error => {
                });
                //get block
                this.apartmentService.getApartmentBlockByUserId(this.route.params['value'].id).subscribe((block) => {
                    this.apartmentBlockId = block[0].apartmentBlockId.toString();
                    this.getUnits();
                }, error => {
                });
            }, error => {
            });
        }
    }
    checkEmail() {
        this.isValidEmail = false;
        var isValid = this.IsValidEmail(this.emailToRegister);
        if (isValid) {
            let params = {
                emailId: this.emailToRegister
            };
            // Validate Email
            this.userService.checkUserEmailExists(params).subscribe((data) => {
                if (data == null || data.ErrorMessage) {
                    this.isValidEmail = true;
                    this.isExistingUSer = false;
                    this.user = {};
                    this.user.isEmailNotify = true;
                }
                else {
                    const message = `The user Id already exists Do you want to add this user to this condo?`;
                    const dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogModel"]("Confirm Action", message);
                    const dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["CommonConfirmModalComponent"], {
                        panelClass: 'material',
                        disableClose: true,
                        data: dialogData
                    });
                    dialogRef.afterClosed().subscribe(dialogResult => {
                        this.result = dialogResult;
                        if (this.result) {
                            this.isValidEmail = this.isExistingUSer = true;
                            this.user = data;
                            this.user.isEmailNotify = true;
                            this.genderType = this.user.genderId;
                        }
                        else {
                            this.isValidEmail = this.isExistingUSer = false;
                        }
                    });
                }
            }, error => {
                this.isValidEmail = false;
                this.isError = true;
                this.errorMessage = 'Kindly enter proper email...!';
            });
        }
        else {
            this.sharedService.setAlertMessage("Kindly enter proper email...!");
            this.isError = true;
            this.errorMessage = 'Kindly enter proper email...!';
            this.cd.markForCheck();
        }
    }
    changeUserType(evt) {
        // this.isAdminRegister = false;
        if (evt.target.value == 2) {
            console.log(evt.target.value);
            // this.isAdminRegister = true;
            this.user.isLiving = true;
        }
        else if (evt.target.value == 4) {
            this.user.isLiving = false;
            // this.isAdminRegister = false;
        }
    }
    changeAutoGenPass(evt) {
        if (this.isAutoGenPassword) {
            this.user.password = "";
        }
    }
    IsValidEmail(val) {
        var retVal = true;
        var rex = new RegExp(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/);
        var isValid = rex.test(val);
        if (!isValid) {
            retVal = false;
            var errorDetails = {
                msg: "Please correct your email id",
                type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
        }
        return retVal;
    }
    IsvalidatePhoneNo(val) {
        var retVal = true;
        var rex = new RegExp(/^[+]?\d+$/);
        var isValid = rex.test(val);
        console.log(val.length);
        if (val.length > 13) {
            retVal = false;
            var errorDetails = {
                msg: "mobile no length should be within 13 characters",
                type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
        }
        if (!isValid) {
            retVal = false;
            var errorDetails = {
                msg: "Please correct your mobile",
                type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
        }
        return retVal;
    }
    isValueValid(val) {
        return (val === undefined || val == null || val.length <= 0 || val === "") ? true : false;
    }
};
AddResidentComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_api_controllers_EmailSend__WEBPACK_IMPORTED_MODULE_6__["EmailSendService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddResidentComponent.prototype, "index", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddResidentComponent.prototype, "residentArray", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddResidentComponent.prototype, "outputParams", void 0);
AddResidentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-resident',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-resident.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-resident.component.scss */ "./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        src_app_api_controllers_EmailSend__WEBPACK_IMPORTED_MODULE_6__["EmailSendService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], AddResidentComponent);



/***/ }),

/***/ "./src/app/ams/unit-users/components/add-users/add-users.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/add-users/add-users.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvYWRkLXVzZXJzL2FkZC11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/add-users/add-users.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/add-users/add-users.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsersComponent", function() { return AddUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AddUsersComponent = class AddUsersComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.residentCount = 1;
        this.isEditUser = false;
    }
    addResident() {
        this.residentCount++;
        this.residentArray = Array(this.residentCount).fill(0).map((x, i) => i);
    }
    getResidentArray(event) {
        this.residentArray = event;
        this.residentCount = this.residentArray.length;
    }
    isMobileView() {
        return window.innerWidth <= 576;
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.isEditUser = true;
        }
        this.residentArray = Array(this.residentCount).fill(0).map((x, i) => i);
    }
};
AddUsersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addUnitForm', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddUsersComponent.prototype, "addUnitForm", void 0);
AddUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/add-users/add-users.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-users.component.scss */ "./src/app/ams/unit-users/components/add-users/add-users.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AddUsersComponent);



/***/ }),

/***/ "./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card.user-details {\n  width: 0 !important;\n  height: 0;\n  transition: all 0.15s ease;\n  transform: translate(120%, 0);\n}\n.card.user-details.show {\n  width: 48% !important;\n  height: auto;\n  transform: translate(0);\n  transition: all 0.15s ease;\n  margin: 0 0 0 2%;\n}\n.card.user-details.full {\n  width: 100% !important;\n  margin: 0;\n}\n.card.user-details .main {\n  padding: 20px 15px;\n  overflow: auto;\n}\n.card.user-details .main h5 {\n  padding: 0 0 10px 0;\n  color: #3f51b5;\n}\n.card.user-details .main h5 .icon {\n  margin: 0 8px 0 0;\n}\n.card.user-details .main h5 .icon svg {\n  width: 24px;\n  height: 24px;\n  fill: #3f51b5;\n  margin: -2px 0 0 0;\n  display: inline-block;\n}\n.card.user-details .main p {\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.card.user-details .main li {\n  border: none;\n  padding: 0 0 6px 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #373946;\n}\n.card.user-details .tabs .icon .feather {\n  width: 14px;\n  display: inline-block;\n  margin: -3px 6px 0 0;\n}\n.card.user-details .tabs .icon svg {\n  width: 14px;\n  height: 14px;\n  fill: #373946;\n  display: inline-block;\n  margin: -3px 6px 0 0;\n}\n.card.user-details .tabs span:not(.icon) {\n  display: inline-block;\n  margin: 1px 0 0 4px;\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkLXVzZXItZGV0YWlscy9hcHByb3ZlZC11c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIiwic3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkLXVzZXItZGV0YWlscy9hcHByb3ZlZC11c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ0MsbUJBQUE7RUFDQSxTQUFBO0VDb0NELDBCRG5DQztFQUNBLDZCQUFBO0FFRkY7QUZHRTtFQUNDLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VDOEJGLDBCRDdCRTtFQUNBLGdCQUFBO0FFQ0g7QUZDRTtFQUNDLHNCR2tKRztFSGpKSCxTQUFBO0FFQ0g7QUZDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBRUNKO0FGQ0k7RUFDQSxtQkFBQTtFQUNBLGNHa0NLO0FEakNUO0FGQUk7RUFDQyxpQkFBQTtBRUVMO0FGREs7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFHNEJHO0VIM0JILGtCQUFBO0VBQ0cscUJBQUE7QUVHVDtBRkNJO0VJdUNGLGlCQUFBO0VKckNFLGNHOUJTO0FEK0JiO0FGQ0k7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUlOSCxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBbUNBLGlCQUFBO0VKOUJFLGNHK0NPO0FEMUNYO0FGQUk7RUFDQyxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBRUVMO0FGQUk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFHa0NNO0VIakNOLHFCQUFBO0VBQ0Esb0JBQUE7QUVFTDtBRkVJO0VBQ0kscUJBQUE7RUFDSCxtQkFBQTtFSVNILGlCQUFBO0FGUkYiLCJmaWxlIjoic3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkLXVzZXItZGV0YWlscy9hcHByb3ZlZC11c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmNhcmQge1xuXHQmLnVzZXItZGV0YWlscyB7XG5cdFx0d2lkdGg6IDAgIWltcG9ydGFudDtcblx0XHRoZWlnaHQ6IDA7XG5cdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSwgMCk7XG5cdFx0Ji5zaG93IHtcblx0XHRcdHdpZHRoOiA0OCUgIWltcG9ydGFudDtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuXHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0XHRtYXJnaW46IDAgMCAwIDIlO1xuXHRcdH1cblx0XHQmLmZ1bGwge1xuXHRcdFx0d2lkdGg6ICRmdWxsO1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0XHQubWFpbiB7XG5cdFx0XHQgcGFkZGluZzogMjBweCAxNXB4O1xuXHRcdFx0IG92ZXJmbG93OiBhdXRvO1xuXG5cdFx0XHQgaDUge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDAgMTBweCAwO1xuXHRcdFx0XHRjb2xvcjogJG0tYmx1ZTtcblx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdG1hcmdpbjogMCA4cHggMCAwO1xuXHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdFx0XHRcdGZpbGw6ICRtLWJsdWU7XG5cdFx0XHRcdFx0XHRtYXJnaW46IC0ycHggMCAwIDA7XG4gICAgXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCB9XG5cdFx0XHQgcCB7XG5cdFx0XHQgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdFx0Y29sb3I6ICRsaWdodC1ibHVlO1xuXHRcdFx0IH1cblx0XHRcdCBsaSB7XG5cdFx0XHQgXHRib3JkZXI6bm9uZTtcblx0XHRcdCBcdHBhZGRpbmc6IDAgMCA2cHggMDtcblx0XHRcdFx0QGluY2x1ZGUgaGVhZC1yZWd1bGFyO1xuXHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdCB9XG5cdFx0fVxuXHRcdC50YWJzIHtcblx0XHRcdC5pY29uIHtcblx0XHRcdFx0LmZlYXRoZXIge1xuXHRcdFx0XHRcdHdpZHRoOiAxNHB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRtYXJnaW46IC0zcHggNnB4IDAgMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdmcge1xuXHRcdFx0XHRcdHdpZHRoOiAxNHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTRweDtcblx0XHRcdFx0XHRmaWxsOiAkZ3JleS04MDA7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdG1hcmdpbjogLTNweCA2cHggMCAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0Jjpub3QoLmljb24pe1xuXHRcdFx0XHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdG1hcmdpbjogMXB4IDAgMCA0cHg7XG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBkZXNlbGVjdCAoKSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBmbGlwKCRkaXJlY3Rpb24pIHtcbiAgdHJhbnNmb3JtIDogcm90YXRlWSgkZGlyZWN0aW9uKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iLCIuY2FyZC51c2VyLWRldGFpbHMge1xuICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAlLCAwKTtcbn1cbi5jYXJkLnVzZXItZGV0YWlscy5zaG93IHtcbiAgd2lkdGg6IDQ4JSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgbWFyZ2luOiAwIDAgMCAyJTtcbn1cbi5jYXJkLnVzZXItZGV0YWlscy5mdWxsIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmQudXNlci1kZXRhaWxzIC5tYWluIHtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jYXJkLnVzZXItZGV0YWlscyAubWFpbiBoNSB7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLmNhcmQudXNlci1kZXRhaWxzIC5tYWluIGg1IC5pY29uIHtcbiAgbWFyZ2luOiAwIDhweCAwIDA7XG59XG4uY2FyZC51c2VyLWRldGFpbHMgLm1haW4gaDUgLmljb24gc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZmlsbDogIzNmNTFiNTtcbiAgbWFyZ2luOiAtMnB4IDAgMCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY2FyZC51c2VyLWRldGFpbHMgLm1haW4gcCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5jYXJkLnVzZXItZGV0YWlscyAubWFpbiBsaSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCAwIDZweCAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzM3Mzk0Njtcbn1cbi5jYXJkLnVzZXItZGV0YWlscyAudGFicyAuaWNvbiAuZmVhdGhlciB7XG4gIHdpZHRoOiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogLTNweCA2cHggMCAwO1xufVxuLmNhcmQudXNlci1kZXRhaWxzIC50YWJzIC5pY29uIHN2ZyB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGZpbGw6ICMzNzM5NDY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAtM3B4IDZweCAwIDA7XG59XG4uY2FyZC51c2VyLWRldGFpbHMgLnRhYnMgc3Bhbjpub3QoLmljb24pIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDFweCAwIDAgNHB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ApprovedUserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedUserDetailsComponent", function() { return ApprovedUserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var _api_controllers_Pet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../api/controllers/Pet */ "./src/app/api/controllers/Pet.ts");













let ApprovedUserDetailsComponent = class ApprovedUserDetailsComponent {
    constructor(route, injector, dialog, userService, apartmentService, vehicleService, lookupService, sharedService, cookieService, petService) {
        this.route = route;
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.vehicleService = vehicleService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.petService = petService;
        this.isSeperatePage = false;
        this.isUserDataLoaded = false;
        this.unitListData = [];
        this.unitNameList = [];
        this.petDataList = [];
        this.petTypeList = [];
        this.familyDataList = [];
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
    }
    isTabSelected() {
        return this.selectedTab != -1 ? 'show' : '';
    }
    isNotSlide() {
        return this.isSeperatePage ? 'full' : '';
    }
    getRoleName(role) {
        if (role === undefined || role.length == 0) {
            return '';
        }
        else {
            this.user.roleName = role[0].roleName;
            return role[0].roleName;
        }
    }
    getunitStatus(data) {
        return data ? 'Yes' : 'No';
    }
    getUnitName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.unitNameList, function (item) {
            if (item.apartmentBlockUnitId === id) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].apartmentBlockUnitNumber;
        }
    }
    showUnitDetails(id) {
        let petListParams = {
            apartmentBlockUnitId: parseInt(id)
        };
        this.petService.getAllPetsByApartmentBlockUnitId(petListParams).subscribe((res) => {
            if (res.length != 0) {
                this.petDataList = res.filter(item => { return item.pet.isActive; });
            }
            else {
            }
        });
    }
    getPetType(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.petTypeList, function (item) {
            if (item.lookupValueId === id) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName;
        }
    }
    getVehicleType(id) {
        underscore__WEBPACK_IMPORTED_MODULE_11__["each"](this.vehicleTypeData, (item, index) => {
            if (item.lookupValueId == id) {
                return item.lookupValueName;
            }
        });
    }
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    showUserInfo() {
        this.outputParams.emit(true);
    }
    getUserDetails(userId) {
        this.userService.getAllApprovedUsers().subscribe((res) => {
            var approvedUsersData = res.filter(item => {
                if (item.id == userId)
                    return item;
            });
            this.user = approvedUsersData[0];
            let getApprovedUserParam = {
                userId: userId,
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.apartmentService.getApartmentBlockUnitByUserId(getApprovedUserParam).subscribe((res) => {
                this.unit = res[0];
                this.apartmentBlockUnitId = this.unit.apartmentBlockUnitId;
                this.vehicleService.getVehicleByVehicleId(this.apartmentBlockUnitId).subscribe((res) => {
                    this.vehicle = res[0] || {};
                    this.isUserDataLoaded = true;
                });
            });
        }, error => {
            console.log(error);
        });
    }
    getApartmentUnit(userId) {
        let getAllApartmentParam = {
            userId: userId
        };
        this.apartmentService.getAllApartmentBlockUnitUsersByUserId(getAllApartmentParam).subscribe((unit) => {
            this.unitListData = unit;
            console.log('res', unit);
            underscore__WEBPACK_IMPORTED_MODULE_11__["each"](this.unitListData, item => {
                let getBlockUnitId = {
                    apartmentBlockUnitId: item.apartmentBlockUnitId
                };
                this.apartmentService.getApartmentBlockUnitById(getBlockUnitId).subscribe((data) => {
                    this.unitNameList.push(data[0]);
                    this.isUserDataLoaded = true;
                }, error => {
                });
            });
        }, error => {
        });
    }
    ngOnInit() {
        this.user = {};
        this.unit = {};
        this.vehicle = {};
        if (this.route.params['value'].id != undefined) {
            this.isSeperatePage = true;
            let petParams = {
                LookupTypeId: 85
            };
            this.lookupService.getLookupValueByLookupTypeId(petParams).subscribe((res) => {
                this.petTypeList = res;
            });
            this.getUserDetails(this.route.params['value'].id);
            this.getApartmentUnit(this.route.params['value'].id);
        }
        let petParams = {
            LookupTypeId: 85
        };
        this.lookupService.getLookupValueByLookupTypeId(petParams).subscribe((res) => {
            this.petTypeList = res;
        });
        // delete user
        this.sharedService.unitlistdeleteindexcast.subscribe(index => {
            if (index != null) {
                var params = {
                    userId: index,
                    updateUserId: parseInt(this.cookieService.get('userId'))
                };
                this.isUserDataLoaded = false;
                this.userService.deleteUserById(params).subscribe((res) => {
                    this.isUserDataLoaded = true;
                    this.sharedService.setUnitListDeleteIndex(null);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
    ngOnChanges(changes) {
        //user details
        if (this.selectedTab != -1) {
            this.isUserDataLoaded = false;
            this.getUserDetails(this.selectedTab);
            this.getApartmentUnit(this.selectedTab);
        }
        let params = {
            LookupTypeId: 2
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.vehicleTypeData = res;
        }, error => {
        });
        let getFamilyParam = {
            apartmentBlockUnitUserId: this.selectedTab
        };
        this.userService.getUserFamilyMembersByUserId(getFamilyParam).subscribe((res) => {
            this.familyDataList = res.filter(item => { return item.isActive; });
            ;
        });
        let getOutOfCondoParams = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "ApartmentBlockUnitUserId": this.apartmentBlockUnitId
        };
        this.apartmentService.getOutofCondobyApartmentblockunituser(getOutOfCondoParams).subscribe((unit) => {
            //   this.historyListData = unit.filter(data => {
            //     data.outFrom = moment(data.outFrom).format('MM/DD/YYYY');
            //   data.outTo = moment(data.outTo).format('MM/DD/YYYY');
            //   data.startDate = moment(data.outFrom).format('MM/DD/YYYY');
            //   data.expiryDate = moment(data.outTo).format('MM/DD/YYYY');
            //   return data.isActive;
            // })
            // let length = this.historyListData.length - 1;
            //       this.data = this.historyListData[length];
            //       this.isDataLoaded = true;
        }, error => {
        });
    }
};
ApprovedUserDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_7__["VehicleService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] },
    { type: _api_controllers_Pet__WEBPACK_IMPORTED_MODULE_12__["PetService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], ApprovedUserDetailsComponent.prototype, "selectedTab", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ApprovedUserDetailsComponent.prototype, "outputParams", void 0);
ApprovedUserDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-approved-user-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./approved-user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./approved-user-details.component.scss */ "./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_7__["VehicleService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"],
        _api_controllers_Pet__WEBPACK_IMPORTED_MODULE_12__["PetService"]])
], ApprovedUserDetailsComponent);



/***/ }),

/***/ "./src/app/ams/unit-users/components/approved/approved.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/approved/approved.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".approved-user-wrapper .card.users-list {\n  width: 100%;\n  transition: all 0.15s ease;\n}\n@media (min-width: 991px) {\n  .approved-user-wrapper .card.users-list.show {\n    width: 50%;\n    transition: all 0.15s ease;\n  }\n}\n.approved-user-wrapper .card .card-header {\n  border-bottom: none !important;\n}\n.approved-user-wrapper .card .card-body.users > li {\n  border: none;\n  border-top: 1px solid #eaeaea;\n  padding: 14px 20px;\n  border-radius: 0 !important;\n  cursor: pointer;\n}\n.approved-user-wrapper .card .card-body.users > li h5 {\n  font-size: 1.6rem;\n  padding: 0 0 4px 0;\n  color: #3f51b5;\n  font-weight: 600;\n}\n.approved-user-wrapper .card .card-body.users > li .list li {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  padding: 5px 0 0 0;\n  border: none;\n  background-color: transparent;\n  color: #8391a1;\n}\n.approved-user-wrapper .card .card-body.users > li .list li span:first-child {\n  color: #373946;\n  font-size: 16px;\n}\n.approved-user-wrapper .card .card-body.users > li .list li:hover {\n  background-color: transparent;\n}\n.approved-user-wrapper .card .card-body.users > li:hover {\n  background-color: #f9f9f9;\n  transition: all 0.15s ease;\n}\n.approved-user-wrapper .card .card-body.users > li:hover h5 {\n  color: #3f51b5;\n}\n.approved-user-wrapper .card .card-body.users > li.active {\n  background-color: #ffffff;\n}\n.approved-user-wrapper .card .card-body.users > li.active:before {\n  content: \"\";\n  width: 4px;\n  height: 100% !important;\n  background-color: #3f51b5;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL2FwcHJvdmVkL2FwcHJvdmVkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvYW1zL3VuaXQtdXNlcnMvY29tcG9uZW50cy9hcHByb3ZlZC9hcHByb3ZlZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDQyxXQUFBO0VDb0NGLDBCRG5DRTtBRUhIO0FGS0k7RUFERDtJQUVFLFVBQUE7SUNnQ0osMEJEL0JJO0VFQUg7QUFDRjtBRkdFO0VBQ0MsOEJBQUE7QUVESDtBRktJO0VBQ0MsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUNqQkosMkJBQUE7RURtQkksZUFBQTtBRURMO0FGRUs7RUdtREgsaUJBQUE7RUhqRFEsa0JBQUE7RUFDSCxjSStCRTtFSjlCRixnQkFBQTtBRUFQO0FGR1U7RUcyQlIsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGlCQUFBO0VIekNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCSWlGRTtFSmhGRixjSTdCTztBRmdDYjtBRkZNO0VBRUMsY0lvREk7RUpuREosZUFBQTtBRUdQO0FGRE07RUFDQyw2Qkl5RUM7QUZ0RVI7QUZDUTtFQUNDLHlCSTZERTtFSHRFViwwQkRVUTtBRUdUO0FGRlM7RUFDRixjSU1FO0FGRlQ7QUZEUTtFQUNDLHlCSTJERDtBRnhEUjtBRkZNO0VBQ0MsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QklxR0Q7RUpwR0MseUJJSEU7RUpJRixrQkk3REY7RUo4REUsTUFBQTtFQUNBLE9BQUE7QUVJUCIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvYXBwcm92ZWQvYXBwcm92ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciB7XG5cdC5jYXJkIHtcblx0XHQmLnVzZXJzLWxpc3R7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xuXHRcdFx0Ji5zaG93IHtcblx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XG5cdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQuY2FyZC1oZWFkZXIge1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuXHRcdH1cblx0XHQuY2FyZC1ib2R5IHtcblx0XHRcdCYudXNlcnMge1xuXHRcdFx0XHQ+IGxpIHtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICRncmV5LTQ1MDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNHB4IDIwcHg7XG5cdFx0XHRcdFx0QGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwKTtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0aDUge1xuXHRcdFx0XHQgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XG5cdFx0XHRcdCAgICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcblx0XHRcdFx0XHQgIGNvbG9yOiAkbS1ibHVlO1xuXHRcdFx0XHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIC5saXN0IHtcblx0XHRcdFx0ICAgICAgbGkge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgZGVzcC1yZWd1bGFyO1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHggMCAwIDA7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnM7XG5cdFx0XHRcdFx0XHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHRcdFx0XHRzcGFuOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdFx0Ly8gQGluY2x1ZGUgZGVzcC1tZWRpdW07XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAkZ3JleS04MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgICAgIH1cblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgICY6aG92ZXIge1xuXHRcdFx0XHQgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS0xNTA7XG5cdFx0XHRcdCAgICBcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xuXHRcdFx0XHQgICAgXHRoNSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAkbS1ibHVlO1xuXHRcdFx0XHQgICAgXHR9XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICAmLmFjdGl2ZSB7XG5cdFx0XHRcdCAgICBcdGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDRweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAkZnVsbDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJG0tYmx1ZTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHRcdFx0XHRcdHRvcDowO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIGRlc2VsZWN0ICgpIHtcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1vLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIGZsaXAoJGRpcmVjdGlvbikge1xuICB0cmFuc2Zvcm0gOiByb3RhdGVZKCRkaXJlY3Rpb24pO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIi5hcHByb3ZlZC11c2VyLXdyYXBwZXIgLmNhcmQudXNlcnMtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xuICAuYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkLnVzZXJzLWxpc3Quc2hvdyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIH1cbn1cbi5hcHByb3ZlZC11c2VyLXdyYXBwZXIgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSBoNSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gIGNvbG9yOiAjM2Y1MWI1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkgLmxpc3QgbGkge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nOiA1cHggMCAwIDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjODM5MWExO1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkgLmxpc3QgbGkgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiAjMzczOTQ2O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSAubGlzdCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbn1cbi5hcHByb3ZlZC11c2VyLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpOmhvdmVyIGg1IHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4uYXBwcm92ZWQtdXNlci13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmFwcHJvdmVkLXVzZXItd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkuYWN0aXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtYmFzZS0wMjoxMTtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIl19 */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/approved/approved.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/approved/approved.component.ts ***!
  \**************************************************************************/
/*! exports provided: ApprovedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedComponent", function() { return ApprovedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let ApprovedComponent = class ApprovedComponent {
    constructor(router, route, userService, apartmentService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.totalUsers = 0;
        this.unitData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.selectedTab = -1;
        this.isUserDataLoaded = false;
        this.isProfile = false;
        this.towerList = [];
    }
    showApprovedUserDetails(user) {
        if (!this.isMobileView()) {
            if (this.selectedTab != user.userId) {
                this.selectedTab = user.userId;
            }
            else {
                this.selectedTab = -1;
            }
        }
        else {
            this.router.navigate(['ams/approved-user-details/' + { id: user.userId, unitUserId: user.apartmentBlockUnitUserId }]);
        }
        this.viewUserId = user.userId;
        this.unitUserId = user.apartmentBlockUnitUserId;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
    }
    isTabSelected() {
        return this.selectedTab != -1 ? 'show' : '';
    }
    isMobileView() {
        return window.innerWidth <= 991;
    }
    getBlockNo(data, index) {
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.approvedUsersData[index].blockNo = data[0].apartmentBlockNumber;
            return data[0].apartmentBlockNumber;
        }
    }
    getBlockUnitNo(data, index) {
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.approvedUsersData[index].unitNo = data[0].apartmentBlockUnitNumber;
            return data[0].apartmentBlockUnitNumber;
        }
    }
    isActive(num) {
        return this.selectedTab == num ? 'active' : '';
    }
    getParams(event) {
        this.isProfile = event;
    }
    showUserInfo(event) {
        this.isProfile = false;
        setTimeout(() => {
            this.isProfile = event;
        }, 10);
        setTimeout(() => {
            var elem = document.querySelector('.user-info-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
                top: scrollTo,
                behavior: 'smooth'
            });
        }, 100);
        this.router.navigate(['ams/unit&users/approved/basic', { id: this.viewUserId, unitUserID: this.unitUserId }]);
    }
    ngOnInit() {
        let approvedUsersParam = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.userService.getallapproveduserprofilesbyapartmentid2(approvedUsersParam).subscribe((res) => {
            this.approvedUsersData = res.filter(item => {
                return item.userInfo.length != 0 && item.apartmentBlockUnitId != null;
            });
            this.totalItems = this.approvedUsersData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isUserDataLoaded = true;
        }, error => {
            console.log(error);
        });
        let getTowerParam = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        //get apartment blocks
        this.apartmentService.getApartmentBlockByApartmentId(getTowerParam).subscribe((res) => {
            this.towerList = res;
        });
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe((res) => {
            this.totalUnits = res.length;
        }, error => {
            console.log(error);
        });
    }
};
ApprovedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
ApprovedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-approved',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./approved.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/approved/approved.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./approved.component.scss */ "./src/app/ams/unit-users/components/approved/approved.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], ApprovedComponent);



/***/ }),

/***/ "./src/app/ams/unit-users/components/broadcast/broadcast.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/broadcast/broadcast.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvYnJvYWRjYXN0L2Jyb2FkY2FzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/broadcast/broadcast.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/broadcast/broadcast.component.ts ***!
  \****************************************************************************/
/*! exports provided: BroadcastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastComponent", function() { return BroadcastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BroadcastComponent = class BroadcastComponent {
    constructor() { }
    ngOnInit() {
    }
};
BroadcastComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./broadcast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/broadcast/broadcast.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./broadcast.component.scss */ "./src/app/ams/unit-users/components/broadcast/broadcast.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BroadcastComponent);



/***/ }),

/***/ "./src/app/ams/unit-users/components/de-activated/de-activated.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/de-activated/de-activated.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvZGUtYWN0aXZhdGVkL2RlLWFjdGl2YXRlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/de-activated/de-activated.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/de-activated/de-activated.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DeActivatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeActivatedComponent", function() { return DeActivatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");










let DeActivatedComponent = class DeActivatedComponent {
    constructor(injector, dialog, userService, sharedService, cookieService, router) {
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.router = router;
        this.deActivatedData = "";
        this.ItemUserStartIndex = 0;
        this.itemUserLimit = 20;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.selectAllDeactivatedUser = false;
        this.isUserSelected = false;
        this.isBulkActivate = false;
        this.isUserDataLoaded = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
    }
    getSelectedDeActivatedUser(unit) {
        var length = 0;
        underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.deActivatedListData, (item) => {
            if (item.checked) {
                length++;
            }
        });
        if (length > 0) {
            this.isUserSelected = true;
        }
        else {
            this.isUserSelected = false;
        }
        if (length > 1) {
            this.isBulkActivate = true;
            this.isUserSelected = false;
        }
        else {
            this.isBulkActivate = false;
        }
        if (length == 0) {
            this.selectAllDeactivatedUser = false;
        }
        if (length == this.deActivatedListData.length) {
            this.selectAllDeactivatedUser = true;
        }
    }
    getAllDeactivatedUser() {
        if (this.selectAllDeactivatedUser) {
            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.deActivatedListData, (item) => {
                item.checked = true;
            });
            this.isBulkActivate = true;
        }
        else {
            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.deActivatedListData, (item) => {
                item.checked = false;
            });
            this.isBulkActivate = false;
        }
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    sortUnitData(type) {
        this.unitFieldType = type;
        this.unitOrder = !this.unitOrder;
    }
    getFieldOrderBy(type) {
        if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
        }
        else
            return '';
    }
    getUserIndexParams(event) {
        this.ItemUserStartIndex = event.ItemUserStartIndex;
        this.ItemUserEndIndex = event.ItemUserEndIndex;
    }
    getBlockNo(data, index) {
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.deActivatedListData[index].blockNo = data[0].apartmentBlockNumber;
            return data[0].apartmentBlockNumber;
        }
    }
    getBlockUnitNo(data, index) {
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.deActivatedListData[index].unitNo = data[0].apartmentBlockUnitNumber;
            return data[0].apartmentBlockUnitNumber;
        }
    }
    getNotes(data) {
        if (data === undefined || data.length == 0)
            return '';
        else
            return data[0].notes;
    }
    getUserRole(role, index) {
        if (role === undefined || role.length == 0) {
            return '';
        }
        else {
            this.deActivatedListData[index].roleName = role[0].roleName;
            return role[0].roleName;
        }
    }
    getUserRoleInfo(role) {
        if (role.userRole === undefined || role.userRole.length == 0) {
            return '';
        }
        else {
            return role.userRole[0].roleName;
        }
    }
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    showUserInfo(index) {
        var userId = this.deActivatedListData[index].id;
        var blockData = this.deActivatedListData[index].apartmentBlockUnit;
        var userRole = this.deActivatedListData[index].userRole;
        this.userService.getUserById(userId).subscribe((res) => {
            var userData = res[0];
            if (blockData === undefined || blockData.length == 0) {
                userData.blockNo = "Not Available";
                userData.unitNo = "";
            }
            else {
                userData.blockNo = blockData[0].apartmentBlockNumber;
                userData.unitNo = blockData[0].apartmentBlockUnitNumber;
            }
            if (userRole === undefined || userRole.length == 0) {
                userData.roleName = "Not Available";
            }
            else {
                userData.roleName = userRole[0].roleName;
            }
            this.dialog.open(this.viewDeactivatedUserRef, {
                panelClass: 'material',
                disableClose: true,
                data: userData
            });
        });
    }
    activateUser() {
        this.isUserDataLoaded = false;
        underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.deActivatedListData, (item, index) => {
            if (item.checked) {
                this.userService.getUserById(item.id).subscribe((res) => {
                    var user = res[0];
                    user.isActive = true;
                    this.userService.updateUser(user).subscribe((res) => {
                        this.deActivatedListData.splice(index, 1);
                        this.totalUserItems = this.deActivatedListData.length;
                        this.isUserDataLoaded = true;
                    });
                });
            }
        });
    }
    onGlSearchFilter() {
        if (this.deActivatedData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.deActivatedData;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(item => {
                if (item.datafield != 'Actions') {
                    this.datagrid.addfilter(item.datafield, filtergroup, true);
                }
            });
            this.datagrid.applyfilters();
        }
        else {
            this.datagrid.clearfilters();
        }
    }
    onEditDeActivateResident(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let Id = dataRecord.Id;
        this.router.navigateByUrl('/ams/unit&users/edit-user/' + Id);
    }
    onShowUserInfoView(detail) {
        this.showUserInfo(detail.rowId);
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Name',
                datafield: 'firstName',
                width: 100,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Phone',
                datafield: 'emailId',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Email',
                datafield: 'staffCategory_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Block No',
                datafield: 'jobTitleId',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Unit No',
                datafield: 'lastttt',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"> <a href="javascript:void(0)" class="mr-2" onClick="showUserInfo(' + row + ')"><i-feather class="icon view" name="eye"></i-feather></a> <a href="javascript:void(0)" class="mr-2" onClick="editDeActivateResident(' + row + ')" <i class="fa fa-pencil icon edit" aria-hidden="true"></i> </a></div>';
                },
                renderer: columnrenderer
            }];
        this.userService.getAllUnApprovedUsers().subscribe((res) => {
            var deActivatedListData = res;
            console.log(res);
            //filter active true items
            this.deActivatedListData = deActivatedListData.filter(data => {
                return !data.active;
            });
            this.gridSourceData = {
                localdata: this.deActivatedListData,
                datatype: "array"
            };
            this.deActivatedListData = new jqx.dataAdapter(this.gridSourceData);
            console.log("deActivatedListData", this.deActivatedListData);
            this.totalUserItems = this.deActivatedListData.length;
            if (this.totalUserItems > this.itemUserLimit) {
                this.ItemUserEndIndex = this.itemUserLimit;
            }
            else {
                this.ItemUserEndIndex = this.totalUserItems;
            }
            this.isUserDataLoaded = true;
        }, error => {
            console.log(error);
        });
    }
};
DeActivatedComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__["jqxGridComponent"])
], DeActivatedComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewDeactivatedUserRef", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], DeActivatedComponent.prototype, "viewDeactivatedUserRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditDeActivateResident', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], DeActivatedComponent.prototype, "onEditDeActivateResident", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onShowUserInfoView', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], DeActivatedComponent.prototype, "onShowUserInfoView", null);
DeActivatedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-de-activated',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./de-activated.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/de-activated/de-activated.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./de-activated.component.scss */ "./src/app/ams/unit-users/components/de-activated/de-activated.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], DeActivatedComponent);

function editDeActivateResident(row) {
    var event = new CustomEvent('onEditDeActivateResident', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editDeActivateResident = editDeActivateResident;
function showUserInfo(row) {
    var event = new CustomEvent('onShowUserInfoView', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showUserInfo = showUserInfo;


/***/ }),

/***/ "./src/app/ams/unit-users/components/signuprequest/signuprequest.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/signuprequest/signuprequest.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".unapproved-wrapper .customize-email {\n  margin: 0 0 25px 0;\n}\n.unapproved-wrapper .customize-email p {\n  font-size: 1.6rem;\n  padding: 0 0 15px 0 !important;\n  color: #585858;\n}\n.unapproved-wrapper .card-body p.info {\n  padding: 10px 0 0 0 !important;\n  font-size: 1.4rem;\n  color: #373946;\n}\n.unapproved-wrapper .user-info-card {\n  margin: 30px 0 0 0;\n}\ntable {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL3NpZ251cHJlcXVlc3Qvc2lnbnVwcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3VuaXQtdXNlcnMvY29tcG9uZW50cy9zaWdudXByZXF1ZXN0L3NpZ251cHJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ0Msa0JBQUE7QUNKRjtBREtFO0VFdUVBLGlCQUFBO0VGckVPLDhCQUFBO0VBQ0EsY0d1RkU7QUYxRlg7QURPRTtFQUNPLDhCQUFBO0VFK0RQLGlCQUFBO0VGN0RVLGNHOEVEO0FGbkZYO0FEUUM7RUFDQyxrQkFBQTtBQ05GO0FEVUE7RUFDQyxXQUFBO0FDUEQ7QURVRTtFQUNELGVBQUE7RUFDQSxXQUFBO0FDUEQiLCJmaWxlIjoic3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL3NpZ251cHJlcXVlc3Qvc2lnbnVwcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4udW5hcHByb3ZlZC13cmFwcGVyIHtcblx0LmN1c3RvbWl6ZS1lbWFpbCB7XG5cdFx0bWFyZ2luOiAwIDAgMjVweCAwO1xuXHRcdHAge1xuICAgICAgICBcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcbiAgICAgICAgXHRwYWRkaW5nOiAwIDAgMTVweCAwICFpbXBvcnRhbnQ7XG4gICAgICAgIFx0Y29sb3I6ICRncmV5LTcwMDtcblx0XHR9XG5cdH1cblx0LmNhcmQtYm9keSB7XG5cdFx0cC5pbmZvIHtcbiAgICAgICAgXHRwYWRkaW5nOiAxMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleS04MDA7XG4gICAgICBcdH1cblx0fVxuXHQudXNlci1pbmZvLWNhcmQge1xuXHRcdG1hcmdpbjogMzBweCAwIDAgMDtcblx0XHRcblx0fVxufVxudGFibGUge1xuXHR3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR3aWR0aDogMTAwJTtcbiAgfSIsIi51bmFwcHJvdmVkLXdyYXBwZXIgLmN1c3RvbWl6ZS1lbWFpbCB7XG4gIG1hcmdpbjogMCAwIDI1cHggMDtcbn1cbi51bmFwcHJvdmVkLXdyYXBwZXIgLmN1c3RvbWl6ZS1lbWFpbCBwIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1ODU4NTg7XG59XG4udW5hcHByb3ZlZC13cmFwcGVyIC5jYXJkLWJvZHkgcC5pbmZvIHtcbiAgcGFkZGluZzogMTBweCAwIDAgMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4udW5hcHByb3ZlZC13cmFwcGVyIC51c2VyLWluZm8tY2FyZCB7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtYmFzZS0wMjoxMTtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIl19 */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/signuprequest/signuprequest.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/signuprequest/signuprequest.component.ts ***!
  \************************************************************************************/
/*! exports provided: SignuprequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignuprequestComponent", function() { return SignuprequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/constants.service */ "./src/app/shared/services/constants.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let SignuprequestComponent = class SignuprequestComponent {
    constructor(injector, dialog, router, userService, constantsService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.router = router;
        this.userService = userService;
        this.constantsService = constantsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.unitData = "";
        this.isUserDataLoaded = false;
        this.isProfile = false;
        this.isMobile = false;
        this.isUserSelected = false;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
    }
    getBookedDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY");
    }
    onGlSearchFilter() {
        if (this.unitData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.unitData;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(item => {
                if (item.datafield != 'Actions') {
                    this.datagrid.addfilter(item.datafield, filtergroup, true);
                }
            });
            this.datagrid.applyfilters();
        }
        else {
            this.datagrid.clearfilters();
        }
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'selfSignupUser');
    }
    viewUserInfo(id) {
        this.isProfile = false;
        setTimeout(() => {
            this.isProfile = true;
        }, 10);
        setTimeout(() => {
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
    showConfirmModal(data) {
        this.modalService.showConfirmModal(data.signupUserRequestId);
        var params = {
            signupUserId: data.signupUserRequestId,
            apartmentId: data.apartmentId
        };
        this.userService.updateSignupUserRequestByApartmentId(params).subscribe((res) => {
            if (res.message) {
                this.sharedService.setAlertMessage("Signup deleted successfully.");
                this.router.navigate(['ams/unit&users/usersignuprequest', this.viewUserId]);
            }
        }, error => {
            console.log(error);
        });
    }
    onEditUser(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        dataRecord.mode = true;
        console.log(dataRecord);
        this.modalService.showSignUpdetailsModal(dataRecord);
    }
    onUserDelete(detail) {
        this.modalService.showConfirmModal(detail.rowId);
    }
    onViewUser(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        dataRecord.mode = false;
        this.modalService.showSignUpdetailsModal(dataRecord);
    }
    EditUserInfo(data) {
        data.mode = true;
        this.modalService.showSignUpdetailsModal(data);
    }
    viewSignup(data) {
        data.mode = false;
        this.modalService.showSignUpdetailsModal(data);
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Request ID',
                datafield: 'signupUserRequestId',
                width: 100,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Name',
                datafield: 'fullName',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Tower Unit',
                datafield: 'tower_unit',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Phone Number',
                datafield: 'phoneNumber',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Email',
                datafield: 'emailId',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Requested On',
                datafield: 'insertedOn',
                width: 200,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_10__(value).format(this.constantsService.dateFormat) + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="viewUserEvent(' + row + ')"><i class="fa fa-eye icon view" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }
        ];
        this.getSignUpUserList();
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                let dataRecord = this.datagrid.getrowdata(id);
                let signupUserId = dataRecord.signupUserRequestId;
                let params = {
                    signupUserId: signupUserId,
                    apartmentId: parseInt(this.cookieService.get('apartmentId'))
                };
                this.userService.updateSignupUserRequestByApartmentId(params).subscribe((res) => {
                    setTimeout(() => {
                        this.datagrid.deleterow(id);
                        this.totalItems = this.unitListData.length;
                        this.sharedService.setAlertMessage("Signup deleted successfully.");
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
                }, error => {
                    console.log(error);
                });
            }
        });
        this.sharedService.refreshSignUpUser.subscribe(resp => {
            this.getSignUpUserList();
        });
    }
    getSignUpUserList() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.userService.getAllSignupUserRequestByApartmentId(params).subscribe((res) => {
            var unitListData = res.filter(key => {
                return key.isActive;
            });
            unitListData.reverse();
            unitListData.filter(key => {
                key['tower_unit'] = key.signupSubNotes[0].blockUnit + ' & ' + key.signupSubNotes[0].unit;
                key['fullName'] = key.firstName + '  ' + key.lastName;
            });
            this.gridSourceData = {
                localdata: unitListData,
                datatype: "array"
            };
            this.unitListData = new jqx.dataAdapter(this.gridSourceData);
            this.totalItems = unitListData.length;
            this.isUserDataLoaded = true;
        }, error => {
            console.log(error);
        });
    }
};
SignuprequestComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_7__["ConstantsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], SignuprequestComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditUser', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], SignuprequestComponent.prototype, "onEditUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onUserDelete', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], SignuprequestComponent.prototype, "onUserDelete", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onViewUser', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], SignuprequestComponent.prototype, "onViewUser", null);
SignuprequestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signuprequest',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signuprequest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/signuprequest/signuprequest.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signuprequest.component.scss */ "./src/app/ams/unit-users/components/signuprequest/signuprequest.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_7__["ConstantsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], SignuprequestComponent);

function editUserEvent(row) {
    var event = new CustomEvent('onEditUser', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editUserEvent = editUserEvent;
function viewUserEvent(row) {
    var event = new CustomEvent('onViewUser', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.viewUserEvent = viewUserEvent;
function showConfirmDeleteEvent(row) {
    var event = new CustomEvent('onUserDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEvent = showConfirmDeleteEvent;


/***/ }),

/***/ "./src/app/ams/unit-users/components/statistics/statistics.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/statistics/statistics.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/statistics/statistics.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/statistics/statistics.component.ts ***!
  \******************************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StatisticsComponent = class StatisticsComponent {
    constructor() { }
    ngOnInit() {
    }
};
StatisticsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/statistics/statistics.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./statistics.component.scss */ "./src/app/ams/unit-users/components/statistics/statistics.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StatisticsComponent);



/***/ }),

/***/ "./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvdXNlci1yZXBvcnRzL3VzZXItcmVwb3J0LWRhdGEvdXNlci1yZXBvcnQtZGF0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UserReportDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportDataComponent", function() { return UserReportDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let UserReportDataComponent = class UserReportDataComponent {
    constructor(router, route, userService, apartmentService, lookupService, sharedService, cookieService) {
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
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        // this.itemLimit = event.itemLimit;
    }
    sortUnitData(type) {
        this.unitFieldType = type;
        this.unitOrder = !this.unitOrder;
    }
    getFieldOrderBy(type) {
        if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
        }
        else
            return '';
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isItemsAvailable() {
        return this.totalItems > 0 ? true : false;
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    isListOfResidents() {
        return this.pageName == "List of Residents";
    }
    isListOfApprovedUsers() {
        return this.pageName == "List of Approved Users";
    }
    isListOfDeactivatedUsers() {
        return this.pageName == "List of De-activated Users";
    }
    isListOfResidentsVehicleInfo() {
        return this.pageName == "List of Residents Vehicle Info";
    }
    isListOfExpiringRental() {
        return this.pageName == "List of Expiring Rental  Lease Agreements";
    }
    isListOfUsersWithPets() {
        return this.pageName == "List of Users with Pets";
    }
    isListOfUnits() {
        return this.pageName == "List of Units";
    }
    isListOfBlocks() {
        return this.pageName == "List of Blocks";
    }
    isListOfOwners() {
        return this.pageName == "List of Owners";
    }
    isListOfTenants() {
        return this.pageName == "List of Tenants";
    }
    isListOfAdmins() {
        return this.pageName == "List of Admins";
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
    }
    getBlockDetails() {
        this.isDataLoaded = false;
        var blockId;
        if (this.blockId == "") {
            blockId = null;
            this.blockNo = "All Blocks";
        }
        else {
            blockId = this.blockId;
            var blockDetails = this.unitBlocksData.filter(item => {
                return item.apartmentBlockId == blockId;
            });
            this.blockNo = blockDetails[0].apartmentBlockNumber;
        }
        var details = {
            ApartmentID: parseInt(this.cookieService.get('apartmentId')),
            ApartmentBlockID: blockId
        };
        if (this.isListOfResidents()) {
            this.userService.getReportUnitUserResidentsbyApartmentIdBlockId(details).subscribe((res) => {
                this.userReportDataList = res;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfApprovedUsers()) {
            this.userService.getReportApprovedUnitUserbyApartmentIdBlockId(details).subscribe((res) => {
                this.userReportDataList = res;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfDeactivatedUsers()) {
            this.userService.getReportDeActivatedUnitUserbyApartmentIdBlockId(details).subscribe((res) => {
                this.userReportDataList = res;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfResidentsVehicleInfo()) {
            this.userService.getReportUnitUserResidentsVehicleInfobyApartmentIdBlockId(details).subscribe((res) => {
                this.userReportDataList = res;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfExpiringRental()) {
            this.userService.getReportExpiredRentLeaseAgreemtbyApartmentIdBlockId(details).subscribe((res) => {
                this.userReportDataList = res;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfUsersWithPets()) {
            this.userService.getReportUnitUserPetInfobyApartmentIdBlockId(details).subscribe((res) => {
                this.userReportDataList = res;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfUnits()) {
            let params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe((res) => {
                console.log("List of Units ", res);
                this.userReportDataList = res;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfBlocks()) {
            let params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
                this.userReportDataList = res;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfTenants()) {
            let params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                roleId: 2
            };
            this.userService.getApartmentUsersByRoleId(params).subscribe((res) => {
                this.userReportDataList = res;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfOwners()) {
            let params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                roleId: 4
            };
            this.userService.getApartmentUsersByRoleId(params).subscribe((res) => {
                this.userReportDataList = res;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfAdmins()) {
            let params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                roleId: 1
            };
            this.userService.getApartmentUsersByRoleId(params).subscribe((res) => {
                this.userReportDataList = res;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
    }
    showItems() {
        this.totalItems = this.userReportDataList.length;
        console.log("total items ", this.totalItems);
        if (this.totalItems > this.itemLimit) {
            this.ItemEndIndex = this.itemLimit;
            console.log("Itemendindex if", this.ItemEndIndex);
        }
        else {
            this.ItemEndIndex = this.totalItems;
            console.log("Itemendindex ", this.ItemEndIndex);
        }
    }
    ngOnInit() {
        this.pageName = this.route.params['value'].name;
        let unitBlockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(unitBlockParams).subscribe((res) => {
            this.unitBlocksData = res;
        });
        let params = {
            LookupTypeId: 87
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            var data = res.filter(item => {
                return item.lookupValueId == this.route.params['value'].id;
            });
            this.pageName = data[0].lookupValueName.replace('/', '');
            this.pageDesp = data[0].description;
        });
        this.getBlockDetails();
    }
};
UserReportDataComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
UserReportDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-report-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-report-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-report-data.component.scss */ "./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], UserReportDataComponent);



/***/ }),

/***/ "./src/app/ams/unit-users/components/user-reports/user-reports.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/user-reports/user-reports.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL2NvbXBvbmVudHMvdXNlci1yZXBvcnRzL3VzZXItcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/user-reports/user-reports.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/user-reports/user-reports.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportsComponent", function() { return UserReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");




let UserReportsComponent = class UserReportsComponent {
    constructor(lookupService, cookieService) {
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
    }
    formatName(name) {
        return name.replace(/^\s+|\s+$/g, "");
    }
    ngOnInit() {
        let details = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 87,
            MenuName: 'UnitUser'
        };
        this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe((res) => {
            this.reportDataList = res;
            this.isDataLoaded = true;
        });
    }
    getReportRedirectPath(path) {
        return path.replace('/', '');
    }
};
UserReportsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
UserReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/user-reports/user-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-reports.component.scss */ "./src/app/ams/unit-users/components/user-reports/user-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], UserReportsComponent);



/***/ }),

/***/ "./src/app/ams/unit-users/unit-users-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/ams/unit-users/unit-users-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: routes, UnitUsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitUsersRoutingModule", function() { return UnitUsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-users/add-users.component */ "./src/app/ams/unit-users/components/add-users/add-users.component.ts");
/* harmony import */ var _components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/unapproved/unapproved.component */ "./src/app/ams/unit-users/components/unapproved/unapproved.component.ts");
/* harmony import */ var _components_approved_approved_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/approved/approved.component */ "./src/app/ams/unit-users/components/approved/approved.component.ts");
/* harmony import */ var _components_de_activated_de_activated_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/de-activated/de-activated.component */ "./src/app/ams/unit-users/components/de-activated/de-activated.component.ts");
/* harmony import */ var _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-reports/user-reports.component */ "./src/app/ams/unit-users/components/user-reports/user-reports.component.ts");
/* harmony import */ var _components_user_reports_user_report_data_user_report_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-reports/user-report-data/user-report-data.component */ "./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.ts");
/* harmony import */ var _user_my_profile_components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../user/my-profile/components/profile-vehicles/profile-vehicles.component */ "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.ts");
/* harmony import */ var _user_my_profile_components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../user/my-profile/components/profile-family-members/profile-family-members.component */ "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.ts");
/* harmony import */ var _user_my_profile_components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../user/my-profile/components/profile-pet/profile-pet.component */ "./src/app/user/my-profile/components/profile-pet/profile-pet.component.ts");
/* harmony import */ var _user_my_profile_components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../user/my-profile/components/property-manager/property-manager.component */ "./src/app/user/my-profile/components/property-manager/property-manager.component.ts");
/* harmony import */ var _user_my_profile_components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../user/my-profile/components/profile-unit-details/profile-unit-details.component */ "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.ts");
/* harmony import */ var _user_my_profile_components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component */ "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.ts");
/* harmony import */ var _user_my_profile_components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../user/my-profile/components/profile-lease-info/profile-lease-info.component */ "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.ts");
/* harmony import */ var _user_my_profile_components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../user/my-profile/components/profile-interest-group/profile-interest-group.component */ "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.ts");
/* harmony import */ var _user_my_profile_components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../user/my-profile/components/profile-basic/profile-basic.component */ "./src/app/user/my-profile/components/profile-basic/profile-basic.component.ts");
/* harmony import */ var _user_my_profile_components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../user/my-profile/components/profile-user-absence/profile-user-absence.component */ "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.ts");
/* harmony import */ var _components_signuprequest_signuprequest_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/signuprequest/signuprequest.component */ "./src/app/ams/unit-users/components/signuprequest/signuprequest.component.ts");
/* harmony import */ var src_app_user_my_profile_components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component */ "./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.ts");





















const routes = [
    { path: '', redirectTo: 'unapproved', pathMatch: 'full' },
    { path: 'usersignuprequest', component: _components_signuprequest_signuprequest_component__WEBPACK_IMPORTED_MODULE_19__["SignuprequestComponent"] },
    { path: 'unapproved', component: _components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_4__["UnapprovedComponent"],
        children: [
            { path: 'basic/:id', component: _user_my_profile_components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_17__["ProfileBasicComponent"] },
            { path: 'unit/:id', component: _user_my_profile_components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_13__["ProfileUnitDetailsComponent"] },
            { path: 'staffs/:id', component: _user_my_profile_components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_14__["ProfileUnitStaffsComponent"] },
            { path: 'vehicles/:id', component: _user_my_profile_components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_9__["ProfileVehiclesComponent"] },
            { path: 'pets/:id', component: _user_my_profile_components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_11__["ProfilePetComponent"] },
            { path: 'propertymanager/:id', component: _user_my_profile_components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_12__["PropertyManagerComponent"] },
            { path: 'propertymanager/create', component: src_app_user_my_profile_components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_20__["PropertyManagerCreateComponent"] },
            { path: 'family/:id', component: _user_my_profile_components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_10__["ProfileFamilyMembersComponent"] },
            { path: 'lease/:id', component: _user_my_profile_components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_15__["ProfileLeaseInfoComponent"] },
            { path: 'interest/:id', component: _user_my_profile_components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_16__["ProfileInterestGroupComponent"] },
            { path: 'absence/:id', component: _user_my_profile_components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_18__["ProfileUserAbsenceComponent"] },
            { path: '**', redirectTo: 'basic', pathMatch: 'full' }
        ]
    },
    { path: 'add-users', component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"] },
    { path: 'edit-user/:id', component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"] },
    { path: 'approved', component: _components_approved_approved_component__WEBPACK_IMPORTED_MODULE_5__["ApprovedComponent"],
        children: [
            { path: 'basic/:id:unitUserId', component: _user_my_profile_components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_17__["ProfileBasicComponent"] },
            { path: 'unit/:id:unitUserId', component: _user_my_profile_components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_13__["ProfileUnitDetailsComponent"] },
            { path: 'staffs/:id:unitUserId', component: _user_my_profile_components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_14__["ProfileUnitStaffsComponent"] },
            { path: 'vehicles/:id:unitUserId', component: _user_my_profile_components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_9__["ProfileVehiclesComponent"] },
            { path: 'pets/:id:unitUserId', component: _user_my_profile_components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_11__["ProfilePetComponent"] },
            { path: 'propertymanager/:id:unitUserId', component: _user_my_profile_components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_12__["PropertyManagerComponent"] },
            { path: 'family/:id:unitUserId', component: _user_my_profile_components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_10__["ProfileFamilyMembersComponent"] },
            { path: 'lease/:id:unitUserId', component: _user_my_profile_components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_15__["ProfileLeaseInfoComponent"] },
            { path: 'interest/:id:unitUserId', component: _user_my_profile_components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_16__["ProfileInterestGroupComponent"] },
            { path: 'absence/:id:unitUserId', component: _user_my_profile_components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_18__["ProfileUserAbsenceComponent"] },
            { path: '**', redirectTo: 'basic', pathMatch: 'full' }
        ]
    },
    { path: 'access-control', component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"] },
    { path: 'broadcast', component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"] },
    { path: 'statistics', component: _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUsersComponent"] },
    { path: 'de-activated', component: _components_de_activated_de_activated_component__WEBPACK_IMPORTED_MODULE_6__["DeActivatedComponent"] },
    { path: 'reports', component: _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_7__["UserReportsComponent"] },
    { path: 'reports/:name/:id', component: _components_user_reports_user_report_data_user_report_data_component__WEBPACK_IMPORTED_MODULE_8__["UserReportDataComponent"] },
    { path: '**', redirectTo: 'unapproved', pathMatch: 'full' },
];
let UnitUsersRoutingModule = class UnitUsersRoutingModule {
};
UnitUsersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UnitUsersRoutingModule);



/***/ }),

/***/ "./src/app/ams/unit-users/unit-users.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ams/unit-users/unit-users.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91bml0LXVzZXJzL3VuaXQtdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/unit-users/unit-users.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ams/unit-users/unit-users.component.ts ***!
  \********************************************************/
/*! exports provided: UnitUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitUsersComponent", function() { return UnitUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UnitUsersComponent = class UnitUsersComponent {
    ngOnInit() {
    }
};
UnitUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unit-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/unit-users.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./unit-users.component.scss */ "./src/app/ams/unit-users/unit-users.component.scss")).default]
    })
], UnitUsersComponent);



/***/ }),

/***/ "./src/app/ams/unit-users/unit-users.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ams/unit-users/unit-users.module.ts ***!
  \*****************************************************/
/*! exports provided: UnitUsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitUsersModule", function() { return UnitUsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _unit_users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unit-users-routing.module */ "./src/app/ams/unit-users/unit-users-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_my_profile_my_profile_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/my-profile/my-profile.module */ "./src/app/user/my-profile/my-profile.module.ts");
/* harmony import */ var _unit_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unit-users.component */ "./src/app/ams/unit-users/unit-users.component.ts");
/* harmony import */ var _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-users/add-users.component */ "./src/app/ams/unit-users/components/add-users/add-users.component.ts");
/* harmony import */ var _components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/unapproved/unapproved.component */ "./src/app/ams/unit-users/components/unapproved/unapproved.component.ts");
/* harmony import */ var _components_approved_approved_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/approved/approved.component */ "./src/app/ams/unit-users/components/approved/approved.component.ts");
/* harmony import */ var _components_access_control_access_control_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/access-control/access-control.component */ "./src/app/ams/unit-users/components/access-control/access-control.component.ts");
/* harmony import */ var _components_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/broadcast/broadcast.component */ "./src/app/ams/unit-users/components/broadcast/broadcast.component.ts");
/* harmony import */ var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/statistics/statistics.component */ "./src/app/ams/unit-users/components/statistics/statistics.component.ts");
/* harmony import */ var _components_de_activated_de_activated_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/de-activated/de-activated.component */ "./src/app/ams/unit-users/components/de-activated/de-activated.component.ts");
/* harmony import */ var _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user-reports/user-reports.component */ "./src/app/ams/unit-users/components/user-reports/user-reports.component.ts");
/* harmony import */ var _components_add_users_add_resident_add_resident_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-users/add-resident/add-resident.component */ "./src/app/ams/unit-users/components/add-users/add-resident/add-resident.component.ts");
/* harmony import */ var _components_approved_user_details_approved_user_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/approved-user-details/approved-user-details.component */ "./src/app/ams/unit-users/components/approved-user-details/approved-user-details.component.ts");
/* harmony import */ var _components_user_reports_user_report_data_user_report_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user-reports/user-report-data/user-report-data.component */ "./src/app/ams/unit-users/components/user-reports/user-report-data/user-report-data.component.ts");
/* harmony import */ var _components_signuprequest_signuprequest_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/signuprequest/signuprequest.component */ "./src/app/ams/unit-users/components/signuprequest/signuprequest.component.ts");
/* harmony import */ var _components_unapproved_edit_modal_unapproved_edit_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/unapproved-edit-modal/unapproved-edit-modal.component */ "./src/app/ams/unit-users/components/unapproved-edit-modal/unapproved-edit-modal.component.ts");
/* harmony import */ var _components_signup_edit_modal_signup_edit_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/signup-edit-modal/signup-edit-modal.component */ "./src/app/ams/unit-users/components/signup-edit-modal/signup-edit-modal.component.ts");





















let UnitUsersModule = class UnitUsersModule {
};
UnitUsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_7__["AddUsersComponent"],
            _unit_users_component__WEBPACK_IMPORTED_MODULE_6__["UnitUsersComponent"],
            _components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_8__["UnapprovedComponent"],
            _components_approved_approved_component__WEBPACK_IMPORTED_MODULE_9__["ApprovedComponent"],
            _components_access_control_access_control_component__WEBPACK_IMPORTED_MODULE_10__["AccessControlComponent"],
            _components_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_11__["BroadcastComponent"],
            _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"],
            _components_de_activated_de_activated_component__WEBPACK_IMPORTED_MODULE_13__["DeActivatedComponent"],
            _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_14__["UserReportsComponent"],
            _components_add_users_add_resident_add_resident_component__WEBPACK_IMPORTED_MODULE_15__["AddResidentComponent"],
            _components_approved_user_details_approved_user_details_component__WEBPACK_IMPORTED_MODULE_16__["ApprovedUserDetailsComponent"],
            _components_user_reports_user_report_data_user_report_data_component__WEBPACK_IMPORTED_MODULE_17__["UserReportDataComponent"],
            _components_signuprequest_signuprequest_component__WEBPACK_IMPORTED_MODULE_18__["SignuprequestComponent"],
            _components_unapproved_edit_modal_unapproved_edit_modal_component__WEBPACK_IMPORTED_MODULE_19__["UnapprovedEditModalComponent"],
            _components_signup_edit_modal_signup_edit_modal_component__WEBPACK_IMPORTED_MODULE_20__["SignupEditModalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _unit_users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UnitUsersRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _user_my_profile_my_profile_module__WEBPACK_IMPORTED_MODULE_5__["MyProfileModule"]
        ],
        bootstrap: [_unit_users_component__WEBPACK_IMPORTED_MODULE_6__["UnitUsersComponent"]]
    })
], UnitUsersModule);



/***/ })

}]);
//# sourceMappingURL=unit-users-unit-users-module-es2015.js.map