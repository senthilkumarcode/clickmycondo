(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-ams-assets-assets-module~modules-ams-dashboard-dashboard-module~modules-ams-expense-~76077b41"],{

/***/ "./node_modules/@busacca/ng-pick-datetime/__ivy_ngcc__/fesm2015/busacca-ng-pick-datetime.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@busacca/ng-pick-datetime/__ivy_ngcc__/fesm2015/busacca-ng-pick-datetime.js ***!
  \**************************************************************************************************/
/*! exports provided: DateTimeAdapter, MomentDateTimeAdapter, MomentDateTimeModule, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE, OWL_DATE_TIME_LOCALE_PROVIDER, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS, OwlCalendarComponent, OwlDateTimeComponent, OwlDateTimeInlineComponent, OwlDateTimeInputDirective, OwlDateTimeIntl, OwlDateTimeModule, OwlDateTimeTriggerDirective, OwlMomentDateTimeModule, OwlMonthViewComponent, OwlMultiYearViewComponent, OwlNativeDateTimeModule, OwlTimerComponent, OwlYearViewComponent, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeAdapter", function() { return DateTimeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateTimeAdapter", function() { return MomentDateTimeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateTimeModule", function() { return MomentDateTimeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_FORMATS", function() { return OWL_DATE_TIME_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE", function() { return OWL_DATE_TIME_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_DATE_TIME_LOCALE_PROVIDER", function() { return OWL_DATE_TIME_LOCALE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS", function() { return OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlCalendarComponent", function() { return OwlCalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeComponent", function() { return OwlDateTimeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeInlineComponent", function() { return OwlDateTimeInlineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeInputDirective", function() { return OwlDateTimeInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeIntl", function() { return OwlDateTimeIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeModule", function() { return OwlDateTimeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlDateTimeTriggerDirective", function() { return OwlDateTimeTriggerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlMomentDateTimeModule", function() { return OwlMomentDateTimeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlMonthViewComponent", function() { return OwlMonthViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlMultiYearViewComponent", function() { return OwlMultiYearViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlNativeDateTimeModule", function() { return OwlNativeDateTimeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlTimerComponent", function() { return OwlTimerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlYearViewComponent", function() { return OwlYearViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return OWL_DATE_TIME_LOCALE_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NativeDateTimeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return OWL_DATETIME_VALUE_ACCESSOR$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return OWL_DTPICKER_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return OWL_DATETIME_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return OWL_DATETIME_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return OWL_MOMENT_DATE_TIME_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return OwlDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return OwlDialogContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return OWL_DIALOG_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return OWL_DIALOG_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return OWL_DIALOG_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return OwlDialogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return OwlDialogConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return OwlDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return OwlDateTimeContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return owlDateTimePickerAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return OwlCalendarBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return OwlTimerBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return NumberFixedLenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return NativeDateTimeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return OWL_NATIVE_DATE_TIME_FORMATS; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");















/**
 * date-time-adapter.class
 */
/** InjectionToken for date time picker that can be used to override default locale code. */







function OwlCalendarComponent_owl_date_time_month_view_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-date-time-month-view", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pickerMomentChange", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_pickerMomentChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.handlePickerMomentChange($event); })("selectedChange", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.dateSelected($event); })("userSelection", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_userSelection_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.userSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerMoment", ctx_r0.pickerMoment)("firstDayOfWeek", ctx_r0.firstDayOfWeek)("selected", ctx_r0.selected)("selecteds", ctx_r0.selecteds)("selectMode", ctx_r0.selectMode)("minDate", ctx_r0.minDate)("maxDate", ctx_r0.maxDate)("dateFilter", ctx_r0.dateFilter)("hideOtherMonths", ctx_r0.hideOtherMonths);
} }
function OwlCalendarComponent_owl_date_time_year_view_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-date-time-year-view", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyboardEnter", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_keyboardEnter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.focusActiveCell(); })("pickerMomentChange", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_pickerMomentChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.handlePickerMomentChange($event); })("monthSelected", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_monthSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.selectMonthInYearView($event); })("change", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.goToDateInView($event, "month"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerMoment", ctx_r1.pickerMoment)("selected", ctx_r1.selected)("selecteds", ctx_r1.selecteds)("selectMode", ctx_r1.selectMode)("minDate", ctx_r1.minDate)("maxDate", ctx_r1.maxDate)("dateFilter", ctx_r1.dateFilter);
} }
function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-date-time-multi-year-view", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyboardEnter", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_keyboardEnter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.focusActiveCell(); })("pickerMomentChange", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_pickerMomentChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.handlePickerMomentChange($event); })("yearSelected", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_yearSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.selectYearInMultiYearView($event); })("change", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.goToDateInView($event, "year"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerMoment", ctx_r2.pickerMoment)("selected", ctx_r2.selected)("selecteds", ctx_r2.selecteds)("selectMode", ctx_r2.selectMode)("minDate", ctx_r2.minDate)("maxDate", ctx_r2.maxDate)("dateFilter", ctx_r2.dateFilter);
} }
function OwlTimerComponent_owl_date_time_timer_box_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-date-time-timer-box", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inputChange", function OwlTimerComponent_owl_date_time_timer_box_2_Template_owl_date_time_timer_box_inputChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.setSecondValue($event); })("valueChange", function OwlTimerComponent_owl_date_time_timer_box_2_Template_owl_date_time_timer_box_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.setSecondValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showDivider", true)("upBtnAriaLabel", ctx_r0.upSecondButtonLabel)("downBtnAriaLabel", ctx_r0.downSecondButtonLabel)("upBtnDisabled", !ctx_r0.upSecondEnabled())("downBtnDisabled", !ctx_r0.downSecondEnabled())("value", ctx_r0.secondValue)("min", 0)("max", 59)("step", ctx_r0.stepSecond)("inputLabel", "Second");
} }
function OwlTimerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlTimerComponent_div_3_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.setMeridiem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.hour12ButtonLabel, " ");
} }
function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-date-time-calendar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pickerMomentChange", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_pickerMomentChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.pickerMoment = $event; })("yearSelected", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_yearSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.picker.selectYear($event); })("monthSelected", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_monthSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.picker.selectMonth($event); })("selectedChange", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.dateSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("firstDayOfWeek", ctx_r0.picker.firstDayOfWeek)("pickerMoment", ctx_r0.pickerMoment)("selected", ctx_r0.picker.selected)("selecteds", ctx_r0.picker.selecteds)("selectMode", ctx_r0.picker.selectMode)("minDate", ctx_r0.picker.minDateTime)("maxDate", ctx_r0.picker.maxDateTime)("dateFilter", ctx_r0.picker.dateTimeFilter)("startView", ctx_r0.picker.startView)("hideOtherMonths", ctx_r0.picker.hideOtherMonths);
} }
function OwlDateTimeContainerComponent_owl_date_time_timer_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-date-time-timer", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function OwlDateTimeContainerComponent_owl_date_time_timer_2_Template_owl_date_time_timer_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.timeSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pickerMoment", ctx_r1.pickerMoment)("minDateTime", ctx_r1.picker.minDateTime)("maxDateTime", ctx_r1.picker.maxDateTime)("showSecondsTimer", ctx_r1.picker.showSecondsTimer)("hour12Timer", ctx_r1.picker.hour12Timer)("stepHour", ctx_r1.picker.stepHour)("stepMinute", ctx_r1.picker.stepMinute)("stepSecond", ctx_r1.picker.stepSecond);
} }
const _c0 = function (a0) { return { "owl-dt-container-info-active": a0 }; };
function OwlDateTimeContainerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlDateTimeContainerComponent_div_3_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.handleClickOnInfoGroup($event, 0); })("keydown", function OwlDateTimeContainerComponent_div_3_Template_div_keydown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.handleKeydownOnInfoGroup($event, _r12, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlDateTimeContainerComponent_div_3_Template_div_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.handleClickOnInfoGroup($event, 1); })("keydown", function OwlDateTimeContainerComponent_div_3_Template_div_keydown_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.handleKeydownOnInfoGroup($event, _r11, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabindex", ctx_r2.activeSelectedIndex === 0 ? 0 : 0 - 1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx_r2.activeSelectedIndex === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-checked", ctx_r2.activeSelectedIndex === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.fromLabel, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.fromFormattedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabindex", ctx_r2.activeSelectedIndex === 1 ? 0 : 0 - 1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx_r2.activeSelectedIndex === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-checked", ctx_r2.activeSelectedIndex === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.toLabel, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.toFormattedValue);
} }
function OwlDateTimeContainerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlDateTimeContainerComponent_div_4_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onCancelClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlDateTimeContainerComponent_div_4_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.onSetClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.cancelLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.setLabel, " ");
} }
function OwlDialogContainerComponent_ng_template_0_Template(rf, ctx) { }
const _c1 = ["owl-date-time-calendar-body", ""];
const _c2 = function (a0, a1, a2) { return { "owl-dt-calendar-cell-out": a0, "owl-dt-calendar-cell-today": a1, "owl-dt-calendar-cell-selected": a2 }; };
function OwlCalendarBodyComponent_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlCalendarBodyComponent_tr_0_td_1_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const item_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.selectCell(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const colIndex_r5 = ctx.index;
    const rowIndex_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("owl-dt-calendar-cell ", item_r4.cellClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100 / ctx_r3.numCols, "%")("padding-top", 50 * ctx_r3.cellRatio / ctx_r3.numCols, "%")("padding-bottom", 50 * ctx_r3.cellRatio / ctx_r3.numCols, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-calendar-cell-active", ctx_r3.isActiveCell(rowIndex_r2, colIndex_r5))("owl-dt-calendar-cell-disabled", !item_r4.enabled)("owl-dt-calendar-cell-in-range", ctx_r3.isInRange(item_r4.value))("owl-dt-calendar-cell-range-from", ctx_r3.isRangeFrom(item_r4.value))("owl-dt-calendar-cell-range-to", ctx_r3.isRangeTo(item_r4.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabindex", ctx_r3.isActiveCell(rowIndex_r2, colIndex_r5) ? 0 : 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", item_r4.ariaLabel)("aria-disabled", !item_r4.enabled || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](24, _c2, item_r4.out, item_r4.value === ctx_r3.todayValue, ctx_r3.isSelected(item_r4.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r4.displayValue, " ");
} }
function OwlCalendarBodyComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OwlCalendarBodyComponent_tr_0_td_1_Template, 3, 28, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r1);
} }
function OwlMonthViewComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weekday_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", weekday_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](weekday_r1.short);
} }
function OwlTimerBoxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 10);
} }
const OWL_DATE_TIME_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('OWL_DATE_TIME_LOCALE', {
    providedIn: 'root',
    factory: OWL_DATE_TIME_LOCALE_FACTORY,
});
/** @docs-private */
function OWL_DATE_TIME_LOCALE_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]);
}
/** Provider for OWL_DATE_TIME_LOCALE injection token. */
const OWL_DATE_TIME_LOCALE_PROVIDER = { provide: OWL_DATE_TIME_LOCALE, useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"] };
class DateTimeAdapter {
    constructor() {
        /** A stream that emits when the locale changes. */
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** total milliseconds in a day. */
        this.millisecondsInDay = 86400000;
        /** total milliseconds in a minute. */
        this.milliseondsInMinute = 60000;
    }
    get localeChanges() {
        return this._localeChanges;
    }
    /**
     * Compare two given dates
     * @return {number} -- 1, 0 or -1
     * 1 if the first date is after the second,
     * -1 if the first date is before the second
     * 0 if dates are equal.
     * */
    compare(first, second) {
        if (!this.isValid(first) || !this.isValid(second)) {
            throw Error('JSNativeDate: Cannot compare invalid dates.');
        }
        const dateFirst = this.clone(first);
        const dateSecond = this.clone(second);
        const diff = this.getTime(dateFirst) - this.getTime(dateSecond);
        if (diff < 0) {
            return -1;
        }
        else if (diff > 0) {
            return 1;
        }
        else {
            // Return 0 if diff is 0; return NaN if diff is NaN
            return diff;
        }
    }
    /**
     * Check if two given dates are in the same year
     * @return {number} -- 1, 0 or -1
     * 1 if the first date's year is after the second,
     * -1 if the first date's year is before the second
     * 0 if two given dates are in the same year
     * */
    compareYear(first, second) {
        if (!this.isValid(first) || !this.isValid(second)) {
            throw Error('JSNativeDate: Cannot compare invalid dates.');
        }
        const yearLeft = this.getYear(first);
        const yearRight = this.getYear(second);
        const diff = yearLeft - yearRight;
        if (diff < 0) {
            return -1;
        }
        else if (diff > 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of it's `@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param value The value to be deserialized into a date object.
     * @returns The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    deserialize(value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
        }
        return this.invalid();
    }
    /**
     * Sets the locale used for all dates.
     * @param locale The new locale.
     */
    setLocale(locale) {
        this.locale = locale;
        this._localeChanges.next();
    }
    /**
     * Clamp the given date between min and max dates.
     * @param date The date to clamp.
     * @param min The minimum value to allow. If null or omitted no min is enforced.
     * @param max The maximum value to allow. If null or omitted no max is enforced.
     * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    clampDate(date, min, max) {
        if (min && this.compare(date, min) < 0) {
            return min;
        }
        if (max && this.compare(date, max) > 0) {
            return max;
        }
        return date;
    }
}

/**
 * date-time-format.class
 */
/** InjectionToken for date time picker that can be used to override default format. */
const OWL_DATE_TIME_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('OWL_DATE_TIME_FORMATS');

/**
 * moment-date-time-adapter.class
 */
const moment = moment__WEBPACK_IMPORTED_MODULE_2___default.a ? moment__WEBPACK_IMPORTED_MODULE_2___default.a : moment__WEBPACK_IMPORTED_MODULE_2__;
/** InjectionToken for moment date adapter to configure options. */
const OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS', {
    providedIn: 'root',
    factory: OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY
});
/** @docs-private */
function OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY() {
    return {
        useUtc: false
    };
}
/** Creates an array and fills it with values. */
function range(length, valueFunction) {
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
class MomentDateTimeAdapter extends DateTimeAdapter {
    constructor(owlDateTimeLocale, options) {
        super();
        this.owlDateTimeLocale = owlDateTimeLocale;
        this.options = options;
        this.setLocale(owlDateTimeLocale || moment.locale());
    }
    setLocale(locale) {
        super.setLocale(locale);
        const momentLocaleData = moment.localeData(locale);
        this._localeData = {
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
            dates: range(31, (i) => this.createDate(2017, 0, i + 1).format('D')),
        };
    }
    getYear(date) {
        return this.clone(date).year();
    }
    getMonth(date) {
        return this.clone(date).month();
    }
    getDay(date) {
        return this.clone(date).day();
    }
    getDate(date) {
        return this.clone(date).date();
    }
    getHours(date) {
        return this.clone(date).hours();
    }
    getMinutes(date) {
        return this.clone(date).minutes();
    }
    getSeconds(date) {
        return this.clone(date).seconds();
    }
    getTime(date) {
        return this.clone(date).valueOf();
    }
    getNumDaysInMonth(date) {
        return this.clone(date).daysInMonth();
    }
    differenceInCalendarDays(dateLeft, dateRight) {
        return this.clone(dateLeft).diff(dateRight, 'days');
    }
    getYearName(date) {
        return this.clone(date).format('YYYY');
    }
    getMonthNames(style) {
        return style === 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
    }
    getDayOfWeekNames(style) {
        if (style === 'long') {
            return this._localeData.longDaysOfWeek;
        }
        if (style === 'short') {
            return this._localeData.shortDaysOfWeek;
        }
        return this._localeData.narrowDaysOfWeek;
    }
    getDateNames() {
        return this._localeData.dates;
    }
    toIso8601(date) {
        return this.clone(date).format();
    }
    isEqual(dateLeft, dateRight) {
        if (dateLeft && dateRight) {
            return this.clone(dateLeft).isSame(this.clone(dateRight));
        }
        return dateLeft === dateRight;
    }
    isSameDay(dateLeft, dateRight) {
        if (dateLeft && dateRight) {
            return this.clone(dateLeft).isSame(this.clone(dateRight), 'day');
        }
        return dateLeft === dateRight;
    }
    isValid(date) {
        return this.clone(date).isValid();
    }
    invalid() {
        return moment.invalid();
    }
    isDateInstance(obj) {
        return moment.isMoment(obj);
    }
    addCalendarYears(date, amount) {
        return this.clone(date).add({ years: amount });
    }
    addCalendarMonths(date, amount) {
        return this.clone(date).add({ months: amount });
    }
    addCalendarDays(date, amount) {
        return this.clone(date).add({ days: amount });
    }
    setHours(date, amount) {
        return this.clone(date).hours(amount);
    }
    setMinutes(date, amount) {
        return this.clone(date).minutes(amount);
    }
    setSeconds(date, amount) {
        return this.clone(date).seconds(amount);
    }
    createDate(year, month, date, hours = 0, minutes = 0, seconds = 0) {
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        if (hours < 0 || hours > 23) {
            throw Error(`Invalid hours "${hours}". Hours has to be between 0 and 23.`);
        }
        if (minutes < 0 || minutes > 59) {
            throw Error(`Invalid minutes "${minutes}". Minutes has to between 0 and 59.`);
        }
        if (seconds < 0 || seconds > 59) {
            throw Error(`Invalid seconds "${seconds}". Seconds has to be between 0 and 59.`);
        }
        const result = this.createMoment({ year, month, date, hours, minutes, seconds }).locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    clone(date) {
        return this.createMoment(date).clone().locale(this.locale);
    }
    now() {
        return this.createMoment().locale(this.locale);
    }
    format(date, displayFormat) {
        date = this.clone(date);
        if (!this.isValid(date)) {
            throw Error('MomentDateTimeAdapter: Cannot format invalid date.');
        }
        return date.format(displayFormat);
    }
    parse(value, parseFormat) {
        if (value && typeof value === 'string') {
            return this.createMoment(value, parseFormat, this.locale);
        }
        return value ? this.createMoment(value).locale(this.locale) : null;
    }
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     */
    deserialize(value) {
        let date;
        if (value instanceof Date) {
            date = this.createMoment(value);
        }
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            date = this.createMoment(value, moment.ISO_8601).locale(this.locale);
        }
        if (date && this.isValid(date)) {
            return date;
        }
        return super.deserialize(value);
    }
    /** Creates a Moment instance while respecting the current UTC settings. */
    createMoment(...args) {
        return (this.options && this.options.useUtc) ? moment.utc(...args) : moment(...args);
    }
}
MomentDateTimeAdapter.ɵfac = function MomentDateTimeAdapter_Factory(t) { return new (t || MomentDateTimeAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OWL_DATE_TIME_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS, 8)); };
MomentDateTimeAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MomentDateTimeAdapter, factory: MomentDateTimeAdapter.ɵfac });
MomentDateTimeAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DATE_TIME_LOCALE,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MomentDateTimeAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DATE_TIME_LOCALE]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
            }] }]; }, null); })();

// import { OwlDateTimeFormats } from 'ng-pick-datetime';
const OWL_MOMENT_DATE_TIME_FORMATS = {
    parseInput: 'l LT',
    fullPickerInput: 'l LT',
    datePickerInput: 'l',
    timePickerInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};

/**
 * moment-date-time.module
 */
// import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE_PROVIDER } from 'ng-pick-datetime';
class MomentDateTimeModule {
}
MomentDateTimeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MomentDateTimeModule });
MomentDateTimeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MomentDateTimeModule_Factory(t) { return new (t || MomentDateTimeModule)(); }, providers: [
        {
            provide: DateTimeAdapter,
            useClass: MomentDateTimeAdapter,
            deps: [OWL_DATE_TIME_LOCALE, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
        },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MomentDateTimeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                providers: [
                    {
                        provide: DateTimeAdapter,
                        useClass: MomentDateTimeAdapter,
                        deps: [OWL_DATE_TIME_LOCALE, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
                    },
                ]
            }]
    }], null, null); })();
const ɵ0 = OWL_MOMENT_DATE_TIME_FORMATS;
class OwlMomentDateTimeModule {
}
OwlMomentDateTimeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OwlMomentDateTimeModule });
OwlMomentDateTimeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OwlMomentDateTimeModule_Factory(t) { return new (t || OwlMomentDateTimeModule)(); }, providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: ɵ0 }], imports: [[MomentDateTimeModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OwlMomentDateTimeModule, { imports: [MomentDateTimeModule] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlMomentDateTimeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [MomentDateTimeModule],
                providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: ɵ0 }]
            }]
    }], null, null); })();

/**
 * date-time-picker-trigger.directive
 */
class OwlDateTimeTriggerDirective {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
    }
    get disabled() {
        return this._disabled === undefined ? this.dtPicker.disabled : !!this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    get owlDTTriggerDisabledClass() {
        return this.disabled;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.datepicker) {
            this.watchStateChanges();
        }
    }
    ngAfterContentInit() {
        this.watchStateChanges();
    }
    ngOnDestroy() {
        this.stateChanges.unsubscribe();
    }
    handleClickOnHost(event) {
        if (this.dtPicker) {
            this.dtPicker.open();
            event.stopPropagation();
        }
    }
    watchStateChanges() {
        this.stateChanges.unsubscribe();
        const inputDisabled = this.dtPicker && this.dtPicker.dtInput ?
            this.dtPicker.dtInput.disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
        const pickerDisabled = this.dtPicker ?
            this.dtPicker.disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
        this.stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(pickerDisabled, inputDisabled)
            .subscribe(() => {
            this.changeDetector.markForCheck();
        });
    }
}
OwlDateTimeTriggerDirective.ɵfac = function OwlDateTimeTriggerDirective_Factory(t) { return new (t || OwlDateTimeTriggerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
OwlDateTimeTriggerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: OwlDateTimeTriggerDirective, selectors: [["", "owlDateTimeTrigger", ""]], hostVars: 2, hostBindings: function OwlDateTimeTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlDateTimeTriggerDirective_click_HostBindingHandler($event) { return ctx.handleClickOnHost($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-trigger-disabled", ctx.owlDTTriggerDisabledClass);
    } }, inputs: { disabled: "disabled", dtPicker: ["owlDateTimeTrigger", "dtPicker"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
OwlDateTimeTriggerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
OwlDateTimeTriggerDirective.propDecorators = {
    dtPicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['owlDateTimeTrigger',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    owlDTTriggerDisabledClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-trigger-disabled',] }],
    handleClickOnHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlDateTimeTriggerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[owlDateTimeTrigger]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], owlDTTriggerDisabledClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-trigger-disabled']
        }], handleClickOnHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
        }], dtPicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['owlDateTimeTrigger']
        }] }); })();

/**
 * date-time-picker-intl.service
 */
class OwlDateTimeIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** A label for the up second button (used by screen readers).  */
        this.upSecondLabel = 'Add a second';
        /** A label for the down second button (used by screen readers).  */
        this.downSecondLabel = 'Minus a second';
        /** A label for the up minute button (used by screen readers).  */
        this.upMinuteLabel = 'Add a minute';
        /** A label for the down minute button (used by screen readers).  */
        this.downMinuteLabel = 'Minus a minute';
        /** A label for the up hour button (used by screen readers).  */
        this.upHourLabel = 'Add a hour';
        /** A label for the down hour button (used by screen readers).  */
        this.downHourLabel = 'Minus a hour';
        /** A label for the previous month button (used by screen readers). */
        this.prevMonthLabel = 'Previous month';
        /** A label for the next month button (used by screen readers). */
        this.nextMonthLabel = 'Next month';
        /** A label for the previous year button (used by screen readers). */
        this.prevYearLabel = 'Previous year';
        /** A label for the next year button (used by screen readers). */
        this.nextYearLabel = 'Next year';
        /** A label for the previous multi-year button (used by screen readers). */
        this.prevMultiYearLabel = 'Previous 21 years';
        /** A label for the next multi-year button (used by screen readers). */
        this.nextMultiYearLabel = 'Next 21 years';
        /** A label for the 'switch to month view' button (used by screen readers). */
        this.switchToMonthViewLabel = 'Change to month view';
        /** A label for the 'switch to year view' button (used by screen readers). */
        this.switchToMultiYearViewLabel = 'Choose month and year';
        /** A label for the cancel button */
        this.cancelBtnLabel = 'Cancel';
        /** A label for the set button */
        this.setBtnLabel = 'Set';
        /** A label for the range 'from' in picker info */
        this.rangeFromLabel = 'From';
        /** A label for the range 'to' in picker info */
        this.rangeToLabel = 'To';
        /** A label for the hour12 button (AM) */
        this.hour12AMLabel = 'AM';
        /** A label for the hour12 button (PM) */
        this.hour12PMLabel = 'PM';
    }
}
OwlDateTimeIntl.ɵfac = function OwlDateTimeIntl_Factory(t) { return new (t || OwlDateTimeIntl)(); };
OwlDateTimeIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function OwlDateTimeIntl_Factory() { return new OwlDateTimeIntl(); }, token: OwlDateTimeIntl, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlDateTimeIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * calendar.component
 */
class OwlCalendarComponent {
    constructor(elmRef, pickerIntl, ngZone, cdRef, dateTimeAdapter, dateTimeFormats) {
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.ngZone = ngZone;
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        /**
         * Set the first day of week
         * @default {0} -- 0: Sunday ~ 6: Saturday
         * @type {number}
         * */
        this.firstDayOfWeek = 0;
        this._selecteds = [];
        /**
         * The view that the calendar should start in.
         * @default {'month'}
         * @type {'month' | 'year'}
         * */
        this.startView = 'month';
        /** Emits when the currently picker moment changes. */
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when the currently selected date changes. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when any date is selected. */
        this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         * */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits the selected month. This doesn't imply a change on the selected date
         * */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Date filter for the month and year view
         * @type {Function}
         * */
        this.dateFilterForViews = (date) => {
            return !!date &&
                (!this.dateFilter || this.dateFilter(date)) &&
                (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) &&
                (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0);
        };
        this.intlChangesSub = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */
        this.moveFocusOnNextTick = false;
        this.intlChangesSub = this.pickerIntl.changes.subscribe(() => {
            this.cdRef.markForCheck();
        });
    }
    get minDate() {
        return this._minDate;
    }
    set minDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        value = this.getValidDate(value);
        this._minDate = value ?
            this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value)) : null;
    }
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        value = this.getValidDate(value);
        this._maxDate = value ?
            this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value)) : null;
    }
    get pickerMoment() {
        return this._pickerMoment;
    }
    set pickerMoment(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._selected = this.getValidDate(value);
    }
    get selecteds() {
        return this._selecteds;
    }
    set selecteds(values) {
        this._selecteds = values.map((v) => {
            v = this.dateTimeAdapter.deserialize(v);
            return this.getValidDate(v);
        });
    }
    get periodButtonText() {
        return this.isMonthView ? this.dateTimeAdapter.format(this.pickerMoment, this.dateTimeFormats.monthYearLabel) :
            this.dateTimeAdapter.getYearName(this.pickerMoment);
    }
    get periodButtonLabel() {
        return this.isMonthView ? this.pickerIntl.switchToMultiYearViewLabel :
            this.pickerIntl.switchToMonthViewLabel;
    }
    get prevButtonLabel() {
        if (this._currentView === 'month') {
            return this.pickerIntl.prevMonthLabel;
        }
        else if (this._currentView === 'year') {
            return this.pickerIntl.prevYearLabel;
        }
        else {
            return null;
        }
    }
    get nextButtonLabel() {
        if (this._currentView === 'month') {
            return this.pickerIntl.nextMonthLabel;
        }
        else if (this._currentView === 'year') {
            return this.pickerIntl.nextYearLabel;
        }
        else {
            return null;
        }
    }
    get currentView() {
        return this._currentView;
    }
    set currentView(view) {
        this._currentView = view;
        this.moveFocusOnNextTick = true;
    }
    get isInSingleMode() {
        return this.selectMode === 'single';
    }
    get isInRangeMode() {
        return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
            || this.selectMode === 'rangeTo';
    }
    get showControlArrows() {
        return this._currentView !== 'multi-years';
    }
    get isMonthView() {
        return this._currentView === 'month';
    }
    /**
     * Bind class 'owl-dt-calendar' to host
     * */
    get owlDTCalendarClass() {
        return true;
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this._currentView = this.startView;
    }
    ngAfterViewChecked() {
        if (this.moveFocusOnNextTick) {
            this.moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    }
    ngOnDestroy() {
        this.intlChangesSub.unsubscribe();
    }
    /**
     * Toggle between month view and year view
     * @return {void}
     * */
    toggleViews() {
        this.currentView = this._currentView == 'month' ? 'multi-years' : 'month';
    }
    /**
     * Handles user clicks on the previous button.
     * */
    previousClicked() {
        this.pickerMoment = this.isMonthView ?
            this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1) :
            this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1);
        this.pickerMomentChange.emit(this.pickerMoment);
    }
    /**
     * Handles user clicks on the next button.
     * */
    nextClicked() {
        this.pickerMoment = this.isMonthView ?
            this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1) :
            this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1);
        this.pickerMomentChange.emit(this.pickerMoment);
    }
    dateSelected(date) {
        if (!this.dateFilterForViews(date)) {
            return;
        }
        this.selectedChange.emit(date);
        /*if ((this.isInSingleMode && !this.dateTimeAdapter.isSameDay(date, this.selected)) ||
            this.isInRangeMode) {
            this.selectedChange.emit(date);
        }*/
    }
    /**
     * Change the pickerMoment value and switch to a specific view
     * @param {T} date
     * @param {'month' | 'year' | 'multi-years'} view
     * @return {void}
     * */
    goToDateInView(date, view) {
        this.handlePickerMomentChange(date);
        this.currentView = view;
        return;
    }
    /**
     * Change the pickerMoment value
     * @return {void}
     * */
    handlePickerMomentChange(date) {
        this.pickerMoment = this.dateTimeAdapter.clampDate(date, this.minDate, this.maxDate);
        this.pickerMomentChange.emit(this.pickerMoment);
        return;
    }
    userSelected() {
        this.userSelection.emit();
    }
    /**
     * Whether the previous period button is enabled.
     * @return {boolean}
     * */
    prevButtonEnabled() {
        return !this.minDate || !this.isSameView(this.pickerMoment, this.minDate);
    }
    /**
     * Whether the next period button is enabled.
     * @return {boolean}
     * */
    nextButtonEnabled() {
        return !this.maxDate || !this.isSameView(this.pickerMoment, this.maxDate);
    }
    /**
     * Focus to the host element
     * */
    focusActiveCell() {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(() => {
                this.elmRef.nativeElement.querySelector('.owl-dt-calendar-cell-active').focus();
            });
        });
    }
    selectYearInMultiYearView(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    selectMonthInYearView(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @param {Date} date1
     * @param {Date} date2
     * @return {boolean}
     * */
    isSameView(date1, date2) {
        if (this._currentView === 'month') {
            return !!(date1 && date2 &&
                this.dateTimeAdapter.getYear(date1) === this.dateTimeAdapter.getYear(date2) &&
                this.dateTimeAdapter.getMonth(date1) === this.dateTimeAdapter.getMonth(date2));
        }
        else if (this._currentView === 'year') {
            return !!(date1 && date2 &&
                this.dateTimeAdapter.getYear(date1) === this.dateTimeAdapter.getYear(date2));
        }
        else {
            return false;
        }
    }
    /**
     * Get a valid date object
     * @param {any} obj -- The object to check.
     * @return {Date | null} -- The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDate(obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    }
}
OwlCalendarComponent.ɵfac = function OwlCalendarComponent_Factory(t) { return new (t || OwlCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OwlDateTimeIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateTimeAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OWL_DATE_TIME_FORMATS, 8)); };
OwlCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwlCalendarComponent, selectors: [["owl-date-time-calendar"]], hostVars: 2, hostBindings: function OwlCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-calendar", ctx.owlDTCalendarClass);
    } }, inputs: { firstDayOfWeek: "firstDayOfWeek", startView: "startView", minDate: "minDate", maxDate: "maxDate", pickerMoment: "pickerMoment", selected: "selected", selecteds: "selecteds", dateFilter: "dateFilter", selectMode: "selectMode", hideOtherMonths: "hideOtherMonths" }, outputs: { pickerMomentChange: "pickerMomentChange", selectedChange: "selectedChange", userSelection: "userSelection", yearSelected: "yearSelected", monthSelected: "monthSelected" }, exportAs: ["owlDateTimeCalendar"], decls: 21, vars: 16, consts: [[1, "owl-dt-calendar-control"], ["type", "button", "tabindex", "0", 1, "owl-dt-control", "owl-dt-control-button", "owl-dt-control-arrow-button", 3, "disabled", "click"], ["tabindex", "-1", 1, "owl-dt-control-content", "owl-dt-control-button-content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", "width", "100%", "height", "100%", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"], [1, "owl-dt-calendar-control-content"], ["type", "button", "tabindex", "0", 1, "owl-dt-control", "owl-dt-control-button", "owl-dt-control-period-button", 3, "click"], [1, "owl-dt-control-button-arrow"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "50%", "height", "50%", "viewBox", "0 0 292.362 292.362", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 292.362 292.362"], ["d", "M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\n                                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\n                                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                    c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                    c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                    C197.237,120.447,195.534,115.448,191.75,111.689z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "owl-dt-calendar-main", 3, "ngSwitch"], [3, "pickerMoment", "firstDayOfWeek", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "hideOtherMonths", "pickerMomentChange", "selectedChange", "userSelection", 4, "ngSwitchCase"], [3, "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "keyboardEnter", "pickerMomentChange", "monthSelected", "change", 4, "ngSwitchCase"], [3, "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "keyboardEnter", "pickerMomentChange", "yearSelected", "change", 4, "ngSwitchCase"], [3, "pickerMoment", "firstDayOfWeek", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "hideOtherMonths", "pickerMomentChange", "selectedChange", "userSelection"], [3, "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "keyboardEnter", "pickerMomentChange", "monthSelected", "change"], [3, "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "keyboardEnter", "pickerMomentChange", "yearSelected", "change"]], template: function OwlCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlCalendarComponent_Template_button_click_1_listener() { return ctx.previousClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlCalendarComponent_Template_button_click_6_listener() { return ctx.toggleViews(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlCalendarComponent_Template_button_click_13_listener() { return ctx.nextClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, OwlCalendarComponent_owl_date_time_month_view_18_Template, 1, 9, "owl-date-time-month-view", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, OwlCalendarComponent_owl_date_time_year_view_19_Template, 1, 7, "owl-date-time-year-view", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OwlCalendarComponent_owl_date_time_multi_year_view_20_Template, 1, 7, "owl-date-time-multi-year-view", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.showControlArrows ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.prevButtonEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.periodButtonText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", "rotate(" + (ctx.isMonthView ? 0 : 180) + "deg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.showControlArrows ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.nextButtonEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.currentView);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "multi-years");
    } }, directives: function () { return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], OwlMonthViewComponent, OwlYearViewComponent, OwlMultiYearViewComponent]; }, styles: [""], changeDetection: 0 });
OwlCalendarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: OwlDateTimeIntl },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: DateTimeAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DATE_TIME_FORMATS,] }] }
];
OwlCalendarComponent.propDecorators = {
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    firstDayOfWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pickerMoment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selecteds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hideOtherMonths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pickerMomentChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    owlDTCalendarClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-calendar',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'owl-date-time-calendar',
                exportAs: 'owlDateTimeCalendar',
                template: "<div class=\"owl-dt-calendar-control\">\r\n    <!-- focus when keyboard tab (http://kizu.ru/en/blog/keyboard-only-focus/#x) -->\r\n    <button class=\"owl-dt-control owl-dt-control-button owl-dt-control-arrow-button\"\r\n            type=\"button\" tabindex=\"0\"\r\n            [style.visibility]=\"showControlArrows? 'visible': 'hidden'\"\r\n            [disabled]=\"!prevButtonEnabled()\"\r\n            [attr.aria-label]=\"prevButtonLabel\"\r\n            (click)=\"previousClicked()\">\r\n        <span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">\r\n            <!-- <editor-fold desc=\"SVG Arrow Left\"> -->\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                 version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.738 250.738\"\r\n                 style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\"\r\n                 width=\"100%\" height=\"100%\">\r\n                <path style=\"fill-rule: evenodd; clip-rule: evenodd;\" d=\"M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z\"/>\r\n            </svg>\r\n            <!-- </editor-fold> -->\r\n        </span>\r\n    </button>\r\n    <div class=\"owl-dt-calendar-control-content\">\r\n        <button class=\"owl-dt-control owl-dt-control-button owl-dt-control-period-button\"\r\n                type=\"button\" tabindex=\"0\"\r\n                [attr.aria-label]=\"periodButtonLabel\"\r\n                (click)=\"toggleViews()\">\r\n            <span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">\r\n                {{periodButtonText}}\r\n\r\n                <span class=\"owl-dt-control-button-arrow\"\r\n                      [style.transform]=\"'rotate(' + (isMonthView? 0 : 180) +'deg)'\">\r\n                    <!-- <editor-fold desc=\"SVG Arrow\"> -->\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                         width=\"50%\" height=\"50%\" viewBox=\"0 0 292.362 292.362\" style=\"enable-background:new 0 0 292.362 292.362;\"\r\n                         xml:space=\"preserve\">\r\n                        <g>\r\n                            <path d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\r\n                                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\r\n                                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\"/>\r\n                        </g>\r\n                    </svg>\r\n                    <!-- </editor-fold> -->\r\n                </span>\r\n            </span>\r\n        </button>\r\n    </div>\r\n    <button class=\"owl-dt-control owl-dt-control-button owl-dt-control-arrow-button\"\r\n            type=\"button\" tabindex=\"0\"\r\n            [style.visibility]=\"showControlArrows? 'visible': 'hidden'\"\r\n            [disabled]=\"!nextButtonEnabled()\"\r\n            [attr.aria-label]=\"nextButtonLabel\"\r\n            (click)=\"nextClicked()\">\r\n        <span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">\r\n            <!-- <editor-fold desc=\"SVG Arrow Right\"> -->\r\n        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                 viewBox=\"0 0 250.738 250.738\" style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\">\r\n                <path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\r\n                    c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\r\n                    c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\r\n                    C197.237,120.447,195.534,115.448,191.75,111.689z\"/>\r\n            </svg>\r\n            <!-- </editor-fold> -->\r\n        </span>\r\n    </button>\r\n</div>\r\n<div class=\"owl-dt-calendar-main\" cdkMonitorSubtreeFocus [ngSwitch]=\"currentView\" tabindex=\"-1\">\r\n    <owl-date-time-month-view\r\n            *ngSwitchCase=\"'month'\"\r\n            [pickerMoment]=\"pickerMoment\"\r\n            [firstDayOfWeek]=\"firstDayOfWeek\"\r\n            [selected]=\"selected\"\r\n            [selecteds]=\"selecteds\"\r\n            [selectMode]=\"selectMode\"\r\n            [minDate]=\"minDate\"\r\n            [maxDate]=\"maxDate\"\r\n            [dateFilter]=\"dateFilter\"\r\n            [hideOtherMonths]=\"hideOtherMonths\"\r\n            (pickerMomentChange)=\"handlePickerMomentChange($event)\"\r\n            (selectedChange)=\"dateSelected($event)\"\r\n            (userSelection)=\"userSelected()\"></owl-date-time-month-view>\r\n\r\n    <owl-date-time-year-view\r\n            *ngSwitchCase=\"'year'\"\r\n            [pickerMoment]=\"pickerMoment\"\r\n            [selected]=\"selected\"\r\n            [selecteds]=\"selecteds\"\r\n            [selectMode]=\"selectMode\"\r\n            [minDate]=\"minDate\"\r\n            [maxDate]=\"maxDate\"\r\n            [dateFilter]=\"dateFilter\"\r\n            (keyboardEnter)=\"focusActiveCell()\"\r\n            (pickerMomentChange)=\"handlePickerMomentChange($event)\"\r\n            (monthSelected)=\"selectMonthInYearView($event)\"\r\n            (change)=\"goToDateInView($event, 'month')\"></owl-date-time-year-view>\r\n\r\n    <owl-date-time-multi-year-view\r\n            *ngSwitchCase=\"'multi-years'\"\r\n            [pickerMoment]=\"pickerMoment\"\r\n            [selected]=\"selected\"\r\n            [selecteds]=\"selecteds\"\r\n            [selectMode]=\"selectMode\"\r\n            [minDate]=\"minDate\"\r\n            [maxDate]=\"maxDate\"\r\n            [dateFilter]=\"dateFilter\"\r\n            (keyboardEnter)=\"focusActiveCell()\"\r\n            (pickerMomentChange)=\"handlePickerMomentChange($event)\"\r\n            (yearSelected)=\"selectYearInMultiYearView($event)\"\r\n            (change)=\"goToDateInView($event, 'year')\"></owl-date-time-multi-year-view>\r\n</div>\r\n",
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: OwlDateTimeIntl }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: DateTimeAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DATE_TIME_FORMATS]
            }] }]; }, { firstDayOfWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pickerMomentChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pickerMoment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selecteds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], owlDTCalendarClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-calendar']
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hideOtherMonths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * timer.component
 */
class OwlTimerComponent {
    constructor(ngZone, elmRef, pickerIntl, cdRef, dateTimeAdapter) {
        this.ngZone = ngZone;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.isPM = false; // a flag indicates the current timer moment is in PM or AM
        /**
         * Hours to change per step
         * @default {1}
         * @type {number}
         * */
        this.stepHour = 1;
        /**
         * Minutes to change per step
         * @default {1}
         * @type {number}
         * */
        this.stepMinute = 1;
        /**
         * Seconds to change per step
         * @default {1}
         * @type {number}
         * */
        this.stepSecond = 1;
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get pickerMoment() {
        return this._pickerMoment;
    }
    set pickerMoment(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
    }
    get minDateTime() {
        return this._minDateTime;
    }
    set minDateTime(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._minDateTime = this.getValidDate(value);
    }
    get maxDateTime() {
        return this._maxDateTime;
    }
    set maxDateTime(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._maxDateTime = this.getValidDate(value);
    }
    get hourValue() {
        return this.dateTimeAdapter.getHours(this.pickerMoment);
    }
    /**
     * The value would be displayed in hourBox.
     * We need this because the value displayed in hourBox it not
     * the same as the hourValue when the timer is in hour12Timer mode.
     * */
    get hourBoxValue() {
        let hours = this.hourValue;
        if (!this.hour12Timer) {
            return hours;
        }
        else {
            if (hours === 0) {
                hours = 12;
                this.isPM = false;
            }
            else if (hours > 0 && hours < 12) {
                this.isPM = false;
            }
            else if (hours === 12) {
                this.isPM = true;
            }
            else if (hours > 12 && hours < 24) {
                hours = hours - 12;
                this.isPM = true;
            }
            return hours;
        }
    }
    get minuteValue() {
        return this.dateTimeAdapter.getMinutes(this.pickerMoment);
    }
    get secondValue() {
        return this.dateTimeAdapter.getSeconds(this.pickerMoment);
    }
    get upHourButtonLabel() {
        return this.pickerIntl.upHourLabel;
    }
    get downHourButtonLabel() {
        return this.pickerIntl.downHourLabel;
    }
    get upMinuteButtonLabel() {
        return this.pickerIntl.upMinuteLabel;
    }
    get downMinuteButtonLabel() {
        return this.pickerIntl.downMinuteLabel;
    }
    get upSecondButtonLabel() {
        return this.pickerIntl.upSecondLabel;
    }
    get downSecondButtonLabel() {
        return this.pickerIntl.downSecondLabel;
    }
    get hour12ButtonLabel() {
        return this.isPM ? this.pickerIntl.hour12PMLabel : this.pickerIntl.hour12AMLabel;
    }
    get owlDTTimerClass() {
        return true;
    }
    get owlDTTimeTabIndex() {
        return -1;
    }
    ngOnInit() {
    }
    /**
     * Focus to the host element
     * */
    focus() {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(() => {
                this.elmRef.nativeElement.focus();
            });
        });
    }
    /**
     * Set the hour value via typing into timer box input
     * We need this to handle the hour value when the timer is in hour12 mode
     * */
    setHourValueViaInput(hours) {
        if (this.hour12Timer && this.isPM && hours >= 1 && hours <= 11) {
            hours = hours + 12;
        }
        else if (this.hour12Timer && !this.isPM && hours === 12) {
            hours = 0;
        }
        this.setHourValue(hours);
    }
    setHourValue(hours) {
        const m = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    }
    setMinuteValue(minutes) {
        const m = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    }
    setSecondValue(seconds) {
        const m = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    }
    setMeridiem(event) {
        this.isPM = !this.isPM;
        let hours = this.hourValue;
        if (this.isPM) {
            hours = hours + 12;
        }
        else {
            hours = hours - 12;
        }
        if (hours >= 0 && hours <= 23) {
            this.setHourValue(hours);
        }
        this.cdRef.markForCheck();
        event.preventDefault();
    }
    /**
     * Check if the up hour button is enabled
     * @return {boolean}
     * */
    upHourEnabled() {
        return !this.maxDateTime || this.compareHours(this.stepHour, this.maxDateTime) < 1;
    }
    /**
     * Check if the down hour button is enabled
     * @return {boolean}
     * */
    downHourEnabled() {
        return !this.minDateTime || this.compareHours(-this.stepHour, this.minDateTime) > -1;
    }
    /**
     * Check if the up minute button is enabled
     * @return {boolean}
     * */
    upMinuteEnabled() {
        return !this.maxDateTime || this.compareMinutes(this.stepMinute, this.maxDateTime) < 1;
    }
    /**
     * Check if the down minute button is enabled
     * @return {boolean}
     * */
    downMinuteEnabled() {
        return !this.minDateTime || this.compareMinutes(-this.stepMinute, this.minDateTime) > -1;
    }
    /**
     * Check if the up second button is enabled
     * @return {boolean}
     * */
    upSecondEnabled() {
        return !this.maxDateTime || this.compareSeconds(this.stepSecond, this.maxDateTime) < 1;
    }
    /**
     * Check if the down second button is enabled
     * @return {boolean}
     * */
    downSecondEnabled() {
        return !this.minDateTime || this.compareSeconds(-this.stepSecond, this.minDateTime) > -1;
    }
    /**
     * PickerMoment's hour value +/- certain amount and compare it to the give date
     * @param {number} amount
     * @param {Date} comparedDate
     * @return {number}
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    compareHours(amount, comparedDate) {
        const hours = this.dateTimeAdapter.getHours(this.pickerMoment) + amount;
        const result = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        return this.dateTimeAdapter.compare(result, comparedDate);
    }
    /**
     * PickerMoment's minute value +/- certain amount and compare it to the give date
     * @param {number} amount
     * @param {Date} comparedDate
     * @return {number}
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    compareMinutes(amount, comparedDate) {
        const minutes = this.dateTimeAdapter.getMinutes(this.pickerMoment) + amount;
        const result = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        return this.dateTimeAdapter.compare(result, comparedDate);
    }
    /**
     * PickerMoment's second value +/- certain amount and compare it to the give date
     * @param {number} amount
     * @param {Date} comparedDate
     * @return {number}
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    compareSeconds(amount, comparedDate) {
        const seconds = this.dateTimeAdapter.getSeconds(this.pickerMoment) + amount;
        const result = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        return this.dateTimeAdapter.compare(result, comparedDate);
    }
    /**
     * Get a valid date object
     * @param {any} obj -- The object to check.
     * @return {Date | null} -- The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDate(obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    }
}
OwlTimerComponent.ɵfac = function OwlTimerComponent_Factory(t) { return new (t || OwlTimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OwlDateTimeIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateTimeAdapter, 8)); };
OwlTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwlTimerComponent, selectors: [["owl-date-time-timer"]], hostVars: 3, hostBindings: function OwlTimerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.owlDTTimeTabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-timer", ctx.owlDTTimerClass);
    } }, inputs: { stepHour: "stepHour", stepMinute: "stepMinute", stepSecond: "stepSecond", pickerMoment: "pickerMoment", minDateTime: "minDateTime", maxDateTime: "maxDateTime", showSecondsTimer: "showSecondsTimer", hour12Timer: "hour12Timer" }, outputs: { selectedChange: "selectedChange" }, exportAs: ["owlDateTimeTimer"], decls: 4, vars: 22, consts: [[3, "upBtnAriaLabel", "downBtnAriaLabel", "upBtnDisabled", "downBtnDisabled", "boxValue", "value", "min", "max", "step", "inputLabel", "inputChange", "valueChange"], [3, "showDivider", "upBtnAriaLabel", "downBtnAriaLabel", "upBtnDisabled", "downBtnDisabled", "value", "min", "max", "step", "inputLabel", "inputChange", "valueChange"], [3, "showDivider", "upBtnAriaLabel", "downBtnAriaLabel", "upBtnDisabled", "downBtnDisabled", "value", "min", "max", "step", "inputLabel", "inputChange", "valueChange", 4, "ngIf"], ["class", "owl-dt-timer-hour12", 4, "ngIf"], [1, "owl-dt-timer-hour12"], ["type", "button", "tabindex", "0", 1, "owl-dt-control-button", "owl-dt-timer-hour12-box", 3, "click"], ["tabindex", "-1", 1, "owl-dt-control-button-content"]], template: function OwlTimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-date-time-timer-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inputChange", function OwlTimerComponent_Template_owl_date_time_timer_box_inputChange_0_listener($event) { return ctx.setHourValueViaInput($event); })("valueChange", function OwlTimerComponent_Template_owl_date_time_timer_box_valueChange_0_listener($event) { return ctx.setHourValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "owl-date-time-timer-box", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inputChange", function OwlTimerComponent_Template_owl_date_time_timer_box_inputChange_1_listener($event) { return ctx.setMinuteValue($event); })("valueChange", function OwlTimerComponent_Template_owl_date_time_timer_box_valueChange_1_listener($event) { return ctx.setMinuteValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OwlTimerComponent_owl_date_time_timer_box_2_Template, 1, 10, "owl-date-time-timer-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OwlTimerComponent_div_3_Template, 4, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("upBtnAriaLabel", ctx.upHourButtonLabel)("downBtnAriaLabel", ctx.downHourButtonLabel)("upBtnDisabled", !ctx.upHourEnabled())("downBtnDisabled", !ctx.downHourEnabled())("boxValue", ctx.hourBoxValue)("value", ctx.hourValue)("min", 0)("max", 23)("step", ctx.stepHour)("inputLabel", "Hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showDivider", true)("upBtnAriaLabel", ctx.upMinuteButtonLabel)("downBtnAriaLabel", ctx.downMinuteButtonLabel)("upBtnDisabled", !ctx.upMinuteEnabled())("downBtnDisabled", !ctx.downMinuteEnabled())("value", ctx.minuteValue)("min", 0)("max", 59)("step", ctx.stepMinute)("inputLabel", "Minute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSecondsTimer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hour12Timer);
    } }, directives: function () { return [OwlTimerBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]]; }, styles: [""], changeDetection: 0 });
OwlTimerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: OwlDateTimeIntl },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: DateTimeAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
OwlTimerComponent.propDecorators = {
    pickerMoment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    minDateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxDateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showSecondsTimer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hour12Timer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stepHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stepMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stepSecond: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    owlDTTimerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-timer',] }],
    owlDTTimeTabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.tabindex',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlTimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                exportAs: 'owlDateTimeTimer',
                selector: 'owl-date-time-timer',
                template: "<owl-date-time-timer-box\r\n        [upBtnAriaLabel]=\"upHourButtonLabel\"\r\n        [downBtnAriaLabel]=\"downHourButtonLabel\"\r\n        [upBtnDisabled]=\"!upHourEnabled()\"\r\n        [downBtnDisabled]=\"!downHourEnabled()\"\r\n        [boxValue]=\"hourBoxValue\"\r\n        [value]=\"hourValue\" [min]=\"0\" [max]=\"23\"\r\n        [step]=\"stepHour\" [inputLabel]=\"'Hour'\"\r\n        (inputChange)=\"setHourValueViaInput($event)\"\r\n        (valueChange)=\"setHourValue($event)\"></owl-date-time-timer-box>\r\n<owl-date-time-timer-box\r\n        [showDivider]=\"true\"\r\n        [upBtnAriaLabel]=\"upMinuteButtonLabel\"\r\n        [downBtnAriaLabel]=\"downMinuteButtonLabel\"\r\n        [upBtnDisabled]=\"!upMinuteEnabled()\"\r\n        [downBtnDisabled]=\"!downMinuteEnabled()\"\r\n        [value]=\"minuteValue\" [min]=\"0\" [max]=\"59\"\r\n        [step]=\"stepMinute\" [inputLabel]=\"'Minute'\"\r\n        (inputChange)=\"setMinuteValue($event)\"\r\n        (valueChange)=\"setMinuteValue($event)\"></owl-date-time-timer-box>\r\n<owl-date-time-timer-box\r\n        *ngIf=\"showSecondsTimer\"\r\n        [showDivider]=\"true\"\r\n        [upBtnAriaLabel]=\"upSecondButtonLabel\"\r\n        [downBtnAriaLabel]=\"downSecondButtonLabel\"\r\n        [upBtnDisabled]=\"!upSecondEnabled()\"\r\n        [downBtnDisabled]=\"!downSecondEnabled()\"\r\n        [value]=\"secondValue\" [min]=\"0\" [max]=\"59\"\r\n        [step]=\"stepSecond\" [inputLabel]=\"'Second'\"\r\n        (inputChange)=\"setSecondValue($event)\"\r\n        (valueChange)=\"setSecondValue($event)\"></owl-date-time-timer-box>\r\n\r\n<div *ngIf=\"hour12Timer\" class=\"owl-dt-timer-hour12\">\r\n    <button class=\"owl-dt-control-button owl-dt-timer-hour12-box\"\r\n            type=\"button\" tabindex=\"0\"\r\n            (click)=\"setMeridiem($event)\">\r\n        <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\r\n            {{hour12ButtonLabel}}\r\n        </span>\r\n    </button>\r\n</div>\r\n",
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: OwlDateTimeIntl }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: DateTimeAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { stepHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stepMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stepSecond: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pickerMoment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDateTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDateTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], owlDTTimerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-timer']
        }], owlDTTimeTabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.tabindex']
        }], showSecondsTimer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hour12Timer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * date-time-picker.animations
 */
const owlDateTimePickerAnimations = {
    transformPicker: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('transformPicker', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0, transform: 'scale(1, 0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1, transform: 'scale(1, 1)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["query"])('@fadeInPicker', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animateChild"])(), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
        ])),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('enter => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0 })))
    ]),
    fadeInPicker: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('fadeInPicker', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')),
    ])
};

/**
 * date-time-picker-container.component
 */
class OwlDateTimeContainerComponent {
    constructor(cdRef, elmRef, pickerIntl, dateTimeAdapter) {
        this.cdRef = cdRef;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.dateTimeAdapter = dateTimeAdapter;
        this.activeSelectedIndex = 0; // The current active SelectedIndex in range select mode (0: 'from', 1: 'to')
        /**
         * Stream emits when try to hide picker
         * */
        this.hidePicker$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * Stream emits when try to confirm the selected value
         * */
        this.confirmSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.pickerOpened$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    get hidePickerStream() {
        return this.hidePicker$.asObservable();
    }
    get confirmSelectedStream() {
        return this.confirmSelected$.asObservable();
    }
    get pickerOpenedStream() {
        return this.pickerOpened$.asObservable();
    }
    get pickerMoment() {
        return this._clamPickerMoment;
    }
    set pickerMoment(value) {
        if (value) {
            this._clamPickerMoment = this.dateTimeAdapter.clampDate(value, this.picker.minDateTime, this.picker.maxDateTime);
        }
        this.cdRef.markForCheck();
    }
    get pickerType() {
        return this.picker.pickerType;
    }
    get cancelLabel() {
        return this.pickerIntl.cancelBtnLabel;
    }
    get setLabel() {
        return this.pickerIntl.setBtnLabel;
    }
    /**
     * The range 'from' label
     * */
    get fromLabel() {
        return this.pickerIntl.rangeFromLabel;
    }
    /**
     * The range 'to' label
     * */
    get toLabel() {
        return this.pickerIntl.rangeToLabel;
    }
    /**
     * The range 'from' formatted value
     * */
    get fromFormattedValue() {
        const value = this.picker.selecteds[0];
        return value ? this.dateTimeAdapter.format(value, this.picker.formatString) : '';
    }
    /**
     * The range 'to' formatted value
     * */
    get toFormattedValue() {
        const value = this.picker.selecteds[1];
        return value ? this.dateTimeAdapter.format(value, this.picker.formatString) : '';
    }
    /**
     * Cases in which the control buttons show in the picker
     * 1) picker mode is 'dialog'
     * 2) picker type is NOT 'calendar' and the picker mode is NOT 'inline'
     * */
    get showControlButtons() {
        return this.picker.pickerMode === 'dialog' ||
            (this.picker.pickerType !== 'calendar' && this.picker.pickerMode !== 'inline');
    }
    get containerElm() {
        return this.elmRef.nativeElement;
    }
    get owlDTContainerClass() {
        return true;
    }
    get owlDTPopupContainerClass() {
        return this.picker.pickerMode === 'popup';
    }
    get owlDTDialogContainerClass() {
        return this.picker.pickerMode === 'dialog';
    }
    get owlDTInlineContainerClass() {
        return this.picker.pickerMode === 'inline';
    }
    get owlDTContainerDisabledClass() {
        return this.picker.disabled;
    }
    get owlDTContainerId() {
        return this.picker.id;
    }
    get owlDTContainerAnimation() {
        return this.picker.pickerMode === 'inline' ? '' : 'enter';
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.initPicker();
    }
    ngAfterViewInit() {
        this.focusPicker();
    }
    handleContainerAnimationDone(event) {
        const toState = event.toState;
        if (toState === 'enter') {
            this.pickerOpened$.next();
        }
    }
    dateSelected(date) {
        let result;
        if (this.picker.isInSingleMode) {
            result = this.dateSelectedInSingleMode(date);
            if (result) {
                this.pickerMoment = result;
                this.picker.select(result);
            }
            else {
                // we close the picker when result is null and pickerType is calendar.
                if (this.pickerType === 'calendar') {
                    this.hidePicker$.next(null);
                }
            }
            return;
        }
        if (this.picker.isInRangeMode) {
            result = this.dateSelectedInRangeMode(date);
            if (result) {
                this.pickerMoment = result[this.activeSelectedIndex];
                this.picker.select(result);
            }
        }
    }
    timeSelected(time) {
        this.pickerMoment = this.dateTimeAdapter.clone(time);
        if (!this.picker.dateTimeChecker(this.pickerMoment)) {
            return;
        }
        if (this.picker.isInSingleMode) {
            this.picker.select(this.pickerMoment);
            return;
        }
        if (this.picker.isInRangeMode) {
            const selecteds = [...this.picker.selecteds];
            // check if the 'from' is after 'to' or 'to'is before 'from'
            // In this case, we set both the 'from' and 'to' the same value
            if ((this.activeSelectedIndex === 0 && selecteds[1] && this.dateTimeAdapter.compare(this.pickerMoment, selecteds[1]) === 1) ||
                (this.activeSelectedIndex === 1 && selecteds[0] && this.dateTimeAdapter.compare(this.pickerMoment, selecteds[0]) === -1)) {
                selecteds[0] = this.pickerMoment;
                selecteds[1] = this.pickerMoment;
            }
            else {
                selecteds[this.activeSelectedIndex] = this.pickerMoment;
            }
            this.picker.select(selecteds);
        }
    }
    /**
     * Handle click on cancel button
     * @param {any} event
     * @return {void}
     * */
    onCancelClicked(event) {
        this.hidePicker$.next(null);
        event.preventDefault();
        return;
    }
    /**
     * Handle click on set button
     * @param {any} event
     * @return {void}
     * */
    onSetClicked(event) {
        if (!this.picker.dateTimeChecker(this.pickerMoment)) {
            this.hidePicker$.next(null);
            event.preventDefault();
            return;
        }
        this.confirmSelected$.next(event);
        event.preventDefault();
        return;
    }
    /**
     * Handle click on inform radio group
     * @param {any} event
     * @param {number} index -- the radio's index number
     * */
    handleClickOnInfoGroup(event, index) {
        this.setActiveSelectedIndex(index);
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * Handle click on inform radio group
     * @param {any} event
     * @param {any} next -- the radio's sibling
     * @param {number} index -- the radio's index number
     * */
    handleKeydownOnInfoGroup(event, next, index) {
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["RIGHT_ARROW"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["LEFT_ARROW"]:
                next.focus();
                this.setActiveSelectedIndex(index === 0 ? 1 : 0);
                event.preventDefault();
                event.stopPropagation();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["SPACE"]:
                this.setActiveSelectedIndex(index);
                event.preventDefault();
                event.stopPropagation();
                break;
            default:
                return;
        }
    }
    /**
     * Set the value of activeSelectedIndex
     * @param {number} index
     * */
    setActiveSelectedIndex(index) {
        if (this.picker.selectMode === 'range' &&
            this.activeSelectedIndex !== index) {
            this.activeSelectedIndex = index;
            const selected = this.picker.selecteds[this.activeSelectedIndex];
            if (this.picker.selecteds && selected) {
                this.pickerMoment = this.dateTimeAdapter.clone(selected);
            }
        }
        return;
    }
    initPicker() {
        this.pickerMoment = this.picker.startAt || this.dateTimeAdapter.now();
        this.activeSelectedIndex = this.picker.selectMode === 'rangeTo' ? 1 : 0;
    }
    /**
     * Select calendar date in single mode,
     * it returns null when date is not selected.
     * @param {Date} date
     * @return {Date | null}
     * */
    dateSelectedInSingleMode(date) {
        if (this.dateTimeAdapter.isSameDay(date, this.picker.selected)) {
            return null;
        }
        return this.updateAndCheckCalendarDate(date);
    }
    /**
     * Select dates in range Mode
     * @param {Date} date
     * @return {Date[] | null}
     * */
    dateSelectedInRangeMode(date) {
        let from = this.picker.selecteds[0];
        let to = this.picker.selecteds[1];
        const result = this.updateAndCheckCalendarDate(date);
        if (!result) {
            return null;
        }
        // if the given calendar day is after or equal to 'from',
        // set ths given date as 'to'
        // otherwise, set it as 'from' and set 'to' to null
        if (this.picker.selectMode === 'range') {
            if (this.picker.selecteds && this.picker.selecteds.length && !to && from &&
                this.dateTimeAdapter.differenceInCalendarDays(result, from) >= 0) {
                to = result;
                this.activeSelectedIndex = 1;
            }
            else {
                from = result;
                to = null;
                this.activeSelectedIndex = 0;
            }
        }
        else if (this.picker.selectMode === 'rangeFrom') {
            from = result;
            // if the from value is after the to value, set the to value as null
            if (to && this.dateTimeAdapter.compare(from, to) > 0) {
                to = null;
            }
        }
        else if (this.picker.selectMode === 'rangeTo') {
            to = result;
            // if the from value is after the to value, set the from value as null
            if (from && this.dateTimeAdapter.compare(from, to) > 0) {
                from = null;
            }
        }
        return [from, to];
    }
    /**
     * Update the given calendar date's time and check if it is valid
     * Because the calendar date has 00:00:00 as default time, if the picker type is 'both',
     * we need to update the given calendar date's time before selecting it.
     * if it is valid, return the updated dateTime
     * if it is not valid, return null
     * @param {Date} date
     * @return {Date}
     * */
    updateAndCheckCalendarDate(date) {
        let result;
        // if the picker is 'both', update the calendar date's time value
        if (this.picker.pickerType === 'both') {
            result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(date), this.dateTimeAdapter.getMonth(date), this.dateTimeAdapter.getDate(date), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
            result = this.dateTimeAdapter.clampDate(result, this.picker.minDateTime, this.picker.maxDateTime);
        }
        else {
            result = this.dateTimeAdapter.clone(date);
        }
        // check the updated dateTime
        return this.picker.dateTimeChecker(result) ? result : null;
    }
    /**
     * Focus to the picker
     * */
    focusPicker() {
        if (this.picker.pickerMode === 'inline') {
            return;
        }
        if (this.calendar) {
            this.calendar.focusActiveCell();
        }
        else if (this.timer) {
            this.timer.focus();
        }
    }
}
OwlDateTimeContainerComponent.ɵfac = function OwlDateTimeContainerComponent_Factory(t) { return new (t || OwlDateTimeContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OwlDateTimeIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateTimeAdapter, 8)); };
OwlDateTimeContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwlDateTimeContainerComponent, selectors: [["owl-date-time-container"]], viewQuery: function OwlDateTimeContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](OwlCalendarComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](OwlTimerComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.timer = _t.first);
    } }, hostVars: 12, hostBindings: function OwlDateTimeContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsyntheticHostListener"]("@transformPicker.done", function OwlDateTimeContainerComponent_animation_transformPicker_done_HostBindingHandler($event) { return ctx.handleContainerAnimationDone($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.owlDTContainerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsyntheticHostProperty"]("@transformPicker", ctx.owlDTContainerAnimation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-container", ctx.owlDTContainerClass)("owl-dt-popup-container", ctx.owlDTPopupContainerClass)("owl-dt-dialog-container", ctx.owlDTDialogContainerClass)("owl-dt-inline-container", ctx.owlDTInlineContainerClass)("owl-dt-container-disabled", ctx.owlDTContainerDisabledClass);
    } }, exportAs: ["owlDateTimeContainer"], decls: 5, vars: 6, consts: [[1, "owl-dt-container-inner", 3, "cdkTrapFocus"], ["class", "owl-dt-container-row", 3, "firstDayOfWeek", "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "startView", "hideOtherMonths", "pickerMomentChange", "yearSelected", "monthSelected", "selectedChange", 4, "ngIf"], ["class", "owl-dt-container-row", 3, "pickerMoment", "minDateTime", "maxDateTime", "showSecondsTimer", "hour12Timer", "stepHour", "stepMinute", "stepSecond", "selectedChange", 4, "ngIf"], ["role", "radiogroup", "class", "owl-dt-container-info owl-dt-container-row", 4, "ngIf"], ["class", "owl-dt-container-buttons owl-dt-container-row", 4, "ngIf"], [1, "owl-dt-container-row", 3, "firstDayOfWeek", "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "startView", "hideOtherMonths", "pickerMomentChange", "yearSelected", "monthSelected", "selectedChange"], [1, "owl-dt-container-row", 3, "pickerMoment", "minDateTime", "maxDateTime", "showSecondsTimer", "hour12Timer", "stepHour", "stepMinute", "stepSecond", "selectedChange"], ["role", "radiogroup", 1, "owl-dt-container-info", "owl-dt-container-row"], ["role", "radio", 1, "owl-dt-control", "owl-dt-container-range", "owl-dt-container-from", 3, "tabindex", "ngClass", "click", "keydown"], ["from", ""], ["tabindex", "-1", 1, "owl-dt-control-content", "owl-dt-container-range-content"], [1, "owl-dt-container-info-label"], [1, "owl-dt-container-info-value"], ["role", "radio", 1, "owl-dt-control", "owl-dt-container-range", "owl-dt-container-to", 3, "tabindex", "ngClass", "click", "keydown"], ["to", ""], [1, "owl-dt-container-buttons", "owl-dt-container-row"], ["type", "button", "tabindex", "0", 1, "owl-dt-control", "owl-dt-control-button", "owl-dt-container-control-button", 3, "click"], ["tabindex", "-1", 1, "owl-dt-control-content", "owl-dt-control-button-content"]], template: function OwlDateTimeContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template, 1, 10, "owl-date-time-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OwlDateTimeContainerComponent_owl_date_time_timer_2_Template, 1, 8, "owl-date-time-timer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OwlDateTimeContainerComponent_div_3_Template, 15, 14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OwlDateTimeContainerComponent_div_4_Template, 7, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkTrapFocus", ctx.picker.pickerMode !== "inline")("@fadeInPicker", ctx.picker.pickerMode === "inline" ? "" : "enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pickerType === "both" || ctx.pickerType === "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pickerType === "both" || ctx.pickerType === "timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.picker.isInRangeMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showControlButtons);
    } }, directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["CdkTrapFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], OwlCalendarComponent, OwlTimerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [""], data: { animation: [
            owlDateTimePickerAnimations.transformPicker,
            owlDateTimePickerAnimations.fadeInPicker
        ] }, changeDetection: 0 });
OwlDateTimeContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: OwlDateTimeIntl },
    { type: DateTimeAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
OwlDateTimeContainerComponent.propDecorators = {
    calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [OwlCalendarComponent, { static: true },] }],
    timer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [OwlTimerComponent, { static: true },] }],
    owlDTContainerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-container',] }],
    owlDTPopupContainerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-popup-container',] }],
    owlDTDialogContainerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-dialog-container',] }],
    owlDTInlineContainerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-inline-container',] }],
    owlDTContainerDisabledClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-container-disabled',] }],
    owlDTContainerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.id',] }],
    owlDTContainerAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@transformPicker',] }],
    handleContainerAnimationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['@transformPicker.done', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlDateTimeContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                exportAs: 'owlDateTimeContainer',
                selector: 'owl-date-time-container',
                template: "<div [cdkTrapFocus]=\"picker.pickerMode !== 'inline'\"\r\n     [@fadeInPicker]=\"picker.pickerMode === 'inline'? '' : 'enter'\"\r\n     class=\"owl-dt-container-inner\">\r\n\r\n    <owl-date-time-calendar\r\n            *ngIf=\"pickerType === 'both' || pickerType === 'calendar'\"\r\n            class=\"owl-dt-container-row\"\r\n            [firstDayOfWeek]=\"picker.firstDayOfWeek\"\r\n            [(pickerMoment)]=\"pickerMoment\"\r\n            [selected]=\"picker.selected\"\r\n            [selecteds]=\"picker.selecteds\"\r\n            [selectMode]=\"picker.selectMode\"\r\n            [minDate]=\"picker.minDateTime\"\r\n            [maxDate]=\"picker.maxDateTime\"\r\n            [dateFilter]=\"picker.dateTimeFilter\"\r\n            [startView]=\"picker.startView\"\r\n            [hideOtherMonths]=\"picker.hideOtherMonths\"\r\n            (yearSelected)=\"picker.selectYear($event)\"\r\n            (monthSelected)=\"picker.selectMonth($event)\"\r\n            (selectedChange)=\"dateSelected($event)\"></owl-date-time-calendar>\r\n\r\n    <owl-date-time-timer\r\n            *ngIf=\"pickerType === 'both' || pickerType === 'timer'\"\r\n            class=\"owl-dt-container-row\"\r\n            [pickerMoment]=\"pickerMoment\"\r\n            [minDateTime]=\"picker.minDateTime\"\r\n            [maxDateTime]=\"picker.maxDateTime\"\r\n            [showSecondsTimer]=\"picker.showSecondsTimer\"\r\n            [hour12Timer]=\"picker.hour12Timer\"\r\n            [stepHour]=\"picker.stepHour\"\r\n            [stepMinute]=\"picker.stepMinute\"\r\n            [stepSecond]=\"picker.stepSecond\"\r\n            (selectedChange)=\"timeSelected($event)\"></owl-date-time-timer>\r\n\r\n    <div *ngIf=\"picker.isInRangeMode\"\r\n         role=\"radiogroup\"\r\n         class=\"owl-dt-container-info owl-dt-container-row\">\r\n        <div role=\"radio\" [tabindex]=\"activeSelectedIndex === 0 ? 0 : -1\"\r\n             [attr.aria-checked]=\"activeSelectedIndex === 0\"\r\n             class=\"owl-dt-control owl-dt-container-range owl-dt-container-from\"\r\n             [ngClass]=\"{'owl-dt-container-info-active': activeSelectedIndex === 0}\"\r\n             (click)=\"handleClickOnInfoGroup($event, 0)\"\r\n             (keydown)=\"handleKeydownOnInfoGroup($event, to, 0)\" #from>\r\n            <span class=\"owl-dt-control-content owl-dt-container-range-content\" tabindex=\"-1\">\r\n                <span class=\"owl-dt-container-info-label\">{{fromLabel}}:</span>\r\n                <span class=\"owl-dt-container-info-value\">{{fromFormattedValue}}</span>\r\n            </span>\r\n        </div>\r\n        <div role=\"radio\" [tabindex]=\"activeSelectedIndex === 1 ? 0 : -1\"\r\n             [attr.aria-checked]=\"activeSelectedIndex === 1\"\r\n             class=\"owl-dt-control owl-dt-container-range owl-dt-container-to\"\r\n             [ngClass]=\"{'owl-dt-container-info-active': activeSelectedIndex === 1}\"\r\n             (click)=\"handleClickOnInfoGroup($event, 1)\"\r\n             (keydown)=\"handleKeydownOnInfoGroup($event, from, 1)\" #to>\r\n            <span class=\"owl-dt-control-content owl-dt-container-range-content\" tabindex=\"-1\">\r\n                <span class=\"owl-dt-container-info-label\">{{toLabel}}:</span>\r\n                <span class=\"owl-dt-container-info-value\">{{toFormattedValue}}</span>\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"showControlButtons\" class=\"owl-dt-container-buttons owl-dt-container-row\">\r\n        <button class=\"owl-dt-control owl-dt-control-button owl-dt-container-control-button\"\r\n                type=\"button\" tabindex=\"0\"\r\n                (click)=\"onCancelClicked($event)\">\r\n            <span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">\r\n                {{cancelLabel}}\r\n            </span>\r\n        </button>\r\n        <button class=\"owl-dt-control owl-dt-control-button owl-dt-container-control-button\"\r\n                type=\"button\" tabindex=\"0\"\r\n                (click)=\"onSetClicked($event)\">\r\n            <span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">\r\n                {{setLabel}}\r\n            </span>\r\n        </button>\r\n    </div>\r\n</div>\r\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                animations: [
                    owlDateTimePickerAnimations.transformPicker,
                    owlDateTimePickerAnimations.fadeInPicker
                ],
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: OwlDateTimeIntl }, { type: DateTimeAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { owlDTContainerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-container']
        }], owlDTPopupContainerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-popup-container']
        }], owlDTDialogContainerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-dialog-container']
        }], owlDTInlineContainerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-inline-container']
        }], owlDTContainerDisabledClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-container-disabled']
        }], owlDTContainerId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.id']
        }], owlDTContainerAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['@transformPicker']
        }], handleContainerAnimationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['@transformPicker.done', ['$event']]
        }], calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [OwlCalendarComponent, { static: true }]
        }], timer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [OwlTimerComponent, { static: true }]
        }] }); })();

/**
 * date-time.class
 */
let nextUniqueId = 0;
class OwlDateTime {
    constructor(dateTimeAdapter, dateTimeFormats) {
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        /**
         * Whether to show the second's timer
         * @default false
         * @type {Boolean}
         * */
        this._showSecondsTimer = false;
        /**
         * Whether the timer is in hour12 format
         * @default false
         * @type {boolean}
         * */
        this._hour12Timer = false;
        /**
         * The view that the calendar should start in.
         * @default {'month'}
         * @type {'month' | 'year' | 'multi-years'}
         * */
        this.startView = 'month';
        /**
         * Hours to change per step
         * @default {1}
         * @type {number}
         * */
        this._stepHour = 1;
        /**
         * Minutes to change per step
         * @default {1}
         * @type {number}
         * */
        this._stepMinute = 1;
        /**
         * Seconds to change per step
         * @default {1}
         * @type {number}
         * */
        this._stepSecond = 1;
        /**
         * Set the first day of week
         * @default {0} -- 0: Sunday ~ 6: Saturday
         * @type {number}
         * */
        this._firstDayOfWeek = 0;
        /**
         * Whether to hide dates in other months at the start or end of the current month.
         * @default {false}
         * @type {boolean}
         * */
        this._hideOtherMonths = false;
        /**
         * Date Time Checker to check if the give dateTime is selectable
         * @type {Function}
         * */
        this.dateTimeChecker = (dateTime) => {
            return !!dateTime &&
                (!this.dateTimeFilter || this.dateTimeFilter(dateTime)) &&
                (!this.minDateTime || this.dateTimeAdapter.compare(dateTime, this.minDateTime) >= 0) &&
                (!this.maxDateTime || this.dateTimeAdapter.compare(dateTime, this.maxDateTime) <= 0);
        };
        if (!this.dateTimeAdapter) {
            throw Error(`OwlDateTimePicker: No provider found for DateTimeAdapter. You must import one of the following ` +
                `modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a ` +
                `custom implementation.`);
        }
        if (!this.dateTimeFormats) {
            throw Error(`OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following ` +
                `modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a ` +
                `custom implementation.`);
        }
        this._id = `owl-dt-picker-${nextUniqueId++}`;
    }
    get showSecondsTimer() {
        return this._showSecondsTimer;
    }
    set showSecondsTimer(val) {
        this._showSecondsTimer = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(val);
    }
    get hour12Timer() {
        return this._hour12Timer;
    }
    set hour12Timer(val) {
        this._hour12Timer = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(val);
    }
    get stepHour() {
        return this._stepHour;
    }
    set stepHour(val) {
        this._stepHour = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(val, 1);
    }
    get stepMinute() {
        return this._stepMinute;
    }
    set stepMinute(val) {
        this._stepMinute = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(val, 1);
    }
    get stepSecond() {
        return this._stepSecond;
    }
    set stepSecond(val) {
        this._stepSecond = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(val, 1);
    }
    get firstDayOfWeek() {
        return this._firstDayOfWeek;
    }
    set firstDayOfWeek(value) {
        value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value, 0);
        if (value > 6 || value < 0) {
            this._firstDayOfWeek = 0;
        }
        else {
            this._firstDayOfWeek = value;
        }
    }
    get hideOtherMonths() {
        return this._hideOtherMonths;
    }
    set hideOtherMonths(val) {
        this._hideOtherMonths = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(val);
    }
    get id() {
        return this._id;
    }
    get formatString() {
        return this.pickerType === 'both' ? this.dateTimeFormats.fullPickerInput :
            this.pickerType === 'calendar' ? this.dateTimeFormats.datePickerInput :
                this.dateTimeFormats.timePickerInput;
    }
    get disabled() {
        return false;
    }
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDate(obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    }
}
OwlDateTime.ɵfac = function OwlDateTime_Factory(t) { return new (t || OwlDateTime)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateTimeAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OWL_DATE_TIME_FORMATS, 8)); };
OwlDateTime.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: OwlDateTime, inputs: { startView: "startView", showSecondsTimer: "showSecondsTimer", hour12Timer: "hour12Timer", stepHour: "stepHour", stepMinute: "stepMinute", stepSecond: "stepSecond", firstDayOfWeek: "firstDayOfWeek", hideOtherMonths: "hideOtherMonths" } });
OwlDateTime.ctorParameters = () => [
    { type: DateTimeAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DATE_TIME_FORMATS,] }] }
];
OwlDateTime.propDecorators = {
    showSecondsTimer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hour12Timer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stepHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stepMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stepSecond: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    firstDayOfWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hideOtherMonths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlDateTime, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: DateTimeAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DATE_TIME_FORMATS]
            }] }]; }, { startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showSecondsTimer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hour12Timer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stepHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stepMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stepSecond: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], firstDayOfWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hideOtherMonths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

let uniqueId = 0;
class OwlDialogConfig {
    constructor() {
        /**
         * ID of the element that describes the dialog.
         * @type {string}
         * @default {null}
         * */
        this.ariaDescribedBy = null;
        /**
         * Whether to focus the dialog when the dialog is opened
         * @type {boolean}
         * @default {true}
         * */
        this.autoFocus = true;
        /** Whether the dialog has a backdrop. */
        this.hasBackdrop = true;
        /** Data being injected into the child component. */
        this.data = null;
        /** Whether the user can use escape or clicking outside to close a modal. */
        this.disableClose = false;
        /**
         * The ARIA role of the dialog element.
         * @type {'dialog' | 'alertdialog'}
         * @default {'dialog'}
         * */
        this.role = 'dialog';
        /**
         * Custom class for the pane
         * */
        this.paneClass = '';
        /**
         * Mouse Event
         * */
        this.event = null;
        /**
         * Custom class for the backdrop
         * */
        this.backdropClass = '';
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * */
        this.closeOnNavigation = true;
        /** Width of the dialog. */
        this.width = '';
        /** Height of the dialog. */
        this.height = '';
        /**
         * The max-width of the overlay panel.
         * If a number is provided, pixel units are assumed.
         * */
        this.maxWidth = '85vw';
        /**
         * The scroll strategy when the dialog is open
         * Learn more this from https://material.angular.io/cdk/overlay/overview#scroll-strategies
         * */
        this.scrollStrategy = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["NoopScrollStrategy"]();
        this.id = `owl-dialog-${uniqueId++}`;
    }
}

class OwlDialogRef {
    constructor(overlayRef, container, id, location) {
        this.overlayRef = overlayRef;
        this.container = container;
        this.id = id;
        this._beforeClose$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._afterOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._afterClosed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** Subscription to changes in the user's location. */
        this.locationChanged = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        /** Whether the user is allowed to close the dialog. */
        this.disableClose = this.container.config.disableClose;
        this.container.animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((event) => event.phaseName === 'done' && event.toState === 'enter'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe(() => {
            this._afterOpen$.next();
            this._afterOpen$.complete();
        });
        this.container.animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((event) => event.phaseName === 'done' && event.toState === 'exit'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe(() => {
            this.overlayRef.dispose();
            this.locationChanged.unsubscribe();
            this._afterClosed$.next(this.result);
            this._afterClosed$.complete();
            this.componentInstance = null;
        });
        this.overlayRef.keydownEvents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(event => event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ESCAPE"] && !this.disableClose))
            .subscribe(() => this.close());
        if (location) {
            this.locationChanged = location.subscribe(() => {
                if (this.container.config.closeOnNavigation) {
                    this.close();
                }
            });
        }
    }
    close(dialogResult) {
        this.result = dialogResult;
        this.container.animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((event) => event.phaseName === 'start'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe(() => {
            this._beforeClose$.next(dialogResult);
            this._beforeClose$.complete();
            this.overlayRef.detachBackdrop();
        });
        this.container.startExitAnimation();
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    backdropClick() {
        return this.overlayRef.backdropClick();
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    keydownEvents() {
        return this.overlayRef.keydownEvents();
    }
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */
    updatePosition(position) {
        let strategy = this.getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        this.overlayRef.updatePosition();
        return this;
    }
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */
    updateSize(width = 'auto', height = 'auto') {
        this.getPositionStrategy().width(width).height(height);
        this.overlayRef.updatePosition();
        return this;
    }
    isAnimating() {
        return this.container.isAnimating;
    }
    afterOpen() {
        return this._afterOpen$.asObservable();
    }
    beforeClose() {
        return this._beforeClose$.asObservable();
    }
    afterClosed() {
        return this._afterClosed$.asObservable();
    }
    /** Fetches the position strategy object from the overlay ref. */
    getPositionStrategy() {
        return this.overlayRef.getConfig().positionStrategy;
    }
}

/**
 * dialog-container.component
 */
const zoomFadeIn = { opacity: 0, transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})' };
const zoomFadeInFrom = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})',
    transformOrigin: '{{ ox }} {{ oy }}'
};
class OwlDialogContainerComponent extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["BasePortalOutlet"] {
    constructor(changeDetector, elementRef, focusTrapFactory, document) {
        super();
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
        this.document = document;
        /** ID of the element that should be considered as the dialog's label. */
        this.ariaLabelledBy = null;
        /** Emits when an animation state changes. */
        this.animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isAnimating = false;
        this.state = 'enter';
        // for animation purpose
        this.params = {
            x: '0px',
            y: '0px',
            ox: '50%',
            oy: '50%',
            scale: 0
        };
        // A variable to hold the focused element before the dialog was open.
        // This would help us to refocus back to element when the dialog was closed.
        this.elementFocusedBeforeDialogWasOpened = null;
    }
    get config() {
        return this._config;
    }
    get owlDialogContainerClass() {
        return true;
    }
    get owlDialogContainerTabIndex() {
        return -1;
    }
    get owlDialogContainerId() {
        return this._config.id;
    }
    get owlDialogContainerRole() {
        return this._config.role || null;
    }
    get owlDialogContainerAriaLabelledby() {
        return this.ariaLabelledBy;
    }
    get owlDialogContainerAriaDescribedby() {
        return this._config.ariaDescribedBy || null;
    }
    get owlDialogContainerAnimation() {
        return { value: this.state, params: this.params };
    }
    ngOnInit() {
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachComponentPortal(portal) {
        if (this.portalOutlet.hasAttached()) {
            throw Error('Attempting to attach dialog content after content is already attached');
        }
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachComponentPortal(portal);
    }
    attachTemplatePortal(portal) {
        throw new Error('Method not implemented.');
    }
    setConfig(config) {
        this._config = config;
        if (config.event) {
            this.calculateZoomOrigin(event);
        }
    }
    onAnimationStart(event) {
        this.isAnimating = true;
        this.animationStateChanged.emit(event);
    }
    onAnimationDone(event) {
        if (event.toState === 'enter') {
            this.trapFocus();
        }
        else if (event.toState === 'exit') {
            this.restoreFocus();
        }
        this.animationStateChanged.emit(event);
        this.isAnimating = false;
    }
    startExitAnimation() {
        this.state = 'exit';
        this.changeDetector.markForCheck();
    }
    /**
     * Calculate origin used in the `zoomFadeInFrom()`
     * for animation purpose
     * @param {any} event
     * @return {void}
     */
    calculateZoomOrigin(event) {
        if (!event) {
            return;
        }
        const clientX = event.clientX;
        const clientY = event.clientY;
        const wh = window.innerWidth / 2;
        const hh = window.innerHeight / 2;
        const x = clientX - wh;
        const y = clientY - hh;
        const ox = clientX / window.innerWidth;
        const oy = clientY / window.innerHeight;
        this.params.x = `${x}px`;
        this.params.y = `${y}px`;
        this.params.ox = `${ox * 100}%`;
        this.params.oy = `${oy * 100}%`;
        this.params.scale = 0;
        return;
    }
    /**
     * Save the focused element before dialog was open
     * @return {void}
     * */
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.elementFocusedBeforeDialogWasOpened = this.document.activeElement;
            Promise.resolve().then(() => this.elementRef.nativeElement.focus());
        }
    }
    trapFocus() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        if (this._config.autoFocus) {
            this.focusTrap.focusInitialElementWhenReady();
        }
    }
    restoreFocus() {
        const toFocus = this.elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
OwlDialogContainerComponent.ɵfac = function OwlDialogContainerComponent_Factory(t) { return new (t || OwlDialogContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8)); };
OwlDialogContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwlDialogContainerComponent, selectors: [["owl-dialog-container"]], viewQuery: function OwlDialogContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["CdkPortalOutlet"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.portalOutlet = _t.first);
    } }, hostVars: 8, hostBindings: function OwlDialogContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsyntheticHostListener"]("@slideModal.start", function OwlDialogContainerComponent_animation_slideModal_start_HostBindingHandler($event) { return ctx.onAnimationStart($event); })("@slideModal.done", function OwlDialogContainerComponent_animation_slideModal_done_HostBindingHandler($event) { return ctx.onAnimationDone($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.owlDialogContainerTabIndex)("id", ctx.owlDialogContainerId)("role", ctx.owlDialogContainerRole)("aria-labelledby", ctx.owlDialogContainerAriaLabelledby)("aria-describedby", ctx.owlDialogContainerAriaDescribedby);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsyntheticHostProperty"]("@slideModal", ctx.owlDialogContainerAnimation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dialog-container", ctx.owlDialogContainerClass);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function OwlDialogContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlDialogContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["CdkPortalOutlet"]], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('slideModal', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('void => enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])(zoomFadeInFrom),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('300ms cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])('*')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ transform: 'scale(1)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ transform: 'scale(1.05)', offset: 0.3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ transform: 'scale(.95)', offset: 0.8 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ transform: 'scale(1)', offset: 1.0 })
                    ])),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animateChild"])()
                ], { params: { x: '0px', y: '0px', ox: '50%', oy: '50%', scale: 1 } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('enter => exit', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animateChild"])(),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])(zoomFadeIn))
                ], { params: { x: '0px', y: '0px', ox: '50%', oy: '50%' } })
            ])
        ] } });
OwlDialogContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusTrapFactory"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
OwlDialogContainerComponent.propDecorators = {
    portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["CdkPortalOutlet"], { static: true },] }],
    owlDialogContainerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dialog-container',] }],
    owlDialogContainerTabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.tabindex',] }],
    owlDialogContainerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.id',] }],
    owlDialogContainerRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.role',] }],
    owlDialogContainerAriaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-labelledby',] }],
    owlDialogContainerAriaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-describedby',] }],
    owlDialogContainerAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@slideModal',] }],
    onAnimationStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['@slideModal.start', ['$event'],] }],
    onAnimationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['@slideModal.done', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlDialogContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'owl-dialog-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('slideModal', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('void => enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])(zoomFadeInFrom),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('300ms cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])('*')),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ transform: 'scale(1)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ transform: 'scale(1.05)', offset: 0.3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ transform: 'scale(.95)', offset: 0.8 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ transform: 'scale(1)', offset: 1.0 })
                            ])),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animateChild"])()
                        ], { params: { x: '0px', y: '0px', ox: '50%', oy: '50%', scale: 1 } }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('enter => exit', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animateChild"])(),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])(zoomFadeIn))
                        ], { params: { x: '0px', y: '0px', ox: '50%', oy: '50%' } })
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusTrapFactory"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, { owlDialogContainerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dialog-container']
        }], owlDialogContainerTabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.tabindex']
        }], owlDialogContainerId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.id']
        }], owlDialogContainerRole: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.role']
        }], owlDialogContainerAriaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-labelledby']
        }], owlDialogContainerAriaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-describedby']
        }], owlDialogContainerAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['@slideModal']
        }], onAnimationStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['@slideModal.start', ['$event']]
        }], onAnimationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['@slideModal.done', ['$event']]
        }], portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["CdkPortalOutlet"], { static: true }]
        }] }); })();

/**
 * object.utils
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */
function extendObject(dest, ...sources) {
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (const source of sources) {
        if (source != null) {
            for (const key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * index
 */

/**
 * dialog.service
 */
const OWL_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('OwlDialogData');
/**
 * Injection token that determines the scroll handling while the dialog is open.
 * */
const OWL_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('owl-dialog-scroll-strategy');
function OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return () => overlay.scrollStrategies.block();
}
/** @docs-private */
const OWL_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: OWL_DIALOG_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]],
    useFactory: OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/** I
 * njection token that can be used to specify default dialog options.
 * */
const OWL_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('owl-dialog-default-options');
/** @dynamic */
class OwlDialogService {
    constructor(overlay, injector, location, scrollStrategy, defaultOptions, parentDialog, overlayContainer) {
        this.overlay = overlay;
        this.injector = injector;
        this.location = location;
        this.scrollStrategy = scrollStrategy;
        this.defaultOptions = defaultOptions;
        this.parentDialog = parentDialog;
        this.overlayContainer = overlayContainer;
        this.ariaHiddenElements = new Map();
        this._openDialogsAtThisLevel = [];
        this._afterOpenAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */
        this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => this._openDialogsAtThisLevel.length ?
            this._afterAllClosed :
            this._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(undefined)));
        if (!parentDialog && location) {
            location.subscribe(() => this.closeAll());
        }
    }
    /** Keeps track of the currently-open dialogs. */
    get openDialogs() {
        return this.parentDialog ? this.parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }
    /** Stream that emits when a dialog has been opened. */
    get afterOpen() {
        return this.parentDialog ? this.parentDialog.afterOpen : this._afterOpenAtThisLevel;
    }
    get _afterAllClosed() {
        const parent = this.parentDialog;
        return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
    }
    open(componentOrTemplateRef, config) {
        config = applyConfigDefaults(config, this.defaultOptions);
        if (config.id && this.getDialogById(config.id)) {
            throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
        }
        const overlayRef = this.createOverlay(config);
        const dialogContainer = this.attachDialogContainer(overlayRef, config);
        const dialogRef = this.attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        if (!this.openDialogs.length) {
            this.hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(() => this.removeOpenDialog(dialogRef));
        this.afterOpen.next(dialogRef);
        return dialogRef;
    }
    /**
     * Closes all of the currently-open dialogs.
     */
    closeAll() {
        let i = this.openDialogs.length;
        while (i--) {
            this.openDialogs[i].close();
        }
    }
    /**
     * Finds an open dialog by its id.
     * @param id ID to use when looking up the dialog.
     */
    getDialogById(id) {
        return this.openDialogs.find(dialog => dialog.id === id);
    }
    attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        const dialogRef = new OwlDialogRef(overlayRef, dialogContainer, config.id, this.location);
        if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe(() => {
                if (!dialogRef.disableClose) {
                    dialogRef.close();
                }
            });
        }
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
        }
        else {
            const injector = this.createInjector(config, dialogRef, dialogContainer);
            const contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["ComponentPortal"](componentOrTemplateRef, undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef
            .updateSize(config.width, config.height)
            .updatePosition(config.position);
        return dialogRef;
    }
    createInjector(config, dialogRef, dialogContainer) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injectionTokens = new WeakMap();
        injectionTokens.set(OwlDialogRef, dialogRef);
        injectionTokens.set(OwlDialogContainerComponent, dialogContainer);
        injectionTokens.set(OWL_DIALOG_DATA, config.data);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalInjector"](userInjector || this.injector, injectionTokens);
    }
    createOverlay(config) {
        const overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }
    attachDialogContainer(overlayRef, config) {
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["ComponentPortal"](OwlDialogContainerComponent, config.viewContainerRef);
        const containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.setConfig(config);
        return containerRef.instance;
    }
    getOverlayConfig(dialogConfig) {
        const state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayConfig"]({
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this.scrollStrategy(),
            panelClass: dialogConfig.paneClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight
        });
        if (dialogConfig.backdropClass) {
            state.backdropClass = dialogConfig.backdropClass;
        }
        return state;
    }
    removeOpenDialog(dialogRef) {
        const index = this._openDialogsAtThisLevel.indexOf(dialogRef);
        if (index > -1) {
            this.openDialogs.splice(index, 1);
            // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.
            if (!this.openDialogs.length) {
                this.ariaHiddenElements.forEach((previousValue, element) => {
                    if (previousValue) {
                        element.setAttribute('aria-hidden', previousValue);
                    }
                    else {
                        element.removeAttribute('aria-hidden');
                    }
                });
                this.ariaHiddenElements.clear();
                this._afterAllClosed.next();
            }
        }
    }
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     */
    hideNonDialogContentFromAssistiveTechnology() {
        const overlayContainer = this.overlayContainer.getContainerElement();
        // Ensure that the overlay container is attached to the DOM.
        if (overlayContainer.parentElement) {
            const siblings = overlayContainer.parentElement.children;
            for (let i = siblings.length - 1; i > -1; i--) {
                let sibling = siblings[i];
                if (sibling !== overlayContainer &&
                    sibling.nodeName !== 'SCRIPT' &&
                    sibling.nodeName !== 'STYLE' &&
                    !sibling.hasAttribute('aria-live')) {
                    this.ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }
        }
    }
}
OwlDialogService.ɵfac = function OwlDialogService_Factory(t) { return new (t || OwlDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OWL_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OWL_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OwlDialogService, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayContainer"])); };
OwlDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OwlDialogService, factory: OwlDialogService.ɵfac });
OwlDialogService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DIALOG_SCROLL_STRATEGY,] }] },
    { type: OwlDialogConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DIALOG_DEFAULT_OPTIONS,] }] },
    { type: OwlDialogService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayContainer"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DIALOG_SCROLL_STRATEGY]
            }] }, { type: OwlDialogConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DIALOG_DEFAULT_OPTIONS]
            }] }, { type: OwlDialogService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayContainer"] }]; }, null); })();
/**
 * Applies default options to the dialog config.
 * @param config Config to be modified.
 * @param defaultOptions Default config setting
 * @returns The new configuration object.
 */
function applyConfigDefaults(config, defaultOptions) {
    return extendObject(new OwlDialogConfig(), config, defaultOptions);
}

/**
 * date-time-picker.component
 */
/** Injection token that determines the scroll handling while the dtPicker is open. */
const OWL_DTPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('owl-dtpicker-scroll-strategy');
/** @docs-private */
function OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return () => overlay.scrollStrategies.block();
}
/** @docs-private */
const OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER = {
    provide: OWL_DTPICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]],
    useFactory: OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/** @dynamic */
class OwlDateTimeComponent extends OwlDateTime {
    constructor(overlay, viewContainerRef, dialogService, ngZone, changeDetector, dateTimeAdapter, defaultScrollStrategy, dateTimeFormats, document) {
        super(dateTimeAdapter, dateTimeFormats);
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.dialogService = dialogService;
        this.ngZone = ngZone;
        this.changeDetector = changeDetector;
        this.dateTimeAdapter = dateTimeAdapter;
        this.defaultScrollStrategy = defaultScrollStrategy;
        this.dateTimeFormats = dateTimeFormats;
        this.document = document;
        /** Custom class for the picker backdrop. */
        this.backdropClass = [];
        /** Custom class for the picker overlay pane. */
        this.panelClass = [];
        /**
         * Set the type of the dateTime picker
         *      'both' -- show both calendar and timer
         *      'calendar' -- show only calendar
         *      'timer' -- show only timer
         * @default 'both'
         * @type {'both' | 'calendar' | 'timer'}
         * */
        this._pickerType = 'both';
        /**
         * Whether the picker open as a dialog
         * @default {false}
         * @type {boolean}
         * */
        this._pickerMode = 'popup';
        /** Whether the calendar is open. */
        this._opened = false;
        /**
         * Callback when the picker is closed
         * */
        this.afterPickerClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Callback when the picker is open
         * */
        this.afterPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits selected year in multi-year view
         * This doesn't imply a change on the selected date.
         * */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits selected month in year view
         * This doesn't imply a change on the selected date.
         * */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emit when the selected value has been confirmed
         * */
        this.confirmSelectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the date time picker is disabled.
         * */
        this.disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dtInputSub = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        this.hidePickerStreamSub = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        this.confirmSelectedStreamSub = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        this.pickerOpenedStreamSub = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        /** The element that was focused before the date time picker was opened. */
        this.focusedElementBeforeOpen = null;
        this._selecteds = [];
    }
    get startAt() {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        if (this._startAt) {
            return this._startAt;
        }
        if (this._dtInput) {
            if (this._dtInput.selectMode === 'single') {
                return this._dtInput.value || null;
            }
            else if (this._dtInput.selectMode === 'range' ||
                this._dtInput.selectMode === 'rangeFrom') {
                return this._dtInput.values[0] || null;
            }
            else if (this._dtInput.selectMode === 'rangeTo') {
                return this._dtInput.values[1] || null;
            }
        }
        else {
            return null;
        }
    }
    set startAt(date) {
        this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
    }
    get pickerType() {
        return this._pickerType;
    }
    set pickerType(val) {
        if (val !== this._pickerType) {
            this._pickerType = val;
            if (this._dtInput) {
                this._dtInput.formatNativeInputValue();
            }
        }
    }
    get pickerMode() {
        return this._pickerMode;
    }
    set pickerMode(mode) {
        if (mode === 'popup') {
            this._pickerMode = mode;
        }
        else {
            this._pickerMode = 'dialog';
        }
    }
    get disabled() {
        return this._disabled === undefined && this._dtInput ?
            this._dtInput.disabled : !!this._disabled;
    }
    set disabled(value) {
        value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        if (value !== this._disabled) {
            this._disabled = value;
            this.disabledChange.next(value);
        }
    }
    get opened() {
        return this._opened;
    }
    set opened(val) {
        val ? this.open() : this.close();
    }
    get dtInput() {
        return this._dtInput;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        this.changeDetector.markForCheck();
    }
    get selecteds() {
        return this._selecteds;
    }
    set selecteds(values) {
        this._selecteds = values;
        this.changeDetector.markForCheck();
    }
    /** The minimum selectable date. */
    get minDateTime() {
        return this._dtInput && this._dtInput.min;
    }
    /** The maximum selectable date. */
    get maxDateTime() {
        return this._dtInput && this._dtInput.max;
    }
    get dateTimeFilter() {
        return this._dtInput && this._dtInput.dateTimeFilter;
    }
    get selectMode() {
        return this._dtInput.selectMode;
    }
    get isInSingleMode() {
        return this._dtInput.isInSingleMode;
    }
    get isInRangeMode() {
        return this._dtInput.isInRangeMode;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.close();
        this.dtInputSub.unsubscribe();
        this.disabledChange.complete();
        if (this.popupRef) {
            this.popupRef.dispose();
        }
    }
    registerInput(input) {
        if (this._dtInput) {
            throw Error('A Owl DateTimePicker can only be associated with a single input.');
        }
        this._dtInput = input;
        this.dtInputSub = this._dtInput.valueChange.subscribe((value) => {
            if (Array.isArray(value)) {
                this.selecteds = value;
            }
            else {
                this.selected = value;
            }
        });
    }
    open() {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._dtInput) {
            throw Error('Attempted to open an DateTimePicker with no associated input.');
        }
        if (this.document) {
            this.focusedElementBeforeOpen = this.document.activeElement;
        }
        // reset the picker selected value
        if (this.isInSingleMode) {
            this.selected = this._dtInput.value;
        }
        else if (this.isInRangeMode) {
            this.selecteds = this._dtInput.values;
        }
        // when the picker is open , we make sure the picker's current selected time value
        // is the same as the _startAt time value.
        if (this.selected && this.pickerType !== 'calendar' && this._startAt) {
            this.selected = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.selected), this.dateTimeAdapter.getMonth(this.selected), this.dateTimeAdapter.getDate(this.selected), this.dateTimeAdapter.getHours(this._startAt), this.dateTimeAdapter.getMinutes(this._startAt), this.dateTimeAdapter.getSeconds(this._startAt));
        }
        this.pickerMode === 'dialog' ?
            this.openAsDialog() :
            this.openAsPopup();
        this.pickerContainer.picker = this;
        // Listen to picker container's hidePickerStream
        this.hidePickerStreamSub = this.pickerContainer.hidePickerStream
            .subscribe(() => {
            this.close();
        });
        // Listen to picker container's confirmSelectedStream
        this.confirmSelectedStreamSub = this.pickerContainer.confirmSelectedStream
            .subscribe((event) => {
            this.confirmSelect(event);
        });
    }
    /**
     * Selects the given date
     * @param date -- a date to be selected
     * @return {void}
     * */
    select(date) {
        if (Array.isArray(date)) {
            this.selecteds = [...date];
        }
        else {
            this.selected = date;
        }
        /**
         * Cases in which automatically confirm the select when date or dates are selected:
         * 1) picker mode is NOT 'dialog'
         * 2) picker type is 'calendar' and selectMode is 'single'.
         * 3) picker type is 'calendar' and selectMode is 'range' and
         *    the 'selecteds' has 'from'(selecteds[0]) and 'to'(selecteds[1]) values.
         * 4) selectMode is 'rangeFrom' and selecteds[0] has value.
         * 5) selectMode is 'rangeTo' and selecteds[1] has value.
         * */
        if (this.pickerMode !== 'dialog' &&
            this.pickerType === 'calendar' &&
            ((this.selectMode === 'single' && this.selected) ||
                (this.selectMode === 'rangeFrom' && this.selecteds[0]) ||
                (this.selectMode === 'rangeTo' && this.selecteds[1]) ||
                (this.selectMode === 'range' && this.selecteds[0] && this.selecteds[1]))) {
            this.confirmSelect();
        }
    }
    /**
     * Emits the selected year in multi-year view
     * */
    selectYear(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /**
     * Emits selected month in year view
     * */
    selectMonth(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /**
     * Hide the picker
     * @return {void}
     * */
    close() {
        if (!this._opened) {
            return;
        }
        if (this.popupRef && this.popupRef.hasAttached()) {
            this.popupRef.detach();
        }
        if (this.pickerContainerPortal && this.pickerContainerPortal.isAttached) {
            this.pickerContainerPortal.detach();
        }
        if (this.hidePickerStreamSub) {
            this.hidePickerStreamSub.unsubscribe();
            this.hidePickerStreamSub = null;
        }
        if (this.confirmSelectedStreamSub) {
            this.confirmSelectedStreamSub.unsubscribe();
            this.confirmSelectedStreamSub = null;
        }
        if (this.pickerOpenedStreamSub) {
            this.pickerOpenedStreamSub.unsubscribe();
            this.pickerOpenedStreamSub = null;
        }
        if (this.dialogRef) {
            this.dialogRef.close();
            this.dialogRef = null;
        }
        const completeClose = () => {
            if (this._opened) {
                this._opened = false;
                this.afterPickerClosed.emit(null);
                this.focusedElementBeforeOpen = null;
            }
        };
        if (this.focusedElementBeforeOpen &&
            typeof this.focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this.focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    }
    /**
     * Confirm the selected value
     * @param {any} event
     * @return {void}
     * */
    confirmSelect(event) {
        if (this.isInSingleMode) {
            const selected = this.selected || this.startAt || this.dateTimeAdapter.now();
            this.confirmSelectedChange.emit(selected);
        }
        else if (this.isInRangeMode) {
            this.confirmSelectedChange.emit(this.selecteds);
        }
        this.close();
        return;
    }
    /**
     * Open the picker as a dialog
     * @return {void}
     * */
    openAsDialog() {
        this.dialogRef = this.dialogService.open(OwlDateTimeContainerComponent, {
            autoFocus: false,
            backdropClass: ['cdk-overlay-dark-backdrop', ...Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceArray"])(this.backdropClass)],
            paneClass: ['owl-dt-dialog', ...Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceArray"])(this.panelClass)],
            viewContainerRef: this.viewContainerRef,
            scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy(),
        });
        this.pickerContainer = this.dialogRef.componentInstance;
        this.dialogRef.afterOpen().subscribe(() => {
            this.afterPickerOpen.emit(null);
            this._opened = true;
        });
        this.dialogRef.afterClosed().subscribe(() => this.close());
    }
    /**
     * Open the picker as popup
     * @return {void}
     * */
    openAsPopup() {
        if (!this.pickerContainerPortal) {
            this.pickerContainerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["ComponentPortal"](OwlDateTimeContainerComponent, this.viewContainerRef);
        }
        if (!this.popupRef) {
            this.createPopup();
        }
        if (!this.popupRef.hasAttached()) {
            const componentRef = this.popupRef.attach(this.pickerContainerPortal);
            this.pickerContainer = componentRef.instance;
            // Update the position once the calendar has rendered.
            this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(() => {
                this.popupRef.updatePosition();
            });
            // emit open stream
            this.pickerOpenedStreamSub =
                this.pickerContainer.pickerOpenedStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(() => {
                    this.afterPickerOpen.emit(null);
                    this._opened = true;
                });
        }
    }
    createPopup() {
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayConfig"]({
            positionStrategy: this.createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: ['cdk-overlay-transparent-backdrop', ...Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceArray"])(this.backdropClass)],
            scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy(),
            panelClass: ['owl-dt-popup', ...Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceArray"])(this.panelClass)],
        });
        this.popupRef = this.overlay.create(overlayConfig);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.popupRef.backdropClick(), this.popupRef.detachments(), this.popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(event => event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ESCAPE"] ||
            (this._dtInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"])))).subscribe(() => this.close());
    }
    /**
     * Create the popup PositionStrategy.
     * */
    createPopupPositionStrategy() {
        return this.overlay.position()
            .flexibleConnectedTo(this._dtInput.elementRef)
            .withTransformOriginOn('.owl-dt-container')
            .withFlexibleDimensions(false)
            .withPush(false)
            .withPositions([
            { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
            { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' },
            { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
            { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' },
            { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'top', offsetY: -176 },
            { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'top', offsetY: -352 },
        ]);
    }
}
OwlDateTimeComponent.ɵfac = function OwlDateTimeComponent_Factory(t) { return new (t || OwlDateTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OwlDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateTimeAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OWL_DTPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OWL_DATE_TIME_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8)); };
OwlDateTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwlDateTimeComponent, selectors: [["owl-date-time"]], inputs: { backdropClass: "backdropClass", panelClass: "panelClass", startAt: "startAt", pickerType: "pickerType", pickerMode: "pickerMode", disabled: "disabled", opened: "opened", scrollStrategy: "scrollStrategy" }, outputs: { afterPickerClosed: "afterPickerClosed", afterPickerOpen: "afterPickerOpen", yearSelected: "yearSelected", monthSelected: "monthSelected" }, exportAs: ["owlDateTime"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function OwlDateTimeComponent_Template(rf, ctx) { }, styles: [""], changeDetection: 0 });
OwlDateTimeComponent.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: OwlDialogService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: DateTimeAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DTPICKER_SCROLL_STRATEGY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DATE_TIME_FORMATS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
OwlDateTimeComponent.propDecorators = {
    backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pickerType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pickerMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    scrollStrategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    afterPickerClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    afterPickerOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlDateTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'owl-date-time',
                exportAs: 'owlDateTime',
                template: "",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                styles: [""]
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: OwlDialogService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: DateTimeAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DTPICKER_SCROLL_STRATEGY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DATE_TIME_FORMATS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, { backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], afterPickerClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], afterPickerOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pickerType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pickerMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * date-time-picker-input.directive
 */
const OWL_DATETIME_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => OwlDateTimeInputDirective),
    multi: true
};
const OWL_DATETIME_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => OwlDateTimeInputDirective),
    multi: true
};
class OwlDateTimeInputDirective {
    constructor(elmRef, renderer, dateTimeAdapter, dateTimeFormats) {
        this.elmRef = elmRef;
        this.renderer = renderer;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        /**
         * The picker's select mode
         * @default {'single'}
         * @type {'single' | 'range'}
         * */
        this._selectMode = 'single';
        /**
         * The character to separate the 'from' and 'to' in input value
         * @default {'~'}
         * @type {string}
         * */
        this.rangeSeparator = '~';
        this._values = [];
        /**
         * Callback to invoke when `change` event is fired on this `<input>`
         * */
        this.dateTimeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Callback to invoke when an `input` event is fired on this `<input>`.
         * */
        this.dateTimeInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dtPickerSub = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        this.localeSub = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        this.lastValueValid = true;
        this.onModelChange = () => {
        };
        this.onModelTouched = () => {
        };
        this.validatorOnChange = () => {
        };
        /** The form control validator for whether the input parses. */
        this.parseValidator = () => {
            return this.lastValueValid ?
                null : { 'owlDateTimeParse': { 'text': this.elmRef.nativeElement.value } };
        };
        /** The form control validator for the min date. */
        this.minValidator = (control) => {
            if (this.isInSingleMode) {
                const controlValue = this.getValidDate(this.dateTimeAdapter.deserialize(control.value));
                return (!this.min || !controlValue ||
                    this.dateTimeAdapter.compare(this.min, controlValue) <= 0) ?
                    null : { 'owlDateTimeMin': { 'min': this.min, 'actual': controlValue } };
            }
            else if (this.isInRangeMode && control.value) {
                const controlValueFrom = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[0]));
                const controlValueTo = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[1]));
                return (!this.min || !controlValueFrom || !controlValueTo ||
                    this.dateTimeAdapter.compare(this.min, controlValueFrom) <= 0) ?
                    null : { 'owlDateTimeMin': { 'min': this.min, 'actual': [controlValueFrom, controlValueTo] } };
            }
        };
        /** The form control validator for the max date. */
        this.maxValidator = (control) => {
            if (this.isInSingleMode) {
                const controlValue = this.getValidDate(this.dateTimeAdapter.deserialize(control.value));
                return (!this.max || !controlValue ||
                    this.dateTimeAdapter.compare(this.max, controlValue) >= 0) ?
                    null : { 'owlDateTimeMax': { 'max': this.max, 'actual': controlValue } };
            }
            else if (this.isInRangeMode && control.value) {
                const controlValueFrom = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[0]));
                const controlValueTo = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[1]));
                return (!this.max || !controlValueFrom || !controlValueTo ||
                    this.dateTimeAdapter.compare(this.max, controlValueTo) >= 0) ?
                    null : { 'owlDateTimeMax': { 'max': this.max, 'actual': [controlValueFrom, controlValueTo] } };
            }
        };
        /** The form control validator for the date filter. */
        this.filterValidator = (control) => {
            const controlValue = this.getValidDate(this.dateTimeAdapter.deserialize(control.value));
            return !this._dateTimeFilter || !controlValue || this._dateTimeFilter(controlValue) ?
                null : { 'owlDateTimeFilter': true };
        };
        /**
         * The form control validator for the range.
         * Check whether the 'before' value is before the 'to' value
         * */
        this.rangeValidator = (control) => {
            if (this.isInSingleMode || !control.value) {
                return null;
            }
            const controlValueFrom = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[0]));
            const controlValueTo = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[1]));
            return !controlValueFrom || !controlValueTo || this.dateTimeAdapter.compare(controlValueFrom, controlValueTo) <= 0 ?
                null : { 'owlDateTimeRange': true };
        };
        /** The combined form control validator for this input. */
        this.validator = _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([this.parseValidator, this.minValidator, this.maxValidator, this.filterValidator, this.rangeValidator]);
        /** Emits when the value changes (either due to user input or programmatic change). */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when the disabled state has changed */
        this.disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (!this.dateTimeAdapter) {
            throw Error(`OwlDateTimePicker: No provider found for DateTimePicker. You must import one of the following ` +
                `modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a ` +
                `custom implementation.`);
        }
        if (!this.dateTimeFormats) {
            throw Error(`OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following ` +
                `modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a ` +
                `custom implementation.`);
        }
        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(() => {
            this.value = this.value;
        });
    }
    /**
     * The date time picker that this input is associated with.
     * */
    set owlDateTime(value) {
        this.registerDateTimePicker(value);
    }
    /**
     * A function to filter date time
     * @default {null}
     * @type {Function}
     * */
    set owlDateTimeFilter(filter) {
        this._dateTimeFilter = filter;
        this.validatorOnChange();
    }
    get dateTimeFilter() {
        return this._dateTimeFilter;
    }
    get disabled() {
        return !!this._disabled;
    }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        const element = this.elmRef.nativeElement;
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this.disabledChange.emit(newValue);
        }
        // We need to null check the `blur` method, because it's undefined during SSR.
        if (newValue && element.blur) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            element.blur();
        }
    }
    get min() {
        return this._min;
    }
    set min(value) {
        this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
        this.validatorOnChange();
    }
    get max() {
        return this._max;
    }
    set max(value) {
        this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
        this.validatorOnChange();
    }
    get selectMode() {
        return this._selectMode;
    }
    set selectMode(mode) {
        if (mode !== 'single' && mode !== 'range' &&
            mode !== 'rangeFrom' && mode !== 'rangeTo') {
            throw Error('OwlDateTime Error: invalid selectMode value!');
        }
        this._selectMode = mode;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this.lastValueValid = !value || this.dateTimeAdapter.isValid(value);
        value = this.getValidDate(value);
        const oldDate = this._value;
        this._value = value;
        // set the input property 'value'
        this.formatNativeInputValue();
        // check if the input value changed
        if (!this.dateTimeAdapter.isEqual(oldDate, value)) {
            this.valueChange.emit(value);
        }
    }
    get values() {
        return this._values;
    }
    set values(values) {
        if (values && values.length > 0) {
            this._values = values.map((v) => {
                v = this.dateTimeAdapter.deserialize(v);
                return this.getValidDate(v);
            });
            this.lastValueValid = (!this._values[0] || this.dateTimeAdapter.isValid(this._values[0])) && (!this._values[1] || this.dateTimeAdapter.isValid(this._values[1]));
        }
        else {
            this._values = [];
            this.lastValueValid = true;
        }
        // set the input property 'value'
        this.formatNativeInputValue();
        this.valueChange.emit(this._values);
    }
    get elementRef() {
        return this.elmRef;
    }
    get isInSingleMode() {
        return this._selectMode === 'single';
    }
    get isInRangeMode() {
        return this._selectMode === 'range' || this._selectMode === 'rangeFrom'
            || this._selectMode === 'rangeTo';
    }
    get owlDateTimeInputAriaHaspopup() {
        return true;
    }
    get owlDateTimeInputAriaOwns() {
        return (this.dtPicker.opened && this.dtPicker.id) || null;
    }
    get minIso8601() {
        return this.min ? this.dateTimeAdapter.toIso8601(this.min) : null;
    }
    get maxIso8601() {
        return this.max ? this.dateTimeAdapter.toIso8601(this.max) : null;
    }
    get owlDateTimeInputDisabled() {
        return this.disabled;
    }
    ngOnInit() {
        if (!this.dtPicker) {
            throw Error(`OwlDateTimePicker: the picker input doesn't have any associated owl-date-time component`);
        }
    }
    ngAfterContentInit() {
        this.dtPickerSub = this.dtPicker.confirmSelectedChange.subscribe((selecteds) => {
            if (Array.isArray(selecteds)) {
                this.values = selecteds;
            }
            else {
                this.value = selecteds;
            }
            this.onModelChange(selecteds);
            this.onModelTouched();
            this.dateTimeChange.emit({ source: this, value: selecteds, input: this.elmRef.nativeElement });
            this.dateTimeInput.emit({ source: this, value: selecteds, input: this.elmRef.nativeElement });
        });
    }
    ngOnDestroy() {
        this.dtPickerSub.unsubscribe();
        this.localeSub.unsubscribe();
        this.valueChange.complete();
        this.disabledChange.complete();
    }
    writeValue(value) {
        if (this.isInSingleMode) {
            this.value = value;
        }
        else {
            this.values = value;
        }
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    validate(c) {
        return this.validator ? this.validator(c) : null;
    }
    registerOnValidatorChange(fn) {
        this.validatorOnChange = fn;
    }
    /**
     * Open the picker when user hold alt + DOWN_ARROW
     * */
    handleKeydownOnHost(event) {
        if (event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]) {
            this.dtPicker.open();
            event.preventDefault();
        }
    }
    handleBlurOnHost(event) {
        this.onModelTouched();
    }
    handleInputOnHost(event) {
        let value = event.target.value;
        if (this._selectMode === 'single') {
            this.changeInputInSingleMode(value);
        }
        else if (this._selectMode === 'range') {
            this.changeInputInRangeMode(value);
        }
        else {
            this.changeInputInRangeFromToMode(value);
        }
    }
    handleChangeOnHost(event) {
        let v;
        if (this.isInSingleMode) {
            v = this.value;
        }
        else if (this.isInRangeMode) {
            v = this.values;
        }
        this.dateTimeChange.emit({
            source: this,
            value: v,
            input: this.elmRef.nativeElement
        });
    }
    /**
     * Set the native input property 'value'
     * @return {void}
     * */
    formatNativeInputValue() {
        if (this.isInSingleMode) {
            this.renderer.setProperty(this.elmRef.nativeElement, 'value', this._value ? this.dateTimeAdapter.format(this._value, this.dtPicker.formatString) : '');
        }
        else if (this.isInRangeMode) {
            if (this._values && this.values.length > 0) {
                const from = this._values[0];
                const to = this._values[1];
                const fromFormatted = from ? this.dateTimeAdapter.format(from, this.dtPicker.formatString) : '';
                const toFormatted = to ? this.dateTimeAdapter.format(to, this.dtPicker.formatString) : '';
                if (!fromFormatted && !toFormatted) {
                    this.renderer.setProperty(this.elmRef.nativeElement, 'value', null);
                }
                else {
                    if (this._selectMode === 'range') {
                        this.renderer.setProperty(this.elmRef.nativeElement, 'value', fromFormatted + ' ' + this.rangeSeparator + ' ' + toFormatted);
                    }
                    else if (this._selectMode === 'rangeFrom') {
                        this.renderer.setProperty(this.elmRef.nativeElement, 'value', fromFormatted);
                    }
                    else if (this._selectMode === 'rangeTo') {
                        this.renderer.setProperty(this.elmRef.nativeElement, 'value', toFormatted);
                    }
                }
            }
            else {
                this.renderer.setProperty(this.elmRef.nativeElement, 'value', '');
            }
        }
        return;
    }
    /**
     * Register the relationship between this input and its picker component
     * @param {OwlDateTimeComponent} picker -- associated picker component to this input
     * @return {void}
     * */
    registerDateTimePicker(picker) {
        if (picker) {
            this.dtPicker = picker;
            this.dtPicker.registerInput(this);
        }
    }
    /**
     * Convert a given obj to a valid date object
     *
     * @param {any} obj The object to check.
     * @return {T | null} The given object if it is both a date instance and valid, otherwise null.
     * */
    getValidDate(obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    }
    /**
     * Convert a time string to a date-time string
     * When pickerType is 'timer', the value in the picker's input is a time string.
     * The dateTimeAdapter parse fn could not parse a time string to a Date Object.
     * Therefore we need this fn to convert a time string to a date-time string.
     * @param {string} timeString
     * @param {T} dateTime
     * @return {string}
     * */
    convertTimeStringToDateTimeString(timeString, dateTime) {
        if (timeString) {
            const v = dateTime || this.dateTimeAdapter.now();
            const dateString = this.dateTimeAdapter.format(v, this.dateTimeFormats.datePickerInput);
            return dateString + ' ' + timeString;
        }
        else {
            return null;
        }
    }
    /**
     * Handle input change in single mode
     * @param {string} inputValue
     * @return {void}
     * */
    changeInputInSingleMode(inputValue) {
        let value = inputValue;
        if (this.dtPicker.pickerType === 'timer') {
            value = this.convertTimeStringToDateTimeString(value, this.value);
        }
        let result = this.dateTimeAdapter.parse(value, this.dateTimeFormats.parseInput);
        this.lastValueValid = !result || this.dateTimeAdapter.isValid(result);
        result = this.getValidDate(result);
        // if the newValue is the same as the oldValue, we intend to not fire the valueChange event
        // result equals to null means there is input event, but the input value is invalid
        if (!this.isSameValue(result, this._value) ||
            result === null) {
            this._value = result;
            this.valueChange.emit(result);
            this.onModelChange(result);
            this.dateTimeInput.emit({ source: this, value: result, input: this.elmRef.nativeElement });
        }
    }
    /**
     * Handle input change in rangeFrom or rangeTo mode
     * @param {string} inputValue
     * @return {void}
     * */
    changeInputInRangeFromToMode(inputValue) {
        let originalValue = this._selectMode === 'rangeFrom' ? this._values[0] : this._values[1];
        if (this.dtPicker.pickerType === 'timer') {
            inputValue = this.convertTimeStringToDateTimeString(inputValue, originalValue);
        }
        let result = this.dateTimeAdapter.parse(inputValue, this.dateTimeFormats.parseInput);
        this.lastValueValid = !result || this.dateTimeAdapter.isValid(result);
        result = this.getValidDate(result);
        // if the newValue is the same as the oldValue, we intend to not fire the valueChange event
        if ((this._selectMode === 'rangeFrom' && this.isSameValue(result, this._values[0]) && result) ||
            (this._selectMode === 'rangeTo' && this.isSameValue(result, this._values[1])) && result) {
            return;
        }
        this._values = this._selectMode === 'rangeFrom' ? [result, this._values[1]] : [this._values[0], result];
        this.valueChange.emit(this._values);
        this.onModelChange(this._values);
        this.dateTimeInput.emit({ source: this, value: this._values, input: this.elmRef.nativeElement });
    }
    /**
     * Handle input change in range mode
     * @param {string} inputValue
     * @return {void}
     * */
    changeInputInRangeMode(inputValue) {
        const selecteds = inputValue.split(this.rangeSeparator);
        let fromString = selecteds[0];
        let toString = selecteds[1];
        if (this.dtPicker.pickerType === 'timer') {
            fromString = this.convertTimeStringToDateTimeString(fromString, this.values[0]);
            toString = this.convertTimeStringToDateTimeString(toString, this.values[1]);
        }
        let from = this.dateTimeAdapter.parse(fromString, this.dateTimeFormats.parseInput);
        let to = this.dateTimeAdapter.parse(toString, this.dateTimeFormats.parseInput);
        this.lastValueValid = (!from || this.dateTimeAdapter.isValid(from)) && (!to || this.dateTimeAdapter.isValid(to));
        from = this.getValidDate(from);
        to = this.getValidDate(to);
        // if the newValue is the same as the oldValue, we intend to not fire the valueChange event
        if (!this.isSameValue(from, this._values[0]) ||
            !this.isSameValue(to, this._values[1]) ||
            (from === null && to === null)) {
            this._values = [from, to];
            this.valueChange.emit(this._values);
            this.onModelChange(this._values);
            this.dateTimeInput.emit({ source: this, value: this._values, input: this.elmRef.nativeElement });
        }
    }
    /**
     * Check if the two value is the same
     * @return {boolean}
     * */
    isSameValue(first, second) {
        if (first && second) {
            return this.dateTimeAdapter.compare(first, second) === 0;
        }
        return first == second;
    }
}
OwlDateTimeInputDirective.ɵfac = function OwlDateTimeInputDirective_Factory(t) { return new (t || OwlDateTimeInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateTimeAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OWL_DATE_TIME_FORMATS, 8)); };
OwlDateTimeInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: OwlDateTimeInputDirective, selectors: [["input", "owlDateTime", ""]], hostVars: 5, hostBindings: function OwlDateTimeInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function OwlDateTimeInputDirective_keydown_HostBindingHandler($event) { return ctx.handleKeydownOnHost($event); })("blur", function OwlDateTimeInputDirective_blur_HostBindingHandler($event) { return ctx.handleBlurOnHost($event); })("input", function OwlDateTimeInputDirective_input_HostBindingHandler($event) { return ctx.handleInputOnHost($event); })("change", function OwlDateTimeInputDirective_change_HostBindingHandler($event) { return ctx.handleChangeOnHost($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.owlDateTimeInputDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-haspopup", ctx.owlDateTimeInputAriaHaspopup)("aria-owns", ctx.owlDateTimeInputAriaOwns)("min", ctx.minIso8601)("max", ctx.maxIso8601);
    } }, inputs: { rangeSeparator: "rangeSeparator", value: "value", owlDateTime: "owlDateTime", owlDateTimeFilter: "owlDateTimeFilter", _disabled: "_disabled", min: "min", max: "max", selectMode: "selectMode", values: "values" }, outputs: { dateTimeChange: "dateTimeChange", dateTimeInput: "dateTimeInput" }, exportAs: ["owlDateTimeInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            OWL_DATETIME_VALUE_ACCESSOR,
            OWL_DATETIME_VALIDATORS,
        ])] });
OwlDateTimeInputDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: DateTimeAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DATE_TIME_FORMATS,] }] }
];
OwlDateTimeInputDirective.propDecorators = {
    owlDateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    owlDateTimeFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    _disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    rangeSeparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    values: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dateTimeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dateTimeInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    owlDateTimeInputAriaHaspopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-haspopup',] }],
    owlDateTimeInputAriaOwns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-owns',] }],
    minIso8601: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.min',] }],
    maxIso8601: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.max',] }],
    owlDateTimeInputDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['disabled',] }],
    handleKeydownOnHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] }],
    handleBlurOnHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur', ['$event'],] }],
    handleInputOnHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input', ['$event'],] }],
    handleChangeOnHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['change', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlDateTimeInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'input[owlDateTime]',
                exportAs: 'owlDateTimeInput',
                providers: [
                    OWL_DATETIME_VALUE_ACCESSOR,
                    OWL_DATETIME_VALIDATORS,
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: DateTimeAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DATE_TIME_FORMATS]
            }] }]; }, { rangeSeparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dateTimeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dateTimeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], owlDateTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], owlDateTimeFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], owlDateTimeInputAriaHaspopup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-haspopup']
        }], owlDateTimeInputAriaOwns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-owns']
        }], minIso8601: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.min']
        }], maxIso8601: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.max']
        }], owlDateTimeInputDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['disabled']
        }], handleKeydownOnHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keydown', ['$event']]
        }], handleBlurOnHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur', ['$event']]
        }], handleInputOnHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input', ['$event']]
        }], handleChangeOnHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['change', ['$event']]
        }] }); })();

/**
 * calendar-body.component
 */
class CalendarCell {
    constructor(value, displayValue, ariaLabel, enabled, out = false, cellClass = '') {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.out = out;
        this.cellClass = cellClass;
    }
}
class OwlCalendarBodyComponent {
    constructor(elmRef, ngZone) {
        this.elmRef = elmRef;
        this.ngZone = ngZone;
        /**
         * The cell number of the active cell in the table.
         * @default {0}
         * @type {number}
         * */
        this.activeCell = 0;
        /**
         * The number of columns in the table.
         * */
        this.numCols = 7;
        /**
         * The ratio (width / height) to use for the cells in the table.
         */
        this.cellRatio = 1;
        /**
         * Emit when a calendar cell is selected
         * */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get owlDTCalendarBodyClass() {
        return true;
    }
    get isInSingleMode() {
        return this.selectMode === 'single';
    }
    get isInRangeMode() {
        return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
            || this.selectMode === 'rangeTo';
    }
    ngOnInit() {
    }
    selectCell(cell) {
        this.select.emit(cell);
    }
    isActiveCell(rowIndex, colIndex) {
        const cellNumber = rowIndex * this.numCols + colIndex;
        return cellNumber === this.activeCell;
    }
    /**
     * Check if the cell is selected
     * @param {number} value
     * @return {boolean}
     * */
    isSelected(value) {
        if (!this.selectedValues || this.selectedValues.length === 0) {
            return false;
        }
        if (this.isInSingleMode) {
            return value === this.selectedValues[0];
        }
        if (this.isInRangeMode) {
            const fromValue = this.selectedValues[0];
            const toValue = this.selectedValues[1];
            return value === fromValue || value === toValue;
        }
    }
    /**
     * Check if the cell in the range
     * */
    isInRange(value) {
        if (this.isInRangeMode) {
            const fromValue = this.selectedValues[0];
            const toValue = this.selectedValues[1];
            if (fromValue !== null && toValue !== null) {
                return value >= fromValue && value <= toValue;
            }
            else {
                return value === fromValue || value === toValue;
            }
        }
    }
    /**
     * Check if the cell is the range from
     * */
    isRangeFrom(value) {
        if (this.isInRangeMode) {
            const fromValue = this.selectedValues[0];
            return fromValue !== null && value === fromValue;
        }
    }
    /**
     * Check if the cell is the range to
     * */
    isRangeTo(value) {
        if (this.isInRangeMode) {
            const toValue = this.selectedValues[1];
            return toValue !== null && value === toValue;
        }
    }
    /**
     * Focus to a active cell
     * */
    focusActiveCell() {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(() => {
                this.elmRef.nativeElement.querySelector('.owl-dt-calendar-cell-active').focus();
            });
        });
    }
}
OwlCalendarBodyComponent.ɵfac = function OwlCalendarBodyComponent_Factory(t) { return new (t || OwlCalendarBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
OwlCalendarBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwlCalendarBodyComponent, selectors: [["", "owl-date-time-calendar-body", ""]], hostVars: 2, hostBindings: function OwlCalendarBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-calendar-body", ctx.owlDTCalendarBodyClass);
    } }, inputs: { activeCell: "activeCell", numCols: "numCols", cellRatio: "cellRatio", rows: "rows", todayValue: "todayValue", selectedValues: "selectedValues", selectMode: "selectMode" }, outputs: { select: "select" }, exportAs: ["owlDateTimeCalendarBody"], attrs: _c1, decls: 1, vars: 1, consts: [["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], [3, "class", "tabindex", "owl-dt-calendar-cell-active", "owl-dt-calendar-cell-disabled", "owl-dt-calendar-cell-in-range", "owl-dt-calendar-cell-range-from", "owl-dt-calendar-cell-range-to", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], [3, "tabindex", "click"], [1, "owl-dt-calendar-cell-content", 3, "ngClass"]], template: function OwlCalendarBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCalendarBodyComponent_tr_0_Template, 2, 1, "tr", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [""], changeDetection: 0 });
OwlCalendarBodyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
OwlCalendarBodyComponent.propDecorators = {
    activeCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    numCols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cellRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    todayValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectedValues: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    owlDTCalendarBodyClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-calendar-body',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlCalendarBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[owl-date-time-calendar-body]',
                exportAs: 'owlDateTimeCalendarBody',
                template: "<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\r\n    <td *ngFor=\"let item of row; let colIndex = index\"\r\n        class=\"owl-dt-calendar-cell {{item.cellClass}}\"\r\n        [tabindex]=\"isActiveCell(rowIndex, colIndex) ? 0 : -1\"\r\n        [class.owl-dt-calendar-cell-active]=\"isActiveCell(rowIndex, colIndex)\"\r\n        [class.owl-dt-calendar-cell-disabled]=\"!item.enabled\"\r\n        [class.owl-dt-calendar-cell-in-range]=\"isInRange(item.value)\"\r\n        [class.owl-dt-calendar-cell-range-from]=\"isRangeFrom(item.value)\"\r\n        [class.owl-dt-calendar-cell-range-to]=\"isRangeTo(item.value)\"\r\n        [attr.aria-label]=\"item.ariaLabel\"\r\n        [attr.aria-disabled]=\"!item.enabled || null\"\r\n        [style.width.%]=\"100 / numCols\"\r\n        [style.paddingTop.%]=\"50 * cellRatio / numCols\"\r\n        [style.paddingBottom.%]=\"50 * cellRatio / numCols\"\r\n        (click)=\"selectCell(item)\">\r\n        <span class=\"owl-dt-calendar-cell-content\"\r\n              [ngClass]=\"{\r\n                'owl-dt-calendar-cell-out': item.out,\r\n                'owl-dt-calendar-cell-today': item.value === todayValue,\r\n                'owl-dt-calendar-cell-selected': isSelected(item.value)\r\n              }\">\r\n            {{item.displayValue}}\r\n        </span>\r\n    </td>\r\n</tr>\r\n",
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { activeCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], numCols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cellRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], owlDTCalendarBodyClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-calendar-body']
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], todayValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectedValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * calendar-month-view.component
 */
const DAYS_PER_WEEK = 7;
const WEEKS_PER_VIEW = 6;
class OwlMonthViewComponent {
    constructor(cdRef, dateTimeAdapter, dateTimeFormats) {
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        /**
         * Whether to hide dates in other months at the start or end of the current month.
         * */
        this.hideOtherMonths = false;
        /**
         * Define the first day of a week
         * Sunday: 0 ~ Saturday: 6
         * */
        this._firstDayOfWeek = 0;
        /**
         * The select mode of the picker;
         * */
        this._selectMode = 'single';
        this._selecteds = [];
        this.localeSub = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        this.initiated = false;
        /**
         * An array to hold all selectedDates' value
         * the value is the day number in current month
         * */
        this.selectedDates = [];
        /**
         * Callback to invoke when a new date is selected
         * */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Callback to invoke when any date is selected.
         * */
        this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when any date is activated. */
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get firstDayOfWeek() {
        return this._firstDayOfWeek;
    }
    set firstDayOfWeek(val) {
        val = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(val);
        if (val >= 0 && val <= 6 && val !== this._firstDayOfWeek) {
            this._firstDayOfWeek = val;
            if (this.initiated) {
                this.generateWeekDays();
                this.generateCalendar();
                this.cdRef.markForCheck();
            }
        }
    }
    get selectMode() {
        return this._selectMode;
    }
    set selectMode(val) {
        this._selectMode = val;
        if (this.initiated) {
            this.generateCalendar();
            this.cdRef.markForCheck();
        }
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        const oldSelected = this._selected;
        value = this.dateTimeAdapter.deserialize(value);
        this._selected = this.getValidDate(value);
        if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
            this.setSelectedDates();
        }
    }
    get selecteds() {
        return this._selecteds;
    }
    set selecteds(values) {
        this._selecteds = values.map((v) => {
            v = this.dateTimeAdapter.deserialize(v);
            return this.getValidDate(v);
        });
        this.setSelectedDates();
    }
    get pickerMoment() {
        return this._pickerMoment;
    }
    set pickerMoment(value) {
        const oldMoment = this._pickerMoment;
        value = this.dateTimeAdapter.deserialize(value);
        this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
        this.firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this._pickerMoment), this.dateTimeAdapter.getMonth(this._pickerMoment), 1);
        if (!this.isSameMonth(oldMoment, this._pickerMoment) && this.initiated) {
            this.generateCalendar();
        }
    }
    get dateFilter() {
        return this._dateFilter;
    }
    set dateFilter(filter) {
        this._dateFilter = filter;
        if (this.initiated) {
            this.generateCalendar();
            this.cdRef.markForCheck();
        }
    }
    get minDate() {
        return this._minDate;
    }
    set minDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._minDate = this.getValidDate(value);
        if (this.initiated) {
            this.generateCalendar();
            this.cdRef.markForCheck();
        }
    }
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._maxDate = this.getValidDate(value);
        if (this.initiated) {
            this.generateCalendar();
            this.cdRef.markForCheck();
        }
    }
    get weekdays() {
        return this._weekdays;
    }
    get days() {
        return this._days;
    }
    get activeCell() {
        if (this.pickerMoment) {
            return this.dateTimeAdapter.getDate(this.pickerMoment) + this.firstRowOffset - 1;
        }
    }
    get isInSingleMode() {
        return this.selectMode === 'single';
    }
    get isInRangeMode() {
        return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
            || this.selectMode === 'rangeTo';
    }
    get owlDTCalendarView() {
        return true;
    }
    ngOnInit() {
        this.generateWeekDays();
        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(() => {
            this.generateWeekDays();
            this.generateCalendar();
            this.cdRef.markForCheck();
        });
    }
    ngAfterContentInit() {
        this.generateCalendar();
        this.initiated = true;
    }
    ngOnDestroy() {
        this.localeSub.unsubscribe();
    }
    /**
     * Handle a calendarCell selected
     * @param {CalendarCell} cell
     * @return {void}
     * */
    selectCalendarCell(cell) {
        // Cases in which the date would not be selected
        // 1, the calendar cell is NOT enabled (is NOT valid)
        // 2, the selected date is NOT in current picker's month and the hideOtherMonths is enabled
        if (!cell.enabled || (this.hideOtherMonths && cell.out)) {
            return;
        }
        this.selectDate(cell.value);
    }
    /**
     * Handle a new date selected
     * @param {number} date -- a new date's numeric value
     * @return {void}
     * */
    selectDate(date) {
        const daysDiff = date - 1;
        const selected = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
        this.selectedChange.emit(selected);
        this.userSelection.emit();
    }
    /**
     * Handle keydown event on calendar body
     * @param {KeyboardEvent} event
     * @return {void}
     * */
    handleCalendarKeydown(event) {
        let moment;
        switch (event.keyCode) {
            // minus 1 day
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["LEFT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 day
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["RIGHT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            // minus 1 week
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -7);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 week
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 7);
                this.pickerMomentChange.emit(moment);
                break;
            // move to first day of current month
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["HOME"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1 - this.dateTimeAdapter.getDate(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            // move to last day of current month
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["END"]:
                moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment) -
                    this.dateTimeAdapter.getDate(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            // minus 1 month (or 1 year)
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["PAGE_UP"]:
                moment = event.altKey ?
                    this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1) :
                    this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 month (or 1 year)
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["PAGE_DOWN"]:
                moment = event.altKey ?
                    this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1) :
                    this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            // select the pickerMoment
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"]:
                if (!this.dateFilter || this.dateFilter(this.pickerMoment)) {
                    this.selectDate(this.dateTimeAdapter.getDate(this.pickerMoment));
                }
                break;
            default:
                return;
        }
        this.focusActiveCell();
        event.preventDefault();
    }
    /**
     * Generate the calendar weekdays array
     * */
    generateWeekDays() {
        const longWeekdays = this.dateTimeAdapter.getDayOfWeekNames('long');
        const shortWeekdays = this.dateTimeAdapter.getDayOfWeekNames('short');
        const narrowWeekdays = this.dateTimeAdapter.getDayOfWeekNames('narrow');
        const firstDayOfWeek = this.firstDayOfWeek;
        const weekdays = longWeekdays.map((long, i) => {
            return { long, short: shortWeekdays[i], narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        this.dateNames = this.dateTimeAdapter.getDateNames();
        return;
    }
    /**
     * Generate the calendar days array
     * */
    generateCalendar() {
        if (!this.pickerMoment) {
            return;
        }
        this.todayDate = null;
        // the first weekday of the month
        const startWeekdayOfMonth = this.dateTimeAdapter.getDay(this.firstDateOfMonth);
        const firstDayOfWeek = this.firstDayOfWeek;
        // the amount of days from the first date of the month
        // if it is < 0, it means the date is in previous month
        let daysDiff = 0 - (startWeekdayOfMonth + (DAYS_PER_WEEK - firstDayOfWeek)) % DAYS_PER_WEEK;
        // the index of cell that contains the first date of the month
        this.firstRowOffset = Math.abs(daysDiff);
        this._days = [];
        for (let i = 0; i < WEEKS_PER_VIEW; i++) {
            const week = [];
            for (let j = 0; j < DAYS_PER_WEEK; j++) {
                const date = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
                const dateCell = this.createDateCell(date, daysDiff);
                // check if the date is today
                if (this.dateTimeAdapter.isSameDay(this.dateTimeAdapter.now(), date)) {
                    this.todayDate = daysDiff + 1;
                }
                week.push(dateCell);
                daysDiff += 1;
            }
            this._days.push(week);
        }
        this.setSelectedDates();
    }
    /**
     * Creates CalendarCell for days.
     * @param {Date} date -- the date that the cell represents
     * @param {number} daysDiff -- the amount of days from the first date of the month
     * @return {CalendarCell}
     * */
    createDateCell(date, daysDiff) {
        // total days of the month
        const daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment);
        const dateNum = this.dateTimeAdapter.getDate(date);
        // const dateName = this.dateNames[dateNum - 1];
        const dateName = dateNum.toString();
        const ariaLabel = this.dateTimeAdapter.format(date, this.dateTimeFormats.dateA11yLabel);
        // check if the date if selectable
        const enabled = this.isDateEnabled(date);
        // check if date is not in current month
        const dayValue = daysDiff + 1;
        const out = dayValue < 1 || dayValue > daysInMonth;
        const cellClass = 'owl-dt-day-' + this.dateTimeAdapter.getDay(date);
        return new CalendarCell(dayValue, dateName, ariaLabel, enabled, out, cellClass);
    }
    /**
     * Check if the date is valid
     * @param date
     * @return {boolean}
     * */
    isDateEnabled(date) {
        return !!date &&
            (!this.dateFilter || this.dateFilter(date)) &&
            (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) &&
            (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0);
    }
    /**
     * Get a valid date object
     * @param {any} obj -- The object to check.
     * @return {Date | null} -- The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDate(obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    }
    /**
     * Check if the give dates are none-null and in the same month
     * @param {Date} dateLeft
     * @param {Date} dateRight
     * @return {boolean}
     * */
    isSameMonth(dateLeft, dateRight) {
        return !!(dateLeft && dateRight &&
            this.dateTimeAdapter.isValid(dateLeft) && this.dateTimeAdapter.isValid(dateRight) &&
            this.dateTimeAdapter.getYear(dateLeft) === this.dateTimeAdapter.getYear(dateRight) &&
            this.dateTimeAdapter.getMonth(dateLeft) === this.dateTimeAdapter.getMonth(dateRight));
    }
    /**
     * Set the selectedDates value.
     * In single mode, it has only one value which represent the selected date
     * In range mode, it would has two values, one for the fromValue and the other for the toValue
     * */
    setSelectedDates() {
        this.selectedDates = [];
        if (!this.firstDateOfMonth) {
            return;
        }
        if (this.isInSingleMode && this.selected) {
            const dayDiff = this.dateTimeAdapter.differenceInCalendarDays(this.selected, this.firstDateOfMonth);
            this.selectedDates[0] = dayDiff + 1;
            return;
        }
        if (this.isInRangeMode && this.selecteds) {
            this.selectedDates = this.selecteds.map((selected) => {
                if (this.dateTimeAdapter.isValid(selected)) {
                    const dayDiff = this.dateTimeAdapter.differenceInCalendarDays(selected, this.firstDateOfMonth);
                    return dayDiff + 1;
                }
                else {
                    return null;
                }
            });
        }
    }
    focusActiveCell() {
        this.calendarBodyElm.focusActiveCell();
    }
}
OwlMonthViewComponent.ɵfac = function OwlMonthViewComponent_Factory(t) { return new (t || OwlMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateTimeAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OWL_DATE_TIME_FORMATS, 8)); };
OwlMonthViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwlMonthViewComponent, selectors: [["owl-date-time-month-view"]], viewQuery: function OwlMonthViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](OwlCalendarBodyComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.calendarBodyElm = _t.first);
    } }, hostVars: 2, hostBindings: function OwlMonthViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-calendar-view", ctx.owlDTCalendarView);
    } }, inputs: { hideOtherMonths: "hideOtherMonths", firstDayOfWeek: "firstDayOfWeek", selectMode: "selectMode", selected: "selected", selecteds: "selecteds", pickerMoment: "pickerMoment", dateFilter: "dateFilter", minDate: "minDate", maxDate: "maxDate" }, outputs: { selectedChange: "selectedChange", userSelection: "userSelection", pickerMomentChange: "pickerMomentChange" }, exportAs: ["owlYearView"], decls: 7, vars: 8, consts: [[1, "owl-dt-calendar-table", "owl-dt-calendar-month-table"], [1, "owl-dt-calendar-header"], [1, "owl-dt-weekdays"], ["class", "owl-dt-weekday", "scope", "col", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", "colspan", "7", 1, "owl-dt-calendar-table-divider"], ["owl-date-time-calendar-body", "", "role", "grid", 3, "rows", "todayValue", "selectedValues", "selectMode", "activeCell", "keydown", "select"], ["scope", "col", 1, "owl-dt-weekday"]], template: function OwlMonthViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OwlMonthViewComponent_th_3_Template, 3, 2, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function OwlMonthViewComponent_Template_tbody_keydown_6_listener($event) { return ctx.handleCalendarKeydown($event); })("select", function OwlMonthViewComponent_Template_tbody_select_6_listener($event) { return ctx.selectCalendarCell($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-calendar-only-current-month", ctx.hideOtherMonths);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.weekdays);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.days)("todayValue", ctx.todayDate)("selectedValues", ctx.selectedDates)("selectMode", ctx.selectMode)("activeCell", ctx.activeCell);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], OwlCalendarBodyComponent], styles: [""], changeDetection: 0 });
OwlMonthViewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: DateTimeAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DATE_TIME_FORMATS,] }] }
];
OwlMonthViewComponent.propDecorators = {
    hideOtherMonths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    firstDayOfWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selecteds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pickerMoment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    pickerMomentChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    calendarBodyElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [OwlCalendarBodyComponent, { static: true },] }],
    owlDTCalendarView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-calendar-view',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlMonthViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'owl-date-time-month-view',
                exportAs: 'owlYearView',
                template: "<table class=\"owl-dt-calendar-table owl-dt-calendar-month-table\"\r\n       [class.owl-dt-calendar-only-current-month]=\"hideOtherMonths\">\r\n    <thead class=\"owl-dt-calendar-header\">\r\n    <tr class=\"owl-dt-weekdays\">\r\n        <th *ngFor=\"let weekday of weekdays\"\r\n            [attr.aria-label]=\"weekday.long\"\r\n            class=\"owl-dt-weekday\" scope=\"col\">\r\n            <span>{{weekday.short}}</span>\r\n        </th>\r\n    </tr>\r\n    <tr>\r\n        <th class=\"owl-dt-calendar-table-divider\" aria-hidden=\"true\" colspan=\"7\"></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody owl-date-time-calendar-body role=\"grid\"\r\n           [rows]=\"days\" [todayValue]=\"todayDate\"\r\n           [selectedValues]=\"selectedDates\"\r\n           [selectMode]=\"selectMode\"\r\n           [activeCell]=\"activeCell\"\r\n           (keydown)=\"handleCalendarKeydown($event)\"\r\n           (select)=\"selectCalendarCell($event)\">\r\n    </tbody>\r\n</table>\r\n",
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: DateTimeAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DATE_TIME_FORMATS]
            }] }]; }, { hideOtherMonths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pickerMomentChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], firstDayOfWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selecteds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pickerMoment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], owlDTCalendarView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-calendar-view']
        }], calendarBodyElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [OwlCalendarBodyComponent, { static: true }]
        }] }); })();

/**
 * calendar-year-view.component
 */
const MONTHS_PER_YEAR = 12;
const MONTHS_PER_ROW = 3;
class OwlYearViewComponent {
    constructor(cdRef, dateTimeAdapter, dateTimeFormats) {
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        /**
         * The select mode of the picker;
         * */
        this._selectMode = 'single';
        this._selecteds = [];
        this.localeSub = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
        this.initiated = false;
        /**
         * An array to hold all selectedDates' month value
         * the value is the month number in current year
         * */
        this.selectedMonths = [];
        /**
         * Callback to invoke when a new month is selected
         * */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         * */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when any date is activated. */
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when use keyboard enter to select a calendar cell */
        this.keyboardEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.monthNames = this.dateTimeAdapter.getMonthNames('short');
    }
    get selectMode() {
        return this._selectMode;
    }
    set selectMode(val) {
        this._selectMode = val;
        if (this.initiated) {
            this.generateMonthList();
            this.cdRef.markForCheck();
        }
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._selected = this.getValidDate(value);
        this.setSelectedMonths();
    }
    get selecteds() {
        return this._selecteds;
    }
    set selecteds(values) {
        this._selecteds = [];
        for (let i = 0; i < values.length; i++) {
            const value = this.dateTimeAdapter.deserialize(values[i]);
            this._selecteds.push(this.getValidDate(value));
        }
        this.setSelectedMonths();
    }
    get pickerMoment() {
        return this._pickerMoment;
    }
    set pickerMoment(value) {
        const oldMoment = this._pickerMoment;
        value = this.dateTimeAdapter.deserialize(value);
        this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
        if (!this.hasSameYear(oldMoment, this._pickerMoment) && this.initiated) {
            this.generateMonthList();
        }
    }
    get dateFilter() {
        return this._dateFilter;
    }
    set dateFilter(filter) {
        this._dateFilter = filter;
        if (this.initiated) {
            this.generateMonthList();
        }
    }
    get minDate() {
        return this._minDate;
    }
    set minDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._minDate = this.getValidDate(value);
        if (this.initiated) {
            this.generateMonthList();
        }
    }
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._maxDate = this.getValidDate(value);
        if (this.initiated) {
            this.generateMonthList();
        }
    }
    get months() {
        return this._months;
    }
    get activeCell() {
        if (this._pickerMoment) {
            return this.dateTimeAdapter.getMonth(this._pickerMoment);
        }
    }
    get isInSingleMode() {
        return this.selectMode === 'single';
    }
    get isInRangeMode() {
        return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
            || this.selectMode === 'rangeTo';
    }
    get owlDTCalendarView() {
        return true;
    }
    ngOnInit() {
        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(() => {
            this.generateMonthList();
            this.cdRef.markForCheck();
        });
    }
    ngAfterContentInit() {
        this.generateMonthList();
        this.initiated = true;
    }
    ngOnDestroy() {
        this.localeSub.unsubscribe();
    }
    /**
     * Handle a calendarCell selected
     * @param {CalendarCell} cell
     * @return {void}
     * */
    selectCalendarCell(cell) {
        this.selectMonth(cell.value);
    }
    /**
     * Handle a new month selected
     * @param {number} month -- a new month's numeric value
     * @return {void}
     * */
    selectMonth(month) {
        const firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
        this.monthSelected.emit(firstDateOfMonth);
        const daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
        const result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
        this.change.emit(result);
    }
    /**
     * Handle keydown event on calendar body
     * @param {KeyboardEvent} event
     * @return {void}
     * */
    handleCalendarKeydown(event) {
        let moment;
        switch (event.keyCode) {
            // minus 1 month
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["LEFT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 month
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["RIGHT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            // minus 3 months
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -3);
                this.pickerMomentChange.emit(moment);
                break;
            // add 3 months
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 3);
                this.pickerMomentChange.emit(moment);
                break;
            // move to first month of current year
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["HOME"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -this.dateTimeAdapter.getMonth(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            // move to last month of current year
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["END"]:
                moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 11 - this.dateTimeAdapter.getMonth(this.pickerMoment));
                this.pickerMomentChange.emit(moment);
                break;
            // minus 1 year (or 10 year)
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["PAGE_UP"]:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? -10 : -1);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 year (or 10 year)
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["PAGE_DOWN"]:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? 10 : 1);
                this.pickerMomentChange.emit(moment);
                break;
            // Select current month
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"]:
                this.selectMonth(this.dateTimeAdapter.getMonth(this.pickerMoment));
                this.keyboardEnter.emit();
                break;
            default:
                return;
        }
        this.focusActiveCell();
        event.preventDefault();
    }
    /**
     * Generate the calendar month list
     * */
    generateMonthList() {
        if (!this.pickerMoment) {
            return;
        }
        this.setSelectedMonths();
        this.todayMonth = this.getMonthInCurrentYear(this.dateTimeAdapter.now());
        this._months = [];
        for (let i = 0; i < MONTHS_PER_YEAR / MONTHS_PER_ROW; i++) {
            const row = [];
            for (let j = 0; j < MONTHS_PER_ROW; j++) {
                const month = j + i * MONTHS_PER_ROW;
                const monthCell = this.createMonthCell(month);
                row.push(monthCell);
            }
            this._months.push(row);
        }
        return;
    }
    /**
     * Creates an CalendarCell for the given month.
     * @param {number} month
     * @return {CalendarCell}
     * */
    createMonthCell(month) {
        const startDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
        const ariaLabel = this.dateTimeAdapter.format(startDateOfMonth, this.dateTimeFormats.monthYearA11yLabel);
        const cellClass = 'owl-dt-month-' + month;
        return new CalendarCell(month, this.monthNames[month], ariaLabel, this.isMonthEnabled(month), false, cellClass);
    }
    /**
     * Check if the given month is enable
     * @param {number} month -- the month's numeric value
     * @return {boolean}
     * */
    isMonthEnabled(month) {
        const firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
        // If any date in the month is selectable,
        // we count the month as enable
        for (let date = firstDateOfMonth; this.dateTimeAdapter.getMonth(date) === month; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
            if (!!date &&
                (!this.dateFilter || this.dateFilter(date)) &&
                (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) &&
                (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @param {Date | null} date
     * @return {number | null}
     */
    getMonthInCurrentYear(date) {
        if (this.getValidDate(date) && this.getValidDate(this._pickerMoment)) {
            const result = this.dateTimeAdapter.compareYear(date, this._pickerMoment);
            // < 0 : the given date's year is before pickerMoment's year, we return -1 as selected month value.
            // > 0 : the given date's year is after pickerMoment's year, we return 12 as selected month value.
            // 0 : the give date's year is same as the pickerMoment's year, we return the actual month value.
            if (result < 0) {
                return -1;
            }
            else if (result > 0) {
                return 12;
            }
            else {
                return this.dateTimeAdapter.getMonth(date);
            }
        }
        else {
            return null;
        }
    }
    /**
     * Set the selectedMonths value
     * In single mode, it has only one value which represent the month the selected date in
     * In range mode, it would has two values, one for the month the fromValue in and the other for the month the toValue in
     * */
    setSelectedMonths() {
        this.selectedMonths = [];
        if (this.isInSingleMode && this.selected) {
            this.selectedMonths[0] = this.getMonthInCurrentYear(this.selected);
        }
        if (this.isInRangeMode && this.selecteds) {
            this.selectedMonths[0] = this.getMonthInCurrentYear(this.selecteds[0]);
            this.selectedMonths[1] = this.getMonthInCurrentYear(this.selecteds[1]);
        }
    }
    /**
     * Check the given dates are in the same year
     * @param {Date} dateLeft
     * @param {Date} dateRight
     * @return {boolean}
     * */
    hasSameYear(dateLeft, dateRight) {
        return !!(dateLeft && dateRight &&
            this.dateTimeAdapter.getYear(dateLeft) === this.dateTimeAdapter.getYear(dateRight));
    }
    /**
     * Get a valid date object
     * @param {any} obj -- The object to check.
     * @return {Date | null} -- The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDate(obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    }
    focusActiveCell() {
        this.calendarBodyElm.focusActiveCell();
    }
}
OwlYearViewComponent.ɵfac = function OwlYearViewComponent_Factory(t) { return new (t || OwlYearViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateTimeAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OWL_DATE_TIME_FORMATS, 8)); };
OwlYearViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwlYearViewComponent, selectors: [["owl-date-time-year-view"]], viewQuery: function OwlYearViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](OwlCalendarBodyComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.calendarBodyElm = _t.first);
    } }, hostVars: 2, hostBindings: function OwlYearViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-calendar-view", ctx.owlDTCalendarView);
    } }, inputs: { selectMode: "selectMode", selected: "selected", selecteds: "selecteds", pickerMoment: "pickerMoment", dateFilter: "dateFilter", minDate: "minDate", maxDate: "maxDate" }, outputs: { change: "change", monthSelected: "monthSelected", pickerMomentChange: "pickerMomentChange", keyboardEnter: "keyboardEnter" }, exportAs: ["owlMonthView"], decls: 5, vars: 7, consts: [[1, "owl-dt-calendar-table", "owl-dt-calendar-year-table"], [1, "owl-dt-calendar-header"], ["aria-hidden", "true", "colspan", "3", 1, "owl-dt-calendar-table-divider"], ["owl-date-time-calendar-body", "", "role", "grid", 3, "rows", "numCols", "cellRatio", "activeCell", "todayValue", "selectedValues", "selectMode", "keydown", "select"]], template: function OwlYearViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function OwlYearViewComponent_Template_tbody_keydown_4_listener($event) { return ctx.handleCalendarKeydown($event); })("select", function OwlYearViewComponent_Template_tbody_select_4_listener($event) { return ctx.selectCalendarCell($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.months)("numCols", 3)("cellRatio", 3 / 7)("activeCell", ctx.activeCell)("todayValue", ctx.todayMonth)("selectedValues", ctx.selectedMonths)("selectMode", ctx.selectMode);
    } }, directives: [OwlCalendarBodyComponent], styles: [""], changeDetection: 0 });
OwlYearViewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: DateTimeAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DATE_TIME_FORMATS,] }] }
];
OwlYearViewComponent.propDecorators = {
    selectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selecteds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pickerMoment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    pickerMomentChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    keyboardEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    calendarBodyElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [OwlCalendarBodyComponent, { static: true },] }],
    owlDTCalendarView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-calendar-view',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlYearViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'owl-date-time-year-view',
                exportAs: 'owlMonthView',
                template: "<table class=\"owl-dt-calendar-table owl-dt-calendar-year-table\">\r\n    <thead class=\"owl-dt-calendar-header\">\r\n    <tr>\r\n        <th class=\"owl-dt-calendar-table-divider\" aria-hidden=\"true\" colspan=\"3\"></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody owl-date-time-calendar-body role=\"grid\"\r\n           [rows]=\"months\" [numCols]=\"3\" [cellRatio]=\"3 / 7\"\r\n           [activeCell]=\"activeCell\"\r\n           [todayValue]=\"todayMonth\"\r\n           [selectedValues]=\"selectedMonths\"\r\n           [selectMode]=\"selectMode\"\r\n           (keydown)=\"handleCalendarKeydown($event)\"\r\n           (select)=\"selectCalendarCell($event)\">\r\n    </tbody>\r\n</table>\r\n",
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: DateTimeAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DATE_TIME_FORMATS]
            }] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pickerMomentChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], keyboardEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], selectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selecteds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pickerMoment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], owlDTCalendarView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-calendar-view']
        }], calendarBodyElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [OwlCalendarBodyComponent, { static: true }]
        }] }); })();

/**
 * calendar-multi-year-view.component
 */
const YEARS_PER_ROW = 3;
const YEAR_ROWS = 7;
class OwlMultiYearViewComponent {
    constructor(cdRef, pickerIntl, dateTimeAdapter) {
        this.cdRef = cdRef;
        this.pickerIntl = pickerIntl;
        this.dateTimeAdapter = dateTimeAdapter;
        /**
         * The select mode of the picker;
         * */
        this._selectMode = 'single';
        this._selecteds = [];
        this.initiated = false;
        /**
         * Callback to invoke when a new month is selected
         * */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         * */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when any date is activated. */
        this.pickerMomentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when use keyboard enter to select a calendar cell */
        this.keyboardEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get selectMode() {
        return this._selectMode;
    }
    set selectMode(val) {
        this._selectMode = val;
        if (this.initiated) {
            this.setSelectedYears();
            this.cdRef.markForCheck();
        }
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        const oldSelected = this._selected;
        value = this.dateTimeAdapter.deserialize(value);
        this._selected = this.getValidDate(value);
        if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
            this.setSelectedYears();
        }
    }
    get selecteds() {
        return this._selecteds;
    }
    set selecteds(values) {
        this._selecteds = values.map((v) => {
            v = this.dateTimeAdapter.deserialize(v);
            return this.getValidDate(v);
        });
        this.setSelectedYears();
    }
    get pickerMoment() {
        return this._pickerMoment;
    }
    set pickerMoment(value) {
        const oldMoment = this._pickerMoment;
        value = this.dateTimeAdapter.deserialize(value);
        this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
        if (oldMoment && this._pickerMoment &&
            !this.isSameYearList(oldMoment, this._pickerMoment)) {
            this.generateYearList();
        }
    }
    get dateFilter() {
        return this._dateFilter;
    }
    set dateFilter(filter) {
        this._dateFilter = filter;
        if (this.initiated) {
            this.generateYearList();
        }
    }
    get minDate() {
        return this._minDate;
    }
    set minDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._minDate = this.getValidDate(value);
        if (this.initiated) {
            this.generateYearList();
        }
    }
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._maxDate = this.getValidDate(value);
        if (this.initiated) {
            this.generateYearList();
        }
    }
    get todayYear() {
        return this._todayYear;
    }
    get years() {
        return this._years;
    }
    get selectedYears() {
        return this._selectedYears;
    }
    get isInSingleMode() {
        return this.selectMode === 'single';
    }
    get isInRangeMode() {
        return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
            || this.selectMode === 'rangeTo';
    }
    get activeCell() {
        if (this._pickerMoment) {
            return this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS);
        }
    }
    get tableHeader() {
        if (this._years && this._years.length > 0) {
            return `${this._years[0][0].displayValue} ~ ${this._years[YEAR_ROWS - 1][YEARS_PER_ROW - 1].displayValue}`;
        }
    }
    get prevButtonLabel() {
        return this.pickerIntl.prevMultiYearLabel;
    }
    get nextButtonLabel() {
        return this.pickerIntl.nextMultiYearLabel;
    }
    get owlDTCalendarView() {
        return true;
    }
    get owlDTCalendarMultiYearView() {
        return true;
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this._todayYear = this.dateTimeAdapter.getYear(this.dateTimeAdapter.now());
        this.generateYearList();
        this.initiated = true;
    }
    /**
     * Handle a calendarCell selected
     * @param {CalendarCell} cell
     * @return {void}
     * */
    selectCalendarCell(cell) {
        this.selectYear(cell.value);
    }
    selectYear(year) {
        this.yearSelected.emit(this.dateTimeAdapter.createDate(year, 0, 1));
        const firstDateOfMonth = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), 1);
        const daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
        const selected = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
        this.change.emit(selected);
    }
    /**
     * Generate the previous year list
     * */
    prevYearList(event) {
        this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1 * YEAR_ROWS * YEARS_PER_ROW);
        this.generateYearList();
        event.preventDefault();
    }
    /**
     * Generate the next year list
     * */
    nextYearList(event) {
        this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, YEAR_ROWS * YEARS_PER_ROW);
        this.generateYearList();
        event.preventDefault();
    }
    generateYearList() {
        this._years = [];
        const pickerMomentYear = this.dateTimeAdapter.getYear(this._pickerMoment);
        const offset = pickerMomentYear % (YEARS_PER_ROW * YEAR_ROWS);
        for (let i = 0; i < YEAR_ROWS; i++) {
            const row = [];
            for (let j = 0; j < YEARS_PER_ROW; j++) {
                const year = pickerMomentYear - offset + (j + i * YEARS_PER_ROW);
                const yearCell = this.createYearCell(year);
                row.push(yearCell);
            }
            this._years.push(row);
        }
        return;
    }
    /** Whether the previous period button is enabled. */
    previousEnabled() {
        if (!this.minDate) {
            return true;
        }
        return !this.minDate || !this.isSameYearList(this._pickerMoment, this.minDate);
    }
    /** Whether the next period button is enabled. */
    nextEnabled() {
        return !this.maxDate || !this.isSameYearList(this._pickerMoment, this.maxDate);
    }
    handleCalendarKeydown(event) {
        let moment;
        switch (event.keyCode) {
            // minus 1 year
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["LEFT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1);
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 year
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["RIGHT_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, 1);
                this.pickerMomentChange.emit(moment);
                break;
            // minus 3 years
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1 * YEARS_PER_ROW);
                this.pickerMomentChange.emit(moment);
                break;
            // add 3 years
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, YEARS_PER_ROW);
                this.pickerMomentChange.emit(moment);
                break;
            // go to the first year of the year page
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["HOME"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS));
                this.pickerMomentChange.emit(moment);
                break;
            // go to the last year of the year page
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["END"]:
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, (YEARS_PER_ROW * YEAR_ROWS) - this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS) - 1);
                this.pickerMomentChange.emit(moment);
                break;
            // minus 1 year page (or 10 year pages)
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["PAGE_UP"]:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? -10 * (YEARS_PER_ROW * YEAR_ROWS) : -1 * (YEARS_PER_ROW * YEAR_ROWS));
                this.pickerMomentChange.emit(moment);
                break;
            // add 1 year page (or 10 year pages)
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["PAGE_DOWN"]:
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? 10 * (YEARS_PER_ROW * YEAR_ROWS) : (YEARS_PER_ROW * YEAR_ROWS));
                this.pickerMomentChange.emit(moment);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"]:
                this.selectYear(this.dateTimeAdapter.getYear(this._pickerMoment));
                this.keyboardEnter.emit();
                break;
            default:
                return;
        }
        this.focusActiveCell();
        event.preventDefault();
    }
    /**
     * Creates an CalendarCell for the given year.
     * @param {number} year
     * @return {CalendarCell}
     * */
    createYearCell(year) {
        const startDateOfYear = this.dateTimeAdapter.createDate(year, 0, 1);
        const ariaLabel = this.dateTimeAdapter.getYearName(startDateOfYear);
        const cellClass = 'owl-dt-year-' + year;
        return new CalendarCell(year, year.toString(), ariaLabel, this.isYearEnabled(year), false, cellClass);
    }
    setSelectedYears() {
        this._selectedYears = [];
        if (this.isInSingleMode && this.selected) {
            this._selectedYears[0] = this.dateTimeAdapter.getYear(this.selected);
        }
        if (this.isInRangeMode && this.selecteds) {
            this._selectedYears = this.selecteds.map((selected) => {
                if (this.dateTimeAdapter.isValid(selected)) {
                    return this.dateTimeAdapter.getYear(selected);
                }
                else {
                    return null;
                }
            });
        }
    }
    /** Whether the given year is enabled. */
    isYearEnabled(year) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this.maxDate && year > this.dateTimeAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this.dateTimeAdapter.getYear(this.minDate))) {
            return false;
        }
        // enable if it reaches here and there's no filter defined
        if (!this.dateFilter) {
            return true;
        }
        const firstOfYear = this.dateTimeAdapter.createDate(year, 0, 1);
        // If any date in the year is enabled count the year as enabled.
        for (let date = firstOfYear; this.dateTimeAdapter.getYear(date) == year; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    isSameYearList(date1, date2) {
        return Math.floor(this.dateTimeAdapter.getYear(date1) / (YEARS_PER_ROW * YEAR_ROWS)) ===
            Math.floor(this.dateTimeAdapter.getYear(date2) / (YEARS_PER_ROW * YEAR_ROWS));
    }
    /**
     * Get a valid date object
     * @param {any} obj -- The object to check.
     * @return {Date | null} -- The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDate(obj) {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj)) ? obj : null;
    }
    focusActiveCell() {
        this.calendarBodyElm.focusActiveCell();
    }
}
OwlMultiYearViewComponent.ɵfac = function OwlMultiYearViewComponent_Factory(t) { return new (t || OwlMultiYearViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OwlDateTimeIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateTimeAdapter, 8)); };
OwlMultiYearViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwlMultiYearViewComponent, selectors: [["owl-date-time-multi-year-view"]], viewQuery: function OwlMultiYearViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](OwlCalendarBodyComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.calendarBodyElm = _t.first);
    } }, hostVars: 4, hostBindings: function OwlMultiYearViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-calendar-view", ctx.owlDTCalendarView)("owl-dt-calendar-multi-year-view", ctx.owlDTCalendarMultiYearView);
    } }, inputs: { selectMode: "selectMode", selected: "selected", selecteds: "selecteds", pickerMoment: "pickerMoment", dateFilter: "dateFilter", minDate: "minDate", maxDate: "maxDate" }, outputs: { change: "change", yearSelected: "yearSelected", pickerMomentChange: "pickerMomentChange", keyboardEnter: "keyboardEnter" }, decls: 14, vars: 12, consts: [["type", "button", "tabindex", "0", 1, "owl-dt-control-button", "owl-dt-control-arrow-button", 3, "disabled", "click"], ["tabindex", "-1", 1, "owl-dt-control-button-content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", "width", "100%", "height", "100%", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"], [1, "owl-dt-calendar-table", "owl-dt-calendar-multi-year-table"], [1, "owl-dt-calendar-header"], ["colspan", "3"], ["owl-date-time-calendar-body", "", "role", "grid", 3, "rows", "numCols", "cellRatio", "activeCell", "todayValue", "selectedValues", "selectMode", "keydown", "select"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                C197.237,120.447,195.534,115.448,191.75,111.689z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"]], template: function OwlMultiYearViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlMultiYearViewComponent_Template_button_click_0_listener($event) { return ctx.prevYearList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function OwlMultiYearViewComponent_Template_tbody_keydown_9_listener($event) { return ctx.handleCalendarKeydown($event); })("select", function OwlMultiYearViewComponent_Template_tbody_select_9_listener($event) { return ctx.selectCalendarCell($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlMultiYearViewComponent_Template_button_click_10_listener($event) { return ctx.nextYearList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.previousEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tableHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.years)("numCols", 3)("cellRatio", 3 / 7)("activeCell", ctx.activeCell)("todayValue", ctx.todayYear)("selectedValues", ctx.selectedYears)("selectMode", ctx.selectMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.nextEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
    } }, directives: [OwlCalendarBodyComponent], styles: [""], changeDetection: 0 });
OwlMultiYearViewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: OwlDateTimeIntl },
    { type: DateTimeAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
OwlMultiYearViewComponent.propDecorators = {
    selectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selecteds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pickerMoment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    pickerMomentChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    keyboardEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    calendarBodyElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [OwlCalendarBodyComponent, { static: true },] }],
    owlDTCalendarView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-calendar-view',] }],
    owlDTCalendarMultiYearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-calendar-multi-year-view',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlMultiYearViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'owl-date-time-multi-year-view',
                template: "<button class=\"owl-dt-control-button owl-dt-control-arrow-button\"\r\n        [disabled]=\"!previousEnabled()\" [attr.aria-label]=\"prevButtonLabel\"\r\n        type=\"button\" tabindex=\"0\" (click)=\"prevYearList($event)\">\r\n    <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\r\n        <!-- <editor-fold desc=\"SVG Arrow Left\"> -->\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n             version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.738 250.738\"\r\n             style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\"\r\n             width=\"100%\" height=\"100%\">\r\n            <path style=\"fill-rule: evenodd; clip-rule: evenodd;\" d=\"M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z\"/>\r\n        </svg>\r\n        <!-- </editor-fold> -->\r\n    </span>\r\n</button>\r\n<table class=\"owl-dt-calendar-table owl-dt-calendar-multi-year-table\">\r\n    <thead class=\"owl-dt-calendar-header\">\r\n    <tr>\r\n        <th colspan=\"3\">{{tableHeader}}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody owl-date-time-calendar-body role=\"grid\"\r\n           [rows]=\"years\" [numCols]=\"3\" [cellRatio]=\"3 / 7\"\r\n           [activeCell]=\"activeCell\"\r\n           [todayValue]=\"todayYear\"\r\n           [selectedValues]=\"selectedYears\"\r\n           [selectMode]=\"selectMode\"\r\n           (keydown)=\"handleCalendarKeydown($event)\"\r\n           (select)=\"selectCalendarCell($event)\"></tbody>\r\n</table>\r\n<button class=\"owl-dt-control-button owl-dt-control-arrow-button\"\r\n        [disabled]=\"!nextEnabled()\" [attr.aria-label]=\"nextButtonLabel\"\r\n        type=\"button\" tabindex=\"0\" (click)=\"nextYearList($event)\">\r\n    <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\r\n        <!-- <editor-fold desc=\"SVG Arrow Right\"> -->\r\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n             viewBox=\"0 0 250.738 250.738\" style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\">\r\n            <path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\r\n                c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\r\n                c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\r\n                C197.237,120.447,195.534,115.448,191.75,111.689z\"/>\r\n        </svg>\r\n        <!-- </editor-fold> -->\r\n    </span>\r\n</button>\r\n",
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: OwlDateTimeIntl }, { type: DateTimeAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pickerMomentChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], keyboardEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], selectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selecteds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pickerMoment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], owlDTCalendarView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-calendar-view']
        }], owlDTCalendarMultiYearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-calendar-multi-year-view']
        }], calendarBodyElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [OwlCalendarBodyComponent, { static: true }]
        }] }); })();

/**
 * timer-box.component
 */
class OwlTimerBoxComponent {
    constructor() {
        this.showDivider = false;
        this.step = 1;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.inputStreamSub = rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"].EMPTY;
    }
    get displayValue() {
        return this.boxValue || this.value;
    }
    get owlDTTimerBoxClass() {
        return true;
    }
    ngOnInit() {
        this.inputStreamSub = this.inputStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])()).subscribe((val) => {
            if (val) {
                const inputValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(val, 0);
                this.updateValueViaInput(inputValue);
            }
        });
    }
    ngOnDestroy() {
        this.inputStreamSub.unsubscribe();
    }
    upBtnClicked() {
        this.updateValue(this.value + this.step);
    }
    downBtnClicked() {
        this.updateValue(this.value - this.step);
    }
    handleInputChange(val) {
        this.inputStream.next(val);
    }
    updateValue(value) {
        this.valueChange.emit(value);
    }
    updateValueViaInput(value) {
        if (value > this.max || value < this.min) {
            return;
        }
        this.inputChange.emit(value);
    }
}
OwlTimerBoxComponent.ɵfac = function OwlTimerBoxComponent_Factory(t) { return new (t || OwlTimerBoxComponent)(); };
OwlTimerBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwlTimerBoxComponent, selectors: [["owl-date-time-timer-box"]], hostVars: 2, hostBindings: function OwlTimerBoxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-timer-box", ctx.owlDTTimerBoxClass);
    } }, inputs: { showDivider: "showDivider", step: "step", upBtnAriaLabel: "upBtnAriaLabel", upBtnDisabled: "upBtnDisabled", downBtnAriaLabel: "downBtnAriaLabel", downBtnDisabled: "downBtnDisabled", boxValue: "boxValue", value: "value", min: "min", max: "max", inputLabel: "inputLabel" }, outputs: { valueChange: "valueChange", inputChange: "inputChange" }, exportAs: ["owlDateTimeTimerBox"], decls: 15, vars: 10, consts: [["class", "owl-dt-timer-divider", "aria-hidden", "true", 4, "ngIf"], ["type", "button", "tabindex", "-1", 1, "owl-dt-control-button", "owl-dt-control-arrow-button", 3, "disabled", "click"], ["tabindex", "-1", 1, "owl-dt-control-button-content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 451.847 451.846", 0, "xml", "space", "preserve", "width", "100%", "height", "100%", 2, "enable-background", "new 0 0 451.847 451.846"], ["d", "M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z"], [1, "owl-dt-timer-content"], ["maxlength", "2", 1, "owl-dt-timer-input", 3, "value", "input"], ["valueInput", ""], [1, "owl-hidden-accessible"], ["d", "M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"], ["aria-hidden", "true", 1, "owl-dt-timer-divider"]], template: function OwlTimerBoxComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlTimerBoxComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlTimerBoxComponent_Template_button_click_1_listener() { return ctx.upBtnClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function OwlTimerBoxComponent_Template_input_input_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); return ctx.handleInputChange(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "numberFixedLen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlTimerBoxComponent_Template_button_click_11_listener() { return ctx.downBtnClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDivider);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.upBtnDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.upBtnAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, ctx.displayValue, 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.inputLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.downBtnDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.downBtnAriaLabel);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]]; }, pipes: function () { return [NumberFixedLenPipe]; }, styles: [""], changeDetection: 0 });
OwlTimerBoxComponent.ctorParameters = () => [];
OwlTimerBoxComponent.propDecorators = {
    showDivider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    upBtnAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    upBtnDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    downBtnAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    downBtnDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    boxValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    inputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    owlDTTimerBoxClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-timer-box',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlTimerBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                exportAs: 'owlDateTimeTimerBox',
                selector: 'owl-date-time-timer-box',
                template: "<div *ngIf=\"showDivider\" class=\"owl-dt-timer-divider\" aria-hidden=\"true\"></div>\r\n<button class=\"owl-dt-control-button owl-dt-control-arrow-button\"\r\n        type=\"button\" tabindex=\"-1\"\r\n        [disabled]=\"upBtnDisabled\"\r\n        [attr.aria-label]=\"upBtnAriaLabel\"\r\n        (click)=\"upBtnClicked()\">\r\n    <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\r\n        <!-- <editor-fold desc=\"SVG Arrow Up\"> -->\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                 version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\"\r\n                 style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\"\r\n                 width=\"100%\" height=\"100%\">\r\n                    <path d=\"M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\r\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\r\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z\"/>\r\n                </svg>\r\n        <!-- </editor-fold> -->\r\n    </span>\r\n</button>\r\n<label class=\"owl-dt-timer-content\">\r\n    <input class=\"owl-dt-timer-input\" maxlength=\"2\"\r\n           [value]=\"displayValue | numberFixedLen : 2\"\r\n           (input)=\"handleInputChange(valueInput.value)\" #valueInput>\r\n    <span class=\"owl-hidden-accessible\">{{inputLabel}}</span>\r\n</label>\r\n<button class=\"owl-dt-control-button owl-dt-control-arrow-button\"\r\n        type=\"button\" tabindex=\"-1\"\r\n        [disabled]=\"downBtnDisabled\"\r\n        [attr.aria-label]=\"downBtnAriaLabel\"\r\n        (click)=\"downBtnClicked()\">\r\n    <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\r\n        <!-- <editor-fold desc=\"SVG Arrow Down\"> -->\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                 version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\"\r\n                 style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\"\r\n                 width=\"100%\" height=\"100%\">\r\n                    <path d=\"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\r\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\r\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z\"/>\r\n                </svg>\r\n        <!-- </editor-fold> -->\r\n    </span>\r\n</button>\r\n",
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [""]
            }]
    }], function () { return []; }, { showDivider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], inputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], owlDTTimerBoxClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-timer-box']
        }], upBtnAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], upBtnDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], downBtnAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], downBtnDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], boxValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * numberFixedLen.pipe
 */
class NumberFixedLenPipe {
    transform(num, len) {
        const number = Math.floor(num);
        const length = Math.floor(len);
        if (num === null || isNaN(number) || isNaN(length)) {
            return num;
        }
        let numString = number.toString();
        while (numString.length < length) {
            numString = '0' + numString;
        }
        return numString;
    }
}
NumberFixedLenPipe.ɵfac = function NumberFixedLenPipe_Factory(t) { return new (t || NumberFixedLenPipe)(); };
NumberFixedLenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "numberFixedLen", type: NumberFixedLenPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NumberFixedLenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'numberFixedLen'
            }]
    }], null, null); })();

/**
 * date-time-inline.component
 */
const OWL_DATETIME_VALUE_ACCESSOR$1 = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => OwlDateTimeInlineComponent),
    multi: true
};
class OwlDateTimeInlineComponent extends OwlDateTime {
    constructor(changeDetector, dateTimeAdapter, dateTimeFormats) {
        super(dateTimeAdapter, dateTimeFormats);
        this.changeDetector = changeDetector;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        /**
         * Set the type of the dateTime picker
         *      'both' -- show both calendar and timer
         *      'calendar' -- show only calendar
         *      'timer' -- show only timer
         * @default 'both'
         * @type {'both' | 'calendar' | 'timer'}
         * */
        this._pickerType = 'both';
        this._disabled = false;
        this._selectMode = 'single';
        this._values = [];
        /**
         * Emits selected year in multi-year view
         * This doesn't imply a change on the selected date.
         * */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits selected month in year view
         * This doesn't imply a change on the selected date.
         * */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._selecteds = [];
        this.onModelChange = () => {
        };
        this.onModelTouched = () => {
        };
    }
    get pickerType() {
        return this._pickerType;
    }
    set pickerType(val) {
        if (val !== this._pickerType) {
            this._pickerType = val;
        }
    }
    get disabled() {
        return !!this._disabled;
    }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
    }
    get selectMode() {
        return this._selectMode;
    }
    set selectMode(mode) {
        if (mode !== 'single' && mode !== 'range' &&
            mode !== 'rangeFrom' && mode !== 'rangeTo') {
            throw Error('OwlDateTime Error: invalid selectMode value!');
        }
        this._selectMode = mode;
    }
    get startAt() {
        if (this._startAt) {
            return this._startAt;
        }
        if (this.selectMode === 'single') {
            return this.value || null;
        }
        else if (this.selectMode === 'range' ||
            this.selectMode === 'rangeFrom') {
            return this.values[0] || null;
        }
        else if (this.selectMode === 'rangeTo') {
            return this.values[1] || null;
        }
        else {
            return null;
        }
    }
    set startAt(date) {
        this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
    }
    get dateTimeFilter() {
        return this._dateTimeFilter;
    }
    set dateTimeFilter(filter) {
        this._dateTimeFilter = filter;
    }
    get minDateTime() {
        return this._min || null;
    }
    set minDateTime(value) {
        this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
        this.changeDetector.markForCheck();
    }
    get maxDateTime() {
        return this._max || null;
    }
    set maxDateTime(value) {
        this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
        this.changeDetector.markForCheck();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        value = this.dateTimeAdapter.deserialize(value);
        value = this.getValidDate(value);
        this._value = value;
        this.selected = value;
    }
    get values() {
        return this._values;
    }
    set values(values) {
        if (values && values.length > 0) {
            values = values.map((v) => {
                v = this.dateTimeAdapter.deserialize(v);
                v = this.getValidDate(v);
                return v ? this.dateTimeAdapter.clone(v) : null;
            });
            this._values = [...values];
            this.selecteds = [...values];
        }
        else {
            this._values = [];
            this.selecteds = [];
        }
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        this.changeDetector.markForCheck();
    }
    get selecteds() {
        return this._selecteds;
    }
    set selecteds(values) {
        this._selecteds = values;
        this.changeDetector.markForCheck();
    }
    get opened() {
        return true;
    }
    get pickerMode() {
        return 'inline';
    }
    get isInSingleMode() {
        return this._selectMode === 'single';
    }
    get isInRangeMode() {
        return this._selectMode === 'range' || this._selectMode === 'rangeFrom'
            || this._selectMode === 'rangeTo';
    }
    get owlDTInlineClass() {
        return true;
    }
    ngOnInit() {
        this.container.picker = this;
    }
    writeValue(value) {
        if (this.isInSingleMode) {
            this.value = value;
            this.container.pickerMoment = value;
        }
        else {
            this.values = value;
            this.container.pickerMoment = this._values[this.container.activeSelectedIndex];
        }
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    select(date) {
        if (this.disabled) {
            return;
        }
        if (Array.isArray(date)) {
            this.values = [...date];
        }
        else {
            this.value = date;
        }
        this.onModelChange(date);
        this.onModelTouched();
    }
    /**
     * Emits the selected year in multi-year view
     * */
    selectYear(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /**
     * Emits selected month in year view
     * */
    selectMonth(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
}
OwlDateTimeInlineComponent.ɵfac = function OwlDateTimeInlineComponent_Factory(t) { return new (t || OwlDateTimeInlineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateTimeAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OWL_DATE_TIME_FORMATS, 8)); };
OwlDateTimeInlineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwlDateTimeInlineComponent, selectors: [["owl-date-time-inline"]], viewQuery: function OwlDateTimeInlineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](OwlDateTimeContainerComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, hostVars: 2, hostBindings: function OwlDateTimeInlineComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("owl-dt-inline", ctx.owlDTInlineClass);
    } }, inputs: { pickerType: "pickerType", disabled: "disabled", selectMode: "selectMode", startAt: "startAt", dateTimeFilter: ["owlDateTimeFilter", "dateTimeFilter"], minDateTime: ["min", "minDateTime"], maxDateTime: ["max", "maxDateTime"], value: "value", values: "values" }, outputs: { yearSelected: "yearSelected", monthSelected: "monthSelected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            OWL_DATETIME_VALUE_ACCESSOR$1,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function OwlDateTimeInlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "owl-date-time-container");
    } }, directives: [OwlDateTimeContainerComponent], styles: [""], changeDetection: 0 });
OwlDateTimeInlineComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: DateTimeAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DATE_TIME_FORMATS,] }] }
];
OwlDateTimeInlineComponent.propDecorators = {
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [OwlDateTimeContainerComponent, { static: true },] }],
    pickerType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dateTimeFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['owlDateTimeFilter',] }],
    minDateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['min',] }],
    maxDateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['max',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    values: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    owlDTInlineClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.owl-dt-inline',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlDateTimeInlineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'owl-date-time-inline',
                template: "<owl-date-time-container></owl-date-time-container>",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                providers: [
                    OWL_DATETIME_VALUE_ACCESSOR$1,
                ],
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: DateTimeAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DATE_TIME_FORMATS]
            }] }]; }, { yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pickerType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dateTimeFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['owlDateTimeFilter']
        }], minDateTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['min']
        }], maxDateTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['max']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], owlDTInlineClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.owl-dt-inline']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [OwlDateTimeContainerComponent, { static: true }]
        }] }); })();

/**
 * dialog.module
 */
class OwlDialogModule {
}
OwlDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OwlDialogModule });
OwlDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OwlDialogModule_Factory(t) { return new (t || OwlDialogModule)(); }, providers: [
        OWL_DIALOG_SCROLL_STRATEGY_PROVIDER,
        OwlDialogService,
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OwlDialogModule, { declarations: function () { return [OwlDialogContainerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"]],
                exports: [],
                declarations: [
                    OwlDialogContainerComponent,
                ],
                providers: [
                    OWL_DIALOG_SCROLL_STRATEGY_PROVIDER,
                    OwlDialogService,
                ],
                entryComponents: [
                    OwlDialogContainerComponent,
                ]
            }]
    }], null, null); })();

/**
 * date-time.module
 */
class OwlDateTimeModule {
}
OwlDateTimeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OwlDateTimeModule });
OwlDateTimeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OwlDateTimeModule_Factory(t) { return new (t || OwlDateTimeModule)(); }, providers: [
        // OwlDateTimeIntl,
        OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER,
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], OwlDialogModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OwlDateTimeModule, { declarations: function () { return [OwlDateTimeTriggerDirective, OwlDateTimeInputDirective, OwlDateTimeComponent, OwlDateTimeContainerComponent, OwlMultiYearViewComponent, OwlYearViewComponent, OwlMonthViewComponent, OwlTimerComponent, OwlTimerBoxComponent, OwlCalendarComponent, OwlCalendarBodyComponent, NumberFixedLenPipe, OwlDateTimeInlineComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], OwlDialogModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"]]; }, exports: function () { return [OwlCalendarComponent, OwlTimerComponent, OwlDateTimeTriggerDirective, OwlDateTimeInputDirective, OwlDateTimeComponent, OwlDateTimeInlineComponent, OwlMultiYearViewComponent, OwlYearViewComponent, OwlMonthViewComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlDateTimeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], OwlDialogModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"]],
                exports: [
                    OwlCalendarComponent,
                    OwlTimerComponent,
                    OwlDateTimeTriggerDirective,
                    OwlDateTimeInputDirective,
                    OwlDateTimeComponent,
                    OwlDateTimeInlineComponent,
                    OwlMultiYearViewComponent,
                    OwlYearViewComponent,
                    OwlMonthViewComponent,
                ],
                declarations: [
                    OwlDateTimeTriggerDirective,
                    OwlDateTimeInputDirective,
                    OwlDateTimeComponent,
                    OwlDateTimeContainerComponent,
                    OwlMultiYearViewComponent,
                    OwlYearViewComponent,
                    OwlMonthViewComponent,
                    OwlTimerComponent,
                    OwlTimerBoxComponent,
                    OwlCalendarComponent,
                    OwlCalendarBodyComponent,
                    NumberFixedLenPipe,
                    OwlDateTimeInlineComponent,
                ],
                providers: [
                    // OwlDateTimeIntl,
                    OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER,
                ],
                entryComponents: [OwlDateTimeContainerComponent]
            }]
    }], null, null); })();

/**
 * native-date-time-adapter.class
 */
/** The default month names to use if Intl API is not available. */
const DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
/** The default day of the week names to use if Intl API is not available. */
const DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
const ɵ0$1 = i => String(i + 1);
/** The default date names to use if Intl API is not available. */
const DEFAULT_DATE_NAMES = range$1(31, ɵ0$1);
/** Whether the browser supports the Intl API. */
const SUPPORTS_INTL_API = typeof Intl !== 'undefined';
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 */
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/** Creates an array and fills it with values. */
function range$1(length, valueFunction) {
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
class NativeDateTimeAdapter extends DateTimeAdapter {
    constructor(owlDateTimeLocale, platform) {
        super();
        this.owlDateTimeLocale = owlDateTimeLocale;
        super.setLocale(owlDateTimeLocale);
        // IE does its own time zone correction, so we disable this on IE.
        this.useUtcForDisplay = !platform.TRIDENT;
        this._clampDate = platform.TRIDENT || platform.EDGE;
    }
    getYear(date) {
        return date.getFullYear();
    }
    getMonth(date) {
        return date.getMonth();
    }
    getDay(date) {
        return date.getDay();
    }
    getDate(date) {
        return date.getDate();
    }
    getHours(date) {
        return date.getHours();
    }
    getMinutes(date) {
        return date.getMinutes();
    }
    getSeconds(date) {
        return date.getSeconds();
    }
    getTime(date) {
        return date.getTime();
    }
    getNumDaysInMonth(date) {
        const lastDateOfMonth = this.createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0);
        return this.getDate(lastDateOfMonth);
    }
    differenceInCalendarDays(dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            const dateLeftStartOfDay = this.createDate(this.getYear(dateLeft), this.getMonth(dateLeft), this.getDate(dateLeft));
            const dateRightStartOfDay = this.createDate(this.getYear(dateRight), this.getMonth(dateRight), this.getDate(dateRight));
            const timeStampLeft = this.getTime(dateLeftStartOfDay) - dateLeftStartOfDay.getTimezoneOffset() * this.milliseondsInMinute;
            const timeStampRight = this.getTime(dateRightStartOfDay) - dateRightStartOfDay.getTimezoneOffset() * this.milliseondsInMinute;
            return Math.round((timeStampLeft - timeStampRight) / this.millisecondsInDay);
        }
        else {
            return null;
        }
    }
    getYearName(date) {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
            return this.stripDirectionalityCharacters(this._format(dtf, date));
        }
        return String(this.getYear(date));
    }
    getMonthNames(style) {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: 'utc' });
            return range$1(12, i => this.stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1))));
        }
        return DEFAULT_MONTH_NAMES[style];
    }
    getDayOfWeekNames(style) {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: 'utc' });
            return range$1(7, i => this.stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    }
    getDateNames() {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
            return range$1(31, i => this.stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
        }
        return DEFAULT_DATE_NAMES;
    }
    toIso8601(date) {
        return date.toISOString();
    }
    isEqual(dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            return dateLeft.getTime() === dateRight.getTime();
        }
        else {
            return false;
        }
    }
    isSameDay(dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            const dateLeftStartOfDay = this.clone(dateLeft);
            const dateRightStartOfDay = this.clone(dateRight);
            dateLeftStartOfDay.setHours(0, 0, 0, 0);
            dateRightStartOfDay.setHours(0, 0, 0, 0);
            return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
        }
        else {
            return false;
        }
    }
    isValid(date) {
        return date && !isNaN(date.getTime());
    }
    invalid() {
        return new Date(NaN);
    }
    isDateInstance(obj) {
        return obj instanceof Date;
    }
    addCalendarYears(date, amount) {
        return this.addCalendarMonths(date, amount * 12);
    }
    addCalendarMonths(date, amount) {
        const result = this.clone(date);
        amount = Number(amount);
        const desiredMonth = result.getMonth() + amount;
        const dateWithDesiredMonth = new Date(0);
        dateWithDesiredMonth.setFullYear(result.getFullYear(), desiredMonth, 1);
        dateWithDesiredMonth.setHours(0, 0, 0, 0);
        const daysInMonth = this.getNumDaysInMonth(dateWithDesiredMonth);
        // Set the last day of the new month
        // if the original date was the last day of the longer month
        result.setMonth(desiredMonth, Math.min(daysInMonth, result.getDate()));
        return result;
    }
    addCalendarDays(date, amount) {
        const result = this.clone(date);
        amount = Number(amount);
        result.setDate(result.getDate() + amount);
        return result;
    }
    setHours(date, amount) {
        const result = this.clone(date);
        result.setHours(amount);
        return result;
    }
    setMinutes(date, amount) {
        const result = this.clone(date);
        result.setMinutes(amount);
        return result;
    }
    setSeconds(date, amount) {
        const result = this.clone(date);
        result.setSeconds(amount);
        return result;
    }
    createDate(year, month, date, hours = 0, minutes = 0, seconds = 0) {
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        if (hours < 0 || hours > 23) {
            throw Error(`Invalid hours "${hours}". Hours has to be between 0 and 23.`);
        }
        if (minutes < 0 || minutes > 59) {
            throw Error(`Invalid minutes "${minutes}". Minutes has to between 0 and 59.`);
        }
        if (seconds < 0 || seconds > 59) {
            throw Error(`Invalid seconds "${seconds}". Seconds has to be between 0 and 59.`);
        }
        const result = this.createDateWithOverflow(year, month, date, hours, minutes, seconds);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        // For example, createDate(2017, 1, 31) would try to create a date 2017/02/31 which is invalid
        if (result.getMonth() !== month) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    clone(date) {
        return this.createDate(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHours(date), this.getMinutes(date), this.getSeconds(date));
    }
    now() {
        return new Date();
    }
    format(date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error('JSNativeDate: Cannot format invalid date.');
        }
        if (SUPPORTS_INTL_API) {
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }
            displayFormat = Object.assign(Object.assign({}, displayFormat), { timeZone: 'utc' });
            const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this.stripDirectionalityCharacters(this._format(dtf, date));
        }
        return this.stripDirectionalityCharacters(date.toDateString());
    }
    parse(value, parseFormat) {
        // There is no way using the native JS Date to set the parse format or locale
        if (typeof value === 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     */
    deserialize(value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.
            if (ISO_8601_REGEX.test(value)) {
                const date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return super.deserialize(value);
    }
    /**
     * Creates a date but allows the month and date to overflow.
     * @param {number} year
     * @param {number} month
     * @param {number} date
     * @param {number} hours -- default 0
     * @param {number} minutes -- default 0
     * @param {number} seconds -- default 0
     * @returns The new date, or null if invalid.
     * */
    createDateWithOverflow(year, month, date, hours = 0, minutes = 0, seconds = 0) {
        const result = new Date(year, month, date, hours, minutes, seconds);
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    }
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param str The string to strip direction characters from.
     * @returns The stripped string.
     */
    stripDirectionalityCharacters(str) {
        return str.replace(/[\u200e\u200f]/g, '');
    }
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param date Date from which we want to get the string representation according to dtf
     * @returns A Date object with its UTC representation based on the passed in date info
     */
    _format(dtf, date) {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        return dtf.format(d);
    }
}
NativeDateTimeAdapter.ɵfac = function NativeDateTimeAdapter_Factory(t) { return new (t || NativeDateTimeAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OWL_DATE_TIME_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"])); };
NativeDateTimeAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NativeDateTimeAdapter, factory: NativeDateTimeAdapter.ɵfac });
NativeDateTimeAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OWL_DATE_TIME_LOCALE,] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NativeDateTimeAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [OWL_DATE_TIME_LOCALE]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"] }]; }, null); })();

const OWL_NATIVE_DATE_TIME_FORMATS = {
    parseInput: null,
    fullPickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' },
    datePickerInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
    timePickerInput: { hour: 'numeric', minute: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
};

/**
 * native-date-time.module
 */
class NativeDateTimeModule {
}
NativeDateTimeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NativeDateTimeModule });
NativeDateTimeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NativeDateTimeModule_Factory(t) { return new (t || NativeDateTimeModule)(); }, providers: [
        { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter },
    ], imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NativeDateTimeModule, { imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NativeDateTimeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"]],
                providers: [
                    { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter },
                ]
            }]
    }], null, null); })();
const ɵ0$2 = OWL_NATIVE_DATE_TIME_FORMATS;
class OwlNativeDateTimeModule {
}
OwlNativeDateTimeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OwlNativeDateTimeModule });
OwlNativeDateTimeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OwlNativeDateTimeModule_Factory(t) { return new (t || OwlNativeDateTimeModule)(); }, providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: ɵ0$2 }], imports: [[NativeDateTimeModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OwlNativeDateTimeModule, { imports: [NativeDateTimeModule] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlNativeDateTimeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [NativeDateTimeModule],
                providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: ɵ0$2 }]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-pick-datetime
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=busacca-ng-pick-datetime.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/datepicker/datepicker.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/datepicker/datepicker.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-box\">\n\n    <ng-container *ngIf=\"type == 'date'\">\n        <label [ngClass]=\"labelText == '' ? 'd-none' : ''\" for=\"{{fieldName}}\">{{labelText}}<span *ngIf=\"isFieldRequired()\" class=\"ml-2 text-warn font-medium\">*</span></label>\n       \n        <input class=\"form-control h-0\" name=\"{{fieldName}}\" [owlDateTime]=\"index\"\n        [owlDateTimeTrigger]=\"index\" placeholder=\"Date\" [(ngModel)]=\"selectedDate\" (ngModelChange)=\"onPickerChange()\" [disabled]=\"isDisabled\" >\n\n        <input class=\"form-control\" [ngClass]=\"fieldClass\" type=\"text\" name=\"{{fieldName}}\" [owlDateTimeTrigger]=\"index\" placeholder=\"Date\"\n        [value]=\"fieldModel | userDateFormat:timeZone\" [readonly]=\"fieldReadonly\" autocomplete=\"off\"/>\n    \n        <owl-date-time #index [pickerType]=\"'calendar'\"></owl-date-time>\n        <div class=\"date-btn\" [ngClass]=\"fieldClass\" [owlDateTimeTrigger]=\"index\">\n            <mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"type == 'dateTime'\">\n        <label [ngClass]=\"labelText == '' ? 'd-none' : ''\" for=\"{{fieldName}}\">{{labelText}}<span *ngIf=\"isFieldRequired()\" class=\"ml-2 text-warn font-medium\">*</span></label>\n        <input class=\"form-control h-0\" name=\"{{fieldName}}\" [owlDateTime]=\"index\"\n        placeholder=\"Date Time\" [(ngModel)]=\"selectedDate\" [disabled]=\"isDisabled\" (ngModelChange)=\"onPickerChange()\" [required]=\"isFieldRequired() ? 'required' : null\">\n        \n        <input class=\"form-control\" [ngClass]=\"fieldClass\" type=\"text\" name=\"{{fieldName}}\" [owlDateTimeTrigger]=\"index\" placeholder=\"Date Time\"\n        [value]=\"fieldModel | userDateTimeFormat:timeZone\" [readonly]=\"fieldReadonly\" autocomplete=\"off\"/>\n        \n        <owl-date-time #index></owl-date-time>\n        <div class=\"date-btn\"  [ngClass]=\"fieldClass\" [owlDateTimeTrigger]=\"index\">\n            <mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"type == 'time'\">\n        <label [ngClass]=\"labelText == '' ? 'd-none' : ''\" for=\"{{fieldName}}\">{{labelText}}<span *ngIf=\"isFieldRequired()\" class=\"ml-2 text-warn font-medium\">*</span></label>\n        \n        <input class=\"form-control h-0\" name=\"{{fieldName}}\" [owlDateTime]=\"index\"\n        placeholder=\"Date Time\" [(ngModel)]=\"selectedDate\" [min]=\"min\" [max]=\"max\" [disabled]=\"isDisabled\" (ngModelChange)=\"onPickerChange()\" [required]=\"isFieldRequired() ? 'required' : null\">\n        \n        <input class=\"form-control\" [ngClass]=\"fieldClass\"  type=\"text\" name=\"{{fieldName}}\" [owlDateTimeTrigger]=\"index\" placeholder=\"Time\"\n        [value]=\"fieldModel | userTimeFormat:timeZone\" [readonly]=\"fieldReadonly\" autocomplete=\"off\"/>\n        \n        <owl-date-time #index [pickerType]=\"'timer'\"></owl-date-time>\n        <div class=\"date-btn\" [ngClass]=\"fieldClass\" [owlDateTimeTrigger]=\"index\">\n            <mat-icon svgIcon=\"feather:clock\"></mat-icon>\n        </div>\n    </ng-container>\n\n</div>");

/***/ }),

/***/ "./src/app/modules/ui/datepicker/datepicker.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/ui/datepicker/datepicker.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ui/datepicker/datepicker.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/ui/datepicker/datepicker.component.ts ***!
  \***************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _busacca_ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @busacca/ng-pick-datetime */ "./node_modules/@busacca/ng-pick-datetime/__ivy_ngcc__/fesm2015/busacca-ng-pick-datetime.js");
/* harmony import */ var src_app_modules_profile_data_timezone_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/profile/data/timezone/data */ "./src/app/modules/profile/data/timezone/data.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");







let DatepickerComponent = class DatepickerComponent {
    constructor(dateTimeAdapter, sharedService) {
        this.dateTimeAdapter = dateTimeAdapter;
        this.sharedService = sharedService;
        this.labelText = '';
        this.fieldClass = '';
        this.fieldReadonly = false;
        this.isDisabled = false;
        this.fieldParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeZonesData = src_app_modules_profile_data_timezone_data__WEBPACK_IMPORTED_MODULE_5__["timeZones"];
    }
    isFieldRequired() {
        return this.fieldRequired == "required" ? true : false;
    }
    onPickerChange() {
        //let picker = this.timeZone.picker;
        //let utcDate:any = moment(this.selectedDate).subtract(picker.offset, 'hours').format().split('+');
        //this.fieldParams.emit(utcDate[0])
        this.fieldParams.emit(moment__WEBPACK_IMPORTED_MODULE_3__["utc"](this.selectedDate));
    }
    camelCase(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
    ngOnInit() {
        this.index = this.sharedService.guid().replace(/-/g, '');
    }
    ngOnChanges() {
        this.sharedService.timezonecast.subscribe(timeZone => this.timeZone = timeZone);
        this.dateTimeAdapter.setLocale(this.timeZone.language);
        if (this.fieldModel == undefined) {
            this.selectedDate = moment__WEBPACK_IMPORTED_MODULE_3__().tz(this.timeZone.region);
        }
        else {
            this.selectedDate = moment__WEBPACK_IMPORTED_MODULE_3__["utc"](this.fieldModel).tz(this.timeZone.region);
        }
        //console.log(this.fieldModel)
        //console.log(this.selectedDate)
        //this.selectedDate = moment.utc(this.fieldModel).add(picker.offset, 'hours').toISOString().replace('Z', '')
    }
};
DatepickerComponent.ctorParameters = () => [
    { type: _busacca_ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__["DateTimeAdapter"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
DatepickerComponent.propDecorators = {
    labelText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fieldRequired: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fieldName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fieldClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fieldReadonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fieldModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fieldParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    components: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['dateTimeElem',] }]
};
DatepickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datepicker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./datepicker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/datepicker/datepicker.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"] }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./datepicker.component.scss */ "./src/app/modules/ui/datepicker/datepicker.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_busacca_ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__["DateTimeAdapter"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
], DatepickerComponent);



/***/ }),

/***/ "./src/app/modules/ui/datepicker/datepicker.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/ui/datepicker/datepicker.module.ts ***!
  \************************************************************/
/*! exports provided: DatepickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerModule", function() { return DatepickerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker.component */ "./src/app/modules/ui/datepicker/datepicker.component.ts");
/* harmony import */ var _busacca_ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @busacca/ng-pick-datetime */ "./node_modules/@busacca/ng-pick-datetime/__ivy_ngcc__/fesm2015/busacca-ng-pick-datetime.js");
/* harmony import */ var src_app_shared_pipe_shared_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/pipe/shared.pipe */ "./src/app/shared/pipe/shared.pipe.ts");
var DatepickerModule_1;










let DatepickerModule = DatepickerModule_1 = class DatepickerModule {
    static forRoot() {
        return {
            ngModule: DatepickerModule_1,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
        };
    }
};
DatepickerModule = DatepickerModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_datepicker_component__WEBPACK_IMPORTED_MODULE_5__["DatepickerComponent"], src_app_shared_pipe_shared_pipe__WEBPACK_IMPORTED_MODULE_7__["UserDateTimeFormatPipe"], src_app_shared_pipe_shared_pipe__WEBPACK_IMPORTED_MODULE_7__["UserDateFormatPipe"], src_app_shared_pipe_shared_pipe__WEBPACK_IMPORTED_MODULE_7__["UserTimeFormatPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _busacca_ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeModule"],
            _busacca_ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlMomentDateTimeModule"]
        ],
        exports: [
            _datepicker_component__WEBPACK_IMPORTED_MODULE_5__["DatepickerComponent"],
            src_app_shared_pipe_shared_pipe__WEBPACK_IMPORTED_MODULE_7__["UserDateTimeFormatPipe"],
            src_app_shared_pipe_shared_pipe__WEBPACK_IMPORTED_MODULE_7__["UserDateFormatPipe"],
            src_app_shared_pipe_shared_pipe__WEBPACK_IMPORTED_MODULE_7__["UserTimeFormatPipe"],
            _busacca_ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeModule"],
            _busacca_ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlMomentDateTimeModule"]
        ],
        providers: [
        //{ provide: OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS, useValue: { useUtc: true } },
        //{ provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
        //{ provide: DateTimeAdapter, useClass: CustomDateTimeAdapter },
        //{ provide: OWL_DATE_TIME_LOCALE, useValue: 'fr'}
        ],
        bootstrap: [
            _datepicker_component__WEBPACK_IMPORTED_MODULE_5__["DatepickerComponent"]
        ]
    })
], DatepickerModule);



/***/ })

}]);
//# sourceMappingURL=default~modules-ams-assets-assets-module~modules-ams-dashboard-dashboard-module~modules-ams-expense-~76077b41-es2015.js.map