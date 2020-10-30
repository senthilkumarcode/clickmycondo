(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-documents-my-document-user-list-my-document-user-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/document-config/document-create/document-create.component.html":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/document-config/document-create/document-create.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsDocumentsDocumentConfigDocumentCreateDocumentCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"document-create-modal-wrapper\">\n    <div class=\"bg-card shadow mb-0\">\n        <div class=\"d-flex mb-4\">\n            <h4> Upload Documents</h4>\n            <mat-icon class=\"ml-auto\" [svgIcon]=\"'close'\" mat-dialog-close></mat-icon>\n        </div>\n        <form>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"input-box\">\n                        <label>Document Name</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"documentName\" [(ngModel)]=\"document.userDocumentName\">\n                    </div>\n                </div>\n                <div class=\"col-sm-12\" *ngIf=\"data.from == 'private'\">\n                    <condo-select \n                        labelText=\"Document Category\"\n                        fieldPlaceholder=\"Document Category\"\n                        [fieldList]=\"documentCategoryList | orderBy : 'lookupValueName'\"\n                        fieldValue=\"lookupValueName\"\n                        [fieldModel]=\"document.userDocumentCategoryId\"\n                        fieldId=\"lookupValueId\"\n                        (fieldParams)=\"setDocCategory($event)\" \n                    ></condo-select>  \n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"input-box\">\n                        <label>Description</label>\n                        <textarea placeholder=\"Enter Description\" name=\"description\" [(ngModel)]=\"document.description\"></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <app-upload [fileIds]=\"document.fileDetailsIds\" [isEdit]=\"false\" (outputParams)=\"getFileIds($event)\"\n                        [multiple]=\"true\"\n                    ></app-upload>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <button  *ngIf=\"data.from == 'private'\" class=\"float-right mt-4\" mat-flat-button  [color]=\"'primary'\" (click)=\"createPrivateDocument()\">Submit</button>\n                    <button  *ngIf=\"data.from == 'public'\" class=\"float-right mt-4\" mat-flat-button  [color]=\"'primary'\" (click)=\"createPublicDocument()\">Submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.component.html":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsDocumentsMyDocumentUserListMyDocumentUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"my-documents-wrapper\">\n    <div class=\"main\">\n        <!-- Loader -->\n        <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n        <!-- My Documents Header -->\n        <div class=\"d-flex mb-4\">\n            <div>\n                <h4>My Documents</h4>\n                <p class=\"text-secondary\">{{totalItems}} Items</p>\n            </div>\n            <div class=\"ml-auto d-none d-md-block mr-3\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"documentSearch\">\n            </div>\n            <div>\n                <button mat-flat-button [color]=\"'primary'\" (click)=\"openUploadModal()\">Upload Documents</button>\n            </div>\n        </div>\n        <!-- Documents List -->\n        <div *ngIf=\"isDataLoaded\">\n            <div class=\"bg-card shadow\" *ngFor=\"let data of documentViewList\">\n                <form>\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"input-box\">\n                                <label>Document Name</label>\n                                <p>{{data.userDocumentName}}</p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"input-box\">\n                                <label>Document Category</label>\n                                <p>{{data.userDocumentCatName}}</p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"input-box\">\n                                <label>Inserted On</label>\n                                <p>{{getDateFormat(data.insertedOn)}}</p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"input-box\">\n                                <label>Description</label>\n                                <p>{{data.userDocDesc}}</p>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"input-box\">\n                                <label>Document</label>\n                                <p #url>\n                                    <a *ngIf=\"data.fileUrl\" [href]=\"data.fileUrl\" target=\"_blank\">{{data.fileName}}</a>\n                                    <a href=\"javascript:void(0)\" *ngIf=\"!data.fileUrl\" (click)=\"downloadFile(data,url)\">{{data.fileName}}</a>\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/document-config/document-create/document-create.component.scss":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/document-config/document-create/document-create.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsDocumentsDocumentConfigDocumentCreateDocumentCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2RvY3VtZW50cy9kb2N1bWVudC1jb25maWcvZG9jdW1lbnQtY3JlYXRlL2RvY3VtZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/document-config/document-create/document-create.component.ts":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/document-config/document-create/document-create.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: DocumentCreateComponent */

    /***/
    function srcAppModulesAmsDocumentsDocumentConfigDocumentCreateDocumentCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentCreateComponent", function () {
        return DocumentCreateComponent;
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


      var src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Document */
      "./src/app/api/controllers/Document.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment-timezone */
      "./node_modules/moment-timezone/index.js");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_7__);

      var DocumentCreateComponent = /*#__PURE__*/function () {
        function DocumentCreateComponent(documentService, sharedService, sessionService, lookupService, dialogRef, data) {
          _classCallCheck(this, DocumentCreateComponent);

          this.documentService = documentService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.lookupService = lookupService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.document = {};
          this.documentCategoryList = [];
        }

        _createClass(DocumentCreateComponent, [{
          key: "setDocCategory",
          value: function setDocCategory(event) {
            this.document.userDocumentCategoryId = event[0].lookupValueId;
          }
        }, {
          key: "getFileIds",
          value: function getFileIds(event) {
            this.document.fileDetailsIds = event.join();
          }
        }, {
          key: "createPrivateDocument",
          value: function createPrivateDocument() {
            var _this = this;

            var uploadDetails = {
              "ApartmentId": this.sessionService.apartmentId,
              "ApartmentBlockUnitId": this.data.apartmentBlockUnitId,
              "UserDocumentCategoryId": this.document.userDocumentCategoryId,
              "UserDocumentTypeId": 1,
              "UserDocumentAccessibleToId": 1,
              "UserDocumentName": this.document.userDocumentName,
              "Description": this.document.description,
              "IsActive": true,
              "InsertedBy": this.sessionService.userId,
              "InsertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_7___default()().toISOString(),
              "UpdatedBy": null,
              "UpdatedOn": null,
              "FileDetailsId": null,
              "IsPublic": false,
              "files": null,
              "FileDetailsIds": this.document.fileDetailsIds
            };
            this.documentService.addUserDocument(uploadDetails).subscribe(function (res) {
              if (res.message) {
                _this.dialogRef.close(true);

                _this.sharedService.openSnackBar('Document Created Successfully', 'success');
              } else {
                _this.sharedService.openSnackBar(res.responseData.value.errorMessage, 'error');
              }
            }, function (error) {
              _this.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "createPublicDocument",
          value: function createPublicDocument() {
            var _this2 = this;

            var params = {
              document: {
                "apartmentId": this.sessionService.apartmentId,
                "documentCategoryId": this.data.userDocumentCategoryId,
                "documentTypeId": 1,
                "documentAccessibleToId": 1,
                "documentName": this.document.userDocumentName,
                "description": this.document.description,
                "fileDetailsId": this.document.fileDetailsId,
                "uploadedBy": this.sessionService.userId,
                "uploadedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_7___default()().toISOString(),
                "isActive": true,
                "insertedBy": this.sessionService.userId,
                "insertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_7___default()().toISOString(),
                "updatedBy": null,
                "updatedOn": null,
                "files": null
              }
            };
            this.documentService.addDocument(params).subscribe(function (res) {
              if (res.message) {
                _this2.dialogRef.close(true);

                _this2.sharedService.openSnackBar('Document Created Successfully', 'success');
              } else {
                _this2.sharedService.openSnackBar(res.responseData.value.errorMessage, 'error');
              }
            }, function (error) {
              _this2.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (this.data.from == 'private') {
              var params = {
                LookupTypeId: 200,
                ApartmentId: this.sessionService.apartmentId
              };
              this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
                _this3.documentCategoryList = res;
              });
            }
          }
        }]);

        return DocumentCreateComponent;
      }();

      DocumentCreateComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      DocumentCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./document-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/document-config/document-create/document-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./document-create.component.scss */
        "./src/app/modules/ams/documents/document-config/document-create/document-create.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_2__["DocumentService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])], DocumentCreateComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/my-document-user-list/my-document-user-list-routing.module.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/my-document-user-list/my-document-user-list-routing.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: MyDocumentUserListRoutingModule */

    /***/
    function srcAppModulesAmsDocumentsMyDocumentUserListMyDocumentUserListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyDocumentUserListRoutingModule", function () {
        return MyDocumentUserListRoutingModule;
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


      var _my_document_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-document-user-list.component */
      "./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.component.ts");

      var routes = [{
        path: '',
        component: _my_document_user_list_component__WEBPACK_IMPORTED_MODULE_3__["MyDocumentUserListComponent"]
      }];

      var MyDocumentUserListRoutingModule = function MyDocumentUserListRoutingModule() {
        _classCallCheck(this, MyDocumentUserListRoutingModule);
      };

      MyDocumentUserListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyDocumentUserListRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.component.scss":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsDocumentsMyDocumentUserListMyDocumentUserListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2RvY3VtZW50cy9teS1kb2N1bWVudC11c2VyLWxpc3QvbXktZG9jdW1lbnQtdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.component.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: MyDocumentUserListComponent */

    /***/
    function srcAppModulesAmsDocumentsMyDocumentUserListMyDocumentUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyDocumentUserListComponent", function () {
        return MyDocumentUserListComponent;
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


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var src_app_shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/file-download.service */
      "./src/app/shared/services/file-download.service.ts");
      /* harmony import */


      var src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Document */
      "./src/app/api/controllers/Document.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _document_config_document_create_document_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../document-config/document-create/document-create.component */
      "./src/app/modules/ams/documents/document-config/document-create/document-create.component.ts");

      var MyDocumentUserListComponent = /*#__PURE__*/function () {
        function MyDocumentUserListComponent(sessionService, documentService, fileDownloadService, sanitizer, dialog, changeDetection) {
          _classCallCheck(this, MyDocumentUserListComponent);

          this.sessionService = sessionService;
          this.documentService = documentService;
          this.fileDownloadService = fileDownloadService;
          this.sanitizer = sanitizer;
          this.dialog = dialog;
          this.changeDetection = changeDetection;
          this.documentViewList = [];
        }

        _createClass(MyDocumentUserListComponent, [{
          key: "getDateFormat",
          value: function getDateFormat(date) {
            return moment__WEBPACK_IMPORTED_MODULE_6__(date).format('ddd MMM D YYYY hh:mm A');
          }
        }, {
          key: "openUploadModal",
          value: function openUploadModal() {
            var _this4 = this;

            var dialogRef = this.dialog.open(_document_config_document_create_document_create_component__WEBPACK_IMPORTED_MODULE_8__["DocumentCreateComponent"], {
              panelClass: 'material-dialog-medium',
              data: {
                from: 'private',
                apartmentBlockUnitId: this.sessionService.apartmentBlockUnitID
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this4.getDocumetList();
              }
            });
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(data, url) {
            var _this5 = this;

            if (data.filePath && !data.fileUrl) {
              this.fileDownloadService.downloadFile(data.filePath).subscribe(function (down) {
                var blob = down.body;
                var objectURL, sanitizeUrl, trigger;
                objectURL = URL.createObjectURL(blob);
                sanitizeUrl = _this5.sanitizer.bypassSecurityTrustUrl(objectURL);
                data.fileUrl = sanitizeUrl;

                _this5.changeDetection.detectChanges();

                trigger = url.firstElementChild;
                trigger.click();
              });
            }
          }
        }, {
          key: "getDocumetList",
          value: function getDocumetList() {
            var _this6 = this;

            this.isDataLoaded = false;
            var params = {
              ApartmentBlockUnitId: this.sessionService.apartmentBlockUnitID,
              ApartmentId: this.sessionService.apartmentId
            };
            this.documentService.getAllDocByApartmentBlockUnitId(params).subscribe(function (res) {
              _this6.isDataLoaded = true;

              if (res.length > 0) {
                _this6.documentViewList = res;
              }

              _this6.totalItems = res.length;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDocumetList();
          }
        }]);

        return MyDocumentUserListComponent;
      }();

      MyDocumentUserListComponent.ctorParameters = function () {
        return [{
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }, {
          type: src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_5__["DocumentService"]
        }, {
          type: src_app_shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_4__["FileDownloadService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      MyDocumentUserListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-document-user-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-document-user-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-document-user-list.component.scss */
        "./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_5__["DocumentService"], src_app_shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_4__["FileDownloadService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], MyDocumentUserListComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.module.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: MyDocumentUserListModule */

    /***/
    function srcAppModulesAmsDocumentsMyDocumentUserListMyDocumentUserListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyDocumentUserListModule", function () {
        return MyDocumentUserListModule;
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


      var _my_document_user_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-document-user-list-routing.module */
      "./src/app/modules/ams/documents/my-document-user-list/my-document-user-list-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var src_app_modules_ui_upload_upload_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/ui/upload/upload.module */
      "./src/app/modules/ui/upload/upload.module.ts");
      /* harmony import */


      var _my_document_user_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./my-document-user-list.component */
      "./src/app/modules/ams/documents/my-document-user-list/my-document-user-list.component.ts");

      var MyDocumentUserListModule = function MyDocumentUserListModule() {
        _classCallCheck(this, MyDocumentUserListModule);
      };

      MyDocumentUserListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_my_document_user_list_component__WEBPACK_IMPORTED_MODULE_8__["MyDocumentUserListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CondoCardModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_6__["SelectModule"], src_app_modules_ui_upload_upload_module__WEBPACK_IMPORTED_MODULE_7__["UploadModule"], _my_document_user_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyDocumentUserListRoutingModule"]]
      })], MyDocumentUserListModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ams-documents-my-document-user-list-my-document-user-list-module-es5.js.map