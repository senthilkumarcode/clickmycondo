(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["broadcast-broadcast-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"broadcast-removeuser-wrapper\">\n    <mat-tab-group dynamicHeight> -->\n                   <mat-tab label=\"BroadCast Based\">\n    <ngb-carousel *ngIf=\"images\" >\n        <ng-template ngbSlide *ngFor=\"let broadCastMessage of broadCastBased\">\n          <div class=\"picsum-img-wrapper\">\n            <img [src]=\"imagePath\" alt=\"Random first slide\">\n           \n          </div>\n          <div class=\"carousel-caption1\">\n            <h5> {{broadCastMessage.CategoryName}}</h5>\n          </div>\n          <div class=\"carousel-caption2\"> \n            <h5><b> {{broadCastMessage.subject}}</b> </h5>\n          </div>\n          <div class=\"carousel-caption3\">\n            <h5>Posted By: {{broadCastMessage.UserName}}</h5>\n            </div>\n        </ng-template>\n        <!-- <ng-template ngbSlide>\n          <div class=\"picsum-img-wrapper\">\n            <img [src]=\"imagePath\" alt=\"Random second slide\">\n          </div>\n          <div class=\"carousel-caption\">\n            <h3>Second slide label</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <div class=\"picsum-img-wrapper\">\n            <img [src]=\"imagePath\" alt=\"Random third slide\">\n          </div>\n          <div class=\"carousel-caption\">\n            <h3>Third slide label</h3>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template> -->\n      </ngb-carousel>\n </mat-tab>\n                            <mat-tab label=\"Interest Group Based \"> \n                              <ngb-carousel *ngIf=\"images\" >\n                                <ng-template ngbSlide *ngFor=\"let broadCastMessage of interestGroupBased\">\n                                  <div class=\"picsum-img-wrapper\">\n                                    <img [src]=\"imagePath\" alt=\"Random first slide\">\n                                   \n                                  </div>\n                                  <div class=\"carousel-caption1\">\n                                    <h5> {{broadCastMessage.CategoryName}}</h5>\n                                  </div>\n                                  <div class=\"carousel-caption2\"> \n                                    <h5><b> {{broadCastMessage.subject}}</b> </h5>\n                                  </div>\n                                  <div class=\"carousel-caption3\">\n                                    <h5>Posted By: {{broadCastMessage.UserName}}</h5>\n                                    </div>\n                                </ng-template>\n                                \n                              </ngb-carousel> </mat-tab>\n                            \n                           </mat-tab-group> \n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"broadcastgroupAssignment-setup-wrapper\">\n        <div  class=\"card clear form-group\" id=\"mapaccordion\" >\n    <div class=\"card-body\">\n        <ul class=\"list-group  clear\">\n            <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#typeCollapseMap\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\">\n                <h5>Assign Users to Interest Group</h5>  \n            </li>\n            <div id=\"typeCollapseMap\"  aria-labelledby=\"headingOne\" data-parent=\"#mapaccordion\">\n                <div class=\"details\">\n                    <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n                    <form #mapGroupUserForm = \"ngForm\" name=\"mapGroupUserForm\" (ngSubmit)=\"submitMapGroupUserForm(mapGroupUserForm)\"  novalidate>\n                    <div class=\"row mt-4\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <div class=\"input-box\">\n                                        <label>Interest Group Category*</label>\n                                        <angular2-multiselect [data]=\"broadCastGroupCategory.dropdownList\" name=\"groupTypeDropDown\"\n                                             [(ngModel)]=\"broadCastGroupCategory.selectedItems\"\n                                         (onSelect)=\"getUsersBycategory($event)\" (onDeSelect)=\"removeCategory()\" (onDeSelectAll)=\"removeCategory()\"   [settings]=\"groupCategorySetting\"  required>\n                                        </angular2-multiselect>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                            <!-- <div  class=\"col-sm-4\"> \n                                <div class=\"select-box\">                             \n                                    <label>Role Type</label>\n                                    <angular2-multiselect [data]=\"roleTypeArr.dropdownList\" name=\"roleTypeDropDown\"\n                                       [(ngModel)]=\"roleTypeArr.selectedItems\"\n                                       [settings]=\"roleTypedropdownSettings\" (onSelect)=\"getAppartmentRole($event)\"\n                                        (onDeSelect)=\"removeRole($event)\" (onDeSelectAll)=\"removeRole($event)\"\n                                    ></angular2-multiselect>\n                                 </div>\n                              </div> -->\n                                <div  class=\"col-sm-12\">\n                                    <div class=\"select-box\">\n                                        <label> Role</label>\n                                        <angular2-multiselect [data]=\"roleCategory.dropdownList\" name=\"roleDropDown\"\n                                            [(ngModel)]=\"roleCategory.selectedItems\"\n                                            [settings]=\"roleDropdownSettings\" \n                                            (onSelect)='updateUsers()' (onDeSelect)='updateUsers()'\n                                             (onSelectAll)=\"updateUsers()\"  (onDeSelectAll)=\"updateUsers()\">    \n                                        </angular2-multiselect>\n                                    </div>  \n                                </div>                        \n                            </div>\n                            <div class=\"row\">\n                                <div  class=\"col-sm-12\">\n                                    <div class=\"select-box\">\n                                        <label>Appartment Block</label>\n                                        <angular2-multiselect [data]=\"apartmentBlock.dropdownList\" name=\"blockdropdown\"\n                                            [(ngModel)]=\"apartmentBlock.selectedItems\"\n                                             [settings]=\"blockdropdownSettings\"\n                                            (onSelect)='updateUsers()' (onDeSelect)='updateUsers()'\n                                             (onSelectAll)=\"updateUsers()\"  (onDeSelectAll)=\"updateUsers()\">\n                                        </angular2-multiselect>\n                                    </div>  \n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div  class=\"col-sm-12\"> \n                                    <div class=\"select-box\">                             \n                                        <label>Users*</label>\n                                        <angular2-multiselect [data]=\"users.dropdownList\" name=\"userTypeDropDown\"\n                                            [(ngModel)]=\"users.selectedItems\"\n                                             [settings]=\"usersDropdownSettings\"  required\n                                        ></angular2-multiselect>\n                                    </div>\n                                 </div>                     \n                             \n                            </div>\n                            <!-- <div class=\"row\">\n                                <div  class=\"col-sm-12\"> \n                                    <div class=\"select-box\"> \n                                       <label>Users *</label>\n          <input type=\"text\" placeholder=\"serach user\" matInput   (keyup)=\"search($event)\" />\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredUsers\" [value]=\"option\">\n        {{option.userName}}\n      </mat-option>\n    </mat-autocomplete>\n   </div>\n                                 </div>                     \n                             \n                            </div> -->\n\n\n                        </div>\n            <div class=\"col-sm-2\">\n                <div class=\"row\">\n                    <div  class=\"col-sm-8\">\n                        <div class=\"select-box\" style=\"transform: translateY(120px);\">                         \n                            <button  type=\"button\" class=\"btn\" [disabled]=\"mapGroupUserForm.invalid\" > \n                                <label class=\"assignBtn\"> Assign</label>\n                                <i class=\"fa fa-long-arrow-right\" style=\"font-size:60px;\" (click)='assignUser()' aria-hidden=\"true\"></i>\n                            </button>\n                        </div>  \n                    </div> \n                </div>\n                \n            </div>\n            <div class=\"col-sm-4\">\n           <div class=\"row mt-3\">\n             <div class=\"col-sm-12\" style=\"border: 1px solid #cccccc;height: 320px;\">\n                 <li *ngFor=\"let user of assignUsers\">\n                        {{ user.userFullName }}\n                      </li>\n                \n             </div>\n           </div>\n\n             </div>\n           </div>\n                \n             \n          \n            \n        \n          \n            \n            <!-- <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <div class=\"list-inline float-right mt-4\">\n                   \n                    <button type=\"button\" class=\"btn blue mr-4\"  (click)=\"Cancel()\">Cancel</button>\n                    <button type=\"submit\" class=\"btn blue mr-2\" [disabled]=\"mapGroupUserForm.invalid\">Submit</button>\n                   \n                </div>\n              </div>\n            </div> -->\n                   </form>\n\n        </div>\n        </div>\t\n        </ul>\n    </div>\n        </div>              \n\n        <!-- <div class=\"card card-table\">\n            <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Interest Group Users <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bcData\" >\n                </li>\n            \n            </ul>\n            </div>\n\n            <app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box>\n\n            <div class=\"card-body p-0\">\n\n            <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n                <thead>\n                    <tr>\n                    <th width=\"15%\" (click)=\"sortUnitData('broadCastGroupCategoryID')\">Category ID<span [ngClass]=\"getFieldOrderBy('broadCastGroupCategoryID')\"></span></th>\n                    <th width=\"30%\" (click)=\"sortUnitData('UserIDs')\">Broadcast Category <span [ngClass]=\"getFieldOrderBy('UserIDs')\"></span></th>\n                    <th width=\"45%\" (click)=\"sortUnitData('RoleTypeId')\">Description <span [ngClass]=\"getFieldOrderBy('RoleTypeId')\"></span></th>\n                    <th width=\"10%\">Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let category of interestGroupUsers| orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: bcData ; let i = index\">\n                    <td class=\"name\">{{category.broadCastGroupCategoryID}}</td>\n                    <td class=\"grey\">{{category.UserIDs}}</td>\n                    <td class=\"grey\">{{category.RoleTypeId}}</td>\n                    <td class=\"grey\">\n                \n                        <a class=\"\" (click)=\"updateData(category)\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>&nbsp;\n                        <a class=\"\" (click)=\"showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                    </td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <app-pagination \n                [totalItems]=\"totalItems\"  \n                [ItemStartIndex]=\"ItemStartIndex\"\n                [ItemEndIndex] = \"ItemEndIndex\"\n                [itemLimit] = \"itemLimit\"\n                (outputParams) = \"getIndexParams($event)\">\t\n            </app-pagination>\n        </div>\n        </div> -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"broadcast-view-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card card-table\">\n\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Broadcast History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bcData\" >\n    \t\t\t</li>\n    \t\t\t<!-- <li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li> -->\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box>\n\n  \t\t<div class=\"card-body p-0\">\n\n        <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n            <thead>\n                <tr>\n                <th scope=\"col\" (click)=\"sortUnitData('broadcastOn')\">BroadCast ON <span [ngClass]=\"getFieldOrderBy('broadcastOn')\"></span></th>\n                <th scope=\"col\" (click)=\"sortUnitData('broadcastMessageCategoryId')\">Broadcast Category <span [ngClass]=\"getFieldOrderBy('broadcastMessageCategoryId')\"></span></th>\n                <th scope=\"col\" (click)=\"sortUnitData('subject')\">Subject <span [ngClass]=\"getFieldOrderBy('subject')\"></span></th>\n                <th scope=\"col\" (click)=\"sortUnitData('broadcastModeIds')\">Broadcast Type <span [ngClass]=\"getFieldOrderBy('broadcastModeIds')\"></span></th>\n                <th scope=\"col\" (click)=\"sortUnitData('broadcastBy')\">Posted By <span [ngClass]=\"getFieldOrderBy('broadcastBy')\"></span></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let broadcast of broadCastMessages | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: bcData ; let i = index\">\n                <td class=\"name\">{{broadcast.broadcastOn | date:'dd-MM-yyyy HH:MM'}}</td>\n                <td class=\"grey\">{{broadcast.CategoryName}}</td>\n                <td class=\"grey\">{{broadcast.subject}}</td>\n                <td class=\"grey\">{{broadcast.BroadCastMode}}</td>\n                <td class=\"grey\">{{broadcast.UserName}}</td>\n                </tr>\n            </tbody>\n        </table>\n    \n        <app-pagination \n            [totalItems]=\"totalItems\"  \n            [ItemStartIndex]=\"ItemStartIndex\"\n            [ItemEndIndex] = \"ItemEndIndex\"\n            [itemLimit] = \"itemLimit\"\n            (outputParams) = \"getIndexParams($event)\">\t\n        </app-pagination>\n    </div>\n</div>\n</div>\n\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"broadcast-removeuser-wrapper\">\n    <div class=\"card card-table\">\n        <div class=\"card-header\">\n        <div class=\"float-left\">\n            <h5>Broadcast Category <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n        </div>\n        <ul class=\"list-inline\">\n            <li class=\"list-inline-item search d-none d-md-inline-block\">\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bcData\" >\n            </li>\n            <!-- <li class=\"list-inline-item\">\n                <a class=\"btn l-blue mt_5\">\n                    <i-feather class=\"icon print\" name=\"printer\"></i-feather>\n                    <span>Print</span>\n                </a>\n            </li> -->\n        </ul>\n        </div>\n    \n        <app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box>\n        <div class=\"row\">\n            <div class=\"col-sm-4 mt-3\">\n                <div class=\"input-box m-4\">\n                    <h5>Interest Group Category*</h5>\n                    <angular2-multiselect [data]=\"broadCastGroupCategory.dropdownList\" name=\"groupTypeDropDown\"\n                         [(ngModel)]=\"broadCastGroupCategory.selectedItems\" (onSelect)=\"getUsersBycategory($event)\"\n                         (onDeSelect)=\"deSelectCategory()\"  (onDeSelectAll)=\"deSelectCategory()\"\n                         [settings]=\"groupCategorySetting\"  required>\n                    </angular2-multiselect>\n                </div>\n            </div>\n        </div>\n          <div class=\"card-body p-0 mt-3\">\n\n    \n        <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n            <thead>\n                <tr>\n                <th width=\"20%\" (click)=\"sortUnitData('groupCategory')\">Interest Group<span [ngClass]=\"getFieldOrderBy('groupCategory')\"></span></th>\n                <th width=\"20%\" (click)=\"sortUnitData('roleId')\">Role<span [ngClass]=\"getFieldOrderBy('roleId')\"></span></th>\n                <th width=\"10%\" (click)=\"sortUnitData('blockId')\">Block <span [ngClass]=\"getFieldOrderBy('blockId')\"></span></th>\n                <th width=\"10%\" (click)=\"sortUnitData('unitId')\">Unit <span [ngClass]=\"getFieldOrderBy('unitId')\"></span></th>\n                <th width=\"30%\" (click)=\"sortUnitData('userId')\">User <span [ngClass]=\"getFieldOrderBy('userId')\"></span></th>\n                <th width=\"10%\">Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let groupUser of allGroupUser | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: bcData ; let i = index\">\n                <td class=\"name\">{{groupUser.groupCategory}}</td>\n                <td class=\"name\">{{groupUser.role}}</td>\n                <td class=\"grey\">{{groupUser.block}}</td>\n                <td class=\"grey\">{{groupUser.unit}}</td>\n                <td class=\"grey\">{{groupUser.user}}</td>\n                <td class=\"grey\">\n                <button type=\"button\" class=\"btn blue mr-4\"  (click)=\"removeUser(groupUser)\">Remove</button>\n                </td>\n                </tr>\n            </tbody>\n        </table>\n    \n        <app-pagination \n            [totalItems]=\"totalItems\"  \n            [ItemStartIndex]=\"ItemStartIndex\"\n            [ItemEndIndex] = \"ItemEndIndex\"\n            [itemLimit] = \"itemLimit\"\n            (outputParams) = \"getIndexParams($event)\">\t\n        </app-pagination>\n    </div>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"broadcast-message-wrapper\">\n\t\n    <div class=\"card clear form-group\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>\n                    <span>Broadcast Message</span>\n                </h5>\n            </div>\n            <div class=\"float-right\">\n                <!-- <a href=\"javascript:void(0)\" \n                routerLink=\"/ams/work-permit/settings/approval\" \n                routerLinkActive=\"active\"\n                [routerLinkActiveOptions] = \"{exact:true}\">\n                    <i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n                </a> -->\n            </div>\n        </div>\n        \n        <div class=\"card-body\">\n    \n        <!-- <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message> -->\n        <!-- <ng-container *ngIf=\"!isBroadCastSubmitted\"> -->\n        <ng-container>\n        <form #createBroadcastMessageForm = \"ngForm\" name=\"createBroadcastMessageForm\" (ngSubmit)=\"submitCreateBroadcastMessageForm(createBroadcastMessageForm)\"  novalidate>\n        \n        <div class=\"row\">\n            <div class=\"col-sm-10 offset-sm-1\">\n                <!-- <mat-tab-group dynamicHeight> -->\n                    <!-- <mat-tab label=\"Role Based\"> -->\n\n                        <ul class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\n                            \n                            <li ><a class=\"nav-item nav-link active\" id=\"nav-menu1-tab\" data-toggle=\"tab\" role=\"tab\" href=\"#menu1\" (click)=\"currentTab('role')\">Role Based</a></li>\n                            <li><a class=\"nav-item nav-link\" id=\"nav-menu2-tab\" data-toggle=\"tab\" role=\"tab\" href=\"#menu2\" (click)=\"currentTab('interest')\">Interest Group based</a></li>\n                            \n                          </ul>\n                          <div class=\"tab-content\" id=\"nav-tabContent\">\n\n                            <div id=\"menu1\" role=\"tabpanel\" ria-labelledby=\"nav-menu1-tab\" class=\"tab-pane show active\">\n\n                                <div class=\"row\"> \n                                    <div  class=\"col-sm-4\">\n                                     <div class=\"select-box\">\n                                         <label>Role Type</label>\n                                         <angular2-multiselect [data]=\"roleTypeArr.dropdownList\" name=\"roleTypeDropDown\"\n                                         [(ngModel)]=\"roleTypeArr.selectedItems\"\n                                         [settings]=\"roleTypedropdownSettings\" (onSelect)=\"getAppartmentRole($event)\"\n                                         (onDeSelect)=\"removeRole($event)\" (onDeSelectAll)=\"removeRole($event)\"></angular2-multiselect>\n                                     </div>  \n                                     </div>\n                                     <div  class=\"col-sm-4\">\n                                        <div class=\"select-box\">\n                                            <label>Apartment Block</label>\n                                            <angular2-multiselect [data]=\"apartmentBlock.dropdownList\" name=\"blockdropdown\"\n                                            [(ngModel)]=\"apartmentBlock.selectedItems\"\n                                            [settings]=\"blockdropdownSettings\"\n                                            (onSelect)=\"updateUsers()\"\n                                            ></angular2-multiselect>\n                                        </div>  \n                                            </div>\n                                            <div  class=\"col-sm-4\">\n                                                <div class=\"select-box\">\n                                                    <label>Conditions</label>\n                                                    <angular2-multiselect [data]=\"condition.dropdownList\" name=\"conditiondropdown\"\n                                                    [(ngModel)]=\"condition.selectedItems\"\n                                                    [settings]=\"roleDropdownSettings\" \n                                                    (onSelect)=\"updateUsers()\"\n                                                    ></angular2-multiselect>\n                                                </div>  \n                                             </div>\n                                        </div>\n                                    <div class=\"row\"> \n                                            <div  class=\"col-sm-4\">\n                                             <div class=\"select-box\">\n                                                 <label>Role</label>\n                                                 <angular2-multiselect [data]=\"roleCategory.dropdownList\" name=\"roleDropDown\"\n                                                 [(ngModel)]=\"roleCategory.selectedItems\"\n                                                 [settings]=\"roleDropdownSettings\"\n                                                 (onSelect)=\"getstaffCategories($event)\"  (onDeSelect)=\"removeStaffCategories($event)\"\n                                                 (onSelectAll)=\"getAllStaffCategories($event)\"  (onDeSelectAll)=\"removeAllStaffCategories($event)\"\n                                                 >\n                                                  \n                                                </angular2-multiselect>\n                                             </div>  \n                                                 </div>\n                                                 <div  class=\"col-sm-4\" *ngIf=\"this.roleCategory.selectedItems.length>0 && isStaff\">\n                                                    <div class=\"select-box\">\n                                                        <label>Staff Category</label>\n                                                        <angular2-multiselect [data]=\"staffCategory.dropdownList\" name=\"staffDropDown\"\n                                                        [(ngModel)]=\"staffCategory.selectedItems\"\n                                                        [settings]=\"dropdownSettings\"\n                                                        (onSelect)=\"getStaffSubCategories($event)\" (onDeSelect)=\"removeSubStaffCategories($event)\"\n                                                        (onSelectAll)=\"getAllSubStaffCategories($event)\"  (onDeSelectAll)=\"removeAllSubStaffCategories($event)\" \n                                                         (onGroupDeSelect)=\"getGroupSubStaffCategories($event)\"       (onGroupSelect)=\"removeGroupSubStaffCategories($event)\"                                >\n                                                    </angular2-multiselect>\n                                                    </div>  \n                                                        </div>\n                                                        <div  class=\"col-sm-4\" *ngIf=\"this.staffCategory.selectedItems.length>0\">\n                                                            <div class=\"select-box\">\n                                                                <label>Staff SubCategory</label>\n                                                                <angular2-multiselect [data]=\"staffSubCategory.dropdownList\" name=\"subStaffDropDown\"\n                                                                [(ngModel)]=\"staffSubCategory.selectedItems\"\n                                                                [settings]=\"dropdownSettings\"\n                                                                (onSelect)=\"updateUsers()\"        (onDeSelect)=\"updateUsers()\"\n                                                                (onSelectAll)=\"updateUsers()\"     (onDeSelectAll)=\"updateUsers()\" \n                                                                (onGroupDeSelect)=\"updateUsers()\" (onGroupSelect)=\"updateUsers()\"   \n                                                                ></angular2-multiselect>\n                                                            </div>  \n                                                                </div>\n                                                </div>\n                                             <!-- </mat-tab>\n                            <mat-tab label=\"Interest Group Based \"> \n                                \n                                Content 2 </mat-tab>\n                            \n                           </mat-tab-group>  -->\n                                </div>  \n                        <div id=\"menu2\" role=\"tabpanel\" ria-labelledby=\"nav-menu2-tab\" class=\"tab-pane \">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"input-box\">\n                                        <label>Interest Group Category*</label>\n                                        <angular2-multiselect [data]=\"broadCastGroupCategory.dropdownList\" name=\"groupTypeDropDown\"\n                                        [(ngModel)]=\"broadCastGroupCategory.selectedItems\"\n                                        [settings]=\"groupCategorySetting\"  (onSelect)=\"selectInterestGroup($event)\" \n                                        (onDeSelect)=\"removeInterestGroup($event)\" required></angular2-multiselect>\n                                    </div>\n                                    </div>\n                                </div>\n                          </div>\n\n                          \n\n                          </div>\n\n                        \n                       \n                                <div class=\"row recipentsDiv\" > \n                                    <div class=\"col-sm-12\">\n                                       <label>Recipients</label>\n                                        <div  class=\"col-sm-12 box\" >\n                                     <label *ngFor=\"let user of users\" >\n                                         {{user.firstName+\" \"+user.middleName+\" \"+user.lastName+\",\"}}\n                                     </label>\n\n                                         </div> \n                                    </div> \n                                </div>\n                 \n                <div class=\"row\"> \n                    <div  class=\"col-sm-4\" *ngIf=\"IsBroadcast\">\n                     <div class=\"select-box\">\n                         <label>Broadcast Category*</label>\n                         <angular2-multiselect  [data]=\"broadCastCategory.dropdownList\" name=\"broadcastDropDown\"\n                         [(ngModel)]=\"broadCastCategory.selectedItems\"\n                         [settings]=\"broadCastdropdownSettings\" (onSelect)=\"categoryChange($event)\" required></angular2-multiselect>\n                     </div>  \n                   </div>\n                   <div  class=\"col-sm-4\">\n                    <div class=\"select-box\">\n                        <label>Broadcast Mode*</label>\n                        <angular2-multiselect  [data]=\"broadModeArr.dropdownList\" name=\"BroadCastModeDropDown\"\n                        [(ngModel)]=\"broadModeArr.selectedItems\"\n                        [settings]=\"roleDropdownSettings\"  required></angular2-multiselect>\n                    </div> \n                </div>\n                \n                   <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Subject*</label>\n                            <input type=\"text\" class=\"form-control form-group\" placeholder=\"Enter\" name=\"subject\" [(ngModel)]=\"message.subject\" required>\n                            <quill-editor\n                                class=\"quill-editor\"\n                                name=\"ckeditor\"\n                                [placeholder]=\"editorPlacehorder\"\n                                [(ngModel)]=\"message.ckeditor\"\n                                (onContentChanged)=\"onContentChanged($event)\">\n                            </quill-editor>\n                        </div>\n                    </div>\n            \n                    <div class=\"col-sm-12\">\n                      <ul class=\"list-inline float-right mt-4\">\n                        <li class=\"list-inline-item\">\n                          <button class=\"btn blue mr-2\" (click)=\"ClearFormData()\">Cancel</button>\n                          <button class=\"btn blue mr-2\" [disabled]=\"createBroadcastMessageForm.invalid\">Submit</button>\n                        </li>\n                      </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n      </form>\n    </ng-container>\n  </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"broadcast-setup-wrapper\">\n    \n    <div class=\"card clear form-group\" id=\"accordion\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\">\n\t\t\t\t{{(!isEdit)?'Add':'Update'}} Broadcast category\n\t\t\t</li>\n\t\t\t<div id=\"typeCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t<div class=\"details\">\n\n            <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n            <form #createBroadcastCategoryForm = \"ngForm\" name=\"createBroadcastCategoryForm\" (ngSubmit)=\"UpsertBroadcastMessageCategory(createBroadcastCategoryForm)\"  novalidate>\n                <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"input-box\">\n                        <label>Broadcast Category*</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"broadCastMessageCategory1\" [(ngModel)]=\"category.broadCastMessageCategory1\" required>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"input-box\">\n                        <label>Description Template</label>\n                        <quill-editor\n                            class=\"quill-editor\"\n                            name=\"ckeditor\"\n                            [placeholder]=\"editorPlacehorder\"\n                            [(ngModel)]=\"category.template\"\n                            (onContentChanged)=\"onContentChanged($event)\">\n                        </quill-editor>\n                        <!-- <textarea class=\"form-control\" placeholder=\"Enter\" name=\"template\" [(ngModel)]=\"category.template\" required></textarea> -->\n                    </div>\n                </div>\n                </div>\n        \n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"list-inline float-right mt-4\">\n                        <button type=\"button\" class=\"btn blue mr-4\"  (click)=\"Cancel()\">Cancel</button>\n                        <button class=\"btn blue mr-2\" [disabled]=\"createBroadcastCategoryForm.invalid\" *ngIf=\"!isEdit\">Submit</button>\n                        <button class=\"btn blue mr-2\" [disabled]=\"createBroadcastCategoryForm.invalid\" *ngIf=\"isEdit\">Update</button>\n                    </div>\n                  </div>\n                </div>\n            </form>\n\n\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t</ul>\n\t\t</div>\n    </div>\n    \n\n<div class=\"card card-table\">\n    <div class=\"card-header\">\n    <div class=\"float-left\">\n        <h5>Broadcast Category <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    </div>\n    <ul class=\"list-inline\">\n        <li class=\"list-inline-item search d-none d-md-inline-block\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bcData\" >\n        </li>\n        <!-- <li class=\"list-inline-item\">\n            <a class=\"btn l-blue mt_5\">\n                <i-feather class=\"icon print\" name=\"printer\"></i-feather>\n                <span>Print</span>\n            </a>\n        </li> -->\n    </ul>\n    </div>\n\n    <app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box>\n\n  \t<div class=\"card-body p-0\">\n\n    <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n        <thead>\n            <tr>\n            <th width=\"15%\" (click)=\"sortUnitData('broadCastMessageCategoryId')\">Category ID<span [ngClass]=\"getFieldOrderBy('broadCastMessageCategoryId')\"></span></th>\n            <th width=\"30%\" (click)=\"sortUnitData('broadCastMessageCategory1')\">Broadcast Category <span [ngClass]=\"getFieldOrderBy('broadCastMessageCategory1')\"></span></th>\n            <th width=\"45%\" (click)=\"sortUnitData('template')\">Description <span [ngClass]=\"getFieldOrderBy('template')\"></span></th>\n            <th width=\"10%\">Action</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let category of allBroadcastCategory | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: bcData ; let i = index\">\n            <td class=\"name\">{{category.broadCastMessageCategoryId}}</td>\n            <td class=\"grey\">{{category.broadCastMessageCategory1}}</td>\n            <td class=\"grey\">{{category.template}}</td>\n            <td class=\"grey\">\n          \n                <a class=\"\" (click)=\"updateData(category)\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>&nbsp;\n                <a class=\"\" (click)=\"showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n            </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <app-pagination \n        [totalItems]=\"totalItems\"  \n        [ItemStartIndex]=\"ItemStartIndex\"\n        [ItemEndIndex] = \"ItemEndIndex\"\n        [itemLimit] = \"itemLimit\"\n        (outputParams) = \"getIndexParams($event)\">\t\n    </app-pagination>\n</div>\n</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"broadcastgroup-setup-wrapper\">\n    \n    <div class=\"card clear form-group\" id=\"accordion\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<ul class=\"list-group  clear\">\n\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\">\n\t\t\t\t<h5>{{(!isEdit)?'Add':'Update'}} Interest Group</h5>\n\t\t\t</li>\n\t\t\t<div id=\"typeCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t<div class=\"details\">\n\n            <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n            <form #createBroadcastGroupCategoryForm = \"ngForm\" name=\"createBroadcastGroupCategoryForm\" (ngSubmit)=\"submitcreateBroadcastGroupCategoryForm(createBroadcastGroupCategoryForm)\"  novalidate>\n                <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"input-box\">\n                       <label> Interest Group Name*</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Group Name\" name=\"groupName\" [(ngModel)]=\"groupCategory.groupName\" required>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"input-box\">\n                        <label>Priviledge*</label>\n                        <angular2-multiselect  [data]=\"privilageCategory.dropdownList\" name=\"privilegeModeDropDown\"\n                [(ngModel)]=\"privilageCategory.selectedItems\"\n                [settings]=\"dropdownSettings\"  required></angular2-multiselect>                    </div>\n                </div>\n            </div>\n                <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"input-box\">\n                        <label>Description</label>\n                        <!-- <quill-editor\n                            class=\"quill-editor\"\n                            name=\"ckeditor\"\n                            [placeholder]=\"editorPlacehorder\"\n                            [(ngModel)]=\"groupCategory.comment\"\n                            (onContentChanged)=\"onContentChanged($event)\">\n                        </quill-editor> -->\n                        <textarea class=\"form-control\" rows=5 placeholder=\"Enter Description\" name=\"description\" [(ngModel)]=\"groupCategory.description\"></textarea>\n                        <!-- <textarea class=\"form-control\" placeholder=\"Enter\" name=\"template\" [(ngModel)]=\"category.template\" required></textarea> -->\n                    </div>\n                </div>\n                </div>\n        <div class=\"row\">\n            <!-- <div *ngIf=\"(groupCategory.parentId!=null) || (!isEdit)\" class=\"col-sm-6\">\n                <div class=\"select-box\">\n                    <label>Parent Category</label>\n                    <select \n                        name=\"parentId\" \n                        id=\"parentId\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"groupCategory.parentId\"  (ngModelChange)=\"getParent(groupCategory.parentId)\" >\n                        <option value=\"\" disabled selected hidden>Select</option>\n                         <option *ngFor=\"let item of parentCategoryList\" [value]=\"item.value\">{{ item.name }}</option>\n                     </select>\n                </div>\n             </div> -->\n            <!-- <div class=\"col-sm-6\">\n                <div class=\"input-box radio-box\">\n                    <label>Authorize*</label>\n                    \n                </div>\n                <div class=\"form-check recur-check float-left mr-4\">\n                    <input type=\"checkbox\" id=\"isUser\" [(ngModel)]=\"groupCategory.isUser\" name=\"isUser\" value=\"1\" class=\"form-check-input\">\n                    <label for=\"isUser\" class=\"form-check-label tiny\">User</label>\n                </div>\n                <div class=\"form-check recur-check float-left mr-4\">\n                    <input type=\"checkbox\" id=\"isAdmin\" [(ngModel)]=\"groupCategory.isUser\" name=\"isAdmin\" value=\"2\" class=\"form-check-input\">\n                    <label for=\"isAdmin\" class=\"form-check-label tiny\">Admin</label>\n                </div>\n\n                \n            </div>  -->\n            \n            </div>\n        \n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"list-inline float-right mt-4\">\n                       \n                        <button type=\"button\" class=\"btn blue mr-4\"  (click)=\"Cancel()\">Cancel</button>\n                        <button type=\"submit\" class=\"btn blue mr-2\" [disabled]=\"createBroadcastGroupCategoryForm.invalid\" *ngIf=\"!isEdit\">Submit</button>\n                        <button type=\"submit\" class=\"btn blue mr-2\" [disabled]=\"createBroadcastGroupCategoryForm.invalid\" *ngIf=\"isEdit\">Update</button>\n                    </div>\n                  </div>\n                </div>\n            </form>\n\n\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t</ul>\n\t\t</div>\n    </div>\n    \n\n <div class=\"card card-table\">\n    <div class=\"card-header\" >\n    <div class=\"float-left\">\n        <h5>Interest Group  <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    </div>\n    <ul class=\"list-inline\">\n        <li class=\"list-inline-item search d-none d-md-inline-block\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bcData\" >\n        </li>\n       \n    </ul>\n    </div>\n\n    <app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box>\n\n  \t<div class=\"card-body p-0\">\n\n    <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n        <thead>\n            <tr>\n            <th width=\"10%\" (click)=\"sortUnitData('serialNo')\">Serial NO<span [ngClass]=\"getFieldOrderBy('serialNo')\"></span></th>\n            <th width=\"30%\" (click)=\"sortUnitData('groupName')\">Broadcast Group Category <span [ngClass]=\"getFieldOrderBy('groupName')\"></span></th>\n            <th width=\"20%\" (click)=\"sortUnitData('description')\">Description <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n            <th width=\"30%\" (click)=\"sortUnitData('privilege')\">Privilege <span [ngClass]=\"getFieldOrderBy('privilege')\"></span></th>\n            <th width=\"10%\">Action</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let groupCategory of allBroadcastGroupCategory | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: bcData ; let i = index\">\n            <td class=\"name\">{{groupCategory.serialNo}}</td>\n            <td class=\"grey\">{{groupCategory.groupName}}</td>\n            <td class=\"grey\">{{groupCategory.description}}</td>\n            <td class=\"grey\">{{groupCategory.privilege}}</td>\n            \n            <td class=\"grey\">\n                <a class=\"\" (click)=\"updateData(groupCategory)\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>&nbsp;\n                <a class=\"\" (click)=\"showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n            </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <app-pagination \n        [totalItems]=\"totalItems\"  \n        [ItemStartIndex]=\"ItemStartIndex\"\n        [ItemEndIndex] = \"ItemEndIndex\"\n        [itemLimit] = \"itemLimit\"\n        (outputParams) = \"getIndexParams($event)\">\t\n    </app-pagination>\n</div>\n<!-- </div>\n\n</div> -->\n\n");

/***/ }),

/***/ "./src/app/ams/broadcast/broadcast-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ams/broadcast/broadcast-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BroadcastRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastRoutingModule", function() { return BroadcastRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_broadcast_setup_broadcast_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/broadcast-setup/broadcast-setup.component */ "./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.ts");
/* harmony import */ var _components_broadcast_history_broadcast_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/broadcast-history/broadcast-history.component */ "./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.ts");
/* harmony import */ var _components_broadcast_sendmessage_broadcast_sendmessage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/broadcast-sendmessage/broadcast-sendmessage.component */ "./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.ts");
/* harmony import */ var _components_broadcastgroup_setup_broadcastgroup_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/broadcastgroup-setup/broadcastgroup-setup.component */ "./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.ts");
/* harmony import */ var _components_broadcast_group_assignment_broadcast_group_assignment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/broadcast-group-assignment/broadcast-group-assignment.component */ "./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.ts");
/* harmony import */ var _components_broadcast_removeuser_broadcast_removeuser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/broadcast-removeuser/broadcast-removeuser.component */ "./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.ts");
/* harmony import */ var _components_broadcast_announcements_broadcast_announcements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/broadcast-announcements/broadcast-announcements.component */ "./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.ts");










const routes = [
    { path: '', redirectTo: 'setup', pathMatch: 'full' },
    { path: 'setup', component: _components_broadcast_setup_broadcast_setup_component__WEBPACK_IMPORTED_MODULE_3__["BroadcastSetupComponent"] },
    { path: 'groupsetup', component: _components_broadcastgroup_setup_broadcastgroup_setup_component__WEBPACK_IMPORTED_MODULE_6__["BroadcastgroupSetupComponent"] },
    { path: 'sendmessage', component: _components_broadcast_sendmessage_broadcast_sendmessage_component__WEBPACK_IMPORTED_MODULE_5__["BroadcastSendmessageComponent"] },
    { path: 'assignusers', component: _components_broadcast_group_assignment_broadcast_group_assignment_component__WEBPACK_IMPORTED_MODULE_7__["BroadcastGroupAssignmentComponent"] },
    { path: 'removeusers', component: _components_broadcast_removeuser_broadcast_removeuser_component__WEBPACK_IMPORTED_MODULE_8__["BroadcastRemoveuserComponent"] },
    { path: 'announcements', component: _components_broadcast_announcements_broadcast_announcements_component__WEBPACK_IMPORTED_MODULE_9__["BroadcastAnnouncementsComponent"] },
    { path: 'history', component: _components_broadcast_history_broadcast_history_component__WEBPACK_IMPORTED_MODULE_4__["BroadcastHistoryComponent"] },
    { path: '**', redirectTo: 'setup', pathMatch: 'full' }
];
let BroadcastRoutingModule = class BroadcastRoutingModule {
};
BroadcastRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BroadcastRoutingModule);



/***/ }),

/***/ "./src/app/ams/broadcast/broadcast.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ams/broadcast/broadcast.module.ts ***!
  \***************************************************/
/*! exports provided: BroadcastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastModule", function() { return BroadcastModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _broadcast_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./broadcast-routing.module */ "./src/app/ams/broadcast/broadcast-routing.module.ts");
/* harmony import */ var _components_broadcast_setup_broadcast_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/broadcast-setup/broadcast-setup.component */ "./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.ts");
/* harmony import */ var _components_broadcast_history_broadcast_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/broadcast-history/broadcast-history.component */ "./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.ts");
/* harmony import */ var _components_broadcast_sendmessage_broadcast_sendmessage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/broadcast-sendmessage/broadcast-sendmessage.component */ "./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.ts");
/* harmony import */ var _components_broadcastgroup_setup_broadcastgroup_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/broadcastgroup-setup/broadcastgroup-setup.component */ "./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _components_broadcast_group_assignment_broadcast_group_assignment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/broadcast-group-assignment/broadcast-group-assignment.component */ "./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.ts");
/* harmony import */ var _components_broadcast_removeuser_broadcast_removeuser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/broadcast-removeuser/broadcast-removeuser.component */ "./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.ts");
/* harmony import */ var _components_broadcast_announcements_broadcast_announcements_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/broadcast-announcements/broadcast-announcements.component */ "./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.ts");













let BroadcastModule = class BroadcastModule {
};
BroadcastModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_broadcast_setup_broadcast_setup_component__WEBPACK_IMPORTED_MODULE_5__["BroadcastSetupComponent"], _components_broadcast_history_broadcast_history_component__WEBPACK_IMPORTED_MODULE_6__["BroadcastHistoryComponent"], _components_broadcast_sendmessage_broadcast_sendmessage_component__WEBPACK_IMPORTED_MODULE_7__["BroadcastSendmessageComponent"],
            _components_broadcastgroup_setup_broadcastgroup_setup_component__WEBPACK_IMPORTED_MODULE_8__["BroadcastgroupSetupComponent"], _components_broadcast_group_assignment_broadcast_group_assignment_component__WEBPACK_IMPORTED_MODULE_10__["BroadcastGroupAssignmentComponent"], _components_broadcast_removeuser_broadcast_removeuser_component__WEBPACK_IMPORTED_MODULE_11__["BroadcastRemoveuserComponent"], _components_broadcast_announcements_broadcast_announcements_component__WEBPACK_IMPORTED_MODULE_12__["BroadcastAnnouncementsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _broadcast_routing_module__WEBPACK_IMPORTED_MODULE_4__["BroadcastRoutingModule"],
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"]
        ]
    })
], BroadcastModule);



/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".broadcast-removeuser-wrapper {\n  margin-left: 100px;\n  margin-right: 121px;\n}\n.broadcast-removeuser-wrapper .carousel-caption1 {\n  position: absolute;\n  right: 10%;\n  top: 50px;\n  left: -30%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.broadcast-removeuser-wrapper .carousel-caption2 {\n  position: absolute;\n  right: 26%;\n  top: 100px;\n  left: 10%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.broadcast-removeuser-wrapper .carousel-caption3 {\n  position: absolute;\n  right: 15%;\n  bottom: 107px;\n  left: 10%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0LWFubm91bmNlbWVudHMvYnJvYWRjYXN0LWFubm91bmNlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3QtYW5ub3VuY2VtZW50cy9icm9hZGNhc3QtYW5ub3VuY2VtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0LWFubm91bmNlbWVudHMvYnJvYWRjYXN0LWFubm91bmNlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJvYWRjYXN0LXJlbW92ZXVzZXItd3JhcHBlcntcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7IFxuICAgIG1hcmdpbi1yaWdodDogMTIxcHg7XG4gICAgLmNhcm91c2VsLWNhcHRpb24xe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbjJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDI2JTtcbiAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jYXJvdXNlbC1jYXB0aW9uM3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTUlO1xuICAgICAgICBib3R0b206MTA3cHg7XG4gICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59IiwiLmJyb2FkY2FzdC1yZW1vdmV1c2VyLXdyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTIxcHg7XG59XG4uYnJvYWRjYXN0LXJlbW92ZXVzZXItd3JhcHBlciAuY2Fyb3VzZWwtY2FwdGlvbjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMCU7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogLTMwJTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJyb2FkY2FzdC1yZW1vdmV1c2VyLXdyYXBwZXIgLmNhcm91c2VsLWNhcHRpb24yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjYlO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiAxMCU7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5icm9hZGNhc3QtcmVtb3ZldXNlci13cmFwcGVyIC5jYXJvdXNlbC1jYXB0aW9uMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1JTtcbiAgYm90dG9tOiAxMDdweDtcbiAgbGVmdDogMTAlO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BroadcastAnnouncementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastAnnouncementsComponent", function() { return BroadcastAnnouncementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Broadcast */ "./src/app/api/controllers/Broadcast.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











let BroadcastAnnouncementsComponent = class BroadcastAnnouncementsComponent {
    constructor(broadcastService, sharedService, cookieService, userService, staffService, apartmentService, injector) {
        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.userService = userService;
        this.staffService = staffService;
        this.apartmentService = apartmentService;
        this.injector = injector;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.imagePath = "../../../../../assets/images/announcement_background.jpeg";
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
    }
    ngOnInit() {
        this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
        this.getAllCategory();
        this.getAllBroadcastMessage();
        this.getAllGroupCategory();
    }
    //Get All Category
    getAllCategory() {
        let apartmentID = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.broadcastService.getBroadCastMessageCategories(apartmentID).subscribe((res) => {
            this.allCategory = res;
        });
    }
    getAllGroupCategory() {
        this.broadcastService.getAllBroadCastGroupCategory(this.apartmentID).subscribe((res) => {
            this.broadCastGroupCategory = res;
        });
    }
    getGroupCategoryName(groupcategoryId) {
        let groupcategory = this.broadCastGroupCategory.filter(function (obj) {
            return obj.broadCastGroupCategoryId == groupcategoryId;
        });
        return groupcategory[0].groupName;
    }
    getCategoryName(name) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.allCategory, function (item) {
            if (item.broadCastMessageCategoryId === name)
                return item;
        });
        if (data === undefined || data === null || data.length == 0) {
            return '';
        }
        else {
            return data[0].broadCastMessageCategory1;
        }
    }
    getUserName(name) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.allUser, function (item) {
            if (item.userId === name)
                return item;
        });
        if (data === undefined || data === null || data.length == 0) {
            return '';
        }
        else {
            return data[0].firstName;
        }
    }
    getAllBroadcastMessage() {
        let apartmentId = parseInt(this.cookieService.get('apartmentId'));
        var users$ = this.userService.getAllUsers();
        var allBroadCastmessages$ = users$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])((users) => {
            this.allUser = users;
            let apartmentID = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            return this.broadcastService.getAllBroadcastMessages(apartmentID);
        }));
        allBroadCastmessages$.subscribe((res) => {
            this.broadCastMessages = res;
            this.broadCastMessages.forEach(element => {
                if (element.broadCastGroupcategoryId == null) {
                    element.CategoryName = this.getCategoryName(element.broadcastMessageCategoryId);
                }
                else {
                    element.CategoryName = this.getGroupCategoryName(element.broadCastGroupcategoryId);
                }
                element.UserName = this.getUserName(element.broadcastBy);
            });
            this.broadCastBased = this.broadCastMessages.filter(function (obj) {
                return obj.broadCastGroupcategoryId == null;
            });
            this.interestGroupBased = this.broadCastMessages.filter(function (obj) {
                return obj.broadCastGroupcategoryId != null;
            });
        });
    }
};
BroadcastAnnouncementsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
BroadcastAnnouncementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast-announcements',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./broadcast-announcements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./broadcast-announcements.component.scss */ "./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], BroadcastAnnouncementsComponent);



/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".broadcastgroupAssignment-setup-wrapper .card {\n  overflow: visible !important;\n}\n.broadcastgroupAssignment-setup-wrapper .card .card-body {\n  overflow: visible !important;\n}\n.broadcastgroupAssignment-setup-wrapper .assignBtn {\n  position: absolute;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0LWdyb3VwLWFzc2lnbm1lbnQvYnJvYWRjYXN0LWdyb3VwLWFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3QtZ3JvdXAtYXNzaWdubWVudC9icm9hZGNhc3QtZ3JvdXAtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDRCQUFBO0FDQVI7QURFSTtFQUNJLDRCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Jyb2FkY2FzdC9jb21wb25lbnRzL2Jyb2FkY2FzdC1ncm91cC1hc3NpZ25tZW50L2Jyb2FkY2FzdC1ncm91cC1hc3NpZ25tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyb2FkY2FzdGdyb3VwQXNzaWdubWVudC1zZXR1cC13cmFwcGVye1xuICAgIC5jYXJke1xuICAgICAgICBvdmVyZmxvdzp2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jYXJkIC5jYXJkLWJvZHkge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5hc3NpZ25CdG57XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6MDtcbiAgICB9XG59IiwiLmJyb2FkY2FzdGdyb3VwQXNzaWdubWVudC1zZXR1cC13cmFwcGVyIC5jYXJkIHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi5icm9hZGNhc3Rncm91cEFzc2lnbm1lbnQtc2V0dXAtd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi5icm9hZGNhc3Rncm91cEFzc2lnbm1lbnQtc2V0dXAtd3JhcHBlciAuYXNzaWduQnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BroadcastGroupAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastGroupAssignmentComponent", function() { return BroadcastGroupAssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Broadcast */ "./src/app/api/controllers/Broadcast.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











let BroadcastGroupAssignmentComponent = class BroadcastGroupAssignmentComponent {
    constructor(broadcastService, sharedService, cookieService, userService, staffService, apartmentService, injector) {
        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.userService = userService;
        this.staffService = staffService;
        this.apartmentService = apartmentService;
        this.injector = injector;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.groupCategorySetting = {};
        this.users = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.dropdownSettings = {};
        this.blockdropdownSettings = {};
        this.roleTypedropdownSettings = {};
        this.roleDropdownSettings = {};
        this.usersDropdownSettings = {};
        this.roleTypeArr = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.broadCastGroupCategory = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.roleCategory = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.apartmentBlock = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.filterOptions = {
            "roleids": null,
            "apartmentId": 0,
            "blockids": null,
            "searchText": ""
        };
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
    }
    ngOnInit() {
        // this.message={};
        this.loginUserId = parseInt(this.cookieService.get('userId'));
        this.groupUsercategory = {};
        this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
        this.getUsers();
        this.assignUsers = [];
        // this.getAllUsers();
        //this.getAllRoleTypesList();
        this.getAllApartmentBlockList();
        this.getAllGroupCategory();
        this.dropdownSettings = {
            singleSelection: false,
            enableSearchFilter: true,
            labelKey: 'name',
            primaryKey: 'value',
            groupBy: "category",
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.groupCategorySetting = {
            singleSelection: true,
            enableSearchFilter: true,
            labelKey: 'groupName',
            primaryKey: 'broadCastGroupCategoryId',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.roleDropdownSettings = {
            singleSelection: false,
            enableSearchFilter: true,
            labelKey: 'name',
            primaryKey: 'value',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.usersDropdownSettings = {
            singleSelection: false,
            enableSearchFilter: true,
            labelKey: 'userFullName',
            primaryKey: 'userFullDetail',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.blockdropdownSettings = {
            singleSelection: false,
            primaryKey: 'apartmentBlockId',
            labelKey: 'apartmentBlockNumber',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.roleTypedropdownSettings = {
            singleSelection: true,
            primaryKey: 'value',
            labelKey: 'name',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.getInterestGroupUsers();
        this.roleCategory.dropdownList = [{ "name": "Tenant", "value": 2 }, { "name": "Owner", "value": 4 }];
        // this.filteredOptions = this.myControl.valueChanges
        // .pipe(
        //   startWith(''),
        //   map(val => this.filter(val))
        // );
        // this.subject.pipe(
        //   debounceTime(1000),
        //   map(searchText =>{
        //     this.userService.getUserBykeyword(this.filterOptions);
        //      })).subscribe((res:any)=>{
        //       this.filteredUsers =res; 
        //       console.log(this.filteredUsers);
        //      },
        //      error=>console.log(error)
        //      );
    }
    //   filter(val: string): any[] {
    //     if(val.length>2){
    //       this.filterOptions.apartmentId=this.apartmentID;
    //       let roleIds= Array.prototype.map.call(this.roleCategory.selectedItems,function(item){ return item.value}).join(",");
    //     if(roleIds.length>0)
    //     {
    //       this.filterOptions.roleids=roleIds;
    //     }
    //     let blockIds=Array.prototype.map.call(this.apartmentBlock.selectedItems,function(item){ return item.apartmentBlockId}).join(",");
    //     if(blockIds.length>0)
    //     {
    //     this.filterOptions.blockids= blockIds
    //     }
    //    this.filterOptions.searchText=val;
    //   this.userService.getUserBykeyword(this.filterOptions).subscribe((res:any)=>{
    //      this.filteredUsers =res; 
    //     },
    //     error=>console.log(error)
    //     );
    //     }
    //  }
    getUsers() {
        this.filterOptions.apartmentId = this.apartmentID;
        let roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) { return item.value; }).join(",");
        if (roleIds.length > 0) {
            this.filterOptions.roleids = roleIds;
        }
        let blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) { return item.apartmentBlockId; }).join(",");
        if (blockIds.length > 0) {
            this.filterOptions.blockids = blockIds;
        }
        this.filterOptions.searchText = null;
        this.userService.getUsersByKeyword(this.filterOptions).subscribe((res) => {
            res.forEach(element => {
                element.userFullName = element.userName + " " + element.roleName + " " + element.apartmentBlockNumber + " " + element.apartmentBlockUnitNumber;
                element.userFullDetail = element.userId + " " + element.roleId + " " + element.apartmentBlockId + " " + element.apartmentBlockUnitId;
            });
            this.allUsers = res;
            this.users.dropdownList = res;
        }, error => console.log(error));
    }
    search(evt) {
        // const searchText = evt.target.value
        // if(searchText.length>2)
        //     this.subject.next(searchText)
        const searchText = evt.target.value;
        if (searchText.length > 2) {
            this.filterOptions.apartmentId = this.apartmentID;
            let roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) { return item.value; }).join(",");
            if (roleIds.length > 0) {
                this.filterOptions.roleids = roleIds;
            }
            let blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) { return item.apartmentBlockId; }).join(",");
            if (blockIds.length > 0) {
                this.filterOptions.blockids = blockIds;
            }
            this.filterOptions.searchText = evt.target.value;
            this.userService.getUsersByKeyword(this.filterOptions).subscribe((res) => {
                this.filteredUsers = res;
            }, error => console.log(error));
        }
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    //   getAllRoleTypesList(){
    //     this.userService.getAllRoleTypes().subscribe((res:any) => {
    //      this.roleTypeArr.dropdownList=res.filter(function(obj){
    //            return ["OWNER","TENANT"].includes(obj.name.toUpperCase())
    //      });
    //   });
    // }
    // getAppartmentRole(item){
    //   this.roleCategory.selectedItems=[];
    //  // this.staffCategory.selectedItems=[];
    //  let parms={
    //   'RoleTypeId': item.value,
    //   "ApartmentId": this.apartmentID
    //  }
    //   this.userService.getApartmentRolesByRoleTypeID(parms).subscribe((res:any) => {
    //     this.roleCategory.dropdownList=res;
    //        this.updateUsers();
    //     });
    // }
    getAllApartmentBlockList() {
        this.apartmentService.getApartmentBlockByApartmentId(this.apartmentID).subscribe((res) => {
            this.apartmentBlock.dropdownList = res;
        });
    }
    // getAllUsers(){
    //   this.userService.getUsersByApartmentId(this.apartmentID).subscribe(
    //     (res)=>{
    //       this.allUsers=res;
    //       this.updateUsers();
    //     }
    //   );
    // }
    assignUser() {
        let usersToInsert = this.users.selectedItems;
        let counter = 0;
        usersToInsert.forEach(element => {
            counter++;
            this.isLast = counter == usersToInsert.length;
            this.insertGroupUser(element.userId, element.roleID, element.apartmentBlockID, element.apartmentBlockUnitID);
            this.assignUsers.push(element);
            this.users.dropdownList = this.users.dropdownList.filter(function (obj) {
                return obj.userId !== element.userId || obj.roleID !== element.roleID || obj.apartmentBlockID !== element.apartmentBlockID || obj.unitId !== element.apartmentBlockUnitID;
            });
        });
        this.users.selectedItems = [];
    }
    getUsersBycategory(item) {
        let categoryUsers = this.interestGroupUsers.filter(function (obj) {
            return obj.broadCastGroupCategoryId == item.broadCastGroupCategoryId;
        });
        let tempAssignUsers = [];
        let tempUsers = [...this.allUsers];
        categoryUsers.forEach(element => {
            tempUsers.forEach(obj => {
                let isFound = obj.userId == element.userId && obj.roleID == element.roleId && obj.apartmentBlockID == element.apartmentBlockId && obj.apartmentBlockUnitID == element.unitId;
                if (isFound) {
                    tempAssignUsers.push(obj);
                    tempUsers = tempUsers.filter(function (obj2) {
                        return obj !== obj2;
                    });
                }
            });
        });
        this.users.dropdownList = [...tempUsers];
        this.assignUsers = [...tempAssignUsers];
    }
    removeCategory() {
        this.users.dropdownList = this.allUsers;
        this.assignUsers = [];
        this.users.selectedItems = [];
    }
    updateData(interestGroup) {
        //ApartmentBlockIDs
        //interestGroup
        let blockIdArr = interestGroup.apartmentBlockIds.split(',');
        if (blockIdArr.length > 0) {
            this.apartmentBlock.selectedItems = this.apartmentBlock.dropdownList.filter(function (element) {
                return blockIdArr.includes(element.apartmentBlockId.toString());
            });
        }
        let roleTypeId = interestGroup.RoleTypeId;
        if (roleTypeId > 0) {
            this.roleTypeArr.selectedItems = this.roleTypeArr.dropdownList.filter(function (element) {
                return element.value === roleTypeId;
            });
        }
        let roleIdArr = interestGroup.RoleIds.split(',');
        if (roleIdArr.length > 0) {
            this.roleCategory.selectedItems = this.roleCategory.dropdownList.filter(function (element) {
                return roleIdArr.includes(element.value.toString());
            });
        }
    }
    // updateUsers(){
    //   //this.tempUsers=[...this.allUsers];
    //   this.getUserIds$().subscribe((res:any)=>{
    //      if(res.length>0){
    //      let fiterUsers =this.allUsers.filter(function(obj){
    //       if(res.includes(obj.userId))
    //       {
    //         obj.fullName=obj.firstName+' '+obj.middleName+' '+obj.lastName;
    //         return obj;
    //       }
    //     });
    //     this.users.dropdownList=fiterUsers;
    //     }else{
    //       this.users.dropdownList=[];
    //     }
    //     console.log( this.users.dropdownList);
    //   });
    // }
    getUserIds$() {
        let roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) { return item.value; }).join(",");
        let blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) { return item.apartmentBlockId; }).join(",");
        let params = {
            'roleIds': roleIds,
            'conditionIds': "",
            'appartmentbBlockIds': blockIds,
            'apartmentId': this.apartmentID,
            'staffcategoryIds': "",
            'staffSubCategoryIds': ''
        };
        return this.userService.getUsersByFilter(params);
    }
    submitMapGroupUserForm(mapGroupUserForm) {
        let broadCastGroupCategoryID = Array.prototype.map.call(this.broadCastGroupCategory.selectedItems, function (item) { return item.broadCastGroupCategoryId; }).join(",");
        let roleTypeId = Array.prototype.map.call(this.roleTypeArr.selectedItems, function (item) { return item.value; }).join(",");
        let roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) { return item.value; }).join(",");
        let blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) { return item.apartmentBlockId; }).join(",");
        let userIds = Array.prototype.map.call(this.users.selectedItems, function (item) { return item.userId; }).join(",");
        let broadCastGroupCategoryUser = {
            'broadCastGroupCategoryUserID': 0,
            'broadCastGroupCategoryID': broadCastGroupCategoryID,
            'userIDs': userIds,
            'roleTypeId': roleTypeId,
            'roleIDs': roleIds,
            'apartmentBlockIDs': blockIds,
            'isActive': true,
            'insertedBy': parseInt(this.cookieService.get('userId')),
            'insertedOn': new Date().toISOString(),
            'updatedBy': null,
            'updatedOn': null,
            'apartmentID': this.apartmentID,
            'serialNumber': 0,
        };
        if (this.isEdit) {
            broadCastGroupCategoryUser.broadCastGroupCategoryUserID = this.groupUsercategory.broadCastGroupCategoryUserID;
            broadCastGroupCategoryUser.insertedBy = this.groupUsercategory.insertedBy;
            broadCastGroupCategoryUser.insertedOn = this.groupUsercategory.insertedOn;
            broadCastGroupCategoryUser.updatedBy = this.loginUserId;
            broadCastGroupCategoryUser.updatedOn = new Date().toISOString();
            broadCastGroupCategoryUser.serialNumber = this.groupUsercategory.serialNo;
        }
        let broadcast = {
            broadcast: broadCastGroupCategoryUser
        };
        this.broadcastService.upsertBroadCastGroupCategoryUser(broadcast).subscribe((res) => {
            if (res.message) {
                if (this.isEdit) {
                    this.sharedService.setAlertMessage("Interest groups mapping to user updated successfully");
                }
                else {
                    this.sharedService.setAlertMessage("Interest groups mapping to user added successfully");
                }
                //   this.getAllCategory();
                this.groupUsercategory = {};
                this.isEdit = false;
                this.reset();
                this.getInterestGroupUsers();
            }
        });
    }
    insertGroupUser(userId, roleId, blockId, unitId) {
        let broadCastGroupCategoryID = Array.prototype.map.call(this.broadCastGroupCategory.selectedItems, function (item) { return item.broadCastGroupCategoryId; }).join(",");
        let broadCastGroupCategoryUser = {
            'broadCastGroupCategoryUserID': 0,
            'broadCastGroupCategoryID': broadCastGroupCategoryID,
            'userID': userId,
            'roleID': roleId,
            'apartmentBlockID': blockId,
            'unitID': unitId,
            'isActive': true,
            'insertedBy': parseInt(this.cookieService.get('userId')),
            'insertedOn': new Date().toISOString(),
            'updatedBy': null,
            'updatedOn': null,
            'apartmentID': this.apartmentID,
            'serialNumber': 0
        };
        let broadcast = {
            broadcast: broadCastGroupCategoryUser
        };
        this.broadcastService.upsertBroadCastGroupCategoryUser(broadcast).subscribe((res) => {
            if (res.message) {
                if (this.isLast) {
                    this.sharedService.setAlertMessage("Interest groups mapping to user(s) added successfully");
                    this.isLast = false;
                }
            }
        });
    }
    removeRole() {
        this.roleCategory.dropdownList = [];
        this.roleCategory.selectedItems = [];
        this.users.selectedItems = [];
    }
    reset() {
        this.removeRole();
        this.apartmentBlock.selectedItems = [];
        this.roleTypeArr.selectedItems = [];
        this.broadCastGroupCategory.selectedItems = [];
    }
    //Get Category Type
    getAllGroupCategory() {
        this.broadcastService.getAllBroadCastGroupCategory(this.apartmentID).subscribe((res) => {
            this.broadCastGroupCategory.dropdownList = res;
        });
    }
    getInterestGroupUsers() {
        this.broadcastService.getBroadCastGroupCategoryUser(this.apartmentID).subscribe((res) => {
            this.interestGroupUsers = res;
            this.isDataLoaded = true;
            this.totalItems = this.interestGroupUsers.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
};
BroadcastGroupAssignmentComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
BroadcastGroupAssignmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast-group-assignment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./broadcast-group-assignment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./broadcast-group-assignment.component.scss */ "./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], BroadcastGroupAssignmentComponent);



/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3QtaGlzdG9yeS9icm9hZGNhc3QtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BroadcastHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastHistoryComponent", function() { return BroadcastHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Broadcast */ "./src/app/api/controllers/Broadcast.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");









let BroadcastHistoryComponent = class BroadcastHistoryComponent {
    constructor(broadcastService, sharedService, lookupService, userService, cookieService) {
        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.userService = userService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.bcData = "";
        this.unitFieldType = "broadcastOn";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    ngOnInit() {
        //this.getAllUser();
        // this.getAllGroup();
        this.getAllCategory();
        this.getAllType();
        this.getAllBroadcastMessage();
    }
    //Get All Group
    getAllGroup() {
        this.broadcastService.getAllBroadcastGroups().subscribe((res) => {
            this.allgroup = res;
        });
    }
    //Get All Category
    getAllCategory() {
        let apartmentID = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.broadcastService.getBroadCastMessageCategories(apartmentID).subscribe((res) => {
            this.allCategory = res;
        });
    }
    //Get All Type
    getAllType() {
        let params = {
            LookupTypeId: 11
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.allType = res;
        });
    }
    // getGroupName(name){
    //   var data = _.filter( this.allgroup, function( item ) {
    //     if(item.broadcastGroupId === name)
    //       return item;
    //     } );
    //     if(data === undefined || data === null || data.length == 0){
    //       return '';
    //     }
    //     else {
    //       return data[0].groupName;
    //     }
    // }
    getCategoryName(name) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.allCategory, function (item) {
            if (item.broadCastMessageCategoryId === name)
                return item;
        });
        if (data === undefined || data === null || data.length == 0) {
            return '';
        }
        else {
            return data[0].broadCastMessageCategory1;
        }
    }
    getTypeName(name) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.allType, function (item) {
            if (item.lookupValueId === name)
                return item;
        });
        if (data === undefined || data === null || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName;
        }
    }
    getUserName(name) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.allUser, function (item) {
            if (item.userId === name)
                return item;
        });
        if (data === undefined || data === null || data.length == 0) {
            return '';
        }
        else {
            return data[0].firstName;
        }
    }
    getBroadCastMode(modeIds) {
        if (modeIds.length > 0) {
            var broadcastModeString = "";
            var modeIdsArr = modeIds.split(',');
            if (modeIdsArr.length > 0) {
                modeIdsArr.forEach(element => {
                    if (element == "40") {
                        broadcastModeString = broadcastModeString + "General SMS,";
                    }
                    if (element == "41") {
                        broadcastModeString = broadcastModeString + "Whatsapp,";
                    }
                    if (element == "42") {
                        broadcastModeString = broadcastModeString + "Email,";
                    }
                });
                return broadcastModeString = broadcastModeString.substring(0, broadcastModeString.length - 1);
            }
        }
    }
    getAllBroadcastMessage() {
        let apartmentID = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        var users$ = this.userService.getAllUsers();
        var allBroadCastmessages$ = users$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])((users) => {
            this.allUser = users;
            return this.broadcastService.getAllBroadcastMessages(apartmentID);
        }));
        allBroadCastmessages$.subscribe((res) => {
            this.broadCastMessages = res;
            this.broadCastMessages.forEach(element => {
                element.CategoryName = this.getCategoryName(element.broadcastMessageCategoryId);
                element.BroadCastMode = this.getBroadCastMode(element.broadcastModeIds);
                element.UserName = this.getUserName(element.broadcastBy);
            });
            this.isDataLoaded = true;
            this.totalItems = this.broadCastMessages.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
};
BroadcastHistoryComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
BroadcastHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./broadcast-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./broadcast-history.component.scss */ "./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], BroadcastHistoryComponent);



/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3QtcmVtb3ZldXNlci9icm9hZGNhc3QtcmVtb3ZldXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BroadcastRemoveuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastRemoveuserComponent", function() { return BroadcastRemoveuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Broadcast */ "./src/app/api/controllers/Broadcast.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");









let BroadcastRemoveuserComponent = class BroadcastRemoveuserComponent {
    constructor(broadcastService, sharedService, cookieService, userService, staffService, apartmentService, injector) {
        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.userService = userService;
        this.staffService = staffService;
        this.apartmentService = apartmentService;
        this.injector = injector;
        this.broadCastGroupCategory = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.filterOptions = {
            "roleids": null,
            "apartmentId": 0,
            "blockids": null,
            "searchText": ""
        };
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
    }
    ngOnInit() {
        this.loginUserId = parseInt(this.cookieService.get('userId'));
        this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
        this.groupCategorySetting = {
            singleSelection: true,
            enableSearchFilter: true,
            labelKey: 'groupName',
            primaryKey: 'broadCastGroupCategoryId',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.getAllGroupCategory();
        this.getAllApartmentBlockList();
        this.getUsers();
        this.getAllGoupUsers();
    }
    // getUsers(Item){
    //   //get All user based on apartmentId and broadCastGroupCategoryId
    //   let params={
    //     "aparmentId":this.apartmentID,
    //     "broadCastGroupCategoryId":Item.broadCastGroupCategoryId
    //   }
    //  // this.allGroupUser=this.broadcastService.getBroadCastGroupCategoryUserResponse()
    // }
    removeUser(user) {
        var params = {
            broadCastGroupCategoryUserId: user.broadCastGroupCategoryUserId,
            deleteBy: this.loginUserId
        };
        this.broadcastService.deleteBroadCastGroupCategoryUser(params).subscribe((res) => {
            this.sharedService.setAlertMessage("User has been removed from interest group successfully");
            this.allGroupUser = this.allGroupUser.filter(function (obj) {
                return obj.broadCastGroupCategoryUserId !== user.broadCastGroupCategoryUserId;
            });
            this.interestGroupUsers = this.interestGroupUsers.filter(function (obj) {
                return obj.broadCastGroupCategoryUserId !== user.broadCastGroupCategoryUserId;
            });
        });
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getAllGoupUsers() {
        this.broadcastService.getBroadCastGroupCategoryUser(this.apartmentID).subscribe((res) => {
            this.interestGroupUsers = res;
            this.interestGroupUsers.forEach(element => {
                let currentUser = this.getUser(element.userId, element.roleId, element.apartmentBlockId, element.unitId);
                element.role = currentUser.roleName;
                element.block = currentUser.apartmentBlockNumber;
                element.unit = currentUser.apartmentBlockUnitNumber;
                element.user = currentUser.userName;
                element.groupCategory = this.getGroupCategory(element.broadCastGroupCategoryId);
            });
            this.allGroupUser = this.interestGroupUsers;
        });
    }
    getUser(userId, roleId, apartmentBlockId, unitId) {
        let users = this.allUsers.filter(function (obj) {
            return obj.userId == userId && obj.roleID == roleId && obj.apartmentBlockID == apartmentBlockId && obj.apartmentBlockUnitID == unitId;
        });
        return users[0];
    }
    getUsers() {
        this.filterOptions.apartmentId = this.apartmentID;
        this.filterOptions.searchText = null;
        this.userService.getUsersByKeyword(this.filterOptions).subscribe((res) => {
            this.allUsers = res;
        }, error => console.log(error));
    }
    getAllApartmentBlockList() {
        this.apartmentService.getApartmentBlockByApartmentId(this.apartmentID).subscribe((res) => {
            this.apartmentBlockList = res;
        });
    }
    getGroupCategory(groupCategoryid) {
        let groupCategory = this.broadCastGroupCategory.dropdownList.filter(function (obj) {
            return obj.broadCastGroupCategoryId == groupCategoryid;
        });
        return groupCategory[0].groupName;
    }
    //Get Category Type
    getAllGroupCategory() {
        this.broadcastService.getAllBroadCastGroupCategory(this.apartmentID).subscribe((res) => {
            this.broadCastGroupCategory.dropdownList = res;
        });
    }
    deSelectCategory() {
        this.allGroupUser = this.interestGroupUsers;
    }
    getUsersBycategory(item) {
        let categoryUsers = this.interestGroupUsers.filter(function (obj) {
            return obj.broadCastGroupCategoryId == item.broadCastGroupCategoryId;
        });
        this.allGroupUser = categoryUsers;
    }
};
BroadcastRemoveuserComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_7__["StaffService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
BroadcastRemoveuserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast-removeuser',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./broadcast-removeuser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./broadcast-removeuser.component.scss */ "./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_7__["StaffService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], BroadcastRemoveuserComponent);



/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".broadcast-message-wrapper .nav-tabs .nav-item.show .nav-link, .broadcast-message-wrapper .nav-tabs .nav-link.active {\n  color: #0062cc;\n  background-color: transparent;\n  border-color: transparent transparent #f3f3f3;\n  border-bottom: 3px solid !important;\n  font-size: 16px;\n  font-weight: bold;\n}\n.broadcast-message-wrapper .tab-content > .active {\n  margin-top: 18px;\n}\n.broadcast-message-wrapper angular2-multiselect {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem !important;\n}\n.broadcast-message-wrapper .selected-list .c-list .c-token {\n  font-size: 1.2rem !important;\n}\n.broadcast-message-wrapper .c-btn {\n  font-size: 1.2rem !important;\n}\n.broadcast-message-wrapper .recipentsDiv {\n  margin-bottom: 10px;\n}\n.broadcast-message-wrapper .recipentsDiv .box {\n  border: 1px solid #ccc;\n  height: 150px;\n  overflow-y: auto;\n}\n.broadcast-message-wrapper .recipentsDiv .box label {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0LXNlbmRtZXNzYWdlL2Jyb2FkY2FzdC1zZW5kbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Jyb2FkY2FzdC9jb21wb25lbnRzL2Jyb2FkY2FzdC1zZW5kbWVzc2FnZS9icm9hZGNhc3Qtc2VuZG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRko7QURJQTtFQUNFLGdCQUFBO0FDRkY7QURJRTtFRStDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VGakRNLDRCQUFBO0FDRVI7QURDSTtFQUNFLDRCQUFBO0FDQ047QURFSTtFQUNFLDRCQUFBO0FDQU47QURFSTtFQUNFLG1CQUFBO0FDQU47QURDTTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURBUTtFQUNFLGtCQUFBO0FDRVYiLCJmaWxlIjoic3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0LXNlbmRtZXNzYWdlL2Jyb2FkY2FzdC1zZW5kbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zY3NzL2ZvbnRzLnNjc3NcIjtcblxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXJ7XG4gIC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAwNjJjYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmM2YzZjM7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRhYi1jb250ZW50Pi5hY3RpdmUgeyAgXG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG4gIGFuZ3VsYXIyLW11bHRpc2VsZWN0e1xuICAgICAgQGluY2x1ZGUgIGRlc3AtcmVndWxhcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc2VsZWN0ZWQtbGlzdCAuYy1saXN0IC5jLXRva2Vue1xuICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYy1idG57XG4gICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucmVjaXBlbnRzRGl2e1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIC5ib3h7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICAgICAgaGVpZ2h0OjE1MHB4O1xuICAgICAgICBvdmVyZmxvdy15OmF1dG87XG4gICAgICAgIGxhYmVse1xuICAgICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgXG59IiwiLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzAwNjJjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2YzZjNmMztcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciAudGFiLWNvbnRlbnQgPiAuYWN0aXZlIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbi5icm9hZGNhc3QtbWVzc2FnZS13cmFwcGVyIGFuZ3VsYXIyLW11bHRpc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnNlbGVjdGVkLWxpc3QgLmMtbGlzdCAuYy10b2tlbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciAuYy1idG4ge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnJlY2lwZW50c0RpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciAucmVjaXBlbnRzRGl2IC5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnJlY2lwZW50c0RpdiAuYm94IGxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BroadcastSendmessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastSendmessageComponent", function() { return BroadcastSendmessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Broadcast */ "./src/app/api/controllers/Broadcast.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");










let BroadcastSendmessageComponent = class BroadcastSendmessageComponent {
    constructor(broadcastService, sharedService, cookieService, userService, staffService, apartmentService, injector) {
        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.userService = userService;
        this.staffService = staffService;
        this.apartmentService = apartmentService;
        this.injector = injector;
        this.dropdownSettings = {};
        this.blockdropdownSettings = {};
        this.roleTypedropdownSettings = {};
        this.broadCastdropdownSettings = {};
        this.groupCategorySetting = {};
        this.roleDropdownSettings = {};
        this.staffCategoryMap = new Map();
        this.staffSubCategoryMap = new Map();
        this.roleTypeArr = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.roleCategory = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.staffCategory = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.staffSubCategory = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.broadCastCategory = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.apartmentBlock = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.condition = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.broadModeArr = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.broadCastGroupCategory = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.allBroadcastMessageGroup = [];
        this.isFlashNotice = false;
        this.editorPlacehorder = "";
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
    }
    onContentChanged(event) {
    }
    ngOnInit() {
        this.message = {};
        this.IsBroadcast = true;
        this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
        this.getAllUsers();
        this.getAllCategory();
        this.getAllRoleTypesList();
        this.getAllApartmentBlockList();
        this.getAllGroupCategory();
        this.getInterestGroupUsers();
        this.groupCategorySetting = {
            singleSelection: true,
            enableSearchFilter: true,
            labelKey: 'groupName',
            primaryKey: 'broadCastGroupCategoryId',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.dropdownSettings = {
            singleSelection: false,
            enableSearchFilter: true,
            labelKey: 'name',
            primaryKey: 'value',
            groupBy: "category",
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.roleDropdownSettings = {
            singleSelection: false,
            enableSearchFilter: true,
            labelKey: 'name',
            primaryKey: 'value',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.blockdropdownSettings = {
            singleSelection: false,
            primaryKey: 'apartmentBlockId',
            labelKey: 'apartmentBlockNumber',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.roleTypedropdownSettings = {
            singleSelection: true,
            primaryKey: 'value',
            labelKey: 'name',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        this.broadCastdropdownSettings = {
            singleSelection: true,
            primaryKey: 'broadCastMessageCategoryId',
            labelKey: 'broadCastMessageCategory1',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
    }
    currentTab(item) {
        this.selectedTab = item;
        if (this.selectedTab == 'interest') {
            // this.users=[];
            this.IsBroadcast = false;
            if (this.broadCastGroupCategory.selectedItems.length > 0) {
                this.selectInterestGroup(this.broadCastGroupCategory.selectedItems[0]);
            }
            else {
                this.users = [];
            }
        }
        if (this.selectedTab == 'role') {
            this.updateUsers();
            this.IsBroadcast = true;
        }
    }
    getAllUsers() {
        this.userService.getUsersByApartmentId(this.apartmentID).subscribe((res) => {
            this.allUsers = res;
            this.updateUsers();
        });
    }
    selectInterestGroup(item) {
        let selectedGroup = this.interestGroupUsers.filter(function (element) {
            return element.broadCastGroupCategoryId == item.broadCastGroupCategoryId;
        });
        if (selectedGroup.length > 0) {
            let userIds = [];
            selectedGroup.forEach(element => {
                userIds.push(element.userId);
            });
            if (userIds.length > 0) {
                this.users = this.allUsers.filter(function (obj) {
                    return userIds.includes(obj.userId);
                });
            }
            else {
                this.users = [];
            }
        }
        else {
            this.users = [];
        }
    }
    removeInterestGroup(item) {
        this.users = [];
    }
    //broadCastGroupCategoryId
    flashNotice(bool) {
        this.isFlashNotice = bool;
    }
    categoryChange(item) {
        let id = parseInt(item.broadCastMessageCategoryId);
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.allcategory, function (item) {
            if (item.broadCastMessageCategoryId === id)
                return item;
        });
        if (data === undefined || data === null || data.length == 0) {
            this.message.ckeditor = '';
        }
        else {
            this.message.ckeditor = data[0].template;
        }
    }
    getAllApartmentBlockList() {
        this.apartmentService.getApartmentBlockByApartmentId(this.apartmentID).subscribe((res) => {
            this.apartmentBlock.dropdownList = res;
            var broadCastModeArr = [{ "name": "General SMS", "value": 40 },
                { "name": "Whatsapp", "value": 41 },
                { "name": "Email", "value": 42 }];
            this.broadModeArr.dropdownList = broadCastModeArr;
        });
    }
    //Get All Broadcast Category
    getAllCategory() {
        let apartmentID = parseInt(this.cookieService.get('apartmentId'));
        this.broadcastService.getBroadCastMessageCategories(this.apartmentID).subscribe((res) => {
            this.allcategory = res;
            this.broadCastCategory.dropdownList = res;
        });
    }
    getAllRoleTypesList() {
        this.userService.getAllRoleTypes().subscribe((res) => {
            this.roleTypeArr.dropdownList = res;
        });
    }
    getAppartmentRole(item) {
        this.roleCategory.selectedItems = [];
        this.staffCategory.selectedItems = [];
        var params = {
            RoleTypeId: item.value,
            ApartmentId: this.apartmentID
        };
        this.userService.getApartmentRolesByRoleTypeId(params).subscribe((res) => {
            this.condtionRequired = parseInt(item.value) == 2 || parseInt(item.value) == 4;
            ;
            this.roleCategory.dropdownList = res;
            let conditinArr = [{ "name": "IsLiving", "value": 1 },
                { "name": "IsPrimaryContact", "value": 2 }];
            if (this.condtionRequired) {
                this.condition.dropdownList = conditinArr;
            }
            else {
                this.condition.dropdownList = [];
                this.condition.selectedItems = [];
            }
            this.updateUsers();
        });
    }
    updateUsers() {
        //this.tempUsers=[...this.allUsers];
        this.getUserIds$().subscribe((res) => {
            if (res.length > 0) {
                this.users = this.allUsers.filter(function (obj) {
                    return res.includes(obj.userId);
                });
            }
            else {
                this.users = [];
            }
        });
    }
    getAllGroupCategory() {
        this.broadcastService.getAllBroadCastGroupCategory(this.apartmentID).subscribe((res) => {
            this.broadCastGroupCategory.dropdownList = res;
        });
    }
    getInterestGroupUsers() {
        this.broadcastService.getBroadCastGroupCategoryUser(this.apartmentID).subscribe((res) => {
            this.interestGroupUsers = res;
        });
    }
    getstaffCategories(item) {
        this.isStaff = this.roleTypeArr.selectedItems[0].name.toLowerCase() == "staff";
        if (this.isStaff) {
            if (this.staffCategoryMap.get(item.value) == undefined) {
                let params = {
                    'roleId': item.value,
                    'apartmentId': this.apartmentID
                };
                this.staffService.getStaffCategoryByRole(params).subscribe((res) => {
                    let temp = [...this.staffCategory.dropdownList];
                    res.forEach(element => {
                        element.category = item.name;
                        temp.push(element);
                    });
                    this.staffCategoryMap.set(item.value, res);
                    this.staffCategory.dropdownList = temp;
                    this.updateUsers();
                });
            }
            else {
                let temp = [...this.staffCategory.dropdownList];
                let addStaffCategory = this.staffCategoryMap.get(item.value);
                addStaffCategory.forEach(element => {
                    temp.push(element);
                });
                this.staffCategory.dropdownList = temp;
            }
        }
        this.updateUsers();
    }
    getAllStaffCategories(items) {
        items.forEach(element => {
            this.getstaffCategories(element);
        });
    }
    removeAllStaffCategories(items) {
        this.roleCategory.selectedItems = [];
        this.staffCategory.dropdownList = [];
        this.staffCategory.selectedItems = [];
        this.updateUsers();
    }
    removeStaffCategories(item) {
        if (this.roleTypeArr.selectedItems[0].name.toLowerCase() == "staff") {
            let removeStaffCategory = this.staffCategoryMap.get(item.value);
            removeStaffCategory.forEach(element => {
                this.staffCategory.dropdownList = this.staffCategory.dropdownList.filter(function (obj) {
                    return obj.value !== element.value;
                });
            });
        }
        this.updateUsers();
    }
    removeSubStaffCategories(item) {
        let removeSubStaffCategory = this.staffSubCategoryMap.get(item.value);
        removeSubStaffCategory.forEach(element => {
            this.staffSubCategory.dropdownList = this.staffSubCategory.dropdownList.filter(function (obj) {
                return obj.value !== element.value;
            });
        });
        this.updateUsers();
    }
    getStaffSubCategories(item) {
        if (this.staffSubCategoryMap.get(item.value) == undefined) {
            let params = {
                'categoryId': item.value,
                'apartmentId': this.apartmentID
            };
            this.staffService.getSubStaffCategoryByCategory(params).subscribe((res) => {
                let temp = [...this.staffSubCategory.dropdownList];
                res.forEach(element => {
                    element.category = item.name;
                    temp.push(element);
                });
                this.staffSubCategoryMap.set(item.value, res);
                this.staffSubCategory.dropdownList = temp;
                this.updateUsers();
            });
        }
        else {
            let addSubStaffCategory = this.staffSubCategoryMap.get(item.value);
            let temp = [...this.staffSubCategory.dropdownList];
            addSubStaffCategory.forEach(element => {
                temp.push(element);
            });
            this.staffSubCategory.dropdownList = temp;
            this.updateUsers();
        }
    }
    getAllSubStaffCategories(items) {
        items.forEach(element => {
            this.getStaffSubCategories(element);
        });
    }
    removeRole(item) {
        this.roleCategory.dropdownList = [];
        this.condition.dropdownList = [];
        this.condition.selectedItems = [];
        this.removeAllStaffCategories([]);
        this.removeAllSubStaffCategories([]);
    }
    removeAllSubStaffCategories(items) {
        this.staffSubCategory.dropdownList = [];
        this.staffCategory.selectedItems = [];
        this.updateUsers();
    }
    removeGroupSubStaffCategories(items) {
        items.list.forEach(element => {
            this.removeSubStaffCategories(element);
        });
        this.updateUsers();
    }
    getGroupSubStaffCategories(items) {
        items.list.forEach(element => {
            this.getStaffSubCategories(element);
        });
        this.updateUsers();
    }
    getUserIds$() {
        let roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) { return item.value; }).join(",");
        let blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) { return item.apartmentBlockId; }).join(",");
        let conditionIds = Array.prototype.map.call(this.condition.selectedItems, function (item) { return item.value; }).join(",");
        let staffcategoryIds = Array.prototype.map.call(this.staffCategory.selectedItems, function (item) { return item.value; }).join(",");
        let staffSubCategoryIds = Array.prototype.map.call(this.staffSubCategory.selectedItems, function (item) { return item.value; }).join(",");
        let params = {
            'roleIds': roleIds,
            'conditionIds': conditionIds,
            'appartmentbBlockIds': blockIds,
            'apartmentId': this.apartmentID,
            'staffcategoryIds': staffcategoryIds,
            'staffSubCategoryIds': staffSubCategoryIds
        };
        return this.userService.getUsersByFilter(params);
    }
    //Submit Category
    submitCreateBroadcastMessageForm(form) {
        let broadCastGroupCategoryIDs = Array.prototype.map.call(this.broadCastGroupCategory.selectedItems, function (item) { return item.broadCastGroupCategoryId; }).join(",");
        let broadcastModeIds = Array.prototype.map.call(this.broadModeArr.selectedItems, function (item) { return item.value; }).join(",");
        var broadcastMessage = {
            "broadCastMessageId": 0,
            "apartmentId": this.apartmentID,
            "subject": this.message.subject,
            "broadcastMessage1": this.message.ckeditor,
            "broadcastBy": parseInt(this.cookieService.get('userId')),
            "broadcastOn": new Date().toISOString(),
            "broadcastMessageCategoryId": 0,
            "broadcastModeIds": broadcastModeIds,
            "broadCastGroupcategoryId": null,
            "userIds": null,
            "isReadAllowed": false,
            "isLater": true,
            "laterDate": null,
            "isFlashNotice": this.isFlashNotice,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "serialNo": 0,
            "description": "",
            "filterId": null
        };
        // var addBoradcastMessage$;
        if (this.selectedTab == 'interest') {
            broadcastMessage.broadCastGroupcategoryId = parseInt(broadCastGroupCategoryIDs);
            broadcastMessage.broadcastMessageCategoryId = null;
            // broadcastMessage.userIds= Array.prototype.map.call(this.users,function(item){ return item.userId}).join(",");
            // addBoradcastMessage$=  this.broadcastService.addBroadCastMessage(broadcastMessage);
        }
        if (this.selectedTab == 'role') {
            broadcastMessage.broadcastMessageCategoryId = this.broadCastCategory.selectedItems[0].broadCastMessageCategoryId;
            broadcastMessage.broadCastGroupcategoryId = null;
            // var userId$=this.getUserIds$();
            //  addBoradcastMessage$=userId$.pipe(
            //     concatMap((userIds:any) =>{
            //       if(userIds.length==0)
            //       {
            //         this.modalService.showErrorModal("No such Users exists to broadcast message.");
            //         return never();
            //       }
            //     broadcastMessage.userIds=userIds.join(',');
            //      return  this.broadcastService.addBroadCastMessage(broadcastMessage);
            //     } )
            //   )
        }
        broadcastMessage.userIds = Array.prototype.map.call(this.users, function (item) { return item.userId; }).join(",");
        let broadCastParams = {
            sourceBroadCastMessage_model: broadcastMessage
        };
        this.broadcastService.addBroadCastMessage(broadCastParams).subscribe((res) => {
            if (res.message) {
                this.sharedService.setAlertMessage("Broadcast Message sent successfully");
                this.ClearFormData();
            }
        });
        // this.updateUsers();
    }
    ClearFormData() {
        this.message = {};
        this.roleTypeArr.selectedItems = [];
        this.broadCastCategory.selectedItems = [];
        this.apartmentBlock.selectedItems = [];
        this.broadModeArr.selectedItems = [];
        this.broadCastGroupCategory.selectedItems = [];
        this.removeRole([]);
        if (this.selectedTab == 'role') {
            this.users = [...this.allUsers];
        }
        if (this.selectedTab == 'interest') {
            this.users = [];
        }
    }
};
BroadcastSendmessageComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_7__["StaffService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
BroadcastSendmessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast-sendmessage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./broadcast-sendmessage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./broadcast-sendmessage.component.scss */ "./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_7__["StaffService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], BroadcastSendmessageComponent);



/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3Qtc2V0dXAvYnJvYWRjYXN0LXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BroadcastSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastSetupComponent", function() { return BroadcastSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Broadcast */ "./src/app/api/controllers/Broadcast.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let BroadcastSetupComponent = class BroadcastSetupComponent {
    constructor(injector, dialog, broadcastService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.bcData = "";
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.isEdit = false;
        this.errorMessage = "";
        this.isError = false;
        this.string = "";
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    onContentChanged(event) {
    }
    ngOnInit() {
        this.loginUserId = parseInt(this.cookieService.get('userId'));
        this.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        this.category = {};
        this.getAllCategory();
        // delete category
        this.sharedService.unitlistdeleteindexcast.subscribe(index => {
            if (index != null) {
                var params = {
                    broadcastId: this.allBroadcastCategory[index].broadCastMessageCategoryId,
                    deleteBy: this.loginUserId
                };
                this.isDataLoaded = false;
                this.broadcastService.deleteBroadCastCategory(params).subscribe((res) => {
                    this.allBroadcastCategory.splice(index, 1);
                    this.totalItems = this.allBroadcastCategory.length;
                    this.isDataLoaded = true;
                    this.sharedService.setUnitListDeleteIndex(null);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    //Update Data
    updateData(data) {
        this.category = data;
        this.isEdit = true;
    }
    //Get Category Type
    getAllCategory() {
        let params = {
            apartmentId: this.apartmentId
        };
        this.broadcastService.getBroadCastMessageCategories(params).subscribe((res) => {
            var allBroadcastCategory = res;
            //filter active true items
            this.allBroadcastCategory = allBroadcastCategory.filter(data => {
                return data.isActive;
            });
            this.isDataLoaded = true;
            this.totalItems = this.allBroadcastCategory.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
    //Cancel
    Cancel() {
        this.category = {};
        this.isEdit = false;
    }
    //Insert/Update Category
    UpsertBroadcastMessageCategory(form) {
        let broadcastCategory = {
            "broadCastMessageCategoryId": 0,
            "apartmentId": this.apartmentId,
            "broadCastMessageCategory1": this.category.broadCastMessageCategory1,
            "template": this.category.template,
            "comments": "string",
            "isActive": true,
            "insertedBy": this.loginUserId,
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "serialNo": 0
        };
        if (this.isEdit) {
            broadcastCategory.broadCastMessageCategoryId = this.category.broadCastMessageCategoryId;
            broadcastCategory.insertedBy = this.category.insertedBy;
            broadcastCategory.insertedOn = this.category.insertedOn;
            broadcastCategory.updatedBy = this.loginUserId;
            broadcastCategory.updatedOn = new Date().toISOString();
            broadcastCategory.serialNo = this.category.serialNo;
        }
        let broadCastMessageCategory = {
            broadCastMessageCategory: broadcastCategory
        };
        this.broadcastService.upsertBroadCastMessageCategory(broadCastMessageCategory).subscribe((res) => {
            if (res.message) {
                if (this.isEdit) {
                    this.sharedService.setAlertMessage("Broadcast category updated successfully");
                }
                else {
                    this.sharedService.setAlertMessage("Broadcast category added successfully");
                }
                this.getAllCategory();
                this.category = {};
                this.isEdit = false;
            }
        });
    }
};
BroadcastSetupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
BroadcastSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./broadcast-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./broadcast-setup.component.scss */ "./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], BroadcastSetupComponent);



/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".broadcastgroup-setup-wrapper #typeCollapseOne li {\n  background-color: white !important;\n}\n.broadcastgroup-setup-wrapper angular2-multiselect {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0Z3JvdXAtc2V0dXAvYnJvYWRjYXN0Z3JvdXAtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3Rncm91cC1zZXR1cC9icm9hZGNhc3Rncm91cC1zZXR1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRztFQUNLLGtDQUFBO0FDSFI7QURLSTtFRXNERiwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VGeERRLDRCQUFBO0FDQ1YiLCJmaWxlIjoic3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0Z3JvdXAtc2V0dXAvYnJvYWRjYXN0Z3JvdXAtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc2Nzcy9mb250cy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuLmJyb2FkY2FzdGdyb3VwLXNldHVwLXdyYXBwZXJ7XG5cbiAgICN0eXBlQ29sbGFwc2VPbmUgbGl7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGUhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIGFuZ3VsYXIyLW11bHRpc2VsZWN0e1xuICAgICAgICBAaW5jbHVkZSAgZGVzcC1yZWd1bGFyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgICB9XG59XG5cbiIsIi5icm9hZGNhc3Rncm91cC1zZXR1cC13cmFwcGVyICN0eXBlQ29sbGFwc2VPbmUgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmJyb2FkY2FzdGdyb3VwLXNldHVwLXdyYXBwZXIgYW5ndWxhcjItbXVsdGlzZWxlY3Qge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BroadcastgroupSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastgroupSetupComponent", function() { return BroadcastgroupSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Broadcast */ "./src/app/api/controllers/Broadcast.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");









let BroadcastgroupSetupComponent = class BroadcastgroupSetupComponent {
    constructor(injector, dialog, broadcastService, sharedService, cookieService, userService, apartmentService) {
        this.injector = injector;
        this.dialog = dialog;
        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.isLiving = null;
        this.isPrimaryContact = null;
        this.isDataLoaded = false;
        this.bcData = "";
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.privilageCategory = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.isEdit = false;
        this.errorMessage = "";
        this.isError = false;
        this.dropdownSettings = {};
        this.string = "";
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    onContentChanged(event) {
    }
    ngOnInit() {
        this.groupCategory = {};
        this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
        this.userId = parseInt(this.cookieService.get('userId'));
        //this.getParentCategoryList();
        this.getAllGroupCategory();
        this.getAllApartmentBlockList();
        this.getAllRoleTypesList();
        this.dropdownSettings = {
            singleSelection: false,
            labelKey: 'name',
            primaryKey: 'value',
            enableFilterSelectAll: false,
            autoPosition: false
        };
        ///delete category
        this.sharedService.unitlistdeleteindexcast.subscribe(index => {
            if (index != null) {
                var params = {
                    broadCastGroupCategoryId: this.allBroadcastGroupCategory[index].broadCastGroupCategoryId,
                    deleteBy: this.userId
                };
                this.isDataLoaded = false;
                this.broadcastService.deleteBroadCastGroupCategory(params).subscribe((res) => {
                    this.allBroadcastGroupCategory.splice(index, 1);
                    this.totalItems = this.allBroadcastGroupCategory.length;
                    this.isDataLoaded = true;
                    this.sharedService.setUnitListDeleteIndex(null);
                }, error => {
                    console.log(error);
                });
            }
        });
        this.privilageCategory.dropdownList = [{ "name": "All", "value": 1 },
            { "name": "Admin", "value": 2 }];
    }
    getAllRoleTypesList() {
        this.userService.getAllRoleTypes().subscribe((res) => {
            this.allRoleTypesList = res;
        });
    }
    getAllApartmentBlockList() {
        let params = {
            apartmentId: this.apartmentID
        };
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.allApartmentBlockList = res;
        });
    }
    getAppartmentRole() {
        var params = {
            RoleTypeId: this.roleType,
            ApartmentId: this.apartmentID
        };
        this.userService.getApartmentRolesByRoleTypeId(params).subscribe((res) => {
            this.allApartmentRolesList = res;
        });
    }
    getParent(parentId) {
    }
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    //Update Data
    updateData(data) {
        let privilegeArr = data.privilege.split(',');
        this.privilageCategory.selectedItems = this.privilageCategory.dropdownList.filter(function (obj) {
            return privilegeArr.includes(obj.name);
        });
        this.groupCategory = data;
        this.isEdit = true;
    }
    //Get Category Type
    getAllGroupCategory() {
        let params = {
            apartmentId: this.apartmentID
        };
        this.broadcastService.getAllBroadCastGroupCategory(params).subscribe((res) => {
            var allBroadcastGroupCategory = res;
            //filter active true items
            this.allBroadcastGroupCategory = allBroadcastGroupCategory.filter(data => {
                return data.isActive;
            });
            this.isDataLoaded = true;
            this.totalItems = this.allBroadcastGroupCategory.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
    //Submit Category
    submitcreateBroadcastGroupCategoryForm(form) {
        let privileges = Array.prototype.map.call(this.privilageCategory.selectedItems, function (item) { return item.name; }).join(",");
        let broadcastGroupCategory = {
            "broadCastGroupCategoryId": 0,
            "apartmentId": this.apartmentID,
            "groupName": this.groupCategory.groupName,
            "description": this.groupCategory.description,
            "privilege": privileges,
            "isActive": true,
            "insertedBy": this.userId,
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "serialNo": 0
        };
        if (this.isEdit) {
            broadcastGroupCategory.broadCastGroupCategoryId = this.groupCategory.broadCastGroupCategoryId;
            broadcastGroupCategory.insertedBy = this.groupCategory.insertedBy;
            broadcastGroupCategory.insertedOn = this.groupCategory.insertedOn;
            broadcastGroupCategory.updatedBy = this.userId;
            broadcastGroupCategory.updatedOn = new Date().toISOString();
            broadcastGroupCategory.serialNo = this.groupCategory.serialNo;
        }
        let params = {
            broadcast: broadcastGroupCategory
        };
        this.broadcastService.addBroadCastGroupCategory(params).subscribe((res) => {
            if (res.message) {
                if (this.isEdit) {
                    this.sharedService.setAlertMessage("Broadcast category updated successfully");
                }
                else {
                    this.sharedService.setAlertMessage("Broadcast Group category added successfully");
                }
                this.getAllGroupCategory();
                this.groupCategory = {};
                this.privilageCategory.selectedItems = [];
            }
        });
    }
    //Cancel
    Cancel() {
        this.groupCategory = {};
        this.isEdit = false;
    }
};
BroadcastgroupSetupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] }
];
BroadcastgroupSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcastgroup-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./broadcastgroup-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./broadcastgroup-setup.component.scss */ "./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]])
], BroadcastgroupSetupComponent);



/***/ })

}]);
//# sourceMappingURL=broadcast-broadcast-module-es2015.js.map