(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-parcel-delivery-parcel-delivery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/create-package/create-package.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/create-package/create-package.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vendor-create-wrapper\">\n\n  <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n  <form #createPackageForm=\"ngForm\" name=\"createPackageForm\" (ngSubmit)=\"submitPackageForm(createPackageForm)\" novalidate>\n    <h4 class=\"main-title-mini float-left mt-3\">\n      <span>Create Delivery</span>\n    </h4>\n\n    <div class=\"card ov clear\">\n\n      <div class=\"card-body ov\">\n\n        <app-loader *ngIf=\"!isPackageCreated\"></app-loader>\n\n        <app-alert-message [message]=\"alertMessage\" [isError]=\"isError\"></app-alert-message>\n\n        <ng-container *ngIf=\"isPackageCreated\">\n\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <div class=\"input-box radio-box\">\n                <label>Receiver Type<span class=\"mandatory\">*</span></label>\n                <div  *ngFor=\"let item of receiverType; let i = index;\" class=\"form-group\">\n                  <input name=\"receiverType{{i}}\" id=\"receiverType{{i}}\" [(ngModel)]=\"packageData.ReceiverType\" [value]=\"item.lookupValueId\" type=\"radio\" required>\n                  <label class=\"radio-inline\" for=\"receiverType{{i}}\">{{item.lookupValueName}}</label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Block unit user id<span class=\"mandatory\">*</span></label>\n                <input type=\"text\" [disabled]=false class=\"form-control\" placeholder=\"Enter\" name=\"BlockUnitId\" [(ngModel)]=\"packageData.BlockUnitId\" required>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Type<span class=\"mandatory\">*</span></label>\n                <select name=\"packageType\" id=\"packageType\" class=\"form-control\" [(ngModel)]=\"packageData.Type\" required>\n                  <option value=\"\" disabled selected >Select</option>\n                  <option *ngFor=\"let item of packageTypes\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Delivery Type<span class=\"mandatory\">*</span></label>\n                <select name=\"packageDType\" id=\"packageDType\" class=\"form-control\" [(ngModel)]=\"packageData.Deliverytype\" required>\n                  <option value=\"\" disabled selected >Select</option>\n                  <option *ngFor=\"let item of deliveryTypes\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Assign to staff<span class=\"mandatory\">*</span></label>\n                <select name=\"packageAssignStaff\" id=\"packageAssignStaff\" class=\"form-control\" [(ngModel)]=\"packageData.Staff\" required>\n                  <option value=\"\" disabled selected>Select</option>\n                  <option *ngFor=\"let staff of staffListData\" [value]=\"staff.staffId\">{{ staff.firstName }}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Slot<span class=\"mandatory\">*</span></label>\n                <select name=\"packageSlot\" id=\"packageSlot\" class=\"form-control\" [(ngModel)]=\"packageData.Slot\" required>\n                  <option value=\"\" disabled selected >Select</option>\n                  <option *ngFor=\"let item of deliverySlots\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Scan image<span class=\"mandatory\">*</span></label><br>\n                <a class=\"link\">upload package image</a>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Comments /Package count</label>\n                <textarea placeholder=\"some text here\" name=\"packageComments\" [(ngModel)]=\"packageData.Comments\"></textarea>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"list-inline float-right mt-4\">\n          <button class=\"btn blue mr-2\" [disabled]=\"createPackageForm.invalid\" *ngIf=\"!isEdit\">Submit</button>\n        </div>\n      </div>\n    </div>\n  </form>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/delivery-history/delivery-history.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/delivery-history/delivery-history.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inventory-view-wrapper\">\n\n\n\t<div class=\"card table-card\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Delivery <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"utilitySearch\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<app-loader *ngIf=\"!isDeliveryHistoryLoaded\"></app-loader>\n\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t<ng-container *ngIf=\"isDeliveryHistoryLoaded\">\n\n  \t\t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\">PackageNo\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('fromDate')\" [ngClass]=\"getFieldOrderBy('fromDate')\"></span>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">SlotNo\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('toDate')\" [ngClass]=\"getFieldOrderBy('toDate')\"></span>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">BlockunitUser\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('preReading')\" [ngClass]=\"getFieldOrderBy('preReading')\"></span>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Status\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('currReading')\" [ngClass]=\"getFieldOrderBy('currReading')\"></span>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Last updated\n                  <span (click)=\"sortUnitData('aptUnit')\" [ngClass]=\"getFieldOrderBy('aptUnit')\"></span>\n\t\t\t\t\t\t  </th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <!-- <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let utility of utilityElecteicalListData | simpleSearch: utilitySearch | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\" [ngClass]=\"utility.isActive ? '' : 'notactive'\">\n\t\t\t\t\t      <td class=\"name\">{{getUtilityFromPeriod(utility.utilityTrackerElectricityChargeId)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{getUtilityToPeriod(utility.utilityTrackerElectricityChargeId)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{utility.prevReading}}</td>\n                <td class=\"grey\">{{utility.currReading}}</td>\n                <td class=\"grey\">{{utility.electricalUnitPerAptUnit}}</td>\n                <td class=\"grey\">{{utility.costPerAptUnit}}</td>\n                <td class=\"grey\">{{utility.insertedByUser}}</td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody> -->\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination\n\t\t\t\t\t[totalItems]=\"totalItems\"\n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\n  \t\t\t</ng-container>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/delivery-setup/delivery-setup.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/delivery-setup/delivery-setup.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vendors-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isDeliveryCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isDeliveryCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Delivery Categories</h4>\n\t\t<!-- <ng-container *ngFor=\"let item of utilityCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateDeliveryCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon del\" name=\"x\" (click)=\"showRemoveCategoryConfirmModal(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.category}}</h6>\n\t\t\t\t\t\t<p class=\"float-left\">{{item.ratePerUnit}} per unit</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container> -->\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewDeliveryCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isDeliveryCategoryNew || isDeliveryCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isDeliveryCategoryNew\">Add Delivery Category</h6>\n    \t\t\t<h6 *ngIf=\"!isDeliveryCategoryNew\">Update Delivery Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isDeliveryCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isDeliveryCategorySubmitted\">\n\n\t\t\t\t<form #addDeliveryCategoryForm = \"ngForm\" name=\"addDeliveryCategoryForm\" (ngSubmit)=\"showConfirmModal(addDeliveryCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Delivery Type<span class=\"mandatory\">*</span></label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"DeliveryCategory\" [(ngModel)]=\"DeliveryCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                          <label>Description<span class=\"mandatory\">*</span></label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"DeliveryCategory\" [(ngModel)]=\"DeliveryDescription\" required>\n                      </div>\n            </div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addDeliveryCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/pending-delivery/pending-delivery.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/pending-delivery/pending-delivery.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inventory-view-wrapper\">\n\n\n\t<div class=\"card table-card\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Pending Delivery <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"utilitySearch\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<app-loader *ngIf=\"!isPendingDeliveryLoaded\"></app-loader>\n\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t<ng-container *ngIf=\"isPendingDeliveryLoaded\">\n\n  \t\t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\">PackageNo\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('fromDate')\" [ngClass]=\"getFieldOrderBy('fromDate')\"></span>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">SlotNo\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('toDate')\" [ngClass]=\"getFieldOrderBy('toDate')\"></span>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">BlockunitUser\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('preReading')\" [ngClass]=\"getFieldOrderBy('preReading')\"></span>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Ageing\n                  <span (click)=\"sortUnitData('aptUnit')\" [ngClass]=\"getFieldOrderBy('aptUnit')\"></span>\n\t\t\t\t\t\t  </th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <!-- <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let utility of utilityElecteicalListData | simpleSearch: utilitySearch | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\" [ngClass]=\"utility.isActive ? '' : 'notactive'\">\n\t\t\t\t\t      <td class=\"name\">{{getUtilityFromPeriod(utility.utilityTrackerElectricityChargeId)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{getUtilityToPeriod(utility.utilityTrackerElectricityChargeId)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{utility.prevReading}}</td>\n                <td class=\"grey\">{{utility.currReading}}</td>\n                <td class=\"grey\">{{utility.electricalUnitPerAptUnit}}</td>\n                <td class=\"grey\">{{utility.costPerAptUnit}}</td>\n                <td class=\"grey\">{{utility.insertedByUser}}</td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody> -->\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination\n\t\t\t\t\t[totalItems]=\"totalItems\"\n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n\n  \t\t\t</ng-container>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./src/app/modules/ams/parcel-delivery/components/create-package/create-package.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/ams/parcel-delivery/components/create-package/create-package.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n\n.link {\n  color: skyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvcGFyY2VsLWRlbGl2ZXJ5L2NvbXBvbmVudHMvY3JlYXRlLXBhY2thZ2UvY3JlYXRlLXBhY2thZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbXMvcGFyY2VsLWRlbGl2ZXJ5L2NvbXBvbmVudHMvY3JlYXRlLXBhY2thZ2UvY3JlYXRlLXBhY2thZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5saW5re1xuICBjb2xvcjogc2t5Ymx1ZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parcel-delivery/components/create-package/create-package.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/ams/parcel-delivery/components/create-package/create-package.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CreatePackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePackageComponent", function() { return CreatePackageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_api_controllers_Package__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Package */ "./src/app/api/controllers/Package.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");







//import { SharedService } from 'src/app/api/shared/services/shared.service';

let CreatePackageComponent = class CreatePackageComponent {
    constructor(router, route, staffService, packageService, lookupService, apartmentService, 
    //private sharedService:SharedService,
    sessionService) {
        this.router = router;
        this.route = route;
        this.staffService = staffService;
        this.packageService = packageService;
        this.lookupService = lookupService;
        this.apartmentService = apartmentService;
        this.sessionService = sessionService;
        this.isEdit = false;
        this.isError = false;
        this.isPackageCreated = true;
        this.params = {
            apartmentId: this.sessionService.apartmentId
        };
    }
    submitPackageForm(form) {
        let package_data = {
            "apartmentId": this.sessionService.apartmentId,
            "apartmentBlockUnitId": this.packageData.BlockUnitId,
            "packageTypeId": this.packageData.Type,
            "slot": this.packageData.Slot,
            "deliveryTypeId": this.packageData.Deliverytype,
            "deliveryDate": new Date().toISOString(),
            "assignedTo": this.packageData.Staff,
            "description": this.packageData.Comments,
            "receivedBy": parseInt(this.sessionService.userId),
            "deliveryStatusId": 986,
            "isActive": true,
            "insertedBy": parseInt(this.sessionService.userId),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
            "updatedOn": null
        };
        let params = {
            utilityTrackerElectricityPeriod: package_data
        };
        this.packageService.addPackage(params).subscribe((package_res) => {
        });
    }
    ngOnInit() {
        this.packageData = {};
        this.packageData.Deliverytype = "";
        this.packageData.Staff = "";
        this.packageData.Slot = "";
        this.packageData.Slot = "";
        //staff type
        this.staffService.getAllStaffsByApartmentId(this.params).subscribe((res) => {
            this.staffListData = res.filter(data => {
                return data.isActive;
            });
        });
        let packgeTypeParams = {
            LookupTypeId: 169
        };
        this.lookupService.getLookupValueByLookupTypeId(packgeTypeParams).subscribe((res) => {
            this.packageTypes = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let deliveryTypeParams = {
            LookupTypeId: 170
        };
        this.lookupService.getLookupValueByLookupTypeId(packgeTypeParams).subscribe((res) => {
            this.deliveryTypes = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let deliveryStatusParams = {
            LookupTypeId: 171
        };
        this.lookupService.getLookupValueByLookupTypeId(packgeTypeParams).subscribe((res) => {
            this.deliveryStatus = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let deliverySlotParams = {
            LookupTypeId: 171
        };
        this.lookupService.getLookupValueByLookupTypeId(packgeTypeParams).subscribe((res) => {
            this.deliverySlots = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let receiverTypeParams = {
            LookupTypeId: 182
        };
        this.lookupService.getLookupValueByLookupTypeId(receiverTypeParams).subscribe((res) => {
            this.receiverType = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
    }
};
CreatePackageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"] },
    { type: src_app_api_controllers_Package__WEBPACK_IMPORTED_MODULE_5__["PackageService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] }
];
CreatePackageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-package',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-package.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/create-package/create-package.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-package.component.scss */ "./src/app/modules/ams/parcel-delivery/components/create-package/create-package.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"],
        src_app_api_controllers_Package__WEBPACK_IMPORTED_MODULE_5__["PackageService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])
], CreatePackageComponent);



/***/ }),

/***/ "./src/app/modules/ams/parcel-delivery/components/delivery-history/delivery-history.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/ams/parcel-delivery/components/delivery-history/delivery-history.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvcGFyY2VsLWRlbGl2ZXJ5L2NvbXBvbmVudHMvZGVsaXZlcnktaGlzdG9yeS9kZWxpdmVyeS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmNlbC1kZWxpdmVyeS9jb21wb25lbnRzL2RlbGl2ZXJ5LWhpc3RvcnkvZGVsaXZlcnktaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW5kYXRvcnl7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parcel-delivery/components/delivery-history/delivery-history.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/ams/parcel-delivery/components/delivery-history/delivery-history.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DeliveryHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryHistoryComponent", function() { return DeliveryHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/UtilityTracker */ "./src/app/api/controllers/UtilityTracker.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");






let DeliveryHistoryComponent = class DeliveryHistoryComponent {
    constructor(lookupService, sharedService, utilityTrackerService, sessionService) {
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.utilityTrackerService = utilityTrackerService;
        this.sessionService = sessionService;
        this.isDeliveryHistoryLoaded = true;
        this.unitFieldType = "deliveryName";
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    ngOnInit() {
        this.ItemEndIndex = 0;
    }
};
DeliveryHistoryComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__["UtilityTrackerService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }
];
DeliveryHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delivery-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/delivery-history/delivery-history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delivery-history.component.scss */ "./src/app/modules/ams/parcel-delivery/components/delivery-history/delivery-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__["UtilityTrackerService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])
], DeliveryHistoryComponent);



/***/ }),

/***/ "./src/app/modules/ams/parcel-delivery/components/delivery-setup/delivery-setup.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/ams/parcel-delivery/components/delivery-setup/delivery-setup.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvcGFyY2VsLWRlbGl2ZXJ5L2NvbXBvbmVudHMvZGVsaXZlcnktc2V0dXAvZGVsaXZlcnktc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbXMvcGFyY2VsLWRlbGl2ZXJ5L2NvbXBvbmVudHMvZGVsaXZlcnktc2V0dXAvZGVsaXZlcnktc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/ams/parcel-delivery/components/delivery-setup/delivery-setup.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/ams/parcel-delivery/components/delivery-setup/delivery-setup.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DeliverySetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverySetupComponent", function() { return DeliverySetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DeliverySetupComponent = class DeliverySetupComponent {
    constructor() {
        this.isEdit = false;
        this.isError = false;
        this.isDeliveryCategoryLoaded = true;
        this.isDeliveryCategoryNew = false;
        this.isDeliveryCategoryUpdate = false;
        this.isDeliveryCategorySubmitted = true;
    }
    ngOnInit() {
    }
    addNewDeliveryCategory() {
        this.isDeliveryCategoryNew = true;
        this.isDeliveryCategoryUpdate = true;
    }
};
DeliverySetupComponent.ctorParameters = () => [];
DeliverySetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delivery-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/delivery-setup/delivery-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delivery-setup.component.scss */ "./src/app/modules/ams/parcel-delivery/components/delivery-setup/delivery-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DeliverySetupComponent);



/***/ }),

/***/ "./src/app/modules/ams/parcel-delivery/components/pending-delivery/pending-delivery.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/ams/parcel-delivery/components/pending-delivery/pending-delivery.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmNlbC1kZWxpdmVyeS9jb21wb25lbnRzL3BlbmRpbmctZGVsaXZlcnkvcGVuZGluZy1kZWxpdmVyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/parcel-delivery/components/pending-delivery/pending-delivery.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/ams/parcel-delivery/components/pending-delivery/pending-delivery.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PendingDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingDeliveryComponent", function() { return PendingDeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/UtilityTracker */ "./src/app/api/controllers/UtilityTracker.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_api_controllers_Package__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Package */ "./src/app/api/controllers/Package.ts");







let PendingDeliveryComponent = class PendingDeliveryComponent {
    constructor(lookupService, sharedService, packageService, utilityTrackerService, sessionService) {
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.packageService = packageService;
        this.utilityTrackerService = utilityTrackerService;
        this.sessionService = sessionService;
        this.isPendingDeliveryLoaded = true;
        this.unitFieldType = "deliveryName";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.selectedInput = "";
        this.columnField = {};
        this.params = {
            apartmentId: this.sessionService.apartmentId
        };
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    ngOnInit() {
        this.ItemEndIndex = 0;
        // this.packageService.getAllPendingDeliveries()subscribe((package_res:any) =>{
        //
        // })
    }
};
PendingDeliveryComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: src_app_api_controllers_Package__WEBPACK_IMPORTED_MODULE_6__["PackageService"] },
    { type: src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__["UtilityTrackerService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }
];
PendingDeliveryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pending-delivery',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pending-delivery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parcel-delivery/components/pending-delivery/pending-delivery.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pending-delivery.component.scss */ "./src/app/modules/ams/parcel-delivery/components/pending-delivery/pending-delivery.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        src_app_api_controllers_Package__WEBPACK_IMPORTED_MODULE_6__["PackageService"],
        src_app_api_controllers_UtilityTracker__WEBPACK_IMPORTED_MODULE_2__["UtilityTrackerService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])
], PendingDeliveryComponent);



/***/ }),

/***/ "./src/app/modules/ams/parcel-delivery/parcel-delivery.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/ams/parcel-delivery/parcel-delivery.module.ts ***!
  \***********************************************************************/
/*! exports provided: ParcelDeliveryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParcelDeliveryModule", function() { return ParcelDeliveryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _parcel_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parcel-routing.module */ "./src/app/modules/ams/parcel-delivery/parcel-routing.module.ts");
/* harmony import */ var _components_create_package_create_package_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-package/create-package.component */ "./src/app/modules/ams/parcel-delivery/components/create-package/create-package.component.ts");
/* harmony import */ var _components_delivery_history_delivery_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/delivery-history/delivery-history.component */ "./src/app/modules/ams/parcel-delivery/components/delivery-history/delivery-history.component.ts");
/* harmony import */ var _components_delivery_setup_delivery_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/delivery-setup/delivery-setup.component */ "./src/app/modules/ams/parcel-delivery/components/delivery-setup/delivery-setup.component.ts");
/* harmony import */ var _components_pending_delivery_pending_delivery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pending-delivery/pending-delivery.component */ "./src/app/modules/ams/parcel-delivery/components/pending-delivery/pending-delivery.component.ts");









let ParcelDeliveryModule = class ParcelDeliveryModule {
};
ParcelDeliveryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_create_package_create_package_component__WEBPACK_IMPORTED_MODULE_5__["CreatePackageComponent"],
            _components_delivery_history_delivery_history_component__WEBPACK_IMPORTED_MODULE_6__["DeliveryHistoryComponent"],
            _components_delivery_setup_delivery_setup_component__WEBPACK_IMPORTED_MODULE_7__["DeliverySetupComponent"],
            _components_pending_delivery_pending_delivery_component__WEBPACK_IMPORTED_MODULE_8__["PendingDeliveryComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _parcel_routing_module__WEBPACK_IMPORTED_MODULE_4__["ParcelRoutingModule"]
        ]
    })
], ParcelDeliveryModule);



/***/ }),

/***/ "./src/app/modules/ams/parcel-delivery/parcel-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/ams/parcel-delivery/parcel-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ParcelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParcelRoutingModule", function() { return ParcelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_create_package_create_package_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-package/create-package.component */ "./src/app/modules/ams/parcel-delivery/components/create-package/create-package.component.ts");
/* harmony import */ var _components_delivery_history_delivery_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/delivery-history/delivery-history.component */ "./src/app/modules/ams/parcel-delivery/components/delivery-history/delivery-history.component.ts");
/* harmony import */ var _components_delivery_setup_delivery_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/delivery-setup/delivery-setup.component */ "./src/app/modules/ams/parcel-delivery/components/delivery-setup/delivery-setup.component.ts");
/* harmony import */ var _components_pending_delivery_pending_delivery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pending-delivery/pending-delivery.component */ "./src/app/modules/ams/parcel-delivery/components/pending-delivery/pending-delivery.component.ts");







const routes = [
    { path: 'create-package', component: _components_create_package_create_package_component__WEBPACK_IMPORTED_MODULE_3__["CreatePackageComponent"] },
    { path: 'delivery-history', component: _components_delivery_history_delivery_history_component__WEBPACK_IMPORTED_MODULE_4__["DeliveryHistoryComponent"] },
    { path: 'delivery-manage', component: _components_delivery_history_delivery_history_component__WEBPACK_IMPORTED_MODULE_4__["DeliveryHistoryComponent"] },
    { path: 'delivery-pending', component: _components_pending_delivery_pending_delivery_component__WEBPACK_IMPORTED_MODULE_6__["PendingDeliveryComponent"] },
    { path: 'delivery-setup', component: _components_delivery_setup_delivery_setup_component__WEBPACK_IMPORTED_MODULE_5__["DeliverySetupComponent"] },
];
let ParcelRoutingModule = class ParcelRoutingModule {
};
ParcelRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ParcelRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-ams-parcel-delivery-parcel-delivery-module-es2015.js.map