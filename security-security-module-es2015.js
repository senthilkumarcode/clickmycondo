(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-security-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"secuirty-active-alerts-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isAlertsLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isAlertsLoaded\">\n\t\t\n\t\t<h3 class=\"main-title\">Active Alerts</h3>\n\n\t\t<div class=\"card mb-30\">\n\t\t\t\n\t\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\t\t\t\t\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngFor=\"let alert of alertList\">\n\t\t\t\t\t\t<li class=\"list-group-item collapsed {{getEmergencyType(alert.alertTypeId)}} \" data-toggle=\"collapse\" attr.data-target=\"#collapse{{alert.apartmentBlockUnitAlertId}}\" aria-expanded=\"true\" attr.aria-controls=\"collapseOne\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"s-circle {{getEmergencyType(alert.alertTypeId)}} text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/{{getEmergencyType(alert.alertTypeId)}}-e-icon.svg\" width=\"14\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>{{getAlertName(alert.alertTypeId)}}</h5>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"float-right mr-4\">\n\t\t\t\t\t\t\t\t\t<span class=\"badge small min ml-3 text-capitalize\" [ngClass]=\"getAlertStatus(alert.alertStatusId)\">{{getAlertStatus(alert.alertStatusId)}}</span>\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<p><span class=\"mr-2\">Date:</span>{{getDate(alert.receivedDate)}}</p>\n\t\t\t\t\t\t\t\t<p><span class=\"mr-2\">Block:</span>{{getBlock(alert.apartmentBlockUnitId)}}</p>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<div id=\"collapse{{alert.apartmentBlockUnitAlertId}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<app-loader *ngIf=\"isAlertUpdated\"></app-loader>\n\n\t\t\t\t\t\t\t<div class=\"additional-desp\" *ngIf=\"!isAlertUpdated\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Person Name</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{getUserName(alert.insertedBy)}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Phone Number</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{getContactNumber(alert.insertedBy)}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Alert Received Time</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{getDateTime(alert.receivedDate)}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- <agm-map [latitude]='getLatitude(alert.insertedBy)' [longitude]='getLongitude(alert.insertedBy)'></agm-map> -->\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"!isOpenStatus(alert.alertStatusId)\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 mt-4 mb-2\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                    <label>Comments</label>\n\t\t\t\t\t\t\t\t\t\t\t<textarea placeholder=\"some text here\" name=\"healthIssue\" *ngIf=\"!isInProgressStatus(alert.alertStatusId)\" [(ngModel)]=\"alert.notes\" [disabled]=\"true\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t<textarea placeholder=\"some text here\" name=\"healthIssue\" *ngIf=\"isInProgressStatus(alert.alertStatusId)\" [(ngModel)]=\"alert.notes\" ></textarea>\n\t\t\t\t\t                \t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"btn-wrapper text-center\" *ngIf=\"isOpenStatus(alert.alertStatusId)\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn blue mt-4 mb-4\" (click)=\"approveAlert(alert, 'approve')\">Acknowledge</a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"btn-wrapper text-center\" *ngIf=\"isInProgressStatus(alert.alertStatusId)\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn blue mt-4 mb-4\" (click)=\"approveAlert(alert, 'close')\">Close</a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\n\n\t\t\t\t\t <ng-container *ngIf=\"isNoAlerts()\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body gen-message\">\n\t\t\t\t\t\t\t\t<h4>No Active Alerts available</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-history/security-history.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-history/security-history.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  security-history works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-reports/security-reports.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-reports/security-reports.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  security-reports works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-setup/security-setup.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-setup/security-setup.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  security-setup works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/security.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/security.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".secuirty-active-alerts-wrapper .tabs li {\n  position: relative;\n}\n.secuirty-active-alerts-wrapper .tabs li:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 3px;\n  height: 100% !important;\n}\n.secuirty-active-alerts-wrapper .tabs li.medical:before {\n  background-color: #00bcd4;\n}\n.secuirty-active-alerts-wrapper .tabs li.theft:before {\n  background-color: #ef60a5;\n}\n.secuirty-active-alerts-wrapper .tabs li.fire:before {\n  background-color: #FF9800;\n}\n.secuirty-active-alerts-wrapper .tabs li.shooter:before {\n  background-color: #9100ff;\n}\n.secuirty-active-alerts-wrapper .tabs li.police:before {\n  background-color: #06bf58;\n}\n.secuirty-active-alerts-wrapper .tabs li .details {\n  padding: 0 20px;\n  width: 100% !important;\n  float: left;\n  border: none;\n}\n.secuirty-active-alerts-wrapper .tabs li .details h5 {\n  font-size: 1.8rem;\n  color: #373946;\n  text-transform: capitalize;\n  margin: 2px 0 0 0;\n}\n.secuirty-active-alerts-wrapper .tabs li .info {\n  padding: 0 20px;\n  width: 100% !important;\n  float: left;\n  margin: 10px 0 0 0;\n}\n@media (max-width: 576px) {\n  .secuirty-active-alerts-wrapper .tabs li .info {\n    margin: 12px 0 0 0;\n  }\n}\n.secuirty-active-alerts-wrapper .tabs li .info p {\n  font-size: 1.4rem;\n  color: #373946;\n  display: inline-block;\n}\n.secuirty-active-alerts-wrapper .tabs li .info p:not(:last-child) {\n  margin: 0 40px 0 0 !important;\n}\n@media (max-width: 576px) {\n  .secuirty-active-alerts-wrapper .tabs li .info p {\n    margin: 0 0 8px 0;\n  }\n}\n.secuirty-active-alerts-wrapper .tabs li .info p span {\n  color: #8391a1;\n}\n.secuirty-active-alerts-wrapper .tabs li:first-child {\n  border-top: none;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp {\n  padding: 20px 35px;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp .lists:not(:last-child) {\n  margin: 0 0 20px 0;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp .lists h5 {\n  font-size: 1.6rem;\n  padding: 0 0 4px 0;\n  color: #191c1e;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp .lists p {\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp label {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  color: #191c1e;\n  margin: 0 0 7px 0;\n}\n.secuirty-active-alerts-wrapper agm-map {\n  height: 300px;\n}\n@media (max-width: 991px) {\n  .secuirty-active-alerts-wrapper agm-map {\n    margin: 15px 0 0 0;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvc2VjdXJpdHkvY29tcG9uZW50cy9zZWN1cml0eS1hY3RpdmUtYWxlcnRzL3NlY3VyaXR5LWFjdGl2ZS1hbGVydHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hbXMvc2VjdXJpdHkvY29tcG9uZW50cy9zZWN1cml0eS1hY3RpdmUtYWxlcnRzL3NlY3VyaXR5LWFjdGl2ZS1hbGVydHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDQyxrQkNIRTtBQ0hMO0FGT0c7RUFDQyxXQUFBO0VBQ0Esa0JDUEM7RURRRCxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkM2SUU7QUNsSk47QUZRSTtFQUNDLHlCQ2tETTtBQ3hEWDtBRlVJO0VBQ0MseUJDaURLO0FDekRWO0FGWUk7RUFDQyx5QkM4Q0s7QUN4RFY7QUZjSTtFQUNDLHlCQzZDTTtBQ3pEWDtBRmdCSTtFQUNDLHlCQzJDSztBQ3pEVjtBRmlCRztFQUNDLGVBQUE7RUFDRyxzQkNnSEQ7RUQvR0MsV0FBQTtFQUNBLFlBQUE7QUVmUDtBRmdCTztFRytCTCxpQkFBQTtFSDdCRyxjQ3dDTTtFRHZDTiwwQkFBQTtFQUNBLGlCQUFBO0FFZEw7QUZpQkc7RUFDQyxlQUFBO0VBQ0csc0JDb0dEO0VEbkdDLFdBQUE7RUFDQSxrQkFBQTtBRWZQO0FGZ0JPO0VBTEo7SUFNSyxrQkFBQTtFRWJOO0FBQ0Y7QUZjSTtFR2dCRixpQkFBQTtFSGRHLGNDeUJNO0VEeEJOLHFCQUFBO0FFWkw7QUZhSztFQUNDLDZCQUFBO0FFWE47QUZhSztFQVBEO0lBUUssaUJBQUE7RUVWUDtBQUNGO0FGV0s7RUFDQyxjQzlETztBQ3FEYjtBRmFHO0VBQ0MsZ0JBQUE7QUVYSjtBRmNFO0VBQ0Msa0JBQUE7QUVaSDtBRmNJO0VBQ0Msa0JBQUE7QUVaTDtBRmNJO0VHVEYsaUJBQUE7RUhXTyxrQkFBQTtFQUNBLGNDSEU7QUNUWDtBRmNPO0VHZEwsaUJBQUE7RUhnQk8sY0NuRkk7QUN1RWI7QUZlRztFR2xERCxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUE2QkEsaUJBQUE7RUhzQkcsY0NiTTtFRGNOLGlCQUFBO0FFWEw7QUZlQztFQUNDLGFBQUE7QUViRjtBRmNFO0VBRkQ7SUFHRSxrQkFBQTtJQUNBLGNBQUE7RUVYRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL3NlY3VyaXR5L2NvbXBvbmVudHMvc2VjdXJpdHktYWN0aXZlLWFsZXJ0cy9zZWN1cml0eS1hY3RpdmUtYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIge1xuXG5cdC50YWJzIHtcblx0XHRsaSB7XG5cdFx0XHRwb3NpdGlvbjogJHJlbDtcblx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0d2lkdGg6IDNweDtcblx0XHRcdFx0aGVpZ2h0OiAkZnVsbDtcblx0XHRcdH1cblx0XHRcdCYubWVkaWNhbCB7XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZS1tZWQtMDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYudGhlZnQge1xuXHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGUtdGgtMDI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYuZmlyZSB7XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZS1mZS0wMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5zaG9vdGVyIHtcblx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRlLXNoci0wMjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5wb2xpY2Uge1xuXHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGUtcGMtMDI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5kZXRhaWxzIHtcblx0XHRcdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdFx0ICAgIHdpZHRoOiAkZnVsbDtcblx0XHRcdCAgICBmbG9hdDogbGVmdDtcblx0XHRcdCAgICBib3JkZXI6IG5vbmU7XG5cdFx0XHQgICAgaDUge1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtYmFzZSk7XG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0XHRcdFx0XHRtYXJnaW46IDJweCAwIDAgMDtcblx0XHRcdCAgICB9XG5cdFx0XHR9XG5cdFx0XHQuaW5mbyB7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMjBweDtcblx0XHRcdCAgICB3aWR0aDogJGZ1bGw7XG5cdFx0XHQgICAgZmxvYXQ6IGxlZnQ7XG5cdFx0XHQgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuXHRcdFx0ICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRcdFx0ICAgIFx0bWFyZ2luOiAxMnB4IDAgMCAwO1xuXHRcdFx0ICAgIH1cblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpe1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDQwcHggMCAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRcdFx0ICAgIFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdCAgICBcdH1cblx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRib3JkZXItdG9wOiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuYWRkaXRpb25hbC1kZXNwIHtcblx0XHRcdHBhZGRpbmc6IDIwcHggMzVweDtcblx0XHRcdC5saXN0cyB7XG5cdFx0XHRcdCY6bm90KDpsYXN0LWNoaWxkKXtcblx0XHRcdFx0XHRtYXJnaW46IDAgMCAyMHB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aDUge1xuXHRcdFx0ICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuXHRcdFx0ICAgICAgcGFkZGluZzogMCAwIDRweCAwO1xuXHRcdFx0ICAgICAgY29sb3I6ICRncmV5LTkwMDtcblx0XHRcdCAgICB9XG5cdFx0XHQgICAgcCB7XG5cdFx0XHQgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdCAgICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdCAgICB9XG5cdFx0XHR9XG5cdFx0XHRsYWJlbCB7XG5cdFx0XHQgIEBpbmNsdWRlIGhlYWQtbWVkaXVtO1xuXHRcdFx0ICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XG5cdFx0XHQgIGNvbG9yOiAkZ3JleS05MDA7XG5cdFx0XHQgIG1hcmdpbjogMCAwIDdweCAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRhZ20tbWFwIHtcblx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuXHRcdFx0bWFyZ2luOiAxNXB4IDAgMCAwO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHR9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4OyIsIi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkubWVkaWNhbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0O1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaS50aGVmdDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY2MGE1O1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaS5maXJlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk4MDA7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpLnNob290ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxMDBmZjtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkucG9saWNlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmJmNTg7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiBub25lO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuZGV0YWlscyBoNSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogIzM3Mzk0NjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMnB4IDAgMCAwO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuaW5mbyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIC5pbmZvIHtcbiAgICBtYXJnaW46IDEycHggMCAwIDA7XG4gIH1cbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkgLmluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzM3Mzk0NjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuaW5mbyBwOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW46IDAgNDBweCAwIDAgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIC5pbmZvIHAge1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICB9XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIC5pbmZvIHAgc3BhbiB7XG4gIGNvbG9yOiAjODM5MWExO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIC5hZGRpdGlvbmFsLWRlc3Age1xuICBwYWRkaW5nOiAyMHB4IDM1cHg7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIC5hZGRpdGlvbmFsLWRlc3AgLmxpc3RzOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIC5hZGRpdGlvbmFsLWRlc3AgLmxpc3RzIGg1IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgY29sb3I6ICMxOTFjMWU7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIC5hZGRpdGlvbmFsLWRlc3AgLmxpc3RzIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIC5hZGRpdGlvbmFsLWRlc3AgbGFiZWwge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjMTkxYzFlO1xuICBtYXJnaW46IDAgMCA3cHggMDtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgYWdtLW1hcCB7XG4gIGhlaWdodDogMzAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciBhZ20tbWFwIHtcbiAgICBtYXJnaW46IDE1cHggMCAwIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SecurityActiveAlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityActiveAlertsComponent", function() { return SecurityActiveAlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../.././api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../.././api/services/alert.service */ "./src/app/api/services/alert.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










let SecurityActiveAlertsComponent = class SecurityActiveAlertsComponent {
    constructor(userService, apartmentService, alertService, lookupService, sharedService, cookieService) {
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.alertService = alertService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isAlertsLoaded = false;
        this.isAlertUpdated = false;
        this.userDetails = [];
        this.blockDetails = [];
        this.locationDetails = [];
    }
    getEmergencyType(id) {
        //medical
        if (id == 130) {
            return 'medical';
        }
        else if (id == 131) {
            return 'theft';
        }
        else if (id == 132) {
            return 'fire';
        }
        else if (id == 133) {
            return 'shooter';
        }
        else if (id == 134) {
            return 'police';
        }
        else {
            return 'other';
        }
    }
    getAlertName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.emergencyTypeList, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName.toLowerCase();
        }
    }
    getAlertStatus(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.alertTypeList, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName.toLowerCase();
        }
    }
    getBlock(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.blockDetails, function (item) {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].apartmentBlockNumber + " " + data[0].apartmentBlockUnitNumber;
        }
    }
    getUserName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.userDetails, function (item) {
            if (item.userId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].firstName;
        }
    }
    getContactNumber(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.userDetails, function (item) {
            if (item.userId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].phoneNumber;
        }
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(date).format("MM/DD/YYYY, h:mm A");
    }
    getDateTime(date) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(date).format("MM/DD/YYYY, h:mm A");
    }
    isOpenStatus(id) {
        return id == 135 ? true : false; // 135 - open status
    }
    isInProgressStatus(id) {
        return id == 136 ? true : false; // 135 - inprogress status
    }
    isClosedStatus(id) {
        return id == 137 ? true : false; // 135 - closed status
    }
    getLatitude(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.locationDetails, function (item) {
            if (item.userId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            var map = data[0].coords;
            var latitude = map.split(',');
            return parseFloat(latitude[0]);
        }
    }
    getLongitude(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.locationDetails, function (item) {
            if (item.userId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            var map = data[0].coords;
            var longitude = map.split(',');
            return parseFloat(longitude[1]);
        }
    }
    approveAlert(alert, type) {
        this.isAlertUpdated = true;
        let details = {};
        if (alert.gpslocation == null) {
            alert.gpslocation = " ";
        }
        if (type == 'approve') {
            details = {
                "apartmentBlockUnitAlertId": alert.apartmentBlockUnitAlertId,
                "apartmentBlockUnitId": alert.apartmentBlockUnitId,
                "receivedDate": alert.receivedDate,
                "alertTypeId": alert.alertTypeId,
                "location": "string",
                "gpslocation": alert.gpslocation,
                "assignedTo": parseInt(this.cookieService.get('userId')),
                "alertStatusId": 136,
                "notes": alert.notes,
                "isActive": alert.isActive,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-12-06T13:45:09.296Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-12-06T13:45:09.296Z"
            };
        }
        else {
            details = {
                "apartmentBlockUnitAlertId": alert.apartmentBlockUnitAlertId,
                "apartmentBlockUnitId": alert.apartmentBlockUnitId,
                "receivedDate": alert.receivedDate,
                "alertTypeId": alert.alertTypeId,
                "location": "string",
                "gpslocation": alert.gpslocation,
                "assignedTo": parseInt(this.cookieService.get('userId')),
                "alertStatusId": 137,
                "notes": alert.notes,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-12-06T13:45:09.296Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-12-06T13:45:09.296Z"
            };
        }
        this.alertService.updateApartmentBlockUnitAlert(details).subscribe((res) => {
            if (res.message) {
                this.alertService.getAllApartmentBlockUnitAlertByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((alert) => {
                    this.alertList = alert.filter(item => {
                        return item.isActive;
                    });
                    this.isAlertUpdated = false;
                }, error => {
                    console.log(error);
                });
            }
            else {
                this.isAlertUpdated = false;
            }
        }, error => {
            console.log(error);
        });
    }
    isNoAlerts() {
        return this.alertList.length == 0 ? true : false;
    }
    ngOnInit() {
        this.alert = {};
        this.alert.gpsLocation = " ";
        this.alert.notes = " ";
        this.alertService.getAllApartmentBlockUnitAlertByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((alert) => {
            this.alertList = alert.filter(item => {
                return item.isActive;
            });
            this.isAlertsLoaded = true;
            console.log(this.alertList);
            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.alertList, item => {
                this.userService.getUserById(parseInt(item.insertedBy)).subscribe((user) => {
                    this.userDetails.push(user[0]);
                    console.log(this.userDetails);
                }, error => {
                    console.log(error);
                });
                this.apartmentService.getApartmentBlockUnitById(item.apartmentBlockUnitId).subscribe((user) => {
                    this.blockDetails.push(user[0]);
                }, error => {
                    console.log(error);
                });
                if (item.gpslocation === null || item.gpslocation === undefined || item.gpslocation.length == 0) {
                    item.gpslocation = "47.4925,19.0513";
                }
                this.locationDetails.push({ userId: item.insertedBy, coords: item.gpslocation });
                // console.log(this.locationDetails);
            });
        }, error => {
            console.log(error);
        });
        //get emergency types
        this.lookupService.getLookupValueByLookupTypeId(29).subscribe((res) => {
            this.emergencyTypeList = res;
        });
        //get alert status types
        this.lookupService.getLookupValueByLookupTypeId(30).subscribe((res) => {
            this.alertTypeList = res;
        });
    }
};
SecurityActiveAlertsComponent.ctorParameters = () => [
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: _api_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
SecurityActiveAlertsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-active-alerts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./security-active-alerts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./security-active-alerts.component.scss */ "./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        _api_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], SecurityActiveAlertsComponent);



/***/ }),

/***/ "./src/app/ams/security/components/security-history/security-history.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/ams/security/components/security-history/security-history.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zZWN1cml0eS9jb21wb25lbnRzL3NlY3VyaXR5LWhpc3Rvcnkvc2VjdXJpdHktaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/security/components/security-history/security-history.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ams/security/components/security-history/security-history.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SecurityHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityHistoryComponent", function() { return SecurityHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SecurityHistoryComponent = class SecurityHistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
SecurityHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./security-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-history/security-history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./security-history.component.scss */ "./src/app/ams/security/components/security-history/security-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SecurityHistoryComponent);



/***/ }),

/***/ "./src/app/ams/security/components/security-reports/security-reports.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/ams/security/components/security-reports/security-reports.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zZWN1cml0eS9jb21wb25lbnRzL3NlY3VyaXR5LXJlcG9ydHMvc2VjdXJpdHktcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/security/components/security-reports/security-reports.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ams/security/components/security-reports/security-reports.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SecurityReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityReportsComponent", function() { return SecurityReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SecurityReportsComponent = class SecurityReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SecurityReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./security-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-reports/security-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./security-reports.component.scss */ "./src/app/ams/security/components/security-reports/security-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SecurityReportsComponent);



/***/ }),

/***/ "./src/app/ams/security/components/security-setup/security-setup.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/ams/security/components/security-setup/security-setup.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zZWN1cml0eS9jb21wb25lbnRzL3NlY3VyaXR5LXNldHVwL3NlY3VyaXR5LXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/security/components/security-setup/security-setup.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ams/security/components/security-setup/security-setup.component.ts ***!
  \************************************************************************************/
/*! exports provided: SecuritySetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuritySetupComponent", function() { return SecuritySetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SecuritySetupComponent = class SecuritySetupComponent {
    constructor() { }
    ngOnInit() {
    }
};
SecuritySetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./security-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-setup/security-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./security-setup.component.scss */ "./src/app/ams/security/components/security-setup/security-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SecuritySetupComponent);



/***/ }),

/***/ "./src/app/ams/security/security-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ams/security/security-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SecurityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRoutingModule", function() { return SecurityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_security_setup_security_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/security-setup/security-setup.component */ "./src/app/ams/security/components/security-setup/security-setup.component.ts");
/* harmony import */ var _components_security_active_alerts_security_active_alerts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/security-active-alerts/security-active-alerts.component */ "./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.ts");
/* harmony import */ var _components_security_history_security_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/security-history/security-history.component */ "./src/app/ams/security/components/security-history/security-history.component.ts");
/* harmony import */ var _components_security_reports_security_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/security-reports/security-reports.component */ "./src/app/ams/security/components/security-reports/security-reports.component.ts");







const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_security_setup_security_setup_component__WEBPACK_IMPORTED_MODULE_3__["SecuritySetupComponent"] },
    { path: 'active-alerts', component: _components_security_active_alerts_security_active_alerts_component__WEBPACK_IMPORTED_MODULE_4__["SecurityActiveAlertsComponent"] },
    { path: 'history', component: _components_security_history_security_history_component__WEBPACK_IMPORTED_MODULE_5__["SecurityHistoryComponent"] },
    { path: 'reports', component: _components_security_reports_security_reports_component__WEBPACK_IMPORTED_MODULE_6__["SecurityReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let SecurityRoutingModule = class SecurityRoutingModule {
};
SecurityRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SecurityRoutingModule);



/***/ }),

/***/ "./src/app/ams/security/security.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ams/security/security.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zZWN1cml0eS9zZWN1cml0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/security/security.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ams/security/security.component.ts ***!
  \****************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SecurityComponent = class SecurityComponent {
    constructor() { }
    ngOnInit() {
    }
};
SecurityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./security.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/security.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./security.component.scss */ "./src/app/ams/security/security.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SecurityComponent);



/***/ }),

/***/ "./src/app/ams/security/security.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ams/security/security.module.ts ***!
  \*************************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security-routing.module */ "./src/app/ams/security/security-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _security_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security.component */ "./src/app/ams/security/security.component.ts");
/* harmony import */ var _components_security_setup_security_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/security-setup/security-setup.component */ "./src/app/ams/security/components/security-setup/security-setup.component.ts");
/* harmony import */ var _components_security_active_alerts_security_active_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/security-active-alerts/security-active-alerts.component */ "./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.ts");
/* harmony import */ var _components_security_history_security_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/security-history/security-history.component */ "./src/app/ams/security/components/security-history/security-history.component.ts");
/* harmony import */ var _components_security_reports_security_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/security-reports/security-reports.component */ "./src/app/ams/security/components/security-reports/security-reports.component.ts");










let SecurityModule = class SecurityModule {
};
SecurityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _security_component__WEBPACK_IMPORTED_MODULE_5__["SecurityComponent"],
            _components_security_setup_security_setup_component__WEBPACK_IMPORTED_MODULE_6__["SecuritySetupComponent"],
            _components_security_active_alerts_security_active_alerts_component__WEBPACK_IMPORTED_MODULE_7__["SecurityActiveAlertsComponent"],
            _components_security_history_security_history_component__WEBPACK_IMPORTED_MODULE_8__["SecurityHistoryComponent"],
            _components_security_reports_security_reports_component__WEBPACK_IMPORTED_MODULE_9__["SecurityReportsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _security_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecurityRoutingModule"]
        ],
        bootstrap: [_security_component__WEBPACK_IMPORTED_MODULE_5__["SecurityComponent"]]
    })
], SecurityModule);



/***/ })

}]);
//# sourceMappingURL=security-security-module-es2015.js.map