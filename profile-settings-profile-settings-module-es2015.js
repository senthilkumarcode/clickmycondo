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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-floor-unit-graphic/add-floor-unit-graphic.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-floor-unit-graphic/add-floor-unit-graphic.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"poiManagement\">\n  <div class=\"topBar\">\n    <div class=\"row pos-r\">\n      <div class=\"col-md-6 d-flex\">\n        <div class=\"w-75 mr-20\">\n          <label>Select Tower{{selectedTower}}</label>\n          <select class=\"form-control\" name=\"tower\" [(ngModel)]=\"selectedTower\" (change)=\"getFloorList()\" >\n            <option *ngFor=\"let tower of towerList\"  [(value)]=\"tower.apartmentBlockId\">{{tower.description}}</option>\n          </select>\n        </div>\n        <div class=\"w-75\">\n          <label>Select Floor</label>\n          <select class=\"form-control\" name=\"floor\" [(ngModel)]=\"selectedFloor\" (change)=\"selectFloor()\">\n            <option *ngFor=\"let floor of floorList\"  [(value)]=\"floor.apartmentBlockFloorId\">{{floor.floorLabel}}</option>\n          </select>\n        </div>\n      </div>\n      <div [hidden]=\"true\">\n        <input type=\"text\" id=\"buildingNo\" value=\"\" placeholder=\"Building No\" [(ngModel)]=\"bNo\">\n        <input type=\"text\" id=\"floorNo\" value=\"\" placeholder=\"Floor No\" [(ngModel)]=\"fNo\">\n      <input  #nodeId type=\"text\" id=\"spanNode\">\n      <input  #poiId type=\"text\" id=\"poiId\">\n      <input  #nodeKind type=\"text\" id=\"nodeKind\">\n      </div>\n      <div class=\"col-md-6 d-flex justify-content-end align-items-center\">\n        <button class=\"btn blue\" *ngIf=\"isShowBuilder\" (click)=\"updateProperty()\" >\n          Publish\n        </button>\n      </div>\n    </div>\n  </div>\n<div class=\"pathBuilder\">\n    <!--<md-progress-bar mode=\"indeterminate\"></md-progress-bar>-->\n    <div class=\"dragContainer\" id=\"lcanvas\" [ngStyle]=\"isShowBuilder ? {'display':'flex','justify-content':'center'} : ''\">\n      <!--<div class=\"floor\" id=\"lcanvas\">-->\n      <!--<div id=\"image-wrapper\" *ngIf=\"isShowBuilder\">-->\n      <!--</div>-->\n      <!--</div>-->\n      <div class=\"upload\" (click)=\"browseFile()\" *ngIf=\"!isShowBuilder\"\n           id=\"setFloorImg\">    \n        <img class=\"mb-30\" src=\"../../../../../assets/images/plus-circle-icon.png\" alt=\"\">\n        <p  class=\"addFloor\">Add New Floor Plan</p>\n        <div class=\"legends\">\n          <span class=\"d-flex\" >\n           <img class=\"mr-20\" src=\"../../../../../assets/images/folder-icon.png\" alt=\"\">\n            Browse File Computer</span>\n        </div>\n        <div class=\"borderLine\"></div>\n        <span class=\"support\" >Supported File Formats</span>\n        <div class=\"brandIcons\">\n          <img src=\"../../../../../assets/images/jpg-icon.png\" alt=\"\">\n          <img src=\"../../../../../assets/images/png-icon.png\" alt=\"\">\n        </div>\n        <span class=\"smallText\">Supported File Formats<span [style.direction]=\"'LTR'\">1000*1200 px</span></span>\n      </div>\n      <input type=\"file\" (change)=\"mapUpload($event)\" id=\"hidden-bg-upload\" accept=\"image/x-png,image/jpeg\">\n      <!--<input type=\"file\" id=\"hidden-graph-upload\">-->\n      <!--<img *ngIf=\"false\" id=\"pinch-zoom-image-id\" class=\"pinch-zoom-image\" src=\"../assets/images/floor_plan.jpg\">-->\n    </div>\n    <!-- <div class=\"floorLegendLeft\" *ngIf=\"isShowBuilder\">\n      <img src=\"../../assets/icons/legend.png\" alt=\"\" (click)=\"isShowLegend = !isShowLegend\">\n      <app-floating-btn class=\"applgout\"   [position]=\"{ top: '-6px', left: '40px'}\"\n                        [custom]=\"true\"\n                        *ngIf=\"isShowLegend\">\n        <div class=\"legendBody\">\n          <span class=\"legendData\" [style.direction]=\"langDirection\">{{langObj?.poi}}<span class=\"ml-2\">:</span> <span class=\"ml-2\" [style.color]=\"'#0fce21'\">{{rawPOIList?.poiCount ? rawPOIList?.poiCount : 0}}</span></span>\n          <span class=\"legendData\" [style.direction]=\"langDirection\">{{langObj?.facility}} <span class=\"ml-2\">:</span> <span class=\"ml-2\" [style.color]=\"'#440084'\">{{rawPOIList?.facilityCount ? rawPOIList?.facilityCount : 0}}</span></span>\n          <span class=\"legendData\" [style.direction]=\"langDirection\">{{langObj?.active}} <span class=\"ml-2\">:</span> <span class=\"ml-2\" [style.color]=\"'#12991f'\">{{rawPOIList?.activeCount ? rawPOIList?.activeCount : 0}}</span></span>\n          <span class=\"dataLastChild\" [style.direction]=\"langDirection\">{{langObj?.inactive}} <span class=\"ml-2\">:</span> <span class=\"ml-2\" [style.color]=\"'#fd001a'\">{{rawPOIList?.inActiveCount ? rawPOIList?.inActiveCount : 0}}</span></span>\n        </div>\n      </app-floating-btn>\n    </div> -->\n    <!-- <div class=\"floorLegend\" *ngIf=\"isShowBuilder\">\n      <div class=\"mb-12\">\n        <label class=\"mr-8\"> To Add POI</label>\n        <span>Shift+Click</span>\n      </div>\n      <div>\n        <label  class=\"mr-8 ml-12\">To Delete POI/Path</label>\n        <span>Shift+Delete</span>\n      </div>\n    </div> -->\n  </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-floor-unit/add-floor-unit.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"document-setup-wrapper\">\n\t<h5 class=\"mb-3\">Configuration - Towers, Floors and Units</h5>\n\t<div class=\"card mb-3\">\n\t\t<div class=\"card-body\">\n\t\t\t<form>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>No of Towers*</label>\n\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"No of Towers\" name=\"noOfTower\" [(ngModel)]=\"noOfTowers\" (ngModelChange)=\"towerSubject.next($event)\" [disabled]=\"pageType == 'edit' ? true : false\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t<div class=\"card\" *ngIf=\"tableInfo\">\n\t\t<div class=\"card-body\">\n\t\t\t<form [formGroup]=\"floorTable\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t\t<th scope=\"col\">Tower Name</th>\n\t\t\t\t\t\t\t<th scope=\"col\">No of Floors</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Total of Units</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<ng-container formArrayName=\"floor\" *ngFor=\"let group of floorControlArray.controls ; let i=index\">\n\t\t\t\t\t\t\t<tr [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t<td>{{group.get('apartmentBlock').value}}</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" formControlName=\"apartmentBlockNumber\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"number\" formControlName=\"totalnofloors\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"number\" formControlName=\"totalNounits\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"action-container float-right\" *ngIf=\"pageType == 'create'\">\n\t\t\t\t\t<button mat-raised-button [disabled]=\"floorTable.invalid\" type=\"submit\" (click)=\"towerSubmit()\">Submit</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"action-container\" *ngIf=\"pageType == 'edit'\">\n\t\t\t\t\t<button mat-raised-button type=\"submit\" (click)=\"addNewTower()\">Add row</button>\n\t\t\t\t\t<button mat-raised-button [disabled]=\"floorTable.invalid\" type=\"submit\" (click)=\"towerSubmit()\">Update</button>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"newTower\">\n\t\t\t\t\t<table class=\"table mt-3\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t\t\t<th scope=\"col\">Tower Name</th>\n\t\t\t\t\t\t\t\t<th scope=\"col\">No of Floors</th>\n\t\t\t\t\t\t\t\t<th scope=\"col\">Total of Units</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<ng-container formArrayName=\"addFloor\" *ngFor=\"let group of floorTable.get('addFloor')['controls'] ; let i=index\">\n\t\t\t\t\t\t\t\t<tr [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t\t<td>{{group.get('apartmentBlock').value}}</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" formControlName=\"apartmentBlockNumber\">\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"number\" formControlName=\"totalnofloors\">\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"number\" formControlName=\"totalNounits\">\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class=\"action-container float-right\">\n\t\t\t\t\t\t<button mat-raised-button [disabled]=\"floorTable.invalid\" type=\"submit\" (click)=\"newTowerSubmit()\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<div class=\"mt-5\" *ngFor=\"let data of formData;let i=index\">\n\t\t\t\t<h5 class=\"mb-5 font-weight-bold\" *ngIf=\"data\"><span>{{data[0].apartmentBlockNumber}}</span></h5>\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class=\"floor-no-width \">Floor No</th>\n\t\t\t\t\t\t\t<th class=\"floor-name-width\">Floor Name</th>\n\t\t\t\t\t\t\t<th class=\"floor-no-width\">Unit</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Unit No</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<ng-container *ngFor=\"let child of data;let j=index;\">\n\t\t\t\t\t\t\t<tr *ngIf=\"!data[0].edit\">\n\t\t\t\t\t\t\t\t<td class=\"floor-no-width \">Floor {{child.floorno}}</td>\n\t\t\t\t\t\t\t\t<td class=\"floor-name-width\">\n\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" [(ngModel)]=\"child.floorLabel\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"floor-no-width\">{{child.unit}}</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" [(ngModel)]=\"child.apartmentBlockUnitNumber\" (keyup)=\"calculateUnit(child.apartmentBlockUnitNumber,i,j)\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr *ngIf=\"data[0].edit\">\n\t\t\t\t\t\t\t\t<td class=\"floor-no-width \">Floor {{child.floorno}}</td>\n\t\t\t\t\t\t\t\t<td class=\"floor-name-width\">{{child.floorLabel}}</td>\n\t\t\t\t\t\t\t\t<td class=\"floor-no-width\">{{child.unit}}</td>\n\t\t\t\t\t\t\t\t<td>{{child.apartmentBlockUnitNumber}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"action-container float-right\" *ngIf=\"pageType=='create'\">\n\t\t\t\t\t<button mat-raised-button [disabled]=\"data[0].button\" type=\"submit\" (click)=\"floorSubmit(data)\">Submit</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"action-container float-right\" *ngIf=\"pageType=='edit'\">\n\t\t\t\t\t<button mat-raised-button class=\"mr-2\" type=\"submit\" (click)=\"editMode(data[0].edit,i)\">\n\t\t\t\t\t\t<span *ngIf=\"data[0].edit\">Edit</span>\n\t\t\t\t\t\t<span *ngIf=\"!data[0].edit\">Non Edit</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button mat-raised-button [disabled]=\"data[0].button\" type=\"submit\" (click)=\"floorSubmit(data)\">Update</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-unit-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header p-0 no-border\">\n    \t\t<div class=\"float-close\" *ngIf=\"isArrayOne()\" (click)=\"deleteUnit()\">\n    \t\t\t<i-feather class=\"icon rotate\" name=\"plus\" width=\"20\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isUnitSubmitted && !isUnitAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isUnitSubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addUnitForm = \"ngForm\" name=\"addUnitForm\" (ngSubmit)=\"submitAddUnitForm(addUnitForm)\"  novalidate>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Unit No*</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"unitNo\" [(ngModel)]=\"unit.no\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Unit Type*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"unitType\" \n\t\t\t\t\t\t        id=\"unitType\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"unitType\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of unitTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t    </select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Built Area (in sqft)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"builtArea\" [(ngModel)]=\"unit.builtArea\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Carpet Area (in sqft)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"carpetArea\" [(ngModel)]=\"unit.carpetArea\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Rent Amount (in rs)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"rentAmount\" [(ngModel)]=\"unit.rentAmount\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Advance Amount (in rs)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"advanceAmount\" [(ngModel)]=\"unit.advanceAmount\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Car (in number)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"unitCar\" \n\t\t                    [(ngModel)]=\"unit.car\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Intercom</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"advanceAmount\" [(ngModel)]=\"unit.intercom\" minlength=\"10\" maxlength=\"10\" required>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<ul class=\"list-inline mt-4\" [ngClass]=\"isMobileView() ? 'text-center' : 'float-right'\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addUnitForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\n\t\t\t<div class=\"message\" *ngIf=\"isUnitAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\">Unit Added Successfully!</h5>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>");

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

/***/ "./src/app/ams/profile-settings/components/add-floor-unit-graphic/add-floor-unit-graphic.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-floor-unit-graphic/add-floor-unit-graphic.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wcm9maWxlLXNldHRpbmdzL2NvbXBvbmVudHMvYWRkLWZsb29yLXVuaXQtZ3JhcGhpYy9hZGQtZmxvb3ItdW5pdC1ncmFwaGljLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/profile-settings/components/add-floor-unit-graphic/add-floor-unit-graphic.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/ams/profile-settings/components/add-floor-unit-graphic/add-floor-unit-graphic.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AddFloorUnitGraphicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFloorUnitGraphicComponent", function() { return AddFloorUnitGraphicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/FileDetails */ "./src/app/api/controllers/FileDetails.ts");
/* harmony import */ var _api_controllers_Document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/controllers/Document */ "./src/app/api/controllers/Document.ts");






var graph;
let AddFloorUnitGraphicComponent = class AddFloorUnitGraphicComponent {
    constructor(element, apartmentService, documentService, cookieService, fileDetailService) {
        this.element = element;
        this.apartmentService = apartmentService;
        this.documentService = documentService;
        this.cookieService = cookieService;
        this.fileDetailService = fileDetailService;
        this.loading = true;
        this.isShowBuilder = false;
        this.bNo = 0;
        this.fNo = 0;
        this.towerList = [];
        this.floorList = [];
    }
    onKeyDown(event) {
        let e = event;
        if (e.shiftKey && e.keyCode === 46) {
            graph.deleteSelected();
            // this.updateGraph();
        }
    }
    ngOnInit() {
        this.bootMe();
        this.getBlockList();
    }
    getBlockList() {
        let param = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(param).subscribe((resp) => {
            this.towerList = resp;
            this.selectedTower = this.towerList[0].apartmentBlockId;
            this.getFloorList();
        }, error => {
        });
    }
    getFloorList() {
        let getFloorParam = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentblockId: this.selectedTower
        };
        this.apartmentService.getApartmentBlockFloorByApartmentIdBlockId(getFloorParam).subscribe((resp) => {
            this.floorList = resp;
            this.selectedFloor = this.floorList[0].apartmentBlockFloorId;
            this.getPropertyMap(this.floorList[0].PropertymapfileID);
        }, error => {
        });
    }
    selectFloor() {
        if (this.selectedFloor) {
            this.floorList.filter(key => {
                if (key.FloorID == this.selectedFloor) {
                    this.getPropertyMap(key.PropertymapfileID);
                }
            });
        }
    }
    getPropertyMap(propertyId) {
        let getFloorProperty = {
            propertyMapFileId: propertyId
        };
        this.apartmentService.getPropertyMapFileById(getFloorProperty).subscribe((resp) => {
            this.floorPropertyData = resp;
            this.assignData(this.floorPropertyData);
        }, error => {
        });
    }
    assignData(data) {
        if (data && data.floorPictureFileDetailsId && data.floorPictureFileDetailsId != 0 && data.mapJsonFile != "") {
            this.isShowBuilder = true;
            setTimeout(() => {
                graph.customImageUpdalod(this.getImage(data.floorPictureFileDetailsId));
                graph.deleteGraph();
                localStorage.setItem('graphData', data.mapJsonFile);
                graph.customGraphUpdate();
            }, 1);
        }
        else if (data && data.floorPictureFileDetailsId && data.floorPictureFileDetailsId != 0) {
            this.isShowBuilder = true;
            setTimeout(() => {
                graph.customImageUpdalod(this.getImage(data.floorPictureFileDetailsId));
            }, 1);
        }
        else {
            this.isShowBuilder = false;
        }
    }
    getImage(floorPictureFileDetailsId) {
        let downloadParam = {
            fileNameOnBlob: floorPictureFileDetailsId,
            savefileNameWithPath: ''
        };
        this.fileDetailService.downloadAsync(downloadParam).subscribe(resp => {
            return resp;
        }, error => {
        });
    }
    bootMe() {
        let docEl = document.documentElement, bodyEl = document.getElementsByTagName('body')[0];
        let width = window.innerWidth || docEl.clientWidth || bodyEl.clientWidth, height = window.innerHeight || docEl.clientHeight || bodyEl.clientHeight;
        // initial node data
        var nodes = [];
        var edges = [];
        /** MAIN SVG **/
        var svg = d3.select("#lcanvas").append("svg")
            .attr("width", width)
            .attr("height", height);
        graph = new GraphCreator(svg, nodes, edges);
        graph.setIdCt(0);
        // this.graph.updateGraph();
    }
    mapUpload(event) {
        // if(event && event[0] && event[0].name && (event[0].type == 'image/png' || event[0].type == 'image/jpeg')){
        var reader = new FileReader();
        reader.onload = (e) => {
            graph.customImageUpdalod(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
        console.log('files', event.target.files);
        this.uploadImage(event.target.files[0]);
        this.isShowBuilder = true;
        // }
    }
    uploadImage(event) {
        let file = event;
        console.log('file', file);
        let uploadParam = {
            file: file,
            Description: 'FileName',
            InsertedBy: parseInt(this.cookieService.get('userId')),
            ApartmentID: parseInt(this.cookieService.get('apartmentId'))
        };
        console.log('formdata', uploadParam);
        this.fileDetailService.addFileDetailsWithFileOption(uploadParam).subscribe((resp) => {
            if (resp && resp.error) {
            }
            else {
                this.addPropertyMap(resp);
            }
        }, error => {
        });
        // let uploadDetails = {
        //   "ApartmentId" : parseInt(this.cookieService.get('apartmentId')),
        //   "ApartmentBlockUnitId" : 20,
        //   "UserDocumentCategoryId" : 222,
        //   "UserDocumentTypeId" : 1,
        //   "UserDocumentAccessibleToId" :1,
        //   "UserId" : null,
        //   "UserDocumentName" : 'test',
        //   "Description" : "test document",
        //   "IsActive":true,
        //   "InsertedBy":1,
        //   "IsPublic" : true,
        //   "files" : event
        // }
        // this.documentService.addUserDocument(uploadDetails).subscribe((res:any) => {       
        //   // this.getCategoryData(this.uploadcategoryId)
        // },
        // error => {
        //   console.log(error)
        // });    
    }
    addPropertyMap(imageId) {
        this.downloadGraph();
        let addPropertyMap = {
            propertyMapFile: {
                "propertyMapFileId": 0,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockId": 0,
                "description": "",
                "isIndoor": true,
                "floorno": 0,
                "floorLabel": "",
                "floorPictureFileDetailsId": imageId,
                "mapJsonFile": JSON.stringify(this.updatedGraph),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": new Date().toISOString(),
                "apartmentBlockFloorId": 0
            }
        };
        this.apartmentService.addPropertyMapFile(addPropertyMap).subscribe((resp) => {
            console.log('resp', resp);
            this.floorPropertyData = resp;
            this.assignData(this.floorPropertyData);
        }, error => {
        });
    }
    updateProperty() {
        this.downloadGraph();
        let updatePropertyMap = {
            propertyMapFile: {
                "propertyMapFileId": this.floorPropertyData.propertyMapFileId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockId": 0,
                "description": "",
                "isIndoor": true,
                "floorno": 0,
                "floorLabel": "",
                "floorPictureFileDetailsId": this.floorPropertyData.floorPictureFileDetailsId,
                "mapJsonFile": JSON.stringify(this.updatedGraph),
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
                "apartmentBlockFloorId": 0
            }
        };
        this.apartmentService.updatePropertyMapFile(updatePropertyMap).subscribe((resp) => {
            console.log('resp', resp);
            this.floorPropertyData = resp;
            this.assignData(this.floorPropertyData);
        }, error => {
        });
    }
    downloadGraph() {
        var savePFNodes = [];
        var saveEdges = [];
        var savePFEdges = [];
        var prefix = this.bNo + "_" + this.fNo + "_";
        var sid, tid;
        var nobj;
        this.savePFNode = [];
        graph.nodes.forEach(function (val, i) {
            nobj = {};
            nobj.id = prefix + val.id;
            nobj.x = val.x;
            nobj.y = val.y;
            nobj.poiId = val.poiId;
            nobj.kind = val.kind;
            savePFNodes.push(nobj);
        });
        this.savePFNode = savePFNodes;
        graph.edges.forEach(function (val, i) {
            saveEdges.push({ source: val.source.id, target: val.target.id });
            sid = prefix + val.source.id;
            tid = prefix + val.target.id;
            savePFEdges.push({ source: sid, target: tid });
        });
        var fullObj = {
            maponly: {
                idct: graph.idct,
                buildingNo: this.bNo,
                floorNo: this.fNo,
                nodes: graph.nodes,
                edges: saveEdges
            }, output: {
                floorNo: this.fNo,
                nodes: savePFNodes,
                edges: savePFEdges
            }
        };
        this.updatedGraph = fullObj;
        /*fullObj.maponly.idct = graph.idct
        fullObj.maponly.buildingNo = this.bNo
        fullObj.maponly.floorNo = this.fNo
        fullObj.maponly.nodes = graph.nodes
        fullObj.maponly.edges = saveEdges
        fullObj.output.floorNo = this.fNo
        fullObj.output.nodes = savePFNodes
        fullObj.output.edges = savePFEdges*/
        // var blob = new Blob([JSON.stringify(fullObj)], {type: "text/plain;charset=utf-8"});
        // //for time being commented out
        // saveAs(blob, "mydag.json");
    }
    browseFile() {
        var fileUpload = $(this.element.nativeElement).find("input[id='hidden-bg-upload']");
        fileUpload.trigger("click");
    }
};
AddFloorUnitGraphicComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: _api_controllers_Document__WEBPACK_IMPORTED_MODULE_5__["DocumentService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_4__["FileDetailsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('poiId'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AddFloorUnitGraphicComponent.prototype, "poiId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nodeId'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AddFloorUnitGraphicComponent.prototype, "nodeId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nodeKind'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AddFloorUnitGraphicComponent.prototype, "nodeKind", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AddFloorUnitGraphicComponent.prototype, "onKeyDown", null);
AddFloorUnitGraphicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-floor-unit-graphic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-floor-unit-graphic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/profile-settings/components/add-floor-unit-graphic/add-floor-unit-graphic.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-floor-unit-graphic.component.scss */ "./src/app/ams/profile-settings/components/add-floor-unit-graphic/add-floor-unit-graphic.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        _api_controllers_Document__WEBPACK_IMPORTED_MODULE_5__["DocumentService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_4__["FileDetailsService"]])
], AddFloorUnitGraphicComponent);



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
        this.pageType = 'create';
        this.newTower = false;
        this.floorTable = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'floor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            'addFloor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    get floorControlArray() {
        return this.floorTable.get('floor');
    }
    addNewTower() {
        this.newTower = true;
        let addNewTower = this.floorTable.get('addFloor');
        let length = this.floorControlArray.length + 1;
        this.noOfTowers = length;
        addNewTower.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'apartmentBlock': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: `Tower${length}`, disabled: true }),
            'apartmentBlockId': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            'apartmentBlockNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'totalNounits': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'totalnofloors': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }));
    }
    addTower(index) {
        this.noOfTowers = this.floorControlArray.length + 1;
        this.floorControlArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'apartmentBlock': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: `Tower${index + 1}`, disabled: true }),
            'apartmentBlockId': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            'apartmentBlockNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'totalNounits': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'totalnofloors': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }));
    }
    calculateUnit(value, i, j) {
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
    editMode(editdata, index) {
        if (editdata) {
            this.formData[index][0].edit = false;
        }
        else {
            this.formData[index][0].edit = true;
        }
    }
    getApartmentTowerAndFloor(pagetype) {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            if (res.length > 0) {
                this.pageType = pagetype;
                this.noOfTowers = res.length;
                this.tableInfo = true;
                this.formData = [];
                for (var i = 0; i < res.length; i++) {
                    this.floorControlArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'apartmentBlock': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: `Tower${i + 1}`, disabled: true }),
                        'apartmentBlockId': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](res[i].apartmentBlockId),
                        'apartmentBlockNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](res[i].apartmentBlockNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        'totalNounits': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](res[i].totalNounits, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        'totalnofloors': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](res[i].totalnofloors, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    }));
                    let blockId = {
                        apartmentId: parseInt(this.cookieService.get('apartmentId')),
                        apartmentBlockId: res[i].apartmentBlockId
                    };
                    this.initalFloor(blockId, res[i], i);
                }
            }
            else {
                this.pageType = 'create';
            }
        });
    }
    initalFloor(blockId, tower, index) {
        this.apartmentService.getViewFloorNoBlockUnitNumberByApartmentId(blockId).subscribe((res) => {
            if (res.length > 0) {
                res[0].apartmentBlockNumber = tower.apartmentBlockNumber;
                res[0].button = false;
                res[0].edit = this.pageType == 'create' ? false : true;
                res.forEach((data) => {
                    data.apartmentBlockUnitNumber = data.apartmentBlockUnitNumbers;
                    let unitSplit = data.apartmentBlockUnitNumbers.split(',');
                    data.unit = unitSplit.length;
                    data.totalNounits = tower.totalNounits;
                });
                if (res.length != tower.totalnofloors) {
                    for (let i = res.length; i < tower.totalnofloors; i++) {
                        let entity = {
                            "apartmentBlockId": tower.apartmentBlockId,
                            "totalNounits": tower.totalNounits,
                            "unit": 0,
                            "floorno": i + 1,
                            "apartmentBlockUnitNumber": '',
                            "floorLabel": ''
                        };
                        res.push(entity);
                    }
                }
                this.formData.splice(index, 0, res);
            }
            else {
                for (let i = 0; i < tower.totalnofloors; i++) {
                    let entity = {
                        "apartmentBlockId": tower.apartmentBlockId,
                        "totalNounits": tower.totalNounits,
                        "unit": 0,
                        "floorno": i + 1,
                        "apartmentBlockUnitNumber": '',
                        "floorLabel": ''
                    };
                    if (i == 0) {
                        entity.apartmentBlockNumber = tower.apartmentBlockNumber;
                        entity.button = false;
                        entity.edit = false;
                    }
                    res.push(entity);
                }
                this.formData.splice(index, 0, res);
            }
        });
    }
    towerSubmit() {
        let params = {};
        params.apartmentBlocks = [];
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
            params.apartmentBlocks.push(createTowers);
        }
        let apiMethod = this.pageType == 'create' ? 'addApartmentBlock' : 'updateApartmentBlock';
        this.apartmentService[apiMethod](params).subscribe((res) => {
            this.getApartmentTowerAndFloor(this.pageType);
        });
    }
    floorSubmit(data) {
        let params = {};
        params.apartmentBlockUnits = [];
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
            params.apartmentBlockUnits.push(entity);
        }
        let apiMethod = this.pageType == 'create' ? 'addApartmentBlockUnit' : 'updateApartmentBlock';
        this.apartmentService.addApartmentBlockUnit(params).subscribe((res) => {
            console.log(res);
        });
    }
    newTowerSubmit() {
        let params = {};
        params.apartmentBlocks = [];
        let addNewTower = this.floorTable.get('addFloor');
        for (let i = 0; i < addNewTower.length; i++) {
            let createTowers = {
                'apartmentBlockId': addNewTower.at(i).get('apartmentBlockId').value,
                "apartmentBlockNumber": addNewTower.at(i).get('apartmentBlockNumber').value,
                "totalNounits": addNewTower.at(i).get('totalNounits').value,
                "totalnofloors": addNewTower.at(i).get('totalnofloors').value,
                "description": addNewTower.at(i).get('apartmentBlockNumber').value,
                "apartmentId": Number(this.cookieService.get('apartmentId')),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
            };
            params.apartmentBlocks.push(createTowers);
        }
        this.apartmentService.addApartmentBlock(params).subscribe((res) => {
            this.getApartmentTowerAndFloor('edit');
            this.newTower = false;
        });
    }
    ngOnInit() {
        this.getApartmentTowerAndFloor('edit');
        this.towerSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(value => {
            this.formData = [];
            if (this.noOfTowers > 0) {
                this.tableInfo = true;
                if (this.floorControlArray.length > 0) {
                    while (this.floorControlArray.length != 0) {
                        this.floorControlArray.removeAt(0);
                    }
                    for (let i = 0; i < this.noOfTowers; i++) {
                        this.addTower(i);
                    }
                }
                else {
                    for (let i = 0; i < this.noOfTowers; i++) {
                        this.addTower(i);
                    }
                }
            }
            else {
                this.tableInfo = false;
            }
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
        this.isError = false;
        this.errorMessage = "";
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
        this.isUnitAdded = false;
        this.apartmentBlockUnit = {
            "apartmentBlockUnitId": 1,
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
            "insertedBy": 1
        };
        let params = {
            apartmentBlockUnits: this.apartmentBlockUnit
        };
        this.apartmentService.addApartmentBlockUnit(params).subscribe((res) => {
            if (res.message) {
                this.isUnitAdded = true;
            }
            else {
                this.isUnitSubmitted = false;
                this.isError = true;
                this.errorMessage = res.errorMessage;
            }
        }, error => {
            this.isError = true;
            this.errorMessage = "Some error Occured";
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
/* harmony import */ var _components_add_floor_unit_graphic_add_floor_unit_graphic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-floor-unit-graphic/add-floor-unit-graphic.component */ "./src/app/ams/profile-settings/components/add-floor-unit-graphic/add-floor-unit-graphic.component.ts");







const routes = [
    { path: '', redirectTo: 'add-block', pathMatch: 'full' },
    { path: 'add-block', component: _components_add_block_wrapper_add_block_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["AddBlockWrapperComponent"] },
    { path: 'add-unit', component: _components_add_unit_wrapper_add_unit_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["AddUnitWrapperComponent"] },
    { path: 'add-floor-unit', component: _components_add_floor_unit_add_floor_unit_component__WEBPACK_IMPORTED_MODULE_5__["AddFloorUnitComponent"] },
    { path: 'add-floor-unit-graphic', component: _components_add_floor_unit_graphic_add_floor_unit_graphic_component__WEBPACK_IMPORTED_MODULE_6__["AddFloorUnitGraphicComponent"] },
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
/* harmony import */ var _components_add_floor_unit_graphic_add_floor_unit_graphic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-floor-unit-graphic/add-floor-unit-graphic.component */ "./src/app/ams/profile-settings/components/add-floor-unit-graphic/add-floor-unit-graphic.component.ts");












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
            _components_add_floor_unit_add_floor_unit_component__WEBPACK_IMPORTED_MODULE_10__["AddFloorUnitComponent"],
            _components_add_floor_unit_graphic_add_floor_unit_graphic_component__WEBPACK_IMPORTED_MODULE_11__["AddFloorUnitGraphicComponent"]
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