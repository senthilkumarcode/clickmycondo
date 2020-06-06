function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventoryCreateItemInventoryCreateItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-loader *ngIf=\"!isInternalDataLoaded\"></app-loader> -->\n\n<div class=\"card table-card mb-30\" *ngIf=\"check\">\n  <div class=\"card-header\">\n    <div class=\"float-left pb-4\">\n      <h5>Create Item<span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    </div>\n  </div>\n  <div class=\"card-body p-0\">\n    <form [formGroup]=\"userTable\">\n      <table class=\"table\" [ngClass]=\"isMobileView()\">\n        <thead>\n          <tr>\n            <th scope=\"col\" (click)=\"sortUnitData('serviceType')\">Item No <span\n                [ngClass]=\"getFieldOrderBy('serviceType')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('phone')\">Item Name <span [ngClass]=\"getFieldOrderBy('phone')\"></span>\n            </th>\n            <th scope=\"col\" (click)=\"sortUnitData('contactperson')\">SKU <span\n                [ngClass]=\"getFieldOrderBy('contactperson')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">UOM <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Vendor <span [ngClass]=\"getFieldOrderBy('email')\"></span>\n            </th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Category ID <span\n                [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Sub Category <span\n                [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Type <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Warehouse ID <span\n                [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Re-order Trigger Point <span\n                [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Re-order Qty <span\n                [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('email')\">Notes <span [ngClass]=\"getFieldOrderBy('email')\"></span>\n            </th>\n            <th scope=\"col\">Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls ; let i=index\">\n            <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"i\">\n              <td>\n                <mat-form-field>\n                  <mat-select formControlName=\"serviceType\">\n                    <mat-option value=\"Laundery\">Laundery</mat-option>\n                    <mat-option value=\"PhotoCopy\">Photo Copy</mat-option>\n                    <mat-option value=\"Ticketing\">Ticketing</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field>\n                  <input matInput type=\"number\" formControlName=\"phone\">\n\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field>\n                  <input matInput type=\"number\" formControlName=\"phone\">\n                </mat-form-field>\n              </td>\n\n              <td>\n                <mat-form-field>\n                  <mat-select formControlName=\"serviceType\">\n                  </mat-select>\n                </mat-form-field>\n              </td>\n\n              <td>\n                <mat-form-field>\n                  <mat-select formControlName=\"serviceType\">\n                  </mat-select>\n\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field>\n                  <input matInput type=\"number\" formControlName=\"phone\">\n\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field>\n                  <input matInput type=\"number\" formControlName=\"phone\">\n\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field>\n                  <input matInput type=\"number\" formControlName=\"phone\">\n\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field>\n                  <input matInput type=\"number\" formControlName=\"phone\">\n\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field>\n                  <input matInput type=\"number\" formControlName=\"phone\">\n\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field>\n                  <input matInput type=\"number\" formControlName=\"phone\">\n\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field>\n                  <input matInput type=\"number\" formControlName=\"phone\">\n\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-icon class=\"delete\" (click)=\"deleteRow(i)\">delete_forever</mat-icon>\n                <mat-icon class=\"done\" (click)=\"doneRow(group)\">done</mat-icon>\n\n              </td>\n            </tr>\n            <tr *ngIf=\"!group.get('isEditable').value\">\n              <td>\n                {{group.get('serviceType').value}}\n              </td>\n              <td>\n                {{group.get('phone').value}}\n              </td>\n              <td>\n                {{group.get('contactperson').value}}\n              </td>\n\n              <td>\n                {{group.get('email').value}}\n              </td>\n              <td>\n                {{group.get('email').value}}\n              </td>\n              <td>\n                {{group.get('email').value}}\n              </td>\n              <td>\n                {{group.get('email').value}}\n              </td>\n              <td>\n                {{group.get('email').value}}\n              </td>\n              <td>\n                {{group.get('email').value}}\n              </td>\n              <td>\n                {{group.get('email').value}}\n              </td>\n              <td>\n                {{group.get('email').value}}\n              </td>\n              <td>\n                {{group.get('email').value}}\n              </td>\n              <td>\n                <mat-icon class=\"edit\" (click)=\"editRow(group)\">edit</mat-icon>\n              </td>\n            </tr>\n          </ng-container>\n        </tbody>\n\n      </table>\n      <div class=\"action-container\">\n        <button mat-raised-button type=\"submit\" (click)=\"addRow()\">Add row</button>\n        <button mat-raised-button [disabled]=\"userTable.invalid\" type=\"submit\" (click)=\"submitForm()\">Submit</button>\n      </div>\n    </form>\n\n    <!-- <div class=\"output\">\n                <p>Form Data:  {{userTable.value | json}}</p>\n                  <p>Is Valid: {{userTable.valid}}</p>\n              </div> -->\n  </div>\n\n</div>\n\n\n<div class=\"card table-card mb-30\">\n  <div class=\"card-header\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-6 d-flex align-items-center\">\n        <h5>Create Item<span class=\"badge lime-green\">{{totalItems}}</span></h5>\n      </div>\n      <div class=\"col-sm-6 d-flex align-items-center justify-content-end\">\n        <li class=\" d-flex search \">\n          <i class=\"fa fa-search setup-search search-left\" aria-hidden=\"true\"></i>\n          <input type=\"text\" class=\"form-control pl-5 \" placeholder=\"Search...\" [(ngModel)]=\"searchWarehouse\">\n        </li>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body p-0\">\n    <form>\n      <div class=\"inventory-table\">\n        <table class=\"table\" [ngClass]=\"isMobileView()\">\n          <thead>\n            <tr>\n              <th scope=\"col\" (click)=\"sortUnitData('serviceType')\">Item No <span\n                  [ngClass]=\"getFieldOrderBy('serviceType')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('phone')\">Item Name <span\n                  [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('contactperson')\">SKU <span\n                  [ngClass]=\"getFieldOrderBy('contactperson')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('email')\">UOM <span [ngClass]=\"getFieldOrderBy('email')\"></span>\n              </th>\n              <th scope=\"col\" (click)=\"sortUnitData('email')\">Vendor <span [ngClass]=\"getFieldOrderBy('email')\"></span>\n              </th>\n              <th scope=\"col\" (click)=\"sortUnitData('email')\">Category ID <span\n                  [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('email')\">Sub Category <span\n                  [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('email')\">Type <span [ngClass]=\"getFieldOrderBy('email')\"></span>\n              </th>\n              <th scope=\"col\" (click)=\"sortUnitData('email')\">Warehouse ID <span\n                  [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('email')\">Re-order Trigger Point <span\n                  [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('email')\">Re-order Qty <span\n                  [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('email')\">Notes <span [ngClass]=\"getFieldOrderBy('email')\"></span>\n              </th>\n              <th scope=\"col\" class=\"fixed-col\">Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container>\n              <!-- <form #warehouseForm = \"ngForm\" name=\"warehouseForm\"  novalidate> -->\n              <tr>\n                <td>\n                  <!-- <mat-form-field class=\"w-100\">\n                  <mat-select name=\"warLocation\" [(ngModel)]=\"row.towerLocation\" >\n                    <mat-option *ngFor=\"let item of  initalStockData\"\n                      [value]=\"item.apartmentBlockId\">\n                      {{ item.description }}</mat-option>\n                  </mat-select>\n                </mat-form-field> -->\n                </td>\n                <td>\n                  <mat-form-field class=\"w-100\">\n                    <input matInput type=\"text\" name=\"itemMaterialNo\" [(ngModel)]=\"row.material1\">\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field class=\"w-100\">\n                    <input matInput type=\"text\" name=\"itemSku\" [(ngModel)]=\"row.sku\">\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field class=\"w-100\">\n                    <mat-select name=\"unitOfMeasureId\" [(ngModel)]=\"row.unitOfMeasureId\">\n                      <mat-option *ngFor=\"let item of uomData\" [value]=\"item.lookupValueId\">\n                        {{ item.lookupValueName }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field class=\"w-100\">\n                    <mat-select name=\"preVendorId\" [(ngModel)]=\"row.preferredVendorId\">\n                      <mat-option *ngFor=\"let item of vendorData\" [value]=\"item.vendorId\">\n                        {{ item.vendorName }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field class=\"w-100\">\n                    <mat-select name=\"categoryId\" [(ngModel)]=\"row.inventoryCategoryId\">\n                      <mat-option *ngFor=\"let item of inventoryCategoryList\" [value]=\"item.id\"\n                        (click)=\"subCategorylist = item?.subCategory\">\n                        {{ item.name }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field class=\"w-100\">\n                    <mat-select name=\"subCategoryId\" [(ngModel)]=\"row.inventorySubCategoryId\">\n                      <mat-option *ngFor=\"let item of subCategorylist\" [value]=\"item.id\">\n                        {{ item.name }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td>\n                  <!-- type -->\n                  <mat-form-field class=\"w-100\">\n                    <mat-select name=\"warOwner\" [(ngModel)]=\"row.materialType\">\n                      <mat-option *ngFor=\"let item of materialTypeList\" [value]=\"item.lookupValueId\">\n                        {{ item.lookupValueName }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field class=\"w-100\">\n                    <mat-select name=\"warId\" [(ngModel)]=\"row.warehouseId\">\n                      <mat-option *ngFor=\"let item of warehouseData\" [value]=\"item.warehouseId\">\n                        {{ item.warehouseName }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field class=\"w-100\">\n                    <input matInput type=\"text\" name=\"quantity\" [(ngModel)]=\"row.reorderQuantity\">\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field class=\"w-100\">\n                    <input matInput type=\"text\" name=\"triggerlevel\" [(ngModel)]=\"row.reorderTriggerlevel\">\n                  </mat-form-field>\n                </td>\n                <td>\n                  <mat-form-field class=\"w-100\">\n                    <input matInput type=\"text\" name=\"itemNotes\" [(ngModel)]=\"row.notes\">\n                  </mat-form-field>\n                </td>\n                <!-- [ngStyle]=\"pervisor?{'pointer-events':'none','opacity':'0.4'}:''\" -->\n                <td class=\"fixed-col\">\n                  <i class=\"fa fa-floppy-o save-icon pad-top \" [ngStyle]=\"!row.material1?{'pointer-events':'none','opacity':'0.4'}:''\" (click)=\"addItem(row)\" aria-hidden=\"true\"></i>\n                  <!-- <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(i,'null')\"\n                  aria-hidden=\"true\"></i> -->\n                </td>\n              </tr>\n              <!-- </form> -->\n            </ng-container>\n            <ng-container *ngFor=\"let list of itemData | slice:ItemStartIndex:ItemEndIndex;let inventoryIndex=index\">\n              <tr>\n                <td>\n                  <span>{{list.serialNo}}</span>\n                  <!-- <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\"  [disabled]=\"true\">\n                    <input matInput type=\"text\" name=\"materialId\" [(ngModel)]=\"list.materialId\">\n                  </mat-form-field> -->\n                </td>\n                <td>\n                  <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                    {{list.material1}}\n                  </span>\n                  <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                    <input matInput type=\"text\" name=\"material1\" [(ngModel)]=\"list.material1\">\n                  </mat-form-field>\n                </td>\n\n                <td>\n                  <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                    {{list.sku}}\n                  </span>\n                  <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                    <input matInput type=\"text\" name=\"sku\" [(ngModel)]=\"list.sku\">\n                  </mat-form-field>\n                </td>\n                <td>\n                  <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                    <span *ngFor=\" let uom of uomData\">\n                      <span *ngIf=\"uom.lookupValueId == list.unitOfMeasureId\">\n                        {{uom.lookupValueName}}\n                      </span>\n                    </span>\n                    </span>\n                    <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                      <mat-select name=\"uom\" [(ngModel)]=\"list.unitOfMeasureId\">\n                        <mat-option *ngFor=\"let item of uomData\" [value]=\"item.lookupValueId\">\n                          {{ item.lookupValueName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                </td>\n                <td>\n                  <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                    <span *ngFor=\" let vendor of vendorData\">\n                      <span *ngIf=\"vendor.vendorId == list.preferredVendorId\">\n                        {{vendor.vendorName }}\n                      </span>\n                    </span>\n                    </span>\n                    <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                      <mat-select name=\"preferredVendorId\" [(ngModel)]=\"list.preferredVendorId\">\n                        <mat-option *ngFor=\"let item of vendorData\" [value]=\"item.vendorId\">\n                          {{ item.vendorName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                </td>\n                <td>\n                  <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                    <span *ngFor=\" let category of inventoryCategoryList\">\n                      <span *ngIf=\"list.inventoryCategoryId == category.id\">{{category.name}}</span>\n                    </span>\n                  </span>\n                  <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                    <mat-select name=\"inventoryCategoryId\" [(ngModel)]=\"list.inventoryCategoryId\">\n                      <mat-option *ngFor=\"let item of inventoryCategoryList\" [value]=\"item.id\">\n                        {{ item.name }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td>\n                  <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                    <span *ngFor=\" let category of inventoryCategoryList\">\n                      <span *ngFor=\" let sub of category?.subCategory\">\n                      <span *ngIf=\"list.inventorySubCategoryId == sub.id\">{{sub.name}}</span>\n                    </span>\n                    </span>\n                  </span>\n\n                  <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                    <mat-select name=\"inventorySubCategory\" [(ngModel)]=\"list.inventorySubCategoryId\">\n                      <mat-option *ngFor=\"let item of list.subCategories\" [value]=\"item.id\">\n                      {{ item.name }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td>\n                  <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                    <span *ngFor=\" let type of materialTypeList\">                      \n                      <span *ngIf=\"list.materialType == type.lookupValueId\">{{type.lookupValueName}}</span>\n                    </span>\n                  </span>\n                  <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                    <mat-select name=\"materialType\" [(ngModel)]=\"list.materialType\">\n                      <mat-option *ngFor=\"let item of materialTypeList\" [value]=\"item.lookupValueId\">\n                        {{ item.lookupValueName }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                 <td>\n                  <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                    <span *ngFor=\" let warehouse of warehouseData\">\n                      <span *ngIf=\"warehouse.warehouseId && (warehouse.warehouseId == list.warehouseId)\">\n                          {{warehouse.warehouseName}}\n                      </span>\n                    </span>\n                  </span>\n                  <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                    <mat-select name=\"warehouseId\" [(ngModel)]=\"list.warehouseId\">\n                      <mat-option *ngFor=\"let item of warehouseData\" [value]=\"item.warehouseId\">\n                        {{ item.warehouseName }}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td>\n                  <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                    {{list.reorderTriggerlevel}}\n                  </span>\n                  <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                    <input matInput type=\"text\" name=\"reorderTriggerlevel\" [(ngModel)]=\"list.reorderTriggerlevel\">\n                  </mat-form-field>\n                </td>\n                <td>\n\n                  <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                    {{list.reorderQuantity}}\n                  </span>\n                  <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                    <input matInput type=\"text\" name=\"reorderQuantity\" [(ngModel)]=\"list.reorderQuantity\">\n                  </mat-form-field>\n                </td>\n                <td>\n                  <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                    {{list.notes}}\n                  </span>\n                  <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                    <input matInput type=\"text\" name=\"notes\" [(ngModel)]=\"list.notes\">\n                  </mat-form-field>\n                </td>\n           \n                <td class=\"fixed-col\">\n                  <i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\"\n                    [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\"\n                    (click)=\"wareHouseIndex = inventoryIndex\" aria-hidden=\"true\"></i>\n                  <i class=\"fa fa-floppy-o pl-2 pr-3 pad-top\" title=\"save\" *ngIf=\"wareHouseIndex == inventoryIndex\"\n                    (click)=\"updateItem(list)\"></i>\n                  <i class=\"fa fa-times pad-top pl-2\" title=\"cancel\" *ngIf=\"wareHouseIndex == inventoryIndex\"\n                    (click)=\"wareHouseIndex = -1\"></i>\n                  <i class=\"fa fa-trash pl-2\" (click)=\"deleteItem(index,list)\"\n                    [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\" aria-hidden=\"true\"></i>\n                </td>\n              </tr>\n            </ng-container>\n          </tbody>\n        </table>      \n      </div>\n      <app-pagination *ngIf=\"totalItems\" [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n        [ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n      </app-pagination>\n      <div class=\"action-container\">\n      </div>\n    </form>\n  </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create/inventory-create.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create/inventory-create.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventoryCreateInventoryCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inventory-create-wrapper\">\n\t\n\t<form #addInventoryForm = \"ngForm\" name=\"addInventoryForm\" (ngSubmit)=\"submitAddInventoryForm(addInventoryForm)\"  novalidate>\n\n\t\t<h4 class=\"main-title-mini float-left mt-3\">\n\t\t\t\n\t\t\t<span *ngIf=\"!isEditInventory\">Create Inventory</span>\n    \t\t<span *ngIf=\"isEditInventory\">Update Inventory</span>\n\n\t\t</h4>\n\n\t\t<div class=\"card ov clear\">\n\t\t\t\n\t\t\t<div class=\"card-body ov\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isInventorySubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isInventorySubmitted\">\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Inventory Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"inventoryName\" [(ngModel)]=\"inventory.inventoryName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Inventory Unit*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"InventoryUnit\" [(ngModel)]=\"inventory.InventoryUnit\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<app-select-box \n\t\t\t\t\t\t\t\tfieldName = \"vendorName\" \n\t\t\t\t\t\t\t\tfieldText = \"Vendor Name\"\n\t\t\t\t\t\t\t\tfieldItemName=\"vendorName\"\n\t\t\t\t\t\t\t\tfieldItemId=\"vendorId\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"inventory.vendorId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"vendorDataList\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onVendorChange($event)\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t</app-select-box>\n\t                \t\t</div> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<app-select-box \n\t\t\t\t\t\t\t\tfieldName = \"inventoryCategory\" \n\t\t\t\t\t\t\t\tfieldText = \"inventory Category\"\n\t\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\t\tfieldItemId=\"lookupValueId\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"inventory.inventoryCategoryId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"inventoryCategoryDataList\"\n\t\t\t\t\t\t\t\t(inputChange) = \"oninventoryCategoryChange($event)\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t</app-select-box>\n\t                \t\t</div> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Location</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"inventoryLocation\" [(ngModel)]=\"inventory.location\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Re-Order Level</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter\" name=\"reorderLevel\" [(ngModel)]=\"inventory.reOrderTriggerLevel\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Re-Order Quantity</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter\" name=\"reorderQuantity\" [(ngModel)]=\"inventory.reOrderQuantity\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Comments</label>\n\t\t\t                    <textarea placeholder=\"some text here\" name=\"inventoryComments\" [(ngModel)]=\"inventory.notes\"></textarea>\n\t\t\t                </div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addInventoryForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventoryCurrentDetailsInventoryCurrentDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6 d-flex align-items-center\">\n\t\t\t\t\t\t<h5>Current Inventory <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t\t   </div>\n\t\t\t\t\t<div class=\"col-sm-6 d-flex justify-content-end align-items-center\"> \n\t\t\t\t\t\t<!-- <i class=\"fa fa-filter filter-icon pr-4\" aria-hidden=\"true\"  data-toggle=\"collapse\" data-target=\"#filter\"></i>   -->\n\t\t\t\t\t\t<!-- <ul class=\"list-inline\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\"> -->\n\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t(ngModelChange)=\"onGlSearchFilter()\" > -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"pb-1\">Select Warehouse</h6>\n\t\t\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\t\t\t\tname=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t\t\tid=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t required>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t</div>\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"[]\" [columns]=\"unitAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventoryInitialStockInventoryInitialStockComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"card table-card mb-30\" >\n  <div class=\"card-header\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-6 d-flex align-items-center\">\n        <h5>Initial Stock <span class=\"badge lime-green\">{{totalItems}}</span>\n        </h5>\n      </div>\n      <div class=\"col-sm-6 d-flex justify-content-end align-items-center\">\n        <li (click)=\"download()\" class=\"list-inline-item pt-26\">\n          <a  class=\"btn trans-white mt_5\">\n            <i-feather  name=\"printer\" class=\"icon print\" >\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" class=\"feather feather-printer\">\n            <polyline points=\"6 9 6 2 18 2 18 9\"></polyline>\n            <path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path>\n            <rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect>\n            </svg>\n         </i-feather>\n         <span >Export</span>\n        </a>\n      </li>\n        <div class=\"col-sm-6\">\n          <div class=\"select-box\">\n            <h6 class=\"pb-1\">Select Warehouse</h6>\n            <select name=\"searchWarehouse\" id=\"assetCategory\" class=\"form-control\" [(ngModel)]=\"search.searchWarehouse\" (change)=\"filterCategoryItem(search.searchWarehouse)\" required>\n              <option value=\"\"  selected>All</option>\n              <option  [ngStyle]=\"!item.warehouseName?{'display':'none'}:''\"  *ngFor=\"let item of  warehouseData\" [value]=\"item.warehouseId\">\n              <span *ngIf=\"item.warehouseName != null\">  \n                {{ item.warehouseName | titlecase }} \n              </span>\n              </option>\n               </select>\n          </div>\n        </div>\n        <div class=\"col-sm-6\" *ngIf=\"check\">\n          <div class=\"select-box\">\n            <h6 class=\"pb-1\">Select Material</h6>\n            <select name=\"assetCategory\" id=\"assetCategory\" class=\"form-control\" required>\n              <option value=\"\" disabled selected hidden>Select</option>\n              <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n            </select>\n          </div>\n        </div>\n        <!-- <a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\trouterLink=\"/ams/assets/create-maintenance\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Maintenance</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t -->\n        <!-- </li> -->\n        <!-- </ul> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body p-0\">\n    <form>\n      <table class=\"table\" [ngClass]=\"isMobileView()\" #data>\n        <thead>\n          <tr>\n            <th scope=\"col\" (click)=\"sortUnitData('serviceType')\">Warehouse Name <span\n                [ngClass]=\"getFieldOrderBy('serviceType')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('serviceType')\">Inventory Item <span\n                [ngClass]=\"getFieldOrderBy('serviceType')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('phone')\">Initial Stock <span\n                [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n            <th scope=\"col\" (click)=\"sortUnitData('contactperson')\">Stock As On Date <span\n                [ngClass]=\"getFieldOrderBy('contactperson')\"></span></th>\n            <th scope=\"col\">Action</th>\n          </tr>\n        </thead>\n        <tbody>\n      \n          <ng-container>\n            <!-- <form #warehouseForm = \"ngForm\" name=\"warehouseForm\"  novalidate> -->\n            <tr>\n              <td>                \n                <mat-form-field class=\"w-100\">\n                  <mat-select name=\"warId\" [(ngModel)]=\"row.warehouseId\" >\n                    <mat-option *ngFor=\"let item of  warehouseData\"\n                      [value]=\"item.warehouseId\">\n                      {{ item.warehouseName }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <input matInput type=\"text\" name=\"matId\" [(ngModel)]=\"row.materialId\">\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"w-100\">\n                  <input matInput type=\"text\" name=\"initalQty\" [(ngModel)]=\"row.initalStockQty\">\n                </mat-form-field>\n              </td>\n              <td>\n             \n                <div class=\"input-box mb-0\">\n                    <input class=\"form-control stock-date\" name=\"stockDate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTime]=\"stockasonDate\"\n                     [owlDateTimeTrigger]=\"stockasonDate\" \n                     placeholder=\"\" [(ngModel)]=\"row.stockasonDate\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #stockasonDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                      </div>    \n                    </div>                              \n              </td>\n              <td>\n                <i class=\"fa fa-floppy-o save-icon\"\n                  [ngStyle]=\"!row.warehouseId || !row.materialId || !row.initalStockQty || !row.stockasonDate ?{'pointer-events':'none','opacity':'0.4'}:''\"\n                  (click)=\"addWareHouse(row)\" aria-hidden=\"true\"></i>\n                <!-- <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(i,'null')\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i> -->\n              </td>\n            </tr>\n            <!-- </form> -->\n          </ng-container>\n          <ng-container\n            *ngFor=\"let list of initalStockData | slice:ItemStartIndex:ItemEndIndex;let inventoryIndex=index\">\n            <tr>\n              <td>             \n               <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                <span *ngFor=\" let item of  warehouseData\">\n                  <span *ngIf=\"item.warehouseId == list.warehouseId\" >{{item.warehouseName}}</span>\n                </span>\n              </span>\n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <mat-select name=\"warehouseId\" [(ngModel)]=\"list.warehouseId\" >\n                    <mat-option *ngFor=\"let item of  warehouseData\"\n                      [value]=\"item.warehouseId\">\n                      {{ item.warehouseName }}</mat-option>\n                  </mat-select>\n                </mat-form-field>              \n              </td>\n              <td>\n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.materialId}}\n                </span>\n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"materialId\" [(ngModel)]=\"list.materialId\">\n                </mat-form-field>\n\n              </td>\n              <td>\n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.initalStockQty}}\n                </span>\n                <mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input matInput type=\"text\" name=\"initalStockQty\" [(ngModel)]=\"list.initalStockQty\">\n                </mat-form-field>\n              </td>\n              <td>\n                <span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n                  {{list.stockasonDate?(list.stockasonDate | date: 'dd/MM/yyyy'):'--'}}\n                </span>                \n                <div class=\"input-box mb-0\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                  <input class=\"form-control stock-date\" name=\"stockasonDate\"\n                   [owlDateTime]=\"stockasonDate\"\n                   [owlDateTimeTrigger]=\"stockasonDate\" \n                   placeholder=\"\" [(ngModel)]=\"list.stockasonDate\" required>\n                  <owl-date-time #stockasonDate [pickerType]=\"'calendar'\"></owl-date-time>\n                  <div class=\"date-btn\">\n                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                    </div>    \n                  </div>\n              </td>\n              <td>\n                <i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\"\n                  [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\"\n                  (click)=\"wareHouseIndex = inventoryIndex\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-floppy-o pl-2 pr-3 pad-top\" title=\"save\"\n                  [ngStyle]=\"!list.warehouseId || !list.materialId || !list.initalStockQty \n                  || !list.stockasonDate?{'pointer-events':'none','opacity':'0.4'}:''\"\n                  *ngIf=\"wareHouseIndex == inventoryIndex\" (click)=\"updateWareHouse(list)\"></i>\n                <i class=\"fa fa-times pad-top pl-2\" title=\"cancel\" *ngIf=\"wareHouseIndex == inventoryIndex\"\n                  (click)=\"wareHouseIndex = -1\"></i>\n                <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(index,list)\"\n                  [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\" aria-hidden=\"true\"></i>\n\n              </td>\n            </tr>\n          </ng-container>\n        </tbody>\n\n      </table>\n      <app-pagination  *ngIf=\"totalItems\" [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n        [ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\"\n        (outputParams)=\"getIndexParams($event)\">\n      </app-pagination>\n     \n    </form>    \n  </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventoryInternalTransferInventoryInternalTransferComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"assets-create-wrapper inventory-outer\">\n\t\n\t<form novalidate>\n\n\t\t<h4 class=\"main-title-mini float-left mt-3\">\n\t\t\t\n\t\t\t<span>Internal Transfer</span>\n\n\t\t</h4>\n<!-- \n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div> -->\n\n\t\t<div class=\"card clear mb-30\" id=\"accordion\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t\t<div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"row\">\n                                <div class=\"col-sm-4\">\n                                    <div class=\"select-box\">\n                                        <label>From Warehouse *</label>\n                                        <select name=\"warehouseId\"  class=\"form-control\"\n                                            [(ngModel)]=\"transfer.fromWarehouseId\" required>\n                                            <option value=\"\" disabled selected hidden>Select</option>\n                                            <option [ngStyle]=\"!item.warehouseName?{'display':'none'}:''\" \n                                            *ngFor=\"let item of warehouseData\" [value]=\"item.warehouseId\">\n                                                {{ item.warehouseName }}\n                                            </option>\n                                        </select>\n                                    </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n                                    <div class=\"select-box\">\n                                        <label>To Warehouse</label>\n                                        <select name=\"warehouseId\"  class=\"form-control\"\n                                            [(ngModel)]=\"transfer.toWarehouseId\" required >\n                                            <option value=\"\" disabled selected hidden>Select</option>\n                                            <option [ngStyle]=\"!item.warehouseName?{'display':'none'}:''\" \n                                            *ngFor=\"let item of warehouseData\" [value]=\"item.warehouseId\">\n                                                {{ item.warehouseName }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4 filter-list\">\n                                    <label>Inventory Item</label>                                  \n                                    <angular2-multiselect  name=\"inventoryItem\" [data]=\"materialItemData\" [(ngModel)]=\"selectedItem\"\n                                    [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n                                    (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\"\n                                    (onDeSelectAll)=\"onDeSelectAll($event)\">\n                                  </angular2-multiselect>\n                                </div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Type</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"transfer.assetCategoryId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4 filter-list\">\n                                    <div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Issue By Staff</label>\n\t\t\t\t\t\t\t\t\t\t<angular2-multiselect  name=\"issueByStaff\" [data]=\"staffList\" [(ngModel)]=\"issueByStaff\"\n\t\t\t\t\t\t\t\t\t\t[settings]=\"settings\" (onSelect)=\"onItemSelectByStaff($event)\"\t\t\t\t\t\t\t\t\t\t\n                                        (onDeSelect)=\"OnItemDeSelectByStaff($event)\" (onSelectAll)=\"onSelectAllByStaff($event)\"\n                                        (onDeSelectAll)=\"onDeSelectAllByStaff($event)\">\n\t\t\t\t\t\t\t\t\t   </angular2-multiselect>\n                                        <!-- <select name=\"inGoodsincomingReceivedbyStaffId\"  class=\"form-control\"\n                                        [(ngModel)]=\"transfer.iN_GoodsincomingReceivedbyStaffID\" required>\n                                        <option value=\"\" disabled selected hidden>Select</option>\n                                        <option  *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n                                            {{ item.firstName }}\n                                        </option>\n                                    </select>                                     -->\n                                    </div>\n                                </div>\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4 filter-list\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Issue to Staff</label>\n\t\t\t\t\t\t\t\t\t\t<!-- <select name=\"inGoodsincomingReceivedbyStaffId\"  class=\"form-control\"\n                                        [(ngModel)]=\"transfer.ouT_TowhomissuedStaffID\" required>\n                                        <option value=\"\" disabled selected hidden>Select</option>\n                                        <option  *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n                                            {{ item.firstName }}\n\t\t\t\t\t\t\t\t\t\t</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-box\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Issue to Staff</label> -->\n\t\t\t\t\t\t\t\t\t\t\t<angular2-multiselect  name=\"issueToStaff\" [data]=\"staffList\" [(ngModel)]=\"issueToStaff\"\n\t\t\t\t\t\t\t\t\t\t\t[settings]=\"settings\" (onSelect)=\"onItemSelectToStaff($event)\"\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t(onDeSelect)=\"OnItemDeSelectToStaff($event)\" (onSelectAll)=\"onSelectAllToStaff($event)\"\n\t\t\t\t\t\t\t\t\t\t\t(onDeSelectAll)=\"onDeSelectAllToStaff($event)\">\n\t\t\t\t\t\t\t\t\t\t   </angular2-multiselect>\n                                    <!-- </select>    -->\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Total Qty </label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Total Qty\" name=\"totalStockQty\" [(ngModel)]=\"transfer.totalStockQty\"  OnlyNumber=\"true\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Reason</label>\n\t\t\t\t\t                    <textarea placeholder=\"Enter Reason\" name=\"comments\" [(ngModel)]=\"transfer.comments\"></textarea>\n\t\t\t\t\t                </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" (click)=\"addInternalTransfer()\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventoryReceivingInventoryReceivingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"assets-create-wrapper inventory-outer\" id=\"outertop\">\n    <form #addReceivingForm=\"ngForm\" name=\"receivingForm\"  novalidate>    \n        <h4 class=\"main-title-mini float-left mt-3\">\n            <span *ngIf=\"!isEditAsset\">Receiving</span>\n        </h4>\n        <!-- <div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t\t</a>\n\t\t\t</div>\n        </div> -->\n        <!-- <form #addReceivingForm=\"ngForm\" name=\"receivingForm\"  novalidate> -->\n        <div class=\"card clear mb-30\">\n            <div class=\"card-body p-0\">\n                <ul class=\"list-group tabs clear\">\n                    <!-- <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#assetCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">General</li> -->\n                    <div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\n                        data-parent=\"#accordion\">\n                        <div class=\"details\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-4\">\n                                    <div class=\"select-box\">\n                                        <label>Warehouse ID*</label>\n                                        <select name=\"warehouseId\"  class=\"form-control\"\n                                            [(ngModel)]=\"receiving.warehouseId\" required (change)=\"getAvailableStock()\">\n                                            <option value=\"\" disabled selected hidden>Select</option>\n                                            <option [ngStyle]=\"!item.warehouseName?{'display':'none'}:''\" \n                                            *ngFor=\"let item of warehouseData\" [value]=\"item.warehouseId\">\n                                                {{ item.warehouseName }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 filter-list\">\n                                    <label>Inventory Item *</label>                              \n                                <angular2-multiselect  name=\"inventoryItem\" [data]=\"materialItemData\" [(ngModel)]=\"selectedItem\"\n                                [settings]=\"assetSettings\" (onSelect)=\"onItemSelect($event)\"\n                                (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\"\n                                (onDeSelectAll)=\"onDeSelectAll($event)\">\n                              </angular2-multiselect>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Available Stock*</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Available Stock\"\n                                            name=\"availableStockQty\" disabled [(ngModel)]=\"receiving.availableStockQty\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 filter-list\">\n                                    <div class=\"input-box\">\n                                        <label>PO Number</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter PO No\" name=\"inPonumber\"\n                                            [(ngModel)]=\"receiving.inPonumber\" required>\n                                    </div>\n                                </div>                                \n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>SKU / BarCode</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter SKU /BarCode\" name=\"depreciation\"\n                                            [(ngModel)]=\"receiving.sku\" required >\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 filter-list\">\n                                    <div class=\"input-box\">\n                                        <label>Verified by Staff*</label>\n                                        <!-- <select name=\"inGoodsincomingReceivedbyStaffId\"  class=\"form-control\"\n                                        [(ngModel)]=\"receiving.inGoodsincomingReceivedbyStaffId\" required>\n                                        <option value=\"\" disabled selected hidden>Select</option>\n                                        <option  *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n                                            {{ item.firstName }}\n                                        </option>\n                                    </select> -->\n\n                                    <angular2-multiselect  name=\"issueToStaff\" [data]=\"staffList\" [(ngModel)]=\"issueToStaff\"\n\t\t\t\t\t\t\t\t\t\t\t[settings]=\"assetSettings\" (onSelect)=\"onItemSelectToStaff($event)\"\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t(onDeSelect)=\"OnItemDeSelectToStaff($event)\" (onSelectAll)=\"onSelectAllToStaff($event)\"\n\t\t\t\t\t\t\t\t\t\t\t(onDeSelectAll)=\"onDeSelectAllToStaff($event)\">\n\t\t\t\t\t\t\t\t\t\t   </angular2-multiselect>                                    \n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Count/ Quality Verified</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                        [(ngModel)]=\"receiving.inCountQualityVerified\" required placeholder=\"Enter Count\" name=\"depreciation\" OnlyNumber=\"true\">\n                                      \n                                    </div>\n                                </div>                             \n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Receive Goods Date</label>\n                                        <input class=\"form-control\" name=\"inStockReceivedDate\" [owlDateTime]=\"inStockReceivedDate\"\n                                            [owlDateTimeTrigger]=\"inStockReceivedDate\"\n                                            placeholder=\"Received Goods Date\" [(ngModel)]=\"receiving.inStockReceivedDate\"\n                                            required>\n                                        <owl-date-time #inStockReceivedDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                        <div class=\"date-btn\" [owlDateTimeTrigger]=\"inStockReceivedDate\">\n                                            <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\">\n                                            </i-feather>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Received Goods QTY</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Received Goods QTY\" name=\"inReceivedStockQty\"\n                                            [(ngModel)]=\"receiving.inReceivedStockQty\"\n                                            (change)=\"!receiving.inActualStockMovedIn && (receiving.inActualStockMovedIn =receiving.inReceivedStockQty)\" required >\n                                    </div>\n                                </div> \n                              \n                                \n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Damage / Returned </label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Damage/Returned\" name=\"inDamageReturnedQty\"\n                                            [(ngModel)]=\"receiving.inDamageReturnedQty\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Actualy Stock Moved in</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Stock\" name=\"inActualStockMovedIn\"\n                                            [(ngModel)]=\"receiving.inActualStockMovedIn\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Total Cost</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Total Cost\" name=\"inTotalCost\"\n                                            [(ngModel)]=\"receiving.inTotalCost\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Receving Reason </label>\n                                        <textarea placeholder=\"Enter Reason\" name=\"inReceivingReason\" [(ngModel)]=\"receiving.inReceivingReason\"></textarea>\n                                        </div>\n                                </div>  \n                            </div>\n                        </div>\n                    </div>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <ul class=\"list-inline float-right\">\n                    <li class=\"list-inline-item\">\n                        <!-- [disabled]=\"addReceivingForm.invalid\" -->\n                        <button class=\"btn blue mr-2\" *ngIf=\"!isEdit\" [disabled]=\"addReceivingForm.invalid\" (click)=\"addReceiving()\" >Submit</button>\n                        <!-- <button class=\"btn blue mr-2\" *ngIf=\"isEdit\" (click)=\"updateReceiving()\">Update</button> -->\n                    </li>\n                </ul>\n            </div>\n        </div>\n       <!-- </form> -->\n        <mat-card class=\"mt-4 p-0\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-2\">\n                            <label>Inventory Item</label>\n                        </div>\n                        <div class=\"col-sm-2\"> <label>Qty</label> </div>\n                        <div class=\"col-sm-2\"> <label>Final Qty</label> </div>\n                        <!-- <div class=\"col-sm-2\"> <label>Type</label> </div> -->\n                        <div class=\"col-sm-2\"> <label>Transaction Date</label> </div>\n                        <div class=\"col-sm-2\"> <label>Status</label> </div>\n                        <div class=\"col-sm-2\"> <label>Action</label> </div>\n                    </div>\n                </div>\n                <div class=\"card-body\">                                        \n                    <div class=\"row pb-2\" *ngFor=\"let list of inventoryList | slice:ItemStartIndex:ItemEndIndex \">\n                        <div class=\"col-sm-2\"><label>{{list.material1?list.material1:'--'}}</label> </div>\n                        <div class=\"col-sm-2\"><label>{{list.availableStockQty?list.availableStockQty:'--'}}</label></div>\n                        <!-- <div class=\"col-sm-2\"><label>--</label></div> -->\n                        <div class=\"col-sm-2\"><label>--</label></div>\n                        <div class=\"col-sm-2\"><label>{{list.inStockReceivedDate | date: 'dd/MM/yyyy'}}</label></div>\n                        <div class=\"col-sm-2\"><label>--</label> </div>\n                        <div class=\"col-sm-2\"><label>\n                      <i class=\"fa fa-pencil-square-o pl-2\" [ngStyle]=\"!edit?{'pointer-events':'none','opacity':'0.4'}:''\" title=\"edit\"                  \n                        (click)=\"setUpdate(list);\" aria-hidden=\"true\">\n                    </i>            \n                <i class=\"fa fa-trash pl-2\" [ngStyle]=\"!edit?{'pointer-events':'none','opacity':'0.4'}:''\" (click)=\"deleteRow(index,list)\"\n                  aria-hidden=\"true\"></i>\n\n                        </label> </div>\n                    </div>\n                </div>\n                <app-pagination  *ngIf=\"totalItems\" [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\"\n\t\t\t\t\t\t\t(outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n            </div>\n        </mat-card>\n  </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventoryReportsInventoryReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  inventory-reports works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventorySetupInventorySetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"inventorys-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isInventoryCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isInventoryCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Inventory Categories</h4>\n\t\t<ng-container *ngFor=\"let item of inventoryCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/inventory/view/{{item.lookupValueId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateInventoryCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-none\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteInventoryCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\n\t\t\t\t\t\t<p>{{getInventoryList(item.lookupValueId)}} Inventorie(s) added</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewInventoryCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isInventoryCategoryNew || isInventoryCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isInventoryCategoryNew\">Add Inventory Category</h6>\n    \t\t\t<h6 *ngIf=\"!isInventoryCategoryNew\">Update Inventory Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"alertTicketMessage\" [isError]=\"isCategoryError\" [isSuccess]=\"isCategorySuccess\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isInventoryCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isInventoryCategorySubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addInventoryCategoryForm = \"ngForm\" name=\"addInventoryCategoryForm\" (ngSubmit)=\"submitInventoryCategoryForm(addInventoryCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"inventoryCategory\" [(ngModel)]=\"inventoryCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addInventoryCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div> -->\n\n\n\n\n<div class=\"document-setup-wrapper\">\n\t<ul class=\"icon-tabs btn-group\">\n\t\t<li class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" href=\"javascript:void(0)\" role=\"tab\" (click)=\"showTab('WareHousesSetup')\" [ngClass]=\"selectedTab == 'WareHousesSetup' ? 'active' : ''\">    \n\t\t\t\tWare Houses Setup\n\t\t\t</a> \n\t\t</li>\n\t\t<li class=\"nav-item\">\n\t\t\t<a class=\"nav-link \" href=\"javascript:void(0)\" role=\"tab\" (click)=\"showTab('InventoryCategories')\" [ngClass]=\"selectedTab == 'InventoryCategories' ? 'active' : ''\" >      \n\t\t\t\t Categories / Sub Category \n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"nav-item\">\n\t\t\t<a class=\"nav-link \" href=\"javascript:void(0)\" role=\"tab\" (click)=\"showTab('materialType')\" [ngClass]=\"selectedTab == 'materialType' ? 'active' : ''\" >      \n\t\t\t\tMaterial Type \n\t\t\t</a>\n\t\t</li>\n\t</ul>\n\t<div class=\"tab-content\">\n\t\t<div class=\"tab-pane\" id=\"dues\" [ngClass]=\"selectedTab == 'WareHousesSetup' ? 'active' : ''\">\n\t\t\t<div class=\"card table-card mb-30\" >\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6 d-flex align-items-center\">\n\t\t\t\t\t\t\t<h5>All Warehouse <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-6 d-flex align-items-center justify-content-end\">\n\t\t\t\t\t\t\t<li class=\" d-flex search \">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-search setup-search search-left\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control pl-5 \" placeholder=\"Search...\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"searchWarehouse\" (input)=\"filterWareHouse(searchWarehouse)\" >\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('warehouseId')\">Warehouse ID\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('warehouseId')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('warehouseName')\">Warehouse Name\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('warehouseName')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('towerLocation')\">Tower Location\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('towerLocation')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('descripition')\">Descripition\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('descripition')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('owner')\">Owner\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('owner')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('supervisor')\">Supervisor\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('supervisor')\"></span></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Action</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<ng-container>\n\t\t\t\t\t\t\t\t\t<!-- <form #warehouseForm = \"ngForm\" name=\"warehouseForm\"  novalidate> -->\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"warId\" [(ngModel)]=\"row.warehouseId\" OnlyNumber=\"true\" >\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"warName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"row.warehouseName\" >\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"warLocation\" [(ngModel)]=\"row.towerLocation\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of  locationList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.description }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"descrip\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"row.descripition\" >\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"warOwner\" [(ngModel)]=\"row.owner\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.firstName }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"warSupervisor\" [(ngModel)]=\"row.supervisor\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.firstName }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-floppy-o save-icon\" [ngStyle]=\"!row.warehouseId || !row.warehouseName || !row.towerLocation || !row.descripition || !row.owner || !row.supervisor?{'pointer-events':'none','opacity':'0.4'}:''\" (click)=\"addWareHouse(row)\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(i,'null')\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<!-- </form> -->\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t*ngFor=\"let list of warehouseData | slice:ItemStartIndex:ItemEndIndex | sort : unitFieldType: unitOrder;let inventoryIndex=index\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">{{list.warehouseId}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\"  name=\"warehouseId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"list.warehouseId\">\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{list.warehouseName}}\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"warehouseName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"list.warehouseName\">\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\" let loc of locationList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"list.towerLocation == loc.apartmentBlockId\" >{{loc.description}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"location\" [(ngModel)]=\"list.towerLocation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of  locationList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.description }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{list.descripition}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"descripition\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"list.descripition\">\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\" let staff of staffList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"list.owner == staff.staffId\" >{{staff.firstName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"owner\" [(ngModel)]=\"list.owner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.firstName }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\" let staff of staffList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"list.supervisor == staff.staffId\" >{{staff.firstName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\">{{list.supervisor}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select name=\"supervisor\" [(ngModel)]=\"list.supervisor\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.firstName }}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\" [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\"\t(click)=\"wareHouseIndex = inventoryIndex\"\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\" ></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-floppy-o pl-2 pr-3 pad-top\" title=\"save\" \n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"!list.warehouseId || !list.warehouseId || !list.towerLocation || !list.descripition || !list.owner || !list.supervisor?{'pointer-events':'none','opacity':'0.4'}:''\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"wareHouseIndex == inventoryIndex\" (click)=\"updateWareHouse(list)\"\n\t\t\t\t\t\t\t\t\t\t\t></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times pad-top pl-2\" title=\"cancel\"  *ngIf=\"wareHouseIndex == inventoryIndex\"  (click)=\"wareHouseIndex = -1\"></i>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash pl-2\"  (click)=\"deleteRow(index,list)\" [ngStyle]=\"wareHouseIndex == inventoryIndex?{'display':'none'}:''\" aria-hidden=\"true\"></i>\n\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<app-pagination  *ngIf=\"totalItems\" [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\"\n\t\t\t\t\t\t\t(outputParams)=\"getIndexParams($event)\">\n\t\t\t\t\t\t</app-pagination>\n\t\t\t\t\t\t<!-- <div class=\"action-container\"> -->\n\t\t\t\t\t\t\t<!-- <button mat-raised-button type=\"submit\" (click)=\"addRow()\">Add row</button> -->\n\t\t\t\t\t\t\t<!-- <button mat-raised-button [disabled]=\"userTable.invalid\" type=\"submit\" (click)=\"submitForm()\">Submit</button> -->\n\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t</form>\n\n\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\t\t\n\t\t<div class=\"tab-pane\" id=\"advance\" [ngClass]=\"selectedTab == 'InventoryCategories' ? 'active' : ''\">\n\t\t\t<div class=\"\">\n\t\t\t\t<div class=\"d-flex wd-100\">\n\t\t\t\t\t<div class=\"d-flex wd-50\">\n\t\t\t\t\t\t<h4 class=\"main-title-mini pt-4\">Inventory Categories</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-flex wd-50 justify-content-end align-items-center\">\n\t\t\t\t\t\t<li class=\" d-flex search \">\n\t\t\t\t\t\t\t<i class=\"fa fa-search setup-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control pl-5\" placeholder=\"Search...\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"searchCategory\" (input)=\"filterCategoryItem(searchCategory)\">\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item ml-3 mt-2\" (click)=\"addSetUp('inventory','add',null)\">\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\">\n\t\t\t\t\t\t\t\t<i-feather name=\"plus\" class=\"icon plus\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n\t\t\t\t\t\t\t\t\t\tclass=\"feather feather-plus\">\n\t\t\t\t\t\t\t\t\t\t<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line>\n\t\t\t\t\t\t\t\t\t\t<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>\n\t\t\t\t\t\t\t\t\t</svg></i-feather><span>Add inventory Category </span>\n\t\t\t\t\t\t\t</a></li>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <mat-accordion class=\"pt-5\" class=\"setup-accordion\" *ngIf=\"categoryList.length == 0\">\n\t\t\t\t  Asset Category not found\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t  </mat-accordion> -->\n\t\t\t\t<app-loader *ngIf=\"isAssetLoaded\"></app-loader>\n\t\t\t\t<mat-accordion class=\"pt-5\" class=\"setup-accordion\">\n\t\t\t\t\t<mat-expansion-panel *ngFor=\" let cat of inventoryCategoryList;let catIndex = index\">\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t<div class=\"d-flex wd-100\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex wd-50\"> {{cat.name}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex wd-50 justify-content-end align-items-center\">\n\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-plus\" [ngStyle]=\"cat?.subCategory.length > 0 ? {'pointer-events':'none','opacity':'0.4'}:''\" aria-hidden=\"true\" (click)=\"addSetUp('inventory','addSubType',cat)\"></i> -->\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o pl-2\" aria-hidden=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"addSetUp('inventory','edit',cat)\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash pl-2\" (click)=\"deleteCategory(cat.id)\"\n\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<div class=\"subCategory\" *ngIf=\"cat?.subCategory.length == 0\">Sub Category not found</div>\n\t\t\t\t\t\t<div class=\" subCategory \" *ngFor=\"let sub  of cat?.subCategory;let catIndex = index\">\n\t\t\t\t\t\t\t<!-- <li>{{sub.name}}</li> -->\n\t\t\t\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t\t\t\t<div class=\"sub-dot mr-2\"\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"inventoryCurrIndex == catIndex ?{'display':'none'}:''\"></div>\n\t\t\t\t\t\t\t\t<div class=\"wd-50\"> <span\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"inventoryCurrIndex == catIndex ?{'display':'none'}:''\">{{sub.name}}</span>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" *ngIf=\"catIndex == inventoryCurrIndex\" class=\"cus-input\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter sub category\" name=\"subCategory\" [(ngModel)]=\"sub.name\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"wd-50 d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\"\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"inventoryCurrIndex == catIndex ?{'display':'none'}:''\"\n\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\" (click)=\"inventoryCurrIndex = catIndex \"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-floppy-o pl-2 pr-3\" title=\"save\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"catIndex == inventoryCurrIndex\" aria-hidden=\"true\"\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"!sub.name? {'pointer-events':'none','opacity':'0.4'}:''\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"editInventory(cat)\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times  pl-2\" title=\"cancel\" *ngIf=\"catIndex == inventoryCurrIndex\"\n\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\" (click)=\"getAllInventory();inventoryCurrIndex = -1\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"tab-pane\" id=\"materialType\" [ngClass]=\"selectedTab == 'materialType' ? 'active' : ''\">\n\t\t\t<div class=\"card table-card mb-30\" >\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6 d-flex align-items-center\">\n\t\t\t\t\t\t\t<h5>All Material Type <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-6 d-flex align-items-center justify-content-end\">\n\t\t\t\t\t\t\t<li class=\" d-flex search \">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-search setup-search search-left\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control pl-5 \" placeholder=\"Search...\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"searchWarehouse\" (input)=\"filterWareHouse(searchWarehouse)\" >\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('warehouseName')\">Material Type Name\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('warehouseName')\"></span></th>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('descripition')\">Descripition\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"getFieldOrderBy('descripition')\"></span></th>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Action</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<ng-container>\n\t\t\t\t\t\t\t\t\t<!-- <form #warehouseForm = \"ngForm\" name=\"warehouseForm\"  novalidate> -->\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"typeName\" [(ngModel)]=\"typeRow.lookupValueName\" >\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"descrip\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"typeRow.description\" >\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-floppy-o save-icon\" [ngStyle]=\"!typeRow.lookupValueName || !typeRow.description ?{'pointer-events':'none','opacity':'0.4'}:''\" (click)=\"addMaterialType(typeRow)\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<!-- </form> -->\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t*ngFor=\"let typeList of materialList | slice:typeItemStartIndex:typeItemEndIndex | sort : unitFieldType: unitOrder;let materialIndex=index\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"currMaterialIndex == materialIndex?{'display':'none'}:''\">{{typeList.lookupValueName}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"currMaterialIndex == materialIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\"  name=\"lookupValueName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"typeList.lookupValueName\">\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"currMaterialIndex == materialIndex?{'display':'none'}:''\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{typeList.description}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"w-100\" *ngIf=\"currMaterialIndex == materialIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" name=\"description\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"typeList.description\">\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\" [ngStyle]=\"currMaterialIndex == materialIndex?{'display':'none'}:''\"\t(click)=\"currMaterialIndex = materialIndex\"\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\" ></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-floppy-o pl-2 pr-3 pad-top\" title=\"save\" \n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"!typeList.lookupValueName || !typeList.description ?{'pointer-events':'none','opacity':'0.4'}:''\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"currMaterialIndex == materialIndex\" (click)=\"updateMaterial(typeList)\"\n\t\t\t\t\t\t\t\t\t\t\t></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times pad-top pl-2\" title=\"cancel\"  *ngIf=\"currMaterialIndex == materialIndex\"  (click)=\"wareHouseIndex = -1\"></i>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash pl-2\"  (click)=\"deleteMaterialType(index,typeList)\" [ngStyle]=\"currMaterialIndex == materialIndex?{'display':'none'}:''\" aria-hidden=\"true\"></i>\n\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<app-pagination  *ngIf=\"typeTotalItems\" [totalItems]=\"typeTotalItems\" [ItemStartIndex]=\"typeItemStartIndex\"\n\t\t\t\t\t\t\t[ItemEndIndex]=\"typeItemEndIndex\" [itemLimit]=\"typeItemLimit\"\n\t\t\t\t\t\t\t(outputParams)=\"getTypeIndexParams($event)\">\n\t\t\t\t\t\t</app-pagination>\t\t\t\t\t\t\n\t\t\t\t\t</form>\n\n\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</div>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventoryStockAdjustmentsInventoryStockAdjustmentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"assets-create-wrapper inventory-outer\">\n    <form  name=\"inventoryStock\" #inventory=\"ngForm\" novalidate>\n        <h4 class=\"main-title-mini float-left mt-3\">\n            <span *ngIf=\"!isEditAsset\">Stock Consumptions</span>\n        </h4>\n        <!-- <div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div> -->\n        <div class=\"card clear mb-30\">\n            <div class=\"card-body p-0\">\n                <ul class=\"list-group tabs clear\">\n                    <div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\n                        data-parent=\"#accordion\">\n                        <div class=\"details\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-4\">\n                                    <div class=\"select-box\">\n                                        <label>Warehouse*</label>\n                                        <select name=\"warehouseId\"  class=\"form-control\"\n                                        [(ngModel)]=\"stock.warehouseId\" required (change)=\"getAvailableStock()\">\n                                        <option value=\"\" disabled selected hidden>Select</option>\n                                        <option [ngStyle]=\"!item.warehouseName?{'display':'none'}:''\" \n                                        *ngFor=\"let item of warehouseData\" [value]=\"item.warehouseId\">\n                                            {{ item.warehouseName }}\n                                        </option>\n                                    </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 filter-list\">\n                                    <label>Inventory Item</label>                                  \n                                    <angular2-multiselect  name=\"inventoryItem\" [data]=\"materialItemData\" [(ngModel)]=\"selectedItem\"\n                                    [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n                                    (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\"\n                                    (onDeSelectAll)=\"onDeSelectAll($event)\">\n                                  </angular2-multiselect>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Available Stock</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Available Stock\"\n                                            name=\"availableStockQty\" disabled [(ngModel)]=\"stock.availableStockQty\" required>\n                                    </div>\n                                </div>\n                                <!-- <div class=\"col-sm-4\">\n                                    <div class=\"select-box\">\n                                        <label>Type </label>\n                                        <select name=\"assetCategory\"  class=\"form-control\"\n                                            [(ngModel)]=\"asset.assetCategoryId\" required>\n                                            <option value=\"\" disabled selected hidden>Select</option>\n                                            <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">\n                                                {{ item.lookupValueName }}</option>\n                                        </select>\n                                    </div>\n                                </div> -->\n                                <!-- <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Issue To Staff</label>\n                                        <select name=\"outTowhomissuedStaffId\"  class=\"form-control\"\n                                        [(ngModel)]=\"stock.outTowhomissuedStaffId\" required>\n                                        <option value=\"\" disabled selected hidden>Select</option>\n                                        <option  *ngFor=\"let item of staffList\" [value]=\"item.staffId\">\n                                            {{ item.firstName }}\n                                        </option>\n                                    </select>\n                                    \n                                    </div>\n                                </div> -->\n                               \n                                <div class=\"col-sm-4 filter-list\">\n                                    <label>Issue  Staff</label>                                  \n                                    <angular2-multiselect  name=\"issueByStaff\" [data]=\"staffList\" [(ngModel)]=\"stock.outTowhomissuedStaffId\"\n                                    [settings]=\"settings\" (onSelect)=\"onItemSelectByStaff($event)\"\n                                    (onDeSelect)=\"OnItemDeSelectByStaff($event)\" (onSelectAll)=\"onSelectAllByStaff($event)\"\n                                    (onDeSelectAll)=\"onDeSelectAllByStaff($event)\">\n                                  </angular2-multiselect>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Date of Consumption</label>\n                                        <input class=\"form-control\" name=\"purchaseDate\" [owlDateTime]=\"outDateofconsumption\"\n                                            [owlDateTimeTrigger]=\"outDateofconsumption\"\n                                            placeholder=\"Date of Consumption\" [(ngModel)]=\"stock.outDateofconsumption\"\n                                            required>\n                                        <owl-date-time #outDateofconsumption [pickerType]=\"'calendar'\"></owl-date-time>\n                                        <div class=\"date-btn\" [owlDateTimeTrigger]=\"outDateofconsumption\">\n                                            <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\">\n                                            </i-feather>\n                                        </div>\n                                    </div>\n                                </div>  \n                               \n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Person who received</label>\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n                                            placeholder=\"Enter Person who received\" name=\"depreciation\"\n                                            [(ngModel)]=\"stock.depreciationPercentage\" required>\n                                    </div>\n                                </div>  \n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Reason for Consuming</label>\n                                        <textarea placeholder=\"Enter Reason\" name=\"outOutgoingReason\" \n                                        [(ngModel)]=\"stock.outOutgoingReason\" ></textarea>\n                                        </div>\n                                </div>                                                             \n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box\">\n                                        <label>Total Qty Consumed</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Total Qty\"\n                                            name=\"outTotalQtyConsumedBy\" OnlyNumber=\"true\" [(ngModel)]=\"stock.outTotalQtyConsumedBy\" required>\n                                    </div>\n                                </div>                                                   \n                            </div>\n                        </div>\n                    </div>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <ul class=\"list-inline float-right\">\n                    <li class=\"list-inline-item\">\n                        <button class=\"btn blue mr-2\" [disabled]=\"inventory.invalid\"  (click)=\"addStock()\">Submit</button>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <mat-card class=\"mt-4 p-0\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-2\">\n                            <label>Inventory Item</label>\n                        </div>\n                        <div class=\"col-sm-2\"> <label>Qty</label> </div>\n                        <div class=\"col-sm-2\"> <label>Final Qty</label> </div>\n                        <!-- <div class=\"col-sm-2\"> <label>Type</label> </div> -->\n                        <div class=\"col-sm-2\"> <label>Transaction Date</label> </div>\n                        <div class=\"col-sm-2\"> <label>Status</label> </div>\n                    </div>\n                </div>\n                <div class=\"card-body\">                                        \n                    <div class=\"row pb-2\" *ngFor=\"let list of inventoryList | slice:ItemStartIndex:ItemEndIndex \">\n                        <div class=\"col-sm-2\"><label>{{list.material1?list.material1:'--'}}</label> </div>\n                        <div class=\"col-sm-2\"><label>{{list.availableStockQty?list.availableStockQty:'--'}}</label></div>\n                        <!-- <div class=\"col-sm-2\"><label>--</label></div> -->\n                        <div class=\"col-sm-2\"><label>--</label></div>\n                        <div class=\"col-sm-2\"><label>{{list.inStockReceivedDate | date: 'dd/MM/yyyy'}}</label></div>\n                        <div class=\"col-sm-2\"><label>--</label> </div>\n                        <div class=\"col-sm-2\"><label>\n                      <i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\"                  \n                        (click)=\"setUpdate(list);\" [ngStyle]=\"!edit?{'pointer-events':'none','opcity':'0.4'}:''\" aria-hidden=\"true\">\n                    </i>            \n                <i class=\"fa fa-trash pl-2\" [ngStyle]=\"!edit?{'pointer-events':'none','opcity':'0.4'}:''\" (click)=\"deleteRow(index,list)\"\n                  aria-hidden=\"true\"></i>\n\n                        </label> </div>\n                    </div>\n                </div>\n                <app-pagination  *ngIf=\"totalItems\" [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t\t\t[ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\"\n\t\t\t\t\t\t\t(outputParams)=\"getIndexParams($event)\">\n\t\t\t\t</app-pagination>\n            </div>\n        </mat-card>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-update/inventory-update.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-update/inventory-update.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventoryUpdateInventoryUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  inventory-update works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventoryVendorManagementInventoryVendorManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"assets-create-wrapper\">\n\t\n\t<form   novalidate>\n\n\t\t<h6 class=\"main-title-mini float-left mt-3\">\n\t\t\t\n\t\t\t<span *ngIf=\"!isEditAsset\">Vendor Management</span>\n\n\t\t</h6>\n\n<!-- <div>Vendor Management</div> -->\n\n\t\t<!-- <div class=\"card clear mb-30\" id=\"accordion\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#assetCollapseOne\" >General</li> -->\n\t\t\t\t\t<!-- <div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\"> --> \n\t\t\t\t\t\t\t<mat-card *ngIf=\"working\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Material</label>\n                                        <angular2-multiselect [data]=\"categoryList\" name=\"material\" [(ngModel)]=\"assets\" [settings]=\"materialSettings\"\n                                        (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"\n                                        (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\n                                    </angular2-multiselect>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Vendor</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"asset.assetCategoryId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\"></div>\n                            </div>                            \n                           </mat-card>\n\t\t\t\t\t\t<!-- </div>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div> -->\n\n\t\t<!-- <div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" >Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div> -->\n\n\t</form>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-view/inventory-view.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-view/inventory-view.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryComponentsInventoryViewInventoryViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inventory-view-wrapper\">\n\t\n\n\t<form #viewInventoryForm = \"ngForm\" name=\"viewInventoryForm\"  novalidate>\n\n\t\t<div class=\"card ov mb-30\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Select Category</h5>\n\t    \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-body ov\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<app-select-box \n\t\t\t\t\t\t\t\tfieldName = \"inventoryCategory\" \n\t\t\t\t\t\t\t\tfieldText = \"Inventory Category\"\n\t\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\t\tfieldItemId=\"lookupValueId\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"inventoryCategory\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"inventoryCategoryData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onInventoryCatregoryChange($event)\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t</app-select-box>\n                \t\t</div> \n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</form>\n\n\n\t<div class=\"card table-card\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All {{inventoryCategoryName}} Inventory <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"inventoryData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/inventory/create-inventory\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Inventory</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<app-loader *ngIf=\"!isInventoryLoaded\"></app-loader>\n\n  \t\t<div class=\"card-body p-0\">           \n  \t\t\t\n  \t\t\t<ng-container *ngIf=\"isInventoryLoaded\">\n  \t\t\t\t\n  \t\t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\">Inventory Name\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('inventoryName')\" [ngClass]=\"getFieldOrderBy('inventoryName')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['inventoryName']\" (ngModelChange)=\"selectColInput('inventoryName')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Quantity \n\t\t\t\t\t      \t<span (click)=\"sortUnitData('reOrderQuantity')\" [ngClass]=\"getFieldOrderBy('reOrderQuantity')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Quantity\" [(ngModel)]=\"columnField['reOrderQuantity']\" (ngModelChange)=\"selectColInput('reOrderQuantity')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Vendor Name \n\t\t\t\t\t      \t<span (click)=\"sortUnitData('vendorName')\" [ngClass]=\"getFieldOrderBy('vendorName')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['vendorName']\" (ngModelChange)=\"selectColInput('vendorName')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Reorder Level \n\t\t\t\t\t      \t<span (click)=\"sortUnitData('reOrderTriggerLevel')\" [ngClass]=\"getFieldOrderBy('reOrderTriggerLevel')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Reorder\" [(ngModel)]=\"columnField['reOrderTriggerLevel']\" (ngModelChange)=\"selectColInput('reOrderTriggerLevel')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th  class=\"simple-actions\" scope=\"col\">Actions\n\t\t\t\t\t\t    <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t\t\t  </th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let inventory of inventoryListData | simpleSearch: inventoryData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\" [ngClass]=\"inventory.isActive ? '' : 'notactive'\">\n\t\t\t\t\t      <td class=\"name\">{{inventory.inventoryName}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{inventory.reOrderQuantity}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{getVendorName(inventory, inventory.vendorId)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{inventory.reOrderTriggerLevel}}</td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t\t      \tclass=\"mr-2\"\n\t\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t\t      \trouterLink=\"/ams/inventory/edit-inventory/{{inventory.inventoryId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(inventory.inventoryId)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n  \t\t\t</ng-container>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/inventory.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/inventory.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInventoryInventoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventoryCreateItemInventoryCreateItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header {\n  background-color: #333;\n  color: #fff;\n  overflow: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\n\nmat-icon {\n  cursor: pointer;\n}\n\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.table {\n  padding: 20px;\n}\n\n.table tbody tr td,\n.table thead th,\n.table thead {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.output {\n  padding: 20px;\n}\n\n.delete {\n  color: red;\n}\n\n.done {\n  color: green;\n}\n\n.edit {\n  color: yellow;\n}\n\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n\n.table th, .table td {\n  max-width: unset !important;\n}\n\n.fixed-col {\n  position: -webkit-sticky;\n  position: sticky;\n  right: 0;\n  background: white;\n}\n\n.inventory-table {\n  overflow: auto;\n}\n\n.pad-top {\n  padding-top: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LWNyZWF0ZS1pdGVtL2ludmVudG9yeS1jcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2ludmVudG9yeS9jb21wb25lbnRzL2ludmVudG9yeS1jcmVhdGUtaXRlbS9pbnZlbnRvcnktY3JlYXRlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTs7O0VBR0UsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0VKOztBRG9CRTtFQUNFLDJCQUFBO0FDakJKOztBRG1CRTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUNoQko7O0FEa0JFO0VBQ0UsY0FBQTtBQ2ZKOztBRGtCRTtFQUNFLGlCQUFBO0FDZkoiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LWNyZWF0ZS1pdGVtL2ludmVudG9yeS1jcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDowO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICBcbiAgbWF0LWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmFjdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC50YWJsZSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLnRhYmxlIHRib2R5IHRyIHRkLFxuICAudGFibGUgdGhlYWQgdGgsXG4gIC50YWJsZSB0aGVhZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gIH1cbiAgXG4gIC5vdXRwdXQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC5kZWxldGUge1xuICAgIGNvbG9yOiByZWQgIDtcbiAgfVxuICBcbiAgLmRvbmUge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxuIFxuICAuZWRpdCB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgfVxuICBzcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gfVxuICBcblxuLy8gLnRhYmxlLWNhcmQge1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuLy8gfVxuXG4gIC8vIC50YWJsZS1jYXJkIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvLyAgIHdpZHRoOiA3cHg7XG4gIC8vIH1cbiAgIFxuICAvLyAudGFibGUtY2FyZCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLy8gICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLy8gfVxuICAgXG4gIC8vIC50YWJsZS1jYXJkIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICAvLyAgIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XG4gIC8vIH1cblxuICAudGFibGUgdGgsIC50YWJsZSB0ZCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50XG4gIH1cbiAgLmZpeGVkLWNvbHsgICAgXG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuICAuaW52ZW50b3J5LXRhYmxle1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICAucGFkLXRvcHtcbiAgICBwYWRkaW5nLXRvcDogMjJweDtcbiAgfSIsImhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbm1hdC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYmxlIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYmxlIHRib2R5IHRyIHRkLFxuLnRhYmxlIHRoZWFkIHRoLFxuLnRhYmxlIHRoZWFkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm91dHB1dCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kZWxldGUge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZG9uZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmVkaXQge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG5zcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XG4gIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmZpeGVkLWNvbCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmludmVudG9yeS10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucGFkLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAyMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: InventoryCreateItemComponent */

  /***/
  function srcAppAmsInventoryComponentsInventoryCreateItemInventoryCreateItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryCreateItemComponent", function () {
      return InventoryCreateItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/PurchaseOrder */
    "./src/app/api/controllers/PurchaseOrder.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/api/controllers/Staff */
    "./src/app/api/controllers/Staff.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/api/controllers/Vendor */
    "./src/app/api/controllers/Vendor.ts");

    var InventoryCreateItemComponent =
    /*#__PURE__*/
    function () {
      function InventoryCreateItemComponent(dialog, fb, cookieService, purchaseOrderService, injector, sharedService, lookupService, staffService, apartmentService, vendorService) {
        _classCallCheck(this, InventoryCreateItemComponent);

        this.dialog = dialog;
        this.fb = fb;
        this.cookieService = cookieService;
        this.purchaseOrderService = purchaseOrderService;
        this.injector = injector;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.staffService = staffService;
        this.apartmentService = apartmentService;
        this.vendorService = vendorService;
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
        this.materialTypeList = [];
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
      }

      _createClass(InventoryCreateItemComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "filterWareHouse",
        value: function filterWareHouse(value) {
          this.warehouseData = this.tempWarehouseData.filter(function (item) {
            return item.warehouseName.toLowerCase().indexOf(value.toLowerCase()) > -1;
          });
        } // code  filter function 
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

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getUomList();
          this.getMaterials();
          this.getAllInventory();
          this.getAllGetAllWarehouse();
          this.getVendorList();
          this.getInitalWarehouse();
          this.getAllMaterialType();
          this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
            if (id != null) {
              var param = {};
              param = {
                apartmentId: _this.cookieService.get('apartmentId'),
                materialId: id,
                deleteBy: parseInt(_this.cookieService.get('userId'))
              };

              _this.purchaseOrderService.deleteMaterial(param).subscribe(function (res) {
                setTimeout(function () {
                  _this.sharedService.setAlertMessage("Inventory item deleted successfully");

                  _this.sharedService.setUnitListDeleteIndex(null);

                  _this.getMaterials();
                }, 500);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.control = this.userTable.get('tableRows') as FormArray;
        }
      }, {
        key: "setSubCategory",
        value: function setSubCategory(value) {
          console.log(value);
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(index, data) {
          // const control = this.userTable.get('tableRows') as FormArray;
          // control.removeAt(index);
          console.log(data.warehouseId);
          this.modalService.showConfirmModal(data.warehouseId);
        }
      }, {
        key: "getUomList",
        value: function getUomList() {
          var _this2 = this;

          var queryParamBase = {};
          queryParamBase = {
            ApartmentId: this.cookieService.get('apartmentId'),
            LookupTypeId: 173
          };
          this.lookupService.getLookupValueByLookupTypeId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this2.uomData = res ? res : [];
            }
          });
        }
      }, {
        key: "getVendorList",
        value: function getVendorList() {
          var _this3 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.vendorService.getVendorByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this3.vendorData = res ? res : [];
            }
          });
        }
      }, {
        key: "getMaterials",
        value: function getMaterials() {
          var _this4 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.purchaseOrderService.getMaterialsByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this4.itemData = res ? res : [];
              setTimeout(function () {
                if (_this4.inventoryCategoryList && _this4.inventoryCategoryList.length > 0) {
                  _this4.itemData.filter(function (inventoryItem) {
                    _this4.inventoryCategoryList.filter(function (val) {
                      if (inventoryItem.inventoryCategoryId == val.id) {
                        console.log(val);
                        inventoryItem.subCategories = val.subCategory;
                      } // inventoryItem.subCategory =val.subCategory?val.subCategory:[];				  

                    });
                  });
                }

                console.log(_this4.itemData, 'item');
              }, 500);
              _this4.totalItems = _this4.itemData.length;

              if (_this4.totalItems > _this4.itemLimit) {
                _this4.ItemEndIndex = _this4.itemLimit;
              } else {
                _this4.ItemEndIndex = _this4.totalItems;
              }
            }
          });
        }
      }, {
        key: "getAllGetAllWarehouse",
        value: function getAllGetAllWarehouse() {
          var _this5 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.isAssetLoaded = true;
          this.purchaseOrderService.getAllWarehouseByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              // this.warehouseData = [];
              _this5.warehouseData = res && res.length > 0 ? res : [];
            }
          });
        } // addWareHouse(data) {
        // 	let reqObj: any = {};
        // 	reqObj = {
        // 		"warehouseId": data.warehouseId,
        // 		"apartmentId": parseInt(this.cookieService.get('apartmentId')),
        // 		"warehouseName": data.warehouseName,
        // 		"towerLocation": data.towerLocation,
        // 		"unitOfMeasureId": null,
        // 		"descripition": data.descripition,
        // 		"owner": data.owner,
        // 		"supervisor": data.supervisor,
        // 		"isActive": true,
        // 		"insertedBy": parseInt(this.cookieService.get('userId')),
        // 		"insertedOn": new Date().toISOString,
        // 		"updatedBy": 0,
        // 		"updatedOn": new Date().toISOString,
        // 	}
        // 	let params: any = {};
        // 	params.warehouseobj = reqObj;
        // 	this.purchaseOrderService.addWarehouse(params).subscribe((res: any) => {
        // 		if (res) {
        // 			this.sharedService.setAlertMessage("Warehouse added successfully");
        // 			this.isAssetLoaded = false;
        // 			this.row ={};
        // 		}
        // 	});
        // }
        // updateWareHouse(data) {
        // 	let reqObj: any = {};
        // 	reqObj = {
        // 		"warehouseId": data.warehouseId,
        // 		"apartmentId": parseInt(this.cookieService.get('apartmentId')),
        // 		"warehouseName": data.warehouseName,
        // 		"towerLocation": data.towerLocation,
        // 		"unitOfMeasureId": null,
        // 		"descripition": data.descripition,
        // 		"owner": data.owner,
        // 		"supervisor": data.supervisor,
        // 		"isActive": true,
        // 		"insertedBy": parseInt(this.cookieService.get('userId')),
        // 		"insertedOn": new Date().toISOString,
        // 		"updatedBy": parseInt(this.cookieService.get('userId')),
        // 		"updatedOn": new Date().toISOString,
        // 	}
        // 	let params: any = {};
        // 	params.warehouseobj = reqObj;
        // 	this.purchaseOrderService.updateWarehouse(params).subscribe((res: any) => {
        // 		if (res) {
        // 			this.sharedService.setAlertMessage("Warehouse Updated successfully");
        // 			this.isAssetLoaded = false;
        // 			this.isEditRow = false;
        // 			this.wareHouseIndex = -1;
        // 		}
        // 	});
        // }

      }, {
        key: "deleteItem",
        value: function deleteItem(id, type) {
          this.modalService.showConfirmModal(type.materialId);
        }
      }, {
        key: "getInitalWarehouse",
        value: function getInitalWarehouse() {
          var _this6 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.isAssetLoaded = true;
          this.purchaseOrderService.getAllInitialStockByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this6.initalStockData = res && res.length > 0 ? res : [];
            }
          });
        }
        /**
         * get inventory
         */

      }, {
        key: "getAllInventory",
        value: function getAllInventory() {
          var _this7 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            lookupTypeId: 174,
            subCategoryLookupTypeId: 175
          };
          this.isAssetLoaded = true;
          this.lookupService.getSubcategory(queryParamBase).subscribe(function (res) {
            if (res) {
              _this7.isAssetLoaded = false;
              _this7.inventoryCategoryList = res ? res : [];
            }
          });
        }
      }, {
        key: "addItem",
        value: function addItem(data) {
          var _this8 = this;

          var reqObj = {};
          reqObj = {
            "materialId": 0,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "material1": data.material1,
            "materialNo": Number(data.materialNo),
            "unitOfMeasureId": Number(data.unitOfMeasureId),
            // "comments": null,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": 0,
            "updatedOn": new Date().toISOString,
            "isInventoryManaged": true,
            "sku": data.sku,
            "preferredVendorId": Number(data.preferredVendorId),
            "inventoryCategoryId": Number(data.inventoryCategoryId),
            "inventorySubCategoryId": Number(data.inventorySubCategoryId),
            "materialType": Number(data.materialType),
            "reorderTriggerlevel": Number(data.reorderTriggerlevel),
            "reorderQuantity": Number(data.reorderQuantity),
            "serialNo": 0,
            "notes": data.notes,
            // "customfields": null,
            "warehouseId": Number(data.warehouseId)
          };
          var params = {};
          params.material = reqObj;
          this.purchaseOrderService.addMaterial(params).subscribe(function (res) {
            console.log(res, res);

            if (res) {
              _this8.sharedService.setAlertMessage("Inventory Item added successfully");

              _this8.isAssetLoaded = false;
              _this8.row = {};

              _this8.getMaterials();
            }
          });
        }
      }, {
        key: "updateItem",
        value: function updateItem(data) {
          var _this9 = this;

          var reqObj = {};
          reqObj = {
            "materialId": data.materialId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "material1": data.material1,
            "materialNo": Number(data.materialNo),
            "unitOfMeasureId": Number(data.unitOfMeasureId),
            // "comments": null,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString,
            "isInventoryManaged": true,
            "sku": data.sku,
            "preferredVendorId": Number(data.preferredVendorId),
            "inventoryCategoryId": Number(data.inventoryCategoryId),
            "inventorySubCategoryId": Number(data.inventorySubCategoryId),
            "materialType": 1,
            "reorderTriggerlevel": Number(data.reorderTriggerlevel),
            "reorderQuantity": Number(data.reorderQuantity),
            "serialNo": data.serialNo,
            "notes": data.notes,
            // "customfields": null,
            "warehouseId": Number(data.warehouseId)
          };
          var params = {};
          params.material = reqObj;
          this.purchaseOrderService.updateMaterial(params).subscribe(function (res) {
            console.log(res, res);

            if (res) {
              _this9.sharedService.setAlertMessage("Inventory Item updated successfully");

              _this9.isAssetLoaded = false; //    this.row={};
              //   this.getMaterials();

              _this9.wareHouseIndex = -1;
            }
          });
        }
      }, {
        key: "getAllMaterialType",
        value: function getAllMaterialType() {
          var _this10 = this;

          var queryParamBase = {};
          queryParamBase = {
            ApartmentId: this.cookieService.get('apartmentId'),
            LookupTypeId: 186
          };
          this.isAssetLoaded = true;
          this.lookupService.getLookupValueByLookupTypeId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this10.isAssetLoaded = false;
              _this10.materialTypeList = res ? res : [];
            }
          });
        }
      }]);

      return InventoryCreateItemComponent;
    }();

    InventoryCreateItemComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_9__["StaffService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_10__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_11__["VendorService"]
      }];
    };

    InventoryCreateItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-create-item',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-create-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-create-item.component.scss */
      "./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_9__["StaffService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_10__["ApartmentService"], src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_11__["VendorService"]])], InventoryCreateItemComponent); // unitFieldType:string = "unitno";
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

    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-create/inventory-create.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-create/inventory-create.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventoryCreateInventoryCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktY3JlYXRlL2ludmVudG9yeS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-create/inventory-create.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-create/inventory-create.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: InventoryCreateComponent */

  /***/
  function srcAppAmsInventoryComponentsInventoryCreateInventoryCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryCreateComponent", function () {
      return InventoryCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Inventory */
    "./src/app/api/controllers/Inventory.ts");
    /* harmony import */


    var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Vendor */
    "./src/app/api/controllers/Vendor.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var InventoryCreateComponent =
    /*#__PURE__*/
    function () {
      function InventoryCreateComponent(router, route, inventoryService, lookupService, vendorService, sharedService, cookieService) {
        _classCallCheck(this, InventoryCreateComponent);

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

      _createClass(InventoryCreateComponent, [{
        key: "onVendorChange",
        value: function onVendorChange(event) {
          if (event != null) this.inventory.vendorId = event.vendorId;
        }
      }, {
        key: "oninventoryCategoryChange",
        value: function oninventoryCategoryChange(event) {
          if (event != null) this.inventory.inventoryCategoryId = event.lookupValueId;
        }
      }, {
        key: "submitAddInventoryForm",
        value: function submitAddInventoryForm(form) {
          var _this11 = this;

          this.isInventorySubmitted = false;

          if (!this.isEditInventory) {
            var details = {
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
            var params = {
              inventory: details
            };
            this.inventoryService.addInventory(params).subscribe(function (res) {
              if (res.message) {
                _this11.isInventorySubmitted = true;

                _this11.sharedService.setAlertMessage("Inventory added successfully");

                _this11.router.navigate(['ams/inventory/view']);
              } else {
                _this11.isInventorySubmitted = true;
                _this11.isError = true;
                _this11.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this11.isInventorySubmitted = true;
              _this11.isError = true;
              _this11.alertMessage = "Some error occured";
            });
          } else {
            var _details = {
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
            var _params = {
              inventory: _details
            };
            this.inventoryService.updateInventory(_params).subscribe(function (res) {
              if (res.message) {
                _this11.sharedService.setAlertMessage("Inventory updated successfully");

                _this11.router.navigate(['ams/inventory/view']);
              } else {
                _this11.isError = true;
                _this11.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this11.isError = true;
              _this11.alertMessage = "Some error occured";
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.inventory = {};

          if (this.route.params['value'].id != undefined) {
            this.isEditInventory = true;
            this.inventory.inventoryId = this.route.params['value'].id;
            this.inventoryService.getAllInventoryByInventoryId(this.inventory.inventoryId).subscribe(function (res) {
              _this12.inventory = res[0];
            });
          }

          var vendorListparams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.vendorService.getVendorByApartmentId(vendorListparams).subscribe(function (res) {
            _this12.vendorDataList = res;
          });
          var inventoryListparams = {
            LookupTypeId: 20
          };
          this.lookupService.getLookupValueByLookupTypeId(inventoryListparams).subscribe(function (res) {
            _this12.inventoryCategoryDataList = res;
          }, function (error) {});
        }
      }]);

      return InventoryCreateComponent;
    }();

    InventoryCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    InventoryCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-create/inventory-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-create.component.scss */
      "./src/app/ams/inventory/components/inventory-create/inventory-create.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__["InventoryService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], InventoryCreateComponent);
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.scss":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventoryCurrentDetailsInventoryCurrentDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktY3VycmVudC1kZXRhaWxzL2ludmVudG9yeS1jdXJyZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: InventoryCurrentDetailsComponent */

  /***/
  function srcAppAmsInventoryComponentsInventoryCurrentDetailsInventoryCurrentDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryCurrentDetailsComponent", function () {
      return InventoryCurrentDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
    /* harmony import */


    var src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Inventory */
    "./src/app/api/controllers/Inventory.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var InventoryCurrentDetailsComponent =
    /*#__PURE__*/
    function () {
      function InventoryCurrentDetailsComponent(inventoryService, cookieService) {
        _classCallCheck(this, InventoryCurrentDetailsComponent);

        this.inventoryService = inventoryService;
        this.cookieService = cookieService;
      }

      _createClass(InventoryCurrentDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
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
          }]; //  var ticketListData = res.filter(data => {
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
      }, {
        key: "getCurrentInventory",
        value: function getCurrentInventory() {
          var _this13 = this;

          var params = {};
          params.apartmentId = parseInt(this.cookieService.get('apartmentId'));
          this.inventoryService.getAllInventoryByApartmentId(params).subscribe(function (res) {
            if (res) {
              console.log(res);
            }

            _this13.gridSourceData = {
              localdata: res.length > 0 ? res : [],
              datatype: "array"
            };
            _this13.inventoryHistoryData = new jqx.dataAdapter(_this13.gridSourceData);
          });
        }
      }]);

      return InventoryCurrentDetailsComponent;
    }();

    InventoryCurrentDetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])], InventoryCurrentDetailsComponent.prototype, "datagrid", void 0);
    InventoryCurrentDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-current-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-current-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-current-details.component.scss */
      "./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_3__["InventoryService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], InventoryCurrentDetailsComponent);
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventoryInitialStockInventoryInitialStockComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header {\n  background-color: #333;\n  color: #fff;\n  overflow: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\n\nmat-icon {\n  cursor: pointer;\n}\n\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.table {\n  padding: 20px;\n}\n\n.table tbody tr td,\n.table thead th,\n.table thead {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.output {\n  padding: 20px;\n}\n\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n\n.stock-date {\n  border-color: rgba(0, 0, 0, 0.42);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: unset;\n}\n\n.save-icon {\n  padding-left: 7px;\n  padding-top: 27px;\n}\n\n.fa-times {\n  color: #ff3638;\n}\n\n.search-left {\n  left: 2px !important;\n}\n\n.pad-top {\n  padding-top: 22px;\n}\n\n@media only screen and (min-width: 300px) and (max-width: 767px) {\n  .card.table-card .card-body {\n    overflow: scroll;\n  }\n}\n\n.pt-26 {\n  padding-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LWluaXRpYWwtc3RvY2svaW52ZW50b3J5LWluaXRpYWwtc3RvY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktaW5pdGlhbC1zdG9jay9pbnZlbnRvcnktaW5pdGlhbC1zdG9jay5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLRTtFQUNFLGVBQUE7QUNGSjs7QURLRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNGSjs7QURLRTtFQUNFLGFBQUE7QUNGSjs7QURLRTs7O0VBR0UsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDRko7O0FES0U7RUFDRSxhQUFBO0FDRko7O0FEZ0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNiSjs7QURpQkU7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRGlCRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ2RKOztBRGdCQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNiRjs7QURrQkE7RUFDQyxjRTVEVTtBRDZDWDs7QURpQkE7RUFDRSxvQkFBQTtBQ2RGOztBRGlCQTtFQUNFLGlCQUFBO0FDZEY7O0FEZ0JFO0VBRUU7SUFDQSxnQkFBQTtFQ2RGO0FBQ0Y7O0FEaUJBO0VBQ0UsaUJBQUE7QUNmRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktaW5pdGlhbC1zdG9jay9pbnZlbnRvcnktaW5pdGlhbC1zdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc2Nzcy9mb250cy5zY3NzJztcblxuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOjA7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG4gIFxuICBtYXQtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuYWN0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLnRhYmxlIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAudGFibGUgdGJvZHkgdHIgdGQsXG4gIC50YWJsZSB0aGVhZCB0aCxcbiAgLnRhYmxlIHRoZWFkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgfVxuICBcbiAgLm91dHB1dCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLy8gLmRlbGV0ZSB7XG4gIC8vICAgY29sb3I6IHJlZCAgO1xuICAvLyB9XG4gIFxuICAvLyAuZG9uZSB7XG4gIC8vICAgY29sb3I6IGdyZWVuO1xuICAvLyB9XG4gIFxuICAvLyAuZWRpdCB7XG4gIC8vICAgY29sb3I6IHllbGxvdztcbiAgLy8gfVxuICBzcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIFxuICB9XG4gIFxuICAuc3RvY2stZGF0ZXtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsLjQyKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuXG4gIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XG59XG4uc2F2ZS1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7IFxuICBwYWRkaW5nLXRvcDogMjdweDtcbn1cblxuXG5cbi5mYS10aW1lc3tcbiBjb2xvcjogJHMtcmVkLTAyO1xufVxuLnNlYXJjaC1sZWZ0e1xuICBsZWZ0OiAycHggIWltcG9ydGFudDtcbn1cblxuLnBhZC10b3B7XG4gIHBhZGRpbmctdG9wOiAyMnB4O1xufVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQudGFibGUtY2FyZCB7IFxuICAgIC5jYXJkLWJvZHkge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gfVxuICB9XG59XG4ucHQtMjZ7XG4gIHBhZGRpbmctdG9wOiAyNnB4O1xufSIsImhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbm1hdC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYmxlIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYmxlIHRib2R5IHRyIHRkLFxuLnRhYmxlIHRoZWFkIHRoLFxuLnRhYmxlIHRoZWFkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm91dHB1dCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbnNwYW4udWktY29sdW1uLXJlc2l6ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5zdG9jay1kYXRlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHVuc2V0O1xufVxuXG4uc2F2ZS1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctdG9wOiAyN3B4O1xufVxuXG4uZmEtdGltZXMge1xuICBjb2xvcjogI2ZmMzYzODtcbn1cblxuLnNlYXJjaC1sZWZ0IHtcbiAgbGVmdDogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWQtdG9wIHtcbiAgcGFkZGluZy10b3A6IDIycHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZC50YWJsZS1jYXJkIC5jYXJkLWJvZHkge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbn1cbi5wdC0yNiB7XG4gIHBhZGRpbmctdG9wOiAyNnB4O1xufSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: InventoryInitialStockComponent */

  /***/
  function srcAppAmsInventoryComponentsInventoryInitialStockInventoryInitialStockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryInitialStockComponent", function () {
      return InventoryInitialStockComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/PurchaseOrder */
    "./src/app/api/controllers/PurchaseOrder.ts");
    /* harmony import */


    var src_app_shared_services_csv_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/csv.service */
    "./src/app/shared/services/csv.service.ts");

    var InventoryInitialStockComponent =
    /*#__PURE__*/
    function () {
      function InventoryInitialStockComponent(router, injector, sharedService, cookieService, fb, purchaseOrderService, csvService) {
        _classCallCheck(this, InventoryInitialStockComponent);

        this.router = router;
        this.injector = injector;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.fb = fb;
        this.purchaseOrderService = purchaseOrderService;
        this.csvService = csvService;
        this.row = {};
        this.search = {
          'searchWarehouse': ''
        };
        this.assetList = [];
        this.categoryList = [];
        this.subCategoryList = [];
        this.selectedItems = [];
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.assetSettings = {
          singleSelection: true,
          text: "Search Asset",
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          enableSearchFilter: true,
          badgeShowLimit: 3
        };
        this.categorySettings = {
          singleSelection: true,
          text: "Search Category",
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          enableSearchFilter: true,
          badgeShowLimit: 3
        };
        this.subCategorySettings = {
          singleSelection: true,
          text: "Search Sub Category",
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          enableSearchFilter: true,
          badgeShowLimit: 3
        };
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
      } // code  filter function 


      _createClass(InventoryInitialStockComponent, [{
        key: "onItemSelect",
        value: function onItemSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "OnItemDeSelect",
        value: function OnItemDeSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAll",
        value: function onDeSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          // this.isExternalDataLoaded = true;
          // this.touchedRows = [];
          // this.userTable = this.fb.group({
          //   tableRows: this.fb.array([])
          // });
          // this.addRow();
          this.getInitalWarehouse();
          this.getAllGetAllWarehouse();
          this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
            if (id != null) {
              var param = {};
              param = {
                apartmentId: _this14.cookieService.get('apartmentId'),
                InitialStockId: id,
                deleteBy: parseInt(_this14.cookieService.get('userId'))
              };

              _this14.purchaseOrderService.deleteInitialStock(param).subscribe(function (res) {
                _this14.getInitalWarehouse();

                setTimeout(function () {
                  _this14.sharedService.setAlertMessage("Initial Stock deleted successfully");

                  _this14.sharedService.setUnitListDeleteIndex(null);
                }, 500);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }, {
        key: "download",
        value: function download() {
          var headerArray = ['warehouseId', 'materialId', 'initalStockQty', 'stockasonDate'];
          this.csvService.downloadFile(this.initalStockData, headerArray, 'IntialStock');
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.control = this.userTable.get('tableRows') as FormArray;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "initiateForm",
        value: function initiateForm() {
          return this.fb.group({
            warehouseId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            materialId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            initalStockQty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            stockasonDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            isEditable: [true]
          });
        }
      }, {
        key: "filterCategoryItem",
        value: function filterCategoryItem(value) {
          this.initalStockData = this.tempInitalStockData.filter(function (item) {
            return item.warehouseId.toString().toLowerCase().indexOf(value.toLowerCase()) > -1;
          });
        }
      }, {
        key: "getInitalWarehouse",
        value: function getInitalWarehouse() {
          var _this15 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.isAssetLoaded = true;
          this.purchaseOrderService.getAllInitialStockByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this15.initalStockData = [];
              _this15.initalStockData = res && res.length > 0 ? res : [];
              _this15.isAssetLoaded = false;
              _this15.tempInitalStockData = _this15.initalStockData;
              _this15.totalItems = _this15.initalStockData.length;

              if (_this15.totalItems > _this15.itemLimit) {
                _this15.ItemEndIndex = _this15.itemLimit;
              } else {
                _this15.ItemEndIndex = _this15.totalItems;
              } // tslint:disable-next-line:no-shadowed-variable
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
      }, {
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        } // addRow() {
        //   const control =  this.userTable.get('tableRows') as FormArray;
        //   control.push(this.initiateForm());
        // }
        // deleteRow(index: number) {
        //   const control =  this.userTable.get('tableRows') as FormArray;
        //   control.removeAt(index);
        // }

      }, {
        key: "editRow",
        value: function editRow(group) {
          group.get('isEditable').setValue(true);
        }
      }, {
        key: "doneRow",
        value: function doneRow(group) {
          group.get('isEditable').setValue(false);

          if (this.isEditRow == true) {
            this.updateWareHouse(group.value);
          } else {
            this.addWareHouse(group.value);
          }
        } // saveUserDetails() {
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

      }, {
        key: "addWareHouse",
        value: function addWareHouse(data) {
          var _this16 = this;

          var reqObj = {};
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
            "updatedOn": new Date().toISOString
          };
          var params = {};
          params.initialstock = reqObj;
          this.purchaseOrderService.addInitialStock(params).subscribe(function (res) {
            console.log(res, res);

            if (res) {
              _this16.sharedService.setAlertMessage("Initial stock added successfully");

              _this16.isAssetLoaded = false;
              _this16.row = {};

              _this16.getInitalWarehouse();
            }
          });
        }
      }, {
        key: "getAllGetAllWarehouse",
        value: function getAllGetAllWarehouse() {
          var _this17 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.isAssetLoaded = true;
          this.purchaseOrderService.getAllWarehouseByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              // this.warehouseData = [];
              _this17.warehouseData = res && res.length > 0 ? res : [];
              _this17.row = {};
            }
          });
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(index, data) {
          // console.log(data.warehouseId);  
          this.modalService.showConfirmModal(data.initialStockId);
        }
      }, {
        key: "updateWareHouse",
        value: function updateWareHouse(data) {
          var _this18 = this;

          var reqObj = {};
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
          var params = {};
          params.initialstock = reqObj;
          this.purchaseOrderService.updateInitialStock(params).subscribe(function (res) {
            if (res) {
              _this18.sharedService.setAlertMessage("Initial Stock Updated successfully");

              _this18.isAssetLoaded = false;
              _this18.isEditRow = false;
              _this18.wareHouseIndex = -1;

              _this18.getInitalWarehouse();
            }
          });
        }
      }]);

      return InventoryInitialStockComponent;
    }();

    InventoryInitialStockComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_7__["PurchaseOrderService"]
      }, {
        type: src_app_shared_services_csv_service__WEBPACK_IMPORTED_MODULE_8__["CsvService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('data', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", InventoryInitialStockComponent)], InventoryInitialStockComponent.prototype, "data", void 0);
    InventoryInitialStockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-initial-stock',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-initial-stock.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-initial-stock.component.scss */
      "./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_7__["PurchaseOrderService"], src_app_shared_services_csv_service__WEBPACK_IMPORTED_MODULE_8__["CsvService"]])], InventoryInitialStockComponent);
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventoryInternalTransferInventoryInternalTransferComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktaW50ZXJuYWwtdHJhbnNmZXIvaW52ZW50b3J5LWludGVybmFsLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: InventoryInternalTransferComponent */

  /***/
  function srcAppAmsInventoryComponentsInventoryInternalTransferInventoryInternalTransferComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryInternalTransferComponent", function () {
      return InventoryInternalTransferComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/PurchaseOrder */
    "./src/app/api/controllers/PurchaseOrder.ts");
    /* harmony import */


    var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Staff */
    "./src/app/api/controllers/Staff.ts");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Inventory */
    "./src/app/api/controllers/Inventory.ts");

    var InventoryInternalTransferComponent =
    /*#__PURE__*/
    function () {
      function InventoryInternalTransferComponent(cookieService, purchaseOrderService, staffService, sharedService, inventoryService) {
        _classCallCheck(this, InventoryInternalTransferComponent);

        this.cookieService = cookieService;
        this.purchaseOrderService = purchaseOrderService;
        this.staffService = staffService;
        this.sharedService = sharedService;
        this.inventoryService = inventoryService;
        this.transfer = {};
        this.warehouseData = [];
        this.staffList = [];
        this.settings = {};
        this.selectedItem = [];
        this.materialItemData = [];
        this.issueToStaff = [];
        this.issueByStaff = [];
      }

      _createClass(InventoryInternalTransferComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.transfer.fromWarehouseId = "";
          this.transfer.toWarehouseId = "";
          this.transfer.iN_GoodsincomingReceivedbyStaffID = "";
          this.getAllGetAllWarehouse();
          this.getAllStaff();
          this.getMaterials();
          this.settings = {
            singleSelection: true,
            text: "Search",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3
          };
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          console.log(item);
          this.transfer.materialId = item.id;
        }
      }, {
        key: "OnItemDeSelect",
        value: function OnItemDeSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "selectedItems",
        value: function selectedItems(_selectedItems) {
          console.log(_selectedItems);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAll",
        value: function onDeSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onItemSelectByStaff",
        value: function onItemSelectByStaff(item) {
          console.log(item);
          this.transfer.iN_GoodsincomingReceivedbyStaffID = item.id;
        }
      }, {
        key: "OnItemDeSelectByStaff",
        value: function OnItemDeSelectByStaff(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "selectedItemsByStaff",
        value: function selectedItemsByStaff(selectedItems) {
          console.log(selectedItems);
        }
      }, {
        key: "onSelectAllByStaff",
        value: function onSelectAllByStaff(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAllByStaff",
        value: function onDeSelectAllByStaff(items) {
          console.log(items);
        }
      }, {
        key: "onItemSelectToStaff",
        value: function onItemSelectToStaff(item) {
          console.log(item);
          this.transfer.ouT_TowhomissuedStaffID = item.id;
        }
      }, {
        key: "OnItemDeSelectToStaff",
        value: function OnItemDeSelectToStaff(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "selectedItemsToStaff",
        value: function selectedItemsToStaff(selectedItems) {
          console.log(selectedItems);
        }
      }, {
        key: "onSelectAllToStaff",
        value: function onSelectAllToStaff(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAllToStaff",
        value: function onDeSelectAllToStaff(items) {
          console.log(items);
        }
      }, {
        key: "getAllGetAllWarehouse",
        value: function getAllGetAllWarehouse() {
          var _this19 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.isAssetLoaded = true;
          this.purchaseOrderService.getAllWarehouseByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              // this.warehouseData = [];
              _this19.warehouseData = res && res.length > 0 ? res : [];
            }
          });
        }
      }, {
        key: "getAllStaff",
        value: function getAllStaff() {
          var _this20 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.staffService.getAllStaffsByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              // this.staffList = res ? res : [];
              if (res && res.length > 0) {
                res.filter(function (val) {
                  _this20.staffList.push({
                    'id': val.staffId,
                    'itemName': val.firstName
                  });
                });
              }
            }
          });
        }
      }, {
        key: "getMaterials",
        value: function getMaterials() {
          var _this21 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.purchaseOrderService.getMaterialsByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              if (res && res.length > 0) {
                res.filter(function (val) {
                  _this21.materialItemData.push({
                    'id': val.materialId,
                    'itemName': val.material1
                  });
                });
              }

              console.log(_this21.materialItemData);
            }
          });
        }
      }, {
        key: "addInternalTransfer",
        value: function addInternalTransfer() {
          var _this22 = this;

          var reqObj = {};
          reqObj = {
            "fromWarehouseId": Number(this.transfer.fromWarehouseId),
            "toWarehouseId": Number(this.transfer.toWarehouseId),
            "materialId": this.transfer.materialId,
            "inventoryTransactionTypeId": 14,
            "totalStockQty": Number(this.transfer.totalStockQty),
            "comments": this.transfer.comments,
            "apartmentId": this.cookieService.get('apartmentId'),
            "iN_GoodsincomingReceivedbyStaffID": Number(this.transfer.iN_GoodsincomingReceivedbyStaffID),
            "ouT_TowhomissuedStaffID": Number(this.transfer.ouT_TowhomissuedStaffID),
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date(),
            "updatedBy": null,
            "updatedOn": new Date()
          };
          var params = {};
          params.inventoryTransaction = reqObj;
          this.inventoryService.addInventoryInternalTransferTransaction(params).subscribe(function (res) {
            console.log(res, res);

            if (res && res.message) {
              _this22.sharedService.setAlertMessage("Transfer Item added successfully");

              _this22.isAssetLoaded = false; //    this.row={};
              //   this.getMaterials();
            }
          });
        }
      }]);

      return InventoryInternalTransferComponent;
    }();

    InventoryInternalTransferComponent.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"]
      }, {
        type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_6__["InventoryService"]
      }];
    };

    InventoryInternalTransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-internal-transfer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-internal-transfer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-internal-transfer.component.scss */
      "./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_6__["InventoryService"]])], InventoryInternalTransferComponent);
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventoryReceivingInventoryReceivingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card .card {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n}\nmat-card .card .card-header {\n  font-weight: 600;\n}\nmat-card .card .card-header label {\n  margin: 0px;\n}\nmat-card .card .card-body {\n  margin: 0px;\n  padding-bottom: 0px;\n  padding-top: 10px;\n}\nmat-card .card .card-body label {\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LXJlY2VpdmluZy9pbnZlbnRvcnktcmVjZWl2aW5nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwic3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LXJlY2VpdmluZy9pbnZlbnRvcnktcmVjZWl2aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1RO0VDdUROLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUMzREY7QUZHWTtFQUNJLGdCQUFBO0FFRGhCO0FGR2dCO0VBQ0ksV0FBQTtBRURwQjtBRktZO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUVIaEI7QUZLZ0I7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FFSHBCIiwiZmlsZSI6InNyYy9hcHAvYW1zL2ludmVudG9yeS9jb21wb25lbnRzL2ludmVudG9yeS1yZWNlaXZpbmcvaW52ZW50b3J5LXJlY2VpdmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3Njc3MvZm9udHMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuICBcblxuICAgIG1hdC1jYXJkIHtcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgQGluY2x1ZGUgZGVzcC1yZWd1bGFyKCk7XG5cbiAgICAgICAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIm1hdC1jYXJkIC5jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxubWF0LWNhcmQgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbm1hdC1jYXJkIC5jYXJkIC5jYXJkLWhlYWRlciBsYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xufVxubWF0LWNhcmQgLmNhcmQgLmNhcmQtYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbm1hdC1jYXJkIC5jYXJkIC5jYXJkLWJvZHkgbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: InventoryReceivingComponent */

  /***/
  function srcAppAmsInventoryComponentsInventoryReceivingInventoryReceivingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryReceivingComponent", function () {
      return InventoryReceivingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/PurchaseOrder */
    "./src/app/api/controllers/PurchaseOrder.ts");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Inventory */
    "./src/app/api/controllers/Inventory.ts");
    /* harmony import */


    var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Staff */
    "./src/app/api/controllers/Staff.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");

    var InventoryReceivingComponent =
    /*#__PURE__*/
    function () {
      function InventoryReceivingComponent(cookieService, purchaseOrderService, sharedService, inventoryService, staffService, lookupService, injector) {
        _classCallCheck(this, InventoryReceivingComponent);

        this.cookieService = cookieService;
        this.purchaseOrderService = purchaseOrderService;
        this.sharedService = sharedService;
        this.inventoryService = inventoryService;
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.injector = injector;
        this.asset = {};
        this.receiving = {};
        this.materialSetting = {};
        this.materialItemData = [];
        this.assetSettings = {};
        this.selectedItem = [];
        this.staffList = [];
        this.inventoryList = [];
        this.ItemStartIndex = 0;
        this.itemLimit = 5;
        this.issueToStaff = [];
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
      }

      _createClass(InventoryReceivingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.getAllGetAllWarehouse();
          this.getMaterials();
          this.getAllStaff();
          this.getAllReceivingItem();
          this.receiving.warehouseId = "";
          this.receiving.inGoodsincomingReceivedbyStaffId = "";
          this.materialSetting = {
            singleSelection: true,
            text: "Select inventory",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3
          };
          this.assetSettings = {
            singleSelection: true,
            text: "Search",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3
          };
          this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
            if (id != null) {
              var param = {};
              param = {
                inventoryId: id,
                deleteBy: parseInt(_this23.cookieService.get('userId'))
              };

              _this23.inventoryService.deleteInventory(param).subscribe(function (res) {
                setTimeout(function () {
                  _this23.sharedService.setAlertMessage("Received item deleted successfully");

                  _this23.sharedService.setUnitListDeleteIndex(null); // this.deleteType = '';
                  // this.getAllInventory();

                }, 500);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          this.receiving.materialId = item.id;
          this.getAvailableStock();
          console.log(item);
        }
      }, {
        key: "OnItemDeSelect",
        value: function OnItemDeSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "selectedItems",
        value: function selectedItems(_selectedItems2) {
          console.log(_selectedItems2);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAll",
        value: function onDeSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onItemSelectToStaff",
        value: function onItemSelectToStaff(item) {
          console.log(item);
          this.receiving.inGoodsincomingReceivedbyStaffId = item.id;
        }
      }, {
        key: "OnItemDeSelectToStaff",
        value: function OnItemDeSelectToStaff(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "selectedItemsToStaff",
        value: function selectedItemsToStaff(selectedItems) {
          console.log(selectedItems);
        }
      }, {
        key: "onSelectAllToStaff",
        value: function onSelectAllToStaff(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAllToStaff",
        value: function onDeSelectAllToStaff(items) {
          console.log(items);
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(index, data) {
          this.modalService.showConfirmModal(data.inventoryTransactionId);
        }
      }, {
        key: "setUpdate",
        value: function setUpdate(list) {
          var mainDiv = document.getElementById('outertop'); // mainDiv.scrollTop = 0;

          mainDiv.scrollIntoView();
          this.receiving = list;
        }
      }, {
        key: "getAllGetAllWarehouse",
        value: function getAllGetAllWarehouse() {
          var _this24 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.isAssetLoaded = true;
          this.purchaseOrderService.getAllWarehouseByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              // this.warehouseData = [];
              _this24.warehouseData = res && res.length > 0 ? res : [];
            }
          });
        }
      }, {
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "getAllStaff",
        value: function getAllStaff() {
          var _this25 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.isAssetLoaded = true;
          this.staffService.getAllStaffsByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this25.isAssetLoaded = false; // this.staffList = res ? res : [];

              if (res && res.length > 0) {
                res.filter(function (val) {
                  _this25.staffList.push({
                    'id': val.staffId,
                    'itemName': val.firstName
                  });
                });
              }
            }
          });
        }
      }, {
        key: "updateReceiving",
        value: function updateReceiving() {
          var _this26 = this;

          var receivingObj = {};
          receivingObj = {
            "inventoryTransactionId": this.receiving.inventoryTransactionId,
            "apartmentId": this.cookieService.get('apartmentId'),
            "inventoryTransactionTypeId": 12,
            "date": new Date().toISOString,
            "warehouseId": this.receiving.warehouseId,
            "materialId": this.receiving.materialId,
            "sku": this.receiving.sku,
            "transactionTypeId": 12,
            "availableStockQty": this.receiving.availableStockQty,
            "inPonumber": this.receiving.inPonumber,
            "inGoodReceiptNo": this.receiving.inGoodReceiptNo,
            "inReceivingReason": this.receiving.inReceivingReason,
            "inReceivedStockQty": this.receiving.inReceivedStockQty,
            "inStockReceivedDate": this.receiving.inStockReceivedDate,
            "inCountQualityVerified": true,
            "inDamageReturnedQty": this.receiving.inDamageReturnedQty,
            "inActualStockMovedIn": this.receiving.inActualStockMovedIn,
            "inTotalCost": this.receiving.inTotalCost,
            "inGoodsincomingReceivedbyStaffId": this.receiving.inGoodsincomingReceivedbyStaffId,
            // "comments": "string",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString
          };
          var params = {};
          params.inventoryTransaction = receivingObj;
          this.inventoryService.updateInventoryTransaction(params).subscribe(function (res) {
            console.log(res, res);

            if (res) {
              _this26.sharedService.setAlertMessage("Receiving Item updated successfully");

              _this26.isAssetLoaded = false;
              _this26.receiving = {};

              _this26.getAllReceivingItem();
            }
          });
        }
      }, {
        key: "addReceiving",
        value: function addReceiving() {
          var _this27 = this;

          var receivingObj = {};
          receivingObj = {
            "apartmentId": this.cookieService.get('apartmentId'),
            "inventoryTransactionTypeId": 12,
            "date": new Date().toISOString,
            "warehouseId": this.receiving.warehouseId,
            "materialId": this.receiving.materialId,
            "sku": this.receiving.sku,
            "transactionTypeId": 12,
            "availableStockQty": this.receiving.availableStockQty,
            "inPonumber": this.receiving.inPonumber,
            "inGoodReceiptNo": this.receiving.inGoodReceiptNo,
            "inReceivingReason": this.receiving.inReceivingReason,
            "inReceivedStockQty": this.receiving.inReceivedStockQty,
            "inStockReceivedDate": this.receiving.inStockReceivedDate,
            "inCountQualityVerified": true,
            "inDamageReturnedQty": this.receiving.inDamageReturnedQty,
            "inActualStockMovedIn": this.receiving.inActualStockMovedIn,
            "inTotalCost": this.receiving.inTotalCost,
            "inGoodsincomingReceivedbyStaffId": this.receiving.inGoodsincomingReceivedbyStaffId,
            // "comments": "string",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date(),
            "updatedBy": null,
            "updatedOn": new Date()
          };
          var params = {};
          params.inventoryTransaction = receivingObj;
          this.inventoryService.addInventoryTransaction(params).subscribe(function (res) {
            // console.log(res, res);
            if (res) {
              _this27.sharedService.setAlertMessage("Receiving Item added successfully");

              _this27.isAssetLoaded = false; //    this.row={};

              _this27.receiving = {};
              _this27.selectedItem = [];
              _this27.issueToStaff = [];

              _this27.getAllReceivingItem(); //   this.getMaterials();

            }
          });
        }
      }, {
        key: "getMaterials",
        value: function getMaterials() {
          var _this28 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.purchaseOrderService.getMaterialsByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              if (res && res.length > 0) {
                res.filter(function (val) {
                  _this28.materialItemData.push({
                    'id': val.materialId,
                    'itemName': val.material1
                  });
                });
              }

              console.log(_this28.materialItemData);
            }
          });
        }
      }, {
        key: "getAvailableStock",
        value: function getAvailableStock() {
          var _this29 = this;

          if (!this.receiving.materialId && !this.receiving.warehouseId) {
            return;
          }

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.inventoryService.getStockCountbyMaterialId(queryParamBase).subscribe(function (res) {
            if (res) {
              console.log(res);
              _this29.receiving.availableStockQty = 1;
            }
          });
        }
      }, {
        key: "getAllReceivingItem",
        value: function getAllReceivingItem() {
          var _this30 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            active: 1
          }; // this.isAssetLoaded = true;

          this.inventoryService.getAllInventoryTransactionByApartmentIdStatus(queryParamBase).subscribe(function (res) {
            if (res) {
              // this.warehouseData = [];
              _this30.inventoryList = res && res.length > 0 ? res : [];
              console.log(_this30.inventoryList);
              _this30.totalItems = _this30.inventoryList.length;

              if (_this30.totalItems > _this30.itemLimit) {
                _this30.ItemEndIndex = _this30.itemLimit;
              } else {
                _this30.ItemEndIndex = _this30.totalItems;
              }
            }
          });
        }
      }]);

      return InventoryReceivingComponent;
    }();

    InventoryReceivingComponent.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_5__["InventoryService"]
      }, {
        type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__["StaffService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    InventoryReceivingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-receiving',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-receiving.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-receiving.component.scss */
      "./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_5__["InventoryService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__["StaffService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], InventoryReceivingComponent);
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventoryReportsInventoryReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktcmVwb3J0cy9pbnZlbnRvcnktcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: InventoryReportsComponent */

  /***/
  function srcAppAmsInventoryComponentsInventoryReportsInventoryReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryReportsComponent", function () {
      return InventoryReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InventoryReportsComponent =
    /*#__PURE__*/
    function () {
      function InventoryReportsComponent() {
        _classCallCheck(this, InventoryReportsComponent);
      }

      _createClass(InventoryReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InventoryReportsComponent;
    }();

    InventoryReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-reports.component.scss */
      "./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InventoryReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventorySetupInventorySetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".icon-tabs {\n  display: flex;\n  justify-content: center;\n}\n.icon-tabs li {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n  padding: 0;\n  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  border-radius: 6px !important;\n}\n.icon-tabs li a {\n  color: #585858;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  padding: 10px 25px;\n  position: relative;\n  background-color: #ffffff;\n}\n.icon-tabs li a.active {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n.setup-search {\n  position: relative;\n  top: 13px;\n  left: 23px;\n  padding-left: 10px;\n  font-size: 1.3rem;\n  color: #8391a1;\n}\n.card.table-card .card-body {\n  overflow: hidden;\n}\n.subCategory {\n  padding-top: 10px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  padding-bottom: 10px;\n}\n.subCategory li {\n  list-style-type: circle;\n}\n.wd-100 {\n  width: 100%;\n}\n.wd-50 {\n  width: 50%;\n}\nheader {\n  background-color: #333;\n  color: #fff;\n  overflow: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\nmat-icon {\n  cursor: pointer;\n}\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n.table {\n  padding: 20px;\n}\n.table tbody tr td,\n.table thead th,\n.table thead {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n.output {\n  padding: 20px;\n}\n.delete {\n  color: red;\n}\n.done {\n  color: green;\n}\n.edit {\n  color: yellow;\n}\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n.fa-floppy-o {\n  color: #54b941;\n}\n.cus-input {\n  border-radius: 8px;\n  border: 1px solid #dadada;\n  padding-left: 10px;\n  height: 30px;\n}\n.save-icon {\n  padding-left: 7px;\n  padding-top: 27px;\n}\n.fa-times {\n  color: #ff3638;\n}\n.search-left {\n  left: 2px !important;\n}\n.pad-top {\n  padding-top: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LXNldHVwL2ludmVudG9yeS1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2ludmVudG9yeS9jb21wb25lbnRzL2ludmVudG9yeS1zZXR1cC9pbnZlbnRvcnktc2V0dXAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0ZKO0FER0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUVhTiw2Q0ZaTTtFRWFOLGtERmJNO0VFY04scURGZE07RUVKUCw2QkFBQTtBRFFEO0FERlE7RUFDSSxjR21GRDtFQ2xEVCxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUE2QkEsaUJBQUE7RUo3RFUsa0JBQUE7RUFDQSxrQkdiUDtFSGNPLHlCR21HSjtBRjdGUjtBRExZO0VBQ0kseUJHd0NQO0VIdkNPLGNHZ0dSO0FGekZSO0FEQUE7RUFDSSxrQkd6QkM7RUgwQkQsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0d4QlM7QUYyQmI7QURBRTtFQUNFLGdCQUFBO0FDR0o7QURDRTtFQUNFLGlCQUFBO0VJTEYscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFSkdFLG9CQUFBO0FDTUo7QURMSTtFQUNJLHVCQUFBO0FDT1I7QURIRTtFQUNFLFdBQUE7QUNNSjtBREhFO0VBQ0UsVUFBQTtBQ01KO0FERkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNLSjtBREZFO0VBQ0UsZUFBQTtBQ0tKO0FERkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDS0o7QURGRTtFQUNFLGFBQUE7QUNLSjtBREZFOzs7RUFHRSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNLSjtBREZFO0VBQ0UsYUFBQTtBQ0tKO0FERkU7RUFDRSxVQUFBO0FDS0o7QURGRTtFQUNFLFlBQUE7QUNLSjtBREZFO0VBQ0UsYUFBQTtBQ0tKO0FESEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ01KO0FES0U7RUFDRSxjR3ZFTTtBRnFFVjtBRElFO0VBQ0Usa0JBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ROO0FER0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURLRTtFQUNDLGNHM0hRO0FGeUhYO0FESUU7RUFDRSxvQkFBQTtBQ0RKO0FESUU7RUFDRSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYW1zL2ludmVudG9yeS9jb21wb25lbnRzL2ludmVudG9yeS1zZXR1cC9pbnZlbnRvcnktc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcbi5pY29uLXRhYnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsaSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMCAycHggM3B4IC0xcHggcmdiYSgkYmxhY2ssIDAuMSkpO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDZweCk7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICRncmV5LTcwMDtcbiAgICAgICAgICAgIEBpbmNsdWRlIGhlYWQtbWVkaXVtO1xuICAgICAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4OyAgICAgICAgICAgICAgXG4gICAgICAgICAgICBwb3NpdGlvbjogJHJlbDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbS1ibHVlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2V0dXAtc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogJHJlbDtcbiAgICB0b3A6IDEzcHg7XG4gICAgbGVmdDogMjNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6JGxpZ2h0LWJsdWU7XG4gIH1cbiAgICBcbiAgLmNhcmQudGFibGUtY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIFxuICBcbiAgLnN1YkNhdGVnb3J5IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBAaW5jbHVkZSBoZWFkLXJlZ3VsYXIoKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBsaXtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG4gICAgfVxuICB9XG4gXG4gIC53ZC0xMDAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAud2QtNTAge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG5cbiAgaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOjA7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG4gIFxuICBtYXQtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuYWN0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLnRhYmxlIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAudGFibGUgdGJvZHkgdHIgdGQsXG4gIC50YWJsZSB0aGVhZCB0aCxcbiAgLnRhYmxlIHRoZWFkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgfVxuICBcbiAgLm91dHB1dCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLmRlbGV0ZSB7XG4gICAgY29sb3I6IHJlZCAgO1xuICB9XG4gIFxuICAuZG9uZSB7XG4gICAgY29sb3I6IGdyZWVuO1xuICB9XG4gIFxuICAuZWRpdCB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgfVxuICBzcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIFxuICB9XG5cbiAgLy8gLnRhYmxlLWNhcmQge1xuICAvLyAgIGRpc3BsYXk6IGJsb2NrO1xuICAvLyAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgLy8gfVxuICAvLyAudGFibGUgdGgsIC50YWJsZSB0ZCB7XG4gIC8vICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50XG4gIC8vIH1cbiAgLmZhLWZsb3BweS1ve1xuICAgIGNvbG9yOiAkbS1ncmVlbiA7XG4gIH1cbiAgLmN1cy1pbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIC5zYXZlLWljb24ge1xuICAgIHBhZGRpbmctbGVmdDogN3B4OyBcbiAgICBwYWRkaW5nLXRvcDogMjdweDtcbiAgfVxuXG5cbiAgXG4gIC5mYS10aW1lc3tcbiAgIGNvbG9yOiAkcy1yZWQtMDI7XG4gIH1cbiAgLnNlYXJjaC1sZWZ0e1xuICAgIGxlZnQ6IDJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBhZC10b3B7XG4gICAgcGFkZGluZy10b3A6IDIycHg7XG4gIH1cbi8vICAgLnRhYmxlIHRkIHtcbi8vICAgICBwYWRkaW5nOiAxMHB4IDE5cHg7XG4vLyB9IiwiLmljb24tdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmljb24tdGFicyBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbn1cbi5pY29uLXRhYnMgbGkgYSB7XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmljb24tdGFicyBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2V0dXAtc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IDIzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjODM5MWExO1xufVxuXG4uY2FyZC50YWJsZS1jYXJkIC5jYXJkLWJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3ViQ2F0ZWdvcnkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5zdWJDYXRlZ29yeSBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xufVxuXG4ud2QtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53ZC01MCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbm1hdC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYmxlIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYmxlIHRib2R5IHRyIHRkLFxuLnRhYmxlIHRoZWFkIHRoLFxuLnRhYmxlIHRoZWFkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm91dHB1dCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kZWxldGUge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZG9uZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmVkaXQge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG5zcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uZmEtZmxvcHB5LW8ge1xuICBjb2xvcjogIzU0Yjk0MTtcbn1cblxuLmN1cy1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5zYXZlLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgcGFkZGluZy10b3A6IDI3cHg7XG59XG5cbi5mYS10aW1lcyB7XG4gIGNvbG9yOiAjZmYzNjM4O1xufVxuXG4uc2VhcmNoLWxlZnQge1xuICBsZWZ0OiAycHggIWltcG9ydGFudDtcbn1cblxuLnBhZC10b3Age1xuICBwYWRkaW5nLXRvcDogMjJweDtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBkZXNlbGVjdCAoKSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBmbGlwKCRkaXJlY3Rpb24pIHtcbiAgdHJhbnNmb3JtIDogcm90YXRlWSgkZGlyZWN0aW9uKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: InventorySetupComponent */

  /***/
  function srcAppAmsInventoryComponentsInventorySetupInventorySetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventorySetupComponent", function () {
      return InventorySetupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/PurchaseOrder */
    "./src/app/api/controllers/PurchaseOrder.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_shared_components_assets_add_setup_assets_add_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/components/assets-add-setup/assets-add-setup.component */
    "./src/app/shared/components/assets-add-setup/assets-add-setup.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/api/controllers/Staff */
    "./src/app/api/controllers/Staff.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");

    var InventorySetupComponent =
    /*#__PURE__*/
    function () {
      function InventorySetupComponent(dialog, fb, cookieService, purchaseOrderService, injector, sharedService, lookupService, staffService, apartmentService) {
        _classCallCheck(this, InventorySetupComponent);

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
        this.typeItemStartIndex = 0;
        this.typeItemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.typeRow = {}; // externalListData: any;
        // externalData: string = "";
        // isExternalDataLoaded: boolean = false;
        // externalDeleteId: string = "";

        this.errorMessage = "";
        this.isError = false;
        this.warehouseForm = {};
        this.row = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
      }

      _createClass(InventorySetupComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "getTypeIndexParams",
        value: function getTypeIndexParams(event) {
          this.typeItemStartIndex = event.typeItemStartIndex;
          this.typeItemEndIndex = event.typeItemEndIndex;
          this.typeItemLimit = event.typeItemLimit;
        }
      }, {
        key: "filterCategoryItem",
        value: function filterCategoryItem(value) {
          this.inventoryCategoryList = this.tempCategoryList.filter(function (item) {
            return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
          });
        }
      }, {
        key: "filterWareHouse",
        value: function filterWareHouse(value) {
          this.warehouseData = this.tempWarehouseData.filter(function (item) {
            return item.warehouseName.toString().toLowerCase().indexOf(value.toLowerCase()) > -1;
          });
        }
      }, {
        key: "addSetUp",
        value: function addSetUp(name, type, value, e) {
          var _this31 = this;

          console.log(type, value);
          var dialogRef = this.dialog.open(src_app_shared_components_assets_add_setup_assets_add_setup_component__WEBPACK_IMPORTED_MODULE_8__["AssetsAddSetupComponent"], {
            width: '70%',
            data: {
              'name': name,
              'type': type,
              'value': JSON.stringify(value)
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);

            if (result) {
              _this31.getAllInventory();
            }
          });
        } // code  filter function 
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

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.getAllInventory();
          this.getAllStaff();
          this.getAllLocation();
          this.getAllMaterial();
          this.selectedTab = 'WareHousesSetup'; //Default selected tab

          this.getAllGetAllWarehouse();
          this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
            if (id != null) {
              if (_this32.deleteType == 'categoryDelete') {
                var param = {};
                param = {
                  categoryId: id,
                  deletedBy: parseInt(_this32.cookieService.get('userId'))
                };

                _this32.lookupService.deleteCategory(param).subscribe(function (res) {
                  setTimeout(function () {
                    _this32.sharedService.setAlertMessage("Category deleted successfully");

                    _this32.sharedService.setUnitListDeleteIndex(null);

                    _this32.deleteType = '';

                    _this32.getAllInventory();
                  }, 500);
                }, function (error) {
                  console.log(error);
                });
              } else if (_this32.deleteMaterial == true) {
                var _param = {};
                _param = {
                  lookupValueId: id,
                  updateUserId: parseInt(_this32.cookieService.get('userId'))
                };

                _this32.lookupService.deleteLookupvalue(_param).subscribe(function (res) {
                  setTimeout(function () {
                    _this32.sharedService.setAlertMessage("Material type deleted successfully");

                    _this32.sharedService.setUnitListDeleteIndex(null);

                    _this32.deleteType = '';
                    _this32.deleteMaterial = false;

                    _this32.getAllMaterial();
                  }, 500);
                }, function (error) {
                  console.log(error);
                });
              } else {
                var _param2 = {};
                _param2 = {
                  apartmentId: _this32.cookieService.get('apartmentId'),
                  warehouseId: id,
                  deleteBy: parseInt(_this32.cookieService.get('userId'))
                };

                _this32.purchaseOrderService.deleteWarehouse(_param2).subscribe(function (res) {
                  _this32.getAllGetAllWarehouse();

                  setTimeout(function () {
                    _this32.sharedService.setAlertMessage("Warehouse deleted successfully");

                    _this32.sharedService.setUnitListDeleteIndex(null);
                  }, 500);
                }, function (error) {
                  console.log(error);
                });
              }
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.control = this.userTable.get('tableRows') as FormArray;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        } // Tab

      }, {
        key: "showTab",
        value: function showTab(type) {
          this.selectedTab = type;
        } // Tab

      }, {
        key: "isActive",
        value: function isActive(type) {
          return this.selectedTab == type ? true : false;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        } // initiateForm(): FormGroup {
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

      }, {
        key: "deleteRow",
        value: function deleteRow(index, data) {
          // const control = this.userTable.get('tableRows') as FormArray;
          // control.removeAt(index);
          console.log(data.warehouseId);
          this.modalService.showConfirmModal(data.warehouseId);
        }
      }, {
        key: "deleteMaterialType",
        value: function deleteMaterialType(index, data) {
          this.deleteMaterial = true;
          this.modalService.showConfirmModal(data.lookupValueId);
        } // editRow(group: FormGroup) {
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

      }, {
        key: "getAllGetAllWarehouse",
        value: function getAllGetAllWarehouse() {
          var _this33 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.isAssetLoaded = true;
          this.purchaseOrderService.getAllWarehouseByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              // this.warehouseData = [];
              _this33.warehouseData = res && res.length > 0 ? res : [];
              _this33.isAssetLoaded = false;
              _this33.tempWarehouseData = _this33.warehouseData;
              _this33.totalItems = _this33.warehouseData.length;

              if (_this33.warehouseData && _this33.warehouseData.length > 0) {
                _this33.warehouseData.filter(function (val) {
                  if (val.warehouseName == '') {
                    delete val.warehouseName;
                    delete val.warehouseId;
                  }
                });
              }

              if (_this33.totalItems > _this33.itemLimit) {
                _this33.ItemEndIndex = _this33.itemLimit;
              } else {
                _this33.ItemEndIndex = _this33.totalItems;
              }
            }
          });
        }
      }, {
        key: "addWareHouse",
        value: function addWareHouse(data) {
          var _this34 = this;

          var reqObj = {};
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
            "updatedOn": new Date().toISOString
          };
          var params = {};
          params.warehouseobj = reqObj;
          this.purchaseOrderService.addWarehouse(params).subscribe(function (res) {
            if (res) {
              _this34.sharedService.setAlertMessage("Warehouse added successfully");

              _this34.isAssetLoaded = false;
              _this34.row = {};

              _this34.getAllGetAllWarehouse();
            }
          });
        }
      }, {
        key: "updateWareHouse",
        value: function updateWareHouse(data) {
          var _this35 = this;

          var reqObj = {};
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
            "updatedOn": new Date().toISOString
          };
          var params = {};
          params.warehouseobj = reqObj;
          this.purchaseOrderService.updateWarehouse(params).subscribe(function (res) {
            if (res) {
              _this35.sharedService.setAlertMessage("Warehouse Updated successfully");

              _this35.isAssetLoaded = false; // this.isEditRow = false;

              _this35.wareHouseIndex = -1;
            }
          });
        }
      }, {
        key: "getAllStaff",
        value: function getAllStaff() {
          var _this36 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.isAssetLoaded = true;
          this.staffService.getAllStaffsByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this36.isAssetLoaded = false;
              _this36.staffList = res ? res : [];
            }
          });
        }
        /**
         * get inventory
         */

      }, {
        key: "getAllInventory",
        value: function getAllInventory() {
          var _this37 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            lookupTypeId: 174,
            subCategoryLookupTypeId: 175
          };
          this.isAssetLoaded = true;
          this.lookupService.getSubcategory(queryParamBase).subscribe(function (res) {
            if (res) {
              _this37.isAssetLoaded = false;
              _this37.inventoryCategoryList = res ? res : [];
              _this37.tempCategoryList = _this37.inventoryCategoryList;
            }
          });
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id, type) {
          this.deleteType = "categoryDelete";
          this.modalService.showConfirmModal(id);
        }
        /**
         * edit sub category
         */

      }, {
        key: "editInventory",
        value: function editInventory(data) {
          var _this38 = this;

          var reqObj = {};
          reqObj.id = data.id;
          reqObj.apartmentId = parseInt(this.cookieService.get('apartmentId'));
          reqObj.name = data.name;
          reqObj.subCategory = data && data.subCategory.length > 0 ? data.subCategory : [];
          reqObj.isActive = true, reqObj.insertedBy = parseInt(this.cookieService.get('userId'));
          reqObj.insertedOn = new Date();
          reqObj.updatedBy = parseInt(this.cookieService.get('userId'));
          reqObj.updatedOn = new Date();
          var params = {};
          params.model = reqObj;
          params.subcategoryLookupTypeId = 175;
          this.lookupService.upsertSubCategory(params).subscribe(function (res) {
            if (res) {
              _this38.sharedService.setAlertMessage("Inventory sub types updated successfully");

              _this38.isAssetLoaded = false;

              _this38.getAllInventory();

              _this38.inventoryCurrIndex = -1;
            }
          });
        }
      }, {
        key: "getAllLocation",
        value: function getAllLocation() {
          var _this39 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.isAssetLoaded = true;
          this.apartmentService.getApartmentBlockByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this39.isAssetLoaded = false;
              _this39.locationList = res ? res : [];
            }
          });
        }
      }, {
        key: "getAllMaterial",
        value: function getAllMaterial() {
          var _this40 = this;

          var queryParamBase = {};
          queryParamBase = {
            ApartmentId: this.cookieService.get('apartmentId'),
            LookupTypeId: 186
          };
          this.isAssetLoaded = true;
          this.lookupService.getLookupValueByLookupTypeId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this40.isAssetLoaded = false;
              _this40.materialList = res ? res : [];
              _this40.typeTotalItems = _this40.materialList.length;

              if (_this40.typeTotalItems > _this40.typeItemLimit) {
                _this40.typeItemEndIndex = _this40.typeItemLimit;
              } else {
                _this40.typeItemEndIndex = _this40.typeTotalItems;
              }
            }
          });
        }
      }, {
        key: "addMaterialType",
        value: function addMaterialType(data) {
          var _this41 = this;

          var reqObj = {};
          console.log(data);
          reqObj = {
            "lookupValueId": 0,
            'apartmentId': parseInt(this.cookieService.get('apartmentId')),
            "lookupTypeId": 186,
            "lookupValueName": data.lookupValueName,
            "description": data.description,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date(),
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date(),
            "isDisabled": true
          };
          this.isAssetLoaded = true;
          var param = {};
          param.lookupvalue = reqObj;
          this.lookupService.addLookupValue(param).subscribe(function (res) {
            if (res) {
              _this41.sharedService.setAlertMessage("Material type added successfully");

              _this41.isAssetLoaded = false;
              _this41.typeRow = {};

              _this41.getAllMaterial();
            } else if (res.body.errorMessage) {
              _this41.isError = true;
              _this41.errorMessage = 'Not Added it already exist';
              _this41.isAssetLoaded = false; //  this.sharedService.setAlertMessage("Not Added as it already exist");
            }
          });
        }
      }, {
        key: "updateMaterial",
        value: function updateMaterial(data) {
          var _this42 = this;

          console.log(data);
          var reqObj = {};
          reqObj = {
            "lookupValueId": data.lookupValueId,
            "lookupTypeId": 186,
            "lookupValueName": data.lookupValueName,
            "description": data.description,
            'apartmentId': parseInt(this.cookieService.get('apartmentId')),
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date(),
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date(),
            "isDisabled": true
          };
          this.isAssetLoaded = true;
          var param = {};
          param.lookupvalue = reqObj;
          this.lookupService.updateLookupValue(param).subscribe(function (res) {
            if (res) {
              _this42.sharedService.setAlertMessage("Material type updated successfully");

              _this42.isAssetLoaded = false;
              _this42.currMaterialIndex = -1;
            } else if (res.body.errorMessage) {
              _this42.isError = true;
              _this42.errorMessage = 'Not Added it already exist';
              _this42.isAssetLoaded = false; //  this.sharedService.setAlertMessage("Not Added as it already exist");
            }
          });
        }
      }]);

      return InventorySetupComponent;
    }();

    InventorySetupComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_10__["StaffService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_11__["ApartmentService"]
      }];
    };

    InventorySetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-setup.component.scss */
      "./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_6__["PurchaseOrderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_10__["StaffService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_11__["ApartmentService"]])], InventorySetupComponent); //   inventoryCategoryData:any;
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

    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventoryStockAdjustmentsInventoryStockAdjustmentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card .card {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n}\nmat-card .card .card-header {\n  font-weight: 600;\n}\nmat-card .card .card-header label {\n  margin: 0px;\n}\nmat-card .card .card-body {\n  margin: 0px;\n  padding-bottom: 0px;\n  padding-top: 10px;\n}\nmat-card .card .card-body label {\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW52ZW50b3J5L2NvbXBvbmVudHMvaW52ZW50b3J5LXN0b2NrLWFkanVzdG1lbnRzL2ludmVudG9yeS1zdG9jay1hZGp1c3RtZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyIsInNyYy9hcHAvYW1zL2ludmVudG9yeS9jb21wb25lbnRzL2ludmVudG9yeS1zdG9jay1hZGp1c3RtZW50cy9pbnZlbnRvcnktc3RvY2stYWRqdXN0bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUN5REYsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQzNERjtBRkNRO0VBQ0ksZ0JBQUE7QUVDWjtBRkNZO0VBQ0ksV0FBQTtBRUNoQjtBRkdRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUVEWjtBRkdZO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBRURoQiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktc3RvY2stYWRqdXN0bWVudHMvaW52ZW50b3J5LXN0b2NrLWFkanVzdG1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc2Nzcy9mb250cy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG5tYXQtY2FyZCB7XG4gICAgLmNhcmQge1xuICAgICAgICBAaW5jbHVkZSBkZXNwLXJlZ3VsYXIoKTtcblxuICAgICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJtYXQtY2FyZCAuY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cbm1hdC1jYXJkIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5tYXQtY2FyZCAuY2FyZCAuY2FyZC1oZWFkZXIgbGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cbm1hdC1jYXJkIC5jYXJkIC5jYXJkLWJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5tYXQtY2FyZCAuY2FyZCAuY2FyZC1ib2R5IGxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: InventoryStockAdjustmentsComponent */

  /***/
  function srcAppAmsInventoryComponentsInventoryStockAdjustmentsInventoryStockAdjustmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryStockAdjustmentsComponent", function () {
      return InventoryStockAdjustmentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/PurchaseOrder */
    "./src/app/api/controllers/PurchaseOrder.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Inventory */
    "./src/app/api/controllers/Inventory.ts");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Staff */
    "./src/app/api/controllers/Staff.ts");

    var InventoryStockAdjustmentsComponent =
    /*#__PURE__*/
    function () {
      function InventoryStockAdjustmentsComponent(purchaseOrderService, cookieService, inventoryService, sharedService, staffService) {
        _classCallCheck(this, InventoryStockAdjustmentsComponent);

        this.purchaseOrderService = purchaseOrderService;
        this.cookieService = cookieService;
        this.inventoryService = inventoryService;
        this.sharedService = sharedService;
        this.staffService = staffService;
        this.settings = {};
        this.warehouseData = [];
        this.materialItemData = [];
        this.stock = {};
        this.staffList = [];
        this.ItemStartIndex = 0;
        this.itemLimit = 5;
        this.inventoryList = [];
      }

      _createClass(InventoryStockAdjustmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllStaff();
          this.stock.warehouseId = "";
          this.stock.outTowhomissuedStaffId = "";
          this.getMaterials();
          this.getAllGetAllWarehouse();
          this.getAllItem();
          this.settings = {
            singleSelection: true,
            text: "Search",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3
          };
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          console.log(item);
          this.stock.materialId = item.id;
          this.getAvailableStock();
        }
      }, {
        key: "OnItemDeSelect",
        value: function OnItemDeSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "selectedItems",
        value: function selectedItems(_selectedItems3) {
          console.log(_selectedItems3);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAll",
        value: function onDeSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onItemSelectByStaff",
        value: function onItemSelectByStaff(item) {
          console.log(item);
          this.stock.outTowhomissuedStaffId = item.id;
        }
      }, {
        key: "OnItemDeSelectByStaff",
        value: function OnItemDeSelectByStaff(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "selectedItemsByStaff",
        value: function selectedItemsByStaff(selectedItems) {
          console.log(selectedItems);
        }
      }, {
        key: "onSelectAllByStaff",
        value: function onSelectAllByStaff(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAllByStaff",
        value: function onDeSelectAllByStaff(items) {
          console.log(items);
        }
      }, {
        key: "getAllGetAllWarehouse",
        value: function getAllGetAllWarehouse() {
          var _this43 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.purchaseOrderService.getAllWarehouseByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              // this.warehouseData = [];
              _this43.warehouseData = res && res.length > 0 ? res : [];
            }
          });
        }
      }, {
        key: "getMaterials",
        value: function getMaterials() {
          var _this44 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.purchaseOrderService.getMaterialsByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              if (res && res.length > 0) {
                res.filter(function (val) {
                  _this44.materialItemData.push({
                    'id': val.materialId,
                    'itemName': val.material1
                  });
                });
              }
            }
          });
        }
      }, {
        key: "addStock",
        value: function addStock() {
          var _this45 = this;

          var stockReqobj = {};
          stockReqobj = {
            "apartmentId": this.cookieService.get('apartmentId'),
            "inventoryTransactionTypeId": 13,
            "date": new Date(),
            "warehouseId": Number(this.stock.warehouseId),
            "materialId": Number(this.stock.materialId),
            // "sku": "string",
            "availableStockQty": 1,
            // "unitofMeasureId": 9,
            "transactionTypeId": 13,
            "outTotalQtyConsumedBy": Number(this.stock.outTotalQtyConsumedBy),
            "outReasonForConsuming": this.stock.outReasonForConsuming,
            "outTowhomissuedStaffId": Number(this.stock.outTowhomissuedStaffId),
            "outDateofconsumption": this.stock.outDateofconsumption,
            "outOutgoingReason": this.stock.outOutgoingReason,
            "outTotalcost": this.stock.outTotalcost,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date(),
            "updatedBy": null,
            "updatedOn": new Date()
          };
          var params = {};
          params.inventoryTransaction = stockReqobj;
          this.inventoryService.addInventoryTransaction(params).subscribe(function (res) {
            if (res) {
              _this45.sharedService.setAlertMessage("Stock Item added successfully");

              _this45.isAssetLoaded = false;

              _this45.getAllItem();
            }
          });
        }
      }, {
        key: "getAvailableStock",
        value: function getAvailableStock() {
          var _this46 = this;

          if (!this.stock.materialId || !this.stock.warehouseId) {
            return;
          }

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.inventoryService.getStockCountbyMaterialId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this46.stock.availableStockQty = 1;
            }
          });
        }
      }, {
        key: "getAllStaff",
        value: function getAllStaff() {
          var _this47 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId')
          };
          this.isAssetLoaded = true;
          this.staffService.getAllStaffsByApartmentId(queryParamBase).subscribe(function (res) {
            if (res) {
              _this47.isAssetLoaded = false; // this.staffList = res ? res : [];

              if (res && res.length > 0) {
                res.filter(function (val) {
                  _this47.staffList.push({
                    'id': val.staffId,
                    'itemName': val.firstName
                  });
                });
              }
            }
          });
        }
      }, {
        key: "getAllItem",
        value: function getAllItem() {
          var _this48 = this;

          var queryParamBase = {};
          queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            active: 1
          }; // this.isAssetLoaded = true;

          this.inventoryService.getAllInventoryTransactionByApartmentIdStatus(queryParamBase).subscribe(function (res) {
            if (res) {
              // this.warehouseData = [];
              _this48.inventoryList = res && res.length > 0 ? res : [];
              console.log(_this48.inventoryList);
              _this48.totalItems = _this48.inventoryList.length;

              if (_this48.totalItems > _this48.itemLimit) {
                _this48.ItemEndIndex = _this48.itemLimit;
              } else {
                _this48.ItemEndIndex = _this48.totalItems;
              }
            }
          });
        }
      }]);

      return InventoryStockAdjustmentsComponent;
    }();

    InventoryStockAdjustmentsComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_2__["PurchaseOrderService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_4__["InventoryService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__["StaffService"]
      }];
    };

    InventoryStockAdjustmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-stock-adjustments',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-stock-adjustments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-stock-adjustments.component.scss */
      "./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_2__["PurchaseOrderService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_4__["InventoryService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__["StaffService"]])], InventoryStockAdjustmentsComponent);
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-update/inventory-update.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-update/inventory-update.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventoryUpdateInventoryUpdateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktdXBkYXRlL2ludmVudG9yeS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-update/inventory-update.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-update/inventory-update.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: InventoryUpdateComponent */

  /***/
  function srcAppAmsInventoryComponentsInventoryUpdateInventoryUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryUpdateComponent", function () {
      return InventoryUpdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InventoryUpdateComponent =
    /*#__PURE__*/
    function () {
      function InventoryUpdateComponent() {
        _classCallCheck(this, InventoryUpdateComponent);
      }

      _createClass(InventoryUpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InventoryUpdateComponent;
    }();

    InventoryUpdateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-update',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-update/inventory-update.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-update.component.scss */
      "./src/app/ams/inventory/components/inventory-update/inventory-update.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InventoryUpdateComponent);
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventoryVendorManagementInventoryVendorManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktdmVuZG9yLW1hbmFnZW1lbnQvaW52ZW50b3J5LXZlbmRvci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: InventoryVendorManagementComponent */

  /***/
  function srcAppAmsInventoryComponentsInventoryVendorManagementInventoryVendorManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryVendorManagementComponent", function () {
      return InventoryVendorManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InventoryVendorManagementComponent =
    /*#__PURE__*/
    function () {
      function InventoryVendorManagementComponent() {
        _classCallCheck(this, InventoryVendorManagementComponent);

        this.asset = {};
        this.materialSettings = {};
        this.selectedItems = [];
      }

      _createClass(InventoryVendorManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.materialSettings = {
            singleSelection: true,
            text: "Search Asset",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3
          };
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "OnItemDeSelect",
        value: function OnItemDeSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAll",
        value: function onDeSelectAll(items) {
          console.log(items);
        }
      }]);

      return InventoryVendorManagementComponent;
    }();

    InventoryVendorManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-vendor-management',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-vendor-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-vendor-management.component.scss */
      "./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InventoryVendorManagementComponent);
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-view/inventory-view.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-view/inventory-view.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryComponentsInventoryViewInventoryViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvY29tcG9uZW50cy9pbnZlbnRvcnktdmlldy9pbnZlbnRvcnktdmlldy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/components/inventory-view/inventory-view.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/ams/inventory/components/inventory-view/inventory-view.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: InventoryViewComponent */

  /***/
  function srcAppAmsInventoryComponentsInventoryViewInventoryViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryViewComponent", function () {
      return InventoryViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Inventory */
    "./src/app/api/controllers/Inventory.ts");
    /* harmony import */


    var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Vendor */
    "./src/app/api/controllers/Vendor.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var InventoryViewComponent =
    /*#__PURE__*/
    function () {
      function InventoryViewComponent(injector, dialog, router, route, inventoryService, vendorService, lookupService, sharedService, cookieService) {
        var _this49 = this;

        _classCallCheck(this, InventoryViewComponent);

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
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            _this49.getAllInventories();
          }
        });
      }

      _createClass(InventoryViewComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "selectColInput",
        value: function selectColInput(value) {
          this.selectedInput = value;
        }
      }, {
        key: "onInventoryCatregoryChange",
        value: function onInventoryCatregoryChange(event) {
          if (event != null) {
            this.inventoryCategory = event.lookupValueId;
            this.router.navigateByUrl('/ams/inventory/view/' + parseInt(this.inventoryCategory));
          } else {
            this.router.navigateByUrl('/ams/inventory/view');
          }
        }
      }, {
        key: "getVendorName",
        value: function getVendorName(inventory, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.vendorListData, function (item) {
            if (item.vendorId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.inventoryListData.map(function (obj) {
              if (obj.inventoryId == inventory.inventoryId) {
                obj.vendorName = data[0].vendorName;
              }
            });
            return data[0].vendorName;
          }
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "getInventoryCategoryName",
        value: function getInventoryCategoryName(id) {
          this.router.navigateByUrl('/ams/inventory/view/' + id);
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(id) {
          this.modalService.showConfirmModal(id);
        }
      }, {
        key: "getAllInventories",
        value: function getAllInventories() {
          var _this50 = this;

          this.isInventoryLoaded = false;
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.inventoryService.getAllInventoryByApartmentId(params).subscribe(function (res) {
            _this50.inventoryListData = res.filter(function (item) {
              return item.isActive;
            });

            if (_this50.route.params['value'].id != undefined) {
              _this50.inventoryListData = _this50.inventoryListData.filter(function (item) {
                return item.inventoryCategoryId == _this50.route.params['value'].id && item.isActive;
              });
              underscore__WEBPACK_IMPORTED_MODULE_10__["each"](_this50.inventoryCategoryData, function (item, index) {
                if (item.lookupValueId == _this50.route.params['value'].id) {
                  _this50.inventoryCategoryName = item.lookupValueName;
                  _this50.inventoryCategory = item.lookupValueId;
                }

                _this50.isInventoryLoaded = true;
              });
            }

            _this50.totalItems = _this50.inventoryListData.length;

            if (_this50.totalItems > _this50.itemLimit) {
              _this50.ItemEndIndex = _this50.itemLimit;
            } else {
              _this50.ItemEndIndex = _this50.totalItems;
            }

            _this50.isInventoryLoaded = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this51 = this;

          this.inventory = {};
          var params = {
            LookupTypeId: 20
          };
          this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
            _this51.inventoryCategoryData = res.filter(function (item) {
              return item.isActive;
            });

            _this51.getAllInventories();
          });
          var vendorParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.vendorService.getVendorByApartmentId(vendorParams).subscribe(function (res) {
            _this51.vendorListData = res;
          }); // delete item

          this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
            if (id != null) {
              var params = {
                inventoryId: id,
                deleteBy: parseInt(_this51.cookieService.get('userId'))
              };

              _this51.inventoryService.deleteInventory(params).subscribe(function (res) {
                underscore__WEBPACK_IMPORTED_MODULE_10__["each"](_this51.inventoryListData, function (type) {
                  if (type.inventoryId == id) {
                    type.isActive = false;
                  }
                });
                setTimeout(function () {
                  _this51.inventoryListData = _this51.inventoryListData.filter(function (type) {
                    return type.id !== id;
                  });
                  _this51.totalItems = _this51.inventoryListData.length;

                  _this51.sharedService.setAlertMessage("Inventory deleted");

                  _this51.sharedService.setUnitListDeleteIndex(null);
                }, 500);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }]);

      return InventoryViewComponent;
    }();

    InventoryViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_4__["InventoryService"]
      }, {
        type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__["VendorService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]
      }];
    };

    InventoryViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/components/inventory-view/inventory-view.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory-view.component.scss */
      "./src/app/ams/inventory/components/inventory-view/inventory-view.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Inventory__WEBPACK_IMPORTED_MODULE_4__["InventoryService"], src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__["VendorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]])], InventoryViewComponent);
    /***/
  },

  /***/
  "./src/app/ams/inventory/inventory-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ams/inventory/inventory-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: InventoryRoutingModule */

  /***/
  function srcAppAmsInventoryInventoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryRoutingModule", function () {
      return InventoryRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_inventory_setup_inventory_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/inventory-setup/inventory-setup.component */
    "./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.ts");
    /* harmony import */


    var _components_inventory_create_inventory_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/inventory-create/inventory-create.component */
    "./src/app/ams/inventory/components/inventory-create/inventory-create.component.ts");
    /* harmony import */


    var _components_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/inventory-view/inventory-view.component */
    "./src/app/ams/inventory/components/inventory-view/inventory-view.component.ts");
    /* harmony import */


    var _components_inventory_reports_inventory_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/inventory-reports/inventory-reports.component */
    "./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.ts");
    /* harmony import */


    var _components_inventory_current_details_inventory_current_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/inventory-current-details/inventory-current-details.component */
    "./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.ts");
    /* harmony import */


    var _components_inventory_vendor_management_inventory_vendor_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/inventory-vendor-management/inventory-vendor-management.component */
    "./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.ts");
    /* harmony import */


    var _components_inventory_initial_stock_inventory_initial_stock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/inventory-initial-stock/inventory-initial-stock.component */
    "./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.ts");
    /* harmony import */


    var _components_inventory_internal_transfer_inventory_internal_transfer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/inventory-internal-transfer/inventory-internal-transfer.component */
    "./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.ts");
    /* harmony import */


    var _components_inventory_receiving_inventory_receiving_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/inventory-receiving/inventory-receiving.component */
    "./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.ts");
    /* harmony import */


    var _components_inventory_create_item_inventory_create_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/inventory-create-item/inventory-create-item.component */
    "./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.ts");
    /* harmony import */


    var _components_inventory_stock_adjustments_inventory_stock_adjustments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/inventory-stock-adjustments/inventory-stock-adjustments.component */
    "./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, {
      path: 'settings',
      component: _components_inventory_setup_inventory_setup_component__WEBPACK_IMPORTED_MODULE_3__["InventorySetupComponent"]
    }, {
      path: 'create-inventory',
      component: _components_inventory_create_inventory_create_component__WEBPACK_IMPORTED_MODULE_4__["InventoryCreateComponent"]
    }, {
      path: 'edit-inventory/:id',
      component: _components_inventory_create_inventory_create_component__WEBPACK_IMPORTED_MODULE_4__["InventoryCreateComponent"]
    }, {
      path: 'current-inventory',
      component: _components_inventory_current_details_inventory_current_details_component__WEBPACK_IMPORTED_MODULE_7__["InventoryCurrentDetailsComponent"]
    }, {
      path: 'vendor-management',
      component: _components_inventory_vendor_management_inventory_vendor_management_component__WEBPACK_IMPORTED_MODULE_8__["InventoryVendorManagementComponent"]
    }, {
      path: 'initial-stock',
      component: _components_inventory_initial_stock_inventory_initial_stock_component__WEBPACK_IMPORTED_MODULE_9__["InventoryInitialStockComponent"]
    }, {
      path: 'internal-transfer',
      component: _components_inventory_internal_transfer_inventory_internal_transfer_component__WEBPACK_IMPORTED_MODULE_10__["InventoryInternalTransferComponent"]
    }, {
      path: 'receiving',
      component: _components_inventory_receiving_inventory_receiving_component__WEBPACK_IMPORTED_MODULE_11__["InventoryReceivingComponent"]
    }, {
      path: 'create-item',
      component: _components_inventory_create_item_inventory_create_item_component__WEBPACK_IMPORTED_MODULE_12__["InventoryCreateItemComponent"]
    }, {
      path: 'stock-adjustments',
      component: _components_inventory_stock_adjustments_inventory_stock_adjustments_component__WEBPACK_IMPORTED_MODULE_13__["InventoryStockAdjustmentsComponent"]
    }, {
      path: 'view',
      component: _components_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_5__["InventoryViewComponent"]
    }, {
      path: 'view/:id',
      component: _components_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_5__["InventoryViewComponent"]
    }, {
      path: 'reports',
      component: _components_inventory_reports_inventory_reports_component__WEBPACK_IMPORTED_MODULE_6__["InventoryReportsComponent"]
    }, {
      path: '**',
      redirectTo: 'settings',
      pathMatch: 'full'
    }];

    var InventoryRoutingModule = function InventoryRoutingModule() {
      _classCallCheck(this, InventoryRoutingModule);
    };

    InventoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InventoryRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/inventory/inventory.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/ams/inventory/inventory.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInventoryInventoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/inventory/inventory.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ams/inventory/inventory.component.ts ***!
    \******************************************************/

  /*! exports provided: InventoryComponent */

  /***/
  function srcAppAmsInventoryInventoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryComponent", function () {
      return InventoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InventoryComponent =
    /*#__PURE__*/
    function () {
      function InventoryComponent() {
        _classCallCheck(this, InventoryComponent);
      }

      _createClass(InventoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InventoryComponent;
    }();

    InventoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inventory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inventory/inventory.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inventory.component.scss */
      "./src/app/ams/inventory/inventory.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InventoryComponent);
    /***/
  },

  /***/
  "./src/app/ams/inventory/inventory.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/ams/inventory/inventory.module.ts ***!
    \***************************************************/

  /*! exports provided: InventoryModule */

  /***/
  function srcAppAmsInventoryInventoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryModule", function () {
      return InventoryModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inventory-routing.module */
    "./src/app/ams/inventory/inventory-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _inventory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inventory.component */
    "./src/app/ams/inventory/inventory.component.ts");
    /* harmony import */


    var _components_inventory_setup_inventory_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/inventory-setup/inventory-setup.component */
    "./src/app/ams/inventory/components/inventory-setup/inventory-setup.component.ts");
    /* harmony import */


    var _components_inventory_create_inventory_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/inventory-create/inventory-create.component */
    "./src/app/ams/inventory/components/inventory-create/inventory-create.component.ts");
    /* harmony import */


    var _components_inventory_update_inventory_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/inventory-update/inventory-update.component */
    "./src/app/ams/inventory/components/inventory-update/inventory-update.component.ts");
    /* harmony import */


    var _components_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/inventory-view/inventory-view.component */
    "./src/app/ams/inventory/components/inventory-view/inventory-view.component.ts");
    /* harmony import */


    var _components_inventory_reports_inventory_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/inventory-reports/inventory-reports.component */
    "./src/app/ams/inventory/components/inventory-reports/inventory-reports.component.ts");
    /* harmony import */


    var _components_inventory_current_details_inventory_current_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/inventory-current-details/inventory-current-details.component */
    "./src/app/ams/inventory/components/inventory-current-details/inventory-current-details.component.ts");
    /* harmony import */


    var _components_inventory_vendor_management_inventory_vendor_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/inventory-vendor-management/inventory-vendor-management.component */
    "./src/app/ams/inventory/components/inventory-vendor-management/inventory-vendor-management.component.ts");
    /* harmony import */


    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular2-multiselect-dropdown */
    "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");
    /* harmony import */


    var _components_inventory_create_item_inventory_create_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/inventory-create-item/inventory-create-item.component */
    "./src/app/ams/inventory/components/inventory-create-item/inventory-create-item.component.ts");
    /* harmony import */


    var _components_inventory_initial_stock_inventory_initial_stock_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/inventory-initial-stock/inventory-initial-stock.component */
    "./src/app/ams/inventory/components/inventory-initial-stock/inventory-initial-stock.component.ts");
    /* harmony import */


    var _components_inventory_internal_transfer_inventory_internal_transfer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/inventory-internal-transfer/inventory-internal-transfer.component */
    "./src/app/ams/inventory/components/inventory-internal-transfer/inventory-internal-transfer.component.ts");
    /* harmony import */


    var _components_inventory_receiving_inventory_receiving_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/inventory-receiving/inventory-receiving.component */
    "./src/app/ams/inventory/components/inventory-receiving/inventory-receiving.component.ts");
    /* harmony import */


    var _components_inventory_stock_adjustments_inventory_stock_adjustments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/inventory-stock-adjustments/inventory-stock-adjustments.component */
    "./src/app/ams/inventory/components/inventory-stock-adjustments/inventory-stock-adjustments.component.ts");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

    var InventoryModule = function InventoryModule() {
      _classCallCheck(this, InventoryModule);
    };

    InventoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_inventory_component__WEBPACK_IMPORTED_MODULE_5__["InventoryComponent"], _components_inventory_setup_inventory_setup_component__WEBPACK_IMPORTED_MODULE_6__["InventorySetupComponent"], _components_inventory_create_inventory_create_component__WEBPACK_IMPORTED_MODULE_7__["InventoryCreateComponent"], _components_inventory_update_inventory_update_component__WEBPACK_IMPORTED_MODULE_8__["InventoryUpdateComponent"], _components_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_9__["InventoryViewComponent"], _components_inventory_reports_inventory_reports_component__WEBPACK_IMPORTED_MODULE_10__["InventoryReportsComponent"], _components_inventory_current_details_inventory_current_details_component__WEBPACK_IMPORTED_MODULE_11__["InventoryCurrentDetailsComponent"], _components_inventory_vendor_management_inventory_vendor_management_component__WEBPACK_IMPORTED_MODULE_12__["InventoryVendorManagementComponent"], _components_inventory_create_item_inventory_create_item_component__WEBPACK_IMPORTED_MODULE_14__["InventoryCreateItemComponent"], _components_inventory_initial_stock_inventory_initial_stock_component__WEBPACK_IMPORTED_MODULE_15__["InventoryInitialStockComponent"], _components_inventory_internal_transfer_inventory_internal_transfer_component__WEBPACK_IMPORTED_MODULE_16__["InventoryInternalTransferComponent"], _components_inventory_receiving_inventory_receiving_component__WEBPACK_IMPORTED_MODULE_17__["InventoryReceivingComponent"], _components_inventory_stock_adjustments_inventory_stock_adjustments_component__WEBPACK_IMPORTED_MODULE_18__["InventoryStockAdjustmentsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventoryRoutingModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["AngularMultiSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"]],
      bootstrap: [_inventory_component__WEBPACK_IMPORTED_MODULE_5__["InventoryComponent"]]
    })], InventoryModule);
    /***/
  }
}]);
//# sourceMappingURL=inventory-inventory-module-es5.js.map