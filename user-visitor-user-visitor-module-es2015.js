(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-visitor-user-visitor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-visitor-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditVisitor\">Create Expected Visitor</span>\n    \t\t\t\t<span *ngIf=\"isEditVisitor\">Edit Expected Visitor</span>\n    \t\t\t</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"!isArrayOne()\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/user/my-visitors\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"isArrayOne() && !isEditVisitor\" (click)=\"deleteVisitor()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isVisitorSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isVisitorSubmitted\">\n\n\t\t\t\t<form #addVisitorForm = \"ngForm\" name=\"addVisitorForm\" (ngSubmit)=\"submitAddVisitorForm(addVisitorForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"visitorName\" [(ngModel)]=\"visitor.expectedVisitorName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Count*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Count\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedVisitorCount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Phone/Mobile*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Number\" name=\"phoneNo\" [(ngModel)]=\"visitor.expectedVisitorPhone\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor In-time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\" [owlDateTimeTrigger]=\"visitorInTime\" placeholder=\"Select In-Time\" [(ngModel)]=\"visitor.expectedVisitorInTime\" [disabled]=\"true\" (ngModelChange)=\"expectedDurationChange()\">\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorInTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Out-time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorOutTime\" [owlDateTime]=\"visitorOutTime\" [owlDateTimeTrigger]=\"visitorOutTime\" placeholder=\"Select Out-Time\" [(ngModel)]=\"visitor.expectedVisitorOutTime\" (ngModelChange)=\"expectedDurationChange()\">\n\t\t\t\t\t\t\t\t<owl-date-time #visitorOutTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorOutTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Duration*</label>\n\t\t\t                    <input type=\"text\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Duration\" name=\"visitorDuration\" [(ngModel)]=\"visitor.expectedDuration\" [disabled]=\"true\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Type*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitBy\" \n\t\t\t\t\t\t\t        id=\"visitBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Purpose</label>\n\t\t\t                    <textarea  type=\"text\" class=\"form-control\" placeholder=\"Enter purpose\" name=\"visitorpurpose\" [(ngModel)]=\"visitor.purpose\"></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t<label>Expected Visit Category*</label>\n\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\tname=\"visitByCategory\" \n\t\t\t\t\t\t\t\tid=\"visitByCategory\" \n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"visitCategoryId\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of visitCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVisitorForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n  \n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/create-visitor.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/create-visitor.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"create-visitor-wrapper\">\n\t<ng-container *ngFor=\"let visitor of visitorArray; let i = index\">\n\t\t<app-add-visitor [index]=\"i\" [array]=\"visitorArray\" (outputParams) = \"getVisitorArray($event)\"></app-add-visitor>\n\t</ng-container>\n\t<!-- <a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addVisitor()\" *ngIf=\"!isEditVisitor\" [ngClass]=\"isMobileView() ? 'mobile' : ''\">\n\t\t<div class=\"icon\">+<span class=\"text d-sm-none ml-2\">Add Visitor</span></div>\n\t</a> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/my-visitor/my-visitor.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/my-visitor/my-visitor.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-visitor-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isVisitorDataLoaded\"></app-loader>\n\n\n\t<div class=\"card table-card\" *ngIf=\"isVisitorDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Visitors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"visitorData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/user/visitor/create-visitor\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"\n\t\t\t\t\t[state]=\"{ data: 'user'}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Visitor</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<app-filter-box *ngIf=\"isVisitorDataLoaded\" [totalItems]=\"totalFilterItems\"  (outputParams) = \"getFilterData($event)\" class=\"d-sm-block d-none\"></app-filter-box>\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('name')\">Visitor Name <span [ngClass]=\"getFieldOrderBy('name')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('phone')\">Phone Number <span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('intime')\">In-time <span [ngClass]=\"getFieldOrderBy('intime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('outtime')\">Out-time <span [ngClass]=\"getFieldOrderBy('outtime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('type')\">Visit Type <span [ngClass]=\"getFieldOrderBy('type')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let visitor of visitorListData | simpleSearch: visitorData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t      \t{{visitor.expectedVisitorName}}</a>\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Visitor Count</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedVisitorCount}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Expected Duration</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedDuration}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey\">{{visitor.expectedVisitorPhone}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.expectedVisitorInTime}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.expectedVisitorOutTime}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getVisitType(visitor.visitTypeId)}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/user/visitor/edit-visitor/{{visitor.expectedVisitorId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/user-visitor.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/user-visitor.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci12aXNpdG9yL2NvbXBvbmVudHMvY3JlYXRlLXZpc2l0b3IvYWRkLXZpc2l0b3IvYWRkLXZpc2l0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddVisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVisitorComponent", function() { return AddVisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/user */ "./src/app/api/controllers/user.ts");
/* harmony import */ var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/lookup */ "./src/app/api/controllers/lookup.ts");
/* harmony import */ var src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/apartment */ "./src/app/api/controllers/apartment.ts");
/* harmony import */ var src_app_api_controllers_visitor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/visitor */ "./src/app/api/controllers/visitor.ts");
/* harmony import */ var _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/shared-toaster.service */ "./src/app/shared/services/shared-toaster.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let AddVisitorComponent = class AddVisitorComponent {
    constructor(router, route, userService, apartmentService, visitorService, lookupService, sharedService, cookieService, SharedToaster) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.SharedToaster = SharedToaster;
        this.isEditVisitor = false;
        this.isVisitorSubmitted = false;
        this.isError = false;
        this.errorMessage = "";
        this.visitor = { expectedVisitorInTime: '' };
        this.visitTypeId = "";
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD');
        this.visitor.expectedVisitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
    }
    isArrayOne() {
        return this.visitorArray.length > 1 ? true : false;
    }
    deleteVisitor() {
        this.visitorArray.splice(this.index, 1);
        this.outputParams.emit(this.visitorArray);
    }
    submitAddVisitorForm(form) {
        this.isVisitorSubmitted = true;
        this.isError = false;
        if (!this.isEditVisitor) {
            let visitorDetails = {
                "apartmentUnitId": this.apartmentUnitId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "expectedVisitorName": this.visitor.expectedVisitorName,
                "expectedVisitorCount": this.visitor.expectedVisitorCount,
                "expectedVisitorPhone": this.visitor.expectedVisitorPhone.toString(),
                "expectedVisitorInTime": this.visitor.expectedVisitorInTime,
                "expectedVisitorOutTime": this.visitor.expectedVisitorOutTime,
                "expectedDuration": this.visitor.expectedDurationInHours,
                "meetingPersonId": 1,
                "visitTypeId": parseInt(this.visitTypeId),
                "expectedVisitorsOrg": "string",
                "entryGateId": null,
                "exitGateId": null,
                "purpose": this.visitor.purpose,
                "enteredBy": parseInt(this.cookieService.get('userId')),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-18T15:27:41.030Z",
                "updatedBy": 0,
                "updatedOn": "2019-11-18T15:27:41.030Z"
            };
            let params = {
                expectedVisitor: visitorDetails
            };
            this.visitorService.addExpectedVisitor(params).subscribe((res) => {
                if (res.message) {
                    this.isVisitorSubmitted = true;
                    this.sharedService.setAlertMessage("Visitor added successfully");
                    this.router.navigate(['user/visitor/my-visitor']);
                }
                else {
                    this.isVisitorSubmitted = false;
                    this.isError = true;
                    this.errorMessage = res.errorMessage;
                }
            }, error => {
                this.isVisitorSubmitted = false;
                this.isError = true;
                this.errorMessage = error;
            });
        }
        else {
            let visitorDetails = {
                "expectedVisitorId": this.route.params['value'].id,
                "apartmentUnitId": this.apartmentUnitId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "expectedVisitorName": this.visitor.expectedVisitorName,
                "expectedVisitorCount": this.visitor.expectedVisitorCount,
                "expectedVisitorPhone": this.visitor.expectedVisitorPhone.toString(),
                "expectedVisitorInTime": this.visitor.expectedVisitorInTime,
                "expectedVisitorOutTime": this.visitor.expectedVisitorOutTime,
                "expectedDuration": this.visitor.expectedDurationInHours,
                "meetingPersonId": 1,
                "visitTypeId": parseInt(this.visitTypeId),
                "expectedVisitorsOrg": "string",
                "entryGateId": null,
                "exitGateId": null,
                "purpose": this.visitor.purpose,
                "enteredBy": parseInt(this.cookieService.get('userId')),
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": "2019-11-18T15:27:41.030Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-11-18T15:27:41.030Z"
            };
            let params = {
                expectedVisitor: visitorDetails
            };
            this.visitorService.updateExpectedVisitor(params).subscribe((res) => {
                if (res.message) {
                    this.isVisitorSubmitted = true;
                    this.sharedService.setAlertMessage("Visitor updated successfully");
                    this.router.navigate(['user/visitor/my-visitor']);
                }
                else {
                    this.isVisitorSubmitted = false;
                    this.isError = true;
                    this.errorMessage = res.errorMessage;
                }
            }, error => {
                this.isVisitorSubmitted = false;
                this.isError = true;
                this.errorMessage = error;
            });
        }
    }
    ngOnInit() {
        this.visitor = {};
        if (this.route.params['value'].id != undefined) {
            this.isEditVisitor = true;
        }
        if (this.route.params['value'].id != undefined) {
            this.isEditVisitor = true;
            this.visitorService.getExpectedVisitorById(this.route.params['value'].id).subscribe((res) => {
                this.visitor = res[0];
                this.visitor.purpose = '';
                this.visitTypeId = this.visitor.visitTypeId;
            }, error => {
            });
        }
        let visitParams = {
            LookupTypeId: 15
        };
        //visit type
        this.lookupService.getLookupValueByLookupTypeId(visitParams).subscribe((res) => {
            this.visitByData = res;
        }, error => {
        });
        let params = {
            LookupTypeId: 9
        };
        //visit category
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            console.log(res);
        }, error => {
        });
        let visitCategoryParams = {
            LookupTypeId: 100
        };
        this.lookupService.getLookupValueByLookupTypeId(visitCategoryParams).subscribe((res) => {
            this.visitCategoryData = res;
        }, error => {
        });
        let apartmentUnitParams = {
            userId: parseInt(this.cookieService.get('userId'))
        };
        this.apartmentService.getApartmentBlockUnitByUserId(apartmentUnitParams).subscribe((res) => {
            this.apartmentUnitId = res[0].apartmentBlockUnitId;
        }, error => {
        });
        this.visitor.expectedVisitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
    }
    expectedDurationChange() {
        if (this.minDate > moment__WEBPACK_IMPORTED_MODULE_10__(this.visitor.expectedVisitorInTime).format('YYYY-MM-DD')) {
            console.log("min date");
            this.visitor.expectedVisitorInTime = undefined;
            this.SharedToaster.openSnackBar("Please Select valid Date", '');
            return;
        }
        if (this.minDate > moment__WEBPACK_IMPORTED_MODULE_10__(this.visitor.expectedVisitorOutTime).format('YYYY-MM-DD')) {
            console.log(this.visitor.expectedVisitorOutTime);
            this.visitor.expectedVisitorOutTime = undefined;
            console.log(this.visitor.expectedVisitorOutTime);
            this.SharedToaster.openSnackBar("Please Select valid Date", '');
            return;
        }
        let inDate = moment__WEBPACK_IMPORTED_MODULE_10__(this.visitor.expectedVisitorInTime);
        let outDate = moment__WEBPACK_IMPORTED_MODULE_10__(this.visitor.expectedVisitorOutTime);
        var diffDuration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](outDate.diff(inDate));
        this.visitor.expectedDuration = diffDuration.days() + " days " + this.isSingleDigit(diffDuration.hours()) + ":" + this.isSingleDigit(diffDuration.minutes()) + " hours";
        let sendDuration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](outDate.diff(inDate));
        let hours = sendDuration.asHours();
        this.visitor.expectedDurationInHours = Math.round(hours);
    }
    isSingleDigit(digit) {
        console.log('isSingleDigit:', digit.toString().length, digit);
        if (digit <= 0) {
            return '00';
        }
        else {
            return (digit.toString().length > 1) ? digit : '0' + digit;
        }
    }
};
AddVisitorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: src_app_api_controllers_visitor__WEBPACK_IMPORTED_MODULE_6__["VisitorService"] },
    { type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] },
    { type: _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_7__["SharedToasterService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddVisitorComponent.prototype, "index", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddVisitorComponent.prototype, "visitorArray", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddVisitorComponent.prototype, "outputParams", void 0);
AddVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-visitor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-visitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-visitor.component.scss */ "./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        src_app_api_controllers_visitor__WEBPACK_IMPORTED_MODULE_6__["VisitorService"],
        src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"],
        _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_7__["SharedToasterService"]])
], AddVisitorComponent);



/***/ }),

/***/ "./src/app/user/user-visitor/components/create-visitor/create-visitor.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/user/user-visitor/components/create-visitor/create-visitor.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci12aXNpdG9yL2NvbXBvbmVudHMvY3JlYXRlLXZpc2l0b3IvY3JlYXRlLXZpc2l0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/user-visitor/components/create-visitor/create-visitor.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/user/user-visitor/components/create-visitor/create-visitor.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CreateVisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVisitorComponent", function() { return CreateVisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let CreateVisitorComponent = class CreateVisitorComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.visitorCount = 1;
        this.isEditVisitor = false;
    }
    addVisitor() {
        this.visitorCount++;
        this.visitorArray = Array(this.visitorCount).fill(0).map((x, i) => i);
    }
    getVisitorArray(event) {
        this.visitorArray = event;
        this.visitorCount = this.visitorArray.length;
    }
    isMobileView() {
        return window.innerWidth <= 576;
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.isEditVisitor = true;
        }
        this.visitorArray = Array(this.visitorCount).fill(0).map((x, i) => i);
    }
};
CreateVisitorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CreateVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-visitor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-visitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/create-visitor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-visitor.component.scss */ "./src/app/user/user-visitor/components/create-visitor/create-visitor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CreateVisitorComponent);



/***/ }),

/***/ "./src/app/user/user-visitor/components/my-visitor/my-visitor.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/user/user-visitor/components/my-visitor/my-visitor.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci12aXNpdG9yL2NvbXBvbmVudHMvbXktdmlzaXRvci9teS12aXNpdG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/user-visitor/components/my-visitor/my-visitor.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user/user-visitor/components/my-visitor/my-visitor.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MyVisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyVisitorComponent", function() { return MyVisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/apartment */ "./src/app/api/controllers/apartment.ts");
/* harmony import */ var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/lookup */ "./src/app/api/controllers/lookup.ts");
/* harmony import */ var src_app_api_controllers_visitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers//visitor */ "./src/app/api/controllers/visitor.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");









let MyVisitorComponent = class MyVisitorComponent {
    constructor(injector, apartmentService, visitorService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.visitorData = "";
        this.isVisitorDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
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
    getVisitType(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.visitTypeData, function (item) {
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    ngOnInit() {
        let apartmentUnitParams = {
            userId: parseInt(this.cookieService.get('userId'))
        };
        this.apartmentService.getApartmentBlockUnitByUserId(apartmentUnitParams).subscribe((res) => {
            this.apartmentUnitId = res[0].apartmentBlockUnitId;
            console.log(this.apartmentUnitId);
            this.visitorService.getExpectedVisitorsByApartmentUnitId(this.apartmentUnitId).subscribe((res) => {
                //filter active true items
                this.visitorListData = res.filter(data => {
                    return data.isActive;
                });
                console.log(res);
                this.totalItems = this.visitorListData.length;
                if (this.totalItems > this.itemLimit) {
                    this.ItemEndIndex = this.itemLimit;
                }
                else {
                    this.ItemEndIndex = this.totalItems;
                }
                this.isVisitorDataLoaded = true;
            }, error => {
            });
        }, error => {
        });
        let visitParams = {
            LookupTypeId: 15
        };
        //get visit type
        this.lookupService.getLookupValueByLookupTypeId(visitParams).subscribe((res) => {
            this.visitTypeData = res;
        }, error => {
        });
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(index => {
            if (index != null) {
                var expectedVisitorId = this.visitorListData[index].expectedVisitorId;
                var params = {
                    expectedVisitorId: expectedVisitorId,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.isVisitorDataLoaded = false;
                this.visitorService.deleteExpectedVisitorById(params).subscribe((res) => {
                    this.visitorListData.splice(index, 1);
                    this.totalItems = this.visitorListData.length;
                    this.isVisitorDataLoaded = true;
                    this.sharedService.setUnitListDeleteIndex(null);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
};
MyVisitorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: src_app_api_controllers_visitor__WEBPACK_IMPORTED_MODULE_4__["VisitorService"] },
    { type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
MyVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-visitor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-visitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/my-visitor/my-visitor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-visitor.component.scss */ "./src/app/user/user-visitor/components/my-visitor/my-visitor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        src_app_api_controllers_visitor__WEBPACK_IMPORTED_MODULE_4__["VisitorService"],
        src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], MyVisitorComponent);



/***/ }),

/***/ "./src/app/user/user-visitor/user-visitor-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/user/user-visitor/user-visitor-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: UserVisitorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVisitorRoutingModule", function() { return UserVisitorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-visitor/create-visitor.component */ "./src/app/user/user-visitor/components/create-visitor/create-visitor.component.ts");
/* harmony import */ var _components_my_visitor_my_visitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/my-visitor/my-visitor.component */ "./src/app/user/user-visitor/components/my-visitor/my-visitor.component.ts");





const routes = [
    { path: '', redirectTo: 'my-visitor', pathMatch: 'full' },
    { path: 'my-visitor', component: _components_my_visitor_my_visitor_component__WEBPACK_IMPORTED_MODULE_4__["MyVisitorComponent"] },
    { path: 'create-visitor', component: _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_3__["CreateVisitorComponent"] },
    { path: 'edit-visitor/:id', component: _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_3__["CreateVisitorComponent"] },
    { path: '**', redirectTo: 'my-visitor', pathMatch: 'full' }
];
let UserVisitorRoutingModule = class UserVisitorRoutingModule {
};
UserVisitorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserVisitorRoutingModule);



/***/ }),

/***/ "./src/app/user/user-visitor/user-visitor.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/user-visitor/user-visitor.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci12aXNpdG9yL3VzZXItdmlzaXRvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/user-visitor/user-visitor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-visitor/user-visitor.component.ts ***!
  \*************************************************************/
/*! exports provided: UserVisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVisitorComponent", function() { return UserVisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserVisitorComponent = class UserVisitorComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-visitor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-visitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/user-visitor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-visitor.component.scss */ "./src/app/user/user-visitor/user-visitor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UserVisitorComponent);



/***/ }),

/***/ "./src/app/user/user-visitor/user-visitor.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/user-visitor/user-visitor.module.ts ***!
  \**********************************************************/
/*! exports provided: UserVisitorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVisitorModule", function() { return UserVisitorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-visitor-routing.module */ "./src/app/user/user-visitor/user-visitor-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_visitor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-visitor.component */ "./src/app/user/user-visitor/user-visitor.component.ts");
/* harmony import */ var _components_create_visitor_add_visitor_add_visitor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-visitor/add-visitor/add-visitor.component */ "./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.ts");
/* harmony import */ var _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create-visitor/create-visitor.component */ "./src/app/user/user-visitor/components/create-visitor/create-visitor.component.ts");
/* harmony import */ var _components_my_visitor_my_visitor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/my-visitor/my-visitor.component */ "./src/app/user/user-visitor/components/my-visitor/my-visitor.component.ts");









let UserVisitorModule = class UserVisitorModule {
};
UserVisitorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_my_visitor_my_visitor_component__WEBPACK_IMPORTED_MODULE_8__["MyVisitorComponent"],
            _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_7__["CreateVisitorComponent"],
            _components_create_visitor_add_visitor_add_visitor_component__WEBPACK_IMPORTED_MODULE_6__["AddVisitorComponent"],
            _user_visitor_component__WEBPACK_IMPORTED_MODULE_5__["UserVisitorComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _user_visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserVisitorRoutingModule"]
        ],
        bootstrap: [_user_visitor_component__WEBPACK_IMPORTED_MODULE_5__["UserVisitorComponent"]]
    })
], UserVisitorModule);



/***/ })

}]);
//# sourceMappingURL=user-visitor-user-visitor-module-es2015.js.map