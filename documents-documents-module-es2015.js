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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/documents-reports/documents-reports.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/documents-reports/documents-reports.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>documents-reports works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/folder-lists/folder-lists.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/folder-lists/folder-lists.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"document-common-wrapper\">\n\n\t<app-loader *ngIf=\"!isCommmonDataLoaded\"></app-loader>\n\t\n\t<div class=\"card table-card users-list float-left\" [ngClass]=\"isTabSelected()\" *ngIf=\"isCommmonDataLoaded\">\n\n\t\t<div class=\"card-header\">    \t\t\n    \t    <div class=\"float-left\">\n\t\t\t\t<h5>Folder<span class=\"badge lime-green\">{{totalUserItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Upload and download the documents</p>\t\t\t\n\t\t\t</div>\t\t\t\t\t\n\t\t\t\n\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t<li class=\"list-inline-item search d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search folder\" [(ngModel)]=\"findFolder\" >\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\t\t\t\t\t\n\t\t\t\t\t<a class=\"btn lime-green\" href=\"javascript:void(0)\" (click)=\"openUploadModal()\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Document</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\t\n\t\t  </div>\n\t\t  \n\t\t<div class=\"card-body p-0 users\">\n\n\t\t\t<ng-container>\t\t\t\t\n\t\t\t\t<ng-container *ngFor=\"let item of folderByCategory | simpleSearch:findFolder\">\n\t\t\t\t\t<li class=\"list-group-item\" (click)=\"showFolderDetails(item.lookupValueId)\">\n\t\t\t\t\t\t<div class=\"folderDesc\">\n\t\t\t\t\t\t\t<img src=\"assets/images/folder-icon.svg\"/>\t\n\t\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t\t<span class=\"title\">{{item.lookupValueName}}</span><br>\n\t\t\t\t\t\t\t\t<span class=\"filecount mr-2 float-left\" *ngIf=\"!this.isUserPage\">Files: {{item.documentCount}}</span>       \n\t\t\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\n\t\t\t</ng-container>\t\t\t\n\t\t</div>\n\n\t</div>\n\n\t<app-document-common-download [selectedTab]=\"selectedTab\" *ngIf=\"!isMobileView()\"></app-document-common-download>\n</div>\n\n\n\n<ng-template #uploadTemplate let-alert>\n  <div class=\"upload-wrapper\">\n    <div class=\"close-icon\" mat-dialog-close>\n      <i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n    </div>\n    <div class=\"card mb-30\">\n      <div class=\"card-header\">\n        <div class=\"float-left\">\n            <h5>Upload Documents</h5>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <form #addMessageForm = \"ngForm\" name=\"addMessageForm\" (ngSubmit)=\"submitUploadAdmindoc(addMessageForm)\"  novalidate>\n          \n            <div class=\"input-box\">                \n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter the file name here...\" name=\"phoneNo\" [(ngModel)]=\"uploadDescription\" required>\n            </div>\n          \n          <div class=\"row\">\n            <div class=\"col-md-12\">\n\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t<label>Category:*</label>\n\n\t\t\t\t\t<select \n\t\t\t\t\t\tname=\"category\" \n\t\t\t\t\t\tid=\"category\" \n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t[(ngModel)]=\"uploadcategoryId\" required>\t\t\t\t\t\t\n\t\t\t\t\t\t<option *ngFor=\"let item of folderByCategory\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t</select>\n\n\t\t\t\t</div>\n            </div>\n            <div class=\"col-md-12\">\n\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t<label>Accessible to:*</label>\n\n\t\t\t\t\t<select \n\t\t\t\t\t\tname=\"accessible\" \n\t\t\t\t\t\tid=\"accessible\" \n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t[(ngModel)]=\"uploadroleID\" required>\n\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of accessibleList\" [value]=\"item.roleId\">{{ item.roleName }}</option>\n\t\t\t\t\t</select>\n\n\t\t\t\t</div>\n\t\t\t</div>\n          </div>\n\n          <div class=\"input-box\">    \n            <label>Who should be notified via email?</label>            \n            <input type=\"text\" class=\"form-control\" placeholder=\"Please enter the email ID here..\" name=\"phoneNo\" [(ngModel)]=\"userEmail\" required>\n        </div>        \n\t\t\t\t\t\t\n          <div class=\"input-box\">\n            <label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\">\n\t\t\t<input class=\"form-control\"  #uploader type=\"file\"  [(ngModel)]=\"uploadFileItem\" (change)=\"uploadFile($event.target.files)\"  >\n\t\t\t<i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Add Document</label>\n\n            <div class=\"file-desp\" *ngIf=\"isFileAdded\">\n              <div *ngFor=\"let item of listOfFiles; let i = index\">\n                <span class=\"name mr-3\">{{item.name}}</span>\n                <span class=\"size\">{{bytesToSize(item.size)}}</span>\n                <i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n              </div>\n\t\t\t</div>\n\t\t\t\n\t\t  </div>\n\t\t  \n\t\t  <div class=\"row submitBtn\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"!listOfFiles.length && addMessageForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n        \n\t\t</form>\n\t\t\n      </div>\n    </div>\n  </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/user-lists/user-lists.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/user-lists/user-lists.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"document-user-wrapper\">\n\n  <div class=\"card table-card\" *ngIf=\"isUserDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>User Document</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Upload, download and view the document</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\" >\n    \t\t\t</li>\n    \t\t\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>              \n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('firstName')\">Name <span [ngClass]=\"getFieldOrderBy('firstName')\"></span></th>\t\t\t\t      \n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No <span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('unitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('unitNo')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('document')\">Documents<span [ngClass]=\"getFieldOrderBy('document')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n            \n\t\t\t\t    <tr *ngFor=\"let unit of getAllDocumentData | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: unitData | sort : unitFieldType: unitOrder; let i = index\" >\n              \n\t\t\t\t      <td class=\"grey\">{{unit.firstName}}</td>\t\t\t\t     \n\t\t\t\t      <td class=\"grey\">{{unit.apartmentBlockID}}</td>\n              <td class=\"grey\">{{unit.apartmentBlockUnitNumber}}</td>\n              <td class=\"grey\">{{unit.documents}}</td>\n              <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/document/user/{{unit.apartmentBlockUnitNumber}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon view\" name=\"eye\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t\t    </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n      <app-pagination        \n        [totalItems]=\"totalUserDocument\"  \n        [ItemStartIndex]=\"ItemUserStartIndex\"\n        [ItemEndIndex] = \"ItemUserEndIndex\"\n        [itemLimit] = \"itemUserLimit\"\n        (outputParams) = \"getUserIndexParams($event)\">\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".card.file-details {\n  width: 0 !important;\n  height: 0;\n  transition: all 0.15s ease;\n  transform: translate(120%, 0);\n}\n.card.file-details.show {\n  width: 40% !important;\n  height: auto;\n  transform: translate(0);\n  transition: all 0.15s ease;\n  margin: 0 0 0 2%;\n}\n.card.file-details.full {\n  width: 100% !important;\n  margin: 0;\n}\n.card.file-details .main {\n  overflow: auto;\n}\n.card.file-details .main > span {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 2rem;\n  padding: 0 0 6px 0;\n  color: #3f51b5;\n}\n.card.file-details .main p {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n}\n.card.file-details .main .icon {\n  width: 20px;\n}\n.card.file-details .main .downloadLists li {\n  width: 100%;\n  display: flex;\n  padding: 14px 20px;\n  border-bottom: 1px solid #eaeaea;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.6rem;\n  color: #007bff;\n}\n.card.file-details .main .downloadLists li:last-child {\n  border-bottom: none;\n}\n.card.file-details .main .downloadLists li .byname {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem;\n  color: #797979;\n}\n.card.file-details .main .downloadLists li .bydesc {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #797979;\n}\n.card.file-details .main .listContainer {\n  width: 100% !important;\n}\n.card.file-details .main .listContainer .icon {\n  cursor: pointer;\n}\n.card.file-details .main .card-header h5 {\n  padding: 8px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvY29tcG9uZW50cy9zaGFyZWQvZG9jdW1lbnQtY29tbW9uLWRvd25sb2FkL2RvY3VtZW50LWNvbW1vbi1kb3dubG9hZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Ftcy9jb21wb25lbnRzL3NoYXJlZC9kb2N1bWVudC1jb21tb24tZG93bmxvYWQvZG9jdW1lbnQtY29tbW9uLWRvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLG1CQUFBO0VBQ0EsU0FBQTtFQ3FDRCwwQkRwQ0M7RUFDQSw2QkFBQTtBRUZGO0FGR0U7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQytCRiwwQkQ5QkU7RUFDQSxnQkFBQTtBRUNIO0FGQ0U7RUFDQyxzQkc4SUc7RUg3SUgsU0FBQTtBRUNIO0FGQ0U7RUFDRSxjQUFBO0FFQ0o7QUZBSTtFSXdCRixxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUE2QkEsZUFBQTtFSnBERSxrQkFBQTtFQUNBLGNHZ0NLO0FENUJUO0FGRkk7RUlnQ0YsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGlCQUFBO0FGdkNGO0FGTEk7RUFDQyxXQUFBO0FFT0w7QUZMSTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFSUZGLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFtQ0EsaUJBQUE7RUpsQ0UsY0FBQTtBRVdKO0FGVkk7RUFDQyxtQkFBQTtBRVlMO0FGVkk7RUlhRiwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBYUEsaUJBQUE7RUozQkcsY0cyQ007QUQzQlg7QUZkSTtFSWRGLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFtQ0EsaUJBQUE7RUp0QkcsY0dzQ007QURsQlg7QUZqQkc7RUFDQyxzQkdvR0U7QURqRk47QUZsQkk7RUFDQyxlQUFBO0FFb0JMO0FGZkk7RUFDQyx3QkFBQTtBRWlCTCIsImZpbGUiOiJzcmMvYXBwL2Ftcy9jb21wb25lbnRzL3NoYXJlZC9kb2N1bWVudC1jb21tb24tZG93bmxvYWQvZG9jdW1lbnQtY29tbW9uLWRvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xyXG5cclxuLmNhcmQge1xyXG5cdCYuZmlsZS1kZXRhaWxzIHtcclxuXHRcdHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDEyMCUsIDApO1xyXG5cdFx0Ji5zaG93IHtcclxuXHRcdFx0d2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG5cdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcclxuXHRcdFx0bWFyZ2luOiAwIDAgMCAyJTtcclxuXHRcdH1cclxuXHRcdCYuZnVsbCB7XHJcblx0XHRcdHdpZHRoOiAkZnVsbDtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0fVxyXG5cdFx0Lm1haW4ge1x0XHRcdCBcclxuXHRcdFx0IG92ZXJmbG93OiBhdXRvO1xyXG5cdFx0XHQgPiBzcGFuIHtcclxuXHRcdFx0XHRAaW5jbHVkZSBoZWFkLW1lZGl1bTtcclxuXHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bSk7XHJcblx0XHRcdFx0cGFkZGluZzogMCAwIDZweCAwO1xyXG5cdFx0XHRcdGNvbG9yOiAkbS1ibHVlO1xyXG5cdFx0XHQgfVxyXG5cdFx0XHQgcCB7XHJcblx0XHRcdCBcdEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcclxuXHRcdFx0IFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XHJcbiAgICAgICAgXHRcdFxyXG5cdFx0XHQgfVxyXG5cdFx0XHQgLmljb257XHJcblx0XHRcdFx0IHdpZHRoOjIwcHhcclxuXHRcdFx0IH1cclxuXHRcdFx0IC5kb3dubG9hZExpc3RzIGxpIHtcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHRcdFx0XHRcclxuXHRcdFx0XHRwYWRkaW5nOiAxNHB4IDIwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgJGdyZXktNDUwO1xyXG5cdFx0XHRcdEBpbmNsdWRlIGhlYWQtcmVndWxhcjtcclxuXHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XHJcblx0XHRcdFx0Y29sb3I6ICMwMDdiZmY7XHJcblx0XHRcdFx0JjpsYXN0LWNoaWxke1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTpub25lXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5ieW5hbWV7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSBkZXNwLXJlZ3VsYXI7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXRpbnkpO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTc1MDtcdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5ieWRlc2N7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSBoZWFkLXJlZ3VsYXI7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcclxuXHRcdFx0XHRcdGNvbG9yOiAkZ3JleS03NTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC5saXN0Q29udGFpbmVye1x0XHRcdFx0XHJcblx0XHRcdFx0d2lkdGg6ICRmdWxsO1xyXG5cdFx0XHRcdC5pY29ue1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHQuY2FyZC1oZWFkZXJ7XHJcblx0XHRcdFx0aDV7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cGFkZGluZzogOHB4IDBweCAwcHggMHB4XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiLmNhcmQuZmlsZS1kZXRhaWxzIHtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSwgMCk7XG59XG4uY2FyZC5maWxlLWRldGFpbHMuc2hvdyB7XG4gIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIG1hcmdpbjogMCAwIDAgMiU7XG59XG4uY2FyZC5maWxlLWRldGFpbHMuZnVsbCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluID4gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDAgMCA2cHggMDtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gcCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmljb24ge1xuICB3aWR0aDogMjBweDtcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiAuZG93bmxvYWRMaXN0cyBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzAwN2JmZjtcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiAuZG93bmxvYWRMaXN0cyBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiAuZG93bmxvYWRMaXN0cyBsaSAuYnluYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICM3OTc5Nzk7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmRvd25sb2FkTGlzdHMgbGkgLmJ5ZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjNzk3OTc5O1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluIC5saXN0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiAubGlzdENvbnRhaW5lciAuaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiAuY2FyZC1oZWFkZXIgaDUge1xuICBwYWRkaW5nOiA4cHggMHB4IDBweCAwcHg7XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4OyIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _api_services_document_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/document.service */ "./src/app/api/services/document.service.ts");
/* harmony import */ var _api_services_file_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../api/services/file-details.service */ "./src/app/api/services/file-details.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");









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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], DocumentCommonDownloadComponent.prototype, "selectedTab", void 0);
DocumentCommonDownloadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-common-download',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./document-common-download.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/shared/document-common-download/document-common-download.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./document-common-download.component.scss */ "./src/app/ams/components/shared/document-common-download/document-common-download.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");




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
DocumentSetupCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-setup-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./document-setup-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./document-setup-category.component.scss */ "./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
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
/* harmony default export */ __webpack_exports__["default"] = (".icon-tabs {\n  display: flex;\n  justify-content: center;\n}\n.icon-tabs li {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n  padding: 0;\n  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  border-radius: 6px !important;\n}\n.icon-tabs li a {\n  color: #585858;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  padding: 10px 25px;\n  position: relative;\n  background-color: #ffffff;\n}\n.icon-tabs li a.active {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvZG9jdW1lbnQtc2V0dXAvZG9jdW1lbnQtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9kb2N1bWVudC1zZXR1cC9kb2N1bWVudC1zZXR1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDSEo7QURJSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFRVlOLDZDRlhNO0VFWU4sa0RGWk07RUVhTixxREZiTTtFRUxQLDZCQUFBO0FEUUQ7QURBVTtFQUNJLGNHK0VIO0VDaERULHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQTZCQSxpQkFBQTtFSjNEWSxrQkFBQTtFQUNBLGtCR2ZUO0VIZ0JTLHlCRytGTjtBRjNGUjtBREhjO0VBQ0UseUJHb0NQO0VIbkNPLGNHNEZSO0FGdkZSIiwiZmlsZSI6InNyYy9hcHAvYW1zL2RvY3VtZW50cy9jb21wb25lbnRzL2RvY3VtZW50LXNldHVwL2RvY3VtZW50LXNldHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcclxuLmljb24tdGFic3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGxpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMCAycHggM3B4IC0xcHggcmdiYSgkYmxhY2ssIDAuMSkpO1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNnB4KTtcclxuICAgICAgICBcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkZ3JleS03MDA7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgaGVhZC1tZWRpdW07XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAkcmVsO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbS1ibHVlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxuXHJcbn0iLCIuaWNvbi10YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaWNvbi10YWJzIGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xufVxuLmljb24tdGFicyBsaSBhIHtcbiAgY29sb3I6ICM1ODU4NTg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uaWNvbi10YWJzIGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6ICNmZmZmZmY7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4OyIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


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
DocumentSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./document-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./document-setup.component.scss */ "./src/app/ams/documents/components/document-setup/document-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DocumentSetupComponent);



/***/ }),

/***/ "./src/app/ams/documents/components/documents-reports/documents-reports.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/documents/components/documents-reports/documents-reports.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9kb2N1bWVudHMtcmVwb3J0cy9kb2N1bWVudHMtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/documents/components/documents-reports/documents-reports.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/documents/components/documents-reports/documents-reports.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DocumentsReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsReportsComponent", function() { return DocumentsReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DocumentsReportsComponent = class DocumentsReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DocumentsReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-documents-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./documents-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/documents-reports/documents-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./documents-reports.component.scss */ "./src/app/ams/documents/components/documents-reports/documents-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DocumentsReportsComponent);



/***/ }),

/***/ "./src/app/ams/documents/components/folder-lists/folder-lists.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/ams/documents/components/folder-lists/folder-lists.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".document-common-wrapper .card.users-list {\n  width: 100%;\n  transition: all 0.15s ease;\n}\n@media (min-width: 991px) {\n  .document-common-wrapper .card.users-list.show {\n    width: 58%;\n    transition: all 0.15s ease;\n  }\n}\n.document-common-wrapper .card .card-header {\n  border-bottom: none !important;\n}\n.document-common-wrapper .card .card-header .lime-green {\n  margin-top: -5px;\n}\n.document-common-wrapper .card .card-body.users > li {\n  border: none;\n  border-top: 1px solid #eaeaea;\n  padding: 14px 20px;\n  border-radius: 0 !important;\n  cursor: pointer;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc {\n  display: flex;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info {\n  margin-left: 10px;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info .title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  padding: 0 0 4px 0;\n  color: #3f51b5;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info .filecount {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1rem;\n  color: #797979;\n}\n.document-common-wrapper .card .card-body.users > li:hover {\n  background-color: #f9f9f9;\n  transition: all 0.15s ease;\n}\n.document-common-wrapper .card .card-body.users > li:hover h5 {\n  color: #3f51b5;\n}\n.upload-wrapper .card-header {\n  background-color: #5cd694;\n}\n.upload-wrapper .card-header h5, .upload-wrapper .card-header .icon.del {\n  color: #ffffff !important;\n}\n.upload-wrapper .submitBtn li, .upload-wrapper .submitBtn button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvZm9sZGVyLWxpc3RzL2ZvbGRlci1saXN0cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9mb2xkZXItbGlzdHMvZm9sZGVyLWxpc3RzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNDLFdBQUE7RUNxQ0YsMEJEcENFO0FFSEg7QUZLSTtFQUREO0lBRUUsVUFBQTtJQ2lDSiwwQkRoQ0k7RUVBSDtBQUNGO0FGR0U7RUFDVSw4QkFBQTtBRURaO0FGRVk7RUFDSSxnQkFBQTtBRUFoQjtBRk1JO0VBQ0MsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUNyQkosMkJBQUE7RUR1Qm1CLGVBQUE7QUVGcEI7QUZHb0I7RUFDSSxhQUFBO0FFRHhCO0FGR3dCO0VBQ0ksaUJBQUE7QUVENUI7QUZFNEI7RUdXMUIscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBNkJBLGlCQUFBO0VIdkM4QixrQkFBQTtFQUNBLGNJbUJ2QjtBRmpCVDtBRkE0QjtFR21CMUIsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGVBQUE7RUhqQzhCLGNJaURyQjtBRjNDWDtBRkRRO0VBQ0MseUJJNERFO0VIbkVWLDBCRFFRO0FFS1Q7QUZKUztFQUNDLGNJS0Q7QUZDVDtBRk1JO0VBQ0kseUJJakJLO0FGY2I7QUZJUTtFQUNJLHlCQUFBO0FFRlo7QUZNUTtFQUNJLFdBQUE7QUVKWiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9mb2xkZXItbGlzdHMvZm9sZGVyLWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xyXG5cclxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIHtcclxuXHQuY2FyZCB7XHJcblx0XHQmLnVzZXJzLWxpc3R7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcclxuXHRcdFx0Ji5zaG93IHtcclxuXHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA1OCU7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubGltZS1ncmVlbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi01cHg7XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWJvZHkge1xyXG5cdFx0XHQmLnVzZXJzIHtcclxuXHRcdFx0XHQ+IGxpIHtcclxuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JleS00NTA7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxNHB4IDIwcHg7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAuZm9sZGVyRGVzYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBoZWFkLW1lZGl1bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDRweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbS1ibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbGVjb3VudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBkZXNwLXJlZ3VsYXI7XHJcblx0XHRcdFx0XHRcdCAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC10aW5pZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleS03NTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0ICAgIFxyXG5cdFx0XHRcdCAgICAmOmhvdmVyIHtcclxuXHRcdFx0XHQgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS0xNTA7XHJcblx0XHRcdFx0ICAgIFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XHJcblx0XHRcdFx0ICAgIFx0aDUge1xyXG5cdFx0XHRcdCAgICBcdFx0Y29sb3I6ICRtLWJsdWU7XHJcblx0XHRcdFx0ICAgIFx0fVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICAgIFxyXG5cdFx0XHJcblxyXG5cdH1cclxufVxyXG4udXBsb2FkLXdyYXBwZXJ7XHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokbGltZS1ncmVlbjtcclxuICAgICAgICBoNSwgLmljb24uZGVsIHtcclxuICAgICAgICAgICAgY29sb3I6JHdoaXRlICFpbXBvcnRhbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3VibWl0QnRue1xyXG4gICAgICAgIGxpLCBidXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iLCIuZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQudXNlcnMtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xuICAuZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQudXNlcnMtbGlzdC5zaG93IHtcbiAgICB3aWR0aDogNTglO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgfVxufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kb2N1bWVudC1jb21tb24td3JhcHBlciAuY2FyZCAuY2FyZC1oZWFkZXIgLmxpbWUtZ3JlZW4ge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kb2N1bWVudC1jb21tb24td3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkgLmZvbGRlckRlc2Mge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSAuZm9sZGVyRGVzYyAuaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSAuZm9sZGVyRGVzYyAuaW5mbyAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpIC5mb2xkZXJEZXNjIC5pbmZvIC5maWxlY291bnQge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM3OTc5Nzk7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpOmhvdmVyIGg1IHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbi51cGxvYWQtd3JhcHBlciAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNkNjk0O1xufVxuLnVwbG9hZC13cmFwcGVyIC5jYXJkLWhlYWRlciBoNSwgLnVwbG9hZC13cmFwcGVyIC5jYXJkLWhlYWRlciAuaWNvbi5kZWwge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuLnVwbG9hZC13cmFwcGVyIC5zdWJtaXRCdG4gbGksIC51cGxvYWQtd3JhcHBlciAuc3VibWl0QnRuIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4OyJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_services_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/document.service */ "./src/app/api/services/document.service.ts");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
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
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("uploadTemplate", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], FolderListsComponent.prototype, "uploadTemplate", void 0);
FolderListsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder-lists',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./folder-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/folder-lists/folder-lists.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./folder-lists.component.scss */ "./src/app/ams/documents/components/folder-lists/folder-lists.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_9__["LookupService"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _api_services_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_services_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/services/document.service */ "./src/app/api/services/document.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");




let UserListsComponent = class UserListsComponent {
    constructor(documentService, cookieService) {
        this.documentService = documentService;
        this.cookieService = cookieService;
        this.isUserDataLoaded = false;
        this.itemUserLimit = 5;
        this.ItemUserStartIndex = 0;
        this.isMobile = false;
        this.unitFieldType = "firstName";
        this.unitOrder = true;
    }
    getUserIndexParams(event) {
        this.ItemUserStartIndex = event.ItemStartIndex;
        this.ItemUserEndIndex = event.ItemEndIndex;
        this.itemUserLimit = event.itemLimit;
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
            return this.unitOrder ? 'asc' : 'desc';
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
UserListsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-lists',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/user-lists/user-lists.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-lists.component.scss */ "./src/app/ams/documents/components/user-lists/user-lists.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DocumentComponent = class DocumentComponent {
    constructor() { }
    ngOnInit() {
    }
};
DocumentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./document.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/document.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./document.component.scss */ "./src/app/ams/documents/document.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/document-setup/document-setup.component */ "./src/app/ams/documents/components/document-setup/document-setup.component.ts");
/* harmony import */ var _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/folder-lists/folder-lists.component */ "./src/app/ams/documents/components/folder-lists/folder-lists.component.ts");
/* harmony import */ var _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-lists/user-lists.component */ "./src/app/ams/documents/components/user-lists/user-lists.component.ts");
/* harmony import */ var _components_documents_reports_documents_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/documents-reports/documents-reports.component */ "./src/app/ams/documents/components/documents-reports/documents-reports.component.ts");







const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_3__["DocumentSetupComponent"] },
    { path: 'common', component: _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_4__["FolderListsComponent"] },
    { path: 'user', component: _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_5__["UserListsComponent"] },
    { path: 'user/:id', component: _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_4__["FolderListsComponent"] },
    { path: 'reports', component: _components_documents_reports_documents_reports_component__WEBPACK_IMPORTED_MODULE_6__["DocumentsReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let DocumentsRoutingModule = class DocumentsRoutingModule {
};
DocumentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/ams/documents/documents-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _document_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document.component */ "./src/app/ams/documents/document.component.ts");
/* harmony import */ var _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/document-setup/document-setup.component */ "./src/app/ams/documents/components/document-setup/document-setup.component.ts");
/* harmony import */ var _components_document_setup_document_setup_category_document_setup_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/document-setup/document-setup-category/document-setup-category.component */ "./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.ts");
/* harmony import */ var _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/folder-lists/folder-lists.component */ "./src/app/ams/documents/components/folder-lists/folder-lists.component.ts");
/* harmony import */ var _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-lists/user-lists.component */ "./src/app/ams/documents/components/user-lists/user-lists.component.ts");
/* harmony import */ var _components_shared_document_common_download_document_common_download_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/document-common-download/document-common-download.component */ "./src/app/ams/components/shared/document-common-download/document-common-download.component.ts");
/* harmony import */ var _components_documents_reports_documents_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/documents-reports/documents-reports.component */ "./src/app/ams/documents/components/documents-reports/documents-reports.component.ts");












let DocumentsModule = class DocumentsModule {
};
DocumentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _document_component__WEBPACK_IMPORTED_MODULE_5__["DocumentComponent"],
            _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_6__["DocumentSetupComponent"],
            _components_document_setup_document_setup_category_document_setup_category_component__WEBPACK_IMPORTED_MODULE_7__["DocumentSetupCategoryComponent"],
            _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_8__["FolderListsComponent"],
            _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_9__["UserListsComponent"],
            _components_shared_document_common_download_document_common_download_component__WEBPACK_IMPORTED_MODULE_10__["DocumentCommonDownloadComponent"],
            _components_documents_reports_documents_reports_component__WEBPACK_IMPORTED_MODULE_11__["DocumentsReportsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentsRoutingModule"]
        ],
        bootstrap: [_document_component__WEBPACK_IMPORTED_MODULE_5__["DocumentComponent"]]
    })
], DocumentsModule);



/***/ })

}]);
//# sourceMappingURL=documents-documents-module-es2015.js.map