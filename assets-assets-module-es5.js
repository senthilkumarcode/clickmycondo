function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assets-assets-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
    \******************************************************************************/

  /*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SlideToggleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function () {
      return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function () {
      return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function () {
      return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function () {
      return MatSlideToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function () {
      return MatSlideToggleChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function () {
      return MatSlideToggleModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function () {
      return MatSlideToggleRequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function () {
      return _MatSlideToggleRequiredValidatorModule;
    });
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default `mat-slide-toggle` options that can be overridden.
     * @record
     */


    var _c0 = ["thumbContainer"];
    var _c1 = ["toggleBar"];
    var _c2 = ["input"];

    var _c3 = function _c3() {
      return {
        enterDuration: 150
      };
    };

    var _c4 = ["*"];

    function MatSlideToggleDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-slide-toggle`.
     * @type {?}
     */


    var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
      providedIn: 'root',
      factory:
      /**
      * @return {?}
      */
      function factory() {
        return {
          disableToggleValue: false
        };
      }
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Increasing integer for generating unique ids for slide-toggle components.

    /** @type {?} */

    var nextUniqueId = 0;
    /**
     * \@docs-private
     * @type {?}
     */

    var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlideToggle;
      }),
      multi: true
    };
    /**
     * Change event object emitted by a MatSlideToggle.
     */

    var MatSlideToggleChange =
    /**
     * @param {?} source
     * @param {?} checked
     */
    function MatSlideToggleChange(source, checked) {
      _classCallCheck(this, MatSlideToggleChange);

      this.source = source;
      this.checked = checked;
    };

    if (false) {} // Boilerplate for applying mixins to MatSlideToggle.

    /**
     * \@docs-private
     */


    var MatSlideToggleBase =
    /**
     * @param {?} _elementRef
     */
    function MatSlideToggleBase(_elementRef) {
      _classCallCheck(this, MatSlideToggleBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
    /**
     * Represents a slidable "switch" toggle that can be moved between on and off.
     */


    var MatSlideToggle =
    /*#__PURE__*/
    function (_MatSlideToggleMixinB) {
      _inherits(MatSlideToggle, _MatSlideToggleMixinB);

      var _super = _createSuper(MatSlideToggle);

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
      function MatSlideToggle(elementRef, _focusMonitor, _changeDetectorRef, tabIndex,
      /**
       * @deprecated `_ngZone` and `_dir` parameters to be removed.
       * @breaking-change 10.0.0
       */
      _ngZone, defaults, _animationMode, _dir) {
        var _this;

        _classCallCheck(this, MatSlideToggle);

        _this = _super.call(this, elementRef);
        _this._focusMonitor = _focusMonitor;
        _this._changeDetectorRef = _changeDetectorRef;
        _this.defaults = defaults;
        _this._animationMode = _animationMode;

        _this._onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        _this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this._uniqueId = "mat-slide-toggle-".concat(++nextUniqueId);
        _this._required = false;
        _this._checked = false;
        /**
         * Name value will be applied to the input element if present.
         */

        _this.name = null;
        /**
         * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.
         */

        _this.id = _this._uniqueId;
        /**
         * Whether the label should appear after or before the slide-toggle. Defaults to 'after'.
         */

        _this.labelPosition = 'after';
        /**
         * Used to set the aria-label attribute on the underlying input element.
         */

        _this.ariaLabel = null;
        /**
         * Used to set the aria-labelledby attribute on the underlying input element.
         */

        _this.ariaLabelledby = null;
        /**
         * An event will be dispatched each time the slide-toggle changes its value.
         */

        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle input is toggled.
         * This event is always emitted when the user toggles the slide toggle, but this does not mean
         * the slide toggle's value has changed.
         */

        _this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle is dragged.
         * This event is always emitted when the user drags the slide toggle to make a change greater
         * than 50%. It does not mean the slide toggle's value is changed. The event is not emitted when
         * the user toggles the slide toggle to change its value.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         */

        _this.dragChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.tabIndex = parseInt(tabIndex) || 0;
        return _this;
      }
      /**
       * Whether the slide-toggle is required.
       * @return {?}
       */


      _createClass(MatSlideToggle, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this2 = this;

          this._focusMonitor.monitor(this._elementRef, true).subscribe(
          /**
          * @param {?} focusOrigin
          * @return {?}
          */
          function (focusOrigin) {
            // Only forward focus manually when it was received programmatically or through the
            // keyboard. We should not do this for mouse/touch focus for two reasons:
            // 1. It can prevent clicks from landing in Chrome (see #18269).
            // 2. They're already handled by the wrapping `label` element.
            if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
              _this2._inputElement.nativeElement.focus();
            } else if (!focusOrigin) {
              // When a focused element becomes disabled, the browser *immediately* fires a blur event.
              // Angular does not expect events to be raised during change detection, so any state
              // change (such as a form control's 'ng-touched') will cause a changed-after-checked
              // error. See https://github.com/angular/angular/issues/17793. To work around this,
              // we defer telling the form control it has been touched until the next tick.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this2._onTouched();
              });
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Method being called whenever the underlying input emits a change event.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onChangeEvent",
        value: function _onChangeEvent(event) {
          // We always have to stop propagation on the change event.
          // Otherwise the change event, from the input element, will bubble up and
          // emit its event object to the component's `change` output.
          event.stopPropagation();
          this.toggleChange.emit(); // When the slide toggle's config disables toggle change event by setting
          // `disableToggleValue: true`, the slide toggle's value does not change, and the
          // checked state of the underlying input needs to be changed back.

          if (this.defaults.disableToggleValue) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
          } // Sync the value from the underlying input element with the component instance.


          this.checked = this._inputElement.nativeElement.checked; // Emit our custom change event only if the underlying input emitted one. This ensures that
          // there is no change event, when the checked state changes programmatically.

          this._emitChangeEvent();
        }
        /**
         * Method being called whenever the slide-toggle has been clicked.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onInputClick",
        value: function _onInputClick(event) {
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

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.checked = !!value;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * Implemented as a part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Focuses the slide-toggle.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
        }
        /**
         * Toggles the checked state of the slide-toggle.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.checked = !this.checked;

          this._onChange(this.checked);
        }
        /**
         * Emits a change event on the `change` output. Also notifies the FormControl about the change.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          this._onChange(this.checked);

          this.change.emit(new MatSlideToggleChange(this, this.checked));
        }
        /**
         * Method being called whenever the label text changes.
         * @return {?}
         */

      }, {
        key: "_onLabelTextChange",
        value: function _onLabelTextChange() {
          // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
          // slide-toggle component will be only marked for check, but no actual change detection runs
          // automatically. Instead of going back into the zone in order to trigger a change detection
          // which causes *all* components to be checked (if explicitly marked or not using OnPush),
          // we only trigger an explicit change detection for the slide-toggle view and its children.
          this._changeDetectorRef.detectChanges();
        }
      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the slide-toggle element is checked or not.
         * @return {?}
         */

      }, {
        key: "checked",
        get: function get() {
          return this._checked;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Returns the unique id for the visual hidden input.
         * @return {?}
         */

      }, {
        key: "inputId",
        get: function get() {
          return "".concat(this.id || this._uniqueId, "-input");
        }
      }]);

      return MatSlideToggle;
    }(_MatSlideToggleMixinBase);

    MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) {
      return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8));
    };

    MatSlideToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatSlideToggle,
      selectors: [["mat-slide-toggle"]],
      viewQuery: function MatSlideToggle_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
        }
      },
      hostAttrs: [1, "mat-slide-toggle"],
      hostVars: 12,
      hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : 0 - 1)("aria-label", null)("aria-labelledby", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        color: "color",
        tabIndex: "tabIndex",
        name: "name",
        id: "id",
        labelPosition: "labelPosition",
        ariaLabel: ["aria-label", "ariaLabel"],
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
        required: "required",
        checked: "checked"
      },
      outputs: {
        change: "change",
        toggleChange: "toggleChange",
        dragChange: "dragChange"
      },
      exportAs: ["matSlideToggle"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c4,
      decls: 16,
      vars: 18,
      consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]],
      template: function MatSlideToggle_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) {
            return ctx._onChangeEvent($event);
          })("click", function MatSlideToggle_Template_input_click_4_listener($event) {
            return ctx._onInputClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() {
            return ctx._onLabelTextChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
      styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatSlideToggle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    MatSlideToggle.propDecorators = {
      _thumbEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['thumbContainer']
      }],
      _thumbBarEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['toggleBar']
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      labelPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['aria-labelledby']
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      checked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      toggleChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _inputElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['input']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggle, [{
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
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-labelledby']
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        toggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _thumbEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['thumbContainer']
        }],
        _thumbBarEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['toggleBar']
        }],
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-required-validator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlideToggleRequiredValidator;
      }),
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

    var MatSlideToggleRequiredValidator =
    /*#__PURE__*/
    function (_angular_forms__WEBPA) {
      _inherits(MatSlideToggleRequiredValidator, _angular_forms__WEBPA);

      var _super2 = _createSuper(MatSlideToggleRequiredValidator);

      function MatSlideToggleRequiredValidator() {
        _classCallCheck(this, MatSlideToggleRequiredValidator);

        return _super2.apply(this, arguments);
      }

      return MatSlideToggleRequiredValidator;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"]);

    MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) {
      return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator);
    };

    MatSlideToggleRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatSlideToggleRequiredValidator,
      selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatSlideToggleRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
          providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This module is used by both original and MDC-based slide-toggle implementations.
     */
    // tslint:disable-next-line:class-name


    var _MatSlideToggleRequiredValidatorModule = function _MatSlideToggleRequiredValidatorModule() {
      _classCallCheck(this, _MatSlideToggleRequiredValidatorModule);
    };

    _MatSlideToggleRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: _MatSlideToggleRequiredValidatorModule
    });
    _MatSlideToggleRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) {
        return new (t || _MatSlideToggleRequiredValidatorModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, {
        declarations: [MatSlideToggleRequiredValidator],
        exports: [MatSlideToggleRequiredValidator]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [MatSlideToggleRequiredValidator],
          declarations: [MatSlideToggleRequiredValidator]
        }]
      }], null, null);
    })();

    var MatSlideToggleModule = function MatSlideToggleModule() {
      _classCallCheck(this, MatSlideToggleModule);
    };

    MatSlideToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatSlideToggleModule
    });
    MatSlideToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatSlideToggleModule_Factory(t) {
        return new (t || MatSlideToggleModule)();
      },
      imports: [[_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSlideToggleModule, {
        declarations: function declarations() {
          return [MatSlideToggle];
        },
        imports: function imports() {
          return [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
        },
        exports: function exports() {
          return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
          exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatSlideToggle]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=slide-toggle.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/assets.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/assets.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsAssetsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsComponentsAddAssetMaintenanceAddAssetMaintenanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-asset-maintenance-wrapper\">\n\t\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\" (click)=\"showMaintenanceHistory(assetId)\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Maintenance History</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditAssetMaintenance\">Add Asset Maintenance</span>\n    \t\t\t\t<span *ngIf=\"isEditAssetMaintenance\">Edit Asset Maintenance</span>\n    \t\t\t</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-header at-header\" *ngIf=\"isAssetMaintenanceLoaded\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Asset Name: </span>{{assetData.assetName}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Category: </span>{{getAssetCategoryName(assetData.assetCategoryId)}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Purchase Date: </span>{{getDateFormat(assetData.purchaseDate)}}</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t\t<form #addAssetMaintenanceForm = \"ngForm\" name=\"addAssetMaintenanceForm\" (ngSubmit)=\"submitAssetMaintenanceForm(addAssetMaintenanceForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isEditAssetMaintenance\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Actual Maintenance Date*</label>\n\t\t                   <input class=\"form-control\" name=\"actualMaintDate\" [owlDateTime]=\"actualMaintDate\" [owlDateTimeTrigger]=\"actualMaintDate\" placeholder=\"Date\" [(ngModel)]=\"assetMaintenance.actualMaintDate\" required>\n\t\t\t\t\t\t\t<owl-date-time #actualMaintDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"actualMaintDate\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n               \t \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Last Maintenance Date*</label>\n\t\t                   <input class=\"form-control\" name=\"lastMaintenanceDate\" [owlDateTime]=\"lastMaintenanceDate\" [owlDateTimeTrigger]=\"lastMaintenanceDate\" placeholder=\"Date\" [(ngModel)]=\"assetMaintenance.lastMaintenanceDate\" required>\n\t\t\t\t\t\t\t<owl-date-time #lastMaintenanceDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"lastMaintenanceDate\">\n\t\t\t\t\t\t\t \t <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Next Planned Maintenance Date*</label>\n\t\t                   <input class=\"form-control\" name=\"nextPlannedMaintenance\" [owlDateTime]=\"nextPlannedMaintenance\" [owlDateTimeTrigger]=\"nextPlannedMaintenance\" placeholder=\"Date\" [(ngModel)]=\"assetMaintenance.nextPlannedMaintenance\" required>\n\t\t\t\t\t\t\t<owl-date-time #nextPlannedMaintenance [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"nextPlannedMaintenance\">\n\t\t\t\t\t\t \t \t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t \t </div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Notes*</label>\n\t\t                   <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetNotes\" [(ngModel)]=\"assetMaintenance.notes\" required>\n\t\t               \t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Maintenance Status*</label>\n\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\tname=\"assetMaintenanceStatus\" \n\t\t\t\t\t\t\tid=\"assetMaintenanceStatus\" \n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[(ngModel)]=\"assetMaintenance.maintenanceStatusId\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of statusTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addAssetMaintenanceForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-maintenance/add-maintenance.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-maintenance/add-maintenance.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsComponentsAddMaintenanceAddMaintenanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"assets-create-wrapper\">\n\t<form novalidate>\n\t\t<h4 class=\"main-title-mini float-left mt-3\">\t\t\t\n\t\t\t<span *ngIf=\"!isEdit\">Create Maintenance Asset</span>\n    \t\t<span *ngIf=\"isEdit\">Edit Maintenance Asset</span>\n\t\t</h4>\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/assets/maintenance-history\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Maintenance</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear mb-30\" id=\"accordion\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#assetCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Current Maintenance</li>\n\t\t\t\t\t<div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details cardOuter\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Maint Type</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"mainType\" \t\t\t\t\t\t\t\t\t     \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"mainType\" >\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Maint Subtype</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"mainSubType\" \t\t\t\t\t\t\t\t\t     \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"mainSubType\" >\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Planned Maintenance Date</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"maitainPlannedDate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTime]=\"maitainPlannedDate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTimeTrigger]=\"maitainPlannedDate\" placeholder=\"Date\" [(ngModel)]=\"asset.maitainPlannedDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #maitainPlannedDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>                                         \n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Actual Maintenance Date</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"actualMaintenance\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTime]=\"actualMaintenance\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTimeTrigger]=\"actualMaintenance\" placeholder=\"Date\" [(ngModel)]=\"asset.actualMaintenance\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #actualMaintenance [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>                                         \n\t\t\t                \t\t</div>\n                                </div>                                \n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Maintennace performed by Association Staff</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"staff\" id=\"inactive\" [(ngModel)]=\"yes\"  [value]=\"true\" type=\"radio\" >\n\t\t\t\t                            <label class=\"radio-inline\" for=\"inactive\">Yes</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"staff\" id=\"active\" [(ngModel)]=\"no\" [value]=\"false\" type=\"radio\" >\n\t\t\t\t                            <label class=\"radio-inline\" for=\"active\">No</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Staff Name</label>\n                                        <input type=\"text\"  class=\"form-control\" placeholder=\"Enter\" \n                                        name=\"staffName\" [(ngModel)]=\"staffName\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Performed by </label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n                                            <input name=\"performedBy\" id=\"Company\" [(ngModel)]=\"Company\"  [value]=\"true\"\n                                             type=\"radio\" >\n\t\t\t\t                            <label class=\"radio-inline\" for=\"inactive\">Company</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n                                            <input name=\"performedBy\" id=\"active\" [(ngModel)]=\"no\" [value]=\"false\" \n                                            type=\"radio\" >\n\t\t\t\t                            <label class=\"radio-inline\" for=\"active\">vendor</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Notes</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter\" \n                                        name=\"note\" [(ngModel)]=\"note\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#assetCollapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Maintenance Expenses</li>\n\t\t\t\t\t<div id=\"assetCollapseTwo\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>MaintenanceLabor Cost</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter\" \n                                        name=\"labourCost\" [(ngModel)]=\"labourCost\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Maintenance Parts Cost</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter\" \n                                        name=\"partCost\" [(ngModel)]=\"part\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Vat</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter\" \n                                        name=\"vat\" [(ngModel)]=\"vat\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>With Holding Tax</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter\" \n                                        name=\"withHoldingTax\" [(ngModel)]=\"WithHoldingTax\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Total Discount</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter\" \n                                        name=\"totalTax\" [(ngModel)]=\"totalTax\" >\n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Total Billed Amount</label>\n                                        <input type=\"text\"  class=\"form-control\"\n                                         placeholder=\"Enter\" \n                                        name=\"TotalBilledAmount\" [(ngModel)]=\"TotalBilledAmount\" >\n\t\t\t                \t\t</div>\n                                </div>\n                               \n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#assetCollapseThree\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Future Plan</li>\n\t\t\t\t\t<div id=\"assetCollapseThree\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Next Planned Maintenance date</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"plannedDate\" [owlDateTime]=\"plannedDate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTimeTrigger]=\"plannedDate\" placeholder=\"Date\" [(ngModel)]=\"asset.plannedDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #plannedDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>                                        \n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Remind me before next planned Date</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"nextPlannedDate\" [owlDateTime]=\"nextPlannedDate\"\n\t\t\t\t\t\t\t\t\t\t [owlDateTimeTrigger]=\"nextPlannedDate\" placeholder=\"Date\" [(ngModel)]=\"asset.nextPlannedDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #nextPlannedDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>  \n                                       \n\t\t\t                \t\t</div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"input-box uploadbtn\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\">\n\t\t\t\t\t\t\t\t\t    <input class=\"form-control\"  #uploader type=\"file\"\n\t\t\t\t\t\t\t\t\t    (change)=\"uploadFile($event)\" [(ngModel)]=\"file\" multiple>\n\t\t\t\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Upload Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isFileAdded\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfFiles; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\">Submit</button>\n                    </li>\n                    <li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn cancelBtn mr-2\">cancel</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-create/assets-create.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-create/assets-create.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsComponentsAssetsCreateAssetsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"assets-create-wrapper\">\n\t\n\t<form #addAssetForm = \"ngForm\" name=\"addAssetForm\" (ngSubmit)=\"submitAddAssetForm(addAssetForm)\"  novalidate>\n\n\t\t<h4 class=\"main-title-mini float-left mt-3\">\n\t\t\t\n\t\t\t<span *ngIf=\"!isEditAsset\">Create Asset</span>\n    \t\t<span *ngIf=\"isEditAsset\">Edit Asset</span>\n\n\t\t</h4>\n\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card clear mb-30\" id=\"accordion\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#assetCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">General</li>\n\t\t\t\t\t<div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Asset tag No*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetTagNo\" [(ngModel)]=\"asset.assetTagNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Asset Category*</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"asset.assetCategoryId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Asset Name*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetName\" [(ngModel)]=\"asset.assetName\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Manufacturer Details*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"ManufacturerDetails\" [(ngModel)]=\"asset.manufacturerDetails\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Model No*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"modelNo\" [(ngModel)]=\"asset.modelNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Condition*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetConditionId\" id=\"used\" [(ngModel)]=\"asset.assetConditionId\"  value=\"103\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"used\">Used</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetConditionId\" id=\"new\" [(ngModel)]=\"asset.assetConditionId\" value=\"105\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"new\">New</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Asset Location</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetLocation\" [(ngModel)]=\"asset.assetLocation\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Depreciation (in percentage)*</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter\" name=\"depreciation\" [(ngModel)]=\"asset.depreciationPercentage\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Installation Date*</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"purchaseDate\" [owlDateTime]=\"installationDate\" [owlDateTimeTrigger]=\"installationDate\" placeholder=\"Date\" [(ngModel)]=\"asset.installationDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #installationDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"installationDate\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Status*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetStatus\" id=\"inactive\" [(ngModel)]=\"asset.isActive\"  [value]=\"true\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"inactive\">Inactive</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetStatus\" id=\"active\" [(ngModel)]=\"asset.isActive\" [value]=\"false\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"active\">Active</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Retired No</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"retiredOnDate\" [owlDateTime]=\"retiredOnDate\" [owlDateTimeTrigger]=\"retiredOnDate\" placeholder=\"Date\" [(ngModel)]=\"asset.retiredOn\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #retiredOnDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"retiredOnDate\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Comments</label>\n\t\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"staffComments\" [(ngModel)]=\"asset.comments\"></textarea>\n\t\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\">\n\t\t\t\t\t\t\t\t\t    <input class=\"form-control\"  #uploader type=\"file\"\n\t\t\t\t\t\t\t\t\t    (change)=\"uploadFile($event)\" [(ngModel)]=\"asset.file\" multiple>\n\t\t\t\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Upload Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isFileAdded\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfFiles; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#assetCollapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Purchase Details</li>\n\t\t\t\t\t<div id=\"assetCollapseTwo\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Vendor Name*</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"vendorId\" \n\t\t\t\t\t\t\t\t\t        id=\"vendorId\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"asset.vendorId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of vendorDataList\" [value]=\"item.vendorId\">{{ item.vendorName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Purchase Order No*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"purchaseOrderNo\" [(ngModel)]=\"asset.purchaseOrderNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Purchase Date*</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"purchaseDate\" [owlDateTime]=\"purchaseDate\" [owlDateTimeTrigger]=\"purchaseDate\" placeholder=\"Date\" [(ngModel)]=\"asset.purchaseDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #purchaseDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Purchase Cost*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"purchaseCost\" [(ngModel)]=\"asset.purchaseCost\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Warranty Months*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"warrantyMonths\" [(ngModel)]=\"asset.warrantyMonths\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Serial Number*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"serialNo\" [(ngModel)]=\"asset.serialNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Is Leased*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"isLeased\" id=\"Yes\" [(ngModel)]=\"asset.isLeased\"  [value]=\"true\" type=\"radio\">\n\t\t\t\t                            <label class=\"radio-inline\" for=\"Yes\">Yes</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"isLeased\" id=\"No\" [(ngModel)]=\"asset.isLeased\" [value]=\"false\" type=\"radio\">\n\t\t\t\t                            <label class=\"radio-inline\" for=\"No\">No</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addAssetForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsComponentsAssetsMaintenanceHistoryAssetsMaintenanceHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"assets-maintenance-history-wrapper\">\n\t\n\t\t\n\t\t<div class=\"header-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Maintenance History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body p-0 border-bottom\">\n\t\t\t\t\t<ul class=\"legends list-inline\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span><span>Over Due</span></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots medium\"></span>Due</li>\n\t\t\t\t\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>Done</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body p-0\">\n\n\t\t\t\t\t<app-loader *ngIf=\"!isAssetMaintenanceLoaded\"></app-loader>\n\n\t\t\t\t\t<ng-container *ngIf=\"isAssetMaintenanceLoaded\">\n\n\t\t\t\t\t\t<div class=\"lists free-flow\" *ngFor=\"let maintenance of maintenanceDataList | slice:ItemStartIndex:ItemEndIndex; let i = index; last as isLast\" [ngClass]=\" [ getMaintenanceStatus(maintenance.maintenanceStatusId), isLast ? 'last' : '']\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 column\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Actual Maintenance</h6>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"maintenance.actualMaintDate != null\">{{getDateFormat(maintenance.actualMaintDate)}}</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"maintenance.actualMaintDate == null\">-</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 column\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Last Maintenance</h6>\n\t\t\t\t\t\t\t\t\t\t<p>{{getDateFormat(maintenance.lastMaintenanceDate)}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 column\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Next Planned Maintenance</h6>\n\t\t\t\t\t\t\t\t\t\t<p>{{getDateFormat(maintenance.nextPlannedMaintenance)}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<app-pagination \n\t\t\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t\t\t</app-pagination>\n\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-reports/assets-reports.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-reports/assets-reports.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsComponentsAssetsReportsAssetsReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  assets-reports works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-setup/assets-setup.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-setup/assets-setup.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsComponentsAssetsSetupAssetsSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"assets-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isAssetCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isAssetCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Asset Categories</h4>\n\t\t<ng-container *ngFor=\"let item of assetCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/view/{{item.lookupValueId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateAssetCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-none\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteAssetCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\n\t\t\t\t\t\t<p>{{item.assetCount}} Assets</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewAssetCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isAssetCategoryNew || isAssetCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isAssetCategoryNew\">Add Asset Category</h6>\n    \t\t\t<h6 *ngIf=\"!isAssetCategoryNew\">Update Asset Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"alertTicketMessage\" [isError]=\"isCategoryError\" [isSuccess]=\"isCategorySuccess\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isAssetCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isAssetCategorySubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addAssetCategoryForm = \"ngForm\" name=\"addAssetCategoryForm\" (ngSubmit)=\"submitAssetCategoryForm(addAssetCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetCategory\" [(ngModel)]=\"assetCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addAssetCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div> -->\n\n\n\n\n<mat-tab-group>\n\t<mat-tab label=\"Asset Setup\">\n\t\t<div class=\"\">\n\n\t\t\t<div class=\"flex wd-100\">\n\t\t\t\t<div class=\"flex wd-50\">\n\t\t\t\t\t<h4 class=\"main-title-mini pt-4\">Asset Category </h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"flex wd-50 flex-end\">\n\t\t\t\t\t<li  class=\"list-inline-item\" (click)=\"addSetUp('asset')\">\n\t\t\t\t\t\t<a  class=\"btn lime-green mt_5\">\n\t\t\t\t\t\t\t<i-feather name=\"plus\" class=\"icon plus\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n\t\t\t\t\t\t\t\t\tclass=\"feather feather-plus\">\n\t\t\t\t\t\t\t\t\t<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line>\n\t\t\t\t\t\t\t\t\t<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>\n\t\t\t\t\t\t\t\t</svg></i-feather><span >Add Asset Category </span>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<mat-accordion class=\"pt-5\">\n\t\t\t\t<mat-expansion-panel *ngFor=\" let cat of Category;let catIndex = index\">\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t<div class=\"flex wd-100\">\n\t\t\t\t\t\t\t\t<div class=\"flex wd-50\"> {{cat.name}}</div>\n\t\t\t\t\t\t\t\t<div class=\"flex wd-50 flex-end\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash pl-2\" (click)=\"deleteCategoryType(catIndex)\"\n\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t\t<div class=\" subCategory \" *ngFor=\"let sub  of cat?.subCategory;let catIndex = index\">\n\t\t\t\t\t\t{{sub.name}}\n\t\t\t\t\t</div>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t</mat-accordion>\n\t\t</div>\n\t</mat-tab>\n\t<mat-tab label=\"Asset Depreciation method\">\n\t\t<div class=\"row m-0\">\n\t\t\t<div class=\"category-list list-boxes mb-30\">\n\t\t\t\t<h4 class=\"main-title-mini pt-4\">Depreciaton methods</h4>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body no-hover\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<mat-slide-toggle>Straight line method</mat-slide-toggle>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<mat-slide-toggle>Double Decline</mat-slide-toggle>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<mat-slide-toggle>Units usage </mat-slide-toggle>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</div>\n\t\t</div>\n\t</mat-tab>\n\t<mat-tab label=\"Maintenance Setup\">\n\t\t<div class=\"\">\t\t\t\n\t\t\t<div class=\"flex wd-100\">\n\t\t\t\t<div class=\"flex wd-50\">\n\t\t\t\t\t<h4 class=\"main-title-mini pt-4\">Maintenance Types</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"flex wd-50 flex-end\">\n\t\t\t\t\t<li  class=\"list-inline-item\" (click)=\"addSetUp('maintenance')\">\n\t\t\t\t\t\t<a  class=\"btn lime-green mt_5\">\n\t\t\t\t\t\t\t<i-feather name=\"plus\" class=\"icon plus\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n\t\t\t\t\t\t\t\t\tclass=\"feather feather-plus\">\n\t\t\t\t\t\t\t\t\t<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line>\n\t\t\t\t\t\t\t\t\t<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>\n\t\t\t\t\t\t\t\t</svg></i-feather><span>Add Maintenance Types</span>\n\t\t\t\t\t\t</a></li>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<mat-accordion class=\"pt-5\">\n\t\t\t\t<mat-expansion-panel *ngFor=\" let main of mainType;let mainIndex = index\">\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t<div class=\"flex wd-100\">\n\t\t\t\t\t\t\t\t<div class=\"flex wd-50\"> {{main.name}}</div>\n\t\t\t\t\t\t\t\t<div class=\"flex wd-50 flex-end\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\" (click)=\"addSetUp('maintenance','edit',main)\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash pl-2\" (click)=\"deleteMaintype(mainIndex)\"\n\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<div class=\"subCategory\" *ngFor=\"let sub  of main?.subMainType;let catIndex = index\">\n\t\t\t\t\t\t{{sub.name}}\n\t\t\t\t\t</div>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t</mat-accordion>\n\t\t</div>\n\t</mat-tab>\n</mat-tab-group>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-update/assets-update.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-update/assets-update.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsComponentsAssetsUpdateAssetsUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  assets-update works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-view/assets-view.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-view/assets-view.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsComponentsAssetsViewAssetsViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"assets-view-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isAssetLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isAssetLoaded\">\n\n\t\t<form #viewAssetForm = \"ngForm\" name=\"viewAssetForm\" novalidate>\n\n\t\t\t<div class=\"card mb-30\">\n\t\t\t\t\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t    \t\t\t<h5>Select Category</h5>\n\t\t    \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-3\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"assetCategoryId\" (ngModelChange) = \"getAssetCategory()\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option value=\"All\">All</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<div class=\"card table-card\" *ngIf=\"isAssetLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All {{assetCategoryName}} Assets <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"assetData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/assets/create-asset\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Asset</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Asset Tag No \n\t\t\t\t      \t<span (click)=\"sortUnitData('assetTagNo')\" [ngClass]=\"getFieldOrderBy('assetTagNo')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Asset Tag No\" [(ngModel)]=\"columnField['assetTagNo']\" (ngModelChange)=\"selectColInput('assetTagNo')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Asset Name \n\t\t\t\t      \t<span (click)=\"sortUnitData('assetName')\" [ngClass]=\"getFieldOrderBy('assetName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Asset Name\" [(ngModel)]=\"columnField['assetName']\" (ngModelChange)=\"selectColInput('assetName')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Category \n\t\t\t\t      \t<span (click)=\"sortUnitData('assetCategoryName')\" [ngClass]=\"getFieldOrderBy('assetCategoryName')\"></span>\n\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tfieldName = \"assetCategory\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"assetCategoryId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"assetCategoryData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'assetCategory', 'lookupValueName')\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Vendor Name \n\t\t\t\t      \t<span (click)=\"sortUnitData('vendorTypeName')\" [ngClass]=\"getFieldOrderBy('vendorTypeName')\"></span>\n\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tfieldName = \"vendorTypeName\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"vendorName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"vendorId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"vendorDataList\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'vendorTypeName', 'vendorName')\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Condition \n\t\t\t\t      \t<span (click)=\"sortUnitData('assetCondition')\" [ngClass]=\"getFieldOrderBy('assetCondition')\"></span>\n\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tfieldName = \"assetCondition\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"assetConditionId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"assetConditionData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'assetCondition', 'lookupValueName')\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Purchase Cost\n\t\t\t\t      \t<span (click)=\"sortUnitData('purchaseCost')\" [ngClass]=\"getFieldOrderBy('purchaseCost')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Purchase Cost\" [(ngModel)]=\"columnField['purchaseCost']\" (ngModelChange)=\"selectColInput('purchaseCost')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t  </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let asset of assetListData | slice:ItemStartIndex:ItemEndIndex | simpleSearch: assetData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder ; let i = index\" [ngClass]=\"asset.isActive ? 'active' : 'notactive'\">\n\t\t\t\t      <td class=\"name\">{{asset.assetTagNo}}</td>\n\t\t\t\t      <td class=\"grey\">{{asset.assetName}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getAssetCategoryName(asset, asset.assetCategoryId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getvendorName(asset, asset.vendorId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getAssetCondition(asset, asset.assetConditionId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{asset.purchaseCost}}</td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"assetDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"assetDropDown\">\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/edit-asset/{{asset.assetId}}\">Edit Asset</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(asset.assetId)\">Delete Asset</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/add-asset-maintenance/{{asset.assetId}}/new\" *ngIf=\"!isMaintenanceDue(asset.assetId)\">Add Maintenance</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/edit-asset-maintenance/{{asset.assetId}}\" *ngIf=\"isMaintenanceAvailable(asset.assetId) && isMaintenanceDue(asset.assetId)\">Edit Maintenance</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"showMaintenanceHistory(asset.assetId)\" *ngIf=\"isMaintenanceAvailable(asset.assetId)\">View Maintenance History</a>\n\t\t\t\t      \t</div>\n    \t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/last-maintenance/last-maintenance.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/last-maintenance/last-maintenance.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsComponentsLastMaintenanceLastMaintenanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"assets-view-wrapper\">\n\n    <app-loader *ngIf=\"!isAssetLoaded\"></app-loader>\n\n    <ng-container *ngIf=\"isAssetLoaded\">\n\n        <form #viewAssetForm=\"ngForm\" name=\"viewAssetForm\" novalidate>\n\n            <div class=\"card mb-30\">\n\n                <div class=\"card-header\">\n                    <div class=\"float-left\">\n                        <h5>Select Category</h5>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"select-box mb-3\">\n                                <label>Category Type*</label>\n                                <select name=\"assetCategory\" id=\"assetCategory\" class=\"form-control\"\n                                    [(ngModel)]=\"assetCategoryId\" (ngModelChange)=\"getAssetCategory()\" required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"All\">All</option>\n                                    <option *ngFor=\"let item of []\" [value]=\"item.lookupValueId\">\n                                        {{ item.lookupValueName }}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </form>\n\n    </ng-container>\n\n    <div class=\"card table-card\" *ngIf=\"isAssetLoaded\">\n\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>All {{assetCategoryName}} Last Maintenance  <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"assetData\">\n                </li>\n                <li class=\"list-inline-item\">\n                    <a class=\"btn lime-green mt_5\" routerLink=\"/ams/assets/create-maintenance\" routerLinkActive=\"active\"\n                        [routerLinkActiveOptions]=\"{exact:true}\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Create maintenance </span>\n                    </a>\n\n                </li>\n            </ul>\n        </div>\n\n\n        <div class=\"card-body p-0\">\n\n            <table class=\"table table-checker table-resizable tableScoll\" [ngClass]=\"isMobileView()\">\n                <thead>\n                    <tr>                       \n                        <th scope=\"col\">Last Maint. Date\n                            <span (click)=\"sortUnitData('purchaseCost')\"\n                                [ngClass]=\"getFieldOrderBy('purchaseCost')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Date\"\n                                [(ngModel)]=\"columnField['purchaseCost']\"\n                                (ngModelChange)=\"selectColInput('purchaseCost')\">\n                        </th>\n                        <th scope=\"col\"> Maint type\n                            <span (click)=\"sortUnitData('assetCategoryName')\"\n                                [ngClass]=\"getFieldOrderBy('assetCategoryName')\"></span>\n                            <app-simple-select-box fieldName=\"assetCategory\" fieldText=\"\"\n                                fieldItemName=\"lookupValueName\" isLabel=\"false\" [fieldModel]=\"assetCategoryId\"\n                                fieldPlaceholder=\"Select\" [fieldRequired]=\"'required'\" [fieldList]=\"assetCategoryData\"\n                                (inputChange)=\"onSelectChange($event, 'assetCategory', 'lookupValueName')\">\n                            </app-simple-select-box>\n                        </th>\n                        <th scope=\"col\"> Maint Sub type\n                            <span (click)=\"sortUnitData('assetCategoryName')\"\n                                [ngClass]=\"getFieldOrderBy('assetCategoryName')\"></span>\n                            <app-simple-select-box fieldName=\"assetCategory\" fieldText=\"\"\n                                fieldItemName=\"lookupValueName\" isLabel=\"false\" [fieldModel]=\"assetCategoryId\"\n                                fieldPlaceholder=\"Select\" [fieldRequired]=\"'required'\" [fieldList]=\"assetCategoryData\"\n                                (inputChange)=\"onSelectChange($event, 'assetCategory', 'lookupValueName')\">\n                            </app-simple-select-box>\n                        </th>\n                        <th scope=\"col\">Next Plan. Maint. date\n                            <span (click)=\"sortUnitData('purchaseCost')\"\n                                [ngClass]=\"getFieldOrderBy('purchaseCost')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Date\"\n                                [(ngModel)]=\"columnField['purchaseCost']\"\n                                (ngModelChange)=\"selectColInput('purchaseCost')\">\n                        </th>\n                        <th scope=\"col\">Remind Plan Date\n                            <span (click)=\"sortUnitData('purchaseCost')\"\n                                [ngClass]=\"getFieldOrderBy('purchaseCost')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Date\"\n                                [(ngModel)]=\"columnField['purchaseCost']\"\n                                (ngModelChange)=\"selectColInput('purchaseCost')\">\n                        </th>\n                         <th scope=\"col\">\n                            Actions\n                            <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\"\n                                [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\">\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let asset of assetListData |\n                      slice:ItemStartIndex:ItemEndIndex | \n                      simpleSearch: assetData | \n                      columnSearch: columnField:selectedInput |\n                       sort : unitFieldType: unitOrder ; let i = index\"\n                        [ngClass]=\"asset.isActive ? 'active' : 'notactive'\">\n                        <td class=\"grey\"></td>\n                        <td class=\"name\"></td>\n                        <td class=\"grey text-capitalize\">\n                        </td>\n                        <td class=\"grey text-capitalize\">\n                        </td> \n                        <td class=\"grey text-capitalize\">\n                        </td>                        \n                        <td class=\"name actions text-center\">\n                            <a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"assetDropDown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span class=\"action-dot\"></span>\n                                <span class=\"action-dot\"></span>\n                                <span class=\"action-dot\"></span>\n                            </a>\n                            <!-- <div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"assetDropDown\"> -->\n                            <!-- <a href=\"javascript:void(0)\" routerLink=\"/ams/assets/edit-asset/{{asset.assetId}}\">Edit Asset</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(asset.assetId)\">Delete Asset</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/add-asset-maintenance/{{asset.assetId}}/new\" *ngIf=\"!isMaintenanceDue(asset.assetId)\">Add Maintenance</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/edit-asset-maintenance/{{asset.assetId}}\" *ngIf=\"isMaintenanceAvailable(asset.assetId) && isMaintenanceDue(asset.assetId)\">Edit Maintenance</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"showMaintenanceHistory(asset.assetId)\" *ngIf=\"isMaintenanceAvailable(asset.assetId)\">View Maintenance History</a>\n\t\t\t\t      \t</div> -->\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n                <p class=\"snippet\">No Records Found</p>\n            </div>\n            <app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n                [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n            </app-pagination>\n\n        </div>\n\n    </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/maintenance-history/maintenance-history.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/maintenance-history/maintenance-history.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsComponentsMaintenanceHistoryMaintenanceHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"assets-view-wrapper\">\n    <app-loader *ngIf=\"!isAssetLoaded\"></app-loader>\n    <ng-container *ngIf=\"isAssetLoaded\">\n        <form #viewAssetForm=\"ngForm\" name=\"viewAssetForm\" novalidate>\n\n            <div class=\"card mb-30\">\n\n                <div class=\"card-header\">\n                    <div class=\"float-left\">\n                        <h5>Select Category</h5>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"select-box mb-3\">\n                                <label>Category Type*</label>\n                                <select name=\"assetCategory\" id=\"assetCategory\" class=\"form-control\"\n                                    [(ngModel)]=\"assetCategoryId\" (ngModelChange)=\"getAssetCategory()\" required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"All\">All</option>\n                                    <option *ngFor=\"let item of []\" [value]=\"item.lookupValueId\">\n                                        {{ item.lookupValueName }}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </form>\n\n    </ng-container>\n\n    <div class=\"card table-card\" *ngIf=\"isAssetLoaded\">\n\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>All {{assetCategoryName}} Assets <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"assetData\">\n                </li>\n                <li class=\"list-inline-item\">\n                    <a class=\"btn lime-green mt_5\" routerLink=\"/ams/assets/create-maintenance\" routerLinkActive=\"active\"\n                        [routerLinkActiveOptions]=\"{exact:true}\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Create maintenance </span>\n                    </a>\n\n                </li>\n            </ul>\n        </div>\n\n\n        <div class=\"card-body p-0\">\n\n            <table class=\"table table-checker table-resizable tableScoll\" [ngClass]=\"isMobileView()\">\n                <thead>\n                    <tr>\n\n                        <th scope=\"col\"> Maint type\n                            <span (click)=\"sortUnitData('assetCategoryName')\"\n                                [ngClass]=\"getFieldOrderBy('assetCategoryName')\"></span>\n                            <app-simple-select-box fieldName=\"assetCategory\" fieldText=\"\"\n                                fieldItemName=\"lookupValueName\" isLabel=\"false\" [fieldModel]=\"assetCategoryId\"\n                                fieldPlaceholder=\"Select\" [fieldRequired]=\"'required'\" [fieldList]=\"assetCategoryData\"\n                                (inputChange)=\"onSelectChange($event, 'assetCategory', 'lookupValueName')\">\n                            </app-simple-select-box>\n                        </th>\n                        <th scope=\"col\">Plan. Maint. date\n                            <span (click)=\"sortUnitData('purchaseCost')\"\n                                [ngClass]=\"getFieldOrderBy('purchaseCost')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Purchase Cost\"\n                                [(ngModel)]=\"columnField['purchaseCost']\"\n                                (ngModelChange)=\"selectColInput('purchaseCost')\">\n                        </th>\n\n                        <th scope=\"col\">Act. Maint. Date\n                            <span (click)=\"sortUnitData('purchaseCost')\"\n                                [ngClass]=\"getFieldOrderBy('purchaseCost')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Purchase Cost\"\n                                [(ngModel)]=\"columnField['purchaseCost']\"\n                                (ngModelChange)=\"selectColInput('purchaseCost')\">\n                        </th>\n                        <th scope=\"col\">Ontime/Delayed\n                            <span (click)=\"sortUnitData('purchaseCost')\"\n                                [ngClass]=\"getFieldOrderBy('purchaseCost')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Purchase Cost\"\n                                [(ngModel)]=\"columnField['purchaseCost']\"\n                                (ngModelChange)=\"selectColInput('purchaseCost')\">\n                        </th>\n                        <th scope=\"col\">Cost\n                            <span (click)=\"sortUnitData('purchaseCost')\"\n                                [ngClass]=\"getFieldOrderBy('purchaseCost')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Purchase Cost\"\n                                [(ngModel)]=\"columnField['purchaseCost']\"\n                                (ngModelChange)=\"selectColInput('purchaseCost')\">\n                        </th>\n                        \n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let asset of assetListData |\n                      slice:ItemStartIndex:ItemEndIndex | \n                      simpleSearch: assetData | \n                      columnSearch: columnField:selectedInput |\n                       sort : unitFieldType: unitOrder ; let i = index\"\n                        [ngClass]=\"asset.isActive ? 'active' : 'notactive'\">\n                        <td class=\"grey\"></td>\n                        <td class=\"name\"></td>\n                        <td class=\"grey text-capitalize\">\n                        </td>\n                        <td class=\"grey text-capitalize\">\n                        </td>\n                        <td class=\"grey text-capitalize\">\n                        </td>\n                        <!-- <td class=\"name actions text-center\">\n                            <a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"assetDropDown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span class=\"action-dot\"></span>\n                                <span class=\"action-dot\"></span>\n                                <span class=\"action-dot\"></span>\n                            </a> -->\n                            <!-- <div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"assetDropDown\"> -->\n                            <!-- <a href=\"javascript:void(0)\" routerLink=\"/ams/assets/edit-asset/{{asset.assetId}}\">Edit Asset</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(asset.assetId)\">Delete Asset</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/add-asset-maintenance/{{asset.assetId}}/new\" *ngIf=\"!isMaintenanceDue(asset.assetId)\">Add Maintenance</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/edit-asset-maintenance/{{asset.assetId}}\" *ngIf=\"isMaintenanceAvailable(asset.assetId) && isMaintenanceDue(asset.assetId)\">Edit Maintenance</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"showMaintenanceHistory(asset.assetId)\" *ngIf=\"isMaintenanceAvailable(asset.assetId)\">View Maintenance History</a>\n\t\t\t\t      \t</div> -->\n                        <!-- </td> -->\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n                <p class=\"snippet\">No Records Found</p>\n            </div>\n            <app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n                [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n            </app-pagination>\n\n        </div>\n\n    </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsAssetsComponentsManageMaintenanceManageMaintenanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"assets-create-wrapper\">\n    <form novalidate>\n           <h4 class=\"main-title-mini float-left mt-3\">\t\t\t\n               <span *ngIf=\"!isEdit\">Manage Maintenance Asset</span>\n               <span *ngIf=\"isEdit\">Edit Maintenance Asset</span>\n           </h4>\n           <div class=\"relative-card float-right\">\n               <div class=\"relative-icon\">\n                   <a href=\"javascript:void(0)\"\n                       routerLink=\"ams/assets/maintenance-history\" \n                       routerLinkActive=\"active\"\n                       [routerLinkActiveOptions] = \"{exact:true}\">\n                       <div class=\"icon-wrapper\">\n                           <img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n                       </div>\n                       <span class=\"d-inline-block\">View Maintenance</span>\n                   </a>\n               </div>\n           </div>\n   \n           <div class=\"card clear mb-30\" id=\"accordion\">\n               <div class=\"card-body p-0\">\n                       <div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                           <div class=\"details cardOuter\">\t\t\t\t\t\t\t\n                               <div class=\"row\">\t\t\t\t\t\t\t\t\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"select-box\">\n                                           <label>Maint Type</label>\n                                           <select \n                                               name=\"mainType\" \t\t\t\t\t\t\t\t\t     \n                                               class=\"form-control\"\n                                               [(ngModel)]=\"mainType\" >\n                                               <option value=\"\" disabled selected hidden>Select</option>\n                                               <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n                                           </select>\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"select-box\">\n                                           <label>Maint Subtype</label>\n                                           <select \n                                               name=\"mainSubType\" \t\t\t\t\t\t\t\t\t     \n                                               class=\"form-control\"\n                                               [(ngModel)]=\"mainSubType\" >\n                                               <option value=\"\" disabled selected hidden>Select</option>\n                                               <!-- <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option> -->\n                                           </select>\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box\">\n                                           <label>Planned Maintenance Date</label>\n                                           <input class=\"form-control\" name=\"plannedDate\" \n                                            placeholder=\"Date\" \n                                           >\n                                           <owl-date-time #plannedDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                           <div class=\"date-btn\" [owlDateTimeTrigger]=\"plannedDate\">\n                                                 <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                             </div>\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box\">\n                                           <label>Actual Maintenance Date</label>\n                                           <input class=\"form-control\" name=\"Date\" \n                                            placeholder=\"Date\" \n                                           >\n                                           <owl-date-time #plannedDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                           <div class=\"date-btn\" >\n                                                 <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                             </div>\n                                       </div>\n                                   </div>                           \n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box radio-box\">\n                                           <label>Performed by </label>\n                                           <div class=\"form-group\">\n                                               <input name=\"performedBy\" id=\"Company\" [(ngModel)]=\"Company\"  [value]=\"true\"\n                                                type=\"radio\" >\n                                               <label class=\"radio-inline\" for=\"inactive\">Company</label>\n                                            </div>\n                                           <div class=\"form-group\">\n                                               <input name=\"performedBy\" id=\"active\" [(ngModel)]=\"no\" [value]=\"false\" \n                                               type=\"radio\" >\n                                               <label class=\"radio-inline\" for=\"active\">vendor</label>\n                                            </div>\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box\">\n                                           <label>Notes</label>\n                                           <input type=\"text\"  class=\"form-control\"\n                                            placeholder=\"Enter\" \n                                           name=\"note\" [(ngModel)]=\"note\" >\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box\">\n                                           <label>MaintenanceLabor Cost</label>\n                                           <input type=\"text\"  class=\"form-control\"\n                                            placeholder=\"Enter\" \n                                           name=\"labourCost\" [(ngModel)]=\"labourCost\" >\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box\">\n                                           <label>Maintenance Parts Cost</label>\n                                           <input type=\"text\"  class=\"form-control\"\n                                            placeholder=\"Enter\" \n                                           name=\"partCost\" [(ngModel)]=\"part\" >\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box\">\n                                           <label>Vat</label>\n                                           <input type=\"text\"  class=\"form-control\"\n                                            placeholder=\"Enter\" \n                                           name=\"vat\" [(ngModel)]=\"vat\" >\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box\">\n                                           <label>With Holding Tax</label>\n                                           <input type=\"text\"  class=\"form-control\"\n                                            placeholder=\"Enter\" \n                                           name=\"withHoldingTax\" [(ngModel)]=\"WithHoldingTax\" >\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box\">\n                                           <label>Total Discount</label>\n                                           <input type=\"text\"  class=\"form-control\"\n                                            placeholder=\"Enter\" \n                                           name=\"totalTax\" [(ngModel)]=\"totalTax\" >\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box\">\n                                           <label>Total Billed Amount</label>\n                                           <input type=\"text\"  class=\"form-control\"\n                                            placeholder=\"Enter\" \n                                           name=\"TotalBilledAmount\" [(ngModel)]=\"TotalBilledAmount\" >\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box\">\n                                           <label>Next Planned Maintenance date</label>\n                                           <input class=\"form-control\" name=\"plannedDate\" \n                                            placeholder=\"Date\" \n                                           >\n                                           <owl-date-time #plannedDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                           <div class=\"date-btn\" [owlDateTimeTrigger]=\"plannedDate\">\n                                                 <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                             </div>\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-4\">\n                                       <div class=\"input-box\">\n                                           <label>Remind me before next planned Date</label>\n                                           <input class=\"form-control\" name=\"plannedDate\" \n                                            placeholder=\"Date\" >\n                                           <owl-date-time #plannedDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                           <div class=\"date-btn\" [owlDateTimeTrigger]=\"plannedDate\">\n                                                 <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                             </div>\n                                       </div>\n                                   </div>                                 \n                               </div>\n                           </div>\n                       </div>\t\t\t\t\n                       \n               </div>\n           </div>\n           <div class=\"row\">\n               <div class=\"col-sm-12\">\n                   <ul class=\"list-inline float-right\">\n                       <li class=\"list-inline-item\">\n                           <button class=\"btn blue mr-2\">Submit</button>\n                       </li>\n                       <li class=\"list-inline-item\">\n                           <button class=\"btn cancelBtn mr-2\">cancel</button>\n                       </li>\n                   </ul>\n               </div>\n           </div>\n   \n       </form>\n   \n   </div>";
    /***/
  },

  /***/
  "./src/app/ams/assets/assets-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ams/assets/assets-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AssetsRoutingModule */

  /***/
  function srcAppAmsAssetsAssetsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetsRoutingModule", function () {
      return AssetsRoutingModule;
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


    var _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/assets-setup/assets-setup.component */
    "./src/app/ams/assets/components/assets-setup/assets-setup.component.ts");
    /* harmony import */


    var _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/assets-create/assets-create.component */
    "./src/app/ams/assets/components/assets-create/assets-create.component.ts");
    /* harmony import */


    var _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/assets-reports/assets-reports.component */
    "./src/app/ams/assets/components/assets-reports/assets-reports.component.ts");
    /* harmony import */


    var _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/assets-view/assets-view.component */
    "./src/app/ams/assets/components/assets-view/assets-view.component.ts");
    /* harmony import */


    var _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/add-asset-maintenance/add-asset-maintenance.component */
    "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts");
    /* harmony import */


    var _components_add_maintenance_add_maintenance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/add-maintenance/add-maintenance.component */
    "./src/app/ams/assets/components/add-maintenance/add-maintenance.component.ts");
    /* harmony import */


    var _components_manage_maintenance_manage_maintenance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/manage-maintenance/manage-maintenance.component */
    "./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.ts");
    /* harmony import */


    var _components_maintenance_history_maintenance_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/maintenance-history/maintenance-history.component */
    "./src/app/ams/assets/components/maintenance-history/maintenance-history.component.ts");
    /* harmony import */


    var _components_last_maintenance_last_maintenance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/last-maintenance/last-maintenance.component */
    "./src/app/ams/assets/components/last-maintenance/last-maintenance.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, {
      path: 'settings',
      component: _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_3__["AssetsSetupComponent"]
    }, {
      path: 'create-asset',
      component: _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_4__["AssetsCreateComponent"]
    }, {
      path: 'edit-asset/:id',
      component: _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_4__["AssetsCreateComponent"]
    }, {
      path: 'add-asset-maintenance/:id/:type',
      component: _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_7__["AddAssetMaintenanceComponent"]
    }, {
      path: 'create-maintenance',
      component: _components_add_maintenance_add_maintenance_component__WEBPACK_IMPORTED_MODULE_8__["AddMaintenanceComponent"]
    }, {
      path: 'last-Maintenance',
      component: _components_last_maintenance_last_maintenance_component__WEBPACK_IMPORTED_MODULE_11__["LastMaintenanceComponent"]
    }, {
      path: 'maintenance-history',
      component: _components_maintenance_history_maintenance_history_component__WEBPACK_IMPORTED_MODULE_10__["MaintenanceHistoryComponent"]
    }, {
      path: 'manage-maintenance',
      component: _components_manage_maintenance_manage_maintenance_component__WEBPACK_IMPORTED_MODULE_9__["ManageMaintenanceComponent"]
    }, {
      path: 'edit-asset-maintenance/:id',
      component: _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_7__["AddAssetMaintenanceComponent"]
    }, // { path: 'maintenance-history', component: AssetsMaintenanceHistoryComponent},
    {
      path: 'view',
      component: _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_6__["AssetsViewComponent"]
    }, {
      path: 'view/:id',
      component: _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_6__["AssetsViewComponent"]
    }, {
      path: 'reports',
      component: _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_5__["AssetsReportsComponent"]
    }, {
      path: '**',
      redirectTo: 'settings',
      pathMatch: 'full'
    }];

    var AssetsRoutingModule = function AssetsRoutingModule() {
      _classCallCheck(this, AssetsRoutingModule);
    };

    AssetsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AssetsRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/assets/assets.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/ams/assets/assets.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsAssetsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvYXNzZXRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/assets/assets.component.ts":
  /*!************************************************!*\
    !*** ./src/app/ams/assets/assets.component.ts ***!
    \************************************************/

  /*! exports provided: AssetsComponent */

  /***/
  function srcAppAmsAssetsAssetsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetsComponent", function () {
      return AssetsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AssetsComponent =
    /*#__PURE__*/
    function () {
      function AssetsComponent() {
        _classCallCheck(this, AssetsComponent);
      }

      _createClass(AssetsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AssetsComponent;
    }();

    AssetsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-assets',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./assets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/assets.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./assets.component.scss */
      "./src/app/ams/assets/assets.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AssetsComponent);
    /***/
  },

  /***/
  "./src/app/ams/assets/assets.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/ams/assets/assets.module.ts ***!
    \*********************************************/

  /*! exports provided: AssetsModule */

  /***/
  function srcAppAmsAssetsAssetsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetsModule", function () {
      return AssetsModule;
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


    var _assets_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./assets-routing.module */
    "./src/app/ams/assets/assets-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _assets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./assets.component */
    "./src/app/ams/assets/assets.component.ts");
    /* harmony import */


    var _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/assets-setup/assets-setup.component */
    "./src/app/ams/assets/components/assets-setup/assets-setup.component.ts");
    /* harmony import */


    var _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/assets-create/assets-create.component */
    "./src/app/ams/assets/components/assets-create/assets-create.component.ts");
    /* harmony import */


    var _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/assets-reports/assets-reports.component */
    "./src/app/ams/assets/components/assets-reports/assets-reports.component.ts");
    /* harmony import */


    var _components_assets_update_assets_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/assets-update/assets-update.component */
    "./src/app/ams/assets/components/assets-update/assets-update.component.ts");
    /* harmony import */


    var _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/assets-view/assets-view.component */
    "./src/app/ams/assets/components/assets-view/assets-view.component.ts");
    /* harmony import */


    var _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/add-asset-maintenance/add-asset-maintenance.component */
    "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts");
    /* harmony import */


    var _components_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/assets-maintenance-history/assets-maintenance-history.component */
    "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts");
    /* harmony import */


    var _components_add_maintenance_add_maintenance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/add-maintenance/add-maintenance.component */
    "./src/app/ams/assets/components/add-maintenance/add-maintenance.component.ts");
    /* harmony import */


    var _components_manage_maintenance_manage_maintenance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/manage-maintenance/manage-maintenance.component */
    "./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.ts");
    /* harmony import */


    var _components_maintenance_history_maintenance_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/maintenance-history/maintenance-history.component */
    "./src/app/ams/assets/components/maintenance-history/maintenance-history.component.ts");
    /* harmony import */


    var _components_last_maintenance_last_maintenance_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/last-maintenance/last-maintenance.component */
    "./src/app/ams/assets/components/last-maintenance/last-maintenance.component.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");

    var AssetsModule = function AssetsModule() {
      _classCallCheck(this, AssetsModule);
    };

    AssetsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_assets_component__WEBPACK_IMPORTED_MODULE_7__["AssetsComponent"], _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_8__["AssetsSetupComponent"], _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_9__["AssetsCreateComponent"], _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_10__["AssetsReportsComponent"], _components_assets_update_assets_update_component__WEBPACK_IMPORTED_MODULE_11__["AssetsUpdateComponent"], _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_12__["AssetsViewComponent"], _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_13__["AddAssetMaintenanceComponent"], _components_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_14__["AssetsMaintenanceHistoryComponent"], _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_8__["AddAssetSetup"], _components_add_maintenance_add_maintenance_component__WEBPACK_IMPORTED_MODULE_15__["AddMaintenanceComponent"], _components_manage_maintenance_manage_maintenance_component__WEBPACK_IMPORTED_MODULE_16__["ManageMaintenanceComponent"], _components_maintenance_history_maintenance_history_component__WEBPACK_IMPORTED_MODULE_17__["MaintenanceHistoryComponent"], _components_last_maintenance_last_maintenance_component__WEBPACK_IMPORTED_MODULE_18__["LastMaintenanceComponent"]],
      entryComponents: [_components_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_14__["AssetsMaintenanceHistoryComponent"], _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_8__["AddAssetSetup"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _assets_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssetsRoutingModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"]],
      bootstrap: [_assets_component__WEBPACK_IMPORTED_MODULE_7__["AssetsComponent"]]
    })], AssetsModule);
    /***/
  },

  /***/
  "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsComponentsAddAssetMaintenanceAddAssetMaintenanceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hZGQtYXNzZXQtbWFpbnRlbmFuY2UvYWRkLWFzc2V0LW1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: AddAssetMaintenanceComponent */

  /***/
  function srcAppAmsAssetsComponentsAddAssetMaintenanceAddAssetMaintenanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAssetMaintenanceComponent", function () {
      return AddAssetMaintenanceComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../assets-maintenance-history/assets-maintenance-history.component */
    "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts");
    /* harmony import */


    var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Asset */
    "./src/app/api/controllers/Asset.ts");
    /* harmony import */


    var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Vendor */
    "./src/app/api/controllers/Vendor.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);

    var AddAssetMaintenanceComponent =
    /*#__PURE__*/
    function () {
      function AddAssetMaintenanceComponent(injector, dialog, router, route, assetService, vendorService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, AddAssetMaintenanceComponent);

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

      _createClass(AddAssetMaintenanceComponent, [{
        key: "getAssetCategoryName",
        value: function getAssetCategoryName(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetCategoryData, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "getDateFormat",
        value: function getDateFormat(date) {
          return moment__WEBPACK_IMPORTED_MODULE_12__(date).format("MM-DD-YYYY");
        }
      }, {
        key: "submitAssetMaintenanceForm",
        value: function submitAssetMaintenanceForm(form) {
          var _this3 = this;

          if (!this.isEditAssetMaintenance) {
            var details = {
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
            var assetMaintenancePlan = {
              assetMaintenancePlan: details
            };
            this.assetService.addAssetMaintenancePlan(assetMaintenancePlan).subscribe(function (res) {
              if (res.message) {
                _this3.isAssetMaintenanceSubmitted = false;

                _this3.sharedService.setAlertMessage("Asset Maintenance added successfully");

                _this3.router.navigate(['ams/assets/view']);
              } else {
                _this3.isAssetMaintenanceSubmitted = false;
                _this3.isError = true;
                _this3.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this3.isAssetMaintenanceSubmitted = false;
              _this3.isError = true;
              _this3.alertMessage = "Some error occured";
            });
          } else {
            var _details = {
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
            var updateMaintenancePlan = {
              assetMaintenancePlan: _details
            };
            this.assetService.updateAssetMaintenancePlan(updateMaintenancePlan).subscribe(function (res) {
              if (res.message) {
                _this3.isAssetMaintenanceSubmitted = false;

                _this3.sharedService.setAlertMessage("Asset Maintenance updated successfully");

                _this3.router.navigate(['ams/assets/view']);
              } else {
                _this3.isAssetMaintenanceSubmitted = false;
                _this3.isError = true;
                _this3.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this3.isAssetMaintenanceSubmitted = false;
              _this3.isError = true;
              _this3.alertMessage = "Some error occured";
            });
          }
        }
      }, {
        key: "showMaintenanceHistory",
        value: function showMaintenanceHistory(id) {
          this.dialog.open(_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__["AssetsMaintenanceHistoryComponent"], {
            panelClass: ['material', 'medium-02'],
            disableClose: true,
            data: id
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.assetMaintenance = {};
          this.assetMaintenance.maintenanceStatusId = "";
          this.assetMaintenance.notes = "";

          if (this.route.params['value'].id != undefined && this.route.params['value'].type == undefined) {
            this.isEditAssetMaintenance = true;
            this.assetService.getAllAssetMaintenancePlanByAssetId(this.route.params['value'].id).subscribe(function (res) {
              _this4.allAssetMaintenanceData = res;

              var assetMaintenance = _this4.allAssetMaintenanceData.filter(function (item) {
                return item.maintenanceStatusId == 273; // only due items
              });

              _this4.assetMaintenance = assetMaintenance[0];
            });
          }

          this.assetId = this.route.params['value'].id;
          var statusParams = {
            LookupTypeId: 64
          };
          this.lookupService.getLookupValueByLookupTypeId(statusParams).subscribe(function (res) {
            _this4.statusTypeData = res;
          }, function (error) {});
          this.assetService.getAllAssetByAssetId(this.route.params['value'].id).subscribe(function (res) {
            _this4.isAssetMaintenanceLoaded = true;
            _this4.assetData = res[0];
          });
          var assetCategoryParams = {
            LookupTypeId: 19
          };
          this.lookupService.getLookupValueByLookupTypeId(assetCategoryParams).subscribe(function (res) {
            _this4.assetCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          });
        }
      }]);

      return AddAssetMaintenanceComponent;
    }();

    AddAssetMaintenanceComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__["AssetService"]
      }, {
        type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__["VendorService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]
      }];
    };

    AddAssetMaintenanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-asset-maintenance',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-asset-maintenance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-asset-maintenance.component.scss */
      "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__["AssetService"], src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__["VendorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])], AddAssetMaintenanceComponent);
    /***/
  },

  /***/
  "./src/app/ams/assets/components/add-maintenance/add-maintenance.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/assets/components/add-maintenance/add-maintenance.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsComponentsAddMaintenanceAddMaintenanceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardOuter {\n  padding: 25px 20px;\n}\n\n.cancelBtn {\n  background: white;\n  border: 1px solid #dadada;\n}\n\n.uploadbtn {\n  padding-top: 25px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYWRkLW1haW50ZW5hbmNlL2FkZC1tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Fzc2V0cy9jb21wb25lbnRzL2FkZC1tYWludGVuYW5jZS9hZGQtbWFpbnRlbmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBRUksaUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYWRkLW1haW50ZW5hbmNlL2FkZC1tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkT3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggMjBweDsgXG59XG4uY2FuY2VsQnRuXG57XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbn1cbi51cGxvYWRidG57XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG59IiwiLmNhcmRPdXRlciB7XG4gIHBhZGRpbmc6IDI1cHggMjBweDtcbn1cblxuLmNhbmNlbEJ0biB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xufVxuXG4udXBsb2FkYnRuIHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/assets/components/add-maintenance/add-maintenance.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/assets/components/add-maintenance/add-maintenance.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AddMaintenanceComponent */

  /***/
  function srcAppAmsAssetsComponentsAddMaintenanceAddMaintenanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddMaintenanceComponent", function () {
      return AddMaintenanceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AddMaintenanceComponent =
    /*#__PURE__*/
    function () {
      function AddMaintenanceComponent() {
        _classCallCheck(this, AddMaintenanceComponent);

        this.asset = {};
        this.isFileAdded = false;
        this.fileList = [];
        this.listOfFiles = [];
      }

      _createClass(AddMaintenanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          this.isFileAdded = true;

          for (var i = 0; i <= event.target.files.length - 1; i++) {
            var selectedFile = event.target.files[i];
            this.fileList.push(selectedFile);
            this.listOfFiles.push({
              'name': selectedFile.name,
              'size': selectedFile.size
            });
          }
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
      }]);

      return AddMaintenanceComponent;
    }();

    AddMaintenanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-maintenance',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-maintenance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-maintenance/add-maintenance.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-maintenance.component.scss */
      "./src/app/ams/assets/components/add-maintenance/add-maintenance.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AddMaintenanceComponent);
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-create/assets-create.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-create/assets-create.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsComponentsAssetsCreateAssetsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtY3JlYXRlL2Fzc2V0cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-create/assets-create.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-create/assets-create.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AssetsCreateComponent */

  /***/
  function srcAppAmsAssetsComponentsAssetsCreateAssetsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetsCreateComponent", function () {
      return AssetsCreateComponent;
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


    var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Asset */
    "./src/app/api/controllers/Asset.ts");
    /* harmony import */


    var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Vendor */
    "./src/app/api/controllers/Vendor.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AssetsCreateComponent =
    /*#__PURE__*/
    function () {
      function AssetsCreateComponent(router, route, assetService, vendorService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, AssetsCreateComponent);

        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.vendorService = vendorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isFileAdded = false;
        this.fileList = [];
        this.listOfFiles = [];
        this.assetStatus = "";
        this.isEditAsset = false;
        this.isAssetSubmitted = false;
        this.isError = false;
        this.alertMessage = "";
      }

      _createClass(AssetsCreateComponent, [{
        key: "uploadFile",
        value: function uploadFile(event) {
          this.isFileAdded = true;

          for (var i = 0; i <= event.target.files.length - 1; i++) {
            var selectedFile = event.target.files[i];
            this.fileList.push(selectedFile);
            this.listOfFiles.push({
              'name': selectedFile.name,
              'size': selectedFile.size
            });
          }
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
        key: "bytesToSize",
        value: function bytesToSize(bytes) {
          if (bytes < 1024) return bytes + " Bytes";else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";else return (bytes / 1073741824).toFixed(3) + " GB";
        }
      }, {
        key: "submitAddAssetForm",
        value: function submitAddAssetForm(form) {
          var _this5 = this;

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
            this.assetService.addAsset(addAssetParams).subscribe(function (res) {
              if (res.message) {
                _this5.isAssetSubmitted = false;

                _this5.sharedService.setAlertMessage("Asset added successfully");

                _this5.router.navigate(['ams/assets/view']);
              } else {
                _this5.isAssetSubmitted = false;
                _this5.isError = true;
                _this5.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this5.isAssetSubmitted = false;
              _this5.isError = true;
              _this5.alertMessage = "Some error occured";
            });
          } else {
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
            this.assetService.updateAsset(editAssetParams).subscribe(function (res) {
              if (res.message) {
                _this5.isAssetSubmitted = false;

                _this5.sharedService.setAlertMessage("Asset updated successfully");

                _this5.router.navigate(['ams/assets/view']);
              } else {
                _this5.isAssetSubmitted = false;
                _this5.isError = true;
                _this5.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this5.isAssetSubmitted = false;
              _this5.isError = true;
              _this5.alertMessage = "Some error occured";
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.asset = {};
          this.asset.assetCategoryId = "";
          this.asset.assetConditionId = "";
          this.asset.vendorId = "";

          if (this.route.params['value'].id != undefined) {
            this.isEditAsset = true;
            var params = {
              assetId: this.route.params['value'].id
            };
            this.assetService.getAllAssetByAssetId(params).subscribe(function (res) {
              _this6.asset = res[0];
            });
          }

          var assetCategoryParams = {
            LookupTypeId: 19
          };
          this.lookupService.getLookupValueByLookupTypeId(assetCategoryParams).subscribe(function (res) {
            _this6.assetCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          });
          var vendprParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.vendorService.getVendorByApartmentId(vendprParams).subscribe(function (res) {
            _this6.vendorDataList = res.filter(function (item) {
              return item.isActive;
            });
          });
          var assetStatusParams = {
            LookupTypeId: 64
          }; //maintenance status 

          this.lookupService.getLookupValueByLookupTypeId(assetStatusParams).subscribe(function (res) {
            _this6.statusTypeData = res;
          }, function (error) {});
        }
      }]);

      return AssetsCreateComponent;
    }();

    AssetsCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"]
      }, {
        type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    AssetsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-assets-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./assets-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-create/assets-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./assets-create.component.scss */
      "./src/app/ams/assets/components/assets-create/assets-create.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"], src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], AssetsCreateComponent);
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsComponentsAssetsMaintenanceHistoryAssetsMaintenanceHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".assets-maintenance-history-wrapper .card .lists:not(.last) {\n  border-bottom: 1px solid #eaeaea;\n}\n.assets-maintenance-history-wrapper .card .lists.done, .assets-maintenance-history-wrapper .card .lists.overdue, .assets-maintenance-history-wrapper .card .lists.due {\n  position: relative;\n}\n.assets-maintenance-history-wrapper .card .lists.done:after, .assets-maintenance-history-wrapper .card .lists.overdue:after, .assets-maintenance-history-wrapper .card .lists.due:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 100% !important;\n}\n.assets-maintenance-history-wrapper .card .lists.due:after {\n  background-color: #ff9800;\n}\n.assets-maintenance-history-wrapper .card .lists.overdue:after {\n  background-color: #e2385e;\n}\n.assets-maintenance-history-wrapper .card .lists.done:after {\n  background-color: #5cd694;\n}\n.assets-maintenance-history-wrapper .card .lists li {\n  padding: 15px 15px 0 20px;\n}\n.assets-maintenance-history-wrapper .card .lists li .column {\n  margin: 0 0 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYXNzZXRzLW1haW50ZW5hbmNlLWhpc3RvcnkvYXNzZXRzLW1haW50ZW5hbmNlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS9hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0c7RUFDQyxnQ0FBQTtBQ05KO0FEUUc7RUFDQyxrQkVOQztBREFMO0FET0k7RUFDQyxXQUFBO0VBQ0Esa0JFVkE7RUZXQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSx1QkUrSUM7QURwSk47QURTSTtFQUNDLHlCRWFNO0FEcEJYO0FEV0k7RUFDQyx5QkVYUTtBREViO0FEYUk7RUFDQyx5QkVpQlE7QUQ1QmI7QURjRztFQUNDLHlCQUFBO0FDWko7QURhSTtFQUNJLGtCQUFBO0FDWFIiLCJmaWxlIjoic3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYXNzZXRzLW1haW50ZW5hbmNlLWhpc3RvcnkvYXNzZXRzLW1haW50ZW5hbmNlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIge1xuXHQuY2FyZCB7XG5cdFx0Lmxpc3RzIHtcblx0XHRcdCY6bm90KC5sYXN0KSB7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS00NTA7XHRcblx0XHRcdH1cblx0XHRcdCYuZG9uZSwgJi5vdmVyZHVlLCAmLmR1ZSB7XG5cdFx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAkYWJzO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHdpZHRoOiA4cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAkZnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5kdWUge1xuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkcy1vcmFuZ2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYub3ZlcmR1ZSB7XG5cdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRicmlnaHQtcmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQmLmRvbmUge1xuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkbGltZS1ncmVlbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGkge1xuXHRcdFx0XHRwYWRkaW5nOiAxNXB4IDE1cHggMCAyMHB4O1xuXHRcdFx0XHQuY29sdW1uIHtcbiAgICBcdFx0XHRcdG1hcmdpbjogMCAwIDEwcHggMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0czpub3QoLmxhc3QpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG59XG4uYXNzZXRzLW1haW50ZW5hbmNlLWhpc3Rvcnktd3JhcHBlciAuY2FyZCAubGlzdHMuZG9uZSwgLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIgLmNhcmQgLmxpc3RzLm92ZXJkdWUsIC5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cy5kdWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXNzZXRzLW1haW50ZW5hbmNlLWhpc3Rvcnktd3JhcHBlciAuY2FyZCAubGlzdHMuZG9uZTphZnRlciwgLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIgLmNhcmQgLmxpc3RzLm92ZXJkdWU6YWZ0ZXIsIC5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cy5kdWU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uYXNzZXRzLW1haW50ZW5hbmNlLWhpc3Rvcnktd3JhcHBlciAuY2FyZCAubGlzdHMuZHVlOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcbn1cbi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cy5vdmVyZHVlOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyMzg1ZTtcbn1cbi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cy5kb25lOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjZDY5NDtcbn1cbi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cyBsaSB7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAwIDIwcHg7XG59XG4uYXNzZXRzLW1haW50ZW5hbmNlLWhpc3Rvcnktd3JhcHBlciAuY2FyZCAubGlzdHMgbGkgLmNvbHVtbiB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: AssetsMaintenanceHistoryComponent */

  /***/
  function srcAppAmsAssetsComponentsAssetsMaintenanceHistoryAssetsMaintenanceHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetsMaintenanceHistoryComponent", function () {
      return AssetsMaintenanceHistoryComponent;
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


    var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Asset */
    "./src/app/api/controllers/Asset.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var AssetsMaintenanceHistoryComponent =
    /*#__PURE__*/
    function () {
      function AssetsMaintenanceHistoryComponent(assetId, assetService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, AssetsMaintenanceHistoryComponent);

        this.assetId = assetId;
        this.assetService = assetService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isAssetMaintenanceLoaded = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 5;
      }

      _createClass(AssetsMaintenanceHistoryComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "getDateFormat",
        value: function getDateFormat(date) {
          return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
        }
      }, {
        key: "getMaintenanceStatus",
        value: function getMaintenanceStatus(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.statusTypeData, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName.toLowerCase().replace(/-/g, ' ');
          }
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.assetService.getAllAssetMaintenancePlanByAssetId(this.assetId).subscribe(function (res) {
            _this7.isAssetMaintenanceLoaded = true;
            _this7.maintenanceDataList = res;

            if (_this7.totalItems > _this7.itemLimit) {
              _this7.ItemEndIndex = _this7.itemLimit;
            } else {
              _this7.ItemEndIndex = _this7.totalItems;
            }

            _this7.totalItems = _this7.maintenanceDataList.length;
          });
          var params = {
            LookupTypeId: 64
          };
          this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
            _this7.statusTypeData = res;
          }, function (error) {});
        }
      }]);

      return AssetsMaintenanceHistoryComponent;
    }();

    AssetsMaintenanceHistoryComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    AssetsMaintenanceHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-assets-maintenance-history',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./assets-maintenance-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./assets-maintenance-history.component.scss */
      "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], AssetsMaintenanceHistoryComponent);
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-reports/assets-reports.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-reports/assets-reports.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsComponentsAssetsReportsAssetsReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtcmVwb3J0cy9hc3NldHMtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-reports/assets-reports.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-reports/assets-reports.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AssetsReportsComponent */

  /***/
  function srcAppAmsAssetsComponentsAssetsReportsAssetsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetsReportsComponent", function () {
      return AssetsReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AssetsReportsComponent =
    /*#__PURE__*/
    function () {
      function AssetsReportsComponent() {
        _classCallCheck(this, AssetsReportsComponent);
      }

      _createClass(AssetsReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AssetsReportsComponent;
    }();

    AssetsReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-assets-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./assets-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-reports/assets-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./assets-reports.component.scss */
      "./src/app/ams/assets/components/assets-reports/assets-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AssetsReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-setup/assets-setup.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-setup/assets-setup.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsComponentsAssetsSetupAssetsSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .mat-ink-bar {\n  background-color: #62d67c !important;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #a3e8bf !important;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #62d67c !important;\n}\n\n.card-body:hover {\n  background-color: white !important;\n}\n\n::ng-deep .mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: unset;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.3rem;\n}\n\n::ng-deep .mat-expansion-panel-content {\n  background-color: #eaeaea;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.3rem;\n}\n\n.subCategory {\n  padding-top: 10px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.3rem;\n  padding-bottom: 10px;\n}\n\n::ng-deep .mat-expansion-panel-spacing {\n  margin: 1px 0 !important;\n}\n\n::ng-deep .mat-expansion-panel-header {\n  padding-left: 38px;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding-left: 38px;\n  padding-right: 21px;\n  padding-bottom: 0px !important;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.3rem;\n}\n\n.water-mark {\n  position: absolute;\n  top: 0.7em;\n  right: 0;\n  opacity: 0.5;\n}\n\n.mt-m20 {\n  margin-top: -20px;\n}\n\n.flex {\n  display: flex;\n}\n\n.wd-100 {\n  width: 100%;\n}\n\n.wd-50 {\n  width: 50%;\n}\n\n.flex-end {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n::ng-deep .mat-expanded .mat-expansion-indicator {\n  margin-top: 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYXNzZXRzLXNldHVwL2Fzc2V0cy1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Fzc2V0cy9jb21wb25lbnRzL2Fzc2V0cy1zZXR1cC9hc3NldHMtc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDSSxvQ0FBQTtBQ1RKOztBRFlBO0VBQ0ksb0NBQUE7QUNUSjs7QURZQTtFQUNJLG9DQUFBO0FDVEo7O0FEV0E7RUFFSSxrQ0FBQTtBQ1RKOztBRGNBO0VBQ0ksaUJBQUE7RUFDQSwyQ0FBQTtFQTNCQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUNpQko7O0FEU0U7RUFDRSx5QkFBQTtFQWhDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUMyQko7O0FES0U7RUFDRSxpQkFBQTtFQXRDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFtQ0Esb0JBQUE7QUNHSjs7QURBRTtFQUNFLHdCQUFBO0FDR0o7O0FESUU7RUFDRSxrQkFBQTtBQ0RKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBMURBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQzBESjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtBQ0FKOztBRG1HQTtFQUNJLGFBQUE7QUNoR0o7O0FEa0dBO0VBQ0csV0FBQTtBQy9GSDs7QURpR0E7RUFDSSxVQUFBO0FDOUZKOztBRGdHQztFQUNHLHlCQUFBO0VBQ0EsbUJBQUE7QUM3Rko7O0FEaUdFO0VBQ0ksMEJBQUE7QUM5Rk4iLCJmaWxlIjoic3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYXNzZXRzLXNldHVwL2Fzc2V0cy1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5AbWl4aW4gZm9udE5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuOjpuZy1kZWVwIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyZDY3YyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2U4YmYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MmQ2N2MgIWltcG9ydGFudDtcbn1cbi5jYXJkLWJvZHk6aG92ZXJcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4vLyBleHBhbnNpb24gY2xhc3NcblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgICBib3gtc2hhZG93OiB1bnNldDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIEBpbmNsdWRlIGZvbnROYW1lKCk7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgIEBpbmNsdWRlIGZvbnROYW1lKCk7XG4gIFxuICB9XG4gIFxuICAuc3ViQ2F0ZWdvcnl7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgQGluY2x1ZGUgZm9udE5hbWUoKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5nIHtcbiAgICBtYXJnaW46IDFweCAwICFpbXBvcnRhbnQ7XG4gICAgXG4gIH1cbiAgXG4gIFxuICBcbiAgXG4gIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMzhweDtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMzhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBAaW5jbHVkZSBmb250TmFtZSgpO1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICAvLyBkZWZpbmUgdGhpcyBjbGFzcyBpbnNpZGUgXCJzdHlsZTogZGlzcGxheTpyZWxhdGl2ZVwiXG4gIC53YXRlci1tYXJre1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuN2VtO1xuICAgIHJpZ2h0OiAwO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICBcbiAgLm10LW0yMCB7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4vLyAgIC5tZXRlciB7XG4vLyAgICAgaGVpZ2h0OiAxMHB4O1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyAgICAgcGFkZGluZzogOHB4O1xuLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4vLyAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbi8vICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbi8vICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyAgICAgYXBwZWFyYW5jZTogbm9uZTtcbi8vICAgICBib3JkZXI6IG5vbmU7XG4vLyAgIH1cbiAgXG4vLyAgIC5tZXRlcj5zcGFuIHtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuLy8gICAgIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDhweDtcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tcmlnaHQ6IDhweDtcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4vLyAgICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuLy8gICAgIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogMjBweDtcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogMjBweDtcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlODFjNTtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAsIHJnYig0MywgMTk0LCA4MykpLCBjb2xvci1zdG9wKDEsIHJnYig4NCwgMjQwLCA4NCkpKSAhaW1wb3J0YW50O1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCByZ2IoNDMsIDE5NCwgODMpIDM3JSwgcmdiKDg0LCAyNDAsIDg0KSA2OSUpO1xuLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAycHggOXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgaW5zZXQgMCAtMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4vLyAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDJweCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCBpbnNldCAwIC0ycHggNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbi8vICAgICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCBpbnNldCAwIC0ycHggNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4vLyAgIH1cbiAgXG4vLyAgIC5tZXRlcj5zcGFuOmFmdGVyLFxuLy8gICAuYW5pbWF0ZT5zcGFuPnNwYW4ge1xuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogMDtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIGJvdHRvbTogMDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAxMDAlIDEwMCUsIGNvbG9yLXN0b3AoLjI1LCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSksIGNvbG9yLXN0b3AoLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMikpLCBjb2xvci1zdG9wKC43NSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMikpLCBjb2xvci1zdG9wKC43NSwgdHJhbnNwYXJlbnQpLCB0byh0cmFuc3BhcmVudCkpO1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbi8vICAgICB6LWluZGV4OiAxO1xuLy8gICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiA1MHB4IDUwcHg7XG4vLyAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZSAycyBsaW5lYXIgaW5maW5pdGU7XG4vLyAgICAgLW1vei1hbmltYXRpb246IG1vdmUgMnMgbGluZWFyIGluZmluaXRlO1xuLy8gICAgIC1tcy1hbmltYXRpb246IG1vdmUgMnMgbGluZWFyIGluZmluaXRlO1xuLy8gICAgIC1vLWFuaW1hdGlvbjogbW92ZSAycyBsaW5lYXIgaW5maW5pdGU7XG4vLyAgICAgYW5pbWF0aW9uOiBtb3ZlIDJzIGxpbmVhciBpbmZpbml0ZTtcbi8vICAgICAtbW96LWFuaW1hdGlvbjogbW92ZSAycyBsaW5lYXIgaW5maW5pdGU7XG4vLyAgICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuLy8gICAgIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDhweDtcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tcmlnaHQ6IDhweDtcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4vLyAgICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuLy8gICAgIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogMjBweDtcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogMjBweDtcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgfVxuICBcbiAgXG4vLyAgIEAtd2Via2l0LWtleWZyYW1lcyBtb3ZlIHtcbi8vICAgICAwJSB7XG4vLyAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4vLyAgICAgfVxuICBcbi8vICAgICAxMDAlIHtcbi8vICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwcHggNTBweDtcbi8vICAgICB9XG4vLyAgIH1cbiAgXG4gIFxuLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi53ZC0xMDB7XG4gICB3aWR0aDogMTAwJTtcbn1cbi53ZC01MHtcbiAgICB3aWR0aDogNTAlO1xuIH1cbiAuZmxleC1lbmR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuIH1cblxuIDo6bmctZGVlcCAubWF0LWV4cGFuZGVkIHtcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9ye1xuICAgICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiB9XG5cbi8vICAud2QtNTAge1xuLy8gICAgd2lkdGg6IDI1JTtcbi8vICB9IiwiOjpuZy1kZWVwIC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MmQ2N2MgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlOGJmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJkNjdjICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWJvZHk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiB1bnNldDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uc3ViQ2F0ZWdvcnkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5nIHtcbiAgbWFyZ2luOiAxcHggMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzOHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmctbGVmdDogMzhweDtcbiAgcGFkZGluZy1yaWdodDogMjFweDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ud2F0ZXItbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjdlbTtcbiAgcmlnaHQ6IDA7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm10LW0yMCB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi53ZC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndkLTUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmZsZXgtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5kZWQgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-setup/assets-setup.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-setup/assets-setup.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AssetsSetupComponent, AddAssetSetup */

  /***/
  function srcAppAmsAssetsComponentsAssetsSetupAssetsSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetsSetupComponent", function () {
      return AssetsSetupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAssetSetup", function () {
      return AddAssetSetup;
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

    var AssetsSetupComponent =
    /*#__PURE__*/
    function () {
      function AssetsSetupComponent(dialog) {
        _classCallCheck(this, AssetsSetupComponent);

        this.dialog = dialog;
        this.Category = [{
          name: 'Gym Equipments',
          id: 1,
          subCategory: [{
            name: 'Tread Mill',
            id: 1
          }, {
            name: 'Ecliptical',
            id: 1
          }]
        }, {
          name: 'Computer Devices',
          id: 1,
          subCategory: [{
            name: 'Laptop',
            id: 1
          }, {
            name: 'Printer',
            id: 1
          }]
        }];
        this.mainType = [{
          name: 'Preventive',
          id: 1,
          subMainType: [{
            name: 'Pest Control',
            id: 1
          }, {
            name: 'Oil change',
            id: 1
          }, {
            name: 'Regular sanitazation',
            id: 2
          }]
        }, {
          name: 'Regular Maintenance ',
          id: 1,
          subMainType: [{
            name: 'Sewage Water Disposal',
            id: 1
          }, {
            name: 'Swimming Pool cleaning ',
            id: 1
          }, {
            name: 'Garden cleaning',
            id: '2'
          }]
        }, {
          name: 'Repair',
          id: 1,
          subMainType: [{
            name: 'Swimming Pool cleaning ',
            id: 1
          }]
        }];
      } //   assetCategoryData:any;
      //   isAssetCategoryLoaded:boolean = false;
      //   isAssetCategorySubmitted:boolean = true;
      //   isAssetCategoryNew:boolean = false;
      //   isAssetCategoryUpdate:boolean = false;


      _createClass(AssetsSetupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addSetUp",
        value: function addSetUp(name, type, value) {
          // let data:any={};
          // data.name=type;
          var dialogRef = this.dialog.open(AddAssetSetup, {
            width: '70%',
            data: {
              'name': name,
              'type': type,
              'value': value
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
          });
        }
      }, {
        key: "deleteMaintype",
        value: function deleteMaintype(index) {
          this.mainType.splice(index, 1);
        }
      }, {
        key: "deleteCategoryType",
        value: function deleteCategoryType(index) {
          this.Category.splice(index, 1);
        }
      }]);

      return AssetsSetupComponent;
    }();

    AssetsSetupComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    AssetsSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-assets-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./assets-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-setup/assets-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./assets-setup.component.scss */
      "./src/app/ams/assets/components/assets-setup/assets-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])], AssetsSetupComponent);

    var AddAssetSetup =
    /*#__PURE__*/
    function () {
      function AddAssetSetup(dialogRef, data) {
        _classCallCheck(this, AddAssetSetup);

        this.dialogRef = dialogRef;
        this.data = data;
        this.subList = [];
        console.log(data);
      }

      _createClass(AddAssetSetup, [{
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "addSubList",
        value: function addSubList() {
          if (this.assestSubCategory) {
            this.subList.push(this.assestSubCategory);
            this.assestSubCategory = '';
          }
        }
      }, {
        key: "deleteSublist",
        value: function deleteSublist(index) {
          this.subList.splice(index, 1);
        }
      }]);

      return AddAssetSetup;
    }();

    AddAssetSetup.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AddAssetSetup = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'asset-setup',
      template: "<div class=\"assets-create-wrapper\">\n\t<form  novalidate>\n\t\t<h4 class=\"main-title-mini float-left mt-3\">\n\t\t\t<span>\n\t\t\t{{data?.name == 'asset'? 'Create Asset Setup':'Create Maintenance Setup'}}\n\t\t\t</span>\n\t\t</h4>\n\t\t<div class=\"card clear mb-30\" >\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t<div  class=\"collapse show\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>{{data?.name== 'asset'? 'Asset Category':'Maintenance Types'}}</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assestCategory\" [(ngModel)]=\"assestCategory\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>{{data?.name== 'asset'? 'Asset Sub Category':'Maintenance SubTypes'}}  </label>\n\t\t\t\t\t                    <input type=\"text\"  class=\"form-control\" placeholder=\"Enter\" name=\"assestSubCategory\" [(ngModel)]=\"assestSubCategory\" >\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4 pt-25\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" (click)=\"addSubList()\">Add {{data?.name == 'asset'? 'Sub Category':'Maintenance SubTypes'}}</button>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card clear\" *ngIf=\"subList.length > 0\">\n                            <div class=\"card-body p-0\">\n                                <div class=\"flex p-2 flexWrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"subCard\" *ngFor=\"let list of subList;let subIndex = index\">\n\t\t\t\t\t\t\t\t\t{{list}}\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times canceIcon pl-2\" aria-hidden=\"true\" (click)=\"deleteSublist(subIndex)\"></i>\n\t\t\t\t\t\t\t     \t</div>\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n                            </div>\n                        </div>\n\t\t\t\t\t\t</div>\n     \t\t\t\t</div>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t<button class=\"btn btnBorder mr-2\" (click)=\"dialogRef.close()\">Cancel</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>",
      styles: [".subCard{\n    display: flex;\n    padding: 6px 10px;\n    border: 1px solid #dadadada;\n    border-radius: 19px;\n    margin-left: 5px;\n    margin-bottom: 10px;\n    margin-top: 5px;\n\tmargin: 5px;'\n}\n.flex{\n\tdisplay:flex;\n}\n.flexWrap{\n\tflex-wrap: wrap;\n}\n.pt-25 {\n\tpadding-top:25px;\n}\n.canceIcon{\n\tcolor: #9c9b9b;\n}\n.btnBorder{\n    border: 1px solid #dadada;\n}\n"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], AddAssetSetup);
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-update/assets-update.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-update/assets-update.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsComponentsAssetsUpdateAssetsUpdateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtdXBkYXRlL2Fzc2V0cy11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-update/assets-update.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-update/assets-update.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AssetsUpdateComponent */

  /***/
  function srcAppAmsAssetsComponentsAssetsUpdateAssetsUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetsUpdateComponent", function () {
      return AssetsUpdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AssetsUpdateComponent =
    /*#__PURE__*/
    function () {
      function AssetsUpdateComponent() {
        _classCallCheck(this, AssetsUpdateComponent);
      }

      _createClass(AssetsUpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AssetsUpdateComponent;
    }();

    AssetsUpdateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-assets-update',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./assets-update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-update/assets-update.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./assets-update.component.scss */
      "./src/app/ams/assets/components/assets-update/assets-update.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AssetsUpdateComponent);
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-view/assets-view.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-view/assets-view.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsComponentsAssetsViewAssetsViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtdmlldy9hc3NldHMtdmlldy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/assets/components/assets-view/assets-view.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/ams/assets/components/assets-view/assets-view.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AssetsViewComponent */

  /***/
  function srcAppAmsAssetsComponentsAssetsViewAssetsViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetsViewComponent", function () {
      return AssetsViewComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../assets-maintenance-history/assets-maintenance-history.component */
    "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts");
    /* harmony import */


    var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Asset */
    "./src/app/api/controllers/Asset.ts");
    /* harmony import */


    var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Vendor */
    "./src/app/api/controllers/Vendor.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var AssetsViewComponent =
    /*#__PURE__*/
    function () {
      function AssetsViewComponent(injector, dialog, router, route, assetService, vendorService, lookupService, sharedService, cookieService) {
        var _this8 = this;

        _classCallCheck(this, AssetsViewComponent);

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
        router.events.forEach(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            var params = {
              LookupTypeId: 19
            };

            _this8.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
              _this8.assetCategoryData = res.filter(function (item) {
                return item.isActive;
              });

              _this8.getAssetCategoryData(_this8.assetCategoryId);
            });
          }
        });
      }

      _createClass(AssetsViewComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
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
        key: "showConfirmModal",
        value: function showConfirmModal(id) {
          this.modalService.showConfirmModal(id);
        }
      }, {
        key: "selectColInput",
        value: function selectColInput(value) {
          this.selectedInput = value;
        }
      }, {
        key: "onSelectChange",
        value: function onSelectChange(event, type, name) {
          if (!underscore__WEBPACK_IMPORTED_MODULE_11__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
          } else {
            this.columnField = {};
          }
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
        key: "getAssetCondition",
        value: function getAssetCondition(asset, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetConditionData, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.assetListData.map(function (obj) {
              if (obj.assetId == asset.assetId) {
                obj.assetCondition = data[0].lookupValueName.toLowerCase();
              }
            });
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "getAssetCategoryName",
        value: function getAssetCategoryName(asset, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetCategoryData, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.assetListData.map(function (obj) {
              if (obj.assetId == asset.assetId) {
                obj.assetCategory = data[0].lookupValueName.toLowerCase();
              }
            });
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "getvendorName",
        value: function getvendorName(asset, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.vendorDataList, function (item) {
            if (item.vendorId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.assetListData.map(function (obj) {
              if (obj.assetId == asset.assetId) {
                obj.vendorTypeName = data[0].vendorName;
              }
            });
            return data[0].vendorName;
          }
        }
      }, {
        key: "getAssetCategory",
        value: function getAssetCategory() {
          if (this.assetCategoryId != "All") {
            this.router.navigateByUrl('/ams/assets/view/' + parseInt(this.assetCategoryId));
          } else {
            this.router.navigate(['/ams/assets/view/']);
          }
        }
      }, {
        key: "getAssetCategoryData",
        value: function getAssetCategoryData(id) {
          var _this9 = this;

          this.isAssetLoaded = false;
          underscore__WEBPACK_IMPORTED_MODULE_11__["each"](this.assetCategoryData, function (item, index) {
            if (id != "All") {
              if (item.lookupValueId == parseInt(id)) {
                _this9.assetCategoryName = item.lookupValueName;
              }
            } else {
              _this9.assetCategoryName = "";
            }
          });
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.assetService.getAllAssetByApartmentId(params).subscribe(function (res) {
            if (id != "All") {
              _this9.assetListData = res.filter(function (item) {
                return item.assetCategoryId == parseInt(id) && item.isActive;
              });
            } else {
              _this9.assetListData = res.filter(function (item) {
                return item.isActive;
              });
            }

            _this9.totalItems = _this9.assetListData.length;

            if (_this9.totalItems > _this9.itemLimit) {
              _this9.ItemEndIndex = _this9.itemLimit;
            } else {
              _this9.ItemEndIndex = _this9.totalItems;
            }

            _this9.isAssetLoaded = true;
          });
        }
      }, {
        key: "showMaintenanceHistory",
        value: function showMaintenanceHistory(id) {
          this.dialog.open(_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__["AssetsMaintenanceHistoryComponent"], {
            panelClass: ['material', 'medium-02'],
            disableClose: true,
            data: id
          });
        }
      }, {
        key: "isMaintenanceAvailable",
        value: function isMaintenanceAvailable(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetMaintenaceDataList, function (item) {
            if (item.assetId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "isMaintenanceDue",
        value: function isMaintenanceDue(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetMaintenaceDataList, function (item) {
            if (item.assetId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return false;
          } else {
            var check = underscore__WEBPACK_IMPORTED_MODULE_11__["some"](data, function (item) {
              return item.maintenanceStatusId == 273;
            });
            return check ? true : false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.asset = {};

          if (this.route.params['value'].id == undefined) {
            this.assetCategoryId = "All";
            var params = {
              apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.assetService.getAllAssetByApartmentId(params).subscribe(function (res) {
              _this10.isAssetLoaded = false;
              _this10.assetListData = res.filter(function (item) {
                return item.isActive;
              });
              _this10.totalItems = _this10.assetListData.length;

              if (_this10.totalItems > _this10.itemLimit) {
                _this10.ItemEndIndex = _this10.itemLimit;
              } else {
                _this10.ItemEndIndex = _this10.totalItems;
              }

              _this10.isAssetLoaded = true;
            });
          } else {
            this.assetCategoryId = "" + this.route.params['value'].id;
          }

          var assetContparams = {
            LookupTypeId: 23
          }; //asset condition

          this.lookupService.getLookupValueByLookupTypeId(assetContparams).subscribe(function (res) {
            _this10.assetConditionData = res.filter(function (item) {
              return item.isActive;
            });
          });
          var vendorParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.vendorService.getVendorByApartmentId(vendorParams).subscribe(function (res) {
            _this10.vendorDataList = res.filter(function (item) {
              return item.isActive;
            });
          });
          var assetParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.assetService.getAllAssetMaintenancePlanByApartmentId(assetParams).subscribe(function (res) {
            _this10.assetMaintenaceDataList = res.filter(function (item) {
              return item.isActive;
            });
          });
          var statusparams = {
            LookupTypeId: 64
          };
          this.lookupService.getLookupValueByLookupTypeId(statusparams).subscribe(function (res) {
            _this10.statusTypeData = res;
          }, function (error) {}); // delete item

          this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
            if (id != null) {
              var params = {
                assetId: id,
                deleteBy: parseInt(_this10.cookieService.get('userId'))
              };

              _this10.assetService.deleteAsset(params).subscribe(function (res) {
                underscore__WEBPACK_IMPORTED_MODULE_11__["each"](_this10.assetListData, function (type) {
                  if (type.assetId == id) {
                    type.isActive = false;
                  }
                });
                setTimeout(function () {
                  _this10.assetListData = _this10.assetListData.filter(function (type) {
                    return type.assetId !== id;
                  });
                  _this10.totalItems = _this10.assetListData.length;

                  _this10.sharedService.setAlertMessage("Asset deleted");

                  _this10.sharedService.setUnitListDeleteIndex(null);
                }, 500);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }]);

      return AssetsViewComponent;
    }();

    AssetsViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__["AssetService"]
      }, {
        type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__["VendorService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]
      }];
    };

    AssetsViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-assets-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./assets-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-view/assets-view.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./assets-view.component.scss */
      "./src/app/ams/assets/components/assets-view/assets-view.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_5__["AssetService"], src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__["VendorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])], AssetsViewComponent);
    /***/
  },

  /***/
  "./src/app/ams/assets/components/last-maintenance/last-maintenance.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/assets/components/last-maintenance/last-maintenance.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsComponentsLastMaintenanceLastMaintenanceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9sYXN0LW1haW50ZW5hbmNlL2xhc3QtbWFpbnRlbmFuY2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/assets/components/last-maintenance/last-maintenance.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/assets/components/last-maintenance/last-maintenance.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: LastMaintenanceComponent */

  /***/
  function srcAppAmsAssetsComponentsLastMaintenanceLastMaintenanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LastMaintenanceComponent", function () {
      return LastMaintenanceComponent;
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


    var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Asset */
    "./src/app/api/controllers/Asset.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var LastMaintenanceComponent =
    /*#__PURE__*/
    function () {
      function LastMaintenanceComponent(injector, router, route, cookieService, assetService) {
        _classCallCheck(this, LastMaintenanceComponent);

        this.injector = injector;
        this.router = router;
        this.route = route;
        this.cookieService = cookieService;
        this.assetService = assetService;
        this.assetCategoryId = "";
        this.isAssetLoaded = false; // assetData:string = "";

        this.unitFieldType = "assetTagNo";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10; // assetCategoryName:string = "";
        // assetMaintenaceDataList:any;
        // maintenanceData:any;
        // statusTypeData:any;

        this.selectedInput = "";
        this.columnField = {};
      }

      _createClass(LastMaintenanceComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
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
        key: "selectColInput",
        value: function selectColInput(value) {
          this.selectedInput = value;
        }
      }, {
        key: "onSelectChange",
        value: function onSelectChange(event, type, name) {
          if (!underscore__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        } // isItemsAvailable(){
        //   return this.totalItems > 0 ? true : false;
        // }

      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.asset = {};

          if (this.route.params['value'].id == undefined) {
            this.assetCategoryId = "All";
            var params = {
              apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.assetService.getAllAssetByApartmentId(params).subscribe(function (res) {
              _this11.isAssetLoaded = false;
              _this11.assetListData = res.filter(function (item) {
                return item.isActive;
              });
              _this11.totalItems = _this11.assetListData.length;

              if (_this11.totalItems > _this11.itemLimit) {
                _this11.ItemEndIndex = _this11.itemLimit;
              } else {
                _this11.ItemEndIndex = _this11.totalItems;
              }

              _this11.isAssetLoaded = true;
            });
          } else {
            this.assetCategoryId = "" + this.route.params['value'].id;
          }
        }
      }]);

      return LastMaintenanceComponent;
    }();

    LastMaintenanceComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"]
      }];
    };

    LastMaintenanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-last-maintenance',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./last-maintenance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/last-maintenance/last-maintenance.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./last-maintenance.component.scss */
      "./src/app/ams/assets/components/last-maintenance/last-maintenance.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"]])], LastMaintenanceComponent);
    /***/
  },

  /***/
  "./src/app/ams/assets/components/maintenance-history/maintenance-history.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/ams/assets/components/maintenance-history/maintenance-history.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsComponentsMaintenanceHistoryMaintenanceHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9tYWludGVuYW5jZS1oaXN0b3J5L21haW50ZW5hbmNlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/assets/components/maintenance-history/maintenance-history.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/assets/components/maintenance-history/maintenance-history.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: MaintenanceHistoryComponent */

  /***/
  function srcAppAmsAssetsComponentsMaintenanceHistoryMaintenanceHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaintenanceHistoryComponent", function () {
      return MaintenanceHistoryComponent;
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


    var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Asset */
    "./src/app/api/controllers/Asset.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js"); // import { MatDialog } from '@angular/material/dialog';
    // import { MatDialogRef } from "@angular/material/dialog";
    // import { AssetsMaintenanceHistoryComponent } from './../assets-maintenance-history/assets-maintenance-history.component';
    // import { VendorService } from '../../../.././api/services/vendor.service';
    // import { LookupService } from '../../../../api/services/lookup.service';
    // import { SharedService } from '../../../../shared/services/shared.service';
    // import { ModalService } from '../../../../shared/services/modal.service';


    var MaintenanceHistoryComponent =
    /*#__PURE__*/
    function () {
      function MaintenanceHistoryComponent(injector, router, route, cookieService, assetService) {
        _classCallCheck(this, MaintenanceHistoryComponent);

        // this.modalService = this.injector.get(ModalService);
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.cookieService = cookieService;
        this.assetService = assetService;
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
        this.columnField = {}; //  router.events.forEach((event) => {
        //   if(event instanceof NavigationEnd) {
        //     this.lookupService.getLookupValueByLookupTypeId(19).subscribe((res:any) => {
        //       this.assetCategoryData = res.filter(item => {
        //         return item.isActive;
        //       });
        //       this.getAssetCategoryData(this.assetCategoryId);
        //     });
        //   }
        // });
      }

      _createClass(MaintenanceHistoryComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
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
        key: "selectColInput",
        value: function selectColInput(value) {
          this.selectedInput = value;
        }
      }, {
        key: "onSelectChange",
        value: function onSelectChange(event, type, name) {
          if (!underscore__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        } // isItemsAvailable(){
        //   return this.totalItems > 0 ? true : false;
        // }

      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        } // getAssetCondition(asset, id){
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

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.asset = {};

          if (this.route.params['value'].id == undefined) {
            this.assetCategoryId = "All";
            var params = {
              apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.assetService.getAllAssetByApartmentId(params).subscribe(function (res) {
              _this12.isAssetLoaded = false;
              _this12.assetListData = res.filter(function (item) {
                return item.isActive;
              });
              _this12.totalItems = _this12.assetListData.length;

              if (_this12.totalItems > _this12.itemLimit) {
                _this12.ItemEndIndex = _this12.itemLimit;
              } else {
                _this12.ItemEndIndex = _this12.totalItems;
              }

              _this12.isAssetLoaded = true;
            });
          } else {
            this.assetCategoryId = "" + this.route.params['value'].id;
          } //asset condition
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

        }
      }]);

      return MaintenanceHistoryComponent;
    }();

    MaintenanceHistoryComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"]
      }];
    };

    MaintenanceHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-maintenance-history',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./maintenance-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/maintenance-history/maintenance-history.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./maintenance-history.component.scss */
      "./src/app/ams/assets/components/maintenance-history/maintenance-history.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_3__["AssetService"]])], MaintenanceHistoryComponent);
    /***/
  },

  /***/
  "./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsAssetsComponentsManageMaintenanceManageMaintenanceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardOuter {\n  padding: 25px 20px;\n}\n\n.cancelBtn {\n  background: white;\n  border: 1px solid #dadada;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvbWFuYWdlLW1haW50ZW5hbmNlL21hbmFnZS1tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Fzc2V0cy9jb21wb25lbnRzL21hbmFnZS1tYWludGVuYW5jZS9tYW5hZ2UtbWFpbnRlbmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBRUksaUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Fzc2V0cy9jb21wb25lbnRzL21hbmFnZS1tYWludGVuYW5jZS9tYW5hZ2UtbWFpbnRlbmFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZE91dGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDIwcHg7IFxufVxuLmNhbmNlbEJ0blxue1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG59XG4iLCIuY2FyZE91dGVyIHtcbiAgcGFkZGluZzogMjVweCAyMHB4O1xufVxuXG4uY2FuY2VsQnRuIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ManageMaintenanceComponent */

  /***/
  function srcAppAmsAssetsComponentsManageMaintenanceManageMaintenanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageMaintenanceComponent", function () {
      return ManageMaintenanceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ManageMaintenanceComponent =
    /*#__PURE__*/
    function () {
      function ManageMaintenanceComponent() {
        _classCallCheck(this, ManageMaintenanceComponent);
      }

      _createClass(ManageMaintenanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManageMaintenanceComponent;
    }();

    ManageMaintenanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-maintenance',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./manage-maintenance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./manage-maintenance.component.scss */
      "./src/app/ams/assets/components/manage-maintenance/manage-maintenance.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ManageMaintenanceComponent);
    /***/
  }
}]);
//# sourceMappingURL=assets-assets-module-es5.js.map