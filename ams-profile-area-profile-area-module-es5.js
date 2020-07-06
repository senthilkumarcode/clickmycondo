function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ams-profile-area-profile-area-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsProfileAreaComponentsProfileAreaBasicProfileAreaBasicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-area-basic-wrapper profile-section\">\n\t\n\t<h5 class=\"mb-3\">Account Info</h5>\n\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"!isEdit\">\n\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"float-left user-info\">\n\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <app-profile-pic [type]=\"type\" [user]=\"user\"></app-profile-pic>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t\t<h5 class=\"mt-0\">{{user.firstName}} {{user.lastName}} </h5>\n\t\t\t\t\t\t<p>{{roleName}}</p>\n\t\t\t\t\t    <p class=\"tc-grey\">{{user.apartmentBlockNumber}} {{user.apartmentBlockUnitNumber}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body pt-0\">\n\t\t\t\t\n\t\t\t\t<ng-container *ngIf=\"!isEdit\">\n\t\t\t\n\t\t\t\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" novalidate>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Email ID</label>\n\t\t\t\t\t\t                <p>{{user.emailId}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Phone Number</label>\n\t\t\t\t\t\t                <p>{{user.phoneNumber}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Address</label>\n\t\t\t\t\t\t                <p>{{user.address1 | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Blood Group</label>\n\t\t\t\t\t\t                <p>{{user.bloodGroup | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\n\n\n\t\t\t\t<ng-container *ngIf=\"isEdit\">\n\t\t\t\t\t\n\t\t\t\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" novalidate (ngSubmit)=\"submitProfileBasicForm(profileBasicForm)\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Email ID*</label>\n\t\t\t\t                    <input (blur)=\"IsValidEmail($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Email Id\" name=\"emailId\" [(ngModel)]=\"user.emailId\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Phone Number*</label>\n\t\t\t\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Phone No\" name=\"phoneNumber\" [(ngModel)]=\"user.phoneNumber\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Address*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address1\" [(ngModel)]=\"user.address1\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Blood Group*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Blood Group\" name=\"bloodGroup\" [(ngModel)]=\"user.bloodGroup\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"profileBasicForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\t\n\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\n\t</div>\n\n\n\t<h5 class=\"mb-3\">Change Password</h5>\n\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<form #forgotpassform = \"ngForm\" name=\"forgotpassform\" (ngSubmit)=\"submitPasswordResetLink(forgotpassform)\" novalidate>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"forgotpassFormEmail\">Email</label>\n\t\t\t\t\t\t\t    <input type=\"email\" #forgotpassFormEmail=\"ngModel\" (ngModelChange)=\"clearErrors()\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" class=\"form-control\" name=\"forgotpassFormEmail\" [(ngModel)]=\"user.emailId\" placeholder=\"Email Id\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"submit-box text-left mt-25\">\n\t\t\t\t\t\t\t<button [disabled]=\"forgotpassform.invalid\" class=\"btn md-btn blue\">Send Reset Link</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/profile-area.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/profile-area.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsProfileAreaProfileAreaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>profile-area works!</p>\n";
    /***/
  },

  /***/
  "./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsProfileAreaComponentsProfileAreaBasicProfileAreaBasicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-area-basic-wrapper .user-info {\n  width: 80%;\n}\n.profile-area-basic-wrapper .user-info .profile-icon {\n  border-radius: 3px !important;\n  overflow: hidden;\n  margin: 0 30px 0 0;\n}\n.profile-area-basic-wrapper .user-info .profile-icon img {\n  width: 100px;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n@media (max-width: 768px) {\n  .profile-area-basic-wrapper .user-info .profile-icon {\n    width: 100px;\n    height: 80px;\n    margin: 0 15px 0 0;\n  }\n}\n.profile-area-basic-wrapper .user-info h5 {\n  font-size: 2rem;\n  padding: 0 0 2px 0;\n  color: #3f51b5;\n}\n.profile-area-basic-wrapper .user-info p {\n  font-size: 1.4rem;\n  color: #5f5f5f;\n}\n.profile-area-basic-wrapper .user-info .other {\n  margin: 8px 0 0 0 !important;\n}\n.profile-area-basic-wrapper .user-info .other li {\n  margin: 0 30px 0 0;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.profile-area-basic-wrapper .user-info .other li .icon {\n  width: 20px;\n  margin: 0 10px 0 0;\n  color: #673ab7;\n}\n.profile-area-basic-wrapper .user-info .other li .icon.phone {\n  width: 18px;\n}\n@media (max-width: 768px) {\n  .profile-area-basic-wrapper .user-info .other {\n    margin: 20px 0 0 0 !important;\n  }\n  .profile-area-basic-wrapper .user-info .other li {\n    display: block;\n  }\n  .profile-area-basic-wrapper .user-info .other li:not(:last-child) {\n    margin: 0 0 10px 0;\n  }\n  .profile-area-basic-wrapper .user-info .other li .icon {\n    margin: 0 16px 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvcHJvZmlsZS1hcmVhL2NvbXBvbmVudHMvcHJvZmlsZS1hcmVhLWJhc2ljL3Byb2ZpbGUtYXJlYS1iYXNpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3Byb2ZpbGUtYXJlYS9jb21wb25lbnRzL3Byb2ZpbGUtYXJlYS1iYXNpYy9wcm9maWxlLWFyZWEtYmFzaWMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLFVBQUE7QUNKRjtBREtFO0VFQUQsNkJBQUE7RUZFRSxnQkFBQTtFQUNBLGtCQUFBO0FDREg7QURFRztFQUNDLFlBQUE7RUFDRyxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0FQO0FERUc7RUFURDtJQVVFLFlBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNDRjtBQUNGO0FEQ0U7RUdpRUEsZUFBQTtFSC9EQyxrQkFBQTtFQUNBLGNJb0NNO0FIbkNUO0FEQ0U7RUc0REEsaUJBQUE7RUgxREMsY0lzRVE7QUhyRVg7QURDRTtFQUNDLDRCQUFBO0FDQ0g7QURBRztFQUNDLGtCQUFBO0VHMkJGLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFzQkEsaUJBQUE7RUhsREUsY0kxQlM7QUhnQ2I7QURMSTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNJQ007QUhNWDtBRE5LO0VBQ0MsV0FBQTtBQ1FOO0FESkc7RUFoQkQ7SUFpQkUsNkJBQUE7RUNPRjtFRE5FO0lBT0MsY0FBQTtFQ0VIO0VEUkc7SUFDQyxrQkFBQTtFQ1VKO0VEUkc7SUFDQyxrQkFBQTtFQ1VKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hbXMvcHJvZmlsZS1hcmVhL2NvbXBvbmVudHMvcHJvZmlsZS1hcmVhLWJhc2ljL3Byb2ZpbGUtYXJlYS1iYXNpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4ucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIge1xuXHQudXNlci1pbmZvIHtcblx0XHR3aWR0aDogODAlO1xuXHRcdC5wcm9maWxlLWljb24ge1xuXHRcdFx0QGluY2x1ZGUgYm9yZGVyLXJhZGl1cygzcHgpO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdG1hcmdpbjogMCAzMHB4IDAgMDtcblx0XHRcdGltZyB7XG5cdFx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdCAgICBoZWlnaHQ6IGF1dG87XG5cdFx0XHQgICAgb2JqZWN0LWZpdDogY29udGFpbjtcblx0XHRcdH1cblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHRcdFx0XHR3aWR0aDogMTAwcHg7XG5cdFx0XHRcdGhlaWdodDogODBweDtcblx0XHRcdFx0bWFyZ2luOiAwIDE1cHggMCAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRoNSB7XG5cdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bSk7XG5cdFx0XHRwYWRkaW5nOiAwIDAgMnB4IDA7XG5cdFx0XHRjb2xvcjogJG0tYmx1ZTtcblx0XHR9XG5cdFx0cCB7XG5cdFx0IFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRjb2xvcjogJGdyZXktNjUwO1xuXHRcdH1cblx0XHQub3RoZXIge1xuXHRcdFx0bWFyZ2luOiA4cHggMCAwIDAgIWltcG9ydGFudDtcblx0XHRcdGxpIHtcblx0XHRcdFx0bWFyZ2luOiAwIDMwcHggMCAwO1xuXHRcdFx0XHRAaW5jbHVkZSBkZXNwLXJlZ3VsYXI7XG5cdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdFx0XHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRtYXJnaW46IDAgMTBweCAwIDA7XG5cdFx0XHRcdFx0Y29sb3I6ICRzLXZpb2xldDtcblx0XHRcdFx0XHQmLnBob25lIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdG1hcmdpbjogMjBweCAwIDAgMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpe1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDAgMTBweCAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaWNvbiB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMTZweCAwIDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyB7XG4gIHdpZHRoOiA4MCU7XG59XG4ucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyAucHJvZmlsZS1pY29uIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAzMHB4IDAgMDtcbn1cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5wcm9maWxlLWljb24gaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gLnByb2ZpbGUtaWNvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW46IDAgMTVweCAwIDA7XG4gIH1cbn1cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIGg1IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAwIDAgMnB4IDA7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzVmNWY1Zjtcbn1cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5vdGhlciB7XG4gIG1hcmdpbjogOHB4IDAgMCAwICFpbXBvcnRhbnQ7XG59XG4ucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyAub3RoZXIgbGkge1xuICBtYXJnaW46IDAgMzBweCAwIDA7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5vdGhlciBsaSAuaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG4gIGNvbG9yOiAjNjczYWI3O1xufVxuLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gLm90aGVyIGxpIC5pY29uLnBob25lIHtcbiAgd2lkdGg6IDE4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gLm90aGVyIHtcbiAgICBtYXJnaW46IDIwcHggMCAwIDAgIWltcG9ydGFudDtcbiAgfVxuICAucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyAub3RoZXIgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5vdGhlciBsaTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIH1cbiAgLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gLm90aGVyIGxpIC5pY29uIHtcbiAgICBtYXJnaW46IDAgMTZweCAwIDA7XG4gIH1cbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBkZXNlbGVjdCAoKSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gZmxpcCgkZGlyZWN0aW9uKSB7XG4gIHRyYW5zZm9ybSA6IHJvdGF0ZVkoJGRpcmVjdGlvbik7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXNlbWkge1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC1iYXNlLTAyOjExO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ProfileAreaBasicComponent */

  /***/
  function srcAppAmsProfileAreaComponentsProfileAreaBasicProfileAreaBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileAreaBasicComponent", function () {
      return ProfileAreaBasicComponent;
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


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_EmailSend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/EmailSend */
    "./src/app/api/controllers/EmailSend.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var ProfileAreaBasicComponent =
    /*#__PURE__*/
    function () {
      function ProfileAreaBasicComponent(router, route, userService, emailSendService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, ProfileAreaBasicComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.emailSendService = emailSendService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isEdit = false;
        this.roleName = "";
        this.userEmailId = "";
      }

      _createClass(ProfileAreaBasicComponent, [{
        key: "showEditForm",
        value: function showEditForm() {
          this.isEdit = !this.isEdit;
        }
      }, {
        key: "clearErrors",
        value: function clearErrors() {}
      }, {
        key: "submitProfileBasicForm",
        value: function submitProfileBasicForm(form) {
          var _this = this;

          if (!this.IsvalidatePhoneNo(this.user.phoneNumber)) return true;
          if (!this.IsValidEmail(this.user.emailId)) return true;
          this.isDataLoaded = false;
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
            "resetPassword": this.user.resetPassword,
            "insertedBy": 0,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "isDocSubmitted": this.user.isDocSubmitted,
            "readyForApproval": this.user.readyForApproval
          };
          var params = {
            user: userDetails
          }; //update user 

          this.userService.updateUser(params).subscribe(function (res) {
            if (res.message) {
              _this.sharedService.setAlertMessage("User updated successfully");

              _this.isDataLoaded = true;
              _this.isEdit = false;
            }
          });
        }
      }, {
        key: "submitPasswordResetLink",
        value: function submitPasswordResetLink(form) {
          var emailDetails = {
            emailAddress: this.user.emailId,
            Name: this.user.firstName,
            Subject: 'User Created',
            TextMessage: 'User Created'
          };
          /*this.emailSendService.SendEmail(emailDetails).subscribe((res:any) => {
              this.sharedService.setAlertMessage("Account has been created. User notified via Email ");
              this.router.navigate(['ams/unit&users/unapproved']);
          },
          error => {
              console.log(error);
          });*/
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.user = {};
          this.type = 'user';
          var params = {
            userid: parseInt(this.cookieService.get('userId'))
          };
          this.userService.getUserById(params).subscribe(function (res) {
            console.log(res);
            _this2.user = res[0];
            _this2.genderType = _this2.user.genderId.toString();
            _this2.isDataLoaded = true;
          });
          var roleParams = {
            userId: parseInt(this.cookieService.get('userId'))
          };
          this.userService.getRolesByUserId(roleParams).subscribe(function (res) {
            console.log(res);
            _this2.roleName = res[0].roleName;
          });
          var apartmentParams = {
            userId: parseInt(this.cookieService.get('userId'))
          };
          this.apartmentService.getAllApartmentBlockUnitUsersByUserId(apartmentParams).subscribe(function (res) {
            _this2.apartmentBlockUnitId = res[0].apartmentBlockUnitId;

            _this2.apartmentService.getApartmentBlockUnitById(_this2.apartmentBlockUnitId).subscribe(function (res) {
              _this2.user.apartmentBlockNumber = res[0].apartmentBlockNumber;
              _this2.user.apartmentBlockUnitNumber = res[0].apartmentBlockUnitNumber;
              _this2.user.unitType = res[0].unitType;
            });
          });
        }
      }, {
        key: "IsValidEmail",
        value: function IsValidEmail(val) {
          var retVal = true;
          var rex = new RegExp(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/);
          var isValid = rex.test(val);

          if (!isValid) {
            retVal = false;
            var errorDetails = {
              msg: "Kindly enter proper email id",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          return retVal;
        }
      }, {
        key: "IsvalidatePhoneNo",
        value: function IsvalidatePhoneNo(val) {
          var retVal = true;
          var rex = new RegExp(/^[+]?\d+$/);
          var isValid = rex.test(val);
          console.log(val.length);

          if (val.length > 13) {
            retVal = false;
            var errorDetails = {
              msg: "phone no length should be within 13 characters",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          if (!isValid) {
            retVal = false;
            var errorDetails = {
              msg: "Kindly enter proper phoneno",
              type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
          }

          return retVal;
        }
      }, {
        key: "isValueValid",
        value: function isValueValid(val) {
          return val === undefined || val == null || val.length <= 0 || val === "" ? true : false;
        }
      }]);

      return ProfileAreaBasicComponent;
    }();

    ProfileAreaBasicComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_app_api_controllers_EmailSend__WEBPACK_IMPORTED_MODULE_5__["EmailSendService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    ProfileAreaBasicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-area-basic',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-area-basic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-area-basic.component.scss */
      "./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_api_controllers_EmailSend__WEBPACK_IMPORTED_MODULE_5__["EmailSendService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], ProfileAreaBasicComponent);
    /***/
  },

  /***/
  "./src/app/ams/profile-area/profile-area-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ams/profile-area/profile-area-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ProfileAreaRoutingModule */

  /***/
  function srcAppAmsProfileAreaProfileAreaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileAreaRoutingModule", function () {
      return ProfileAreaRoutingModule;
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


    var _components_profile_area_basic_profile_area_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/profile-area-basic/profile-area-basic.component */
    "./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'basic',
      pathMatch: 'full'
    }, {
      path: 'basic',
      component: _components_profile_area_basic_profile_area_basic_component__WEBPACK_IMPORTED_MODULE_3__["ProfileAreaBasicComponent"]
    }, {
      path: '**',
      redirectTo: 'basic',
      pathMatch: 'full'
    }];

    var ProfileAreaRoutingModule = function ProfileAreaRoutingModule() {
      _classCallCheck(this, ProfileAreaRoutingModule);
    };

    ProfileAreaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfileAreaRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/profile-area/profile-area.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/ams/profile-area/profile-area.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsProfileAreaProfileAreaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wcm9maWxlLWFyZWEvcHJvZmlsZS1hcmVhLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/profile-area/profile-area.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/ams/profile-area/profile-area.component.ts ***!
    \************************************************************/

  /*! exports provided: ProfileAreaComponent */

  /***/
  function srcAppAmsProfileAreaProfileAreaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileAreaComponent", function () {
      return ProfileAreaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileAreaComponent =
    /*#__PURE__*/
    function () {
      function ProfileAreaComponent() {
        _classCallCheck(this, ProfileAreaComponent);
      }

      _createClass(ProfileAreaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileAreaComponent;
    }();

    ProfileAreaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-area',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-area.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/profile-area.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-area.component.scss */
      "./src/app/ams/profile-area/profile-area.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProfileAreaComponent);
    /***/
  },

  /***/
  "./src/app/ams/profile-area/profile-area.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ams/profile-area/profile-area.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileAreaModule */

  /***/
  function srcAppAmsProfileAreaProfileAreaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileAreaModule", function () {
      return ProfileAreaModule;
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


    var _profile_area_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-area-routing.module */
    "./src/app/ams/profile-area/profile-area-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _profile_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-area.component */
    "./src/app/ams/profile-area/profile-area.component.ts");
    /* harmony import */


    var _components_profile_area_basic_profile_area_basic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/profile-area-basic/profile-area-basic.component */
    "./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.ts");

    var ProfileAreaModule = function ProfileAreaModule() {
      _classCallCheck(this, ProfileAreaModule);
    };

    ProfileAreaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_profile_area_component__WEBPACK_IMPORTED_MODULE_5__["ProfileAreaComponent"], _components_profile_area_basic_profile_area_basic_component__WEBPACK_IMPORTED_MODULE_6__["ProfileAreaBasicComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _profile_area_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileAreaRoutingModule"]],
      bootstrap: [_profile_area_component__WEBPACK_IMPORTED_MODULE_5__["ProfileAreaComponent"]]
    })], ProfileAreaModule);
    /***/
  }
}]);
//# sourceMappingURL=ams-profile-area-profile-area-module-es5.js.map