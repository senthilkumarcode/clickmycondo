(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-security-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"secuirty-active-alerts-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isAlertsLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isAlertsLoaded\">\n\t\t\n\t\t<h3 class=\"main-title\">Active Alerts</h3>\n\n\t\t<div class=\"card mb-30\">\n\t\t\t\n\t\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\t\t\t\t\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngFor=\"let alert of alertList\">\n\t\t\t\t\t\t<li class=\"list-group-item collapsed {{getEmergencyType(alert.alertTypeId)}} \" data-toggle=\"collapse\" attr.data-target=\"#collapse{{alert.apartmentBlockUnitAlertId}}\" aria-expanded=\"true\" attr.aria-controls=\"collapseOne\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"s-circle {{getEmergencyType(alert.alertTypeId)}} text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/{{getEmergencyType(alert.alertTypeId)}}-e-icon.svg\" width=\"14\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>{{getAlertName(alert.alertTypeId)}}</h5>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"float-right mr-4\">\n\t\t\t\t\t\t\t\t\t<span class=\"badge small min ml-3 text-capitalize\" [ngClass]=\"getAlertStatus(alert.alertStatusId)\">{{getAlertStatus(alert.alertStatusId)}}</span>\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<p><span class=\"mr-2\">Date:</span>{{getDate(alert.receivedDate)}}</p>\n\t\t\t\t\t\t\t\t<p><span class=\"mr-2\">Block:</span>{{getBlock(alert.apartmentBlockUnitId)}}</p>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<div id=\"collapse{{alert.apartmentBlockUnitAlertId}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<app-loader *ngIf=\"isAlertUpdated\"></app-loader>\n\n\t\t\t\t\t\t\t<div class=\"additional-desp\" *ngIf=\"!isAlertUpdated\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Person Name</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{getUserName(alert.insertedBy)}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Phone Number</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{getContactNumber(alert.insertedBy)}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Alert Received Time</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{getDateTime(alert.receivedDate)}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- <agm-map [latitude]='getLatitude(alert.insertedBy)' [longitude]='getLongitude(alert.insertedBy)'></agm-map> -->\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"!isOpenStatus(alert.alertStatusId)\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 mt-4 mb-2\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                    <label>Comments</label>\n\t\t\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"healthIssue\" [(ngModel)]=\"alert.notes\"></textarea>\n\t\t\t\t\t                \t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"btn-wrapper text-center\" *ngIf=\"isOpenStatus(alert.alertStatusId)\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn blue mt-4 mb-4\" (click)=\"approveAlert(alert, 'approve')\">Acknowledge</a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"btn-wrapper text-center\" *ngIf=\"isInProgressStatus(alert.alertStatusId)\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn blue mt-4 mb-4\" (click)=\"approveAlert(alert, 'close')\">Close</a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\n\n\t\t\t\t\t <ng-container *ngIf=\"isNoAlerts()\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body gen-message\">\n\t\t\t\t\t\t\t\t<h4>No Active Alerts available</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\n\t</ng-container>\n\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".secuirty-active-alerts-wrapper .tabs li {\n  position: relative;\n}\n.secuirty-active-alerts-wrapper .tabs li:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 3px;\n  height: 100% !important;\n}\n.secuirty-active-alerts-wrapper .tabs li.medical:before {\n  background-color: #00bcd4;\n}\n.secuirty-active-alerts-wrapper .tabs li.theft:before {\n  background-color: #ef60a5;\n}\n.secuirty-active-alerts-wrapper .tabs li.fire:before {\n  background-color: #FF9800;\n}\n.secuirty-active-alerts-wrapper .tabs li.shooter:before {\n  background-color: #9100ff;\n}\n.secuirty-active-alerts-wrapper .tabs li.police:before {\n  background-color: #06bf58;\n}\n.secuirty-active-alerts-wrapper .tabs li .details {\n  padding: 0 20px;\n  width: 100% !important;\n  float: left;\n  border: none;\n}\n.secuirty-active-alerts-wrapper .tabs li .details h5 {\n  font-size: 1.8rem;\n  color: #373946;\n  text-transform: capitalize;\n  margin: 2px 0 0 0;\n}\n.secuirty-active-alerts-wrapper .tabs li .info {\n  padding: 0 20px;\n  width: 100% !important;\n  float: left;\n  margin: 10px 0 0 0;\n}\n@media (max-width: 576px) {\n  .secuirty-active-alerts-wrapper .tabs li .info {\n    margin: 12px 0 0 0;\n  }\n}\n.secuirty-active-alerts-wrapper .tabs li .info p {\n  font-size: 1.4rem;\n  color: #373946;\n  display: inline-block;\n}\n.secuirty-active-alerts-wrapper .tabs li .info p:not(:last-child) {\n  margin: 0 40px 0 0 !important;\n}\n@media (max-width: 576px) {\n  .secuirty-active-alerts-wrapper .tabs li .info p {\n    margin: 0 0 8px 0;\n  }\n}\n.secuirty-active-alerts-wrapper .tabs li .info p span {\n  color: #8391a1;\n}\n.secuirty-active-alerts-wrapper .tabs li:first-child {\n  border-top: none;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp {\n  padding: 20px 35px;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp .lists:not(:last-child) {\n  margin: 0 0 20px 0;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp .lists h5 {\n  font-size: 1.6rem;\n  padding: 0 0 4px 0;\n  color: #191c1e;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp .lists p {\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp label {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  color: #191c1e;\n  margin: 0 0 7px 0;\n}\n.secuirty-active-alerts-wrapper agm-map {\n  height: 300px;\n}\n@media (max-width: 991px) {\n  .secuirty-active-alerts-wrapper agm-map {\n    margin: 15px 0 0 0;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvc2VjdXJpdHkvY29tcG9uZW50cy9zZWN1cml0eS1hY3RpdmUtYWxlcnRzL3NlY3VyaXR5LWFjdGl2ZS1hbGVydHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hbXMvc2VjdXJpdHkvY29tcG9uZW50cy9zZWN1cml0eS1hY3RpdmUtYWxlcnRzL3NlY3VyaXR5LWFjdGl2ZS1hbGVydHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDQyxrQkNIRTtBQ0hMO0FGT0c7RUFDQyxXQUFBO0VBQ0Esa0JDUEM7RURRRCxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkM4R0U7QUNuSE47QUZRSTtFQUNDLHlCQ3NDTTtBQzVDWDtBRlVJO0VBQ0MseUJDcUNLO0FDN0NWO0FGWUk7RUFDQyx5QkNrQ0s7QUM1Q1Y7QUZjSTtFQUNDLHlCQ2lDTTtBQzdDWDtBRmdCSTtFQUNDLHlCQytCSztBQzdDVjtBRmlCRztFQUNDLGVBQUE7RUFDRyxzQkNpRkQ7RURoRkMsV0FBQTtFQUNBLFlBQUE7QUVmUDtBRmdCTztFR0dMLGlCQUFBO0VIREcsY0M0Qk07RUQzQk4sMEJBQUE7RUFDQSxpQkFBQTtBRWRMO0FGaUJHO0VBQ0MsZUFBQTtFQUNHLHNCQ3FFRDtFRHBFQyxXQUFBO0VBQ0Esa0JBQUE7QUVmUDtBRmdCTztFQUxKO0lBTUssa0JBQUE7RUViTjtBQUNGO0FGY0k7RUdaRixpQkFBQTtFSGNHLGNDYU07RURaTixxQkFBQTtBRVpMO0FGYUs7RUFDQyw2QkFBQTtBRVhOO0FGYUs7RUFQRDtJQVFLLGlCQUFBO0VFVlA7QUFDRjtBRldLO0VBQ0MsY0M5RE87QUNxRGI7QUZhRztFQUNDLGdCQUFBO0FFWEo7QUZjRTtFQUNDLGtCQUFBO0FFWkg7QUZjSTtFQUNDLGtCQUFBO0FFWkw7QUZjSTtFR3JDRixpQkFBQTtFSHVDTyxrQkFBQTtFQUNBLGNDZkU7QUNHWDtBRmNPO0VHMUNMLGlCQUFBO0VINENPLGNDbkZJO0FDdUViO0FGZUc7RUc5RUQscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBNkJBLGlCQUFBO0VIa0RHLGNDekJNO0VEMEJOLGlCQUFBO0FFWEw7QUZlQztFQUNDLGFBQUE7QUViRjtBRmNFO0VBRkQ7SUFHRSxrQkFBQTtJQUNBLGNBQUE7RUVYRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL3NlY3VyaXR5L2NvbXBvbmVudHMvc2VjdXJpdHktYWN0aXZlLWFsZXJ0cy9zZWN1cml0eS1hY3RpdmUtYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIge1xuXG5cdC50YWJzIHtcblx0XHRsaSB7XG5cdFx0XHRwb3NpdGlvbjogJHJlbDtcblx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0d2lkdGg6IDNweDtcblx0XHRcdFx0aGVpZ2h0OiAkZnVsbDtcblx0XHRcdH1cblx0XHRcdCYubWVkaWNhbCB7XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZS1tZWQtMDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYudGhlZnQge1xuXHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGUtdGgtMDI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYuZmlyZSB7XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZS1mZS0wMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5zaG9vdGVyIHtcblx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRlLXNoci0wMjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5wb2xpY2Uge1xuXHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGUtcGMtMDI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5kZXRhaWxzIHtcblx0XHRcdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdFx0ICAgIHdpZHRoOiAkZnVsbDtcblx0XHRcdCAgICBmbG9hdDogbGVmdDtcblx0XHRcdCAgICBib3JkZXI6IG5vbmU7XG5cdFx0XHQgICAgaDUge1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtYmFzZSk7XG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0XHRcdFx0XHRtYXJnaW46IDJweCAwIDAgMDtcblx0XHRcdCAgICB9XG5cdFx0XHR9XG5cdFx0XHQuaW5mbyB7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMjBweDtcblx0XHRcdCAgICB3aWR0aDogJGZ1bGw7XG5cdFx0XHQgICAgZmxvYXQ6IGxlZnQ7XG5cdFx0XHQgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuXHRcdFx0ICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRcdFx0ICAgIFx0bWFyZ2luOiAxMnB4IDAgMCAwO1xuXHRcdFx0ICAgIH1cblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpe1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDQwcHggMCAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRcdFx0ICAgIFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdCAgICBcdH1cblx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRib3JkZXItdG9wOiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuYWRkaXRpb25hbC1kZXNwIHtcblx0XHRcdHBhZGRpbmc6IDIwcHggMzVweDtcblx0XHRcdC5saXN0cyB7XG5cdFx0XHRcdCY6bm90KDpsYXN0LWNoaWxkKXtcblx0XHRcdFx0XHRtYXJnaW46IDAgMCAyMHB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aDUge1xuXHRcdFx0ICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuXHRcdFx0ICAgICAgcGFkZGluZzogMCAwIDRweCAwO1xuXHRcdFx0ICAgICAgY29sb3I6ICRncmV5LTkwMDtcblx0XHRcdCAgICB9XG5cdFx0XHQgICAgcCB7XG5cdFx0XHQgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdCAgICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdCAgICB9XG5cdFx0XHR9XG5cdFx0XHRsYWJlbCB7XG5cdFx0XHQgIEBpbmNsdWRlIGhlYWQtbWVkaXVtO1xuXHRcdFx0ICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XG5cdFx0XHQgIGNvbG9yOiAkZ3JleS05MDA7XG5cdFx0XHQgIG1hcmdpbjogMCAwIDdweCAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRhZ20tbWFwIHtcblx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuXHRcdFx0bWFyZ2luOiAxNXB4IDAgMCAwO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHR9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWJjYzczO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiLCIuc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpLm1lZGljYWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNDtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkudGhlZnQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNjBhNTtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkuZmlyZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5ODAwO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaS5zaG9vdGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTAwZmY7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpLnBvbGljZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZiZjU4O1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkgLmRldGFpbHMgaDUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDJweCAwIDAgMDtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkgLmluZm8ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuaW5mbyB7XG4gICAgbWFyZ2luOiAxMnB4IDAgMCAwO1xuICB9XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIC5pbmZvIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkgLmluZm8gcDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luOiAwIDQwcHggMCAwICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuaW5mbyBwIHtcbiAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgfVxufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuaW5mbyBwIHNwYW4ge1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyAuYWRkaXRpb25hbC1kZXNwIHtcbiAgcGFkZGluZzogMjBweCAzNXB4O1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyAuYWRkaXRpb25hbC1kZXNwIC5saXN0czpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyAuYWRkaXRpb25hbC1kZXNwIC5saXN0cyBoNSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gIGNvbG9yOiAjMTkxYzFlO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyAuYWRkaXRpb25hbC1kZXNwIC5saXN0cyBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjODM5MWExO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyAuYWRkaXRpb25hbC1kZXNwIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzE5MWMxZTtcbiAgbWFyZ2luOiAwIDAgN3B4IDA7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIGFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgYWdtLW1hcCB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../.././api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../.././api/services/alert.service */ "./src/app/api/services/alert.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);
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
        return moment__WEBPACK_IMPORTED_MODULE_9__(date).format("MM/DD/YYYY");
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
            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.alertList, item => {
                this.userService.getUserById(parseInt(item.insertedBy)).subscribe((user) => {
                    this.userDetails.push(user[0]);
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
                console.log(this.locationDetails);
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
SecurityActiveAlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-active-alerts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./security-active-alerts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./security-active-alerts.component.scss */ "./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SecurityHistoryComponent = class SecurityHistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
SecurityHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./security-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-history/security-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./security-history.component.scss */ "./src/app/ams/security/components/security-history/security-history.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SecurityReportsComponent = class SecurityReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SecurityReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./security-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-reports/security-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./security-reports.component.scss */ "./src/app/ams/security/components/security-reports/security-reports.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SecuritySetupComponent = class SecuritySetupComponent {
    constructor() { }
    ngOnInit() {
    }
};
SecuritySetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-setup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./security-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-setup/security-setup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./security-setup.component.scss */ "./src/app/ams/security/components/security-setup/security-setup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
SecurityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SecurityComponent = class SecurityComponent {
    constructor() { }
    ngOnInit() {
    }
};
SecurityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./security.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/security.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./security.component.scss */ "./src/app/ams/security/security.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security-routing.module */ "./src/app/ams/security/security-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _security_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security.component */ "./src/app/ams/security/security.component.ts");
/* harmony import */ var _components_security_setup_security_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/security-setup/security-setup.component */ "./src/app/ams/security/components/security-setup/security-setup.component.ts");
/* harmony import */ var _components_security_active_alerts_security_active_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/security-active-alerts/security-active-alerts.component */ "./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.ts");
/* harmony import */ var _components_security_history_security_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/security-history/security-history.component */ "./src/app/ams/security/components/security-history/security-history.component.ts");
/* harmony import */ var _components_security_reports_security_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/security-reports/security-reports.component */ "./src/app/ams/security/components/security-reports/security-reports.component.ts");










let SecurityModule = class SecurityModule {
};
SecurityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
            _security_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecurityRoutingModule"]
        ],
        bootstrap: [_security_component__WEBPACK_IMPORTED_MODULE_5__["SecurityComponent"]]
    })
], SecurityModule);



/***/ })

}]);
//# sourceMappingURL=security-security-module-es2015.js.map