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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"document-setup-wrapper\">\n\t<h5 class=\"mb-3\">Configuration - Towers, Floors and Units</h5>\n\t<div class=\"card mb-3\">\n\t\t<div class=\"card-body\">\n\t\t\t<form>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>No of Towers*</label>\n\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"No of Towers\" name=\"noOfTower\" [(ngModel)]=\"noOfTowers\" (ngModelChange)=\"towerSubject.next($event)\" [disabled]=\"pageType == 'edit' ? true : false\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t<div class=\"card\" *ngIf=\"tableInfo\">\n\t\t<div class=\"card-body\">\n\t\t\t<form [formGroup]=\"floorTable\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t\t<th scope=\"col\">Tower Name</th>\n\t\t\t\t\t\t\t<th scope=\"col\">No of Floors</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Total of Units</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<ng-container formArrayName=\"floor\" *ngFor=\"let group of floorControlArray.controls ; let i=index\">\n\t\t\t\t\t\t\t<tr [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t<td>{{group.get('apartmentBlock').value}}</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" formControlName=\"apartmentBlockNumber\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"number\" formControlName=\"totalnofloors\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"number\" formControlName=\"totalNounits\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"action-container float-right\">\n\t\t\t\t\t<button mat-raised-button [disabled]=\"floorTable.invalid\" type=\"submit\" (click)=\"submitForm()\">Submit</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<div class=\"mt-5\" *ngFor=\"let data of formData;let i=index\">\n\t\t\t\t<h5 class=\"mb-5 font-weight-bold\">{{data[0].apartmentBlockNumber}}</h5>\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class=\"floor-no-width \">Floor No</th>\n\t\t\t\t\t\t\t<th class=\"floor-name-width\">Floor Name</th>\n\t\t\t\t\t\t\t<th class=\"floor-no-width\">Unit</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Unit No</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<ng-container *ngFor=\"let child of data;let j=index;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"floor-no-width \">Floor {{child.floorno}}</td>\n\t\t\t\t\t\t\t\t<td class=\"floor-name-width\">\n\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" [(ngModel)]=\"child.floorLabel\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"floor-no-width\">{{child.unit}}</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" [(ngModel)]=\"child.apartmentBlockUnitNumber\" (keyup)=\"calculate(child.apartmentBlockUnitNumber,i,j)\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"action-container float-right\">\n\t\t\t\t\t<button mat-raised-button [disabled]=\"data[0].button\" type=\"submit\" (click)=\"towerSubmit(data)\">Submit</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n");

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
    constructor(route) {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddBlockWrapperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-block-wrapper',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-block-wrapper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-block-wrapper.component.scss */ "./src/app/ams/profile-settings/components/add-block-wrapper/add-block-wrapper.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
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
        let params = {
            apartmentBlocks: this.apartmentBlock
        };
        this.apartmentService.addApartmentBlock(params).subscribe((res) => {
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
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
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
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], AddBlockComponent);



/***/ }),

/***/ "./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.table {\n  padding: 20px;\n}\n\n.table tbody tr td,\n.table thead th,\n.table thead {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n\n.mat-form-field {\n  display: block;\n}\n\n.floor-no-width {\n  width: 12%;\n}\n\n.floor-name-width {\n  width: 22%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvcHJvZmlsZS1zZXR0aW5ncy9jb21wb25lbnRzL2FkZC1mbG9vci11bml0L2FkZC1mbG9vci11bml0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvcHJvZmlsZS1zZXR0aW5ncy9jb21wb25lbnRzL2FkZC1mbG9vci11bml0L2FkZC1mbG9vci11bml0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtBQ0xGOztBRFFBOzs7RUFHRSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDTEY7O0FEU0E7RUFDRSxjQUFBO0FDTkY7O0FEU0E7RUFDRSxVQUFBO0FDTkY7O0FEU0E7RUFDRSxVQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9hbXMvcHJvZmlsZS1zZXR0aW5ncy9jb21wb25lbnRzL2FkZC1mbG9vci11bml0L2FkZC1mbG9vci11bml0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcbiAgXG4gIFxuLmFjdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50YWJsZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50YWJsZSB0Ym9keSB0ciB0ZCxcbi50YWJsZSB0aGVhZCB0aCxcbi50YWJsZSB0aGVhZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGdyZXktNDYwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZ3JleS00NjA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS00NjA7XG59XG5cbnNwYW4udWktY29sdW1uLXJlc2l6ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gIHBhZGRpbmc6IDMwcHg7XG5cbn1cbiAgXG4ubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZsb29yLW5vLXdpZHRoIHtcbiAgd2lkdGg6IDEyJTtcbn1cblxuLmZsb29yLW5hbWUtd2lkdGgge1xuICB3aWR0aDogMjIlO1xufSIsIi5hY3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGFibGUge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGFibGUgdGJvZHkgdHIgdGQsXG4udGFibGUgdGhlYWQgdGgsXG4udGFibGUgdGhlYWQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG5zcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZsb29yLW5vLXdpZHRoIHtcbiAgd2lkdGg6IDEyJTtcbn1cblxuLmZsb29yLW5hbWUtd2lkdGgge1xuICB3aWR0aDogMjIlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddFloorUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFloorUnitComponent", function() { return AddFloorUnitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");







let AddFloorUnitComponent = class AddFloorUnitComponent {
    constructor(apartmentService, cookieService) {
        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
        this.towerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tableInfo = false;
        this.error = false;
        this.pageType = 'create';
        this.floorTable = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'floor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    get floorControlArray() {
        return this.floorTable.get('floor');
    }
    increaseTower() {
        this.formData = [];
        if (this.noOfTowers > 0) {
            this.tableInfo = true;
            if (this.floorControlArray.length > 0) {
                this.deleteAllFloor();
                for (let i = 0; i < this.noOfTowers; i++) {
                    this.addFloor(i);
                }
            }
            else {
                for (let i = 0; i < this.noOfTowers; i++) {
                    this.addFloor(i);
                }
            }
        }
        else {
            this.tableInfo = false;
        }
    }
    addFloor(index) {
        this.floorControlArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'apartmentBlock': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: `Tower${index + 1}`, disabled: true }),
            'apartmentBlockId': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            'apartmentBlockNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'totalNounits': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'totalnofloors': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }));
    }
    deleteAllFloor() {
        while (this.floorControlArray.length != 0) {
            this.floorControlArray.removeAt(0);
        }
    }
    calculate(value, i, j) {
        if (value.length > 0) {
            let unitSplit = value.split(',');
            this.formData[i][j].unit = unitSplit.length;
        }
        else {
            this.formData[i][j].unit = 0;
        }
        let totalUnit = this.formData[i].reduce((accu, data) => {
            return accu + data.unit;
        }, 0);
        if (this.formData[i][j].totalNounits >= totalUnit) {
            this.formData[i][0].button = false;
        }
        else {
            this.formData[i][0].button = true;
        }
    }
    submitForm() {
        let params = {};
        params.apartmentBlock = [];
        for (let i = 0; i < this.floorControlArray.length; i++) {
            let createTowers = {
                'apartmentBlockId': this.floorControlArray.at(i).get('apartmentBlockId').value,
                "apartmentBlockNumber": this.floorControlArray.at(i).get('apartmentBlockNumber').value,
                "totalNounits": this.floorControlArray.at(i).get('totalNounits').value,
                "totalnofloors": this.floorControlArray.at(i).get('totalnofloors').value,
                "description": this.floorControlArray.at(i).get('apartmentBlockNumber').value,
                "apartmentId": Number(this.cookieService.get('apartmentId')),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "updatedBy": this.pageType == 'edit' ? parseInt(this.cookieService.get('userId')) : null,
            };
            params.apartmentBlock.push(createTowers);
        }
        this.formData = [];
        let dupObject = {};
        for (let i = 0; i < this.floorControlArray.length; i++) {
            let floor = this.floorControlArray.at(i).get('totalnofloors').value;
            let key = `floor${i + 1}`;
            dupObject[key] = [];
            for (let j = 0; j < floor; j++) {
                let entity = {
                    "apartmentBlockId": 0,
                    "totalNounits": this.floorControlArray.at(i).get('totalNounits').value,
                    "apartmentBlockNumber": this.floorControlArray.at(i).get('apartmentBlockNumber').value,
                    "unit": '',
                    "floorno": j + 1,
                    "apartmentBlockUnitNumber": '',
                    "floorLabel": ''
                };
                dupObject[key].push(entity);
            }
        }
        for (let floorNumber in dupObject) {
            this.formData.push(dupObject[floorNumber]);
        }
        // let apiMethod = this.pageType == 'create' ? 'addApartmentBlock' : 'updateApartmentBlock';
        // this.apartmentService[apiMethod](params).subscribe((res: any) => {
        //   let resSplit = res.message.split(',');
        //   if(resSplit && resSplit.length > 0) {
        //     this.formData = [];
        //     let dupObject:any = {};
        //     for(let i=0; i < this.floorControlArray.length; i++) {
        //       for(let r=0; r<resSplit.length; r++) {
        //         if(i == r) {
        //           let floor = this.floorControlArray.at(i).get('totalnofloors').value;
        //           let key = `floor${i+1}`;
        //           dupObject[key] = [];
        //           for(let j=0; j < floor; j++) {
        //             let entity = {
        //               "apartmentBlockId": parseInt(resSplit[r]),
        //               "totalNounits":  this.floorControlArray.at(i).get('totalNounits').value,
        //               "apartmentBlockNumber":  this.floorControlArray.at(i).get('apartmentBlockNumber').value,
        //               "unit": '',
        //               "floorno": j+1,
        //               "apartmentBlockUnitNumber": '',
        //               "floorLabel": ''
        //             }  
        //             dupObject[key].push(entity);
        //           }
        //         }
        //       }
        //     }
        //     for(let floorNumber in dupObject) {
        //       this.formData.push(dupObject[floorNumber])
        //     }
        //   }
        // });
    }
    towerSubmit(data) {
        let tower = [];
        for (let i = 0; i < data.length; i++) {
            let entity = {
                apartmentBlockUnitNumber: data[i].apartmentBlockUnitNumber,
                apartmentBlockId: data[i].apartmentBlockId,
                floorno: data[i].floorno,
                floorLabel: data[i].floorLabel,
                isActive: true,
                insertedBy: parseInt(this.cookieService.get('userId')),
                insertedOn: new Date().toISOString(),
            };
            tower.push(entity);
        }
        // this.apartmentService.addApartmentBlockUnit(tower).subscribe((res:any) => {
        //   console.log(res);
        // });
    }
    ngOnInit() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        // this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res:any) => {
        //   if(res.length > 0) {
        //     this.pageType = 'edit';
        //     this.noOfTowers = res.length;
        //     this.tableInfo = true;
        //     this.formData = []
        //     for(var i=0; i < res.length; i++) {
        //       this.floorControlArray.push(new FormGroup({
        //         'apartmentBlock': new FormControl({value: `Tower${i+1}`, disabled: true}),
        //         'apartmentBlockId': new FormControl(res[i].apartmentBlockId),
        //         'apartmentBlockNumber': new FormControl(res[i].apartmentBlockNumber,Validators.required),
        //         'totalNounits': new FormControl(res[i].totalNounits,Validators.required),
        //         'totalnofloors': new FormControl(res[i].totalnofloors,Validators.required)
        //       }));
        //       let blockId = {
        //         apartmentId : parseInt(this.cookieService.get('apartmentId')),
        //         apartmentBlockId : res[i].apartmentBlockId
        //       }
        //       // this.apartmentService.getApartmentBlockByApartmentId(blockId).subscribe((res:any) => {
        //       // })
        //     }
        //   }
        // });
        this.towerSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(value => {
            this.increaseTower();
        });
    }
};
AddFloorUnitComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
AddFloorUnitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-floor-unit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-floor-unit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-floor-unit.component.scss */ "./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], AddFloorUnitComponent);



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
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
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
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.unitBlocksData = res;
        });
        this.unitArray = Array(this.unitCount).fill(0).map((x, i) => i);
    }
};
AddUnitWrapperComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AddUnitWrapperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-unit-wrapper',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-unit-wrapper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-unit-wrapper.component.scss */ "./src/app/ams/profile-settings/components/add-unit-wrapper/add-unit-wrapper.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
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
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
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
        let params = {
            apartmentBlockUnits: this.apartmentBlockUnit
        };
        this.apartmentService.addApartmentBlockUnit(params).subscribe((res) => {
            this.isUnitAdded = true;
        });
    }
    ngOnInit() {
        this.unit = {};
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.unitBlocksData = res;
        });
        let unitParams = {
            LookupTypeId: 1
        };
        this.lookupService.getLookupValueByLookupTypeId(unitParams).subscribe((res) => {
            this.unitTypeData = res;
        });
    }
};
AddUnitComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
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
/* harmony import */ var _components_add_floor_unit_add_floor_unit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-floor-unit/add-floor-unit.component */ "./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.ts");






const routes = [
    { path: '', redirectTo: 'add-block', pathMatch: 'full' },
    { path: 'add-block', component: _components_add_block_wrapper_add_block_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["AddBlockWrapperComponent"] },
    { path: 'add-unit', component: _components_add_unit_wrapper_add_unit_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["AddUnitWrapperComponent"] },
    { path: 'add-floor-unit', component: _components_add_floor_unit_add_floor_unit_component__WEBPACK_IMPORTED_MODULE_5__["AddFloorUnitComponent"] },
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
/* harmony import */ var _components_add_floor_unit_add_floor_unit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-floor-unit/add-floor-unit.component */ "./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.ts");











let ProfileSettingsModule = class ProfileSettingsModule {
};
ProfileSettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_add_unit_wrapper_add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_9__["AddUnitComponent"],
            _components_add_block_wrapper_add_block_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["AddBlockWrapperComponent"],
            _components_add_unit_wrapper_add_unit_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["AddUnitWrapperComponent"],
            _profile_settings_component__WEBPACK_IMPORTED_MODULE_5__["ProfileSettingsComponent"],
            _components_add_block_wrapper_add_block_add_block_component__WEBPACK_IMPORTED_MODULE_8__["AddBlockComponent"],
            _components_add_floor_unit_add_floor_unit_component__WEBPACK_IMPORTED_MODULE_10__["AddFloorUnitComponent"]
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