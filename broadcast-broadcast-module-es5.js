function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["broadcast-broadcast-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsBroadcastComponentsBroadcastAnnouncementsBroadcastAnnouncementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"broadcast-announcements-wrapper col-sm-10 col-offset-2 m-auto\">\n    <mat-tab-group dynamicHeight>\n                   <mat-tab label=\"BroadCast Group Based\">\n<div class=\"row\">\n  <div class=\"col-3\"> \n      <angular2-multiselect [data]=\"filterGroupCategory.dropdownList\" name=\"groupTypeDropDown\"\n      [(ngModel)]=\"filterGroupCategory.selectedItems\" \n      [settings]=\"groupCategorySetting\"  \n      (onSelect)=\"filterMessages($event,'broadcastGroup')\">\n  </angular2-multiselect>\n  </div>\n    \n</div>\n                      \n    <ngb-carousel  class=\"mt-5\" >\n        <ng-template ngbSlide *ngFor=\"let broadCastMessage of broadCastBased\">\n            \n          <div class=\"picsum-img-wrapper\">\n              \n            <img [src]=\"imagePath\" alt=\"Random first slide\">\n           \n          </div>\n          <div class=\"carousel-caption1\">\n            <h5> {{broadCastMessage.CategoryName}}</h5>\n          </div>\n          <div class=\"carousel-caption2\"> \n            <h5><b> {{broadCastMessage.subject}}</b> </h5>\n          </div>\n          <div class=\"carousel-caption3\">\n            <h5>Posted By: {{broadCastMessage.UserName}}</h5>\n            </div>\n        </ng-template>\n        <!-- <ng-template ngbSlide>\n          <div class=\"picsum-img-wrapper\">\n            <img [src]=\"imagePath\" alt=\"Random second slide\">\n          </div>\n          <div class=\"carousel-caption\">\n            <h3>Second slide label</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <div class=\"picsum-img-wrapper\">\n            <img [src]=\"imagePath\" alt=\"Random third slide\">\n          </div>\n          <div class=\"carousel-caption\">\n            <h3>Third slide label</h3>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template> -->\n      </ngb-carousel>\n </mat-tab>\n                            <mat-tab label=\"Interest Group Based \"> \n                                <div class=\"row\">\n                                    <div class=\"col-3 offset-3\"> \n                                   <angular2-multiselect  [data]=\"interestGroupCategory.dropdownList\" name=\"interestGroupTypeDropDown\"\n                                        [(ngModel)]=\"interestGroupCategory.selectedItems\" \n                                        [settings]=\"interestGroupCategorySetting\"\n                                        (onSelect)=\"filterMessages($event,'interestGroup')\"\n                                        >\n                                    </angular2-multiselect>\n                                    </div>\n                                    </div>\n                                \n                              <ngb-carousel class=\"mt-5\" >\n                                \n                                <ng-template ngbSlide *ngFor=\"let broadCastMessage of interestGroupBased\">\n                                  <div class=\"picsum-img-wrapper\">\n                                    <img [src]=\"imagePath\" alt=\"Random first slide\">\n                                   \n                                  </div>\n                                  <div class=\"carousel-caption1\">\n                                    <h5> {{broadCastMessage.CategoryName}}</h5>\n                                  </div>\n                                  <div class=\"carousel-caption2\"> \n                                    <h5><b> {{broadCastMessage.subject}}</b> </h5>\n                                  </div>\n                                  <div class=\"carousel-caption3\">\n                                    <h5>Posted By: {{broadCastMessage.UserName}}</h5>\n                                    </div>\n                                </ng-template>\n                                \n                              </ngb-carousel> </mat-tab>\n                            \n                           </mat-tab-group> \n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsBroadcastComponentsBroadcastGroupAssignmentBroadcastGroupAssignmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"broadcastgroupAssignment-setup-wrapper\">\n        <div  class=\"card clear form-group\" id=\"mapaccordion\" >\n    <div class=\"card-body\">\n        <ul class=\"list-group  clear\">\n            <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#typeCollapseMap\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\">\n                <h5>Assign Users to Interest Group</h5> \n                <div class=\"remainder\">\n                    <span>All fields with * are required.</span>\n                </div> \n            </li>\n            <div id=\"typeCollapseMap\"  aria-labelledby=\"headingOne\" data-parent=\"#mapaccordion\">\n                <div class=\"details\">\n                    <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n                    <form #mapGroupUserForm = \"ngForm\" name=\"mapGroupUserForm\" (ngSubmit)=\"submitMapGroupUserForm(mapGroupUserForm)\"  novalidate>\n                    <div class=\"row mt-4\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <div class=\"input-box\">\n                                        <label>Interest Group Category<span class=\"mandatory\">*</span></label>\n                                        <angular2-multiselect [data]=\"broadCastGroupCategory.dropdownList\" name=\"groupTypeDropDown\"\n                                        [(ngModel)]=\"broadCastGroupCategory.selectedItems\"\n                                         (onSelect)=\"getUsersBycategory($event)\" \n                                         (onDeSelect)=\"removeCategory()\"\n                                          (onDeSelectAll)=\"removeCategory()\"   \n                                          [settings]=\"groupCategorySetting\"  required>\n                                        </angular2-multiselect>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                            <!-- <div  class=\"col-sm-4\"> \n                                <div class=\"select-box\">                             \n                                    <label>Role Type</label>\n                                    <angular2-multiselect [data]=\"roleTypeArr.dropdownList\" name=\"roleTypeDropDown\"\n                                       [(ngModel)]=\"roleTypeArr.selectedItems\"\n                                       [settings]=\"roleTypedropdownSettings\" (onSelect)=\"getAppartmentRole($event)\"\n                                        (onDeSelect)=\"removeRole($event)\" (onDeSelectAll)=\"removeRole($event)\"\n                                    ></angular2-multiselect>\n                                 </div>\n                              </div> -->\n                                <div  class=\"col-sm-12\">\n                                    <div class=\"select-box\">\n                                        <label> Role</label>\n                                        <angular2-multiselect\n                                         [data]=\"roleCategory.dropdownList\"     name=\"roleDropDown\"\n                                            [(ngModel)]=\"roleCategory.selectedItems\"\n                                            [settings]=\"roleDropdownSettings\" \n                                            (onSelect)='getUsers()'\n                                             (onDeSelect)='getUsers()'\n                                             (onSelectAll)=\"getUsers()\" \n                                              (onDeSelectAll)=\"removeAllRole()\">    \n                                        </angular2-multiselect>\n                                    </div>  \n                                </div>                        \n                            </div>\n                            <div class=\"row\">\n                                <div  class=\"col-sm-12\">\n                                    <div class=\"select-box\">\n                                        <label>Appartment Block</label>\n                                        <angular2-multiselect [data]=\"apartmentBlock.dropdownList\" name=\"blockdropdown\"\n                                            [(ngModel)]=\"apartmentBlock.selectedItems\"\n                                             [settings]=\"blockdropdownSettings\"\n                                            (onSelect)='getUsers()' \n                                            (onDeSelect)='getUsers()'\n                                             (onSelectAll)=\"getUsers()\"  \n                                             (onDeSelectAll)=\"removeAllBlock()\">\n                                        </angular2-multiselect>\n                                    </div>  \n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div  class=\"col-sm-12\"> \n                                    <div class=\"select-box\">                             \n                                        <label>Users<span class=\"mandatory\">*</span></label>\n                                        <angular2-multiselect [data]=\"users.dropdownList\" name=\"userTypeDropDown\"\n                                            [(ngModel)]=\"users.selectedItems\"\n                                             [settings]=\"usersDropdownSettings\"  required\n                                        ></angular2-multiselect>\n                                    </div>\n                                 </div>                     \n                             \n                            </div>\n                            <!-- <div class=\"row\">\n                                <div  class=\"col-sm-12\"> \n                                    <div class=\"select-box\"> \n                                       <label>Users *</label>\n          <input type=\"text\" placeholder=\"serach user\" matInput   (keyup)=\"search($event)\" />\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredUsers\" [value]=\"option\">\n        {{option.userName}}\n      </mat-option>\n    </mat-autocomplete>\n   </div>\n                                 </div>                     \n                             \n                            </div> -->\n\n\n                        </div>\n            <div class=\"col-sm-2\">\n                <div class=\"row\">\n                    <div  class=\"col-sm-8\">\n                        <div class=\"select-box\" style=\"transform: translateY(120px);\">                         \n                            <button  type=\"button\" class=\"btn\" [disabled]=\"mapGroupUserForm.invalid\" > \n                                <label class=\"assignBtn\"> Assign</label>\n                                <i class=\"fa fa-long-arrow-right\" style=\"font-size:60px;\" (click)='assignUser()' aria-hidden=\"true\"></i>\n                            </button>\n                        </div>  \n                    </div> \n                </div>\n                \n            </div>\n            <div class=\"col-sm-4\">\n           <div class=\"row mt-3\">\n             <div class=\"col-sm-12\" style=\"border: 1px solid #cccccc;height: 320px;\">\n                 <li *ngFor=\"let user of assignUsers\">\n                        {{ user.userFullName }}\n                      </li>\n                \n             </div>\n           </div>\n\n             </div>\n           </div>\n                \n             \n          \n            \n        \n          \n            \n            <!-- <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <div class=\"list-inline float-right mt-4\">\n                   \n                    <button type=\"button\" class=\"btn blue mr-4\"  (click)=\"Cancel()\">Cancel</button>\n                    <button type=\"submit\" class=\"btn blue mr-2\" [disabled]=\"mapGroupUserForm.invalid\">Submit</button>\n                   \n                </div>\n              </div>\n            </div> -->\n                   </form>\n\n        </div>\n        </div>\t\n        </ul>\n    </div>\n        </div>              \n\n        <!-- <div class=\"card card-table\">\n            <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Interest Group Users <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bcData\" >\n                </li>\n            \n            </ul>\n            </div>\n\n            <app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box>\n\n            <div class=\"card-body p-0\">\n\n            <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n                <thead>\n                    <tr>\n                    <th width=\"15%\" (click)=\"sortUnitData('broadCastGroupCategoryID')\">Category ID<span [ngClass]=\"getFieldOrderBy('broadCastGroupCategoryID')\"></span></th>\n                    <th width=\"30%\" (click)=\"sortUnitData('UserIDs')\">Broadcast Category <span [ngClass]=\"getFieldOrderBy('UserIDs')\"></span></th>\n                    <th width=\"45%\" (click)=\"sortUnitData('RoleTypeId')\">Description <span [ngClass]=\"getFieldOrderBy('RoleTypeId')\"></span></th>\n                    <th width=\"10%\">Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let category of interestGroupUsers| orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: bcData ; let i = index\">\n                    <td class=\"name\">{{category.broadCastGroupCategoryID}}</td>\n                    <td class=\"grey\">{{category.UserIDs}}</td>\n                    <td class=\"grey\">{{category.RoleTypeId}}</td>\n                    <td class=\"grey\">\n                \n                        <a class=\"\" (click)=\"updateData(category)\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>&nbsp;\n                        <a class=\"\" (click)=\"showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                    </td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <app-pagination \n                [totalItems]=\"totalItems\"  \n                [ItemStartIndex]=\"ItemStartIndex\"\n                [ItemEndIndex] = \"ItemEndIndex\"\n                [itemLimit] = \"itemLimit\"\n                (outputParams) = \"getIndexParams($event)\">\t\n            </app-pagination>\n        </div>\n        </div> -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsBroadcastComponentsBroadcastHistoryBroadcastHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"broadcast-view-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card card-table\">\n\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Broadcast History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bcData\" >\n    \t\t\t</li>\n    \t\t\t<!-- <li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li> -->\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box>\n\n  \t\t<div class=\"card-body p-0\">\n\n        <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n            <thead>\n                <tr>\n                <th scope=\"col\" (click)=\"sortUnitData('broadcastOn')\">BroadCast ON <span [ngClass]=\"getFieldOrderBy('broadcastOn')\"></span></th>\n                <th scope=\"col\" (click)=\"sortUnitData('broadcastMessageCategoryId')\">Broadcast Category <span [ngClass]=\"getFieldOrderBy('broadcastMessageCategoryId')\"></span></th>\n                <th scope=\"col\" (click)=\"sortUnitData('subject')\">Subject <span [ngClass]=\"getFieldOrderBy('subject')\"></span></th>\n                <th scope=\"col\" (click)=\"sortUnitData('broadcastModeIds')\">Broadcast Type <span [ngClass]=\"getFieldOrderBy('broadcastModeIds')\"></span></th>\n                <th scope=\"col\" (click)=\"sortUnitData('broadcastBy')\">Posted By <span [ngClass]=\"getFieldOrderBy('broadcastBy')\"></span></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let broadcast of broadCastMessages | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: bcData ; let i = index\">\n                <td class=\"name\">{{broadcast.broadcastOn | date:'dd-MM-yyyy HH:MM'}}</td>\n                <td class=\"grey\">{{broadcast.CategoryName}}</td>\n                <td class=\"grey\">{{broadcast.subject}}</td>\n                <td class=\"grey\">{{broadcast.BroadCastMode}}</td>\n                <td class=\"grey\">{{broadcast.UserName}}</td>\n                </tr>\n            </tbody>\n        </table>\n    \n        <app-pagination \n            [totalItems]=\"totalItems\"  \n            [ItemStartIndex]=\"ItemStartIndex\"\n            [ItemEndIndex] = \"ItemEndIndex\"\n            [itemLimit] = \"itemLimit\"\n            (outputParams) = \"getIndexParams($event)\">\t\n        </app-pagination>\n    </div>\n</div>\n</div>\n\n  \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsBroadcastComponentsBroadcastRemoveuserBroadcastRemoveuserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"broadcast-removeuser-wrapper\">\n    <div class=\"card card-table\">\n     \n    \n        <!-- <app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box> -->\n        <div class=\"row\">\n            <div class=\"col-sm-4 mt-3\">\n                <div class=\"input-box m-4\">\n                    <h5>Interest Group Category</h5>\n                    <angular2-multiselect [data]=\"broadCastGroupCategory.dropdownList\" name=\"groupTypeDropDown\"\n                         [(ngModel)]=\"broadCastGroupCategory.selectedItems\"\n                          (onSelect)=\"getUsersBycategory($event)\"\n                         (onDeSelect)=\"deSelectCategory()\"\n                           (onDeSelectAll)=\"deSelectCategory()\"\n                         [settings]=\"groupCategorySetting\"  required>\n                    </angular2-multiselect>\n                </div>\n            </div>\n        </div>\n          <div class=\"card-body p-0 mt-3\">\n\n    \n        <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n            <thead>\n                <tr>\n                <th width=\"20%\" (click)=\"sortUnitData('groupCategory')\">Interest Group<span [ngClass]=\"getFieldOrderBy('groupCategory')\"></span></th>\n                <th width=\"20%\" (click)=\"sortUnitData('roleId')\">Role<span [ngClass]=\"getFieldOrderBy('roleId')\"></span></th>\n                <th width=\"10%\" (click)=\"sortUnitData('blockId')\">Block <span [ngClass]=\"getFieldOrderBy('blockId')\"></span></th>\n                <th width=\"10%\" (click)=\"sortUnitData('unitId')\">Unit <span [ngClass]=\"getFieldOrderBy('unitId')\"></span></th>\n                <th width=\"30%\" (click)=\"sortUnitData('userId')\">User <span [ngClass]=\"getFieldOrderBy('userId')\"></span></th>\n                <th width=\"10%\">Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let groupUser of allGroupUser | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: bcData ; let i = index\">\n                <td class=\"name\">{{groupUser.groupCategory}}</td>\n                <td class=\"name\">{{groupUser.role}}</td>\n                <td class=\"grey\">{{groupUser.block}}</td>\n                <td class=\"grey\">{{groupUser.unit}}</td>\n                <td class=\"grey\">{{groupUser.user}}</td>\n                <td class=\"grey\">\n                <button type=\"button\" class=\"btn blue mr-4\"\n                  (click)=\"removeMappedUser(groupUser.broadCastGroupCategoryUserId)\">Remove</button>\n                </td>\n                </tr>\n            </tbody>\n        </table>\n    \n        <app-pagination \n            [totalItems]=\"totalItems\"  \n            [ItemStartIndex]=\"ItemStartIndex\"\n            [ItemEndIndex] = \"ItemEndIndex\"\n            [itemLimit] = \"itemLimit\"\n            (outputParams) = \"getIndexParams($event)\">\t\n        </app-pagination>\n    </div>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsBroadcastComponentsBroadcastSendmessageBroadcastSendmessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"broadcast-message-wrapper\">\n\t\n    <div class=\"card clear form-group\">\n        <div class=\"card-header\">\n            <div class=\"\">\n                <h5>\n                    <span>Broadcast Message</span>\n                </h5>\n            </div>\n            \n            <div class=\"remainder\">\n                <span>All fields with * are required.</span>\n            </div>\n        </div>\n        \n        <div class=\"card-body\">\n    \n    \n        <ng-container>\n        <form #createBroadcastMessageForm = \"ngForm\" name=\"createBroadcastMessageForm\"  novalidate>\n        \n        <div class=\"row\">\n            <div class=\"col-sm-10 offset-sm-1\">\n                \n\n                        <ul class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\n                            \n                            <li ><a class=\"nav-item nav-link active\" id=\"nav-menu1-tab\" data-toggle=\"tab\" role=\"tab\" href=\"#menu1\" (click)=\"currentTab('role')\">Role Based</a></li>\n                            <li><a class=\"nav-item nav-link\" id=\"nav-menu2-tab\" data-toggle=\"tab\" role=\"tab\" href=\"#menu2\" (click)=\"currentTab('interest')\">Interest Group based</a></li>\n                            \n                          </ul>\n                          <div class=\"tab-content\" id=\"nav-tabContent\">\n\n                            <div id=\"menu1\" role=\"tabpanel\" ria-labelledby=\"nav-menu1-tab\" class=\"tab-pane show active\">\n\n                                <div class=\"row\"> \n                                    <div  class=\"col-sm-4\">\n                                     <div class=\"select-box\">\n                                         <label>Role Type</label>\n                                         <angular2-multiselect [data]=\"roleTypeArr.dropdownList\" name=\"roleTypeDropDown\"\n                                         [(ngModel)]=\"roleTypeArr.selectedItems\"\n                                         [settings]=\"roleTypedropdownSettings\" (onSelect)=\"getAppartmentRole($event)\"\n                                         (onDeSelect)=\"removeRole($event)\" (onDeSelectAll)=\"removeRole($event)\"></angular2-multiselect>\n                                     </div>  \n                                     </div>\n                                     <div  class=\"col-sm-4\">\n                                        <div class=\"select-box\">\n                                            <label>Apartment Block</label>\n                                            <angular2-multiselect [data]=\"apartmentBlock.dropdownList\" name=\"blockdropdown\"\n                                            [(ngModel)]=\"apartmentBlock.selectedItems\"\n                                            [settings]=\"blockdropdownSettings\"\n                                            (onSelect)=\"updateUsers()\"\n                                            (onDeSelect)=\"updateUsers()\"\n                                            (onSelectAll)=\"updateUsers()\"\n                                            (onDeSelectAll)=\"updateUsers()\"\n                                            ></angular2-multiselect>\n                                        </div>  \n                                            </div>\n                                            <div  class=\"col-sm-4\">\n                                                <div class=\"select-box\">\n                                                    <label>Conditions</label>\n                                                    <angular2-multiselect [data]=\"condition.dropdownList\" name=\"conditiondropdown\"\n                                                    [(ngModel)]=\"condition.selectedItems\"\n                                                    [settings]=\"roleDropdownSettings\" \n                                                    (onSelect)=\"updateUsers()\"\n                                                    (onDeSelect)=\"updateUsers()\"\n                                                    (onSelectAll)=\"updateUsers()\"\n                                                    (onDeSelectAll)=\"updateUsers()\"\n                                                    ></angular2-multiselect>\n                                                </div>  \n                                             </div>\n                                        </div>\n                                    <div class=\"row\"> \n                                            <div  class=\"col-sm-4\">\n                                             <div class=\"select-box\">\n                                                 <label>Role</label>\n                                                 <angular2-multiselect [data]=\"roleCategory.dropdownList\" name=\"roleDropDown\"\n                                                 [(ngModel)]=\"roleCategory.selectedItems\"\n                                                 [settings]=\"roleDropdownSettings\"\n                                                 (onSelect)=\"getstaffCategories($event)\"  (onDeSelect)=\"removeStaffCategories($event)\"\n                                                 (onSelectAll)=\"getAllStaffCategories($event)\"  (onDeSelectAll)=\"removeAllStaffCategories($event)\"\n                                                 >\n                                                  \n                                                </angular2-multiselect>\n                                             </div>  \n                                                 </div>\n                                                 <div  class=\"col-sm-4\" *ngIf=\"this.roleCategory.selectedItems.length>0 && isStaff\">\n                                                    <div class=\"select-box\">\n                                                        <label>Staff Category</label>\n                                                        <angular2-multiselect [data]=\"staffCategory.dropdownList\" name=\"staffDropDown\"\n                                                        [(ngModel)]=\"staffCategory.selectedItems\"\n                                                        [settings]=\"dropdownSettings\"\n                                                        (onSelect)=\"getStaffSubCategories($event)\" (onDeSelect)=\"removeSubStaffCategories($event)\"\n                                                        (onSelectAll)=\"getAllSubStaffCategories($event)\"  (onDeSelectAll)=\"removeAllSubStaffCategories($event)\" \n                                                         (onGroupDeSelect)=\"getGroupSubStaffCategories($event)\"       (onGroupSelect)=\"removeGroupSubStaffCategories($event)\"                                >\n                                                    </angular2-multiselect>\n                                                    </div>  \n                                                        </div>\n                                                        <div  class=\"col-sm-4\" *ngIf=\"this.staffCategory.selectedItems.length>0\">\n                                                            <div class=\"select-box\">\n                                                                <label>Staff SubCategory</label>\n                                                                <angular2-multiselect [data]=\"staffSubCategory.dropdownList\" name=\"subStaffDropDown\"\n                                                                [(ngModel)]=\"staffSubCategory.selectedItems\"\n                                                                [settings]=\"dropdownSettings\"\n                                                                (onSelect)=\"updateUsers()\"        (onDeSelect)=\"updateUsers()\"\n                                                                (onSelectAll)=\"updateUsers()\"     (onDeSelectAll)=\"updateUsers()\" \n                                                                (onGroupDeSelect)=\"updateUsers()\" (onGroupSelect)=\"updateUsers()\"   \n                                                                ></angular2-multiselect>\n                                                            </div>  \n                                                                </div>\n                                                </div>\n                                          \n                                </div>  \n                        <div id=\"menu2\" role=\"tabpanel\" ria-labelledby=\"nav-menu2-tab\" class=\"tab-pane \">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"input-box\" *ngIf=\"selectedTab=='interest'\">\n                                        <label>Interest Group Category<span class=\"mandatory\">*</span></label>\n                                        <angular2-multiselect [data]=\"broadCastGroupCategory.dropdownList\" name=\"groupTypeDropDown\"\n                                        [(ngModel)]=\"broadCastGroupCategory.selectedItems\"\n                                        [settings]=\"groupCategorySetting\"\n                                          (onSelect)=\"selectInterestGroup($event)\" \n                                        (onDeSelect)=\"removeInterestGroup($event)\" \n                                        (onDeSelectAll)=\"removeInterestGroup($event)\"\n                                        required></angular2-multiselect>\n                                    </div>\n                                    </div>\n                                </div>\n                          </div>\n\n                          \n\n                          </div>\n\n                        \n                       \n                                <div class=\"row recipentsDiv\" > \n                                    <div class=\"col-sm-12\">\n                                       <label>Recipients</label>\n                                  <div  class=\"col-sm-12 box\" *ngIf=\"IsBroadcast\" >\n                                     <label *ngFor=\"let user of users\" >\n                                         {{user.firstName+\" \"+user.middleName+\" \"+user.lastName+\",\"}}\n                                     </label>\n                                        </div> \n                                   <div  class=\"col-sm-12 box\" *ngIf=\"!IsBroadcast\" >\n                                 <label *ngFor=\"let user of AssignInterestUsers\" >\n                                              {{user.userFullName +\",\"}}\n                                          </label>\n                                             </div> \n\n                                        \n                                    </div> \n                                </div>\n                 \n                <div class=\"row\"> \n                    <div  class=\"col-sm-4\" *ngIf=\"IsBroadcast\">\n                     <div class=\"select-box\">\n                         <label>Broadcast Category<span class=\"mandatory\">*</span></label>\n                         <angular2-multiselect  [data]=\"broadCastCategory.dropdownList\" name=\"broadcastDropDown\"\n                         [(ngModel)]=\"broadCastCategory.selectedItems\"\n                         [settings]=\"broadCastdropdownSettings\" (onSelect)=\"categoryChange($event)\" required></angular2-multiselect>\n                     </div>  \n                   </div>\n                   <div  class=\"col-sm-4\">\n                    <div class=\"select-box\">\n                        <label>Broadcast Mode<span class=\"mandatory\">*</span></label>\n                        <angular2-multiselect  [data]=\"broadModeArr.dropdownList\" name=\"BroadCastModeDropDown\"\n                        [(ngModel)]=\"broadModeArr.selectedItems\"\n                        [settings]=\"roleDropdownSettings\"  required></angular2-multiselect>\n                    </div> \n                </div>\n                \n                   <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Subject<span class=\"mandatory\">*</span></label>\n                            <input type=\"text\" class=\"form-control form-group\" placeholder=\"Enter\" name=\"subject\" [(ngModel)]=\"message.subject\" required>\n                            <quill-editor\n                                class=\"quill-editor\"\n                                name=\"ckeditor\"\n                                [placeholder]=\"editorPlacehorder\"\n                                [(ngModel)]=\"message.ckeditor\"\n                                (onContentChanged)=\"onContentChanged($event)\" required>\n                            </quill-editor>\n                        </div>\n                    </div>\n            \n                    <div class=\"col-sm-12\">\n                      <ul class=\"list-inline float-right mt-4\">\n                        <li class=\"list-inline-item\">\n                          <button class=\"btn blue mr-2\" (click)=\"ClearFormData()\">Cancel</button>\n                          <button class=\"btn blue mr-2\" (click)=\"submitCreateBroadcastMessageForm(createBroadcastMessageForm)\" [disabled]=\"createBroadcastMessageForm.invalid\">Submit</button>\n                        </li>\n                      </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n      </form>\n    </ng-container>\n  </div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsBroadcastComponentsBroadcastSetupBroadcastSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"broadcast-setup-wrapper\">\n    \n    <div class=\"card clear form-group\" id=\"accordion\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\">\n                {{(!isEdit)?'Add':'Update'}} Broadcast category\n                \n                    <span class=\"remainder\">(All fields with * are required.)</span>\n                \n            </li>\n            \n\t\t\t<div id=\"typeCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t<div class=\"details\">\n\n            <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n            <form #createBroadcastCategoryForm = \"ngForm\" name=\"createBroadcastCategoryForm\" (ngSubmit)=\"UpsertBroadcastMessageCategory(createBroadcastCategoryForm)\"  novalidate>\n                <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"input-box\">\n                        <label>Broadcast Category<span class=\"mandatory\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter category name\" name=\"broadCastMessageCategory1\" [(ngModel)]=\"category.broadCastMessageCategory1\" required>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"input-box\">\n                        <label>Description Template</label>\n                        <quill-editor\n                            class=\"quill-editor\"\n                            name=\"ckeditor\"\n                            [placeholder]=\"editorPlacehorder\"\n                            [(ngModel)]=\"category.template\" required\n                            >\n                        </quill-editor>\n                        <!-- <textarea class=\"form-control\" placeholder=\"Enter\" name=\"template\" [(ngModel)]=\"category.template\" required></textarea> -->\n                    </div>\n                </div>\n                </div>\n        \n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                        <div class=\"list-inline float-right mt-4\">\n                            <button type=\"button\" class=\"btn blue mr-4\" \n                             (click)=\"Cancel()\" [disabled]=\"createBroadcastCategoryForm.invalid\">Cancel</button>\n                        <button class=\"btn blue mr-2\" [disabled]=\"createBroadcastCategoryForm.invalid\" *ngIf=\"!isEdit\">Submit</button>\n                        <button class=\"btn blue mr-2\" [disabled]=\"createBroadcastCategoryForm.invalid\" *ngIf=\"isEdit\">Update</button>\n                    </div>\n                  </div>\n                </div>\n            </form>\n\n\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t</ul>\n\t\t</div>\n    </div>\n    \n\n<div class=\"card card-table\">\n    <div class=\"card-header\">\n    <div class=\"float-left\">\n        <h5>Broadcast Category <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    </div>\n    <ul class=\"list-inline\">\n        <li class=\"list-inline-item search d-none d-md-inline-block\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bcData\" >\n        </li>\n        <!-- <li class=\"list-inline-item\">\n            <a class=\"btn l-blue mt_5\">\n                <i-feather class=\"icon print\" name=\"printer\"></i-feather>\n                <span>Print</span>\n            </a>\n        </li> -->\n    </ul>\n    </div>\n\n    <app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box>\n\n  \t<div class=\"card-body p-0\">\n\n    <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n        <thead>\n            <tr>\n            <th width=\"15%\" (click)=\"sortUnitData('broadCastMessageCategoryId')\">Category ID<span [ngClass]=\"getFieldOrderBy('broadCastMessageCategoryId')\"></span></th>\n            <th width=\"30%\" (click)=\"sortUnitData('broadCastMessageCategory1')\">Broadcast Category <span [ngClass]=\"getFieldOrderBy('broadCastMessageCategory1')\"></span></th>\n            <th width=\"45%\" (click)=\"sortUnitData('template')\">Description <span [ngClass]=\"getFieldOrderBy('template')\"></span></th>\n            <th width=\"10%\">Action</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let category of allBroadcastCategory | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: bcData ; let i = index\">\n            <td class=\"name\">{{category.broadCastMessageCategoryId}}</td>\n            <td class=\"grey\">{{category.broadCastMessageCategory1}}</td>\n            <td class=\"grey\">{{category.template}}</td>\n            <td class=\"grey\">\n          \n                <a  (click)=\"updateData(category)\" data-toggle=\"collapse\" title=\"Edit\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>&nbsp;\n                <a  title=\"Delete\" (click)=\"showConfirmModal(category.broadCastMessageCategoryId)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n            </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <app-pagination \n        [totalItems]=\"totalItems\"  \n        [ItemStartIndex]=\"ItemStartIndex\"\n        [ItemEndIndex] = \"ItemEndIndex\"\n        [itemLimit] = \"itemLimit\"\n        (outputParams) = \"getIndexParams($event)\">\t\n    </app-pagination>\n</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsBroadcastComponentsBroadcastgroupSetupBroadcastgroupSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"broadcastgroup-setup-wrapper\">\n    \n    <div class=\"card clear form-group\" id=\"accordion\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<ul class=\"list-group clear tabs\">\n\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\">\n                {{(!isEdit)?'Add':'Update'}} Interest Group\n                <span class=\"remainder\">(All fields with * are required.)</span>\n\t\t\t</li>\n\t\t\t<div id=\"typeCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t<div class=\"details\">\n\n            <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n            <form #createBroadcastGroupCategoryForm = \"ngForm\" name=\"createBroadcastGroupCategoryForm\" (ngSubmit)=\"submitcreateBroadcastGroupCategoryForm(createBroadcastGroupCategoryForm)\"  novalidate>\n                <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"input-box m-3\">\n                       <label> Interest Group Name<span class=\"mandatory\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Group Name\" name=\"groupName\" [(ngModel)]=\"groupCategory.groupName\" required>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"input-box m-3\">\n                        <label>Priviledge<span class=\"mandatory\">*</span></label>\n                        <angular2-multiselect  [data]=\"privilageCategory.dropdownList\" name=\"privilegeModeDropDown\"\n                [(ngModel)]=\"privilageCategory.selectedItems\"\n                [settings]=\"dropdownSettings\"  required></angular2-multiselect>                    </div>\n                </div>\n            </div>\n                <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"input-box m-3\">\n                        <label>Description</label>\n                     <textarea class=\"form-control\" rows=5 placeholder=\"Enter Description\" name=\"description\" [(ngModel)]=\"groupCategory.description\"></textarea>\n               \n                    </div>\n                </div>\n                </div>\n        <div class=\"row\">\n           \n            </div>\n        \n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"list-inline float-right  mt-4 mb-4\">\n                       \n                        <button type=\"button\" class=\"btn blue mr-4\"  (click)=\"Cancel()\"\n          [disabled]=\"createBroadcastGroupCategoryForm.invalid\n          && (!groupCategory.description)\" >Cancel</button>\n                        <button type=\"submit\" class=\"btn blue mr-2\" [disabled]=\"createBroadcastGroupCategoryForm.invalid\" *ngIf=\"!isEdit\">Submit</button>\n                        <button type=\"submit\" class=\"btn blue mr-2\" [disabled]=\"createBroadcastGroupCategoryForm.invalid\" *ngIf=\"isEdit\">Update</button>\n                    </div>\n                  </div>\n                </div>\n            </form>\n\n\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t</ul>\n\t\t</div>\n    </div>\n    \n\n <div class=\"card card-table\">\n    <div class=\"card-header\" >\n    <div class=\"float-left\">\n        <h5>Interest Group  <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    </div>\n    <ul class=\"list-inline\">\n        <li class=\"list-inline-item search d-none d-md-inline-block\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bcData\" >\n        </li>\n       \n    </ul>\n    </div>\n\n    <app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box>\n\n  \t<div class=\"card-body p-0\">\n\n    <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n        <thead>\n            <tr>\n            <th width=\"10%\" (click)=\"sortUnitData('serialNo')\">Serial NO<span [ngClass]=\"getFieldOrderBy('serialNo')\"></span></th>\n            <th width=\"30%\" (click)=\"sortUnitData('groupName')\">Broadcast Group Category <span [ngClass]=\"getFieldOrderBy('groupName')\"></span></th>\n            <th width=\"20%\" (click)=\"sortUnitData('description')\">Description <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n            <th width=\"30%\" (click)=\"sortUnitData('privilege')\">Privilege <span [ngClass]=\"getFieldOrderBy('privilege')\"></span></th>\n            <th width=\"10%\">Action</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let groupCategory of allBroadcastGroupCategory | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: bcData ; let i = index\">\n            <td class=\"name\">{{groupCategory.serialNo}}</td>\n            <td class=\"grey\">{{groupCategory.groupName}}</td>\n            <td class=\"grey\">{{groupCategory.description}}</td>\n            <td class=\"grey\">{{groupCategory.privilege}}</td>\n            \n            <td class=\"grey\">\n                <a title=\"Edit\" (click)=\"updateData(groupCategory)\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>&nbsp;\n                <a title=\"Delete\" (click)=\"showConfirmModal(groupCategory.broadCastGroupCategoryId)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n            </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <app-pagination \n        [totalItems]=\"totalItems\"  \n        [ItemStartIndex]=\"ItemStartIndex\"\n        [ItemEndIndex] = \"ItemEndIndex\"\n        [itemLimit] = \"itemLimit\"\n        (outputParams) = \"getIndexParams($event)\">\t\n    </app-pagination>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./src/app/ams/broadcast/broadcast-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ams/broadcast/broadcast-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: BroadcastRoutingModule */

  /***/
  function srcAppAmsBroadcastBroadcastRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastRoutingModule", function () {
      return BroadcastRoutingModule;
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


    var _components_broadcast_setup_broadcast_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/broadcast-setup/broadcast-setup.component */
    "./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.ts");
    /* harmony import */


    var _components_broadcast_history_broadcast_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/broadcast-history/broadcast-history.component */
    "./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.ts");
    /* harmony import */


    var _components_broadcast_sendmessage_broadcast_sendmessage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/broadcast-sendmessage/broadcast-sendmessage.component */
    "./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.ts");
    /* harmony import */


    var _components_broadcastgroup_setup_broadcastgroup_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/broadcastgroup-setup/broadcastgroup-setup.component */
    "./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.ts");
    /* harmony import */


    var _components_broadcast_group_assignment_broadcast_group_assignment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/broadcast-group-assignment/broadcast-group-assignment.component */
    "./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.ts");
    /* harmony import */


    var _components_broadcast_removeuser_broadcast_removeuser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/broadcast-removeuser/broadcast-removeuser.component */
    "./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.ts");
    /* harmony import */


    var _components_broadcast_announcements_broadcast_announcements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/broadcast-announcements/broadcast-announcements.component */
    "./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'setup',
      pathMatch: 'full'
    }, {
      path: 'setup',
      component: _components_broadcast_setup_broadcast_setup_component__WEBPACK_IMPORTED_MODULE_3__["BroadcastSetupComponent"]
    }, {
      path: 'groupsetup',
      component: _components_broadcastgroup_setup_broadcastgroup_setup_component__WEBPACK_IMPORTED_MODULE_6__["BroadcastgroupSetupComponent"]
    }, {
      path: 'sendmessage',
      component: _components_broadcast_sendmessage_broadcast_sendmessage_component__WEBPACK_IMPORTED_MODULE_5__["BroadcastSendmessageComponent"]
    }, {
      path: 'assignusers',
      component: _components_broadcast_group_assignment_broadcast_group_assignment_component__WEBPACK_IMPORTED_MODULE_7__["BroadcastGroupAssignmentComponent"]
    }, {
      path: 'removeusers',
      component: _components_broadcast_removeuser_broadcast_removeuser_component__WEBPACK_IMPORTED_MODULE_8__["BroadcastRemoveuserComponent"]
    }, {
      path: 'announcements',
      component: _components_broadcast_announcements_broadcast_announcements_component__WEBPACK_IMPORTED_MODULE_9__["BroadcastAnnouncementsComponent"]
    }, {
      path: 'history',
      component: _components_broadcast_history_broadcast_history_component__WEBPACK_IMPORTED_MODULE_4__["BroadcastHistoryComponent"]
    }, {
      path: '**',
      redirectTo: 'setup',
      pathMatch: 'full'
    }];

    var BroadcastRoutingModule = function BroadcastRoutingModule() {
      _classCallCheck(this, BroadcastRoutingModule);
    };

    BroadcastRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BroadcastRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/broadcast/broadcast.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/ams/broadcast/broadcast.module.ts ***!
    \***************************************************/

  /*! exports provided: BroadcastModule */

  /***/
  function srcAppAmsBroadcastBroadcastModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastModule", function () {
      return BroadcastModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _broadcast_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./broadcast-routing.module */
    "./src/app/ams/broadcast/broadcast-routing.module.ts");
    /* harmony import */


    var _components_broadcast_setup_broadcast_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/broadcast-setup/broadcast-setup.component */
    "./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.ts");
    /* harmony import */


    var _components_broadcast_history_broadcast_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/broadcast-history/broadcast-history.component */
    "./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.ts");
    /* harmony import */


    var _components_broadcast_sendmessage_broadcast_sendmessage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/broadcast-sendmessage/broadcast-sendmessage.component */
    "./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.ts");
    /* harmony import */


    var _components_broadcastgroup_setup_broadcastgroup_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/broadcastgroup-setup/broadcastgroup-setup.component */
    "./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.ts");
    /* harmony import */


    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-multiselect-dropdown */
    "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");
    /* harmony import */


    var _components_broadcast_group_assignment_broadcast_group_assignment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/broadcast-group-assignment/broadcast-group-assignment.component */
    "./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.ts");
    /* harmony import */


    var _components_broadcast_removeuser_broadcast_removeuser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/broadcast-removeuser/broadcast-removeuser.component */
    "./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.ts");
    /* harmony import */


    var _components_broadcast_announcements_broadcast_announcements_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/broadcast-announcements/broadcast-announcements.component */
    "./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.ts");
    /* harmony import */


    var src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
    /* harmony import */


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/api/controllers/Staff */
    "./src/app/api/controllers/Staff.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");

    var BroadcastModule = function BroadcastModule() {
      _classCallCheck(this, BroadcastModule);
    };

    BroadcastModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_broadcast_setup_broadcast_setup_component__WEBPACK_IMPORTED_MODULE_5__["BroadcastSetupComponent"], _components_broadcast_history_broadcast_history_component__WEBPACK_IMPORTED_MODULE_6__["BroadcastHistoryComponent"], _components_broadcast_sendmessage_broadcast_sendmessage_component__WEBPACK_IMPORTED_MODULE_7__["BroadcastSendmessageComponent"], _components_broadcastgroup_setup_broadcastgroup_setup_component__WEBPACK_IMPORTED_MODULE_8__["BroadcastgroupSetupComponent"], _components_broadcast_group_assignment_broadcast_group_assignment_component__WEBPACK_IMPORTED_MODULE_10__["BroadcastGroupAssignmentComponent"], _components_broadcast_removeuser_broadcast_removeuser_component__WEBPACK_IMPORTED_MODULE_11__["BroadcastRemoveuserComponent"], _components_broadcast_announcements_broadcast_announcements_component__WEBPACK_IMPORTED_MODULE_12__["BroadcastAnnouncementsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _broadcast_routing_module__WEBPACK_IMPORTED_MODULE_4__["BroadcastRoutingModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"]],
      providers: [src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_13__["BroadcastService"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_14__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_15__["ApartmentService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_16__["StaffService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_17__["LookupService"]]
    })], BroadcastModule);
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastAnnouncementsBroadcastAnnouncementsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".broadcast-announcements-wrapper img {\n  width: 100%;\n}\n.broadcast-announcements-wrapper .carousel-caption1 {\n  position: absolute;\n  right: 10%;\n  top: 50px;\n  left: -30%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.broadcast-announcements-wrapper .carousel-caption2 {\n  position: absolute;\n  top: 100px;\n  left: 22%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.broadcast-announcements-wrapper .carousel-caption3 {\n  position: absolute;\n  right: 15%;\n  bottom: 87px;\n  left: 10%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n.broadcast-announcements-wrapper angular2-multiselect .c-btn {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0LWFubm91bmNlbWVudHMvYnJvYWRjYXN0LWFubm91bmNlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3QtYW5ub3VuY2VtZW50cy9icm9hZGNhc3QtYW5ub3VuY2VtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSztFQUNDLFdBQUE7QUNGTjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDRlI7QURJSTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDSFI7QURLSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNIUjtBREtJO0VBQ0UsdUJBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3QtYW5ub3VuY2VtZW50cy9icm9hZGNhc3QtYW5ub3VuY2VtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icm9hZGNhc3QtYW5ub3VuY2VtZW50cy13cmFwcGVye1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMDBweDsgXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAxMjFweDtcbiAgICAgaW1ne1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5jYXJvdXNlbC1jYXB0aW9uMXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTAlO1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIGxlZnQ6IC0zMCU7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNhcm91c2VsLWNhcHRpb24ye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8vIHJpZ2h0OiAyNiU7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIGxlZnQ6IDIyJTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbjN7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE1JTtcbiAgICAgICAgYm90dG9tOjg3cHg7XG4gICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgYW5ndWxhcjItbXVsdGlzZWxlY3QgLmMtYnRuIHtcbiAgICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7IFxuICAgICAgXG4gIH1cbn0iLCIuYnJvYWRjYXN0LWFubm91bmNlbWVudHMtd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5icm9hZGNhc3QtYW5ub3VuY2VtZW50cy13cmFwcGVyIC5jYXJvdXNlbC1jYXB0aW9uMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwJTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAtMzAlO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnJvYWRjYXN0LWFubm91bmNlbWVudHMtd3JhcHBlciAuY2Fyb3VzZWwtY2FwdGlvbjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDIyJTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJyb2FkY2FzdC1hbm5vdW5jZW1lbnRzLXdyYXBwZXIgLmNhcm91c2VsLWNhcHRpb24zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUlO1xuICBib3R0b206IDg3cHg7XG4gIGxlZnQ6IDEwJTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5icm9hZGNhc3QtYW5ub3VuY2VtZW50cy13cmFwcGVyIGFuZ3VsYXIyLW11bHRpc2VsZWN0IC5jLWJ0biB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: BroadcastAnnouncementsComponent */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastAnnouncementsBroadcastAnnouncementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastAnnouncementsComponent", function () {
      return BroadcastAnnouncementsComponent;
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


    var _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
    /* harmony import */


    var _api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BroadcastAnnouncementsComponent =
    /*#__PURE__*/
    function () {
      function BroadcastAnnouncementsComponent(broadcastService, cookieService, userService, injector) {
        _classCallCheck(this, BroadcastAnnouncementsComponent);

        this.broadcastService = broadcastService;
        this.cookieService = cookieService;
        this.userService = userService;
        this.injector = injector;
        this.imagePath = "assets/images/announcement_background.jpeg";
        this.filterGroupCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.interestGroupCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
      }

      _createClass(BroadcastAnnouncementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
          this.getAllCategory();
          this.getAllBroadcastMessage();
          this.getAllGroupCategory();
          this.groupCategorySetting = {
            singleSelection: true,
            labelKey: 'name',
            primaryKey: 'value',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.interestGroupCategorySetting = {
            singleSelection: true,
            labelKey: 'name',
            primaryKey: 'value',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.filterGroupCategory.dropdownList = [{
            name: "today",
            value: 0
          }, {
            name: "yesterday",
            value: 1
          }, {
            name: "Past Week",
            value: 7
          }, {
            name: "Past 2 Week",
            value: 14
          }];
          this.interestGroupCategory.dropdownList = [{
            name: "today",
            value: 0
          }, {
            name: "yesterday",
            value: 1
          }, {
            name: "Past Week",
            value: 7
          }, {
            name: "Past 2 Week",
            value: 14
          }];
          this.filterGroupCategory.selectedItems = [{
            name: "today",
            value: 0
          }];
          this.interestGroupCategory.selectedItems = [{
            name: "today",
            value: 0
          }];
        } //Get All Category

      }, {
        key: "getAllCategory",
        value: function getAllCategory() {
          var _this = this;

          var queryParamBase = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.broadcastService.getBroadCastMessageCategories(queryParamBase).subscribe(function (res) {
            _this.allCategory = res;
          });
        }
      }, {
        key: "getAllGroupCategory",
        value: function getAllGroupCategory() {
          var _this2 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getAllBroadCastGroupCategories(queryParamBase).subscribe(function (res) {
            _this2.broadCastGroupCategory = res;
          });
        }
      }, {
        key: "getGroupCategoryName",
        value: function getGroupCategoryName(groupcategoryId) {
          var groupcategory = this.broadCastGroupCategory.filter(function (obj) {
            return obj.broadCastGroupCategoryId == groupcategoryId;
          });
          return groupcategory[0].groupName;
        }
      }, {
        key: "getCategoryName",
        value: function getCategoryName(name) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.allCategory, function (item) {
            if (item.broadCastMessageCategoryId === name) return item;
          });

          if (data === undefined || data === null || data.length == 0) {
            return '';
          } else {
            return data[0].broadCastMessageCategory1;
          }
        }
      }, {
        key: "getBroadcastGroupCategory",
        value: function getBroadcastGroupCategory(item) {}
      }, {
        key: "getUserName",
        value: function getUserName(name) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.allUser, function (item) {
            if (item.userId === name) return item;
          });

          if (data === undefined || data === null || data.length == 0) {
            return '';
          } else {
            return data[0].firstName;
          }
        }
      }, {
        key: "getAllBroadcastMessage",
        value: function getAllBroadcastMessage() {
          var _this3 = this;

          var users$ = this.userService.getAllUsers();
          var allBroadCastmessages$ = users$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(function (users) {
            _this3.allUser = users;
            var queryParamBase = {
              apartmentId: parseInt(_this3.cookieService.get('apartmentId'))
            };
            return _this3.broadcastService.getAllBroadcastMessages(queryParamBase);
          }));
          allBroadCastmessages$.subscribe(function (res) {
            _this3.broadCastMessages = res;

            _this3.broadCastMessages.forEach(function (element) {
              if (element.broadCastGroupcategoryId == null) {
                element.CategoryName = _this3.getCategoryName(element.broadcastMessageCategoryId);
              } else {
                element.CategoryName = _this3.getGroupCategoryName(element.broadCastGroupcategoryId);
              }

              element.UserName = _this3.getUserName(element.broadcastBy);
            });

            _this3.filterMessages({
              name: "today",
              value: 0
            }, "interestGroup");

            _this3.filterMessages({
              name: "today",
              value: 0
            }, "broadcastGroup");
          });
        }
      }, {
        key: "getDate",
        value: function getDate(inDays) {
          var today = new Date();
          return new Date(today.getFullYear(), today.getMonth(), today.getDate() + inDays * -1);
        }
      }, {
        key: "filterMessages",
        value: function filterMessages(item, messageType) {
          var numberOfDays = item.value;
          var current = new Date();
          var previousDate = this.getDate(numberOfDays);

          if (messageType == "interestGroup") {
            this.interestGroupBased = this.broadCastMessages.filter(function (obj) {
              return obj.broadCastGroupcategoryId != null && current > new Date(Date.parse(obj.broadcastOn)) && previousDate < new Date(Date.parse(obj.broadcastOn));
            });

            if (this.interestGroupBased.length == 0) {
              this.interestGroupBased = [{}];
            }
          }

          if (messageType == "broadcastGroup") {
            this.broadCastBased = this.broadCastMessages.filter(function (obj) {
              return obj.broadCastGroupcategoryId == null && current > new Date(Date.parse(obj.broadcastOn)) && previousDate < new Date(Date.parse(obj.broadcastOn));
            });

            if (this.broadCastBased.length == 0) {
              this.broadCastBased = [{}];
            }
          }
        }
      }]);

      return BroadcastAnnouncementsComponent;
    }();

    BroadcastAnnouncementsComponent.ctorParameters = function () {
      return [{
        type: _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: _api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    BroadcastAnnouncementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-broadcast-announcements',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./broadcast-announcements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./broadcast-announcements.component.scss */
      "./src/app/ams/broadcast/components/broadcast-announcements/broadcast-announcements.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], BroadcastAnnouncementsComponent);
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.scss":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.scss ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastGroupAssignmentBroadcastGroupAssignmentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".broadcastgroupAssignment-setup-wrapper .card {\n  overflow: visible !important;\n}\n.broadcastgroupAssignment-setup-wrapper .card .card-body {\n  overflow: visible !important;\n}\n.broadcastgroupAssignment-setup-wrapper .assignBtn {\n  position: absolute;\n  top: 0;\n}\n.broadcastgroupAssignment-setup-wrapper .remainder {\n  color: rgba(255, 0, 0, 0.8);\n  font-size: 10px;\n  padding: 5px 0px 0px 0px;\n  display: block;\n}\n.broadcastgroupAssignment-setup-wrapper .mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0LWdyb3VwLWFzc2lnbm1lbnQvYnJvYWRjYXN0LWdyb3VwLWFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3QtZ3JvdXAtYXNzaWdubWVudC9icm9hZGNhc3QtZ3JvdXAtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDRCQUFBO0FDQVI7QURFSTtFQUNJLDRCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtBQ0FSO0FERUk7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUNBUjtBREVJO0VBQ0UsVUFBQTtFQUNFLGVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3QtZ3JvdXAtYXNzaWdubWVudC9icm9hZGNhc3QtZ3JvdXAtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icm9hZGNhc3Rncm91cEFzc2lnbm1lbnQtc2V0dXAtd3JhcHBlcntcbiAgICAuY2FyZHtcbiAgICAgICAgb3ZlcmZsb3c6dmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYXNzaWduQnRue1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgfVxuICAgIC5yZW1haW5kZXJ7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44KTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubWFuZGF0b3J5e1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn0iLCIuYnJvYWRjYXN0Z3JvdXBBc3NpZ25tZW50LXNldHVwLXdyYXBwZXIgLmNhcmQge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLmJyb2FkY2FzdGdyb3VwQXNzaWdubWVudC1zZXR1cC13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLmJyb2FkY2FzdGdyb3VwQXNzaWdubWVudC1zZXR1cC13cmFwcGVyIC5hc3NpZ25CdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5icm9hZGNhc3Rncm91cEFzc2lnbm1lbnQtc2V0dXAtd3JhcHBlciAucmVtYWluZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAwcHggMHB4IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYnJvYWRjYXN0Z3JvdXBBc3NpZ25tZW50LXNldHVwLXdyYXBwZXIgLm1hbmRhdG9yeSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: BroadcastGroupAssignmentComponent */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastGroupAssignmentBroadcastGroupAssignmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastGroupAssignmentComponent", function () {
      return BroadcastGroupAssignmentComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
    /* harmony import */


    var _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BroadcastGroupAssignmentComponent =
    /*#__PURE__*/
    function () {
      function BroadcastGroupAssignmentComponent(broadcastService, sharedService, cookieService, userService, apartmentService, injector) {
        _classCallCheck(this, BroadcastGroupAssignmentComponent);

        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.injector = injector;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
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
          "roleids": "",
          "ApartmentId": 0,
          "blockids": "",
          "keyword": ""
        };
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
      }

      _createClass(BroadcastGroupAssignmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginUserId = parseInt(this.cookieService.get('userId'));
          this.groupUsercategory = {};
          this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
          this.getUsers();
          this.assignUsers = [];
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
            primaryKey: 'userId',
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
          this.roleCategory.dropdownList = [{
            "name": "Tenant",
            "value": 2
          }, {
            "name": "Owner",
            "value": 4
          }];
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this4 = this;

          this.filterOptions.ApartmentId = this.apartmentID;
          var roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) {
            return item.value;
          }).join(",");
          this.filterOptions.roleids = roleIds;
          var blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) {
            return item.apartmentBlockId;
          }).join(",");
          this.filterOptions.blockids = blockIds;
          this.userService.getUsersByKeyword(this.filterOptions).subscribe(function (res) {
            res.forEach(function (element) {
              element.userFullName = element.userName + " " + element.roleName + " " + element.apartmentBlockNumber + " " + element.apartmentBlockUnitNumber;
            });
            _this4.allUsers = res;
            _this4.users.dropdownList = res;

            if (_this4.broadCastGroupCategory.selectedItems && _this4.broadCastGroupCategory.selectedItems.length > 0) {
              _this4.getUsersBycategory(_this4.broadCastGroupCategory.selectedItems[0]);
            }
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
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
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "getAllApartmentBlockList",
        value: function getAllApartmentBlockList() {
          var _this5 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.apartmentService.getApartmentBlockByApartmentId(queryParamBase).subscribe(function (res) {
            _this5.apartmentBlock.dropdownList = res;
          });
        }
      }, {
        key: "assignUser",
        value: function assignUser() {
          var _this6 = this;

          var usersToInsert = this.users.selectedItems;
          var counter = 0;
          usersToInsert.forEach(function (element) {
            counter++;
            _this6.isLast = counter == usersToInsert.length;

            _this6.insertGroupUser(element.userId, element.roleID, element.apartmentBlockID, element.apartmentBlockUnitID);

            _this6.assignUsers.push(element);

            _this6.users.dropdownList = _this6.users.dropdownList.filter(function (obj) {
              return obj.userId !== element.userId || obj.roleID !== element.roleID || obj.apartmentBlockID !== element.apartmentBlockID || obj.apartmentBlockUnitID !== element.apartmentBlockUnitID;
            });
          });
          this.users.selectedItems = [];
        }
      }, {
        key: "getUsersBycategory",
        value: function getUsersBycategory(item) {
          var categoryUsers = this.interestGroupUsers.filter(function (obj) {
            return obj.broadCastGroupCategoryId == item.broadCastGroupCategoryId;
          });
          var tempAssignUsers = [];

          var tempUsers = _toConsumableArray(this.allUsers);

          categoryUsers.forEach(function (element) {
            tempUsers.forEach(function (obj) {
              var isFound = obj.userId == element.userId && obj.roleID == element.roleId && obj.apartmentBlockID == element.apartmentBlockId && obj.apartmentBlockUnitID == element.unitId;

              if (isFound) {
                tempAssignUsers.push(obj);
                tempUsers = tempUsers.filter(function (obj2) {
                  return obj !== obj2;
                });
              }
            });
          });
          this.users.dropdownList = _toConsumableArray(tempUsers);
          this.assignUsers = [].concat(tempAssignUsers);
        }
      }, {
        key: "removeCategory",
        value: function removeCategory() {
          this.users.dropdownList = this.allUsers;
          this.assignUsers = [];
          this.users.selectedItems = [];
          this.broadCastGroupCategory.selectedItems = [];
        }
      }, {
        key: "removeAllRole",
        value: function removeAllRole() {
          this.roleCategory.selectedItems = [];
          this.getUsers();
        }
      }, {
        key: "removeAllBlock",
        value: function removeAllBlock() {
          this.apartmentBlock.selectedItems = [];
          this.getUsers();
        }
      }, {
        key: "submitMapGroupUserForm",
        value: function submitMapGroupUserForm(mapGroupUserForm) {
          var _this7 = this;

          var broadCastGroupCategoryID = Array.prototype.map.call(this.broadCastGroupCategory.selectedItems, function (item) {
            return item.broadCastGroupCategoryId;
          }).join(",");
          var roleTypeId = Array.prototype.map.call(this.roleTypeArr.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) {
            return item.apartmentBlockId;
          }).join(",");
          var userIds = Array.prototype.map.call(this.users.selectedItems, function (item) {
            return item.userId;
          }).join(",");
          var broadCastGroupCategoryUser = {
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
            'serialNumber': 0
          };

          if (this.isEdit) {
            broadCastGroupCategoryUser.broadCastGroupCategoryUserID = this.groupUsercategory.broadCastGroupCategoryUserID;
            broadCastGroupCategoryUser.insertedBy = this.groupUsercategory.insertedBy;
            broadCastGroupCategoryUser.insertedOn = this.groupUsercategory.insertedOn;
            broadCastGroupCategoryUser.updatedBy = this.loginUserId;
            broadCastGroupCategoryUser.updatedOn = new Date().toISOString();
            broadCastGroupCategoryUser.serialNumber = this.groupUsercategory.serialNo;
          }

          var upsertBroadCastGroupCategoryUserParams = {
            'broadcast': broadCastGroupCategoryUser
          };
          this.broadcastService.upsertBroadCastGroupCategoryUser(upsertBroadCastGroupCategoryUserParams).subscribe(function (res) {
            if (res.message) {
              if (_this7.isEdit) {
                _this7.sharedService.setAlertMessage("Interest groups mapping to user updated successfully");
              } else {
                _this7.sharedService.setAlertMessage("Interest groups mapping to user added successfully");
              } //   this.getAllCategory();


              _this7.groupUsercategory = {};
              _this7.isEdit = false;

              _this7.reset();

              _this7.getInterestGroupUsers();
            }
          });
        }
      }, {
        key: "insertGroupUser",
        value: function insertGroupUser(userId, roleId, blockId, unitId) {
          var _this8 = this;

          var broadCastGroupCategoryID = Array.prototype.map.call(this.broadCastGroupCategory.selectedItems, function (item) {
            return item.broadCastGroupCategoryId;
          }).join(",");
          var broadCastGroupCategoryUser = {
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
          var upsertBroadCastGroupCategoryUserParams = {
            'broadcast': broadCastGroupCategoryUser
          };
          this.broadcastService.upsertBroadCastGroupCategoryUser(upsertBroadCastGroupCategoryUserParams).subscribe(function (res) {
            if (res.message) {
              if (_this8.isLast) {
                _this8.sharedService.setAlertMessage("Interest groups mapping to user(s) added successfully");

                _this8.isLast = false;
              }
            }
          });
        }
      }, {
        key: "removeRole",
        value: function removeRole() {
          this.roleCategory.dropdownList = [];
          this.roleCategory.selectedItems = [];
          this.users.selectedItems = [];
        }
      }, {
        key: "reset",
        value: function reset() {
          this.removeRole();
          this.apartmentBlock.selectedItems = [];
          this.roleTypeArr.selectedItems = [];
          this.broadCastGroupCategory.selectedItems = [];
        } //Get Category Type

      }, {
        key: "getAllGroupCategory",
        value: function getAllGroupCategory() {
          var _this9 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getAllBroadCastGroupCategory(queryParamBase).subscribe(function (res) {
            _this9.broadCastGroupCategory.dropdownList = res;
          });
        }
      }, {
        key: "getInterestGroupUsers",
        value: function getInterestGroupUsers() {
          var _this10 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getBroadCastGroupCategoryUser(queryParamBase).subscribe(function (res) {
            _this10.interestGroupUsers = res;
          });
        }
      }]);

      return BroadcastGroupAssignmentComponent;
    }();

    BroadcastGroupAssignmentComponent.ctorParameters = function () {
      return [{
        type: _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    BroadcastGroupAssignmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-broadcast-group-assignment',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./broadcast-group-assignment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./broadcast-group-assignment.component.scss */
      "./src/app/ams/broadcast/components/broadcast-group-assignment/broadcast-group-assignment.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"], _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], BroadcastGroupAssignmentComponent);
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastHistoryBroadcastHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3QtaGlzdG9yeS9icm9hZGNhc3QtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: BroadcastHistoryComponent */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastHistoryBroadcastHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastHistoryComponent", function () {
      return BroadcastHistoryComponent;
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


    var _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
    /* harmony import */


    var _api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var BroadcastHistoryComponent =
    /*#__PURE__*/
    function () {
      function BroadcastHistoryComponent(broadcastService, sharedService, lookupService, userService, cookieService) {
        _classCallCheck(this, BroadcastHistoryComponent);

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

      _createClass(BroadcastHistoryComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
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
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.getAllUser();
          // this.getAllGroup();
          this.getAllCategory();
          this.getAllType();
          this.getAllBroadcastMessage();
        } //Get All Group

      }, {
        key: "getAllGroup",
        value: function getAllGroup() {
          var _this11 = this;

          this.broadcastService.getAllBroadcastGroups().subscribe(function (res) {
            _this11.allgroup = res;
          });
        } //Get All Category

      }, {
        key: "getAllCategory",
        value: function getAllCategory() {
          var _this12 = this;

          var queryParamBase = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.broadcastService.getBroadCastMessageCategories(queryParamBase).subscribe(function (res) {
            _this12.allCategory = res;
          });
        } //Get All Type

      }, {
        key: "getAllType",
        value: function getAllType() {
          var _this13 = this;

          var queryParamBase = {
            LookupTypeId: 11
          };
          this.lookupService.getLookupValueByLookupTypeId(queryParamBase).subscribe(function (res) {
            _this13.allType = res;
          });
        } // getGroupName(name){
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

      }, {
        key: "getCategoryName",
        value: function getCategoryName(name) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.allCategory, function (item) {
            if (item.broadCastMessageCategoryId === name) return item;
          });

          if (data === undefined || data === null || data.length == 0) {
            return '';
          } else {
            return data[0].broadCastMessageCategory1;
          }
        }
      }, {
        key: "getTypeName",
        value: function getTypeName(name) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.allType, function (item) {
            if (item.lookupValueId === name) return item;
          });

          if (data === undefined || data === null || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName;
          }
        }
      }, {
        key: "getUserName",
        value: function getUserName(name) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.allUser, function (item) {
            if (item.userId === name) return item;
          });

          if (data === undefined || data === null || data.length == 0) {
            return '';
          } else {
            return data[0].firstName;
          }
        }
      }, {
        key: "getBroadCastMode",
        value: function getBroadCastMode(modeIds) {
          if (modeIds.length > 0) {
            var broadcastModeString = "";
            var modeIdsArr = modeIds.split(',');

            if (modeIdsArr.length > 0) {
              modeIdsArr.forEach(function (element) {
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
      }, {
        key: "getAllBroadcastMessage",
        value: function getAllBroadcastMessage() {
          var _this14 = this;

          var users$ = this.userService.getAllUsers();
          var allBroadCastmessages$ = users$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(function (users) {
            _this14.allUser = users;
            var queryParamBase = {
              apartmentId: parseInt(_this14.cookieService.get('apartmentId'))
            };
            return _this14.broadcastService.getAllBroadcastMessages(queryParamBase);
          }));
          allBroadCastmessages$.subscribe(function (res) {
            _this14.broadCastMessages = [];
            res.forEach(function (element) {
              _this14.broadCastMessages.push({
                'broadcastOn': element.broadcastOn,
                'subject': element.subject,
                'CategoryName': _this14.getCategoryName(element.broadcastMessageCategoryId),
                'BroadCastMode': _this14.getBroadCastMode(element.broadcastModeIds),
                'UserName': _this14.getUserName(element.broadcastBy)
              }); // element.CategoryName=this.getCategoryName(element.broadcastMessageCategoryId);
              // element.BroadCastMode=this.getBroadCastMode(element.broadcastModeIds);
              // element.UserName=this.getUserName(element.broadcastBy);

            });
            _this14.isDataLoaded = true;
            _this14.totalItems = _this14.broadCastMessages.length;

            if (_this14.totalItems > _this14.itemLimit) {
              _this14.ItemEndIndex = _this14.itemLimit;
            } else {
              _this14.ItemEndIndex = _this14.totalItems;
            }
          });
        }
      }]);

      return BroadcastHistoryComponent;
    }();

    BroadcastHistoryComponent.ctorParameters = function () {
      return [{
        type: _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: _api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    BroadcastHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-broadcast-history',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./broadcast-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./broadcast-history.component.scss */
      "./src/app/ams/broadcast/components/broadcast-history/broadcast-history.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], BroadcastHistoryComponent);
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastRemoveuserBroadcastRemoveuserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".broadcast-removeuser-wrapper .card {\n  overflow: visible !important;\n}\n.broadcast-removeuser-wrapper .remainder {\n  color: rgba(255, 0, 0, 0.8);\n  font-size: 10px;\n  padding: 5px 0px 0px 0px;\n  display: block;\n}\n.broadcast-removeuser-wrapper .mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0LXJlbW92ZXVzZXIvYnJvYWRjYXN0LXJlbW92ZXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3QtcmVtb3ZldXNlci9icm9hZGNhc3QtcmVtb3ZldXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDRCQUFBO0FDQUo7QURFRTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ0FKO0FERUE7RUFDRSxVQUFBO0VBQ0UsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Jyb2FkY2FzdC9jb21wb25lbnRzL2Jyb2FkY2FzdC1yZW1vdmV1c2VyL2Jyb2FkY2FzdC1yZW1vdmV1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyb2FkY2FzdC1yZW1vdmV1c2VyLXdyYXBwZXJ7XG4gIC5jYXJke1xuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnJlbWFpbmRlcntcbiAgICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAwcHggMHB4IDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYW5kYXRvcnl7XG4gIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxufSIsIi5icm9hZGNhc3QtcmVtb3ZldXNlci13cmFwcGVyIC5jYXJkIHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi5icm9hZGNhc3QtcmVtb3ZldXNlci13cmFwcGVyIC5yZW1haW5kZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogNXB4IDBweCAwcHggMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5icm9hZGNhc3QtcmVtb3ZldXNlci13cmFwcGVyIC5tYW5kYXRvcnkge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: BroadcastRemoveuserComponent */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastRemoveuserBroadcastRemoveuserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastRemoveuserComponent", function () {
      return BroadcastRemoveuserComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
    /* harmony import */


    var _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var _api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../api/controllers/Staff */
    "./src/app/api/controllers/Staff.ts");

    var BroadcastRemoveuserComponent =
    /*#__PURE__*/
    function () {
      function BroadcastRemoveuserComponent(broadcastService, sharedService, cookieService, userService, staffService, apartmentService, injector) {
        _classCallCheck(this, BroadcastRemoveuserComponent);

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
        this.itemLimit = 10;
        this.isDataLoaded = false;
        this.filterOptions = {
          "roleids": "",
          "ApartmentId": 0,
          "blockids": "",
          "keyword": ""
        };
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
      }

      _createClass(BroadcastRemoveuserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
        }
      }, {
        key: "removeMappedUser",
        value: function removeMappedUser(index) {
          var _this15 = this;

          if (index != null) {
            var params = {
              broadCastGroupCategoryUserId: index,
              deleteBy: this.loginUserId
            };
            this.broadcastService.deleteBroadCastGroupCategoryUser(params).subscribe(function (res) {
              _this15.sharedService.setAlertMessage("User has been removed from interest group successfully");

              _this15.allGroupUser = _this15.allGroupUser.filter(function (obj) {
                return obj.broadCastGroupCategoryUserId !== index;
              });
              _this15.interestGroupUsers = _this15.interestGroupUsers.filter(function (obj) {
                return obj.broadCastGroupCategoryUserId !== index;
              });
            });
          }
        }
      }, {
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
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
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "getAllGoupUsers",
        value: function getAllGoupUsers() {
          var _this16 = this;

          this.isDataLoaded = false;
          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getBroadCastGroupCategoryUser(queryParamBase).subscribe(function (res) {
            _this16.interestGroupUsers = res;

            _this16.interestGroupUsers.forEach(function (element) {
              var currentUser = _this16.getUser(element.userId, element.roleId, element.apartmentBlockId, element.unitId);

              if (currentUser != undefined) {
                element.role = currentUser.roleName;
                element.block = currentUser.apartmentBlockNumber;
                element.unit = currentUser.apartmentBlockUnitNumber;
                element.user = currentUser.userName;
              } else {
                element.role = element.roleId;
                element.block = element.apartmentBlockId;
                element.unit = element.unitId;
                element.user = element.userId;
              }

              element.groupCategory = _this16.getGroupCategory(element.broadCastGroupCategoryId);
            });

            _this16.allGroupUser = _toConsumableArray(_this16.interestGroupUsers);
            _this16.isDataLoaded = true;
            _this16.totalItems = _this16.allGroupUser.length;

            if (_this16.totalItems > _this16.itemLimit) {
              _this16.ItemEndIndex = _this16.itemLimit;
            } else {
              _this16.ItemEndIndex = _this16.totalItems;
            }
          });
        }
      }, {
        key: "getUser",
        value: function getUser(userId, roleId, apartmentBlockId, unitId) {
          var users = this.allUsers.filter(function (obj) {
            return obj.userId == userId && obj.roleID == roleId && obj.apartmentBlockID == apartmentBlockId && obj.apartmentBlockUnitID == unitId;
          });
          return users[0];
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.filterOptions.ApartmentId = this.apartmentID;
                    _context.next = 3;
                    return this.userService.getUsersByKeyword(this.filterOptions).toPromise();

                  case 3:
                    data = _context.sent;
                    this.allUsers = data;
                    this.getAllGoupUsers(); // .subscribe((res:any)=>{
                    //    this.allUsers=res;
                    //   },
                    //   error=>console.log(error)
                    //   );

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getAllApartmentBlockList",
        value: function getAllApartmentBlockList() {
          var _this17 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.apartmentService.getApartmentBlockByApartmentId(queryParamBase).subscribe(function (res) {
            _this17.apartmentBlockList = res;
          });
        }
      }, {
        key: "getGroupCategory",
        value: function getGroupCategory(groupCategoryid) {
          var groupCategory = this.broadCastGroupCategory.dropdownList.filter(function (obj) {
            return obj.broadCastGroupCategoryId == groupCategoryid;
          });

          if (groupCategory != undefined && groupCategory.length > 0) {
            return groupCategory[0].groupName;
          } else {
            return "";
          }
        } //Get Category Type

      }, {
        key: "getAllGroupCategory",
        value: function getAllGroupCategory() {
          var _this18 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getAllBroadCastGroupCategory(queryParamBase).subscribe(function (res) {
            _this18.broadCastGroupCategory.dropdownList = res;
          });
        }
      }, {
        key: "deSelectCategory",
        value: function deSelectCategory() {
          this.allGroupUser = _toConsumableArray(this.interestGroupUsers);
        }
      }, {
        key: "getUsersBycategory",
        value: function getUsersBycategory(item) {
          var categoryUsers = this.interestGroupUsers.filter(function (obj) {
            return obj.broadCastGroupCategoryId == item.broadCastGroupCategoryId;
          });
          this.allGroupUser = categoryUsers;
        }
      }]);

      return BroadcastRemoveuserComponent;
    }();

    BroadcastRemoveuserComponent.ctorParameters = function () {
      return [{
        type: _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__["StaffService"]
      }, {
        type: _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    BroadcastRemoveuserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-broadcast-removeuser',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./broadcast-removeuser.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./broadcast-removeuser.component.scss */
      "./src/app/ams/broadcast/components/broadcast-removeuser/broadcast-removeuser.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"], _api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__["StaffService"], _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], BroadcastRemoveuserComponent);
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastSendmessageBroadcastSendmessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".broadcast-message-wrapper form input:required.ng-dirty.ng-invalid {\n  border: 1px solid #cccccc !important;\n}\n.broadcast-message-wrapper .remainder {\n  color: rgba(255, 0, 0, 0.8);\n  font-size: 10px;\n  padding: 5px 0px 0px 0px;\n  display: block;\n}\n.broadcast-message-wrapper .mandatory {\n  color: red;\n  font-size: 16px;\n}\n.broadcast-message-wrapper .nav-tabs .nav-item.show .nav-link, .broadcast-message-wrapper .nav-tabs .nav-link.active {\n  color: #0062cc;\n  background-color: transparent;\n  border-color: transparent transparent #f3f3f3;\n  border-bottom: 3px solid !important;\n  font-size: 16px;\n  font-weight: bold;\n}\n.broadcast-message-wrapper .tab-content > .active {\n  margin-top: 18px;\n}\n.broadcast-message-wrapper angular2-multiselect {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem !important;\n}\n.broadcast-message-wrapper .selected-list .c-list .c-token {\n  font-size: 1.2rem !important;\n}\n.broadcast-message-wrapper .c-btn {\n  font-size: 1.2rem !important;\n}\n.broadcast-message-wrapper .recipentsDiv {\n  margin-bottom: 10px;\n}\n.broadcast-message-wrapper .recipentsDiv .box {\n  border: 1px solid #ccc;\n  height: 150px;\n  overflow-y: auto;\n}\n.broadcast-message-wrapper .recipentsDiv .box label {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0LXNlbmRtZXNzYWdlL2Jyb2FkY2FzdC1zZW5kbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Jyb2FkY2FzdC9jb21wb25lbnRzL2Jyb2FkY2FzdC1zZW5kbWVzc2FnZS9icm9hZGNhc3Qtc2VuZG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxvQ0FBQTtBQ0ZKO0FESUE7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUNGSjtBRElBO0VBQ0UsVUFBQTtFQUNFLGVBQUE7QUNGSjtBRElFO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FESUE7RUFDRSxnQkFBQTtBQ0ZGO0FESUU7RUVrQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFRnBDTSw0QkFBQTtBQ0VSO0FEQ0k7RUFDRSw0QkFBQTtBQ0NOO0FERUk7RUFDRSw0QkFBQTtBQ0FOO0FERUk7RUFDRSxtQkFBQTtBQ0FOO0FEQ007RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQVE7RUFDRSxrQkFBQTtBQ0VWIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Jyb2FkY2FzdC9jb21wb25lbnRzL2Jyb2FkY2FzdC1zZW5kbWVzc2FnZS9icm9hZGNhc3Qtc2VuZG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc2Nzcy9mb250cy5zY3NzXCI7XG5cbi5icm9hZGNhc3QtbWVzc2FnZS13cmFwcGVye1xuICBmb3JtIGlucHV0OnJlcXVpcmVkLm5nLWRpcnR5Lm5nLWludmFsaWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2MgIWltcG9ydGFudDtcbn1cbi5yZW1haW5kZXJ7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbiAgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGNvbG9yOiAjMDA2MmNjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2YzZjNmMztcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGFiLWNvbnRlbnQ+LmFjdGl2ZSB7ICBcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbiAgYW5ndWxhcjItbXVsdGlzZWxlY3R7XG4gICAgICBAaW5jbHVkZSAgZGVzcC1yZWd1bGFyO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zZWxlY3RlZC1saXN0IC5jLWxpc3QgLmMtdG9rZW57XG4gICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jLWJ0bntcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yZWNpcGVudHNEaXZ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgLmJveHtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgICAgICBoZWlnaHQ6MTUwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICAgICAgbGFiZWx7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICBcbn0iLCIuYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciBmb3JtIGlucHV0OnJlcXVpcmVkLm5nLWRpcnR5Lm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjICFpbXBvcnRhbnQ7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciAucmVtYWluZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAwcHggMHB4IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciAubWFuZGF0b3J5IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzAwNjJjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2YzZjNmMztcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciAudGFiLWNvbnRlbnQgPiAuYWN0aXZlIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbi5icm9hZGNhc3QtbWVzc2FnZS13cmFwcGVyIGFuZ3VsYXIyLW11bHRpc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnNlbGVjdGVkLWxpc3QgLmMtbGlzdCAuYy10b2tlbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciAuYy1idG4ge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnJlY2lwZW50c0RpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciAucmVjaXBlbnRzRGl2IC5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnJlY2lwZW50c0RpdiAuYm94IGxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: BroadcastSendmessageComponent */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastSendmessageBroadcastSendmessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastSendmessageComponent", function () {
      return BroadcastSendmessageComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
    /* harmony import */


    var _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var _api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../api/controllers/Staff */
    "./src/app/api/controllers/Staff.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var BroadcastSendmessageComponent =
    /*#__PURE__*/
    function () {
      function BroadcastSendmessageComponent(broadcastService, sharedService, cookieService, userService, staffService, apartmentService, injector) {
        _classCallCheck(this, BroadcastSendmessageComponent);

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
        this.filterOptions = {
          "roleids": "",
          "ApartmentId": 0,
          "blockids": "",
          "keyword": ""
        };
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
      }

      _createClass(BroadcastSendmessageComponent, [{
        key: "onContentChanged",
        value: function onContentChanged(event) {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.message = {};
          this.IsBroadcast = true;
          this.loginedUser = parseInt(this.cookieService.get('userId'));
          this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
          this.getAllUsers();
          this.getAllCategory();
          this.getAllRoleTypesList();
          this.getAllApartmentBlockList();
          this.getAllGroupCategory();
          this.getInterestGroupUsers();
          this.getAllInterestGroupUser();
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
          this.selectedTab = 'role';
        }
      }, {
        key: "currentTab",
        value: function currentTab(item) {
          this.selectedTab = item;

          if (this.selectedTab == 'interest') {
            // this.users=[];
            this.IsBroadcast = false;

            if (this.broadCastGroupCategory.selectedItems.length > 0) {
              this.selectInterestGroup(this.broadCastGroupCategory.selectedItems[0]);
            } else {
              this.users = [];
            }
          }

          if (this.selectedTab == 'role') {
            this.updateUsers();
            this.IsBroadcast = true;
          }
        }
      }, {
        key: "getAllInterestGroupUser",
        value: function getAllInterestGroupUser() {
          var _this19 = this;

          this.filterOptions.ApartmentId = this.apartmentID;
          this.userService.getUsersByKeyword(this.filterOptions).subscribe(function (res) {
            res.forEach(function (element) {
              element.userFullName = element.userName + " " + element.roleName + " " + element.apartmentBlockNumber + " " + element.apartmentBlockUnitNumber;
            });
            _this19.allnterestGroupUsers = res;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          var _this20 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.userService.getUsersByApartmentId(queryParamBase).subscribe(function (res) {
            res.forEach(function (element) {
              element.userFullName = element.userName + " " + element.roleName + " " + element.apartmentBlockNumber + " " + element.apartmentBlockUnitNumber;
            });
            _this20.allUsers = res;

            _this20.updateUsers();
          });
        }
      }, {
        key: "selectInterestGroup",
        value: function selectInterestGroup(item) {
          var categoryUsers = this.interestGroupUsers.filter(function (obj) {
            return obj.broadCastGroupCategoryId == item.broadCastGroupCategoryId;
          });
          var tempAssignUsers = [];

          var tempUsers = _toConsumableArray(this.allnterestGroupUsers);

          categoryUsers.forEach(function (element) {
            tempUsers.forEach(function (obj) {
              var isFound = obj.userId == element.userId && obj.roleID == element.roleId && obj.apartmentBlockID == element.apartmentBlockId && obj.apartmentBlockUnitID == element.unitId;

              if (isFound) {
                tempAssignUsers.push(obj);
              }
            });
          });
          this.AssignInterestUsers = [].concat(tempAssignUsers);
        }
      }, {
        key: "removeInterestGroup",
        value: function removeInterestGroup(item) {
          this.AssignInterestUsers = [];
        } //broadCastGroupCategoryId

      }, {
        key: "flashNotice",
        value: function flashNotice(bool) {
          this.isFlashNotice = bool;
        }
      }, {
        key: "categoryChange",
        value: function categoryChange(item) {
          var id = parseInt(item.broadCastMessageCategoryId);
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.allcategory, function (item) {
            if (item.broadCastMessageCategoryId === id) return item;
          });

          if (data === undefined || data === null || data.length == 0) {
            this.message.ckeditor = '';
          } else {
            this.message.ckeditor = data[0].template;
          }
        }
      }, {
        key: "getAllApartmentBlockList",
        value: function getAllApartmentBlockList() {
          var _this21 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.apartmentService.getApartmentBlockByApartmentId(queryParamBase).subscribe(function (res) {
            _this21.apartmentBlock.dropdownList = res;
            var broadCastModeArr = [{
              "name": "General SMS",
              "value": 40
            }, {
              "name": "Whatsapp",
              "value": 41
            }, {
              "name": "Email",
              "value": 42
            }];
            _this21.broadModeArr.dropdownList = broadCastModeArr;
          });
        } //Get All Broadcast Category
        //Get All Broadcast Category

      }, {
        key: "getAllCategory",
        value: function getAllCategory() {
          var _this22 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getBroadCastMessageCategories(queryParamBase).subscribe(function (res) {
            var allBroadCastCategory = res.filter(function (obj) {
              return obj.isActive;
            });
            _this22.allcategory = allBroadCastCategory;
            _this22.broadCastCategory.dropdownList = allBroadCastCategory;
          });
        }
      }, {
        key: "getAllRoleTypesList",
        value: function getAllRoleTypesList() {
          var _this23 = this;

          this.userService.getAllRoleTypes().subscribe(function (res) {
            _this23.roleTypeArr.dropdownList = res;
          });
        }
      }, {
        key: "getAppartmentRole",
        value: function getAppartmentRole(item) {
          var _this24 = this;

          this.roleCategory.selectedItems = [];
          this.staffCategory.selectedItems = [];
          var params = {
            'RoleTypeId': item.value,
            'ApartmentId': this.apartmentID
          };
          this.userService.getApartmentRolesByRoleTypeId(params).subscribe(function (res) {
            _this24.condtionRequired = parseInt(item.value) == 2 || parseInt(item.value) == 4;
            ;
            _this24.roleCategory.dropdownList = res;
            var conditinArr = [{
              "name": "IsLiving",
              "value": 1
            }, {
              "name": "IsPrimaryContact",
              "value": 2
            }];

            if (_this24.condtionRequired) {
              _this24.condition.dropdownList = conditinArr;
            } else {
              _this24.condition.dropdownList = [];
              _this24.condition.selectedItems = [];
            }

            _this24.updateUsers();
          });
        }
      }, {
        key: "updateUsers",
        value: function updateUsers() {
          var _this25 = this;

          //this.tempUsers=[...this.allUsers];
          this.getUserIds$().subscribe(function (res) {
            if (res.length > 0) {
              _this25.users = _this25.allUsers.filter(function (obj) {
                return res.includes(obj.userId);
              });
            } else {
              _this25.users = [];
            }
          });
        }
      }, {
        key: "getAllGroupCategory",
        value: function getAllGroupCategory() {
          var _this26 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getAllBroadCastGroupCategory(queryParamBase).subscribe(function (res) {
            _this26.broadCastGroupCategory.dropdownList = res;
          });
        }
      }, {
        key: "getInterestGroupUsers",
        value: function getInterestGroupUsers() {
          var _this27 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getBroadCastGroupCategoryUser(queryParamBase).subscribe(function (res) {
            _this27.interestGroupUsers = res;
          });
        }
      }, {
        key: "getstaffCategories",
        value: function getstaffCategories(item) {
          var _this28 = this;

          this.isStaff = this.roleTypeArr.selectedItems[0].name.toLowerCase() == "staff";

          if (this.isStaff) {
            if (this.staffCategoryMap.get(item.value) == undefined) {
              var params = {
                'roleId': item.value,
                'apartmentId': this.apartmentID
              };
              this.staffService.getStaffCategoryByRole(params).subscribe(function (res) {
                var temp = _toConsumableArray(_this28.staffCategory.dropdownList);

                res.forEach(function (element) {
                  element.category = item.name;
                  temp.push(element);
                });

                _this28.staffCategoryMap.set(item.value, res);

                _this28.staffCategory.dropdownList = temp;

                _this28.updateUsers();
              });
            } else {
              var temp = _toConsumableArray(this.staffCategory.dropdownList);

              var addStaffCategory = this.staffCategoryMap.get(item.value);
              addStaffCategory.forEach(function (element) {
                temp.push(element);
              });
              this.staffCategory.dropdownList = temp;
            }
          }

          this.updateUsers();
        }
      }, {
        key: "getAllStaffCategories",
        value: function getAllStaffCategories(items) {
          var _this29 = this;

          items.forEach(function (element) {
            _this29.getstaffCategories(element);
          });
        }
      }, {
        key: "removeAllStaffCategories",
        value: function removeAllStaffCategories(items) {
          this.roleCategory.selectedItems = [];
          this.staffCategory.dropdownList = [];
          this.staffCategory.selectedItems = [];
          this.updateUsers();
        }
      }, {
        key: "removeStaffCategories",
        value: function removeStaffCategories(item) {
          var _this30 = this;

          if (this.roleTypeArr.selectedItems[0].name.toLowerCase() == "staff") {
            var removeStaffCategory = this.staffCategoryMap.get(item.value);
            removeStaffCategory.forEach(function (element) {
              _this30.staffCategory.dropdownList = _this30.staffCategory.dropdownList.filter(function (obj) {
                return obj.value !== element.value;
              });
            });
          }

          this.updateUsers();
        }
      }, {
        key: "removeSubStaffCategories",
        value: function removeSubStaffCategories(item) {
          var _this31 = this;

          var removeSubStaffCategory = this.staffSubCategoryMap.get(item.value);
          removeSubStaffCategory.forEach(function (element) {
            _this31.staffSubCategory.dropdownList = _this31.staffSubCategory.dropdownList.filter(function (obj) {
              return obj.value !== element.value;
            });
          });
          this.updateUsers();
        }
      }, {
        key: "getStaffSubCategories",
        value: function getStaffSubCategories(item) {
          var _this32 = this;

          if (this.staffSubCategoryMap.get(item.value) == undefined) {
            var params = {
              'categoryId': item.value,
              'apartmentId': this.apartmentID
            };
            this.staffService.getSubStaffCategoryByCategory(params).subscribe(function (res) {
              var temp = _toConsumableArray(_this32.staffSubCategory.dropdownList);

              res.forEach(function (element) {
                element.category = item.name;
                temp.push(element);
              });

              _this32.staffSubCategoryMap.set(item.value, res);

              _this32.staffSubCategory.dropdownList = temp;

              _this32.updateUsers();
            });
          } else {
            var addSubStaffCategory = this.staffSubCategoryMap.get(item.value);

            var temp = _toConsumableArray(this.staffSubCategory.dropdownList);

            addSubStaffCategory.forEach(function (element) {
              temp.push(element);
            });
            this.staffSubCategory.dropdownList = temp;
            this.updateUsers();
          }
        }
      }, {
        key: "getAllSubStaffCategories",
        value: function getAllSubStaffCategories(items) {
          var _this33 = this;

          items.forEach(function (element) {
            _this33.getStaffSubCategories(element);
          });
        }
      }, {
        key: "removeRole",
        value: function removeRole(item) {
          this.roleCategory.dropdownList = [];
          this.condition.dropdownList = [];
          this.condition.selectedItems = [];
          this.removeAllStaffCategories([]);
          this.removeAllSubStaffCategories([]);
        }
      }, {
        key: "removeAllSubStaffCategories",
        value: function removeAllSubStaffCategories(items) {
          this.staffSubCategory.dropdownList = [];
          this.staffCategory.selectedItems = [];
          this.updateUsers();
        }
      }, {
        key: "removeGroupSubStaffCategories",
        value: function removeGroupSubStaffCategories(items) {
          var _this34 = this;

          items.list.forEach(function (element) {
            _this34.removeSubStaffCategories(element);
          });
          this.updateUsers();
        }
      }, {
        key: "getGroupSubStaffCategories",
        value: function getGroupSubStaffCategories(items) {
          var _this35 = this;

          items.list.forEach(function (element) {
            _this35.getStaffSubCategories(element);
          });
          this.updateUsers();
        }
      }, {
        key: "getUserIds$",
        value: function getUserIds$() {
          var roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) {
            return item.apartmentBlockId;
          }).join(",");
          var conditionIds = Array.prototype.map.call(this.condition.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var staffcategoryIds = Array.prototype.map.call(this.staffCategory.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var staffSubCategoryIds = Array.prototype.map.call(this.staffSubCategory.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var params = {
            'roleIds': roleIds,
            'conditionIds': conditionIds,
            'appartmentbBlockIds': blockIds,
            'apartmentId': this.apartmentID,
            'staffcategoryIds': staffcategoryIds,
            'staffSubCategoryIds': staffSubCategoryIds
          };
          return this.userService.getUsersByFilter(params);
        } //Submit Category

      }, {
        key: "submitCreateBroadcastMessageForm",
        value: function submitCreateBroadcastMessageForm(form) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this36 = this;

            var broadCastGroupCategoryIDs, broadcastModeIds, broadcastMessage, params, roleIds, blockIds, conditionIds, staffcategoryIds, staffSubCategoryIds, roleTypeIds, _params, params2;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    broadCastGroupCategoryIDs = Array.prototype.map.call(this.broadCastGroupCategory.selectedItems, function (item) {
                      return item.broadCastGroupCategoryId;
                    }).join(",");
                    broadcastModeIds = Array.prototype.map.call(this.broadModeArr.selectedItems, function (item) {
                      return item.value;
                    }).join(",");
                    broadcastMessage = {
                      "broadCastMessageId": 0,
                      "apartmentId": this.apartmentID,
                      "subject": this.message.subject,
                      "broadcastMessage1": this.message.ckeditor,
                      "broadcastBy": this.loginedUser,
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
                      "insertedBy": this.loginedUser,
                      "insertedOn": new Date().toISOString(),
                      "updatedBy": null,
                      "updatedOn": null,
                      "serialNo": 0,
                      "description": "",
                      "filterId": null
                    };

                    if (this.selectedTab == 'interest') {
                      broadcastMessage.broadCastGroupcategoryId = parseInt(broadCastGroupCategoryIDs);
                      broadcastMessage.broadcastMessageCategoryId = null;
                      broadcastMessage.userIds = Array.prototype.map.call(this.AssignInterestUsers, function (item) {
                        return item.userId;
                      }).join(",");

                      if (broadcastMessage.userIds.length == 0) {
                        this.modalService.showErrorModal("No such Users exists to broadcast message.");
                      } else {
                        params = {
                          "sourceBroadCastMessage_model": broadcastMessage
                        };
                        this.broadcastService.addBroadCastMessage(params).subscribe(function (res) {
                          if (res.message) {
                            _this36.sharedService.setAlertMessage("Broadcast Message sent successfully");

                            _this36.ClearFormData();
                          }
                        });
                      }
                    }

                    if (this.selectedTab == 'role') {
                      broadcastMessage.userIds = Array.prototype.map.call(this.users, function (item) {
                        return item.userId;
                      }).join(",");
                      broadcastMessage.broadcastMessageCategoryId = this.broadCastCategory.selectedItems[0].broadCastMessageCategoryId;
                      broadcastMessage.broadCastGroupcategoryId = null;
                      roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) {
                        return item.apartmentBlockId;
                      }).join(",");
                      conditionIds = Array.prototype.map.call(this.condition.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      staffcategoryIds = Array.prototype.map.call(this.staffCategory.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      staffSubCategoryIds = Array.prototype.map.call(this.staffSubCategory.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      roleTypeIds = Array.prototype.map.call(this.roleTypeArr.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      _params = {
                        'filterId': 0,
                        'roleIds': roleIds,
                        'conditions': conditionIds,
                        'appartmentbBlockIds': blockIds,
                        'apartmentId': this.apartmentID,
                        'staffCategoryIds': staffcategoryIds,
                        'subStaffCategoryIds': staffSubCategoryIds,
                        "insertedBy": this.loginedUser,
                        "insertedOn": new Date().toISOString(),
                        "updatedBy": null,
                        "updatedOn": null,
                        'isActive': true,
                        'roleTypeId': roleTypeIds
                      };
                      params2 = {
                        "broadCastFilters_model": _params
                      };
                      this.broadcastService.upsertBroadCastFilters(params2).subscribe(function (res) {
                        broadcastMessage.filterId = parseInt(res.message);

                        if (broadcastMessage.userIds.length == 0) {
                          _this36.modalService.showErrorModal("No such Users exists to broadcast message.");
                        } else {
                          var _params2 = {
                            "sourceBroadCastMessage_model": broadcastMessage
                          };

                          _this36.broadcastService.addBroadCastMessage(_params2).subscribe(function (res) {
                            if (res.message) {
                              _this36.sharedService.setAlertMessage("Broadcast Message sent successfully");

                              _this36.ClearFormData();
                            }
                          });
                        }
                      }); // .subscribe((res)=>{
                      //       broadcastMessage.filterId=parseInt(res);
                      //                   }).toPromise();
                    }

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ClearFormData",
        value: function ClearFormData() {
          this.message = {};
          this.roleTypeArr.selectedItems = [];
          this.broadCastCategory.selectedItems = [];
          this.apartmentBlock.selectedItems = [];
          this.broadModeArr.selectedItems = [];
          this.broadCastGroupCategory.selectedItems = [];
          this.removeRole([]);

          if (this.selectedTab == 'role') {
            this.users = _toConsumableArray(this.allUsers);
          }

          if (this.selectedTab == 'interest') {
            this.AssignInterestUsers = [];
          }
        }
      }]);

      return BroadcastSendmessageComponent;
    }();

    BroadcastSendmessageComponent.ctorParameters = function () {
      return [{
        type: _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__["StaffService"]
      }, {
        type: _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    BroadcastSendmessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-broadcast-sendmessage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./broadcast-sendmessage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./broadcast-sendmessage.component.scss */
      "./src/app/ams/broadcast/components/broadcast-sendmessage/broadcast-sendmessage.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"], _api_controllers_Staff__WEBPACK_IMPORTED_MODULE_8__["StaffService"], _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], BroadcastSendmessageComponent);
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastSetupBroadcastSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".broadcast-setup-wrapper form input:required.ng-dirty.ng-invalid {\n  border: 1px solid #cccccc !important;\n}\n.broadcast-setup-wrapper .remainder {\n  color: rgba(255, 0, 0, 0.8);\n  font-size: 10px;\n  padding: 5px 0px 0px 0px;\n}\n.broadcast-setup-wrapper .mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0LXNldHVwL2Jyb2FkY2FzdC1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Jyb2FkY2FzdC9jb21wb25lbnRzL2Jyb2FkY2FzdC1zZXR1cC9icm9hZGNhc3Qtc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQ0FBQTtBQ0FKO0FERUE7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0FGO0FER0E7RUFDQSxVQUFBO0VBQ0UsZUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Jyb2FkY2FzdC9jb21wb25lbnRzL2Jyb2FkY2FzdC1zZXR1cC9icm9hZGNhc3Qtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJvYWRjYXN0LXNldHVwLXdyYXBwZXJ7XG4gIGZvcm0gaW5wdXQ6cmVxdWlyZWQubmctZGlydHkubmctaW52YWxpZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYyAhaW1wb3J0YW50O1xufVxuLnJlbWFpbmRlcntcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAwcHggMHB4IDBweDtcbiAgXG59XG4ubWFuZGF0b3J5e1xuY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxufSIsIi5icm9hZGNhc3Qtc2V0dXAtd3JhcHBlciBmb3JtIGlucHV0OnJlcXVpcmVkLm5nLWRpcnR5Lm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjICFpbXBvcnRhbnQ7XG59XG4uYnJvYWRjYXN0LXNldHVwLXdyYXBwZXIgLnJlbWFpbmRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XG59XG4uYnJvYWRjYXN0LXNldHVwLXdyYXBwZXIgLm1hbmRhdG9yeSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: BroadcastSetupComponent */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastSetupBroadcastSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastSetupComponent", function () {
      return BroadcastSetupComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
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

    var BroadcastSetupComponent =
    /*#__PURE__*/
    function () {
      function BroadcastSetupComponent(injector, dialog, broadcastService, sharedService, cookieService) {
        _classCallCheck(this, BroadcastSetupComponent);

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

      _createClass(BroadcastSetupComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
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
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.loginUserId = parseInt(this.cookieService.get('userId'));
          this.apartmentId = parseInt(this.cookieService.get('apartmentId'));
          this.category = {};
          this.getAllCategory(); // delete category

          this.sharedService.unitlistdeleteindexcast.subscribe(function (index) {
            if (index != null) {
              var params = {
                broadcastId: index,
                deleteBy: _this37.loginUserId
              };
              _this37.isDataLoaded = false;

              _this37.broadcastService.deleteBroadCastMessageCategory(params).subscribe(function (res) {
                _this37.getAllCategory();
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(index) {
          this.modalService.showConfirmModal(index);
        } //Update Data

      }, {
        key: "updateData",
        value: function updateData(data) {
          this.category = data;
          this.isEdit = true;
        } //Get Category Type

      }, {
        key: "getAllCategory",
        value: function getAllCategory() {
          var _this38 = this;

          var queryParamBase = {
            apartmentId: this.apartmentId
          };
          this.broadcastService.getBroadCastMessageCategories(queryParamBase).subscribe(function (res) {
            var allBroadcastCategory = res; //filter active true items

            _this38.allBroadcastCategory = allBroadcastCategory.filter(function (data) {
              data.template = data.template.replace(/<[^>]*>/g, '');
              return data.isActive;
            });
            _this38.isDataLoaded = true;
            _this38.totalItems = _this38.allBroadcastCategory.length;

            if (_this38.totalItems > _this38.itemLimit) {
              _this38.ItemEndIndex = _this38.itemLimit;
            } else {
              _this38.ItemEndIndex = _this38.totalItems;
            }
          });
        } //Cancel

      }, {
        key: "Cancel",
        value: function Cancel() {
          this.category = {};
          this.isEdit = false;
        } //Insert/Update Category

      }, {
        key: "UpsertBroadcastMessageCategory",
        value: function UpsertBroadcastMessageCategory(form) {
          var _this39 = this;

          var broadcastCategory = {
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

          var params = {
            'broadCastMessageCategory': broadcastCategory
          };
          this.broadcastService.upsertBroadCastMessageCategory(params).subscribe(function (res) {
            if (res.message) {
              if (_this39.isEdit) {
                _this39.sharedService.setAlertMessage("Broadcast category updated successfully");
              } else {
                _this39.sharedService.setAlertMessage("Broadcast category added successfully");
              }

              _this39.getAllCategory();

              _this39.category = {};
              _this39.isEdit = false;
            }
          });
        }
      }]);

      return BroadcastSetupComponent;
    }();

    BroadcastSetupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    BroadcastSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-broadcast-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./broadcast-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./broadcast-setup.component.scss */
      "./src/app/ams/broadcast/components/broadcast-setup/broadcast-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], BroadcastSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastgroupSetupBroadcastgroupSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".broadcastgroup-setup-wrapper .remainder {\n  color: rgba(255, 0, 0, 0.8);\n  font-size: 10px;\n  padding: 5px 0px 0px 0px;\n}\n.broadcastgroup-setup-wrapper .mandatory {\n  color: red;\n  font-size: 16px;\n}\n.broadcastgroup-setup-wrapper #typeCollapseOne li {\n  background-color: white !important;\n}\n.broadcastgroup-setup-wrapper angular2-multiselect {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem !important;\n}\n.broadcastgroup-setup-wrapper form input:required.ng-dirty.ng-invalid {\n  border: 1px solid #cccccc !important;\n}\n.broadcastgroup-setup-wrapper textarea.form-control {\n  font-size: 1.6rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0Z3JvdXAtc2V0dXAvYnJvYWRjYXN0Z3JvdXAtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9icm9hZGNhc3QvY29tcG9uZW50cy9icm9hZGNhc3Rncm91cC1zZXR1cC9icm9hZGNhc3Rncm91cC1zZXR1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDRko7QURLQTtFQUNFLFVBQUE7RUFDRSxlQUFBO0FDSEo7QURLRztFQUNLLGtDQUFBO0FDSFI7QURLSTtFRTZDRiwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VGL0NRLDRCQUFBO0FDQ1Y7QURFTTtFQUNFLG9DQUFBO0FDQVI7QURFSTtFQUNFLDRCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9hbXMvYnJvYWRjYXN0L2NvbXBvbmVudHMvYnJvYWRjYXN0Z3JvdXAtc2V0dXAvYnJvYWRjYXN0Z3JvdXAtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc2Nzcy9mb250cy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuLmJyb2FkY2FzdGdyb3VwLXNldHVwLXdyYXBwZXJ7XG4gIC5yZW1haW5kZXJ7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XG4gICAgXG59XG4ubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbiAgICN0eXBlQ29sbGFwc2VPbmUgbGl7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGUhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIGFuZ3VsYXIyLW11bHRpc2VsZWN0e1xuICAgICAgICBAaW5jbHVkZSAgZGVzcC1yZWd1bGFyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgICB9XG4gICAgICBmb3JtIGlucHV0OnJlcXVpcmVkLm5nLWRpcnR5Lm5nLWludmFsaWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gICAgICBmb250LXNpemU6IDEuNnJlbSFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuIiwiLmJyb2FkY2FzdGdyb3VwLXNldHVwLXdyYXBwZXIgLnJlbWFpbmRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XG59XG4uYnJvYWRjYXN0Z3JvdXAtc2V0dXAtd3JhcHBlciAubWFuZGF0b3J5IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmJyb2FkY2FzdGdyb3VwLXNldHVwLXdyYXBwZXIgI3R5cGVDb2xsYXBzZU9uZSBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uYnJvYWRjYXN0Z3JvdXAtc2V0dXAtd3JhcHBlciBhbmd1bGFyMi1tdWx0aXNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbn1cbi5icm9hZGNhc3Rncm91cC1zZXR1cC13cmFwcGVyIGZvcm0gaW5wdXQ6cmVxdWlyZWQubmctZGlydHkubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2MgIWltcG9ydGFudDtcbn1cbi5icm9hZGNhc3Rncm91cC1zZXR1cC13cmFwcGVyIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtICFpbXBvcnRhbnQ7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: BroadcastgroupSetupComponent */

  /***/
  function srcAppAmsBroadcastComponentsBroadcastgroupSetupBroadcastgroupSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastgroupSetupComponent", function () {
      return BroadcastgroupSetupComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _api_controllers_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../api/controllers/User */
    "./src/app/api/controllers/User.ts");

    var BroadcastgroupSetupComponent =
    /*#__PURE__*/
    function () {
      function BroadcastgroupSetupComponent(injector, dialog, broadcastService, sharedService, cookieService, userService, apartmentService) {
        _classCallCheck(this, BroadcastgroupSetupComponent);

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
        this.itemLimit = 10;
        this.privilageCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.isEdit = false;
        this.errorMessage = "";
        this.isError = false;
        this.dropdownSettings = {};
        this.string = "";
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(BroadcastgroupSetupComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
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
        key: "onContentChanged",
        value: function onContentChanged(event) {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          this.groupCategory = {};
          this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
          this.userId = parseInt(this.cookieService.get('userId')); //this.getParentCategoryList();

          this.getAllGroupCategory();
          this.getAllApartmentBlockList();
          this.getAllRoleTypesList();
          this.dropdownSettings = {
            singleSelection: true,
            labelKey: 'name',
            primaryKey: 'value',
            enableFilterSelectAll: false,
            autoPosition: false
          }; ///delete category

          this.sharedService.unitlistdeleteindexcast.subscribe(function (index) {
            if (index != null) {
              var params = {
                broadCastGroupCategoryId: index,
                deleteBy: _this40.userId
              };
              _this40.isDataLoaded = false;

              _this40.broadcastService.deleteBroadCastGroupCategory(params).subscribe(function (res) {
                _this40.getAllGroupCategory();
              }, function (error) {
                console.log(error);
              });
            }
          });
          this.privilageCategory.dropdownList = [{
            "name": "All",
            "value": 1
          }, {
            "name": "Admin",
            "value": 2
          }];
        }
      }, {
        key: "getAllRoleTypesList",
        value: function getAllRoleTypesList() {
          var _this41 = this;

          this.userService.getAllRoleTypes().subscribe(function (res) {
            _this41.allRoleTypesList = res;
          });
        }
      }, {
        key: "getAllApartmentBlockList",
        value: function getAllApartmentBlockList() {
          var _this42 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.apartmentService.getApartmentBlockByApartmentId(queryParamBase).subscribe(function (res) {
            _this42.allApartmentBlockList = res;
          });
        }
      }, {
        key: "getAppartmentRole",
        value: function getAppartmentRole() {
          var _this43 = this;

          var params = {
            'RoleTypeId': this.roleType,
            'ApartmentId': this.apartmentID
          };
          this.userService.getApartmentRolesByRoleTypeId(params).subscribe(function (res) {
            _this43.allApartmentRolesList = res;
          });
        }
      }, {
        key: "getParent",
        value: function getParent(parentId) {}
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(index) {
          this.modalService.showConfirmModal(index);
        } //Update Data

      }, {
        key: "updateData",
        value: function updateData(data) {
          var privilegeArr = data.privilege.split(',');
          this.privilageCategory.selectedItems = this.privilageCategory.dropdownList.filter(function (obj) {
            return privilegeArr.includes(obj.name);
          });
          this.groupCategory = data;
          this.isEdit = true;
        } //Get Category Type

      }, {
        key: "getAllGroupCategory",
        value: function getAllGroupCategory() {
          var _this44 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getAllBroadCastGroupCategory(queryParamBase).subscribe(function (res) {
            var allBroadcastGroupCategory = res; //filter active true items

            _this44.allBroadcastGroupCategory = allBroadcastGroupCategory.filter(function (data) {
              return data.isActive;
            });
            _this44.isDataLoaded = true;
            _this44.totalItems = _this44.allBroadcastGroupCategory.length;

            if (_this44.totalItems > _this44.itemLimit) {
              _this44.ItemEndIndex = _this44.itemLimit;
            } else {
              _this44.ItemEndIndex = _this44.totalItems;
            }
          });
        } //Submit Category

      }, {
        key: "submitcreateBroadcastGroupCategoryForm",
        value: function submitcreateBroadcastGroupCategoryForm(form) {
          var _this45 = this;

          var privileges = Array.prototype.map.call(this.privilageCategory.selectedItems, function (item) {
            return item.name;
          }).join(",");
          var broadcastGroupCategory = {
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

          var params = {
            'broadcast': broadcastGroupCategory
          };
          this.broadcastService.addBroadCastGroupCategory(params).subscribe(function (res) {
            if (res.message) {
              if (_this45.isEdit) {
                _this45.sharedService.setAlertMessage("Broadcast category updated successfully");
              } else {
                _this45.sharedService.setAlertMessage("Broadcast Group category added successfully");
              }

              _this45.getAllGroupCategory();

              _this45.groupCategory = {};
              _this45.privilageCategory.selectedItems = [];
            }
          });
        } //Cancel

      }, {
        key: "Cancel",
        value: function Cancel() {
          this.groupCategory = {};
          this.isEdit = false;
          this.privilageCategory.selectedItems = [];
        }
      }]);

      return BroadcastgroupSetupComponent;
    }();

    BroadcastgroupSetupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }, {
        type: _api_controllers_User__WEBPACK_IMPORTED_MODULE_8__["UserService"]
      }, {
        type: _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }];
    };

    BroadcastgroupSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-broadcastgroup-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./broadcastgroup-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./broadcastgroup-setup.component.scss */
      "./src/app/ams/broadcast/components/broadcastgroup-setup/broadcastgroup-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"], _api_controllers_User__WEBPACK_IMPORTED_MODULE_8__["UserService"], _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]])], BroadcastgroupSetupComponent);
    /***/
  }
}]);
//# sourceMappingURL=broadcast-broadcast-module-es5.js.map