(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-todo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create/todo-create.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create/todo-create.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>todo-create works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-history/todo-history.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-history/todo-history.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>TODO History</h5>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"todoList\" [columns]=\"todoListHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-list/todo-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-list/todo-list.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>TODO List</h5>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"todoList\" [columns]=\"todoListHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-reminder/todo-reminder.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-reminder/todo-reminder.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>TODO Reminder</h5>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"todoList\" [columns]=\"todoListHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>");

/***/ }),

/***/ "./src/app/ams/todo/todo-create/todo-create.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ams/todo/todo-create/todo-create.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8tY3JlYXRlL3RvZG8tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/todo/todo-create/todo-create.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ams/todo/todo-create/todo-create.component.ts ***!
  \***************************************************************/
/*! exports provided: TodoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoCreateComponent", function() { return TodoCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TodoCreateComponent = class TodoCreateComponent {
    constructor() { }
    ngOnInit() {
    }
};
TodoCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-create/todo-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo-create.component.scss */ "./src/app/ams/todo/todo-create/todo-create.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TodoCreateComponent);



/***/ }),

/***/ "./src/app/ams/todo/todo-history/todo-history.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ams/todo/todo-history/todo-history.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8taGlzdG9yeS90b2RvLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/todo/todo-history/todo-history.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ams/todo/todo-history/todo-history.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoHistoryComponent", function() { return TodoHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");



let TodoHistoryComponent = class TodoHistoryComponent {
    constructor() { }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.todoListHeader = [
            {
                text: 'todo id',
                datafield: 'id',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'title',
                datafield: 'title',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'description',
                datafield: 'desc',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'status',
                datafield: 'status',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'category',
                datafield: 'category',
                cellsrenderer: cellsrenderer,
                minwidth: 200,
                renderer: columnrenderer
            }, {
                text: 'due date',
                datafield: 'dueDate',
                cellsrenderer: cellsrenderer,
                minwidth: 200,
                renderer: columnrenderer
            }
        ];
        //  var ticketListData = res.filter(data => {
        //   return data.isActive
        // })
        let localData = [
            {
                id: '101',
                title: 'Association Meeting',
                desc: 'Meenitng on Audit A',
                status: 'Pending',
                category: 'Meeting',
                dueDate: '06/04/2020'
            }, {
                id: '101',
                title: 'Association Meeting',
                desc: 'Meenitng on Audit A',
                status: 'Pending',
                category: 'Meeting',
                dueDate: '06/04/2020'
            }, {
                id: '101',
                title: 'Association Meeting',
                desc: 'Meenitng on Audit A',
                status: 'Pending',
                category: 'Meeting',
                dueDate: '06/04/2020'
            }
        ];
        this.gridSourceData = {
            localdata: localData,
            datatype: "array"
        };
        this.todoList = new jqx.dataAdapter(this.gridSourceData);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], TodoHistoryComponent.prototype, "datagrid", void 0);
TodoHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-history/todo-history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo-history.component.scss */ "./src/app/ams/todo/todo-history/todo-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TodoHistoryComponent);



/***/ }),

/***/ "./src/app/ams/todo/todo-list/todo-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/ams/todo/todo-list/todo-list.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/todo/todo-list/todo-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ams/todo/todo-list/todo-list.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");



let TodoListComponent = class TodoListComponent {
    constructor() { }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.todoListHeader = [
            {
                text: 'todo id',
                datafield: 'id',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'title',
                datafield: 'title',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'description',
                datafield: 'desc',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'status',
                datafield: 'status',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'category',
                datafield: 'category',
                cellsrenderer: cellsrenderer,
                minwidth: 200,
                renderer: columnrenderer
            }, {
                text: 'due date',
                datafield: 'dueDate',
                cellsrenderer: cellsrenderer,
                minwidth: 200,
                renderer: columnrenderer
            }
        ];
        //  var ticketListData = res.filter(data => {
        //   return data.isActive
        // })
        let localData = [
            {
                id: '101',
                title: 'Association Meeting',
                desc: 'Meenitng on Audit A',
                status: 'Pending',
                category: 'Meeting',
                dueDate: '06/04/2020'
            }, {
                id: '101',
                title: 'Association Meeting',
                desc: 'Meenitng on Audit A',
                status: 'Pending',
                category: 'Meeting',
                dueDate: '06/04/2020'
            }, {
                id: '101',
                title: 'Association Meeting',
                desc: 'Meenitng on Audit A',
                status: 'Pending',
                category: 'Meeting',
                dueDate: '06/04/2020'
            }
        ];
        this.gridSourceData = {
            localdata: localData,
            datatype: "array"
        };
        this.todoList = new jqx.dataAdapter(this.gridSourceData);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], TodoListComponent.prototype, "datagrid", void 0);
TodoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-list/todo-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/ams/todo/todo-list/todo-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TodoListComponent);



/***/ }),

/***/ "./src/app/ams/todo/todo-reminder/todo-reminder.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ams/todo/todo-reminder/todo-reminder.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy90b2RvL3RvZG8tcmVtaW5kZXIvdG9kby1yZW1pbmRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/todo/todo-reminder/todo-reminder.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ams/todo/todo-reminder/todo-reminder.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodoReminderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoReminderComponent", function() { return TodoReminderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");



let TodoReminderComponent = class TodoReminderComponent {
    constructor() { }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.todoListHeader = [
            {
                text: 'todo id',
                datafield: 'id',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'title',
                datafield: 'title',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'description',
                datafield: 'desc',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'status',
                datafield: 'status',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'category',
                datafield: 'category',
                cellsrenderer: cellsrenderer,
                minwidth: 200,
                renderer: columnrenderer
            }, {
                text: 'due date',
                datafield: 'dueDate',
                cellsrenderer: cellsrenderer,
                minwidth: 200,
                renderer: columnrenderer
            }
        ];
        //  var ticketListData = res.filter(data => {
        //   return data.isActive
        // })
        let localData = [
            {
                id: '101',
                title: 'Association Meeting',
                desc: 'Meenitng on Audit A',
                status: 'Pending',
                category: 'Meeting',
                dueDate: '06/04/2020'
            }, {
                id: '101',
                title: 'Association Meeting',
                desc: 'Meenitng on Audit A',
                status: 'Pending',
                category: 'Meeting',
                dueDate: '06/04/2020'
            }, {
                id: '101',
                title: 'Association Meeting',
                desc: 'Meenitng on Audit A',
                status: 'Pending',
                category: 'Meeting',
                dueDate: '06/04/2020'
            }
        ];
        this.gridSourceData = {
            localdata: localData,
            datatype: "array"
        };
        this.todoList = new jqx.dataAdapter(this.gridSourceData);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], TodoReminderComponent.prototype, "datagrid", void 0);
TodoReminderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-reminder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo-reminder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/todo/todo-reminder/todo-reminder.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo-reminder.component.scss */ "./src/app/ams/todo/todo-reminder/todo-reminder.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TodoReminderComponent);



/***/ }),

/***/ "./src/app/ams/todo/todo-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ams/todo/todo-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TodoRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRouting", function() { return TodoRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/ams/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-create/todo-create.component */ "./src/app/ams/todo/todo-create/todo-create.component.ts");
/* harmony import */ var _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-reminder/todo-reminder.component */ "./src/app/ams/todo/todo-reminder/todo-reminder.component.ts");
/* harmony import */ var _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-history/todo-history.component */ "./src/app/ams/todo/todo-history/todo-history.component.ts");







const routes = [
    { path: '', redirectTo: 'todo-creation', pathMatch: 'full' },
    { path: 'todo-creation', component: _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_4__["TodoCreateComponent"] },
    { path: 'todo-list', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"] },
    { path: 'todo-reminder', component: _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__["TodoReminderComponent"] },
    { path: 'todo-history', component: _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__["TodoHistoryComponent"] },
    { path: '**', redirectTo: 'todo-creation', pathMatch: 'full' }
];
let TodoRouting = class TodoRouting {
};
TodoRouting = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TodoRouting);



/***/ }),

/***/ "./src/app/ams/todo/todo.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ams/todo/todo.module.ts ***!
  \*****************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-create/todo-create.component */ "./src/app/ams/todo/todo-create/todo-create.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/ams/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-reminder/todo-reminder.component */ "./src/app/ams/todo/todo-reminder/todo-reminder.component.ts");
/* harmony import */ var _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-history/todo-history.component */ "./src/app/ams/todo/todo-history/todo-history.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo-routing.module */ "./src/app/ams/todo/todo-routing.module.ts");









let TodoModule = class TodoModule {
};
TodoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_3__["TodoCreateComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"], _todo_reminder_todo_reminder_component__WEBPACK_IMPORTED_MODULE_5__["TodoReminderComponent"], _todo_history_todo_history_component__WEBPACK_IMPORTED_MODULE_6__["TodoHistoryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _todo_routing_module__WEBPACK_IMPORTED_MODULE_8__["TodoRouting"]
        ]
    })
], TodoModule);



/***/ })

}]);
//# sourceMappingURL=todo-todo-module-es2015.js.map