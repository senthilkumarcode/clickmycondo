(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assets-assets-module"],{

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
  \******************************************************************************/
/*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function() { return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function() { return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function() { return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function() { return MatSlideToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function() { return MatSlideToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function() { return MatSlideToggleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function() { return MatSlideToggleRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function() { return _MatSlideToggleRequiredValidatorModule; });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");









/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/slide-toggle-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default `mat-slide-toggle` options that can be overridden.
 * @record
 */






const _c0 = ["thumbContainer"];
const _c1 = ["toggleBar"];
const _c2 = ["input"];
const _c3 = function () { return { enterDuration: 150 }; };
const _c4 = ["*"];
function MatSlideToggleDefaultOptions() { }
if (false) {}
/**
 * Injection token to be used to override the default options for `mat-slide-toggle`.
 * @type {?}
 */
const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => ({ disableToggleValue: false }))
});

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/slide-toggle.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Increasing integer for generating unique ids for slide-toggle components.
/** @type {?} */
let nextUniqueId = 0;
/**
 * \@docs-private
 * @type {?}
 */
const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
     * @return {?}
     */
    () => MatSlideToggle)),
    multi: true
};
/**
 * Change event object emitted by a MatSlideToggle.
 */
class MatSlideToggleChange {
    /**
     * @param {?} source
     * @param {?} checked
     */
    constructor(source, checked) {
        this.source = source;
        this.checked = checked;
    }
}
if (false) {}
// Boilerplate for applying mixins to MatSlideToggle.
/**
 * \@docs-private
 */
class MatSlideToggleBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
if (false) {}
/** @type {?} */
const _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
/**
 * Represents a slidable "switch" toggle that can be moved between on and off.
 */
class MatSlideToggle extends _MatSlideToggleMixinBase {
    /**
     * @param {?} elementRef
     * @param {?} _focusMonitor
     * @param {?} _changeDetectorRef
     * @param {?} tabIndex
     * @param {?} _ngZone
     * @param {?} defaults
     * @param {?=} _animationMode
     * @param {?=} _dir
     */
    constructor(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, 
    /**
     * @deprecated `_ngZone` and `_dir` parameters to be removed.
     * @breaking-change 10.0.0
     */
    _ngZone, defaults, _animationMode, _dir) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this.defaults = defaults;
        this._animationMode = _animationMode;
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this._uniqueId = `mat-slide-toggle-${++nextUniqueId}`;
        this._required = false;
        this._checked = false;
        /**
         * Name value will be applied to the input element if present.
         */
        this.name = null;
        /**
         * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.
         */
        this.id = this._uniqueId;
        /**
         * Whether the label should appear after or before the slide-toggle. Defaults to 'after'.
         */
        this.labelPosition = 'after';
        /**
         * Used to set the aria-label attribute on the underlying input element.
         */
        this.ariaLabel = null;
        /**
         * Used to set the aria-labelledby attribute on the underlying input element.
         */
        this.ariaLabelledby = null;
        /**
         * An event will be dispatched each time the slide-toggle changes its value.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle input is toggled.
         * This event is always emitted when the user toggles the slide toggle, but this does not mean
         * the slide toggle's value has changed.
         */
        this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle is dragged.
         * This event is always emitted when the user drags the slide toggle to make a change greater
         * than 50%. It does not mean the slide toggle's value is changed. The event is not emitted when
         * the user toggles the slide toggle to change its value.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         */
        this.dragChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /**
     * Whether the slide-toggle is required.
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    /**
     * Whether the slide-toggle element is checked or not.
     * @return {?}
     */
    get checked() { return this._checked; }
    /**
     * @param {?} value
     * @return {?}
     */
    set checked(value) {
        this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Returns the unique id for the visual hidden input.
     * @return {?}
     */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            // Only forward focus manually when it was received programmatically or through the
            // keyboard. We should not do this for mouse/touch focus for two reasons:
            // 1. It can prevent clicks from landing in Chrome (see #18269).
            // 2. They're already handled by the wrapping `label` element.
            if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                this._inputElement.nativeElement.focus();
            }
            else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this._onTouched()));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Method being called whenever the underlying input emits a change event.
     * @param {?} event
     * @return {?}
     */
    _onChangeEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        this.toggleChange.emit();
        // When the slide toggle's config disables toggle change event by setting
        // `disableToggleValue: true`, the slide toggle's value does not change, and the
        // checked state of the underlying input needs to be changed back.
        if (this.defaults.disableToggleValue) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
        }
        // Sync the value from the underlying input element with the component instance.
        this.checked = this._inputElement.nativeElement.checked;
        // Emit our custom change event only if the underlying input emitted one. This ensures that
        // there is no change event, when the checked state changes programmatically.
        this._emitChangeEvent();
    }
    /**
     * Method being called whenever the slide-toggle has been clicked.
     * @param {?} event
     * @return {?}
     */
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = !!value;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Focuses the slide-toggle.
     * @param {?=} options
     * @return {?}
     */
    focus(options) {
        this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
    }
    /**
     * Toggles the checked state of the slide-toggle.
     * @return {?}
     */
    toggle() {
        this.checked = !this.checked;
        this._onChange(this.checked);
    }
    /**
     * Emits a change event on the `change` output. Also notifies the FormControl about the change.
     * @private
     * @return {?}
     */
    _emitChangeEvent() {
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
    }
    /**
     * Method being called whenever the label text changes.
     * @return {?}
     */
    _onLabelTextChange() {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
        // slide-toggle component will be only marked for check, but no actual change detection runs
        // automatically. Instead of going back into the zone in order to trigger a change detection
        // which causes *all* components to be checked (if explicitly marked or not using OnPush),
        // we only trigger an explicit change detection for the slide-toggle view and its children.
        this._changeDetectorRef.detectChanges();
    }
}
MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) { return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8)); };
MatSlideToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatSlideToggle, selectors: [["mat-slide-toggle"]], viewQuery: function MatSlideToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    } }, hostAttrs: [1, "mat-slide-toggle"], hostVars: 12, hostBindings: function MatSlideToggle_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : 0 - 1)("aria-label", null)("aria-labelledby", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", name: "name", id: "id", labelPosition: "labelPosition", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], required: "required", checked: "checked" }, outputs: { change: "change", toggleChange: "toggleChange", dragChange: "dragChange" }, exportAs: ["matSlideToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c4, decls: 16, vars: 18, consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]], template: function MatSlideToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) { return ctx._onChangeEvent($event); })("click", function MatSlideToggle_Template_input_click_4_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() { return ctx._onLabelTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]], styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatSlideToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"],] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
MatSlideToggle.propDecorators = {
    _thumbEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['thumbContainer',] }],
    _thumbBarEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['toggleBar',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-labelledby',] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    toggleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['input',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-slide-toggle',
                exportAs: 'matSlideToggle',
                host: {
                    'class': 'mat-slide-toggle',
                    '[id]': 'id',
                    // Needs to be `-1` so it can still receive programmatic focus.
                    '[attr.tabindex]': 'disabled ? null : -1',
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[class.mat-checked]': 'checked',
                    '[class.mat-disabled]': 'disabled',
                    '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
                inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabindex']
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-labelledby']
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], toggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _thumbEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['thumbContainer']
        }], _thumbBarEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['toggleBar']
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['input']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/slide-toggle-required-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
     * @return {?}
     */
    () => MatSlideToggleRequiredValidator)),
    multi: true
};
/**
 * Validator for Material slide-toggle components with the required attribute in a
 * template-driven form. The default validator for required form controls asserts
 * that the control value is not undefined but that is not appropriate for a slide-toggle
 * where the value is always defined.
 *
 * Required slide-toggle form controls are valid when checked.
 */
class MatSlideToggleRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"] {
}
MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) { return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator); };
MatSlideToggleRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatSlideToggleRequiredValidator, selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵMatSlideToggleRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
                providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/slide-toggle-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This module is used by both original and MDC-based slide-toggle implementations.
 */
// tslint:disable-next-line:class-name
class _MatSlideToggleRequiredValidatorModule {
}
_MatSlideToggleRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: _MatSlideToggleRequiredValidatorModule });
_MatSlideToggleRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) { return new (t || _MatSlideToggleRequiredValidatorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, { declarations: [MatSlideToggleRequiredValidator], exports: [MatSlideToggleRequiredValidator] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [MatSlideToggleRequiredValidator],
                declarations: [MatSlideToggleRequiredValidator]
            }]
    }], null, null); })();
class MatSlideToggleModule {
}
MatSlideToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatSlideToggleModule });
MatSlideToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatSlideToggleModule_Factory(t) { return new (t || MatSlideToggleModule)(); }, imports: [[
            _MatSlideToggleRequiredValidatorModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"],
        ],
        _MatSlideToggleRequiredValidatorModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSlideToggleModule, { declarations: function () { return [MatSlideToggle]; }, imports: function () { return [_MatSlideToggleRequiredValidatorModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]]; }, exports: function () { return [_MatSlideToggleRequiredValidatorModule,
        MatSlideToggle,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _MatSlideToggleRequiredValidatorModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"],
                ],
                exports: [
                    _MatSlideToggleRequiredValidatorModule,
                    MatSlideToggle,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]
                ],
                declarations: [MatSlideToggle]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=slide-toggle.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/assets.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/assets.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-asset-maintenance-wrapper\">\n\t\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\" (click)=\"showMaintenanceHistory(assetId)\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Maintenance History</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditAssetMaintenance\">Add Asset Maintenance</span>\n    \t\t\t\t<span *ngIf=\"isEditAssetMaintenance\">Edit Asset Maintenance</span>\n    \t\t\t</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-header at-header\" *ngIf=\"isAssetMaintenanceLoaded\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Asset Name: </span>{{assetData.assetName}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Category: </span>{{getAssetCategoryName(assetData.assetCategoryId)}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Purchase Date: </span>{{getDateFormat(assetData.purchaseDate)}}</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t\t<form #addAssetMaintenanceForm = \"ngForm\" name=\"addAssetMaintenanceForm\" (ngSubmit)=\"submitAssetMaintenanceForm(addAssetMaintenanceForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isEditAssetMaintenance\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Actual Maintenance Date*</label>\n\t\t                   <input class=\"form-control\" name=\"actualMaintDate\" [owlDateTime]=\"actualMaintDate\" [owlDateTimeTrigger]=\"actualMaintDate\" placeholder=\"Date\" [(ngModel)]=\"assetMaintenance.actualMaintDate\" required>\n\t\t\t\t\t\t\t<owl-date-time #actualMaintDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"actualMaintDate\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n               \t \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Last Maintenance Date*</label>\n\t\t                   <input class=\"form-control\" name=\"lastMaintenanceDate\" [owlDateTime]=\"lastMaintenanceDate\" [owlDateTimeTrigger]=\"lastMaintenanceDate\" placeholder=\"Date\" [(ngModel)]=\"assetMaintenance.lastMaintenanceDate\" required>\n\t\t\t\t\t\t\t<owl-date-time #lastMaintenanceDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"lastMaintenanceDate\">\n\t\t\t\t\t\t\t \t <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Next Planned Maintenance Date*</label>\n\t\t                   <input class=\"form-control\" name=\"nextPlannedMaintenance\" [owlDateTime]=\"nextPlannedMaintenance\" [owlDateTimeTrigger]=\"nextPlannedMaintenance\" placeholder=\"Date\" [(ngModel)]=\"assetMaintenance.nextPlannedMaintenance\" required>\n\t\t\t\t\t\t\t<owl-date-time #nextPlannedMaintenance [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"nextPlannedMaintenance\">\n\t\t\t\t\t\t \t \t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t \t </div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Notes*</label>\n\t\t                   <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetNotes\" [(ngModel)]=\"assetMaintenance.notes\" required>\n\t\t               \t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Maintenance Status*</label>\n\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\tname=\"assetMaintenanceStatus\" \n\t\t\t\t\t\t\tid=\"assetMaintenanceStatus\" \n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[(ngModel)]=\"assetMaintenance.maintenanceStatusId\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of statusTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addAssetMaintenanceForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-maintenance/add-maintenance.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-maintenance/add-maintenance.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-create-wrapper\">\n\t<app-loader *ngIf=\"isAssetLoaded\"></app-loader>\n\t<app-alert-message [message]=\"errorMessage\" [isError]=\"isError\"></app-alert-message>\n\t<form #addMaintForm = \"ngForm\" name=\"addAssetForm\"   novalidate>\n\t\t<div class=\"card mb-30\">\t\t\t\t\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t<h4 class=\"main-title-mini float-left mt-3\">\n\t\t\t\t\t<span *ngIf=\"!isEdit\">Create Maintenance Asset</span>\n\t\t\t        <span *ngIf=\"isEdit\">Edit Maintenance Asset</span>\n        \t\t</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"relative-card float-right\">\n\t\t\t\t\t<div class=\"relative-icon\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink=\"/ams/assets/maintenance-history\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class=\"d-inline-block\">View Maintenance</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box mb-3\">\n\t\t\t\t\t\t\t<label>select Asset*</label>\n\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\tname=\"assetCategory\" \n\t\t\t\t\t\t\tid=\"assetCategory\" \n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[(ngModel)]=\"assetId\"  required>\n\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t<!-- <option value=\"All\">All</option> -->\n\t\t\t\t\t\t\t<option *ngFor=\"let item of assetList\" [value]=\"item.assetId\">{{ item.assetName }}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\t\t<!-- <h4 class=\"main-title-mini float-left mt-3\">\t\t\t -->\n\t\t\t<!-- <span *ngIf=\"!isEdit\">Create Maintenance Asset</span>\n    \t\t<span *ngIf=\"isEdit\">Edit Maintenance Asset</span> -->\n\t\t<!-- </h4> -->\n\t\t<!-- <div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/assets/maintenance-history\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Maintenance</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div> -->\n\t\t<!-- <div class=\"card mb-30\" *ngIf=\"check\">\n\t\t<div class=\"card-body\">\n\t\t\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"select-box mb-3\">\n\t\t\t\t\t\t<label>All Assets</label>\n\t\t\t\t\t\t<select \n\t\t\t\t\t\t\tname=\"assetCategory\" \n\t\t\t\t\t\t\tid=\"assetCategory\" \n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[(ngModel)]=\"assetId\"  required>\n\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t<option value=\"All\">All</option>\n\t\t\t\t\t\t\t<option *ngFor=\"let item of assetList\" [value]=\"item.assetId\">{{ item.assetName }}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t  </div> -->\n\t\t<div class=\"card clear mb-30\" id=\"accordion\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#assetCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Current Maintenance</li>\n\t\t\t\t\t<div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details cardOuter\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Maint Type</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"mainType\" \t\t\t\t\t\t\t\t\t     \n\t\t\t\t\t\t\t\t\t        class=\"form-control\" [(ngModel)]=\"maintenance.maintenanceTypeId\" \n\t\t\t\t\t\t\t\t\t       (change)=\"setMainSubType(maintenance.maintenanceTypeId);maintenance.maintenanceSubtypeId=''\">\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected >Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of mainType\" [value]=\"item.id\" >{{ item.name | titlecase }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Maint Subtype</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"mainSubType\" \t\t\t\t\t\t\t\t\t     \n\t\t\t\t\t\t\t\t\t        class=\"form-control\" [(ngModel)]=\"maintenance.maintenanceSubtypeId\"\n\t\t\t\t\t\t\t\t\t        >\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected >Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of mainSubType\" [value]=\"item.id\">{{ item.name | titlecase }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Planned Maintenance Date</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"maitainPlannedDate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTime]=\"maitainPlannedDate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTimeTrigger]=\"maitainPlannedDate\" placeholder=\"Planned Maintenance Date\" [(ngModel)]=\"maintenance.maitainPlannedDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #maitainPlannedDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>                                         \n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Actual Maintenance Date</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"actualMaintenance\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTime]=\"actualMaintenance\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTimeTrigger]=\"actualMaintenance\" placeholder=\"Actual Maintenance Date\" [(ngModel)]=\"maintenance.actualMaintDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #actualMaintenance [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>                                         \n\t\t\t                \t\t</div>\n                                </div>                                \n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Maint. performed by Association Staff</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"isMaintainedbyStaff\" id=\"inactive\" [(ngModel)]=\"maintenance.isMaintainedbyStaff\"   (change)=\"maintenance.isMaintainedbyStaff = true;maintenance.maintenanceByCompany=''\" [value]=\"true\" type=\"radio\" >\n\t\t\t\t                            <label class=\"radio-inline\" for=\"inactive\">Yes</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"isMaintainedbyStaff\" id=\"active\" [(ngModel)]=\"maintenance.isMaintainedbyStaff\"  (change)=\"maintenance.isMaintainedbyStaff = false;maintenance.maintainedbyStaff = ''\" [value]=\"false\" type=\"radio\" >\n\t\t\t\t                            <label class=\"radio-inline\" for=\"active\">No</label>\n\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n                                <div class=\"col-sm-4\" *ngIf=\"maintenance.isMaintainedbyStaff == true\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Staff Name</label>\n                                        <input type=\"text\"  class=\"form-control\" placeholder=\"Enter Staff Name\" \n                                        name=\"staffName\" [(ngModel)]=\"maintenance.maintainedbyStaff\" >\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n                                <div class=\"col-sm-4\" *ngIf=\"maintenance.isMaintainedbyStaff == false\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Performed by Company/Vendor</label>\n                                        <input type=\"text\"  class=\"form-control\" placeholder=\"Enter Company/Vendor\" \n                                        name=\"Company\" [(ngModel)]=\"maintenance.maintenanceByCompany\" >\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Notes</label>\n\t\t\t\t\t\t\t\t\t\t<textarea placeholder=\"Enter Notes\" name=\"notes\" [(ngModel)]=\"maintenance.notes\" ></textarea>\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n                                </div>                                \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#assetCollapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Maintenance Expenses</li>\n\t\t\t\t\t<div id=\"assetCollapseTwo\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Maintenance Labor Cost</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter Labor Cost\" \n                                        name=\"maintLaborCost\" OnlyNumber=\"true\" [(ngModel)]=\"maintenance.maintLaborCost\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Maintenance Parts Cost</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter Parts Cost\" \n                                        name=\"maintPartsCost\" OnlyNumber=\"true\" [(ngModel)]=\"maintenance.maintPartsCost\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Vat</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter Vat\" \n                                        name=\"maintVat\" OnlyNumber=\"true\" [(ngModel)]=\"maintenance.maintVat\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>With Holding Tax</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter With Holding Tax\" \n                                        name=\"maintWithTax\" OnlyNumber=\"true\" [(ngModel)]=\"maintenance.maintWithTax\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Total Discount</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter Total Discount\" \n                                        name=\"totalTax\" OnlyNumber=\"true\" [(ngModel)]=\"totalTax\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Total Billed Amount</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter Total Billed Amount\" \n                                        name=\"maintenanceTotalBilledAmt\" OnlyNumber=\"true\" [(ngModel)]=\"maintenance.maintenanceTotalBilledAmt\" >\n\t\t\t                \t\t</div>\n                                </div>\n                               \n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#assetCollapseThree\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Future Plan</li>\n\t\t\t\t\t<div id=\"assetCollapseThree\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Next Planned Maintenance date</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"plannedDate\" [owlDateTime]=\"plannedDate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTimeTrigger]=\"plannedDate\" placeholder=\"Next Planned Maintenance date\" [(ngModel)]=\"maintenance.nextPlannedMaintenance\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #plannedDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>                                        \n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Remind me before next planned Date</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"remainMedate\" [owlDateTime]=\"remainMedate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTimeTrigger]=\"remainMedate\" placeholder=\"Enter Remind me before Date\" [(ngModel)]=\"maintenance.remainMedate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #remainMedate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>  \n                                       \n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box uploadbtn\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\">\n\t\t\t\t\t\t\t\t\t    <input class=\"form-control\"  #uploader type=\"file\"\n\t\t\t\t\t\t\t\t\t    (change)=\"uploadFile($event)\" name=\"file\" [(ngModel)]=\"file\" multiple>\n\t\t\t\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Upload Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isFileAdded\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfFiles; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<!-- (ngSubmit)=\"(addMaintenance(addMaintForm)  && !isEdit) || (updateMaintenance(addMaintForm)  && isEdit) \"  -->\n\t\t\t\t\t\t<button type=\"submit\"  name=\"name\" class=\"btn blue mr-2\" *ngIf=\"!isEdit\" (click)=\"addMaintenance(addMaintForm)\">Submit</button>\n\t\t\t\t\t\t<button type=\"submit\"  name=\"name\" class=\"btn blue mr-2\" *ngIf=\"isEdit\" (click)=\"updateMaintenance(addMaintForm)\">Submit</button>\n                    </li>\n                    <li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn cancelBtn mr-2\">cancel</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-create/assets-create.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-create/assets-create.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-create-wrapper\">\n\t\n\t<form #addAssetForm = \"ngForm\" name=\"addAssetForm\" (ngSubmit)=\"submitAddAssetForm(addAssetForm)\"  novalidate>\n\n\t\t<h4 class=\"main-title-mini float-left mt-3\">\n\t\t\t\n\t\t\t<span *ngIf=\"!isEditAsset\">Create Asset</span>\n    \t\t<span *ngIf=\"isEditAsset\">Edit Asset</span>\n\n\t\t</h4>\n\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card clear mb-30\" id=\"accordion\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#assetCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">General</li>\n\t\t\t\t\t<div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Asset tag No*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Tag No\" name=\"assetTagNo\" [(ngModel)]=\"asset.assetTagNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Asset Category*</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"asset.assetCategoryId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Asset Name*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"assetName\" [(ngModel)]=\"asset.assetName\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Manufacturer Details*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Manufacturer Details\" name=\"ManufacturerDetails\" [(ngModel)]=\"asset.manufacturerDetails\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Model No*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Model No\" name=\"modelNo\" [(ngModel)]=\"asset.modelNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Condition*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetConditionId\" id=\"used\" [(ngModel)]=\"asset.assetConditionId\"  value=\"103\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"used\">Used</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetConditionId\" id=\"new\" [(ngModel)]=\"asset.assetConditionId\" value=\"105\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"new\">New</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Asset Location</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Asset Location\" name=\"assetLocation\" [(ngModel)]=\"asset.assetLocation\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Depreciation (in percentage)*</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter percentage value\" name=\"depreciation\" [(ngModel)]=\"asset.depreciationPercentage\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Installation Date*</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"purchaseDate\" [owlDateTime]=\"installationDate\" [owlDateTimeTrigger]=\"installationDate\" placeholder=\"Installation Date\" [(ngModel)]=\"asset.installationDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #installationDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"installationDate\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Status*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetStatus\" id=\"inactive\" [(ngModel)]=\"asset.isActive\"  [value]=\"true\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"inactive\">Inactive</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetStatus\" id=\"active\" [(ngModel)]=\"asset.isActive\" [value]=\"false\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"active\">Active</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Retired No</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Retired No\" name=\"depreciation\" [(ngModel)]=\"asset.retiredOn\" required>\n\t\t\t\t\t                    <!-- <input class=\"form-control\" name=\"retiredOnDate\" [owlDateTime]=\"retiredOnDate\" [owlDateTimeTrigger]=\"retiredOnDate\" placeholder=\"Retired No\" [(ngModel)]=\"asset.retiredOn\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #retiredOnDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"retiredOnDate\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div> -->\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Comments</label>\n\t\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"staffComments\" [(ngModel)]=\"asset.comments\"></textarea>\n\t\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\">\n\t\t\t\t\t\t\t\t\t    <input class=\"form-control\"  name=\"file\" #uploader type=\"file\"\n\t\t\t\t\t\t\t\t\t    (change)=\"uploadFile($event)\" [(ngModel)]=\"asset.file\" multiple>\n\t\t\t\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Upload Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isFileAdded\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfFiles; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#assetCollapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Purchase Details</li>\n\t\t\t\t\t<div id=\"assetCollapseTwo\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Vendor Name*</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"vendorId\" \n\t\t\t\t\t\t\t\t\t        id=\"vendorId\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"asset.vendorId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of vendorDataList\" [value]=\"item.vendorId\">{{ item.vendorName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Purchase Order No*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Purchase Order No\" name=\"purchaseOrderNo\" [(ngModel)]=\"asset.purchaseOrderNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Purchase Date*</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"purchaseDate\" [owlDateTime]=\"purchaseDate\" [owlDateTimeTrigger]=\"purchaseDate\" placeholder=\"Purchase Date\" [(ngModel)]=\"asset.purchaseDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #purchaseDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Purchase Cost*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Purchase Cost\" name=\"purchaseCost\" [(ngModel)]=\"asset.purchaseCost\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Warranty Months*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Warranty Months\" name=\"warrantyMonths\" [(ngModel)]=\"asset.warrantyMonths\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Serial Number*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Serial Number\" name=\"serialNo\" [(ngModel)]=\"asset.serialNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Is Leased*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"isLeased\" id=\"Yes\" [(ngModel)]=\"asset.isLeased\"  [value]=\"true\" type=\"radio\">\n\t\t\t\t                            <label class=\"radio-inline\" for=\"Yes\">Yes</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"isLeased\" id=\"No\" [(ngModel)]=\"asset.isLeased\" [value]=\"false\" type=\"radio\">\n\t\t\t\t                            <label class=\"radio-inline\" for=\"No\">No</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" \n\t\t\t\t\tdata-target=\"#assetCollapseThree\" aria-expanded=\"true\" \n\t\t\t\t\taria-controls=\"collapseOne\">Insurance Information</li>\n\t\t\t\t\t<div id=\"assetCollapseThree\" class=\"collapse\" aria-labelledby=\"headingOne\" \n\t\t\t\t\tdata-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Insurance Provider</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter Insurance Provider\" name=\"provider\" [(ngModel)]=\"insurance.insuranceProvider\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Insurance No</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Insurance No\" name=\"InsuranceNo\" [(ngModel)]=\"insurance.insuranceNo\" >\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Insurance Exp. Date</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"insuranceExpDate\" \n\t\t\t\t\t\t\t\t\t\t[owlDateTime]=\"insuranceExpDate\" [owlDateTimeTrigger]=\"insuranceExpDate\" \n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Insurance Exp. Date\" [(ngModel)]=\"insurance.insuranceExpDate\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #insuranceExpDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Notes</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Note\" name=\"insuranceNotes\"  [(ngModel)]=\"insurance.notes\" >\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Insurance Status</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Insurance Status\" name=\"status\" [(ngModel)]=\"insurance.insuranceStatus\" >\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addAssetForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-maintenance-history-wrapper\">\n\t\n\t\t\n\t\t<div class=\"header-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Maintenance History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body p-0 border-bottom\">\n\t\t\t\t\t<ul class=\"legends list-inline\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span><span>Over Due</span></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots medium\"></span>Due</li>\n\t\t\t\t\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>Done</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body p-0\">\n\n\t\t\t\t\t<app-loader *ngIf=\"!isAssetMaintenanceLoaded\"></app-loader>\n\n\t\t\t\t\t<ng-container *ngIf=\"isAssetMaintenanceLoaded\">\n\n\t\t\t\t\t\t<div class=\"lists free-flow\" *ngFor=\"let maintenance of maintenanceDataList | slice:ItemStartIndex:ItemEndIndex; let i = index; last as isLast\" [ngClass]=\" [ getMaintenanceStatus(maintenance.maintenanceStatusId), isLast ? 'last' : '']\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 column\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Actual Maintenance</h6>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"maintenance.actualMaintDate != null\">{{getDateFormat(maintenance.actualMaintDate)}}</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"maintenance.actualMaintDate == null\">-</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 column\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Last Maintenance</h6>\n\t\t\t\t\t\t\t\t\t\t<p>{{getDateFormat(maintenance.lastMaintenanceDate)}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 column\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Next Planned Maintenance</h6>\n\t\t\t\t\t\t\t\t\t\t<p>{{getDateFormat(maintenance.nextPlannedMaintenance)}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<app-pagination \n\t\t\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t\t\t</app-pagination>\n\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-reports/assets-reports.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-reports/assets-reports.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  assets-reports works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-setup/assets-setup.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-setup/assets-setup.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"assets-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isAssetCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isAssetCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Asset Categories</h4>\n\t\t<ng-container *ngFor=\"let item of assetCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/view/{{item.lookupValueId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateAssetCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-none\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteAssetCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\n\t\t\t\t\t\t<p>{{item.assetCount}} Assets</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewAssetCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isAssetCategoryNew || isAssetCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isAssetCategoryNew\">Add Asset Category</h6>\n    \t\t\t<h6 *ngIf=\"!isAssetCategoryNew\">Update Asset Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"alertTicketMessage\" [isError]=\"isCategoryError\" [isSuccess]=\"isCategorySuccess\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isAssetCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isAssetCategorySubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addAssetCategoryForm = \"ngForm\" name=\"addAssetCategoryForm\" (ngSubmit)=\"submitAssetCategoryForm(addAssetCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetCategory\" [(ngModel)]=\"assetCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addAssetCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div> -->\n\n\n\n\n<div class=\"setup-outer\">\n\t<mat-tab-group>\n\t\t<mat-tab label=\"Asset Setup\">\n\t\t\t<div class=\"\">\n\t\t\t\t<div class=\"d-flex wd-100\">\n\t\t\t\t\t<div class=\"d-flex wd-50\">\n\t\t\t\t\t\t<h4 class=\"main-title-mini pt-4\">Asset Category </h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-flex wd-50 justify-content-end  align-items-center\">\n\t\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t\t<i class=\"fa fa-search setup-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control pl-5\" placeholder=\"Search...\" [(ngModel)]=\"searchCategory\" (input)=\"filterCategoryItem(searchCategory)\">\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li  class=\"list-inline-item ml-3 mt-2\" (click)=\"addSetUp('asset','add',null)\">\n\t\t\t\t\t\t\t<a  class=\"btn lime-green mt_5\">\n\t\t\t\t\t\t\t\t<i-feather name=\"plus\" class=\"icon plus\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n\t\t\t\t\t\t\t\t\t\tclass=\"feather feather-plus\">\n\t\t\t\t\t\t\t\t\t\t<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line>\n\t\t\t\t\t\t\t\t\t\t<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>\n\t\t\t\t\t\t\t\t\t</svg></i-feather><span >Add Asset Category </span>\n\t\t\t\t\t\t\t</a></li>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <mat-accordion class=\"pt-5\" class=\"setup-accordion\" *ngIf=\"categoryList.length == 0\">\n\t\t\t\t\tAsset Category not found\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t</mat-accordion> -->\n\t\t\t\t<app-loader *ngIf=\"isAssetLoaded\"></app-loader>\n\t\t\t\t<mat-accordion class=\"pt-5\" class=\"setup-accordion\">\n\t\t\t\t\t<mat-expansion-panel *ngFor=\" let cat of categoryList;let catIndex = index\">\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t<div class=\"d-flex wd-100\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex wd-50\"> {{cat.name}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex wd-50 justify-content-end  align-items-center\">\n\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-plus\" [ngStyle]=\"cat?.subCategory.length > 0 ? {'pointer-events':'none','opacity':'0.4'}:''\" aria-hidden=\"true\" (click)=\"addSetUp('asset','addSubType',cat)\"></i> -->\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o pl-2\" aria-hidden=\"true\" (click)=\"addSetUp('asset','edit',cat)\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash pl-2\" (click)=\"deleteCategory(cat.id,'assets')\"\n\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<div class=\"subCategory\" *ngIf=\"cat?.subCategory.length == 0\">Sub Category not found</div>\n\t\t\t\t\t\t<div class=\" subCategory \" *ngFor=\"let sub  of cat?.subCategory;let catIndex = index\">\n\t\t\t\t\t\t <!-- <li>{{sub.name}}</li> -->\n\t\t\t\t\t\t <div class=\"d-flex align-items-center\">\n\t\t\t\t\t\t\t <div class=\"sub-dot mr-2\" [ngStyle]=\"currIndex == catIndex ?{'display':'none'}:''\"></div>\n\t\t\t\t\t\t\t <div class=\"wd-50\" > <span [ngStyle]=\"currIndex == catIndex ?{'display':'none'}:''\">{{sub.name}}</span>\n\t\t\t\t\t\t\t  <input type=\"text\" *ngIf=\"catIndex == currIndex\"  class=\"cus-input\" placeholder=\"Enter sub category\" \n\t\t\t\t\t\t\t\tname=\"subCategory\" [(ngModel)]=\"sub.name\" ></div>\n\t\t\t\t\t\t\t <div class=\"wd-50 d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t <i class=\"fa fa-pencil-square-o pl-2\" [ngStyle]=\"currIndex == catIndex ?{'display':'none'}:''\" aria-hidden=\"true\" (click)=\"currIndex = catIndex \"></i>\n\t\t\t\t\t\t\t\t <i class=\"fa fa-floppy-o pl-2 pr-3\"  *ngIf=\"catIndex == currIndex\" aria-hidden=\"true\" [ngStyle]=\"!sub.name? {'pointer-events':'none','opacity':'0.4'}:''\" (click)=\"editSubCategory(cat)\"></i>\n\t\t\t\t\t\t\t\t <i class=\"fa fa-times  pl-2\"  *ngIf=\"catIndex == currIndex\" aria-hidden=\"true\" (click)=\"getAllCategory();currIndex = -1\"></i>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t</div>\n\t\t</mat-tab>\n\t\t<mat-tab label=\"Asset Depreciation method\">\n\t\t\t<div class=\"row m-0\">\n\t\t\t\t<div class=\"category-list list-boxes mb-30\">\n\t\t\t\t\t<h4 class=\"main-title-mini pt-4\">Depreciaton methods</h4>\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body no-hover\">\n\t\t\t\t\t\t\t\t<div class=\"setup-slide\">\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle>Straight line method</mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle>Double Decline</mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle>Units usage </mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-tab>\n\t\t<mat-tab label=\"Maintenance Setup\">\n\t\t\t<div class=\"\">\t\t\t\n\t\t\t\t<div class=\"d-flex wd-100\">\n\t\t\t\t\t<div class=\"d-flex wd-50\">\n\t\t\t\t\t\t<h4 class=\"main-title-mini pt-4\">Maintenance Types</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-flex wd-50 justify-content-end  align-items-center\">\n\t\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t\t<i class=\"fa fa-search setup-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control pl-5\" placeholder=\"Search...\" [(ngModel)]=\"search\" (input)=\"filterMaitenanceItem(search)\">\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li  class=\"list-inline-item ml-3 mt-2\" (click)=\"addSetUp('maintenance','add',null)\">\n\t\t\t\t\t\t\t<a  class=\"btn lime-green mt_5\">\n\t\t\t\t\t\t\t\t<i-feather name=\"plus\" class=\"icon plus\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n\t\t\t\t\t\t\t\t\t\tclass=\"feather feather-plus\">\n\t\t\t\t\t\t\t\t\t\t<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line>\n\t\t\t\t\t\t\t\t\t\t<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>\n\t\t\t\t\t\t\t\t\t</svg></i-feather><span>Add Maintenance Types</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<mat-accordion class=\"pt-5\" class=\"setup-accordion\">\n\t\t\t\t\t<mat-expansion-panel *ngFor=\" let main of mainType;let mainIndex = index\">\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t<div class=\"d-flex wd-100\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex wd-50\"> {{main.name}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex wd-50 justify-content-end  align-items-center\">\n\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-plus\" aria-hidden=\"true\" [ngStyle]=\"main?.subCategory.length > 0 ? {'pointer-events':'none','opacity':'0.4'}:''\"  (click)=\"addSetUp('maintenance','addSubType',main)\"></i> -->\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o pl-2\" aria-hidden=\"true\" (click)=\"addSetUp('maintenance','edit',main)\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash pl-2\" (click)=\"deleteCategory(main.id,'maintenance')\"\n\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<div class=\"subCategory\" *ngIf=\"main?.subCategory.length == 0\">Maintenance Types not found</div>\n\t\t\t\t\t\t<div class=\"subCategory\" *ngFor=\"let sub  of main?.subCategory;let catIndex = index\">\n\t\t\t\t\t\t\t<!-- <li>\t{{sub.name}} </li> -->\n\t\t\t\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t\t\t\t<div class=\"sub-dot mr-2\" [ngStyle]=\"mainCurrIndex == catIndex ?{'display':'none'}:''\"></div>\n\t\t\t\t\t\t\t\t<div class=\"wd-50\" > <span [ngStyle]=\"mainCurrIndex == catIndex ?{'display':'none'}:''\">{{sub.name}}</span>\n\t\t\t\t\t\t\t\t <input type=\"text\" *ngIf=\"catIndex == mainCurrIndex\"  class=\"cus-input\" placeholder=\"Enter sub category\" \n\t\t\t\t\t\t\t\t   name=\"subCategory\" [(ngModel)]=\"sub.name\" ></div>\n\t\t\t\t\t\t\t\t<div class=\"wd-50 d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\" [ngStyle]=\"mainCurrIndex == catIndex ?{'display':'none'}:''\" aria-hidden=\"true\" (click)=\"mainCurrIndex = catIndex \"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-floppy-o pl-2 pr-3\"   title=\"save\" *ngIf=\"catIndex == mainCurrIndex\" aria-hidden=\"true\" [ngStyle]=\"!sub.name? {'pointer-events':'none','opacity':'0.4'}:''\" (click)=\"editMaintenance(main)\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times  pl-2\"  title=\"cancel\" *ngIf=\"catIndex == mainCurrIndex\" aria-hidden=\"true\" (click)=\"getAllMaintenance();mainCurrIndex = -1\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t</div>\n\t\t</mat-tab>\n\t</mat-tab-group>\n\t</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-update/assets-update.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-update/assets-update.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  assets-update works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-view/assets-view.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-view/assets-view.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-view-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isAssetLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isAssetLoaded\">\n\n\t\t<form #viewAssetForm = \"ngForm\" name=\"viewAssetForm\" novalidate>\n\n\t\t\t<div class=\"card mb-30\">\n\t\t\t\t\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t    \t\t\t<h5>Select Category</h5>\n\t\t    \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-3\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"assetCategoryId\" (ngModelChange) = \"getAssetCategory()\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option value=\"All\">All</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<div class=\"card table-card\" *ngIf=\"isAssetLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All {{assetCategoryName}} Assets <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"assetData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/assets/create-asset\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Asset</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Asset Tag No \n\t\t\t\t      \t<span (click)=\"sortUnitData('assetTagNo')\" [ngClass]=\"getFieldOrderBy('assetTagNo')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Asset Tag No\" [(ngModel)]=\"columnField['assetTagNo']\" (ngModelChange)=\"selectColInput('assetTagNo')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Asset Name \n\t\t\t\t      \t<span (click)=\"sortUnitData('assetName')\" [ngClass]=\"getFieldOrderBy('assetName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Asset Name\" [(ngModel)]=\"columnField['assetName']\" (ngModelChange)=\"selectColInput('assetName')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Category \n\t\t\t\t      \t<span (click)=\"sortUnitData('assetCategoryName')\" [ngClass]=\"getFieldOrderBy('assetCategoryName')\"></span>\n\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tfieldName = \"assetCategory\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"assetCategoryId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"assetCategoryData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'assetCategory', 'lookupValueName')\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Vendor Name \n\t\t\t\t      \t<span (click)=\"sortUnitData('vendorTypeName')\" [ngClass]=\"getFieldOrderBy('vendorTypeName')\"></span>\n\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tfieldName = \"vendorTypeName\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"vendorName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"vendorId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"vendorDataList\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'vendorTypeName', 'vendorName')\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Condition \n\t\t\t\t      \t<span (click)=\"sortUnitData('assetCondition')\" [ngClass]=\"getFieldOrderBy('assetCondition')\"></span>\n\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tfieldName = \"assetCondition\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"assetConditionId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"assetConditionData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'assetCondition', 'lookupValueName')\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Purchase Cost\n\t\t\t\t      \t<span (click)=\"sortUnitData('purchaseCost')\" [ngClass]=\"getFieldOrderBy('purchaseCost')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Purchase Cost\" [(ngModel)]=\"columnField['purchaseCost']\" (ngModelChange)=\"selectColInput('purchaseCost')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t  </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let asset of assetListData | slice:ItemStartIndex:ItemEndIndex | simpleSearch: assetData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder ; let i = index\" [ngClass]=\"asset.isActive ? 'active' : 'notactive'\">\n\t\t\t\t      <td class=\"name\">{{asset.assetTagNo}}</td>\n\t\t\t\t      <td class=\"grey\">{{asset.assetName}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getAssetCategoryName(asset, asset.assetCategoryId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getvendorName(asset, asset.vendorId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getAssetCondition(asset, asset.assetConditionId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{asset.purchaseCost}}</td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"assetDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"assetDropDown\">\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/edit-asset/{{asset.assetId}}\">Edit Asset</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(asset.assetId)\">Delete Asset</a>                              \n\t\t\t\t\t\t\t   <!-- <a href=\"javascript:void(0)\" routerLink=\"/ams/assets/create-maintenance\" *ngIf=\"!isMaintenanceDue(asset.assetId)\">Add Maintenance</a> -->\n\t\t\t\t\t\t\t  <a href=\"javascript:void(0)\" (click)=\"navigateToAddMaintenance(asset)\" *ngIf=\"!isMaintenanceDue(asset.assetId)\">Add Maintenance</a> \n\t\t\t\t\t\t\t  <a href=\"javascript:void(0)\" routerLink=\"/ams/assets/manage-maintenance/{{asset.assetId}}\" *ngIf=\"asset.assetId\">Manage Maintenance</a>\n\t\t\t\t\t\t\t  <a href=\"javascript:void(0)\" routerLink=\"/ams/assets/last-Maintenance/{{asset.assetId}}\" *ngIf=\"asset.assetId\">View last Maintenance</a>\n                             <!-- <a href=\"javascript:void(0)\" routerLink=\"/ams/assets/edit-asset-maintenance/{{asset.assetId}}\" *ngIf=\"isMaintenanceAvailable(asset.assetId) && isMaintenanceDue(asset.assetId)\">Edit Maintenance</a> -->\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\"  routerLink=\"/ams/assets/maintenance-history\"  *ngIf=\"isMaintenanceAvailable(asset.assetId)\">View Maintenance History</a>\n\t\t\t\t      \t</div>\n    \t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/last-maintenance/last-maintenance.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/last-maintenance/last-maintenance.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"helpdesk-all-tickets-wrapper\" *ngIf=\"dummmy\">\t\n\t<app-loader *ngIf=\"!isTicketDataLoaded\"></app-loader>\n\t<!-- <ul class=\"legends list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots common\"></span><span>Common</span></li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots private\"></span>Private</li>\n\t</ul>\n\t<ul class=\"legends ml-3 list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span><span>High</span></li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots medium\"></span>Medium</li>\n\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>Low</li>\n\t</ul> -->\n\t<div class=\"card clear table-card\" *ngIf=\"isTicketDataLoaded\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n\t\t\t\t\n    \t\t\t<h5>Last Maintenance <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\" \n    \t\t\t\t(ngModelChange)=\"onGlSearchFilter()\" >\n    \t\t\t</li>\n    \t\t\t<!-- <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown> -->\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/assets/create-maintenance\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Maintenance</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t  <jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"[]\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid> \n  \t\t\t \n\n  \t\t</div>\n\n\t</div>\n\n</div>\n\n\n\n<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left pt-4\">\n    \t\t\t<h5>View Last Maintenance <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n    \t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<!-- <i class=\"fa fa-filter fs-4 filter\" aria-hidden=\"true\"  data-toggle=\"collapse\" data-target=\"#filter\"></i>   -->\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\" \n    \t\t\t\t(ngModelChange)=\"onGlSearchFilter()\" >\n    \t\t\t</li>\n    \t\t\t<!-- <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown> -->\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/assets/create-maintenance\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Maintenance</span>\n\t\t\t\t\t</a>\n\n    \t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n  \t\t</div>\n\t\t  <div  id=\"filter\"  class=\"collapse mb-3 filter-card\">\n            <mat-card class=\"example-card\" >\n                <div class=\"row wd-100\">\n                    <div class=\"col-sm-4\">\n                        <h6 class=\"pb-1\">Assets</h6> \n                        <angular2-multiselect [data]=\"assetList\" \n                        [(ngModel)]=\"search.assets\" \n                        [settings]=\"assetSettings\" \n                        (onSelect)=\"onItemSelect($event)\"\n                        (onDeSelect)=\"OnItemDeSelect($event)\" \n                        (onSelectAll)=\"onSelectAll($event)\" \n                        (onDeSelectAll)=\"onDeSelectAll($event)\">\n                    </angular2-multiselect>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <h6 class=\"pb-1\">Category</h6>\n                        <angular2-multiselect [data]=\"categoryList\" \n                        [(ngModel)]=\"search.categorys\" \n                        [settings]=\"categorySettings\" \n                        (onSelect)=\"onItemSelect($event)\"\n                        (onDeSelect)=\"OnItemDeSelect($event)\" \n                        (onSelectAll)=\"onSelectAll($event)\" \n                        (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <h6 class=\"pb-1\">Sub Category</h6>\n                        <angular2-multiselect [data]=\"subCategoryList\" \n                        [(ngModel)]=\"selectedItems\" \n                        [settings]=\"subCategorySettings\" \n                        (onSelect)=\"onItemSelect($event)\"\n                        (onDeSelect)=\"OnItemDeSelect($event)\" \n                        (onSelectAll)=\"onSelectAll($event)\" \n                        (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                    </div>                \n            </div>\n            \n        \n\n            </mat-card>\n      </div> \n\n        <div class=\"card-body p-0\">\n\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" \n\t\t\t    [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" \n\t\t\t\t[source]=\"[]\" \n\t\t\t\t[columns]=\"columnData\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/maintenance-history/maintenance-history.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/maintenance-history/maintenance-history.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left pt-4\">\n                <h5>Maintenance History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n            </div>\n            <div class=\"\">\n                <ul class=\"list-inline d-flex justify-content-end align-items-center \">\n                    <li class=\"w-25 mr-0\">\n                        <div class=\"d-flex justify-content-center align-items-center setup-outer\">\n                            <!-- <span>Maintenance History</span> -->\n                            <select name=\"status\" class=\"form-control\" [(ngModel)]=\"histroySearch\" (change)=\"onStatusFilter()\">\n                                <option value=\"\" >All</option>\n                                <option value=\"'Ontime'\" >Ontime</option>\n                                <option value=\"'Delayed'\" >Delayed</option>                               \n                            </select>\n                        </div>\n                    </li>\n                    <li class=\"list-inline-item search d-none d-md-inline-block mr-0\">\n                        <i class=\"fa fa-filter fs-4 filter\" aria-hidden=\"true\" data-toggle=\"collapse\"\n                            data-target=\"#filter\"></i>\n                    </li>\n                    <li class=\"list-inline-item search d-none d-md-inline-block\">\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                        <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"Search...\" [(ngModel)]=\"histroySearch\"\n                            (ngModelChange)=\"onSearchFilter()\">\n                    </li>\n                    <!-- <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown> -->\n                    <li class=\"list-inline-item\">\n                        <a class=\"btn lime-green mt_5\" routerLink=\"/ams/assets/create-maintenance\"\n                            routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n                            <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                            <span>Add Maintenance</span>\n                        </a>\n\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div id=\"filter\" class=\"collapse mb-3 \">\n            <mat-card class=\"example-card\">\n                <div class=\"row wd-100\">\n                    <div class=\"col-sm-4\">\n                        <h6 class=\"pb-1\">Assets</h6>\n                        <angular2-multiselect [data]=\"assetList\" [(ngModel)]=\"search.assets\" [settings]=\"assetSettings\"\n                            (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"\n                            (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <h6 class=\"pb-1\">Category</h6>\n                        <angular2-multiselect [data]=\"categoryList\" [(ngModel)]=\"search.categorys\"\n                            [settings]=\"categorySettings\" (onSelect)=\"onItemSelect($event)\"\n                            (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\"\n                            (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <h6 class=\"pb-1\">Sub Category</h6>\n                        <angular2-multiselect [data]=\"subCategoryList\" [(ngModel)]=\"selectedItems\"\n                            [settings]=\"subCategorySettings\" (onSelect)=\"onItemSelect($event)\"\n                            (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\"\n                            (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                    </div>\n                </div>\n            </mat-card>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"assetsHistoryData\" [columns]=\"columnData\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n   <div class=\"assets-create-wrapper outer-maintain\">\n       <div class=\"d-flex wd-100\">\n           <div class=\"d-flex wd-50\">\n               <h4 class=\"main-title-mini pt-4\">Manage Maintenance </h4>\n           </div>\n           <div class=\"d-flex wd-50 flex-end pt-3\">              \n               <!-- <li class=\"list-inline-item search d-none d-md-inline-block wd-33\">\n                <h6 class=\"pb-1\">Assets</h6> \n                <select name=\"assetId\" class=\"form-control\" [(ngModel)]=\"search.assetId\">\n                       <option value=\"\" disabled selected hidden>Select</option>\n                       <option *ngFor=\"let item of assetList\"\n                         [value]=\"item.assetId\">\n                         {{ item.assetName }}</option>\n                   </select>\n               </li>\n               <li class=\"list-inline-item search d-none d-md-inline-block wd-30\">\n                <h6 class=\"pb-1\">Category</h6>\n                <select name=\"category\" class=\"form-control\">\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let item of  categoryList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n                </select>\n            </li>\n            <li class=\"list-inline-item search d-none d-md-inline-block wd-30\">\n                <h6 class=\"pb-1\">Sub Category</h6>\n                <select name=\"subCategory\" class=\"form-control ellipse\">\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let item of subCategoryList\" \n                    [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n                </select>\n            </li>                -->\n            <i class=\"fa fa-filter fs-4 filter\" aria-hidden=\"true\"  data-toggle=\"collapse\" data-target=\"#filter\"></i>  \n        </div>\n       </div>\n       <div  id=\"filter\" class=\"collapse mb-3 \">\n            <mat-card class=\"example-card\" >\n                <div class=\"row wd-100\">\n                    <div class=\"col-sm-4\">\n                        <h6 class=\"pb-1\">Assets</h6> \n                        <angular2-multiselect [data]=\"assetList\" \n                        [(ngModel)]=\"search.assets\" \n                        [settings]=\"assetSettings\" \n                        (onSelect)=\"onItemSelect($event)\"\n                        (onDeSelect)=\"OnItemDeSelect($event)\" \n                        (onSelectAll)=\"onSelectAll($event)\" \n                        (onDeSelectAll)=\"onDeSelectAll($event)\">\n                    </angular2-multiselect>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <h6 class=\"pb-1\">Category</h6>\n                        <angular2-multiselect [data]=\"categoryList\" \n                        [(ngModel)]=\"search.categorys\" \n                        [settings]=\"categorySettings\" \n                        (onSelect)=\"onItemSelect($event)\"\n                        (onDeSelect)=\"OnItemDeSelect($event)\" \n                        (onSelectAll)=\"onSelectAll($event)\" \n                        (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <h6 class=\"pb-1\">Sub Category</h6>\n                        <angular2-multiselect [data]=\"subCategoryList\" \n                        [(ngModel)]=\"search.subCategory\" \n                        [settings]=\"subCategorySettings\" \n                        (onSelect)=\"onItemSelect($event)\"\n                        (onDeSelect)=\"OnItemDeSelect($event)\" \n                        (onSelectAll)=\"onSelectAll($event)\" \n                        (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                    </div>                \n            </div>\n        </mat-card>\n      </div>   \n    <mat-accordion class=\"pt-5 manage-assets\">\n        \n           <mat-expansion-panel *ngFor=\" let main of maintenanceList  | slice:ItemStartIndex:ItemEndIndex;let mainIndex = index\">\n               <mat-expansion-panel-header class=\"mr-0\">\n                   <mat-panel-title>\n                       <div class=\"row wd-100\">\n                            <div class=\"col-sm-4 ellipse\" >\n                                <label title=\"{{main.assetName}}\">{{main?.assetTagNo}}\n                                <span *ngIf=\"main?.assetTagNo\">-</span>{{main?.assetName?main.assetName:'--'}}</label>\n                            </div>\n                           <div class=\"col-sm-4 ellipse\">\n                               <label title=\"{{main.assetCategoryName}}\">{{main?.assetCategoryName?main.assetCategoryName:'--'}}</label>\n                           </div>\n                           <div class=\"col-sm-4 ellipse\">\n                            <div><i class=\"fa fa-pencil-square-o edit-asset\" routerLink=\"/ams/assets/create-maintenance/{{main.assetMaintenancePlanId}}\" aria-hidden=\"true\"></i></div>\n                            <div><i class=\"fa fa-trash delete-asset\" (click)=\"deleteManitenance(main.assetMaintenancePlanId)\"  aria-hidden=\"true\"></i></div>\n                               <label title=\"{{main.assetSubcategoryName}}\">{{main?.assetSubcategoryName?main?.assetSubcategoryName:'--'}}</label>\n                           </div>                           \n                       </div>\n                   </mat-panel-title>\n               </mat-expansion-panel-header>\n               <div class=\"row wd-100\">\n                   <div class=\"col-sm-4\">\n                       <label>Actual Maintenance Date</label>\n                       <div class=\"display-name\" *ngIf=\"!main.actualMaintDate\">--</div>\n                       <div class=\"display-name\" title=\"{{main.actualMaintDate}}\" *ngIf=\"main.actualMaintDate\">{{main.actualMaintDate | date: 'dd/MM/yyyy'}}</div>\n                   </div>\n                   <div class=\"col-sm-4\" *ngIf=\"main.maintenanceByCompany\">\n                       <label>Performed by Company </label>\n                       <div class=\"display-name\" >{{main.maintenanceByCompany}}</div>\n                   </div>\n                   <div class=\"col-sm-4\" *ngIf=\"main.maintainedbyStaff\">\n                    <label>Performed by Company </label>\n                    <div class=\"display-name\" >{{main.maintainedbyStaff}}</div>\n                   </div>\n                   <div class=\"col-sm-4\">\n                       <label>Notes</label>\n                       <div class=\"display-name\" title=\"{{main?.notes}}\">{{main?.notes?main?.notes:'--'}}</div>\n\n                   </div>\n                   <div class=\"col-sm-4\">\n                       <label>Maintenance Labor Cost</label>\n                       <div class=\"display-name\" title=\"{{main?.maintLaborCost}}\"> {{main?.maintLaborCost?main?.maintLaborCost:'--'}} </div>\n                   </div>\n                   <div class=\"col-sm-4\">\n                       <label>Maintenance Parts Cost</label>\n                       <div class=\"display-name\" title=\"{{main?.maintPartsCost}}\">{{main?.maintPartsCost?main?.maintPartsCost:'--'}}</div>\n\n                   </div>\n                   <div class=\"col-sm-4\">\n                       <label>Vat</label>\n                       <div class=\"display-name\" title=\"{{main?.maintVat}}\">{{main?.maintVat?main?.maintVat:'--'}}</div>\n                   </div>\n                   <div class=\"col-sm-4\">\n                       <label>With Holding Tax</label>\n                       <div class=\"display-name\" title=\"{{main?.maintWithTax}}\">{{main?.maintWithTax?main?.maintWithTax:'--'}}</div>\n                   </div>\n                   <div class=\"col-sm-4\">\n                       <label>Total Discount</label>\n                       <div class=\"display-name\" title=\"{{main?.totalDiscount}}\">{{main?.totalDiscount?main?.totalDiscount:'--'}}</div>\n                   </div>\n                   <div class=\"col-sm-4\">                             \n                    <label title=\"{{main.maintenanceTotalBilledAmt}}\">{{main?.maintenanceTotalBilledAmt?main.maintenanceTotalBilledAmt:'--'}}</label>\n                </div>\n                   <div class=\"col-sm-4\"> \n                       <label>Planned Maintenance Date</label>\n                       <div class=\"display-name\" *ngIf=\"!main.plannedMaintenanceDate\">--</div>\n                       <div class=\"display-name\" *ngIf=\"main.plannedMaintenanceDate\" title=\"{{main?.plannedMaintenanceDate}}\">{{main?.plannedMaintenanceDate | date: 'dd/MM/yyyy'}}</div>\n                   </div>\n                   <div class=\"col-sm-4\">\n                       <label>Next Planned Maintenance date</label>\n                       <div class=\"display-name\" *ngIf=\"!main.nextPlannedMaintenance\">--</div>\n                       <div class=\"display-name\" *ngIf=\"main.nextPlannedMaintenance\">{{main.nextPlannedMaintenance | date: 'dd/MM/yyyy'}}</div>\n                    \n                   </div>\n                   <div class=\"col-sm-4\">\n                       <label>Remind me before next planned Date</label>\n                       <div class=\"display-name\">{{main?.alertBeforeDays?main?.alertBeforeDays:'--'}}</div>\n                   </div>\n               </div>\n           </mat-expansion-panel>\n           <app-pagination  *ngIf=\"maintenanceList?.length > 0\"\n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n       </mat-accordion>\n   </div>");

/***/ }),

/***/ "./src/app/ams/assets/assets-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ams/assets/assets-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AssetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsRoutingModule", function() { return AssetsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/assets-setup/assets-setup.component */ "./src/app/ams/assets/components/assets-setup/assets-setup.component.ts");
/* harmony import */ var _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/assets-create/assets-create.component */ "./src/app/ams/assets/components/assets-create/assets-create.component.ts");
/* harmony import */ var _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/assets-reports/assets-reports.component */ "./src/app/ams/assets/components/assets-reports/assets-reports.component.ts");
/* harmony import */ var _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/assets-view/assets-view.component */ "./src/app/ams/assets/components/assets-view/assets-view.component.ts");
/* harmony import */ var _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-asset-maintenance/add-asset-maintenance.component */ "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts");
/* harmony import */ var _components_add_maintenance_add_maintenance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-maintenance/add-maintenance.component */ "./src/app/ams/assets/components/add-maintenance/add-maintenance.component.ts");
/* harmony import */ var _components_manage_maintenance_manage_maintenance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/manage-maintenance/manage-maintenance.component */ "./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.ts");
/* harmony import */ var _components_maintenance_history_maintenance_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/maintenance-history/maintenance-history.component */ "./src/app/ams/assets/components/maintenance-history/maintenance-history.component.ts");
/* harmony import */ var _components_last_maintenance_last_maintenance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/last-maintenance/last-maintenance.component */ "./src/app/ams/assets/components/last-maintenance/last-maintenance.component.ts");












const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_3__["AssetsSetupComponent"] },
    { path: 'create-asset', component: _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_4__["AssetsCreateComponent"] },
    { path: 'edit-asset/:id', component: _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_4__["AssetsCreateComponent"] },
    { path: 'add-asset-maintenance/:id/:type', component: _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_7__["AddAssetMaintenanceComponent"] },
    { path: 'create-maintenance', component: _components_add_maintenance_add_maintenance_component__WEBPACK_IMPORTED_MODULE_8__["AddMaintenanceComponent"] },
    { path: 'create-maintenance/:id', component: _components_add_maintenance_add_maintenance_component__WEBPACK_IMPORTED_MODULE_8__["AddMaintenanceComponent"] },
    { path: 'last-Maintenance', component: _components_last_maintenance_last_maintenance_component__WEBPACK_IMPORTED_MODULE_11__["LastMaintenanceComponent"] },
    { path: 'last-Maintenance/:id', component: _components_last_maintenance_last_maintenance_component__WEBPACK_IMPORTED_MODULE_11__["LastMaintenanceComponent"] },
    { path: 'maintenance-history', component: _components_maintenance_history_maintenance_history_component__WEBPACK_IMPORTED_MODULE_10__["MaintenanceHistoryComponent"] },
    { path: 'manage-maintenance', component: _components_manage_maintenance_manage_maintenance_component__WEBPACK_IMPORTED_MODULE_9__["ManageMaintenanceComponent"] },
    { path: 'manage-maintenance/:id', component: _components_manage_maintenance_manage_maintenance_component__WEBPACK_IMPORTED_MODULE_9__["ManageMaintenanceComponent"] },
    { path: 'edit-asset-maintenance/:id', component: _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_7__["AddAssetMaintenanceComponent"] },
    // { path: 'maintenance-history', component: AssetsMaintenanceHistoryComponent},
    { path: 'view', component: _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_6__["AssetsViewComponent"] },
    { path: 'view/:id', component: _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_6__["AssetsViewComponent"] },
    { path: 'reports', component: _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_5__["AssetsReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let AssetsRoutingModule = class AssetsRoutingModule {
};
AssetsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AssetsRoutingModule);



/***/ }),

/***/ "./src/app/ams/assets/assets.component.scss":
/*!**************************************************!*\
  !*** ./src/app/ams/assets/assets.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvYXNzZXRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/assets/assets.component.ts":
/*!************************************************!*\
  !*** ./src/app/ams/assets/assets.component.ts ***!
  \************************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AssetsComponent = class AssetsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssetsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/assets.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assets.component.scss */ "./src/app/ams/assets/assets.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AssetsComponent);



/***/ }),

/***/ "./src/app/ams/assets/assets.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ams/assets/assets.module.ts ***!
  \*********************************************/
/*! exports provided: AssetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsModule", function() { return AssetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _assets_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets-routing.module */ "./src/app/ams/assets/assets-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _assets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets.component */ "./src/app/ams/assets/assets.component.ts");
/* harmony import */ var _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/assets-setup/assets-setup.component */ "./src/app/ams/assets/components/assets-setup/assets-setup.component.ts");
/* harmony import */ var _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/assets-create/assets-create.component */ "./src/app/ams/assets/components/assets-create/assets-create.component.ts");
/* harmony import */ var _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/assets-reports/assets-reports.component */ "./src/app/ams/assets/components/assets-reports/assets-reports.component.ts");
/* harmony import */ var _components_assets_update_assets_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/assets-update/assets-update.component */ "./src/app/ams/assets/components/assets-update/assets-update.component.ts");
/* harmony import */ var _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/assets-view/assets-view.component */ "./src/app/ams/assets/components/assets-view/assets-view.component.ts");
/* harmony import */ var _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-asset-maintenance/add-asset-maintenance.component */ "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts");
/* harmony import */ var _components_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/assets-maintenance-history/assets-maintenance-history.component */ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts");
/* harmony import */ var _components_add_maintenance_add_maintenance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-maintenance/add-maintenance.component */ "./src/app/ams/assets/components/add-maintenance/add-maintenance.component.ts");
/* harmony import */ var _components_manage_maintenance_manage_maintenance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/manage-maintenance/manage-maintenance.component */ "./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.ts");
/* harmony import */ var _components_maintenance_history_maintenance_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/maintenance-history/maintenance-history.component */ "./src/app/ams/assets/components/maintenance-history/maintenance-history.component.ts");
/* harmony import */ var _components_last_maintenance_last_maintenance_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/last-maintenance/last-maintenance.component */ "./src/app/ams/assets/components/last-maintenance/last-maintenance.component.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");





















let AssetsModule = class AssetsModule {
};
AssetsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _assets_component__WEBPACK_IMPORTED_MODULE_7__["AssetsComponent"],
            _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_8__["AssetsSetupComponent"],
            _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_9__["AssetsCreateComponent"],
            _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_10__["AssetsReportsComponent"],
            _components_assets_update_assets_update_component__WEBPACK_IMPORTED_MODULE_11__["AssetsUpdateComponent"],
            _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_12__["AssetsViewComponent"],
            _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_13__["AddAssetMaintenanceComponent"],
            _components_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_14__["AssetsMaintenanceHistoryComponent"],
            // AddAssetSetup,
            _components_add_maintenance_add_maintenance_component__WEBPACK_IMPORTED_MODULE_15__["AddMaintenanceComponent"],
            _components_manage_maintenance_manage_maintenance_component__WEBPACK_IMPORTED_MODULE_16__["ManageMaintenanceComponent"],
            _components_maintenance_history_maintenance_history_component__WEBPACK_IMPORTED_MODULE_17__["MaintenanceHistoryComponent"],
            _components_last_maintenance_last_maintenance_component__WEBPACK_IMPORTED_MODULE_18__["LastMaintenanceComponent"]
        ],
        entryComponents: [
            _components_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_14__["AssetsMaintenanceHistoryComponent"],
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _assets_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssetsRoutingModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__["AngularMultiSelectModule"]
        ],
        bootstrap: [_assets_component__WEBPACK_IMPORTED_MODULE_7__["AssetsComponent"]]
    })
], AssetsModule);



/***/ }),

/***/ "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hZGQtYXNzZXQtbWFpbnRlbmFuY2UvYWRkLWFzc2V0LW1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddAssetMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAssetMaintenanceComponent", function() { return AddAssetMaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets-maintenance-history/assets-maintenance-history.component */ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts");
/* harmony import */ var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Asset */ "./src/app/api/controllers/Asset.ts");
/* harmony import */ var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Vendor */ "./src/app/api/controllers/Vendor.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













let AddAssetMaintenanceComponent = class AddAssetMaintenanceComponent {
    constructor(injector, dialog, router, route, assetService, vendorService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.vendorService = vendorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEditAssetMaintenance = false;
        this.isError = false;
        this.alertMessage = "";
        this.isAssetMaintenanceLoaded = false;
        this.isAssetMaintenanceSubmitted = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
    }
    getAssetCategoryName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetCategoryData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName.toLowerCase();
        }
    }
    getDateFormat(date) {
        return moment__WEBPACK_IMPORTED_MODULE_12__(date).format("MM-DD-YYYY");
    }
    submitAssetMaintenanceForm(form) {
        if (!this.isEditAssetMaintenance) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "assetId": parseInt(this.route.params['value'].id),
                "notes": this.assetMaintenance.notes,
                "maintenanceStatusId": parseInt(this.assetMaintenance.maintenanceStatusId),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": new Date().toISOString(),
                "actualMaintDate": this.assetMaintenance.actualMaintDate,
                "lastMaintenanceDate": this.assetMaintenance.lastMaintenanceDate,
                "nextPlannedMaintenance": this.assetMaintenance.nextPlannedMaintenance
            };
            let assetMaintenancePlan = {
                assetMaintenancePlan: details
            };
            this.assetService.addAssetMaintenancePlan(assetMaintenancePlan).subscribe((res) => {
                if (res.message) {
                    this.isAssetMaintenanceSubmitted = false;
                    this.sharedService.setAlertMessage("Asset Maintenance added successfully");
                    this.router.navigate(['ams/assets/view']);
                }
                else {
                    this.isAssetMaintenanceSubmitted = false;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isAssetMaintenanceSubmitted = false;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            let details = {
                "assetMaintenancePlanId": this.assetMaintenance.assetMaintenancePlanId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "assetId": parseInt(this.route.params['value'].id),
                "notes": this.assetMaintenance.notes,
                "maintenanceStatusId": parseInt(this.assetMaintenance.maintenanceStatusId),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
                "actualMaintDate": this.assetMaintenance.actualMaintDate,
                "lastMaintenanceDate": this.assetMaintenance.lastMaintenanceDate,
                "nextPlannedMaintenance": this.assetMaintenance.nextPlannedMaintenance
            };
            let updateMaintenancePlan = {
                assetMaintenancePlan: details
            };
            this.assetService.updateAssetMaintenancePlan(updateMaintenancePlan).subscribe((res) => {
                if (res.message) {
                    this.isAssetMaintenanceSubmitted = false;
                    this.sharedService.setAlertMessage("Asset Maintenance updated successfully");
                    this.router.navigate(['ams/assets/view']);
                }
                else {
                    this.isAssetMaintenanceSubmitted = false;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isAssetMaintenanceSubmitted = false;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
    }
    showMaintenanceHistory(id) {
        this.dialog.open(_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__["AssetsMaintenanceHistoryComponent"], {
            panelClass: ['material', 'medium-02'],
            disableClose: true,
            data: id
        });
    }
    ngOnInit() {
        this.assetMaintenance = {};
        this.assetMaintenance.maintenanceStatusId = "";
        this.assetMaintenance.notes = "";
        if (this.route.params['value'].id != undefined && this.route.params['value'].type == undefined) {
            this.isEditAssetMaintenance = true;
            this.assetService.getAllAssetMaintenancePlanByAssetId(this.route.params['value'].id).subscribe((res) => {
                this.allAssetMaintenanceData = res;
                var assetMaintenance = this.allAssetMaintenanceData.filter(item => {
                    return item.maintenanceStatusId == 273; // only due items
                });
                this.assetMaintenance = assetMaintenance[0];
            });
        }
        this.assetId = this.route.params['value'].id;
        let statusParams = {
            LookupTypeId: 64
        };
        this.lookupService.getLookupValueByLookupTypeId(statusParams).subscribe((res) => {
            this.statusTypeData = res;
        }, error => {
        });
        this.assetService.getAllAssetByAssetId(this.route.params['value'].id).subscribe((res) => {
            this.isAssetMaintenanceLoaded = true;
            this.assetData = res[0];
        });
        let assetCategoryParams = {
            LookupTypeId: 19
        };
        this.lookupService.getLookupValueByLookupTypeId(assetCategoryParams).subscribe((res) => {
            this.assetCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
    }
};
AddAssetMaintenanceComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__["AssetService"] },
    { type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__["VendorService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] }
];
AddAssetMaintenanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-asset-maintenance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-asset-maintenance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-asset-maintenance.component.scss */ "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__["AssetService"],
        src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__["VendorService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])
], AddAssetMaintenanceComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/add-maintenance/add-maintenance.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/ams/assets/components/add-maintenance/add-maintenance.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardOuter {\n  padding: 25px 20px;\n}\n\n.cancelBtn {\n  background: white;\n  border: 1px solid #dadada;\n}\n\n.uploadbtn {\n  padding-top: 25px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYWRkLW1haW50ZW5hbmNlL2FkZC1tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Fzc2V0cy9jb21wb25lbnRzL2FkZC1tYWludGVuYW5jZS9hZGQtbWFpbnRlbmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBRUksaUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYWRkLW1haW50ZW5hbmNlL2FkZC1tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkT3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggMjBweDsgXG59XG4uY2FuY2VsQnRuXG57XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbn1cbi51cGxvYWRidG57XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG59IiwiLmNhcmRPdXRlciB7XG4gIHBhZGRpbmc6IDI1cHggMjBweDtcbn1cblxuLmNhbmNlbEJ0biB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xufVxuXG4udXBsb2FkYnRuIHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/assets/components/add-maintenance/add-maintenance.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ams/assets/components/add-maintenance/add-maintenance.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMaintenanceComponent", function() { return AddMaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Asset */ "./src/app/api/controllers/Asset.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");







let AddMaintenanceComponent = class AddMaintenanceComponent {
    constructor(route, assetService, lookupService, cookieService, sharedService, router, activatedRoute) {
        this.route = route;
        this.assetService = assetService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.sharedService = sharedService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.asset = {};
        this.AssociationStaff = true;
        this.maintenance = {};
        this.addMaintForm = {};
        this.mainSubType = [];
        this.isFileAdded = false;
        this.fileList = [];
        this.listOfFiles = [];
    }
    ngOnInit() {
        this.maintenance.isMaintainedbyStaff = true;
        this.activatedRoute.queryParams.subscribe(params => {
            if (params) {
                this.assetId = params.assetId;
            }
        });
        this.route.paramMap.subscribe(params => {
            if (params) {
                this.assetMaintenancePlanId = params.get('id');
            }
        });
        if (this.assetMaintenancePlanId) {
            let params = {};
            this.isEdit = true;
            params.assetMaintenancePlanId = this.assetMaintenancePlanId;
            console.log(params);
            this.assetService.getAllAssetMaintenancePlanById(params).subscribe((res) => {
                console.log(res);
                this.maintenance = res[0] ? res[0] : {};
            });
        }
        this.getAllMaintenance();
        this.getAsset();
    }
    setMainSubType(id) {
        if (this.mainType && this.mainType.length > 0) {
            this.mainType.filter(val => {
                if (val.id == id) {
                    this.mainSubType = val.subCategory;
                }
            });
        }
        // if(this.isEdit){
        //   console.log('-----sub',this.maintenance.maintenanceSubtypeId);
        //   if( this.mainSubType &&  this.mainSubType.length >0){
        //     this.mainSubType.filter( val =>
        //       {
        //         console.log(this.maintenance.maintenanceSubtypeId , val.id);
        //         if(this.maintenance.maintenanceSubtypeId == val.id){
        //           console.log(val.id);
        //         }
        //       }) 
        //   }
        // }
    }
    uploadFile(event) {
        this.isFileAdded = true;
        for (var i = 0; i <= event.target.files.length - 1; i++) {
            var selectedFile = event.target.files[i];
            this.fileList.push(selectedFile);
            this.listOfFiles.push({ 'name': selectedFile.name, 'size': selectedFile.size });
        }
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
    addMaintenance() {
        let reqObj = {};
        reqObj.assetMaintenancePlanId = 0;
        reqObj.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        reqObj.assetId = this.assetId;
        reqObj.notes = this.maintenance.notes;
        reqObj.maintenanceStatusId = null;
        reqObj.isActive = true;
        reqObj.insertedBy = parseInt(this.cookieService.get('userId')),
            reqObj.insertedOn = new Date().toISOString;
        reqObj.updatedBy = 0,
            reqObj.updatedOn = new Date().toISOString;
        reqObj.actualMaintDate = this.maintenance.actualMaintDate;
        reqObj.lastMaintenanceDate = this.maintenance.lastMaintenanceDate;
        reqObj.nextPlannedMaintenance = this.maintenance.nextPlannedMaintenance;
        reqObj.maintenanceTypeId = Number(this.maintenance.maintenanceTypeId);
        reqObj.maintenanceByCompany = this.maintenance.maintenanceByCompany ? this.maintenance.maintenanceByCompany : null;
        reqObj.maintenanceByPerson = null,
            reqObj.maintenanceCompanyContactNo = null,
            reqObj.maintLaborCost = this.maintenance.maintLaborCost;
        reqObj.maintPartsCost = this.maintenance.maintPartsCost;
        reqObj.maintVat = this.maintenance.maintVat;
        reqObj.maintWithTax = this.maintenance.maintWithTax,
            reqObj.maintenanceTotalBilledAmt = this.maintenance.maintenanceTotalBilledAmt;
        reqObj.isMaintainedbyStaff = this.maintenance.isMaintainedbyStaff,
            reqObj.maintainedbyStaff = this.maintenance.maintainedbyStaff ? this.maintenance.maintainedbyStaff : null;
        reqObj.maintenanceSubtypeId = this.maintenance.maintenanceSubtypeId ? Number(this.maintenance.maintenanceSubtypeId) : null;
        this.isAssetLoaded = true;
        let params = {};
        params.assetMaintenancePlan = reqObj;
        this.assetService.addAssetMaintenancePlan(params).subscribe((res) => {
            console.log(res);
            if (res.message) {
                this.sharedService.setAlertMessage("Asset Maintenance added successfully");
                this.isAssetLoaded = false;
                this.router.navigate(['ams/assets/manage-maintenance']);
            }
        });
    }
    updateMaintenance() {
        let reqObj = {};
        reqObj.assetMaintenancePlanId = this.maintenance.assetMaintenancePlanId;
        reqObj.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        reqObj.assetId = this.maintenance.assetId;
        reqObj.notes = this.maintenance.notes;
        reqObj.maintenanceStatusId = null;
        reqObj.isActive = true;
        reqObj.insertedBy = parseInt(this.cookieService.get('userId')),
            reqObj.insertedOn = new Date().toISOString;
        reqObj.updatedBy = parseInt(this.cookieService.get('userId')),
            reqObj.updatedOn = new Date().toISOString;
        reqObj.actualMaintDate = this.maintenance.actualMaintDate;
        reqObj.lastMaintenanceDate = this.maintenance.lastMaintenanceDate;
        reqObj.nextPlannedMaintenance = this.maintenance.nextPlannedMaintenance;
        reqObj.maintenanceTypeId = Number(this.maintenance.maintenanceTypeId);
        reqObj.maintenanceByCompany = this.maintenance.maintenanceByCompany ? this.maintenance.maintenanceByCompany : null;
        reqObj.maintenanceByPerson = null,
            reqObj.maintenanceCompanyContactNo = null,
            reqObj.maintLaborCost = Number(this.maintenance.maintLaborCost);
        reqObj.maintPartsCost = Number(this.maintenance.maintPartsCost);
        reqObj.maintVat = Number(this.maintenance.maintVat);
        reqObj.maintWithTax = Number(this.maintenance.maintWithTax),
            reqObj.maintenanceTotalBilledAmt = Number(this.maintenance.maintenanceTotalBilledAmt);
        reqObj.isMaintainedbyStaff = this.maintenance.isMaintainedbyStaff,
            reqObj.maintainedbyStaff = this.maintenance.maintainedbyStaff ? this.maintenance.maintainedbyStaff : null;
        reqObj.maintenanceSubtypeId = this.maintenance.maintenanceSubtypeId ? Number(this.maintenance.maintenanceSubtypeId) : null;
        this.isAssetLoaded = true;
        let params = {};
        params.assetMaintenancePlan = reqObj;
        this.assetService.updateAssetMaintenancePlan(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage("Asset maintenance updated successfully");
                this.isAssetLoaded = false;
                this.router.navigate(['ams/assets/manage-maintenance']);
            }
            this.isAssetLoaded = false;
        });
    }
    getAllMaintenance() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            lookupTypeId: 167,
            subCategoryLookupTypeId: 168,
        };
        this.isAssetLoaded = true;
        this.lookupService.getSubcategory(queryParamBase).subscribe((res) => {
            if (res) {
                this.isAssetLoaded = false;
                this.mainType = res ? res : [];
                if (this.isEdit && this.maintenance.maintenanceTypeId) {
                    this.setMainSubType(this.maintenance.maintenanceTypeId);
                }
                else {
                    this.maintenance.maintenanceTypeId = this.mainType && this.mainType.length > 0 ? this.mainType[0].id : '';
                    this.setMainSubType(this.maintenance.maintenanceTypeId);
                }
            }
        });
    }
    /**
     * get Asset list
     * @param
     */
    getAsset() {
        let params = {};
        params.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        this.assetService.getAllAssetByApartmentId(params).subscribe((res) => {
            if (res) {
                this.assetList = res ? res : [];
                this.assetId = !this.assetId ? (this.assetList && this.assetList.length > 0) && this.assetList[0].assetId : '';
            }
        });
    }
};
AddMaintenanceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_4__["AssetService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddMaintenanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-maintenance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-maintenance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-maintenance/add-maintenance.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-maintenance.component.scss */ "./src/app/ams/assets/components/add-maintenance/add-maintenance.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_4__["AssetService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AddMaintenanceComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/assets-create/assets-create.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-create/assets-create.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtY3JlYXRlL2Fzc2V0cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-create/assets-create.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-create/assets-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: AssetsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsCreateComponent", function() { return AssetsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Asset */ "./src/app/api/controllers/Asset.ts");
/* harmony import */ var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Vendor */ "./src/app/api/controllers/Vendor.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");








let AssetsCreateComponent = class AssetsCreateComponent {
    constructor(router, route, assetService, vendorService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.vendorService = vendorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.insurance = {};
        this.isFileAdded = false;
        this.fileList = [];
        this.listOfFiles = [];
        this.assetStatus = "";
        this.isEditAsset = false;
        this.isAssetSubmitted = false;
        this.isError = false;
        this.alertMessage = "";
    }
    uploadFile(event) {
        this.isFileAdded = true;
        for (var i = 0; i <= event.target.files.length - 1; i++) {
            var selectedFile = event.target.files[i];
            this.fileList.push(selectedFile);
            this.listOfFiles.push({ 'name': selectedFile.name, 'size': selectedFile.size });
        }
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
    submitAddAssetForm(form) {
        if (!this.isEditAsset) {
            var addAssetDetails = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "assetTagNo": this.asset.assetTagNo,
                "assetCategoryId": parseInt(this.asset.assetCategoryId),
                "assetName": this.asset.assetName,
                "manufacturerDetails": this.asset.manufacturerDetails,
                "modelNo": this.asset.modelNo,
                "assetConditionId": parseInt(this.asset.assetConditionId),
                "assetLocation": this.asset.assetLocation,
                "depreciationPercentage": parseInt(this.asset.depreciationPercentage),
                "assetImageId": 1,
                "installationDate": this.asset.installationDate,
                "vendorId": parseInt(this.asset.vendorId),
                "purchaseOrderNo": this.asset.purchaseOrderNo,
                "purchaseDate": this.asset.purchaseDate,
                "purchaseCost": parseInt(this.asset.purchaseCost),
                "warrantyMonths": parseInt(this.asset.warrantyMonths),
                "retiredOn": this.asset.retiredOn,
                "comments": this.asset.comments,
                "isActive": this.asset.isActive,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": new Date().toISOString(),
                "serialNo": this.asset.serialNo,
                "assetDescription1": "string",
                "assetDescription2": "string",
                "unitOfMeasure": null,
                "quantity": null,
                "costCenter": null,
                "inventoryNumber": null,
                "salvageValue": null,
                "assetTypeId": null,
                "assetSubcategoryId": null,
                "assetOwnerId": null,
                "isLeased": this.asset.isLeased,
                "totalAssetPrice": null,
                "contractNumber": "string",
                "contractExpirydate": "2020-02-03T08:13:52.526Z",
                "contractAmount": null,
                "contractPaymentTerm": "string",
                "costCenterid": null
            };
            var addAssetParams = {
                file: this.fileList[0],
                asset: addAssetDetails
            };
            this.assetService.addAsset(addAssetParams).subscribe((res) => {
                if (res.message) {
                    this.isAssetSubmitted = false;
                    this.sharedService.setAlertMessage("Asset added successfully");
                    this.addInsurance(res.message);
                    //this.router.navigate(['ams/assets/view']);
                }
                else {
                    this.isAssetSubmitted = false;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isAssetSubmitted = false;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            var editAssetDetails = {
                "assetId": this.asset.assetId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "assetTagNo": this.asset.assetTagNo,
                "assetCategoryId": parseInt(this.asset.assetCategoryId),
                "assetName": this.asset.assetName,
                "manufacturerDetails": this.asset.manufacturerDetails,
                "modelNo": this.asset.modelNo,
                "assetConditionId": parseInt(this.asset.assetConditionId),
                "assetLocation": this.asset.assetLocation,
                "depreciationPercentage": parseInt(this.asset.depreciationPercentage),
                "assetImageId": 1,
                "installationDate": this.asset.installationDate,
                "vendorId": parseInt(this.asset.vendorId),
                "purchaseOrderNo": this.asset.purchaseOrderNo,
                "purchaseDate": this.asset.purchaseDate,
                "purchaseCost": parseInt(this.asset.purchaseCost),
                "warrantyMonths": parseInt(this.asset.warrantyMonths),
                "retiredOn": this.asset.retiredOn,
                "comments": this.asset.comments,
                "isActive": this.asset.isActive,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
                "serialNo": this.asset.serialNo,
                "assetDescription1": "string",
                "assetDescription2": "string",
                "unitOfMeasure": null,
                "quantity": null,
                "costCenter": null,
                "inventoryNumber": null,
                "salvageValue": null,
                "assetTypeId": null,
                "assetSubcategoryId": null,
                "assetOwnerId": null,
                "isLeased": this.asset.isLeased,
                "totalAssetPrice": null,
                "contractNumber": "string",
                "contractExpirydate": "2020-02-03T08:13:52.526Z",
                "contractAmount": null,
                "contractPaymentTerm": "string",
                "costCenterid": null
            };
            var editAssetParams = {
                file: this.fileList[0],
                asset: editAssetDetails
            };
            this.assetService.updateAsset(editAssetParams).subscribe((res) => {
                if (res.message) {
                    this.isAssetSubmitted = false;
                    this.sharedService.setAlertMessage("Asset updated successfully");
                    // this.router.navigate(['ams/assets/view']);
                    this.updateInsurance(res.message);
                }
                else {
                    this.isAssetSubmitted = false;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isAssetSubmitted = false;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
    }
    ngOnInit() {
        this.asset = {};
        this.asset.assetCategoryId = "";
        this.asset.assetConditionId = "";
        this.asset.vendorId = "";
        if (this.route.params['value'].id != undefined) {
            this.isEditAsset = true;
            let params = {
                assetId: this.route.params['value'].id
            };
            this.assetService.getAllAssetByAssetId(params).subscribe((res) => {
                this.asset = res[0];
            });
            let reqInsuranceParam = {};
            reqInsuranceParam.AssetId = params.assetId;
            this.assetService.getAllAssetInsurancePlanByAssetId(reqInsuranceParam).subscribe((res) => {
                this.insurance = res[0] ? res[0] : {};
            });
        }
        let assetCategoryParams = {
            LookupTypeId: 19
        };
        this.lookupService.getLookupValueByLookupTypeId(assetCategoryParams).subscribe((res) => {
            this.assetCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
        let vendprParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.vendorService.getVendorByApartmentId(vendprParams).subscribe((res) => {
            this.vendorDataList = res.filter(item => {
                return item.isActive;
            });
        });
        let assetStatusParams = {
            LookupTypeId: 64
        };
        //maintenance status 
        this.lookupService.getLookupValueByLookupTypeId(assetStatusParams).subscribe((res) => {
            this.statusTypeData = res;
        }, error => {
        });
    }
    updateInsurance(assetId) {
        let reqObj = {};
        reqObj = {
            "assetInsurancePlanId": this.insurance.assetInsurancePlanId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "assetId": this.asset.assetId,
            "insuranceProvider": this.insurance.insuranceProvider,
            "insuranceNo": this.insurance.insuranceNo,
            "insuranceExpDate": this.insurance.insuranceExpDate,
            "notes": this.insurance.notes,
            "insuranceStatus": this.insurance.insuranceStatus,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString()
        };
        let params = {};
        params.assetInsurancePlan = reqObj;
        this.assetService.updateAssetInsurancePlan(params).subscribe((res) => {
            if (res) {
                console.log(res);
            }
        }, error => {
            this.isAssetSubmitted = false;
            this.isError = true;
            this.alertMessage = "Some error occured";
        });
        this.router.navigate(['ams/assets/view']);
    }
    addInsurance(assetId) {
        let reqObj = {};
        reqObj = {
            "assetInsurancePlanId": 0,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "assetId": assetId,
            "insuranceProvider": this.insurance.insuranceProvider,
            "insuranceNo": this.insurance.insuranceNo,
            "insuranceExpDate": this.insurance.insuranceExpDate,
            "notes": this.insurance.notes,
            "insuranceStatus": parseInt(this.insurance.insuranceStatus),
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
            "updatedOn": new Date().toISOString()
        };
        let params = {};
        params.assetInsurancePlan = reqObj;
        this.assetService.addAssetInsurancePlan(params).subscribe((res) => {
            if (res) {
                console.log(res);
            }
        }, error => {
            this.isAssetSubmitted = false;
            this.isError = true;
            this.alertMessage = "Some error occured";
        });
        this.router.navigate(['ams/assets/view']);
    }
};
AssetsCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"] },
    { type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
AssetsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assets-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-create/assets-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assets-create.component.scss */ "./src/app/ams/assets/components/assets-create/assets-create.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"],
        src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], AssetsCreateComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".assets-maintenance-history-wrapper .card .lists:not(.last) {\n  border-bottom: 1px solid #eaeaea;\n}\n.assets-maintenance-history-wrapper .card .lists.done, .assets-maintenance-history-wrapper .card .lists.overdue, .assets-maintenance-history-wrapper .card .lists.due {\n  position: relative;\n}\n.assets-maintenance-history-wrapper .card .lists.done:after, .assets-maintenance-history-wrapper .card .lists.overdue:after, .assets-maintenance-history-wrapper .card .lists.due:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 100% !important;\n}\n.assets-maintenance-history-wrapper .card .lists.due:after {\n  background-color: #ff9800;\n}\n.assets-maintenance-history-wrapper .card .lists.overdue:after {\n  background-color: #e2385e;\n}\n.assets-maintenance-history-wrapper .card .lists.done:after {\n  background-color: #5cd694;\n}\n.assets-maintenance-history-wrapper .card .lists li {\n  padding: 15px 15px 0 20px;\n}\n.assets-maintenance-history-wrapper .card .lists li .column {\n  margin: 0 0 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYXNzZXRzLW1haW50ZW5hbmNlLWhpc3RvcnkvYXNzZXRzLW1haW50ZW5hbmNlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS9hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0c7RUFDQyxnQ0FBQTtBQ05KO0FEUUc7RUFDQyxrQkVOQztBREFMO0FET0k7RUFDQyxXQUFBO0VBQ0Esa0JFVkE7RUZXQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSx1QkUrSUM7QURwSk47QURTSTtFQUNDLHlCRWFNO0FEcEJYO0FEV0k7RUFDQyx5QkVYUTtBREViO0FEYUk7RUFDQyx5QkVpQlE7QUQ1QmI7QURjRztFQUNDLHlCQUFBO0FDWko7QURhSTtFQUNJLGtCQUFBO0FDWFIiLCJmaWxlIjoic3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYXNzZXRzLW1haW50ZW5hbmNlLWhpc3RvcnkvYXNzZXRzLW1haW50ZW5hbmNlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIge1xuXHQuY2FyZCB7XG5cdFx0Lmxpc3RzIHtcblx0XHRcdCY6bm90KC5sYXN0KSB7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS00NTA7XHRcblx0XHRcdH1cblx0XHRcdCYuZG9uZSwgJi5vdmVyZHVlLCAmLmR1ZSB7XG5cdFx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAkYWJzO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHdpZHRoOiA4cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAkZnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5kdWUge1xuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkcy1vcmFuZ2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYub3ZlcmR1ZSB7XG5cdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRicmlnaHQtcmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQmLmRvbmUge1xuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkbGltZS1ncmVlbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGkge1xuXHRcdFx0XHRwYWRkaW5nOiAxNXB4IDE1cHggMCAyMHB4O1xuXHRcdFx0XHQuY29sdW1uIHtcbiAgICBcdFx0XHRcdG1hcmdpbjogMCAwIDEwcHggMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0czpub3QoLmxhc3QpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG59XG4uYXNzZXRzLW1haW50ZW5hbmNlLWhpc3Rvcnktd3JhcHBlciAuY2FyZCAubGlzdHMuZG9uZSwgLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIgLmNhcmQgLmxpc3RzLm92ZXJkdWUsIC5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cy5kdWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXNzZXRzLW1haW50ZW5hbmNlLWhpc3Rvcnktd3JhcHBlciAuY2FyZCAubGlzdHMuZG9uZTphZnRlciwgLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIgLmNhcmQgLmxpc3RzLm92ZXJkdWU6YWZ0ZXIsIC5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cy5kdWU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uYXNzZXRzLW1haW50ZW5hbmNlLWhpc3Rvcnktd3JhcHBlciAuY2FyZCAubGlzdHMuZHVlOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcbn1cbi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cy5vdmVyZHVlOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyMzg1ZTtcbn1cbi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cy5kb25lOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjZDY5NDtcbn1cbi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cyBsaSB7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAwIDIwcHg7XG59XG4uYXNzZXRzLW1haW50ZW5hbmNlLWhpc3Rvcnktd3JhcHBlciAuY2FyZCAubGlzdHMgbGkgLmNvbHVtbiB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIl19 */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AssetsMaintenanceHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsMaintenanceHistoryComponent", function() { return AssetsMaintenanceHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Asset */ "./src/app/api/controllers/Asset.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let AssetsMaintenanceHistoryComponent = class AssetsMaintenanceHistoryComponent {
    constructor(assetId, assetService, lookupService, sharedService, cookieService) {
        this.assetId = assetId;
        this.assetService = assetService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isAssetMaintenanceLoaded = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 5;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
    }
    getDateFormat(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
    }
    getMaintenanceStatus(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.statusTypeData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName.toLowerCase().replace(/-/g, ' ');
        }
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    ngOnInit() {
        this.assetService.getAllAssetMaintenancePlanByAssetId(this.assetId).subscribe((res) => {
            this.isAssetMaintenanceLoaded = true;
            this.maintenanceDataList = res;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.totalItems = this.maintenanceDataList.length;
        });
        let params = {
            LookupTypeId: 64
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.statusTypeData = res;
        }, error => {
        });
    }
};
AssetsMaintenanceHistoryComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
AssetsMaintenanceHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-maintenance-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assets-maintenance-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assets-maintenance-history.component.scss */ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], AssetsMaintenanceHistoryComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/assets-reports/assets-reports.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-reports/assets-reports.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtcmVwb3J0cy9hc3NldHMtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-reports/assets-reports.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-reports/assets-reports.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AssetsReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsReportsComponent", function() { return AssetsReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AssetsReportsComponent = class AssetsReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssetsReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assets-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-reports/assets-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assets-reports.component.scss */ "./src/app/ams/assets/components/assets-reports/assets-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AssetsReportsComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/assets-setup/assets-setup.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-setup/assets-setup.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setup-search {\n  position: absolute;\n  top: 18px;\n  padding-left: 10px;\n  font-size: 1.3rem;\n  color: #8391a1;\n}\n\n.sub-dot {\n  width: 6px;\n  height: 6px;\n  border: 1px solid;\n  border-radius: 50%;\n}\n\n.mat-slide-toggle-content {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n}\n\n.subCategory {\n  padding-top: 10px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  padding-bottom: 10px;\n}\n\n.subCategory li {\n  list-style-type: circle;\n}\n\n.card-body:hover {\n  background-color: white !important;\n}\n\n.wd-100 {\n  width: 100%;\n}\n\n.wd-50 {\n  width: 50%;\n}\n\n.cus-input {\n  border-radius: 8px;\n  border: 1px solid #dadada;\n  padding-left: 10px;\n  height: 30px;\n}\n\n.fa-floppy-o {\n  color: #54b941;\n}\n\n.fa-times {\n  color: #ff3638;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYXNzZXRzLXNldHVwL2Fzc2V0cy1zZXR1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtc2V0dXAvYXNzZXRzLXNldHVwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JDREc7RURFSCxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNDRVc7QUNMYjs7QUZNQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRUhGOztBRktBO0VHcUJFLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUR0QkY7O0FGRUE7RUFDRSxpQkFBQTtFR2VBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUhqQkEsb0JBQUE7QUVLRjs7QUZIRTtFQUNFLHVCQUFBO0FFS0o7O0FGRkE7RUFDRSxrQ0FBQTtBRUtGOztBRkZBO0VBQ0UsV0FBQTtBRUtGOztBRkZBO0VBQ0UsVUFBQTtBRUtGOztBRkZBO0VBQ0Usa0JBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRUtKOztBRkhBO0VBQ0UsY0NHUTtBQ0dWOztBRkhBO0VBQ0MsY0NwQ1U7QUMwQ1giLCJmaWxlIjoic3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYXNzZXRzLXNldHVwL2Fzc2V0cy1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3Njc3MvZm9udHMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuXG4uc2V0dXAtc2VhcmNoIHtcbiAgcG9zaXRpb246ICRhYnM7XG4gIHRvcDogMThweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICRsaWdodC1ibHVlO1xufVxuXG4uc3ViLWRvdHtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gIEBpbmNsdWRlIGhlYWQtcmVndWxhcigpO1xufVxuXG5cbi5zdWJDYXRlZ29yeSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBAaW5jbHVkZSBoZWFkLXJlZ3VsYXIoKTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xuICB9XG59XG4uY2FyZC1ib2R5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLndkLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2QtNTAge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY3VzLWlucHV0e1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuLmZhLWZsb3BweS1ve1xuICBjb2xvcjogJG0tZ3JlZW4gO1xufVxuXG4uZmEtdGltZXN7XG4gY29sb3I6ICRzLXJlZC0wMjtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiLnNldHVwLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbn1cblxuLnN1Yi1kb3Qge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuLnN1YkNhdGVnb3J5IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uc3ViQ2F0ZWdvcnkgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbn1cblxuLmNhcmQtYm9keTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi53ZC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndkLTUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmN1cy1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5mYS1mbG9wcHktbyB7XG4gIGNvbG9yOiAjNTRiOTQxO1xufVxuXG4uZmEtdGltZXMge1xuICBjb2xvcjogI2ZmMzYzODtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-setup/assets-setup.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-setup/assets-setup.component.ts ***!
  \******************************************************************************/
/*! exports provided: AssetsSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsSetupComponent", function() { return AssetsSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Asset */ "./src/app/api/controllers/Asset.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_components_assets_add_setup_assets_add_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/assets-add-setup/assets-add-setup.component */ "./src/app/shared/components/assets-add-setup/assets-add-setup.component.ts");









let AssetsSetupComponent = class AssetsSetupComponent {
    constructor(dialog, lookupService, 
    // private sharedService:SharedService,
    // private route: ActivatedRoute,
    sharedService, cookieService, injector, assetService) {
        this.dialog = dialog;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.injector = injector;
        this.assetService = assetService;
        this.mainType = [];
        this.tempMainType = [];
        this.isAssetLoaded = false;
        this.categoryList = [];
        this.tempCategoryList = [];
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
    }
    //   assetCategoryData:any;
    //   isAssetCategoryLoaded:boolean = false;
    //   isAssetCategorySubmitted:boolean = true;
    //   isAssetCategoryNew:boolean = false;
    //   isAssetCategoryUpdate:boolean = false;
    ngOnInit() {
        this.getAllCategory();
        this.getAllMaintenance();
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                let param = {};
                param = {
                    categoryId: id,
                    deletedBy: parseInt(this.cookieService.get('userId'))
                };
                this.lookupService.deleteCategory(param).subscribe((res) => {
                    // _.each(this.categoryList, (type) => {
                    // 	if (type.id == id) {
                    // 		type.isActive = false;
                    // 	}
                    // })
                    this.getAllCategory();
                    this.getAllMaintenance();
                    setTimeout(() => {
                        if (this.delType == "maintenance") {
                            this.sharedService.setAlertMessage("Maintenance type deleted successfully");
                        }
                        else {
                            this.sharedService.setAlertMessage("Asset Category deleted successfully");
                        }
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
    addSetUp(name, type, value, e) {
        // let data:any={};
        // data.name=type;
        console.log(type, value);
        const dialogRef = this.dialog.open(src_app_shared_components_assets_add_setup_assets_add_setup_component__WEBPACK_IMPORTED_MODULE_8__["AssetsAddSetupComponent"], {
            width: '70%',
            data: {
                'name': name,
                'type': type,
                'value': JSON.stringify(value)
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result) {
                this.getAllCategory();
                this.getAllMaintenance();
            }
        });
    }
    deleteCategory(id, type) {
        this.delType = type;
        this.modalService.showConfirmModal(id);
    }
    deleteMaintype(index) {
        //  this.mainType.splice(index,1)
    }
    deleteCategoryType(index) {
        this.categoryList.splice(index, 1);
    }
    filterCategoryItem(value) {
        this.categoryList = this.tempCategoryList.filter((item) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
    filterMaitenanceItem(value) {
        this.categoryList = this.tempCategoryList.filter((item) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
    editSubCategory(data) {
        let reqObj = {};
        reqObj.id = data.id;
        reqObj.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        reqObj.name = data.name;
        // if (data && data.subCategory.length > 0) {
        // 	this.subList.filter(val => {
        // 		val.id = val.id ? val.id : 0;
        // 	});
        // }
        reqObj.subCategory = data && data.subCategory.length > 0 ? data.subCategory : [];
        reqObj.isActive = true,
            reqObj.insertedBy = parseInt(this.cookieService.get('userId'));
        reqObj.insertedOn = new Date();
        reqObj.updatedBy = parseInt(this.cookieService.get('userId'));
        reqObj.updatedOn = new Date();
        let params = {};
        params.model = reqObj;
        params.subcategoryLookupTypeId = 68;
        this.lookupService.upsertSubCategory(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage("Sub Category updated successfully");
                this.isAssetLoaded = false;
                this.getAllCategory();
                this.currIndex = -1;
            }
        });
    }
    getAllMaintenance() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            lookupTypeId: 167,
            subCategoryLookupTypeId: 168,
        };
        this.isAssetLoaded = true;
        this.lookupService.getSubcategory(queryParamBase).subscribe((res) => {
            if (res) {
                this.isAssetLoaded = false;
                this.mainType = res ? res : [];
                this.tempMainType = this.mainType;
                // if (this.data && this.data.type === 'addSubType') {
                // 	this.setup.category = this.data && this.data.value && this.data.value.id ? this.data.value.id : '';
                // 	this.setup.categoryName = this.data && this.data.value && this.data.value.name ? this.data.value.name : '';
                // 	// console.log(this.category);
                // }
            }
        });
    }
    /**
     *
     * @param get all category
     */
    getAllCategory() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            lookupTypeId: 19,
            subCategoryLookupTypeId: 68,
        };
        this.isAssetLoaded = true;
        this.lookupService.getSubcategory(queryParamBase).subscribe((res) => {
            if (res) {
                this.isAssetLoaded = false;
                this.categoryList = res ? res : [];
                this.tempCategoryList = this.categoryList;
            }
        });
    }
    editMaintenance(data) {
        let reqObj = {};
        reqObj.id = data.id;
        reqObj.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        reqObj.name = data.name;
        reqObj.subCategory = data && data.subCategory.length > 0 ? data.subCategory : [];
        reqObj.isActive = true,
            reqObj.insertedBy = parseInt(this.cookieService.get('userId'));
        reqObj.insertedOn = new Date();
        reqObj.updatedBy = parseInt(this.cookieService.get('userId'));
        reqObj.updatedOn = new Date();
        let params = {};
        params.model = reqObj;
        params.subcategoryLookupTypeId = 168;
        this.lookupService.upsertSubCategory(params).subscribe((res) => {
            console.log(res, res);
            if (res) {
                this.sharedService.setAlertMessage("Maintenance sub types updated successfully");
                this.isAssetLoaded = false;
                this.getAllMaintenance();
                this.mainCurrIndex = -1;
            }
        });
    }
};
AssetsSetupComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_2__["AssetService"] }
];
AssetsSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assets-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-setup/assets-setup.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assets-setup.component.scss */ "./src/app/ams/assets/components/assets-setup/assets-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_2__["AssetService"]])
], AssetsSetupComponent);

//   assetCategory:string = "";
//   assetCategoryUpdateId:number = 0;
//   alertTicketMessage:string = "";
//   isCategoryError:boolean = false; 
//   isCategorySuccess:boolean = false; 
//   constructor(
//     private assetService: AssetService,
//   	private lookupService: LookupService,
//     private sharedService:SharedService,
//     private cookieService:CookieService
//   ) { }
//   addNewAssetCategory(){
//   	this.isAssetCategoryNew = true;
//   	this.isAssetCategoryUpdate = false;
//   }
//   updateAssetCategory(item){
//   	this.isAssetCategoryUpdate = true;
//   	this.isAssetCategoryNew = false;
//   	this.assetCategory = item.lookupValueName;
//   	this.assetCategoryUpdateId = item.lookupValueId;
//   }
//   deleteAssetCategory(item, index){
//   	this.isAssetCategoryLoaded = false;
//     console.log(item);
//   	var params = {
//       lookupValueId: item.lookupValueId,
//       updateUserId: parseInt(this.cookieService.get('userId'))
//     }
//   	this.lookupService.deleteLookupvalue(params).subscribe((res:any) => {
//   	  this.assetCategoryData.splice(index, 1);
// 	  this.isAssetCategoryLoaded = true;
// 	});
//   }
//   removeCategoryBox(){
//   	this.isAssetCategoryNew = false;
//   	this.isAssetCategoryUpdate = false;
//   	this.isCategoryError = false;
//   }
//   submitAssetCategoryForm(form) {
//   	this.isAssetCategorySubmitted = false;
//   	if(this.isAssetCategoryNew) {
//   		let details = {
// 		  "lookupTypeId": 19, // asset category lookup id
// 		  "lookupValueName": this.assetCategory,
// 		  "description": this.assetCategory,
// 		  "isActive": true,
// 		  "insertedBy": parseInt(this.cookieService.get('userId')),
// 		  "insertedOn": "2019-11-20T16:51:24.105Z",
// 		  "updatedBy": 0,
// 		  "updatedOn": "2019-11-20T16:51:24.105Z"
// 		}
// 		this.lookupService.addLookupValue(details).subscribe((res:any) => {
// 	  		if(res.message) {
// 	  			this.lookupService.getLookupValueByLookupTypeId(19).subscribe((res:any) => {
// 	  				this.isAssetCategorySubmitted = true;
// 		  			this.isCategorySuccess = true;
// 		          	this.alertTicketMessage = "Category Added Successfully!";
// 		          	this.assetCategoryData = res.filter(item => {
// 	                return item.isActive;
// 	              });
// 	  			});
// 	  		}
// 	  		else {
// 	  			this.isAssetCategorySubmitted = true;	
// 	          	this.isCategoryError = true;
// 	          	this.alertTicketMessage = res.errorMessage;
// 	  		}
//   		});
//   	}
//   	else {
//   		let details = {
//   		"lookupValueId": this.assetCategoryUpdateId,
// 		  "lookupTypeId": 19, // asset category lookup id
// 		  "lookupValueName": this.assetCategory,
// 		  "description": this.assetCategory,
// 		  "isActive": true,
// 		  "insertedBy": 0,
// 		  "insertedOn": "2019-11-20T16:51:24.105Z",
// 		  "updatedBy": parseInt(this.cookieService.get('userId')),
// 		  "updatedOn": "2019-11-20T16:51:24.105Z"
// 		}
// 		this.lookupService.updateLookupValue(details).subscribe((res:any) => {
// 	  		if(res.message) {
// 	  			this.lookupService.getLookupValueByLookupTypeId(19).subscribe((res:any) => {
// 	  				this.isAssetCategorySubmitted = true;
// 		  			this.isCategorySuccess = true;
// 		          	this.alertTicketMessage = "Category Updated Successfully!";
// 		          	this.assetCategoryData = res.filter(item => {
// 	                	return item.isActive;
// 	              	});	
// 	  			});
// 	  		}
// 	  		else {
// 	  			this.isAssetCategorySubmitted = true;	
// 	          	this.isCategoryError = true;
// 	          	this.alertTicketMessage = res.errorMessage;
// 	  		}
//   		});
//   	}
//   }
//   ngOnInit() {
//   	this.lookupService.getLookupValueByLookupTypeId(19).subscribe((res:any) => {
//   		this.isAssetCategoryLoaded = true;
//   		this.assetCategoryData = res.filter(item => {
//         	return item.isActive;
//       });
//       _.each(this.assetCategoryData, item => {
//         this.assetService.getAllAssetByCategoryId(item.lookupValueId).subscribe((res:any) => {
//           if(res == undefined || res.length == 0){
//             item.assetCount = 0;
//           }
//           else {
//             item.assetCount = res.length;
//           }
//         },
//         error => {
//         });
//       })  
//   	});
//   }
// @Component({
// 	selector: 'asset-setup',
// 	template: `<div class="assets-create-wrapper">
// 	<form  novalidate>
// 		<h4 class="main-title-mini float-left mt-3">
// 			<span>
// 			{{data?.name == 'asset'? 'Create Asset Setup':'Create Maintenance Setup'}}
// 			</span>
// 		</h4>
// 		<div class="card clear mb-30" >
// 			<div class="card-body p-0">
// 				<ul class="list-group tabs clear">
// 					<div  class="collapse show">
// 						<div class="details">
// 							<div class="row">
// 								<div class="col-sm-4">
// 									<div class="input-box" *ngIf="data?.type == 'add'">
// 					                    <label>{{data?.name== 'asset'? 'Asset Category':'Maintenance Types'}}</label>
// 					                    <input type="text" class="form-control" placeholder="Enter" name="category" [(ngModel)]="category">
// 			                		</div>
// 								</div>
// 								<div class="col-sm-4" [ngStyle]="data?.type == 'add'?{'display':'none'}:''">
// 									<div class="input-box">
// 					                    <label>{{data?.name == 'asset'? 'Asset Sub Category':'Maintenance SubTypes'}}  </label>
// 					                    <input type="text"  class="form-control" placeholder="Enter" name="assestSubCategory" [(ngModel)]="subCategory" >			                		</div>
// 								</div>
// 								<div class="col-sm-4">
// 									<div class="select-box">
// 									<label>{{data?.name == 'asset'? 'Asset Sub Category':'Maintenance SubTypes'}}  </label>
// 					                    <select name="mainType" class="form-control" placeholder="Enter" name="assestSubCategory" [(ngModel)]="subCategory" >
// 									        <option value="" disabled selected hidden>Select</option>
// 									        <!-- <option *ngFor="let item of assetCategoryData" [value]="item.lookupValueId">{{ item.lookupValueName }}</option> -->
// 									    </select>
// 				            		</div>
// 								</div>
// 								<div class="col-sm-4 pt-25" *ngIf="data?.type == 'add'">
// 								<button class="btn blue mr-2" (click)="addSubList()">Add {{data?.name == 'asset'? 'Sub Category':'Maintenance SubTypes'}}</button>
// 							 </div>
// 							</div>
// 							<div class="card clear" *ngIf="subList.length > 0">
//                             <div class="card-body p-0">
//                                 <div class="flex p-2 flexWrap">
// 									<div class="subCard" *ngFor="let list of subList;let subIndex = index">
// 									{{list}}
// 									<div>
// 									<i class="fa fa-times canceIcon pl-2" aria-hidden="true" (click)="deleteSublist(subIndex)"></i>
// 							     	</div>
// 									</div>
//                                 </div>
//                             </div>
//                         </div>
// 						</div>
//      				</div>
// 				</ul>
// 			</div>
// 		</div>
// 		<div class="row">
// 			<div class="col-sm-12">
// 				<ul class="list-inline float-right">
// 					<li class="list-inline-item">
// 						<button class="btn blue mr-2">Submit</button>
// 						<button class="btn btnBorder mr-2" (click)="dialogRef.close()">Cancel</button>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 	</form>
// </div>`,
// styles:[`.subCard{
//     display: flex;
//     padding: 6px 10px;
//     border: 1px solid #dadadada;
//     border-radius: 19px;
//     margin-left: 5px;
//     margin-bottom: 10px;
//     margin-top: 5px;
// 	margin: 5px;'
// }
// .flex{
// 	display:flex;
// }
// .flexWrap{
// 	flex-wrap: wrap;
// }
// .pt-25 {
// 	padding-top:25px;
// }
// .canceIcon{
// 	color: #9c9b9b;
// }
// .btnBorder{
//     border: 1px solid #dadada;
// }
// `
//   ]
//   })
//   export class AddAssetSetup {
// 	public subList:any=[];
// 	public category:any; 
// 	assestSubCategory:any;
// 	constructor(
// 	  public dialogRef: MatDialogRef<AddAssetSetup>,
// 	  @Inject(MAT_DIALOG_DATA) public data: any) {
// 		  console.log(data);
// 		  if(this.data && this.data.type === 'addSubType'){
//             this.category = this.data && this.data.value && this.data.value.name ? this.data.value.name:'';
// 		  }
// 	  }
// 	  close(): void {
// 	  this.dialogRef.close();
// 	}
//   addSubList(){
// 	  if(this.assestSubCategory){
// 		this.subList.push(this.assestSubCategory);
// 		this.assestSubCategory ='';
// 	  }
//   }
//   deleteSublist(index){
// 	  this.subList.splice(index,1)
//   }
//   }


/***/ }),

/***/ "./src/app/ams/assets/components/assets-update/assets-update.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-update/assets-update.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtdXBkYXRlL2Fzc2V0cy11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-update/assets-update.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-update/assets-update.component.ts ***!
  \********************************************************************************/
/*! exports provided: AssetsUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsUpdateComponent", function() { return AssetsUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AssetsUpdateComponent = class AssetsUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssetsUpdateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-update',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assets-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-update/assets-update.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assets-update.component.scss */ "./src/app/ams/assets/components/assets-update/assets-update.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AssetsUpdateComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/assets-view/assets-view.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-view/assets-view.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtdmlldy9hc3NldHMtdmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-view/assets-view.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-view/assets-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: AssetsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsViewComponent", function() { return AssetsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets-maintenance-history/assets-maintenance-history.component */ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts");
/* harmony import */ var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Asset */ "./src/app/api/controllers/Asset.ts");
/* harmony import */ var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Vendor */ "./src/app/api/controllers/Vendor.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");












let AssetsViewComponent = class AssetsViewComponent {
    constructor(injector, dialog, router, route, assetService, vendorService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.vendorService = vendorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.assetCategoryId = "";
        this.isAssetCategorySelected = false;
        this.isAssetLoaded = false;
        this.assetData = "";
        this.unitFieldType = "assetTagNo";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.assetCategoryName = "";
        this.selectedInput = "";
        this.columnField = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                let params = {
                    LookupTypeId: 19
                };
                this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
                    this.assetCategoryData = res.filter(item => {
                        return item.isActive;
                    });
                    this.getAssetCategoryData(this.assetCategoryId);
                });
            }
        });
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
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
    showConfirmModal(id) {
        this.modalService.showConfirmModal(id);
    }
    selectColInput(value) {
        this.selectedInput = value;
    }
    onSelectChange(event, type, name) {
        if (!underscore__WEBPACK_IMPORTED_MODULE_11__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
        }
        else {
            this.columnField = {};
        }
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isItemsAvailable() {
        return this.totalItems > 0 ? true : false;
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    getAssetCondition(asset, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetConditionData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.assetListData.map(obj => {
                if (obj.assetId == asset.assetId) {
                    obj.assetCondition = data[0].lookupValueName.toLowerCase();
                }
            });
            return data[0].lookupValueName.toLowerCase();
        }
    }
    getAssetCategoryName(asset, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetCategoryData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.assetListData.map(obj => {
                if (obj.assetId == asset.assetId) {
                    obj.assetCategory = data[0].lookupValueName.toLowerCase();
                }
            });
            return data[0].lookupValueName.toLowerCase();
        }
    }
    getvendorName(asset, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.vendorDataList, function (item) {
            if (item.vendorId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.assetListData.map(obj => {
                if (obj.assetId == asset.assetId) {
                    obj.vendorTypeName = data[0].vendorName;
                }
            });
            return data[0].vendorName;
        }
    }
    getAssetCategory() {
        if (this.assetCategoryId != "All") {
            this.router.navigateByUrl('/ams/assets/view/' + parseInt(this.assetCategoryId));
        }
        else {
            this.router.navigate(['/ams/assets/view/']);
        }
    }
    getAssetCategoryData(id) {
        this.isAssetLoaded = false;
        underscore__WEBPACK_IMPORTED_MODULE_11__["each"](this.assetCategoryData, (item, index) => {
            if (id != "All") {
                if (item.lookupValueId == parseInt(id)) {
                    this.assetCategoryName = item.lookupValueName;
                }
            }
            else {
                this.assetCategoryName = "";
            }
        });
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.assetService.getAllAssetByApartmentId(params).subscribe((res) => {
            if (id != "All") {
                this.assetListData = res.filter(item => {
                    return (item.assetCategoryId == parseInt(id)) && item.isActive;
                });
            }
            else {
                this.assetListData = res.filter(item => {
                    return item.isActive;
                });
            }
            this.totalItems = this.assetListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isAssetLoaded = true;
        });
    }
    showMaintenanceHistory(id) {
        this.dialog.open(_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__["AssetsMaintenanceHistoryComponent"], {
            panelClass: ['material', 'medium-02'],
            disableClose: true,
            data: id
        });
    }
    isMaintenanceAvailable(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetMaintenaceDataList, function (item) {
            if (item.assetId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    isMaintenanceDue(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetMaintenaceDataList, function (item) {
            if (item.assetId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return false;
        }
        else {
            var check = underscore__WEBPACK_IMPORTED_MODULE_11__["some"](data, item => {
                return item.maintenanceStatusId == 273;
            });
            return check ? true : false;
        }
    }
    ngOnInit() {
        this.asset = {};
        if (this.route.params['value'].id == undefined) {
            this.assetCategoryId = "All";
            let params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.assetService.getAllAssetByApartmentId(params).subscribe((res) => {
                this.isAssetLoaded = false;
                this.assetListData = res.filter(item => {
                    return item.isActive;
                });
                this.totalItems = this.assetListData.length;
                if (this.totalItems > this.itemLimit) {
                    this.ItemEndIndex = this.itemLimit;
                }
                else {
                    this.ItemEndIndex = this.totalItems;
                }
                this.isAssetLoaded = true;
            });
        }
        else {
            this.assetCategoryId = "" + this.route.params['value'].id;
        }
        let assetContparams = {
            LookupTypeId: 23
        };
        //asset condition
        this.lookupService.getLookupValueByLookupTypeId(assetContparams).subscribe((res) => {
            this.assetConditionData = res.filter(item => {
                return item.isActive;
            });
        });
        let vendorParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.vendorService.getVendorByApartmentId(vendorParams).subscribe((res) => {
            this.vendorDataList = res.filter(item => {
                return item.isActive;
            });
        });
        let assetParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.assetService.getAllAssetMaintenancePlanByApartmentId(assetParams).subscribe((res) => {
            this.assetMaintenaceDataList = res.filter(item => {
                return item.isActive;
            });
        });
        let statusparams = {
            LookupTypeId: 64
        };
        this.lookupService.getLookupValueByLookupTypeId(statusparams).subscribe((res) => {
            this.statusTypeData = res;
        }, error => {
        });
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                var params = {
                    assetId: id,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.assetService.deleteAsset(params).subscribe((res) => {
                    underscore__WEBPACK_IMPORTED_MODULE_11__["each"](this.assetListData, (type) => {
                        if (type.assetId == id) {
                            type.isActive = false;
                        }
                    });
                    setTimeout(() => {
                        this.assetListData = this.assetListData.filter((type) => type.assetId !== id);
                        this.totalItems = this.assetListData.length;
                        this.sharedService.setAlertMessage("Asset deleted");
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
    navigateToAddMaintenance(row) {
        this.router.navigate(['/ams/assets/create-maintenance'], { queryParams: { assetId: row.assetId, type: 'ADD' } });
    }
};
AssetsViewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__["AssetService"] },
    { type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__["VendorService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] }
];
AssetsViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assets-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-view/assets-view.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assets-view.component.scss */ "./src/app/ams/assets/components/assets-view/assets-view.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__["AssetService"],
        src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__["VendorService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])
], AssetsViewComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/last-maintenance/last-maintenance.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/ams/assets/components/last-maintenance/last-maintenance.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-icon {\n  font-size: 2.5rem;\n}\n\n.filter {\n  position: relative !important;\n  left: -4px !important;\n  padding-bottom: 8px;\n  font-size: 21px !important;\n  top: 0px !important;\n}\n\n.search-icon {\n  padding-top: 18px;\n  font-size: 2rem;\n}\n\n.wd-30 {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvbGFzdC1tYWludGVuYW5jZS9sYXN0LW1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwic3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvbGFzdC1tYWludGVuYW5jZS9sYXN0LW1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDNEVFLGlCQUFBO0FDNUVGOztBRkdBO0VBQ0ksNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBRUFKOztBRkdBO0VBQ0csaUJBQUE7RUNnRUQsZUFBQTtBQy9ERjs7QUZHQTtFQUNJLFVBQUE7QUVBSiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9sYXN0LW1haW50ZW5hbmNlL2xhc3QtbWFpbnRlbmFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zY3NzL2ZvbnRzLnNjc3MnO1xuXG4uZmlsdGVyLWljb24ge1xuICAgIEBpbmNsdWRlIGZ0LWNhbGMoMjUpO1xufVxuLmZpbHRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAtNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWljb24ge1xuICAgcGFkZGluZy10b3A6IDE4cHg7XG4gICBAaW5jbHVkZSBmdC1jYWxjKDIwKTtcbn1cblxuLndkLTMwIHtcbiAgICB3aWR0aDogMzAlO1xufVxuXG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIi5maWx0ZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uZmlsdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IC00cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi53ZC0zMCB7XG4gIHdpZHRoOiAzMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/ams/assets/components/last-maintenance/last-maintenance.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/ams/assets/components/last-maintenance/last-maintenance.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LastMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastMaintenanceComponent", function() { return LastMaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Asset */ "./src/app/api/controllers/Asset.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");







let LastMaintenanceComponent = class LastMaintenanceComponent {
    constructor(assetService, cookieService, lookupService, route) {
        this.assetService = assetService;
        this.cookieService = cookieService;
        this.lookupService = lookupService;
        this.route = route;
        this.categoryList = [];
        this.assetList = [];
        this.subCategoryList = [];
        this.search = {};
        this.assetData = {};
        this.assetSettings = {
            singleSelection: true,
            text: "Search Asset",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
        this.categorySettings = {
            singleSelection: true,
            text: "Search Category",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
        this.subCategorySettings = {
            singleSelection: true,
            text: "Search Sub Category",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Last Maint. Date',
                datafield: 'lastMaintenanceDate',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Maint type',
                datafield: 'maintWithTax',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Maint Subtype',
                datafield: 'maintLaborCost',
                cellsrenderer: cellsrenderer,
                minwidth: 250,
                renderer: columnrenderer
            }, {
                ext: 'Next Planned Maintenance date',
                datafield: 'maintenanceSubtypeId',
                cellsrenderer: cellsrenderer,
                minwidth: 250,
                renderer: columnrenderer
            }, {
                text: 'Remind me before next planned Date',
                datafield: 'assetTypeId',
                cellsrenderer: cellsrenderer,
                minwidth: 250,
                renderer: columnrenderer
            }, {
                text: 'Planned Maintenance Date',
                datafield: 'nextPlannedMaintenance',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'Actual Maintenance Date',
                datafield: 'actualMaintDate',
                cellsrenderer: cellsrenderer,
                minwidth: 200,
                renderer: columnrenderer
            },
            {
                text: 'Ontime/Delayed',
                datafield: 'maintVat',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            },
            {
                text: 'Cost',
                datafield: 'maintenanceTotalBilledAmt',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            },
        ];
        //  var ticketListData = res.filter(data => {
        //   return data.isActive
        // })
        this.route.paramMap.subscribe(params => {
            if (params) {
                this.assetId = params.get('id');
                this.getAssetById();
            }
        });
        this.getAllCategory();
        this.getSubCategory();
        this.getAsset();
    }
    onItemSelect(item) {
        console.log(item);
        // console.log(this.selectedItems);
    }
    OnItemDeSelect(item) {
        console.log(item);
        // console.log(this.selectedItems);
    }
    onSelectAll(items) {
        console.log(items);
    }
    onDeSelectAll(items) {
        console.log(items);
    }
    getAssetById() {
        if (this.assetId) {
            let params = {
                assetId: this.assetId
            };
            this.assetService.getAllAssetByAssetId(params).subscribe((res) => {
                // this.assetList = res;
                if (res) {
                    this.gridSourceData = {
                        localdata: res.length > 0 ? res : [],
                        datatype: "array"
                    };
                    this.assetData = new jqx.dataAdapter(this.gridSourceData);
                }
            });
        }
    }
    // getCurrentAsset(){
    //   this.assetService.getAllAssetMaintenancePlanById(params).subscribe((res: any) => {
    //     console.log(res);
    //     this.maintenance = res[0] ? res[0] : {};
    //   });
    // }
    getAllCategory() {
        let params = {};
        params.LookupTypeId = 19;
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            console.log(res, 'res:::::');
            if (res) {
                // this.categoryList = res;
                if (res && res.length > 0) {
                    res.filter(val => {
                        this.categoryList.push({
                            'id': val.lookupValueId,
                            'itemName': val.lookupValueName
                        });
                    });
                }
            }
        });
    }
    getSubCategory() {
        let params = {};
        params.LookupTypeId = 68;
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            if (res) {
                // this.subCategoryList = res;
                if (res && res.length > 0) {
                    res.filter(val => {
                        this.subCategoryList.push({
                            'id': val.lookupValueId,
                            'itemName': val.lookupValueName
                        });
                    });
                }
            }
        });
    }
    /**
     * get Asset list
     * @param
     */
    getAsset() {
        let params = {};
        params.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        this.assetService.getAllAssetByApartmentId(params).subscribe((res) => {
            if (res) {
                // this.assetList = res;
                if (res && res.length > 0) {
                    res.filter(val => {
                        this.assetList.push({
                            'id': val.assetId,
                            'itemName': val.assetName
                        });
                    });
                }
            }
        });
    }
};
LastMaintenanceComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], LastMaintenanceComponent.prototype, "datagrid", void 0);
LastMaintenanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-last-maintenance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./last-maintenance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/last-maintenance/last-maintenance.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./last-maintenance.component.scss */ "./src/app/ams/assets/components/last-maintenance/last-maintenance.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], LastMaintenanceComponent);

//      assetCategoryId:string = "";
//     isAssetLoaded:boolean = false;
//     // assetData:string = "";
//     unitFieldType:string = "assetTagNo";
//     unitOrder:boolean = true;
//     ItemStartIndex:any = 0;
//     ItemEndIndex:any;
//     totalItems:any;
//     itemLimit:any = 10;
//     totalFilterItems:any;
//     // modalService:any;
//     asset:any;
//     assetListData:any;
//     // assetCategoryName:string = "";
//     // assetMaintenaceDataList:any;
//     // maintenanceData:any;
//     // statusTypeData:any;
//     selectedInput:string = "";
//     columnField: any = {}
//     constructor(
//       private injector: Injector,
//       private router: Router,
//       private route: ActivatedRoute,
//       private cookieService:CookieService,
//       private assetService: AssetService
//     ) { 
//     }
//     getIndexParams(event){
//       this.ItemStartIndex = event.ItemStartIndex;
//       this.ItemEndIndex = event.ItemEndIndex;
//       this.itemLimit = event.itemLimit;
//     }
//     sortUnitData(type){
//       this.unitFieldType = type;
//       this.unitOrder = !this.unitOrder;
//     }
//     getFieldOrderBy(type) {
//       if(this.unitFieldType == type){
//         return this.unitOrder ? 'asc' : 'desc';
//       }
//       else return '';
//     }
//     selectColInput(value){
//       this.selectedInput = value;
//     }
//     onSelectChange(event, type, name){
//       if(!_.isEmpty(event)){
//         this.selectedInput = type;
//         this.columnField[type] = event[name];
//       }
//       else {
//          this.columnField = {};
//       }
//     }
//     isMobileView() {
//       return window.innerWidth <= 767 ? 'table-responsive' : '';
//     }
//     // isItemsAvailable(){
//     //   return this.totalItems > 0 ? true : false;
//     // }
//     isNoItemsAvailable(){
//       return this.totalItems == 0 ? true : false;
//     }
//     ngOnInit() {
//       this.asset = {};
//       if(this.route.params['value'].id == undefined) {
//         this.assetCategoryId = "All"; 
//         let params = {
//           apartmentId: parseInt(this.cookieService.get('apartmentId'))
//         }
//         this.assetService.getAllAssetByApartmentId(params).subscribe((res:any) => {
//           this.isAssetLoaded = false;
//           this.assetListData = res.filter(item => {
//             return item.isActive
//           })
//           this.totalItems = this.assetListData.length;
//           if(this.totalItems>this.itemLimit){
//             this.ItemEndIndex = this.itemLimit;
//           }
//           else {
//             this.ItemEndIndex = this.totalItems;
//           }
//           this.isAssetLoaded = true;
//         });
//       }
//       else {
//         this.assetCategoryId = ""+this.route.params['value'].id; 
//       }
//     }
//  }


/***/ }),

/***/ "./src/app/ams/assets/components/maintenance-history/maintenance-history.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/ams/assets/components/maintenance-history/maintenance-history.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-slide-toggle-content {\n  padding-top: 6px;\n}\n\n.list-inline-item {\n  position: relative;\n  bottom: 3px;\n}\n\n.filter-icon {\n  font-size: 2.5rem;\n}\n\n.filter {\n  position: relative !important;\n  font-size: 21px !important;\n  top: 0px !important;\n  padding-right: 17px;\n}\n\n.card.table-card .card-header ul {\n  float: none;\n}\n\n.search-icon {\n  padding-top: 18px;\n  font-size: 2rem;\n}\n\n.wd-30 {\n  width: 30%;\n}\n\n.selected-list .c-btn {\n  color: #373946;\n  font-size: 13px !important;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n}\n\n.pure-checkbox {\n  color: #373946;\n  font-size: 12px !important;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvbWFpbnRlbmFuY2UtaGlzdG9yeS9tYWludGVuYW5jZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvbWFpbnRlbmFuY2UtaGlzdG9yeS9tYWludGVuYW5jZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGdCQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURJQTtFRW1FRSxpQkFBQTtBRG5FRjs7QURHQTtFQUNJLDZCQUFBO0VBR0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FER0E7RUFDRyxpQkFBQTtFRW9ERCxlQUFBO0FEbkRGOztBREdBO0VBQ0ksVUFBQTtBQ0FKOztBRElJO0VBQ0UsY0cwREs7RUh6REwsMEJBQUE7RUVFSixxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FERkY7O0FEQUU7RUFDRSxjR29ETztFSG5EUCwwQkFBQTtFRUpGLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QURRRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9tYWludGVuYW5jZS1oaXN0b3J5L21haW50ZW5hbmNlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zY3NzL2ZvbnRzLnNjc3MnO1xuXG5cbi5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbi5saXN0LWlubGluZS1pdGVte1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDNweDtcbn1cbi5maWx0ZXItaWNvbiB7XG4gICAgQGluY2x1ZGUgZnQtY2FsYygyNSk7XG59XG4uZmlsdGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIC8vIGxlZnQ6IC00cHggIWltcG9ydGFudDtcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTdweDtcbn1cbi5jYXJkLnRhYmxlLWNhcmQgLmNhcmQtaGVhZGVyIHVsIHtcbiAgICBmbG9hdDogbm9uZTtcbn1cbi5zZWFyY2gtaWNvbiB7XG4gICBwYWRkaW5nLXRvcDogMThweDtcbiAgIEBpbmNsdWRlIGZ0LWNhbGMoMjApO1xufVxuXG4ud2QtMzAge1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi5zZWxlY3RlZC1saXN0IHtcbiAgICAuYy1idG4ge1xuICAgICAgY29sb3I6ICRncmV5LTgwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgICAgQGluY2x1ZGUgIGhlYWQtcmVndWxhcigpO1xuICAgIH1cbiAgfVxuICAucHVyZS1jaGVja2JveHtcbiAgICBjb2xvcjogJGdyZXktODAwO1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIEBpbmNsdWRlICBoZWFkLXJlZ3VsYXIoKTtcbiAgfSIsIi5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4ubGlzdC1pbmxpbmUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAzcHg7XG59XG5cbi5maWx0ZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uZmlsdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xufVxuXG4uY2FyZC50YWJsZS1jYXJkIC5jYXJkLWhlYWRlciB1bCB7XG4gIGZsb2F0OiBub25lO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ud2QtMzAge1xuICB3aWR0aDogMzAlO1xufVxuXG4uc2VsZWN0ZWQtbGlzdCAuYy1idG4ge1xuICBjb2xvcjogIzM3Mzk0NjtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuLnB1cmUtY2hlY2tib3gge1xuICBjb2xvcjogIzM3Mzk0NjtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/assets/components/maintenance-history/maintenance-history.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/ams/assets/components/maintenance-history/maintenance-history.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MaintenanceHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceHistoryComponent", function() { return MaintenanceHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Asset */ "./src/app/api/controllers/Asset.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
// import { Component, OnInit, Injector, ViewChild, TemplateRef } from '@angular/core';
// import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';

// // import { MatDialog } from '@angular/material/dialog';
// // import { MatDialogRef } from "@angular/material/dialog";
// // import { AssetsMaintenanceHistoryComponent } from './../assets-maintenance-history/assets-maintenance-history.component';
// import { AssetService } from 'src/app/api/controllers/Asset';
// // import { VendorService } from '../../../.././api/services/vendor.service';
// // import { LookupService } from '../../../../api/services/lookup.service';
// // import { SharedService } from '../../../../shared/services/shared.service';
// // import { ModalService } from '../../../../shared/services/modal.service';
// import { CookieService } from 'ngx-cookie-service';
// import * as _ from 'underscore';
// import * as moment from 'moment';





let MaintenanceHistoryComponent = class MaintenanceHistoryComponent {
    constructor(assetService, cookieService, lookupService) {
        this.assetService = assetService;
        this.cookieService = cookieService;
        this.lookupService = lookupService;
        this.categoryList = [];
        this.assetList = [];
        this.subCategoryList = [];
        this.search = {
            status: ''
        };
        this.assetSettings = {
            singleSelection: true,
            text: "Search Asset",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
        this.categorySettings = {
            singleSelection: true,
            text: "Search Category",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
        this.subCategorySettings = {
            singleSelection: true,
            text: "Search Sub Category",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Asset Name',
                datafield: 'assetName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Ontime/Delayed',
                datafield: 'historyStatus',
                cellsrenderer: cellsrenderer,
                minwidth: 120,
                renderer: columnrenderer
            },
            {
                text: 'Asset Tag',
                datafield: 'assetTagNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Category',
                datafield: 'assetCategoryName',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'Subcategory',
                datafield: 'assetSubcategoryName',
                cellsrenderer: cellsrenderer,
                minwidth: 120,
                renderer: columnrenderer
            }, {
                text: 'Maint type',
                datafield: 'maintenanceTypeName',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'Planned Main. Date',
                datafield: 'plannedMaintenanceDate',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'Actual Main. Date',
                datafield: 'actualMaintDate',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            },
            {
                text: 'Cost',
                datafield: 'maintenanceTotalBilledAmt',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            },
        ];
        //  var ticketListData = res.filter(data => {
        //   return data.isActive
        // })
        this.getMaintenaceHistory();
        this.getAllCategory();
        this.getSubCategory();
        this.getAsset();
    }
    onItemSelect(item) {
        console.log(item);
        // console.log(this.selectedItems);
    }
    OnItemDeSelect(item) {
        console.log(item);
        // console.log(this.selectedItems);
    }
    onSelectAll(items) {
        console.log(items);
    }
    onDeSelectAll(items) {
        console.log(items);
    }
    getMaintenaceHistory() {
        let params = {};
        params.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        this.assetService.getAllAssetMaintenancePlanByApartmentId(params).subscribe((res) => {
            if (res) {
                if (res && res.length > 0) {
                    res.filter(val => {
                        if (!val.actualMaintDate || !val.plannedMaintenanceDate) {
                            val.historyStatus = '';
                            return;
                        }
                        if (val.actualMaintDate < val.plannedMaintenanceDate) {
                            val.historyStatus = 'Ontime';
                        }
                        else {
                            val.historyStatus = 'Delayed';
                        }
                    });
                }
                let responeData = [];
                responeData = res;
                console.log(res);
                this.gridSourceData = {
                    localdata: responeData.length > 0 ? responeData : [],
                    datatype: "array"
                };
                this.assetsHistoryData = new jqx.dataAdapter(this.gridSourceData);
            }
        });
    }
    ckeckOndelay(type) {
        console.log(type);
        let filterArr = [];
        // if(this.gridSourceData.localdata && this.gridSourceData.localdata.length > 0 ){
        //   this.gridSourceData.localdata.filter( val => {
        //     console.log(val , val.historyStatus)
        //     if(type == true && val.historyStatus == 'Delayed'){
        //       filterArr.push(val);
        //     } else if( type == false && val.historyStatus == 'Ontime')  {
        //       filterArr.push(val);
        //     }
        //   })
        //   this.gridSourceData = {
        //     localdata:  filterArr.length > 0 ? filterArr:[],
        //     datatype: "array"
        //   }  
        //   this.assetsHistoryData = new jqx.dataAdapter(this.gridSourceData);
        // }
        // console.log(JSON.parse(this.assetsHistoryData).localdata);
    }
    onSearchFilter() {
        if (this.histroySearch != "") {
            let filterGroup = new jqx.filter();
            let filterOperator = 1;
            let filterValue = this.histroySearch;
            let filterCondition = 'contains';
            let filterData = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
            filterGroup.operator = 'or';
            filterGroup.addfilter(filterOperator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(item => {
                if (item.datafield != 'Actions') {
                    this.datagrid.addfilter(item.datafield, filterGroup, true);
                }
            });
            this.datagrid.applyfilters();
        }
        else {
            this.datagrid.clearfilters();
        }
    }
    onStatusFilter() {
        // if(this.historyStatus != ""){
        //   let filterGroup = new jqx.filter();
        //   let filterOperator = 1;
        //   let filterValue = this.historyStatus;
        //   let filterCondition = 'contains';
        //   let filterData = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
        //   filterGroup.operator = 'or';
        //   filterGroup.addfilter(filterOperator, filterData);
        //   this.datagrid.showfiltercolumnbackground(false);
        //   this.columnData.forEach(item => {
        //     if(item.datafield == 'historyStatus') {
        //       this.datagrid.addfilter(item.datafield, filterGroup, true);
        //     }
        //   })
        //   this.datagrid.applyfilters();
        // }
        // else {
        //   this.datagrid.clearfilters();
        // }
    }
    getAllCategory() {
        let params = {};
        params.LookupTypeId = 19;
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            console.log(res, 'res:::::');
            if (res) {
                // this.categoryList = res;
                if (res && res.length > 0) {
                    res.filter(val => {
                        this.categoryList.push({
                            'id': val.lookupValueId,
                            'itemName': val.lookupValueName
                        });
                    });
                }
            }
        });
    }
    getSubCategory() {
        let params = {};
        params.LookupTypeId = 68;
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            if (res) {
                // this.subCategoryList = res;
                if (res && res.length > 0) {
                    res.filter(val => {
                        this.subCategoryList.push({
                            'id': val.lookupValueId,
                            'itemName': val.lookupValueName
                        });
                    });
                }
            }
        });
    }
    /**
     * get Asset list
     * @param
     */
    getAsset() {
        let params = {};
        params.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        this.assetService.getAllAssetByApartmentId(params).subscribe((res) => {
            if (res) {
                // this.assetList = res;
                if (res && res.length > 0) {
                    res.filter(val => {
                        this.assetList.push({
                            'id': val.assetId,
                            'itemName': val.assetName
                        });
                    });
                }
            }
        });
    }
};
MaintenanceHistoryComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], MaintenanceHistoryComponent.prototype, "datagrid", void 0);
MaintenanceHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-maintenance-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./maintenance-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/maintenance-history/maintenance-history.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./maintenance-history.component.scss */ "./src/app/ams/assets/components/maintenance-history/maintenance-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]])
], MaintenanceHistoryComponent);

// assetCategoryData:any;
// assetCategoryId:string = "";
// vendorDataList:any;
// assetConditionData:any;
// isAssetCategorySelected:boolean = false;
// isAssetLoaded:boolean = false;
// assetData:string = "";
// unitFieldType:string = "assetTagNo";
// unitOrder:boolean = true;
// ItemStartIndex:any = 0;
// ItemEndIndex:any;
// totalItems:any;
// itemLimit:any = 10;
// totalFilterItems:any;
// modalService:any;
// asset:any;
// assetListData:any;
// assetCategoryName:string = "";
// assetMaintenaceDataList:any;
// maintenanceData:any;
// statusTypeData:any;
// selectedInput:string = "";
// columnField: any = {}
// constructor(
//   private injector: Injector,
//   private router: Router,
//   private route: ActivatedRoute,
//   private cookieService:CookieService,
//   private assetService: AssetService
// ) { 
//   // this.modalService = this.injector.get(ModalService);
//   //  router.events.forEach((event) => {
//   //   if(event instanceof NavigationEnd) {
//   //     this.lookupService.getLookupValueByLookupTypeId(19).subscribe((res:any) => {
//   //       this.assetCategoryData = res.filter(item => {
//   //         return item.isActive;
//   //       });
//   //       this.getAssetCategoryData(this.assetCategoryId);
//   //     });
//   //   }
//   // });
// }
// getIndexParams(event){
//   this.ItemStartIndex = event.ItemStartIndex;
//   this.ItemEndIndex = event.ItemEndIndex;
//   this.itemLimit = event.itemLimit;
// }
// sortUnitData(type){
//   this.unitFieldType = type;
//   this.unitOrder = !this.unitOrder;
// }
// getFieldOrderBy(type) {
//   if(this.unitFieldType == type){
//     return this.unitOrder ? 'asc' : 'desc';
//   }
//   else return '';
// }
// selectColInput(value){
//   this.selectedInput = value;
// }
// onSelectChange(event, type, name){
//   if(!_.isEmpty(event)){
//     this.selectedInput = type;
//     this.columnField[type] = event[name];
//   }
//   else {
//      this.columnField = {};
//   }
// }
// isMobileView() {
//   return window.innerWidth <= 767 ? 'table-responsive' : '';
// }
// // isItemsAvailable(){
// //   return this.totalItems > 0 ? true : false;
// // }
// isNoItemsAvailable(){
//   return this.totalItems == 0 ? true : false;
// }
// getAssetCondition(asset, id){
//   var data = _.filter( this.assetConditionData, function( item ) {
//     if(item.lookupValueId === id)
//       return item;
//   });
//   if(data === undefined || data.length == 0){
//     return '';
//   }
//   else {
//     this.assetListData.map(obj=> {
//       if(obj.assetId == asset.assetId){
//         obj.assetCondition = data[0].lookupValueName.toLowerCase();
//       }
//     });
//     return data[0].lookupValueName.toLowerCase();
//   }
// }
// getAssetCategoryName(asset, id){
//   var data = _.filter( this.assetCategoryData, function( item ) {
//     if(item.lookupValueId === id)
//       return item;
//   });
//   if(data === undefined || data.length == 0){
//     return '';
//   }
//   else {
//     this.assetListData.map(obj=> {
//       if(obj.assetId == asset.assetId){
//         obj.assetCategory = data[0].lookupValueName.toLowerCase();
//       }
//     });
//     return data[0].lookupValueName.toLowerCase();
//   }
// }
// getvendorName(asset, id){
//   var data = _.filter( this.vendorDataList, function( item ) {
//     if(item.vendorId === id)
//       return item;
//   });
//   if(data === undefined || data.length == 0){
//     return '';
//   }
//   else {
//     this.assetListData.map(obj=> {
//       if(obj.assetId == asset.assetId){
//         obj.vendorTypeName = data[0].vendorName;
//       }
//     });
//     return data[0].vendorName;
//   }
// }
// getAssetCategory(){
//   if(this.assetCategoryId != "All"){
//     this.router.navigateByUrl('/ams/assets/view/'+parseInt(this.assetCategoryId));
//   }
//   else {
//     this.router.navigate(['/ams/assets/view/']);
//   }
// }
// getAssetCategoryData(id){
//   this.isAssetLoaded = false;
//   _.each(this.assetCategoryData, (item, index) => {
//     if(id != "All"){
//       if(item.lookupValueId == parseInt(id)){
//         this.assetCategoryName = item.lookupValueName;
//       }
//     }
//     else {
//       this.assetCategoryName = "";
//     }
//   });
//   this.assetService.getAllAssetByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res:any) => {
//     if(id != "All"){
//       this.assetListData = res.filter(item => {
//         return (item.assetCategoryId == parseInt(id)) && item.isActive
//       });
//     }
//     else {
//       this.assetListData = res.filter(item => {
//         return item.isActive
//       })
//     }
//     this.totalItems = this.assetListData.length;
//     if(this.totalItems>this.itemLimit){
//       this.ItemEndIndex = this.itemLimit;
//     }
//     else {
//       this.ItemEndIndex = this.totalItems;
//     }
//     this.isAssetLoaded = true;
//   });
// }
// showMaintenanceHistory(id){
//   this.dialog.open(AssetsMaintenanceHistoryComponent, {
//     panelClass: [ 'material', 'medium-02' ],
//     disableClose: true,
//     data: id
//   });
// }
// isMaintenanceAvailable(id){
//   var data = _.filter( this.assetMaintenaceDataList, function( item ) {
//     if(item.assetId === id)
//       return item;
//   });
//   if(data === undefined || data.length == 0){
//     return false;
//   }
//   else {
//     return true;
//   }
// }
// isMaintenanceDue(id){
//   var data = _.filter( this.assetMaintenaceDataList, function( item ) {
//     if(item.assetId === id)
//       return item;
//   });
//   if(data === undefined || data.length == 0){
//     return false;
//   }
//   else {
//    var check = _.some(data, item => {
//       return item.maintenanceStatusId == 273
//     });
//     return check ? true : false;
//   }
// }
// ngOnInit() {
//   this.asset = {};
//   if(this.route.params['value'].id == undefined) {
//     this.assetCategoryId = "All"; 
//     let params = {
//       apartmentId: parseInt(this.cookieService.get('apartmentId'))
//     }
//     this.assetService.getAllAssetByApartmentId(params).subscribe((res:any) => {
//       this.isAssetLoaded = false;
//       this.assetListData = res.filter(item => {
//         return item.isActive
//       })
//       this.totalItems = this.assetListData.length;
//       if(this.totalItems>this.itemLimit){
//         this.ItemEndIndex = this.itemLimit;
//       }
//       else {
//         this.ItemEndIndex = this.totalItems;
//       }
//       this.isAssetLoaded = true;
//     });
//   }
//   else {
//     this.assetCategoryId = ""+this.route.params['value'].id; 
//   }
//asset condition
// this.lookupService.getLookupValueByLookupTypeId(23).subscribe((res:any) => {
//   this.assetConditionData = res.filter(item => {
//       return item.isActive;
//   });
// });
// this.vendorService.getVendorByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res:any) => {
//   this.vendorDataList = res.filter(item => {
//     return item.isActive;
//   });
// });
// this.assetService.getAllAssetMaintenancePlanByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res:any) => {
//   this.assetMaintenaceDataList = res.filter(item => {
//     return item.isActive;
//   })
// })
// this.lookupService.getLookupValueByLookupTypeId(64).subscribe((res:any) => {
//   this.statusTypeData = res;
// },
// error => {
// });
// delete item
// this.sharedService.unitlistdeleteindexcast.subscribe( id => {
// if(id != null){
// var params = {
//   assetId: id,
//   deleteBy: parseInt(this.cookieService.get('userId'))
// }
// this.assetService.deleteAsset(params).subscribe((res:any) => {
//   _.each(this.assetListData, (type)=>{
//     if(type.assetId == id){
//       type.isActive = false;
//     }
//   })
//       setTimeout(() => {
//         this.assetListData = this.assetListData.filter((type) => type.assetId !== id);
//         this.totalItems = this.assetListData.length;
//         // this.sharedService.setAlertMessage("Asset deleted");
//         // this.sharedService.setUnitListDeleteIndex(null);
//       }, 500)
//     }, error => {
//       console.log(error);
//     });
//   }
// });
//     }
//  }


/***/ }),

/***/ "./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardOuter {\n  padding: 20px 20px;\n}\n\n.search-icon {\n  position: absolute;\n  right: -16px;\n  top: 28px;\n  font-size: 2rem;\n}\n\n.ellipse {\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  display: block;\n}\n\n.filter {\n  font-size: 19px;\n  padding-right: 22px;\n}\n\n.ellipse {\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n}\n\n.display-name {\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  display: block;\n  padding-bottom: 15px;\n  color: #777c82;\n}\n\n.setup-search {\n  position: absolute;\n  top: 18px;\n  padding-left: 10px;\n  font-size: 1.3rem;\n  color: #8391a1;\n}\n\n.mat-accordion .mat-expansion-panel {\n  margin-bottom: 7px;\n  border-radius: 8px !important;\n  border: 1px solid #dadada;\n}\n\n.manage-assets .mat-expansion-panel-header-title {\n  margin-right: 0px !important;\n}\n\n.subCategory {\n  padding-top: 10px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  padding-bottom: 10px;\n}\n\n.wd-100 {\n  width: 100%;\n}\n\n.wd-50 {\n  width: 50%;\n}\n\n.wd-33 {\n  width: 33%;\n}\n\n.flex-end {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.mat-expanded .mat-expansion-indicator {\n  margin-top: 8px !important;\n}\n\n.edit-asset {\n  position: absolute;\n  right: 17px;\n  top: 7px;\n}\n\n.delete-asset {\n  position: absolute;\n  right: 0px;\n  top: 7px;\n}\n\n.selected-list .c-btn {\n  color: #373946;\n  font-size: 13px !important;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n}\n\n.pure-checkbox {\n  color: #373946;\n  font-size: 12px !important;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvbWFuYWdlLW1haW50ZW5hbmNlL21hbmFnZS1tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Fzc2V0cy9jb21wb25lbnRzL21hbmFnZS1tYWludGVuYW5jZS9tYW5hZ2UtbWFpbnRlbmFuY2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0Usa0JBQUE7QUNKRjs7QURPQTtFQUNFLGtCRU5HO0VGT0gsWUFBQTtFQUNBLFNBQUE7RUdrRUEsZUFBQTtBRnJFRjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRE9BO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0FDSkY7O0FET0E7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDSkY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDTEY7O0FEU0U7RUFDRSw0QkFBQTtBQ05KOztBRFlBO0VBQ0UsaUJBQUE7RUc1QkEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFSDBCQSxvQkFBQTtBQ0xGOztBRFVBO0VBQ0UsV0FBQTtBQ1BGOztBRFVBO0VBQ0UsVUFBQTtBQ1BGOztBRFVBO0VBQ0UsVUFBQTtBQ1BGOztBRFVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ1BGOztBRFdFO0VBQ0UsMEJBQUE7QUNSSjs7QURZQTtFQUNFLGtCRTlGRztFRitGSCxXQUFBO0VBQ0EsUUFBQTtBQ1RGOztBRFlBO0VBQ0Usa0JFcEdHO0VGcUdILFVBQUE7RUFDQSxRQUFBO0FDVEY7O0FEa0JJO0VBQ0UsY0V0Qks7RUZ1QkwsMEJBQUE7RUc5RUoscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBRmdFRjs7QURjRTtFQUNFLGNFNUJPO0VGNkJQLDBCQUFBO0VHcEZGLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUYwRUYiLCJmaWxlIjoic3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvbWFuYWdlLW1haW50ZW5hbmNlL21hbmFnZS1tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3Njc3MvZm9udHMuc2Nzcyc7XG4vLyBAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zY3NzL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG5cbi5jYXJkT3V0ZXIge1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIHBvc2l0aW9uOiAkYWJzO1xuICByaWdodDogLTE2cHg7XG4gIHRvcDogMjhweDtcbiAgLy8gZm9udC1zaXplOiAyM3B4O1xuICBAaW5jbHVkZSBmdC1jYWxjKDIwKTtcbn1cblxuLmVsbGlwc2Uge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZmlsdGVyIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMnB4O1xufVxuLmVsbGlwc2V7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbn1cblxuLmRpc3BsYXktbmFtZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBjb2xvcjogIzc3N2M4Mjtcbn1cblxuXG4uc2V0dXAtc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjODM5MWExO1xufVxuXG4ubWF0LWFjY29yZGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG59XG5cbi5tYW5hZ2UtYXNzZXRzIHtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuXG4gIH1cbn1cblxuXG4uc3ViQ2F0ZWdvcnkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgQGluY2x1ZGUgaGVhZC1yZWd1bGFyKCk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5cblxuLndkLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2QtNTAge1xuICB3aWR0aDogNTAlO1xufVxuXG4ud2QtMzMge1xuICB3aWR0aDogMzMlO1xufVxuXG4uZmxleC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWF0LWV4cGFuZGVkIHtcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcbiAgICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uZWRpdC1hc3NldCB7XG4gIHBvc2l0aW9uOiAkYWJzO1xuICByaWdodDogMTdweDtcbiAgdG9wOiA3cHg7XG59XG5cbi5kZWxldGUtYXNzZXQge1xuICBwb3NpdGlvbjogJGFicztcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA3cHg7XG59XG5cbi8vIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclxuLy8gXHR7XG4vLyBcdFx0QGluY2x1ZGUgIGhlYWQtcmVndWxhcigpO1xuXHQvLyB9XG5cbiAgLnNlbGVjdGVkLWxpc3Qge1xuICAgIC5jLWJ0biB7XG4gICAgICBjb2xvcjogJGdyZXktODAwO1xuICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICBAaW5jbHVkZSAgaGVhZC1yZWd1bGFyKCk7XG4gICAgfVxuICB9XG4gIC5wdXJlLWNoZWNrYm94e1xuICAgIGNvbG9yOiAkZ3JleS04MDA7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgQGluY2x1ZGUgIGhlYWQtcmVndWxhcigpO1xuICB9IiwiLmNhcmRPdXRlciB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE2cHg7XG4gIHRvcDogMjhweDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZWxsaXBzZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5maWx0ZXIge1xuICBmb250LXNpemU6IDE5cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIycHg7XG59XG5cbi5lbGxpcHNlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xufVxuXG4uZGlzcGxheS1uYW1lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjNzc3YzgyO1xufVxuXG4uc2V0dXAtc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjODM5MWExO1xufVxuXG4ubWF0LWFjY29yZGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG59XG5cbi5tYW5hZ2UtYXNzZXRzIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJDYXRlZ29yeSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ud2QtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53ZC01MCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi53ZC0zMyB7XG4gIHdpZHRoOiAzMyU7XG59XG5cbi5mbGV4LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYXQtZXhwYW5kZWQgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LWFzc2V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiA3cHg7XG59XG5cbi5kZWxldGUtYXNzZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogN3B4O1xufVxuXG4uc2VsZWN0ZWQtbGlzdCAuYy1idG4ge1xuICBjb2xvcjogIzM3Mzk0NjtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuLnB1cmUtY2hlY2tib3gge1xuICBjb2xvcjogIzM3Mzk0NjtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ManageMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageMaintenanceComponent", function() { return ManageMaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Asset */ "./src/app/api/controllers/Asset.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");








let ManageMaintenanceComponent = class ManageMaintenanceComponent {
    constructor(lookupService, sharedService, route, cookieService, injector, assetService) {
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.route = route;
        this.cookieService = cookieService;
        this.injector = injector;
        this.assetService = assetService;
        this.categoryList = [];
        this.subCategoryList = [];
        this.assetList = [];
        this.search = {};
        this.maintList = [{}, {}];
        this.maintenanceList = [];
        this.settings = {};
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.tempMaintenanceList = [];
    }
    onItemSelect(item) {
        console.log('select');
        let filterArr = [];
        if (this.tempMaintenanceList && this.tempMaintenanceList.length > 0) {
            this.tempMaintenanceList.filter(val => {
                if ((this.search.categorys && val.assetCategoryName === this.search.categorys[0].itemName)
                    || (this.search.subCategory && val.assetSubcategoryName === this.search.subCategory[0].itemName)
                    || (this.search.assets && val.assetName === this.search.assets[0].itemName)) {
                    filterArr.push(val);
                }
            });
            this.maintenanceList = filterArr;
        }
    }
    OnItemDeSelect(item) {
        if ((this.search.categorys && this.search.categorys[0].length > 0 && this.search.categorys[0].itemName)
            || (this.search.assetSubcategoryName && this.search.assetSubcategoryName[0].length > 0 && this.search.assetSubcategoryName[0].itemName)
            || (this.search.assets && this.search.assets[0].length > 0 && this.search.assetSubcategoryName[0].itemName)) {
            this.onItemSelect(null);
        }
        else {
            this.maintenanceList = this.tempMaintenanceList;
        }
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items) {
        console.log(items);
    }
    onDeSelectAll(items) {
        if ((this.search.categorys && this.search.categorys[0].length > 0 && this.search.categorys[0].itemName)
            || (this.search.assetSubcategoryName && this.search.assetSubcategoryName[0].length > 0 && this.search.assetSubcategoryName[0].itemName)
            || (this.search.assets && this.search.assets[0].length > 0 && this.search.assetSubcategoryName[0].itemName)) {
            this.onItemSelect(null);
        }
        else {
            this.maintenanceList = this.tempMaintenanceList;
        }
        console.log(items);
        console.log(this.selectedItems);
    }
    ngOnInit() {
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
        // delete maintenance
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                let param = {};
                param = {
                    assetMaintenancePlanId: id,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.assetService.deleteAssetMaintenancePlan(param).subscribe((res) => {
                    this.getMaintenaceList();
                    setTimeout(() => {
                        this.sharedService.setAlertMessage("Maintenance  deleted successfully");
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
                }, error => {
                    console.log(error);
                });
            }
        });
        this.route.paramMap.subscribe(params => {
            if (params) {
                this.assetId = params.get('id');
            }
        });
        // this.search.assetId = 17;
        // this.getAllCategory();
        // this.getSubCategory();
        // this.getAsset();
        this.getMaintenaceList();
        this.assetSettings = {
            singleSelection: true,
            text: "Search Asset",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
        this.categorySettings = {
            singleSelection: true,
            text: "Search Category",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
        this.subCategorySettings = {
            singleSelection: true,
            text: "Search Sub Category",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3,
        };
        this.getAllCategory();
        this.getAsset();
        this.getSubCategory();
    }
    deleteManitenance(id, type) {
        this.modalService.showConfirmModal(id);
    }
    getAllCategory() {
        let params = {};
        params.LookupTypeId = 19;
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            console.log(res, 'res:::::');
            if (res) {
                // this.categoryList = res;
                if (res && res.length > 0) {
                    res.filter(val => {
                        this.categoryList.push({
                            'id': val.lookupValueId,
                            'itemName': val.lookupValueName
                        });
                    });
                }
            }
        });
    }
    getSubCategory() {
        let params = {};
        params.LookupTypeId = 68;
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            if (res) {
                // this.subCategoryList = res;
                if (res && res.length > 0) {
                    res.filter(val => {
                        this.subCategoryList.push({
                            'id': val.lookupValueId,
                            'itemName': val.lookupValueName
                        });
                    });
                }
            }
        });
    }
    /**
     * get Asset list
     * @param
     */
    getAsset() {
        let params = {};
        params.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        this.assetService.getAllAssetByApartmentId(params).subscribe((res) => {
            if (res) {
                // this.assetList = res;
                if (res && res.length > 0) {
                    res.filter(val => {
                        this.assetList.push({
                            'id': val.assetId,
                            'itemName': val.assetName
                        });
                    });
                }
            }
        });
    }
    getMaintenaceList() {
        let params = {};
        params.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        params.active = 1;
        this.assetService.getAllAssetMaintenancePlanByApartmentIdStatus(params).subscribe((res) => {
            if (res) {
                this.maintenanceList = res.length > 0 ? res : [];
                this.tempMaintenanceList = this.maintenanceList;
                this.totalItems = this.maintenanceList.length;
                if (this.totalItems > this.itemLimit) {
                    this.ItemEndIndex = this.itemLimit;
                }
                else {
                    this.ItemEndIndex = this.totalItems;
                }
            }
        });
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
    }
};
ManageMaintenanceComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_4__["AssetService"] }
];
ManageMaintenanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-maintenance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-maintenance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manage-maintenance.component.scss */ "./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_4__["AssetService"]])
], ManageMaintenanceComponent);



/***/ })

}]);
//# sourceMappingURL=assets-assets-module-es2015.js.map