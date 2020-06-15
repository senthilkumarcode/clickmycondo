(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~my-profile-my-profile-module~unit-users-unit-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/unapproved/unapproved.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/unapproved/unapproved.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"unapproved-wrapper\">\n\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\t\n\t<!-- <div class=\"customize-email\" *ngIf=\"isUserDataLoaded\">\n\t\t<p>You can send customized form to users for approving and onboarding the users in clickmycondo application</p>\n\t\t <a class=\"btn lime-green\">\n\t\t\t<span>Customize Approval Email</span>\n\t\t</a> \n\t</div>  -->\n\n\t<div class=\"card ov card-table\" *ngIf=\"isUserDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Unapproved Users <span class=\"badge blue\">{{totalUserItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit, View and approve documents</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" \n\t\t\t\t\t[(ngModel)]=\"unitData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/unit&users/add-users\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add User</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body ov p-0\">\n\t\t\t\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"unitListData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\t\t\t<!-- <table  class=\"table table-resizable table-checker\" cellpadding=\"0\" cellspacing=\"0\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" class=\"select\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"selectAllUnapprovedUser\" \n\t\t\t\t\t\t\t    name=\"selectAllUnapprovedUser\" \n\t\t\t\t\t\t\t    [(ngModel)]=\"selectAllUnapprovedUser\"\n                            \t(ngModelChange)=\"getAllUnapprovedUser()\" >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"selectAllUnapprovedUser\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tName \n\t\t\t\t      \t<span (click)=\"sortUnitData('name')\" [ngClass]=\"getFieldOrderBy('name')\"></span>\n\t\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['name']\" (ngModelChange)=\"selectColInput('name')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tPhone <span (click)=\"sortUnitData('phone')\" [ngClass]=\"getFieldOrderBy('phone')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"columnField['phone']\" (ngModelChange)=\"selectColInput('phone')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tEmail <span  (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tBlock No <span  (click)=\"sortUnitData('apartmentBlockNumber')\" [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Block No\" [(ngModel)]=\"columnField['apartmentBlockNumber']\" (ngModelChange)=\"selectColInput('apartmentBlockNumber')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Unit No <span  (click)=\"sortUnitData('apartmentBlockUnitNumber')\" [ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Unit No\" [(ngModel)]=\"columnField['apartmentBlockUnitNumber']\" (ngModelChange)=\"selectColInput('apartmentBlockUnitNumber')\">\n\t\t\t\t\t  </th>\n\t\t\t\t\t  <th scope=\"col\">Requested On \n\t\t\t\t\t\t<span (click)=\"sortUnitData('insertedOn')\" [ngClass]=\"getFieldOrderBy('insertedOn')\"></span>\n\t\t\t\t\t\t<app-simple-date-box \n\t\t\t\t\t\t  [dateModel]=\"insertedOn\"\n\t\t\t\t\t\t  (inputChange) = \"onDateChange($event, 'insertedOn')\"\n\t\t\t\t\t\t  ></app-simple-date-box>\n\t\t\t\t\t</th>\n\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t  </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let unit of unitListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | columnSearch: columnField:selectedInput | simpleSearch: unitData ; let i = index\" \n\t\t\t\t    [ngClass]=\"[ unit.checked ? 'selected' : '', unit.active ? '' : 'notactive' ]\">\n\t\t\t\t      <td class=\"select w-50\">\n\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t    id=\"{{unit.id}}\" \n\t                            name=\"{{unit.id}}\"\n\t                            [(ngModel)]=\"unit.checked\"\n\t                            (ngModelChange)=\"getSelectedUnapprovedUser(unit)\"\n\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{unit.id}}\"></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t      \t</div>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t      \t{{unit.name}}</a>\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h6>Status/Notes</h6>\n\t\t\t\t\t\t    \t\t\t<p>{{getNotes(unit.apartmentBlockUnit)}}</p>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h6>Owner/Tenant</h6>\n\t\t\t\t\t\t    \t\t\t<p>{{getUserRole(unit.userRole, i)}}</p>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t  \t  </td>\n\t\t\t\t      <td class=\"grey\">{{unit.phone}}</td>\n\t\t\t\t      <td class=\"grey\">{{unit.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockNo(unit, unit.apartmentBlockUnit[0].apartmentBlockNumber)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockUnitNo(unit, unit.apartmentBlockUnit[0].apartmentBlockUnitNumber)}}</td>\n\t\t\t\t\t  <td class=\"grey\">{{getBookedDate(i, unit.insertedOn)}}</td> \n\t\t\t\t\t <td><i class=\"fa fa-file\" aria-hidden=\"true\" [ngStyle]=\"{'color': getColor(unit.isdocsubmitted)}\" style=\"border: 1;\"></i></td> \n\t\t\t\t\t  <td class=\"simple-actions\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"viewUserInfo(unit.id)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"editUserInfo(unit)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"  (click)=\"showConfirmModal(unit.id)\"><i-feather class=\"icon del\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table> -->\n\t\t\t<div class=\"button-wrapper\">\n\t\t\t\t<a class=\"btn lime-green sf\"\n    \t\t\t\t(click)=\"approveUsers()\"\n\t\t\t\t\t[ngClass]=\"!isUserSelected ? 'disabled' : ''\">\n\t\t\t\t\t<span>Approve Selected Users</span>\n    \t\t\t</a>\n    \t\t\t<a class=\"btn trans-white sf \"\n    \t\t\t\trouterLink=\"addunit\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"\n\t\t\t\t\t[ngClass]=\"!isUserSelected ? 'disabled' : ''\">\n\t\t\t\t\t<span>Re-send verification link</span>\n    \t\t\t</a>\n    \t\t\t<p>Once approved the user will be informed automatically</p>\n\t\t\t</div>\n\t\t\t<!-- <app-pagination \n\t\t\t\t[totalItems]=\"totalUserItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemUserStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemUserEndIndex\"\n\t\t\t\t[itemLimit] = \"itemUserLimit\"\n\t\t\t\t(outputParams) = \"getUserIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\n\t\t</div>\n\t</div>\n\n\t<!-- user Profile -->\n\t<div class=\"user-info-card\" *ngIf=\"isProfile\">\n\t\t<app-my-profile type=\"admin\" [isProfile]=\"isProfile\" [userId]=\"viewUserId\" (outputParams)=\"getParams($event)\"></app-my-profile>\n\t</div>\n\n\t<div class=\"card mt-30\">\n\t\t<!-- <div class=\"card-header pointer\" (click)=\"showLogs()\" [ngClass]=\"isLogs ? '' : 'no-border'\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5 class=\"p-0\">Logs</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right switch\" [ngClass]=\"isLogs ? 'up' : 'down'\">\n    \t\t\t<a href=\"javascript:void(0)\"></a>\n    \t\t</div>\n  \t\t</div> -->\n  \t\t<div class=\"card-body p-0\" *ngIf=\"isLogs\">\n  \t\t\t\n  \t\t\t<app-loader *ngIf=\"!isLogsDataLoaded\"></app-loader>\n\n  \t\t\t<ng-container *ngIf=\"isLogsDataLoaded\">\n\n\t  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockno')\">Date <span [ngClass]=\"getFieldOrderBy('blockno')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitno')\">By <span [ngClass]=\"getFieldOrderBy('unitno')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('sqrt')\">Comment <span [ngClass]=\"getFieldOrderBy('sqrt')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('intercom')\">Before <span [ngClass]=\"getFieldOrderBy('intercom')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('intercom')\">After <span [ngClass]=\"getFieldOrderBy('intercom')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let log of logsData | slice:ItemLogStartIndex:ItemLogEndIndex\">\n\t\t\t\t\t      <td class=\"name\"><a href=\"javascript:void(0)\">{{log.date}}</a></td>\n\t\t\t\t\t      <td class=\"grey\">{{log.by}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{log.comment}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{log.before}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{log.after}}</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalLogItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemLogStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemLogEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLogLimit\"\n\t\t\t\t\t(outputParams) = \"getLogIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n\t\t\t</ng-container>\n\n  \t\t</div>\n\t</div>\n\n\n\t<!-- <div class=\"card mt-30\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Mass Upload</h5>\n    \t\t\t<p>To create Residents accounts in mass, Download this<a href=\"javascript:void(0)\" class=\"tc-blue ml-2 t-decor\">Excel Template</a>\n    \t\t\t</p>\n    \t\t</div>\n    \t\t\n  \t\t</div>\n  \t\t<div class=\"card-body\">\n  \t\t\t<a class=\"btn sf lime-green\">\n\t\t\t\t<span>Upload Document</span>\n\t\t\t</a>\n\t\t\t<p class=\"info\">If you have any trouble in uploading document, Please raise a\n\t\t\t<a href=\"javascript:void(0)\" class=\"tc-red ml-2 t-decor\">support ticket</a></p>\n  \t\t</div>\n  \t</div> -->\n\n\n  \t<ng-template #viewUnapprovedUserRef let-user>\n    \t<div class=\"user-info info-modal-box rel\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>User Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <div class=\"icon mr-4\"><img src=\"assets/images/user-icon.svg\" width=\"36\" /></div>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t    <h5 class=\"mt-0\">{{user.firstName}} {{user.lastName}}</h5>\n\t\t\t\t\t    <p class=\"grey\">{{user.roleName}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">User ID</h6>\n\t\t\t\t\t\t\t<p>{{user.userId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Email</h6>\n\t\t\t\t\t\t\t<p>{{user.emailId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Block No</h6>\n\t\t\t\t\t\t\t<p>{{user.blockNo}} {{user.unitNo}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Phone No</h6>\n\t\t\t\t\t\t\t<p>{{user.phoneNumber}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Blood Group</h6>\n\t\t\t\t\t\t\t<p>{{user.bloodGroup}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Address</h6>\n\t\t\t\t\t\t\t<p>{{user.address1}} {{user.address2}} {{user.zipCode}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\t</ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  emergency-contact works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/my-staffs/my-staffs.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/my-staffs/my-staffs.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  my-staffs works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-basic/profile-basic.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-basic/profile-basic.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-basic wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isUserDataLoaded && !isEdit\">\n\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<ng-container *ngIf=\"isUserDataLoaded && !isEdit\">\n\t\t\n\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>First Name</label>\n\t\t\t                <p>{{user.firstName}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Last Name</label>\n\t\t\t                <p>{{user.lastName}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Phone/Mobile</label>\n\t\t                    <p>{{user.phoneNumber}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Address</label>\n\t\t                    <p>{{user.address1}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Email</label>\n\t\t                    <p>{{user.emailId}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Date Of Birth</label>\n\t\t                    <p>{{getDOB(user.dob)}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t<label>Gender</label>\n\t\t\t\t\t\t\t<p>{{getGender(user.genderId)}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t<label>Blood Group</label>\n\t\t\t\t\t\t<p>{{user.bloodGroup}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-12 border-top\">\n\t\t\t\t\t\t<div class=\"profile-pic-upload input-box\">\n\t\t\t\t\t\t\t<label>Profile Picture</label>\n\t\t\t\t\t\t\t<figure class=\"profile-picture\" *ngIf=\"!isDefaultProfilePic\">\n\t\t\t\t\t\t\t\t<img class=\"svg\" [src] =\"profilePicUrl\" id=\"userProfile\">\n\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"isDefaultProfilePic\">\n\t\t\t\t\t\t\t\t<div class=\"browse-files\" appDragAndDrop (onFileDropped)=\"uploadFile($event)\" *ngIf=\"!isUploadProgess() && !isUploadCompleted()\">\n\t\t\t\t\t\t\t\t\t<input hidden type=\"file\" #fileInput (change)=\"uploadFile($event.target.files)\">\n\t\t\t\t\t\t\t\t\t<div class=\"attachfiles-normal\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"attachfiles-dragSupport\">Drop file here or </span>\n\t\t\t\t\t\t\t\t\t\t<a class=\"attachFiles-link\" href=\"javascript:void(0)\" id=\"attachProfilePic\" (click)=\"fileInput.click()\">Browse<br></a> to add attachment</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"progress\" *ngIf=\"isUploadProgess() && !isUploadCompleted()\">\n\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-striped\" role=\"progressbar\"  [style.width.%]=\"uploadResponse.message\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isUserDataLoaded && isEdit\">\n\t\t\n\t\t<form #profileBasicForm = \"ngForm\" name=\"profileBasicForm\" (ngSubmit)=\"submitProfileBasicForm(profileBasicForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>First Name*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" name=\"firstName\" [(ngModel)]=\"user.firstName\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Last Name*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" name=\"lastName\" [(ngModel)]=\"user.lastName\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Phone/Mobile*</label>\n\t\t\t\t\t\t<input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"number\" class=\"form-control\" placeholder=\"Phoneno\" name=\"phoneNo\" [(ngModel)]=\"user.phoneNumber\">\n\t\t\t\t\t\t<!-- <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"number\"  #phoneNo=\"ngModel\" pattern=\"^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[789]\\d{9}$\" \n\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Phoneno\" name=\"phoneNo\" [(ngModel)]=\"user.phoneNumber\" required [ngClass]=\"isInvalidLogin ? 'error' :''\">\n\t\t\t\t\t\t<span *ngIf=\"phoneNo.errors && phoneNo.dirty\" class = \"error-message\" >Invalid input</span> -->\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Address</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address\" [(ngModel)]=\"user.address1\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Email*</label>\n\t                    <input (blur)=\"IsValidEmail($event.target.value)\" type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"user.emailId\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Date Of Birth</label>\n\t                    <input class=\"form-control\" name=\"userDOB\" [owlDateTime]=\"userDOB\" [owlDateTimeTrigger]=\"userDOB\" placeholder=\"Date of Birth\" [(ngModel)]=\"user.dob\">\n\t\t\t\t\t\t<owl-date-time #userDOB [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"userDOB\">\n\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t</div>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t<label>Gender*</label>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t                        <input name=\"genderType\" id=\"male\" [(ngModel)]=\"genderType\"  value=\"43\" type=\"radio\" required>\n\t                        <label class=\"radio-inline\" for=\"male\">Male</label>\n\t             \t\t</div>\n\t                \t<div class=\"form-group\">\n\t                        <input name=\"genderType\" id=\"female\" [(ngModel)]=\"genderType\" value=\"44\" type=\"radio\" required>\n\t                        <label class=\"radio-inline\" for=\"female\">Female</label>\n\t                     </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Blood Group</label>\n\t                   <select \n\t\t\t\t\t        name=\"bloodGroup\" \n\t\t\t\t\t        id=\"bloodGroup\" \n\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t        [(ngModel)]=\"user.bloodGroup\">\n\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t        <option *ngFor=\"let item of bloodGroupData\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t    </select>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\" *ngIf=\"!isStaffSubmitted\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"profileBasicForm.invalid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"family-members-details-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\t\t\n\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"!isEdit && !isFamilyNew\">\n\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit && !isFamilyNew\">\n\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<div class=\"icon-wrapper red float-right\" *ngIf=\"!isEdit && !isFamilyNew\">\n\t\t\t<i-feather class=\"icon delete\" name=\"trash\" (click)=\"deleteMember()\"></i-feather>\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<ng-container *ngIf=\"!isEdit && !isFamilyNew\">\n\t\t\n\t\t<form #profileFamilyForm = \"ngForm\" name=\"profileFamilyForm\"  novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>First Name {{userId}}</label>\n\t\t\t                <p>{{user.firstName | notAvail }}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Middle Name</label>\n\t\t\t                <p>{{user.middleName | notAvail }}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Last Name</label>\n\t\t\t                <p>{{user.lastName | notAvail }}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Relationship</label>\n\t\t                    <p>{{user.relationship | notAvail }}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Phone/Mobile</label>\n\t\t                    <p>{{user.phoneNumber | notAvail }}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Email</label>\n\t\t                    <p>{{user.emailId | notAvail }}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Date Of Birth</label>\n\t\t                    <p>{{getDOB(user.dob) | notAvail }}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t<label>Gender</label>\n\t\t\t\t\t\t<p>{{getGender(user.genderId) | notAvail }}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Blood Group</label>\n\t                   <p>{{user.bloodGroup | notAvail }}</p>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isEdit || isFamilyNew\">\n\t\t\n\t\t<form #profileFamilyForm = \"ngForm\" name=\"profileFamilyForm\" (ngSubmit)=\"submitProfileFamilyForm(profileFamilyForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"data-wrapper\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>First Name*</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"firstName\" [(ngModel)]=\"user.firstName\" required>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Middle Name</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"middleName\" [(ngModel)]=\"user.middleName\">\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Last Name*</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"lastName\" [(ngModel)]=\"user.lastName\" required>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Phone/Mobile*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"phoneNo\" [(ngModel)]=\"user.phoneNumber\">\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Relationship*</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"relationship\" [(ngModel)]=\"user.relationship\" required>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Email</label>\n\t\t                    <input type=\"email\" class=\"form-control\" placeholder=\"Enter value\" name=\"email\" [(ngModel)]=\"user.emailId\">\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Date Of Birth</label>\n\t\t                    <input class=\"form-control\" name=\"userDOB\" [owlDateTime]=\"userDOB\" [owlDateTimeTrigger]=\"userDOB\" placeholder=\"Date\" [(ngModel)]=\"user.dob\">\n\t\t\t\t\t\t\t<owl-date-time #userDOB [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t<label>Gender*</label>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                        <input name=\"genderType\" id=\"male\" [(ngModel)]=\"genderType\"  value=\"43\" type=\"radio\" required>\n\t\t                        <label class=\"radio-inline\" for=\"male\">Male</label>\n\t\t             \t\t</div>\n\t\t                \t<div class=\"form-group\">\n\t\t                        <input name=\"genderType\" id=\"female\" [(ngModel)]=\"genderType\" value=\"44\" type=\"radio\" required>\n\t\t                        <label class=\"radio-inline\" for=\"female\">Female</label>\n\t\t                     </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                   <label>Blood Group</label>\n\t\t                   <select \n\t\t\t\t\t\t        name=\"bloodGroup\" \n\t\t\t\t\t\t        id=\"bloodGroup\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"user.bloodGroup\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of bloodGroupData\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t    </select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"profileFamilyForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t\n\n\t\t</form>\n\n\t</ng-container>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-family-wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isDataLoaded && !isFamilyMembersAvailable()\">\n\t\t\n\t\t<div class=\"card-header at-header red\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n    \t\t\t\t<h6 class=\"mb-2\">No Members added yet</h6>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\t\t\n\t\t<div class=\"accor-special\" id=\"familyAccordion\">\n\n\t\t\t<ng-container *ngIf=\"isFamilyMembersAvailable()\">\n\n\t\t\t\t<div class=\"accor-box\" *ngFor=\"let person of familyDataList; let i = index\">\n\n\t\t\t\t\t<li class=\"accor-lists\" data-toggle=\"collapse\" attr.data-target=\"#familyLevel{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"Level{{i}}\" [ngClass]=\"person.isCollapsed ? '' : 'collapsed'\" (click)=\"person.isCollapsed = !person.isCollapsed\">\n\t\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t\t<h6 class=\"text-capitalize\">{{person.firstName}} {{person.lastName}}</h6>\n\t\t\t\t\t\t\t<div class=\"desp\">\n\t\t\t\t\t\t\t\t<p>Relationship: <span>{{person.relationship}}</span></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<div id=\"familyLevel{{i}}\" class=\"collapse details\" attr.aria-labelledby=\"Level{{i}}\" data-parent=\"#familyAccordion\">\n\t\t\t\t\t\t<app-profile-family-members-details [user]=\"person\" (outputParams)=\"getParams($event)\"></app-profile-family-members-details>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"accor-box\">\n\t\t\t\t\n\t\t\t\t<li class=\"accor-lists add-list collapsed\" data-toggle=\"collapse\" data-target=\"#addfamilyLevel\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h6>Add family Members</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div id=\"addfamilyLevel\" class=\"collapse details\" aria-labelledby=\"collapseOne\" data-parent=\"#familyAccordion\">\n\t\t\t\t\t<app-profile-family-members-details [isFamilyNew]=\"true\" (outputParams)=\"getParams($event)\"></app-profile-family-members-details>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row profile-interest-Group-wrapper profile-section\">\n\n  <div class=\"col-sm-6\">\n    <h5>User previleged</h5>\n\n     <div *ngFor=\"let interestGroup of userInterestGroupCategory\" class=\"form-check mt-3\">\n        <input type=\"checkbox\" [checked]=\"interestGroup.IsAssigned\"  class=\"form-check-input\" [id]=\"interestGroup.groupName\" [name]=\"interestGroup.groupName\" (change)=ChangeInterestGroup(interestGroup)>\n      <label class=\"form-check-label\" [for]=\"interestGroup.groupName\">\n       {{interestGroup.groupName}}</label>\n     </div>\n  </div>\n  <div class=\"col-sm-6\">\n      <h5>Admin previleged</h5>\n      <div class=\"form-check mt-3\" *ngFor=\"let interestGroup of adminInterestGroupCategory\">\n          <input type=\"checkbox\" [checked]=\"interestGroup.IsAssigned\" class=\"form-check-input\" \n          [id]=\"interestGroup.groupName\" [name]=\"interestGroup.groupName\" disabled>\n      <label class=\"form-check-label\" [for]=\"interestGroup.groupName\">\n    {{interestGroup.groupName}}</label>\n       </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>{{title}}</h2>\n<div mat-dialog-content>\n\t<div class=\"card clear\">\n\t\t<div class=\"card-body\">\n\t\t\t<ng-container>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<h6>{{label_1}}</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-\">\n\t\t\t\t\t\t<h6>{{label_2}}</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"h-space\">\n\t\t\t\t<div *ngFor=\"let item of listData\" class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<h6>{{item.startDate}}</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<h6>{{item.expiryDate}}</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t<div class=\"row b-space\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<button  type=\"button\" class=\"btn blue\" (click)=\"close()\">Close</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"create-lease-info-wrapper profile-section\">\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isDataLoaded && !isEdit\">\n\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm('reset')\"></i-feather>\n\t</div>\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\t<ng-container *ngIf=\"isDataLoaded && !isEdit\">\n\n\t\t<form #leaseInfoForm=\"ngForm\" name=\"leaseInfoForm\" novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Start Date</label>\n\t\t\t\t\t\t\t<p>{{rent.startDate}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Expiry Date</label>\n\t\t\t\t\t\t\t<p>{{rent.expiryDate}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Advance Amount</label>\n\t\t\t\t\t\t\t<p>{{rent.advanceAmount}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Rent Amount</label>\n\t\t\t\t\t\t\t<p>{{rent.rentAmount}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Lease Amount</label>\n\t\t\t\t\t\t\t<p>{{rent.leaseAmount}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\n\t</ng-container>\n\n\t<div *ngIf=\"isDataLoaded && isEdit\" class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>\n\t\t\t\t\t<span>Create Rental/Lease Information</span>\n\t\t\t\t</h5>\n\t\t\t</div>\n\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<a class=\"btn lime-green mt_5\" href=\"javascript:void(0)\" (click)=\"showEditForm('back')\">\n\t\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t<ng-container>\n\t\t\t\t<form *ngIf=\"isDataLoaded\" #leaseInfoForm=\"ngForm\" name=\"leaseInfoForm\"\n\t\t\t\t\t(ngSubmit)=\"submitLeaseInfoForm(leaseInfoForm)\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Start Date*</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\"\n\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"startDate\" placeholder=\"Date\" [(ngModel)]=\"rent.startDate\"\n\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t<owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Expiry Date*</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\"\n\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"endDate\" placeholder=\"Date\" [(ngModel)]=\"rent.expiryDate\"\n\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t<owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Advance Amount</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Advance Amount\" name=\"advance\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rent.advanceAmount\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Rent Amount</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Rent Amount\" name=\"rent\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rent.rentAmount\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Lease Amount</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Lease Amount\" name=\"lease\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rent.leaseAmount\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"leaseInfoForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6 a-space\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"t-decor\" (click)=\"showHistory()\">History</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-pet-details-wrapper profile-section\">\n\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"icon-wrapper float-right\" *ngIf=\"!isEdit && !isPetNew\">\n\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit && !isPetNew\">\n\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<div class=\"icon-wrapper red float-right\" *ngIf=\"!isEdit && !isPetNew\">\n\t\t\t<i-feather class=\"icon delete\" name=\"trash\" (click)=\"deletePet()\"></i-feather>\n\t\t</div>\n\n\t\t<ng-container *ngIf=\"!isEdit && !isPetNew\">\n\t\t\t\n\t\t\t<form #profilePetForm = \"ngForm\" name=\"profilePetForm\"  novalidate>\n\n\t\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Pet Type</label>\n\t\t\t\t                <p>{{getPetType(pet.petTypeId)}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Pet DOB</label>\n\t\t\t\t                <p>{{getDate(pet.dob)}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</ng-container>\n\n\n\t\t<ng-container *ngIf=\"isEdit || isPetNew\">\n\t\t\t\n\t\t\t<form #profilePetForm = \"ngForm\" name=\"profilePetForm\" (ngSubmit)=\"submitProfilPetForm(profilePetForm)\"  novalidate>\n\t\t\t\n\t\t\t\t<div class=\"data-wrapper\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Pet Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"petTypeId\" \n\t\t\t\t\t\t\t        id=\"petTypeId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"pet.petTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of petTypeList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Date Of Birth</label>\n\t\t\t                    <input class=\"form-control\" name=\"PetDOB\" [owlDateTime]=\"PetDOB\" [owlDateTimeTrigger]=\"PetDOB\" placeholder=\"Date\" [(ngModel)]=\"pet.dob\">\n\t\t\t\t\t\t\t\t<owl-date-time #PetDOB [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PetDOB\">\n\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"profilePetForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</ng-container>\n\n\t</ng-container>\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet/profile-pet.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet/profile-pet.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-pets-wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t<ng-container *ngIf=\"isUserDataLoaded\">\n\n\t\t<form #profileVehicleForm = \"ngForm\" name=\"profileVehicleForm\" novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Select Unit</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"userUnitId\" (ngModelChange)=\"showUnitDetails(userUnitId)\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of unitListData\" [value]=\"item.apartmentBlockUnitId\">{{ getUnitName(item.apartmentBlockUnitId) }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isUnitSelected && isUserDataLoaded && isPetsNotAvailable()\">\n\t\t\n\t\t<div class=\"card-header at-header red\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n    \t\t\t\t<h6 class=\"mb-2\">No Pet added yet</h6>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\n\t<ng-container *ngIf=\"isUnitSelected && isUserDataLoaded\">\n\t\t\n\t\t<div class=\"accor-special\" id=\"petsAccordion\">\n\n\t\t\t<div class=\"accor-box\" *ngFor=\"let item of petDataList; let i = index\">\n\n\t\t\t\t<li class=\"accor-lists\" data-toggle=\"collapse\" attr.data-target=\"#petsCollapse{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"Collapse{{i}}\" [ngClass]=\"item.isCollapsed ? '' : 'collapsed'\" (click)=\"item.isCollapsed = !item.isCollapsed\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h6>{{getPetType(item.pet.petTypeId)}}</h6>\n\t\t\t\t\t\t<div class=\"desp\">\n\t\t\t\t\t\t\t<p>DOB: <span>{{getDate(item.pet.dob)}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div id=\"petsCollapse{{i}}\" class=\"collapse details\" attr.aria-labelledby=\"Collapse{{i}}\" data-parent=\"#petsAccordion\">\n\t\t\t\t\t<app-profile-pet-details [petData]=\"item\" [apartmentBlockUnitId]=\"userUnitId\" (outputParams)=\"getParams($event)\"></app-profile-pet-details>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"accor-box\">\n\t\t\t\t\n\t\t\t\t<li class=\"accor-lists add-list collapsed\" data-toggle=\"collapse\" data-target=\"#addPetsCollapse\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h6>Add Pet</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div id=\"addPetsCollapse\" class=\"collapse details\" aria-labelledby=\"collapseOne\" data-parent=\"#petsAccordion\">\n\t\t\t\t\t<app-profile-pet-details [isPetNew]=\"true\"  [apartmentBlockUnitId]=\"userUnitId\" (outputParams)=\"getParams($event)\"></app-profile-pet-details>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-unit wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isUserDataLoaded && !isEdit\">\n\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<ng-container *ngIf=\"isUserDataLoaded && !isEdit\">\n\t\t\n\t\t<form #profileUnitForm = \"ngForm\" name=\"profileUnitForm\" novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\t\t\n\t\t\t\t<ng-container>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Unit Name</label>\n\t\t\t\t                <p>{{block.apartmentBlockUnitNumber}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Block Name</label>\n\t\t\t\t                <p>{{block.apartmentBlockNumber}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Unit Type</label>\n\t\t\t\t                <p>{{block.unitType}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Intercom</label>\n\t\t\t                    <p>{{block.intercom}}</p>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Car</label>\n\t\t\t\t                <p>{{block.cars}}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isUserDataLoaded && isEdit\">\n\t\t\n\t\t<form #profileUnitForm = \"ngForm\" name=\"profileUnitForm\" (ngSubmit)=\"submitProfileUnitForm(profileUnitForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"data-wrapper\">\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Block No*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"block.apartmentBlockId\" (ngModelChange)=\"getUnits(block.apartmentBlockId)\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Unit No*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"block.apartmentBlockUnitId\" required [disabled]=\"!isBlockSelected\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Unit Type*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"unitType\" \n\t\t\t\t\t\t        id=\"unitType\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"block.unitType\" (ngModelChange)=\"getUnitType(block.unitType)\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of unitTypeData\" [value]=\"item.lookupValueName\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t    </select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Car (in number)*</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"unitCar\" \n\t\t                    [(ngModel)]=\"block.cars\" required>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Intercom</label>\n\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"advanceAmount\" [(ngModel)]=\"block.intercom\" minlength=\"6\" maxlength=\"10\" required>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\" *ngIf=\"!isStaffSubmitted\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"profileUnitForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  profile-unit-staffs works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-basic wrapper profile-section\">\n  <div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isDataLoaded && !isEdit\">\n    <i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm('reset')\"></i-feather>\n  </div>\n  <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n  <ng-container *ngIf=\"isDataLoaded && !isEdit\">\n\n    <form #absenceForm=\"ngForm\" name=\"leaseInfoForm\" absenceForm>\n\n      <div class=\"data-wrapper\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"input-box\">\n              <label>From Date*</label>\n              <p>{{data.outFrom}}</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"input-box\">\n              <label>To Date*</label>\n              <p>{{data.outTo}}</p>\n            </div>\n          </div>\n\n          <div class=\"col-sm-6\">\n            <div class=\"input-box\">\n              <label>Local Representative Name 1*</label>\n              <p>{{data.localContactP1}}</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"input-box\">\n              <label>Phone/Mobile*</label>\n              <p>{{data.localContactP1phone}}</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"input-box\">\n              <label>Alternate Phone Number</label>\n              <p>{{data.localcontactP1alternatephone}}</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"input-box\">\n              <label>Email*</label>\n              <p>{{data.localcontactP1email}}</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"input-box\">\n              <label>Local Representative Name 2*</label>\n              <p>{{data.localContactP2}}</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"input-box\">\n              <label>Phone/Mobile*</label>\n              <p>{{data.localContactP2phone}}</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"input-box\">\n              <label>Alternate Phone Number</label>\n              <p>{{data.localcontactP2alternatephone}}</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"input-box\">\n              <label>Email*</label>\n              <p>{{data.localcontactP2email}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </ng-container>\n  <div *ngIf=\"isDataLoaded && isEdit\" class=\"card mb-30\">\n    <div class=\"card-header\">\n      <div class=\"float-left\">\n        <h5>\n          <span>I will be out of Condo</span>\n        </h5>\n      </div>\n      <ul class=\"list-inline float-right\">\n        <li class=\"list-inline-item\">\n          <a class=\"btn lime-green mt_5\" href=\"javascript:void(0)\" (click)=\"showEditForm('back')\">\n            <i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-body\">\n      <ng-container>\n        <form #absenceForm=\"ngForm\" name=\"absenceForm\" (ngSubmit)=\"submitAbsenceForm(absenceForm)\" novalidate>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"input-box\">\n                <label>From Date*</label>\n                <input class=\"form-control\" name=\"fromDate\" [owlDateTime]=\"fromDate\" [owlDateTimeTrigger]=\"fromDate\"\n                  placeholder=\"Date Time\" [(ngModel)]=\"data.outFrom\" required>\n                <owl-date-time #fromDate [pickerType]=\"'calendar'\"></owl-date-time>\n                <div class=\"date-btn\" [owlDateTimeTrigger]=\"fromDate\">\n                  <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-box\">\n                <label>To Date*</label>\n                <input class=\"form-control\" name=\"toDate\" [owlDateTime]=\"toDate\" [owlDateTimeTrigger]=\"toDate\"\n                  placeholder=\"Date Time\" [(ngModel)]=\"data.outTo\" required>\n                <owl-date-time #toDate [pickerType]=\"'calendar'\"></owl-date-time>\n                <div class=\"date-btn\" [owlDateTimeTrigger]=\"toDate\">\n                  <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"input-box\">\n                <h6>Please contact my local representative given below</h6>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-box\">\n                <label>Local Representative Name 1*</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"data.localContactP1\"\n                  required>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-box\">\n                <label>Phone/Mobile*</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo\"\n                  [(ngModel)]=\"data.localContactP1phone\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-box\">\n                <label>Alternate Phone Number</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo\"\n                  [(ngModel)]=\"data.localcontactP1alternatephone\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-box\">\n                <label>Email*</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\"\n                  [(ngModel)]=\"data.localcontactP1email\" required>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-box\">\n                <label>Local Representative Name 2*</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"alternateName\"\n                  [(ngModel)]=\"data.localContactP2\" required>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-box\">\n                <label>Phone/Mobile*</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo1\"\n                  [(ngModel)]=\"data.localContactP2phone\" required>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-box\">\n                <label>Alternate Phone Number</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo1\"\n                  [(ngModel)]=\"data.localcontactP2alternatephone\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-box\">\n                <label>Email*</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email1\"\n                  [(ngModel)]=\"data.localcontactP2email\" required>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"text-center mt-5\">\n                <button class=\"btn lime-green\" [disabled]=\"absenceForm.invalid\">Submit</button>\n              </div>\n            </div>\n            <div class=\"col-sm-6 a-space\">\n              <a href=\"javascript:void(0)\" class=\"t-decor\" (click)=\"showHistory()\">History</a>\n            </div>\n          </div>\n\n        </form>\n\n      </ng-container>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-vehicle-details-wrapper profile-section\">\n\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isDataLoaded && !isEdit && !isVehicleNew\">\n\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit && !isVehicleNew\">\n\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t\t</div>\n\n\t\t<ng-container *ngIf=\"!isEdit && !isVehicleNew\">\n\t\t\t\n\t\t\t<form #profileVehicleForm = \"ngForm\" name=\"profileVehicleForm\"  novalidate>\n\n\t\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Vehicle Number</label>\n\t\t\t\t                <p>{{vehicle.vehicleNumber | notAvail }}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Vehicle Type</label>\n\t\t\t\t                <p>{{getVehicleType(vehicle.vehicleTypeId) | notAvail }}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Vehicle Manufacturer</label>\n\t\t\t\t                <p>{{vehicle.vehicleManufacturer | notAvail }}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Vehicle Color</label>\n\t\t\t\t                <p>{{vehicle.vehicleColor | notAvail }}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Vehicle Driver Number</label>\n\t\t\t\t                <p>{{vehicle.vehicleDriverNumber | notAvail }}</p>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t</ng-container>\n\n\n\t\t<ng-container *ngIf=\"isEdit || isVehicleNew\">\n\t\t\t\n\t\t\t<form #profileVehicleForm = \"ngForm\" name=\"profileVehicleForm\" (ngSubmit)=\"submitProfilVehicleForm(profileVehicleForm)\"  novalidate>\n\t\t\t\n\t\t\t\t<div class=\"data-wrapper\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Number*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleNumber\" \n\t\t\t                    [(ngModel)]=\"vehicle.vehicleNumber\" required>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Vehicle Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"vehicleTypeId\" \n\t\t\t\t\t\t\t        id=\"vehicleTypeId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"vehicle.vehicleTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of vehicleTypeList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Manufacturer*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleManufacturer\" \n\t\t\t                    [(ngModel)]=\"vehicle.vehicleManufacturer\" required>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Color</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleColor\" \n\t\t\t                    [(ngModel)]=\"vehicle.vehicleColor\">\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Driver Number</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleDriverNumber\" \n\t\t\t                    [(ngModel)]=\"vehicle.vehicleDriverNumber\">\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"profileVehicleForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</ng-container>\n\n\t</ng-container>\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-vehicles-wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\t\t\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isUserDataLoaded\">\n\t\t\n\t\t<div class=\"card-header at-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n    \t\t\t\t<h6 class=\"mb-2\">Parking Slots Available</h6>\n\t\t\t\t\t<p class=\"d-inline-block ft mr-md-1\" *ngFor=\" let item of parkingSlotsDataList; let i = index; last as isLast\">\n\t\t\t\t\t\t{{item.slotName}}<span *ngIf=\"!isLast\">,</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"d-inline-block ft mr-md-1\" *ngIf=\"isPlotNotAvailable()\">\n\t\t\t\t\t\tNot Allocated\n\t\t\t\t\t</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isUserDataLoaded && isVehicleNotAvailable()\">\n\t\t\n\t\t<div class=\"card-header at-header red\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n    \t\t\t\t<h6 class=\"mb-2\">No Vehicle added yet</h6>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\t<ng-container *ngIf=\"isUserDataLoaded\">\n\t\t\n\t\t<div class=\"accor-special\" id=\"vehicleAccordion\">\n\n\t\t\t<div class=\"accor-box\" *ngFor=\"let item of vehicleDataList; let i = index\">\n\n\t\t\t\t<li class=\"accor-lists\" data-toggle=\"collapse\" attr.data-target=\"#vehicleCollapse{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"Collapse{{i}}\" [ngClass]=\"item.isCollapsed ? '' : 'collapsed'\" (click)=\"item.isCollapsed = !item.isCollapsed\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h6>{{item.vehicle.vehicleNumber}}</h6>\n\t\t\t\t\t\t<div class=\"desp\">\n\t\t\t\t\t\t\t<p>Type: <span>{{getVehicleType(item.vehicle.vehicleTypeId)}}</span></p>\n\t\t\t\t\t\t\t<p>Manufacturer: <span>{{item.vehicle.vehicleManufacturer}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div id=\"vehicleCollapse{{i}}\" class=\"collapse details\" attr.aria-labelledby=\"Collapse{{i}}\" data-parent=\"#vehicleAccordion\">\n\t\t\t\t\t<app-profile-vehicle-details [vehicleData]=\"item\" [apartmentBlockUnitId]=\"userUnitId\" (outputParams)=\"getParams($event)\"></app-profile-vehicle-details>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"accor-box\">\n\t\t\t\t\n\t\t\t\t<li class=\"accor-lists add-list collapsed\" data-toggle=\"collapse\" data-target=\"#addVehicleCollapse\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h6>Add Vehicle</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div id=\"addVehicleCollapse\" class=\"collapse details\" aria-labelledby=\"collapseOne\" data-parent=\"#vehicleAccordion\">\n\t\t\t\t\t<app-profile-vehicle-details [isVehicleNew]=\"true\"  [apartmentBlockUnitId]=\"userUnitId\" (outputParams)=\"getParams($event)\"></app-profile-vehicle-details>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-basic wrapper\">\n\t<div class=\"card mb-30\">\n\t<div class=\"card-header\">\n\t\t<div class=\"float-left\">\n\t\t\t<h5>\n\t\t\t\t<span >Create Rental/Lease Information</span>\n\t\t\t</h5>\n\t\t</div>\n\t\t<ul class=\"list-inline float-right\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<a class=\"btn lime-green mt_5\" href=\"javascript:void(0)\" (click)=\"goBack();\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"card-body\">\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\t\t\n\t\t<form #propertyManagerCreateForm = \"ngForm\" name=\"propertyManagerCreateForm\" (ngSubmit)=\"submitPropertyManagerCreateForm(propertyManagerCreateForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Property Company*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Property Company\" name=\"propertyCompany\" [(ngModel)]=\"propertyData.propertyManagerName\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Contact Person*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Contact Person\" name=\"contactPerson\" [(ngModel)]=\"propertyData.contactPerson\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Email*</label>\n\t                    <input (blur)=\"IsValidEmail($event.target.value)\" type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"propertyData.email\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Phone Number*</label>\n\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo1\" [(ngModel)]=\"propertyData.phone1\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Alternate Phone Number</label>\n\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo2\" [(ngModel)]=\"propertyData.phone2\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Address Line 1</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address1\" [(ngModel)]=\"propertyData.address1\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Address Line 2</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address2\" [(ngModel)]=\"propertyData.address2\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>City</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"City\" name=\"city\" [(ngModel)]=\"propertyData.city\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Province / Region</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Province / Region\" name=\"region\" [(ngModel)]=\"propertyData.state\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Zip</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Zip\" name=\"zip\" [(ngModel)]=\"propertyData.pin\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\" *ngIf=\"!isStaffSubmitted\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"propertyManagerCreateForm.invalid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n</div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-basic wrapper profile-section\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\t\t\t\t\t\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isDataLoaded && !isEdit\">\n\t\t<i-feather class=\"icon plus\" name=\"plus\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\t<div class=\"icon-wrapper float-right mb-2\" *ngIf=\"isEdit\">\n\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t</div>\n\n\t<ng-container *ngIf=\"isDataLoaded && !isEdit\">\n\t\t\n\t\t<form #propertyManagerForm = \"ngForm\" name=\"propertyManagerForm\" novalidate>\n\n\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Property Company</label>\n\t\t\t                <p>{{propertyData.propertyManagerName}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                <label>Contact Person</label>\n\t\t\t                <p>{{propertyData.contactPerson}}</p>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Email</label>\n\t\t                    <p>{{propertyData.email}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Phone Number</label>\n\t\t                    <p>{{propertyData.phone1}}</p>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t<label>Alternate Phone Number</label>\n\t\t\t\t\t\t<p>{{propertyData.phone2}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Address Line 1</label>\n\t                   <p>{{propertyData.address1}}</p>\n            \t\t</div>\n        </div>\n        <div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Address Line 2</label>\n\t                   <p>{{propertyData.address2}}</p>\n            \t\t</div>\n        </div>\n        <div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>City</label>\n\t                   <p>{{propertyData.city}}</p>\n            \t\t</div>\n        </div>\n        <div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Province / Region</label>\n\t                   <p>{{propertyData.state}}</p>\n            \t\t</div>\n        </div>\n        <div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"select-box\">\n\t                   <label>Zip</label>\n\t                   <p>{{propertyData.pin}}</p>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\n\t</ng-container>\n\n\t<ng-container *ngIf=\"isDataLoaded && isEdit\">\n\t\t\n\t\t<form #propertyManagerForm = \"ngForm\" name=\"propertyManagerForm\" (ngSubmit)=\"submitpropertyManagerForm(propertyManagerForm)\"  novalidate>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Property Company*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Property Company\" name=\"propertyCompany\" [(ngModel)]=\"propertyData.propertyManagerName\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Contact Person*</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Contact Person\" name=\"contactPerson\" [(ngModel)]=\"propertyData.contactPerson\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Email*</label>\n\t                    <input (blur)=\"IsValidEmail($event.target.value)\" type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"propertyData.email\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Phone Number*</label>\n\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo1\" [(ngModel)]=\"propertyData.phone1\" required>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Alternate Phone Number</label>\n\t                    <input (blur)=\"IsvalidatePhoneNo($event.target.value)\" type=\"text\" class=\"form-control\" placeholder=\"Phone no\" name=\"phoneNo2\" [(ngModel)]=\"propertyData.phone2\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Address Line 1</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address1\" [(ngModel)]=\"propertyData.address1\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Address Line 2</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"address2\" [(ngModel)]=\"propertyData.address2\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>City</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"City\" name=\"city\" [(ngModel)]=\"propertyData.city\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Province / Region</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Province / Region\" name=\"region\" [(ngModel)]=\"propertyData.state\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t                    <label>Zip</label>\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Zip\" name=\"zip\" [(ngModel)]=\"propertyData.pin\">\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\" *ngIf=\"!isStaffSubmitted\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"text-center mt-5\">\n\t\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"propertyManagerForm.invalid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/my-profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/my-profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-profile-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n\n\t<div class=\"card user-card mb-20\" *ngIf=\"isUserDataLoaded\">\n\t\t\n\t\t<div class=\"card-header\" [ngClass]=\"isNotAdmin() ? 'd-none' : ''\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>User Info</h5>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\" (click)=\"closeUserInfo()\">\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<div class=\"float-left\">\n\t\t\t\t\n\t\t\t\t<div class=\"media\">\n\t\t\t\t  <div class=\"profile-picture\" (click)=\"uploadProfilePic()\">\n\t\t\t\t  \t<img class=\"svg\" [src] =\"profilePicUrl\" id=\"userProfile\">\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t    <h5 class=\"mt-0\">{{user.firstName}} {{user.lastName}}</h5>\n\t\t\t\t    <p>{{userRole.roleName}}</p>\n\t\t\t\t    <ul class=\"other list-inline d-none d-sm-block\">\n\t\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t\t    \t\t<i-feather class=\"icon\" name=\"mail\"></i-feather>\n\t\t\t\t    \t\t<span>{{user.emailId}}</span>\n\t\t\t\t    \t</li>\n\t\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t\t    \t\t<i-feather class=\"icon phone\" name=\"phone\"></i-feather>\n\t\t\t\t    \t\t<span>{{user.phoneNumber}}</span>\n\t\t\t\t    \t</li>\n\t\t\t\t    </ul>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"other list-inline d-block d-sm-none\">\n\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t    \t\t<i-feather class=\"icon\" name=\"mail\"></i-feather>\n\t\t\t    \t\t<span>{{user.emailId}}</span>\n\t\t\t    \t</li>\n\t\t\t    \t<li class=\"list-inline-item\">\n\t\t\t    \t\t<i-feather class=\"icon phone\" name=\"phone\"></i-feather>\n\t\t\t    \t\t<span>{{user.phoneNumber}}</span>\n\t\t\t    \t</li>\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\n\t\t</div>\n\n\t\t<!-- <div class=\"card-body p-0\" [ngClass]=\"isNotAdmin() ? 'border-top' : ''\"> -->\n\t\t<div class=\"card-body p-0 border-top\"> \n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-3\">\n\t\t\t\t\t<div class=\"left-menubar\">\n\t\t\t\t\t\t<h4 [ngClass]=\"isNotAdmin() ? '' : 'd-none'\">Settings</h4>\n\t\t\t\t\t\t<ul class=\"list-group lists\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"basic/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/user-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Profile</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"unit/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/unit-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Unit Details</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"staffs/{{userId}}\" routerLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/staff-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Unit Staffs</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"vehicles/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><i-feather class=\"truck\" name=\"truck\"></i-feather></span>\n\t\t\t\t\t\t\t\t<span>Unit Vehicles & Parking</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"pets/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\" \n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/dog-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Unit Pets</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"propertymanager/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/manager-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Property Manager</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"family/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/family-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Family Members</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"lease/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/key-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Rental/Lease Information</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"interest/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/heart-liner-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>My Interest Group</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"absence/{{userId}}\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/moveout-icon.svg\" width=\"20\" /></span>\n\t\t\t\t\t\t\t\t<span>Out of Condo/Prolonged Absence</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-9 d-none d-md-block\">\n\t\t\t\t\t<div class=\"inner-content\">\n\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n\n</div>");

/***/ }),

/***/ "./src/app/ams/unit-users/components/unapproved/unapproved.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/unapproved/unapproved.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".unapproved-wrapper .customize-email {\n  margin: 0 0 25px 0;\n}\n.unapproved-wrapper .customize-email p {\n  font-size: 1.6rem;\n  padding: 0 0 15px 0 !important;\n  color: #585858;\n}\n.unapproved-wrapper .card-body p.info {\n  padding: 10px 0 0 0 !important;\n  font-size: 1.4rem;\n  color: #373946;\n}\n.unapproved-wrapper .user-info-card {\n  margin: 30px 0 0 0;\n}\ntable {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL3VuYXBwcm92ZWQvdW5hcHByb3ZlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3VuaXQtdXNlcnMvY29tcG9uZW50cy91bmFwcHJvdmVkL3VuYXBwcm92ZWQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ0Msa0JBQUE7QUNKRjtBREtFO0VFdUVBLGlCQUFBO0VGckVPLDhCQUFBO0VBQ0EsY0d1RkU7QUYxRlg7QURPRTtFQUNPLDhCQUFBO0VFK0RQLGlCQUFBO0VGN0RVLGNHOEVEO0FGbkZYO0FEUUM7RUFDQyxrQkFBQTtBQ05GO0FEWUE7RUFDQyxXQUFBO0FDVEQ7QURZRTtFQUNELGVBQUE7RUFDQSxXQUFBO0FDVEQiLCJmaWxlIjoic3JjL2FwcC9hbXMvdW5pdC11c2Vycy9jb21wb25lbnRzL3VuYXBwcm92ZWQvdW5hcHByb3ZlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4udW5hcHByb3ZlZC13cmFwcGVyIHtcblx0LmN1c3RvbWl6ZS1lbWFpbCB7XG5cdFx0bWFyZ2luOiAwIDAgMjVweCAwO1xuXHRcdHAge1xuICAgICAgICBcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcbiAgICAgICAgXHRwYWRkaW5nOiAwIDAgMTVweCAwICFpbXBvcnRhbnQ7XG4gICAgICAgIFx0Y29sb3I6ICRncmV5LTcwMDtcblx0XHR9XG5cdH1cblx0LmNhcmQtYm9keSB7XG5cdFx0cC5pbmZvIHtcbiAgICAgICAgXHRwYWRkaW5nOiAxMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleS04MDA7XG4gICAgICBcdH1cblx0fVxuXHQudXNlci1pbmZvLWNhcmQge1xuXHRcdG1hcmdpbjogMzBweCAwIDAgMDtcblx0XHRcblx0fVxuXHRcbn1cblxudGFibGUge1xuXHR3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR3aWR0aDogMTAwJTtcbiAgfSIsIi51bmFwcHJvdmVkLXdyYXBwZXIgLmN1c3RvbWl6ZS1lbWFpbCB7XG4gIG1hcmdpbjogMCAwIDI1cHggMDtcbn1cbi51bmFwcHJvdmVkLXdyYXBwZXIgLmN1c3RvbWl6ZS1lbWFpbCBwIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1ODU4NTg7XG59XG4udW5hcHByb3ZlZC13cmFwcGVyIC5jYXJkLWJvZHkgcC5pbmZvIHtcbiAgcGFkZGluZzogMTBweCAwIDAgMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4udW5hcHByb3ZlZC13cmFwcGVyIC51c2VyLWluZm8tY2FyZCB7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtYmFzZS0wMjoxMTtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIl19 */");

/***/ }),

/***/ "./src/app/ams/unit-users/components/unapproved/unapproved.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ams/unit-users/components/unapproved/unapproved.component.ts ***!
  \******************************************************************************/
/*! exports provided: UnapprovedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnapprovedComponent", function() { return UnapprovedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/shared-toaster.service */ "./src/app/shared/services/shared-toaster.service.ts");












let UnapprovedComponent = class UnapprovedComponent {
    constructor(injector, dialog, router, userService, sharedService, cookieService, srvModal, SharedToaster) {
        this.injector = injector;
        this.dialog = dialog;
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.srvModal = srvModal;
        this.SharedToaster = SharedToaster;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.ItemUserStartIndex = 0;
        this.itemUserLimit = 15;
        this.ItemLogStartIndex = 0;
        this.itemLogLimit = 15;
        this.unitData = "";
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
        this.selectAllUnapprovedUser = false;
        this.isUserSelected = false;
        this.isLogs = false;
        this.isUserDataLoaded = false;
        this.isLogsDataLoaded = false;
        this.isProfile = false;
        this.selectedInput = "";
        this.columnField = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getUserIndexParams(event) {
        // this.ItemUserStartIndex = event.ItemUserStartIndex;
        // this.ItemUserEndIndex = event.ItemUserEndIndex;
        // this.itemUserLimit = event.ItemLimit;
        this.ItemUserStartIndex = event.ItemStartIndex;
        this.ItemUserEndIndex = event.ItemEndIndex;
        this.itemUserLimit = event.itemLimit;
        // this.ItemStartIndex = event.ItemStartIndex;
        // this.ItemEndIndex = event.ItemEndIndex;
        // this.itemLimit = event.itemLimit;
        // if(this.totalUserItems>this.itemUserLimit){
        //   this.ItemUserEndIndex = this.itemUserLimit;
        // }
        // else {
        //   this.ItemUserEndIndex = this.totalUserItems;
        // }
    }
    onDateChange(event, type) {
        if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_10__(event).format("DD/MM/YYYY");
        }
        else {
            this.columnField = {};
        }
    }
    getBookedDate(itr, date) {
        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.unitListData, (obj, index) => {
            obj.facilityBookedForDate = moment__WEBPACK_IMPORTED_MODULE_10__(obj.bookedForDate).format("DD/MM/YYYY");
        });
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY");
    }
    getLogIndexParams(event) {
        this.ItemLogStartIndex = event.ItemLogStartIndex;
        this.ItemLogEndIndex = event.ItemLogEndIndex;
    }
    selectColInput(value) {
        console.log(value);
        this.selectedInput = value;
    }
    getBlockNo(item, data) {
        this.unitListData.map(obj => {
            if (obj.id == item.id) {
                obj.apartmentBlockNumber = data;
            }
        });
        return data;
    }
    getBlockUnitNo(item, data) {
        this.unitListData.map(obj => {
            if (obj.id == item.id) {
                obj.apartmentBlockUnitNumber = data;
            }
        });
        return data;
    }
    getNotes(data) {
        if (data === undefined || data.length == 0)
            return '';
        else
            return data[0].notes;
    }
    getUserRole(role, index) {
        if (role === undefined || role.length == 0) {
            return '';
        }
        else {
            this.unitListData[index].roleName = role[0].roleName;
            return role[0].roleName;
        }
    }
    getUserRoleInfo(role) {
        if (role.userRole === undefined || role.userRole.length == 0) {
            return '';
        }
        else {
            return role.userRole[0].roleName;
        }
    }
    onResize(event) {
        if (event.target.innerWidth <= 991)
            this.isMobile = true;
        else
            this.isMobile = false;
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
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
    getAllUnapprovedUser() {
        if (this.selectAllUnapprovedUser) {
            underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.unitListData, (item) => {
                item.checked = true;
            });
            this.isUserSelected = true;
        }
        else {
            underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.unitListData, (item) => {
                item.checked = false;
            });
            this.isUserSelected = false;
        }
    }
    getSelectedUnapprovedUser(unit) {
        var length = 0;
        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.unitListData, (item) => {
            if (item.checked) {
                length++;
            }
        });
        if (length > 0) {
            this.isUserSelected = true;
        }
        else {
            this.isUserSelected = false;
        }
        if (length == 0) {
            this.selectAllUnapprovedUser = false;
        }
        if (length == this.unitListData.length) {
            this.selectAllUnapprovedUser = true;
        }
    }
    approveUsers() {
        this.isUserDataLoaded = false;
        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.unitListData, (item, index) => {
            if (item.checked) {
                this.userService.getUserById(item.id).subscribe((res) => {
                    var user = res[0];
                    // user.isApproved = true;
                    this.SharedToaster.openSnackBar("Approved", '');
                    this.userService.updateUser(user).subscribe((res) => {
                        this.unitListData.splice(index, 1);
                        this.totalUserItems = this.unitListData.length;
                        this.isUserDataLoaded = true;
                    });
                });
            }
        });
    }
    showConfirmModal(id) {
        this.modalService.showConfirmModal(id);
    }
    showUserInfo(user) {
        var userId = user.id;
        var blockData = user.apartmentBlockUnit;
        var userRole = user.userRole;
        this.userService.getUserById(userId).subscribe((res) => {
            var userData = res[0];
            if (blockData === undefined || blockData.length == 0) {
                userData.blockNo = "Not Available";
                userData.unitNo = "";
            }
            else {
                userData.blockNo = blockData[0].apartmentBlockNumber;
                userData.unitNo = blockData[0].apartmentBlockUnitNumber;
            }
            if (userRole === undefined || userRole.length == 0) {
                userData.roleName = "Not Available";
            }
            else {
                userData.roleName = userRole[0].roleName;
            }
            this.dialog.open(this.viewUnapprovedUserRef, {
                panelClass: 'material',
                disableClose: true,
                data: userData
            });
        });
    }
    getParams(event) {
        this.isProfile = event;
    }
    viewUserInfo(id) {
        console.log(id);
        this.isProfile = false;
        setTimeout(() => {
            this.isProfile = true;
        }, 10);
        setTimeout(() => {
            var elem = document.querySelector('.user-info-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
                top: scrollTo,
                behavior: 'smooth'
            });
        }, 100);
        this.viewUserId = id;
        this.router.navigate(['ams/unit&users/unapproved/basic', this.viewUserId]);
    }
    showLogs() {
        this.isLogs = !this.isLogs;
        this.sharedService.getJsonData().subscribe((res) => {
            this.logsData = res.logsData;
            this.totalLogItems = this.logsData.length;
            if (this.totalLogItems > this.itemLogLimit) {
                this.ItemLogEndIndex = this.itemLogLimit;
            }
            else {
                this.ItemLogEndIndex = this.totalLogItems;
            }
            this.isLogsDataLoaded = true;
        }, error => {
            console.log(error);
        });
    }
    onGlSearchFilter() {
        if (this.unitData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.unitData;
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
    onUnapproveDelete(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let unapprovedId = dataRecord.id;
        this.modalService.showConfirmModal(unapprovedId);
    }
    onviewUserInfo(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.viewUserInfo(dataRecord.id);
        // let unapprovedId = dataRecord.unit.idd
        // this.modalService.showConfirmModal(unapprovedId);
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Name',
                datafield: 'name',
                width: 100,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Phone',
                datafield: 'phone',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Email',
                datafield: 'email',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Block  No',
                datafield: 'apartmentBlockNumberJQ',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Unit No',
                datafield: 'apartmentBlockUnitNumberJQ',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Requested On',
                datafield: 'insertedOn',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="viewUserInfo(' + row + ')"><i class="fa fa-eye icon eye" aria-hidden="true"></i></a><a href="javascript:void(0)" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        if (window.innerWidth <= 991)
            this.isMobile = true;
        else
            this.isMobile = false;
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.userService.getAllUnApprovedUsersByApartmentId(params).subscribe((res) => {
            var unitListData = res;
            console.log(res);
            //filter active true items
            this.unitListData = unitListData.filter(data => {
                data.insertedOn = new Date(data.insertedOn).toLocaleDateString();
                data.apartmentBlockNumberJQ = data.apartmentBlockUnit[0].apartmentBlockNumber;
                data.apartmentBlockUnitNumberJQ = data.apartmentBlockUnit[0].apartmentBlockUnitNumber;
                return data.active;
            });
            setTimeout(() => {
                console.log(this.unitListData);
            }, 2000);
            this.gridSourceData = {
                localdata: unitListData,
                datatype: "array"
            };
            this.unitListData = new jqx.dataAdapter(this.gridSourceData);
            this.totalUserItems = this.unitListData.length;
            if (this.totalUserItems > this.itemUserLimit) {
                this.ItemUserEndIndex = this.itemUserLimit;
            }
            else {
                this.ItemUserEndIndex = this.totalUserItems;
            }
            this.isUserDataLoaded = true;
        }, error => {
            console.log(error);
        });
        // delete user
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                var params = {
                    userId: id,
                    updateUserId: parseInt(this.cookieService.get('userId'))
                };
                this.userService.deleteUserById(params).subscribe((res) => {
                    underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.unitListData, (type) => {
                        if (type.id == id) {
                            type.active = false;
                        }
                    });
                    setTimeout(() => {
                        this.unitListData = this.unitListData.filter((type) => type.id !== id);
                        this.totalUserItems = this.unitListData.length;
                        this.sharedService.setAlertMessage("User deleted");
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
    editUserInfo(data) {
        this.srvModal.showUnApprovedetailsModal(data);
    }
    getColor(docstatus) {
        return docstatus ? "red" : "yellow";
    }
};
UnapprovedComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] },
    { type: _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_11__["SharedToasterService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewUnapprovedUserRef", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], UnapprovedComponent.prototype, "viewUnapprovedUserRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], UnapprovedComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], UnapprovedComponent.prototype, "onResize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onUnapproveDelete', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], UnapprovedComponent.prototype, "onUnapproveDelete", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onviewUserInfo', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], UnapprovedComponent.prototype, "onviewUserInfo", null);
UnapprovedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unapproved',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unapproved.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/unit-users/components/unapproved/unapproved.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./unapproved.component.scss */ "./src/app/ams/unit-users/components/unapproved/unapproved.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
        _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"],
        src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_11__["SharedToasterService"]])
], UnapprovedComponent);

function showConfirmDeleteEvent(row) {
    var event = new CustomEvent('onUnapproveDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEvent = showConfirmDeleteEvent;
function viewUserInfo(row) {
    var event = new CustomEvent('onviewUserInfo', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.viewUserInfo = viewUserInfo;


/***/ }),

/***/ "./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL2VtZXJnZW5jeS1jb250YWN0L2VtZXJnZW5jeS1jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EmergencyContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyContactComponent", function() { return EmergencyContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EmergencyContactComponent = class EmergencyContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmergencyContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emergency-contact',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./emergency-contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./emergency-contact.component.scss */ "./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EmergencyContactComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/my-staffs/my-staffs.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/user/my-profile/components/my-staffs/my-staffs.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL215LXN0YWZmcy9teS1zdGFmZnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/my-profile/components/my-staffs/my-staffs.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/user/my-profile/components/my-staffs/my-staffs.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MyStaffsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyStaffsComponent", function() { return MyStaffsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MyStaffsComponent = class MyStaffsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyStaffsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-staffs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-staffs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/my-staffs/my-staffs.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-staffs.component.scss */ "./src/app/user/my-profile/components/my-staffs/my-staffs.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MyStaffsComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-basic/profile-basic.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-basic/profile-basic.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-basic .profile-pic-upload {\n  margin-top: 20px;\n}\n.profile-basic .profile-picture {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 80px !important;\n  overflow: hidden;\n  margin: 0 30px 0 0;\n}\n@media (max-width: 768px) {\n  .profile-basic .profile-picture {\n    width: 60px;\n    height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 60px !important;\n    margin: 0 15px 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC91c2VyL215LXByb2ZpbGUvY29tcG9uZW50cy9wcm9maWxlLWJhc2ljL3Byb2ZpbGUtYmFzaWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtYmFzaWMvcHJvZmlsZS1iYXNpYy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDSSxnQkFBQTtBQ0pSO0FETUk7RUV5RUYsV0Z4RXVCO0VFeUV2QixZRnpFdUI7RUUwRXZCLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBOUVELDhCQUFBO0VGR08sZ0JBQUE7RUFDQSxrQkFBQTtBQ0dSO0FERlE7RUFKSjtJRXlFRixXRnBFMkI7SUVxRTNCLFlGckUyQjtJRXNFM0IsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUE5RUQsOEJBQUE7SUZPVyxrQkFBQTtFQ1lWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL215LXByb2ZpbGUvY29tcG9uZW50cy9wcm9maWxlLWJhc2ljL3Byb2ZpbGUtYmFzaWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLnByb2ZpbGUtYmFzaWMge1xuICAgIC5wcm9maWxlLXBpYy11cGxvYWQge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgQGluY2x1ZGUgY2lyY2xlcyg4MHB4KTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luOiAwIDMwcHggMCAwO1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGNpcmNsZXMoNjBweCk7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweCAwIDA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnByb2ZpbGUtYmFzaWMgLnByb2ZpbGUtcGljLXVwbG9hZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucHJvZmlsZS1iYXNpYyAucHJvZmlsZS1waWN0dXJlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogODBweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDgwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogODBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgMzBweCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2ZpbGUtYmFzaWMgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDYwcHggIWltcG9ydGFudDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDYwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gZmxpcCgkZGlyZWN0aW9uKSB7XG4gIHRyYW5zZm9ybSA6IHJvdGF0ZVkoJGRpcmVjdGlvbik7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-basic/profile-basic.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-basic/profile-basic.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfileBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBasicComponent", function() { return ProfileBasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/FileDetails */ "./src/app/api/controllers/FileDetails.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_profilep_pic_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/profilep-pic-upload.service */ "./src/app/shared/services/profilep-pic-upload.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_ams_unit_users_components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/ams/unit-users/components/unapproved/unapproved.component */ "./src/app/ams/unit-users/components/unapproved/unapproved.component.ts");













let ProfileBasicComponent = class ProfileBasicComponent {
    constructor(httpClient, sanitizer, router, route, userService, fileDetailsService, lookupService, sharedService, profilepPicUploadService, cookieService) {
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.fileDetailsService = fileDetailsService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.profilepPicUploadService = profilepPicUploadService;
        this.cookieService = cookieService;
        this.genderType = "";
        this.isUserDataLoaded = false;
        this.isEdit = false;
        this.isValidphoneNumber = false;
        this.isValidemail = false;
        this.profilePicUrl = "";
        this.isDefaultProfilePic = false;
        this.progessbarWidth = 0;
        this.uploadResponse = { status: '', message: '', filePath: '' };
        this.error = "";
    }
    getGender(id) {
        return id == '43' ? 'Male' : 'Female';
    }
    getDOB(date) {
        if (date === undefined || date.length == 0) {
            return "";
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_11__(date).format("DD-MM-YY");
        }
    }
    showEditForm() {
        this.isEdit = !this.isEdit;
    }
    isAdmin() {
        return (this.cookieService.get('userRole') == 'Admin' || this.cookieService.get('userRole') == 'Staff') ? true : false;
    }
    isUploadProgess() {
        return this.uploadResponse.status == "progress" ? true : false;
    }
    isUploadCompleted() {
        return this.uploadResponse.status == "completed" ? true : false;
    }
    submitProfileBasicForm(form) {
        if (!this.IsvalidatePhoneNo(this.user.phoneNumber))
            return true;
        if (!this.IsValidEmail(this.user.emailId))
            return true;
        this.isUserDataLoaded = false;
        let userDetails = {
            "userId": this.userId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "firstName": this.user.firstName,
            "middleName": this.user.middleName,
            "lastName": this.user.lastName,
            "emailId": this.user.emailId,
            "password": this.user.password,
            "salt": this.user.salt,
            "address1": this.user.address1,
            "address2": this.user.address1,
            "city": this.user.city,
            "state": this.user.state,
            "country": this.user.country,
            "zipCode": this.user.zipCode,
            "genderId": parseInt(this.genderType),
            "dob": this.user.dob,
            "joinedOn": this.user.joinedOn,
            "bloodGroup": this.user.bloodGroup,
            "phoneNumber": this.user.phoneNumber.toString(),
            "emergencyContactNumber": this.user.emergencyContactNumber,
            "emergencyContactPerson": this.user.emergencyContactPerson,
            "emergencyContactNumberSecondary": this.user.emergencyContactNumberSecondary,
            "emergencyContactPersonSecondary": this.user.emergencyContactPersonSecondary,
            "accessCardNumber": this.user.accessCardNumber,
            "notes": this.user.notes,
            "profilePictureId": this.user.profilePictureId,
            "isLiving": this.user.isLiving,
            "isActive": this.user.isActive,
            "isApproved": this.user.isApproved,
            "resetPassword": this.user.resetPassword,
            "insertedBy": this.user.insertedBy,
            "updatedBy": parseInt(this.cookieService.get('userId'))
        };
        let params = {
            user: userDetails
        };
        this.userService.updateUser(params).subscribe((res) => {
            if (res.message) {
                this.isUserDataLoaded = true;
                this.isEdit = false;
                if (!this.isAdmin()) // if its user module, update the userdata everywhere on the fly
                    this.sharedService.setUserDetails(userDetails);
                this.paraUserId = res.message;
                console.log(res.message);
                this.sharedService.setAlertMessage("User updated successfully");
            }
        }, error => {
        });
        this.router.navigate(['ams/unit&users/unapproved/basic', 1]);
    }
    uploadFile(event) {
        var file = event[0];
        this.profilepPicUploadService.upload(file, this.userId).subscribe((res) => {
            console.log(res);
            let newParams = {
                fileDetailsId: Number(res),
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.fileDetailsService.getFileDetailsById(newParams).subscribe((res) => {
                var path = res[0].filePath;
                let params = {
                    fileNameOnBlob: path,
                    savefileNameWithPath: ""
                };
                const queryParamBase = {
                    fileNameOnBlob: path,
                    savefileNameWithPath: "",
                };
                let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                Object.entries(queryParamBase).forEach(([key, value]) => {
                    if (value !== undefined) {
                        if (typeof value === 'string')
                            queryParams = queryParams.set(key, value);
                        else if (Array.isArray(value))
                            value.forEach(v => queryParams = queryParams.append(key, v));
                        else
                            queryParams = queryParams.set(key, JSON.stringify(value));
                    }
                });
                this.httpClient.post('/api/FileDetails/DownloadAsync', {}, {
                    params: queryParams,
                    observe: 'response', responseType: 'blob'
                }).subscribe((res) => {
                    const blob = new Blob([res], { type: 'application/octet-stream' });
                    let fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
                    //this.url = fileUrl.replace('unsafe:', '').replace('http://localhost:4200/', environment.rootUrl);
                    console.log(fileUrl);
                });
            });
        }, (err) => {
            this.error = err;
        });
    }
    ngOnInit() {
        this.user = {};
        this.user.bloodGroup = "";
        if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
        }
        else {
            this.userId = parseInt(this.cookieService.get('userId'));
        }
        this.isUserDataLoaded = false;
        let queryParamBase = {
            userid: this.userId
        };
        this.userService.getUserById(queryParamBase).subscribe((res) => {
            this.user = res[0];
            this.genderType = '' + this.user.genderId;
            this.isUserDataLoaded = true;
        }, error => {
        });
        let groupParams = {
            LookupTypeId: 24
        };
        this.lookupService.getLookupValueByLookupTypeId(groupParams).subscribe((res) => {
            this.bloodGroupData = res;
        });
        this.sharedService.profilepiccast.subscribe(profilePicUrl => {
            this.profilePicUrl = profilePicUrl;
            if (this.profilePicUrl == this.sharedService.getDefaultProfilePic())
                this.isDefaultProfilePic = true;
        });
    }
    IsValidEmail(val) {
        var retVal = true;
        // var rex =new RegExp(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/);
        //  var rex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/); 
        var rex = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
            + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
        var isValid = rex.test(val);
        if (!isValid) {
            retVal = false;
            var errorDetails = {
                msg: "Kindly enter proper email id",
                type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
        }
        this.isValidemail = retVal;
        return retVal;
    }
    IsvalidatePhoneNo(val) {
        var retVal = true;
        // var rex =new RegExp(/^[+]?\d+$/);
        var rex = new RegExp(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/);
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
        if (!isValid && val.length < 13) {
            retVal = false;
            var errorDetails = {
                msg: "Kindly enter proper phoneno",
                type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
        }
        this.isValidphoneNumber = retVal;
        return retVal;
    }
    isValueValid(val) {
        return (val === undefined || val == null || val.length <= 0 || val === "") ? true : false;
    }
};
ProfileBasicComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_6__["FileDetailsService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: _shared_services_profilep_pic_upload_service__WEBPACK_IMPORTED_MODULE_9__["ProfilepPicUploadService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("UnapprovedComponent", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_ams_unit_users_components_unapproved_unapproved_component__WEBPACK_IMPORTED_MODULE_12__["UnapprovedComponent"])
], ProfileBasicComponent.prototype, "unAppComp", void 0);
ProfileBasicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-basic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-basic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-basic/profile-basic.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-basic.component.scss */ "./src/app/user/my-profile/components/profile-basic/profile-basic.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_6__["FileDetailsService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        _shared_services_profilep_pic_upload_service__WEBPACK_IMPORTED_MODULE_9__["ProfilepPicUploadService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])
], ProfileBasicComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtZmFtaWx5LW1lbWJlcnMtZGV0YWlscy9wcm9maWxlLWZhbWlseS1tZW1iZXJzLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ProfileFamilyMembersDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFamilyMembersDetailsComponent", function() { return ProfileFamilyMembersDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let ProfileFamilyMembersDetailsComponent = class ProfileFamilyMembersDetailsComponent {
    constructor(router, route, userService, sharedService, lookupService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isEdit = false;
        this.genderType = "";
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    showEditForm() {
        this.isEdit = !this.isEdit;
    }
    getGender(id) {
        return id == '43' ? 'Male' : 'Female';
    }
    getDOB(date) {
        if (date === undefined || date.length == 0) {
            return "";
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD-MM-YY");
        }
    }
    deleteMember() {
        let params = {
            userFamilyMemberId: parseInt(this.user.userFamilyMemberId),
            deleteBy: parseInt(this.cookieService.get('userId'))
        };
        this.userService.deleteUserFamilyMember(params).subscribe((res) => {
            if (res.message) {
                this.isDataLoaded = true;
                this.sharedService.setAlertMessage("Member deleted");
                this.outputParams.emit(true);
            }
            else {
                this.isDataLoaded = true;
            }
        });
    }
    submitProfileFamilyForm(form) {
        if (!this.isEdit) {
            let details = {
                "firstName": this.user.firstName,
                "middleName": this.user.middleName,
                "lastName": this.user.lastName,
                "relationship": this.user.relationship,
                "relatedUserId": this.userId,
                "emailId": this.user.emailId,
                "genderId": parseInt(this.genderType),
                "dob": this.user.dob,
                "bloodGroup": this.user.bloodGroup,
                "phoneNumber": this.user.phoneNumber.toString(),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": "2020-03-28T10:44:31.345Z"
            };
            let params = {
                userFamilyMember: details
            };
            this.userService.addUserFamilyMember(params).subscribe((res) => {
                if (res.message) {
                    this.isDataLoaded = true;
                    this.sharedService.setAlertMessage("Family Member added successfully");
                    this.outputParams.emit(true);
                }
                else {
                    this.isDataLoaded = true;
                }
            });
        }
        else {
            let details = {
                "userFamilyMemberId": this.user.userFamilyMemberId,
                "firstName": this.user.firstName,
                "middleName": this.user.middleName,
                "lastName": this.user.lastName,
                "relationship": this.user.relationship,
                "relatedUserId": this.userId,
                "emailId": this.user.emailId,
                "genderId": parseInt(this.genderType),
                "dob": this.user.dob,
                "bloodGroup": this.user.bloodGroup,
                "phoneNumber": this.user.phoneNumber.toString(),
                "isActive": this.user.isActive,
                "insertedBy": this.user.insertedBy,
                "insertedOn": this.user.insertedOn,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString()
            };
            let params = {
                userFamilyMember: details
            };
            this.userService.updateUserFamilyMember(params).subscribe((res) => {
                if (res.message) {
                    this.isDataLoaded = true;
                    this.sharedService.setAlertMessage("Family Member updated successfully");
                    this.outputParams.emit(true);
                }
                else {
                    this.isDataLoaded = true;
                }
            });
        }
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
        }
        else {
            this.userId = parseInt(this.cookieService.get('userId'));
        }
        let groupParams = {
            LookupTypeId: 24
        };
        this.lookupService.getLookupValueByLookupTypeId(groupParams).subscribe((res) => {
            this.bloodGroupData = res;
        });
        if (this.isFamilyNew) {
            this.user = {};
            this.user.bloodGroup = "";
        }
        else {
            this.genderType = '' + this.user.genderId;
        }
        this.isDataLoaded = true;
    }
};
ProfileFamilyMembersDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], ProfileFamilyMembersDetailsComponent.prototype, "isFamilyNew", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProfileFamilyMembersDetailsComponent.prototype, "user", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProfileFamilyMembersDetailsComponent.prototype, "outputParams", void 0);
ProfileFamilyMembersDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-family-members-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-family-members-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-family-members-details.component.scss */ "./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], ProfileFamilyMembersDetailsComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtZmFtaWx5LW1lbWJlcnMvcHJvZmlsZS1mYW1pbHktbWVtYmVycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProfileFamilyMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFamilyMembersComponent", function() { return ProfileFamilyMembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let ProfileFamilyMembersComponent = class ProfileFamilyMembersComponent {
    constructor(router, route, userService, sharedService, lookupService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
    }
    getParams(event) {
        if (event) {
            this.isDataLoaded = false;
            this.userService.getUserFamilyMembersByUserId(this.userId).subscribe((res) => {
                this.familyDataList = res.filter(item => { return item.isActive; });
                ;
                this.isDataLoaded = true;
            });
        }
    }
    isFamilyMembersAvailable() {
        return this.familyDataList.length != 0 ? true : false;
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
        }
        else {
            this.userId = parseInt(this.cookieService.get('userId'));
        }
        this.userService.getUserFamilyMembersByUserId(this.userId).subscribe((res) => {
            this.familyDataList = res.filter(item => { return item.isActive; });
            ;
            this.isDataLoaded = true;
        });
    }
};
ProfileFamilyMembersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
ProfileFamilyMembersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-family-members',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-family-members.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-family-members.component.scss */ "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], ProfileFamilyMembersComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtaW50ZXJlc3QtZ3JvdXAvcHJvZmlsZS1pbnRlcmVzdC1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProfileInterestGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInterestGroupComponent", function() { return ProfileInterestGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/controllers/Broadcast */ "./src/app/api/controllers/Broadcast.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");






let ProfileInterestGroupComponent = class ProfileInterestGroupComponent {
    // categories=['dance','cock','xyu'];
    // adminCategories=['abc','pqr','ghj'];
    constructor(broadcastService, sharedService, cookieService, apartmentService) {
        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.apartmentService = apartmentService;
    }
    ngOnInit() {
        this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
        this.userId = parseInt(this.cookieService.get('userId'));
        this.getAllGroupCategory();
        // this.getUserDetails();
        // this.getAllGoupUsers();
    }
    //Get Category Type
    getAllGroupCategory() {
        let queryParamBase = {
            apartmentId: this.apartmentID
        };
        this.broadcastService.getAllBroadCastGroupCategories(queryParamBase).subscribe((res) => {
            var allBroadcastGroupCategory = res;
            //filter active true items
            this.allBroadcastGroupCategory = allBroadcastGroupCategory.filter(data => {
                return data.isActive;
            });
            this.adminInterestGroupCategory = this.allBroadcastGroupCategory.filter(data => {
                return data.privilege == "Admin";
            });
            this.userInterestGroupCategory = this.allBroadcastGroupCategory.filter(data => {
                return data.privilege.includes("All");
            });
            this.getAllGoupUsers();
        });
    }
    getAllGoupUsers() {
        let queryParamBase = {
            apartmentId: this.apartmentID
        };
        this.broadcastService.getBroadCastGroupCategoryUser(queryParamBase).subscribe((res) => {
            this.interestGroupUsers = res;
            this.assignedInterestGroupUsers = this.interestGroupUsers.filter(data => {
                return data.userId == this.userId && data.isActive;
            });
            this.assignedInterestGroupsToUser = [];
            this.assignedInterestGroupUsers.forEach(element => {
                this.assignedInterestGroupsToUser.push(element.broadCastGroupCategoryId);
            });
            this.adminInterestGroupCategory.forEach(element => {
                element.IsAssigned = this.assignedInterestGroupsToUser.includes(element.broadCastGroupCategoryId);
            });
            this.userInterestGroupCategory.forEach(element => {
                element.IsAssigned = this.assignedInterestGroupsToUser.includes(element.broadCastGroupCategoryId);
            });
        });
    }
    getUserDetails() {
        let queryParamBase = {
            userId: this.userId,
        };
        this.apartmentService.getApartmentBlockUnitByUserIdNew(queryParamBase).subscribe((res) => {
            this.userDetails = res.filter(function (obj) {
                return obj.apartmentId == this.apartmentId && obj.userid == this.userId;
            });
        });
    }
    ChangeInterestGroup(interestGroup) {
        if (interestGroup.IsAssigned) {
            let categoryUser = this.interestGroupUsers.filter((obj) => {
                return obj.broadCastGroupCategoryId == interestGroup.broadCastGroupCategoryId &&
                    obj.userId == this.userId;
            });
            this.removeUser(categoryUser[0].broadCastGroupCategoryUserId);
        }
        else {
            let queryParamBase = {
                userId: this.userId,
            };
            this.apartmentService.getApartmentBlockUnitByUserIdNew(queryParamBase).subscribe((res) => {
                var currentAppUserUnits = res.filter((obj) => {
                    return obj.apartmentId == this.apartmentID;
                });
                if (currentAppUserUnits != undefined && currentAppUserUnits.length > 0) {
                    let userAppUnit = currentAppUserUnits[0];
                    this.insertGroupUser(this.userId, userAppUnit.roleId, userAppUnit.apartmentBlockId, userAppUnit.apartmentBlockUnitId, interestGroup.broadCastGroupCategoryId);
                }
            });
        }
        // interestGroup.IsAssigned=!interestGroup.IsAssigned;
    }
    removeUser(broadCastGroupCategoryUserId) {
        var params = {
            broadCastGroupCategoryUserId: broadCastGroupCategoryUserId,
            deleteBy: this.userId
        };
        this.broadcastService.deleteBroadCastGroupCategoryUser(params).subscribe((res) => {
            this.sharedService.setAlertMessage("User has been removed from interest group successfully");
            this.getAllGoupUsers();
        });
        //}
    }
    insertGroupUser(userId, roleId, blockId, unitId, broadCastGroupCategoryId) {
        let broadCastGroupCategoryUser = {
            'broadCastGroupCategoryUserID': 0,
            'broadCastGroupCategoryID': broadCastGroupCategoryId,
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
        let params = {
            'broadcast': broadCastGroupCategoryUser
        };
        this.broadcastService.upsertBroadCastGroupCategoryUser(params).subscribe((res) => {
            if (res.message) {
                this.sharedService.setAlertMessage("Interest groups mapping to user(s) added successfully");
                this.getAllGoupUsers();
            }
        });
    }
};
ProfileInterestGroupComponent.ctorParameters = () => [
    { type: _api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] }
];
ProfileInterestGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-interest-group',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-interest-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-interest-group.component.scss */ "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        _api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]])
], ProfileInterestGroupComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtbGVhc2UtaW5mby9jcmVhdGUtbGVhc2UtaW5mby9jcmVhdGUtbGVhc2UtaW5mby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CreateLeaseInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLeaseInfoComponent", function() { return CreateLeaseInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");



let CreateLeaseInfoComponent = class CreateLeaseInfoComponent {
    constructor(dialogRef, data, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.title = data.title;
        this.label_1 = data.label_1;
        this.label_2 = data.label_2;
        this.listData = data.data;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close(false);
    }
};
CreateLeaseInfoComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
CreateLeaseInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-lease-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-lease-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-lease-info.component.scss */ "./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], CreateLeaseInfoComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".a-space {\n  margin: 40px 0 4px 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC91c2VyL215LXByb2ZpbGUvY29tcG9uZW50cy9wcm9maWxlLWxlYXNlLWluZm8vcHJvZmlsZS1sZWFzZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL215LXByb2ZpbGUvY29tcG9uZW50cy9wcm9maWxlLWxlYXNlLWluZm8vcHJvZmlsZS1sZWFzZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsK0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtbGVhc2UtaW5mby9wcm9maWxlLWxlYXNlLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5hLXNwYWNlIHtcbiAgICBtYXJnaW46IDQwcHggMCA0cHggMCAhaW1wb3J0YW50O1xuICB9IiwiLmEtc3BhY2Uge1xuICBtYXJnaW46IDQwcHggMCA0cHggMCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProfileLeaseInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLeaseInfoComponent", function() { return ProfileLeaseInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Rent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Rent */ "./src/app/api/controllers/Rent.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _create_lease_info_create_lease_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-lease-info/create-lease-info.component */ "./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");












let ProfileLeaseInfoComponent = class ProfileLeaseInfoComponent {
    constructor(router, route, userService, rentService, apartmentService, lookupService, sharedService, cookieService, dialog) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.rentService = rentService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.isDataLoaded = false;
        this.isEdit = false;
    }
    ngOnInit() {
        this.rent = {};
        this.userId = this.route.params['value'].id;
        let params = {
            userId: parseInt(this.userId)
        };
        this.apartmentService.getApartmentBlockUnitByUserId(params).subscribe((res) => {
            let data = res[0] || {};
            this.apartmentBlockUnitId = data.apartmentBlockUnitId;
            this.getListData();
        }, error => {
            console.log(error);
        });
    }
    getListData() {
        this.rentService.getAllApartmentBlockUnitRents().subscribe((res) => {
            this.rentListData = res.filter(data => {
                data.startDate = moment__WEBPACK_IMPORTED_MODULE_5__(data.startDate).format('MM/DD/YYYY');
                data.expiryDate = moment__WEBPACK_IMPORTED_MODULE_5__(data.expiryDate).format('MM/DD/YYYY');
                return data.isActive && data.apartmentBlockUnitId == this.apartmentBlockUnitId;
            });
            let length = this.rentListData.length - 1;
            this.rent = this.rentListData[length];
            this.isDataLoaded = true;
        }, error => {
            console.log(error);
        });
    }
    submitLeaseInfoForm(form) {
        this.isDataLoaded = false;
        let details = {
            "apartmentBlockUnitId": this.apartmentBlockUnitId,
            "startDate": this.rent.startDate,
            "expiryDate": this.rent.expiryDate,
            "rentAmount": parseInt(this.rent.rentAmount),
            "advanceAmount": parseInt(this.rent.advanceAmount),
            "leaseAmount": parseInt(this.rent.leaseAmount),
            "rentTypeId": 376,
            "notes": "string",
            "field1": "string",
            "field2": "string",
            "isActive": true,
            "insertedBy": this.userId,
            "insertedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString(),
            "updatedBy": this.userId,
            "updatedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString()
        };
        let AddApartmentBlockUnitRentParams = {
            apartmentBlockUnitRent: details
        };
        this.rentService.addApartmentBlockUnitRent(AddApartmentBlockUnitRentParams).subscribe((res) => {
            if (res.message) {
                this.rent = {};
                this.sharedService.setAlertMessage("Lease Info added successfully");
                this.getListData();
                this.isEdit = false;
            }
            this.isDataLoaded = true;
        }, error => {
            this.isDataLoaded = true;
            console.log(error);
        });
    }
    showEditForm(type) {
        this.isEdit = !this.isEdit;
        if (type == 'reset') {
            this.rent = {};
        }
        else {
            let length = this.rentListData.length - 1;
            this.rent = this.rentListData[length];
        }
    }
    showHistory() {
        const dialogRef = this.dialog.open(_create_lease_info_create_lease_info_component__WEBPACK_IMPORTED_MODULE_10__["CreateLeaseInfoComponent"], {
            width: '400px',
            data: {
                title: 'Rental History',
                label_1: 'Start Date',
                label_2: 'Expiry Date',
                data: this.rentListData
            }
        });
    }
};
ProfileLeaseInfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: src_app_api_controllers_Rent__WEBPACK_IMPORTED_MODULE_7__["RentService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
];
ProfileLeaseInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-lease-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-lease-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-lease-info.component.scss */ "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        src_app_api_controllers_Rent__WEBPACK_IMPORTED_MODULE_7__["RentService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]])
], ProfileLeaseInfoComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtcGV0LWRldGFpbHMvcHJvZmlsZS1wZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProfilePetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePetDetailsComponent", function() { return ProfilePetDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Pet */ "./src/app/api/controllers/Pet.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let ProfilePetDetailsComponent = class ProfilePetDetailsComponent {
    constructor(router, route, userService, petService, apartmentService, sharedService, lookupService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.petService = petService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isEdit = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    showEditForm() {
        this.isEdit = !this.isEdit;
    }
    getPetType(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.petTypeList, function (item) {
            if (item.lookupValueId === id) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName;
        }
    }
    getDate(date) {
        if (date === undefined || date.length == 0) {
            return "";
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD-MM-YY");
        }
    }
    deletePet() {
        let params = {
            petId: parseInt(this.pet.petId),
            deleteBy: parseInt(this.cookieService.get('userId'))
        };
        this.petService.deletePet(params).subscribe((res) => {
            if (res.message) {
                this.isDataLoaded = true;
                this.sharedService.setAlertMessage("Pet deleted");
                this.outputParams.emit(true);
            }
            else {
                this.isDataLoaded = true;
            }
        });
    }
    submitProfilPetForm(form) {
        this.isDataLoaded = false;
        if (!this.isEdit) {
            let details = {
                "petTypeId": parseInt(this.pet.petTypeId),
                "dob": this.pet.dob,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": "2020-03-27T07:50:54.680Z"
            };
            let params = {
                pet: details
            };
            this.petService.addPet(params).subscribe((res) => {
                if (res.message) {
                    var unitDetails = {
                        "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
                        "petId": res.message,
                        "isActive": true,
                        "insertedBy": parseInt(this.cookieService.get('userId')),
                        "insertedOn": new Date().toISOString(),
                        "updatedBy": 0,
                        "updatedOn": "2020-03-27T07:52:53.767Z"
                    };
                    let params = {
                        apartmentBlockUnitPet: unitDetails
                    };
                    this.petService.addApartmentBlockUnitPet(params).subscribe((res) => {
                        if (res.message) {
                            this.isDataLoaded = true;
                            this.sharedService.setAlertMessage("Pet added successfully");
                            this.outputParams.emit(true);
                        }
                        else {
                            this.isDataLoaded = true;
                        }
                    });
                }
                else {
                    this.isDataLoaded = true;
                }
            });
        }
        else {
            let details = {
                "petId": this.pet.petId,
                "petTypeId": parseInt(this.pet.petTypeId),
                "dob": this.pet.dob,
                "isActive": this.pet.isActive,
                "insertedBy": this.pet.insertedBy,
                "insertedOn": this.pet.insertedOn,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString()
            };
            let params = {
                pet: details
            };
            this.petService.updatePet(params).subscribe((res) => {
                if (res.message) {
                    var unitDetails = {
                        "apartmentBlockUnitPetId": parseInt(this.petUnit.apartmentBlockUnitPetId),
                        "apartmentBlockUnitId": parseInt(this.petUnit.apartmentBlockUnitId),
                        "petId": parseInt(this.pet.petId),
                        "isActive": this.petUnit.isActive,
                        "insertedBy": this.petUnit.insertedBy,
                        "insertedOn": this.petUnit.insertedOn,
                        "updatedBy": parseInt(this.cookieService.get('userId')),
                        "updatedOn": new Date().toISOString()
                    };
                    let params = {
                        apartmentBlockUnitPet: unitDetails
                    };
                    this.petService.updateApartmentBlockUnitPet(params).subscribe((res) => {
                        if (res.message) {
                            this.isDataLoaded = true;
                            this.sharedService.setAlertMessage("Pet updated successfully");
                            this.outputParams.emit(true);
                        }
                        else {
                            this.isDataLoaded = true;
                        }
                    });
                }
                else {
                    this.isDataLoaded = true;
                }
            });
        }
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
        }
        else {
            this.userId = parseInt(this.cookieService.get('userId'));
        }
        this.pet = {};
        if (this.petData != undefined) {
            this.petUnit = this.petData;
            this.pet = this.petData.pet;
        }
        else {
            this.pet.petTypeId = "";
        }
        this.isDataLoaded = true;
        let petTypeParams = {
            LookupTypeId: 85
        };
        this.lookupService.getLookupValueByLookupTypeId(petTypeParams).subscribe((res) => {
            this.petTypeList = res;
        });
    }
    ngOnChanges(changes) {
    }
};
ProfilePetDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__["PetService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProfilePetDetailsComponent.prototype, "petData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], ProfilePetDetailsComponent.prototype, "isPetNew", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProfilePetDetailsComponent.prototype, "apartmentBlockUnitId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProfilePetDetailsComponent.prototype, "outputParams", void 0);
ProfilePetDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-pet-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-pet-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-pet-details.component.scss */ "./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__["PetService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], ProfilePetDetailsComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-pet/profile-pet.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-pet/profile-pet.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtcGV0L3Byb2ZpbGUtcGV0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-pet/profile-pet.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-pet/profile-pet.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfilePetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePetComponent", function() { return ProfilePetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Pet */ "./src/app/api/controllers/Pet.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let ProfilePetComponent = class ProfilePetComponent {
    constructor(router, route, userService, petService, apartmentService, sharedService, lookupService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.petService = petService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isUserDataLoaded = false;
        this.isUnitSelected = false;
        this.userUnitId = "";
        this.isError = false;
        this.errorMessage = "";
        this.isPetsAvailable = false;
    }
    showUnitDetails(id) {
        this.isUserDataLoaded = false;
        this.isUnitSelected = true;
        let petListParams = {
            apartmentBlockUnitId: parseInt(id)
        };
        this.petService.getAllPetsByApartmentBlockUnitId(petListParams).subscribe((res) => {
            if (res.length != 0) {
                this.petDataList = res.filter(item => { return item.pet.isActive; });
                this.isPetsAvailable = true;
            }
            else {
                this.isPetsAvailable = false;
            }
            this.isUserDataLoaded = true;
        });
    }
    getUnitName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.unitNameList, function (item) {
            if (item.apartmentBlockUnitId === id) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].apartmentBlockUnitNumber;
        }
    }
    getPetType(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.petTypeList, function (item) {
            if (item.lookupValueId === id) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName;
        }
    }
    getDate(date) {
        if (date === undefined || date.length == 0) {
            return "";
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD-MM-YY");
        }
    }
    getParams(event) {
        if (event) {
            let petListParams = {
                apartmentBlockUnitId: parseInt(this.userUnitId)
            };
            this.petService.getAllPetsByApartmentBlockUnitId(petListParams).subscribe((res) => {
                if (res.length != 0) {
                    this.petDataList = res.filter(item => { return item.pet.isActive; });
                    this.isPetsAvailable = true;
                }
                else {
                    this.isPetsAvailable = false;
                }
                this.isUserDataLoaded = true;
            });
        }
    }
    isPetsNotAvailable() {
        return this.petDataList.length == 0 ? true : false;
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
        }
        else {
            this.userId = parseInt(this.cookieService.get('userId'));
        }
        this.unitNameList = [];
        let blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe((res) => {
            this.blockData = res;
        });
        let petParams = {
            LookupTypeId: 85
        };
        this.lookupService.getLookupValueByLookupTypeId(petParams).subscribe((res) => {
            this.petTypeList = res;
        });
        let unitParams = {
            LookupTypeId: 1
        };
        this.lookupService.getLookupValueByLookupTypeId(unitParams).subscribe((res) => {
            this.unitTypeData = res;
            this.apartmentService.getAllApartmentBlockUnitUsersByUserId(this.userId).subscribe((unit) => {
                this.unitListData = unit;
                underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.unitListData, item => {
                    this.apartmentService.getApartmentBlockUnitById(item.apartmentBlockUnitId).subscribe((data) => {
                        this.unitNameList.push(data[0]);
                        this.isUserDataLoaded = true;
                    }, error => {
                    });
                });
            }, error => {
            });
        });
    }
};
ProfilePetComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__["PetService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProfilePetComponent.prototype, "userId", void 0);
ProfilePetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-pet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-pet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-pet/profile-pet.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-pet.component.scss */ "./src/app/user/my-profile/components/profile-pet/profile-pet.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Pet__WEBPACK_IMPORTED_MODULE_4__["PetService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], ProfilePetComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtdW5pdC1kZXRhaWxzL3Byb2ZpbGUtdW5pdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProfileUnitDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUnitDetailsComponent", function() { return ProfileUnitDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");









let ProfileUnitDetailsComponent = class ProfileUnitDetailsComponent {
    constructor(router, route, userService, apartmentService, sharedService, lookupService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isUserDataLoaded = false;
        this.isEdit = false;
        this.userUnitId = "";
        this.isBlockSelected = false;
        this.isUnitSelected = false;
        this.isError = false;
        this.errorMessage = "";
    }
    showEditForm() {
        this.isEdit = !this.isEdit;
        this.isBlockSelected = false;
    }
    getUnits(id) {
        let params = {
            apartmentBlockId: parseInt(id)
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe((res) => {
            this.blockUnitData = res;
            this.isBlockSelected = true;
        });
    }
    getUnitType(name) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.unitTypeData, function (item) {
            if (item.lookupValueName === name)
                return item;
        });
        if (data === undefined || data.length == 0) {
            this.unitTypeId = null;
        }
        else {
            this.unitTypeId = data[0].lookupValueId;
        }
    }
    getUnitName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.unitNameList, function (item) {
            if (item.apartmentBlockUnitId === id) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].apartmentBlockUnitNumber;
        }
    }
    showUnitDetails(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.unitNameList, function (item) {
            if (item.apartmentBlockUnitId == id) {
                return item;
            }
        });
        this.isUnitSelected = true;
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.block = data[0];
            this.getUnits(this.block.apartmentBlockId);
            this.getUnitType(this.block.unitType);
            this.getUnitUserId(id);
        }
        console.log(this.block);
    }
    getUnitUserId(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.unitListData, function (item) {
            if (item.apartmentBlockUnitId == id) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.apartmentBlockUnitUserId = data[0].apartmentBlockUnitUserId;
        }
    }
    submitProfileUnitForm(form) {
        this.isUserDataLoaded = false;
        let apartmentBlockUnitUser = {
            "apartmentBlockUnitUserId": parseInt(this.apartmentBlockUnitUserId),
            "apartmentBlockUnitId": parseInt(this.block.apartmentBlockUnitId),
            "userId": parseInt(this.cookieService.get('userId')),
            "userTypeId": parseInt(this.userType),
            "isPrimaryContact": true,
            "isActive": this.block.isActive,
            "insertedBy": 0,
            "insertedOn": "2019-12-14T07:01:44.740Z",
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": "2019-12-14T07:01:44.740Z"
        };
        let apartmentBlockUnitUserParams = {
            apartmentBlockUnitUser: apartmentBlockUnitUser
        };
        this.apartmentService.updateApartmentBlockUnitUser(apartmentBlockUnitUserParams).subscribe((res) => {
            if (res.message) {
                let details = {
                    "apartmentBlockUnitId": parseInt(this.block.apartmentBlockUnitId),
                    "apartmentBlockUnitNumber": this.block.apartmentBlockUnitNumber,
                    "apartmentBlockId": parseInt(this.block.apartmentBlockId),
                    "unitTypeId": this.unitTypeId,
                    "builtupArea": this.block.builtupArea,
                    "carpetArea": this.block.carpetArea,
                    "intercom": this.block.intercom,
                    "cars": parseInt(this.block.cars),
                    "isAvailableForRent": this.block.isAvailableForRent,
                    "availableDate": "2019-12-13T07:07:59.550Z",
                    "rentAmount": this.block.rentAmount,
                    "advanceAmount": this.block.advanceAmount,
                    "isPetsAllowed": this.block.isPetsAllowed,
                    "isFurnished": this.block.isFurnished,
                    "isVacant": this.block.isVacant,
                    "propertyManagerId": null,
                    "isActive": this.block.isActive,
                    "insertedBy": this.block.insertedBy,
                    "insertedOn": this.block.insertedOn,
                    "updatedBy": parseInt(this.cookieService.get('userId')),
                    "updatedOn": new Date().toISOString()
                };
                let apartmentBlockUnitParams = {
                    apartmentBlockUnit: details
                };
                this.apartmentService.updateApartmentBlockUnit(apartmentBlockUnitParams).subscribe((res) => {
                    if (res.message) {
                        this.isUserDataLoaded = true;
                        this.isEdit = false;
                        this.sharedService.setAlertMessage("Unit updated successfully");
                        this.isBlockSelected = false;
                    }
                    else {
                        this.isError = true;
                        this.errorMessage = res.errorMessage;
                    }
                }, error => {
                });
            }
            else {
                this.isError = true;
                this.errorMessage = res.errorMessage;
            }
        }, error => {
            this.isError = true;
            this.errorMessage = "Some error occured";
        });
    }
    ngOnInit() {
        this.block = {};
        if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
        }
        else {
            this.userId = parseInt(this.cookieService.get('userId'));
        }
        this.unitNameList = [];
        let blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe((res) => {
            this.blockData = res;
        });
        let queryParamBase = {
            userId: this.userId,
        };
        // get role
        this.userService.getRolesByUserId(queryParamBase).subscribe((data) => {
            this.userType = data[0].roleId.toString();
        }, error => {
        });
        let unitTypeParams = {
            LookupTypeId: 1
        };
        this.lookupService.getLookupValueByLookupTypeId(unitTypeParams).subscribe((res) => {
            this.unitTypeData = res;
            let queryParamBase = {
                userId: this.userId,
            };
            this.apartmentService.getAllApartmentBlockUnitUsersByUserId(queryParamBase).subscribe((unit) => {
                this.unitListData = unit;
                underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.unitListData, item => {
                    let queryParamBase = {
                        apartmentBlockUnitId: item.apartmentBlockUnitId
                    };
                    this.apartmentService.getApartmentBlockUnitById(queryParamBase).subscribe((data) => {
                        this.unitNameList.push(data[0]);
                        this.isUserDataLoaded = true;
                        let id = this.unitListData[0].apartmentBlockUnitId;
                        this.showUnitDetails(id);
                    }, error => {
                    });
                });
            }, error => {
            });
        });
    }
};
ProfileUnitDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProfileUnitDetailsComponent.prototype, "userId", void 0);
ProfileUnitDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-unit-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-unit-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-unit-details.component.scss */ "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], ProfileUnitDetailsComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtdW5pdC1zdGFmZnMvcHJvZmlsZS11bml0LXN0YWZmcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProfileUnitStaffsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUnitStaffsComponent", function() { return ProfileUnitStaffsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfileUnitStaffsComponent = class ProfileUnitStaffsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileUnitStaffsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-unit-staffs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-unit-staffs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-unit-staffs.component.scss */ "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ProfileUnitStaffsComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtdXNlci1hYnNlbmNlL3Byb2ZpbGUtdXNlci1hYnNlbmNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProfileUserAbsenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUserAbsenceComponent", function() { return ProfileUserAbsenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _profile_lease_info_create_lease_info_create_lease_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile-lease-info/create-lease-info/create-lease-info.component */ "./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");











let ProfileUserAbsenceComponent = class ProfileUserAbsenceComponent {
    constructor(router, route, injector, apartmentService, lookupService, sharedService, cookieService, dialog) {
        this.router = router;
        this.route = route;
        this.injector = injector;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.isDataLoaded = false;
        this.isEdit = false;
    }
    ngOnInit() {
        this.data = {};
        this.userId = this.route.params['value'].id;
        let queryParamBase = {
            userId: this.userId,
        };
        this.apartmentService.getAllApartmentBlockUnitUsersByUserId(queryParamBase).subscribe((unit) => {
            this.unitListData = unit;
            this.apartmentService.getApartmentBlockUnitByUserId(queryParamBase).subscribe((res) => {
                let data = res[0] || {};
                this.apartmentBlockUnitId = data.apartmentBlockUnitId;
                this.getUnitUserId(this.apartmentBlockUnitId);
            }, error => {
                console.log(error);
            });
        }, error => {
        });
    }
    getUnitUserId(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.unitListData, function (item) {
            if (item.apartmentBlockUnitId == id) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.apartmentBlockUnitUserId = data[0].apartmentBlockUnitUserId;
            this.getHistoryData();
        }
    }
    getHistoryData() {
        let params = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "ApartmentBlockUnitUserId": this.apartmentBlockUnitUserId
        };
        this.apartmentService.getOutofCondobyApartmentblockunituser(params).subscribe((unit) => {
            this.historyListData = unit.filter(data => {
                data.outFrom = moment__WEBPACK_IMPORTED_MODULE_5__(data.outFrom).format('MM/DD/YYYY');
                data.outTo = moment__WEBPACK_IMPORTED_MODULE_5__(data.outTo).format('MM/DD/YYYY');
                data.startDate = moment__WEBPACK_IMPORTED_MODULE_5__(data.outFrom).format('MM/DD/YYYY');
                data.expiryDate = moment__WEBPACK_IMPORTED_MODULE_5__(data.outTo).format('MM/DD/YYYY');
                return data.isActive;
            });
            let length = this.historyListData.length - 1;
            this.data = this.historyListData[length];
            this.isDataLoaded = true;
        }, error => {
        });
    }
    showEditForm(type) {
        this.isEdit = !this.isEdit;
        if (type == 'reset') {
            this.data = {};
        }
        else {
            let length = this.historyListData.length - 1;
            this.data = this.historyListData[length];
        }
    }
    showHistory() {
        const dialogRef = this.dialog.open(_profile_lease_info_create_lease_info_create_lease_info_component__WEBPACK_IMPORTED_MODULE_8__["CreateLeaseInfoComponent"], {
            width: '400px',
            data: {
                title: 'Out Of Condo History',
                label_1: 'From Date',
                label_2: 'To Date',
                data: this.historyListData
            }
        });
    }
    submitAbsenceForm(form) {
        this.isDataLoaded = false;
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentBlockUnitId": this.apartmentBlockUnitId,
            "outFrom": this.data.outFrom,
            "outTo": this.data.outTo,
            "localContactP1": this.data.localContactP1,
            "localContactP1phone": this.data.localContactP1phone,
            "localcontactP1alternatephone": this.data.localcontactP1alternatephone,
            "localcontactP1email": this.data.localcontactP1email,
            "localContactP2": this.data.localContactP2,
            "localContactP2phone": this.data.localContactP2phone,
            "localcontactP2alternatephone": this.data.localcontactP2alternatephone,
            "localcontactP2email": this.data.localcontactP2email,
            "outofCondoStatusId": 5,
            "isActive": true,
            "insertedBy": this.userId,
            "insertedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString(),
            "updatedBy": this.userId,
            "updatedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString(),
            "apartmentBlockUnitUserId": this.apartmentBlockUnitUserId
        };
        let params = {
            apartmentLongAbsence: details
        };
        this.apartmentService.addApartmentLongAbsence(params).subscribe((data) => {
            if (data.message) {
                this.data = {};
                this.sharedService.setAlertMessage("Out of condo Info added successfully");
                this.getHistoryData();
                this.isEdit = false;
            }
            this.isDataLoaded = true;
        }, error => {
            this.isDataLoaded = false;
        });
    }
};
ProfileUserAbsenceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
];
ProfileUserAbsenceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-user-absence',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-user-absence.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-user-absence.component.scss */ "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
], ProfileUserAbsenceComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtdmVoaWNsZS1kZXRhaWxzL3Byb2ZpbGUtdmVoaWNsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProfileVehicleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileVehicleDetailsComponent", function() { return ProfileVehicleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");










let ProfileVehicleDetailsComponent = class ProfileVehicleDetailsComponent {
    constructor(router, route, userService, vehicleService, apartmentService, sharedService, lookupService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.vehicleService = vehicleService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isEdit = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    showEditForm() {
        this.isEdit = !this.isEdit;
    }
    getVehicleType(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.vehicleTypeList, function (item) {
            if (item.lookupValueId === id) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName;
        }
    }
    submitProfilVehicleForm(form) {
        this.isDataLoaded = false;
        if (!this.isEdit) {
            let details = {
                "vehicleNumber": this.vehicle.vehicleNumber,
                "vehicleTypeId": parseInt(this.vehicle.vehicleTypeId),
                "vehicleManufacturer": this.vehicle.vehicleManufacturer,
                "vehicleModel": this.vehicle.vehicleModel,
                "vehicleDriverNumber": this.vehicle.vehicleDriverNumber,
                "vehicleColor": this.vehicle.vehicleColor,
                "isActive": this.vehicle.isActive,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": "2020-03-26T20:23:25.938Z"
            };
            let vehicleParams = {
                vehicle: details
            };
            this.vehicleService.addVehicle(vehicleParams).subscribe((res) => {
                if (res.message) {
                    var unitDetails = {
                        "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
                        "vehicleId": res.message,
                        "userId": parseInt(this.userId),
                        "documentId": null,
                        "parkingSlotId": null,
                        "stickerNumber": "string",
                        "rfid": "string",
                        "fromDate": "2020-03-26T20:30:26.576Z",
                        "toDate": "2020-03-26T20:30:26.576Z",
                        "isPassIssued": true,
                        "isActive": true,
                        "insertedBy": parseInt(this.cookieService.get('userId')),
                        "insertedOn": new Date().toISOString(),
                        "updatedBy": 0,
                        "updatedOn": "2020-03-26T20:30:26.576Z"
                    };
                    let unitParams = {
                        apartmentBlockUnitVehicle: unitDetails
                    };
                    this.vehicleService.addApartmentBlockUnitVehicle(unitParams).subscribe((res) => {
                        if (res.message) {
                            this.isDataLoaded = true;
                            this.sharedService.setAlertMessage("Vehicle added successfully");
                            this.outputParams.emit(true);
                        }
                        else {
                            this.isDataLoaded = true;
                        }
                    });
                }
                else {
                    this.isDataLoaded = true;
                }
            });
        }
        else {
            let details = {
                "vehicleId": parseInt(this.vehicle.vehicleId),
                "vehicleNumber": this.vehicle.vehicleNumber,
                "vehicleTypeId": parseInt(this.vehicle.vehicleTypeId),
                "vehicleManufacturer": this.vehicle.vehicleManufacturer,
                "vehicleModel": this.vehicle.vehicleModel,
                "vehicleDriverNumber": this.vehicle.vehicleDriverNumber,
                "vehicleColor": this.vehicle.vehicleColor,
                "isActive": this.vehicle.isActive,
                "insertedBy": this.vehicle.insertedBy,
                "insertedOn": this.vehicle.insertedOn,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString()
            };
            let vehicleParams = {
                vehicle: details
            };
            this.vehicleService.updateVehicle(vehicleParams).subscribe((res) => {
                if (res.message) {
                    var unitDetails = {
                        "apartmentBlockUnitVehicleId": parseInt(this.vehicleUnit.apartmentBlockUnitVehicleId),
                        "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
                        "vehicleId": parseInt(this.vehicle.vehicleId),
                        "userId": parseInt(this.userId),
                        "documentId": null,
                        "parkingSlotId": null,
                        "stickerNumber": "string",
                        "rfid": "string",
                        "fromDate": "2020-03-26T20:30:26.576Z",
                        "toDate": "2020-03-26T20:30:26.576Z",
                        "isPassIssued": this.vehicle.isPassIssued,
                        "isActive": this.vehicle.isActive,
                        "insertedBy": this.vehicle.insertedBy,
                        "insertedOn": this.vehicle.insertedOn,
                        "updatedBy": parseInt(this.cookieService.get('userId')),
                        "updatedOn": new Date().toISOString()
                    };
                    let unitParams = {
                        apartmentBlockUnitVehicle: unitDetails
                    };
                    this.vehicleService.updateApartmentBlockUnitVehicle(unitParams).subscribe((res) => {
                        if (res.message) {
                            this.isDataLoaded = true;
                            this.sharedService.setAlertMessage("Vehicle updated successfully");
                            this.outputParams.emit(true);
                        }
                        else {
                            this.isDataLoaded = true;
                        }
                    });
                }
                else {
                    this.isDataLoaded = true;
                }
            });
        }
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
        }
        else {
            this.userId = parseInt(this.cookieService.get('userId'));
        }
        this.vehicleUnit = {};
        this.vehicle = {};
        if (this.vehicleData != undefined) {
            this.vehicleUnit = this.vehicleData;
            this.vehicle = this.vehicleData.vehicle;
        }
        else {
            this.vehicle.vehicleTypeId = "";
        }
        this.isDataLoaded = true;
        let vehcileTypeParams = {
            LookupTypeId: 2
        };
        this.lookupService.getLookupValueByLookupTypeId(vehcileTypeParams).subscribe((res) => {
            this.vehicleTypeList = res;
        });
    }
    ngOnChanges(changes) {
    }
};
ProfileVehicleDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__["VehicleService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProfileVehicleDetailsComponent.prototype, "vehicleData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], ProfileVehicleDetailsComponent.prototype, "isVehicleNew", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProfileVehicleDetailsComponent.prototype, "apartmentBlockUnitId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProfileVehicleDetailsComponent.prototype, "outputParams", void 0);
ProfileVehicleDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-vehicle-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-vehicle-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-vehicle-details.component.scss */ "./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__["VehicleService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], ProfileVehicleDetailsComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUtdmVoaWNsZXMvcHJvZmlsZS12ZWhpY2xlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProfileVehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileVehiclesComponent", function() { return ProfileVehiclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");










let ProfileVehiclesComponent = class ProfileVehiclesComponent {
    constructor(router, route, userService, vehicleService, apartmentService, sharedService, lookupService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.vehicleService = vehicleService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isUserDataLoaded = false;
        this.isUnitSelected = false;
        this.userUnitId = "";
        this.isError = false;
        this.errorMessage = "";
        this.isVehicleAvailable = false;
    }
    showUnitDetails(id) {
        this.isUserDataLoaded = false;
        this.isUnitSelected = true;
        let vehicleListParams = {
            apartmentBlockUnitId: parseInt(id)
        };
        this.vehicleService.getAllVehiclesByApartmentBlockUnitId(vehicleListParams).subscribe((res) => {
            this.vehicleDataList = res;
            this.isUserDataLoaded = true;
        });
        let parkingListParams = {
            apartmentIdBlockUnitId: parseInt(id)
        };
        this.vehicleService.getParkingSlotByApartmentIdUnitId(parkingListParams).subscribe((res) => {
            this.parkingSlotsDataList = res;
        });
    }
    getVehicleType(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.vehicleTypeList, function (item) {
            if (item.lookupValueId === id) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName;
        }
    }
    getUnitName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.unitNameList, function (item) {
            if (item.apartmentBlockUnitId === id) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].apartmentBlockUnitNumber;
        }
    }
    getParams(event) {
        if (event) {
            let params = {
                apartmentBlockUnitId: parseInt(this.userUnitId)
            };
            this.vehicleService.getAllVehiclesByApartmentBlockUnitId(params).subscribe((res) => {
                this.vehicleDataList = res;
                this.isUserDataLoaded = true;
            });
        }
    }
    isPlotNotAvailable() {
        return this.parkingSlotsDataList == 0 ? true : false;
    }
    isVehicleNotAvailable() {
        return this.vehicleDataList == 0 ? true : false;
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.userId = this.route.params['value'].id;
        }
        else {
            this.userId = parseInt(this.cookieService.get('userId'));
        }
        this.unitNameList = [];
        let blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe((res) => {
            this.blockData = res;
        });
        let vehicleTypeParams = {
            LookupTypeId: 2
        };
        this.lookupService.getLookupValueByLookupTypeId(vehicleTypeParams).subscribe((res) => {
            this.vehicleTypeList = res;
        });
        let unitTypeParams = {
            LookupTypeId: 1
        };
        this.lookupService.getLookupValueByLookupTypeId(unitTypeParams).subscribe((res) => {
            this.unitTypeData = res;
            this.apartmentService.getAllApartmentBlockUnitUsersByUserId(this.userId).subscribe((unit) => {
                this.unitListData = unit;
                underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.unitListData, item => {
                    this.apartmentService.getApartmentBlockUnitById(item.apartmentBlockUnitId).subscribe((data) => {
                        this.unitNameList.push(data[0]);
                        this.isUserDataLoaded = true;
                        let id = this.unitListData[0].apartmentBlockUnitId;
                        this.showUnitDetails(id);
                    }, error => {
                    });
                });
            }, error => {
            });
        });
    }
};
ProfileVehiclesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__["VehicleService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ProfileVehiclesComponent.prototype, "userId", void 0);
ProfileVehiclesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-vehicles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-vehicles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-vehicles.component.scss */ "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__["VehicleService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], ProfileVehiclesComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb3BlcnR5LW1hbmFnZXIvcHJvcGVydHktbWFuYWdlci1jcmVhdGUvcHJvcGVydHktbWFuYWdlci1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PropertyManagerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyManagerCreateComponent", function() { return PropertyManagerCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/PropertyManager */ "./src/app/api/controllers/PropertyManager.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");












let PropertyManagerCreateComponent = class PropertyManagerCreateComponent {
    constructor(router, route, injector, dialog, userService, propertyManagerService, apartmentService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.propertyManagerService = propertyManagerService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = true;
        this.isError = false;
        this.errorMessage = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_11__["ModalService"]);
    }
    ngOnInit() {
        this.propertyData = {};
        this.userId = this.route.params['value'].id;
    }
    IsValidEmail(val) {
        var retVal = true;
        var rex = new RegExp(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/);
        var isValid = rex.test(val);
        if (!isValid) {
            retVal = false;
            var errorDetails = {
                msg: "Kindly enter proper email id",
                type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
        }
        return retVal;
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
    isValueValid(val) {
        return (val === undefined || val == null || val.length <= 0 || val === "") ? true : false;
    }
    submitPropertyManagerCreateForm(form) {
        this.isDataLoaded = false;
        let details = {
            "propertyManagerName": this.propertyData.propertyManagerName,
            "contactPerson": this.propertyData.contactPerson,
            "email": this.propertyData.email,
            "phone1": this.propertyData.phone1,
            "phone2": this.propertyData.phone2,
            "address1": this.propertyData.address1,
            "address2": this.propertyData.address2,
            "city": this.propertyData.city,
            "state": this.propertyData.state,
            "pin": this.propertyData.pin,
            "isActive": true,
            "insertedBy": this.userId,
            "insertedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString(),
            "updatedBy": this.userId,
            "updatedOn": moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).utc().format().toString()
        };
        let params = {
            propertyManager: details
        };
        this.propertyManagerService.addPropertyManager(params).subscribe((res) => {
            console.log('res', res);
            if (res.message) {
                this.sharedService.setAlertMessage("Property Manager added successfully");
                this.propertyData = {};
                this.isDataLoaded = true;
                this.outputParams.emit('close');
            }
        }, error => {
            this.isDataLoaded = true;
            console.log(error);
        });
    }
};
PropertyManagerCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PropertyManagerCreateComponent.prototype, "outputParams", void 0);
PropertyManagerCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-manager-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./property-manager-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./property-manager-create.component.scss */ "./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], PropertyManagerCreateComponent);



/***/ }),

/***/ "./src/app/user/my-profile/components/property-manager/property-manager.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/property-manager/property-manager.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXktcHJvZmlsZS9jb21wb25lbnRzL3Byb3BlcnR5LW1hbmFnZXIvcHJvcGVydHktbWFuYWdlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/my-profile/components/property-manager/property-manager.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/user/my-profile/components/property-manager/property-manager.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PropertyManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyManagerComponent", function() { return PropertyManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */ "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/PropertyManager */ "./src/app/api/controllers/PropertyManager.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");













let PropertyManagerComponent = class PropertyManagerComponent {
    constructor(router, route, injector, dialog, userService, propertyManagerService, apartmentService, vehicleService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.propertyManagerService = propertyManagerService;
        this.apartmentService = apartmentService;
        this.vehicleService = vehicleService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isError = false;
        this.errorMessage = false;
        this.isEdit = false;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_12__["ModalService"]);
    }
    ngOnInit() {
        this.userId = this.route.params['value'].id;
        let params = {
            userId: parseInt(this.userId)
        };
        this.apartmentService.getApartmentBlockUnitByUserId(params).subscribe((res) => {
            let data = res[0] || {};
            this.apartmentBlockUnitId = data.apartmentBlockUnitId;
            let param = {
                apartmentBlockUnitId: parseInt(this.apartmentBlockUnitId)
            };
            this.propertyManagerService.getPropertyManagerByApartmentBlockUnitId(param).subscribe((res) => {
                this.propertyData = res[0];
                this.isDataLoaded = true;
            }, error => {
                console.log(error);
            });
        }, error => {
            console.log(error);
        });
    }
    showEditForm() {
        this.isEdit = !this.isEdit;
    }
    IsValidEmail(val) {
        var retVal = true;
        var rex = new RegExp(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/);
        var isValid = rex.test(val);
        if (!isValid) {
            retVal = false;
            var errorDetails = {
                msg: "Kindly enter proper email id",
                type: "Error"
            };
            this.sharedService.setCustomAlertMessage(errorDetails);
        }
        return retVal;
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
    isValueValid(val) {
        return (val === undefined || val == null || val.length <= 0 || val === "") ? true : false;
    }
    submitpropertyManagerForm(form) {
        this.isDataLoaded = false;
        let details = {
            "propertyManagerId": this.propertyData.propertyManagerId,
            "propertyManagerName": this.propertyData.propertyManagerName,
            "contactPerson": this.propertyData.contactPerson,
            "email": this.propertyData.email,
            "phone1": this.propertyData.phone1,
            "phone2": this.propertyData.phone2,
            "address1": this.propertyData.address1,
            "address2": this.propertyData.address2,
            "city": this.propertyData.city,
            "state": this.propertyData.state,
            "pin": this.propertyData.pin,
            "isActive": this.propertyData.isActive,
            "insertedBy": this.propertyData.insertedBy,
            "insertedOn": this.propertyData.insertedOn,
            "updatedBy": this.userId,
            "updatedOn": new Date().toISOString()
        };
        let propertyManagerParams = {
            propertyManager: details
        };
        this.propertyManagerService.updatePropertyManager(propertyManagerParams).subscribe((res) => {
            console.log('res', res);
            if (res.message) {
                this.sharedService.setAlertMessage("Property Manager updated successfully");
                this.isEdit = false;
                let param = {
                    apartmentBlockUnitId: parseInt(this.apartmentBlockUnitId)
                };
                this.propertyManagerService.getPropertyManagerByApartmentBlockUnitId(param).subscribe((res) => {
                    this.propertyData = res[0] || {};
                    this.isDataLoaded = true;
                    console.log('propertyData', this.propertyData);
                }, error => {
                    console.log(error);
                });
            }
        }, error => {
            this.isDataLoaded = true;
            console.log(error);
        });
    }
    deletePropertyManager() {
        const message = `Are you sure want to delete?`;
        const dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogModel"]("Confirm Action", message);
        const dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["CommonConfirmModalComponent"], {
            panelClass: 'material',
            disableClose: true,
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                this.isDataLoaded = false;
                let details = {
                    "propertyManagerId": this.propertyData.propertyManagerId,
                    "deleteBy": this.userId
                };
                this.propertyManagerService.deletePropertyManager(details).subscribe((res) => {
                    if (res.message) {
                        this.sharedService.setAlertMessage("Property Manager Deleted successfully");
                    }
                }, error => {
                });
            }
        });
    }
};
PropertyManagerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_9__["VehicleService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
PropertyManagerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-manager',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./property-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/components/property-manager/property-manager.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./property-manager.component.scss */ "./src/app/user/my-profile/components/property-manager/property-manager.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_9__["VehicleService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], PropertyManagerComponent);



/***/ }),

/***/ "./src/app/user/my-profile/my-profile-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/my-profile/my-profile-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: MyProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileRoutingModule", function() { return MyProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile.component */ "./src/app/user/my-profile/my-profile.component.ts");
/* harmony import */ var _components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile-vehicles/profile-vehicles.component */ "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.ts");
/* harmony import */ var _components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile-family-members/profile-family-members.component */ "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.ts");
/* harmony import */ var _components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile-pet/profile-pet.component */ "./src/app/user/my-profile/components/profile-pet/profile-pet.component.ts");
/* harmony import */ var _components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/property-manager/property-manager.component */ "./src/app/user/my-profile/components/property-manager/property-manager.component.ts");
/* harmony import */ var _components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile-unit-details/profile-unit-details.component */ "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.ts");
/* harmony import */ var _components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile-unit-staffs/profile-unit-staffs.component */ "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.ts");
/* harmony import */ var _components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile-lease-info/profile-lease-info.component */ "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.ts");
/* harmony import */ var _components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile-interest-group/profile-interest-group.component */ "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.ts");
/* harmony import */ var _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile-basic/profile-basic.component */ "./src/app/user/my-profile/components/profile-basic/profile-basic.component.ts");
/* harmony import */ var _components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile-user-absence/profile-user-absence.component */ "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.ts");
/* harmony import */ var _components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/property-manager/property-manager-create/property-manager-create.component */ "./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.ts");















const routes = [
    { path: '', component: _my_profile_component__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"],
        children: [
            { path: '', redirectTo: 'basic', pathMatch: 'full' },
            { path: 'basic', component: _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_12__["ProfileBasicComponent"] },
            { path: 'basic/:id', component: _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_12__["ProfileBasicComponent"] },
            { path: 'unit/:id', component: _components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_8__["ProfileUnitDetailsComponent"] },
            { path: 'staffs/:id', component: _components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_9__["ProfileUnitStaffsComponent"] },
            { path: 'vehicles/:id', component: _components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_4__["ProfileVehiclesComponent"] },
            { path: 'pets/:id', component: _components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePetComponent"] },
            { path: 'propertymanager/:id', component: _components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerComponent"] },
            { path: 'propertymanager/create', component: _components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_14__["PropertyManagerCreateComponent"] },
            { path: 'family/:id', component: _components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_5__["ProfileFamilyMembersComponent"] },
            { path: 'lease/:id', component: _components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_10__["ProfileLeaseInfoComponent"] },
            { path: 'interest/:id', component: _components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_11__["ProfileInterestGroupComponent"] },
            { path: 'absence/:id', component: _components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_13__["ProfileUserAbsenceComponent"] },
            { path: '**', redirectTo: 'basic', pathMatch: 'full' }
        ]
    },
    { path: 'myprofile/basic', component: _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_12__["ProfileBasicComponent"] },
    { path: 'myprofile/basic/:id', component: _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_12__["ProfileBasicComponent"] },
    { path: 'myprofile/unit/:id', component: _components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_8__["ProfileUnitDetailsComponent"] },
    { path: 'myprofile/staffs/:id', component: _components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_9__["ProfileUnitStaffsComponent"] },
    { path: 'myprofile/vehicles/:id', component: _components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_4__["ProfileVehiclesComponent"] },
    { path: 'myprofile/pets/:id', component: _components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePetComponent"] },
    { path: 'myprofile/propertymanager/:id', component: _components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_7__["PropertyManagerComponent"] },
    { path: 'myprofile/propertymanager/create', component: _components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_14__["PropertyManagerCreateComponent"] },
    { path: 'myprofile/family/:id', component: _components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_5__["ProfileFamilyMembersComponent"] },
    { path: 'myprofile/lease/:id', component: _components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_10__["ProfileLeaseInfoComponent"] },
    { path: 'myprofile/interest/:id', component: _components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_11__["ProfileInterestGroupComponent"] },
    { path: 'myprofile/absence/:id', component: _components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_13__["ProfileUserAbsenceComponent"] }
];
let MyProfileRoutingModule = class MyProfileRoutingModule {
};
MyProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MyProfileRoutingModule);



/***/ }),

/***/ "./src/app/user/my-profile/my-profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/user/my-profile/my-profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-profile-wrapper .card.user-card .card-body {\n  padding: 30px 20px;\n}\n.my-profile-wrapper .card.user-card .card-body h5 {\n  padding: 0 0 2px 0;\n  color: #373946;\n}\n.my-profile-wrapper .card.user-card .profile-picture {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 80px !important;\n  overflow: hidden;\n  margin: 0 30px 0 0;\n}\n@media (max-width: 768px) {\n  .my-profile-wrapper .card.user-card .profile-picture {\n    width: 60px;\n    height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 60px !important;\n    margin: 0 15px 0 0;\n  }\n}\n.my-profile-wrapper .card.user-card p {\n  font-size: 1.4rem;\n  color: #5f5f5f;\n}\n.my-profile-wrapper .card.user-card .other {\n  margin: 8px 0 0 0 !important;\n}\n.my-profile-wrapper .card.user-card .other li {\n  margin: 0 30px 0 0;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.my-profile-wrapper .card.user-card .other li .icon {\n  width: 20px;\n  margin: 0 10px 0 0;\n}\n.my-profile-wrapper .card.user-card .other li .icon.phone {\n  width: 18px;\n}\n@media (max-width: 768px) {\n  .my-profile-wrapper .card.user-card .other {\n    margin: 20px 0 0 0 !important;\n  }\n  .my-profile-wrapper .card.user-card .other li {\n    display: block;\n  }\n  .my-profile-wrapper .card.user-card .other li:not(:last-child) {\n    margin: 0 0 10px 0;\n  }\n  .my-profile-wrapper .card.user-card .other li .icon {\n    margin: 0 16px 0 0;\n  }\n}\n.my-profile-wrapper .card.user-card .icon.edit {\n  width: 22px;\n  color: #5cd694;\n}\n.my-profile-wrapper .card .left-menubar {\n  border-right: 1px solid #eaeaea;\n  height: 100% !important;\n}\n.my-profile-wrapper .card .left-menubar h4 {\n  padding: 20px 0 40px 20px;\n  color: #373946;\n}\n.my-profile-wrapper .card .left-menubar .lists li {\n  border-top: 1px solid #eaeaea;\n  padding: 0;\n}\n.my-profile-wrapper .card .left-menubar .lists li a {\n  display: block;\n  font-size: 1.4rem;\n  color: #8391a1;\n  padding: 14px 20px;\n}\n.my-profile-wrapper .card .left-menubar .lists li a .icon {\n  position: relative;\n  top: -3px;\n  margin-right: 16px;\n}\n.my-profile-wrapper .card .left-menubar .lists li a .icon svg {\n  width: 20px;\n  height: 20px;\n  fill: #525e6c;\n}\n.my-profile-wrapper .card .left-menubar .lists li a .icon .truck {\n  width: 21px;\n  height: 21px;\n}\n.my-profile-wrapper .card .left-menubar .lists li a:hover {\n  text-decoration: none;\n  background-color: #f7f7f7;\n  color: #5cd694;\n}\n.my-profile-wrapper .card .left-menubar .lists li a:hover .icon svg {\n  fill: #5cd694;\n}\n.my-profile-wrapper .card .left-menubar .lists li a.active {\n  color: #5cd694;\n}\n.my-profile-wrapper .card .left-menubar .lists li a.active:before {\n  content: \"\";\n  width: 4px;\n  height: 100% !important;\n  background-color: #5cd694;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.my-profile-wrapper .card .left-menubar .lists li a.active .icon svg {\n  fill: #5cd694;\n}\n.my-profile-wrapper .card .left-menubar .lists li:first-child {\n  border-top: none;\n}\n.my-profile-wrapper .card .inner-content {\n  padding: 40px 25px 40px 0;\n}\n.my-profile-wrapper .card.user-details {\n  width: 100% !important;\n  transition: all 0.15s ease;\n}\n.my-profile-wrapper .card.user-details .main {\n  padding: 20px 15px;\n  overflow: auto;\n}\n.my-profile-wrapper .card.user-details .main h5 {\n  font-size: 2rem;\n  padding: 0 0 6px 0;\n  color: #3f51b5;\n}\n.my-profile-wrapper .card.user-details .main p {\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC91c2VyL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9taXhpbnMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRRztFQUNDLGtCQUFBO0FDUEo7QURRSTtFQUNDLGtCQUFBO0VBQ0EsY0VtRk07QUR6Rlg7QURTRztFR2tFRCxXSGpFbUI7RUdrRW5CLFlIbEVtQjtFR21FbkIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUE5RUQsOEJBQUE7RUhVRyxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURDSTtFQUpEO0lHa0VELFdIN0RvQjtJRzhEcEIsWUg5RG9CO0lHK0RwQixhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQTlFRCw4QkFBQTtJSGNJLGtCQUFBO0VDU0g7QUFDRjtBRFBHO0VJc0RELGlCQUFBO0VKcERLLGNFeUVJO0FEaEVYO0FEUEc7RUFDQyw0QkFBQTtBQ1NKO0FEUkk7RUFDQyxrQkFBQTtFSThCSCwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBYUEsaUJBQUE7RUo1Q0csY0V2QlE7QURxQ2I7QURiSztFQUNDLFdBQUE7RUFDQSxrQkFBQTtBQ2VOO0FEZE07RUFDQyxXQUFBO0FDZ0JQO0FEWkk7RUFmRDtJQWdCRSw2QkFBQTtFQ2VIO0VEZEc7SUFPQyxjQUFBO0VDVUo7RURoQkk7SUFDQyxrQkFBQTtFQ2tCTDtFRGhCSTtJQUNDLGtCQUFBO0VDa0JMO0FBQ0Y7QURiRztFQUNDLFdBQUE7RUFDQSxjRVBTO0FEc0JiO0FEWkU7RUFDQywrQkFBQTtFQUNBLHVCRXFHRztBRHZGTjtBRGJHO0VBQ0MseUJBQUE7RUFDQSxjRTZCTztBRGRYO0FEWkk7RUFDQyw2QkFBQTtFQUNBLFVBQUE7QUNjTDtBRGJLO0VBQ0MsY0FBQTtFSUtKLGlCQUFBO0VKSEksY0VoRU87RUZpRVAsa0JBQUE7QUNlTjtBRGRNO0VBQ0Msa0JFekVGO0VGMEVLLFNBQUE7RUFDQSxrQkFBQTtBQ2dCVjtBRGZPO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDaUJSO0FEZk87RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2lCUjtBRGRNO0VBQ0MscUJBQUE7RUFDQSx5QkVxQkk7RUZwQkosY0UzQ007QUQyRGI7QURkUTtFQUNDLGFFOUNJO0FEOERiO0FEWk07RUFDQyxjRW5ETTtBRGlFYjtBRGJPO0VBQ0MsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkUwREY7RUZ6REUseUJFeERLO0VGeURMLGtCRXhHSDtFRnlHRyxNQUFBO0VBQ0EsT0FBQTtBQ2VSO0FEWlE7RUFDQyxhRS9ESTtBRDZFYjtBRFRLO0VBQ0MsZ0JBQUE7QUNXTjtBRE5FO0VBQ0MseUJBQUE7QUNRSDtBRERFO0VBQ0Msc0JFOEJHO0VDekhMLDBCSDRGRTtBQ0tIO0FESkc7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNNTDtBRExLO0VJN0RILGVBQUE7RUorREcsa0JBQUE7RUFDQSxjRWpGSTtBRHdGVDtBRExLO0VJbEVILGlCQUFBO0VKb0VTLGNFdklFO0FEOEliIiwiZmlsZSI6InNyYy9hcHAvdXNlci9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLm15LXByb2ZpbGUtd3JhcHBlciB7XG5cblx0LmNhcmQge1xuXHRcdCYudXNlci1jYXJke1xuXHRcdFx0LmNhcmQtYm9keSB7XG5cdFx0XHRcdHBhZGRpbmc6IDMwcHggMjBweDtcblx0XHRcdFx0aDUge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAycHggMDtcblx0XHRcdFx0XHRjb2xvcjogJGdyZXktODAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQucHJvZmlsZS1waWN0dXJlIHtcblx0XHRcdFx0QGluY2x1ZGUgY2lyY2xlcyg4MHB4KTtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0bWFyZ2luOiAwIDMwcHggMCAwO1xuXHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRAaW5jbHVkZSBjaXJjbGVzKDYwcHgpO1xuXHRcdFx0XHRcdG1hcmdpbjogMCAxNXB4IDAgMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cCB7XG5cdFx0XHQgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0ICAgIFx0XHRjb2xvcjogJGdyZXktNjUwO1xuXHRcdFx0fVxuXHRcdFx0Lm90aGVyIHtcblx0XHRcdFx0bWFyZ2luOiA4cHggMCAwIDAgIWltcG9ydGFudDtcblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdG1hcmdpbjogMCAzMHB4IDAgMDtcblx0XHRcdFx0XHRAaW5jbHVkZSBkZXNwLXJlZ3VsYXI7XG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0Y29sb3I6ICRsaWdodC1ibHVlO1xuXHRcdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDEwcHggMCAwO1xuXHRcdFx0XHRcdFx0Ji5waG9uZSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRtYXJnaW46IDIwcHggMCAwIDAgIWltcG9ydGFudDtcblx0XHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0XHQmOm5vdCg6bGFzdC1jaGlsZCl7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCAwIDEwcHggMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIDE2cHggMCAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuaWNvbi5lZGl0IHtcblx0XHRcdFx0d2lkdGg6IDIycHg7XG5cdFx0XHRcdGNvbG9yOiAkbGltZS1ncmVlbjtcblx0XHRcdH1cblx0XHR9XG5cdFx0LmxlZnQtbWVudWJhciB7XG5cdFx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZ3JleS00MDA7XG5cdFx0XHRoZWlnaHQ6ICRmdWxsO1xuXHRcdFx0aDQge1xuXHRcdFx0XHRwYWRkaW5nOiAyMHB4IDAgNDBweCAyMHB4O1xuXHRcdFx0XHRjb2xvcjogJGdyZXktODAwO1xuXHRcdFx0fVxuXHRcdFx0Lmxpc3RzIHtcblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JleS00MDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0XHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNHB4IDIwcHg7XG5cdFx0XHRcdFx0XHQuaWNvbiB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0XHRcdFx0ICAgIHRvcDogLTNweDtcblx0XHRcdFx0XHRcdCAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdGZpbGw6IGRhcmtlbigkbGlnaHQtYmx1ZSwgMjAlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQudHJ1Y2sge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyMXB4O1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjFweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGdyZXktMTIwO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogJGxpbWUtZ3JlZW47XG5cdFx0XHRcdFx0XHRcdC5pY29uIHsgXG5cdFx0XHRcdFx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw6ICRsaW1lLWdyZWVuO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogJGxpbWUtZ3JlZW47XG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA0cHg7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAkZnVsbDtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkbGltZS1ncmVlbjtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJGFicztcblx0XHRcdFx0XHRcdFx0XHR0b3A6MDtcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5pY29uIHsgXG5cdFx0XHRcdFx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw6ICRsaW1lLWdyZWVuO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdGJvcmRlci10b3A6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5pbm5lci1jb250ZW50IHtcblx0XHRcdHBhZGRpbmc6IDQwcHggMjVweCA0MHB4IDA7XG5cdFx0fVxuXHR9XG5cblxuXG5cdC5jYXJkIHtcblx0XHQmLnVzZXItZGV0YWlscyB7XG5cdFx0XHR3aWR0aDogJGZ1bGw7XG5cdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcblx0XHRcdC5tYWluIHtcblx0XHRcdFx0IHBhZGRpbmc6IDIwcHggMTVweDtcblx0XHRcdFx0IG92ZXJmbG93OiBhdXRvO1xuXHRcdFx0XHQgaDUge1xuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgNnB4IDA7XG5cdFx0XHRcdFx0Y29sb3I6ICRtLWJsdWU7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBwIHtcblx0XHRcdFx0IFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdCAgICAgICAgXHRcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHRcdFx0IH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0fVxuXG59XG5cbiIsIi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAuY2FyZC1ib2R5IGg1IHtcbiAgcGFkZGluZzogMCAwIDJweCAwO1xuICBjb2xvcjogIzM3Mzk0Njtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1jYXJkIC5wcm9maWxlLXBpY3R1cmUge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogODBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAzMHB4IDAgMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAucHJvZmlsZS1waWN0dXJlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNjBweCAhaW1wb3J0YW50O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNjBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMTVweCAwIDA7XG4gIH1cbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1jYXJkIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM1ZjVmNWY7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAub3RoZXIge1xuICBtYXJnaW46IDhweCAwIDAgMCAhaW1wb3J0YW50O1xufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZC51c2VyLWNhcmQgLm90aGVyIGxpIHtcbiAgbWFyZ2luOiAwIDMwcHggMCAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1jYXJkIC5vdGhlciBsaSAuaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAub3RoZXIgbGkgLmljb24ucGhvbmUge1xuICB3aWR0aDogMThweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAub3RoZXIge1xuICAgIG1hcmdpbjogMjBweCAwIDAgMCAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1jYXJkIC5vdGhlciBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZC51c2VyLWNhcmQgLm90aGVyIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgfVxuICAubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItY2FyZCAub3RoZXIgbGkgLmljb24ge1xuICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcbiAgfVxufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZC51c2VyLWNhcmQgLmljb24uZWRpdCB7XG4gIHdpZHRoOiAyMnB4O1xuICBjb2xvcjogIzVjZDY5NDtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQgLmxlZnQtbWVudWJhciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYWVhZWE7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZCAubGVmdC1tZW51YmFyIGg0IHtcbiAgcGFkZGluZzogMjBweCAwIDQwcHggMjBweDtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5sZWZ0LW1lbnViYXIgLmxpc3RzIGxpIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gIHBhZGRpbmc6IDA7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5sZWZ0LW1lbnViYXIgLmxpc3RzIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjODM5MWExO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5sZWZ0LW1lbnViYXIgLmxpc3RzIGxpIGEgLmljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZCAubGVmdC1tZW51YmFyIC5saXN0cyBsaSBhIC5pY29uIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZpbGw6ICM1MjVlNmM7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5sZWZ0LW1lbnViYXIgLmxpc3RzIGxpIGEgLmljb24gLnRydWNrIHtcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMjFweDtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQgLmxlZnQtbWVudWJhciAubGlzdHMgbGkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgY29sb3I6ICM1Y2Q2OTQ7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5sZWZ0LW1lbnViYXIgLmxpc3RzIGxpIGE6aG92ZXIgLmljb24gc3ZnIHtcbiAgZmlsbDogIzVjZDY5NDtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQgLmxlZnQtbWVudWJhciAubGlzdHMgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogIzVjZDY5NDtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQgLmxlZnQtbWVudWJhciAubGlzdHMgbGkgYS5hY3RpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2Q2OTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZCAubGVmdC1tZW51YmFyIC5saXN0cyBsaSBhLmFjdGl2ZSAuaWNvbiBzdmcge1xuICBmaWxsOiAjNWNkNjk0O1xufVxuLm15LXByb2ZpbGUtd3JhcHBlciAuY2FyZCAubGVmdC1tZW51YmFyIC5saXN0cyBsaTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkIC5pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogNDBweCAyNXB4IDQwcHggMDtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItZGV0YWlscyAubWFpbiB7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubXktcHJvZmlsZS13cmFwcGVyIC5jYXJkLnVzZXItZGV0YWlscyAubWFpbiBoNSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMCAwIDZweCAwO1xuICBjb2xvcjogIzNmNTFiNTtcbn1cbi5teS1wcm9maWxlLXdyYXBwZXIgLmNhcmQudXNlci1kZXRhaWxzIC5tYWluIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC1iYXNlLTAyOjExO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBkZXNlbGVjdCAoKSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBmbGlwKCRkaXJlY3Rpb24pIHtcbiAgdHJhbnNmb3JtIDogcm90YXRlWSgkZGlyZWN0aW9uKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/user/my-profile/my-profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/my-profile/my-profile.component.ts ***!
  \*********************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





let MyProfileComponent = class MyProfileComponent {
    constructor(userService, sharedService, cookieService) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isUserDataLoaded = false;
        this.profilePicUrl = "";
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    isNotAdmin() {
        return this.type != 'admin' ? true : false;
    }
    closeUserInfo() {
        this.isProfile = false;
        this.outputParams.emit(this.isProfile);
    }
    uploadProfilePic() {
    }
    ngOnInit() {
        this.user = {};
        if (this.type != 'admin') {
            this.userId = parseInt(this.cookieService.get('userId'));
        }
        let queryParamBase = {
            userid: this.userId,
        };
        this.userService.getUserById(queryParamBase).subscribe((res) => {
            this.user = res[0];
            let queryParamBase2 = {
                userId: this.userId,
            };
            this.userService.getRolesByUserId(queryParamBase2).subscribe((role) => {
                this.userRole = role[0];
                this.isUserDataLoaded = true;
            }, error => {
                console.log(error);
            });
        }, error => {
            console.log(error);
        });
        this.sharedService.userdetailscast.subscribe(user => this.user = user);
        this.sharedService.profilepiccast.subscribe(profilePicUrl => {
            this.profilePicUrl = profilePicUrl;
        });
    }
    ngOnChanges(changes) {
        if (this.type != 'admin') {
            this.userId = parseInt(this.cookieService.get('userId'));
        }
        console.log(this.userId);
        this.userService.getUserById(this.userId).subscribe((res) => {
            this.user = res[0];
            console.log(this.user);
            this.userService.getRolesByUserId(this.userId).subscribe((role) => {
                this.userRole = role[0];
                this.isUserDataLoaded = true;
            }, error => {
                console.log(error);
            });
        }, error => {
            console.log(error);
        });
    }
};
MyProfileComponent.ctorParameters = () => [
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MyProfileComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], MyProfileComponent.prototype, "isProfile", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MyProfileComponent.prototype, "userId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MyProfileComponent.prototype, "outputParams", void 0);
MyProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/my-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-profile.component.scss */ "./src/app/user/my-profile/my-profile.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], MyProfileComponent);



/***/ }),

/***/ "./src/app/user/my-profile/my-profile.module.ts":
/*!******************************************************!*\
  !*** ./src/app/user/my-profile/my-profile.module.ts ***!
  \******************************************************/
/*! exports provided: MyProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileModule", function() { return MyProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile-routing.module */ "./src/app/user/my-profile/my-profile-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _my_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-profile.component */ "./src/app/user/my-profile/my-profile.component.ts");
/* harmony import */ var _components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile-vehicles/profile-vehicles.component */ "./src/app/user/my-profile/components/profile-vehicles/profile-vehicles.component.ts");
/* harmony import */ var _components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile-family-members/profile-family-members.component */ "./src/app/user/my-profile/components/profile-family-members/profile-family-members.component.ts");
/* harmony import */ var _components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile-pet/profile-pet.component */ "./src/app/user/my-profile/components/profile-pet/profile-pet.component.ts");
/* harmony import */ var _components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/property-manager/property-manager.component */ "./src/app/user/my-profile/components/property-manager/property-manager.component.ts");
/* harmony import */ var _components_emergency_contact_emergency_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/emergency-contact/emergency-contact.component */ "./src/app/user/my-profile/components/emergency-contact/emergency-contact.component.ts");
/* harmony import */ var _components_my_staffs_my_staffs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/my-staffs/my-staffs.component */ "./src/app/user/my-profile/components/my-staffs/my-staffs.component.ts");
/* harmony import */ var _components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile-unit-details/profile-unit-details.component */ "./src/app/user/my-profile/components/profile-unit-details/profile-unit-details.component.ts");
/* harmony import */ var _components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile-unit-staffs/profile-unit-staffs.component */ "./src/app/user/my-profile/components/profile-unit-staffs/profile-unit-staffs.component.ts");
/* harmony import */ var _components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile-lease-info/profile-lease-info.component */ "./src/app/user/my-profile/components/profile-lease-info/profile-lease-info.component.ts");
/* harmony import */ var _components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile-interest-group/profile-interest-group.component */ "./src/app/user/my-profile/components/profile-interest-group/profile-interest-group.component.ts");
/* harmony import */ var _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/profile-basic/profile-basic.component */ "./src/app/user/my-profile/components/profile-basic/profile-basic.component.ts");
/* harmony import */ var _components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/profile-user-absence/profile-user-absence.component */ "./src/app/user/my-profile/components/profile-user-absence/profile-user-absence.component.ts");
/* harmony import */ var _components_profile_vehicle_details_profile_vehicle_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/profile-vehicle-details/profile-vehicle-details.component */ "./src/app/user/my-profile/components/profile-vehicle-details/profile-vehicle-details.component.ts");
/* harmony import */ var _components_profile_pet_details_profile_pet_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profile-pet-details/profile-pet-details.component */ "./src/app/user/my-profile/components/profile-pet-details/profile-pet-details.component.ts");
/* harmony import */ var _components_profile_family_members_details_profile_family_members_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profile-family-members-details/profile-family-members-details.component */ "./src/app/user/my-profile/components/profile-family-members-details/profile-family-members-details.component.ts");
/* harmony import */ var _components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/property-manager/property-manager-create/property-manager-create.component */ "./src/app/user/my-profile/components/property-manager/property-manager-create/property-manager-create.component.ts");
/* harmony import */ var _components_profile_lease_info_create_lease_info_create_lease_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/profile-lease-info/create-lease-info/create-lease-info.component */ "./src/app/user/my-profile/components/profile-lease-info/create-lease-info/create-lease-info.component.ts");























let MyProfileModule = class MyProfileModule {
};
MyProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _my_profile_component__WEBPACK_IMPORTED_MODULE_5__["MyProfileComponent"],
            _components_profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_6__["ProfileVehiclesComponent"],
            _components_profile_family_members_profile_family_members_component__WEBPACK_IMPORTED_MODULE_7__["ProfileFamilyMembersComponent"],
            _components_profile_pet_profile_pet_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePetComponent"],
            _components_property_manager_property_manager_component__WEBPACK_IMPORTED_MODULE_9__["PropertyManagerComponent"],
            _components_property_manager_property_manager_create_property_manager_create_component__WEBPACK_IMPORTED_MODULE_21__["PropertyManagerCreateComponent"],
            _components_profile_lease_info_create_lease_info_create_lease_info_component__WEBPACK_IMPORTED_MODULE_22__["CreateLeaseInfoComponent"],
            _components_emergency_contact_emergency_contact_component__WEBPACK_IMPORTED_MODULE_10__["EmergencyContactComponent"],
            _components_my_staffs_my_staffs_component__WEBPACK_IMPORTED_MODULE_11__["MyStaffsComponent"],
            _components_profile_unit_details_profile_unit_details_component__WEBPACK_IMPORTED_MODULE_12__["ProfileUnitDetailsComponent"],
            _components_profile_unit_staffs_profile_unit_staffs_component__WEBPACK_IMPORTED_MODULE_13__["ProfileUnitStaffsComponent"],
            _components_profile_lease_info_profile_lease_info_component__WEBPACK_IMPORTED_MODULE_14__["ProfileLeaseInfoComponent"],
            _components_profile_interest_group_profile_interest_group_component__WEBPACK_IMPORTED_MODULE_15__["ProfileInterestGroupComponent"],
            _components_profile_basic_profile_basic_component__WEBPACK_IMPORTED_MODULE_16__["ProfileBasicComponent"],
            _components_profile_user_absence_profile_user_absence_component__WEBPACK_IMPORTED_MODULE_17__["ProfileUserAbsenceComponent"],
            _components_profile_vehicle_details_profile_vehicle_details_component__WEBPACK_IMPORTED_MODULE_18__["ProfileVehicleDetailsComponent"],
            _components_profile_pet_details_profile_pet_details_component__WEBPACK_IMPORTED_MODULE_19__["ProfilePetDetailsComponent"],
            _components_profile_family_members_details_profile_family_members_details_component__WEBPACK_IMPORTED_MODULE_20__["ProfileFamilyMembersDetailsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyProfileRoutingModule"]
        ],
        exports: [
            _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyProfileRoutingModule"],
            _my_profile_component__WEBPACK_IMPORTED_MODULE_5__["MyProfileComponent"]
        ],
        bootstrap: [_my_profile_component__WEBPACK_IMPORTED_MODULE_5__["MyProfileComponent"]]
    })
], MyProfileModule);



/***/ })

}]);
//# sourceMappingURL=default~my-profile-my-profile-module~unit-users-unit-users-module-es2015.js.map