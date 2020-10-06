(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-ams-unit-users-unit-users-report-unit-users-report-module~src-app-modules-ams-unit-u~d0e142e4"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-data/unit-users-report-data.component.html":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-data/unit-users-report-data.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsUnitUsersUnitUsersReportUnitUsersReportDataUnitUsersReportDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"user-report-data-wrapper\">\n\n    \t<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\" #matDrawer>\n                <mat-drawer class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 p-0\" #filter mode=\"over\" position=\"end\">\n                    <div class=\"helpdesk-filter-drawer p-5\">\n                        <div class=\"title row\">\n                            <h4> Filter By </h4>\n                            <div class=\"ml-auto\">\n                                <button mat-icon-button (click)=\"goBack()\">\n                                    <mat-icon [svgIcon]=\"'close'\"></mat-icon>\n                                </button>\n                            </div>\n                        </div>\n                        <condo-card>\n                            <div CondoCardHeader>\n                \n                                <form>\n                \n                \n                                    <div class=\"row\">\n                \n                                        <div class=\"col-sm-12\">\n                                                <condo-select labelText=\"Tower No\" fieldPlaceholder=\"Select Tower\" [fieldRequired]=\"'required'\" [fieldList]=\"unitBlocksData\"\n                                         fieldValue=\"apartmentBlockNumber\" [fieldModel]=\"blockId\" fieldId=\"apartmentBlockId\" (fieldParams)=\"getSelectedBlock($event)\"></condo-select>\n                                        \n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                                <div class=\"input-box\">\n                                                    <label>Start Date</label>\n                                                    <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Date\" [(ngModel)]=\"start_date\">\n                                                    <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                                    <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                                            <mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n                                                        </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12\">\n                                                <div class=\"input-box\">\n                                                    <label>End Date</label>\n                                                    <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"Date\" [(ngModel)]=\"end_date\">\n                                                    <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                                    <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                                            <mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n                                                        </div>\n                                                </div>\n                                            </div>\n                                       \n                                    </div>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-12\">\n                                                    <div class=\"text-right mt-4\">\n                                                            <button mat-flat-button [color]=\"'primary'\" (click)=\"filterApply()\">Apply</button>\n                                                            <button mat-button (click)=\"clearFilter()\">Cancel</button>\n                                                        </div>\n                                                \n                                            </div>\n                                        \n                                    </div>\n                \n                                </form>\n                            </div>\n                        </condo-card>\n                    \n                    </div>\n                </mat-drawer>\n                <mat-drawer-content>\n\t<div class=\"main\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\t<condo-card *ngIf=\"isDataLoaded && (isListOfResidents() || isListOfApprovedUsers())\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{pageName}}</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto my-auto\">\n                        <app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3 my-auto ml-3\">\n                            <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                        </div>\n                        <div class=\"mr-3 my-auto ml-3\">\n                            <button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n                            </button>\n                            <button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n                                    <mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n                                  </button>\n                        </div>\n             \n\t\t\t\t<!-- <div class=\"mr-3\">\n\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t</select>\n\t\t\t\t</div> -->\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n\n\t<!-- De Activated Users -->\n\t<condo-card *ngIf=\"isDataLoaded && isListOfDeactivatedUsers()\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{pageName}}</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto my-auto\">\n                        <app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3 my-auto ml-3\">\n                            <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                        </div>\n                        <div class=\"mr-3 my-auto ml-3\">\n                            <button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n                            </button>\n                            <button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n                                    <mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n                                  </button>\n                        </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n\n\n\t<!-- vehicle info -->\n\t<condo-card *ngIf=\"isDataLoaded && isListOfResidentsVehicleInfo()\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{pageName}}</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto my-auto\">\n                        <app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3 my-auto ml-3\">\n                            <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                        </div>\n                        <div class=\"mr-3 my-auto ml-3\">\n                            <button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n                            </button>\n                            <button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n                                    <mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n                                  </button>\n                        </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n\n\t<!-- Rental info -->\n\t<condo-card *ngIf=\"isDataLoaded && isListOfExpiringRental()\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{pageName}}</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto my-auto\">\n                        <app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3 my-auto ml-3\">\n                            <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                        </div>\n                        <div class=\"mr-3 my-auto ml-3\">\n                            <button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n                            </button>\n                            <button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n                                    <mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n                                  </button>\n                        </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n\n\t<!-- Pets info -->\n\t<condo-card *ngIf=\"isDataLoaded && isListOfUsersWithPets()\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{pageName}}</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto my-auto\">\n                        <app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3 my-auto ml-3\">\n                            <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                        </div>\n                        <div class=\"mr-3 my-auto ml-3\">\n                            <button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n                            </button>\n                            <button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n                                    <mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n                                  </button>\n                        </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n\t<!-- List of Units -->\n\t<condo-card *ngIf=\"isDataLoaded && isListOfUnits()\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{pageName}}</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto my-auto\">\n                        <app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3 my-auto ml-3\">\n                            <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                        </div>\n                        <div class=\"mr-3 my-auto ml-3\">\n                            <button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n                            </button>\n                            <button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n                                    <mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n                                  </button>\n                        </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n\t<!-- List of Blocks -->\n\t<condo-card *ngIf=\"isDataLoaded && isListOfBlocks()\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{pageName}}</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto my-auto\">\n                        <app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3 my-auto ml-3\">\n                            <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                        </div>\n                        <div class=\"mr-3 my-auto ml-3\">\n                            <button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n                            </button>\n                            <button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n                                    <mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n                                  </button>\n                        </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n\t<!-- List of Tenant -->\n\t<condo-card *ngIf=\"isDataLoaded && isListOfTenants()\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{pageName}}</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto my-auto\">\n                        <app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3 my-auto ml-3\">\n                            <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                        </div>\n                        <div class=\"mr-3 my-auto ml-3\">\n                            <button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n                            </button>\n                            <button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n                                    <mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n                                  </button>\n                        </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n\t<!-- List of Owners -->\n\t<condo-card *ngIf=\"isDataLoaded && isListOfOwners()\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{pageName}}</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto my-auto\">\n                        <app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3 my-auto ml-3\">\n                            <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                        </div>\n                        <div class=\"mr-3 my-auto ml-3\">\n                            <button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n                            </button>\n                            <button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n                                    <mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n                                  </button>\n                        </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n\t<!-- List of Admins -->\n\t<condo-card *ngIf=\"isDataLoaded && isListOfAdmins()\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>{{pageName}}</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto my-auto\">\n                        <app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3 my-auto ml-3\">\n                            <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                        </div>\n                        <div class=\"mr-3 my-auto ml-3\">\n                            <button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n                                <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n                            </button>\n                            <button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n                                    <mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n                                  </button>\n                        </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n</div>\n</mat-drawer-content>\n</mat-drawer-container>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsUnitUsersUnitUsersReportUnitUsersReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"reports-wrapper\">\n    <div class=\"main\">\n  \n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n  \n    <ng-container *ngIf=\"isDataLoaded\">\n  \n      <h5 class=\"mb-4\">Reports</h5>\n  \n      <div class=\"row\">\n\n        <div class=\"col-sm-6 mb-4\" *ngFor=\"let report of reportDataList; let i = index\">\n\t\t\t\t\t\n\t\t\t\t\t\n          <condo-card>\n\n            <div CondoCardHeader>\n              <a class=\"t-no-decor\" href=\"javascript:void(0)\"\n              routerLink=\"reports/{{getReportRedirectPath(report.lookupValueName)}}/{{report.lookupValueID}}\" \n              routerLinkActive=\"active\"\n              [routerLinkActiveOptions] = \"{exact:true}\">\n                <h6 class=\"mb-2\">{{report.lookupValueName}}</h6>\n                <p>{{report.description}}</p>\n              </a>\n            </div>\n\n            <div CondoCardBody>\n              <div class=\"p-4 bg-cool-gray-50\"></div>\n            </div>\n\n          </condo-card>\n\n\n\t\t\t  </div>\n\n      </div>\n  \n    </ng-container>\n  \n  \n  \n    <!-- <div class=\"card\">\n      \n      <div class=\"card-body p-0\" id=\"accordion\">\n        <ul class=\"list-group tabs clear\">\n  \n          <div class=\"tabs-content\" *ngFor=\"let report of unitReportData;let i = index; first as isFirst\">\n            \n            <li class=\"list-group-item\" data-toggle=\"collapse\" attr.data-target=\"#reportData{{report.lookupValueId}}\" aria-expanded=\"true\" attr.aria-controls=\"reportData{{report.lookupValueId}}\"[ngClass]=\"isFirst ? '' : 'collapsed'\"><strong class=\"tc-blue\">{{report.lookupValueName}}</strong></li>\n            <div id=\"reportData{{report.lookupValueId}}\" class=\"collapse\" attr.aria-labelledby=\"reportData{{report.lookupValueId}}\" data-parent=\"#accordion\" [ngClass]=\"isFirst ? 'show' : ''\">\n              <div class=\"details p-0\">\n                <table class=\"table\" [ngClass]=\"isMobileView()\">\n                  <thead>\n                      <tr>\n                        <th scope=\"col\" (click)=\"sortUnitData('blockno')\">Report Name</th>\n                        <th scope=\"col\" (click)=\"sortUnitData('unitno')\">Schedule Report </th>\n                        <th scope=\"col\" (click)=\"sortUnitData('intercom')\">Publish Report</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of report.data\">\n                        <td class=\"name\">{{item.name}}</td>\n                        <td class=\"grey\">{{item.status}}</td>\n                        <td class=\"select\">\n                          <div class=\"form-group\">\n                            <div class=\"form-check float-left\">\n                            <input type=\"checkbox\" class=\"form-check-input\" \n                            id=\"{{item.name}}\" \n                                        name=\"{{item.name}}\"\n                                        [(ngModel)]=\"item.checked\"\n                                        (ngModelChange)=\"getSelectedReports(item)\"\n                            >\n                            <label class=\"form-check-label\" for=\"{{item.name}}\"></label>\n                        </div>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                </table> \n              </div>\n            </div>\n  \n          </div>\n          \n  \n        </ul>\n  \n      </div> \n  \n      <div class=\"card-body p-0 border-top\">\n        <div class=\"button-wrapper\">\n          <a class=\"btn lime-green sf\"\n            [ngClass]=\"!isReportSelected() ? 'disabled' : ''\">\n            <span>Publish Selected reports to notice Board</span>\n            </a>\n            \n        </div>\n      </div>\n  \n    </div>-->\n  \n  </div>\n  </div>\n  ";
      /***/
    },

    /***/
    "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-data/unit-users-report-data.component.scss":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-data/unit-users-report-data.component.scss ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsUnitUsersUnitUsersReportUnitUsersReportDataUnitUsersReportDataComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3VuaXQtdXNlcnMvdW5pdC11c2Vycy1yZXBvcnQvdW5pdC11c2Vycy1yZXBvcnQtZGF0YS91bml0LXVzZXJzLXJlcG9ydC1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-data/unit-users-report-data.component.ts":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-data/unit-users-report-data.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: UnitUsersReportDataComponent */

    /***/
    function srcAppModulesAmsUnitUsersUnitUsersReportUnitUsersReportDataUnitUsersReportDataComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitUsersReportDataComponent", function () {
        return UnitUsersReportDataComponent;
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


      var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/User */
      "./src/app/api/controllers/User.ts");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");

      var UnitUsersReportDataComponent = /*#__PURE__*/function () {
        function UnitUsersReportDataComponent(router, route, userService, apartmentService, lookupService, sharedService, sessionService) {
          _classCallCheck(this, UnitUsersReportDataComponent);

          this.router = router;
          this.route = route;
          this.userService = userService;
          this.apartmentService = apartmentService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.pageName = "";
          this.pageDesp = "";
          this.userReportData = "";
          this.ItemStartIndex = 0;
          this.itemLimit = 10;
          this.unitFieldType = "unitno";
          this.unitOrder = true;
          this.isDataLoaded = false;
          this.reportData = "";
          this.blockId = null;
          this.blockNo = "";
          this.end_date = null;
          this.start_date = null;
        }

        _createClass(UnitUsersReportDataComponent, [{
          key: "onGlSearchFilter",
          value: function onGlSearchFilter(event) {
            var _this = this;

            if (event != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = event;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          }
        }, {
          key: "filterApply",
          value: function filterApply() {
            var _this2 = this;

            this.goBack();
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.blockNo;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield == 'blockNo') {
                _this2.datagrid.addfilter(item.datafield, filtergroup, true);
              }

              if (item.datafield == 'blockNo') {
                _this2.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          }
        }, {
          key: "clearFilter",
          value: function clearFilter() {
            this.blockId = null;
            this.start_date = null;
            this.end_date = null;
            this.datagrid.clearfilters();
            this.goBack();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.matDrawer.close();
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'UnitUsersReportData');
          }
        }, {
          key: "getSelectedBlock",
          value: function getSelectedBlock(event) {
            this.blockId = event[0].apartmentBlockId;
            this.blockNo = event[0].apartmentBlockNumber;
          }
        }, {
          key: "getIndexParams",
          value: function getIndexParams(event) {
            this.ItemStartIndex = event.ItemStartIndex;
            this.ItemEndIndex = event.ItemEndIndex; // this.itemLimit = event.itemLimit;
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
          key: "isItemsAvailable",
          value: function isItemsAvailable() {
            return this.totalItems > 0 ? true : false;
          }
        }, {
          key: "isNoItemsAvailable",
          value: function isNoItemsAvailable() {
            return this.totalItems == 0 ? true : false;
          }
        }, {
          key: "isListOfResidents",
          value: function isListOfResidents() {
            return this.pageName == "List of Residents";
          }
        }, {
          key: "isListOfApprovedUsers",
          value: function isListOfApprovedUsers() {
            return this.pageName == "List of Approved Users";
          }
        }, {
          key: "isListOfDeactivatedUsers",
          value: function isListOfDeactivatedUsers() {
            return this.pageName == "List of De-activated Users";
          }
        }, {
          key: "isListOfResidentsVehicleInfo",
          value: function isListOfResidentsVehicleInfo() {
            return this.pageName == "List of Residents Vehicle Info";
          }
        }, {
          key: "isListOfExpiringRental",
          value: function isListOfExpiringRental() {
            return this.pageName == "List of Expiring Rental  Lease Agreements";
          }
        }, {
          key: "isListOfUsersWithPets",
          value: function isListOfUsersWithPets() {
            return this.pageName == "List of Users with Pets";
          }
        }, {
          key: "isListOfUnits",
          value: function isListOfUnits() {
            return this.pageName == "List of Units";
          }
        }, {
          key: "isListOfBlocks",
          value: function isListOfBlocks() {
            return this.pageName == "List of Blocks";
          }
        }, {
          key: "isListOfOwners",
          value: function isListOfOwners() {
            return this.pageName == "List of Owners";
          }
        }, {
          key: "isListOfTenants",
          value: function isListOfTenants() {
            return this.pageName == "List of Tenants";
          }
        }, {
          key: "isListOfAdmins",
          value: function isListOfAdmins() {
            return this.pageName == "List of Admins";
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
          }
        }, {
          key: "getBlockDetails",
          value: function getBlockDetails() {
            var _this3 = this;

            //jqx column generating
            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.isDataLoaded = false;
            var details = {
              ApartmentID: parseInt(localStorage.getItem('apartmentId')),
              ApartmentBlockID: this.blockId
            };

            if (this.isListOfResidents()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'User Type',
                datafield: 'userTypeName',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'mobile',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Model',
                datafield: 'vehicleModel',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Number',
                datafiled: 'vehicleNumber',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportUnitUserResidentsbyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this3.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this3.isDataLoaded = true;

                _this3.showItems();
              });
            } else if (this.isListOfApprovedUsers()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'User Type',
                datafield: 'userTypeName',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'mobile',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Model',
                datafield: 'vehicleModel',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Number',
                datafiled: 'vehicleNumber',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportApprovedUnitUserbyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this3.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this3.isDataLoaded = true;

                _this3.showItems();
              });
            } else if (this.isListOfDeactivatedUsers()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'User Type',
                datafield: 'userTypeName',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'mobile',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportDeActivatedUnitUserbyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this3.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this3.isDataLoaded = true;

                _this3.showItems();
              });
            } else if (this.isListOfResidentsVehicleInfo()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Number',
                datafield: 'vehicleNumber',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Model',
                datafield: 'vehicleModel',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'mobile',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportUnitUserResidentsVehicleInfobyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this3.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this3.isDataLoaded = true;

                _this3.showItems();
              });
            } else if (this.isListOfExpiringRental()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 170,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Start Date',
                datafield: 'agreementStartDate',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'End Date',
                datafield: 'agreementEndDate',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Rental Lease',
                datafield: 'rentalorLease',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportExpiredRentLeaseAgreemtbyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this3.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this3.isDataLoaded = true;

                _this3.showItems();
              });
            } else if (this.isListOfUsersWithPets()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Pet Name',
                datafield: 'petName',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Last Vaccination Date',
                datafield: 'lastVaccinationDate',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'mobile',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportUnitUserPetInfobyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this3.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this3.isDataLoaded = true;

                _this3.showItems();
              });
            } else if (this.isListOfUnits()) {
              this.columnData = [{
                text: 'User Type',
                datafield: 'unitType',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'apartmentBlockNumber',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'apartmentBlockUnitNumber',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'intercom',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Available Date Date',
                datafield: 'availableDate',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              var params = {
                apartmentId: parseInt(localStorage.getItem('apartmentId'))
              };
              this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this3.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this3.isDataLoaded = true;

                _this3.showItems();
              });
            } else if (this.isListOfBlocks()) {
              this.columnData = [{
                text: 'Block Number',
                datafield: 'apartmentBlockNumber',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Common Area',
                datafield: 'blockCommonArea',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Constructed Area',
                datafield: 'blockConstructedArea',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Description',
                datafield: 'description',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'No Of Units',
                datafield: 'totalNounits',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'No Of Floors',
                datafield: 'totalnofloors',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              var _params = {
                apartmentId: parseInt(localStorage.getItem('apartmentId'))
              };
              this.apartmentService.getApartmentBlockByApartmentId(_params).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this3.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this3.isDataLoaded = true;

                _this3.showItems();
              });
            } else if (this.isListOfTenants()) {
              this.columnData = [{
                text: 'Name',
                datafield: 'userName',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Phone Number',
                datafield: 'phoneNumber',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Gender',
                datafield: 'genderId',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailId',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Date of Birth',
                datafield: 'dob',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              var _params2 = {
                ApartmentID: parseInt(localStorage.getItem('apartmentId')),
                strRoleTypeIds: '2'
              };
              this.userService.getAllUsersByRoleTypes(_params2).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this3.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this3.isDataLoaded = true;

                _this3.showItems();
              });
            } else if (this.isListOfOwners()) {
              this.columnData = [{
                text: 'Name',
                datafield: 'userName',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Phone Number',
                datafield: 'phoneNumber',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Gender',
                datafield: 'genderId',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailId',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Date of Birth',
                datafield: 'dob',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              var _params3 = {
                ApartmentID: parseInt(localStorage.getItem('apartmentId')),
                strRoleTypeIds: '4'
              };
              this.userService.getAllUsersByRoleTypes(_params3).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this3.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this3.isDataLoaded = true;

                _this3.showItems();
              });
            } else if (this.isListOfAdmins()) {
              this.columnData = [{
                text: 'Name',
                datafield: 'userName',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Phone Number',
                datafield: 'phoneNumber',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Gender',
                datafield: 'genderId',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailId',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Date of Birth',
                datafield: 'dob',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              var _params4 = {
                ApartmentID: parseInt(localStorage.getItem('apartmentId')),
                strRoleTypeIds: '1'
              };
              this.userService.getAllUsersByRoleTypes(_params4).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this3.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this3.isDataLoaded = true;

                _this3.showItems();
              });
            }
          }
        }, {
          key: "showItems",
          value: function showItems() {
            this.totalItems = this.userReportDataList.length;

            if (this.totalItems > this.itemLimit) {
              this.ItemEndIndex = this.itemLimit;
            } else {
              this.ItemEndIndex = this.totalItems;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.pageName = this.route.params['value'].name;
            var unitBlockParams = {
              apartmentId: parseInt(localStorage.getItem('apartmentId'))
            };
            this.apartmentService.getApartmentBlockByApartmentId(unitBlockParams).subscribe(function (res) {
              _this4.unitBlocksData = res;
            });
            var params = {
              LookupTypeId: 87
            };
            this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
              var data = res.filter(function (item) {
                return item.lookupValueId == _this4.route.params['value'].id;
              });
              _this4.pageName = data[0].lookupValueName.replace('/', '');
              _this4.pageDesp = data[0].description;
            });
            this.getBlockDetails();
          }
        }]);

        return UnitUsersReportDataComponent;
      }();

      UnitUsersReportDataComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
        }];
      };

      UnitUsersReportDataComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        matDrawer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['matDrawer', {
            "static": true
          }]
        }]
      };
      UnitUsersReportDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-users-report-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./unit-users-report-data.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-data/unit-users-report-data.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./unit-users-report-data.component.scss */
        "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-data/unit-users-report-data.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])], UnitUsersReportDataComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-routing.module.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-routing.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: routes, UnitUsersReportRoutingModule */

    /***/
    function srcAppModulesAmsUnitUsersUnitUsersReportUnitUsersReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitUsersReportRoutingModule", function () {
        return UnitUsersReportRoutingModule;
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


      var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/auth/guards/auth.guard */
      "./src/app/core/auth/guards/auth.guard.ts");
      /* harmony import */


      var _unit_users_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./unit-users-report.component */
      "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.component.ts");
      /* harmony import */


      var _unit_users_report_data_unit_users_report_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./unit-users-report-data/unit-users-report-data.component */
      "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-data/unit-users-report-data.component.ts");

      var routes = [{
        path: '',
        component: _unit_users_report_component__WEBPACK_IMPORTED_MODULE_4__["UnitUsersReportComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'reports/:name/:id',
        component: _unit_users_report_data_unit_users_report_data_component__WEBPACK_IMPORTED_MODULE_5__["UnitUsersReportDataComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }];

      var UnitUsersReportRoutingModule = function UnitUsersReportRoutingModule() {
        _classCallCheck(this, UnitUsersReportRoutingModule);
      };

      UnitUsersReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UnitUsersReportRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsUnitUsersUnitUsersReportUnitUsersReportComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3VuaXQtdXNlcnMvdW5pdC11c2Vycy1yZXBvcnQvdW5pdC11c2Vycy1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: UnitUsersReportComponent */

    /***/
    function srcAppModulesAmsUnitUsersUnitUsersReportUnitUsersReportComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitUsersReportComponent", function () {
        return UnitUsersReportComponent;
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


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");

      var UnitUsersReportComponent = /*#__PURE__*/function () {
        function UnitUsersReportComponent(lookupService, sessionService) {
          _classCallCheck(this, UnitUsersReportComponent);

          this.lookupService = lookupService;
          this.sessionService = sessionService;
          this.isDataLoaded = false;
        }

        _createClass(UnitUsersReportComponent, [{
          key: "formatName",
          value: function formatName(name) {
            return name.replace(/^\s+|\s+$/g, "");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            var details = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 87,
              MenuName: 'UnitUser'
            };
            this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe(function (res) {
              _this5.reportDataList = res;
              _this5.isDataLoaded = true;
            });
          }
        }, {
          key: "getReportRedirectPath",
          value: function getReportRedirectPath(path) {
            return path.replace('/', '');
          }
        }]);

        return UnitUsersReportComponent;
      }();

      UnitUsersReportComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }];
      };

      UnitUsersReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-users-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./unit-users-report.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./unit-users-report.component.scss */
        "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])], UnitUsersReportComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: UnitUsersReportModule */

    /***/
    function srcAppModulesAmsUnitUsersUnitUsersReportUnitUsersReportModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitUsersReportModule", function () {
        return UnitUsersReportModule;
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


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _unit_users_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./unit-users-report-routing.module */
      "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-routing.module.ts");
      /* harmony import */


      var _unit_users_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./unit-users-report.component */
      "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report.component.ts");
      /* harmony import */


      var _unit_users_report_data_unit_users_report_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./unit-users-report-data/unit-users-report-data.component */
      "./src/app/modules/ams/unit-users/unit-users-report/unit-users-report-data/unit-users-report-data.component.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/modules/ui/list/list.module */
      "./src/app/modules/ui/list/list.module.ts");

      var UnitUsersReportModule = function UnitUsersReportModule() {
        _classCallCheck(this, UnitUsersReportModule);
      };

      UnitUsersReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_unit_users_report_component__WEBPACK_IMPORTED_MODULE_7__["UnitUsersReportComponent"], _unit_users_report_data_unit_users_report_data_component__WEBPACK_IMPORTED_MODULE_8__["UnitUsersReportDataComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_unit_users_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["routes"]), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"], _unit_users_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["UnitUsersReportRoutingModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_9__["SelectModule"], src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_10__["ListModule"]],
        bootstrap: [_unit_users_report_component__WEBPACK_IMPORTED_MODULE_7__["UnitUsersReportComponent"]],
        exports: [_unit_users_report_data_unit_users_report_data_component__WEBPACK_IMPORTED_MODULE_8__["UnitUsersReportDataComponent"]]
      })], UnitUsersReportModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modules-ams-unit-users-unit-users-report-unit-users-report-module~src-app-modules-ams-unit-u~d0e142e4-es5.js.map