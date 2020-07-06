(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ams-documents-documents-module"],{

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
/* harmony default export */ __webpack_exports__["default"] = (".card.file-details {\n  width: 0 !important;\n  height: 0;\n  transition: all 0.15s ease;\n  transform: translate(120%, 0);\n}\n.card.file-details.show {\n  width: 40% !important;\n  height: auto;\n  transform: translate(0);\n  transition: all 0.15s ease;\n  margin: 0 0 0 2%;\n}\n.card.file-details.full {\n  width: 100% !important;\n  margin: 0;\n}\n.card.file-details .main {\n  overflow: auto;\n}\n.card.file-details .main > span {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 2rem;\n  padding: 0 0 6px 0;\n  color: #3f51b5;\n}\n.card.file-details .main p {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n}\n.card.file-details .main .icon {\n  width: 20px;\n}\n.card.file-details .main .downloadLists li {\n  width: 100%;\n  display: flex;\n  padding: 14px 20px;\n  border-bottom: 1px solid #eaeaea;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.6rem;\n  color: #007bff;\n}\n.card.file-details .main .downloadLists li:last-child {\n  border-bottom: none;\n}\n.card.file-details .main .downloadLists li .byname {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem;\n  color: #797979;\n}\n.card.file-details .main .downloadLists li .bydesc {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #797979;\n}\n.card.file-details .main .listContainer {\n  width: 100% !important;\n}\n.card.file-details .main .listContainer .icon {\n  cursor: pointer;\n}\n.card.file-details .main .card-header h5 {\n  padding: 8px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvY29tcG9uZW50cy9zaGFyZWQvZG9jdW1lbnQtY29tbW9uLWRvd25sb2FkL2RvY3VtZW50LWNvbW1vbi1kb3dubG9hZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Ftcy9jb21wb25lbnRzL3NoYXJlZC9kb2N1bWVudC1jb21tb24tZG93bmxvYWQvZG9jdW1lbnQtY29tbW9uLWRvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLG1CQUFBO0VBQ0EsU0FBQTtFQ29DRCwwQkRuQ0M7RUFDQSw2QkFBQTtBRUZGO0FGR0U7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQzhCRiwwQkQ3QkU7RUFDQSxnQkFBQTtBRUNIO0FGQ0U7RUFDQyxzQkdrSkc7RUhqSkgsU0FBQTtBRUNIO0FGQ0U7RUFDRSxjQUFBO0FFQ0o7QUZBSTtFSXdCRixxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFzQ0EsZUFBQTtFSjdERSxrQkFBQTtFQUNBLGNHa0NLO0FEOUJUO0FGRkk7RUlnQ0YsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQXNCQSxpQkFBQTtBRmhERjtBRkxJO0VBQ0MsV0FBQTtBRU9MO0FGTEk7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUlGRixxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBNENBLGlCQUFBO0VKM0NFLGNBQUE7QUVXSjtBRlZJO0VBQ0MsbUJBQUE7QUVZTDtBRlZJO0VJYUYsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQXNCQSxpQkFBQTtFSnBDRyxjRzZDTTtBRDdCWDtBRmRJO0VJZEYscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQTRDQSxpQkFBQTtFSi9CRyxjR3dDTTtBRHBCWDtBRmpCRztFQUNDLHNCR3dHRTtBRHJGTjtBRmxCSTtFQUNDLGVBQUE7QUVvQkw7QUZmSTtFQUNDLHdCQUFBO0FFaUJMIiwiZmlsZSI6InNyYy9hcHAvYW1zL2NvbXBvbmVudHMvc2hhcmVkL2RvY3VtZW50LWNvbW1vbi1kb3dubG9hZC9kb2N1bWVudC1jb21tb24tZG93bmxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xyXG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XHJcblxyXG4uY2FyZCB7XHJcblx0Ji5maWxlLWRldGFpbHMge1xyXG5cdFx0d2lkdGg6IDAgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogMDtcclxuXHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSwgMCk7XHJcblx0XHQmLnNob3cge1xyXG5cdFx0XHR3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcblx0XHRcdGhlaWdodDogYXV0bztcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcblx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xyXG5cdFx0XHRtYXJnaW46IDAgMCAwIDIlO1xyXG5cdFx0fVxyXG5cdFx0Ji5mdWxsIHtcclxuXHRcdFx0d2lkdGg6ICRmdWxsO1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHR9XHJcblx0XHQubWFpbiB7XHRcdFx0IFxyXG5cdFx0XHQgb3ZlcmZsb3c6IGF1dG87XHJcblx0XHRcdCA+IHNwYW4ge1xyXG5cdFx0XHRcdEBpbmNsdWRlIGhlYWQtbWVkaXVtO1xyXG5cdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcclxuXHRcdFx0XHRwYWRkaW5nOiAwIDAgNnB4IDA7XHJcblx0XHRcdFx0Y29sb3I6ICRtLWJsdWU7XHJcblx0XHRcdCB9XHJcblx0XHRcdCBwIHtcclxuXHRcdFx0IFx0QGluY2x1ZGUgZGVzcC1yZWd1bGFyO1xyXG5cdFx0XHQgXHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcclxuICAgICAgICBcdFx0XHJcblx0XHRcdCB9XHJcblx0XHRcdCAuaWNvbntcclxuXHRcdFx0XHQgd2lkdGg6MjBweFxyXG5cdFx0XHQgfVxyXG5cdFx0XHQgLmRvd25sb2FkTGlzdHMgbGkge1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcdFx0XHRcdFxyXG5cdFx0XHRcdHBhZGRpbmc6IDE0cHggMjBweDtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAkZ3JleS00NTA7XHJcblx0XHRcdFx0QGluY2x1ZGUgaGVhZC1yZWd1bGFyO1xyXG5cdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcclxuXHRcdFx0XHRjb2xvcjogIzAwN2JmZjtcclxuXHRcdFx0XHQmOmxhc3QtY2hpbGR7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOm5vbmVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmJ5bmFtZXtcclxuXHRcdFx0XHRcdEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcclxuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtdGlueSk7XHJcblx0XHRcdFx0XHRjb2xvcjogJGdyZXktNzUwO1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmJ5ZGVzY3tcclxuXHRcdFx0XHRcdEBpbmNsdWRlIGhlYWQtcmVndWxhcjtcclxuXHRcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTc1MDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Lmxpc3RDb250YWluZXJ7XHRcdFx0XHRcclxuXHRcdFx0XHR3aWR0aDogJGZ1bGw7XHJcblx0XHRcdFx0Lmljb257XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdC5jYXJkLWhlYWRlcntcclxuXHRcdFx0XHRoNXtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRwYWRkaW5nOiA4cHggMHB4IDBweCAwcHhcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBkZXNlbGVjdCAoKSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gZmxpcCgkZGlyZWN0aW9uKSB7XG4gIHRyYW5zZm9ybSA6IHJvdGF0ZVkoJGRpcmVjdGlvbik7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiLmNhcmQuZmlsZS1kZXRhaWxzIHtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSwgMCk7XG59XG4uY2FyZC5maWxlLWRldGFpbHMuc2hvdyB7XG4gIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIG1hcmdpbjogMCAwIDAgMiU7XG59XG4uY2FyZC5maWxlLWRldGFpbHMuZnVsbCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluID4gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDAgMCA2cHggMDtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gcCB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluIC5pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmRvd25sb2FkTGlzdHMgbGkge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmRvd25sb2FkTGlzdHMgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmRvd25sb2FkTGlzdHMgbGkgLmJ5bmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogIzc5Nzk3OTtcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiAuZG93bmxvYWRMaXN0cyBsaSAuYnlkZXNjIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM3OTc5Nzk7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmxpc3RDb250YWluZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluIC5saXN0Q29udGFpbmVyIC5pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluIC5jYXJkLWhlYWRlciBoNSB7XG4gIHBhZGRpbmc6IDhweCAwcHggMHB4IDBweDtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1zZW1pIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */");

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
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Document */ "./src/app/api/controllers/Document.ts");
/* harmony import */ var src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/FileDetails */ "./src/app/api/controllers/FileDetails.ts");
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
        this.fileDetailsService.downloadAsync(obj).subscribe((res) => {
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
        let params = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        //if(this.userPage) {     
        this.documentService.getAllDocCountByApartmentId(params).subscribe((res) => {
            this.getalldocument = res;
            if (this.getUserDocumentData(unitInfo).apartmentBlockUnitID != undefined) {
                let params = {
                    ApartmentBlockUnitId: this.getUserDocumentData(this.userUnitNo).apartmentBlockUnitID
                };
                this.documentService.getAllDocByApartmentBlockUnitId(params).subscribe((res) => {
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
            this.documentService.getAllDocByApartmentBlockUnitId(this.getUserDocumentData(this.userUnitNo).apartmentBlockUnitID).subscribe((res) => {
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
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_5__["DocumentService"] },
    { type: src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_6__["FileDetailsService"] },
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
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_5__["DocumentService"],
        src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_6__["FileDetailsService"],
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
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
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
            let params = {
                lookupvalue: details
            };
            this.lookupService.addLookupValue(params).subscribe((res) => {
                if (res.message) {
                    let categoryParams = {
                        LookupTypeId: 62
                    };
                    this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
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
            let params = {
                lookupvalue: details
            };
            this.lookupService.updateLookupValue(params).subscribe((res) => {
                if (res.message) {
                    let categoryParams = {
                        LookupTypeId: 62
                    };
                    this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
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
        let categoryParams = {
            LookupTypeId: 62
        };
        this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
            this.isDocumentCategoryLoaded = true;
            this.documentCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
    }
};
DocumentSetupCategoryComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
DocumentSetupCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-setup-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./document-setup-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./document-setup-category.component.scss */ "./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
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
/* harmony default export */ __webpack_exports__["default"] = (".icon-tabs {\n  display: flex;\n  justify-content: center;\n}\n.icon-tabs li {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n  padding: 0;\n  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  border-radius: 6px !important;\n}\n.icon-tabs li a {\n  color: #585858;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  padding: 10px 25px;\n  position: relative;\n  background-color: #ffffff;\n}\n.icon-tabs li a.active {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvZG9jdW1lbnQtc2V0dXAvZG9jdW1lbnQtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9kb2N1bWVudC1zZXR1cC9kb2N1bWVudC1zZXR1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDSEo7QURJSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFRVlOLDZDRlhNO0VFWU4sa0RGWk07RUVhTixxREZiTTtFRUxQLDZCQUFBO0FEUUQ7QURBVTtFQUNJLGNHaUZIO0VDbERULHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQXNDQSxpQkFBQTtFSnBFWSxrQkFBQTtFQUNBLGtCR2ZUO0VIZ0JTLHlCR2lHTjtBRjdGUjtBREhjO0VBQ0UseUJHc0NQO0VIckNPLGNHOEZSO0FGekZSIiwiZmlsZSI6InNyYy9hcHAvYW1zL2RvY3VtZW50cy9jb21wb25lbnRzL2RvY3VtZW50LXNldHVwL2RvY3VtZW50LXNldHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcclxuLmljb24tdGFic3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGxpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMCAycHggM3B4IC0xcHggcmdiYSgkYmxhY2ssIDAuMSkpO1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNnB4KTtcclxuICAgICAgICBcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkZ3JleS03MDA7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgaGVhZC1tZWRpdW07XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAkcmVsO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbS1ibHVlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxuXHJcbn0iLCIuaWNvbi10YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaWNvbi10YWJzIGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xufVxuLmljb24tdGFicyBsaSBhIHtcbiAgY29sb3I6ICM1ODU4NTg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uaWNvbi10YWJzIGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6ICNmZmZmZmY7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIGZsaXAoJGRpcmVjdGlvbikge1xuICB0cmFuc2Zvcm0gOiByb3RhdGVZKCRkaXJlY3Rpb24pO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtYmFzZS0wMjoxMTtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXNlbWkge1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".document-common-wrapper .card.users-list {\n  width: 100%;\n  transition: all 0.15s ease;\n}\n@media (min-width: 991px) {\n  .document-common-wrapper .card.users-list.show {\n    width: 58%;\n    transition: all 0.15s ease;\n  }\n}\n.document-common-wrapper .card .card-header {\n  border-bottom: none !important;\n}\n.document-common-wrapper .card .card-header .lime-green {\n  margin-top: -5px;\n}\n.document-common-wrapper .card .card-body.users > li {\n  border: none;\n  border-top: 1px solid #eaeaea;\n  padding: 14px 20px;\n  border-radius: 0 !important;\n  cursor: pointer;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc {\n  display: flex;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info {\n  margin-left: 10px;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info .title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  padding: 0 0 4px 0;\n  color: #3f51b5;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info .filecount {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1rem;\n  color: #797979;\n}\n.document-common-wrapper .card .card-body.users > li:hover {\n  background-color: #f9f9f9;\n  transition: all 0.15s ease;\n}\n.document-common-wrapper .card .card-body.users > li:hover h5 {\n  color: #3f51b5;\n}\n.upload-wrapper .card-header {\n  background-color: #5cd694;\n}\n.upload-wrapper .card-header h5, .upload-wrapper .card-header .icon.del {\n  color: #ffffff !important;\n}\n.upload-wrapper .submitBtn li, .upload-wrapper .submitBtn button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvZm9sZGVyLWxpc3RzL2ZvbGRlci1saXN0cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9mb2xkZXItbGlzdHMvZm9sZGVyLWxpc3RzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNDLFdBQUE7RUNvQ0YsMEJEbkNFO0FFSEg7QUZLSTtFQUREO0lBRUUsVUFBQTtJQ2dDSiwwQkQvQkk7RUVBSDtBQUNGO0FGR0U7RUFDVSw4QkFBQTtBRURaO0FGRVk7RUFDSSxnQkFBQTtBRUFoQjtBRk1JO0VBQ0MsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUNyQkosMkJBQUE7RUR1Qm1CLGVBQUE7QUVGcEI7QUZHb0I7RUFDSSxhQUFBO0FFRHhCO0FGR3dCO0VBQ0ksaUJBQUE7QUVENUI7QUZFNEI7RUdXMUIscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBc0NBLGlCQUFBO0VIaEQ4QixrQkFBQTtFQUNBLGNJcUJ2QjtBRm5CVDtBRkE0QjtFR21CMUIsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQXNCQSxlQUFBO0VIMUM4QixjSW1EckI7QUY3Q1g7QUZEUTtFQUNDLHlCSThERTtFSHRFViwwQkRTUTtBRUtUO0FGSlM7RUFDQyxjSU9EO0FGRFQ7QUZNSTtFQUNJLHlCSWhCSztBRmFiO0FGSVE7RUFDSSx5QkFBQTtBRUZaO0FGTVE7RUFDSSxXQUFBO0FFSloiLCJmaWxlIjoic3JjL2FwcC9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvZm9sZGVyLWxpc3RzL2ZvbGRlci1saXN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcclxuXHJcbi5kb2N1bWVudC1jb21tb24td3JhcHBlciB7XHJcblx0LmNhcmQge1xyXG5cdFx0Ji51c2Vycy1saXN0e1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XHJcblx0XHRcdCYuc2hvdyB7XHJcblx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNTglO1xyXG5cdFx0XHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7ICAgICAgICAgICBcclxuICAgICAgICAgICAgLmxpbWUtZ3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDotNXB4O1xyXG4gICAgICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1ib2R5IHtcclxuXHRcdFx0Ji51c2VycyB7XHJcblx0XHRcdFx0PiBsaSB7XHJcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgJGdyZXktNDUwO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMTRweCAyMHB4O1xyXG5cdFx0XHRcdFx0QGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvbGRlckRlc2Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZm97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgaGVhZC1tZWRpdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG0tYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWxlY291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZGVzcC1yZWd1bGFyO1xyXG5cdFx0XHRcdFx0XHQgICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtdGluaWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXktNzUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdCAgICBcclxuXHRcdFx0XHQgICAgJjpob3ZlciB7XHJcblx0XHRcdFx0ICAgIFx0YmFja2dyb3VuZC1jb2xvcjogJGdyZXktMTUwO1xyXG5cdFx0XHRcdCAgICBcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xyXG5cdFx0XHRcdCAgICBcdGg1IHtcclxuXHRcdFx0XHQgICAgXHRcdGNvbG9yOiAkbS1ibHVlO1xyXG5cdFx0XHRcdCAgICBcdH1cclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgICBcclxuXHRcdFxyXG5cclxuXHR9XHJcbn1cclxuLnVwbG9hZC13cmFwcGVye1xyXG4gICAgLmNhcmQtaGVhZGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JGxpbWUtZ3JlZW47XHJcbiAgICAgICAgaDUsIC5pY29uLmRlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiR3aGl0ZSAhaW1wb3J0YW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN1Ym1pdEJ0bntcclxuICAgICAgICBsaSwgYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIGZsaXAoJGRpcmVjdGlvbikge1xuICB0cmFuc2Zvcm0gOiByb3RhdGVZKCRkaXJlY3Rpb24pO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIi5kb2N1bWVudC1jb21tb24td3JhcHBlciAuY2FyZC51c2Vycy1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gIC5kb2N1bWVudC1jb21tb24td3JhcHBlciAuY2FyZC51c2Vycy1saXN0LnNob3cge1xuICAgIHdpZHRoOiA1OCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB9XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWhlYWRlciAubGltZS1ncmVlbiB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSAuZm9sZGVyRGVzYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpIC5mb2xkZXJEZXNjIC5pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpIC5mb2xkZXJEZXNjIC5pbmZvIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgcGFkZGluZzogMCAwIDRweCAwO1xuICBjb2xvcjogIzNmNTFiNTtcbn1cbi5kb2N1bWVudC1jb21tb24td3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkgLmZvbGRlckRlc2MgLmluZm8gLmZpbGVjb3VudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM3OTc5Nzk7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpOmhvdmVyIGg1IHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbi51cGxvYWQtd3JhcHBlciAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNkNjk0O1xufVxuLnVwbG9hZC13cmFwcGVyIC5jYXJkLWhlYWRlciBoNSwgLnVwbG9hZC13cmFwcGVyIC5jYXJkLWhlYWRlciAuaWNvbi5kZWwge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuLnVwbG9hZC13cmFwcGVyIC5zdWJtaXRCdG4gbGksIC51cGxvYWQtd3JhcHBlciAuc3VibWl0QnRuIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1zZW1pIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtYmFzZS0wMjoxMTtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIl19 */");

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
/* harmony import */ var src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Document */ "./src/app/api/controllers/Document.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");










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
        let accessibleListParams = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.UserService.getAllRoles(accessibleListParams).subscribe((res) => {
            this.accessibleList = res;
        }, error => { });
        let categoryParams = {
            LookupTypeId: 62
        };
        this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
            this.folderByCategory = res;
            this.documentService.getAllDocCountByCategory(adminCategory).subscribe((res) => {
                this.folderList = res;
                this.setFileCount();
                if (this.isUserPage) {
                    let documentListParams = {
                        ApartmentId: parseInt(this.cookieService.get('apartmentId'))
                    };
                    this.documentService.getAllDocCountByApartmentId(documentListParams).subscribe((res) => {
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
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_3__["DocumentService"] },
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
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_3__["DocumentService"],
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
/* harmony import */ var src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Document */ "./src/app/api/controllers/Document.ts");
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
        let params = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.documentService.getAllDocCountByApartmentId(params).subscribe((res) => {
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
    { type: src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_2__["DocumentService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
UserListsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-lists',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/user-lists/user-lists.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-lists.component.scss */ "./src/app/ams/documents/components/user-lists/user-lists.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_2__["DocumentService"],
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
//# sourceMappingURL=ams-documents-documents-module-es2015.js.map