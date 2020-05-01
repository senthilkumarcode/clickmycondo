(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-settings-profile-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-block-wrapper\">\n\t<ng-container *ngFor=\"let block of blockArray; let i = index\">\n\t\t<app-add-block [index]=\"i\" [array]=\"blockArray\" (outputParams) = \"getBlockArray($event)\"></app-add-block>\n\t</ng-container>\n\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addBlock()\" *ngIf=\"!isEditUser\" [ngClass]=\"isMobileView() ? 'mobile' : ''\">\n\t\t<div class=\"icon\">+<span class=\"text d-sm-none ml-2\">Add Block</span></div>\n\t</a>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-block-wrapper/add-block/add-block.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-block-wrapper/add-block/add-block.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header p-0 no-border\">\n    \t\t<div class=\"float-close\" *ngIf=\"isArrayOne()\" (click)=\"deleteBlock()\">\n    \t\t\t<i-feather class=\"icon rotate\" name=\"plus\" width=\"20\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-loader *ngIf=\"isBlockSubmitted && !isBlockAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isBlockSubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addBlockForm = \"ngForm\" name=\"addBlockForm\" (ngSubmit)=\"submitAddBlockForm(addBlockForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Block No*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"blockNo\" [(ngModel)]=\"blockNo\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Description</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"blockDescription\" [(ngModel)]=\"blockDescription\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline mt-4\" [ngClass]=\"isMobileView() ? 'text-center' : 'float-right'\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addBlockForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isBlockAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\">Block Added Successfully!</h5>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-unit-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-body\">\n\t\t\t<form novalidate>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Select Block No</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"blockId\" \n\t\t\t\t\t\t        id=\"blockId\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"blockId\" (ngModelChange)=\"chooseBlock()\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t    </select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\n\t<div class=\"unit-main-wrapper\" *ngIf=\"isBlockSelected\">\n\t\t<ng-container *ngFor=\"let unit of unitArray; let i = index\">\n\t\t\t<app-add-unit [index]=\"i\" [array]=\"unitArray\" [blockId]=\"blockId\" (outputParams) = \"getUnitArray($event)\"></app-add-unit>\n\t\t</ng-container>\n\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addUnit()\" *ngIf=\"!isEditUser\" [ngClass]=\"isMobileView() ? 'mobile' : ''\">\n\t\t\t<div class=\"icon\">+<span class=\"text d-sm-none ml-2\">Add Unit</span></div>\n\t\t</a>\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit/add-unit.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit/add-unit.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-unit-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header p-0 no-border\">\n    \t\t<div class=\"float-close\" *ngIf=\"isArrayOne()\" (click)=\"deleteUnit()\">\n    \t\t\t<i-feather class=\"icon rotate\" name=\"plus\" width=\"20\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-loader *ngIf=\"isUnitSubmitted && !isUnitAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isUnitSubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addUnitForm = \"ngForm\" name=\"addUnitForm\" (ngSubmit)=\"submitAddUnitForm(addUnitForm)\"  novalidate>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Unit No*</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"unitNo\" [(ngModel)]=\"unit.no\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Unit Type*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"unitType\" \n\t\t\t\t\t\t        id=\"unitType\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"unitType\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of unitTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t    </select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Built Area (in sqft)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"builtArea\" [(ngModel)]=\"unit.builtArea\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Carpet Area (in sqft)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"carpetArea\" [(ngModel)]=\"unit.carpetArea\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Rent Amount (in rs)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"rentAmount\" [(ngModel)]=\"unit.rentAmount\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Advance Amount (in rs)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"advanceAmount\" [(ngModel)]=\"unit.advanceAmount\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Car (in number)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"unitCar\" \n\t\t                    [(ngModel)]=\"unit.car\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Intercom</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"advanceAmount\" [(ngModel)]=\"unit.intercom\" minlength=\"10\" maxlength=\"10\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<ul class=\"list-inline mt-4\" [ngClass]=\"isMobileView() ? 'text-center' : 'float-right'\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addUnitForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\n\t\t\t<div class=\"message\" *ngIf=\"isUnitAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\">Unit Added Successfully!</h5>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/profile-settings.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/profile-settings.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wcm9maWxlLXNldHRpbmdzL2NvbXBvbmVudHMvYWRkLWJsb2NrLXdyYXBwZXIvYWRkLWJsb2NrLXdyYXBwZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddBlockWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlockWrapperComponent", function() { return AddBlockWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AddBlockWrapperComponent = class AddBlockWrapperComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.blockCount = 1;
        this.isEditUser = false;
    }
    addBlock() {
        this.blockCount++;
        this.blockArray = Array(this.blockCount).fill(0).map((x, i) => i);
    }
    getBlockArray(event) {
        this.blockArray = event;
        this.blockCount = this.blockArray.length;
    }
    isMobileView() {
        return window.innerWidth <= 576;
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.isEditUser = true;
        }
        this.blockArray = Array(this.blockCount).fill(0).map((x, i) => i);
    }
};
AddBlockWrapperComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddBlockWrapperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-block-wrapper',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-block-wrapper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-block-wrapper.component.scss */ "./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AddBlockWrapperComponent);



/***/ }),

/***/ "./src/app/ams/profile-settings/components/add-block-wrapper/add-block/add-block.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-block-wrapper/add-block/add-block.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wcm9maWxlLXNldHRpbmdzL2NvbXBvbmVudHMvYWRkLWJsb2NrLXdyYXBwZXIvYWRkLWJsb2NrL2FkZC1ibG9jay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/profile-settings/components/add-block-wrapper/add-block/add-block.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-block-wrapper/add-block/add-block.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AddBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlockComponent", function() { return AddBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let AddBlockComponent = class AddBlockComponent {
    constructor(router, route, apartmentService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.blockNo = "";
        this.blockDescription = "";
        this.apartmentBlock = {};
        this.isBlockSubmitted = false;
        this.isBlockAdded = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    isArrayOne() {
        return this.blockArray.length > 1 ? true : false;
    }
    deleteBlock() {
        this.blockArray.splice(this.index, 1);
        this.outputParams.emit(this.blockArray);
    }
    isMobileView() {
        return window.innerWidth <= 576;
    }
    submitAddBlockForm(form) {
        this.isBlockSubmitted = true;
        this.apartmentBlock = {
            apartmentBlockNumber: this.blockNo,
            description: this.blockDescription,
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            isActive: true,
            insertedBy: 1
        };
        this.apartmentService.addApartmentBlock(this.apartmentBlock).subscribe((res) => {
            this.isBlockAdded = true;
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
};
AddBlockComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddBlockComponent.prototype, "index", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddBlockComponent.prototype, "blockArray", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddBlockComponent.prototype, "outputParams", void 0);
AddBlockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-block',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-block.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-block-wrapper/add-block/add-block.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-block.component.scss */ "./src/app/ams/profile-settings/components/add-block-wrapper/add-block/add-block.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], AddBlockComponent);



/***/ }),

/***/ "./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wcm9maWxlLXNldHRpbmdzL2NvbXBvbmVudHMvYWRkLXVuaXQtd3JhcHBlci9hZGQtdW5pdC13cmFwcGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddUnitWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUnitWrapperComponent", function() { return AddUnitWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");




let AddUnitWrapperComponent = class AddUnitWrapperComponent {
    constructor(apartmentService, cookieService) {
        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
        this.blockId = "";
        this.isBlockSelected = false;
        this.unitCount = 1;
        this.isEditUser = false;
    }
    chooseBlock() {
        this.isBlockSelected = true;
        this.unitCount = 1;
        this.unitArray = Array(this.unitCount).fill(0).map((x, i) => i);
    }
    addUnit() {
        this.unitCount++;
        this.unitArray = Array(this.unitCount).fill(0).map((x, i) => i);
    }
    getUnitArray(event) {
        this.unitArray = event;
        this.unitCount = this.unitArray.length;
    }
    isMobileView() {
        return window.innerWidth <= 576;
    }
    ngOnInit() {
        this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.unitBlocksData = res;
        });
        this.unitArray = Array(this.unitCount).fill(0).map((x, i) => i);
    }
};
AddUnitWrapperComponent.ctorParameters = () => [
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AddUnitWrapperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-unit-wrapper',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-unit-wrapper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-unit-wrapper.component.scss */ "./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], AddUnitWrapperComponent);



/***/ }),

/***/ "./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit/add-unit.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit/add-unit.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wcm9maWxlLXNldHRpbmdzL2NvbXBvbmVudHMvYWRkLXVuaXQtd3JhcHBlci9hZGQtdW5pdC9hZGQtdW5pdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit/add-unit.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit/add-unit.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUnitComponent", function() { return AddUnitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





let AddUnitComponent = class AddUnitComponent {
    constructor(apartmentService, lookupService, cookieService) {
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.unitType = "";
        this.isUnitSubmitted = false;
        this.isUnitAdded = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    isArrayOne() {
        return this.unitArray.length > 1 ? true : false;
    }
    deleteUnit() {
        this.unitArray.splice(this.index, 1);
        this.outputParams.emit(this.unitArray);
    }
    isMobileView() {
        return window.innerWidth <= 576;
    }
    submitAddUnitForm(form) {
        this.isUnitSubmitted = true;
        this.apartmentBlockUnit = {
            "apartmentBlockUnitNumber": this.unit.no,
            "apartmentBlockId": parseInt(this.blockId),
            "unitTypeId": parseInt(this.unitType),
            "builtupArea": parseInt(this.unit.builtArea),
            "carpetArea": parseInt(this.unit.carpetArea),
            "rentAmount": parseInt(this.unit.rentAmount),
            "advanceAmount": parseInt(this.unit.advanceAmount),
            "propertyManagerId": null,
            "intercom": this.unit.intercom,
            "cars": this.unit.car,
            "isActive": true,
            "isAvailableForRent": true,
            "isPetsAllowed": true,
            "isFurnished": true,
            "isVacant": true,
            insertedBy: 1
        };
        this.apartmentService.addApartmentBlockUnit(this.apartmentBlockUnit).subscribe((res) => {
            this.isUnitAdded = true;
        });
    }
    ngOnInit() {
        this.unit = {};
        this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.unitBlocksData = res;
        });
        this.lookupService.getLookupValueByLookupTypeId(1).subscribe((res) => {
            this.unitTypeData = res;
        });
    }
};
AddUnitComponent.ctorParameters = () => [
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddUnitComponent.prototype, "index", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddUnitComponent.prototype, "unitArray", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddUnitComponent.prototype, "blockId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddUnitComponent.prototype, "outputParams", void 0);
AddUnitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-unit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-unit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit/add-unit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-unit.component.scss */ "./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit/add-unit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], AddUnitComponent);



/***/ }),

/***/ "./src/app/ams/profile-settings/profile-settings-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ams/profile-settings/profile-settings-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileSettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsRoutingModule", function() { return ProfileSettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_add_block_wrapper_add_block_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-block-wrapper/add-block-wrapper.component */ "./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.ts");
/* harmony import */ var _components_add_unit_wrapper_add_unit_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-unit-wrapper/add-unit-wrapper.component */ "./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.ts");





const routes = [
    { path: '', redirectTo: 'add-block', pathMatch: 'full' },
    { path: 'add-block', component: _components_add_block_wrapper_add_block_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["AddBlockWrapperComponent"] },
    { path: 'add-unit', component: _components_add_unit_wrapper_add_unit_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["AddUnitWrapperComponent"] },
    { path: '**', redirectTo: 'add-block', pathMatch: 'full' }
];
let ProfileSettingsRoutingModule = class ProfileSettingsRoutingModule {
};
ProfileSettingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProfileSettingsRoutingModule);



/***/ }),

/***/ "./src/app/ams/profile-settings/profile-settings.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/ams/profile-settings/profile-settings.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wcm9maWxlLXNldHRpbmdzL3Byb2ZpbGUtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/profile-settings/profile-settings.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ams/profile-settings/profile-settings.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsComponent", function() { return ProfileSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfileSettingsComponent = class ProfileSettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/profile-settings.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-settings.component.scss */ "./src/app/ams/profile-settings/profile-settings.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ProfileSettingsComponent);



/***/ }),

/***/ "./src/app/ams/profile-settings/profile-settings.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ams/profile-settings/profile-settings.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsModule", function() { return ProfileSettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-settings-routing.module */ "./src/app/ams/profile-settings/profile-settings-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-settings.component */ "./src/app/ams/profile-settings/profile-settings.component.ts");
/* harmony import */ var _components_add_block_wrapper_add_block_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-block-wrapper/add-block-wrapper.component */ "./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.ts");
/* harmony import */ var _components_add_unit_wrapper_add_unit_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-unit-wrapper/add-unit-wrapper.component */ "./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.ts");
/* harmony import */ var _components_add_block_wrapper_add_block_add_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-block-wrapper/add-block/add-block.component */ "./src/app/ams/profile-settings/components/add-block-wrapper/add-block/add-block.component.ts");
/* harmony import */ var _components_add_unit_wrapper_add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-unit-wrapper/add-unit/add-unit.component */ "./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit/add-unit.component.ts");










let ProfileSettingsModule = class ProfileSettingsModule {
};
ProfileSettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_add_unit_wrapper_add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_9__["AddUnitComponent"],
            _components_add_block_wrapper_add_block_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["AddBlockWrapperComponent"],
            _components_add_unit_wrapper_add_unit_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["AddUnitWrapperComponent"],
            _profile_settings_component__WEBPACK_IMPORTED_MODULE_5__["ProfileSettingsComponent"],
            _components_add_block_wrapper_add_block_add_block_component__WEBPACK_IMPORTED_MODULE_8__["AddBlockComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _profile_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileSettingsRoutingModule"]
        ],
        bootstrap: [_profile_settings_component__WEBPACK_IMPORTED_MODULE_5__["ProfileSettingsComponent"]]
    })
], ProfileSettingsModule);



/***/ })

}]);
//# sourceMappingURL=profile-settings-profile-settings-module-es2015.js.map