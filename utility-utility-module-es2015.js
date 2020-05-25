(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utility-utility-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/add-insurance/add-insurance.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/add-insurance/add-insurance.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vendor-create-wrapper\">\n\n      <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n      <form #createInsuranceChargeForm = \"ngForm\" name=\"createInsuranceChargeForm\" (ngSubmit)=\"submitInsuranceChargeForm(createInsuranceChargeForm)\"  novalidate>\n        <h4 class=\"main-title-mini float-left mt-3\">\n          <span>Add Insurance</span>\n        </h4>\n\n        <div class=\"card ov clear\">\n\n          <div class=\"card-body ov\">\n\n            <app-loader *ngIf=\"!isInsuranceSubmitted\"></app-loader>\n\n            <app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n        <ng-container *ngIf=\"isInsuranceSubmitted\">\n        <div class=\"row\">\n\n          <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                  <label>Appartment Unit count<span class=\"mandatory\">*</span></label>\n                  <input type=\"text\" [disabled]=true class=\"form-control\" placeholder=\"Enter\" name=\"aptunitCount\" [(ngModel)]=\"insuranceCharge.AptunitCount\" required>\n              </div>\n          </div>\n          <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                  <label>Insurance Number<span class=\"mandatory\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"insuranceNo\" [(ngModel)]=\"insuranceCharge.InsuranceNo\" required>\n              </div>\n          </div>\n          <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                  <label>Total Cost<span class=\"mandatory\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" (keyup)=\"calculateCostPerAptFrmTotalCost($event)\" placeholder=\"Enter\" name=\"totalUnit\" [(ngModel)]=\"insuranceCharge.TotalCost\" required>\n              </div>\n          </div>\n\n        </div>\n          <div class=\"row\">\n          <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                  <label>Cost per Apartment<span class=\"mandatory\">*</span></label>\n                  <input type=\"text\" [disabled]=true class=\"form-control\"  placeholder=\"Enter\" name=\"costPerUnit\" [(ngModel)]=\"insuranceCharge.CostPerApt\" required>\n              </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"input-box mb-3\">\n                        <label>Date Entered<span class=\"mandatory\">*</span></label>\n                        <input class=\"form-control\" name=\"dateTaken\" [owlDateTime]=\"dateTaken\" [owlDateTimeTrigger]=\"dateTaken\" placeholder=\"Date\" [(ngModel)]=\"insuranceCharge.DateEntered\" required>\n              <owl-date-time #dateTaken [pickerType]=\"'calendar'\"></owl-date-time>\n              <div class=\"date-btn\" [owlDateTimeTrigger]=\"dateTaken\">\n                  <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"input-box\">\n              <label>Comments</label>\n              <textarea placeholder=\"some text here\" name=\"insuranceComments\" [(ngModel)]=\"insuranceCharge.Comments\"></textarea>\n            </div>\n          </div>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"list-inline float-right mt-4\">\n                  <button type=\"button\" class=\"btn blue mr-4\"  (click)=\"Cancel()\">Cancel</button>\n                  <button class=\"btn blue mr-2\" [disabled]=\"createInsuranceChargeForm.invalid\" *ngIf=\"!isEdit\">Submit</button>\n                  <button class=\"btn blue mr-2\" [disabled]=\"createInsuranceChargeForm.invalid\" *ngIf=\"isEdit\">Update</button>\n              </div>\n            </div>\n          </div>\n      </form>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/electricity-reading/electricity-reading.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/electricity-reading/electricity-reading.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vendor-create-wrapper\">\n\n      <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n      <form #createElectricityReadingForm = \"ngForm\" name=\"createElectricityReadingForm\" (ngSubmit)=\"submitReadingForm(createElectricityReadingForm)\"  novalidate>\n        <h4 class=\"main-title-mini float-left mt-3\">\n          <span>Add Electricity Reading</span>\n        </h4>\n\n        <div class=\"card ov clear\">\n\n          <div class=\"card-body ov\">\n\n            <app-loader *ngIf=\"!isReadingSubmitted\"></app-loader>\n\n            <app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n        <ng-container *ngIf=\"isReadingSubmitted\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"input-box mb-3\">\n                        <label>From<span class=\"mandatory\">*</span></label>\n                        <input class=\"form-control\" name=\"reportFrom\" [owlDateTime]=\"reportFrom\" [owlDateTimeTrigger]=\"reportFrom\" placeholder=\"Date\" [(ngModel)]=\"electricReading.fromDate\" required>\n              <owl-date-time #reportFrom [pickerType]=\"'calendar'\"></owl-date-time>\n              <div class=\"date-btn\" [owlDateTimeTrigger]=\"reportFrom\">\n                  <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n                </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"input-box mb-3\">\n                        <label>To<span class=\"mandatory\">*</span></label>\n                        <input class=\"form-control\" name=\"reportTo\" [owlDateTime]=\"reportTo\" [owlDateTimeTrigger]=\"reportTo\" placeholder=\"Date\" [(ngModel)]=\"electricReading.toDate\" required>\n              <owl-date-time #reportTo [pickerType]=\"'calendar'\"></owl-date-time>\n              <div class=\"date-btn\" [owlDateTimeTrigger]=\"reportTo\">\n                  <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n                </div>\n          </div>\n          <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                  <label>Appartment Unit count<span class=\"mandatory\">*</span></label>\n                  <input type=\"text\" [disabled]=true class=\"form-control\" placeholder=\"Enter\" name=\"aptunitCount\" [(ngModel)]=\"electricReading.AptunitCount\" required>\n              </div>\n          </div>\n\n        </div>\n          <div class=\"row\">\n          <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                  <label>Previous reading<span class=\"mandatory\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" (keyup)=\"calculateUnitPerAptFrmPreReading($event)\" placeholder=\"Enter\" name=\"prevReading\" [(ngModel)]=\"electricReading.PrevReading\" required>\n              </div>\n          </div>\n          <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                  <label>Current Reading<span class=\"mandatory\">*</span></label>\n                  <input type=\"text\" class=\"form-control\" (keyup)=\"calculateUnitPerAptFrmCurReading($event)\" placeholder=\"Enter\" name=\"currReading\" [(ngModel)]=\"electricReading.CurrReading\" required>\n              </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"input-box mb-3\">\n                        <label>Date Taken<span class=\"mandatory\">*</span></label>\n                        <input class=\"form-control\" name=\"dateTaken\" [owlDateTime]=\"dateTaken\" [owlDateTimeTrigger]=\"dateTaken\" placeholder=\"Date\" [(ngModel)]=\"electricReading.dateTaken\" required>\n              <owl-date-time #dateTaken [pickerType]=\"'calendar'\"></owl-date-time>\n              <div class=\"date-btn\" [owlDateTimeTrigger]=\"dateTaken\">\n                  <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n                </div>\n          </div>\n          </div>\n          <div class=\"row\">\n          <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                  <label>Electrical Units per Apartment<span class=\"mandatory\">*</span></label>\n                  <input type=\"text\" [disabled]=true  class=\"form-control\" placeholder=\"Enter\" name=\"electricUnit\" [(ngModel)]=\"electricReading.ElectricalUnitPerApT\" required>\n              </div>\n          </div>\n          <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                  <label>Cost per Apartment Unit<span class=\"mandatory\">*</span></label>\n                  <input type=\"text\" [disabled]=true  class=\"form-control\" placeholder=\"Enter\" name=\"electricCost\" [(ngModel)]=\"electricReading.CostPerApt\" required>\n              </div>\n          </div>\n          <div class=\"col-sm-6\">\n\n            <div class=\"input-box\">\n                        <label>Comments</label>\n                        <textarea placeholder=\"some text here\" name=\"UtilityReadingComments\" [(ngModel)]=\"electricReading.Comments\"></textarea>\n                    </div>\n\n          </div>\n          </div>\n        </ng-container>\n      </div>\n\n    </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"list-inline float-right mt-4\">\n                  <button type=\"button\" class=\"btn blue mr-4\"  (click)=\"Cancel()\">Cancel</button>\n                  <button class=\"btn blue mr-2\" [disabled]=\"createElectricityReadingForm.invalid\" *ngIf=\"!isEdit\">Submit</button>\n                  <button class=\"btn blue mr-2\" [disabled]=\"createElectricityReadingForm.invalid\" *ngIf=\"isEdit\">Update</button>\n              </div>\n            </div>\n          </div>\n      </form>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/utility-add-reading.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/utility-add-reading.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!selected_utility_type \"class=\"gl-other-reports-wrapper\">\n\n\t<h4 class=\"main-title-mini\">Select the reports</h4>\n\t<div class=\"card\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<div class=\"simple-lists\">\n\t\t\t\t<ng-container *ngFor=\"let utility of utilityCategoryData; let i = index\">\n\t\t\t\t\t<a (click)=\"selectUtility(utility)\">{{utility.category}}</a>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<ng-container *ngIf=\"selected_utility_type\">\n    <app-electricity-reading *ngIf=\"utility_selected_category.category == 'Common Electricity Charges'\" (onCancel)=\"onCancel($event)\"></app-electricity-reading>\n    <app-water-reading *ngIf=\"utility_selected_category.category == 'Water Meter Charges'\" (onCancel)=\"onCancel($event)\" [utility_selected_category]=\"utility_selected_category\"></app-water-reading>\n\t\t<app-add-insurance *ngIf=\"utility_selected_category.category == 'Common Insurance'\" (onCancel)=\"onCancel($event)\" ></app-add-insurance>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/tower-reading-info.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/tower-reading-info.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"property-tower-wrapper\">\n\n\t<ng-container>\n\n\t\t<form #propertyDetailsForm = \"ngForm\" name=\"propertyDetailsForm\" novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Total Units: {{totalItems}}</label>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n  <app-loader *ngIf=\"!isTowersLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isTowersLoaded\">\n\n\t\t<div id=\"propertyUnitDetailsAccordion\">\n\n\t\t\t<!-- <h4 class=\"main-title-mini float-left mb-3\">Units</h4> -->\n\n\t\t\t<ul class=\"list-group tabs clear\">\n        <div class=\"row\">\n          <div  class=\"col-sm-2\">\n                  <label>Block Unit<span class=\"mandatory\">*</span></label>\n          </div>\n          <div  class=\"col-sm-2\">\n                  <label>Previous reading<span class=\"mandatory\">*</span></label>\n          </div>\n          <div class=\"col-sm-2\">\n                  <label>Current Reading<span class=\"mandatory\">*</span></label>\n          </div>\n          <div class=\"col-sm-2\">\n                <label>Units this month<span class=\"mandatory\">*</span></label>\n          </div>\n          <div class=\"col-sm-2\">\n                <label>Date Taken<span class=\"mandatory\">*</span></label>\n          </div>\n          </div>\n\t\t\t\t<ng-container  *ngFor=\"let unit of towerUnitData | slice:ItemStartIndex:ItemEndIndex; let i = index; first as isFirst\">\n          <app-unit-reading-info [unit]=\"unit\"  [tower]=\"tower\" [waterReadingPeriodID]=\"waterReadingPeriodID\" [utility_selected_category]=\"utility_selected_category\"></app-unit-reading-info>\n\t\t\t\t</ng-container>\n\n\t\t\t</ul>\n\n\t\t\t<app-pagination\n\t\t\t\t[totalItems]=\"totalItems\"\n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/unit-reading-info/unit-reading-info.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/unit-reading-info/unit-reading-info.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"property-tower-unit-wrapper\">\n  <app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n  <form  #waterReadingDetailsForm = \"ngForm\" name=\"waterReadingDetailsForm\" (ngSubmit)=\"submitWaterMeterReading(waterReadingDetailsForm)\" novalidate>\n\n  <div class=\"data-wrapper\">\n  <div class=\"row\">\n    <div  class=\"col-sm-2\">\n        <div class=\"input-box\">\n            <input type=\"number\" class=\"form-control\" [disabled]=true placeholder=\"Enter\" name=\"blockUnitNo\" [(ngModel)]=\"unit.apartmentBlockUnitNumber\" required>\n        </div>\n    </div>\n    <div  class=\"col-sm-2\">\n        <div class=\"input-box\">\n            <input type=\"number\" class=\"form-control\" [disabled]=\"unit.water_charge.prevReading || !isEdit\"  placeholder=\"Enter\" (keyup)=\"calculateUnitPerAptFrmPreReading($event)\" name=\"prevReading\" [(ngModel)]=\"waterReading.prevReading\" required>\n        </div>\n    </div>\n    <div class=\"col-sm-2\">\n        <div class=\"input-box\">\n            <input type=\"number\" class=\"form-control\" [disabled]=!isEdit placeholder=\"Enter\" (keyup)=\"calculateUnitPerAptFrmCurReading($event)\" name=\"currReading\" [(ngModel)]=\"waterReading.currReading\" required>\n        </div>\n    </div>\n    <div class=\"col-sm-2\">\n        <div class=\"input-box\">\n            <input type=\"number\" class=\"form-control\" [disabled]=true placeholder=\"Enter\" name=\"currUnit\" [(ngModel)]=\"waterReading.units\" required>\n        </div>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"input-box mb-3\">\n                  <input class=\"form-control\" name=\"dateTaken\" [disabled]=!isEdit [owlDateTime]=\"dateTaken\" [owlDateTimeTrigger]=\"dateTaken\" placeholder=\"Date\" [(ngModel)]=\"waterReading.dateTaken\" required>\n        <owl-date-time #dateTaken [pickerType]=\"'calendar'\"></owl-date-time>\n        <div class=\"date-btn\" [owlDateTimeTrigger]=\"dateTaken\">\n            <!-- <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather> -->\n          </div>\n          </div>\n    </div>\n    <div class=\"col-sm-2\">\n\n      <div *ngIf=\"isEdit\" class=\"list-inline float-right\">\n        <button class=\"btn blue\" [disabled]=\"waterReadingDetailsForm.invalid\">Submit</button>\n        <!-- <button class=\"btn blue\" [disabled]=\"waterReadingDetailsForm.invalid\">Update</button> -->\n      </div>\n\n      <div class=\"icon-wrapper  mb-2\" *ngIf=\"!isEdit\">\n        <i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n      </div>\n\n      <div class=\"icon-wrapper  mb-2\" *ngIf=\"isEdit\">\n        <i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n      </div>\n\n    </div>\n    </div>\n </div>\n\n</form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/water-reading/water-reading.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/water-reading/water-reading.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"property-details-wrapper profile-section\">\n\n  <form #setWaterReadingPeriodForm = \"ngForm\" name=\"setWaterReadingPeriodForm\"  (ngSubmit)=\"submitReadingPeriodForm(setWaterReadingPeriodForm)\" novalidate>\n\n    <div class=\"card ov mb-30\">\n\n      <div class=\"card-header\">\n        <div class=\"float-left\">\n            <h5>Select Reading Period</h5>\n          </div>\n      </div>\n      <div class=\"card-body ov\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"input-box mb-3\">\n                        <label>From<span class=\"mandatory\">*</span></label>\n                        <input class=\"form-control\" name=\"reportFrom\" [owlDateTime]=\"reportFrom\" [owlDateTimeTrigger]=\"reportFrom\" placeholder=\"Date\" [(ngModel)]=\"waterReadingFromDate\" required>\n              <owl-date-time #reportFrom [pickerType]=\"'calendar'\"></owl-date-time>\n              <div class=\"date-btn\" [owlDateTimeTrigger]=\"reportFrom\">\n                  <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n                </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"input-box mb-3\">\n                        <label>To<span class=\"mandatory\">*</span></label>\n                        <input class=\"form-control\" name=\"reportTo\" [owlDateTime]=\"reportTo\" [owlDateTimeTrigger]=\"reportTo\" placeholder=\"Date\" [(ngModel)]=\"waterReadingToDate\" required>\n              <owl-date-time #reportTo [pickerType]=\"'calendar'\"></owl-date-time>\n              <div class=\"date-btn\" [owlDateTimeTrigger]=\"reportTo\">\n                  <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n                </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"list-inline  mt-4\">\n                <button type=\"button\" class=\"btn blue mr-4\"  (click)=\"cancel()\">Cancel</button>\n                <button class=\"btn blue mr-2\" [disabled]=\"setWaterReadingPeriodForm.invalid\">Submit</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n\n  <app-loader *ngIf=\"!isSetPeriod\"></app-loader>\n\n\n\t<h4 *ngIf=\"waterReadingPeriodID\" class=\"main-title-mini float-left\">Towers</h4>\n\n\t<div *ngIf=\"waterReadingPeriodID\" class=\"card clear\" id=\"propertyDetailsAccordion\">\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\n\t\t\t\t\t<ng-container  *ngFor=\"let tower of propertyTowerData; let i = index; first as isFirst\">\n\t\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" attr.data-target=\"#towerDetail{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"towerDetail{{i}}\">\n\t\t\t\t\t\t\t<span>{{tower.apartmentBlockNumber}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<div id=\"towerDetail{{i}}\" class=\"collapse\"  attr.aria-labelledby=\"towerDetail{{i}}\" data-parent=\"#propertyDetailsAccordion\">\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t<app-tower-reading-info [tower]=\"tower\" [waterReadingPeriodID]=\"waterReadingPeriodID\" [allApartmentWaterCharge]=\"allApartmentWaterCharge\" [utility_selected_category]=\"utility_selected_category\"></app-tower-reading-info>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</ul>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-history/utility-history.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-history/utility-history.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inventory-view-wrapper\">\n\n\n\t<form #viewUtilityCategoryForm = \"ngForm\" name=\"viewUtilityCategoryForm\"  novalidate>\n\n\t\t<div class=\"card ov mb-30\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Select Category</h5>\n\t    \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-body ov\">\n\n\t\t\t\t<div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"input-box\">\n                        <label>Utility Category<span class=\"mandatory\">*</span></label>\n                        <select (change)=\"onUtilityCatregoryChange()\"\n                    name=\"utilityCategory\"\n                    id=\"utilityCategory\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"selectedUtilityCategory\" required>\n                    <option value=\"undefined\" selected>Select</option>\n                    <option *ngFor=\"let item of utilityCategoryData\" [value]=\"item.category\">{{ item.category }}</option>\n                </select>\n            </div>\n          </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\n\n\t<div *ngIf=\"selectedUtilityCategory\" class=\"card table-card\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All {{selectedUtilityCategory}} <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li *ngIf=\"isWaterHistory()\" class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t    \t<select (change)=\"onFilterByTowerChange()\" name=\"utilityTowerFilter\" id=\"utilityTowerFilter\" class=\"form-control filter-width\" [(ngModel)]=\"selectedTower\" required>\n\t\t\t\t    \t<option value=\"All\" selected>Select Tower</option>\n\t\t\t\t    \t<option *ngFor=\"let tower of propertyTowerData\" [value]=\"tower.apartmentBlockNumber\">{{ tower.apartmentBlockNumber }}</option>\n\t\t\t    \t</select>\n\t\t    \t</li>\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"utilitySearch\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<app-loader *ngIf=\"!isUltilityInsuranceHisLoaded && !isUltilityWaterHisLoaded && !isUltilityElectricHisLoaded\"></app-loader>\n\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t<ng-container *ngIf=\"selectedUtilityCategory == 'Common Electricity Charges' && isUltilityElectricHisLoaded\">\n\n  \t\t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\">From\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('fromDate')\" [ngClass]=\"getFieldOrderBy('fromDate')\"></span>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">To\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('toDate')\" [ngClass]=\"getFieldOrderBy('toDate')\"></span>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Pre Reading\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('preReading')\" [ngClass]=\"getFieldOrderBy('preReading')\"></span>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Curr Reading\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('currReading')\" [ngClass]=\"getFieldOrderBy('currReading')\"></span>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Apartment unit\n                  <span (click)=\"sortUnitData('aptUnit')\" [ngClass]=\"getFieldOrderBy('aptUnit')\"></span>\n\t\t\t\t\t\t  </th>\n              <th scope=\"col\">Cost Per Unit\n                <span (click)=\"sortUnitData('costPerUnit')\" [ngClass]=\"getFieldOrderBy('costPerUnit')\"></span>\n              </th>\n              <th scope=\"col\">Added By\n                <span (click)=\"sortUnitData('addedBy')\" [ngClass]=\"getFieldOrderBy('addedBy')\"></span>\n              </th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let utility of utilityElecteicalListData | simpleSearch: utilitySearch | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\" [ngClass]=\"utility.isActive ? '' : 'notactive'\">\n\t\t\t\t\t      <td class=\"name\">{{getUtilityFromPeriod(utility.utilityTrackerElectricityChargeId)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{getUtilityToPeriod(utility.utilityTrackerElectricityChargeId)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{utility.prevReading}}</td>\n                <td class=\"grey\">{{utility.currReading}}</td>\n                <td class=\"grey\">{{utility.electricalUnitPerAptUnit}}</td>\n                <td class=\"grey\">{{utility.costPerAptUnit}}</td>\n                <td class=\"grey\">{{utility.insertedByUser}}</td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination\n\t\t\t\t\t[totalItems]=\"totalItems\"\n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\n  \t\t\t</ng-container>\n\n\n        <ng-container *ngIf=\"this.selectedUtilityCategory == 'Water Meter Charges' && isUltilityWaterHisLoaded\">\n\n          <table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n          <thead>\n              <tr>\n                <th scope=\"col\">Block\n                  <span (click)=\"sortUnitData('block')\" [ngClass]=\"getFieldOrderBy('block')\"></span>\n                </th>\n                <th scope=\"col\">Apartment Unit\n                  <span (click)=\"sortUnitData('aptUnit')\" [ngClass]=\"getFieldOrderBy('aptUnit')\"></span>\n                </th>\n                <th scope=\"col\">Connection No\n                  <span (click)=\"sortUnitData('connectionNo')\" [ngClass]=\"getFieldOrderBy('connectionNo')\"></span>\n                </th>\n                <th scope=\"col\">Previous Reading\n                  <span (click)=\"sortUnitData('prevReading')\" [ngClass]=\"getFieldOrderBy('prevReading')\"></span>\n                </th>\n                <th scope=\"col\">Current Reading\n                  <span (click)=\"sortUnitData('currReading')\" [ngClass]=\"getFieldOrderBy('currReading')\"></span>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let utility of filteredUtilityWaterListData | simpleSearch: utilitySearch | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n                <td class=\"grey\">{{utility.block}}</td>\n                <td class=\"grey\">{{utility.aptUnit}}</td>\n                <td class=\"grey\"><span *ngIf=\"utility.waterCharge.length>0\">{{utility.waterCharge[0].connectionNo}}</span></td>\n                <td class=\"grey\"><span *ngIf=\"utility.waterCharge.length>0\">{{utility.waterCharge[0].prevReading}}</span></td>\n                <td class=\"grey\"><span *ngIf=\"utility.waterCharge.length>0\">{{utility.waterCharge[0].currReading}}</span></td>\n              </tr>\n            </tbody>\n        </table>\n        <div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n            <p class=\"snippet\">No Records Found</p>\n        </div>\n        <app-pagination\n          [totalItems]=\"totalItems\"\n          [ItemStartIndex]=\"ItemStartIndex\"\n          [ItemEndIndex] = \"ItemEndIndex\"\n          [itemLimit] = \"itemLimit\"\n          (outputParams) = \"getIndexParams($event)\">\n        </app-pagination>\n\n        </ng-container>\n\n        <ng-container *ngIf=\"this.selectedUtilityCategory == 'Common Insurance' && isUltilityInsuranceHisLoaded\">\n\n          <table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n          <thead>\n              <tr>\n                <th scope=\"col\">Insurance Number\n                  <span (click)=\"sortUnitData('insuranceNo')\" [ngClass]=\"getFieldOrderBy('insuranceNo')\"></span>\n                </th>\n                <th scope=\"col\">Apartment Unit Count\n                  <span (click)=\"sortUnitData('aptUnitCount')\" [ngClass]=\"getFieldOrderBy('aptUnitCount')\"></span>\n                </th>\n                <th scope=\"col\">Total Cost\n                  <span (click)=\"sortUnitData('totalCost')\" [ngClass]=\"getFieldOrderBy('totalCost')\"></span>\n                </th>\n                <th scope=\"col\">Cost Per Apartment\n                  <span (click)=\"sortUnitData('costPerApt')\" [ngClass]=\"getFieldOrderBy('costPerApt')\"></span>\n                </th>\n                <th scope=\"col\">Date Entered\n                  <span (click)=\"sortUnitData('dateEntered')\" [ngClass]=\"getFieldOrderBy('dateEntered')\"></span>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let utility of utilityInsuranceListData | simpleSearch: utilitySearch | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n                <td class=\"grey\">{{utility.insuranceNumber}}</td>\n                <td class=\"grey\">{{utility.apartmentUnitCount}}</td>\n                <td class=\"grey\">{{utility.totalCost}}</td>\n                <td class=\"grey\">{{utility.costPerAptUnit}}</td>\n                <td class=\"grey\">{{utility.dateEntered}}</td>\n              </tr>\n            </tbody>\n        </table>\n        <div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n            <p class=\"snippet\">No Records Found</p>\n        </div>\n        <app-pagination\n          [totalItems]=\"totalItems\"\n          [ItemStartIndex]=\"ItemStartIndex\"\n          [ItemEndIndex] = \"ItemEndIndex\"\n          [itemLimit] = \"itemLimit\"\n          (outputParams) = \"getIndexParams($event)\">\n        </app-pagination>\n\n        </ng-container>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-reports/utility-reports.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-reports/utility-reports.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  utility-reports works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-setup/utility-setup.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-setup/utility-setup.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vendors-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isUtilityCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isUtilityCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Utility Categories</h4>\n\t\t<ng-container *ngFor=\"let item of utilityCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0)\" routerLink=\"/ams/vendor/all-vendors/{{item.lookupValueId}}\"\n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a> -->\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateUtilityCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon del\" name=\"x\" (click)=\"showRemoveCategoryConfirmModal(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.category}}</h6>\n\t\t\t\t\t\t<p class=\"float-left\">{{item.ratePerUnit}} per unit</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewUtilityCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isUtilityCategoryNew || isUtilityCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isUtilityCategoryNew\">Add Utility Category</h6>\n    \t\t\t<h6 *ngIf=\"!isUtilityCategoryNew\">Update Utility Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isUtilityCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isUtilityCategorySubmitted\">\n\n\t\t\t\t<form #addUtilityCategoryForm = \"ngForm\" name=\"addUtilityCategoryForm\" (ngSubmit)=\"showConfirmModal(addUtilityCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type<span class=\"mandatory\">*</span></label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"UtilityCategory\" [(ngModel)]=\"UtilityCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                          <label>Rate per Unit<span class=\"mandatory\">*</span></label>\n                          <input type=\"number\" class=\"form-control\" placeholder=\"Enter\" name=\"unitRate\" [(ngModel)]=\"UtilityRateUnit\" required>\n                      </div>\n            </div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addUtilityCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/utility.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/utility.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>utility works!</p>\n");

/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/add-insurance/add-insurance.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/add-insurance/add-insurance.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdXRpbGl0eS9jb21wb25lbnRzL3V0aWxpdHktYWRkLXJlYWRpbmcvYWRkLWluc3VyYW5jZS9hZGQtaW5zdXJhbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvdXRpbGl0eS9jb21wb25lbnRzL3V0aWxpdHktYWRkLXJlYWRpbmcvYWRkLWluc3VyYW5jZS9hZGQtaW5zdXJhbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91dGlsaXR5L2NvbXBvbmVudHMvdXRpbGl0eS1hZGQtcmVhZGluZy9hZGQtaW5zdXJhbmNlL2FkZC1pbnN1cmFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iLCIubWFuZGF0b3J5IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/add-insurance/add-insurance.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/add-insurance/add-insurance.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddInsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInsuranceComponent", function() { return AddInsuranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/UtilityTracker */ "./src/app/api/controllers/UtilityTracker.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");








let AddInsuranceComponent = class AddInsuranceComponent {
    constructor(router, route, utilityTrackerService, lookupService, apartmentService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.utilityTrackerService = utilityTrackerService;
        this.lookupService = lookupService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isInsuranceSubmitted = true;
        this.isEdit = false;
        this.isError = false;
        this.alertMessage = "";
    }
    Cancel() {
        this.onCancel.emit(false);
    }
    submitInsuranceChargeForm(form) {
        this.isInsuranceSubmitted = false;
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentUnitCount": this.insuranceCharge.AptunitCount,
            "insuranceNumber": this.insuranceCharge.InsuranceNo,
            "totalCost": this.insuranceCharge.TotalCost,
            "costPerAptUnit": this.insuranceCharge.CostPerApt,
            "dateEntered": this.insuranceCharge.DateEntered,
            "comments": this.insuranceCharge.Comments,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null
        };
        let params = {
            utilityTrackerInsuranceCharge: details
        };
        this.utilityTrackerService.addUtilityTrackerInsuranceCharge(params).subscribe((res) => {
            if (res.message) {
                this.isInsuranceSubmitted = true;
                this.resetData();
                this.sharedService.setAlertMessage("Insurance added successfully");
            }
            else {
                this.isInsuranceSubmitted = true;
                this.isError = true;
                this.alertMessage = res.errorMessage;
            }
        }, error => {
            this.isInsuranceSubmitted = true;
            this.isError = true;
            this.alertMessage = "Some error occured";
        });
    }
    calculateCostPerAptFrmTotalCost(e) {
        if (this.insuranceCharge.TotalCost) {
            let result_des = this.insuranceCharge.TotalCost / this.insuranceCharge.AptunitCount;
            this.insuranceCharge.CostPerApt = result_des.toFixed(2);
        }
    }
    resetData() {
        this.insuranceCharge.InsuranceNo = undefined;
        this.insuranceCharge.TotalCost = undefined;
        this.insuranceCharge.CostPerApt = undefined;
        this.insuranceCharge.Comments = undefined;
    }
    ngOnInit() {
        this.insuranceCharge = {};
        this.insuranceCharge.DateEntered = new Date().toISOString();
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe((res) => {
            this.insuranceCharge.AptunitCount = res.length;
        });
        // this.utilityTrackerService.getUtilityTrackerCategorysByApartmentId(apartment_id).subscribe((res:any) => {
        //     let electric_category = res.find(x=> x.category == 'Common Electricity Charges')
        //     this.categoryCostPerApt = electric_category.ratePerUnit;
        //   });
    }
};
AddInsuranceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_3__["UtilityTrackerService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddInsuranceComponent.prototype, "onCancel", void 0);
AddInsuranceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-insurance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-insurance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/add-insurance/add-insurance.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-insurance.component.scss */ "./src/app/ams/utility/components/utility-add-reading/add-insurance/add-insurance.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_3__["UtilityTrackerService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], AddInsuranceComponent);



/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/electricity-reading/electricity-reading.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/electricity-reading/electricity-reading.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdXRpbGl0eS9jb21wb25lbnRzL3V0aWxpdHktYWRkLXJlYWRpbmcvZWxlY3RyaWNpdHktcmVhZGluZy9lbGVjdHJpY2l0eS1yZWFkaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvdXRpbGl0eS9jb21wb25lbnRzL3V0aWxpdHktYWRkLXJlYWRpbmcvZWxlY3RyaWNpdHktcmVhZGluZy9lbGVjdHJpY2l0eS1yZWFkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91dGlsaXR5L2NvbXBvbmVudHMvdXRpbGl0eS1hZGQtcmVhZGluZy9lbGVjdHJpY2l0eS1yZWFkaW5nL2VsZWN0cmljaXR5LXJlYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iLCIubWFuZGF0b3J5IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/electricity-reading/electricity-reading.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/electricity-reading/electricity-reading.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ElectricityReadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityReadingComponent", function() { return ElectricityReadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/UtilityTracker */ "./src/app/api/controllers/UtilityTracker.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");








let ElectricityReadingComponent = class ElectricityReadingComponent {
    constructor(router, route, utilityTrackerService, lookupService, apartmentService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.utilityTrackerService = utilityTrackerService;
        this.lookupService = lookupService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isReadingSubmitted = true;
        this.isEditReading = false;
        this.isEdit = false;
        this.isError = false;
        this.alertMessage = "";
    }
    Cancel() {
        this.onCancel.emit(false);
    }
    submitReadingForm(form) {
        let electric_period = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "periodFrom": this.electricReading.fromDate,
            "periodTo": this.electricReading.toDate,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
            "updatedOn": null
        };
        let params = {
            utilityTrackerElectricityPeriod: electric_period
        };
        this.utilityTrackerService.addUtilityTrackerElectricityPeriod(params).subscribe((period_res) => {
            this.electricReading.ElectricityPeriodId = period_res.message;
            this.addOrUpdateElectricityReading(form);
        });
    }
    addOrUpdateElectricityReading(form) {
        this.isReadingSubmitted = false;
        if (!this.isEditReading) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentUnitCount": this.electricReading.AptunitCount,
                "utilityTrackerElectricityPeriodId": this.electricReading.ElectricityPeriodId,
                "prevReading": this.electricReading.PrevReading,
                "currReading": this.electricReading.CurrReading,
                "electricalUnitPerAptUnit": this.electricReading.ElectricalUnit,
                "costPerAptUnit": this.electricReading.CostPerApt,
                "dateTaken": this.electricReading.DateTaken,
                "comments": this.electricReading.comments,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": null
            };
            let params = {
                utilityTrackerElectricityCharge: details
            };
            this.utilityTrackerService.addUtilityTrackerElectricityCharge(params).subscribe((res) => {
                if (res.message) {
                    this.isReadingSubmitted = true;
                    this.resetData();
                    this.sharedService.setAlertMessage("Electricity reading added successfully");
                }
                else {
                    this.isReadingSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isReadingSubmitted = true;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentUnitCount": this.electricReading.AptunitCount,
                "utilityTrackerElectricityPeriodId": this.electricReading.ElectricityPeriodId,
                "prevReading": this.electricReading.PrevReading,
                "currReading": this.electricReading.CurrReading,
                "electricalUnitPerAptUnit": this.electricReading.ElectricalUnitPerApT,
                "costPerAptUnit": this.electricReading.CostPerApt,
                "dateTaken": this.electricReading.DateTaken,
                "comments": this.electricReading.Comments,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": null
            };
            let params = {
                utilityTrackerElectricityCharge: details
            };
            this.utilityTrackerService.addUtilityTrackerElectricityCharge(params).subscribe((res) => {
                if (res.message) {
                    this.isReadingSubmitted = true;
                    this.resetData();
                    this.sharedService.setAlertMessage("Electricity reading updated successfully");
                }
                else {
                    this.isError = true;
                    this.isReadingSubmitted = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isReadingSubmitted = true;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
    }
    calculateUnitPerAptFrmCurReading(e) {
        //this.electricReading.CurrReading = e;
        if (this.electricReading.CurrReading && this.electricReading.PrevReading) {
            let sub = (this.electricReading.CurrReading - this.electricReading.PrevReading);
            let result_des = sub / this.electricReading.AptunitCount;
            this.electricReading.ElectricalUnitPerApT = result_des.toFixed(2);
            this.electricReading.CostPerApt = (this.electricReading.ElectricalUnitPerApT * this.categoryCostPerApt).toFixed(2);
        }
    }
    calculateUnitPerAptFrmPreReading(e) {
        //this.electricReading.PrevReading = e
        if (this.electricReading.CurrReading && this.electricReading.PrevReading) {
            let sub = (this.electricReading.CurrReading - this.electricReading.PrevReading);
            let result_des = sub / this.electricReading.AptunitCount;
            this.electricReading.ElectricalUnitPerApT = result_des.toFixed(2);
            this.electricReading.CostPerApt = (this.electricReading.ElectricalUnitPerApT * this.categoryCostPerApt).toFixed(2);
        }
    }
    resetData() {
        this.electricReading.fromDate = undefined;
        this.electricReading.toDate = undefined;
        this.electricReading.PrevReading = undefined;
        this.electricReading.CurrReading = undefined;
        this.electricReading.ElectricalUnitPerApT = undefined;
        this.electricReading.Comments = undefined;
        this.electricReading.CostPerApt = undefined;
    }
    ngOnInit() {
        this.electricReading = {};
        this.electricReading.dateTaken = new Date().toISOString();
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe((res) => {
            this.electricReading.AptunitCount = res.length;
        });
        this.utilityTrackerService.getUtilityTrackerCategorysByApartmentId(params).subscribe((res) => {
            let electric_category = res.find(x => x.category == 'Common Electricity Charges');
            this.categoryCostPerApt = electric_category.ratePerUnit;
        });
    }
};
ElectricityReadingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_3__["UtilityTrackerService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ElectricityReadingComponent.prototype, "onCancel", void 0);
ElectricityReadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-electricity-reading',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./electricity-reading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/electricity-reading/electricity-reading.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./electricity-reading.component.scss */ "./src/app/ams/utility/components/utility-add-reading/electricity-reading/electricity-reading.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_3__["UtilityTrackerService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], ElectricityReadingComponent);



/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/utility-add-reading.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/utility-add-reading.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91dGlsaXR5L2NvbXBvbmVudHMvdXRpbGl0eS1hZGQtcmVhZGluZy91dGlsaXR5LWFkZC1yZWFkaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/utility-add-reading.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/utility-add-reading.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UtilityAddReadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityAddReadingComponent", function() { return UtilityAddReadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/UtilityTracker */ "./src/app/api/controllers/UtilityTracker.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");







let UtilityAddReadingComponent = class UtilityAddReadingComponent {
    constructor(injector, utilityTrackerService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.utilityTrackerService = utilityTrackerService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isUtilityCategoryLoaded = false;
        this.selected_utility_type = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
    }
    loadUtilityCategory() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.utilityTrackerService.getUtilityTrackerCategorysByApartmentId(params).subscribe((res) => {
            this.utilityCategoryData = res.filter(item => {
                return item.isActive;
            });
            this.isUtilityCategoryLoaded = true;
        }, error => {
        });
    }
    onSelectCat(i) {
        this.selected_index = i;
    }
    onCancel(e) {
        this.selected_utility_type = false;
    }
    selectUtility(category) {
        this.selected_utility_type = true;
        this.utility_selected_category = category;
    }
    ngOnInit() {
        this.apartment_id = parseInt(this.cookieService.get('apartmentId'));
        this.loadUtilityCategory();
    }
};
UtilityAddReadingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__["UtilityTrackerService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
UtilityAddReadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-utility-add-reading',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./utility-add-reading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/utility-add-reading.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./utility-add-reading.component.scss */ "./src/app/ams/utility/components/utility-add-reading/utility-add-reading.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__["UtilityTrackerService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], UtilityAddReadingComponent);



/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/tower-reading-info.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/tower-reading-info.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91dGlsaXR5L2NvbXBvbmVudHMvdXRpbGl0eS1hZGQtcmVhZGluZy93YXRlci1yZWFkaW5nL3Rvd2VyLXJlYWRpbmctaW5mby90b3dlci1yZWFkaW5nLWluZm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/tower-reading-info.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/tower-reading-info.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: TowerReadingInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TowerReadingInfoComponent", function() { return TowerReadingInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/UtilityTracker */ "./src/app/api/controllers/UtilityTracker.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let TowerReadingInfoComponent = class TowerReadingInfoComponent {
    constructor(apartmentService, lookupService, utilityTrackerService, sharedService, cookieService) {
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.utilityTrackerService = utilityTrackerService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEdit = false;
        this.isTowersLoaded = false;
        this.isUnitSold = false;
        this.isUnitVacant = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
    }
    ngOnInit() {
        this.waterReading = {};
        let params = {
            apartmentBlockId: parseInt(this.tower.apartmentBlockId)
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe((res) => {
            this.towerUnitData = res;
            this.totalItems = this.towerUnitData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            for (let unit of this.towerUnitData) {
                let block_unit = this.allApartmentWaterCharge.find(x => x.aptUnit == unit.apartmentBlockUnitNumber);
                if (block_unit) {
                    unit.water_charge = block_unit.waterCharge[0];
                }
                else {
                    unit.water_charge = {};
                }
            }
            this.isTowersLoaded = true;
        });
    }
};
TowerReadingInfoComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_5__["UtilityTrackerService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TowerReadingInfoComponent.prototype, "tower", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TowerReadingInfoComponent.prototype, "waterReadingPeriodID", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TowerReadingInfoComponent.prototype, "allApartmentWaterCharge", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TowerReadingInfoComponent.prototype, "utility_selected_category", void 0);
TowerReadingInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tower-reading-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tower-reading-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/tower-reading-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tower-reading-info.component.scss */ "./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/tower-reading-info.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_5__["UtilityTrackerService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], TowerReadingInfoComponent);



/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/unit-reading-info/unit-reading-info.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/unit-reading-info/unit-reading-info.component.scss ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdXRpbGl0eS9jb21wb25lbnRzL3V0aWxpdHktYWRkLXJlYWRpbmcvd2F0ZXItcmVhZGluZy90b3dlci1yZWFkaW5nLWluZm8vdW5pdC1yZWFkaW5nLWluZm8vdW5pdC1yZWFkaW5nLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy91dGlsaXR5L2NvbXBvbmVudHMvdXRpbGl0eS1hZGQtcmVhZGluZy93YXRlci1yZWFkaW5nL3Rvd2VyLXJlYWRpbmctaW5mby91bml0LXJlYWRpbmctaW5mby91bml0LXJlYWRpbmctaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hbXMvdXRpbGl0eS9jb21wb25lbnRzL3V0aWxpdHktYWRkLXJlYWRpbmcvd2F0ZXItcmVhZGluZy90b3dlci1yZWFkaW5nLWluZm8vdW5pdC1yZWFkaW5nLWluZm8vdW5pdC1yZWFkaW5nLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iLCIubWFuZGF0b3J5IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/unit-reading-info/unit-reading-info.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/unit-reading-info/unit-reading-info.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: UnitReadingInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitReadingInfoComponent", function() { return UnitReadingInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/UtilityTracker */ "./src/app/api/controllers/UtilityTracker.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");








let UnitReadingInfoComponent = class UnitReadingInfoComponent {
    constructor(apartmentService, lookupService, utilityTrackerService, sharedService, cookieService) {
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.utilityTrackerService = utilityTrackerService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isError = false;
        this.alertMessage = "";
        this.isEdit = false;
    }
    showEditForm() {
        this.isEdit = !this.isEdit;
    }
    getBooleanStatus(status) {
        return status ? 'Yes' : 'No';
    }
    getUnitType(name) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.unitTypeData, function (item) {
            if (item.lookupValueName === name)
                return item;
        });
        if (data === undefined || data.length == 0) {
            this.unitTypeId = "";
        }
        else {
            this.unitTypeId = data[0].lookupValueId;
        }
    }
    submitWaterMeterReading(form) {
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentBlockId": this.tower.apartmentBlockId,
            "apartmentBlockUnitId": this.unit.apartmentBlockUnitId,
            "waterChargeTypeId": null,
            "utilityTrackerWaterChargePeriodId": this.waterReadingPeriodID,
            "prevReading": this.waterReading.prevReading,
            "currReading": this.waterReading.currReading,
            "units": this.waterReading.units,
            "unitNumber": null,
            "cost": parseInt(this.waterReading.cost),
            "dateTaken": this.waterReading.dateTaken,
            "comments": this.waterReading.comments,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null
        };
        let params = {
            utilityTrackerWaterCharge: details
        };
        this.utilityTrackerService.addUtilityTrackerWaterCharge(params).subscribe((res) => {
            if (res.message) {
                this.isEdit = false;
                this.sharedService.setAlertMessage("Water reading added successfully");
            }
            else {
                this.isError = true;
                this.alertMessage = res.errorMessage;
            }
        }, error => {
            this.isError = true;
            this.alertMessage = "Some error occured";
        });
    }
    calculateUnitPerAptFrmCurReading(e) {
        if (this.waterReading.currReading && this.waterReading.prevReading) {
            this.waterReading.units = (this.waterReading.currReading - this.waterReading.prevReading);
            this.waterReading.cost = (this.waterReading.units * this.utility_selected_category.ratePerUnit).toFixed(2);
        }
    }
    calculateUnitPerAptFrmPreReading(e) {
        if (this.waterReading.currReading && this.waterReading.prevReading) {
            this.waterReading.units = (this.waterReading.currReading - this.waterReading.prevReading);
            this.waterReading.cost = (this.waterReading.units * this.utility_selected_category.ratePerUnit).toFixed(2);
        }
    }
    ngOnInit() {
        this.waterReading = {};
        let apartment_id = parseInt(this.cookieService.get('apartmentId'));
        if (this.unit.water_charge == undefined) {
            this.unit.water_charge = {};
        }
        if (this.unit.water_charge.prevReading && this.unit.water_charge.currReading) {
            this.isEdit = false;
            this.waterReading.units = (this.unit.water_charge.currReading - this.unit.water_charge.prevReading);
        }
        else {
            this.isEdit = true;
        }
        this.waterReading.prevReading = this.unit.water_charge.prevReading;
        this.waterReading.currReading = this.unit.water_charge.currReading;
        this.waterReading.dateTaken = new Date().toISOString();
        this.unitTypeId = "";
        //get unit type
        let params = {
            LookupTypeId: 1
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.unitTypeData = res;
            setTimeout(() => {
                this.getUnitType(this.unit.unitType);
            }, 1000);
        }, error => {
        });
    }
};
UnitReadingInfoComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_5__["UtilityTrackerService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UnitReadingInfoComponent.prototype, "tower", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UnitReadingInfoComponent.prototype, "unit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UnitReadingInfoComponent.prototype, "waterReadingPeriodID", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UnitReadingInfoComponent.prototype, "utility_selected_category", void 0);
UnitReadingInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-reading-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unit-reading-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/unit-reading-info/unit-reading-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./unit-reading-info.component.scss */ "./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/unit-reading-info/unit-reading-info.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_5__["UtilityTrackerService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], UnitReadingInfoComponent);



/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/water-reading/water-reading.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/water-reading/water-reading.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdXRpbGl0eS9jb21wb25lbnRzL3V0aWxpdHktYWRkLXJlYWRpbmcvd2F0ZXItcmVhZGluZy93YXRlci1yZWFkaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvdXRpbGl0eS9jb21wb25lbnRzL3V0aWxpdHktYWRkLXJlYWRpbmcvd2F0ZXItcmVhZGluZy93YXRlci1yZWFkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91dGlsaXR5L2NvbXBvbmVudHMvdXRpbGl0eS1hZGQtcmVhZGluZy93YXRlci1yZWFkaW5nL3dhdGVyLXJlYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iLCIubWFuZGF0b3J5IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/utility/components/utility-add-reading/water-reading/water-reading.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-add-reading/water-reading/water-reading.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: WaterReadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterReadingComponent", function() { return WaterReadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/UtilityTracker */ "./src/app/api/controllers/UtilityTracker.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let WaterReadingComponent = class WaterReadingComponent {
    constructor(apartmentService, lookupService, utilityTrackerService, sharedService, cookieService) {
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.utilityTrackerService = utilityTrackerService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDataLoaded = false;
        this.isSetPeriod = true;
    }
    cancel() {
        this.onCancel.emit(false);
    }
    submitReadingPeriodForm(form) {
        this.isSetPeriod = false;
        let water_reading_period = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "periodFrom": this.waterReadingFromDate,
            "periodTo": this.waterReadingToDate,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
            "updatedOn": null
        };
        let params = {
            utilityTrackerWaterChargePeriod: water_reading_period
        };
        this.utilityTrackerService.addUtilityTrackerWaterChargePeriod(params).subscribe((period_res) => {
            this.waterReadingPeriodID = period_res.message;
            this.isSetPeriod = true;
        });
    }
    ngOnInit() {
        this.waterReadingPeriodID = undefined;
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.propertyTowerData = res;
            this.isDataLoaded = true;
        });
        this.utilityTrackerService.getUtilityTrackerWaterChargesByApartmentId(params).subscribe((res) => {
            this.allApartmentWaterCharge = res;
        });
    }
};
WaterReadingComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_5__["UtilityTrackerService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WaterReadingComponent.prototype, "onCancel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WaterReadingComponent.prototype, "utility_selected_category", void 0);
WaterReadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-water-reading',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./water-reading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-add-reading/water-reading/water-reading.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./water-reading.component.scss */ "./src/app/ams/utility/components/utility-add-reading/water-reading/water-reading.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_5__["UtilityTrackerService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], WaterReadingComponent);



/***/ }),

/***/ "./src/app/ams/utility/components/utility-history/utility-history.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-history/utility-history.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n\n.filter-width {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdXRpbGl0eS9jb21wb25lbnRzL3V0aWxpdHktaGlzdG9yeS91dGlsaXR5LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy91dGlsaXR5L2NvbXBvbmVudHMvdXRpbGl0eS1oaXN0b3J5L3V0aWxpdHktaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hbXMvdXRpbGl0eS9jb21wb25lbnRzL3V0aWxpdHktaGlzdG9yeS91dGlsaXR5LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5maWx0ZXItd2lkdGh7XG4gIHdpZHRoOiAxNTBweDtcbn1cbiIsIi5tYW5kYXRvcnkge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5maWx0ZXItd2lkdGgge1xuICB3aWR0aDogMTUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/ams/utility/components/utility-history/utility-history.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-history/utility-history.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UtilityHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityHistoryComponent", function() { return UtilityHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/UtilityTracker */ "./src/app/api/controllers/UtilityTracker.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");







let UtilityHistoryComponent = class UtilityHistoryComponent {
    constructor(lookupService, sharedService, apartmentService, utilityTrackerService, cookieService) {
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.apartmentService = apartmentService;
        this.utilityTrackerService = utilityTrackerService;
        this.cookieService = cookieService;
        this.utilityCategoryData = "";
        this.isUtilityCategoryLoaded = false;
        this.isUltilityElectricHisLoaded = false;
        this.isUltilityWaterHisLoaded = false;
        this.isUltilityInsuranceHisLoaded = false;
        this.utilitySearch = "";
        this.unitFieldType = "utilityName";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.selectedInput = "";
        this.columnField = {};
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
            return this.unitOrder ? 'asc' : 'desc';
        }
        else
            return '';
    }
    selectColInput(value) {
        this.selectedInput = value;
    }
    isWaterHistory() {
        if (this.selectedUtilityCategory == 'Water Meter Charges') {
            return true;
        }
        else {
            return false;
        }
    }
    onFilterByTowerChange() {
        console.log("this.selectedTower", this.selectedTower);
        if (this.selectedTower == 'All') {
            this.filteredUtilityWaterListData = this.utilityWaterListData;
        }
        else {
            this.filteredUtilityWaterListData = this.utilityWaterListData.filter(x => x.block == this.selectedTower);
        }
        this.totalItems = this.filteredUtilityWaterListData.length;
    }
    onUtilityCatregoryChange() {
        this.ItemStartIndex = 0;
        if (this.selectedUtilityCategory == 'Common Electricity Charges') {
            this.isUltilityWaterHisLoaded = false;
            this.isUltilityInsuranceHisLoaded = false;
            this.getAllElectricalUtiliy();
        }
        else if (this.selectedUtilityCategory == 'Water Meter Charges') {
            this.isUltilityElectricHisLoaded = false;
            this.isUltilityInsuranceHisLoaded = false;
            this.getAllWaterUtiliy();
        }
        else if (this.selectedUtilityCategory == 'Common Insurance') {
            this.isUltilityWaterHisLoaded = false;
            this.isUltilityElectricHisLoaded = false;
            this.getAllInsuranceUtiliy();
        }
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    getUtilityFromPeriod(period_id) {
        let electeicalListPeriods = this.utilityElecteicalListPeriods.find(x => x.period_id == period_id);
        if (electeicalListPeriods) {
            return electeicalListPeriods.periods[0].periodFrom.slice(0, 10);
        }
    }
    getUtilityToPeriod(period_id) {
        let electeicalListPeriods = this.utilityElecteicalListPeriods.find(x => x.period_id == period_id);
        if (electeicalListPeriods) {
            return electeicalListPeriods.periods[0].periodTo.slice(0, 10);
        }
    }
    getAllElectricalUtiliy() {
        this.isUltilityElectricHisLoaded = false;
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.utilityTrackerService.getElectricityChargesByApartmentId(params).subscribe((res) => {
            this.utilityElecteicalListData = res.filter(item => {
                return item.isActive;
            });
            this.utilityElecteicalListPeriods = [];
            for (let electrical_list of this.utilityElecteicalListData) {
                let period_param = { "apartmentId": parseInt(this.cookieService.get('apartmentId')), "utilityTrackerElectricityPeriodId": electrical_list.utilityTrackerElectricityPeriodId };
                this.utilityTrackerService.getUtilityTrackerElectricityPeriodsById(period_param).subscribe((res) => {
                    let period_data = { "periods": res, "period_id": electrical_list.utilityTrackerElectricityPeriodId };
                    this.utilityElecteicalListPeriods.push(period_data);
                });
            }
            this.totalItems = this.utilityElecteicalListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isUltilityElectricHisLoaded = true;
        });
    }
    getAllWaterUtiliy() {
        this.selectedTower = 'All';
        this.isUltilityWaterHisLoaded = false;
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.utilityTrackerService.getUtilityTrackerWaterChargesByApartmentId(params).subscribe((res) => {
            this.utilityWaterListData = res;
            this.filteredUtilityWaterListData = this.utilityWaterListData;
            this.totalItems = this.filteredUtilityWaterListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isUltilityWaterHisLoaded = true;
        });
    }
    getAllInsuranceUtiliy() {
        this.isUltilityInsuranceHisLoaded = false;
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.utilityTrackerService.getUtilityTrackerInsuranceChargesByApartmentId(params).subscribe((res) => {
            this.utilityInsuranceListData = res.filter(item => {
                return item.isActive;
            });
            this.utilityInsuranceListData.sort(function (a, b) {
                a = new Date(a.dateEntered);
                b = new Date(b.dateEntered);
                return a > b ? -1 : a < b ? 1 : 0;
            });
            this.totalItems = this.utilityInsuranceListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isUltilityInsuranceHisLoaded = true;
        });
    }
    ngOnInit() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.utilityTrackerService.getUtilityTrackerCategorysByApartmentId(params).subscribe((res) => {
            this.utilityCategoryData = res.filter(item => {
                return item.isActive;
            });
            this.isUtilityCategoryLoaded = true;
        }, error => {
        });
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.propertyTowerData = res;
        });
    }
};
UtilityHistoryComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"] },
    { type: src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__["UtilityTrackerService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
UtilityHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-utility-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./utility-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-history/utility-history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./utility-history.component.scss */ "./src/app/ams/utility/components/utility-history/utility-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"],
        src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__["UtilityTrackerService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], UtilityHistoryComponent);



/***/ }),

/***/ "./src/app/ams/utility/components/utility-reports/utility-reports.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-reports/utility-reports.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91dGlsaXR5L2NvbXBvbmVudHMvdXRpbGl0eS1yZXBvcnRzL3V0aWxpdHktcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/utility/components/utility-reports/utility-reports.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-reports/utility-reports.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UtilityReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityReportsComponent", function() { return UtilityReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UtilityReportsComponent = class UtilityReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
UtilityReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-utility-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./utility-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-reports/utility-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./utility-reports.component.scss */ "./src/app/ams/utility/components/utility-reports/utility-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UtilityReportsComponent);



/***/ }),

/***/ "./src/app/ams/utility/components/utility-setup/utility-setup.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-setup/utility-setup.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdXRpbGl0eS9jb21wb25lbnRzL3V0aWxpdHktc2V0dXAvdXRpbGl0eS1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3V0aWxpdHkvY29tcG9uZW50cy91dGlsaXR5LXNldHVwL3V0aWxpdHktc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYW1zL3V0aWxpdHkvY29tcG9uZW50cy91dGlsaXR5LXNldHVwL3V0aWxpdHktc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iLCIubWFuZGF0b3J5IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/utility/components/utility-setup/utility-setup.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ams/utility/components/utility-setup/utility-setup.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UtilitySetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitySetupComponent", function() { return UtilitySetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/UtilityTracker */ "./src/app/api/controllers/UtilityTracker.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");







let UtilitySetupComponent = class UtilitySetupComponent {
    constructor(injector, utilityTrackerService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.utilityTrackerService = utilityTrackerService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isUtilityCategoryLoaded = false;
        this.isUtilityCategorySubmitted = true;
        this.isUtilityCategoryNew = false;
        this.isUtilityCategoryUpdate = false;
        this.UtilityCategory = "";
        this.UtilityCategoryUpdateId = 0;
        this.alertMessage = "";
        this.isError = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
    }
    addNewUtilityCategory() {
        this.UtilityCategory = "";
        this.UtilityRateUnit = undefined;
        this.isUtilityCategoryNew = true;
        this.isUtilityCategoryUpdate = false;
    }
    updateUtilityCategory(item) {
        this.isUtilityCategoryUpdate = true;
        this.isUtilityCategoryNew = false;
        this.selectedItem = item;
        this.UtilityCategory = item.category;
        this.UtilityRateUnit = item.ratePerUnit;
        this.UtilityCategoryUpdateId = item.utilityTrackerCategoryId;
    }
    deleteUtilityCategory(item) {
        this.isUtilityCategoryLoaded = false;
        console.log(item);
        var params = {
            utilityId: item.utilityTrackerCategoryId,
            deleteBy: parseInt(this.cookieService.get('userId'))
        };
        this.utilityTrackerService.deleteUtilityTrackerCategory(params).subscribe((res) => {
            this.loadUtilityCategory();
        });
    }
    showConfirmModal(form) {
        if (this.isUtilityCategoryNew) {
            //  this.modalService.showCategoryModal(form);
            this.submitUtilityCategoryForm(form);
        }
        else {
            this.addOrUpdateUtilityCategoryForm(form);
        }
    }
    showRemoveCategoryConfirmModal(item) {
        this.modalService.showConfirmModal(item);
    }
    removeCategoryBox() {
        this.isUtilityCategoryNew = false;
        this.isUtilityCategoryUpdate = false;
        this.isUtilityCategorySubmitted = true;
        this.isError = false;
    }
    getUtilitysCount(id) {
        var data = this.utilityListData.filter(item => {
            return item.utilityCategoryId == id;
        });
        if (data === undefined || data.length === 0) {
            return 0;
        }
        else {
            return data.length;
        }
    }
    submitUtilityCategoryForm(form) {
        //adding new category not supporting  now..
        this.isError = true;
        this.alertMessage = "Please raise Service Ticket";
    }
    addOrUpdateUtilityCategoryForm(form) {
        this.isUtilityCategorySubmitted = false;
        this.isError = false;
        if (this.isUtilityCategoryNew) {
            let details = {
                "apartmentId": this.apartment_id,
                "category": this.UtilityCategory,
                "ratePerUnit": this.UtilityRateUnit,
                "comments": "",
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": null,
            };
            let params = {
                utilityTrackerCategory: details
            };
            this.utilityTrackerService.addUtilityTrackerCategory(params).subscribe((res) => {
                if (res.message) {
                    let params = {
                        apartmentId: parseInt(this.cookieService.get('apartmentId'))
                    };
                    this.utilityTrackerService.getUtilityTrackerCategorysByApartmentId(params).subscribe((res) => {
                        this.isUtilityCategorySubmitted = true;
                        this.sharedService.setAlertMessage("Category added Successfully!");
                        this.utilityCategoryData = res.filter(item => {
                            return item.isActive;
                        });
                    });
                }
                else {
                    this.isUtilityCategorySubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            });
        }
        else {
            let details = {
                "utilityTrackerCategoryId": this.UtilityCategoryUpdateId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "category": this.UtilityCategory,
                "ratePerUnit": this.UtilityRateUnit,
                "comments": "",
                "isActive": true,
                "insertedBy": this.selectedItem.insertedBy,
                "insertedOn": this.selectedItem.insertedOn,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
            };
            let params = {
                utilityTrackerCategory: details
            };
            this.utilityTrackerService.updateUtilityTrackerCategory(params).subscribe((res) => {
                if (res.message) {
                    let params = {
                        apartmentId: parseInt(this.cookieService.get('apartmentId'))
                    };
                    this.utilityTrackerService.getUtilityTrackerCategorysByApartmentId(params).subscribe((res) => {
                        this.isUtilityCategorySubmitted = true;
                        this.sharedService.setAlertMessage("Category updated Successfully!");
                        this.utilityCategoryData = res.filter(item => {
                            return item.isActive;
                        });
                        this.isUtilityCategoryNew = false;
                        this.isUtilityCategoryUpdate = false;
                    });
                }
                else {
                    this.isUtilityCategorySubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            });
        }
    }
    loadUtilityCategory() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.utilityTrackerService.getUtilityTrackerCategorysByApartmentId(params).subscribe((res) => {
            this.utilityCategoryData = res.filter(item => {
                return item.isActive;
            });
            this.isUtilityCategoryLoaded = true;
        }, error => {
        });
    }
    ngOnInit() {
        this.apartment_id = parseInt(this.cookieService.get('apartmentId'));
        this.loadUtilityCategory();
        this.sharedService.newcategoryadd.subscribe(is_category_form => {
            if (is_category_form) {
                this.submitUtilityCategoryForm(is_category_form);
            }
        });
        this.sharedService.unitlistdeleteindexcast.subscribe(item_id => {
            if (item_id) {
                this.deleteUtilityCategory(item_id);
            }
        });
    }
};
UtilitySetupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__["UtilityTrackerService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
UtilitySetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-utility-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./utility-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/components/utility-setup/utility-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./utility-setup.component.scss */ "./src/app/ams/utility/components/utility-setup/utility-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__["UtilityTrackerService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], UtilitySetupComponent);



/***/ }),

/***/ "./src/app/ams/utility/utility-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ams/utility/utility-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UtilityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityRoutingModule", function() { return UtilityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_utility_reports_utility_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/utility-reports/utility-reports.component */ "./src/app/ams/utility/components/utility-reports/utility-reports.component.ts");
/* harmony import */ var _components_utility_setup_utility_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/utility-setup/utility-setup.component */ "./src/app/ams/utility/components/utility-setup/utility-setup.component.ts");
/* harmony import */ var _components_utility_add_reading_utility_add_reading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/utility-add-reading/utility-add-reading.component */ "./src/app/ams/utility/components/utility-add-reading/utility-add-reading.component.ts");
/* harmony import */ var _components_utility_add_reading_electricity_reading_electricity_reading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/utility-add-reading/electricity-reading/electricity-reading.component */ "./src/app/ams/utility/components/utility-add-reading/electricity-reading/electricity-reading.component.ts");
/* harmony import */ var _components_utility_add_reading_water_reading_water_reading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/utility-add-reading/water-reading/water-reading.component */ "./src/app/ams/utility/components/utility-add-reading/water-reading/water-reading.component.ts");
/* harmony import */ var _components_utility_history_utility_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/utility-history/utility-history.component */ "./src/app/ams/utility/components/utility-history/utility-history.component.ts");









const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_utility_setup_utility_setup_component__WEBPACK_IMPORTED_MODULE_4__["UtilitySetupComponent"] },
    { path: 'reading', component: _components_utility_add_reading_utility_add_reading_component__WEBPACK_IMPORTED_MODULE_5__["UtilityAddReadingComponent"] },
    { path: 'reading/electric', component: _components_utility_add_reading_electricity_reading_electricity_reading_component__WEBPACK_IMPORTED_MODULE_6__["ElectricityReadingComponent"] },
    { path: 'reading/water', component: _components_utility_add_reading_water_reading_water_reading_component__WEBPACK_IMPORTED_MODULE_7__["WaterReadingComponent"] },
    { path: 'history', component: _components_utility_history_utility_history_component__WEBPACK_IMPORTED_MODULE_8__["UtilityHistoryComponent"] },
    { path: 'reports', component: _components_utility_reports_utility_reports_component__WEBPACK_IMPORTED_MODULE_3__["UtilityReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let UtilityRoutingModule = class UtilityRoutingModule {
};
UtilityRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UtilityRoutingModule);



/***/ }),

/***/ "./src/app/ams/utility/utility.component.scss":
/*!****************************************************!*\
  !*** ./src/app/ams/utility/utility.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy91dGlsaXR5L3V0aWxpdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/utility/utility.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ams/utility/utility.component.ts ***!
  \**************************************************/
/*! exports provided: UtilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityComponent", function() { return UtilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UtilityComponent = class UtilityComponent {
    constructor() { }
    ngOnInit() {
    }
};
UtilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-utility',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./utility.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/utility/utility.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./utility.component.scss */ "./src/app/ams/utility/utility.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UtilityComponent);



/***/ }),

/***/ "./src/app/ams/utility/utility.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ams/utility/utility.module.ts ***!
  \***********************************************/
/*! exports provided: UtilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityModule", function() { return UtilityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _utility_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility-routing.module */ "./src/app/ams/utility/utility-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _utility_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility.component */ "./src/app/ams/utility/utility.component.ts");
/* harmony import */ var _components_utility_reports_utility_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/utility-reports/utility-reports.component */ "./src/app/ams/utility/components/utility-reports/utility-reports.component.ts");
/* harmony import */ var _components_utility_setup_utility_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/utility-setup/utility-setup.component */ "./src/app/ams/utility/components/utility-setup/utility-setup.component.ts");
/* harmony import */ var _components_utility_add_reading_utility_add_reading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/utility-add-reading/utility-add-reading.component */ "./src/app/ams/utility/components/utility-add-reading/utility-add-reading.component.ts");
/* harmony import */ var _components_utility_add_reading_electricity_reading_electricity_reading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/utility-add-reading/electricity-reading/electricity-reading.component */ "./src/app/ams/utility/components/utility-add-reading/electricity-reading/electricity-reading.component.ts");
/* harmony import */ var _components_utility_add_reading_water_reading_water_reading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/utility-add-reading/water-reading/water-reading.component */ "./src/app/ams/utility/components/utility-add-reading/water-reading/water-reading.component.ts");
/* harmony import */ var _components_utility_history_utility_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/utility-history/utility-history.component */ "./src/app/ams/utility/components/utility-history/utility-history.component.ts");
/* harmony import */ var _components_utility_add_reading_water_reading_tower_reading_info_tower_reading_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/utility-add-reading/water-reading/tower-reading-info/tower-reading-info.component */ "./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/tower-reading-info.component.ts");
/* harmony import */ var _components_utility_add_reading_water_reading_tower_reading_info_unit_reading_info_unit_reading_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/utility-add-reading/water-reading/tower-reading-info/unit-reading-info/unit-reading-info.component */ "./src/app/ams/utility/components/utility-add-reading/water-reading/tower-reading-info/unit-reading-info/unit-reading-info.component.ts");
/* harmony import */ var _components_utility_add_reading_add_insurance_add_insurance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/utility-add-reading/add-insurance/add-insurance.component */ "./src/app/ams/utility/components/utility-add-reading/add-insurance/add-insurance.component.ts");















let UtilityModule = class UtilityModule {
};
UtilityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _utility_component__WEBPACK_IMPORTED_MODULE_5__["UtilityComponent"],
            _components_utility_reports_utility_reports_component__WEBPACK_IMPORTED_MODULE_6__["UtilityReportsComponent"],
            _components_utility_setup_utility_setup_component__WEBPACK_IMPORTED_MODULE_7__["UtilitySetupComponent"],
            _components_utility_add_reading_utility_add_reading_component__WEBPACK_IMPORTED_MODULE_8__["UtilityAddReadingComponent"],
            _components_utility_add_reading_electricity_reading_electricity_reading_component__WEBPACK_IMPORTED_MODULE_9__["ElectricityReadingComponent"],
            _components_utility_add_reading_water_reading_water_reading_component__WEBPACK_IMPORTED_MODULE_10__["WaterReadingComponent"],
            _components_utility_history_utility_history_component__WEBPACK_IMPORTED_MODULE_11__["UtilityHistoryComponent"],
            _components_utility_add_reading_water_reading_tower_reading_info_tower_reading_info_component__WEBPACK_IMPORTED_MODULE_12__["TowerReadingInfoComponent"],
            _components_utility_add_reading_water_reading_tower_reading_info_unit_reading_info_unit_reading_info_component__WEBPACK_IMPORTED_MODULE_13__["UnitReadingInfoComponent"],
            _components_utility_add_reading_add_insurance_add_insurance_component__WEBPACK_IMPORTED_MODULE_14__["AddInsuranceComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _utility_routing_module__WEBPACK_IMPORTED_MODULE_3__["UtilityRoutingModule"]
        ],
        bootstrap: [_utility_component__WEBPACK_IMPORTED_MODULE_5__["UtilityComponent"]]
    })
], UtilityModule);



/***/ })

}]);
//# sourceMappingURL=utility-utility-module-es2015.js.map