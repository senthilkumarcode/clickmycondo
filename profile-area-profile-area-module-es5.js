function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-area-profile-area-module"], {
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


    __webpack_exports__["default"] = "<div class=\"profile-area-basic-wrapper profile-section\">\n\t\n\t<h5 class=\"mb-3\">Account Info</h5>\n\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"!isEdit\">\n\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"float-left user-info\">\n\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <div class=\"profile-icon\">\n\t\t\t\t\t  \t<img class=\"img-fluid\" src=\"https://randomuser.me/api/portraits/men/9.jpg\" id=\"userProfile\">\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t\t<h5 class=\"mt-0\">{{user.firstName}} {{user.lastName}} </h5>\n\t\t\t\t\t\t<p>{{roleName}}</p>\n\t\t\t\t\t    <p class=\"tc-grey\">{{user.apartmentBlockNumber}} {{user.apartmentBlockUnitNumber}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body pt-0\">\n\t\t\t\t\n\t\t\t\t<ng-container *ngIf=\"!isEdit\">\n\t\t\t\n\t\t\t\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" novalidate>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Email ID</label>\n\t\t\t\t\t\t                <p>{{user.emailId}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Phone Number</label>\n\t\t\t\t\t\t                <p>{{user.phoneNumber}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Address</label>\n\t\t\t\t\t\t                <p>{{user.address1 | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Blood Group</label>\n\t\t\t\t\t\t                <p>{{user.bloodGroup | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\n\n\n\t\t\t\t<ng-container *ngIf=\"isEdit\">\n\t\t\t\t\t\n\t\t\t\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" novalidate (ngSubmit)=\"submitProfileBasicForm(profileBasicForm)\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Email ID*</label>\n\t\t\t\t                    <input (blur)=\"IsValidEmail($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Email Id\" name=\"emailId\" [(ngModel)]=\"user.emailId\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Phone Number*</label>\n\t\t\t\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Phone No\" name=\"phoneNumber\" [(ngModel)]=\"user.phoneNumber\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Address*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address1\" [(ngModel)]=\"user.address1\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Blood Group*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Blood Group\" name=\"bloodGroup\" [(ngModel)]=\"user.bloodGroup\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"profileBasicForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\t\n\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\n\t</div>\n\n\n\t<h5 class=\"mb-3\">Change Password</h5>\n\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<form #forgotpassform = \"ngForm\" name=\"forgotpassform\" (ngSubmit)=\"submitPasswordResetLink(forgotpassform)\" novalidate>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"forgotpassFormEmail\">Email</label>\n\t\t\t\t\t\t\t    <input type=\"email\" #forgotpassFormEmail=\"ngModel\" (ngModelChange)=\"clearErrors()\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" class=\"form-control\" name=\"forgotpassFormEmail\" [(ngModel)]=\"user.emailId\" placeholder=\"Email Id\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"submit-box text-left mt-25\">\n\t\t\t\t\t\t\t<button [disabled]=\"forgotpassform.invalid\" class=\"btn md-btn blue\">Send Reset Link</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n";
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


    __webpack_exports__["default"] = ".profile-area-basic-wrapper .user-info {\n  width: 80%;\n}\n.profile-area-basic-wrapper .user-info .profile-icon {\n  border-radius: 3px !important;\n  overflow: hidden;\n  margin: 0 30px 0 0;\n}\n.profile-area-basic-wrapper .user-info .profile-icon img {\n  width: 100px;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n@media (max-width: 768px) {\n  .profile-area-basic-wrapper .user-info .profile-icon {\n    width: 100px;\n    height: 80px;\n    margin: 0 15px 0 0;\n  }\n}\n.profile-area-basic-wrapper .user-info h5 {\n  font-size: 2rem;\n  padding: 0 0 2px 0;\n  color: #3f51b5;\n}\n.profile-area-basic-wrapper .user-info p {\n  font-size: 1.4rem;\n  color: #5f5f5f;\n}\n.profile-area-basic-wrapper .user-info .other {\n  margin: 8px 0 0 0 !important;\n}\n.profile-area-basic-wrapper .user-info .other li {\n  margin: 0 30px 0 0;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.profile-area-basic-wrapper .user-info .other li .icon {\n  width: 20px;\n  margin: 0 10px 0 0;\n  color: #673ab7;\n}\n.profile-area-basic-wrapper .user-info .other li .icon.phone {\n  width: 18px;\n}\n@media (max-width: 768px) {\n  .profile-area-basic-wrapper .user-info .other {\n    margin: 20px 0 0 0 !important;\n  }\n  .profile-area-basic-wrapper .user-info .other li {\n    display: block;\n  }\n  .profile-area-basic-wrapper .user-info .other li:not(:last-child) {\n    margin: 0 0 10px 0;\n  }\n  .profile-area-basic-wrapper .user-info .other li .icon {\n    margin: 0 16px 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvcHJvZmlsZS1hcmVhL2NvbXBvbmVudHMvcHJvZmlsZS1hcmVhLWJhc2ljL3Byb2ZpbGUtYXJlYS1iYXNpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3Byb2ZpbGUtYXJlYS9jb21wb25lbnRzL3Byb2ZpbGUtYXJlYS1iYXNpYy9wcm9maWxlLWFyZWEtYmFzaWMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLFVBQUE7QUNKRjtBREtFO0VFQUQsNkJBQUE7RUZFRSxnQkFBQTtFQUNBLGtCQUFBO0FDREg7QURFRztFQUNDLFlBQUE7RUFDRyxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0FQO0FERUc7RUFURDtJQVVFLFlBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNDRjtBQUNGO0FEQ0U7RUd3REEsZUFBQTtFSHREQyxrQkFBQTtFQUNBLGNJb0NNO0FIbkNUO0FEQ0U7RUdtREEsaUJBQUE7RUhqREMsY0lzRVE7QUhyRVg7QURDRTtFQUNDLDRCQUFBO0FDQ0g7QURBRztFQUNDLGtCQUFBO0VHMkJGLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFhQSxpQkFBQTtFSHpDRSxjSTFCUztBSGdDYjtBRExJO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0lDTTtBSE1YO0FETks7RUFDQyxXQUFBO0FDUU47QURKRztFQWhCRDtJQWlCRSw2QkFBQTtFQ09GO0VETkU7SUFPQyxjQUFBO0VDRUg7RURSRztJQUNDLGtCQUFBO0VDVUo7RURSRztJQUNDLGtCQUFBO0VDVUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wcm9maWxlLWFyZWEvY29tcG9uZW50cy9wcm9maWxlLWFyZWEtYmFzaWMvcHJvZmlsZS1hcmVhLWJhc2ljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciB7XG5cdC51c2VyLWluZm8ge1xuXHRcdHdpZHRoOiA4MCU7XG5cdFx0LnByb2ZpbGUtaWNvbiB7XG5cdFx0XHRAaW5jbHVkZSBib3JkZXItcmFkaXVzKDNweCk7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0bWFyZ2luOiAwIDMwcHggMCAwO1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDEwMHB4O1xuXHRcdFx0ICAgIGhlaWdodDogYXV0bztcblx0XHRcdCAgICBvYmplY3QtZml0OiBjb250YWluO1xuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0XHRtYXJnaW46IDAgMTVweCAwIDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGg1IHtcblx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcblx0XHRcdHBhZGRpbmc6IDAgMCAycHggMDtcblx0XHRcdGNvbG9yOiAkbS1ibHVlO1xuXHRcdH1cblx0XHRwIHtcblx0XHQgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdGNvbG9yOiAkZ3JleS02NTA7XG5cdFx0fVxuXHRcdC5vdGhlciB7XG5cdFx0XHRtYXJnaW46IDhweCAwIDAgMCAhaW1wb3J0YW50O1xuXHRcdFx0bGkge1xuXHRcdFx0XHRtYXJnaW46IDAgMzBweCAwIDA7XG5cdFx0XHRcdEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcblx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0XHRcdG1hcmdpbjogMCAxMHB4IDAgMDtcblx0XHRcdFx0XHRjb2xvcjogJHMtdmlvbGV0O1xuXHRcdFx0XHRcdCYucGhvbmUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE4cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0bWFyZ2luOiAyMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGxpIHtcblx0XHRcdFx0XHQmOm5vdCg6bGFzdC1jaGlsZCl7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMCAxMHB4IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAxNnB4IDAgMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5wcm9maWxlLWljb24ge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIDMwcHggMCAwO1xufVxuLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gLnByb2ZpbGUtaWNvbiBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyAucHJvZmlsZS1pY29uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgfVxufVxuLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gaDUge1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDAgMCAycHggMDtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4ucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gLm90aGVyIHtcbiAgbWFyZ2luOiA4cHggMCAwIDAgIWltcG9ydGFudDtcbn1cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5vdGhlciBsaSB7XG4gIG1hcmdpbjogMCAzMHB4IDAgMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG59XG4ucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyAub3RoZXIgbGkgLmljb24ge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICBjb2xvcjogIzY3M2FiNztcbn1cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5vdGhlciBsaSAuaWNvbi5waG9uZSB7XG4gIHdpZHRoOiAxOHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5vdGhlciB7XG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gLm90aGVyIGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyAub3RoZXIgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB9XG4gIC5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5vdGhlciBsaSAuaWNvbiB7XG4gICAgbWFyZ2luOiAwIDE2cHggMCAwO1xuICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiJdfQ== */";
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
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
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_api_controllers_EmailSend__WEBPACK_IMPORTED_MODULE_5__["EmailSendService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], ProfileAreaBasicComponent);
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
//# sourceMappingURL=profile-area-profile-area-module-es5.js.map