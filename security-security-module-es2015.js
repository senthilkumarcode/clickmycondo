(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-security-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"secuirty-active-alerts-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isAlertsLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isAlertsLoaded\">\n\t\t\n\t\t<h3 class=\"main-title\">Active Alerts</h3>\n\n\t\t<!-- <button (click) = sortAlerts()>Sort Alert</button> -->\n\n\t\t<div class=\"card mb-30\">\n\t\t\t\n\t\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\t\t\t\t\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngFor=\"let alert of alertList\">\n\t\t\t\t\t\t<li class=\"list-group-item collapsed {{getEmergencyType(alert.alertTypeId)}} \" data-toggle=\"collapse\" attr.data-target=\"#collapse{{alert.apartmentBlockUnitAlertId}}\" aria-expanded=\"true\" attr.aria-controls=\"collapseOne\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"s-circle {{getEmergencyType(alert.alertTypeId)}} text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/{{getEmergencyType(alert.alertTypeId)}}-e-icon.svg\" width=\"14\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>{{getAlertName(alert.alertTypeId)}}</h5>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"float-right mr-4\">\n\t\t\t\t\t\t\t\t\t<span class=\"badge small min ml-3 text-capitalize\" [ngClass]=\"getAlertStatus(alert.alertStatusId)\">{{getAlertStatus(alert.alertStatusId)}}</span>\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<p><span class=\"mr-2\">Date:</span>{{getDate(alert.receivedDate)}}</p>\n\t\t\t\t\t\t\t\t<p><span class=\"mr-2\">Block:</span>{{getBlock(alert.apartmentBlockUnitId)}}</p>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<div id=\"collapse{{alert.apartmentBlockUnitAlertId}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<app-loader *ngIf=\"isAlertUpdated\"></app-loader>\n\n\t\t\t\t\t\t\t<div class=\"additional-desp\" *ngIf=\"!isAlertUpdated\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Person Name</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{getUserName(alert.insertedBy)}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Phone Number</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{getContactNumber(alert.insertedBy)}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Alert Received Time</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>{{getDateTime(alert.receivedDate)}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- <agm-map [latitude]='getLatitude(alert.insertedBy)' [longitude]='getLongitude(alert.insertedBy)'></agm-map> -->\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"!isOpenStatus(alert.alertStatusId)\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 mt-4 mb-2\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t                    <label>Comments</label>\n\t\t\t\t\t\t\t\t\t\t\t<textarea placeholder=\"some text here\" name=\"healthIssue\" *ngIf=\"!isInProgressStatus(alert.alertStatusId)\" [(ngModel)]=\"alert.notes\" [disabled]=\"true\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t<textarea placeholder=\"some text here\" name=\"healthIssue\" *ngIf=\"isInProgressStatus(alert.alertStatusId)\" [(ngModel)]=\"alert.notes\" ></textarea>\n\t\t\t\t\t                \t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"btn-wrapper text-center\" *ngIf=\"isOpenStatus(alert.alertStatusId)\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn blue mt-4 mb-4\" (click)=\"approveAlert(alert, 'approve')\">Acknowledge</a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"btn-wrapper text-center\" *ngIf=\"isInProgressStatus(alert.alertStatusId)\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn blue mt-4 mb-4\" (click)=\"approveAlert(alert, 'close')\">Close</a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\n\n\t\t\t\t\t <ng-container *ngIf=\"isNoAlerts()\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body gen-message\">\n\t\t\t\t\t\t\t\t<h4>No Active Alerts available</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-history/security-history.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-history/security-history.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"secuirty-closed-alerts-wrapper\">\n\n  <app-loader *ngIf=\"!isAlertsLoaded\"></app-loader>\n\n  <ng-container *ngIf=\"isAlertsLoaded\">\n\n    <h3 class=\"main-title\">Closed Alerts</h3>\n\n    <div class=\"card mb-30\">\n\n      <div class=\"card-body p-0\" id=\"accordion\">\n\n        <ul class=\"list-group tabs clear\">\n\n          <ng-container *ngFor=\"let alert of alertList\">\n            <li class=\"list-group-item collapsed {{getEmergencyType(alert.alertTypeId)}} \" data-toggle=\"collapse\" attr.data-target=\"#collapse{{alert.apartmentBlockUnitAlertId}}\" aria-expanded=\"true\" attr.aria-controls=\"collapseOne\">\n\n              <div class=\"details\">\n\n                <div class=\"float-left\">\n\n                  <div class=\"media\">\n                    <div class=\"s-circle {{getEmergencyType(alert.alertTypeId)}} text-center\">\n                      <img src=\"assets/images/{{getEmergencyType(alert.alertTypeId)}}-e-icon.svg\" width=\"14\" />\n                    </div>\n                    <div class=\"media-body\">\n                      <h5>{{getAlertName(alert.alertTypeId)}}</h5>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"float-right mr-4\">\n                  <span class=\"badge small min ml-3 text-capitalize\" [ngClass]=\"getAlertStatus(alert.alertStatusId)\">{{getAlertStatus(alert.alertStatusId)}}</span>\n                </div>\n\n\n              </div>\n\n              <div class=\"info\">\n                <p><span class=\"mr-2\">Date:</span>{{getDate(alert.receivedDate)}}</p>\n                <p><span class=\"mr-2\">Block:</span>{{getBlock(alert.apartmentBlockUnitId)}}</p>\n              </div>\n\n\n            </li>\n            <div id=\"collapse{{alert.apartmentBlockUnitAlertId}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\n              <app-loader *ngIf=\"isAlertUpdated\"></app-loader>\n\n              <div class=\"additional-desp\" *ngIf=\"!isAlertUpdated\">\n\n                <div class=\"row\">\n\n                  <div class=\"col-sm-6\">\n\n                    <div class=\"lists\">\n                      <h5>Person Name</h5>\n                      <p>{{getUserName(alert.insertedBy)}}</p>\n                    </div>\n\n                    <div class=\"lists\">\n                      <h5>Phone Number</h5>\n                      <p>{{getContactNumber(alert.insertedBy)}}</p>\n                    </div>\n\n                    <div class=\"lists\">\n                      <h5>Alert Received Time</h5>\n                      <p>{{getDateTime(alert.receivedDate)}}</p>\n                    </div>\n\n                  </div>\n                  <div class=\"col-sm-6\">\n\n                    <!-- <agm-map [latitude]='getLatitude(alert.insertedBy)' [longitude]='getLongitude(alert.insertedBy)'></agm-map> -->\n\n                  </div>\n\n                </div>\n\n                <div class=\"row\" *ngIf=\"!isOpenStatus(alert.alertStatusId)\">\n\n                  <div class=\"col-sm-12 mt-4 mb-2\">\n\n                    <div class=\"input-box\">\n                      <label>Comments</label>\n                      <textarea placeholder=\"some text here\" name=\"healthIssue\" *ngIf=\"!isInProgressStatus(alert.alertStatusId)\" [(ngModel)]=\"alert.notes\" [disabled]=\"true\"></textarea>\n                      <textarea placeholder=\"some text here\" name=\"healthIssue\" *ngIf=\"isInProgressStatus(alert.alertStatusId)\" [(ngModel)]=\"alert.notes\"></textarea>\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n          </ng-container>\n\n\n          <ng-container *ngIf=\"isNoAlerts()\">\n\n            <div class=\"card\">\n              <div class=\"card-body gen-message\">\n                <h4>No Closed Alerts available</h4>\n              </div>\n            </div>\n\n          </ng-container>\n\n        </ul>\n\n      </div>\n\n    </div>\n\n\n  </ng-container>\n\n</div>\n\n\n  \t\t<!-- <div class=\"card-body p-0\">\n\n  \t\t\t  <jqxGrid\n\t\t\t\t[theme]=\"'material'\"\n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\"\n\t\t\t\t[sortable]=\"true\"\n\t\t\t\t[source]=\"historyData\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n        #datagrid>\n        </jqxGrid>\n\n      </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-reports/security-reports.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-reports/security-reports.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-tracker-reports-customer-reports\">\n\n\t<h4 class=\"main-title-mini\">Security Alert Reports</h4>\n\n\t<div class=\"card clear\">\n\n\t\t<div class=\"card-body\">\n\n\t\t\t<form #alertReportsCustomerForm = \"ngForm\" name=\"alertReportsCustomerForm\" (ngSubmit)=\"submitSecurityAlertReports(alertReportsCustomerForm)\"  novalidate>\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Block No</label>\n\t\t                    <select\n\t\t\t\t\t\t        name=\"blockNo\"\n\t\t\t\t\t\t        id=\"blockNo\"\n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.apartmentBlockID\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"select-box\">\n                        <label>Emergency Category</label>\n                        <select\n                    name=\"emergencyType\"\n                    id=\"emergencyType\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"report.emergencyCategoryTypeID\">\n                    <option value=\"\" disabled selected>Select</option>\n                    <option *ngFor=\"let item of securityCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n              </select>\n                  </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"select-box\">\n                        <label>Alert Type</label>\n                        <select\n                    name=\"alertType\"\n                    id=\"alertType\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"report.alertTypeStatusID\">\n                    <option value=\"\" disabled selected>Select</option>\n                    <option *ngFor=\"let item of alertTypeStatus\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }} </option>\n              </select>\n                  </div>\n          </div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box mb-3\">\n\t\t                    <label>Start Date</label>\n\t\t                    <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Date\" [(ngModel)]=\"report.startDate\">\n\t\t\t\t\t\t\t<owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>End Date</label>\n\t\t                    <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"Date\" [(ngModel)]=\"report.endDate\">\n\t\t\t\t\t\t\t<owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"alertReportsCustomerForm.invalid\">Generate</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear mt-30\" *ngIf=\"isDataLoaded && !isReportSubmitted\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"list-inline float-left\">\n    \t\t\t<h5>Reports <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<p *ngIf=\"!isReportSubmitted\">Transactions From <span class=\"tc-blue m-bold\">{{getDate(report.startDate)}}</span> To <span class=\"tc-blue m-bold\">{{getDate(report.endDate)}}</span> </p>\n    \t\t</div>\n    \t\t<!-- <ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"reportsData\" >\n    \t\t\t</li>\n    \t\t</ul> -->\n  \t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<table class=\"table table-stretch table-responsive\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('category')\"> Category<span [ngClass]=\"getFieldOrderBy('category')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('creationDate')\">Date of Creation<span [ngClass]=\"getFieldOrderBy('creationDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('alertStatus')\">Status<span [ngClass]=\"getFieldOrderBy('alertStatus')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('notes')\">Note<span [ngClass]=\"getFieldOrderBy('notes')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let report of alertReportsDataList | slice:ItemStartIndex:ItemEndIndex | simpleSearch: reportsData | orderBy : unitFieldType: unitOrder ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{report.blockNo}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.category}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDateFormat(report.creationDate)}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.alertStatus}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.notes}}</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination\n\t\t\t\t[totalItems]=\"totalItems\"\n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-setup/security-setup.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-setup/security-setup.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inventorys-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isSecurityCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isSecurityCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Security Alert Categories</h4>\n\t\t<ng-container *ngFor=\"let item of securityCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0)\" routerLink=\"/ams/security/view/{{item.lookupValueId}}\"\n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a> -->\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateSecurityCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-none\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteSecurityCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\n\t\t\t\t\t\t<!-- <p>{{getSecurityList(item.lookupValueId)}} Inventorie(s) added</p> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewSecurityCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isSecurityCategoryNew || isSecurityCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isSecurityCategoryNew\">Add Security Category</h6>\n    \t\t\t<h6 *ngIf=\"!isSecurityCategoryNew\">Update Security Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"alertTicketMessage\" [isError]=\"isCategoryError\" [isSuccess]=\"isCategorySuccess\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isSecurityCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isSecurityCategorySubmitted\">\n\n\t\t\t\t<form #addSecurityCategoryForm = \"ngForm\" name=\"addSecurityCategoryForm\" (ngSubmit)=\"submitSecurityCategoryForm(addSecurityCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"securityCategory\" [(ngModel)]=\"securityCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addSecurityCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".secuirty-active-alerts-wrapper .tabs li {\n  position: relative;\n}\n.secuirty-active-alerts-wrapper .tabs li:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 3px;\n  height: 100% !important;\n}\n.secuirty-active-alerts-wrapper .tabs li.medical:before {\n  background-color: #00bcd4;\n}\n.secuirty-active-alerts-wrapper .tabs li.theft:before {\n  background-color: #ef60a5;\n}\n.secuirty-active-alerts-wrapper .tabs li.fire:before {\n  background-color: #FF9800;\n}\n.secuirty-active-alerts-wrapper .tabs li.shooter:before {\n  background-color: #9100ff;\n}\n.secuirty-active-alerts-wrapper .tabs li.police:before {\n  background-color: #06bf58;\n}\n.secuirty-active-alerts-wrapper .tabs li .details {\n  padding: 0 20px;\n  width: 100% !important;\n  float: left;\n  border: none;\n}\n.secuirty-active-alerts-wrapper .tabs li .details h5 {\n  font-size: 1.8rem;\n  color: #373946;\n  text-transform: capitalize;\n  margin: 2px 0 0 0;\n}\n.secuirty-active-alerts-wrapper .tabs li .info {\n  padding: 0 20px;\n  width: 100% !important;\n  float: left;\n  margin: 10px 0 0 0;\n}\n@media (max-width: 576px) {\n  .secuirty-active-alerts-wrapper .tabs li .info {\n    margin: 12px 0 0 0;\n  }\n}\n.secuirty-active-alerts-wrapper .tabs li .info p {\n  font-size: 1.4rem;\n  color: #373946;\n  display: inline-block;\n}\n.secuirty-active-alerts-wrapper .tabs li .info p:not(:last-child) {\n  margin: 0 40px 0 0 !important;\n}\n@media (max-width: 576px) {\n  .secuirty-active-alerts-wrapper .tabs li .info p {\n    margin: 0 0 8px 0;\n  }\n}\n.secuirty-active-alerts-wrapper .tabs li .info p span {\n  color: #8391a1;\n}\n.secuirty-active-alerts-wrapper .tabs li:first-child {\n  border-top: none;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp {\n  padding: 20px 35px;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp .lists:not(:last-child) {\n  margin: 0 0 20px 0;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp .lists h5 {\n  font-size: 1.6rem;\n  padding: 0 0 4px 0;\n  color: #191c1e;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp .lists p {\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.secuirty-active-alerts-wrapper .tabs .additional-desp label {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  color: #191c1e;\n  margin: 0 0 7px 0;\n}\n.secuirty-active-alerts-wrapper agm-map {\n  height: 300px;\n}\n@media (max-width: 991px) {\n  .secuirty-active-alerts-wrapper agm-map {\n    margin: 15px 0 0 0;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvc2VjdXJpdHkvY29tcG9uZW50cy9zZWN1cml0eS1hY3RpdmUtYWxlcnRzL3NlY3VyaXR5LWFjdGl2ZS1hbGVydHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hbXMvc2VjdXJpdHkvY29tcG9uZW50cy9zZWN1cml0eS1hY3RpdmUtYWxlcnRzL3NlY3VyaXR5LWFjdGl2ZS1hbGVydHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDQyxrQkNIRTtBQ0hMO0FGT0c7RUFDQyxXQUFBO0VBQ0Esa0JDUEM7RURRRCxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkNxSkU7QUMxSk47QUZRSTtFQUNDLHlCQ3dETTtBQzlEWDtBRlVJO0VBQ0MseUJDdURLO0FDL0RWO0FGWUk7RUFDQyx5QkNvREs7QUM5RFY7QUZjSTtFQUNDLHlCQ21ETTtBQy9EWDtBRmdCSTtFQUNDLHlCQ2lESztBQy9EVjtBRmlCRztFQUNDLGVBQUE7RUFDRyxzQkN3SEQ7RUR2SEMsV0FBQTtFQUNBLFlBQUE7QUVmUDtBRmdCTztFRytCTCxpQkFBQTtFSDdCRyxjQzhDTTtFRDdDTiwwQkFBQTtFQUNBLGlCQUFBO0FFZEw7QUZpQkc7RUFDQyxlQUFBO0VBQ0csc0JDNEdEO0VEM0dDLFdBQUE7RUFDQSxrQkFBQTtBRWZQO0FGZ0JPO0VBTEo7SUFNSyxrQkFBQTtFRWJOO0FBQ0Y7QUZjSTtFR2dCRixpQkFBQTtFSGRHLGNDK0JNO0VEOUJOLHFCQUFBO0FFWkw7QUZhSztFQUNDLDZCQUFBO0FFWE47QUZhSztFQVBEO0lBUUssaUJBQUE7RUVWUDtBQUNGO0FGV0s7RUFDQyxjQzlETztBQ3FEYjtBRmFHO0VBQ0MsZ0JBQUE7QUVYSjtBRmNFO0VBQ0Msa0JBQUE7QUVaSDtBRmNJO0VBQ0Msa0JBQUE7QUVaTDtBRmNJO0VHVEYsaUJBQUE7RUhXTyxrQkFBQTtFQUNBLGNDR0U7QUNmWDtBRmNPO0VHZEwsaUJBQUE7RUhnQk8sY0NuRkk7QUN1RWI7QUZlRztFR2xERCxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUE2QkEsaUJBQUE7RUhzQkcsY0NQTTtFRFFOLGlCQUFBO0FFWEw7QUZlQztFQUNDLGFBQUE7QUViRjtBRmNFO0VBRkQ7SUFHRSxrQkFBQTtJQUNBLGNBQUE7RUVYRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL3NlY3VyaXR5L2NvbXBvbmVudHMvc2VjdXJpdHktYWN0aXZlLWFsZXJ0cy9zZWN1cml0eS1hY3RpdmUtYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIge1xuXG5cdC50YWJzIHtcblx0XHRsaSB7XG5cdFx0XHRwb3NpdGlvbjogJHJlbDtcblx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0d2lkdGg6IDNweDtcblx0XHRcdFx0aGVpZ2h0OiAkZnVsbDtcblx0XHRcdH1cblx0XHRcdCYubWVkaWNhbCB7XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZS1tZWQtMDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYudGhlZnQge1xuXHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGUtdGgtMDI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYuZmlyZSB7XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZS1mZS0wMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5zaG9vdGVyIHtcblx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRlLXNoci0wMjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5wb2xpY2Uge1xuXHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGUtcGMtMDI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5kZXRhaWxzIHtcblx0XHRcdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdFx0ICAgIHdpZHRoOiAkZnVsbDtcblx0XHRcdCAgICBmbG9hdDogbGVmdDtcblx0XHRcdCAgICBib3JkZXI6IG5vbmU7XG5cdFx0XHQgICAgaDUge1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtYmFzZSk7XG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0XHRcdFx0XHRtYXJnaW46IDJweCAwIDAgMDtcblx0XHRcdCAgICB9XG5cdFx0XHR9XG5cdFx0XHQuaW5mbyB7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMjBweDtcblx0XHRcdCAgICB3aWR0aDogJGZ1bGw7XG5cdFx0XHQgICAgZmxvYXQ6IGxlZnQ7XG5cdFx0XHQgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuXHRcdFx0ICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRcdFx0ICAgIFx0bWFyZ2luOiAxMnB4IDAgMCAwO1xuXHRcdFx0ICAgIH1cblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpe1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDQwcHggMCAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRcdFx0ICAgIFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdCAgICBcdH1cblx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRib3JkZXItdG9wOiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuYWRkaXRpb25hbC1kZXNwIHtcblx0XHRcdHBhZGRpbmc6IDIwcHggMzVweDtcblx0XHRcdC5saXN0cyB7XG5cdFx0XHRcdCY6bm90KDpsYXN0LWNoaWxkKXtcblx0XHRcdFx0XHRtYXJnaW46IDAgMCAyMHB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aDUge1xuXHRcdFx0ICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuXHRcdFx0ICAgICAgcGFkZGluZzogMCAwIDRweCAwO1xuXHRcdFx0ICAgICAgY29sb3I6ICRncmV5LTkwMDtcblx0XHRcdCAgICB9XG5cdFx0XHQgICAgcCB7XG5cdFx0XHQgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdCAgICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdCAgICB9XG5cdFx0XHR9XG5cdFx0XHRsYWJlbCB7XG5cdFx0XHQgIEBpbmNsdWRlIGhlYWQtbWVkaXVtO1xuXHRcdFx0ICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XG5cdFx0XHQgIGNvbG9yOiAkZ3JleS05MDA7XG5cdFx0XHQgIG1hcmdpbjogMCAwIDdweCAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRhZ20tbWFwIHtcblx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuXHRcdFx0bWFyZ2luOiAxNXB4IDAgMCAwO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHR9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC1iYXNlLTAyOjExO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iLCIuc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpLm1lZGljYWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNDtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkudGhlZnQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNjBhNTtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkuZmlyZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5ODAwO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaS5zaG9vdGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTAwZmY7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpLnBvbGljZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZiZjU4O1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkgLmRldGFpbHMgaDUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDJweCAwIDAgMDtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkgLmluZm8ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuaW5mbyB7XG4gICAgbWFyZ2luOiAxMnB4IDAgMCAwO1xuICB9XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIC5pbmZvIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkgLmluZm8gcDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luOiAwIDQwcHggMCAwICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuaW5mbyBwIHtcbiAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgfVxufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuaW5mbyBwIHNwYW4ge1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyAuYWRkaXRpb25hbC1kZXNwIHtcbiAgcGFkZGluZzogMjBweCAzNXB4O1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyAuYWRkaXRpb25hbC1kZXNwIC5saXN0czpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyAuYWRkaXRpb25hbC1kZXNwIC5saXN0cyBoNSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gIGNvbG9yOiAjMTkxYzFlO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyAuYWRkaXRpb25hbC1kZXNwIC5saXN0cyBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjODM5MWExO1xufVxuLnNlY3VpcnR5LWFjdGl2ZS1hbGVydHMtd3JhcHBlciAudGFicyAuYWRkaXRpb25hbC1kZXNwIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzE5MWMxZTtcbiAgbWFyZ2luOiAwIDAgN3B4IDA7XG59XG4uc2VjdWlydHktYWN0aXZlLWFsZXJ0cy13cmFwcGVyIGFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zZWN1aXJ0eS1hY3RpdmUtYWxlcnRzLXdyYXBwZXIgYWdtLW1hcCB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */");

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
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Alert */ "./src/app/api/controllers/Alert.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */ "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/shared-toaster.service */ "./src/app/shared/services/shared-toaster.service.ts");













let SecurityActiveAlertsComponent = class SecurityActiveAlertsComponent {
    constructor(userService, apartmentService, alertService, lookupService, sharedService, cookieService, dialog, SharedToaster) {
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.alertService = alertService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.SharedToaster = SharedToaster;
        this.isAlertsLoaded = false;
        this.isAlertUpdated = false;
        this.userDetails = [];
        this.blockDetails = [];
        this.locationDetails = [];
        this.result = '';
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.emergencyTypeList, function (item) {
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.alertTypeList, function (item) {
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.blockDetails, function (item) {
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.userDetails, function (item) {
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.userDetails, function (item) {
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
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM/DD/YYYY, h:mm A");
    }
    getDateTime(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM/DD/YYYY, h:mm A");
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.locationDetails, function (item) {
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.locationDetails, function (item) {
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
            this.confirmationMessage = `Are you sure, you want to acknowledge this Alert?`;
        }
        if (type == 'close') {
            this.confirmationMessage = `Are you sure you want to close this Alert?`;
        }
        const dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogModel"]("Confirm Action", this.confirmationMessage);
        const dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__["CommonConfirmModalComponent"], {
            panelClass: 'material',
            disableClose: true,
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            this.result = dialogResult;
            if (this.result) {
                console.log("Checking", this.result);
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
                        let apartmentIdParams = {
                            apartmentId: parseInt(this.cookieService.get('apartmentId'))
                        };
                        this.alertService.getAllApartmentBlockUnitAlertByApartmentId(apartmentIdParams).subscribe((alert) => {
                            this.alertList = alert.filter(item => {
                                return (item.alertStatusId == 135 || item.alertStatusId == 136);
                            });
                            this.isAlertUpdated = false;
                        }, error => {
                            console.log(error);
                        });
                        var success = {
                            msg: 'Alert Updated',
                            type: "Success"
                        };
                        this.sharedService.setCustomAlertMessage(success);
                    }
                    else {
                        this.isAlertUpdated = false;
                        var errorMessage = res.errorMessage;
                        if (errorMessage == 'ApartmentBlockUnitAlert Not Updated as its not exist.') {
                            errorMessage = "Alert not updated as its not exist";
                        }
                        var errorDetails = {
                            msg: errorMessage,
                            type: "Error"
                        };
                        this.sharedService.setCustomAlertMessage(errorDetails);
                    }
                }, error => {
                    console.log(error);
                });
            }
            else {
                this.isAlertUpdated = false;
            }
        });
    }
    isNoAlerts() {
        return this.alertList.length == 0 ? true : false;
    }
    // sortAlerts() {
    //   // console.log(this.alertList);
    //   // this.emergencyTypeList.sort(function (a, b) {
    //   //   var nameA = a.lookupValueName.toLowerCase(), nameB = b.lookupValueName.toLowerCase()
    //   //   if (nameA < nameB) //sort string ascending
    //   //     return -1
    //   //   if (nameA > nameB)
    //   //     return 1
    //   //   return 0 //default return value (no sorting)
    //   // })
    //   // this.emergencyTypeList.sort((a, b) => a.lookupValueName.localeCompare(b.lookupValueName));
    //   console.log("emergency list = ", this.emergencyTypeList);
    // }
    ngOnInit() {
        this.alert = {};
        this.alert.gpsLocation = " ";
        this.alert.notes = " ";
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.alertService.getAllApartmentBlockUnitAlertByApartmentId(params).subscribe((alert) => {
            this.alertList = alert.filter(item => {
                return (item.alertStatusId == 135 || item.alertStatusId == 136);
            });
            this.isAlertsLoaded = true;
            console.log(this.alertList);
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.alertList, item => {
                let params = {
                    userid: parseInt(item.insertedBy)
                };
                this.userService.getUserById(params).subscribe((user) => {
                    this.userDetails.push(user[0]);
                    //console.log(this.userDetails);
                }, error => {
                    console.log(error);
                });
                let apartmentBlockUnitIdParam = {
                    apartmentBlockUnitId: item.apartmentBlockUnitId
                };
                this.apartmentService.getApartmentBlockUnitById(apartmentBlockUnitIdParam).subscribe((user) => {
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
        let emergencyParams = {
            LookupTypeId: 29
        };
        //get emergency types
        this.lookupService.getLookupValueByLookupTypeId(emergencyParams).subscribe((res) => {
            this.emergencyTypeList = res;
        });
        let alertParams = {
            LookupTypeId: 30
        };
        //get alert status types
        this.lookupService.getLookupValueByLookupTypeId(alertParams).subscribe((res) => {
            this.alertTypeList = res;
        });
    }
};
SecurityActiveAlertsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_12__["SharedToasterService"] }
];
SecurityActiveAlertsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-active-alerts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./security-active-alerts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./security-active-alerts.component.scss */ "./src/app/ams/security/components/security-active-alerts/security-active-alerts.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
        src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_12__["SharedToasterService"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".secuirty-closed-alerts-wrapper .tabs li {\n  position: relative;\n}\n.secuirty-closed-alerts-wrapper .tabs li:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 3px;\n  height: 100% !important;\n}\n.secuirty-closed-alerts-wrapper .tabs li.medical:before {\n  background-color: #00bcd4;\n}\n.secuirty-closed-alerts-wrapper .tabs li.theft:before {\n  background-color: #ef60a5;\n}\n.secuirty-closed-alerts-wrapper .tabs li.fire:before {\n  background-color: #FF9800;\n}\n.secuirty-closed-alerts-wrapper .tabs li.shooter:before {\n  background-color: #9100ff;\n}\n.secuirty-closed-alerts-wrapper .tabs li.police:before {\n  background-color: #06bf58;\n}\n.secuirty-closed-alerts-wrapper .tabs li .details {\n  padding: 0 20px;\n  width: 100% !important;\n  float: left;\n  border: none;\n}\n.secuirty-closed-alerts-wrapper .tabs li .details h5 {\n  font-size: 1.8rem;\n  color: #373946;\n  text-transform: capitalize;\n  margin: 2px 0 0 0;\n}\n.secuirty-closed-alerts-wrapper .tabs li .info {\n  padding: 0 20px;\n  width: 100% !important;\n  float: left;\n  margin: 10px 0 0 0;\n}\n@media (max-width: 576px) {\n  .secuirty-closed-alerts-wrapper .tabs li .info {\n    margin: 12px 0 0 0;\n  }\n}\n.secuirty-closed-alerts-wrapper .tabs li .info p {\n  font-size: 1.4rem;\n  color: #373946;\n  display: inline-block;\n}\n.secuirty-closed-alerts-wrapper .tabs li .info p:not(:last-child) {\n  margin: 0 40px 0 0 !important;\n}\n@media (max-width: 576px) {\n  .secuirty-closed-alerts-wrapper .tabs li .info p {\n    margin: 0 0 8px 0;\n  }\n}\n.secuirty-closed-alerts-wrapper .tabs li .info p span {\n  color: #8391a1;\n}\n.secuirty-closed-alerts-wrapper .tabs li:first-child {\n  border-top: none;\n}\n.secuirty-closed-alerts-wrapper .tabs .additional-desp {\n  padding: 20px 35px;\n}\n.secuirty-closed-alerts-wrapper .tabs .additional-desp .lists:not(:last-child) {\n  margin: 0 0 20px 0;\n}\n.secuirty-closed-alerts-wrapper .tabs .additional-desp .lists h5 {\n  font-size: 1.6rem;\n  padding: 0 0 4px 0;\n  color: #191c1e;\n}\n.secuirty-closed-alerts-wrapper .tabs .additional-desp .lists p {\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.secuirty-closed-alerts-wrapper .tabs .additional-desp label {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  color: #191c1e;\n  margin: 0 0 7px 0;\n}\n.secuirty-closed-alerts-wrapper agm-map {\n  height: 300px;\n}\n@media (max-width: 991px) {\n  .secuirty-closed-alerts-wrapper agm-map {\n    margin: 15px 0 0 0;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvc2VjdXJpdHkvY29tcG9uZW50cy9zZWN1cml0eS1oaXN0b3J5L3NlY3VyaXR5LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hbXMvc2VjdXJpdHkvY29tcG9uZW50cy9zZWN1cml0eS1oaXN0b3J5L3NlY3VyaXR5LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDQyxrQkNIRTtBQ0hMO0FGT0c7RUFDQyxXQUFBO0VBQ0Esa0JDUEM7RURRRCxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkNxSkU7QUMxSk47QUZRSTtFQUNDLHlCQ3dETTtBQzlEWDtBRlVJO0VBQ0MseUJDdURLO0FDL0RWO0FGWUk7RUFDQyx5QkNvREs7QUM5RFY7QUZjSTtFQUNDLHlCQ21ETTtBQy9EWDtBRmdCSTtFQUNDLHlCQ2lESztBQy9EVjtBRmlCRztFQUNDLGVBQUE7RUFDRyxzQkN3SEQ7RUR2SEMsV0FBQTtFQUNBLFlBQUE7QUVmUDtBRmdCTztFRytCTCxpQkFBQTtFSDdCRyxjQzhDTTtFRDdDTiwwQkFBQTtFQUNBLGlCQUFBO0FFZEw7QUZpQkc7RUFDQyxlQUFBO0VBQ0csc0JDNEdEO0VEM0dDLFdBQUE7RUFDQSxrQkFBQTtBRWZQO0FGZ0JPO0VBTEo7SUFNSyxrQkFBQTtFRWJOO0FBQ0Y7QUZjSTtFR2dCRixpQkFBQTtFSGRHLGNDK0JNO0VEOUJOLHFCQUFBO0FFWkw7QUZhSztFQUNDLDZCQUFBO0FFWE47QUZhSztFQVBEO0lBUUssaUJBQUE7RUVWUDtBQUNGO0FGV0s7RUFDQyxjQzlETztBQ3FEYjtBRmFHO0VBQ0MsZ0JBQUE7QUVYSjtBRmNFO0VBQ0Msa0JBQUE7QUVaSDtBRmNJO0VBQ0Msa0JBQUE7QUVaTDtBRmNJO0VHVEYsaUJBQUE7RUhXTyxrQkFBQTtFQUNBLGNDR0U7QUNmWDtBRmNPO0VHZEwsaUJBQUE7RUhnQk8sY0NuRkk7QUN1RWI7QUZlRztFR2xERCxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUE2QkEsaUJBQUE7RUhzQkcsY0NQTTtFRFFOLGlCQUFBO0FFWEw7QUZlQztFQUNDLGFBQUE7QUViRjtBRmNFO0VBRkQ7SUFHRSxrQkFBQTtJQUNBLGNBQUE7RUVYRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL3NlY3VyaXR5L2NvbXBvbmVudHMvc2VjdXJpdHktaGlzdG9yeS9zZWN1cml0eS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5zZWN1aXJ0eS1jbG9zZWQtYWxlcnRzLXdyYXBwZXIge1xuXG5cdC50YWJzIHtcblx0XHRsaSB7XG5cdFx0XHRwb3NpdGlvbjogJHJlbDtcblx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0d2lkdGg6IDNweDtcblx0XHRcdFx0aGVpZ2h0OiAkZnVsbDtcblx0XHRcdH1cblx0XHRcdCYubWVkaWNhbCB7XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZS1tZWQtMDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYudGhlZnQge1xuXHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGUtdGgtMDI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYuZmlyZSB7XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZS1mZS0wMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5zaG9vdGVyIHtcblx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRlLXNoci0wMjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5wb2xpY2Uge1xuXHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGUtcGMtMDI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5kZXRhaWxzIHtcblx0XHRcdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdFx0ICAgIHdpZHRoOiAkZnVsbDtcblx0XHRcdCAgICBmbG9hdDogbGVmdDtcblx0XHRcdCAgICBib3JkZXI6IG5vbmU7XG5cdFx0XHQgICAgaDUge1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtYmFzZSk7XG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0XHRcdFx0XHRtYXJnaW46IDJweCAwIDAgMDtcblx0XHRcdCAgICB9XG5cdFx0XHR9XG5cdFx0XHQuaW5mbyB7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMjBweDtcblx0XHRcdCAgICB3aWR0aDogJGZ1bGw7XG5cdFx0XHQgICAgZmxvYXQ6IGxlZnQ7XG5cdFx0XHQgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuXHRcdFx0ICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRcdFx0ICAgIFx0bWFyZ2luOiAxMnB4IDAgMCAwO1xuXHRcdFx0ICAgIH1cblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpe1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDQwcHggMCAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRcdFx0ICAgIFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdCAgICBcdH1cblx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRib3JkZXItdG9wOiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuYWRkaXRpb25hbC1kZXNwIHtcblx0XHRcdHBhZGRpbmc6IDIwcHggMzVweDtcblx0XHRcdC5saXN0cyB7XG5cdFx0XHRcdCY6bm90KDpsYXN0LWNoaWxkKXtcblx0XHRcdFx0XHRtYXJnaW46IDAgMCAyMHB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aDUge1xuXHRcdFx0ICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuXHRcdFx0ICAgICAgcGFkZGluZzogMCAwIDRweCAwO1xuXHRcdFx0ICAgICAgY29sb3I6ICRncmV5LTkwMDtcblx0XHRcdCAgICB9XG5cdFx0XHQgICAgcCB7XG5cdFx0XHQgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdCAgICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdCAgICB9XG5cdFx0XHR9XG5cdFx0XHRsYWJlbCB7XG5cdFx0XHQgIEBpbmNsdWRlIGhlYWQtbWVkaXVtO1xuXHRcdFx0ICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XG5cdFx0XHQgIGNvbG9yOiAkZ3JleS05MDA7XG5cdFx0XHQgIG1hcmdpbjogMCAwIDdweCAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRhZ20tbWFwIHtcblx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuXHRcdFx0bWFyZ2luOiAxNXB4IDAgMCAwO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHR9XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIi5zZWN1aXJ0eS1jbG9zZWQtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdWlydHktY2xvc2VkLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5zZWN1aXJ0eS1jbG9zZWQtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkubWVkaWNhbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0O1xufVxuLnNlY3VpcnR5LWNsb3NlZC1hbGVydHMtd3JhcHBlciAudGFicyBsaS50aGVmdDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY2MGE1O1xufVxuLnNlY3VpcnR5LWNsb3NlZC1hbGVydHMtd3JhcHBlciAudGFicyBsaS5maXJlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk4MDA7XG59XG4uc2VjdWlydHktY2xvc2VkLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpLnNob290ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxMDBmZjtcbn1cbi5zZWN1aXJ0eS1jbG9zZWQtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkucG9saWNlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmJmNTg7XG59XG4uc2VjdWlydHktY2xvc2VkLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiBub25lO1xufVxuLnNlY3VpcnR5LWNsb3NlZC1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuZGV0YWlscyBoNSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogIzM3Mzk0NjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMnB4IDAgMCAwO1xufVxuLnNlY3VpcnR5LWNsb3NlZC1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuaW5mbyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdWlydHktY2xvc2VkLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIC5pbmZvIHtcbiAgICBtYXJnaW46IDEycHggMCAwIDA7XG4gIH1cbn1cbi5zZWN1aXJ0eS1jbG9zZWQtYWxlcnRzLXdyYXBwZXIgLnRhYnMgbGkgLmluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzM3Mzk0NjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNlY3VpcnR5LWNsb3NlZC1hbGVydHMtd3JhcHBlciAudGFicyBsaSAuaW5mbyBwOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW46IDAgNDBweCAwIDAgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdWlydHktY2xvc2VkLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIC5pbmZvIHAge1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICB9XG59XG4uc2VjdWlydHktY2xvc2VkLWFsZXJ0cy13cmFwcGVyIC50YWJzIGxpIC5pbmZvIHAgc3BhbiB7XG4gIGNvbG9yOiAjODM5MWExO1xufVxuLnNlY3VpcnR5LWNsb3NlZC1hbGVydHMtd3JhcHBlciAudGFicyBsaTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4uc2VjdWlydHktY2xvc2VkLWFsZXJ0cy13cmFwcGVyIC50YWJzIC5hZGRpdGlvbmFsLWRlc3Age1xuICBwYWRkaW5nOiAyMHB4IDM1cHg7XG59XG4uc2VjdWlydHktY2xvc2VkLWFsZXJ0cy13cmFwcGVyIC50YWJzIC5hZGRpdGlvbmFsLWRlc3AgLmxpc3RzOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG4uc2VjdWlydHktY2xvc2VkLWFsZXJ0cy13cmFwcGVyIC50YWJzIC5hZGRpdGlvbmFsLWRlc3AgLmxpc3RzIGg1IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgY29sb3I6ICMxOTFjMWU7XG59XG4uc2VjdWlydHktY2xvc2VkLWFsZXJ0cy13cmFwcGVyIC50YWJzIC5hZGRpdGlvbmFsLWRlc3AgLmxpc3RzIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG59XG4uc2VjdWlydHktY2xvc2VkLWFsZXJ0cy13cmFwcGVyIC50YWJzIC5hZGRpdGlvbmFsLWRlc3AgbGFiZWwge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjMTkxYzFlO1xuICBtYXJnaW46IDAgMCA3cHggMDtcbn1cbi5zZWN1aXJ0eS1jbG9zZWQtYWxlcnRzLXdyYXBwZXIgYWdtLW1hcCB7XG4gIGhlaWdodDogMzAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNlY3VpcnR5LWNsb3NlZC1hbGVydHMtd3JhcHBlciBhZ20tbWFwIHtcbiAgICBtYXJnaW46IDE1cHggMCAwIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */");

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
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Alert */ "./src/app/api/controllers/Alert.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/shared-toaster.service */ "./src/app/shared/services/shared-toaster.service.ts");












let SecurityHistoryComponent = class SecurityHistoryComponent {
    constructor(userService, apartmentService, alertService, lookupService, sharedService, cookieService, dialog, SharedToaster) {
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.alertService = alertService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.SharedToaster = SharedToaster;
        this.isAlertsLoaded = false;
        this.isAlertUpdated = false;
        this.userDetails = [];
        this.blockDetails = [];
        this.locationDetails = [];
        this.result = '';
        this.tableData = {
            alertlist: []
        };
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.emergencyTypeList, function (item) {
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.alertTypeList, function (item) {
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.blockDetails, function (item) {
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.userDetails, function (item) {
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.userDetails, function (item) {
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
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM/DD/YYYY, h:mm A");
    }
    getDateTime(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM/DD/YYYY, h:mm A");
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.locationDetails, function (item) {
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.locationDetails, function (item) {
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
    isNoAlerts() {
        return this.alertList.length == 0 ? true : false;
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Category Name',
                datafield: 'lookupValueName',
                width: 100,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Date',
                datafield: 'insertedOn',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Block Number',
                datafield: 'apartmentBlockNumber',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            },
            {
                text: 'Block Unit Number',
                datafield: 'apartmentBlockUnitNumber',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            },
            {
                text: 'Comments',
                datafield: 'notes',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Person Name',
                datafield: 'firstName',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Phone Number',
                datafield: 'phoneNumber',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Assigned to',
                datafield: 'assignedTo_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 150,
                renderer: columnrenderer
            }, {
                text: 'Requested By',
                datafield: 'raisedby_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 150,
                renderer: columnrenderer
            }];
        this.alert = {};
        this.alert.gpsLocation = " ";
        this.alert.notes = " ";
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.alertService.getAllApartmentBlockUnitAlertByApartmentId(params).subscribe((alert) => {
            this.alertList = alert.filter(item => {
                return (item.alertStatusId == 137);
            });
            this.isAlertsLoaded = true;
            console.log(this.alertList);
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.alertList, item => {
                let params = {
                    userid: parseInt(item.insertedBy)
                };
                this.userService.getUserById(params).subscribe((user) => {
                    this.userDetails.push(user[0]);
                    //console.log(this.userDetails);
                }, error => {
                    console.log(error);
                });
                let apartmentBlockUnitIdParam = {
                    apartmentBlockUnitId: item.apartmentBlockUnitId
                };
                this.apartmentService.getApartmentBlockUnitById(apartmentBlockUnitIdParam).subscribe((user) => {
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
            this.tableData.alertlist = this.alertList;
            console.log("Table data  == ", this.tableData);
            this.gridSourceData = {
                localdata: this.tableData,
                datatype: "array"
            };
            this.historyData = new jqx.dataAdapter(this.gridSourceData);
        }, error => {
            console.log(error);
        });
        let emergencyParams = {
            LookupTypeId: 29
        };
        //get emergency types
        this.lookupService.getLookupValueByLookupTypeId(emergencyParams).subscribe((res) => {
            this.emergencyTypeList = res;
            // this.gridSourceData = {
            //   localdata: this.emergencyTypeList,
            //   datatype: "array"
            // }
            // this.historyData = new jqx.dataAdapter(this.gridSourceData);
        });
        let alertParams = {
            LookupTypeId: 30
        };
        //get alert status types
        this.lookupService.getLookupValueByLookupTypeId(alertParams).subscribe((res) => {
            this.alertTypeList = res;
        });
    }
};
SecurityHistoryComponent.ctorParameters = () => [
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_11__["SharedToasterService"] }
];
SecurityHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./security-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-history/security-history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./security-history.component.scss */ "./src/app/ams/security/components/security-history/security-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
        src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_11__["SharedToasterService"]])
], SecurityHistoryComponent);

function getClassName(value) {
    var name = value.split('-');
    return name[0].toLowerCase();
}
window.getClassName = getClassName;
function showConfirmDeleteEvent(row) {
    var event = new CustomEvent('onTicketDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEvent = showConfirmDeleteEvent;
function editTicketEvent(row) {
    var event = new CustomEvent('onEditTicket', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editTicketEvent = editTicketEvent;


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
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Alert */ "./src/app/api/controllers/Alert.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let SecurityReportsComponent = class SecurityReportsComponent {
    constructor(apartmentService, alertService, lookupService, cookieService) {
        this.apartmentService = apartmentService;
        this.alertService = alertService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.ItemStartIndex = 0;
        this.itemLimit = 8;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isReportSubmitted = true;
        this.isDataLoaded = true;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
    }
    sortUnitData(type) {
        this.unitFieldType = type;
        this.unitOrder = !this.unitOrder;
    }
    getFieldOrderBy(type) {
        if (this.unitFieldType == type) {
            return this.unitOrder ? 'desc' : 'asc';
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
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format("MM-DD-YYYY");
    }
    getDateFormat(date) {
        if (date) {
            return moment__WEBPACK_IMPORTED_MODULE_6__(date).format("YYYY-MM-DD");
        }
        else {
            return undefined;
        }
    }
    getTimeFormat(dateTime) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(dateTime).format("YYYY-MM-DD HH:mm");
    }
    submitSecurityAlertReports(form) {
        this.isReportSubmitted = true;
        this.isDataLoaded = false;
        let details = {
            ApartmentBlockID: parseInt(this.report.apartmentBlockID),
            StartDate: this.getDateFormat(this.report.startDate),
            EndDate: this.getDateFormat(this.report.endDate),
            ApartmentID: parseInt(this.cookieService.get('apartmentId')),
            EmergencyCategoryTypeID: parseInt(this.report.emergencyCategoryTypeID),
            AlertTypeStatusID: parseInt(this.report.alertTypeStatusID)
        };
        this.alertService.getReportsForSecurityPanicAlertMultiFilter(details).subscribe((res) => {
            this.alertReportsDataList = res;
            this.totalItems = this.alertReportsDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isDataLoaded = true;
            this.isReportSubmitted = false;
        }, error => {
        });
    }
    ngOnInit() {
        this.report = {};
        this.report.apartmentID = "";
        this.report.apartmentBlockID = "";
        this.report.emergencyCategoryTypeID = "";
        this.report.alertTypeStatusID = "";
        let apartment_params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(apartment_params).subscribe((res) => {
            this.blockData = res;
        });
        let sec_params = {
            LookupTypeId: 29
        };
        this.lookupService.getLookupValueByLookupTypeId(sec_params).subscribe((res) => {
            this.securityCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
        let alert_params = {
            LookupTypeId: 30
        };
        this.lookupService.getLookupValueByLookupTypeId(alert_params).subscribe((res) => {
            this.alertTypeStatus = res.filter(item => {
                return item.isActive;
            });
        });
    }
};
SecurityReportsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
SecurityReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./security-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-reports/security-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./security-reports.component.scss */ "./src/app/ams/security/components/security-reports/security-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
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
/* harmony import */ var src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Alert */ "./src/app/api/controllers/Alert.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");







let SecuritySetupComponent = class SecuritySetupComponent {
    constructor(alertService, lookupService, sharedService, cookieService) {
        this.alertService = alertService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isSecurityCategoryLoaded = false;
        this.isSecurityCategorySubmitted = true;
        this.isSecurityCategoryNew = false;
        this.isSecurityCategoryUpdate = false;
        this.securityCategory = "";
        this.securityCategoryUpdateId = 0;
        this.alertTicketMessage = "";
        this.isCategoryError = false;
        this.isCategorySuccess = false;
    }
    addNewSecurityCategory() {
        this.isSecurityCategoryNew = true;
        this.isSecurityCategoryUpdate = false;
    }
    updateSecurityCategory(item) {
        this.isSecurityCategoryUpdate = true;
        this.isSecurityCategoryNew = false;
        this.securityCategory = item.lookupValueName;
        this.securityCategoryUpdateId = item.lookupValueId;
    }
    deleteSecurityCategory(item, index) {
        this.isSecurityCategoryLoaded = false;
        var params = {
            lookupValueId: item.lookupValueId,
            updateUserId: parseInt(this.cookieService.get('userId'))
        };
        this.lookupService.deleteLookupvalue(params).subscribe((res) => {
            this.securityCategoryData.splice(index, 1);
            this.isSecurityCategoryLoaded = true;
        });
    }
    removeCategoryBox() {
        this.isSecurityCategoryNew = false;
        this.isSecurityCategoryUpdate = false;
        this.isCategoryError = false;
    }
    getSecurityList(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.securityDataList, function (item) {
            if (item.securityCategoryId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return 0;
        }
        else {
            return data.length;
        }
    }
    submitSecurityCategoryForm(form) {
        this.isSecurityCategorySubmitted = false;
        if (this.isSecurityCategoryNew) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "lookupTypeId": 29,
                "lookupValueName": this.securityCategory,
                "description": this.securityCategory,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": new Date().toISOString(),
            };
            let add_param = {
                lookupvalue: details
            };
            this.lookupService.addLookupValue(add_param).subscribe((res) => {
                if (res.message) {
                    let param = {
                        LookupTypeId: 29
                    };
                    this.lookupService.getLookupValueByLookupTypeId(param).subscribe((res) => {
                        this.isSecurityCategorySubmitted = true;
                        this.isCategorySuccess = true;
                        this.alertTicketMessage = "Category Added Successfully!";
                        this.securityCategoryData = res.filter(item => {
                            return item.isActive;
                        });
                    });
                }
                else {
                    this.isSecurityCategorySubmitted = true;
                    this.isCategoryError = true;
                    this.alertTicketMessage = res.errorMessage;
                }
            });
        }
        else {
            let details = {
                "lookupValueId": this.securityCategoryUpdateId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "lookupTypeId": 29,
                "lookupValueName": this.securityCategory,
                "description": this.securityCategory,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": new Date().toISOString(),
            };
            let update_param = {
                lookupvalue: details
            };
            this.lookupService.updateLookupValue(update_param).subscribe((res) => {
                if (res.message) {
                    let param = {
                        LookupTypeId: 29
                    };
                    this.lookupService.getLookupValueByLookupTypeId(param).subscribe((res) => {
                        this.isSecurityCategorySubmitted = true;
                        this.isCategorySuccess = true;
                        this.alertTicketMessage = "Category Updated Successfully!";
                        this.securityCategoryData = res.filter(item => {
                            return item.isActive;
                        });
                    });
                }
                else {
                    this.isSecurityCategorySubmitted = true;
                    this.isCategoryError = true;
                    this.alertTicketMessage = res.errorMessage;
                }
            });
        }
    }
    ngOnInit() {
        let param = {
            LookupTypeId: 29
        };
        this.lookupService.getLookupValueByLookupTypeId(param).subscribe((res) => {
            this.isSecurityCategoryLoaded = true;
            this.securityCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
        // // this.securityService.getAllSecurityByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res:any) => {
        // //
        // //   this.securityDataList = res.filter(item => {
        // //       return item.isActive;
        // //   });
        //
        // });
    }
};
SecuritySetupComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
SecuritySetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./security-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/security/components/security-setup/security-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./security-setup.component.scss */ "./src/app/ams/security/components/security-setup/security-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
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



/***/ }),

/***/ "./src/app/shared/services/shared-toaster.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/shared-toaster.service.ts ***!
  \***********************************************************/
/*! exports provided: SharedToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedToasterService", function() { return SharedToasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");



let SharedToasterService = class SharedToasterService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
SharedToasterService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
SharedToasterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], SharedToasterService);



/***/ })

}]);
//# sourceMappingURL=security-security-module-es2015.js.map