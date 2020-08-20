(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-user-visitor-user-visitor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-side-add-visitor-wrapper\">\n\t<div class=\"main\">\n\t\t<div class=\"d-flex mb-4\">\n\t\t\t<h4>\n\t\t\t\t<span *ngIf=\"!isEditVisitor\">Create Expected Visitor</span>\n\t\t\t\t<span *ngIf=\"isEditVisitor\">Edit Expected Visitor</span>\n\t\t\t</h4>\n\t\t\t<div class=\"ml-auto\" *ngIf=\"isArrayOne() && !isEditVisitor\" (click)=\"deleteVisitor()\">\n\t\t\t\t<mat-icon [color]=\"'warn'\" svgIcon=\"mat_outline:delete\"></mat-icon>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"bg-card shadow\">\n\t\t\t<app-loader *ngIf=\"isVisitorSubmitted\"></app-loader>\n\t\t\t<ng-container *ngIf=\"!isVisitorSubmitted\">\n\t\t\t\t<form #addVisitorForm = \"ngForm\" name=\"addVisitorForm\" (ngSubmit)=\"submitAddVisitorForm(addVisitorForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Name<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"visitorName\" [(ngModel)]=\"visitor.expectedVisitorName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Count<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Count\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedVisitorCount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Phone/Mobile<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"number\" (blur)=\"IsvalidatePhoneNo($event.target.value)\" class=\"form-control\" placeholder=\"Enter Number\" name=\"phoneNo\" [(ngModel)]=\"visitor.expectedVisitorPhone\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor In-time<span class=\"required\">*</span></label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\" [owlDateTimeTrigger]=\"visitorInTime\" placeholder=\"Select In-Time\" [(ngModel)]=\"visitor.expectedVisitorInTime\" [disabled]=\"!isEditVisitor\">\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorInTime\">\n  \t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Out-time<span class=\"required\">*</span></label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorOutTime\" [owlDateTime]=\"visitorOutTime\" [owlDateTimeTrigger]=\"visitorOutTime\" placeholder=\"Select Out-Time\" [min]=\"minExOutTime\" [(ngModel)]=\"visitor.expectedVisitorOutTime\" (ngModelChange)=\"expectedDurationChange(visitor.expectedVisitorInTime, visitor.expectedVisitorOutTime)\">\n\t\t\t\t\t\t\t\t<owl-date-time #visitorOutTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorOutTime\">\n  \t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Duration<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"text\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Duration\" name=\"visitorDuration\" [(ngModel)]=\"visitor.expectedDuration\" [disabled]=\"true\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Type<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitBy\" \n\t\t\t\t\t\t\t        id=\"visitBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Category<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\t\tname=\"visitByCategory\" \n\t\t\t\t\t\t\t\t\tid=\"visitByCategory\" \n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"visitCategoryId\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of visitCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Purpose<span class=\"required\">*</span></label>\n\t\t\t                    <textarea  type=\"text\" class=\"form-control purpose-box\" placeholder=\"Enter purpose\" name=\"visitorpurpose\" [(ngModel)]=\"visitor.purpose\" required></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t\t<button  mat-flat-button [color]=\"'primary'\" [disabled]=\"addVisitorForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</ng-container>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/components/create-visitor/create-visitor.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/components/create-visitor/create-visitor.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"create-visitor-wrapper\">\n\t<ng-container *ngFor=\"let visitor of visitorArray; let i = index\">\n\t\t<app-add-visitor [index]=\"i\" [array]=\"visitorArray\" (outputParams) = \"getVisitorArray($event)\"></app-add-visitor>\n\t</ng-container>\n\t<!-- <a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addVisitor()\" *ngIf=\"!isEditVisitor\" [ngClass]=\"isMobileView() ? 'mobile' : ''\">\n\t\t<div class=\"icon\">+<span class=\"text d-sm-none ml-2\">Add Visitor</span></div>\n\t</a> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/components/my-visitor/my-visitor.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/components/my-visitor/my-visitor.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-visitor-list-wrapper\">\n\t<div class=\"main\">\n\t\t <!-- Loader -->\n\t\t <app-loader *ngIf=\"!isVisitorDataLoaded\"></app-loader>\n\t\t <!-- Table -->\n\t\t <condo-card *ngIf=\"isVisitorDataLoaded\">\n\t\t\t <div CondoCardHeader>\n\t\t\t\t <div class=\"d-flex\">\n\t\t\t\t\t <div>\n\t\t\t\t\t\t <h4>All Visitors</h4>\n\t\t\t\t\t\t <p>{{totalItems}} results</p>\n\t\t\t\t\t </div>\n\t\t\t\t\t <div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"visitorData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t\t </div>\n\t\t\t\t\t <div class=\"mr-3\">\n\t\t\t\t\t\t <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t </div>\n\t\t\t\t\t <div>\n\t\t\t\t\t\t <button mat-flat-button [color]=\"'primary'\" routerLink=\"/user/visitor/add-visitor\">Add Visitor</button>\n\t\t\t\t\t </div>\n\t\t\t\t </div>\n\t\t\t </div>\n\t\t\t <div CondoCardBody>\n\t\t\t\t <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t [filterable]=\"true\" [sortable]=\"true\" [source]=\"listData\" [columns]=\"columnData\"\n\t\t\t\t\t [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t\t </jqxGrid>\n\t\t\t </div>\n\t\t </condo-card>\n\t</div>\n</div>\n            ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/user-visitor.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/user-visitor.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/modules/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLXZpc2l0b3IvY29tcG9uZW50cy9jcmVhdGUtdmlzaXRvci9hZGQtdmlzaXRvci9hZGQtdmlzaXRvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AddVisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVisitorComponent", function() { return AddVisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Visitor */ "./src/app/api/controllers/Visitor.ts");
/* harmony import */ var src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/shared-toaster.service */ "./src/app/shared/services/shared-toaster.service.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let AddVisitorComponent = class AddVisitorComponent {
    constructor(router, route, userService, apartmentService, visitorService, lookupService, sharedService, sessionService, SharedToaster) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.SharedToaster = SharedToaster;
        this.isEditVisitor = false;
        this.isVisitorSubmitted = false;
        this.isError = false;
        this.errorMessage = "";
        this.visitor = { expectedVisitorInTime: '' };
        this.visitTypeId = "";
        this.showCancel = false;
        this.isValidphoneNumber = false;
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
    submitAddVisitorForm(form) {
        if (!this.IsvalidatePhoneNo(this.visitor.expectedVisitorPhone))
            return true;
        this.isVisitorSubmitted = true;
        this.isError = false;
        if (!this.isEditVisitor) {
            let visitorDetails = {
                "apartmentUnitId": this.apartmentUnitId,
                "apartmentId": this.sessionService.apartmentId,
                "expectedVisitorName": this.visitor.expectedVisitorName,
                "expectedVisitorCount": this.visitor.expectedVisitorCount,
                "expectedVisitorPhone": this.visitor.expectedVisitorPhone.toString(),
                "expectedVisitorInTime": this.visitor.expectedVisitorInTime,
                "expectedVisitorOutTime": this.visitor.expectedVisitorOutTime,
                "expectedDuration": this.visitor.expectedDurationInHours,
                "passNumber": this.visitor.passNumber,
                "meetingPersonId": 1,
                "visitTypeId": parseInt(this.visitTypeId),
                "visitorCategoryId": parseInt(this.visitCategoryId),
                "visitorsOrg": "string",
                "entryGateId": null,
                'apartmentBlockNumber': this.visitor.apartmentBlockNumber,
                'apartmentUnitNumber': this.visitor.apartmentBlockUnitNumber,
                "exitGateId": null,
                "purpose": this.visitor.purpose,
                "enteredBy": parseInt(this.sessionService.userId),
                "isActive": true,
                "insertedBy": parseInt(this.sessionService.userId),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": null,
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
            this.visitor.expectedDurationInHours = this.getDurationInHours(this.visitor.expectedVisitorInTime, this.visitor.expectedVisitorOutTime);
            let visitorDetails = {
                "expectedVisitorId": parseInt(this.route.params['value'].id),
                "apartmentUnitId": this.apartmentUnitId,
                "apartmentId": this.sessionService.apartmentId,
                "expectedVisitorName": this.visitor.expectedVisitorName,
                "expectedVisitorCount": this.visitor.expectedVisitorCount,
                "expectedVisitorPhone": this.visitor.expectedVisitorPhone.toString(),
                "expectedVisitorInTime": new Date(this.visitor.expectedVisitorInTime).toISOString(),
                "expectedVisitorOutTime": new Date(this.visitor.expectedVisitorOutTime).toISOString(),
                "expectedDuration": this.visitor.expectedDurationInHours,
                "passNumber": this.visitor.passNumber,
                "meetingPersonId": 1,
                "visitTypeId": parseInt(this.visitTypeId),
                "visitorsOrg": "string",
                "entryGateId": null,
                'apartmentBlockNumber': this.visitor.apartmentBlockNumber,
                'apartmentUnitNumber': this.visitor.apartmentBlockUnitNumber,
                "exitGateId": null,
                "purpose": this.visitor.purpose,
                "enteredBy": parseInt(this.sessionService.userId),
                "isActive": true,
                "insertedBy": this.visitor.insertedBy,
                "insertedOn": this.visitor.insertedOn,
                "updatedBy": parseInt(this.sessionService.userId),
                "updatedOn": new Date().toISOString(),
                "visitorCategoryId": parseInt(this.visitCategoryId)
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
        console.log('this.route', this.route.snapshot.routeConfig.path);
        if (this.route.params['value'].id != undefined) {
            this.isEditVisitor = true;
        }
        if (this.route.snapshot.routeConfig.path == 'add-visitor' || this.route.params['value'].id != undefined) {
            this.showCancel = true;
        }
        if (this.route.params['value'].id != undefined) {
            this.isEditVisitor = true;
            let params = {
                expectedVisitorId: parseInt(this.route.params['value'].id)
            };
            this.visitorService.getExpectedVisitorById(params).subscribe((res) => {
                this.visitor = res[0];
                this.visitor.purpose = '';
                this.visitTypeId = this.visitor.visitTypeId;
                this.visitCategoryId = this.visitor.visitorCategoryId;
                this.visitor.expectedDuration = this.getDuration(this.visitor.expectedVisitorInTime, this.visitor.expectedVisitorOutTime);
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
            this.visitCategoryData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let apartmentUnitParams = {
            userId: parseInt(this.sessionService.userId)
        };
        this.apartmentService.getApartmentBlockUnitByUserId(apartmentUnitParams).subscribe((res) => {
            this.apartmentUnitId = res[0].apartmentBlockUnitId;
        }, error => {
        });
        this.visitor.expectedVisitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
        this.minExOutTime = new Date(this.visitor.expectedVisitorInTime);
    }
    expectedDurationChange(date1, date2) {
        // if(this.minDate > moment(this.visitor.expectedVisitorInTime).format('YYYY-MM-DD')){
        //   console.log("min date");
        //   this.visitor.expectedVisitorInTime = undefined;
        //   this.SharedToaster.openSnackBar("Please Select valid Date",'');
        //   return;
        // }
        // if(this.minDate > moment(this.visitor.expectedVisitorOutTime).format('YYYY-MM-DD')){
        //   console.log(this.visitor.expectedVisitorOutTime);
        //   this.visitor.expectedVisitorOutTime = undefined;
        //   console.log(this.visitor.expectedVisitorOutTime);
        //   this.SharedToaster.openSnackBar("Please Select valid Date",'');
        //   return;
        // }
        console.log('this.visitor.expectedVisitorOutTime', this.visitor.expectedVisitorOutTime);
        this.visitor.expectedVisitorOutTime = moment__WEBPACK_IMPORTED_MODULE_10__(date2);
        this.visitor.expectedDuration = this.getDuration(date1, date2);
        this.visitor.expectedDurationInHours = this.getDurationInHours(date1, date2);
    }
    getDuration(date1, date2) {
        let inDate = moment__WEBPACK_IMPORTED_MODULE_10__(date1);
        let outDate = moment__WEBPACK_IMPORTED_MODULE_10__(date2);
        let diffDuration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](outDate.diff(inDate));
        return diffDuration.days() + " days " + this.isSingleDigit(diffDuration.hours()) + ":" + this.isSingleDigit(diffDuration.minutes()) + " hours";
    }
    getDurationInHours(date1, date2) {
        let inDate = moment__WEBPACK_IMPORTED_MODULE_10__(date1);
        let outDate = moment__WEBPACK_IMPORTED_MODULE_10__(date2);
        let sendDuration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](outDate.diff(inDate));
        let hours = sendDuration.asHours();
        return Math.round(hours);
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
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_6__["VisitorService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] },
    { type: src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_7__["SharedToasterService"] }
];
AddVisitorComponent.propDecorators = {
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['index',] }],
    visitorArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['array',] }],
    outputParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
AddVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-visitor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-visitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-visitor.component.scss */ "./src/app/modules/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_6__["VisitorService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
        src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_7__["SharedToasterService"]])
], AddVisitorComponent);



/***/ }),

/***/ "./src/app/modules/user/user-visitor/components/create-visitor/create-visitor.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/user/user-visitor/components/create-visitor/create-visitor.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLXZpc2l0b3IvY29tcG9uZW50cy9jcmVhdGUtdmlzaXRvci9jcmVhdGUtdmlzaXRvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/user/user-visitor/components/create-visitor/create-visitor.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/user/user-visitor/components/create-visitor/create-visitor.component.ts ***!
  \*************************************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-visitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/components/create-visitor/create-visitor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-visitor.component.scss */ "./src/app/modules/user/user-visitor/components/create-visitor/create-visitor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CreateVisitorComponent);



/***/ }),

/***/ "./src/app/modules/user/user-visitor/components/my-visitor/my-visitor.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/user/user-visitor/components/my-visitor/my-visitor.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLXZpc2l0b3IvY29tcG9uZW50cy9teS12aXNpdG9yL215LXZpc2l0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/user/user-visitor/components/my-visitor/my-visitor.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/user/user-visitor/components/my-visitor/my-visitor.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MyVisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyVisitorComponent", function() { return MyVisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Visitor */ "./src/app/api/controllers/Visitor.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */ "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");














let MyVisitorComponent = class MyVisitorComponent {
    constructor(router, injector, apartmentService, visitorService, lookupService, sharedService, sessionService, dialog) {
        this.router = router;
        this.injector = injector;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.dialog = dialog;
        this.visitorData = "";
        this.isVisitorDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
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
    onGlSearchFilter() {
        if (this.visitorData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.visitorData;
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
    getVisitType(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.visitTypeData, function (item) {
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
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'MyVisitorData');
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    showConfirmModal(detail) {
        let data = this.datagrid.getrowdata(detail.rowId);
        const message = `Are you sure want to delete?`;
        const dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModel"]("Confirm Action", message);
        const dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__["CommonConfirmModalComponent"], {
            panelClass: 'material',
            disableClose: true,
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                let type = data.type;
                let serviceName;
                if (type == 'Planned Visitor') {
                    var params = {
                        expectedVisitorId: data.expectedVisitorId,
                        deleteBy: parseInt(this.sessionService.userId)
                    };
                    serviceName = this.visitorService.deleteExpectedVisitorById(params);
                }
                else if (type == 'UnPlanned Visitor') {
                    var params_ = {
                        visitorId: data.visitorId,
                        deleteBy: parseInt(this.sessionService.userId)
                    };
                    serviceName = this.visitorService.deleteVisitorById(params_);
                }
                this.isVisitorDataLoaded = false;
                serviceName.subscribe((res) => {
                    this.visitorService.getAllUnplannedVisitors().subscribe((res) => {
                        let data1 = res.filter(data => {
                            data.type = 'UnPlanned Visitor';
                            return data.isActive && data.apartmentUnitId == this.apartmentUnitId;
                        });
                        this.visitorService.getAllPlannedVisitors().subscribe((res) => {
                            let data2 = res.filter(data => {
                                data.type = 'Planned Visitor';
                                return data.isActive && data.apartmentUnitId == this.apartmentUnitId;
                            });
                            let param = {
                                apartmentUnitId: this.apartmentUnitId
                            };
                            this.visitorService.getExpectedVisitorsByApartmentUnitId(param).subscribe((res) => {
                                let data3 = res.filter(data => {
                                    data.visitorName = data.expectedVisitorName;
                                    data.visitorPhone = data.expectedVisitorPhone;
                                    data.visitorInTime = data.expectedVisitorInTime;
                                    data.visitorOutTime = data.expectedVisitorOutTime;
                                    data.type = 'Planned Visitor';
                                    data.showEdit = true;
                                    return data.isActive;
                                });
                                let data_ = data2.concat(data1);
                                this.visitorListData = data3.concat(data_);
                                this.gridSourceData = {
                                    localdata: this.visitorListData,
                                    datatype: "array"
                                };
                                this.listData = new jqx.dataAdapter(this.gridSourceData);
                                this.totalItems = this.visitorListData.length;
                                this.isVisitorDataLoaded = true;
                            }, error => {
                            });
                        }, error => {
                        });
                    }, error => {
                    });
                }, error => {
                    console.log(error);
                });
            }
        });
    }
    navigateTo(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let expectedVisitorId = dataRecord.expectedVisitorId;
        this.router.navigateByUrl('/user/visitor/edit-visitor/' + expectedVisitorId);
    }
    getDateTime(val) {
        if (val != '') {
            return moment__WEBPACK_IMPORTED_MODULE_8__(val).format("MM/DD/YY hh:mm");
        }
        else {
            return '';
        }
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Id',
                datafield: 'serialNo',
                width: 100,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Type',
                datafield: 'type',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Visitor Name',
                datafield: 'visitorName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Phone Number',
                datafield: 'visitorPhone',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'In-time',
                datafield: 'visitorInTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + this.getDateTime(value) + '</div>';
                },
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Out-time',
                datafield: 'visitorOutTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + this.getDateTime(value) + '</div>';
                },
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Visit Type',
                datafield: 'visitTypeId',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + this.getVisitType(value) + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    let data = this.visitorListData[row];
                    if (data.type == 'Planned Visitor' && data.showEdit) {
                        return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="navigateTo(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmModal(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                    }
                    else {
                        return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="showConfirmModal(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                    }
                },
                renderer: columnrenderer
            }];
        let apartmentUnitParams = {
            userId: parseInt(this.sessionService.userId)
        };
        this.apartmentService.getApartmentBlockUnitByUserId(apartmentUnitParams).subscribe((res) => {
            this.apartmentUnitId = res[0].apartmentBlockUnitId;
            let params = {
                apartmentUnitId: this.apartmentUnitId
            };
            console.log(this.apartmentUnitId);
            this.visitorService.getAllUnplannedVisitors().subscribe((res) => {
                let data1 = res.filter(data => {
                    data.type = 'UnPlanned Visitor';
                    return data.isActive && data.apartmentUnitId == this.apartmentUnitId;
                });
                this.visitorService.getAllPlannedVisitors().subscribe((res) => {
                    let data2 = res.filter(data => {
                        data.type = 'Planned Visitor';
                        data.visitorId = null;
                        return data.isActive && data.apartmentUnitId == this.apartmentUnitId;
                    });
                    this.visitorService.getExpectedVisitorsByApartmentUnitId(params).subscribe((res) => {
                        let data3 = res.filter(data => {
                            data.visitorName = data.expectedVisitorName;
                            data.visitorPhone = data.expectedVisitorPhone;
                            data.visitorInTime = data.expectedVisitorInTime;
                            data.visitorOutTime = data.expectedVisitorOutTime;
                            data.type = 'Planned Visitor';
                            data.visitorId = null;
                            data.showEdit = true;
                            return data.isActive;
                        });
                        let data_ = data2.concat(data1);
                        this.visitorListData = data3.concat(data_);
                        this.gridSourceData = {
                            localdata: this.visitorListData,
                            datatype: "array"
                        };
                        this.listData = new jqx.dataAdapter(this.gridSourceData);
                        this.totalItems = this.visitorListData.length;
                        this.isVisitorDataLoaded = true;
                    }, error => {
                    });
                }, error => {
                });
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
    }
};
MyVisitorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__["VisitorService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] }
];
MyVisitorComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    showConfirmModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:showConfirmModal', ['$event.detail'],] }],
    navigateTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:navigateTo', ['$event.detail'],] }]
};
MyVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-visitor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-visitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/components/my-visitor/my-visitor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-visitor.component.scss */ "./src/app/modules/user/user-visitor/components/my-visitor/my-visitor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__["VisitorService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]])
], MyVisitorComponent);

function navigateTo(row) {
    var event = new CustomEvent('navigateTo', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.navigateTo = navigateTo;
function showConfirmModal(row) {
    var event = new CustomEvent('showConfirmModal', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmModal = showConfirmModal;


/***/ }),

/***/ "./src/app/modules/user/user-visitor/user-visitor-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user/user-visitor/user-visitor-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: UserVisitorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVisitorRoutingModule", function() { return UserVisitorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-visitor/create-visitor.component */ "./src/app/modules/user/user-visitor/components/create-visitor/create-visitor.component.ts");
/* harmony import */ var _components_my_visitor_my_visitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/my-visitor/my-visitor.component */ "./src/app/modules/user/user-visitor/components/my-visitor/my-visitor.component.ts");





const routes = [
    { path: '', redirectTo: 'my-visitor', pathMatch: 'full' },
    { path: 'my-visitor', component: _components_my_visitor_my_visitor_component__WEBPACK_IMPORTED_MODULE_4__["MyVisitorComponent"] },
    { path: 'create-visitor', component: _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_3__["CreateVisitorComponent"] },
    { path: 'add-visitor', component: _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_3__["CreateVisitorComponent"] },
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

/***/ "./src/app/modules/user/user-visitor/user-visitor.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/user/user-visitor/user-visitor.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLXZpc2l0b3IvdXNlci12aXNpdG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/user/user-visitor/user-visitor.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/user/user-visitor/user-visitor.component.ts ***!
  \*********************************************************************/
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
UserVisitorComponent.ctorParameters = () => [];
UserVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-visitor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-visitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user-visitor/user-visitor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-visitor.component.scss */ "./src/app/modules/user/user-visitor/user-visitor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UserVisitorComponent);



/***/ }),

/***/ "./src/app/modules/user/user-visitor/user-visitor.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/user/user-visitor/user-visitor.module.ts ***!
  \******************************************************************/
/*! exports provided: UserVisitorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVisitorModule", function() { return UserVisitorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-visitor-routing.module */ "./src/app/modules/user/user-visitor/user-visitor-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_visitor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-visitor.component */ "./src/app/modules/user/user-visitor/user-visitor.component.ts");
/* harmony import */ var _components_create_visitor_add_visitor_add_visitor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-visitor/add-visitor/add-visitor.component */ "./src/app/modules/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.ts");
/* harmony import */ var _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create-visitor/create-visitor.component */ "./src/app/modules/user/user-visitor/components/create-visitor/create-visitor.component.ts");
/* harmony import */ var _components_my_visitor_my_visitor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/my-visitor/my-visitor.component */ "./src/app/modules/user/user-visitor/components/my-visitor/my-visitor.component.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");










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
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _user_visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserVisitorRoutingModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_9__["CondoCardModule"],
        ],
        bootstrap: [_user_visitor_component__WEBPACK_IMPORTED_MODULE_5__["UserVisitorComponent"]]
    })
], UserVisitorModule);



/***/ })

}]);
//# sourceMappingURL=modules-user-user-visitor-user-visitor-module-es2015.js.map