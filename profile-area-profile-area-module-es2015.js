(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-area-profile-area-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-area-basic-wrapper profile-section\">\n\t\n\t<h5 class=\"mb-3\">Account Info</h5>\n\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"!isEdit\">\n\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"float-left user-info\">\n\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <app-profile-pic [type]=\"type\" [user]=\"user\"></app-profile-pic>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t\t<h5 class=\"mt-0\">{{user.firstName}} {{user.lastName}} </h5>\n\t\t\t\t\t\t<p>{{roleName}}</p>\n\t\t\t\t\t    <p class=\"tc-grey\">{{user.apartmentBlockNumber}} {{user.apartmentBlockUnitNumber}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body pt-0\">\n\t\t\t\t\n\t\t\t\t<ng-container *ngIf=\"!isEdit\">\n\t\t\t\n\t\t\t\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" novalidate>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Email ID</label>\n\t\t\t\t\t\t                <p>{{user.emailId}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Phone Number</label>\n\t\t\t\t\t\t                <p>{{user.phoneNumber}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Address</label>\n\t\t\t\t\t\t                <p>{{user.address1 | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                <label>Blood Group</label>\n\t\t\t\t\t\t                <p>{{user.bloodGroup | notAvail}}</p>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\n\n\n\t\t\t\t<ng-container *ngIf=\"isEdit\">\n\t\t\t\t\t\n\t\t\t\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" novalidate (ngSubmit)=\"submitProfileBasicForm(profileBasicForm)\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Email ID*</label>\n\t\t\t\t                    <input (blur)=\"IsValidEmail($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Email Id\" name=\"emailId\" [(ngModel)]=\"user.emailId\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Phone Number*</label>\n\t\t\t\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Phone No\" name=\"phoneNumber\" [(ngModel)]=\"user.phoneNumber\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Address*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address1\" [(ngModel)]=\"user.address1\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Blood Group*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Blood Group\" name=\"bloodGroup\" [(ngModel)]=\"user.bloodGroup\" required>\n\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"profileBasicForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\t\n\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\n\t</div>\n\n\n\t<h5 class=\"mb-3\">Change Password</h5>\n\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<form #forgotpassform = \"ngForm\" name=\"forgotpassform\" (ngSubmit)=\"submitPasswordResetLink(forgotpassform)\" novalidate>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"forgotpassFormEmail\">Email</label>\n\t\t\t\t\t\t\t    <input type=\"email\" #forgotpassFormEmail=\"ngModel\" (ngModelChange)=\"clearErrors()\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" class=\"form-control\" name=\"forgotpassFormEmail\" [(ngModel)]=\"user.emailId\" placeholder=\"Email Id\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"submit-box text-left mt-25\">\n\t\t\t\t\t\t\t<button [disabled]=\"forgotpassform.invalid\" class=\"btn md-btn blue\">Send Reset Link</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/profile-area.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/profile-area.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile-area works!</p>\n");

/***/ }),

/***/ "./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-area-basic-wrapper .user-info {\n  width: 80%;\n}\n.profile-area-basic-wrapper .user-info .profile-icon {\n  border-radius: 3px !important;\n  overflow: hidden;\n  margin: 0 30px 0 0;\n}\n.profile-area-basic-wrapper .user-info .profile-icon img {\n  width: 100px;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n@media (max-width: 768px) {\n  .profile-area-basic-wrapper .user-info .profile-icon {\n    width: 100px;\n    height: 80px;\n    margin: 0 15px 0 0;\n  }\n}\n.profile-area-basic-wrapper .user-info h5 {\n  font-size: 2rem;\n  padding: 0 0 2px 0;\n  color: #3f51b5;\n}\n.profile-area-basic-wrapper .user-info p {\n  font-size: 1.4rem;\n  color: #5f5f5f;\n}\n.profile-area-basic-wrapper .user-info .other {\n  margin: 8px 0 0 0 !important;\n}\n.profile-area-basic-wrapper .user-info .other li {\n  margin: 0 30px 0 0;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.profile-area-basic-wrapper .user-info .other li .icon {\n  width: 20px;\n  margin: 0 10px 0 0;\n  color: #673ab7;\n}\n.profile-area-basic-wrapper .user-info .other li .icon.phone {\n  width: 18px;\n}\n@media (max-width: 768px) {\n  .profile-area-basic-wrapper .user-info .other {\n    margin: 20px 0 0 0 !important;\n  }\n  .profile-area-basic-wrapper .user-info .other li {\n    display: block;\n  }\n  .profile-area-basic-wrapper .user-info .other li:not(:last-child) {\n    margin: 0 0 10px 0;\n  }\n  .profile-area-basic-wrapper .user-info .other li .icon {\n    margin: 0 16px 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvcHJvZmlsZS1hcmVhL2NvbXBvbmVudHMvcHJvZmlsZS1hcmVhLWJhc2ljL3Byb2ZpbGUtYXJlYS1iYXNpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3Byb2ZpbGUtYXJlYS9jb21wb25lbnRzL3Byb2ZpbGUtYXJlYS1iYXNpYy9wcm9maWxlLWFyZWEtYmFzaWMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLFVBQUE7QUNKRjtBREtFO0VFQUQsNkJBQUE7RUZFRSxnQkFBQTtFQUNBLGtCQUFBO0FDREg7QURFRztFQUNDLFlBQUE7RUFDRyxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0FQO0FERUc7RUFURDtJQVVFLFlBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNDRjtBQUNGO0FEQ0U7RUd3REEsZUFBQTtFSHREQyxrQkFBQTtFQUNBLGNJb0NNO0FIbkNUO0FEQ0U7RUdtREEsaUJBQUE7RUhqREMsY0lzRVE7QUhyRVg7QURDRTtFQUNDLDRCQUFBO0FDQ0g7QURBRztFQUNDLGtCQUFBO0VHMkJGLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFhQSxpQkFBQTtFSHpDRSxjSTFCUztBSGdDYjtBRExJO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0lDTTtBSE1YO0FETks7RUFDQyxXQUFBO0FDUU47QURKRztFQWhCRDtJQWlCRSw2QkFBQTtFQ09GO0VETkU7SUFPQyxjQUFBO0VDRUg7RURSRztJQUNDLGtCQUFBO0VDVUo7RURSRztJQUNDLGtCQUFBO0VDVUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wcm9maWxlLWFyZWEvY29tcG9uZW50cy9wcm9maWxlLWFyZWEtYmFzaWMvcHJvZmlsZS1hcmVhLWJhc2ljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciB7XG5cdC51c2VyLWluZm8ge1xuXHRcdHdpZHRoOiA4MCU7XG5cdFx0LnByb2ZpbGUtaWNvbiB7XG5cdFx0XHRAaW5jbHVkZSBib3JkZXItcmFkaXVzKDNweCk7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0bWFyZ2luOiAwIDMwcHggMCAwO1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDEwMHB4O1xuXHRcdFx0ICAgIGhlaWdodDogYXV0bztcblx0XHRcdCAgICBvYmplY3QtZml0OiBjb250YWluO1xuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0XHRtYXJnaW46IDAgMTVweCAwIDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGg1IHtcblx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcblx0XHRcdHBhZGRpbmc6IDAgMCAycHggMDtcblx0XHRcdGNvbG9yOiAkbS1ibHVlO1xuXHRcdH1cblx0XHRwIHtcblx0XHQgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdGNvbG9yOiAkZ3JleS02NTA7XG5cdFx0fVxuXHRcdC5vdGhlciB7XG5cdFx0XHRtYXJnaW46IDhweCAwIDAgMCAhaW1wb3J0YW50O1xuXHRcdFx0bGkge1xuXHRcdFx0XHRtYXJnaW46IDAgMzBweCAwIDA7XG5cdFx0XHRcdEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcblx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0XHRcdG1hcmdpbjogMCAxMHB4IDAgMDtcblx0XHRcdFx0XHRjb2xvcjogJHMtdmlvbGV0O1xuXHRcdFx0XHRcdCYucGhvbmUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE4cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0bWFyZ2luOiAyMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGxpIHtcblx0XHRcdFx0XHQmOm5vdCg6bGFzdC1jaGlsZCl7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMCAxMHB4IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAxNnB4IDAgMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5wcm9maWxlLWljb24ge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIDMwcHggMCAwO1xufVxuLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gLnByb2ZpbGUtaWNvbiBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyAucHJvZmlsZS1pY29uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgfVxufVxuLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gaDUge1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDAgMCAycHggMDtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4ucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjNWY1ZjVmO1xufVxuLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gLm90aGVyIHtcbiAgbWFyZ2luOiA4cHggMCAwIDAgIWltcG9ydGFudDtcbn1cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5vdGhlciBsaSB7XG4gIG1hcmdpbjogMCAzMHB4IDAgMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG59XG4ucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyAub3RoZXIgbGkgLmljb24ge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICBjb2xvcjogIzY3M2FiNztcbn1cbi5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5vdGhlciBsaSAuaWNvbi5waG9uZSB7XG4gIHdpZHRoOiAxOHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5vdGhlciB7XG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2ZpbGUtYXJlYS1iYXNpYy13cmFwcGVyIC51c2VyLWluZm8gLm90aGVyIGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAucHJvZmlsZS1hcmVhLWJhc2ljLXdyYXBwZXIgLnVzZXItaW5mbyAub3RoZXIgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB9XG4gIC5wcm9maWxlLWFyZWEtYmFzaWMtd3JhcHBlciAudXNlci1pbmZvIC5vdGhlciBsaSAuaWNvbiB7XG4gICAgbWFyZ2luOiAwIDE2cHggMCAwO1xuICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gZmxpcCgkZGlyZWN0aW9uKSB7XG4gIHRyYW5zZm9ybSA6IHJvdGF0ZVkoJGRpcmVjdGlvbik7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ProfileAreaBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAreaBasicComponent", function() { return ProfileAreaBasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_EmailSend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/EmailSend */ "./src/app/api/controllers/EmailSend.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");









let ProfileAreaBasicComponent = class ProfileAreaBasicComponent {
    constructor(router, route, userService, emailSendService, apartmentService, lookupService, sharedService, cookieService) {
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
    showEditForm() {
        this.isEdit = !this.isEdit;
    }
    clearErrors() {
    }
    submitProfileBasicForm(form) {
        if (!this.IsvalidatePhoneNo(this.user.phoneNumber))
            return true;
        if (!this.IsValidEmail(this.user.emailId))
            return true;
        this.isDataLoaded = false;
        let userDetails = {
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
        let params = {
            user: userDetails
        };
        //update user 
        this.userService.updateUser(params).subscribe((res) => {
            if (res.message) {
                this.sharedService.setAlertMessage("User updated successfully");
                this.isDataLoaded = true;
                this.isEdit = false;
            }
        });
    }
    submitPasswordResetLink(form) {
        let emailDetails = {
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
    ngOnInit() {
        this.user = {};
        this.type = 'user';
        let params = {
            userid: parseInt(this.cookieService.get('userId'))
        };
        this.userService.getUserById(params).subscribe((res) => {
            console.log(res);
            this.user = res[0];
            this.genderType = this.user.genderId.toString();
            this.isDataLoaded = true;
        });
        let roleParams = {
            userId: parseInt(this.cookieService.get('userId'))
        };
        this.userService.getRolesByUserId(roleParams).subscribe((res) => {
            console.log(res);
            this.roleName = res[0].roleName;
        });
        let apartmentParams = {
            userId: parseInt(this.cookieService.get('userId'))
        };
        this.apartmentService.getAllApartmentBlockUnitUsersByUserId(apartmentParams).subscribe((res) => {
            this.apartmentBlockUnitId = res[0].apartmentBlockUnitId;
            this.apartmentService.getApartmentBlockUnitById(this.apartmentBlockUnitId).subscribe((res) => {
                this.user.apartmentBlockNumber = res[0].apartmentBlockNumber;
                this.user.apartmentBlockUnitNumber = res[0].apartmentBlockUnitNumber;
                this.user.unitType = res[0].unitType;
            });
        });
    }
    IsValidEmail(val) {
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
    IsvalidatePhoneNo(val) {
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
    isValueValid(val) {
        return (val === undefined || val == null || val.length <= 0 || val === "") ? true : false;
    }
};
ProfileAreaBasicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_api_controllers_EmailSend__WEBPACK_IMPORTED_MODULE_5__["EmailSendService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
ProfileAreaBasicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-area-basic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-area-basic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-area-basic.component.scss */ "./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        src_app_api_controllers_EmailSend__WEBPACK_IMPORTED_MODULE_5__["EmailSendService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], ProfileAreaBasicComponent);



/***/ }),

/***/ "./src/app/ams/profile-area/profile-area-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ams/profile-area/profile-area-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileAreaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAreaRoutingModule", function() { return ProfileAreaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_profile_area_basic_profile_area_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile-area-basic/profile-area-basic.component */ "./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.ts");




const routes = [
    { path: '', redirectTo: 'basic', pathMatch: 'full' },
    { path: 'basic', component: _components_profile_area_basic_profile_area_basic_component__WEBPACK_IMPORTED_MODULE_3__["ProfileAreaBasicComponent"] },
    { path: '**', redirectTo: 'basic', pathMatch: 'full' }
];
let ProfileAreaRoutingModule = class ProfileAreaRoutingModule {
};
ProfileAreaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProfileAreaRoutingModule);



/***/ }),

/***/ "./src/app/ams/profile-area/profile-area.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ams/profile-area/profile-area.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wcm9maWxlLWFyZWEvcHJvZmlsZS1hcmVhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/profile-area/profile-area.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ams/profile-area/profile-area.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAreaComponent", function() { return ProfileAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfileAreaComponent = class ProfileAreaComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileAreaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-area',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-area/profile-area.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-area.component.scss */ "./src/app/ams/profile-area/profile-area.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ProfileAreaComponent);



/***/ }),

/***/ "./src/app/ams/profile-area/profile-area.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ams/profile-area/profile-area.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfileAreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAreaModule", function() { return ProfileAreaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_area_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-area-routing.module */ "./src/app/ams/profile-area/profile-area-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-area.component */ "./src/app/ams/profile-area/profile-area.component.ts");
/* harmony import */ var _components_profile_area_basic_profile_area_basic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile-area-basic/profile-area-basic.component */ "./src/app/ams/profile-area/components/profile-area-basic/profile-area-basic.component.ts");







let ProfileAreaModule = class ProfileAreaModule {
};
ProfileAreaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_area_component__WEBPACK_IMPORTED_MODULE_5__["ProfileAreaComponent"], _components_profile_area_basic_profile_area_basic_component__WEBPACK_IMPORTED_MODULE_6__["ProfileAreaBasicComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _profile_area_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileAreaRoutingModule"]
        ],
        bootstrap: [_profile_area_component__WEBPACK_IMPORTED_MODULE_5__["ProfileAreaComponent"]]
    })
], ProfileAreaModule);



/***/ })

}]);
//# sourceMappingURL=profile-area-profile-area-module-es2015.js.map