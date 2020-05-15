function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/shared/document-common-download/document-common-download.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/shared/document-common-download/document-common-download.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsComponentsSharedDocumentCommonDownloadDocumentCommonDownloadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card file-details float-left\" [ngClass]=\"[ isTabSelected() , isNotSlide()]\" id=\"accordion\">\n\t\n\t<app-loader *ngIf=\"!isDocumentDataLoaded\"></app-loader>\n\n\t<div class=\"card-body p-0\" *ngIf=\"isDocumentDataLoaded\">\n\t\t\n\t\t<div class=\"main card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h5>Downloads</h5>\t\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\t\t<ul class=\"list-inline\">\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<li class=\"list-inline-item search d-md-inline-block mr-0 float-right\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search downloads\"  [(ngModel)]=\"downloadFilesearch\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t  </div>\n\t\t\t<div class=\"downloadLists\">\n\t\t\t\t<li *ngIf=\"!isNoDownloads\">\n\t\t\t\t\t<p class=\"text-capitalize\">Files you download appear here</p>\n\t\t\t\t</li>\n\t\t\t\t<ng-container *ngFor=\"let item of listofFiles | simpleSearch:downloadFilesearch\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<diV class=\"listContainer\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t\t\t<p class=\"text-capitalize\">{{item.fileName}}</p>\n\t\t\t\t\t\t\t\t<span class=\"byname mr-2 float-left\">by {{item.uploadedPersonName}}</span><br>\t\t\t\t\t\t\t\t \t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"float-right icon\" (click) = \"downloadFile(item)\" >\n\t\t\t\t\t\t\t\t<img src=\"assets/images/download-icon.svg\"/>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</diV>\t\t\t\t\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n  \t</div>\n </div>   \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.html":
  /*!**************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.html ***!
    \**************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDocumentsComponentsDocumentSetupDocumentSetupCategoryDocumentSetupCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"document-setup-category-wrapper\">\n\n\t<app-loader *ngIf=\"!isDocumentCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isDocumentCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Document Categories</h4>\n\t\t<ng-container *ngFor=\"let item of documentCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateDocumentCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-none\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteAssetCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn blue\" (click)=\"addNewDocumentCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6>Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isDocumentCategoryNew || isDocumentCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5 *ngIf=\"isDocumentCategoryNew\">Add Document Category</h5>\n    \t\t\t<h5 *ngIf=\"!isDocumentCategoryNew\">Update Document Category</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"alertTicketMessage\" [isError]=\"isCategoryError\" [isSuccess]=\"isCategorySuccess\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isDocumentCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isDocumentCategorySubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addDocumentCategoryForm = \"ngForm\" name=\"addDocumentCategoryForm\" (ngSubmit)=\"submitdocumentCategoryForm(addDocumentCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"documentCategory\" [(ngModel)]=\"documentCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addDocumentCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDocumentsComponentsDocumentSetupDocumentSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"document-setup-wrapper\">\n\n  <ul class=\"icon-tabs btn-group\" id=\"payment-list\">\n\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"javascript:void(0)\" role=\"tab\" (click)=\"showTab('category')\" [ngClass]=\"selectedTab == 'category' ? 'active' : ''\">        \n        Category\n      </a>\n    </li>\n\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" href=\"javascript:void(0)\" role=\"tab\" (click)=\"showTab('accessible')\" [ngClass]=\"selectedTab == 'accessible' ? 'active' : ''\" >      \n        Accessible\n      </a>\n    </li>\n\n  </ul>\n\n  <div class=\"tab-content\">\n\n    <div class=\"tab-pane\" id=\"dues\" [ngClass]=\"selectedTab == 'category' ? 'active' : ''\">\n      <app-document-setup-category></app-document-setup-category>\n    </div>\n      \n    <div class=\"tab-pane\" id=\"advance\" [ngClass]=\"selectedTab == 'accessible' ? 'active' : ''\">\n      document-accssible works!\n    </div>\n  </div>\n  \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/documents-reports/documents-reports.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/documents-reports/documents-reports.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDocumentsComponentsDocumentsReportsDocumentsReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>documents-reports works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/folder-lists/folder-lists.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/folder-lists/folder-lists.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDocumentsComponentsFolderListsFolderListsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"document-common-wrapper\">\n\n\t<app-loader *ngIf=\"!isCommmonDataLoaded\"></app-loader>\n\t\n\t<div class=\"card table-card users-list float-left\" [ngClass]=\"isTabSelected()\" *ngIf=\"isCommmonDataLoaded\">\n\n\t\t<div class=\"card-header\">    \t\t\n    \t    <div class=\"float-left\">\n\t\t\t\t<h5>Folder<span class=\"badge lime-green\">{{totalUserItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Upload and download the documents</p>\t\t\t\n\t\t\t</div>\t\t\t\t\t\n\t\t\t\n\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t<li class=\"list-inline-item search d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search folder\" [(ngModel)]=\"findFolder\" >\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\t\t\t\t\t\n\t\t\t\t\t<a class=\"btn lime-green\" href=\"javascript:void(0)\" (click)=\"openUploadModal()\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Document</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\t\n\t\t  </div>\n\t\t  \n\t\t<div class=\"card-body p-0 users\">\n\n\t\t\t<ng-container>\t\t\t\t\n\t\t\t\t<ng-container *ngFor=\"let item of folderByCategory | simpleSearch:findFolder\">\n\t\t\t\t\t<li class=\"list-group-item\" (click)=\"showFolderDetails(item.lookupValueId)\">\n\t\t\t\t\t\t<div class=\"folderDesc\">\n\t\t\t\t\t\t\t<img src=\"assets/images/folder-icon.svg\"/>\t\n\t\t\t\t\t\t\t<div class=\"info\" >\n\t\t\t\t\t\t\t\t<span class=\"title\">{{item.lookupValueName}}</span><br>\n\t\t\t\t\t\t\t\t<span class=\"filecount mr-2 float-left\" *ngIf=\"!this.isUserPage\">Files: {{item.documentCount}}</span>       \n\t\t\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\n\t\t\t</ng-container>\t\t\t\n\t\t</div>\n\n\t</div>\n\n\t<app-document-common-download [selectedTab]=\"selectedTab\" *ngIf=\"!isMobileView()\"></app-document-common-download>\n</div>\n\n\n\n<ng-template #uploadTemplate let-alert>\n  <div class=\"upload-wrapper\">\n    <div class=\"close-icon\" mat-dialog-close>\n      <i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n    </div>\n    <div class=\"card mb-30\">\n      <div class=\"card-header\">\n        <div class=\"float-left\">\n            <h5>Upload Documents</h5>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <form #addMessageForm = \"ngForm\" name=\"addMessageForm\" (ngSubmit)=\"submitUploadAdmindoc(addMessageForm)\"  novalidate>\n          \n            <div class=\"input-box\">                \n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter the file name here...\" name=\"phoneNo\" [(ngModel)]=\"uploadDescription\" required>\n            </div>\n          \n          <div class=\"row\">\n            <div class=\"col-md-12\">\n\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t<label>Category:*</label>\n\n\t\t\t\t\t<select \n\t\t\t\t\t\tname=\"category\" \n\t\t\t\t\t\tid=\"category\" \n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t[(ngModel)]=\"uploadcategoryId\" required>\t\t\t\t\t\t\n\t\t\t\t\t\t<option *ngFor=\"let item of folderByCategory\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t</select>\n\n\t\t\t\t</div>\n            </div>\n            <div class=\"col-md-12\">\n\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t<label>Accessible to:*</label>\n\n\t\t\t\t\t<select \n\t\t\t\t\t\tname=\"accessible\" \n\t\t\t\t\t\tid=\"accessible\" \n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t[(ngModel)]=\"uploadroleID\" required>\n\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of accessibleList\" [value]=\"item.roleId\">{{ item.roleName }}</option>\n\t\t\t\t\t</select>\n\n\t\t\t\t</div>\n\t\t\t</div>\n          </div>\n\n          <div class=\"input-box\">    \n            <label>Who should be notified via email?</label>            \n            <input type=\"text\" class=\"form-control\" placeholder=\"Please enter the email ID here..\" name=\"phoneNo\" [(ngModel)]=\"userEmail\" required>\n        </div>        \n\t\t\t\t\t\t\n          <div class=\"input-box\">\n            <label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\">\n\t\t\t<input class=\"form-control\"  #uploader type=\"file\"  [(ngModel)]=\"uploadFileItem\" (change)=\"uploadFile($event.target.files)\"  >\n\t\t\t<i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Add Document</label>\n\n            <div class=\"file-desp\" *ngIf=\"isFileAdded\">\n              <div *ngFor=\"let item of listOfFiles; let i = index\">\n                <span class=\"name mr-3\">{{item.name}}</span>\n                <span class=\"size\">{{bytesToSize(item.size)}}</span>\n                <i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n              </div>\n\t\t\t</div>\n\t\t\t\n\t\t  </div>\n\t\t  \n\t\t  <div class=\"row submitBtn\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"!listOfFiles.length && addMessageForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n        \n\t\t</form>\n\t\t\n      </div>\n    </div>\n  </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/user-lists/user-lists.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/user-lists/user-lists.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDocumentsComponentsUserListsUserListsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"document-user-wrapper\">\n\n  <div class=\"card table-card\" *ngIf=\"isUserDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>User Document</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Upload, download and view the document</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\" >\n    \t\t\t</li>\n    \t\t\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>              \n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('firstName')\">Name <span [ngClass]=\"getFieldOrderBy('firstName')\"></span></th>\t\t\t\t      \n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No <span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('unitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('unitNo')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('document')\">Documents<span [ngClass]=\"getFieldOrderBy('document')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n            \n\t\t\t\t    <tr *ngFor=\"let unit of getAllDocumentData | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: unitData | sort : unitFieldType: unitOrder; let i = index\" >\n              \n\t\t\t\t      <td class=\"grey\">{{unit.firstName}}</td>\t\t\t\t     \n\t\t\t\t      <td class=\"grey\">{{unit.apartmentBlockID}}</td>\n              <td class=\"grey\">{{unit.apartmentBlockUnitNumber}}</td>\n              <td class=\"grey\">{{unit.documents}}</td>\n              <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/document/user/{{unit.apartmentBlockUnitNumber}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon view\" name=\"eye\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t\t    </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n      <app-pagination        \n        [totalItems]=\"totalUserDocument\"  \n        [ItemStartIndex]=\"ItemUserStartIndex\"\n        [ItemEndIndex] = \"ItemUserEndIndex\"\n        [itemLimit] = \"itemUserLimit\"\n        (outputParams) = \"getUserIndexParams($event)\">\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/document.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/document.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDocumentsDocumentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/ams/components/shared/document-common-download/document-common-download.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/components/shared/document-common-download/document-common-download.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsComponentsSharedDocumentCommonDownloadDocumentCommonDownloadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card.file-details {\n  width: 0 !important;\n  height: 0;\n  transition: all 0.15s ease;\n  transform: translate(120%, 0);\n}\n.card.file-details.show {\n  width: 40% !important;\n  height: auto;\n  transform: translate(0);\n  transition: all 0.15s ease;\n  margin: 0 0 0 2%;\n}\n.card.file-details.full {\n  width: 100% !important;\n  margin: 0;\n}\n.card.file-details .main {\n  overflow: auto;\n}\n.card.file-details .main > span {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 2rem;\n  padding: 0 0 6px 0;\n  color: #3f51b5;\n}\n.card.file-details .main p {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n}\n.card.file-details .main .icon {\n  width: 20px;\n}\n.card.file-details .main .downloadLists li {\n  width: 100%;\n  display: flex;\n  padding: 14px 20px;\n  border-bottom: 1px solid #eaeaea;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.6rem;\n  color: #007bff;\n}\n.card.file-details .main .downloadLists li:last-child {\n  border-bottom: none;\n}\n.card.file-details .main .downloadLists li .byname {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem;\n  color: #797979;\n}\n.card.file-details .main .downloadLists li .bydesc {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #797979;\n}\n.card.file-details .main .listContainer {\n  width: 100% !important;\n}\n.card.file-details .main .listContainer .icon {\n  cursor: pointer;\n}\n.card.file-details .main .card-header h5 {\n  padding: 8px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvY29tcG9uZW50cy9zaGFyZWQvZG9jdW1lbnQtY29tbW9uLWRvd25sb2FkL2RvY3VtZW50LWNvbW1vbi1kb3dubG9hZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Ftcy9jb21wb25lbnRzL3NoYXJlZC9kb2N1bWVudC1jb21tb24tZG93bmxvYWQvZG9jdW1lbnQtY29tbW9uLWRvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLG1CQUFBO0VBQ0EsU0FBQTtFQ29DRCwwQkRuQ0M7RUFDQSw2QkFBQTtBRUZGO0FGR0U7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQzhCRiwwQkQ3QkU7RUFDQSxnQkFBQTtBRUNIO0FGQ0U7RUFDQyxzQkc4SUc7RUg3SUgsU0FBQTtBRUNIO0FGQ0U7RUFDRSxjQUFBO0FFQ0o7QUZBSTtFSXdCRixxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUE2QkEsZUFBQTtFSnBERSxrQkFBQTtFQUNBLGNHZ0NLO0FENUJUO0FGRkk7RUlnQ0YsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGlCQUFBO0FGdkNGO0FGTEk7RUFDQyxXQUFBO0FFT0w7QUZMSTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFSUZGLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFtQ0EsaUJBQUE7RUpsQ0UsY0FBQTtBRVdKO0FGVkk7RUFDQyxtQkFBQTtBRVlMO0FGVkk7RUlhRiwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBYUEsaUJBQUE7RUozQkcsY0cyQ007QUQzQlg7QUZkSTtFSWRGLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFtQ0EsaUJBQUE7RUp0QkcsY0dzQ007QURsQlg7QUZqQkc7RUFDQyxzQkdvR0U7QURqRk47QUZsQkk7RUFDQyxlQUFBO0FFb0JMO0FGZkk7RUFDQyx3QkFBQTtBRWlCTCIsImZpbGUiOiJzcmMvYXBwL2Ftcy9jb21wb25lbnRzL3NoYXJlZC9kb2N1bWVudC1jb21tb24tZG93bmxvYWQvZG9jdW1lbnQtY29tbW9uLWRvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xyXG5cclxuLmNhcmQge1xyXG5cdCYuZmlsZS1kZXRhaWxzIHtcclxuXHRcdHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDEyMCUsIDApO1xyXG5cdFx0Ji5zaG93IHtcclxuXHRcdFx0d2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG5cdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcclxuXHRcdFx0bWFyZ2luOiAwIDAgMCAyJTtcclxuXHRcdH1cclxuXHRcdCYuZnVsbCB7XHJcblx0XHRcdHdpZHRoOiAkZnVsbDtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0fVxyXG5cdFx0Lm1haW4ge1x0XHRcdCBcclxuXHRcdFx0IG92ZXJmbG93OiBhdXRvO1xyXG5cdFx0XHQgPiBzcGFuIHtcclxuXHRcdFx0XHRAaW5jbHVkZSBoZWFkLW1lZGl1bTtcclxuXHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bSk7XHJcblx0XHRcdFx0cGFkZGluZzogMCAwIDZweCAwO1xyXG5cdFx0XHRcdGNvbG9yOiAkbS1ibHVlO1xyXG5cdFx0XHQgfVxyXG5cdFx0XHQgcCB7XHJcblx0XHRcdCBcdEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcclxuXHRcdFx0IFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XHJcbiAgICAgICAgXHRcdFxyXG5cdFx0XHQgfVxyXG5cdFx0XHQgLmljb257XHJcblx0XHRcdFx0IHdpZHRoOjIwcHhcclxuXHRcdFx0IH1cclxuXHRcdFx0IC5kb3dubG9hZExpc3RzIGxpIHtcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHRcdFx0XHRcclxuXHRcdFx0XHRwYWRkaW5nOiAxNHB4IDIwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgJGdyZXktNDUwO1xyXG5cdFx0XHRcdEBpbmNsdWRlIGhlYWQtcmVndWxhcjtcclxuXHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XHJcblx0XHRcdFx0Y29sb3I6ICMwMDdiZmY7XHJcblx0XHRcdFx0JjpsYXN0LWNoaWxke1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTpub25lXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5ieW5hbWV7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSBkZXNwLXJlZ3VsYXI7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXRpbnkpO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICRncmV5LTc1MDtcdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5ieWRlc2N7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSBoZWFkLXJlZ3VsYXI7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcclxuXHRcdFx0XHRcdGNvbG9yOiAkZ3JleS03NTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC5saXN0Q29udGFpbmVye1x0XHRcdFx0XHJcblx0XHRcdFx0d2lkdGg6ICRmdWxsO1xyXG5cdFx0XHRcdC5pY29ue1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHQuY2FyZC1oZWFkZXJ7XHJcblx0XHRcdFx0aDV7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cGFkZGluZzogOHB4IDBweCAwcHggMHB4XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIi5jYXJkLmZpbGUtZGV0YWlscyB7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEyMCUsIDApO1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzLnNob3cge1xuICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICBtYXJnaW46IDAgMCAwIDIlO1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzLmZ1bGwge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4ge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiA+IHNwYW4ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAwIDAgNnB4IDA7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluIHAge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluIC5pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmRvd25sb2FkTGlzdHMgbGkge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmRvd25sb2FkTGlzdHMgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmRvd25sb2FkTGlzdHMgbGkgLmJ5bmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjNzk3OTc5O1xufVxuLmNhcmQuZmlsZS1kZXRhaWxzIC5tYWluIC5kb3dubG9hZExpc3RzIGxpIC5ieWRlc2Mge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzc5Nzk3OTtcbn1cbi5jYXJkLmZpbGUtZGV0YWlscyAubWFpbiAubGlzdENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmxpc3RDb250YWluZXIgLmljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZC5maWxlLWRldGFpbHMgLm1haW4gLmNhcmQtaGVhZGVyIGg1IHtcbiAgcGFkZGluZzogOHB4IDBweCAwcHggMHB4O1xufSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/components/shared/document-common-download/document-common-download.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/components/shared/document-common-download/document-common-download.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: DocumentCommonDownloadComponent */

  /***/
  function srcAppAmsComponentsSharedDocumentCommonDownloadDocumentCommonDownloadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentCommonDownloadComponent", function () {
      return DocumentCommonDownloadComponent;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _api_services_document_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/document.service */
    "./src/app/api/services/document.service.ts");
    /* harmony import */


    var _api_services_file_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/services/file-details.service */
    "./src/app/api/services/file-details.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var DocumentCommonDownloadComponent =
    /*#__PURE__*/
    function () {
      function DocumentCommonDownloadComponent(router, route, lookupService, documentService, fileDetailsService, cookieService, sanitizer) {
        _classCallCheck(this, DocumentCommonDownloadComponent);

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

      _createClass(DocumentCommonDownloadComponent, [{
        key: "isTabSelected",
        value: function isTabSelected() {
          return this.selectedTab != -1 ? 'show' : '';
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 991;
        }
      }, {
        key: "isNotSlide",
        value: function isNotSlide() {
          return this.isSeperatePage ? 'full' : '';
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(file) {
          var obj = {
            "savefileNameWithPath": file.userDocumentName,
            "fileNameOnBlob": file.filePath
          };
          this.fileDetailsService.DownloadAsync(obj).subscribe(function (res) {}, function (error) {});
        }
      }, {
        key: "getUserDocumentData",
        value: function getUserDocumentData(unitNo) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.getalldocument, function (item) {
            if (item.apartmentBlockUnitNumber === unitNo) {
              return item;
            }
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0];
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.route.params['value'].id != undefined && this.isMobileView()) {
            this.isSeperatePage = true;
          }

          if (this.route.params['value'].id != undefined) {
            this.userPage = true;
            this.userUnitNo = this.route.params['value'].id;
          }

          var unitInfo = this.userUnitNo; //if(this.userPage) {     

          this.documentService.GetAllDocCountByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this.getalldocument = res;

            if (_this.getUserDocumentData(unitInfo).apartmentBlockUnitID != undefined) {
              _this.documentService.GetAllDocByApartmentBlockUnitId(_this.getUserDocumentData(_this.userUnitNo).apartmentBlockUnitID).subscribe(function (res) {
                _this.listofFiles = res;
                _this.isDocumentDataLoaded = true;
                _this.isNoDownloads = _this.listofFiles.length;
              }, function (error) {});
            } else {
              var documentByCategory = {
                "apartmentId": parseInt(_this.cookieService.get('apartmentId')),
                "docCategoryId": _this.route.params['value'].id
              };
              _this.isDocumentDataLoaded = false;

              _this.documentService.getUserDocumentsByUserDocumentCategoryId(documentByCategory).subscribe(function (res) {
                _this.listofFiles = res;
                _this.isDocumentDataLoaded = true;
              }, function (error) {});
            }
          }, function (error) {}); //}
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this2 = this;

          this.isDocumentDataLoaded = false;

          if (this.userPage) {
            this.documentService.GetAllDocByApartmentBlockUnitId(this.getUserDocumentData(this.userUnitNo).apartmentBlockUnitID).subscribe(function (res) {
              _this2.isDocumentDataLoaded = true;
              _this2.listofFiles = res;
              _this2.isNoDownloads = _this2.listofFiles.length;
            }, function (error) {});
          } else {
            var documentByCategory = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "docCategoryId": this.selectedTab
            };
            this.documentService.getUserDocumentsByUserDocumentCategoryId(documentByCategory).subscribe(function (res) {
              _this2.isDocumentDataLoaded = true;
              _this2.listofFiles = res; //this.isNoDownloads = true

              _this2.isNoDownloads = _this2.listofFiles.length;
            }, function (error) {});
          }
        }
      }]);

      return DocumentCommonDownloadComponent;
    }();

    DocumentCommonDownloadComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _api_services_document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"]
      }, {
        type: _api_services_file_details_service__WEBPACK_IMPORTED_MODULE_6__["FileDetailsService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], DocumentCommonDownloadComponent.prototype, "selectedTab", void 0);
    DocumentCommonDownloadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-document-common-download',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./document-common-download.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/components/shared/document-common-download/document-common-download.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./document-common-download.component.scss */
      "./src/app/ams/components/shared/document-common-download/document-common-download.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _api_services_document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"], _api_services_file_details_service__WEBPACK_IMPORTED_MODULE_6__["FileDetailsService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])], DocumentCommonDownloadComponent);
    /***/
  },

  /***/
  "./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.scss":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.scss ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDocumentsComponentsDocumentSetupDocumentSetupCategoryDocumentSetupCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9kb2N1bWVudC1zZXR1cC9kb2N1bWVudC1zZXR1cC1jYXRlZ29yeS9kb2N1bWVudC1zZXR1cC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: DocumentSetupCategoryComponent */

  /***/
  function srcAppAmsDocumentsComponentsDocumentSetupDocumentSetupCategoryDocumentSetupCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentSetupCategoryComponent", function () {
      return DocumentSetupCategoryComponent;
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


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var DocumentSetupCategoryComponent =
    /*#__PURE__*/
    function () {
      function DocumentSetupCategoryComponent(lookupService, cookieService) {
        _classCallCheck(this, DocumentSetupCategoryComponent);

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

      _createClass(DocumentSetupCategoryComponent, [{
        key: "addNewDocumentCategory",
        value: function addNewDocumentCategory() {
          this.isDocumentCategoryNew = true;
          this.isDocumentCategoryUpdate = false;
        }
      }, {
        key: "updateDocumentCategory",
        value: function updateDocumentCategory(item) {
          this.isDocumentCategoryUpdate = true;
          this.isDocumentCategoryNew = false;
          this.documentCategory = item.lookupValueName;
          this.documentCategoryUpdateId = item.lookupValueId;
        }
      }, {
        key: "removeCategoryBox",
        value: function removeCategoryBox() {
          this.isDocumentCategoryNew = false;
          this.isDocumentCategoryUpdate = false;
          this.isCategoryError = false;
          this.isCategoryError = false;
        }
      }, {
        key: "submitdocumentCategoryForm",
        value: function submitdocumentCategoryForm(form) {
          var _this3 = this;

          this.isDocumentCategorySubmitted = false;

          if (this.isDocumentCategoryNew) {
            var details = {
              "lookupTypeId": 62,
              "lookupValueName": this.documentCategory,
              "description": this.documentCategory,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": "2019-11-20T16:51:24.105Z",
              "updatedBy": 0,
              "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            this.lookupService.addLookupValue(details).subscribe(function (res) {
              if (res.message) {
                _this3.lookupService.getLookupValueByLookupTypeId(62).subscribe(function (res) {
                  _this3.isDocumentCategorySubmitted = true;
                  _this3.isCategorySuccess = true;
                  _this3.alertTicketMessage = "Category Added Successfully!";
                  _this3.documentCategoryData = res.filter(function (item) {
                    return item.isActive;
                  });
                });
              } else {
                _this3.isDocumentCategorySubmitted = true;
                _this3.isCategoryError = true;
                _this3.alertTicketMessage = res.errorMessage;
              }
            });
          } else {
            var _details = {
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
            this.lookupService.updateLookupValue(_details).subscribe(function (res) {
              if (res.message) {
                _this3.lookupService.getLookupValueByLookupTypeId(62).subscribe(function (res) {
                  _this3.isDocumentCategorySubmitted = true;
                  _this3.isCategorySuccess = true;
                  _this3.alertTicketMessage = "Category Updated Successfully!";
                  _this3.documentCategoryData = res.filter(function (item) {
                    return item.isActive;
                  });
                });
              } else {
                _this3.isDocumentCategorySubmitted = true;
                _this3.isCategoryError = true;
                _this3.alertTicketMessage = res.errorMessage;
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.lookupService.getLookupValueByLookupTypeId(62).subscribe(function (res) {
            _this4.isDocumentCategoryLoaded = true;
            _this4.documentCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          });
        }
      }]);

      return DocumentSetupCategoryComponent;
    }();

    DocumentSetupCategoryComponent.ctorParameters = function () {
      return [{
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    DocumentSetupCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-document-setup-category',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./document-setup-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./document-setup-category.component.scss */
      "./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])], DocumentSetupCategoryComponent);
    /***/
  },

  /***/
  "./src/app/ams/documents/components/document-setup/document-setup.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/documents/components/document-setup/document-setup.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDocumentsComponentsDocumentSetupDocumentSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".icon-tabs {\n  display: flex;\n  justify-content: center;\n}\n.icon-tabs li {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n  padding: 0;\n  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  border-radius: 6px !important;\n}\n.icon-tabs li a {\n  color: #585858;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  padding: 10px 25px;\n  position: relative;\n  background-color: #ffffff;\n}\n.icon-tabs li a.active {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvZG9jdW1lbnQtc2V0dXAvZG9jdW1lbnQtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9kb2N1bWVudC1zZXR1cC9kb2N1bWVudC1zZXR1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDSEo7QURJSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFRVlOLDZDRlhNO0VFWU4sa0RGWk07RUVhTixxREZiTTtFRUxQLDZCQUFBO0FEUUQ7QURBVTtFQUNJLGNHK0VIO0VDaERULHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQTZCQSxpQkFBQTtFSjNEWSxrQkFBQTtFQUNBLGtCR2ZUO0VIZ0JTLHlCRytGTjtBRjNGUjtBREhjO0VBQ0UseUJHb0NQO0VIbkNPLGNHNEZSO0FGdkZSIiwiZmlsZSI6InNyYy9hcHAvYW1zL2RvY3VtZW50cy9jb21wb25lbnRzL2RvY3VtZW50LXNldHVwL2RvY3VtZW50LXNldHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcclxuLmljb24tdGFic3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGxpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMCAycHggM3B4IC0xcHggcmdiYSgkYmxhY2ssIDAuMSkpO1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNnB4KTtcclxuICAgICAgICBcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkZ3JleS03MDA7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgaGVhZC1tZWRpdW07XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAkcmVsO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbS1ibHVlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxuXHJcbn0iLCIuaWNvbi10YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaWNvbi10YWJzIGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xufVxuLmljb24tdGFicyBsaSBhIHtcbiAgY29sb3I6ICM1ODU4NTg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uaWNvbi10YWJzIGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6ICNmZmZmZmY7XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/documents/components/document-setup/document-setup.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/ams/documents/components/document-setup/document-setup.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: DocumentSetupComponent */

  /***/
  function srcAppAmsDocumentsComponentsDocumentSetupDocumentSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentSetupComponent", function () {
      return DocumentSetupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DocumentSetupComponent =
    /*#__PURE__*/
    function () {
      function DocumentSetupComponent() {
        _classCallCheck(this, DocumentSetupComponent);
      }

      _createClass(DocumentSetupComponent, [{
        key: "showTab",
        value: function showTab(type) {
          this.selectedTab = type;
        }
      }, {
        key: "isActive",
        value: function isActive(type) {
          return this.selectedTab == type ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedTab = 'category';
        }
      }]);

      return DocumentSetupComponent;
    }();

    DocumentSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-document-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./document-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/document-setup/document-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./document-setup.component.scss */
      "./src/app/ams/documents/components/document-setup/document-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DocumentSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/documents/components/documents-reports/documents-reports.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/documents/components/documents-reports/documents-reports.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDocumentsComponentsDocumentsReportsDocumentsReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9kb2N1bWVudHMtcmVwb3J0cy9kb2N1bWVudHMtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/documents/components/documents-reports/documents-reports.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/documents/components/documents-reports/documents-reports.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: DocumentsReportsComponent */

  /***/
  function srcAppAmsDocumentsComponentsDocumentsReportsDocumentsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentsReportsComponent", function () {
      return DocumentsReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DocumentsReportsComponent =
    /*#__PURE__*/
    function () {
      function DocumentsReportsComponent() {
        _classCallCheck(this, DocumentsReportsComponent);
      }

      _createClass(DocumentsReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DocumentsReportsComponent;
    }();

    DocumentsReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-documents-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./documents-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/documents-reports/documents-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./documents-reports.component.scss */
      "./src/app/ams/documents/components/documents-reports/documents-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DocumentsReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/documents/components/folder-lists/folder-lists.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/ams/documents/components/folder-lists/folder-lists.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDocumentsComponentsFolderListsFolderListsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".document-common-wrapper .card.users-list {\n  width: 100%;\n  transition: all 0.15s ease;\n}\n@media (min-width: 991px) {\n  .document-common-wrapper .card.users-list.show {\n    width: 58%;\n    transition: all 0.15s ease;\n  }\n}\n.document-common-wrapper .card .card-header {\n  border-bottom: none !important;\n}\n.document-common-wrapper .card .card-header .lime-green {\n  margin-top: -5px;\n}\n.document-common-wrapper .card .card-body.users > li {\n  border: none;\n  border-top: 1px solid #eaeaea;\n  padding: 14px 20px;\n  border-radius: 0 !important;\n  cursor: pointer;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc {\n  display: flex;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info {\n  margin-left: 10px;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info .title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  padding: 0 0 4px 0;\n  color: #3f51b5;\n}\n.document-common-wrapper .card .card-body.users > li .folderDesc .info .filecount {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1rem;\n  color: #797979;\n}\n.document-common-wrapper .card .card-body.users > li:hover {\n  background-color: #f9f9f9;\n  transition: all 0.15s ease;\n}\n.document-common-wrapper .card .card-body.users > li:hover h5 {\n  color: #3f51b5;\n}\n.upload-wrapper .card-header {\n  background-color: #5cd694;\n}\n.upload-wrapper .card-header h5, .upload-wrapper .card-header .icon.del {\n  color: #ffffff !important;\n}\n.upload-wrapper .submitBtn li, .upload-wrapper .submitBtn button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvZm9sZGVyLWxpc3RzL2ZvbGRlci1saXN0cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9mb2xkZXItbGlzdHMvZm9sZGVyLWxpc3RzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNDLFdBQUE7RUNvQ0YsMEJEbkNFO0FFSEg7QUZLSTtFQUREO0lBRUUsVUFBQTtJQ2dDSiwwQkQvQkk7RUVBSDtBQUNGO0FGR0U7RUFDVSw4QkFBQTtBRURaO0FGRVk7RUFDSSxnQkFBQTtBRUFoQjtBRk1JO0VBQ0MsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUNyQkosMkJBQUE7RUR1Qm1CLGVBQUE7QUVGcEI7QUZHb0I7RUFDSSxhQUFBO0FFRHhCO0FGR3dCO0VBQ0ksaUJBQUE7QUVENUI7QUZFNEI7RUdXMUIscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBNkJBLGlCQUFBO0VIdkM4QixrQkFBQTtFQUNBLGNJbUJ2QjtBRmpCVDtBRkE0QjtFR21CMUIsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGVBQUE7RUhqQzhCLGNJaURyQjtBRjNDWDtBRkRRO0VBQ0MseUJJNERFO0VIcEVWLDBCRFNRO0FFS1Q7QUZKUztFQUNDLGNJS0Q7QUZDVDtBRk1JO0VBQ0kseUJJakJLO0FGY2I7QUZJUTtFQUNJLHlCQUFBO0FFRlo7QUZNUTtFQUNJLFdBQUE7QUVKWiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy9mb2xkZXItbGlzdHMvZm9sZGVyLWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xyXG5cclxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIHtcclxuXHQuY2FyZCB7XHJcblx0XHQmLnVzZXJzLWxpc3R7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcclxuXHRcdFx0Ji5zaG93IHtcclxuXHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA1OCU7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubGltZS1ncmVlbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi01cHg7XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWJvZHkge1xyXG5cdFx0XHQmLnVzZXJzIHtcclxuXHRcdFx0XHQ+IGxpIHtcclxuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JleS00NTA7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxNHB4IDIwcHg7XHJcblx0XHRcdFx0XHRAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAuZm9sZGVyRGVzYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBoZWFkLW1lZGl1bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDRweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbS1ibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbGVjb3VudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBkZXNwLXJlZ3VsYXI7XHJcblx0XHRcdFx0XHRcdCAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC10aW5pZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleS03NTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0ICAgIFxyXG5cdFx0XHRcdCAgICAmOmhvdmVyIHtcclxuXHRcdFx0XHQgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS0xNTA7XHJcblx0XHRcdFx0ICAgIFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XHJcblx0XHRcdFx0ICAgIFx0aDUge1xyXG5cdFx0XHRcdCAgICBcdFx0Y29sb3I6ICRtLWJsdWU7XHJcblx0XHRcdFx0ICAgIFx0fVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICAgIFxyXG5cdFx0XHJcblxyXG5cdH1cclxufVxyXG4udXBsb2FkLXdyYXBwZXJ7XHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokbGltZS1ncmVlbjtcclxuICAgICAgICBoNSwgLmljb24uZGVsIHtcclxuICAgICAgICAgICAgY29sb3I6JHdoaXRlICFpbXBvcnRhbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3VibWl0QnRue1xyXG4gICAgICAgIGxpLCBidXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBkZXNlbGVjdCAoKSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkLnVzZXJzLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkLnVzZXJzLWxpc3Quc2hvdyB7XG4gICAgd2lkdGg6IDU4JTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIH1cbn1cbi5kb2N1bWVudC1jb21tb24td3JhcHBlciAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtaGVhZGVyIC5saW1lLWdyZWVuIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbi5kb2N1bWVudC1jb21tb24td3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZG9jdW1lbnQtY29tbW9uLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keS51c2VycyA+IGxpIC5mb2xkZXJEZXNjIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kb2N1bWVudC1jb21tb24td3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkgLmZvbGRlckRlc2MgLmluZm8ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5kb2N1bWVudC1jb21tb24td3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5LnVzZXJzID4gbGkgLmZvbGRlckRlc2MgLmluZm8gLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaSAuZm9sZGVyRGVzYyAuaW5mbyAuZmlsZWNvdW50IHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNzk3OTc5O1xufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuLmRvY3VtZW50LWNvbW1vbi13cmFwcGVyIC5jYXJkIC5jYXJkLWJvZHkudXNlcnMgPiBsaTpob3ZlciBoNSB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuXG4udXBsb2FkLXdyYXBwZXIgLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjZDY5NDtcbn1cbi51cGxvYWQtd3JhcHBlciAuY2FyZC1oZWFkZXIgaDUsIC51cGxvYWQtd3JhcHBlciAuY2FyZC1oZWFkZXIgLmljb24uZGVsIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbi51cGxvYWQtd3JhcHBlciAuc3VibWl0QnRuIGxpLCAudXBsb2FkLXdyYXBwZXIgLnN1Ym1pdEJ0biBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/documents/components/folder-lists/folder-lists.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/ams/documents/components/folder-lists/folder-lists.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: FolderListsComponent */

  /***/
  function srcAppAmsDocumentsComponentsFolderListsFolderListsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderListsComponent", function () {
      return FolderListsComponent;
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


    var _api_services_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/document.service */
    "./src/app/api/services/document.service.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");

    var FolderListsComponent =
    /*#__PURE__*/
    function () {
      function FolderListsComponent(router, route, sharedService, lookupService, UserService, documentService, cookieService, dialog) {
        _classCallCheck(this, FolderListsComponent);

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

      _createClass(FolderListsComponent, [{
        key: "uploadFile",
        value: function uploadFile(files) {
          this.isFileAdded = true;
          this.fileToUpload = files.item(0);
          var selectedFile = files[0]; //let formData = new FormData(); 
          //formData.append('file', this.fileToUpload, this.fileToUpload.name); 

          this.fileList.push(selectedFile);
          this.listOfFiles.push(this.fileToUpload);
        }
      }, {
        key: "bytesToSize",
        value: function bytesToSize(bytes) {
          if (bytes < 1024) return bytes + " Bytes";else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";else return (bytes / 1073741824).toFixed(3) + " GB";
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(index) {
          // Delete the item from fileNames list
          this.listOfFiles.splice(index, 1); // delete file from FileList

          this.fileList.splice(index, 1);
          this.selectedFile = null;

          if (this.fileList.length == 0 && this.listOfFiles.length == 0) {
            this.isFileAdded = false;
          }
        }
      }, {
        key: "openUploadModal",
        value: function openUploadModal() {
          this.confirmDialogRef = this.dialog.open(this.uploadTemplate, {
            panelClass: 'material',
            disableClose: true,
            data: alert
          });
          this.confirmDialogRef.afterClosed().subscribe(function (data) {});
        }
      }, {
        key: "submitUploadAdmindoc",
        value: function submitUploadAdmindoc() {
          var _this5 = this;

          var uploadDetails = {
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
          this.documentService.addUserDocument(uploadDetails).subscribe(function (res) {
            _this5.getCategoryData(_this5.uploadcategoryId);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getCategoryData",
        value: function getCategoryData(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.folderByCategory, function (item) {
            if (item.lookupValueId == id) {
              item.documentCount++;
            }
          });
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 991;
        }
      }, {
        key: "isTabSelected",
        value: function isTabSelected() {
          return this.selectedTab != -1 ? 'show' : '';
        }
      }, {
        key: "showFolderDetails",
        value: function showFolderDetails(id) {
          if (!this.isMobileView()) {
            if (this.selectedTab != id) this.selectedTab = id;else this.selectedTab = -1;
          } else {
            this.router.navigate(['ams/document-common-download/' + id]);
          }
        }
      }, {
        key: "setFileCount",
        value: function setFileCount() {
          var folderList = this.folderList;
          underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.folderByCategory, function (id) {
            id.documentCount = 0;
            var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](folderList, function (item) {
              if (id.lookupValueId == item.categoryId) {
                id.documentCount = item.documentCount;
              }
            });
          });
        }
      }, {
        key: "getUserDocumentData",
        value: function getUserDocumentData(unitNo) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.getalldocument, function (item) {
            if (item.apartmentBlockUnitNumber === unitNo) {
              return item;
            }
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0];
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          if (this.route.params['value'].id != undefined) {
            this.isUserPage = true;
            this.unitNo = this.route.params['value'].id;
          }

          var adminCategory = {
            "ApartmentId": parseInt(this.cookieService.get('apartmentId')),
            "IsPublic": true
          };
          this.UserService.getAllRoles(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this6.accessibleList = res;
          }, function (error) {});
          this.lookupService.getLookupValueByLookupTypeId(62).subscribe(function (res) {
            _this6.folderByCategory = res;

            _this6.documentService.GetAllDocCountByCategory(adminCategory).subscribe(function (res) {
              _this6.folderList = res;

              _this6.setFileCount();

              if (_this6.isUserPage) {
                _this6.documentService.GetAllDocCountByApartmentId(parseInt(_this6.cookieService.get('apartmentId'))).subscribe(function (res) {
                  _this6.isCommmonDataLoaded = true;
                  _this6.getalldocument = res;
                }, function (error) {});
              } else {
                _this6.isCommmonDataLoaded = true;
              }
            }, function (error) {});
          }, function (error) {});
        }
      }]);

      return FolderListsComponent;
    }();

    FolderListsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_9__["LookupService"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _api_services_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("uploadTemplate", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], FolderListsComponent.prototype, "uploadTemplate", void 0);
    FolderListsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-folder-lists',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./folder-lists.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/folder-lists/folder-lists.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./folder-lists.component.scss */
      "./src/app/ams/documents/components/folder-lists/folder-lists.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_9__["LookupService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _api_services_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])], FolderListsComponent);
    /***/
  },

  /***/
  "./src/app/ams/documents/components/user-lists/user-lists.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/ams/documents/components/user-lists/user-lists.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDocumentsComponentsUserListsUserListsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy91c2VyLWxpc3RzL3VzZXItbGlzdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/documents/components/user-lists/user-lists.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/ams/documents/components/user-lists/user-lists.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: UserListsComponent */

  /***/
  function srcAppAmsDocumentsComponentsUserListsUserListsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListsComponent", function () {
      return UserListsComponent;
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


    var _api_services_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/document.service */
    "./src/app/api/services/document.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var UserListsComponent =
    /*#__PURE__*/
    function () {
      function UserListsComponent(documentService, cookieService) {
        _classCallCheck(this, UserListsComponent);

        this.documentService = documentService;
        this.cookieService = cookieService;
        this.isUserDataLoaded = false;
        this.itemUserLimit = 5;
        this.ItemUserStartIndex = 0;
        this.isMobile = false;
        this.unitFieldType = "firstName";
        this.unitOrder = true;
      }

      _createClass(UserListsComponent, [{
        key: "getUserIndexParams",
        value: function getUserIndexParams(event) {
          this.ItemUserStartIndex = event.ItemStartIndex;
          this.ItemUserEndIndex = event.ItemEndIndex;
          this.itemUserLimit = event.itemLimit;
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
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
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (window.innerWidth <= 991) this.isMobile = true;else this.isMobile = false;
          this.documentService.GetAllDocCountByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this7.isUserDataLoaded = true;
            _this7.getAllDocumentData = res;
            _this7.totalUserDocument = _this7.getAllDocumentData.length;

            if (_this7.totalUserDocument > _this7.itemUserLimit) {
              _this7.ItemUserEndIndex = _this7.itemUserLimit;
            } else {
              _this7.ItemUserEndIndex = _this7.totalUserDocument;
            }
          }, function (error) {});
        }
      }]);

      return UserListsComponent;
    }();

    UserListsComponent.ctorParameters = function () {
      return [{
        type: _api_services_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    UserListsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-lists',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-lists.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/components/user-lists/user-lists.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-lists.component.scss */
      "./src/app/ams/documents/components/user-lists/user-lists.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])], UserListsComponent);
    /***/
  },

  /***/
  "./src/app/ams/documents/document.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/ams/documents/document.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDocumentsDocumentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kb2N1bWVudHMvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/documents/document.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ams/documents/document.component.ts ***!
    \*****************************************************/

  /*! exports provided: DocumentComponent */

  /***/
  function srcAppAmsDocumentsDocumentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentComponent", function () {
      return DocumentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DocumentComponent =
    /*#__PURE__*/
    function () {
      function DocumentComponent() {
        _classCallCheck(this, DocumentComponent);
      }

      _createClass(DocumentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DocumentComponent;
    }();

    DocumentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-document',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./document.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/documents/document.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./document.component.scss */
      "./src/app/ams/documents/document.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DocumentComponent);
    /***/
  },

  /***/
  "./src/app/ams/documents/documents-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ams/documents/documents-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: DocumentsRoutingModule */

  /***/
  function srcAppAmsDocumentsDocumentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentsRoutingModule", function () {
      return DocumentsRoutingModule;
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


    var _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/document-setup/document-setup.component */
    "./src/app/ams/documents/components/document-setup/document-setup.component.ts");
    /* harmony import */


    var _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/folder-lists/folder-lists.component */
    "./src/app/ams/documents/components/folder-lists/folder-lists.component.ts");
    /* harmony import */


    var _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/user-lists/user-lists.component */
    "./src/app/ams/documents/components/user-lists/user-lists.component.ts");
    /* harmony import */


    var _components_documents_reports_documents_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/documents-reports/documents-reports.component */
    "./src/app/ams/documents/components/documents-reports/documents-reports.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, {
      path: 'settings',
      component: _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_3__["DocumentSetupComponent"]
    }, {
      path: 'common',
      component: _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_4__["FolderListsComponent"]
    }, {
      path: 'user',
      component: _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_5__["UserListsComponent"]
    }, {
      path: 'user/:id',
      component: _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_4__["FolderListsComponent"]
    }, {
      path: 'reports',
      component: _components_documents_reports_documents_reports_component__WEBPACK_IMPORTED_MODULE_6__["DocumentsReportsComponent"]
    }, {
      path: '**',
      redirectTo: 'settings',
      pathMatch: 'full'
    }];

    var DocumentsRoutingModule = function DocumentsRoutingModule() {
      _classCallCheck(this, DocumentsRoutingModule);
    };

    DocumentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DocumentsRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/documents/documents.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/ams/documents/documents.module.ts ***!
    \***************************************************/

  /*! exports provided: DocumentsModule */

  /***/
  function srcAppAmsDocumentsDocumentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentsModule", function () {
      return DocumentsModule;
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


    var _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./documents-routing.module */
    "./src/app/ams/documents/documents-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _document_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./document.component */
    "./src/app/ams/documents/document.component.ts");
    /* harmony import */


    var _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/document-setup/document-setup.component */
    "./src/app/ams/documents/components/document-setup/document-setup.component.ts");
    /* harmony import */


    var _components_document_setup_document_setup_category_document_setup_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/document-setup/document-setup-category/document-setup-category.component */
    "./src/app/ams/documents/components/document-setup/document-setup-category/document-setup-category.component.ts");
    /* harmony import */


    var _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/folder-lists/folder-lists.component */
    "./src/app/ams/documents/components/folder-lists/folder-lists.component.ts");
    /* harmony import */


    var _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/user-lists/user-lists.component */
    "./src/app/ams/documents/components/user-lists/user-lists.component.ts");
    /* harmony import */


    var _components_shared_document_common_download_document_common_download_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/shared/document-common-download/document-common-download.component */
    "./src/app/ams/components/shared/document-common-download/document-common-download.component.ts");
    /* harmony import */


    var _components_documents_reports_documents_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/documents-reports/documents-reports.component */
    "./src/app/ams/documents/components/documents-reports/documents-reports.component.ts");

    var DocumentsModule = function DocumentsModule() {
      _classCallCheck(this, DocumentsModule);
    };

    DocumentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_document_component__WEBPACK_IMPORTED_MODULE_5__["DocumentComponent"], _components_document_setup_document_setup_component__WEBPACK_IMPORTED_MODULE_6__["DocumentSetupComponent"], _components_document_setup_document_setup_category_document_setup_category_component__WEBPACK_IMPORTED_MODULE_7__["DocumentSetupCategoryComponent"], _components_folder_lists_folder_lists_component__WEBPACK_IMPORTED_MODULE_8__["FolderListsComponent"], _components_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_9__["UserListsComponent"], _components_shared_document_common_download_document_common_download_component__WEBPACK_IMPORTED_MODULE_10__["DocumentCommonDownloadComponent"], _components_documents_reports_documents_reports_component__WEBPACK_IMPORTED_MODULE_11__["DocumentsReportsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentsRoutingModule"]],
      bootstrap: [_document_component__WEBPACK_IMPORTED_MODULE_5__["DocumentComponent"]]
    })], DocumentsModule);
    /***/
  }
}]);
//# sourceMappingURL=documents-documents-module-es5.js.map