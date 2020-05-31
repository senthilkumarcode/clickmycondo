(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-loader *ngIf=\"!isInternalDataLoaded\"></app-loader> -->\n\n<div class=\"card table-card mb-30\" *ngIf=\"check\">\n\t<div class=\"card-header\">\n    <div class=\"float-left pb-4\">\n      <h5>Create Item<span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    </div>   \n  </div>\n  <div class=\"card-body p-0\">\n            <form [formGroup]=\"userTable\">\n    <table class=\"table\" [ngClass]=\"isMobileView()\">\n            <thead>\n                <tr>\n                  <th scope=\"col\" (click)=\"sortUnitData('serviceType')\">Item No <span [ngClass]=\"getFieldOrderBy('serviceType')\"></span></th>\n                  <th scope=\"col\" (click)=\"sortUnitData('phone')\">Item Name <span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n                  <th scope=\"col\" (click)=\"sortUnitData('contactperson')\">SKU <span [ngClass]=\"getFieldOrderBy('contactperson')\"></span></th>\n                  <th scope=\"col\" (click)=\"sortUnitData('email')\">UOM <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n                  <th scope=\"col\" (click)=\"sortUnitData('email')\">Vendor <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n                  <th scope=\"col\" (click)=\"sortUnitData('email')\">Category ID <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n                  <th scope=\"col\" (click)=\"sortUnitData('email')\">Sub Category <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n                  <th scope=\"col\" (click)=\"sortUnitData('email')\">Type <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n                  <th scope=\"col\" (click)=\"sortUnitData('email')\">Warehouse ID <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n                  <th scope=\"col\" (click)=\"sortUnitData('email')\">Re-order Trigger Point <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n                  <th scope=\"col\" (click)=\"sortUnitData('email')\">Re-order Qty <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n                  <th scope=\"col\" (click)=\"sortUnitData('email')\">Notes <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n                  <th scope=\"col\">Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls ; let i=index\">\n                  <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"i\">\n                    <td>\n                    <mat-form-field>\n                        <mat-select formControlName=\"serviceType\">\n                        <mat-option value=\"Laundery\">Laundery</mat-option>\n                        <mat-option value=\"PhotoCopy\">Photo Copy</mat-option>\n                        <mat-option value=\"Ticketing\">Ticketing</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                            <input matInput type=\"number\" formControlName=\"phone\">\n                        \n                      </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                        <input matInput type=\"number\" formControlName=\"phone\">\n                    </mat-form-field>\n                    </td>\n                    \n                    <td>\n                      <mat-form-field>\n                        <mat-select formControlName=\"serviceType\">                      \n                        </mat-select>\n                      </mat-form-field>\n                    </td>\n                  \n                    <td>\n                      <mat-form-field>\n                        <mat-select formControlName=\"serviceType\">                      \n                        </mat-select>\n                        \n                      </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                            <input matInput type=\"number\" formControlName=\"phone\">\n                        \n                      </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                            <input matInput type=\"number\" formControlName=\"phone\">\n                        \n                      </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                            <input matInput type=\"number\" formControlName=\"phone\">\n                        \n                      </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                            <input matInput type=\"number\" formControlName=\"phone\">\n                        \n                      </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                            <input matInput type=\"number\" formControlName=\"phone\">\n                        \n                      </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                            <input matInput type=\"number\" formControlName=\"phone\">\n                        \n                      </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                            <input matInput type=\"number\" formControlName=\"phone\">\n                        \n                      </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-icon class=\"delete\" (click)=\"deleteRow(i)\">delete_forever</mat-icon>\n                      <mat-icon class=\"done\" (click)=\"doneRow(group)\">done</mat-icon>\n                      \n                    </td>\n                  </tr>\n                  <tr *ngIf=\"!group.get('isEditable').value\" >\n                    <td>\n                      {{group.get('serviceType').value}}\n                    </td>\n                    <td>\n                      {{group.get('phone').value}}\n                    </td>\n                    <td>\n                        {{group.get('contactperson').value}}\n                    </td>\n                    \n                    <td>\n                      {{group.get('email').value}}\n                    </td>\n                    <td>\n                      {{group.get('email').value}}\n                    </td>\n                    <td>\n                      {{group.get('email').value}}\n                    </td>\n                    <td>\n                      {{group.get('email').value}}\n                    </td>\n                    <td>\n                      {{group.get('email').value}}\n                    </td>\n                    <td>\n                      {{group.get('email').value}}\n                    </td>\n                    <td>\n                      {{group.get('email').value}}\n                    </td>\n                    <td>\n                      {{group.get('email').value}}\n                    </td>\n                    <td>\n                      {{group.get('email').value}}\n                    </td>\n                    <td>\n                            <mat-icon class=\"edit\" (click)=\"editRow(group)\">edit</mat-icon>\n                    </td>\n                  </tr>\n                </ng-container>\n              </tbody>\n            \n        </table>\n        <div class=\"action-container\">\n                <button mat-raised-button type=\"submit\" (click)=\"addRow()\">Add row</button>\n                <button mat-raised-button [disabled]=\"userTable.invalid\" type=\"submit\" (click)=\"submitForm()\">Submit</button>\n              </div>\n        </form>\n\n        <!-- <div class=\"output\">\n                <p>Form Data:  {{userTable.value | json}}</p>\n                  <p>Is Valid: {{userTable.valid}}</p>\n              </div> -->\n    </div>\n\n</div>\n\n\n<div class=\"card table-card mb-30\" >\n  <div class=\"card-header\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-6 d-flex align-items-center\">\n        <h5>Create Item<span class=\"badge lime-green\">{{totalItems}}</span></h5>\n      </div>\t\t\t\t\t\t\n      <div class=\"col-sm-6 d-flex align-items-center justify-content-end\">\n        <li class=\" d-flex search \">\n          <i class=\"fa fa-search setup-search search-left\" aria-hidden=\"true\"></i>\n          <input type=\"text\" class=\"form-control pl-5 \" placeholder=\"Search...\"\n            [(ngModel)]=\"searchWarehouse\" >\n        </li>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body p-0\">\n    <form>\n      <div class=\"inventory-table\">\n      <table class=\"table\" [ngClass]=\"isMobileView()\">\n        <thead>\n          <tr>\n            <th scope=\"col\" (click)=\"sortUnitData('serviceType')\">Item No <span [ngClass]=\"getFieldOrderBy('serviceType')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('phone')\">Item Name <span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('contactperson')\">SKU <span [ngClass]=\"getFieldOrderBy('contactperson')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">UOM <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Vendor <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Category ID <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Sub Category <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Type <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Warehouse ID <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Re-order Trigger Point <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Re-order Qty <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Notes <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\"  class=\"fixed-col\">Action</th>\n          </tr>          \n        </thead>\n        <tbody>\n          <ng-container>\n            <!-- <form #warehouseForm = \"ngForm\" name=\"warehouseForm\"  novalidate> -->\n            <tr>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <mat-select name=\"warLocation\" [(ngModel)]=\"row.towerLocation\" >\n                    <mat-option *ngFor=\"let item of  locationList\"\n                      [value]=\"item.apartmentBlockId\">\n                      {{ item.description }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <input matInput type=\"text\" name=\"warName\"\n                    [(ngModel)]=\"row.warehouseName\" >\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <input matInput type=\"text\" name=\"warName\"\n                    [(ngModel)]=\"row.warehouseName\" >\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <mat-select name=\"warLocation\" [(ngModel)]=\"row.towerLocation\" >\n                    <mat-option *ngFor=\"let item of uomData\"\n                      [value]=\"item.lookupValueId\">\n                      {{ item.description }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <mat-select name=\"warLocation\" [(ngModel)]=\"row.towerLocation\" >\n                    <mat-option *ngFor=\"let item of uomData\"\n                      [value]=\"item.lookupValueId\">\n                      {{ item.description }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <mat-select name=\"warLocation\" [(ngModel)]=\"row.towerLocation\" >\n                    <mat-option *ngFor=\"let item of uomData\"\n                      [value]=\"item.lookupValueId\">\n                      {{ item.description }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <mat-select name=\"warLocation\" [(ngModel)]=\"row.towerLocation\" >\n                    <mat-option *ngFor=\"let item of uomData\"\n                      [value]=\"item.lookupValueId\">\n                      {{ item.description }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <mat-select name=\"warOwner\" [(ngModel)]=\"row.owner\" >\n                    <mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n                      {{ item.firstName }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <input matInput type=\"text\" name=\"warName\"\n                    [(ngModel)]=\"row.warehouseName\" >\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <input matInput type=\"text\" name=\"warName\"\n                    [(ngModel)]=\"row.warehouseName\" >\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <input matInput type=\"text\" name=\"warName\"\n                    [(ngModel)]=\"row.warehouseName\" >\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <input matInput type=\"text\" name=\"warName\"\n                    [(ngModel)]=\"row.warehouseName\" >\n                </mat-form-field>\n              </td>\n              <td class=\"fixed-col\">\n                <i class=\"fa fa-floppy-o save-icon\" [ngStyle]=\"!row.warehouseId || !row.warehouseName || !row.towerLocation || !row.descripition || !row.owner || !row.supervisor?{'pointer-events':'none','opacity':'0.4'}:''\" (click)=\"addWareHouse(row)\"\n                  aria-hidden=\"true\"></i>\n                <!-- <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(i,'null')\"\n                  aria-hidden=\"true\"></i> -->\n              </td>\n            </tr>\n          <!-- </form> -->\n          </ng-container>\n          <ng-container\n            *ngFor=\"let list of itemData | slice:ItemStartIndex:ItemEndIndex;let inventoryIndex=index\">\n            <tr>\n              <td>\n                <span\n                  [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">{{list.materialNo}}</span>\n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\"  name=\"warehouseId\"\n                    [(ngModel)]=\"list.warehouseId\">\n                </mat-form-field>\n              </td>\n              <td>\n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.material1}}\t\t\t\t\t\t\t\t\t\t\t\t\n                </span>\n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"warehouseName\"\n                    [(ngModel)]=\"list.warehouseName\">\n                </mat-form-field>\n              </td>\n             \n              <td>                \n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.sku}}\t\t\t\t\t\t\t\t\t\t\t\t\n                </span>               \n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"warehouseName\"\n                    [(ngModel)]=\"list.warehouseName\">\n                </mat-form-field>\n              </td>\n              <td>                \n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.unitOfMeasure}}\t\t\t\t\t\t\t\t\t\t\t\t\n                </span>               \n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"warehouseName\"\n                    [(ngModel)]=\"list.warehouseName\">\n                </mat-form-field>\n              </td>\n              <td>\n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.preferredVendorId}}\n                </span>\n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <mat-select name=\"owner\" [(ngModel)]=\"list.owner\">\n                    <mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n                      {{ item.firstName }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                \n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  <span *ngFor=\" let staff of staffList\">\n                    <span *ngIf=\"list.owner == staff.staffId\" >{{staff.inventoryCategoryId}}</span>\n                  </span>\n                </span>\n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <mat-select name=\"owner\" [(ngModel)]=\"list.owner\">\n                    <mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n                      {{ item.firstName }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  <span *ngFor=\" let staff of staffList\">\n                    <span *ngIf=\"list.supervisor == staff.staffId\" >{{staff.inventorySubCategoryId}}</span>\n                  </span>\n                </span>\n                <span\n                  [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">{{list.materialType}}</span>\n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <mat-select name=\"supervisor\" [(ngModel)]=\"list.supervisor\">\n                    <mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n                      {{ item.firstName }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                \n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.warehouseId}}\t\t\t\t\t\t\t\t\t\t\t\t\n                </span>               \n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"warehouseName\"\n                    [(ngModel)]=\"list.warehouseName\">\n                </mat-form-field>\n              </td>\n              <td>                \n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.reorderTriggerlevel}}\t\t\t\t\t\t\t\t\t\t\t\t\n                </span>               \n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"warehouseName\"\n                    [(ngModel)]=\"list.warehouseName\">\n                </mat-form-field>\n              </td>\n              <td>\n                \n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.reorderQuantity}}\t\t\t\t\t\t\t\t\t\t\t\t\n                </span>               \n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"warehouseName\"\n                    [(ngModel)]=\"list.warehouseName\">\n                </mat-form-field>\n              </td>\n              <td>                \n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.notes}}\t\t\t\t\t\t\t\t\t\t\t\t\n                </span>               \n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"warehouseName\"\n                    [(ngModel)]=\"list.warehouseName\">\n                </mat-form-field>\n              </td>  \n              <td>                \n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.notes}}\t\t\t\t\t\t\t\t\t\t\t\t\n                </span>               \n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"warehouseName\"\n                    [(ngModel)]=\"list.warehouseName\">\n                </mat-form-field>\n              </td>              \n              <td class=\"fixed-col\">\n              <i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\" [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\"\t(click)=\"wareHouseIndex = inventoryIndex\"\t\t\t\t\t\t\t\t\t\n                aria-hidden=\"true\" ></i>\n              <i class=\"fa fa-floppy-o pl-2 pr-3 pad-top\" title=\"save\" \n              [ngStyle]=\"!list.warehouseId || !list.warehouseId || !list.towerLocation || !list.descripition || !list.owner || !list.supervisor?{'pointer-events':'none','opacity':'0.4'}:''\"\n              *ngIf=\"wareHouseIndex == inventoryIndex\" (click)=\"updateWareHouse(list)\"\n                ></i>\n              <i class=\"fa fa-times pad-top pl-2\" title=\"cancel\"  *ngIf=\"wareHouseIndex == inventoryIndex\"  (click)=\"wareHouseIndex = -1\"></i>\t\t\t\t\t\n                <i class=\"fa fa-trash pl-2\"  (click)=\"deleteRow(index,list)\" [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\" aria-hidden=\"true\"></i>\n\n              </td>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n      </div>\n      <app-pagination *ngIf=\"totalItems\" [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n        [ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\"\n        (outputParams)=\"getIndexParams($event)\">\n      </app-pagination>\n      <div class=\"action-container\">        \n      </div>\n    </form>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create/inventory-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create/inventory-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inventory-create-wrapper\">\n\t\n\t<form #addInventoryForm = \"ngForm\" name=\"addInventoryForm\" (ngSubmit)=\"submitAddInventoryForm(addInventoryForm)\"  novalidate>\n\n\t\t<h4 class=\"main-title-mini float-left mt-3\">\n\t\t\t\n\t\t\t<span *ngIf=\"!isEditInventory\">Create Inventory</span>\n    \t\t<span *ngIf=\"isEditInventory\">Update Inventory</span>\n\n\t\t</h4>\n\n\t\t<div class=\"card ov clear\">\n\t\t\t\n\t\t\t<div class=\"card-body ov\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isInventorySubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isInventorySubmitted\">\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Inventory Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"inventoryName\" [(ngModel)]=\"inventory.inventoryName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Inventory Unit*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"InventoryUnit\" [(ngModel)]=\"inventory.InventoryUnit\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<app-select-box \n\t\t\t\t\t\t\t\tfieldName = \"vendorName\" \n\t\t\t\t\t\t\t\tfieldText = \"Vendor Name\"\n\t\t\t\t\t\t\t\tfieldItemName=\"vendorName\"\n\t\t\t\t\t\t\t\tfieldItemId=\"vendorId\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"inventory.vendorId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"vendorDataList\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onVendorChange($event)\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t</app-select-box>\n\t                \t\t</div> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<app-select-box \n\t\t\t\t\t\t\t\tfieldName = \"inventoryCategory\" \n\t\t\t\t\t\t\t\tfieldText = \"inventory Category\"\n\t\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\t\tfieldItemId=\"lookupValueId\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"inventory.inventoryCategoryId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"inventoryCategoryDataList\"\n\t\t\t\t\t\t\t\t(inputChange) = \"oninventoryCategoryChange($event)\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t</app-select-box>\n\t                \t\t</div> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Location</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"inventoryLocation\" [(ngModel)]=\"inventory.location\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Re-Order Level</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter\" name=\"reorderLevel\" [(ngModel)]=\"inventory.reOrderTriggerLevel\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Re-Order Quantity</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter\" name=\"reorderQuantity\" [(ngModel)]=\"inventory.reOrderQuantity\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Comments</label>\n\t\t\t                    <textarea placeholder=\"some text here\" name=\"inventoryComments\" [(ngModel)]=\"inventory.notes\"></textarea>\n\t\t\t                </div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addInventoryForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6 d-flex align-items-center\">\n\t\t\t\t\t\t<h5>Current Inventory <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t\t   </div>\n\t\t\t\t\t<div class=\"col-sm-6 d-flex justify-content-end align-items-center\"> \n\t\t\t\t\t\t<!-- <i class=\"fa fa-filter filter-icon pr-4\" aria-hidden=\"true\"  data-toggle=\"collapse\" data-target=\"#filter\"></i>   -->\n\t\t\t\t\t\t<!-- <ul class=\"list-inline\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\"> -->\n\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t(ngModelChange)=\"onGlSearchFilter()\" > -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"pb-1\">Select Warehouse</h6>\n\t\t\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\t\t\t\tname=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t\t\tid=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t required>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t</div>\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"[]\" [columns]=\"unitAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"helpdesk-all-tickets-wrapper\" *ngIf=\"dummy\">\n  <app-loader *ngIf=\"!isTicketDataLoaded\"></app-loader>\n  <!-- <ul class=\"legends list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots common\"></span><span>Common</span></li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots private\"></span>Private</li>\n\t</ul>\n\t<ul class=\"legends ml-3 list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span><span>High</span></li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots medium\"></span>Medium</li>\n\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>Low</li>\n\t</ul> -->\n  <div class=\"card clear table-card\" *ngIf=\"isTicketDataLoaded\">\n    <div class=\"card-header\">\n\n      <div class=\"row\">\n        <div class=\"col-sm-6 d-flex align-items-center\">\n          <h5>Initial Stock <span class=\"badge lime-green\">{{totalItems}}</span>\n          </h5>\n        </div>\n        <div class=\"col-sm-6 d-flex justify-content-end align-items-center\">\n          <!-- <i class=\"fa fa-filter filter-icon pr-4\" aria-hidden=\"true\"  data-toggle=\"collapse\" data-target=\"#filter\"></i>   -->\n          <!-- <ul class=\"list-inline\">\n\t\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\"> -->\n          <!-- <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\" \n                            (ngModelChange)=\"onGlSearchFilter()\" > -->\n          <div class=\"col-sm-6\">\n            <div class=\"select-box\">\n              <h6 class=\"pb-1\">Select Warehouse</h6>\n              <select name=\"assetCategory\" id=\"assetCategory\" class=\"form-control\" required>\n                <option value=\"\" disabled selected hidden>Select</option>\n                <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n              </select>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"select-box\">\n              <h6 class=\"pb-1\">Select Material</h6>\n              <select name=\"assetCategory\" id=\"assetCategory\" class=\"form-control\" required>\n                <option value=\"\" disabled selected hidden>Select</option>\n                <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n              </select>\n            </div>\n          </div>\n          <!-- <a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/assets/create-maintenance\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t<span>Add Maintenance</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t -->\n          <!-- </li> -->\n          <!-- </ul> -->\n        </div>\n      </div>\n    </div>\n    <div class=\" mb-3 filter-card\" *ngIf=\"dummy\">\n      <mat-card class=\"\">\n        <div class=\"row d-flex justify-content-around wd-100\">\n\n          <div class=\" w-25\">\n            <h6 class=\"pb-1\">Select Warehouse</h6>\n            <angular2-multiselect [data]=\"categoryList\" [(ngModel)]=\"search.categorys\" [settings]=\"categorySettings\"\n              (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"\n              (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\n            </angular2-multiselect>\n          </div>\n          <div class=\"w-25\">\n            <h6 class=\"pb-1\">Select Material</h6>\n            <angular2-multiselect [data]=\"subCategoryList\" [(ngModel)]=\"selectedItems\" [settings]=\"subCategorySettings\"\n              (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"\n              (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\n            </angular2-multiselect>\n\n          </div>\n          <div class=\"d-flex justify-content-center align-items-center\">\n            <i class=\"fa fa-search search-icon\" aria-hidden=\"true\"></i></div>\n        </div>\n\n\n\n      </mat-card>\n    </div>\n    <div class=\"card-body p-0\">\n\n      <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n        [filterable]=\"true\" [sortable]=\"true\" [source]=\"[]\" [columns]=\"columnData\" [columnsresize]=\"true\"\n        [enablehover]=\"false\" #datagrid>\n      </jqxGrid>\n\n    </div>\n\n  </div>\n\n</div>\n<div class=\"card table-card mb-30\" *ngIf=\"isExternalDataLoaded\">\n  <div class=\"card-header\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-6 d-flex align-items-center\">\n        <h5>Initial Stock <span class=\"badge lime-green\">{{totalItems}}</span>\n        </h5>\n      </div>\n      <div class=\"col-sm-6 d-flex justify-content-end align-items-center\">\n        <!-- <i class=\"fa fa-filter filter-icon pr-4\" aria-hidden=\"true\"  data-toggle=\"collapse\" data-target=\"#filter\"></i>   -->\n        <!-- <ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\"> -->\n        <!-- <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\" \n\t\t\t\t\t\t(ngModelChange)=\"onGlSearchFilter()\" > -->\n        <div class=\"col-sm-6\">\n          <div class=\"select-box\">\n            <h6 class=\"pb-1\">Select Warehouse</h6>\n            <select name=\"assetCategory\" id=\"assetCategory\" class=\"form-control\" required>\n              <option value=\"\" disabled selected hidden>Select</option>\n              <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n            </select>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"select-box\">\n            <h6 class=\"pb-1\">Select Material</h6>\n            <select name=\"assetCategory\" id=\"assetCategory\" class=\"form-control\" required>\n              <option value=\"\" disabled selected hidden>Select</option>\n              <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n            </select>\n          </div>\n        </div>\n        <!-- <a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\trouterLink=\"/ams/assets/create-maintenance\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Maintenance</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t -->\n        <!-- </li> -->\n        <!-- </ul> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body p-0\">\n    <form>\n      <table class=\"table\" [ngClass]=\"isMobileView()\">\n        <thead>\n          <tr>\n            <th scope=\"col\" (click)=\"sortUnitData('serviceType')\">Warehouse Name <span\n                [ngClass]=\"getFieldOrderBy('serviceType')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('serviceType')\">Inventory Item <span\n                [ngClass]=\"getFieldOrderBy('serviceType')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('phone')\">Initial Stock <span\n                [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('contactperson')\">Stock As On Date <span\n                [ngClass]=\"getFieldOrderBy('contactperson')\"></span></th>\n            <th scope=\"col\">Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <div *ngIf=\"check\">\n            <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls ; let i=index\">\n\n              <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"i\">\n                <td>\n                  <mat-form-field>\n                    <!-- <mat-select formControlName=\"warehouseId\">                       \n                        </mat-select> -->\n                    <input matInput type=\"text\" formControlName=\"warehouseId\">\n\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field>\n                    <!-- <mat-select formControlName=\"materialId\">                       \n                        </mat-select> -->\n                    <input matInput type=\"text\" formControlName=\"materialId\">\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field>\n                    <input matInput type=\"text\" formControlName=\"initalStockQty\">\n                  </mat-form-field>\n                </td>\n                <td>\n                  <!-- <input class=\"form-control\" name=\"stockasonDate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTime]=\"stockasonDate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTimeTrigger]=\"stockasonDate\" placeholder=\"Stock as on Date\" [(ngModel)]=\"stockasonDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #stockasonDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>     -->\n                  <mat-form-field>\n                    <input matInput type=\"text\" formControlName=\"stockasonDate\"> -->\n                  </mat-form-field>\n                </td>\n\n                <td>\n                  <i class=\"fa fa-floppy-o\" style=\"  padding-left: 7px;  padding-top: 27px;\" (click)=\"doneRow(group)\"\n                    aria-hidden=\"true\"></i>\n                  <!-- <mat-icon class=\"done\" (click)=\"doneRow(group)\">done</mat-icon> -->\n                  <!-- <mat-icon class=\"delete\" (click)=\"deleteRow(i,'null')\">delete_forever</mat-icon> -->\n                  <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(i,'null')\" aria-hidden=\"true\"></i>\n                  <!-- <mat-icon class=\"delete\" (click)=\"deleteRow(i)\">delete_forever</mat-icon> -->\n                  <!-- <mat-icon class=\"done\" (click)=\"doneRow(group)\">done</mat-icon> -->\n\n                </td>\n              </tr>\n              <tr *ngIf=\"!group.get('isEditable').value\">\n                <td>\n                  {{group.get('warehouseId').value}}\n                </td>\n                <td>\n                  {{group.get('materialId').value}}\n                </td>\n                <td>\n                  {{group.get('initalStockQty').value}}\n                </td>\n                <td>\n                  {{group.get('stockasonDate').value?group.get('stockasonDate').value.split('T')[0]:''}}\n                </td>\n                <td>\n                  <!-- <mat-icon class=\"edit\" (click)=\"editRow(group)\">edit</mat-icon> -->\n                  <i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\" (click)=\"editRow(group);isEditRow = true\"\n                    aria-hidden=\"true\"></i>\n                  <!-- <mat-icon class=\"delete\" (click)=\"deleteRow(i,group)\">delete_forever</mat-icon> -->\n                  <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(i,group)\" aria-hidden=\"true\"></i>\n                </td>\n              </tr>\n            </ng-container>\n          </div>\n\n\n          <ng-container>\n            <!-- <form #warehouseForm = \"ngForm\" name=\"warehouseForm\"  novalidate> -->\n            <tr>\n              <td>                \n                <mat-form-field class=\"w-100\">\n                  <mat-select name=\"warId\" [(ngModel)]=\"row.warehouseId\" >\n                    <mat-option *ngFor=\"let item of  warehouseData\"\n                      [value]=\"item.warehouseId\">\n                      {{ item.warehouseName }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <input matInput type=\"text\" name=\"matId\" [(ngModel)]=\"row.materialId\">\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <input matInput type=\"text\" name=\"initalQty\" [(ngModel)]=\"row.initalStockQty\">\n                </mat-form-field>\n              </td>\n              <td>\n                <!-- <mat-form-field class=\"w-100\">\n                  <input matInput type=\"text\" name=\"date\" [(ngModel)]=\"row.date\">\n                </mat-form-field> -->\n                <div class=\"input-box mb-0\">\n                    <input class=\"form-control stock-date\" name=\"stockasonDate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTime]=\"stockasonDate\"\n                     [owlDateTimeTrigger]=\"stockasonDate\" \n                     placeholder=\"\" [(ngModel)]=\"row.stockasonDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #stockasonDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                      </div>    \n                    </div>\n                \n                <!-- <mat-form-field>\n                  <mat-label>Choose a date</mat-label>\n                  <input matInput [matDatepicker]=\"picker\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field> -->\n              </td>\n              <td>\n                <i class=\"fa fa-floppy-o save-icon\"\n                  [ngStyle]=\"!row.warehouseId || !row.materialId || !row.initalStockQty || !row.stockasonDate ?{'pointer-events':'none','opacity':'0.4'}:''\"\n                  (click)=\"addWareHouse(row)\" aria-hidden=\"true\"></i>\n                <!-- <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(i,'null')\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i> -->\n              </td>\n            </tr>\n            <!-- </form> -->\n          </ng-container>\n          <ng-container\n            *ngFor=\"let list of initalStockData | slice:ItemStartIndex:ItemEndIndex;let inventoryIndex=index\">\n            <tr>\n              <td>             \n               <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                <span *ngFor=\" let item of  warehouseData\">\n                  <span *ngIf=\"item.warehouseId == list.warehouseId\" >{{item.warehouseName}}</span>\n                </span>\n              </span>\n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">{{list.warehouseId}}</span>\n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <mat-select name=\"warId\" [(ngModel)]=\"row.warehouseId\" >\n                    <mat-option *ngFor=\"let item of  warehouseData\"\n                      [value]=\"item.warehouseId\">\n                      {{ item.warehouseName }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              \n              </td>\n              <td>\n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.materialId}}\n                </span>\n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"materialId\" [(ngModel)]=\"list.materialId\">\n                </mat-form-field>\n\n              </td>\n              <td>\n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.initalStockQty}}\n                </span>\n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"initalStockQty\" [(ngModel)]=\"list.initalStockQty\">\n                </mat-form-field>\n              </td>\n              <td>\n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.stockasonDate?(list.stockasonDate | date: 'dd/MM/yyyy'):'--'}}\n                </span>                \n                <div class=\"input-box mb-0\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input class=\"form-control stock-date\" name=\"stockasonDate\"\n                   [owlDateTime]=\"stockasonDate\"\n                   [owlDateTimeTrigger]=\"stockasonDate\" \n                   placeholder=\"\" [(ngModel)]=\"list.stockasonDate\" required>\n                  <owl-date-time #stockasonDate [pickerType]=\"'calendar'\"></owl-date-time>\n                  <div class=\"date-btn\">\n                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                    </div>    \n                  </div>\n              </td>\n              <td>\n                <i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\"\n                  [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\"\n                  (click)=\"wareHouseIndex = inventoryIndex\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-floppy-o pl-2 pr-3 pad-top\" title=\"save\"\n                  [ngStyle]=\"!list.warehouseId || !list.materialId || !list.initalStockQty \n                  || !list.stockasonDate?{'pointer-events':'none','opacity':'0.4'}:''\"\n                  *ngIf=\"wareHouseIndex == inventoryIndex\" (click)=\"updateWareHouse(list)\"></i>\n                <i class=\"fa fa-times pad-top pl-2\" title=\"cancel\" *ngIf=\"wareHouseIndex == inventoryIndex\"\n                  (click)=\"wareHouseIndex = -1\"></i>\n                <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(index,list)\"\n                  [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\" aria-hidden=\"true\"></i>\n\n              </td>\n            </tr>\n          </ng-container>\n        </tbody>\n\n      </table>\n      <div class=\"action-container\">\n        <!-- <button mat-raised-button type=\"submit\" (click)=\"addRow()\">Add row</button> -->\n        <!-- <button mat-raised-button [disabled]=\"userTable.invalid\" type=\"submit\" (click)=\"submitForm()\">Submit</button> -->\n      </div>\n    </form>\n\n    <!-- <div class=\"output\">\n                <p>Form Data:  {{userTable.value | json}}</p>\n                  <p>Is Valid: {{userTable.valid}}</p>\n              </div> -->\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-create-wrapper\">\n\t\n\t<form novalidate>\n\n\t\t<h4 class=\"main-title-mini float-left mt-3\">\n\t\t\t\n\t\t\t<span>Internal Transfer</span>\n\n\t\t</h4>\n<!-- \n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div> -->\n\n\t\t<div class=\"card clear mb-30\" id=\"accordion\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t\t<div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"row\">\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>From Warehouse</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"asset.assetCategoryId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>TO Warehouse</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"asset.assetCategoryId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Inventory Item</label>\n\t\t\t\t\t                    <angular2-multiselect [data]=\"itemlist\" \n                                            [(ngModel)]=\"search\" \n                                            [settings]=\"assetSettings\">                              \n                                        </angular2-multiselect>\n                    <!-- (onSelect)=\"onItemSelect($event)\"\n                        (onDeSelect)=\"OnItemDeSelect($event)\" \n                        (onSelectAll)=\"onSelectAll($event)\" \n                        (onDeSelectAll)=\"onDeSelectAll($event)\" -->\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Type</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"asset.assetCategoryId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Staff ID</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Staff ID\" name=\"depreciation\" [(ngModel)]=\"asset.depreciationPercentage\" required>\n\t\t\t                \t\t</div>\n                                </div>\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Staff Incharge</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Staff Name\" name=\"depreciation\" [(ngModel)]=\"asset.depreciationPercentage\" required>\n\t\t\t                \t\t</div>\n                                </div>\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Reason</label>\n\t\t\t\t\t                    <textarea placeholder=\"Enter Reason\" name=\"staffComments\" [(ngModel)]=\"asset.comments\"></textarea>\n\t\t\t\t\t                </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Total Qty </label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Total Qty\" name=\"depreciation\" [(ngModel)]=\"asset.depreciationPercentage\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" >Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-create-wrapper\">\n    <form novalidate>\n        <h4 class=\"main-title-mini float-left mt-3\">\n            <span *ngIf=\"!isEditAsset\">Receiving</span>\n        </h4>\n        <!-- <div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div> -->\n        <div class=\"card clear mb-30\">\n            <div class=\"card-body p-0\">\n                <ul class=\"list-group tabs clear\">\n                    <!-- <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#assetCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">General</li> -->\n                    <div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\n                        data-parent=\"#accordion\">\n                        <div class=\"details\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-4\">\n                                    <div class=\"select-box\">\n                                        <label>Warehouse ID</label>\n                                        <select name=\"assetCategory\" id=\"assetCategory\" class=\"form-control\"\n                                            [(ngModel)]=\"asset.assetCategoryId\" required>\n                                            <option value=\"\" disabled selected hidden>Select</option>\n                                            <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">\n                                                {{ item.lookupValueName }}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <label>Inventory Item</label>\n                                    <angular2-multiselect [data]=\"assetList\" [(ngModel)]=\"asset.assets\"\n                                        [settings]=\"assetSettings\" (onSelect)=\"onItemSelect($event)\"\n                                        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\"\n                                        (onDeSelectAll)=\"onDeSelectAll($event)\">\n                                    </angular2-multiselect>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Available Stock</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Available Stock\"\n                                            name=\"ManufacturerDetails\" [(ngModel)]=\"asset.manufacturerDetails\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>PO Number</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter PO No\" name=\"modelNo\"\n                                            [(ngModel)]=\"asset.modelNo\" required>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Status</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Status\"\n                                            name=\"assetLocation\" [(ngModel)]=\"asset.assetLocation\">\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>SKU / BarCode</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter SKU /BarCode\" name=\"depreciation\"\n                                            [(ngModel)]=\"asset.depreciationPercentage\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Received Goods QTY</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Received Goods QTY\" name=\"depreciation\"\n                                            [(ngModel)]=\"asset.depreciationPercentage\" required>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Receive Goods Date</label>\n                                        <input class=\"form-control\" name=\"purchaseDate\" [owlDateTime]=\"installationDate\"\n                                            [owlDateTimeTrigger]=\"installationDate\"\n                                            placeholder=\"Received Goods  Date\" [(ngModel)]=\"asset.installationDate\"\n                                            required>\n                                        <owl-date-time #installationDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                        <div class=\"date-btn\" [owlDateTimeTrigger]=\"installationDate\">\n                                            <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\">\n                                            </i-feather>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Count/ Quality Verified</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Count\" name=\"depreciation\"\n                                            [(ngModel)]=\"asset.depreciationPercentage\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Verified by Staff</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Verified by Staff\" name=\"depreciation\"\n                                            [(ngModel)]=\"asset.depreciationPercentage\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Damage /Returned </label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Damage/Returned\" name=\"depreciation\"\n                                            [(ngModel)]=\"asset.depreciationPercentage\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Actualy Stock Moved in</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Stock\" name=\"depreciation\"\n                                            [(ngModel)]=\"asset.depreciationPercentage\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Total Cost</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Total Cost\" name=\"depreciation\"\n                                            [(ngModel)]=\"asset.depreciationPercentage\" required>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <ul class=\"list-inline float-right\">\n                    <li class=\"list-inline-item\">\n                        <button class=\"btn blue mr-2\">Submit</button>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <mat-card class=\"mt-4 p-0\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-2\">\n                            <label>Inventory Item</label>\n                        </div>\n                        <div class=\"col-sm-2\"> <label>Qty</label> </div>\n                        <div class=\"col-sm-2\"> <label>Final Qty</label> </div>\n                        <div class=\"col-sm-2\"> <label>Type</label> </div>\n                        <div class=\"col-sm-2\"> <label>Transaction Date</label> </div>\n                        <div class=\"col-sm-2\"> <label>Status</label> </div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row pb-2\" *ngFor=\"let list of ['1','2','3']\">\n                        <div class=\"col-sm-2\"><label>Spoon</label> </div>\n                        <div class=\"col-sm-2\"><label>11</label></div>\n                        <div class=\"col-sm-2\"><label>Receiving</label></div>\n                        <div class=\"col-sm-2\"><label>12/12/2020</label></div>\n                        <div class=\"col-sm-2\"><label>50</label></div>\n                        <div class=\"col-sm-2\"><label>Added</label> </div>\n                    </div>\n                </div>\n            </div>\n        </mat-card>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  inventory-reports works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"inventorys-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isInventoryCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isInventoryCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Inventory Categories</h4>\n\t\t<ng-container *ngFor=\"let item of inventoryCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/inventory/view/{{item.lookupValueId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateInventoryCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-none\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteInventoryCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\n\t\t\t\t\t\t<p>{{getInventoryList(item.lookupValueId)}} Inventorie(s) added</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewInventoryCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isInventoryCategoryNew || isInventoryCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isInventoryCategoryNew\">Add Inventory Category</h6>\n    \t\t\t<h6 *ngIf=\"!isInventoryCategoryNew\">Update Inventory Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"alertTicketMessage\" [isError]=\"isCategoryError\" [isSuccess]=\"isCategorySuccess\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isInventoryCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isInventoryCategorySubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addInventoryCategoryForm = \"ngForm\" name=\"addInventoryCategoryForm\" (ngSubmit)=\"submitInventoryCategoryForm(addInventoryCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"inventoryCategory\" [(ngModel)]=\"inventoryCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addInventoryCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div> -->\n\n\n\n\n<div class=\"setup-outer\">\n\t<mat-tab-group>\n\t\t<mat-tab label=\"Ware Houses Setup\">\n\n\n\t\t\t<div class=\"card table-card mb-30\" >\n\t\t\t\t<div class=\"card-header\">\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6 d-flex align-items-center\">\n\t\t\t\t\t\t\t<h5>All Warehouse <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-6 d-flex align-items-center justify-content-end\">\n\t\t\t\t\t\t\t<li class=\" d-flex search \">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-search setup-search search-left\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control pl-5 \" placeholder=\"Search...\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"searchWarehouse\" >\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('')\">Warehouse ID\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('warehouseName')\">Warehouse Name\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('warehouseName')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('towerLocation')\">Tower Location\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('towerLocation')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('descripition')\">Descripition\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('descripition')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('owner')\">Owner\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('owner')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('supervisor')\">Supervisor\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('supervisor')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Action</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<ng-container>\n\t\t\t\t\t\t\t\t\t<!-- <form #warehouseForm = \"ngForm\" name=\"warehouseForm\"  novalidate> -->\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"warId\" [(ngModel)]=\"row.warehouseId\" OnlyNumber=\"true\" >\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"warName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"row.warehouseName\" >\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"warLocation\" [(ngModel)]=\"row.towerLocation\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of  locationList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.description }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"descrip\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"row.descripition\" >\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"warOwner\" [(ngModel)]=\"row.owner\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.firstName }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"warSupervisor\" [(ngModel)]=\"row.supervisor\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.firstName }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-floppy-o save-icon\" [ngStyle]=\"!row.warehouseId || !row.warehouseName || !row.towerLocation || !row.descripition || !row.owner || !row.supervisor?{'pointer-events':'none','opacity':'0.4'}:''\" (click)=\"addWareHouse(row)\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(i,'null')\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<!-- </form> -->\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t*ngFor=\"let list of warehouseData | slice:ItemStartIndex:ItemEndIndex;let inventoryIndex=index\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">{{list.warehouseId}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\"  name=\"warehouseId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"list.warehouseId\">\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{list.warehouseName}}\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"warehouseName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"list.warehouseName\">\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\" let loc of locationList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"list.towerLocation == loc.apartmentBlockId\" >{{loc.description}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"location\" [(ngModel)]=\"list.towerLocation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of  locationList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.description }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{list.descripition}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"descripition\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"list.descripition\">\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\" let staff of staffList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"list.owner == staff.staffId\" >{{staff.firstName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"owner\" [(ngModel)]=\"list.owner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.firstName }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\" let staff of staffList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"list.supervisor == staff.staffId\" >{{staff.firstName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">{{list.supervisor}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"supervisor\" [(ngModel)]=\"list.supervisor\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.firstName }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\" [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\"\t(click)=\"wareHouseIndex = inventoryIndex\"\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\" ></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-floppy-o pl-2 pr-3 pad-top\" title=\"save\" \n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"!list.warehouseId || !list.warehouseId || !list.towerLocation || !list.descripition || !list.owner || !list.supervisor?{'pointer-events':'none','opacity':'0.4'}:''\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"wareHouseIndex == inventoryIndex\" (click)=\"updateWareHouse(list)\"\n\t\t\t\t\t\t\t\t\t\t\t></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times pad-top pl-2\" title=\"cancel\"  *ngIf=\"wareHouseIndex == inventoryIndex\"  (click)=\"wareHouseIndex = -1\"></i>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash pl-2\"  (click)=\"deleteRow(index,list)\" [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\" aria-hidden=\"true\"></i>\n\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<app-pagination  *ngIf=\"warehouseData.length > 0 \" [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\"\n\t\t\t\t\t\t\t(outputParams)=\"getIndexParams($event)\">\n\t\t\t\t\t\t</app-pagination>\n\t\t\t\t\t\t<div class=\"action-container\">\n\t\t\t\t\t\t\t<!-- <button mat-raised-button type=\"submit\" (click)=\"addRow()\">Add row</button> -->\n\t\t\t\t\t\t\t<!-- <button mat-raised-button [disabled]=\"userTable.invalid\" type=\"submit\" (click)=\"submitForm()\">Submit</button> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\n\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</mat-tab>\n\t\t<mat-tab label=\"Inventory Categories / Sub Category \">\n\t\t\t<div class=\"\">\n\t\t\t\t<div class=\"d-flex wd-100\">\n\t\t\t\t\t<div class=\"d-flex wd-50\">\n\t\t\t\t\t\t<h4 class=\"main-title-mini pt-4\">Inventory Categories</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-flex wd-50 justify-content-end align-items-center\">\n\t\t\t\t\t\t<li class=\" d-flex search \">\n\t\t\t\t\t\t\t<i class=\"fa fa-search setup-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control pl-5\" placeholder=\"Search...\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"searchCategory\" (input)=\"filterCategoryItem(searchCategory)\">\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item ml-3 mt-2\" (click)=\"addSetUp('inventory','add',null)\">\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\">\n\t\t\t\t\t\t\t\t<i-feather name=\"plus\" class=\"icon plus\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n\t\t\t\t\t\t\t\t\t\tclass=\"feather feather-plus\">\n\t\t\t\t\t\t\t\t\t\t<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line>\n\t\t\t\t\t\t\t\t\t\t<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>\n\t\t\t\t\t\t\t\t\t</svg></i-feather><span>Add inventory Category </span>\n\t\t\t\t\t\t\t</a></li>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <mat-accordion class=\"pt-5\" class=\"setup-accordion\" *ngIf=\"categoryList.length == 0\">\n\t\t\t\t  Asset Category not found\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t  </mat-accordion> -->\n\t\t\t\t<app-loader *ngIf=\"isAssetLoaded\"></app-loader>\n\t\t\t\t<mat-accordion class=\"pt-5\" class=\"setup-accordion\">\n\t\t\t\t\t<mat-expansion-panel *ngFor=\" let cat of inventoryCategoryList;let catIndex = index\">\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t<div class=\"d-flex wd-100\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex wd-50\"> {{cat.name}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex wd-50 justify-content-end align-items-center\">\n\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-plus\" [ngStyle]=\"cat?.subCategory.length > 0 ? {'pointer-events':'none','opacity':'0.4'}:''\" aria-hidden=\"true\" (click)=\"addSetUp('inventory','addSubType',cat)\"></i> -->\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o pl-2\" aria-hidden=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"addSetUp('inventory','edit',cat)\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash pl-2\" (click)=\"deleteCategory(cat.id)\"\n\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<div class=\"subCategory\" *ngIf=\"cat?.subCategory.length == 0\">Sub Category not found</div>\n\t\t\t\t\t\t<div class=\" subCategory \" *ngFor=\"let sub  of cat?.subCategory;let catIndex = index\">\n\t\t\t\t\t\t\t<!-- <li>{{sub.name}}</li> -->\n\t\t\t\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t\t\t\t<div class=\"sub-dot mr-2\"\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"inventoryCurrIndex == catIndex ?{'display':'none'}:''\"></div>\n\t\t\t\t\t\t\t\t<div class=\"wd-50\"> <span\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"inventoryCurrIndex == catIndex ?{'display':'none'}:''\">{{sub.name}}</span>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" *ngIf=\"catIndex == inventoryCurrIndex\" class=\"cus-input\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter sub category\" name=\"subCategory\" [(ngModel)]=\"sub.name\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"wd-50 d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\"\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"inventoryCurrIndex == catIndex ?{'display':'none'}:''\"\n\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\" (click)=\"inventoryCurrIndex = catIndex \"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-floppy-o pl-2 pr-3\" title=\"save\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"catIndex == inventoryCurrIndex\" aria-hidden=\"true\"\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"!sub.name? {'pointer-events':'none','opacity':'0.4'}:''\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"editInventory(cat)\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times  pl-2\" title=\"cancel\" *ngIf=\"catIndex == inventoryCurrIndex\"\n\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\" (click)=\"getAllInventory();inventoryCurrIndex = -1\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t</div>\n\t\t</mat-tab>\n\t</mat-tab-group>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-create-wrapper\">\n    <form novalidate>\n        <h4 class=\"main-title-mini float-left mt-3\">\n            <span *ngIf=\"!isEditAsset\">Stock Adjustments</span>\n        </h4>\n        <!-- <div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div> -->\n        <div class=\"card clear mb-30\">\n            <div class=\"card-body p-0\">\n                <ul class=\"list-group tabs clear\">\n                    <div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\n                        data-parent=\"#accordion\">\n                        <div class=\"details\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-4\">\n                                    <div class=\"select-box\">\n                                        <label>Warehouse    </label>\n                                        <select name=\"assetCategory\" id=\"assetCategory\" class=\"form-control\"\n                                            [(ngModel)]=\"asset.assetCategoryId\" required>\n                                            <option value=\"\" disabled selected hidden>Select</option>\n                                            <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">\n                                                {{ item.lookupValueName }}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <label>Inventory Item</label>\n                                    <angular2-multiselect [data]=\"assetList\" [(ngModel)]=\"asset.assets\"\n                                        [settings]=\"assetSettings\" (onSelect)=\"onItemSelect($event)\"\n                                        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\"\n                                        (onDeSelectAll)=\"onDeSelectAll($event)\">\n                                    </angular2-multiselect>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Available Stock</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Available Stock\"\n                                            name=\"ManufacturerDetails\" [(ngModel)]=\"asset.manufacturerDetails\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"select-box\">\n                                        <label>Type  </label>\n                                        <select name=\"assetCategory\" id=\"assetCategory\" class=\"form-control\"\n                                            [(ngModel)]=\"asset.assetCategoryId\" required>\n                                            <option value=\"\" disabled selected hidden>Select</option>\n                                            <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">\n                                                {{ item.lookupValueName }}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Total Qty Consumed</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Total Qty\"\n                                            name=\"assetLocation\" [(ngModel)]=\"asset.assetLocation\">\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Person who received</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Person who received\" name=\"depreciation\"\n                                            [(ngModel)]=\"asset.depreciationPercentage\" required>\n                                    </div>\n                                </div>  \n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Reason for Consuming</label>\n                                        <textarea placeholder=\"Enter Reason\" name=\"staffComments\" [(ngModel)]=\"asset.comments\"></textarea>\n                                        </div>\n                                </div>                                                             \n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Date of Consumption</label>\n                                        <input class=\"form-control\" name=\"purchaseDate\" [owlDateTime]=\"installationDate\"\n                                            [owlDateTimeTrigger]=\"installationDate\"\n                                            placeholder=\"Date of Consumption\" [(ngModel)]=\"asset.installationDate\"\n                                            required>\n                                        <owl-date-time #installationDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                        <div class=\"date-btn\" [owlDateTimeTrigger]=\"installationDate\">\n                                            <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\">\n                                            </i-feather>\n                                        </div>\n                                    </div>\n                                </div>                                                          \n                            </div>\n                        </div>\n                    </div>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <ul class=\"list-inline float-right\">\n                    <li class=\"list-inline-item\">\n                        <button class=\"btn blue mr-2\">Submit</button>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <mat-card class=\"mt-4 p-0\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-2\">\n                            <label>Inventory Item</label>\n                        </div>\n                        <div class=\"col-sm-2\"> <label>Qty</label> </div>\n                        <div class=\"col-sm-2\"> <label>Final Qty</label> </div>\n                        <div class=\"col-sm-2\"> <label>Type</label> </div>\n                        <div class=\"col-sm-2\"> <label>Transaction Date</label> </div>\n                        <div class=\"col-sm-2\"> <label>Status</label> </div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row pb-2\" *ngFor=\"let list of ['1','2','3']\">\n                        <div class=\"col-sm-2\"><label>Spoon</label> </div>\n                        <div class=\"col-sm-2\"><label>11</label></div>\n                        <div class=\"col-sm-2\"><label>Receiving</label></div>\n                        <div class=\"col-sm-2\"><label>12/12/2020</label></div>\n                        <div class=\"col-sm-2\"><label>50</label></div>\n                        <div class=\"col-sm-2\"><label>Added</label> </div>\n                    </div>\n                </div>\n            </div>\n        </mat-card>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-update/inventory-update.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-update/inventory-update.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  inventory-update works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-create-wrapper\">\n\t\n\t<form   novalidate>\n\n\t\t<h4 class=\"main-title-mini float-left mt-3\">\n\t\t\t\n\t\t\t<span *ngIf=\"!isEditAsset\">Vendor Management</span>\n\n\t\t</h4>\n\n<div>Vendor Management</div>\n\n\t\t<!-- <div class=\"card clear mb-30\" id=\"accordion\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#assetCollapseOne\" >General</li> -->\n\t\t\t\t\t<!-- <div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\"> --> \n\t\t\t\t\t\t\t<mat-card *ngIf=\"working\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Material</label>\n                                        <angular2-multiselect [data]=\"categoryList\" name=\"material\" [(ngModel)]=\"assets\" [settings]=\"materialSettings\"\n                                        (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"\n                                        (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\n                                    </angular2-multiselect>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Vendor</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"asset.assetCategoryId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\"></div>\n                            </div>                            \n                           </mat-card>\n\t\t\t\t\t\t<!-- </div>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div> -->\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" >Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-view/inventory-view.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-view/inventory-view.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inventory-view-wrapper\">\n\t\n\n\t<form #viewInventoryForm = \"ngForm\" name=\"viewInventoryForm\"  novalidate>\n\n\t\t<div class=\"card ov mb-30\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Select Category</h5>\n\t    \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-body ov\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<app-select-box \n\t\t\t\t\t\t\t\tfieldName = \"inventoryCategory\" \n\t\t\t\t\t\t\t\tfieldText = \"Inventory Category\"\n\t\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\t\tfieldItemId=\"lookupValueId\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"inventoryCategory\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"inventoryCategoryData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onInventoryCatregoryChange($event)\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t</app-select-box>\n                \t\t</div> \n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</form>\n\n\n\t<div class=\"card table-card\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All {{inventoryCategoryName}} Inventory <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"inventoryData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/inventory/create-inventory\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Inventory</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<app-loader *ngIf=\"!isInventoryLoaded\"></app-loader>\n\n  \t\t<div class=\"card-body p-0\">           \n  \t\t\t\n  \t\t\t<ng-container *ngIf=\"isInventoryLoaded\">\n  \t\t\t\t\n  \t\t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\">Inventory Name\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('inventoryName')\" [ngClass]=\"getFieldOrderBy('inventoryName')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['inventoryName']\" (ngModelChange)=\"selectColInput('inventoryName')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Quantity \n\t\t\t\t\t      \t<span (click)=\"sortUnitData('reOrderQuantity')\" [ngClass]=\"getFieldOrderBy('reOrderQuantity')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Quantity\" [(ngModel)]=\"columnField['reOrderQuantity']\" (ngModelChange)=\"selectColInput('reOrderQuantity')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Vendor Name \n\t\t\t\t\t      \t<span (click)=\"sortUnitData('vendorName')\" [ngClass]=\"getFieldOrderBy('vendorName')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['vendorName']\" (ngModelChange)=\"selectColInput('vendorName')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Reorder Level \n\t\t\t\t\t      \t<span (click)=\"sortUnitData('reOrderTriggerLevel')\" [ngClass]=\"getFieldOrderBy('reOrderTriggerLevel')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Reorder\" [(ngModel)]=\"columnField['reOrderTriggerLevel']\" (ngModelChange)=\"selectColInput('reOrderTriggerLevel')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th  class=\"simple-actions\" scope=\"col\">Actions\n\t\t\t\t\t\t    <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t\t\t  </th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let inventory of inventoryListData | simpleSearch: inventoryData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\" [ngClass]=\"inventory.isActive ? '' : 'notactive'\">\n\t\t\t\t\t      <td class=\"name\">{{inventory.inventoryName}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{inventory.reOrderQuantity}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{getVendorName(inventory, inventory.vendorId)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{inventory.reOrderTriggerLevel}}</td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t\t      \tclass=\"mr-2\"\n\t\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t\t      \trouterLink=\"/ams/inventory/edit-inventory/{{inventory.inventoryId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(inventory.inventoryId)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n  \t\t\t</ng-container>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/inventory.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/inventory.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  background-color: #333;\n  color: #fff;\n  overflow: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\n\nmat-icon {\n  cursor: pointer;\n}\n\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.table {\n  padding: 20px;\n}\n\n.table tbody tr td,\n.table thead th,\n.table thead {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.output {\n  padding: 20px;\n}\n\n.delete {\n  color: red;\n}\n\n.done {\n  color: green;\n}\n\n.edit {\n  color: yellow;\n}\n\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n\n.table th, .table td {\n  max-width: unset !important;\n}\n\n.fixed-col {\n  position: -webkit-sticky;\n  position: sticky;\n  right: 0;\n  background: white;\n}\n\n.inventory-table {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LWNyZWF0ZS1pdGVtL2ludmVudG9yeS1jcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2ludmVudG9yeS9jb21wb25lbnRzL2ludmVudG9yeS1jcmVhdGUtaXRlbS9pbnZlbnRvcnktY3JlYXRlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTs7O0VBR0UsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0VKOztBRG9CRTtFQUNFLDJCQUFBO0FDakJKOztBRG1CRTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUNoQko7O0FEa0JFO0VBQ0UsY0FBQTtBQ2ZKIiwiZmlsZSI6InNyYy9hcHAvYW1zL2ludmVudG9yeS9jb21wb25lbnRzL2ludmVudG9yeS1jcmVhdGUtaXRlbS9pbnZlbnRvcnktY3JlYXRlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6MDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgXG4gIG1hdC1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5hY3Rpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAudGFibGUge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC50YWJsZSB0Ym9keSB0ciB0ZCxcbiAgLnRhYmxlIHRoZWFkIHRoLFxuICAudGFibGUgdGhlYWQge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICB9XG4gIFxuICAub3V0cHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAuZGVsZXRlIHtcbiAgICBjb2xvcjogcmVkICA7XG4gIH1cbiAgXG4gIC5kb25lIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gIH1cbiBcbiAgLmVkaXQge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gIH1cbiAgc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuIH1cbiAgXG5cbi8vIC50YWJsZS1jYXJkIHtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbi8vIH1cblxuICAvLyAudGFibGUtY2FyZCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLy8gICB3aWR0aDogN3B4O1xuICAvLyB9XG4gICBcbiAgLy8gLnRhYmxlLWNhcmQgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC8vICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC8vIH1cbiAgIFxuICAvLyAudGFibGUtY2FyZCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbiAgLy8gICBvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5O1xuICAvLyB9XG5cbiAgLnRhYmxlIHRoLCAudGFibGUgdGQge1xuICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudFxuICB9XG4gIC5maXhlZC1jb2x7ICAgIFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLmludmVudG9yeS10YWJsZXtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfSIsImhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbm1hdC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYmxlIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYmxlIHRib2R5IHRyIHRkLFxuLnRhYmxlIHRoZWFkIHRoLFxuLnRhYmxlIHRoZWFkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm91dHB1dCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kZWxldGUge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZG9uZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmVkaXQge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG5zcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XG4gIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmZpeGVkLWNvbCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmludmVudG9yeS10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: InventoryCreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryCreateItemComponent", function() { return InventoryCreateItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/PurchaseOrder */ "./src/app/api/controllers/PurchaseOrder.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");











let InventoryCreateItemComponent = class InventoryCreateItemComponent {
    constructor(dialog, fb, cookieService, purchaseOrderService, injector, sharedService, lookupService, staffService, apartmentService) {
        this.dialog = dialog;
        this.fb = fb;
        this.cookieService = cookieService;
        this.purchaseOrderService = purchaseOrderService;
        this.injector = injector;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.staffService = staffService;
        this.apartmentService = apartmentService;
        this.search = {};
        this.warehouseData = [];
        this.tempWarehouseData = [];
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.externalData = "";
        this.isExternalDataLoaded = false;
        this.externalDeleteId = "";
        this.errorMessage = "";
        this.isError = false;
        this.warehouseForm = {};
        this.row = {};
        this.uomData = [];
        this.itemData = [];
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
    }
    filterWareHouse(value) {
        this.warehouseData = this.tempWarehouseData.filter((item) => item.warehouseName.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
    // code  filter function 
    // onItemSelect(item: any) {
    // 	console.log(item);
    // 	console.log(this.selectedItems);
    // }
    // OnItemDeSelect(item: any) {
    // 	console.log(item);
    // 	console.log(this.selectedItems);
    // }
    // onSelectAll(items: any) {
    // 	console.log(items);
    // }
    // onDeSelectAll(items: any) {
    // 	console.log(items);
    // }
    ngOnInit() {
        this.getUomList();
        this.getMaterials();
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                if (this.deleteType == 'categoryDelete') {
                    let param = {};
                    param = {
                        categoryId: id,
                        deletedBy: parseInt(this.cookieService.get('userId'))
                    };
                    this.lookupService.deleteCategory(param).subscribe((res) => {
                        setTimeout(() => {
                            this.sharedService.setAlertMessage("Category deleted successfully");
                            this.sharedService.setUnitListDeleteIndex(null);
                            this.deleteType = '';
                        }, 500);
                    }, error => {
                        console.log(error);
                    });
                }
                else {
                    let param = {};
                    param = {
                        apartmentId: this.cookieService.get('apartmentId'),
                        warehouseId: id,
                        deleteBy: parseInt(this.cookieService.get('userId'))
                    };
                    this.purchaseOrderService.deleteWarehouse(param).subscribe((res) => {
                        this.getAllGetAllWarehouse();
                        setTimeout(() => {
                            this.sharedService.setAlertMessage("Warehouse deleted successfully");
                            this.sharedService.setUnitListDeleteIndex(null);
                        }, 500);
                    }, error => {
                        console.log(error);
                    });
                }
            }
        });
    }
    ngAfterViewInit() {
        // this.control = this.userTable.get('tableRows') as FormArray;
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
    deleteRow(index, data) {
        // const control = this.userTable.get('tableRows') as FormArray;
        // control.removeAt(index);
        console.log(data.warehouseId);
        this.modalService.showConfirmModal(data.warehouseId);
    }
    getUomList() {
        let queryParamBase = {};
        queryParamBase = {
            ApartmentId: this.cookieService.get('apartmentId'),
            LookupTypeId: 19,
        };
        this.lookupService.getLookupValueByLookupTypeId(queryParamBase).subscribe((res) => {
            if (res) {
                this.uomData = res ? res : [];
            }
        });
    }
    getMaterials() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
        };
        this.purchaseOrderService.getMaterialsByApartmentId(queryParamBase).subscribe((res) => {
            if (res) {
                this.itemData = res ? res : [];
            }
        });
    }
    getAllGetAllWarehouse() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            lookupTypeId: 19,
            subCategoryLookupTypeId: 68,
        };
        this.isAssetLoaded = true;
        this.purchaseOrderService.getAllWarehouseByApartmentId(queryParamBase).subscribe((res) => {
            if (res) {
                // this.warehouseData = [];
                this.warehouseData = res && res.length > 0 ? res : [];
                this.isAssetLoaded = false;
                this.tempWarehouseData = this.warehouseData;
                this.totalItems = this.warehouseData.length;
                if (this.totalItems > this.itemLimit) {
                    this.ItemEndIndex = this.itemLimit;
                }
                else {
                    this.ItemEndIndex = this.totalItems;
                }
            }
        });
    }
    addWareHouse(data) {
        let reqObj = {};
        reqObj = {
            "warehouseId": data.warehouseId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "warehouseName": data.warehouseName,
            "towerLocation": data.towerLocation,
            "unitOfMeasureId": null,
            "descripition": data.descripition,
            "owner": data.owner,
            "supervisor": data.supervisor,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": 0,
            "updatedOn": new Date().toISOString,
        };
        let params = {};
        params.warehouseobj = reqObj;
        this.purchaseOrderService.addWarehouse(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage("Warehouse added successfully");
                this.isAssetLoaded = false;
                this.row = {};
            }
        });
    }
    updateWareHouse(data) {
        let reqObj = {};
        reqObj = {
            "warehouseId": data.warehouseId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "warehouseName": data.warehouseName,
            "towerLocation": data.towerLocation,
            "unitOfMeasureId": null,
            "descripition": data.descripition,
            "owner": data.owner,
            "supervisor": data.supervisor,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString,
        };
        let params = {};
        params.warehouseobj = reqObj;
        this.purchaseOrderService.updateWarehouse(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage("Warehouse Updated successfully");
                this.isAssetLoaded = false;
                this.isEditRow = false;
                this.wareHouseIndex = -1;
            }
        });
    }
    deleteCategory(id, type) {
        this.deleteType = "categoryDelete";
        this.modalService.showConfirmModal(id);
    }
};
InventoryCreateItemComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_9__["StaffService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_10__["ApartmentService"] }
];
InventoryCreateItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-create-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-create-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-create-item.component.scss */ "./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
        src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_9__["StaffService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_10__["ApartmentService"]])
], InventoryCreateItemComponent);

// unitFieldType:string = "unitno";
// unitOrder:boolean = false;
// internalListData:any;
// internalData:string = "";
// isInternalDataLoaded:boolean = false;
// internalDeleteId:string = "";
// errorMessage:string = "";
// isError:boolean = false; 
// userTable: FormGroup;
// control: FormArray;
// mode: boolean;
// touchedRows: any;
// constructor(private fb: FormBuilder,
//    private cookieService:CookieService) { }
// ngOnInit(): void {
//   this.isInternalDataLoaded = true;
//   this.touchedRows = [];
//   this.userTable = this.fb.group({
//     tableRows: this.fb.array([])
//   });
//   this.addRow();
// }
// ngAfterViewInit() {
//   this.control = this.userTable.get('tableRows') as FormArray;
// }
// sortUnitData(type){
//   this.unitFieldType = type;
//   this.unitOrder = !this.unitOrder;
// }
// getFieldOrderBy(type) {
//   if(this.unitFieldType == type){
//     return this.unitOrder ? 'desc' : 'asc';
//   }
//   else return '';
// }
// isMobileView() {
//   return window.innerWidth <= 767 ? 'table-responsive' : '';
// }
// initiateForm(): FormGroup {
//   return this.fb.group({
//     serviceType: ['', Validators.required],
//     email: ['', [Validators.email, Validators.required]],
//     contactperson: ['', Validators.required],
//     phone: ['', [Validators.required, Validators.maxLength(10)]],
//     isEditable: [true]
//   });
// }
// addRow() {
//   const control =  this.userTable.get('tableRows') as FormArray;
//   control.push(this.initiateForm());
// }
// deleteRow(index: number) {
//   const control =  this.userTable.get('tableRows') as FormArray;
//   control.removeAt(index);
// }
// editRow(group: FormGroup) {
//   group.get('isEditable').setValue(true);
// }
// doneRow(group: FormGroup) {
//   group.get('isEditable').setValue(false);
// }
// saveUserDetails() {
//   console.log(this.userTable.value);
// }
// get getFormControls() {
//   const control = this.userTable.get('tableRows') as FormArray;
//   return control;
// }
// submitForm() {
//   const control = this.userTable.get('tableRows') as FormArray;
//   this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
//   console.log(this.touchedRows);
// }
// addMaterial(data){
//   let reqObj :any = {}
//   reqObj = {
//     "materialId": data.materialId,
//     "apartmentId": parseInt(this.cookieService.get('apartmentId')),
//     "materialNo": 0,
//     "unitOfMeasureId": 0,
//     "comments": "string",
//     "isActive": true,
//     "insertedBy": 0,
//     "insertedOn": "2020-05-29T02:43:49.517Z",
//     "updatedBy": 0,
//     "updatedOn": "2020-05-29T02:43:49.517Z",
//     "isInventoryManaged": true,
//     "sku": "string",
//     "preferredVendorId": 0,
//     "inventoryCategoryId": 0,
//     "inventorySubCategoryId": 0,
//     "materialType": 0,
//     "inventoryBlockId": 0,
//     "inventorystorageLocationId": 0,
//     "reorderTriggerlevel": 0,
//     "reorderQuantity": 0,
//     "serialNo": 0,
//     "notes": "string",
//     "customfields": "string",
//     "warehouseId": 0
//   }
// }
// }


/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-create/inventory-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-create/inventory-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktY3JlYXRlL2ludmVudG9yeS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-create/inventory-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-create/inventory-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: InventoryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryCreateComponent", function() { return InventoryCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Inventory */ "./src/app/api/controllers/Inventory.ts");
/* harmony import */ var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Vendor */ "./src/app/api/controllers/Vendor.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");








let InventoryCreateComponent = class InventoryCreateComponent {
    constructor(router, route, inventoryService, lookupService, vendorService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.inventoryService = inventoryService;
        this.lookupService = lookupService;
        this.vendorService = vendorService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEditInventory = false;
        this.isInventorySubmitted = true;
        this.isError = false;
        this.alertMessage = "";
    }
    onVendorChange(event) {
        if (event != null)
            this.inventory.vendorId = event.vendorId;
    }
    oninventoryCategoryChange(event) {
        if (event != null)
            this.inventory.inventoryCategoryId = event.lookupValueId;
    }
    submitAddInventoryForm(form) {
        this.isInventorySubmitted = false;
        if (!this.isEditInventory) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "inventoryName": this.inventory.inventoryName,
                "inventoryUnit": 1,
                "vendorId": parseInt(this.inventory.vendorId),
                "inventoryCategoryId": parseInt(this.inventory.inventoryCategoryId),
                "location": this.inventory.location,
                "reOrderTriggerLevel": this.inventory.reOrderTriggerLevel,
                "reOrderQuantity": this.inventory.reOrderQuantity,
                "notes": this.inventory.notes,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": null
            };
            let params = {
                inventory: details
            };
            this.inventoryService.addInventory(params).subscribe((res) => {
                if (res.message) {
                    this.isInventorySubmitted = true;
                    this.sharedService.setAlertMessage("Inventory added successfully");
                    this.router.navigate(['ams/inventory/view']);
                }
                else {
                    this.isInventorySubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isInventorySubmitted = true;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            let details = {
                "inventoryId": this.inventory.inventoryId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "inventoryName": this.inventory.inventoryName,
                "inventoryUnit": 1,
                "vendorId": parseInt(this.inventory.vendorId),
                "inventoryCategoryId": parseInt(this.inventory.inventoryCategoryId),
                "location": this.inventory.location,
                "reOrderTriggerLevel": this.inventory.reOrderTriggerLevel,
                "reOrderQuantity": this.inventory.reOrderQuantity,
                "notes": this.inventory.notes,
                "isActive": this.inventory.isActive,
                "insertedBy": this.inventory.insertedBy,
                "insertedOn": this.inventory.insertedOn,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString()
            };
            let params = {
                inventory: details
            };
            this.inventoryService.updateInventory(params).subscribe((res) => {
                if (res.message) {
                    this.sharedService.setAlertMessage("Inventory updated successfully");
                    this.router.navigate(['ams/inventory/view']);
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
    }
    ngOnInit() {
        this.inventory = {};
        if (this.route.params['value'].id != undefined) {
            this.isEditInventory = true;
            this.inventory.inventoryId = this.route.params['value'].id;
            this.inventoryService.getAllInventoryByInventoryId(this.inventory.inventoryId).subscribe((res) => {
                this.inventory = res[0];
            });
        }
        let vendorListparams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.vendorService.getVendorByApartmentId(vendorListparams).subscribe((res) => {
            this.vendorDataList = res;
        });
        let inventoryListparams = {
            LookupTypeId: 20
        };
        this.lookupService.getLookupValueByLookupTypeId(inventoryListparams).subscribe((res) => {
            this.inventoryCategoryDataList = res;
        }, error => {
        });
    }
};
InventoryCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__["InventoryService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
InventoryCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create/inventory-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-create.component.scss */ "./src/app/ams/inventory/components/inventory-create/inventory-create.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], InventoryCreateComponent);



/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktY3VycmVudC1kZXRhaWxzL2ludmVudG9yeS1jdXJyZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: InventoryCurrentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryCurrentDetailsComponent", function() { return InventoryCurrentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Inventory */ "./src/app/api/controllers/Inventory.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





let InventoryCurrentDetailsComponent = class InventoryCurrentDetailsComponent {
    constructor(inventoryService, cookieService) {
        this.inventoryService = inventoryService;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.unitAllocationHeader = [{
                text: 'Item No',
                datafield: 'slotType',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Item Desription',
                datafield: 'slotBlockNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Warehouse ID',
                datafield: 'tempBlock',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'Qty on Hand',
                datafield: 'tempUnit',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'Status',
                datafield: 'startDateTime',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }];
        //  var ticketListData = res.filter(data => {
        //   return data.isActive
        // })
        //  let localData=[
        //    {
        //     slotType:'101',
        //     slotBlockNo:'Waste Management',
        //     tempBlock:'05/15/2020',
        //     tempUnit:'05/15/2020',
        //     startDateTime:"On Time",
        //     endDateTime:"Responsilbe",
        //     slotRateType:"Active",
        //     Price:'1000'
        //    }
        //  ]
        //   this.gridSourceData = {
        //     localdata: localData,
        //     datatype: "array"
        //   }
        //   this.inventoryHistoryData = new jqx.dataAdapter(this.gridSourceData);
    }
    getCurrentInventory() {
        let params = {};
        params.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        this.inventoryService.getAllInventoryByApartmentId(params).subscribe((res) => {
            if (res) {
                console.log(res);
            }
            this.gridSourceData = {
                localdata: res.length > 0 ? res : [],
                datatype: "array"
            };
            this.inventoryHistoryData = new jqx.dataAdapter(this.gridSourceData);
        });
    }
};
InventoryCurrentDetailsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__["InventoryService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], InventoryCurrentDetailsComponent.prototype, "datagrid", void 0);
InventoryCurrentDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-current-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-current-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-current-details.component.scss */ "./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], InventoryCurrentDetailsComponent);



/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  background-color: #333;\n  color: #fff;\n  overflow: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\n\nmat-icon {\n  cursor: pointer;\n}\n\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.table {\n  padding: 20px;\n}\n\n.table tbody tr td,\n.table thead th,\n.table thead {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.output {\n  padding: 20px;\n}\n\n.delete {\n  color: red;\n}\n\n.done {\n  color: green;\n}\n\n.edit {\n  color: yellow;\n}\n\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n\n.stock-date {\n  border-color: rgba(0, 0, 0, 0.42);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: unset;\n}\n\n.save-icon {\n  padding-left: 7px;\n  padding-top: 27px;\n}\n\n.fa-times {\n  color: #ff3638;\n}\n\n.search-left {\n  left: 2px !important;\n}\n\n.pad-top {\n  padding-top: 22px;\n}\n\n@media only screen and (min-width: 300px) and (max-width: 767px) {\n  .card.table-card .card-body {\n    overflow: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LWluaXRpYWwtc3RvY2svaW52ZW50b3J5LWluaXRpYWwtc3RvY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktaW5pdGlhbC1zdG9jay9pbnZlbnRvcnktaW5pdGlhbC1zdG9jay5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLRTtFQUNFLGVBQUE7QUNGSjs7QURLRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNGSjs7QURLRTtFQUNFLGFBQUE7QUNGSjs7QURLRTs7O0VBR0UsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDRko7O0FES0U7RUFDRSxhQUFBO0FDRko7O0FES0U7RUFDRSxVQUFBO0FDRko7O0FES0U7RUFDRSxZQUFBO0FDRko7O0FES0U7RUFDRSxhQUFBO0FDRko7O0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBREtFO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRE1BO0VBQ0MsY0U1RFU7QUR5RFg7O0FES0E7RUFDRSxvQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7QUNGRjs7QURJRTtFQUVFO0lBQ0EsZ0JBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2ludmVudG9yeS9jb21wb25lbnRzL2ludmVudG9yeS1pbml0aWFsLXN0b2NrL2ludmVudG9yeS1pbml0aWFsLXN0b2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zY3NzL2ZvbnRzLnNjc3MnO1xuXG5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6MDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgXG4gIG1hdC1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5hY3Rpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAudGFibGUge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC50YWJsZSB0Ym9keSB0ciB0ZCxcbiAgLnRhYmxlIHRoZWFkIHRoLFxuICAudGFibGUgdGhlYWQge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICB9XG4gIFxuICAub3V0cHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAuZGVsZXRlIHtcbiAgICBjb2xvcjogcmVkICA7XG4gIH1cbiAgXG4gIC5kb25lIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gIH1cbiAgXG4gIC5lZGl0IHtcbiAgICBjb2xvcjogeWVsbG93O1xuICB9XG4gIHNwYW4udWktY29sdW1uLXJlc2l6ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gICAgcGFkZGluZzogMzBweDtcbiAgXG4gIH1cbiAgXG4gIC5zdG9jay1kYXRle1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwuNDIpO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG5cbiAgaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiB1bnNldDtcbn1cbi5zYXZlLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDdweDsgXG4gIHBhZGRpbmctdG9wOiAyN3B4O1xufVxuXG5cblxuLmZhLXRpbWVze1xuIGNvbG9yOiAkcy1yZWQtMDI7XG59XG4uc2VhcmNoLWxlZnR7XG4gIGxlZnQ6IDJweCAhaW1wb3J0YW50O1xufVxuXG4ucGFkLXRvcHtcbiAgcGFkZGluZy10b3A6IDIycHg7XG59XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZC50YWJsZS1jYXJkIHsgXG4gICAgLmNhcmQtYm9keSB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiB9XG4gIH1cbn0iLCJoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5tYXQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50YWJsZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50YWJsZSB0Ym9keSB0ciB0ZCxcbi50YWJsZSB0aGVhZCB0aCxcbi50YWJsZSB0aGVhZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5vdXRwdXQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGVsZXRlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRvbmUge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5lZGl0IHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnN0b2NrLWRhdGUge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogdW5zZXQ7XG59XG5cbi5zYXZlLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgcGFkZGluZy10b3A6IDI3cHg7XG59XG5cbi5mYS10aW1lcyB7XG4gIGNvbG9yOiAjZmYzNjM4O1xufVxuXG4uc2VhcmNoLWxlZnQge1xuICBsZWZ0OiAycHggIWltcG9ydGFudDtcbn1cblxuLnBhZC10b3Age1xuICBwYWRkaW5nLXRvcDogMjJweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jYXJkLnRhYmxlLWNhcmQgLmNhcmQtYm9keSB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgfVxufSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: InventoryInitialStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryInitialStockComponent", function() { return InventoryInitialStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/PurchaseOrder */ "./src/app/api/controllers/PurchaseOrder.ts");







let InventoryInitialStockComponent = class InventoryInitialStockComponent {
    constructor(router, injector, sharedService, cookieService, fb, purchaseOrderService) {
        this.router = router;
        this.injector = injector;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.fb = fb;
        this.purchaseOrderService = purchaseOrderService;
        this.row = {};
        this.search = {};
        this.assetList = [];
        this.categoryList = [];
        this.subCategoryList = [];
        this.selectedItems = [];
        this.assetSettings = {
            singleSelection: true,
            text: "Search Asset",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
        this.categorySettings = {
            singleSelection: true,
            text: "Search Category",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
        this.subCategorySettings = {
            singleSelection: true,
            text: "Search Sub Category",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.externalData = "";
        this.isExternalDataLoaded = false;
        this.externalDeleteId = "";
        this.errorMessage = "";
        this.isError = false;
    }
    // code  filter function 
    onItemSelect(item) {
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item) {
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items) {
        console.log(items);
    }
    onDeSelectAll(items) {
        console.log(items);
    }
    ngOnInit() {
        this.isExternalDataLoaded = true;
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        this.addRow();
        this.getInitalWarehouse();
        this.getAllGetAllWarehouse();
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                let param = {};
                param = {
                    apartmentId: this.cookieService.get('apartmentId'),
                    warehouseId: id,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.purchaseOrderService.deleteWarehouse(param).subscribe((res) => {
                    this.getInitalWarehouse();
                    setTimeout(() => {
                        this.sharedService.setAlertMessage("Stock deleted successfully");
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
    ngAfterViewInit() {
        this.control = this.userTable.get('tableRows');
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
    initiateForm() {
        return this.fb.group({
            warehouseId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            materialId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            initalStockQty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            stockasonDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            isEditable: [true]
        });
    }
    getInitalWarehouse() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
        };
        this.isAssetLoaded = true;
        this.purchaseOrderService.getAllInitialStockByApartmentId(queryParamBase).subscribe((res) => {
            if (res) {
                this.initalStockData = [];
                this.initalStockData = res && res.length > 0 ? res : [];
                this.isAssetLoaded = false;
                // tslint:disable-next-line:no-shadowed-variable
                //  const formcontrol =  this.userTable.get('tableRows') as FormArray;
                //  formcontrol.clear();
                //  this.initalStockData.forEach((element, index) => {
                // 	formcontrol.push(this.fb.group({
                // 	  warehouseId: [element.warehouseId],
                // 	  materialId: [element.materialId, Validators.required],
                //     initalStockQty: [element.initalStockQty, [Validators.required]], 
                //     stockasonDate: [element.stockasonDate, [Validators.required]], 
                // 	  isEditable: [false]
                // 	}));
                //   });
                //   this.addRow();
            }
        });
    }
    // getInitalWarehouse() {
    // 	let queryParamBase: any = {};
    // 	queryParamBase = {
    // 		apartmentId: this.cookieService.get('apartmentId')
    // 	};
    // 	this.isAssetLoaded = true;
    // 	this.purchaseOrderService.getAllInitialStockByApartmentId(queryParamBase).subscribe((res: any) => {
    // 		if (res) {
    // 			this.initalStockData = [];
    // 			this.initalStockData = res && res.length > 0 ? res:[];
    // 			this.isAssetLoaded = false;
    // 		}
    // 	});
    // }
    addRow() {
        const control = this.userTable.get('tableRows');
        control.push(this.initiateForm());
    }
    // deleteRow(index: number) {
    //   const control =  this.userTable.get('tableRows') as FormArray;
    //   control.removeAt(index);
    // }
    editRow(group) {
        group.get('isEditable').setValue(true);
    }
    doneRow(group) {
        group.get('isEditable').setValue(false);
        if (this.isEditRow == true) {
            this.updateWareHouse(group.value);
        }
        else {
            this.addWareHouse(group.value);
        }
    }
    saveUserDetails() {
        console.log(this.userTable.value);
    }
    get getFormControls() {
        const control = this.userTable.get('tableRows');
        return control;
    }
    submitForm() {
        const control = this.userTable.get('tableRows');
        this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
        console.log(this.touchedRows);
    }
    addWareHouse(data) {
        let reqObj = {};
        reqObj = {
            "initialStockId": 0,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "warehouseId": data.warehouseId,
            "materialId": data.materialId,
            "initalStockQty": data.initalStockQty,
            "stockasonDate": data.stockasonDate,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": 0,
            "updatedOn": new Date().toISOString,
        };
        let params = {};
        params.initialstock = reqObj;
        this.purchaseOrderService.addInitialStock(params).subscribe((res) => {
            console.log(res, res);
            if (res) {
                this.sharedService.setAlertMessage("Initial stock added successfully");
                this.isAssetLoaded = false;
            }
        });
    }
    getAllGetAllWarehouse() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            lookupTypeId: 19,
            subCategoryLookupTypeId: 68,
        };
        this.isAssetLoaded = true;
        this.purchaseOrderService.getAllWarehouseByApartmentId(queryParamBase).subscribe((res) => {
            if (res) {
                // this.warehouseData = [];
                this.warehouseData = res && res.length > 0 ? res : [];
                this.row = {};
            }
        });
    }
    deleteRow(index, data) {
        console.log(data.warehouseId);
        // this.modalService.showConfirmModal(data.warehouseId);
    }
    updateWareHouse(data) {
        let reqObj = {};
        reqObj = {
            "initialStockId": data.initialStockId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "warehouseId": data.warehouseId,
            "materialId": data.materialId,
            "initalStockQty": data.initialStockId,
            "stockasonDate": data.stockasonDate,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString
        };
        let params = {};
        params.initialstock = reqObj;
        this.purchaseOrderService.updateInitialStock(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage("Initial Stock Updated successfully");
                this.isAssetLoaded = false;
                this.isEditRow = false;
                this.wareHouseIndex = -1;
            }
        });
    }
};
InventoryInitialStockComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"] }
];
InventoryInitialStockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-initial-stock',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-initial-stock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-initial-stock.component.scss */ "./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"]])
], InventoryInitialStockComponent);



/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktaW50ZXJuYWwtdHJhbnNmZXIvaW52ZW50b3J5LWludGVybmFsLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: InventoryInternalTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryInternalTransferComponent", function() { return InventoryInternalTransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InventoryInternalTransferComponent = class InventoryInternalTransferComponent {
    constructor() {
        this.asset = {};
        this.itemlist = [];
        this.assetSettings = {
            singleSelection: true,
            text: "Search Asset",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
        this.itemlist = [
            { "id": 1, "itemName": "Spoon" },
            { "id": 2, "itemName": "Table" },
            { "id": 3, "itemName": "Water can" }
        ];
    }
    ;
    ngOnInit() {
    }
};
InventoryInternalTransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-internal-transfer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-internal-transfer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-internal-transfer.component.scss */ "./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InventoryInternalTransferComponent);



/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card .card {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n}\nmat-card .card .card-header {\n  font-weight: 600;\n}\nmat-card .card .card-header label {\n  margin: 0px;\n}\nmat-card .card .card-body {\n  margin: 0px;\n  padding-bottom: 0px;\n  padding-top: 10px;\n}\nmat-card .card .card-body label {\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LXJlY2VpdmluZy9pbnZlbnRvcnktcmVjZWl2aW5nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwic3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LXJlY2VpdmluZy9pbnZlbnRvcnktcmVjZWl2aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VDeURGLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUMzREY7QUZDUTtFQUNJLGdCQUFBO0FFQ1o7QUZDWTtFQUNJLFdBQUE7QUVDaEI7QUZHUTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FFRFo7QUZHWTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUVEaEIiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LXJlY2VpdmluZy9pbnZlbnRvcnktcmVjZWl2aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc2Nzcy9mb250cy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG5tYXQtY2FyZCB7XG4gICAgLmNhcmQge1xuICAgICAgICBAaW5jbHVkZSBkZXNwLXJlZ3VsYXIoKTtcblxuICAgICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJtYXQtY2FyZCAuY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cbm1hdC1jYXJkIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5tYXQtY2FyZCAuY2FyZCAuY2FyZC1oZWFkZXIgbGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cbm1hdC1jYXJkIC5jYXJkIC5jYXJkLWJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5tYXQtY2FyZCAuY2FyZCAuY2FyZC1ib2R5IGxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: InventoryReceivingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryReceivingComponent", function() { return InventoryReceivingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InventoryReceivingComponent = class InventoryReceivingComponent {
    constructor() {
        this.asset = {};
        this.assetSettings = {};
    }
    ngOnInit() {
        this.assetSettings = {
            singleSelection: true,
            text: "Search",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
    }
    onItemSelect(item) {
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item) {
        console.log(item);
        console.log(this.selectedItems);
    }
    selectedItems(selectedItems) {
        throw new Error("Method not implemented.");
    }
    onSelectAll(items) {
        console.log(items);
    }
    onDeSelectAll(items) {
        console.log(items);
    }
};
InventoryReceivingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-receiving',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-receiving.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-receiving.component.scss */ "./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InventoryReceivingComponent);



/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktcmVwb3J0cy9pbnZlbnRvcnktcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: InventoryReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryReportsComponent", function() { return InventoryReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InventoryReportsComponent = class InventoryReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
InventoryReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-reports.component.scss */ "./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InventoryReportsComponent);



/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-search {\n  position: relative;\n  top: 13px;\n  left: 23px;\n  padding-left: 10px;\n  font-size: 1.3rem;\n  color: #8391a1;\n}\n\n.card.table-card .card-body {\n  overflow: hidden;\n}\n\n.subCategory {\n  padding-top: 10px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  padding-bottom: 10px;\n}\n\n.subCategory li {\n  list-style-type: circle;\n}\n\n.wd-100 {\n  width: 100%;\n}\n\n.wd-50 {\n  width: 50%;\n}\n\nheader {\n  background-color: #333;\n  color: #fff;\n  overflow: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\n\nmat-icon {\n  cursor: pointer;\n}\n\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.table {\n  padding: 20px;\n}\n\n.table tbody tr td,\n.table thead th,\n.table thead {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.output {\n  padding: 20px;\n}\n\n.delete {\n  color: red;\n}\n\n.done {\n  color: green;\n}\n\n.edit {\n  color: yellow;\n}\n\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n\n.fa-floppy-o {\n  color: #54b941;\n}\n\n.cus-input {\n  border-radius: 8px;\n  border: 1px solid #dadada;\n  padding-left: 10px;\n  height: 30px;\n}\n\n.save-icon {\n  padding-left: 7px;\n  padding-top: 27px;\n}\n\n.fa-times {\n  color: #ff3638;\n}\n\n.search-left {\n  left: 2px !important;\n}\n\n.pad-top {\n  padding-top: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LXNldHVwL2ludmVudG9yeS1zZXR1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktc2V0dXAvaW52ZW50b3J5LXNldHVwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JDQ0M7RURBRCxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ0VTO0FDSmI7O0FGS0U7RUFDRSxnQkFBQTtBRUZKOztBRk1FO0VBQ0UsaUJBQUE7RUdxQkYscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFSHZCRSxvQkFBQTtBRUNKOztBRkFJO0VBQ0ksdUJBQUE7QUVFUjs7QUZFRTtFQUNFLFdBQUE7QUVDSjs7QUZFRTtFQUNFLFVBQUE7QUVDSjs7QUZHRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRUFKOztBRkdFO0VBQ0UsZUFBQTtBRUFKOztBRkdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBRUFKOztBRkdFO0VBQ0UsYUFBQTtBRUFKOztBRkdFOzs7RUFHRSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUVBSjs7QUZHRTtFQUNFLGFBQUE7QUVBSjs7QUZHRTtFQUNFLFVBQUE7QUVBSjs7QUZHRTtFQUNFLFlBQUE7QUVBSjs7QUZHRTtFQUNFLGFBQUE7QUVBSjs7QUZFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FFQ0o7O0FGVUU7RUFDRSxjQzlDTTtBQ3VDVjs7QUZTRTtFQUNFLGtCQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUVOTjs7QUZRRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUVMSjs7QUZVRTtFQUNDLGNDakdRO0FDMEZYOztBRlNFO0VBQ0Usb0JBQUE7QUVOSjs7QUZTRTtFQUNFLGlCQUFBO0FFTkoiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LXNldHVwL2ludmVudG9yeS1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3Njc3MvZm9udHMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuLnNldHVwLXNlYXJjaCB7XG4gICAgcG9zaXRpb246ICRyZWw7XG4gICAgdG9wOiAxM3B4O1xuICAgIGxlZnQ6IDIzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiRsaWdodC1ibHVlO1xuICB9XG4gICAgXG4gIC5jYXJkLnRhYmxlLWNhcmQgLmNhcmQtYm9keSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiBcbiAgXG4gIC5zdWJDYXRlZ29yeSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgQGluY2x1ZGUgaGVhZC1yZWd1bGFyKCk7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbGl7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xuICAgIH1cbiAgfVxuIFxuICAud2QtMTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLndkLTUwIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuXG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDowO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICBcbiAgbWF0LWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmFjdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC50YWJsZSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLnRhYmxlIHRib2R5IHRyIHRkLFxuICAudGFibGUgdGhlYWQgdGgsXG4gIC50YWJsZSB0aGVhZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gIH1cbiAgXG4gIC5vdXRwdXQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC5kZWxldGUge1xuICAgIGNvbG9yOiByZWQgIDtcbiAgfVxuICBcbiAgLmRvbmUge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxuICBcbiAgLmVkaXQge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gIH1cbiAgc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICBcbiAgfVxuXG4gIC8vIC50YWJsZS1jYXJkIHtcbiAgLy8gICBkaXNwbGF5OiBibG9jaztcbiAgLy8gICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIC8vIH1cbiAgLy8gLnRhYmxlIHRoLCAudGFibGUgdGQge1xuICAvLyAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudFxuICAvLyB9XG4gIC5mYS1mbG9wcHktb3tcbiAgICBjb2xvcjogJG0tZ3JlZW4gO1xuICB9XG4gIC5jdXMtaW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgfVxuICAuc2F2ZS1pY29uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDsgXG4gICAgcGFkZGluZy10b3A6IDI3cHg7XG4gIH1cblxuXG4gIFxuICAuZmEtdGltZXN7XG4gICBjb2xvcjogJHMtcmVkLTAyO1xuICB9XG4gIC5zZWFyY2gtbGVmdHtcbiAgICBsZWZ0OiAycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYWQtdG9we1xuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICB9XG4vLyAgIC50YWJsZSB0ZCB7XG4vLyAgICAgcGFkZGluZzogMTBweCAxOXB4O1xuLy8gfSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iLCIuc2V0dXAtc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IDIzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjODM5MWExO1xufVxuXG4uY2FyZC50YWJsZS1jYXJkIC5jYXJkLWJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3ViQ2F0ZWdvcnkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5zdWJDYXRlZ29yeSBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xufVxuXG4ud2QtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53ZC01MCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbm1hdC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYmxlIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYmxlIHRib2R5IHRyIHRkLFxuLnRhYmxlIHRoZWFkIHRoLFxuLnRhYmxlIHRoZWFkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm91dHB1dCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kZWxldGUge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZG9uZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmVkaXQge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG5zcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uZmEtZmxvcHB5LW8ge1xuICBjb2xvcjogIzU0Yjk0MTtcbn1cblxuLmN1cy1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5zYXZlLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgcGFkZGluZy10b3A6IDI3cHg7XG59XG5cbi5mYS10aW1lcyB7XG4gIGNvbG9yOiAjZmYzNjM4O1xufVxuXG4uc2VhcmNoLWxlZnQge1xuICBsZWZ0OiAycHggIWltcG9ydGFudDtcbn1cblxuLnBhZC10b3Age1xuICBwYWRkaW5nLXRvcDogMjJweDtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InventorySetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorySetupComponent", function() { return InventorySetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/PurchaseOrder */ "./src/app/api/controllers/PurchaseOrder.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_components_assets_add_setup_assets_add_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/assets-add-setup/assets-add-setup.component */ "./src/app/shared/components/assets-add-setup/assets-add-setup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");












let InventorySetupComponent = class InventorySetupComponent {
    constructor(dialog, fb, cookieService, purchaseOrderService, injector, sharedService, lookupService, staffService, apartmentService) {
        this.dialog = dialog;
        this.fb = fb;
        this.cookieService = cookieService;
        this.purchaseOrderService = purchaseOrderService;
        this.injector = injector;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.staffService = staffService;
        this.apartmentService = apartmentService;
        this.search = {};
        this.warehouseData = [];
        this.tempWarehouseData = [];
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.externalData = "";
        this.isExternalDataLoaded = false;
        this.externalDeleteId = "";
        this.errorMessage = "";
        this.isError = false;
        this.warehouseForm = {};
        this.row = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
    }
    filterCategoryItem(value) {
        this.inventoryCategoryList = this.tempCategoryList.filter((item) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
    filterWareHouse(value) {
        this.warehouseData = this.tempWarehouseData.filter((item) => item.warehouseName.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
    addSetUp(name, type, value, e) {
        console.log(type, value);
        const dialogRef = this.dialog.open(src_app_shared_components_assets_add_setup_assets_add_setup_component__WEBPACK_IMPORTED_MODULE_8__["AssetsAddSetupComponent"], {
            width: '70%',
            data: {
                'name': name,
                'type': type,
                'value': JSON.stringify(value)
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result) {
                this.getAllInventory();
            }
        });
    }
    // code  filter function 
    // onItemSelect(item: any) {
    // 	console.log(item);
    // 	console.log(this.selectedItems);
    // }
    // OnItemDeSelect(item: any) {
    // 	console.log(item);
    // 	console.log(this.selectedItems);
    // }
    // onSelectAll(items: any) {
    // 	console.log(items);
    // }
    // onDeSelectAll(items: any) {
    // 	console.log(items);
    // }
    ngOnInit() {
        this.getAllInventory();
        this.getAllStaff();
        this.getAllLocation();
        setTimeout(() => {
            this.getAllGetAllWarehouse();
        }, 1000);
        // this.isExternalDataLoaded = true;
        // this.touchedRows = [];
        // this.userTable = this.fb.group({
        // 	tableRows: this.fb.array([])
        // });
        // this.addRow();
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                if (this.deleteType == 'categoryDelete') {
                    let param = {};
                    param = {
                        categoryId: id,
                        deletedBy: parseInt(this.cookieService.get('userId'))
                    };
                    this.lookupService.deleteCategory(param).subscribe((res) => {
                        setTimeout(() => {
                            this.sharedService.setAlertMessage("Category deleted successfully");
                            this.sharedService.setUnitListDeleteIndex(null);
                            this.deleteType = '';
                            this.getAllInventory();
                        }, 500);
                    }, error => {
                        console.log(error);
                    });
                }
                else {
                    let param = {};
                    param = {
                        apartmentId: this.cookieService.get('apartmentId'),
                        warehouseId: id,
                        deleteBy: parseInt(this.cookieService.get('userId'))
                    };
                    this.purchaseOrderService.deleteWarehouse(param).subscribe((res) => {
                        this.getAllGetAllWarehouse();
                        setTimeout(() => {
                            this.sharedService.setAlertMessage("Warehouse deleted successfully");
                            this.sharedService.setUnitListDeleteIndex(null);
                        }, 500);
                    }, error => {
                        console.log(error);
                    });
                }
            }
        });
    }
    ngAfterViewInit() {
        // this.control = this.userTable.get('tableRows') as FormArray;
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
    // initiateForm(): FormGroup {
    // 	return this.fb.group({
    // 		warehouseId: ['', Validators.required],
    // 		warehouseName: ['', Validators.required],
    // 		towerLocation: ['', Validators.required],
    // 		descripition: ['', Validators.required],
    // 		owner: ['', Validators.required],
    // 		supervisor: ['', Validators.required],
    // 		isEditable: [true]
    // 	});
    // }
    // addRow() {
    // 	const control = this.userTable.get('tableRows') as FormArray;
    // 	control.push(this.initiateForm());
    // }
    deleteRow(index, data) {
        // const control = this.userTable.get('tableRows') as FormArray;
        // control.removeAt(index);
        console.log(data.warehouseId);
        this.modalService.showConfirmModal(data.warehouseId);
    }
    // editRow(group: FormGroup) {
    // 	group.get('isEditable').setValue(true);
    // 	console.log(group.value);
    // }
    // doneRow(group: FormGroup) {
    // 	group.get('isEditable').setValue(false);
    // 	if (this.isEditRow == true) {
    // 		this.updateWareHouse(group.value);
    // 	} else {
    // 		this.addWareHouse(group.value);
    // 	}
    // }
    // saveUserDetails() {
    // 	console.log(this.userTable.value);
    // }
    // get getFormControls() {
    // 	const control = this.userTable.get('tableRows') as FormArray;
    // 	return control;
    // }
    // submitForm() {
    // 	const control = this.userTable.get('tableRows') as FormArray;
    // 	this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    // 	console.log(this.touchedRows);
    // }
    // saveRow(row){
    // 	console.log(row);
    // }
    getAllGetAllWarehouse() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            lookupTypeId: 19,
            subCategoryLookupTypeId: 68,
        };
        this.isAssetLoaded = true;
        this.purchaseOrderService.getAllWarehouseByApartmentId(queryParamBase).subscribe((res) => {
            if (res) {
                // this.warehouseData = [];
                this.warehouseData = res && res.length > 0 ? res : [];
                this.isAssetLoaded = false;
                this.tempWarehouseData = this.warehouseData;
                this.totalItems = this.warehouseData.length;
                if (this.totalItems > this.itemLimit) {
                    this.ItemEndIndex = this.itemLimit;
                }
                else {
                    this.ItemEndIndex = this.totalItems;
                }
            }
        });
    }
    addWareHouse(data) {
        let reqObj = {};
        reqObj = {
            "warehouseId": data.warehouseId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "warehouseName": data.warehouseName,
            "towerLocation": data.towerLocation,
            "unitOfMeasureId": null,
            "descripition": data.descripition,
            "owner": data.owner,
            "supervisor": data.supervisor,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": 0,
            "updatedOn": new Date().toISOString,
        };
        let params = {};
        params.warehouseobj = reqObj;
        this.purchaseOrderService.addWarehouse(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage("Warehouse added successfully");
                this.isAssetLoaded = false;
                this.row = {};
            }
        });
    }
    updateWareHouse(data) {
        let reqObj = {};
        reqObj = {
            "warehouseId": data.warehouseId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "warehouseName": data.warehouseName,
            "towerLocation": data.towerLocation,
            "unitOfMeasureId": null,
            "descripition": data.descripition,
            "owner": data.owner,
            "supervisor": data.supervisor,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString,
        };
        let params = {};
        params.warehouseobj = reqObj;
        this.purchaseOrderService.updateWarehouse(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage("Warehouse Updated successfully");
                this.isAssetLoaded = false;
                this.isEditRow = false;
                this.wareHouseIndex = -1;
            }
        });
    }
    getAllStaff() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
        };
        this.isAssetLoaded = true;
        this.staffService.getAllStaffsByApartmentId(queryParamBase).subscribe((res) => {
            if (res) {
                this.isAssetLoaded = false;
                this.staffList = res ? res : [];
            }
        });
    }
    /**
     * get inventory
     */
    getAllInventory() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            lookupTypeId: 174,
            subCategoryLookupTypeId: 175,
        };
        this.isAssetLoaded = true;
        this.lookupService.getSubcategory(queryParamBase).subscribe((res) => {
            if (res) {
                this.isAssetLoaded = false;
                this.inventoryCategoryList = res ? res : [];
                this.tempCategoryList = this.inventoryCategoryList;
            }
        });
    }
    deleteCategory(id, type) {
        this.deleteType = "categoryDelete";
        this.modalService.showConfirmModal(id);
    }
    /**
     * edit sub category
     */
    editInventory(data) {
        let reqObj = {};
        reqObj.id = data.id;
        reqObj.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        reqObj.name = data.name;
        reqObj.subCategory = data && data.subCategory.length > 0 ? data.subCategory : [];
        reqObj.isActive = true,
            reqObj.insertedBy = parseInt(this.cookieService.get('userId'));
        reqObj.insertedOn = new Date();
        reqObj.updatedBy = parseInt(this.cookieService.get('userId'));
        reqObj.updatedOn = new Date();
        let params = {};
        params.model = reqObj;
        params.subcategoryLookupTypeId = 175;
        this.lookupService.upsertSubCategory(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage("Inventory sub types updated successfully");
                this.isAssetLoaded = false;
                this.getAllInventory();
                this.inventoryCurrIndex = -1;
            }
        });
    }
    getAllLocation() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
        };
        this.isAssetLoaded = true;
        this.apartmentService.getApartmentBlockByApartmentId(queryParamBase).subscribe((res) => {
            if (res) {
                this.isAssetLoaded = false;
                this.locationList = res ? res : [];
            }
        });
    }
};
InventorySetupComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_10__["StaffService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_11__["ApartmentService"] }
];
InventorySetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-setup.component.scss */ "./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_10__["StaffService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_11__["ApartmentService"]])
], InventorySetupComponent);

//   inventoryCategoryData:any;
//   isInventoryCategoryLoaded:boolean = false;
//   isInventoryCategorySubmitted:boolean = true;
//   isInventoryCategoryNew:boolean = false;
//   isInventoryCategoryUpdate:boolean = false;
//   inventoryCategory:string = "";
//   inventoryCategoryUpdateId:number = 0;
//   alertTicketMessage:string = "";
//   isCategoryError:boolean = false; 
//   isCategorySuccess:boolean = false; 
//   inventoryDataList:any;
//   constructor(
//     private inventoryService: InventoryService,
//   	private lookupService: LookupService,
//     private sharedService:SharedService,
//     private cookieService:CookieService
//   ) { }
//   addNewInventoryCategory(){
//   	this.isInventoryCategoryNew = true;
//   	this.isInventoryCategoryUpdate = false;
//   }
//   updateInventoryCategory(item){
//   	this.isInventoryCategoryUpdate = true;
//   	this.isInventoryCategoryNew = false;
//   	this.inventoryCategory = item.lookupValueName;
//   	this.inventoryCategoryUpdateId = item.lookupValueId;
//   }
//   deleteInventoryCategory(item, index){
//   	this.isInventoryCategoryLoaded = false;
//   	var params = {
//       lookupValueId: item.lookupValueId,
//       updateUserId: parseInt(this.cookieService.get('userId'))
//     }
//   	this.lookupService.deleteLookupvalue(params).subscribe((res:any) => {
//   	  this.inventoryCategoryData.splice(index, 1);
// 	  this.isInventoryCategoryLoaded = true;
// 	});
//   }
//   removeCategoryBox(){
//   	this.isInventoryCategoryNew = false;
//   	this.isInventoryCategoryUpdate = false;
//   	this.isCategoryError = false;
//   }
//   getInventoryList(id){
//     var data = _.filter( this.inventoryDataList, function( item ) {
//       if(item.inventoryCategoryId === id)
//         return item;
//     });
//     if(data === undefined || data.length == 0){
//       return 0;
//     }
//     else {
//       return data.length;
//     }
//   }
//   submitInventoryCategoryForm(form) {
//   	this.isInventoryCategorySubmitted = false;
//   	if(this.isInventoryCategoryNew) {
//   		let details = {
// 		  "lookupTypeId": 20, // inventory category lookup id
// 		  "lookupValueName": this.inventoryCategory,
// 		  "description": this.inventoryCategory,
// 		  "isActive": true,
// 		  "insertedBy": parseInt(this.cookieService.get('userId')),
// 		  "insertedOn": "2019-11-20T16:51:24.105Z",
// 		  "updatedBy": 0,
// 		  "updatedOn": "2019-11-20T16:51:24.105Z"
// 		}
// 		let params = {
// 			lookupvalue: details
// 		}
// 		this.lookupService.addLookupValue(params).subscribe((res:any) => {
// 	  		if(res.message) {
// 				let params = {
// 					LookupTypeId: 20
// 				}
// 	  			this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res:any) => {
// 	  				this.isInventoryCategorySubmitted = true;
// 		  			this.isCategorySuccess = true;
// 		          	this.alertTicketMessage = "Category Added Successfully!";
// 		          	this.inventoryCategoryData = res.filter(item => {
// 	                	return item.isActive;
// 	              	});	
// 	  			});
// 	  		}
// 	  		else {
// 	  			this.isInventoryCategorySubmitted = true;	
// 	          	this.isCategoryError = true;
// 	          	this.alertTicketMessage = res.errorMessage;
// 	  		}
//   		});
//   	}
//   	else {
//   		let details = {
//   		  "lookupValueId": this.inventoryCategoryUpdateId,
// 		  "lookupTypeId": 20, // inventory category lookup id
// 		  "lookupValueName": this.inventoryCategory,
// 		  "description": this.inventoryCategory,
// 		  "isActive": true,
// 		  "insertedBy": 0,
// 		  "insertedOn": "2019-11-20T16:51:24.105Z",
// 		  "updatedBy": parseInt(this.cookieService.get('userId')),
// 		  "updatedOn": "2019-11-20T16:51:24.105Z"
// 		}
// 		let params = {
// 			lookupvalue: details
// 		}
// 		this.lookupService.updateLookupValue(params).subscribe((res:any) => {
// 	  		if(res.message) {
// 				let params = {
// 					LookupTypeId: 20
// 				}
// 	  			this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res:any) => {
// 	  				this.isInventoryCategorySubmitted = true;
// 		  			this.isCategorySuccess = true;
// 		          	this.alertTicketMessage = "Category Updated Successfully!";
// 		          	this.inventoryCategoryData = res.filter(item => {
// 	                	return item.isActive;
// 	              	});	
// 	  			});
// 	  		}
// 	  		else {
// 	  			this.isInventoryCategorySubmitted = true;	
// 	          	this.isCategoryError = true;
// 	          	this.alertTicketMessage = res.errorMessage;
// 	  		}
//   		});
//   	}
//   }
//   ngOnInit() {
// 	let params = {
// 		LookupTypeId: 20
// 	}
//   	this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res:any) => {
//   		this.isInventoryCategoryLoaded = true;
//   		this.inventoryCategoryData = res.filter(item => {
//         	return item.isActive;
//       });
//   	});
// 	let inventoryDataList = {
// 		apartmentId: parseInt(this.cookieService.get('apartmentId'))
// 	}
//     this.inventoryService.getAllInventoryByApartmentId(inventoryDataList).subscribe((res:any) => {
//       this.inventoryDataList = res.filter(item => {
//           return item.isActive;
//       });
//     });
//   }
// }


/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card .card {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n}\nmat-card .card .card-header {\n  font-weight: 600;\n}\nmat-card .card .card-header label {\n  margin: 0px;\n}\nmat-card .card .card-body {\n  margin: 0px;\n  padding-bottom: 0px;\n  padding-top: 10px;\n}\nmat-card .card .card-body label {\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LXN0b2NrLWFkanVzdG1lbnRzL2ludmVudG9yeS1zdG9jay1hZGp1c3RtZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyIsInNyYy9hcHAvYW1zL2ludmVudG9yeS9jb21wb25lbnRzL2ludmVudG9yeS1zdG9jay1hZGp1c3RtZW50cy9pbnZlbnRvcnktc3RvY2stYWRqdXN0bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUN5REYsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQzNERjtBRkNRO0VBQ0ksZ0JBQUE7QUVDWjtBRkNZO0VBQ0ksV0FBQTtBRUNoQjtBRkdRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUVEWjtBRkdZO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBRURoQiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktc3RvY2stYWRqdXN0bWVudHMvaW52ZW50b3J5LXN0b2NrLWFkanVzdG1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc2Nzcy9mb250cy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG5tYXQtY2FyZCB7XG4gICAgLmNhcmQge1xuICAgICAgICBAaW5jbHVkZSBkZXNwLXJlZ3VsYXIoKTtcblxuICAgICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJtYXQtY2FyZCAuY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cbm1hdC1jYXJkIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5tYXQtY2FyZCAuY2FyZCAuY2FyZC1oZWFkZXIgbGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cbm1hdC1jYXJkIC5jYXJkIC5jYXJkLWJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5tYXQtY2FyZCAuY2FyZCAuY2FyZC1ib2R5IGxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: InventoryStockAdjustmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryStockAdjustmentsComponent", function() { return InventoryStockAdjustmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InventoryStockAdjustmentsComponent = class InventoryStockAdjustmentsComponent {
    constructor() {
        this.asset = {};
        this.assetSettings = {};
    }
    ngOnInit() {
        this.assetSettings = {
            singleSelection: true,
            text: "Search",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
    }
    onItemSelect(item) {
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item) {
        console.log(item);
        console.log(this.selectedItems);
    }
    selectedItems(selectedItems) {
        throw new Error("Method not implemented.");
    }
    onSelectAll(items) {
        console.log(items);
    }
    onDeSelectAll(items) {
        console.log(items);
    }
};
InventoryStockAdjustmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-stock-adjustments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-stock-adjustments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-stock-adjustments.component.scss */ "./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InventoryStockAdjustmentsComponent);



/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-update/inventory-update.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-update/inventory-update.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktdXBkYXRlL2ludmVudG9yeS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-update/inventory-update.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-update/inventory-update.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: InventoryUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryUpdateComponent", function() { return InventoryUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InventoryUpdateComponent = class InventoryUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
};
InventoryUpdateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-update',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-update/inventory-update.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-update.component.scss */ "./src/app/ams/inventory/components/inventory-update/inventory-update.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InventoryUpdateComponent);



/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktdmVuZG9yLW1hbmFnZW1lbnQvaW52ZW50b3J5LXZlbmRvci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: InventoryVendorManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryVendorManagementComponent", function() { return InventoryVendorManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InventoryVendorManagementComponent = class InventoryVendorManagementComponent {
    constructor() {
        this.asset = {};
        this.materialSettings = {};
        this.selectedItems = [];
    }
    ngOnInit() {
        this.materialSettings = {
            singleSelection: true,
            text: "Search Asset",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
    }
    onItemSelect(item) {
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item) {
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items) {
        console.log(items);
    }
    onDeSelectAll(items) {
        console.log(items);
    }
};
InventoryVendorManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-vendor-management',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-vendor-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-vendor-management.component.scss */ "./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InventoryVendorManagementComponent);



/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-view/inventory-view.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-view/inventory-view.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktdmlldy9pbnZlbnRvcnktdmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/inventory/components/inventory-view/inventory-view.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/inventory/components/inventory-view/inventory-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InventoryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryViewComponent", function() { return InventoryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Inventory */ "./src/app/api/controllers/Inventory.ts");
/* harmony import */ var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Vendor */ "./src/app/api/controllers/Vendor.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");











let InventoryViewComponent = class InventoryViewComponent {
    constructor(injector, dialog, router, route, inventoryService, vendorService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.inventoryService = inventoryService;
        this.vendorService = vendorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.inventoryCategory = "";
        this.isInventoryCategoryLoaded = false;
        this.isInventoryCategorySelected = false;
        this.isInventoryLoaded = false;
        this.inventoryData = "";
        this.unitFieldType = "inventoryName";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.inventoryCategoryName = "";
        this.selectedInput = "";
        this.columnField = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.getAllInventories();
            }
        });
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
    onInventoryCatregoryChange(event) {
        if (event != null) {
            this.inventoryCategory = event.lookupValueId;
            this.router.navigateByUrl('/ams/inventory/view/' + parseInt(this.inventoryCategory));
        }
        else {
            this.router.navigateByUrl('/ams/inventory/view');
        }
    }
    getVendorName(inventory, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.vendorListData, function (item) {
            if (item.vendorId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.inventoryListData.map(obj => {
                if (obj.inventoryId == inventory.inventoryId) {
                    obj.vendorName = data[0].vendorName;
                }
            });
            return data[0].vendorName;
        }
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    getInventoryCategoryName(id) {
        this.router.navigateByUrl('/ams/inventory/view/' + id);
    }
    showConfirmModal(id) {
        this.modalService.showConfirmModal(id);
    }
    getAllInventories() {
        this.isInventoryLoaded = false;
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.inventoryService.getAllInventoryByApartmentId(params).subscribe((res) => {
            this.inventoryListData = res.filter(item => {
                return item.isActive;
            });
            if (this.route.params['value'].id != undefined) {
                this.inventoryListData = this.inventoryListData.filter(item => {
                    return item.inventoryCategoryId == this.route.params['value'].id && item.isActive;
                });
                underscore__WEBPACK_IMPORTED_MODULE_10__["each"](this.inventoryCategoryData, (item, index) => {
                    if (item.lookupValueId == this.route.params['value'].id) {
                        this.inventoryCategoryName = item.lookupValueName;
                        this.inventoryCategory = item.lookupValueId;
                    }
                    this.isInventoryLoaded = true;
                });
            }
            this.totalItems = this.inventoryListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isInventoryLoaded = true;
        });
    }
    ngOnInit() {
        this.inventory = {};
        let params = {
            LookupTypeId: 20
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.inventoryCategoryData = res.filter(item => {
                return item.isActive;
            });
            this.getAllInventories();
        });
        let vendorParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.vendorService.getVendorByApartmentId(vendorParams).subscribe((res) => {
            this.vendorListData = res;
        });
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                var params = {
                    inventoryId: id,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.inventoryService.deleteInventory(params).subscribe((res) => {
                    underscore__WEBPACK_IMPORTED_MODULE_10__["each"](this.inventoryListData, (type) => {
                        if (type.inventoryId == id) {
                            type.isActive = false;
                        }
                    });
                    setTimeout(() => {
                        this.inventoryListData = this.inventoryListData.filter((type) => type.id !== id);
                        this.totalItems = this.inventoryListData.length;
                        this.sharedService.setAlertMessage("Inventory deleted");
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
};
InventoryViewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_4__["InventoryService"] },
    { type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__["VendorService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] }
];
InventoryViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-view/inventory-view.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-view.component.scss */ "./src/app/ams/inventory/components/inventory-view/inventory-view.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_4__["InventoryService"],
        src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__["VendorService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]])
], InventoryViewComponent);



/***/ }),

/***/ "./src/app/ams/inventory/inventory-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ams/inventory/inventory-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InventoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryRoutingModule", function() { return InventoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_inventory_setup_inventory_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/inventory-setup/inventory-setup.component */ "./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.ts");
/* harmony import */ var _components_inventory_create_inventory_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inventory-create/inventory-create.component */ "./src/app/ams/inventory/components/inventory-create/inventory-create.component.ts");
/* harmony import */ var _components_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inventory-view/inventory-view.component */ "./src/app/ams/inventory/components/inventory-view/inventory-view.component.ts");
/* harmony import */ var _components_inventory_reports_inventory_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inventory-reports/inventory-reports.component */ "./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.ts");
/* harmony import */ var _components_inventory_current_details_inventory_current_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inventory-current-details/inventory-current-details.component */ "./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.ts");
/* harmony import */ var _components_inventory_vendor_management_inventory_vendor_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inventory-vendor-management/inventory-vendor-management.component */ "./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.ts");
/* harmony import */ var _components_inventory_initial_stock_inventory_initial_stock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inventory-initial-stock/inventory-initial-stock.component */ "./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.ts");
/* harmony import */ var _components_inventory_internal_transfer_inventory_internal_transfer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/inventory-internal-transfer/inventory-internal-transfer.component */ "./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.ts");
/* harmony import */ var _components_inventory_receiving_inventory_receiving_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inventory-receiving/inventory-receiving.component */ "./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.ts");
/* harmony import */ var _components_inventory_create_item_inventory_create_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/inventory-create-item/inventory-create-item.component */ "./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.ts");
/* harmony import */ var _components_inventory_stock_adjustments_inventory_stock_adjustments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/inventory-stock-adjustments/inventory-stock-adjustments.component */ "./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.ts");














const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_inventory_setup_inventory_setup_component__WEBPACK_IMPORTED_MODULE_3__["InventorySetupComponent"] },
    { path: 'create-inventory', component: _components_inventory_create_inventory_create_component__WEBPACK_IMPORTED_MODULE_4__["InventoryCreateComponent"] },
    { path: 'edit-inventory/:id', component: _components_inventory_create_inventory_create_component__WEBPACK_IMPORTED_MODULE_4__["InventoryCreateComponent"] },
    { path: 'current-inventory', component: _components_inventory_current_details_inventory_current_details_component__WEBPACK_IMPORTED_MODULE_7__["InventoryCurrentDetailsComponent"] },
    { path: 'vendor-management', component: _components_inventory_vendor_management_inventory_vendor_management_component__WEBPACK_IMPORTED_MODULE_8__["InventoryVendorManagementComponent"] },
    { path: 'initial-stock', component: _components_inventory_initial_stock_inventory_initial_stock_component__WEBPACK_IMPORTED_MODULE_9__["InventoryInitialStockComponent"] },
    { path: 'internal-transfer', component: _components_inventory_internal_transfer_inventory_internal_transfer_component__WEBPACK_IMPORTED_MODULE_10__["InventoryInternalTransferComponent"] },
    { path: 'receiving', component: _components_inventory_receiving_inventory_receiving_component__WEBPACK_IMPORTED_MODULE_11__["InventoryReceivingComponent"] },
    { path: 'create-item', component: _components_inventory_create_item_inventory_create_item_component__WEBPACK_IMPORTED_MODULE_12__["InventoryCreateItemComponent"] },
    { path: 'stock-adjustments', component: _components_inventory_stock_adjustments_inventory_stock_adjustments_component__WEBPACK_IMPORTED_MODULE_13__["InventoryStockAdjustmentsComponent"] },
    { path: 'view', component: _components_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_5__["InventoryViewComponent"] },
    { path: 'view/:id', component: _components_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_5__["InventoryViewComponent"] },
    { path: 'reports', component: _components_inventory_reports_inventory_reports_component__WEBPACK_IMPORTED_MODULE_6__["InventoryReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let InventoryRoutingModule = class InventoryRoutingModule {
};
InventoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InventoryRoutingModule);



/***/ }),

/***/ "./src/app/ams/inventory/inventory.component.scss":
/*!********************************************************!*\
  !*** ./src/app/ams/inventory/inventory.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/inventory/inventory.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ams/inventory/inventory.component.ts ***!
  \******************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InventoryComponent = class InventoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
InventoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/inventory.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory.component.scss */ "./src/app/ams/inventory/inventory.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InventoryComponent);



/***/ }),

/***/ "./src/app/ams/inventory/inventory.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ams/inventory/inventory.module.ts ***!
  \***************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-routing.module */ "./src/app/ams/inventory/inventory-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory.component */ "./src/app/ams/inventory/inventory.component.ts");
/* harmony import */ var _components_inventory_setup_inventory_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inventory-setup/inventory-setup.component */ "./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.ts");
/* harmony import */ var _components_inventory_create_inventory_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inventory-create/inventory-create.component */ "./src/app/ams/inventory/components/inventory-create/inventory-create.component.ts");
/* harmony import */ var _components_inventory_update_inventory_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inventory-update/inventory-update.component */ "./src/app/ams/inventory/components/inventory-update/inventory-update.component.ts");
/* harmony import */ var _components_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inventory-view/inventory-view.component */ "./src/app/ams/inventory/components/inventory-view/inventory-view.component.ts");
/* harmony import */ var _components_inventory_reports_inventory_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/inventory-reports/inventory-reports.component */ "./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.ts");
/* harmony import */ var _components_inventory_current_details_inventory_current_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inventory-current-details/inventory-current-details.component */ "./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.ts");
/* harmony import */ var _components_inventory_vendor_management_inventory_vendor_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/inventory-vendor-management/inventory-vendor-management.component */ "./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _components_inventory_create_item_inventory_create_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/inventory-create-item/inventory-create-item.component */ "./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.ts");
/* harmony import */ var _components_inventory_initial_stock_inventory_initial_stock_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/inventory-initial-stock/inventory-initial-stock.component */ "./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.ts");
/* harmony import */ var _components_inventory_internal_transfer_inventory_internal_transfer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/inventory-internal-transfer/inventory-internal-transfer.component */ "./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.ts");
/* harmony import */ var _components_inventory_receiving_inventory_receiving_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/inventory-receiving/inventory-receiving.component */ "./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.ts");
/* harmony import */ var _components_inventory_stock_adjustments_inventory_stock_adjustments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/inventory-stock-adjustments/inventory-stock-adjustments.component */ "./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");




















let InventoryModule = class InventoryModule {
};
InventoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _inventory_component__WEBPACK_IMPORTED_MODULE_5__["InventoryComponent"],
            _components_inventory_setup_inventory_setup_component__WEBPACK_IMPORTED_MODULE_6__["InventorySetupComponent"],
            _components_inventory_create_inventory_create_component__WEBPACK_IMPORTED_MODULE_7__["InventoryCreateComponent"],
            _components_inventory_update_inventory_update_component__WEBPACK_IMPORTED_MODULE_8__["InventoryUpdateComponent"],
            _components_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_9__["InventoryViewComponent"],
            _components_inventory_reports_inventory_reports_component__WEBPACK_IMPORTED_MODULE_10__["InventoryReportsComponent"],
            _components_inventory_current_details_inventory_current_details_component__WEBPACK_IMPORTED_MODULE_11__["InventoryCurrentDetailsComponent"],
            _components_inventory_vendor_management_inventory_vendor_management_component__WEBPACK_IMPORTED_MODULE_12__["InventoryVendorManagementComponent"],
            _components_inventory_create_item_inventory_create_item_component__WEBPACK_IMPORTED_MODULE_14__["InventoryCreateItemComponent"],
            _components_inventory_initial_stock_inventory_initial_stock_component__WEBPACK_IMPORTED_MODULE_15__["InventoryInitialStockComponent"],
            _components_inventory_internal_transfer_inventory_internal_transfer_component__WEBPACK_IMPORTED_MODULE_16__["InventoryInternalTransferComponent"],
            _components_inventory_receiving_inventory_receiving_component__WEBPACK_IMPORTED_MODULE_17__["InventoryReceivingComponent"],
            _components_inventory_stock_adjustments_inventory_stock_adjustments_component__WEBPACK_IMPORTED_MODULE_18__["InventoryStockAdjustmentsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventoryRoutingModule"],
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["AngularMultiSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"]
        ],
        bootstrap: [_inventory_component__WEBPACK_IMPORTED_MODULE_5__["InventoryComponent"]]
    })
], InventoryModule);



/***/ })

}]);
//# sourceMappingURL=inventory-inventory-module-es2015.js.map