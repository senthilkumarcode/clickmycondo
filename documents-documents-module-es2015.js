(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/shared/document-common-download/document-common-download.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/shared/document-common-download/document-common-download.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card file-details float-left\" [ngClass]=\"[ isTabSelected() , isNotSlide()]\" id=\"accordion\">\n\t\n\t<app-loader *ngIf=\"!isDocumentDataLoaded\"></app-loader>\n\n\t<div class=\"card-body p-0\" *ngIf=\"isDocumentDataLoaded\">\n\t\t\n\t\t<div class=\"main card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>Downloads</h5>\t\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\t\t<ul class=\"list-inline\">\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<li class=\"list-inline-item search d-md-inline-block mr-0 float-right\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search downloads\"  [(ngModel)]=\"downloadFilesearch\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t  </div>\n\t\t\t<div class=\"downloadLists\">\n\t\t\t\t<li *ngIf=\"!isNoDownloads\">\n\t\t\t\t\t<p class=\"text-capitalize\">Files you download appear here</p>\n\t\t\t\t</li>\n\t\t\t\t<ng-container *ngFor=\"let item of listofFiles | simpleSearch:downloadFilesearch\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<diV class=\"listContainer\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t\t\t<p class=\"text-capitalize\">{{item.fileName}}</p>\n\t\t\t\t\t\t\t\t<span class=\"byname mr-2 float-left\">by {{item.uploadedPersonName}}</span><br>\t\t\t\t\t\t\t\t \t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"float-right icon\" (click) = \"downloadFile(item)\" >\n\t\t\t\t\t\t\t\t<img src=\"assets/images/download-icon.svg\"/>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</diV>\t\t\t\t\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n  \t</div>\n </div>   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"document-setup-category-wrapper\">\n\n\t<app-loader *ngIf=\"!isDocumentCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isDocumentCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Document Categories</h4>\n\t\t<ng-container *ngFor=\"let item of documentCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateDocumentCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-none\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteAssetCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn blue\" (click)=\"addNewDocumentCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6>Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isDocumentCategoryNew || isDocumentCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5 *ngIf=\"isDocumentCategoryNew\">Add Document Category</h5>\n    \t\t\t<h5 *ngIf=\"!isDocumentCategoryNew\">Update Document Category</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"alertTicketMessage\" [isError]=\"isCategoryError\" [isSuccess]=\"isCategorySuccess\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isDocumentCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isDocumentCategorySubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addDocumentCategoryForm = \"ngForm\" name=\"addDocumentCategoryForm\" (ngSubmit)=\"submitdocumentCategoryForm(addDocumentCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"documentCategory\" [(ngModel)]=\"documentCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addDocumentCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"document-setup-wrapper\">\n\n  <ul class=\"icon-tabs btn-group\" id=\"payment-list\">\n\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"javascript:void(0)\" role=\"tab\" (click)=\"showTab('category')\" [ngClass]=\"selectedTab == 'category' ? 'active' : ''\">        \n        Category\n      </a>\n    </li>\n\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" href=\"javascript:void(0)\" role=\"tab\" (click)=\"showTab('accessible')\" [ngClass]=\"selectedTab == 'accessible' ? 'active' : ''\" >      \n        Accessible\n      </a>\n    </li>\n\n  </ul>\n\n  <div class=\"tab-content\">\n\n    <div class=\"tab-pane\" id=\"dues\" [ngClass]=\"selectedTab == 'category' ? 'active' : ''\">\n      <app-document-setup-category></app-document-setup-category>\n    </div>\n      \n    <div class=\"tab-pane\" id=\"advance\" [ngClass]=\"selectedTab == 'accessible' ? 'active' : ''\">\n      document-accssible works!\n    </div>\n  </div>\n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/folder-lists/folder-lists.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/folder-lists/folder-lists.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"document-common-wrapper\">\n\n\t<app-loader *ngIf=\"!isCommmonDataLoaded\"></app-loader>\n\t\n\t<div class=\"card card-table users-list float-left\" [ngClass]=\"isTabSelected()\" *ngIf=\"isCommmonDataLoaded\">\n\n\t\t<div class=\"card-header\">    \t\t\n    \t    <div class=\"float-left\">\n\t\t\t\t<h5>Folder<span class=\"badge lime-green\">{{totalUserItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Upload and download the documents</p>\t\t\t\n\t\t\t</div>\t\t\t\t\t\n\t\t\t\n\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t<li class=\"list-inline-item search d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search folder\" [(ngModel)]=\"findFolder\" >\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\t\t\t\t\t\n\t\t\t\t\t<a class=\"btn lime-green\" href=\"javascript:void(0)\" (click)=\"openUploadModal()\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Document</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\t\n\t\t  </div>\n\t\t  \n\t\t<div class=\"card-body p-0 users\">\n\n\t\t\t<ng-container>\t\t\t\t\n\t\t\t\t<ng-container *ngFor=\"let item of folderByCategory | simpleSearch:findFolder\">\n\t\t\t\t\t<li class=\"list-group-item\" (click)=\"showFolderDetails(item.lookupValueId)\">\n\t\t\t\t\t\t<div class=\"folderDesc\">\n\t\t\t\t\t\t\t<img src=\"assets/images/folder-icon.svg\"/>\t\n\t\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t\t<span class=\"title\">{{item.lookupValueName}}</span><br>\n\t\t\t\t\t\t\t\t<span class=\"filecount mr-2 float-left\" *ngIf=\"!this.isUserPage\">Files: {{item.documentCount}}</span>       \n\t\t\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\n\t\t\t</ng-container>\t\t\t\n\t\t</div>\n\n\t</div>\n\n\t<app-document-common-download [selectedTab]=\"selectedTab\" *ngIf=\"!isMobileView()\"></app-document-common-download>\n</div>\n\n\n\n<ng-template #uploadTemplate let-alert>\n  <div class=\"upload-wrapper\">\n    <div class=\"close-icon\" mat-dialog-close>\n      <i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n    </div>\n    <div class=\"card mb-30\">\n      <div class=\"card-header\">\n        <div class=\"float-left\">\n            <h5>Upload Documents</h5>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <form #addMessageForm = \"ngForm\" name=\"addMessageForm\" (ngSubmit)=\"submitUploadAdmindoc(addMessageForm)\"  novalidate>\n          \n            <div class=\"input-box\">                \n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter the file name here...\" name=\"phoneNo\" [(ngModel)]=\"uploadDescription\" required>\n            </div>\n          \n          <div class=\"row\">\n            <div class=\"col-md-12\">\n\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t<label>Category:*</label>\n\n\t\t\t\t\t<select \n\t\t\t\t\t\tname=\"category\" \n\t\t\t\t\t\tid=\"category\" \n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t[(ngModel)]=\"uploadcategoryId\" required>\t\t\t\t\t\t\n\t\t\t\t\t\t<option *ngFor=\"let item of folderByCategory\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t</select>\n\n\t\t\t\t</div>\n            </div>\n            <div class=\"col-md-12\">\n\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t<label>Accessible to:*</label>\n\n\t\t\t\t\t<select \n\t\t\t\t\t\tname=\"accessible\" \n\t\t\t\t\t\tid=\"accessible\" \n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t[(ngModel)]=\"uploadroleID\" required>\n\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of accessibleList\" [value]=\"item.roleId\">{{ item.roleName }}</option>\n\t\t\t\t\t</select>\n\n\t\t\t\t</div>\n\t\t\t</div>\n          </div>\n\n          <div class=\"input-box\">    \n            <label>Who should be notified via email?</label>            \n            <input type=\"text\" class=\"form-control\" placeholder=\"Please enter the email ID here..\" name=\"phoneNo\" [(ngModel)]=\"userEmail\" required>\n        </div>        \n\t\t\t\t\t\t\n          <div class=\"input-box\">\n            <label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\">\n\t\t\t<input class=\"form-control\"  #uploader type=\"file\" (change)=\"uploadFile($event.target.files)\"  >\n\t\t\t<i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Add Document</label>\n\n            <div class=\"file-desp\" *ngIf=\"isFileAdded\">\n              <div *ngFor=\"let item of listOfFiles; let i = index\">\n                <span class=\"name mr-3\">{{item.name}}</span>\n                <span class=\"size\">{{bytesToSize(item.size)}}</span>\n                <i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n              </div>\n\t\t\t</div>\n\t\t\t\n\t\t  </div>\n\t\t  \n\t\t  <div class=\"row submitBtn\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"!listOfFiles.length && addMessageForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n        \n\t\t</form>\n\t\t\n      </div>\n    </div>\n  </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/user-lists/user-lists.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/user-lists/user-lists.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"document-user-wrapper\">\n\n  <div class=\"card card-table\" *ngIf=\"isUserDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>User Document</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Upload, download and view the document</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\" >\n    \t\t\t</li>\n    \t\t\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>              \n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('name')\">Name <span [ngClass]=\"getFieldOrderBy('name')\"></span></th>\t\t\t\t      \n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No <span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('unitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('unitNo')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('document')\">Documents<span [ngClass]=\"getFieldOrderBy('document')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n            \n\t\t\t\t    <tr *ngFor=\"let unit of getAllDocumentData | orderBy : unitFieldType: unitOrder| slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: unitData; let i = index\" >\n              \n\t\t\t\t      <td class=\"grey\">{{unit.firstName}}</td>\t\t\t\t     \n\t\t\t\t      <td class=\"grey\">{{unit.apartmentBlockID}}</td>\n              <td class=\"grey\">{{unit.apartmentBlockUnitNumber}}</td>\n              <td class=\"grey\">{{unit.documents}}</td>\n              <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/document/user/{{unit.apartmentBlockUnitNumber}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon view\" name=\"eye\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t\t    </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n      <app-pagination        \n        [totalItems]=\"totalUserDocument\"  \n        [ItemStartIndex]=\"ItemUserStartIndex\"\n        [ItemEndIndex] = \"ItemUserEndIndex\"\n        [itemLimit] = \"itemUserLimit\"\n        (outputParams) = \"getUserIndexParams($event)\">\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/document.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/document.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/ams/components/shared/document-common-download/document-common-download.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/ams/components/shared/document-common-download/document-common-download.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card.file-details {\n  width: 0 !important;\n  height: 0;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n  -webkit-transform: translate(120%, 0);\n          transform: translate(120%, 0);\n}\n.card.file-details.show {\n  width: 40% !important;\n  height: auto;\n  -webkit-transform: translate(0);\n          transform: translate(0);\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n  margin: 0 0 0 2%;\n}\n.card.file-details.full {\n  width: 100% !important;\n  margin: 0;\n}\n.card.file-details .main {\n  overflow: auto;\n}\n.card.file-details .main > span {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 2rem;\n  padding: 0 0 6px 0;\n  color: #3f51b5;\n}\n.card.file-details .main p {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n}\n.card.file-details .main .icon {\n  width: 20px;\n}\n.card.file-details .main .downloadLists li {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  padding: 14px 20px;\n  border-bottom: 1px solid #eaeaea;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.6rem;\n  color: #007bff;\n}\n.card.file-details .main .downloadLists li:last-child {\n  border-bottom: none;\n}\n.card.file-details .main .downloadLists li .byname {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem;\n  color: #797979;\n}\n.card.file-details .main .downloadLists li .bydesc {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #797979;\n}\n.card.file-details .main .listContainer {\n  width: 100% !important;\n}\n.card.file-details .main .listContainer .icon {\n  cursor: pointer;\n}\n.card.file-details .main .card-header h5 {\n  padding: 8px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvY29tcG9uZW50cy9zaGFyZWQvZG9jdW1lbnQtY29tbW9uLWRvd25sb2FkL2RvY3VtZW50LWNvbW1vbi1kb3dubG9hZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Ftcy9jb21wb25lbnRzL3NoYXJlZC9kb2N1bWVudC1jb21tb24tZG93bmxvYWQvZG9jdW1lbnQtY29tbW9uLWRvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLG1CQUFBO0VBQ0EsU0FBQTtFQ21DRCxrQ0RsQ0M7RUNvQ0QsMEJEcENDO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBRUZGO0FGR0U7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VDNkJGLGtDRDVCRTtFQzhCRiwwQkQ5QkU7RUFDQSxnQkFBQTtBRUNIO0FGQ0U7RUFDQyxzQkcyR0c7RUgxR0gsU0FBQTtBRUNIO0FGQ0U7RUFDRSxjQUFBO0FFQ0o7QUZBSTtFSUpGLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQTZCQSxlQUFBO0VKeEJFLGtCQUFBO0VBQ0EsY0dtQks7QURmVDtBRkZJO0VJSUYsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGlCQUFBO0FGWEY7QUZMSTtFQUNDLFdBQUE7QUVPTDtBRkxJO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUk5QkYscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQW1DQSxpQkFBQTtFSk5FLGNBQUE7QUVXSjtBRlZJO0VBQ0MsbUJBQUE7QUVZTDtBRlZJO0VJZkYsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGlCQUFBO0VKQ0csY0cyQk07QURYWDtBRmRJO0VJMUNGLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFtQ0EsaUJBQUE7RUpNRyxjR3NCTTtBREZYO0FGakJHO0VBQ0Msc0JHaUVFO0FEOUNOO0FGbEJJO0VBQ0MsZUFBQTtBRW9CTDtBRmZJO0VBQ0Msd0JBQUE7QUVpQkwiLCJmaWxlIjoic3JjL2FwcC9hbXMvY29tcG9uZW50cy9zaGFyZWQvZG9jdW1lbnQtY29tbW9uLWRvd25sb2FkL2RvY3VtZW50LWNvbW1vbi1kb3dubG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcclxuXHJcbi5jYXJkIHtcclxuXHQmLmZpbGUtZGV0YWlscyB7XHJcblx0XHR3aWR0aDogMCAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAlLCAwKTtcclxuXHRcdCYuc2hvdyB7XHJcblx0XHRcdHdpZHRoOiA0MCUgIWltcG9ydGFudDtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuXHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XHJcblx0XHRcdG1hcmdpbjogMCAwIDAgMiU7XHJcblx0XHR9XHJcblx0XHQmLmZ1bGwge1xyXG5cdFx0XHR3aWR0aDogJGZ1bGw7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdH1cclxuXHRcdC5tYWluIHtcdFx0XHQgXHJcblx0XHRcdCBvdmVyZmxvdzogYXV0bztcclxuXHRcdFx0ID4gc3BhbiB7XHJcblx0XHRcdFx0QGluY2x1ZGUgaGVhZC1tZWRpdW07XHJcblx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1tZWRpdW0pO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAgMCA2cHggMDtcclxuXHRcdFx0XHRjb2xvcjogJG0tYmx1ZTtcclxuXHRcdFx0IH1cclxuXHRcdFx0IHAge1xyXG5cdFx0XHQgXHRAaW5jbHVkZSBkZXNwLXJlZ3VsYXI7XHJcblx0XHRcdCBcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xyXG4gICAgICAgIFx0XHRcclxuXHRcdFx0IH1cclxuXHRcdFx0IC5pY29ue1xyXG5cdFx0XHRcdCB3aWR0aDoyMHB4XHJcblx0XHRcdCB9XHJcblx0XHRcdCAuZG93bmxvYWRMaXN0cyBsaSB7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1x0XHRcdFx0XHJcblx0XHRcdFx0cGFkZGluZzogMTRweCAyMHB4O1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICRncmV5LTQ1MDtcclxuXHRcdFx0XHRAaW5jbHVkZSBoZWFkLXJlZ3VsYXI7XHJcblx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xyXG5cdFx0XHRcdGNvbG9yOiAjMDA3YmZmO1xyXG5cdFx0XHRcdCY6bGFzdC1jaGlsZHtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206bm9uZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYnluYW1le1xyXG5cdFx0XHRcdFx0QGluY2x1ZGUgZGVzcC1yZWd1bGFyO1xyXG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC10aW55KTtcclxuXHRcdFx0XHRcdGNvbG9yOiAkZ3JleS03NTA7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYnlkZXNje1xyXG5cdFx0XHRcdFx0QGluY2x1ZGUgaGVhZC1yZWd1bGFyO1xyXG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XHJcblx0XHRcdFx0XHRjb2xvcjogJGdyZXktNzUwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQubGlzdENvbnRhaW5lcntcdFx0XHRcdFxyXG5cdFx0XHRcdHdpZHRoOiAkZnVsbDtcclxuXHRcdFx0XHQuaWNvbntcclxuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0LmNhcmQtaGVhZGVye1xyXG5cdFx0XHRcdGg1e1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDhweCAwcHggMHB4IDBweFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIi5jYXJkLmZpbGUtZGV0YWlscyB7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEyMCUsIDApO1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzLnNob3cge1xuICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICBtYXJnaW46IDAgMCAwIDIlO1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzLmZ1bGwge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4ge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiA+IHNwYW4ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAwIDAgNnB4IDA7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluIHAge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluIC5pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmRvd25sb2FkTGlzdHMgbGkge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmRvd25sb2FkTGlzdHMgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmRvd25sb2FkTGlzdHMgbGkgLmJ5bmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjNzk3OTc5O1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluIC5kb3dubG9hZExpc3RzIGxpIC5ieWRlc2Mge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzc5Nzk3OTtcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiAubGlzdENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmxpc3RDb250YWluZXIgLmljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmNhcmQtaGVhZGVyIGg1IHtcbiAgcGFkZGluZzogOHB4IDBweCAwcHggMHB4O1xufSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzViY2M3MztcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/components/shared/document-common-download/document-common-download.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/components/shared/document-common-download/document-common-download.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DocumentCommonDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentCommonDownloadComponent", function() { return DocumentCommonDownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _api_services_document_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/document.service */ "./src/app/api/services/document.service.ts");
/* harmony import */ var _api_services_file_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../api/services/file-details.service */ "./src/app/api/services/file-details.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);









let DocumentCommonDownloadComponent = class DocumentCommonDownloadComponent {
    constructor(router, route, lookupService, documentService, fileDetailsService, cookieService, sanitizer) {
        this.router = router;
        this.route = route;
        this.lookupService = lookupService;
        this.documentService = documentService;
        this.fileDetailsService = fileDetailsService;
        this.cookieService = cookieService;
        this.sanitizer = sanitizer;
        this.isDocumentDataLoaded = false;
        this.isNoDownloads = false;
        this.isSeperatePage = false;
        this.userPage = false;
    }
    isTabSelected() {
        return this.selectedTab != -1 ? 'show' : '';
    }
    isMobileView() {
        return window.innerWidth <= 991;
    }
    isNotSlide() {
        return this.isSeperatePage ? 'full' : '';
    }
    downloadFile(file) {
        let obj = {
            "savefileNameWithPath": file.userDocumentName,
            "fileNameOnBlob": file.filePath
        };
        this.fileDetailsService.DownloadAsync(obj).subscribe((res) => {
        }, error => { });
    }
    getUserDocumentData(unitNo) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.getalldocument, function (item) {
            if (item.apartmentBlockUnitNumber === unitNo) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0];
        }
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined && this.isMobileView()) {
            this.isSeperatePage = true;
        }
        if (this.route.params['value'].id != undefined) {
            this.userPage = true;
            this.userUnitNo = this.route.params['value'].id;
        }
        var unitInfo = this.userUnitNo;
        //if(this.userPage) {     
        this.documentService.GetAllDocCountByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.getalldocument = res;
            if (this.getUserDocumentData(unitInfo).apartmentBlockUnitID != undefined) {
                this.documentService.GetAllDocByApartmentBlockUnitId(this.getUserDocumentData(this.userUnitNo).apartmentBlockUnitID).subscribe((res) => {
                    this.listofFiles = res;
                    this.isDocumentDataLoaded = true;
                    this.isNoDownloads = this.listofFiles.length;
                }, error => { });
            }
            else {
                let documentByCategory = {
                    "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                    "docCategoryId": this.route.params['value'].id
                };
                this.isDocumentDataLoaded = false;
                this.documentService.getUserDocumentsByUserDocumentCategoryId(documentByCategory).subscribe((res) => {
                    this.listofFiles = res;
                    this.isDocumentDataLoaded = true;
                }, error => { });
            }
        }, error => { });
        //}
    }
    ngOnChanges(changes) {
        this.isDocumentDataLoaded = false;
        if (this.userPage) {
            this.documentService.GetAllDocByApartmentBlockUnitId(this.getUserDocumentData(this.userUnitNo).apartmentBlockUnitID).subscribe((res) => {
                this.isDocumentDataLoaded = true;
                this.listofFiles = res;
                this.isNoDownloads = this.listofFiles.length;
            }, error => { });
        }
        else {
            let documentByCategory = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "docCategoryId": this.selectedTab
            };
            this.documentService.getUserDocumentsByUserDocumentCategoryId(documentByCategory).subscribe((res) => {
                this.isDocumentDataLoaded = true;
                this.listofFiles = res;
                //this.isNoDownloads = true
                this.isNoDownloads = this.listofFiles.length;
            }, error => { });
        }
    }
};
DocumentCommonDownloadComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _api_services_document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"] },
    { type: _api_services_file_details_service__WEBPACK_IMPORTED_MODULE_6__["FileDetailsService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], DocumentCommonDownloadComponent.prototype, "selectedTab", void 0);
DocumentCommonDownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-common-download',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document-common-download.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/shared/document-common-download/document-common-download.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document-common-download.component.scss */ "./src/app/ams/components/shared/document-common-download/document-common-download.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _api_services_document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"],
        _api_services_file_details_service__WEBPACK_IMPORTED_MODULE_6__["FileDetailsService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], DocumentCommonDownloadComponent);



/***/ }),

/***/ "./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9kb2N1bWVudC1zZXR1cC9kb2N1bWVudC1zZXR1cC1jYXRlZ29yeS9kb2N1bWVudC1zZXR1cC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: DocumentSetupCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSetupCategoryComponent", function() { return DocumentSetupCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let DocumentSetupCategoryComponent = class DocumentSetupCategoryComponent {
    constructor(lookupService, cookieService) {
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDocumentCategoryLoaded = false;
        this.isDocumentCategorySubmitted = true;
        this.isDocumentCategoryNew = false;
        this.isDocumentCategoryUpdate = false;
        this.documentCategory = "";
        this.documentCategoryUpdateId = 0;
        this.alertTicketMessage = "";
        this.isCategoryError = false;
        this.isCategorySuccess = false;
    }
    addNewDocumentCategory() {
        this.isDocumentCategoryNew = true;
        this.isDocumentCategoryUpdate = false;
    }
    updateDocumentCategory(item) {
        this.isDocumentCategoryUpdate = true;
        this.isDocumentCategoryNew = false;
        this.documentCategory = item.lookupValueName;
        this.documentCategoryUpdateId = item.lookupValueId;
    }
    removeCategoryBox() {
        this.isDocumentCategoryNew = false;
        this.isDocumentCategoryUpdate = false;
        this.isCategoryError = false;
        this.isCategoryError = false;
    }
    submitdocumentCategoryForm(form) {
        this.isDocumentCategorySubmitted = false;
        if (this.isDocumentCategoryNew) {
            let details = {
                "lookupTypeId": 62,
                "lookupValueName": this.documentCategory,
                "description": this.documentCategory,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-20T16:51:24.105Z",
                "updatedBy": 0,
                "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            this.lookupService.addLookupValue(details).subscribe((res) => {
                if (res.message) {
                    this.lookupService.getLookupValueByLookupTypeId(62).subscribe((res) => {
                        this.isDocumentCategorySubmitted = true;
                        this.isCategorySuccess = true;
                        this.alertTicketMessage = "Category Added Successfully!";
                        this.documentCategoryData = res.filter(item => {
                            return item.isActive;
                        });
                    });
                }
                else {
                    this.isDocumentCategorySubmitted = true;
                    this.isCategoryError = true;
                    this.alertTicketMessage = res.errorMessage;
                }
            });
        }
        else {
            let details = {
                "lookupValueId": this.documentCategoryUpdateId,
                "lookupTypeId": 62,
                "lookupValueName": this.documentCategory,
                "description": this.documentCategory,
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": "2019-11-20T16:51:24.105Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            this.lookupService.updateLookupValue(details).subscribe((res) => {
                if (res.message) {
                    this.lookupService.getLookupValueByLookupTypeId(62).subscribe((res) => {
                        this.isDocumentCategorySubmitted = true;
                        this.isCategorySuccess = true;
                        this.alertTicketMessage = "Category Updated Successfully!";
                        this.documentCategoryData = res.filter(item => {
                            return item.isActive;
                        });
                    });
                }
                else {
                    this.isDocumentCategorySubmitted = true;
                    this.isCategoryError = true;
                    this.alertTicketMessage = res.errorMessage;
                }
            });
        }
    }
    ngOnInit() {
        this.lookupService.getLookupValueByLookupTypeId(62).subscribe((res) => {
            this.isDocumentCategoryLoaded = true;
            this.documentCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
    }
};
DocumentSetupCategoryComponent.ctorParameters = () => [
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
DocumentSetupCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-setup-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document-setup-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document-setup-category.component.scss */ "./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], DocumentSetupCategoryComponent);



/***/ }),

/***/ "./src/app/ams/documents/components/document-setup/document-setup.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/documents/components/document-setup/document-setup.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-tabs {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.icon-tabs li {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n  padding: 0;\n  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  border-radius: 6px !important;\n}\n.icon-tabs li a {\n  color: #585858;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  padding: 10px 25px;\n  position: relative;\n  background-color: #ffffff;\n}\n.icon-tabs li a.active {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvZG9jdW1lbnQtc2V0dXAvZG9jdW1lbnQtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9kb2N1bWVudC1zZXR1cC9kb2N1bWVudC1zZXR1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL3dvcmtzL3ZpdmVrLzk5LWFwYXJ0bWVudC9hcHAtbmc4L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0hKO0FESUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUVZTiw2Q0ZYTTtFRVlOLGtERlpNO0VFYU4scURGYk07RUVMUCw2QkFBQTtBRFFEO0FEQVU7RUFDSSxjRytESDtFQzVEVCxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUE2QkEsaUJBQUE7RUovQlksa0JBQUE7RUFDQSxrQkdmVDtFSGdCUyx5Qkc4RU47QUYxRVI7QURIYztFQUNFLHlCR3VCUDtFSHRCTyxjRzJFUjtBRnRFUiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9kb2N1bWVudC1zZXR1cC9kb2N1bWVudC1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xyXG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XHJcbi5pY29uLXRhYnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KDAgMnB4IDNweCAtMXB4IHJnYmEoJGJsYWNrLCAwLjEpKTtcclxuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDZweCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJGdyZXktNzAwO1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGhlYWQtbWVkaXVtO1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogJHJlbDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG0tYmx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICBcclxuICAgIH1cclxuICAgXHJcblxyXG59IiwiLmljb24tdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmljb24tdGFicyBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbn1cbi5pY29uLXRhYnMgbGkgYSB7XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmljb24tdGFicyBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzViY2M3MztcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/documents/components/document-setup/document-setup.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/documents/components/document-setup/document-setup.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DocumentSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSetupComponent", function() { return DocumentSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DocumentSetupComponent = class DocumentSetupComponent {
    constructor() { }
    showTab(type) {
        this.selectedTab = type;
    }
    isActive(type) {
        return this.selectedTab == type ? true : false;
    }
    ngOnInit() {
        this.selectedTab = 'category';
    }
};
DocumentSetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-setup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document-setup.component.scss */ "./src/app/ams/documents/components/document-setup/document-setup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DocumentSetupComponent);



/***/ }),

/***/ "./src/app/ams/documents/components/folder-lists/folder-lists.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/ams/documents/components/folder-lists/folder-lists.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".document-common-wrapper .card.users-list {\n  width: 100%;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n}\n@media (min-width: 991px) {\n  .document-common-wrapper .card.users-list.show {\n    width: 58%;\n    -webkit-transition: all 0.15s ease;\n    transition: all 0.15s ease;\n  }\n}\n.document-common-wrapper .card .card-header {\n  border-bottom: none !important;\n}\n.document-common-wrapper .card .card-header .lime-green {\n  margin-top: -5px;\n}\n.document-common-wrapper .card .card-body.users > li {\n  border: none;\n  border-top: 1px solid #eaeaea;\n  padding: 14px 20px;\n  border-radius: 0 !important;\n  cursor: pointer;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc {\n  display: -webkit-box;\n  display: flex;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info {\n  margin-left: 10px;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info .title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  padding: 0 0 4px 0;\n  color: #3f51b5;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info .filecount {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1rem;\n  color: #797979;\n}\n.document-common-wrapper .card .card-body.users > li:hover {\n  background-color: #f9f9f9;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n}\n.document-common-wrapper .card .card-body.users > li:hover h5 {\n  color: #3f51b5;\n}\n.upload-wrapper .card-header {\n  background-color: #5bcc73;\n}\n.upload-wrapper .card-header h5, .upload-wrapper .card-header .icon.del {\n  color: #ffffff !important;\n}\n.upload-wrapper .submitBtn li, .upload-wrapper .submitBtn button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvZm9sZGVyLWxpc3RzL2ZvbGRlci1saXN0cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9mb2xkZXItbGlzdHMvZm9sZGVyLWxpc3RzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNDLFdBQUE7RUNtQ0Ysa0NEbENFO0VDb0NGLDBCRHBDRTtBRUhIO0FGS0k7RUFERDtJQUVFLFVBQUE7SUMrQkosa0NEOUJJO0lDZ0NKLDBCRGhDSTtFRUFIO0FBQ0Y7QUZHRTtFQUNVLDhCQUFBO0FFRFo7QUZFWTtFQUNJLGdCQUFBO0FFQWhCO0FGTUk7RUFDQyxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQ3JCSiwyQkFBQTtFRHVCbUIsZUFBQTtBRUZwQjtBRkdvQjtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBRUR4QjtBRkd3QjtFQUNJLGlCQUFBO0FFRDVCO0FGRTRCO0VHakIxQixxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUE2QkEsaUJBQUE7RUhYOEIsa0JBQUE7RUFDQSxjSU12QjtBRkpUO0FGQTRCO0VHVDFCLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFhQSxlQUFBO0VITDhCLGNJaUNyQjtBRjNCWDtBRkRRO0VBQ0MseUJJMkNFO0VIcERWLGtDRFVRO0VDUlIsMEJEUVE7QUVLVDtBRkpTO0VBQ0MsY0lSRDtBRmNUO0FGTUk7RUFDSSx5Qkl2Qks7QUZvQmI7QUZJUTtFQUNJLHlCQUFBO0FFRlo7QUZNUTtFQUNJLFdBQUE7QUVKWiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9mb2xkZXItbGlzdHMvZm9sZGVyLWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xyXG5cclxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIHtcclxuXHQuY2FyZCB7XHJcblx0XHQmLnVzZXJzLWxpc3R7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcclxuXHRcdFx0Ji5zaG93IHtcclxuXHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA1OCU7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubGltZS1ncmVlbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi01cHg7XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWJvZHkge1xyXG5cdFx0XHQmLnVzZXJzIHtcclxuXHRcdFx0XHQ+IGxpIHtcclxuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JleS00NTA7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxNHB4IDIwcHg7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAuZm9sZGVyRGVzYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBoZWFkLW1lZGl1bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDRweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbS1ibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbGVjb3VudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBkZXNwLXJlZ3VsYXI7XHJcblx0XHRcdFx0XHRcdCAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC10aW5pZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleS03NTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0ICAgIFxyXG5cdFx0XHRcdCAgICAmOmhvdmVyIHtcclxuXHRcdFx0XHQgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS0xNTA7XHJcblx0XHRcdFx0ICAgIFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XHJcblx0XHRcdFx0ICAgIFx0aDUge1xyXG5cdFx0XHRcdCAgICBcdFx0Y29sb3I6ICRtLWJsdWU7XHJcblx0XHRcdFx0ICAgIFx0fVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICAgIFxyXG5cdFx0XHJcblxyXG5cdH1cclxufVxyXG4udXBsb2FkLXdyYXBwZXJ7XHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokbGltZS1ncmVlbjtcclxuICAgICAgICBoNSwgLmljb24uZGVsIHtcclxuICAgICAgICAgICAgY29sb3I6JHdoaXRlICFpbXBvcnRhbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3VibWl0QnRue1xyXG4gICAgICAgIGxpLCBidXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iLCIuZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQudXNlcnMtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xuICAuZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQudXNlcnMtbGlzdC5zaG93IHtcbiAgICB3aWR0aDogNTglO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgfVxufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kb2N1bWVudC1jb21tb24td3JhcHBlciAuY2FyZCAuY2FyZC1oZWFkZXIgLmxpbWUtZ3JlZW4ge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kb2N1bWVudC1jb21tb24td3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkgLmZvbGRlckRlc2Mge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSAuZm9sZGVyRGVzYyAuaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSAuZm9sZGVyRGVzYyAuaW5mbyAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpIC5mb2xkZXJEZXNjIC5pbmZvIC5maWxlY291bnQge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM3OTc5Nzk7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpOmhvdmVyIGg1IHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbi51cGxvYWQtd3JhcHBlciAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjYzczO1xufVxuLnVwbG9hZC13cmFwcGVyIC5jYXJkLWhlYWRlciBoNSwgLnVwbG9hZC13cmFwcGVyIC5jYXJkLWhlYWRlciAuaWNvbi5kZWwge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuLnVwbG9hZC13cmFwcGVyIC5zdWJtaXRCdG4gbGksIC51cGxvYWQtd3JhcHBlciAuc3VibWl0QnRuIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWJjYzczO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiXX0= */");

/***/ }),

/***/ "./src/app/ams/documents/components/folder-lists/folder-lists.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ams/documents/components/folder-lists/folder-lists.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FolderListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderListsComponent", function() { return FolderListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/document.service */ "./src/app/api/services/document.service.ts");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");










let FolderListsComponent = class FolderListsComponent {
    constructor(router, route, sharedService, lookupService, UserService, documentService, cookieService, dialog) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.UserService = UserService;
        this.documentService = documentService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.isCommmonDataLoaded = false;
        this.listOfFiles = [];
        this.fileList = [];
        this.isFileAdded = false;
        this.selectedTab = -1;
        this.isUserPage = false;
    }
    uploadFile(files) {
        this.isFileAdded = true;
        this.fileToUpload = files.item(0);
        var selectedFile = files[0];
        //let formData = new FormData(); 
        //formData.append('file', this.fileToUpload, this.fileToUpload.name); 
        this.fileList.push(selectedFile);
        this.listOfFiles.push(this.fileToUpload);
    }
    bytesToSize(bytes) {
        if (bytes < 1024)
            return bytes + " Bytes";
        else if (bytes < 1048576)
            return (bytes / 1024).toFixed(3) + " KB";
        else if (bytes < 1073741824)
            return (bytes / 1048576).toFixed(3) + " MB";
        else
            return (bytes / 1073741824).toFixed(3) + " GB";
    }
    deleteFile(index) {
        // Delete the item from fileNames list
        this.listOfFiles.splice(index, 1);
        // delete file from FileList
        this.fileList.splice(index, 1);
        this.selectedFile = null;
        if (this.fileList.length == 0 && this.listOfFiles.length == 0) {
            this.isFileAdded = false;
        }
    }
    openUploadModal() {
        this.confirmDialogRef = this.dialog.open(this.uploadTemplate, {
            panelClass: 'material',
            disableClose: true,
            data: alert
        });
        this.confirmDialogRef.afterClosed().subscribe(data => { });
    }
    submitUploadAdmindoc() {
        let uploadDetails = {
            "ApartmentId": parseInt(this.cookieService.get('apartmentId')),
            "ApartmentBlockUnitId": this.isUserPage ? this.getUserDocumentData(this.unitNo).apartmentBlockUnitID : null,
            "UserDocumentCategoryId": this.uploadcategoryId,
            "UserDocumentTypeId": 1,
            "UserDocumentAccessibleToId": this.uploadroleID,
            "UserId": this.isUserPage ? this.getUserDocumentData(this.unitNo).userID : null,
            "UserDocumentName": this.uploadDescription,
            "Description": "test document",
            "IsActive": true,
            "InsertedBy": 1,
            "IsPublic": true,
            "files": this.listOfFiles[0]
        };
        this.selectedTab = -1;
        this.confirmDialogRef.close();
        this.sharedService.setAlertMessage("Document uploaded successfully");
        this.documentService.addUserDocument(uploadDetails).subscribe((res) => {
            this.getCategoryData(this.uploadcategoryId);
        }, error => {
            console.log(error);
        });
    }
    getCategoryData(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.folderByCategory, function (item) {
            if (item.lookupValueId == id) {
                item.documentCount++;
            }
        });
    }
    isMobileView() {
        return window.innerWidth <= 991;
    }
    isTabSelected() {
        return this.selectedTab != -1 ? 'show' : '';
    }
    showFolderDetails(id) {
        if (!this.isMobileView()) {
            if (this.selectedTab != id)
                this.selectedTab = id;
            else
                this.selectedTab = -1;
        }
        else {
            this.router.navigate(['ams/document-common-download/' + id]);
        }
    }
    setFileCount() {
        let folderList = this.folderList;
        underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.folderByCategory, function (id) {
            id.documentCount = 0;
            var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](folderList, function (item) {
                if (id.lookupValueId == item.categoryId) {
                    id.documentCount = item.documentCount;
                }
            });
        });
    }
    getUserDocumentData(unitNo) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.getalldocument, function (item) {
            if (item.apartmentBlockUnitNumber === unitNo) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0];
        }
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.isUserPage = true;
            this.unitNo = this.route.params['value'].id;
        }
        let adminCategory = {
            "ApartmentId": parseInt(this.cookieService.get('apartmentId')),
            "IsPublic": true
        };
        this.UserService.getAllRoles(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.accessibleList = res;
        }, error => { });
        this.lookupService.getLookupValueByLookupTypeId(62).subscribe((res) => {
            this.folderByCategory = res;
            this.documentService.GetAllDocCountByCategory(adminCategory).subscribe((res) => {
                this.folderList = res;
                this.setFileCount();
                if (this.isUserPage) {
                    this.documentService.GetAllDocCountByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                        this.isCommmonDataLoaded = true;
                        this.getalldocument = res;
                    }, error => { });
                }
                else {
                    this.isCommmonDataLoaded = true;
                }
            }, error => { });
        }, error => { });
    }
};
FolderListsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_9__["LookupService"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _api_services_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("uploadTemplate", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], FolderListsComponent.prototype, "uploadTemplate", void 0);
FolderListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder-lists',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./folder-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/folder-lists/folder-lists.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./folder-lists.component.scss */ "./src/app/ams/documents/components/folder-lists/folder-lists.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_9__["LookupService"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _api_services_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
], FolderListsComponent);



/***/ }),

/***/ "./src/app/ams/documents/components/user-lists/user-lists.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/ams/documents/components/user-lists/user-lists.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy91c2VyLWxpc3RzL3VzZXItbGlzdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/documents/components/user-lists/user-lists.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ams/documents/components/user-lists/user-lists.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListsComponent", function() { return UserListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_services_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/services/document.service */ "./src/app/api/services/document.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let UserListsComponent = class UserListsComponent {
    constructor(documentService, cookieService) {
        this.documentService = documentService;
        this.cookieService = cookieService;
        this.isUserDataLoaded = false;
        this.itemUserLimit = 5;
        this.ItemUserStartIndex = 0;
        this.isMobile = false;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
    }
    getUserIndexParams(event) {
        this.ItemUserStartIndex = event.ItemStartIndex;
        this.ItemUserEndIndex = event.ItemEndIndex;
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
    ngOnInit() {
        if (window.innerWidth <= 991)
            this.isMobile = true;
        else
            this.isMobile = false;
        this.documentService.GetAllDocCountByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.isUserDataLoaded = true;
            this.getAllDocumentData = res;
            this.totalUserDocument = this.getAllDocumentData.length;
            if (this.totalUserDocument > this.itemUserLimit) {
                this.ItemUserEndIndex = this.itemUserLimit;
            }
            else {
                this.ItemUserEndIndex = this.totalUserDocument;
            }
        }, error => { });
    }
};
UserListsComponent.ctorParameters = () => [
    { type: _api_services_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
UserListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-lists',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/user-lists/user-lists.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-lists.component.scss */ "./src/app/ams/documents/components/user-lists/user-lists.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_services_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], UserListsComponent);



/***/ }),

/***/ "./src/app/ams/documents/document.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ams/documents/document.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/documents/document.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ams/documents/document.component.ts ***!
  \*****************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DocumentComponent = class DocumentComponent {
    constructor() { }
    ngOnInit() {
    }
};
DocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/document.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document.component.scss */ "./src/app/ams/documents/document.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DocumentComponent);



/***/ }),

/***/ "./src/app/ams/documents/documents-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ams/documents/documents-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DocumentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsRoutingModule", function() { return DocumentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/document-setup/document-setup.component */ "./src/app/ams/documents/components/document-setup/document-setup.component.ts");
/* harmony import */ var _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/folder-lists/folder-lists.component */ "./src/app/ams/documents/components/folder-lists/folder-lists.component.ts");
/* harmony import */ var _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-lists/user-lists.component */ "./src/app/ams/documents/components/user-lists/user-lists.component.ts");






const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_3__["DocumentSetupComponent"] },
    { path: 'common', component: _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_4__["FolderListsComponent"] },
    { path: 'user', component: _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_5__["UserListsComponent"] },
    { path: 'user/:id', component: _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_4__["FolderListsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let DocumentsRoutingModule = class DocumentsRoutingModule {
};
DocumentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DocumentsRoutingModule);



/***/ }),

/***/ "./src/app/ams/documents/documents.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ams/documents/documents.module.ts ***!
  \***************************************************/
/*! exports provided: DocumentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsModule", function() { return DocumentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/ams/documents/documents-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _document_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document.component */ "./src/app/ams/documents/document.component.ts");
/* harmony import */ var _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/document-setup/document-setup.component */ "./src/app/ams/documents/components/document-setup/document-setup.component.ts");
/* harmony import */ var _components_document_setup_document_setup_category_document_setup_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/document-setup/document-setup-category/document-setup-category.component */ "./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.ts");
/* harmony import */ var _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/folder-lists/folder-lists.component */ "./src/app/ams/documents/components/folder-lists/folder-lists.component.ts");
/* harmony import */ var _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-lists/user-lists.component */ "./src/app/ams/documents/components/user-lists/user-lists.component.ts");
/* harmony import */ var _components_shared_document_common_download_document_common_download_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/document-common-download/document-common-download.component */ "./src/app/ams/components/shared/document-common-download/document-common-download.component.ts");











let DocumentsModule = class DocumentsModule {
};
DocumentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _document_component__WEBPACK_IMPORTED_MODULE_5__["DocumentComponent"],
            _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_6__["DocumentSetupComponent"],
            _components_document_setup_document_setup_category_document_setup_category_component__WEBPACK_IMPORTED_MODULE_7__["DocumentSetupCategoryComponent"],
            _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_8__["FolderListsComponent"],
            _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_9__["UserListsComponent"],
            _components_shared_document_common_download_document_common_download_component__WEBPACK_IMPORTED_MODULE_10__["DocumentCommonDownloadComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
            _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentsRoutingModule"]
        ],
        bootstrap: [_document_component__WEBPACK_IMPORTED_MODULE_5__["DocumentComponent"]]
    })
], DocumentsModule);



/***/ }),

/***/ "./src/app/api/services/document.service.ts":
/*!**************************************************!*\
  !*** ./src/app/api/services/document.service.ts ***!
  \**************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

/* tslint:disable */





let DocumentService = class DocumentService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    getAllDocumentsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getAllDocuments`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    getAllDocuments() {
        return this.getAllDocumentsResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param active undefined
     */
    getAllDocumentsByStatusResponse(active) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (active != null)
            __params = __params.set('active', active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getAllDocumentsByStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param active undefined
     */
    getAllDocumentsByStatus(active) {
        return this.getAllDocumentsByStatusResponse(active).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param documentId undefined
     */
    getDocumentByIdResponse(documentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (documentId != null)
            __params = __params.set('documentId', documentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param documentId undefined
     */
    getDocumentById(documentId) {
        return this.getDocumentByIdResponse(documentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getDocumentsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByApartmentId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentId undefined
     */
    getDocumentsByApartmentId(apartmentId) {
        return this.getDocumentsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getDocumentsByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getDocumentsByApartmentIdStatus(params) {
        return this.getDocumentsByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentId_1Params` containing the following parameters:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     */
    getDocumentsByApartmentId_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docCategoryId != null)
            __params = __params.set('docCategoryId', params.docCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByDocumentCategoryId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentId_1Params` containing the following parameters:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     */
    getDocumentsByApartmentId_1(params) {
        return this.getDocumentsByApartmentId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getDocumentsByApartmentIdStatus_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docCategoryId != null)
            __params = __params.set('docCategoryId', params.docCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByDocumentCategoryIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdStatus_1Params` containing the following parameters:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getDocumentsByApartmentIdStatus_1(params) {
        return this.getDocumentsByApartmentIdStatus_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByDocumentTypeIdParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `apartmentId`:
     */
    getDocumentsByDocumentTypeIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docTypeId != null)
            __params = __params.set('docTypeId', params.docTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByDocumentTypeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByDocumentTypeIdParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `apartmentId`:
     */
    getDocumentsByDocumentTypeId(params) {
        return this.getDocumentsByDocumentTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByDocumentTypeIdStatusParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getDocumentsByDocumentTypeIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docTypeId != null)
            __params = __params.set('docTypeId', params.docTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByDocumentTypeIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByDocumentTypeIdStatusParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getDocumentsByDocumentTypeIdStatus(params) {
        return this.getDocumentsByDocumentTypeIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByDocumentCategoryIdDocumentTypeIdParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     */
    getDocumentsByDocumentCategoryIdDocumentTypeIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docTypeId != null)
            __params = __params.set('docTypeId', params.docTypeId.toString());
        if (params.docCategoryId != null)
            __params = __params.set('docCategoryId', params.docCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByDocumentCategoryIdDocumentTypeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByDocumentCategoryIdDocumentTypeIdParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     */
    getDocumentsByDocumentCategoryIdDocumentTypeId(params) {
        return this.getDocumentsByDocumentCategoryIdDocumentTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByDocumentCategoryIdDocumentTypeIdStatusParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getDocumentsByDocumentCategoryIdDocumentTypeIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docTypeId != null)
            __params = __params.set('docTypeId', params.docTypeId.toString());
        if (params.docCategoryId != null)
            __params = __params.set('docCategoryId', params.docCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByDocumentCategoryIdDocumentTypeIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByDocumentCategoryIdDocumentTypeIdStatusParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getDocumentsByDocumentCategoryIdDocumentTypeIdStatus(params) {
        return this.getDocumentsByDocumentCategoryIdDocumentTypeIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param uploadedBy undefined
     */
    getDocumentsByUploadedByResponse(uploadedBy) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (uploadedBy != null)
            __params = __params.set('uploadedBy', uploadedBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByUploadedBy`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param uploadedBy undefined
     */
    getDocumentsByUploadedBy(uploadedBy) {
        return this.getDocumentsByUploadedByResponse(uploadedBy).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdAccessibleToIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `accessibleToId`:
     */
    getDocumentsByApartmentIdAccessibleToIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.accessibleToId != null)
            __params = __params.set('accessibleToId', params.accessibleToId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByApartmentIdAccessibleToId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdAccessibleToIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `accessibleToId`:
     */
    getDocumentsByApartmentIdAccessibleToId(params) {
        return this.getDocumentsByApartmentIdAccessibleToIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdAccessibleToIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     *
     * - `accessibleToId`:
     */
    getDocumentsByApartmentIdAccessibleToIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        if (params.accessibleToId != null)
            __params = __params.set('accessibleToId', params.accessibleToId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByApartmentIdAccessibleToIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdAccessibleToIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     *
     * - `accessibleToId`:
     */
    getDocumentsByApartmentIdAccessibleToIdStatus(params) {
        return this.getDocumentsByApartmentIdAccessibleToIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdAccessibleToId_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `accessibleToIds`:
     */
    getDocumentsByApartmentIdAccessibleToId_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        (params.accessibleToIds || []).forEach(val => { if (val != null)
            __params = __params.append('accessibleToIds', val.toString()); });
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByApartmentIdAccessibleToIds`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdAccessibleToId_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `accessibleToIds`:
     */
    getDocumentsByApartmentIdAccessibleToId_1(params) {
        return this.getDocumentsByApartmentIdAccessibleToId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdAccessibleToIdsStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     *
     * - `accessibleToIds`:
     */
    getDocumentsByApartmentIdAccessibleToIdsStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        (params.accessibleToIds || []).forEach(val => { if (val != null)
            __params = __params.append('accessibleToIds', val.toString()); });
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByApartmentIdAccessibleToIdsStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByApartmentIdAccessibleToIdsStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     *
     * - `accessibleToIds`:
     */
    getDocumentsByApartmentIdAccessibleToIdsStatus(params) {
        return this.getDocumentsByApartmentIdAccessibleToIdsStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByUploadedBy_1Params` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getDocumentsByUploadedBy_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getDocumentsByUploadedOnRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetDocumentsByUploadedBy_1Params` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getDocumentsByUploadedBy_1(params) {
        return this.getDocumentsByUploadedBy_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.AddDocumentParams` containing the following parameters:
     *
     * - `files`:
     *
     * - `document`:
     */
    addDocumentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let __formData = new FormData();
        __body = __formData;
        if (params.files != null) {
            __formData.append('files', params.files);
        }
        __body = params.document;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Document/addDocument`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.AddDocumentParams` containing the following parameters:
     *
     * - `files`:
     *
     * - `document`:
     */
    addDocument(params) {
        return this.addDocumentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param document undefined
     */
    updateDocumentResponse(document) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = document;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Document/updateDocument`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param document undefined
     */
    updateDocument(document) {
        return this.updateDocumentResponse(document).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.DeleteDocumentParams` containing the following parameters:
     *
     * - `documentId`:
     *
     * - `deleteBy`:
     */
    deleteDocumentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.documentId != null)
            __params = __params.set('documentId', params.documentId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Document/deleteDocument`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.DeleteDocumentParams` containing the following parameters:
     *
     * - `documentId`:
     *
     * - `deleteBy`:
     */
    deleteDocument(params) {
        return this.deleteDocumentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param documentId undefined
     */
    getUserDocumentByIdResponse(documentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (documentId != null)
            __params = __params.set('documentId', documentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param documentId undefined
     */
    getUserDocumentById(documentId) {
        return this.getUserDocumentByIdResponse(documentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param apartmentId undefined
     */
    getUserDocumentsByApartmentIdResponse(apartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (apartmentId != null)
            __params = __params.set('apartmentId', apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByApartmentId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param apartmentId undefined
     */
    getUserDocumentsByApartmentId(apartmentId) {
        return this.getUserDocumentsByApartmentIdResponse(apartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getUserDocumentsByApartmentIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByApartmentIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByApartmentIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getUserDocumentsByApartmentIdStatus(params) {
        return this.getUserDocumentsByApartmentIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentCategoryIdParams` containing the following parameters:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     */
    getUserDocumentsByUserDocumentCategoryIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docCategoryId != null)
            __params = __params.set('docCategoryId', params.docCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByUserDocumentCategoryId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentCategoryIdParams` containing the following parameters:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     */
    getUserDocumentsByUserDocumentCategoryId(params) {
        return this.getUserDocumentsByUserDocumentCategoryIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentCategoryIdStatusParams` containing the following parameters:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getUserDocumentsByUserDocumentCategoryIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docCategoryId != null)
            __params = __params.set('docCategoryId', params.docCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByUserDocumentCategoryIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentCategoryIdStatusParams` containing the following parameters:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getUserDocumentsByUserDocumentCategoryIdStatus(params) {
        return this.getUserDocumentsByUserDocumentCategoryIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentTypeIdParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `apartmentId`:
     */
    getUserDocumentsByUserDocumentTypeIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docTypeId != null)
            __params = __params.set('docTypeId', params.docTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByUserDocumentTypeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentTypeIdParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `apartmentId`:
     */
    getUserDocumentsByUserDocumentTypeId(params) {
        return this.getUserDocumentsByUserDocumentTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentTypeIdStatusParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getUserDocumentsByUserDocumentTypeIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docTypeId != null)
            __params = __params.set('docTypeId', params.docTypeId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByUserDocumentTypeIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentTypeIdStatusParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getUserDocumentsByUserDocumentTypeIdStatus(params) {
        return this.getUserDocumentsByUserDocumentTypeIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     */
    getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docTypeId != null)
            __params = __params.set('docTypeId', params.docTypeId.toString());
        if (params.docCategoryId != null)
            __params = __params.set('docCategoryId', params.docCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     */
    getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeId(params) {
        return this.getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdStatusParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.docTypeId != null)
            __params = __params.set('docTypeId', params.docTypeId.toString());
        if (params.docCategoryId != null)
            __params = __params.set('docCategoryId', params.docCategoryId.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdStatusParams` containing the following parameters:
     *
     * - `docTypeId`:
     *
     * - `docCategoryId`:
     *
     * - `apartmentId`:
     *
     * - `active`:
     */
    getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdStatus(params) {
        return this.getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param uploadedBy undefined
     */
    getUserDocumentsByUploadedByResponse(uploadedBy) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (uploadedBy != null)
            __params = __params.set('uploadedBy', uploadedBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByUploadedBy`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param uploadedBy undefined
     */
    getUserDocumentsByUploadedBy(uploadedBy) {
        return this.getUserDocumentsByUploadedByResponse(uploadedBy).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByApartmentIdAccessibleToIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `accessibleToId`:
     */
    getUserDocumentsByApartmentIdAccessibleToIdResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.accessibleToId != null)
            __params = __params.set('accessibleToId', params.accessibleToId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByApartmentIdAccessibleToId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByApartmentIdAccessibleToIdParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `accessibleToId`:
     */
    getUserDocumentsByApartmentIdAccessibleToId(params) {
        return this.getUserDocumentsByApartmentIdAccessibleToIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByApartmentIdAccessibleToIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     *
     * - `accessibleToId`:
     */
    getUserDocumentsByApartmentIdAccessibleToIdStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        if (params.accessibleToId != null)
            __params = __params.set('accessibleToId', params.accessibleToId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByApartmentIdAccessibleToIdStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByApartmentIdAccessibleToIdStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     *
     * - `accessibleToId`:
     */
    getUserDocumentsByApartmentIdAccessibleToIdStatus(params) {
        return this.getUserDocumentsByApartmentIdAccessibleToIdStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByApartmentIdAccessibleToId_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `accessibleToIds`:
     */
    getUserDocumentsByApartmentIdAccessibleToId_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        (params.accessibleToIds || []).forEach(val => { if (val != null)
            __params = __params.append('accessibleToIds', val.toString()); });
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByApartmentIdAccessibleToIds`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByApartmentIdAccessibleToId_1Params` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `accessibleToIds`:
     */
    getUserDocumentsByApartmentIdAccessibleToId_1(params) {
        return this.getUserDocumentsByApartmentIdAccessibleToId_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByApartmentIdAccessibleToIdsStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     *
     * - `accessibleToIds`:
     */
    getUserDocumentsByApartmentIdAccessibleToIdsStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        (params.accessibleToIds || []).forEach(val => { if (val != null)
            __params = __params.append('accessibleToIds', val.toString()); });
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByApartmentIdAccessibleToIdsStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByApartmentIdAccessibleToIdsStatusParams` containing the following parameters:
     *
     * - `apartmentId`:
     *
     * - `active`:
     *
     * - `accessibleToIds`:
     */
    getUserDocumentsByApartmentIdAccessibleToIdsStatus(params) {
        return this.getUserDocumentsByApartmentIdAccessibleToIdsStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUploadedBy_1Params` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getUserDocumentsByUploadedBy_1Response(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.toDate != null)
            __params = __params.set('toDate', params.toDate.toString());
        if (params.fromDate != null)
            __params = __params.set('fromDate', params.fromDate.toString());
        if (params.apartmentId != null)
            __params = __params.set('apartmentId', params.apartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/getUserDocumentsByUploadedOnRange`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetUserDocumentsByUploadedBy_1Params` containing the following parameters:
     *
     * - `toDate`:
     *
     * - `fromDate`:
     *
     * - `apartmentId`:
     */
    getUserDocumentsByUploadedBy_1(params) {
        return this.getUserDocumentsByUploadedBy_1Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.AddUserDocumentParams` containing the following parameters:
     *
     * - `files`:
     *
     * - `UserId`:
     *
     * - `UserDocumentTypeId`:
     *
     * - `UserDocumentName`:
     *
     * - `UserDocumentId`:
     *
     * - `UserDocumentCategoryId`:
     *
     * - `UserDocumentAccessibleToId`:
     *
     * - `UpdatedOn`:
     *
     * - `UpdatedBy`:
     *
     * - `IsPublic`:
     *
     * - `IsActive`:
     *
     * - `InsertedOn`:
     *
     * - `InsertedBy`:
     *
     * - `FileDetailsId`:
     *
     * - `Description`:
     *
     * - `ApartmentId`:
     *
     * - `ApartmentBlockUnitId`:
     */
    addUserDocumentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let __formData = new FormData();
        __body = __formData;
        if (params.files != null) {
            __formData.append('files', params.files);
        }
        if (params.UserId != null)
            __params = __params.set('UserId', params.UserId.toString());
        if (params.UserDocumentTypeId != null)
            __params = __params.set('UserDocumentTypeId', params.UserDocumentTypeId.toString());
        if (params.UserDocumentName != null)
            __params = __params.set('UserDocumentName', params.UserDocumentName.toString());
        if (params.UserDocumentId != null)
            __params = __params.set('UserDocumentId', params.UserDocumentId.toString());
        if (params.UserDocumentCategoryId != null)
            __params = __params.set('UserDocumentCategoryId', params.UserDocumentCategoryId.toString());
        if (params.UserDocumentAccessibleToId != null)
            __params = __params.set('UserDocumentAccessibleToId', params.UserDocumentAccessibleToId.toString());
        if (params.UpdatedOn != null)
            __params = __params.set('UpdatedOn', params.UpdatedOn.toString());
        if (params.UpdatedBy != null)
            __params = __params.set('UpdatedBy', params.UpdatedBy.toString());
        if (params.IsPublic != null)
            __params = __params.set('IsPublic', params.IsPublic.toString());
        if (params.IsActive != null)
            __params = __params.set('IsActive', params.IsActive.toString());
        if (params.InsertedOn != null)
            __params = __params.set('InsertedOn', params.InsertedOn.toString());
        if (params.InsertedBy != null)
            __params = __params.set('InsertedBy', params.InsertedBy.toString());
        if (params.FileDetailsId != null)
            __params = __params.set('FileDetailsId', params.FileDetailsId.toString());
        if (params.Description != null)
            __params = __params.set('Description', params.Description.toString());
        if (params.ApartmentId != null)
            __params = __params.set('ApartmentId', params.ApartmentId.toString());
        if (params.ApartmentBlockUnitId != null)
            __params = __params.set('ApartmentBlockUnitId', params.ApartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Document/addUserDocument`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.AddUserDocumentParams` containing the following parameters:
     *
     * - `files`:
     *
     * - `UserId`:
     *
     * - `UserDocumentTypeId`:
     *
     * - `UserDocumentName`:
     *
     * - `UserDocumentId`:
     *
     * - `UserDocumentCategoryId`:
     *
     * - `UserDocumentAccessibleToId`:
     *
     * - `UpdatedOn`:
     *
     * - `UpdatedBy`:
     *
     * - `IsPublic`:
     *
     * - `IsActive`:
     *
     * - `InsertedOn`:
     *
     * - `InsertedBy`:
     *
     * - `FileDetailsId`:
     *
     * - `Description`:
     *
     * - `ApartmentId`:
     *
     * - `ApartmentBlockUnitId`:
     */
    addUserDocument(params) {
        return this.addUserDocumentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param document undefined
     */
    updateUserDocumentResponse(document) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = document;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Document/updateUserDocument`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param document undefined
     */
    updateUserDocument(document) {
        return this.updateUserDocumentResponse(document).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.DeleteUserDocumentParams` containing the following parameters:
     *
     * - `documentId`:
     *
     * - `deleteBy`:
     */
    deleteUserDocumentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.documentId != null)
            __params = __params.set('documentId', params.documentId.toString());
        if (params.deleteBy != null)
            __params = __params.set('deleteBy', params.deleteBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Document/deleteUserDocument`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.DeleteUserDocumentParams` containing the following parameters:
     *
     * - `documentId`:
     *
     * - `deleteBy`:
     */
    deleteUserDocument(params) {
        return this.deleteUserDocumentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.UploadDocumentParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `docId`:
     *
     * - `description`:
     *
     * - `addBy`:
     */
    uploadDocumentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let __formData = new FormData();
        __body = __formData;
        if (params.file != null) {
            __formData.append('file', params.file);
        }
        if (params.docId != null)
            __params = __params.set('docId', params.docId.toString());
        if (params.description != null)
            __params = __params.set('description', params.description.toString());
        if (params.addBy != null)
            __params = __params.set('addBy', params.addBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Document/uploadDocument`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.UploadDocumentParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `docId`:
     *
     * - `description`:
     *
     * - `addBy`:
     */
    uploadDocument(params) {
        return this.uploadDocumentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.UploadUserDocumentParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `docId`:
     *
     * - `description`:
     *
     * - `addBy`:
     */
    uploadUserDocumentResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let __formData = new FormData();
        __body = __formData;
        if (params.file != null) {
            __formData.append('file', params.file);
        }
        if (params.docId != null)
            __params = __params.set('docId', params.docId.toString());
        if (params.description != null)
            __params = __params.set('description', params.description.toString());
        if (params.addBy != null)
            __params = __params.set('addBy', params.addBy.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Document/uploadUserDocument`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.UploadUserDocumentParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `docId`:
     *
     * - `description`:
     *
     * - `addBy`:
     */
    uploadUserDocument(params) {
        return this.uploadUserDocumentResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param ApartmentBlockUnitId undefined
     */
    GetAllDocByApartmentBlockUnitIdResponse(ApartmentBlockUnitId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (ApartmentBlockUnitId != null)
            __params = __params.set('ApartmentBlockUnitId', ApartmentBlockUnitId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/GetAllDocByApartmentBlockUnitId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param ApartmentBlockUnitId undefined
     */
    GetAllDocByApartmentBlockUnitId(ApartmentBlockUnitId) {
        return this.GetAllDocByApartmentBlockUnitIdResponse(ApartmentBlockUnitId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param ApartmentId undefined
     */
    GetAllDocCountByApartmentIdResponse(ApartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (ApartmentId != null)
            __params = __params.set('ApartmentId', ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/GetAllDocCountByApartmentId`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param ApartmentId undefined
     */
    GetAllDocCountByApartmentId(ApartmentId) {
        return this.GetAllDocCountByApartmentIdResponse(ApartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `DocumentService.GetAllDocCountByCategoryParams` containing the following parameters:
     *
     * - `IsPublic`:
     *
     * - `ApartmentId`:
     */
    GetAllDocCountByCategoryResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.IsPublic != null)
            __params = __params.set('IsPublic', params.IsPublic.toString());
        if (params.ApartmentId != null)
            __params = __params.set('ApartmentId', params.ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/GetAllDocCountByCategory`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `DocumentService.GetAllDocCountByCategoryParams` containing the following parameters:
     *
     * - `IsPublic`:
     *
     * - `ApartmentId`:
     */
    GetAllDocCountByCategory(params) {
        return this.GetAllDocCountByCategoryResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param ApartmentId undefined
     */
    GetAllAdminPrivatedDocumentsResponse(ApartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (ApartmentId != null)
            __params = __params.set('ApartmentId', ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/GetAllAdminPrivatedDocuments`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param ApartmentId undefined
     */
    GetAllAdminPrivatedDocuments(ApartmentId) {
        return this.GetAllAdminPrivatedDocumentsResponse(ApartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param ApartmentId undefined
     */
    GetAllPublicDocumentsResponse(ApartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (ApartmentId != null)
            __params = __params.set('ApartmentId', ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/Document/GetAllPublicDocuments`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param ApartmentId undefined
     */
    GetAllPublicDocuments(ApartmentId) {
        return this.GetAllPublicDocumentsResponse(ApartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
DocumentService.getAllDocumentsPath = '/api/Document/getAllDocuments';
DocumentService.getAllDocumentsByStatusPath = '/api/Document/getAllDocumentsByStatus';
DocumentService.getDocumentByIdPath = '/api/Document/getDocumentById';
DocumentService.getDocumentsByApartmentIdPath = '/api/Document/getDocumentsByApartmentId';
DocumentService.getDocumentsByApartmentIdStatusPath = '/api/Document/getDocumentsByApartmentIdStatus';
DocumentService.getDocumentsByApartmentId_1Path = '/api/Document/getDocumentsByDocumentCategoryId';
DocumentService.getDocumentsByApartmentIdStatus_1Path = '/api/Document/getDocumentsByDocumentCategoryIdStatus';
DocumentService.getDocumentsByDocumentTypeIdPath = '/api/Document/getDocumentsByDocumentTypeId';
DocumentService.getDocumentsByDocumentTypeIdStatusPath = '/api/Document/getDocumentsByDocumentTypeIdStatus';
DocumentService.getDocumentsByDocumentCategoryIdDocumentTypeIdPath = '/api/Document/getDocumentsByDocumentCategoryIdDocumentTypeId';
DocumentService.getDocumentsByDocumentCategoryIdDocumentTypeIdStatusPath = '/api/Document/getDocumentsByDocumentCategoryIdDocumentTypeIdStatus';
DocumentService.getDocumentsByUploadedByPath = '/api/Document/getDocumentsByUploadedBy';
DocumentService.getDocumentsByApartmentIdAccessibleToIdPath = '/api/Document/getDocumentsByApartmentIdAccessibleToId';
DocumentService.getDocumentsByApartmentIdAccessibleToIdStatusPath = '/api/Document/getDocumentsByApartmentIdAccessibleToIdStatus';
DocumentService.getDocumentsByApartmentIdAccessibleToId_1Path = '/api/Document/getDocumentsByApartmentIdAccessibleToIds';
DocumentService.getDocumentsByApartmentIdAccessibleToIdsStatusPath = '/api/Document/getDocumentsByApartmentIdAccessibleToIdsStatus';
DocumentService.getDocumentsByUploadedBy_1Path = '/api/Document/getDocumentsByUploadedOnRange';
DocumentService.addDocumentPath = '/api/Document/addDocument';
DocumentService.updateDocumentPath = '/api/Document/updateDocument';
DocumentService.deleteDocumentPath = '/api/Document/deleteDocument';
DocumentService.getUserDocumentByIdPath = '/api/Document/getUserDocumentById';
DocumentService.getUserDocumentsByApartmentIdPath = '/api/Document/getUserDocumentsByApartmentId';
DocumentService.getUserDocumentsByApartmentIdStatusPath = '/api/Document/getUserDocumentsByApartmentIdStatus';
DocumentService.getUserDocumentsByUserDocumentCategoryIdPath = '/api/Document/getUserDocumentsByUserDocumentCategoryId';
DocumentService.getUserDocumentsByUserDocumentCategoryIdStatusPath = '/api/Document/getUserDocumentsByUserDocumentCategoryIdStatus';
DocumentService.getUserDocumentsByUserDocumentTypeIdPath = '/api/Document/getUserDocumentsByUserDocumentTypeId';
DocumentService.getUserDocumentsByUserDocumentTypeIdStatusPath = '/api/Document/getUserDocumentsByUserDocumentTypeIdStatus';
DocumentService.getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdPath = '/api/Document/getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeId';
DocumentService.getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdStatusPath = '/api/Document/getUserDocumentsByUserDocumentCategoryIdUserDocumentTypeIdStatus';
DocumentService.getUserDocumentsByUploadedByPath = '/api/Document/getUserDocumentsByUploadedBy';
DocumentService.getUserDocumentsByApartmentIdAccessibleToIdPath = '/api/Document/getUserDocumentsByApartmentIdAccessibleToId';
DocumentService.getUserDocumentsByApartmentIdAccessibleToIdStatusPath = '/api/Document/getUserDocumentsByApartmentIdAccessibleToIdStatus';
DocumentService.getUserDocumentsByApartmentIdAccessibleToId_1Path = '/api/Document/getUserDocumentsByApartmentIdAccessibleToIds';
DocumentService.getUserDocumentsByApartmentIdAccessibleToIdsStatusPath = '/api/Document/getUserDocumentsByApartmentIdAccessibleToIdsStatus';
DocumentService.getUserDocumentsByUploadedBy_1Path = '/api/Document/getUserDocumentsByUploadedOnRange';
DocumentService.addUserDocumentPath = '/api/Document/addUserDocument';
DocumentService.updateUserDocumentPath = '/api/Document/updateUserDocument';
DocumentService.deleteUserDocumentPath = '/api/Document/deleteUserDocument';
DocumentService.uploadDocumentPath = '/api/Document/uploadDocument';
DocumentService.uploadUserDocumentPath = '/api/Document/uploadUserDocument';
DocumentService.GetAllDocByApartmentBlockUnitIdPath = '/api/Document/GetAllDocByApartmentBlockUnitId';
DocumentService.GetAllDocCountByApartmentIdPath = '/api/Document/GetAllDocCountByApartmentId';
DocumentService.GetAllDocCountByCategoryPath = '/api/Document/GetAllDocCountByCategory';
DocumentService.GetAllAdminPrivatedDocumentsPath = '/api/Document/GetAllAdminPrivatedDocuments';
DocumentService.GetAllPublicDocumentsPath = '/api/Document/GetAllPublicDocuments';
DocumentService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DocumentService);



/***/ }),

/***/ "./src/app/api/services/file-details.service.ts":
/*!******************************************************!*\
  !*** ./src/app/api/services/file-details.service.ts ***!
  \******************************************************/
/*! exports provided: FileDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDetailsService", function() { return FileDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

/* tslint:disable */





let FileDetailsService = class FileDetailsService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @param ApartmentId undefined
     */
    getAllFileDetailssResponse(ApartmentId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (ApartmentId != null)
            __params = __params.set('ApartmentId', ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/FileDetails/getAllFileDetailss`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param ApartmentId undefined
     */
    getAllFileDetailss(ApartmentId) {
        return this.getAllFileDetailssResponse(ApartmentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `FileDetailsService.GetAllFileDetailssByStatusParams` containing the following parameters:
     *
     * - `active`:
     *
     * - `ApartmentId`:
     */
    getAllFileDetailssByStatusResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.active != null)
            __params = __params.set('active', params.active.toString());
        if (params.ApartmentId != null)
            __params = __params.set('ApartmentId', params.ApartmentId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/FileDetails/getAllFileDetailssByStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `FileDetailsService.GetAllFileDetailssByStatusParams` containing the following parameters:
     *
     * - `active`:
     *
     * - `ApartmentId`:
     */
    getAllFileDetailssByStatus(params) {
        return this.getAllFileDetailssByStatusResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param fileDetailsId undefined
     */
    getFileDetailsByIdResponse(fileDetailsId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (fileDetailsId != null)
            __params = __params.set('fileDetailsId', fileDetailsId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + `/api/FileDetails/getFileDetailsById`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param fileDetailsId undefined
     */
    getFileDetailsById(fileDetailsId) {
        return this.getFileDetailsByIdResponse(fileDetailsId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `FileDetailsService.UploadAsyncParams` containing the following parameters:
     *
     * - `fileName`:
     *
     * - `file`:
     */
    UploadAsyncResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let __formData = new FormData();
        __body = __formData;
        if (params.fileName != null)
            __params = __params.set('fileName', params.fileName.toString());
        if (params.file != null) {
            __formData.append('file', params.file);
        }
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/FileDetails/UploadAsync`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `FileDetailsService.UploadAsyncParams` containing the following parameters:
     *
     * - `fileName`:
     *
     * - `file`:
     */
    UploadAsync(params) {
        return this.UploadAsyncResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `FileDetailsService.DownloadAsyncParams` containing the following parameters:
     *
     * - `savefileNameWithPath`:
     *
     * - `fileNameOnBlob`:
     */
    DownloadAsyncResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        if (params.savefileNameWithPath != null)
            __params = __params.set('savefileNameWithPath', params.savefileNameWithPath.toString());
        if (params.fileNameOnBlob != null)
            __params = __params.set('fileNameOnBlob', params.fileNameOnBlob.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/FileDetails/DownloadAsync`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `FileDetailsService.DownloadAsyncParams` containing the following parameters:
     *
     * - `savefileNameWithPath`:
     *
     * - `fileNameOnBlob`:
     */
    DownloadAsync(params) {
        return this.DownloadAsyncResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `FileDetailsService.AddFileDetailsWithFileUploadParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `InsertedBy`:
     *
     * - `Description`:
     *
     * - `ApartmentID`:
     */
    addFileDetailsWithFileUploadResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let __formData = new FormData();
        __body = __formData;
        if (params.file != null) {
            __formData.append('file', params.file);
        }
        if (params.InsertedBy != null)
            __params = __params.set('InsertedBy', params.InsertedBy.toString());
        if (params.Description != null)
            __params = __params.set('Description', params.Description.toString());
        if (params.ApartmentID != null)
            __params = __params.set('ApartmentID', params.ApartmentID.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/FileDetails/addFileDetailsWithFileOption`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `FileDetailsService.AddFileDetailsWithFileUploadParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `InsertedBy`:
     *
     * - `Description`:
     *
     * - `ApartmentID`:
     */
    addFileDetailsWithFileUpload(params) {
        return this.addFileDetailsWithFileUploadResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param fileDetails undefined
     */
    addFileDetailsResponse(fileDetails) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = fileDetails;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/FileDetails/addFileDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param fileDetails undefined
     */
    addFileDetails(fileDetails) {
        return this.addFileDetailsResponse(fileDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param fileDetails undefined
     */
    updateFileDetailsResponse(fileDetails) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = fileDetails;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/FileDetails/updateFileDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param fileDetails undefined
     */
    updateFileDetails(fileDetails) {
        return this.updateFileDetailsResponse(fileDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param params The `FileDetailsService.UpdateFileDetailsWithFileUploadParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `UpdatedBy`:
     *
     * - `IsActive`:
     *
     * - `FileDetailsId`:
     *
     * - `Description`:
     */
    updateFileDetailsWithFileUploadResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        let __formData = new FormData();
        __body = __formData;
        if (params.file != null) {
            __formData.append('file', params.file);
        }
        if (params.UpdatedBy != null)
            __params = __params.set('UpdatedBy', params.UpdatedBy.toString());
        if (params.IsActive != null)
            __params = __params.set('IsActive', params.IsActive.toString());
        if (params.FileDetailsId != null)
            __params = __params.set('FileDetailsId', params.FileDetailsId.toString());
        if (params.Description != null)
            __params = __params.set('Description', params.Description.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/FileDetails/updateFileDetailsWithFileUpload`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `FileDetailsService.UpdateFileDetailsWithFileUploadParams` containing the following parameters:
     *
     * - `file`:
     *
     * - `UpdatedBy`:
     *
     * - `IsActive`:
     *
     * - `FileDetailsId`:
     *
     * - `Description`:
     */
    updateFileDetailsWithFileUpload(params) {
        return this.updateFileDetailsWithFileUploadResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param fileDetails undefined
     */
    deleteFileDetailsResponse(fileDetails) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = fileDetails;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/FileDetails/deleteFileDetails`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param fileDetails undefined
     */
    deleteFileDetails(fileDetails) {
        return this.deleteFileDetailsResponse(fileDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
FileDetailsService.getAllFileDetailssPath = '/api/FileDetails/getAllFileDetailss';
FileDetailsService.getAllFileDetailssByStatusPath = '/api/FileDetails/getAllFileDetailssByStatus';
FileDetailsService.getFileDetailsByIdPath = '/api/FileDetails/getFileDetailsById';
FileDetailsService.UploadAsyncPath = '/api/FileDetails/UploadAsync';
FileDetailsService.DownloadAsyncPath = '/api/FileDetails/DownloadAsync';
FileDetailsService.addFileDetailsWithFileUploadPath = '/api/FileDetails/addFileDetailsWithFileOption';
FileDetailsService.addFileDetailsPath = '/api/FileDetails/addFileDetails';
FileDetailsService.updateFileDetailsPath = '/api/FileDetails/updateFileDetails';
FileDetailsService.updateFileDetailsWithFileUploadPath = '/api/FileDetails/updateFileDetailsWithFileUpload';
FileDetailsService.deleteFileDetailsPath = '/api/FileDetails/deleteFileDetails';
FileDetailsService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FileDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FileDetailsService);



/***/ })

}]);
//# sourceMappingURL=documents-documents-module-es2015.js.map