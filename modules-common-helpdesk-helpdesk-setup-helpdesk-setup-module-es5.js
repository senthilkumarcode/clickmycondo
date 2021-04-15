(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-common-helpdesk-helpdesk-setup-helpdesk-setup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.html":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesCommonHelpdeskHelpdeskSetupAddTicketCategoryAddTicketCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"add-ticket-cateory-wrapper\">\n    <div class=\"main\">\n        <div class=\"bg-card shadow mb-0\">\n            <div class=\"d-flex mb-4\">\n                <h4>\n                    <span *ngIf=\"data.type == 'common'\">{{'SERVICE.HELPDESK.SETTINGS.COMMONCATEGORY' | translate}}</span>\n                    <span *ngIf=\"data.type == 'private'\">{{'SERVICE.HELPDESK.SETTINGS.PRIVATETICKETCATEGORY' | translate}}</span>\n                </h4>\n                <mat-icon class=\"ml-auto link\" [svgIcon]=\"'close'\" (click)=\"closePopUp()\"></mat-icon>\n            </div>\n            <condo-message class=\"mb-3\" *ngIf=\"message\"\n                [appearance]=\"message.appearance\"\n                [showIcon]=\"message.showIcon\"\n                [type]=\"message.type\"\n                [@shake]=\"message.shake\">\n                {{message.content}}\n            </condo-message>\n            <form #ticketCategoryForm=\"ngForm\" name=\"ticketCategoryForm\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>{{'SERVICE.HELPDESK.SETTINGS.CATEGORYNAME' | translate}}<span class=\"required\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"{{'PLACEHOLDER.CATEGORYNAME' | translate}}\" name=\"categoryName\" [(ngModel)]=\"ticketCategoryData.categoryName\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                            labelText=\"{{'SERVICE.HELPDESK.SETTINGS.DEFAULTSUPERVISOR' | translate}}\"\n                            fieldPlaceholder=\"{{'PLACEHOLDER.DEFAULTSUPERVISOR' | translate}}\"\n                            [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                            fieldValue=\"customLabel\"\n                            [fieldModel]=\"ticketCategoryData.staffOne\"\n                            fieldId=\"userId\"\n                            (fieldParams)=\"isExistUser($event,'one')\" \n                        ></condo-select>  \n                    </div>\n                    <div class=\"col-sm-12\">\n                        <h6 class=\"mb-4\">{{'SERVICE.HELPDESK.SETTINGS.ESCLATIONSETUP' | translate}}</h6>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>{{'SERVICE.HELPDESK.SETTINGS.AUTOESCLATETOLEVEL1AFTER' | translate}}</label>\n                            <div class=\"d-flex\">\n                                <input OnlyNumber=\"true\" class=\"form-control\" (input)=\"checkEsclate()\"  placeholder=\"{{'SERVICE.HELPDESK.SETTINGS.DAYS' | translate}}\" name=\"escdayone\" [(ngModel)]=\"ticketCategoryData.escalationDaysOne\" autocomplete=\"off\">\n                                <label class=\"ml-4 align-self-end\">{{'SERVICE.HELPDESK.SETTINGS.DAYS' | translate}}</label>\n                            </div>\n                            <label class=\"text-danger\" *ngIf=\"errorMessage1\">Enter value smaller than Level2 Escalation</label>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                        labelText=\"{{'SERVICE.HELPDESK.SETTINGS.LEVEL1MANAGER' | translate}}\"\n                        fieldPlaceholder=\"{{'PLACEHOLDER.LEVEL1MANAGER' | translate}}\"\n                        [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                        fieldValue=\"customLabel\"\n                        [fieldModel]=\"ticketCategoryData.staffTwo\"\n                        fieldId=\"userId\"\n                        [fieldRequired]=\"ticketCategoryData.escalationDaysOne ? 'required' : 'null'\"\n                        (fieldParams)=\"isExistUser($event,'two')\" \n                        ></condo-select> \n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>{{'SERVICE.HELPDESK.SETTINGS.AUTOESCLATETOLEVEL2AFTER' | translate}}</label>\n                            <div class=\"d-flex\">\n                                <input OnlyNumber=\"true\" class=\"form-control d-inline-block w-40\" (input)=\"checkEsclate()\"  placeholder=\"{{'SERVICE.HELPDESK.SETTINGS.DAYS' | translate}}\" name=\"escdaytwo\" [(ngModel)]=\"ticketCategoryData.escalationDaysTwo\" autocomplete=\"off\">\n                                <label class=\"ml-4 align-self-end\">{{'SERVICE.HELPDESK.SETTINGS.DAYS' | translate}}</label>\n                            </div>\n                            <label class=\"text-danger\" *ngIf=\"errorMessage2\">Enter value greater than Level1 Escalation</label>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                        labelText=\"{{'SERVICE.HELPDESK.SETTINGS.LEVEL2MANAGER' | translate}}\"\n                        fieldPlaceholder=\"{{'PLACEHOLDER.LEVEL2MANAGER' | translate}}\"\n                        [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                        fieldValue=\"customLabel\"\n                        [fieldModel]=\"ticketCategoryData.staffThree\"\n                        fieldId=\"userId\"\n                        [fieldRequired]=\"ticketCategoryData.escalationDaysTwo ? 'required' : 'null'\"\n                        (fieldParams)=\"isExistUser($event,'three')\" \n                        ></condo-select> \n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <submit-button class=\"float-right\" [isSubmit]=\"isTicketSubmitted\" *ngIf=\"data.mode == 'create'\" (click)=\"createCategory()\">{{'BUTTONS.CREATEBUTTON' | translate}}</submit-button>\n                        <submit-button class=\"float-right\" [isSubmit]=\"isTicketSubmitted\" *ngIf=\"data.mode == 'edit'\" (click)=\"updateCategory()\">{{'BUTTONS.UPDATEBUTTON' | translate}}</submit-button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.html":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesCommonHelpdeskHelpdeskSetupCommonCategoryCommonCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"common-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{'SERVICE.HELPDESK.SETTINGS.COMMONCATEGORY' | translate}}</h4>\n                    <p>{{totalItems}} {{'SERVICE.HELPDESK.SETTINGS.TOTALRESULTS' | translate}}</p>\n                </div>\n                <div class=\"ml-auto mr-3\">\n                    <app-table-search [input]=\"commonFilter\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">\n                        <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>{{'BUTTONS.ADD' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"commonListData\"\n                [columns]=\"commonColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #commondatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n        ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.html":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesCommonHelpdeskHelpdeskSetupHelpdeskSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"helpdesk-setup-wrapper\">  \n\t<div class=\"main\">\n\t\t<h4 class=\"mb-4\">{{'SERVICE.HELPDESK.SETTINGS.TITLE' | translate}}</h4>\n\t\t<!-- Tips -->\n\t\t<div class=\"bg-card shadow p-0\">\n\t\t\t<mat-accordion>\n\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>{{'SERVICE.HELPDESK.SETTINGS.TIPS' | translate}}</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t<div class=\"text-hint\">\n\t\t\t\t\t\t\t<p>{{'SERVICE.HELPDESK.SETTINGS.HINT1' | translate}}</p>\n\t\t\t\t\t\t\t<p>{{'SERVICE.HELPDESK.SETTINGS.HINT2' | translate}}</p>\n\t\t\t\t\t\t\t<p>{{'SERVICE.HELPDESK.SETTINGS.HINT3' | translate}}</p>\n\t\t\t\t\t\t\t<p class=\"mt-4\">{{'SERVICE.HELPDESK.SETTINGS.HINT4' | translate}}</p>\n\t\t\t\t\t\t\t<p>{{'SERVICE.HELPDESK.SETTINGS.HINT5' | translate}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t</mat-accordion>\n\t\t</div>\n\t\t<div class=\"bg-card shadow p-0\">\n\t\t\t<nav mat-tab-nav-bar>\n\t\t\t\t<a mat-tab-link *ngFor=\"let link of navArray\" [routerLink]=\"link.link\" \n\t\t\t\t\trouterLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\">\n\t\t\t\t{{tab(link.name)}}\n\t\t\t\t</a>\n\t\t\t</nav>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.html":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesCommonHelpdeskHelpdeskSetupPrivateCategoryPrivateCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"private-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{'SERVICE.HELPDESK.SETTINGS.PRIVATECATEGORY' | translate}}</h4>\n                    <p>{{totalItems}} {{'SERVICE.HELPDESK.SETTINGS.TOTALRESULTS' | translate}}</p>\n                </div>\n                <div class=\"ml-auto mr-3\">\n                    <app-table-search [input]=\"privateFilter\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">\n                        <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>{{'BUTTONS.ADD' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"privateListData\"\n                [columns]=\"privateColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #privatedatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n    ";
      /***/
    },

    /***/
    "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesCommonHelpdeskHelpdeskSetupAddTicketCategoryAddTicketCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9uL2hlbHBkZXNrL2hlbHBkZXNrLXNldHVwL2FkZC10aWNrZXQtY2F0ZWdvcnkvYWRkLXRpY2tldC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: AddTicketCategoryComponent */

    /***/
    function srcAppModulesCommonHelpdeskHelpdeskSetupAddTicketCategoryAddTicketCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTicketCategoryComponent", function () {
        return AddTicketCategoryComponent;
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


      var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Staff */
      "./src/app/api/controllers/Staff.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_condo_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/@condo/animations */
      "./src/@condo/animations/index.ts");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! moment-timezone */
      "./node_modules/moment-timezone/index.js");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */
      "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var AddTicketCategoryComponent = /*#__PURE__*/function () {
        function AddTicketCategoryComponent(dialogRef, staffService, sessionService, lookupService, ticketService, sharedService, _changeDetectorRef, dialog, data, translateService) {
          _classCallCheck(this, AddTicketCategoryComponent);

          this.dialogRef = dialogRef;
          this.staffService = staffService;
          this.sessionService = sessionService;
          this.lookupService = lookupService;
          this.ticketService = ticketService;
          this.sharedService = sharedService;
          this._changeDetectorRef = _changeDetectorRef;
          this.dialog = dialog;
          this.data = data;
          this.translateService = translateService;
          this.ticketCategoryData = {};
          this.staffsList = [];
          this.editData = {};
          this.isTicketSubmitted = false;
          this.message = null;
        }

        _createClass(AddTicketCategoryComponent, [{
          key: "checkEsclate",
          value: function checkEsclate() {
            if (parseInt(this.ticketCategoryData.escalationDaysTwo) <= parseInt(this.ticketCategoryData.escalationDaysOne)) {
              this.errorMessage1 = true;
            } else {
              this.errorMessage1 = false;
            }

            if (parseInt(this.ticketCategoryData.escalationDaysOne) >= parseInt(this.ticketCategoryData.escalationDaysTwo)) {
              this.errorMessage2 = true;
            } else {
              this.errorMessage2 = false;
            }
          }
        }, {
          key: "isExistUser",
          value: function isExistUser(event, type) {
            if (type == 'one') this.ticketCategoryData.staffOne = event[0].userId;else if (type == 'two') this.ticketCategoryData.staffTwo = event[0].userId;else if (type == 'three') this.ticketCategoryData.staffThree = event[0].userId;
          }
        }, {
          key: "createCategory",
          value: function createCategory() {
            var _this = this;

            this.message = null;

            if (this.errorMessage1 || this.errorMessage2) {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              }); // Show the validation message

              this.message = {
                appearance: 'outline',
                content: "Please clear the error",
                shake: true,
                showIcon: true,
                type: 'error'
              };
            } else if (!this.form.valid) {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              });
              this.translateService.get('VALIDATION').subscribe(function (data) {
                // Show the validation message
                _this.message = {
                  appearance: 'outline',
                  content: "".concat(data.CONTENTREQUIREDFIELD),
                  shake: true,
                  showIcon: true,
                  type: 'error'
                };
              }); //Mark for check

              this._changeDetectorRef.markForCheck();
            } else {
              this.isTicketSubmitted = true;
              var entity = {
                description: this.ticketCategoryData.categoryName,
                lookupTypeId: this.data.type == 'private' ? 16 : 17,
                lookupValueName: this.ticketCategoryData.categoryName,
                apartmentId: this.sessionService.apartmentId,
                insertedBy: parseInt(this.sessionService.userId),
                insertedOn: moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()().toISOString(),
                isActive: true,
                updatedBy: 0,
                updatedOn: null
              };
              var lookupvalue = {
                lookupvalue: entity
              };
              this.lookupService.addLookupValue(lookupvalue).subscribe(function (res) {
                if (res.code == 200) {
                  _this.translateService.get('SNACKBAR').subscribe(function (data) {
                    if (res.statusMessage === "TicketManager Config updated Successfully") {
                      _this.sharedService.openSnackBar(res.statusMessage, 'success');
                    }
                  });

                  _this.createEsclation(parseInt(res.message));
                } else {
                  _this.isTicketSubmitted = false;

                  _this.translateService.get('SNACKBAR').subscribe(function (data) {
                    if (res.responseData.value.errorMessage === "Setup Value Not Added as it already exist.") {
                      _this.sharedService.openSnackBar("".concat(data.SETUPVALUENOTADDEDASITALREADYEXIST), 'error');
                    }
                  });
                }
              }, function (error) {
                _this.isTicketSubmitted = false;

                _this.sharedService.openSnackBar('Network Error', 'error');
              });
            }
          }
        }, {
          key: "closePopUp",
          value: function closePopUp() {
            var _this2 = this;

            this.translateService.get('POPUP').subscribe(function (data) {
              var message = "".concat(data.CLOSETITLE);
              var dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogModel"]("".concat(data.CONFIRMACTION), message);

              var dialogRef = _this2.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["CommonConfirmModalComponent"], {
                panelClass: 'material-dialog-medium',
                disableClose: true,
                data: dialogData
              });

              dialogRef.afterClosed().subscribe(function (dialogResult) {
                if (dialogResult) {
                  _this2.dialogRef.close(false);
                }
              });
            });
          }
        }, {
          key: "createEsclation",
          value: function createEsclation(ticketCategoryId) {
            var _this3 = this;

            var addTicket = [];
            var esclator = {
              ticketCategoryId: ticketCategoryId,
              ticketTypeId: this.data.type == 'private' ? 27 : 24,
              isDefault: true,
              isActive: true,
              apartmentId: this.sessionService.apartmentId,
              insertedBy: parseInt(this.sessionService.userId),
              insertedOn: moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()().toISOString(),
              updatedBy: this.data.mode == 'edit' ? parseInt(this.sessionService.userId) : 0,
              updatedOn: this.data.mode == 'edit' ? moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()().toISOString() : null
            };

            for (var i = 0; i < 3; i++) {
              if (i == 0) {
                var esclatorMain = {
                  ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerId : 0,
                  userId: this.ticketCategoryData.staffOne ? this.ticketCategoryData.staffOne : null,
                  escalationLevelId: 0,
                  escalationDays: 0
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), esclatorMain));
              } else if (i == 1 && this.ticketCategoryData.staffTwo && this.ticketCategoryData.escalationDaysOne || i == 1 && this.ticketCategoryData.ticketManagerIdOne) {
                var _esclatorMain = {
                  ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerIdOne : 0,
                  userId: this.ticketCategoryData.staffTwo,
                  escalationLevelId: 1,
                  escalationDays: this.ticketCategoryData.escalationDaysOne
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), _esclatorMain));
              } else if (i == 2 && this.ticketCategoryData.staffThree && this.ticketCategoryData.escalationDaysTwo || i == 2 && this.ticketCategoryData.ticketManagerIdTwo) {
                var _esclatorMain2 = {
                  ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerIdTwo : 0,
                  userId: this.ticketCategoryData.staffThree,
                  escalationLevelId: 2,
                  escalationDays: this.ticketCategoryData.escalationDaysTwo
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), _esclatorMain2));
              }
            }

            var params = {
              ticketManagers: addTicket
            };
            this.ticketService.addTicketManagerMultiple(params).subscribe(function (res) {
              if (res.code == 200) {
                _this3.isTicketSubmitted = false;

                _this3.sharedService.openSnackBar(res.statusMessage, 'success');

                _this3.dialogRef.close(true);
              } else {
                _this3.isTicketSubmitted = false;

                _this3.sharedService.openSnackBar(res.errorMessage, 'error');
              }
            }, function (error) {
              _this3.isTicketSubmitted = false;

              _this3.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "updateCategory",
          value: function updateCategory() {
            var _this4 = this;

            this.message = null;

            if (this.errorMessage1 || this.errorMessage2) {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              }); // Show the validation message

              this.message = {
                appearance: 'outline',
                content: "Please clear the error",
                shake: true,
                showIcon: true,
                type: 'error'
              };
            } else if (!this.form.valid) {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              }); // Show the validation message

              this.translateService.get('VALIDATION').subscribe(function (data) {
                _this4.message = {
                  appearance: 'outline',
                  content: "".concat(data.CONTENTREQUIREDFIELD),
                  shake: true,
                  showIcon: true,
                  type: 'error'
                };
              }); //Mark for check

              this._changeDetectorRef.markForCheck();
            } else {
              this.isTicketSubmitted = true;

              if (this.ticketCategoryData.categoryName != this.editData.ticketCategoryName) {
                var entity = {
                  lookupValueId: this.editData.ticketCategoryId,
                  description: this.ticketCategoryData.categoryName,
                  lookupTypeId: this.data.type == 'private' ? 16 : 17,
                  lookupValueName: this.ticketCategoryData.categoryName,
                  apartmentId: this.sessionService.apartmentId,
                  insertedBy: parseInt(this.sessionService.userId),
                  insertedOn: moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()().toISOString(),
                  isActive: true,
                  updatedBy: parseInt(this.sessionService.userId),
                  updatedOn: moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()().toISOString()
                };
                var lookupvalue = {
                  lookupvalue: entity
                };
                this.lookupService.updateLookupValue(lookupvalue).subscribe(function (res) {
                  if (res.message) {
                    _this4.sharedService.openSnackBar(res.message, 'success');

                    _this4.createEsclation(_this4.editData.ticketCategoryId);
                  } else {
                    _this4.isTicketSubmitted = false;

                    _this4.sharedService.openSnackBar(res.errorMessage, 'error');
                  }
                }, function (error) {
                  _this4.isTicketSubmitted = false;

                  _this4.sharedService.openSnackBar('Server Error', 'error');
                });
              } else {
                this.createEsclation(this.editData.ticketCategoryId);
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            var staffParms = {
              apartmentId: this.sessionService.apartmentId,
              roleTypeIds: '1,3,5'
            };
            this.staffService.getAllStaffs(staffParms).subscribe(function (res) {
              if (res.length) {
                res.forEach(function (ele) {
                  ele.customLabel = "".concat(ele.staffName, ", ").concat(ele.roleName, " - ").concat(ele.staffCategoryName);
                });
                _this5.staffsList = res;
              }
            }, function (error) {
              _this5.sharedService.openSnackBar('Server Error', error);
            }); //Edit Mode

            if (this.data.mode == 'edit' && this.data.categoryId) {
              var queryParamBase = {
                apartmentId: this.sessionService.apartmentId,
                ticketCategoryId: this.data.categoryId,
                ticketTypeId: this.data.type == 'private' ? 27 : 24
              };
              this.ticketService.getTicketManagerByTicketCategoryId(queryParamBase).subscribe(function (res) {
                _this5.editData = res[0];
                _this5.ticketCategoryData.categoryName = res[0].ticketCategoryName;
                _this5.ticketCategoryData.ticketManagerId = res[0].escalationLevelId0.ticketManagerId;
                _this5.ticketCategoryData.staffOne = res[0].escalationLevelId0.userId;

                if (res[0].escalationLevelId1) {
                  _this5.ticketCategoryData.escalationDaysOne = res[0].escalationLevelId1.escalationDays;
                  _this5.ticketCategoryData.ticketManagerIdOne = res[0].escalationLevelId1.ticketManagerId;
                  _this5.ticketCategoryData.staffTwo = res[0].escalationLevelId1.userId;
                }

                if (res[0].escalationLevelId2) {
                  _this5.ticketCategoryData.escalationDaysTwo = res[0].escalationLevelId2.escalationDays;
                  _this5.ticketCategoryData.ticketManagerIdTwo = res[0].escalationLevelId2.ticketManagerId;
                  _this5.ticketCategoryData.staffThree = res[0].escalationLevelId2.userId;
                }
              });
            }
          }
        }]);

        return AddTicketCategoryComponent;
      }();

      AddTicketCategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
        }];
      };

      AddTicketCategoryComponent.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['ticketCategoryForm']
        }]
      };
      AddTicketCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-ticket-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-ticket-category.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        animations: src_condo_animations__WEBPACK_IMPORTED_MODULE_8__["CondoAnimations"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-ticket-category.component.scss */
        "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], Object, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]])], AddTicketCategoryComponent);
      /***/
    },

    /***/
    "./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.scss":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesCommonHelpdeskHelpdeskSetupCommonCategoryCommonCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".helpdesk-setup-modal mat-dialog-container {\n  height: auto;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21tb24vaGVscGRlc2svaGVscGRlc2stc2V0dXAvY29tbW9uLWNhdGVnb3J5L2NvbW1vbi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21tb24vaGVscGRlc2svaGVscGRlc2stc2V0dXAvY29tbW9uLWNhdGVnb3J5L2NvbW1vbi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwZGVzay1zZXR1cC1tb2RhbCB7XG4gICAgbWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxufVxuICAgIl19 */";
      /***/
    },

    /***/
    "./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: CommonCategoryComponent */

    /***/
    function srcAppModulesCommonHelpdeskHelpdeskSetupCommonCategoryCommonCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonCategoryComponent", function () {
        return CommonCategoryComponent;
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


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../add-ticket-category/add-ticket-category.component */
      "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");

      var CommonCategoryComponent = /*#__PURE__*/function () {
        function CommonCategoryComponent(dialog, sharedService, ticketService, sessionService, lookupService, injector) {
          _classCallCheck(this, CommonCategoryComponent);

          this.dialog = dialog;
          this.sharedService = sharedService;
          this.ticketService = ticketService;
          this.sessionService = sessionService;
          this.lookupService = lookupService;
          this.injector = injector;
          this.commonFilter = "";
          this.isDataLoaded = true;
          this.totalItems = 0;
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
        }

        _createClass(CommonCategoryComponent, [{
          key: "addTicket",
          value: function addTicket(mode, categoryId) {
            var _this6 = this;

            var data = {
              type: 'common',
              mode: mode,
              categoryId: categoryId
            };
            var dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__["AddTicketCategoryComponent"], {
              panelClass: ["material-dialog-medium", "helpdesk-setup-modal"],
              disableClose: true,
              data: data
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this6.getCommonCategoryList();
              }
            });
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.commondatagrid.exportdata(event, 'Common Category', true, null, true, 'https://www.jqwidgets.com/export_server/dataexport.php');
          }
        }, {
          key: "onCommonCatEdit",
          value: function onCommonCatEdit(detail) {
            var dataRecord = this.commondatagrid.getrowdata(detail.rowId);
            this.addTicket('edit', dataRecord.ticketCategoryId);
          }
        }, {
          key: "onCommonCatDelete",
          value: function onCommonCatDelete(detail) {
            var dataRecord = this.commondatagrid.getrowdata(detail.rowId);
            this.modalService.showConfirmModal({
              id: dataRecord.ticketCategoryId,
              index: detail.rowId
            });
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter(event) {
            var _this7 = this;

            if (event != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = event;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.commondatagrid.showfiltercolumnbackground(false);
              this.commonColumns.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this7.commondatagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.commondatagrid.applyfilters();
            } else {
              this.commondatagrid.clearfilters();
            }
          }
        }, {
          key: "getCommonCategoryList",
          value: function getCommonCategoryList() {
            var _this8 = this;

            this.isDataLoaded = true;
            var params = {
              apartmentId: this.sessionService.apartmentId,
              ticketTypeId: 24
            };
            this.ticketService.getAllTicketManagerByApartmentId(params).subscribe(function (res) {
              if (res.length > 0) {
                _this8.totalItems = res.length;
                var data = {
                  localdata: res.reverse(),
                  datatype: "array",
                  datafields: [{
                    name: 'ticketCategoryId',
                    type: 'number'
                  }, {
                    name: 'ticketCategoryName',
                    type: 'string'
                  }, {
                    name: 'userNameZero',
                    type: 'string',
                    map: 'escalationLevelId0>userName'
                  }, {
                    name: 'userNameOne',
                    type: 'string',
                    map: 'escalationLevelId1>userName'
                  }, {
                    name: 'dayOne',
                    type: 'string',
                    map: 'escalationLevelId1>escalationDays'
                  }, {
                    name: 'userNameTwo',
                    type: 'string',
                    map: 'escalationLevelId2>userName'
                  }, {
                    name: 'dayTwo',
                    type: 'string',
                    map: 'escalationLevelId2>escalationDays'
                  }]
                };
                _this8.commonListData = new jqx.dataAdapter(data);
              }

              _this8.isDataLoaded = false;
            }, function (error) {
              _this8.isDataLoaded = false;

              _this8.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.getCommonCategoryList();

            var cellsrendererCommon = function cellsrendererCommon(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrendererCommon = function columnrendererCommon(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.commonColumns = [{
              text: 'Category',
              datafield: 'ticketCategoryName',
              width: 200,
              pinned: true,
              cellsrenderer: cellsrendererCommon,
              renderer: columnrendererCommon
            }, {
              text: 'Supervisor',
              datafield: "userNameZero",
              cellsrenderer: cellsrendererCommon,
              minwidth: 150,
              renderer: columnrendererCommon
            }, {
              text: 'Level-1',
              datafield: "userNameOne",
              cellsrenderer: cellsrendererCommon,
              minwidth: 150,
              renderer: columnrendererCommon
            }, {
              text: 'L1 escdays',
              datafield: 'dayOne',
              cellsrenderer: cellsrendererCommon,
              width: 120,
              renderer: columnrendererCommon
            }, {
              text: 'Level-2',
              datafield: "userNameTwo",
              cellsrenderer: cellsrendererCommon,
              minwidth: 150,
              renderer: columnrendererCommon
            }, {
              text: 'L2 escdays',
              datafield: 'dayTwo',
              cellsrenderer: cellsrendererCommon,
              width: 120,
              renderer: columnrendererCommon
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editCommonCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventCommon(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
              },
              renderer: columnrendererCommon
            }]; //Delete Category

            this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(function (item) {
              if (item != null && item.id) {
                var category = {
                  lookupValueId: item.id,
                  updateUserId: parseInt(_this9.sessionService.userId)
                };

                _this9.lookupService.deleteLookupvalue(category).subscribe(function (res) {
                  _this9.sharedService.setUnitListDeleteIndex(null);

                  if (res.message) {
                    var params = {
                      apartmentId: _this9.sessionService.apartmentId,
                      ticketCategoryId: item.id,
                      deleteBy: _this9.sessionService.userId
                    };

                    _this9.ticketService.deleteTicketManagerByTicketCategoryId(params).subscribe(function (res) {
                      if (res.code == 200) {
                        _this9.getCommonCategoryList();

                        _this9.sharedService.openSnackBar('Common Category Deleted Successfully', 'success');
                      } else {
                        _this9.sharedService.openSnackBar(res.statusMessage, 'error');
                      }
                    }, function (error) {
                      _this9.sharedService.setUnitListDeleteIndex(null);

                      _this9.sharedService.openSnackBar('Server Error', 'error');
                    });
                  } else {
                    _this9.sharedService.openSnackBar(res.errorMessage, 'error');
                  }
                }, function (error) {
                  _this9.sharedService.openSnackBar('Server Error', 'error');
                });
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.apiSubscribe.unsubscribe();
          }
        }]);

        return CommonCategoryComponent;
      }();

      CommonCategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }];
      };

      CommonCategoryComponent.propDecorators = {
        commondatagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['commondatagrid', {
            "static": false
          }]
        }],
        onCommonCatEdit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onCommonCatEdit', ['$event.detail']]
        }],
        onCommonCatDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onCommonCatDelete', ['$event.detail']]
        }]
      };
      CommonCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./common-category.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./common-category.component.scss */
        "./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], CommonCategoryComponent);

      function showConfirmDeleteEventCommon(row) {
        var event = new CustomEvent('onCommonCatDelete', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.showConfirmDeleteEventCommon = showConfirmDeleteEventCommon;

      function editCommonCatEvent(row) {
        var event = new CustomEvent('onCommonCatEdit', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.editCommonCatEvent = editCommonCatEvent;
      /***/
    },

    /***/
    "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup-routing.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: HelpdeskSetupRoutingModule */

    /***/
    function srcAppModulesCommonHelpdeskHelpdeskSetupHelpdeskSetupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpdeskSetupRoutingModule", function () {
        return HelpdeskSetupRoutingModule;
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


      var _helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./helpdesk-setup.component */
      "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.ts");
      /* harmony import */


      var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/auth/guards/auth.guard */
      "./src/app/core/auth/guards/auth.guard.ts");
      /* harmony import */


      var _private_category_private_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./private-category/private-category.component */
      "./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.ts");
      /* harmony import */


      var _common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./common-category/common-category.component */
      "./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.ts");

      var routes = [{
        path: '',
        component: _helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__["HelpdeskSetupComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{
          path: '',
          redirectTo: 'private-category',
          canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
          pathMatch: 'full'
        }, {
          path: 'private-category',
          component: _private_category_private_category_component__WEBPACK_IMPORTED_MODULE_5__["PrivateCategoryComponent"],
          canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'common-category',
          component: _common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__["CommonCategoryComponent"],
          canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: '**',
          redirectTo: 'private-category',
          pathMatch: 'full'
        }]
      }];

      var HelpdeskSetupRoutingModule = function HelpdeskSetupRoutingModule() {
        _classCallCheck(this, HelpdeskSetupRoutingModule);
      };

      HelpdeskSetupRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HelpdeskSetupRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.scss":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesCommonHelpdeskHelpdeskSetupHelpdeskSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21tb24vaGVscGRlc2svaGVscGRlc2stc2V0dXAvaGVscGRlc2stc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21tb24vaGVscGRlc2svaGVscGRlc2stc2V0dXAvaGVscGRlc2stc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.ts ***!
      \************************************************************************************/

    /*! exports provided: HelpdeskSetupComponent */

    /***/
    function srcAppModulesCommonHelpdeskHelpdeskSetupHelpdeskSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpdeskSetupComponent", function () {
        return HelpdeskSetupComponent;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var HelpdeskSetupComponent = /*#__PURE__*/function () {
        function HelpdeskSetupComponent(translateService) {
          _classCallCheck(this, HelpdeskSetupComponent);

          this.translateService = translateService;
        }

        _createClass(HelpdeskSetupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.navArray = [{
              link: 'private-category',
              name: 'Private Category'
            }, {
              link: 'common-category',
              name: 'Common Category'
            }];
          }
        }, {
          key: "tab",
          value: function tab(tabTitle) {
            var retTitle = "";
            this.translateService.get('SERVICE.HELPDESK.SETTINGS').subscribe(function (data) {
              if (tabTitle === "Private Category") {
                retTitle = "".concat(data.PRIVATECATEGORY);
              } else {
                retTitle = "".concat(data.COMMONCATEGORY);
              }
            });
            return retTitle;
          }
        }]);

        return HelpdeskSetupComponent;
      }();

      HelpdeskSetupComponent.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      };

      HelpdeskSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk-setup.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk-setup.component.scss */
        "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])], HelpdeskSetupComponent);
      /***/
    },

    /***/
    "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: HelpdeskSetupModule */

    /***/
    function srcAppModulesCommonHelpdeskHelpdeskSetupHelpdeskSetupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpdeskSetupModule", function () {
        return HelpdeskSetupModule;
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


      var _helpdesk_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./helpdesk-setup-routing.module */
      "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup-routing.module.ts");
      /* harmony import */


      var _helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./helpdesk-setup.component */
      "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.ts");
      /* harmony import */


      var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-ticket-category/add-ticket-category.component */
      "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
      /* harmony import */


      var _common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./common-category/common-category.component */
      "./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.ts");
      /* harmony import */


      var _private_category_private_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./private-category/private-category.component */
      "./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/modules/ui/message/message.module */
      "./src/app/modules/ui/message/message.module.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var HelpdeskSetupModule = function HelpdeskSetupModule() {
        _classCallCheck(this, HelpdeskSetupModule);
      };

      HelpdeskSetupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskSetupComponent"], _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__["AddTicketCategoryComponent"], _common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__["CommonCategoryComponent"], _private_category_private_category_component__WEBPACK_IMPORTED_MODULE_7__["PrivateCategoryComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_9__["CondoCardModule"], src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_11__["CondoMessageModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_10__["SelectModule"], _helpdesk_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpdeskSetupRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]]
      })], HelpdeskSetupModule);
      /***/
    },

    /***/
    "./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.scss":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesCommonHelpdeskHelpdeskSetupPrivateCategoryPrivateCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".helpdesk-setup-modal mat-dialog-container {\n  height: auto;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21tb24vaGVscGRlc2svaGVscGRlc2stc2V0dXAvcHJpdmF0ZS1jYXRlZ29yeS9wcml2YXRlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbW1vbi9oZWxwZGVzay9oZWxwZGVzay1zZXR1cC9wcml2YXRlLWNhdGVnb3J5L3ByaXZhdGUtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVscGRlc2stc2V0dXAtbW9kYWwge1xuICAgIG1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbn1cbiAgICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: PrivateCategoryComponent */

    /***/
    function srcAppModulesCommonHelpdeskHelpdeskSetupPrivateCategoryPrivateCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivateCategoryComponent", function () {
        return PrivateCategoryComponent;
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


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../add-ticket-category/add-ticket-category.component */
      "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");

      var PrivateCategoryComponent = /*#__PURE__*/function () {
        function PrivateCategoryComponent(dialog, sharedService, ticketService, lookupService, injector, sessionService) {
          _classCallCheck(this, PrivateCategoryComponent);

          this.dialog = dialog;
          this.sharedService = sharedService;
          this.ticketService = ticketService;
          this.lookupService = lookupService;
          this.injector = injector;
          this.sessionService = sessionService;
          this.privateFilter = '';
          this.isDataLoaded = true;
          this.totalItems = 0;
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
        }

        _createClass(PrivateCategoryComponent, [{
          key: "addTicket",
          value: function addTicket(mode, categoryId) {
            var _this10 = this;

            var data = {
              type: 'private',
              mode: mode,
              categoryId: categoryId
            };
            var dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__["AddTicketCategoryComponent"], {
              panelClass: ["material-dialog-medium", "helpdesk-setup-modal"],
              disableClose: true,
              data: data
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this10.getPrivateCategoryList();
              }
            });
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.privatedatagrid.exportdata(event, 'Private Category', true, null, true, 'https://www.jqwidgets.com/export_server/dataexport.php');
          }
        }, {
          key: "onPrivateCatEdit",
          value: function onPrivateCatEdit(detail) {
            var dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
            this.addTicket('edit', dataRecord.ticketCategoryId);
          }
        }, {
          key: "onPrivateCatDelete",
          value: function onPrivateCatDelete(detail) {
            var dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
            this.modalService.showConfirmModal({
              id: dataRecord.ticketCategoryId,
              index: detail.rowId
            });
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter(event) {
            var _this11 = this;

            if (event != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = event;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.privatedatagrid.showfiltercolumnbackground(false);
              this.privateColumns.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this11.privatedatagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.privatedatagrid.applyfilters();
            } else {
              this.privatedatagrid.clearfilters();
            }
          }
        }, {
          key: "getPrivateCategoryList",
          value: function getPrivateCategoryList() {
            var _this12 = this;

            this.isDataLoaded = true;
            var params = {
              apartmentId: this.sessionService.apartmentId,
              ticketTypeId: 27
            };
            this.ticketService.getAllTicketManagerByApartmentId(params).subscribe(function (res) {
              if (res.length > 0) {
                _this12.totalItems = res.length;
                var data = {
                  localdata: res.reverse(),
                  datatype: "array",
                  datafields: [{
                    name: 'ticketCategoryId',
                    type: 'number'
                  }, {
                    name: 'ticketCategoryName',
                    type: 'string'
                  }, {
                    name: 'userNameZero',
                    type: 'string',
                    map: 'escalationLevelId0>userName'
                  }, {
                    name: 'userNameOne',
                    type: 'string',
                    map: 'escalationLevelId1>userName'
                  }, {
                    name: 'dayOne',
                    type: 'string',
                    map: 'escalationLevelId1>escalationDays'
                  }, {
                    name: 'userNameTwo',
                    type: 'string',
                    map: 'escalationLevelId2>userName'
                  }, {
                    name: 'dayTwo',
                    type: 'string',
                    map: 'escalationLevelId2>escalationDays'
                  }]
                };
                _this12.privateListData = new jqx.dataAdapter(data);
              }

              _this12.isDataLoaded = false;
            }, function (error) {
              _this12.isDataLoaded = false;

              _this12.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.getPrivateCategoryList();

            var cellsrendererPrivate = function cellsrendererPrivate(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrendererPrivate = function columnrendererPrivate(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.privateColumns = [{
              text: 'Category',
              datafield: 'ticketCategoryName',
              width: 200,
              pinned: true,
              cellsrenderer: cellsrendererPrivate,
              renderer: columnrendererPrivate
            }, {
              text: 'Supervisor',
              datafield: "userNameZero",
              cellsrenderer: cellsrendererPrivate,
              minwidth: 150,
              renderer: columnrendererPrivate
            }, {
              text: 'Level-1',
              datafield: "userNameOne",
              cellsrenderer: cellsrendererPrivate,
              minwidth: 150,
              renderer: columnrendererPrivate
            }, {
              text: 'L1 escdays',
              datafield: 'dayOne',
              cellsrenderer: function cellsrenderer(value) {
                return '<div class="jqx-custom-inner-cell">' + value.toFixed(0) + '</div>';
              },
              width: 120,
              renderer: columnrendererPrivate
            }, {
              text: 'Level-2',
              datafield: "userNameTwo",
              cellsrenderer: cellsrendererPrivate,
              minwidth: 150,
              renderer: columnrendererPrivate
            }, {
              text: 'L2 escdays',
              datafield: 'dayTwo',
              cellsrenderer: function cellsrenderer(value) {
                return '<div class="jqx-custom-inner-cell">' + value.toFixed(0) + '</div>';
              },
              width: 120,
              renderer: columnrendererPrivate
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editPrivateCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventPrivate(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
              },
              renderer: columnrendererPrivate
            }]; //Delete Category

            this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(function (item) {
              if (item != null && item.id) {
                var category = {
                  lookupValueId: item.id,
                  updateUserId: parseInt(_this13.sessionService.userId)
                };

                _this13.lookupService.deleteLookupvalue(category).subscribe(function (res) {
                  _this13.sharedService.setUnitListDeleteIndex(null);

                  if (res.message) {
                    var params = {
                      apartmentId: _this13.sessionService.apartmentId,
                      ticketCategoryId: item.id,
                      deleteBy: _this13.sessionService.userId
                    };

                    _this13.ticketService.deleteTicketManagerByTicketCategoryId(params).subscribe(function (res) {
                      if (res.code == 200) {
                        _this13.getPrivateCategoryList();

                        _this13.sharedService.openSnackBar('Private Category Deleted Successfully', 'success');
                      } else {
                        _this13.sharedService.openSnackBar(res.statusMessage, 'error');
                      }
                    }, function (error) {
                      _this13.sharedService.setUnitListDeleteIndex(null);

                      _this13.sharedService.openSnackBar('Server Error', 'error');
                    });
                  } else {
                    _this13.sharedService.openSnackBar(res.errorMessage, 'error');
                  }
                }, function (error) {
                  _this13.sharedService.openSnackBar('Server Error', 'error');
                });
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.apiSubscribe.unsubscribe();
          }
        }]);

        return PrivateCategoryComponent;
      }();

      PrivateCategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }];
      };

      PrivateCategoryComponent.propDecorators = {
        privatedatagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['privatedatagrid', {
            "static": false
          }]
        }],
        onPrivateCatEdit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onPrivateCatEdit', ['$event.detail']]
        }],
        onPrivateCatDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onPrivateCatDelete', ['$event.detail']]
        }]
      };
      PrivateCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-private-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./private-category.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./private-category.component.scss */
        "./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])], PrivateCategoryComponent);

      function showConfirmDeleteEventPrivate(row) {
        var event = new CustomEvent('onPrivateCatDelete', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.showConfirmDeleteEventPrivate = showConfirmDeleteEventPrivate;

      function editPrivateCatEvent(row) {
        var event = new CustomEvent('onPrivateCatEdit', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.editPrivateCatEvent = editPrivateCatEvent;
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-common-helpdesk-helpdesk-setup-helpdesk-setup-module-es5.js.map