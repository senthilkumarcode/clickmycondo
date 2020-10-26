(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-common-helpdesk-helpdesk-setup-helpdesk-setup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-ticket-cateory-wrapper\">\n    <div class=\"main\">\n        <div class=\"bg-card shadow mb-0\">\n            <div class=\"d-flex mb-4\">\n                <h4>\n                    <span *ngIf=\"data.type == 'common'\">COMMON TICKET CATEGORY</span>\n                    <span *ngIf=\"data.type == 'private'\">PRIVATE TICKET CATEGORY</span>\n                </h4>\n                <mat-icon class=\"ml-auto\" [svgIcon]=\"'close'\" mat-dialog-close></mat-icon>\n            </div>\n            <condo-message class=\"mb-3\" *ngIf=\"message\"\n                [appearance]=\"message.appearance\"\n                [showIcon]=\"message.showIcon\"\n                [type]=\"message.type\"\n                [@shake]=\"message.shake\">\n                {{message.content}}\n            </condo-message>\n            <form #ticketCategoryForm=\"ngForm\" name=\"ticketCategoryForm\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Category Name<span class=\"required\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Category Name\" name=\"categoryName\" [(ngModel)]=\"ticketCategoryData.categoryName\" (input)=\"errorMessage=''\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                            labelText=\"Default Supervisor\"\n                            fieldPlaceholder=\"Default Supervisor\"\n                            [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                            fieldValue=\"customLabel\"\n                            [fieldModel]=\"ticketCategoryData.staffOne\"\n                            fieldId=\"userId\"\n                            (fieldParams)=\"isExistUser($event,'one')\" \n                        ></condo-select>  \n                    </div>\n                    <div class=\"col-sm-12\">\n                        <h6 class=\"mb-4\">Esclation Setup (Optional)</h6>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Auto Esclate to Level 1 After</label>\n                            <div class=\"d-flex\">\n                                <input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Days\" name=\"escdayone\" [(ngModel)]=\"ticketCategoryData.escalationDaysOne\">\n                                <label class=\"ml-4 align-self-end\">Days</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                        labelText=\"Select Level-1 Manager\"\n                        fieldPlaceholder=\"Select Level-1 Manager\"\n                        [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                        fieldValue=\"customLabel\"\n                        [fieldModel]=\"ticketCategoryData.staffTwo\"\n                        fieldId=\"userId\"\n                        (fieldParams)=\"isExistUser($event,'two')\" \n                        ></condo-select> \n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Auto Esclate to Level 2 After</label>\n                            <div class=\"d-flex\">\n                                <input OnlyNumber=\"true\" class=\"form-control d-inline-block w-40\" placeholder=\"Days\" name=\"escdaytwo\" [(ngModel)]=\"ticketCategoryData.escalationDaysTwo\">\n                                <label class=\"ml-4 align-self-end\">Days</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                        labelText=\"Select Level-2 Manager\"\n                        fieldPlaceholder=\"Select Level-2 Manager\"\n                        [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                        fieldValue=\"customLabel\"\n                        [fieldModel]=\"ticketCategoryData.staffThree\"\n                        fieldId=\"userId\"\n                        (fieldParams)=\"isExistUser($event,'three')\" \n                        ></condo-select> \n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <submit-button class=\"float-right\" [isSubmit]=\"isTicketSubmitted\" *ngIf=\"data.mode == 'create'\" (click)=\"createCategory()\">Create</submit-button>\n                        <submit-button class=\"float-right\" [isSubmit]=\"isTicketSubmitted\" *ngIf=\"data.mode == 'edit'\" (click)=\"updateCategory()\">Update</submit-button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"common-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>Common Category</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto mr-3\">\n                    <app-table-search [input]=\"commonFilter\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">\n                        <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>Add\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"commonListData\"\n                [columns]=\"commonColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #commondatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"helpdesk-setup-wrapper\">  \n\t<div class=\"main\">\n\t\t<h4 class=\"mb-4\">Settings</h4>\n\t\t<!-- Tips -->\n\t\t<div class=\"bg-card shadow p-0\">\n\t\t\t<mat-accordion>\n\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>Tips</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t<div class=\"text-hint\">\n\t\t\t\t\t\t\t<p>Tips :  You have two types of Ticket Category to setup.</p>\n\t\t\t\t\t\t\t<p>Common category refer to the issues related to condo which is at common to all units (For Example : Swimming pool not clean)</p>\n\t\t\t\t\t\t\t<p>Private category refer to the issues inside  the units ( For Example : Plumbing inside the Condo)</p>\n\t\t\t\t\t\t\t<p class=\"mt-4\">We have some standard Common Categories created for you, you can assign a supervisor and assign escalation if you required.</p>\n\t\t\t\t\t\t\t<p>If you have supervisor assigned to a Category , tickets will get assigned to Supervisor automatically. Supervisor will have to re-assign the ticket to Staff.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t</mat-accordion>\n\t\t</div>\n\t\t<div class=\"bg-card shadow p-0\">\n\t\t\t<nav mat-tab-nav-bar>\n\t\t\t\t<a mat-tab-link *ngFor=\"let link of navArray\" [routerLink]=\"link.link\" \n\t\t\t\t\trouterLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\">\n\t\t\t\t{{link.name}}\n\t\t\t\t</a>\n\t\t\t</nav>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"private-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>Private Category</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto mr-3\">\n                    <app-table-search [input]=\"privateFilter\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">\n                        <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>Add\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"privateListData\"\n                [columns]=\"privateColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #privatedatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n    ");

/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9uL2hlbHBkZXNrL2hlbHBkZXNrLXNldHVwL2FkZC10aWNrZXQtY2F0ZWdvcnkvYWRkLXRpY2tldC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AddTicketCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTicketCategoryComponent", function() { return AddTicketCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_condo_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@condo/animations */ "./src/@condo/animations/index.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_9__);










let AddTicketCategoryComponent = class AddTicketCategoryComponent {
    constructor(dialogRef, staffService, sessionService, lookupService, ticketService, sharedService, _changeDetectorRef, data) {
        this.dialogRef = dialogRef;
        this.staffService = staffService;
        this.sessionService = sessionService;
        this.lookupService = lookupService;
        this.ticketService = ticketService;
        this.sharedService = sharedService;
        this._changeDetectorRef = _changeDetectorRef;
        this.data = data;
        this.ticketCategoryData = {};
        this.staffsList = [];
        this.editData = {};
        this.isTicketSubmitted = false;
        this.message = null;
    }
    isExistUser(event, type) {
        if (type == 'one')
            this.ticketCategoryData.staffOne = event[0].userId;
        else if (type == 'two')
            this.ticketCategoryData.staffTwo = event[0].userId;
        else if (type == 'three')
            this.ticketCategoryData.staffThree = event[0].userId;
    }
    createCategory() {
        this.message = null;
        if (!this.form.valid) {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            // Show the validation message
            this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
            };
            //Mark for check
            this._changeDetectorRef.markForCheck();
        }
        else {
            this.isTicketSubmitted = true;
            let entity = {
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
            let lookupvalue = {
                lookupvalue: entity
            };
            this.lookupService.addLookupValue(lookupvalue).subscribe((res) => {
                if (res.code == 200) {
                    this.sharedService.openSnackBar(res.statusMessage, 'success');
                    this.createEsclation(parseInt(res.message));
                }
                else {
                    this.isTicketSubmitted = false;
                    this.sharedService.openSnackBar(res.responseData.value.errorMessage, 'error');
                }
            }, (error) => {
                this.isTicketSubmitted = false;
                this.sharedService.openSnackBar('Network Error', 'error');
            });
        }
    }
    createEsclation(ticketCategoryId) {
        let addTicket = [];
        let esclator = {
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
        for (let i = 0; i < 3; i++) {
            if (i == 0) {
                let esclatorMain = {
                    ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerId : 0,
                    userId: this.ticketCategoryData.staffOne ? this.ticketCategoryData.staffOne : null,
                    escalationLevelId: 0,
                    escalationDays: 0,
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), esclatorMain));
            }
            else if (i == 1 && this.ticketCategoryData.staffTwo && this.ticketCategoryData.escalationDaysOne) {
                let esclatorMain = {
                    ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerIdOne : 0,
                    userId: this.ticketCategoryData.staffTwo,
                    escalationLevelId: 1,
                    escalationDays: this.ticketCategoryData.escalationDaysOne,
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), esclatorMain));
            }
            else if (i == 2 && this.ticketCategoryData.staffThree && this.ticketCategoryData.escalationDaysTwo) {
                let esclatorMain = {
                    ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerIdTwo : 0,
                    userId: this.ticketCategoryData.staffThree,
                    escalationLevelId: 2,
                    escalationDays: this.ticketCategoryData.escalationDaysTwo,
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), esclatorMain));
            }
        }
        let params = {
            ticketManagers: addTicket
        };
        this.ticketService.addTicketManagerMultiple(params).subscribe((res) => {
            if (res.code == 200) {
                this.isTicketSubmitted = false;
                this.sharedService.openSnackBar(res.statusMessage, 'success');
                this.dialogRef.close(true);
            }
            else {
                this.isTicketSubmitted = false;
                this.sharedService.openSnackBar(res.errorMessage, 'error');
            }
        }, (error) => {
            this.isTicketSubmitted = false;
            this.sharedService.openSnackBar('Server Error', 'error');
        });
    }
    updateCategory() {
        this.message = null;
        if (!this.form.valid) {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            // Show the validation message
            this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
            };
            //Mark for check
            this._changeDetectorRef.markForCheck();
        }
        else {
            this.isTicketSubmitted = true;
            if (this.ticketCategoryData.categoryName != this.editData.ticketCategoryName) {
                let entity = {
                    lookupValueId: this.editData.ticketCategoryId,
                    description: this.ticketCategoryData.categoryName,
                    lookupTypeId: this.data.type == 'private' ? 16 : 17,
                    lookupValueName: this.ticketCategoryData.categoryName,
                    apartmentId: this.sessionService.apartmentId,
                    insertedBy: parseInt(this.sessionService.userId),
                    insertedOn: moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()().toISOString(),
                    isActive: true,
                    updatedBy: parseInt(this.sessionService.userId),
                    updatedOn: moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()().toISOString(),
                };
                let lookupvalue = {
                    lookupvalue: entity
                };
                this.lookupService.updateLookupValue(lookupvalue).subscribe((res) => {
                    if (res.message) {
                        this.sharedService.openSnackBar(res.message, 'success');
                        this.createEsclation(this.editData.ticketCategoryId);
                    }
                    else {
                        this.isTicketSubmitted = false;
                        this.sharedService.openSnackBar(res.errorMessage, 'error');
                    }
                }, (error) => {
                    this.isTicketSubmitted = false;
                    this.sharedService.openSnackBar('Server Error', 'error');
                });
            }
            else {
                this.createEsclation(this.editData.ticketCategoryId);
            }
        }
    }
    ngOnInit() {
        let staffParms = {
            apartmentId: this.sessionService.apartmentId,
            RoleTypeId: this.sessionService.roleTypeId
        };
        this.staffService.getAllStaffs(staffParms).subscribe((res) => {
            if (res.length) {
                res.forEach((ele) => {
                    ele.customLabel = `${ele.staffName}, ${ele.roleName} - ${ele.staffCategoryName}`;
                });
                this.staffsList = res;
            }
        }, error => {
            console.log(error);
        });
        //Edit Mode
        if (this.data.mode == 'edit' && this.data.categoryId) {
            let queryParamBase = {
                apartmentId: this.sessionService.apartmentId,
                ticketCategoryId: this.data.categoryId,
                ticketTypeId: this.data.type == 'private' ? 27 : 24,
            };
            this.ticketService.getTicketManagerByTicketCategoryId(queryParamBase).subscribe((res) => {
                this.editData = res[0];
                this.ticketCategoryData.categoryName = res[0].ticketCategoryName;
                this.ticketCategoryData.ticketManagerId = res[0].escalationLevelId0.ticketManagerId;
                this.ticketCategoryData.staffOne = res[0].escalationLevelId0.userId;
                if (res[0].escalationLevelId1) {
                    this.ticketCategoryData.escalationDaysOne = res[0].escalationLevelId1.escalationDays;
                    this.ticketCategoryData.ticketManagerIdOne = res[0].escalationLevelId1.ticketManagerId;
                    this.ticketCategoryData.staffTwo = res[0].escalationLevelId1.userId;
                }
                if (res[0].escalationLevelId2) {
                    this.ticketCategoryData.escalationDaysTwo = res[0].escalationLevelId2.escalationDays;
                    this.ticketCategoryData.ticketManagerIdTwo = res[0].escalationLevelId2.ticketManagerId;
                    this.ticketCategoryData.staffThree = res[0].escalationLevelId2.userId;
                }
            });
        }
    }
};
AddTicketCategoryComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddTicketCategoryComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['ticketCategoryForm',] }]
};
AddTicketCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-ticket-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-ticket-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        animations: src_condo_animations__WEBPACK_IMPORTED_MODULE_8__["CondoAnimations"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-ticket-category.component.scss */ "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], Object])
], AddTicketCategoryComponent);



/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9uL2hlbHBkZXNrL2hlbHBkZXNrLXNldHVwL2NvbW1vbi1jYXRlZ29yeS9jb21tb24tY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CommonCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonCategoryComponent", function() { return CommonCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-ticket-category/add-ticket-category.component */ "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");









let CommonCategoryComponent = class CommonCategoryComponent {
    constructor(dialog, sharedService, ticketService, sessionService, injector) {
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.ticketService = ticketService;
        this.sessionService = sessionService;
        this.injector = injector;
        this.commonFilter = "";
        this.isDataLoaded = true;
        this.totalItems = 0;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
    }
    addTicket(mode, categoryId) {
        let data = { type: 'common', mode, categoryId };
        const dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__["AddTicketCategoryComponent"], {
            panelClass: 'material-dialog-medium',
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getCommonCategoryList();
            }
        });
    }
    onCommonCatEdit(detail) {
        let dataRecord = this.commondatagrid.getrowdata(detail.rowId);
        this.addTicket('edit', dataRecord.ticketCategoryId);
    }
    onCommonCatDelete(detail) {
        let dataRecord = this.commondatagrid.getrowdata(detail.rowId);
        this.modalService.showConfirmModal({ id: dataRecord.ticketCategoryId, index: detail.rowId });
    }
    onGlSearchFilter(event) {
        if (event != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = event;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.commondatagrid.showfiltercolumnbackground(false);
            this.commonColumns.forEach(item => {
                if (item.datafield != 'Actions') {
                    this.commondatagrid.addfilter(item.datafield, filtergroup, true);
                }
            });
            this.commondatagrid.applyfilters();
        }
        else {
            this.commondatagrid.clearfilters();
        }
    }
    getCommonCategoryList() {
        this.isDataLoaded = true;
        let params = {
            apartmentId: this.sessionService.apartmentId,
            ticketTypeId: 24,
        };
        this.ticketService.getAllTicketManagerByApartmentId(params).subscribe((res) => {
            if (res.length > 0) {
                this.totalItems = res.length;
                let data = {
                    localdata: res.reverse(),
                    datatype: "array"
                };
                this.commonListData = new jqx.dataAdapter(data);
            }
            this.isDataLoaded = false;
        }, (error) => {
            this.isDataLoaded = false;
            this.sharedService.openSnackBar('Server Error', 'error');
        });
    }
    ngOnInit() {
        this.getCommonCategoryList();
        var cellsrendererCommon = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrendererCommon = (value) => {
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
                datafield: "escalationLevelId0",
                cellsrenderer: (row, column, value) => {
                    let field = this.commonListData.loadedData[row].escalationLevelId0;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 150,
                renderer: columnrendererCommon
            }, {
                text: 'Level-1',
                datafield: 'escalationLevelId1',
                cellsrenderer: (row, column, value) => {
                    let field = this.commonListData.loadedData[row].escalationLevelId1;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 150,
                renderer: columnrendererCommon
            }, {
                text: 'L1 escdays',
                cellsrenderer: (row, column, value) => {
                    let field = this.commonListData.loadedData[row].escalationLevelId1;
                    if (field && field.escalationDays)
                        value = field.escalationDays;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                width: 120,
                renderer: columnrendererCommon
            }, {
                text: 'Level-2',
                datafield: 'escalationLevelId2',
                cellsrenderer: (row, column, value) => {
                    let field = this.commonListData.loadedData[row].escalationLevelId2;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 150,
                renderer: columnrendererCommon
            }, {
                text: 'L2 escdays',
                cellsrenderer: (row, column, value) => {
                    let field = this.commonListData.loadedData[row].escalationLevelId2;
                    if (field && field.escalationDays)
                        value = field.escalationDays;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                width: 120,
                renderer: columnrendererCommon
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editCommonCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventCommon(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrendererCommon
            }];
        //Delete Category
        this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null && item.id) {
                let params = {
                    apartmentId: this.sessionService.apartmentId,
                    ticketCategoryId: item.id,
                    deleteBy: this.sessionService.userId
                };
                this.ticketService.deleteTicketManagerByTicketCategoryId(params).subscribe((res) => {
                    if (res.message) {
                        this.sharedService.setUnitListDeleteIndex(null);
                        this.commondatagrid.deleterow(item.index);
                    }
                });
            }
        });
    }
    ngOnDestroy() {
        this.apiSubscribe.unsubscribe();
    }
};
CommonCategoryComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
CommonCategoryComponent.propDecorators = {
    commondatagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['commondatagrid', { static: false },] }],
    onCommonCatEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onCommonCatEdit', ['$event.detail'],] }],
    onCommonCatDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onCommonCatDelete', ['$event.detail'],] }]
};
CommonCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./common-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./common-category.component.scss */ "./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], CommonCategoryComponent);

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


/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: HelpdeskSetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskSetupRoutingModule", function() { return HelpdeskSetupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpdesk-setup.component */ "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.ts");
/* harmony import */ var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auth/guards/auth.guard */ "./src/app/core/auth/guards/auth.guard.ts");
/* harmony import */ var _private_category_private_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./private-category/private-category.component */ "./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.ts");
/* harmony import */ var _common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common-category/common-category.component */ "./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.ts");







const routes = [
    { path: '', component: _helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__["HelpdeskSetupComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'private-category', canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], pathMatch: 'full' },
            { path: 'private-category', component: _private_category_private_category_component__WEBPACK_IMPORTED_MODULE_5__["PrivateCategoryComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'common-category', component: _common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__["CommonCategoryComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: '**', redirectTo: 'private-category', pathMatch: 'full' }
        ]
    },
];
let HelpdeskSetupRoutingModule = class HelpdeskSetupRoutingModule {
};
HelpdeskSetupRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HelpdeskSetupRoutingModule);



/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21tb24vaGVscGRlc2svaGVscGRlc2stc2V0dXAvaGVscGRlc2stc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21tb24vaGVscGRlc2svaGVscGRlc2stc2V0dXAvaGVscGRlc2stc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.ts ***!
  \************************************************************************************/
/*! exports provided: HelpdeskSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskSetupComponent", function() { return HelpdeskSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HelpdeskSetupComponent = class HelpdeskSetupComponent {
    constructor() { }
    ngOnInit() {
        this.navArray = [
            { link: 'private-category', name: 'Private Category' },
            { link: 'common-category', name: 'Common Category' }
        ];
    }
};
HelpdeskSetupComponent.ctorParameters = () => [];
HelpdeskSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-setup.component.scss */ "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HelpdeskSetupComponent);



/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.module.ts ***!
  \*********************************************************************************/
/*! exports provided: HelpdeskSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskSetupModule", function() { return HelpdeskSetupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _helpdesk_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpdesk-setup-routing.module */ "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup-routing.module.ts");
/* harmony import */ var _helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpdesk-setup.component */ "./src/app/modules/common/helpdesk/helpdesk-setup/helpdesk-setup.component.ts");
/* harmony import */ var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-ticket-category/add-ticket-category.component */ "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
/* harmony import */ var _common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common-category/common-category.component */ "./src/app/modules/common/helpdesk/helpdesk-setup/common-category/common-category.component.ts");
/* harmony import */ var _private_category_private_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private-category/private-category.component */ "./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");











let HelpdeskSetupModule = class HelpdeskSetupModule {
};
HelpdeskSetupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskSetupComponent"],
            _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__["AddTicketCategoryComponent"],
            _common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__["CommonCategoryComponent"],
            _private_category_private_category_component__WEBPACK_IMPORTED_MODULE_7__["PrivateCategoryComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_9__["CondoCardModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_10__["SelectModule"],
            _helpdesk_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpdeskSetupRoutingModule"]
        ]
    })
], HelpdeskSetupModule);



/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9uL2hlbHBkZXNrL2hlbHBkZXNrLXNldHVwL3ByaXZhdGUtY2F0ZWdvcnkvcHJpdmF0ZS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PrivateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateCategoryComponent", function() { return PrivateCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-ticket-category/add-ticket-category.component */ "./src/app/modules/common/helpdesk/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");









let PrivateCategoryComponent = class PrivateCategoryComponent {
    constructor(dialog, sharedService, ticketService, injector, sessionService) {
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.ticketService = ticketService;
        this.injector = injector;
        this.sessionService = sessionService;
        this.privateFilter = '';
        this.isDataLoaded = true;
        this.totalItems = 0;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
    }
    addTicket(mode, categoryId) {
        let data = { type: 'private', mode, categoryId };
        const dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__["AddTicketCategoryComponent"], {
            panelClass: 'material-dialog-medium',
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getPrivateCategoryList();
            }
        });
    }
    onPrivateCatEdit(detail) {
        let dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
        this.addTicket('edit', dataRecord.ticketCategoryId);
    }
    onPrivateCatDelete(detail) {
        let dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
        this.modalService.showConfirmModal({ id: dataRecord.ticketCategoryId, index: detail.rowId });
    }
    onGlSearchFilter(event) {
        if (event != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = event;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.privatedatagrid.showfiltercolumnbackground(false);
            this.privateColumns.forEach(item => {
                if (item.datafield != 'Actions') {
                    this.privatedatagrid.addfilter(item.datafield, filtergroup, true);
                }
            });
            this.privatedatagrid.applyfilters();
        }
        else {
            this.privatedatagrid.clearfilters();
        }
    }
    getPrivateCategoryList() {
        this.isDataLoaded = true;
        let params = {
            apartmentId: this.sessionService.apartmentId,
            ticketTypeId: 27,
        };
        this.ticketService.getAllTicketManagerByApartmentId(params).subscribe((res) => {
            if (res.length > 0) {
                this.totalItems = res.length;
                let data = {
                    localdata: res.reverse(),
                    datatype: "array"
                };
                this.privateListData = new jqx.dataAdapter(data);
            }
            this.isDataLoaded = false;
        }, (error) => {
            this.isDataLoaded = false;
            this.sharedService.openSnackBar('Server Error', 'error');
        });
    }
    ngOnInit() {
        this.getPrivateCategoryList();
        var cellsrendererPrivate = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrendererPrivate = (value) => {
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
                datafield: "escalationLevelId0",
                cellsrenderer: (row, column, value) => {
                    let field = this.privateListData.loadedData[row].escalationLevelId0;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 150,
                renderer: columnrendererPrivate
            }, {
                text: 'Level-1',
                datafield: 'escalationLevelId1',
                cellsrenderer: (row, column, value) => {
                    let field = this.privateListData.loadedData[row].escalationLevelId1;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 150,
                renderer: columnrendererPrivate
            }, {
                text: 'L1 escdays',
                cellsrenderer: (row, column, value) => {
                    let field = this.privateListData.loadedData[row].escalationLevelId1;
                    if (field && field.escalationDays)
                        value = field.escalationDays;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                width: 120,
                renderer: columnrendererPrivate
            }, {
                text: 'Level-2',
                datafield: 'escalationLevelId2',
                cellsrenderer: (row, column, value) => {
                    let field = this.privateListData.loadedData[row].escalationLevelId2;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 150,
                renderer: columnrendererPrivate
            }, {
                text: 'L2 escdays',
                cellsrenderer: (row, column, value) => {
                    let field = this.privateListData.loadedData[row].escalationLevelId2;
                    if (field && field.escalationDays)
                        value = field.escalationDays;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                width: 120,
                renderer: columnrendererPrivate
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editPrivateCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventPrivate(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrendererPrivate
            }];
        //Delete Category
        this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null && item.id) {
                let params = {
                    apartmentId: this.sessionService.apartmentId,
                    ticketCategoryId: item.id,
                    deleteBy: this.sessionService.userId
                };
                this.ticketService.deleteTicketManagerByTicketCategoryId(params).subscribe((res) => {
                    if (res.message) {
                        this.sharedService.setUnitListDeleteIndex(null);
                        this.privatedatagrid.deleterow(item.index);
                    }
                });
            }
        });
    }
    ngOnDestroy() {
        this.apiSubscribe.unsubscribe();
    }
};
PrivateCategoryComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }
];
PrivateCategoryComponent.propDecorators = {
    privatedatagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['privatedatagrid', { static: false },] }],
    onPrivateCatEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onPrivateCatEdit', ['$event.detail'],] }],
    onPrivateCatDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onPrivateCatDelete', ['$event.detail'],] }]
};
PrivateCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-private-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./private-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./private-category.component.scss */ "./src/app/modules/common/helpdesk/helpdesk-setup/private-category/private-category.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
], PrivateCategoryComponent);

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


/***/ })

}]);
//# sourceMappingURL=modules-common-helpdesk-helpdesk-setup-helpdesk-setup-module-es2015.js.map