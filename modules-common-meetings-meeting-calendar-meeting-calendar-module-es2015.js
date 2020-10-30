(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-common-meetings-meeting-calendar-meeting-calendar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"meeting-view-calendar-wrapper\">\n    <div class=\"main\">\n        <app-loader *ngIf=\"!loadingData\"></app-loader>\n        <div class=\"bg-card shadow\" *ngIf=\"loadingData\">\n            <full-calendar #calendar [options]=\"calendarOptions\"></full-calendar>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/modules/common/meetings/meeting-calendar/meeting-calendar-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/common/meetings/meeting-calendar/meeting-calendar-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: MeetingCalendarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingCalendarRoutingModule", function() { return MeetingCalendarRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _meeting_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meeting-calendar.component */ "./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.component.ts");




const routes = [
    { path: '', component: _meeting_calendar_component__WEBPACK_IMPORTED_MODULE_3__["MeetingCalendarComponent"] }
];
let MeetingCalendarRoutingModule = class MeetingCalendarRoutingModule {
};
MeetingCalendarRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MeetingCalendarRoutingModule);



/***/ }),

/***/ "./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9uL21lZXRpbmdzL21lZXRpbmctY2FsZW5kYXIvbWVldGluZy1jYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MeetingCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingCalendarComponent", function() { return MeetingCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Meeting */ "./src/app/api/controllers/Meeting.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _meeting_setting_meeting_edit_display_meeting_edit_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../meeting-setting/meeting-edit-display/meeting-edit-display.component */ "./src/app/modules/common/meetings/meeting-setting/meeting-edit-display/meeting-edit-display.component.ts");








let MeetingCalendarComponent = class MeetingCalendarComponent {
    constructor(meetingService, sharedService, sessionService, dialog) {
        this.meetingService = meetingService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.dialog = dialog;
        this.loadingData = false;
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            aspectRatio: 2,
            resourceAreaHeaderContent: 'Facility',
            selectable: true,
            select: this.appointmentAdd.bind(this),
            eventClick: this.appointmentClick.bind(this),
            schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives"
        };
    }
    appointmentClick(info) {
        if (this.sessionService.isAdmin()) {
            let data = { id: info.event.extendedProps.meetingId, type: 'edit', from: 'calendar' };
            const dialogRef = this.dialog.open(_meeting_setting_meeting_edit_display_meeting_edit_display_component__WEBPACK_IMPORTED_MODULE_7__["MeetingEditDisplayComponent"], {
                panelClass: 'material-dialog-big',
                height: 'inherit',
                width: 'auto',
                data: data
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.getMeetingList();
                }
            });
        }
    }
    appointmentAdd(event) {
        if (this.sessionService.isAdmin()) {
            let data = { type: 'create', from: 'calendar', event: event };
            const dialogRef = this.dialog.open(_meeting_setting_meeting_edit_display_meeting_edit_display_component__WEBPACK_IMPORTED_MODULE_7__["MeetingEditDisplayComponent"], {
                panelClass: 'material-dialog-big',
                height: 'inherit',
                width: 'auto',
                data: data
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.getMeetingList();
                }
            });
        }
    }
    getMeetingList() {
        let params = {
            apartmentId: this.sessionService.apartmentId
        };
        this.meetingService.getMeetingByApartmentId(params).subscribe((res) => {
            if (res.length > 0) {
                res.forEach((data) => {
                    data.title = data.subject,
                        data.start = `${moment__WEBPACK_IMPORTED_MODULE_5__(data.meetingDate).format('YYYY-MM-DD')} ${data.fromTime}`;
                    data.end = `${moment__WEBPACK_IMPORTED_MODULE_5__(data.meetingDate).format('YYYY-MM-DD')} ${data.toTime}`;
                    data.color = 'red';
                });
                this.calendarOptions.events = res;
            }
            this.loadingData = true;
        });
    }
    ngOnInit() {
        this.sharedService.timezonecast.subscribe(timeZone => this.timeZone = timeZone);
        this.getMeetingList();
    }
};
MeetingCalendarComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_4__["MeetingService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
MeetingCalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meeting-calendar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./meeting-calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./meeting-calendar.component.scss */ "./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Meeting__WEBPACK_IMPORTED_MODULE_4__["MeetingService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
], MeetingCalendarComponent);



/***/ }),

/***/ "./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MeetingCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingCalendarModule", function() { return MeetingCalendarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _meeting_calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meeting-calendar-routing.module */ "./src/app/modules/common/meetings/meeting-calendar/meeting-calendar-routing.module.ts");
/* harmony import */ var _meeting_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meeting-calendar.component */ "./src/app/modules/common/meetings/meeting-calendar/meeting-calendar.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let MeetingCalendarModule = class MeetingCalendarModule {
};
MeetingCalendarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_meeting_calendar_component__WEBPACK_IMPORTED_MODULE_4__["MeetingCalendarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _meeting_calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__["MeetingCalendarRoutingModule"]
        ]
    })
], MeetingCalendarModule);



/***/ })

}]);
//# sourceMappingURL=modules-common-meetings-meeting-calendar-meeting-calendar-module-es2015.js.map