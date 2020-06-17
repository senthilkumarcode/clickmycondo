function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inbox-inbox-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js ***!
    \***********************************************************************/

  /*! exports provided: MAT_CHIPS_DEFAULT_OPTIONS, MatChip, MatChipAvatar, MatChipInput, MatChipList, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ChipsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function () {
      return MAT_CHIPS_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChip", function () {
      return MatChip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function () {
      return MatChipAvatar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipInput", function () {
      return MatChipInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipList", function () {
      return MatChipList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipListChange", function () {
      return MatChipListChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipRemove", function () {
      return MatChipRemove;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function () {
      return MatChipSelectionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function () {
      return MatChipTrailingIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipsModule", function () {
      return MatChipsModule;
    });
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/chip.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Represents an event fired on an individual `mat-chip`.
     * @record
     */


    var _c0 = ["*"];

    function MatChipEvent() {}

    if (false) {}
    /**
     * Event object emitted by MatChip when selected or deselected.
     */


    var MatChipSelectionChange =
    /**
     * @param {?} source
     * @param {?} selected
     * @param {?=} isUserInput
     */
    function MatChipSelectionChange(source, selected) {
      var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _classCallCheck(this, MatChipSelectionChange);

      this.source = source;
      this.selected = selected;
      this.isUserInput = isUserInput;
    };

    if (false) {} // Boilerplate for applying mixins to MatChip.

    /**
     * \@docs-private
     */


    var MatChipBase =
    /**
     * @param {?} _elementRef
     */
    function MatChipBase(_elementRef) {
      _classCallCheck(this, MatChipBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatChipBase)), 'primary'), -1);
    /**
     * Dummy directive to add CSS class to chip avatar.
     * \@docs-private
     */


    var MatChipAvatar = function MatChipAvatar() {
      _classCallCheck(this, MatChipAvatar);
    };

    MatChipAvatar.ɵfac = function MatChipAvatar_Factory(t) {
      return new (t || MatChipAvatar)();
    };

    MatChipAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatChipAvatar,
      selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
      hostAttrs: [1, "mat-chip-avatar"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipAvatar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-chip-avatar, [matChipAvatar]',
          host: {
            'class': 'mat-chip-avatar'
          }
        }]
      }], null, null);
    })();
    /**
     * Dummy directive to add CSS class to chip trailing icon.
     * \@docs-private
     */


    var MatChipTrailingIcon = function MatChipTrailingIcon() {
      _classCallCheck(this, MatChipTrailingIcon);
    };

    MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(t) {
      return new (t || MatChipTrailingIcon)();
    };

    MatChipTrailingIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatChipTrailingIcon,
      selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
      hostAttrs: [1, "mat-chip-trailing-icon"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipTrailingIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
          host: {
            'class': 'mat-chip-trailing-icon'
          }
        }]
      }], null, null);
    })();
    /**
     * Material design styled Chip component. Used inside the MatChipList component.
     */


    var MatChip =
    /*#__PURE__*/
    function (_MatChipMixinBase2) {
      _inherits(MatChip, _MatChipMixinBase2);

      var _super = _createSuper(MatChip);

      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?} platform
       * @param {?} globalRippleOptions
       * @param {?=} animationMode
       * @param {?=} _changeDetectorRef
       * @param {?=} tabIndex
       * @param {?=} _document
       */
      function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, // @breaking-change 8.0.0 `animationMode` parameter to become required.
      animationMode, _changeDetectorRef, tabIndex, // @breaking-change 11.0.0 `_document` parameter to become required.
      _document) {
        var _this;

        _classCallCheck(this, MatChip);

        _this = _super.call(this, _elementRef);
        _this._elementRef = _elementRef;
        _this._ngZone = _ngZone;
        _this._changeDetectorRef = _changeDetectorRef;
        /**
         * Whether the chip has focus.
         */

        _this._hasFocus = false;
        /**
         * Whether the chip list is selectable
         */

        _this.chipListSelectable = true;
        /**
         * Whether the chip list is in multi-selection mode.
         */

        _this._chipListMultiple = false;
        _this._selected = false;
        _this._selectable = true;
        _this._removable = true;
        /**
         * Emits when the chip is focused.
         */

        _this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Emits when the chip is blured.
         */

        _this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Emitted when the chip is selected or deselected.
         */

        _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emitted when the chip is destroyed.
         */

        _this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emitted when a chip is to be removed.
         */

        _this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        _this._addHostClassName(); // Dynamically create the ripple target, append it within the chip, and use it as the
        // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
        // the proper styles.


        _this._chipRippleTarget = (_document || document).createElement('div');

        _this._chipRippleTarget.classList.add('mat-chip-ripple');

        _this._elementRef.nativeElement.appendChild(_this._chipRippleTarget);

        _this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["RippleRenderer"](_assertThisInitialized(_this), _ngZone, _this._chipRippleTarget, platform);

        _this._chipRipple.setupTriggerEvents(_elementRef);

        _this.rippleConfig = globalRippleOptions || {};
        _this._animationsDisabled = animationMode === 'NoopAnimations';
        _this.tabIndex = tabIndex != null ? parseInt(tabIndex) || -1 : -1;
        return _this;
      }
      /**
       * Whether ripples are disabled on interaction
       * \@docs-private
       * @return {?}
       */


      _createClass(MatChip, [{
        key: "_addHostClassName",

        /**
         * @return {?}
         */
        value: function _addHostClassName() {
          /** @type {?} */
          var basicChipAttrName = 'mat-basic-chip';
          /** @type {?} */

          var element =
          /** @type {?} */
          this._elementRef.nativeElement;

          if (element.hasAttribute(basicChipAttrName) || element.tagName.toLowerCase() === basicChipAttrName) {
            element.classList.add(basicChipAttrName);
            return;
          } else {
            element.classList.add('mat-standard-chip');
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed.emit({
            chip: this
          });

          this._chipRipple._removeTriggerEvents();
        }
        /**
         * Selects the chip.
         * @return {?}
         */

      }, {
        key: "select",
        value: function select() {
          if (!this._selected) {
            this._selected = true;

            this._dispatchSelectionChange();

            this._markForCheck();
          }
        }
        /**
         * Deselects the chip.
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          if (this._selected) {
            this._selected = false;

            this._dispatchSelectionChange();

            this._markForCheck();
          }
        }
        /**
         * Select this chip and emit selected event
         * @return {?}
         */

      }, {
        key: "selectViaInteraction",
        value: function selectViaInteraction() {
          if (!this._selected) {
            this._selected = true;

            this._dispatchSelectionChange(true);

            this._markForCheck();
          }
        }
        /**
         * Toggles the current selected state of this chip.
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "toggleSelected",
        value: function toggleSelected() {
          var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this._selected = !this.selected;

          this._dispatchSelectionChange(isUserInput);

          this._markForCheck();

          return this.selected;
        }
        /**
         * Allows for programmatic focusing of the chip.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();

            this._onFocus.next({
              chip: this
            });
          }

          this._hasFocus = true;
        }
        /**
         * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
         * BACKSPACE keys are pressed.
         *
         * Informs any listeners of the removal request. Does not remove the chip from the DOM.
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          if (this.removable) {
            this.removed.emit({
              chip: this
            });
          }
        }
        /**
         * Handles click events on the chip.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick(event) {
          if (this.disabled) {
            event.preventDefault();
          } else {
            event.stopPropagation();
          }
        }
        /**
         * Handle custom key presses.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          if (this.disabled) {
            return;
          }

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DELETE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"]:
              // If we are removable, remove the focused chip
              this.remove(); // Always prevent so page navigation does not occur

              event.preventDefault();
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]:
              // If we are selectable, toggle the focused chip
              if (this.selectable) {
                this.toggleSelected(true);
              } // Always prevent space from scrolling the page since the list has focus


              event.preventDefault();
              break;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_blur",
        value: function _blur() {
          var _this2 = this;

          // When animations are enabled, Angular may end up removing the chip from the DOM a little
          // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
          // that moves focus not the next item. To work around the issue, we defer marking the chip
          // as not focused until the next time the zone stabilizes.
          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this2._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this2._hasFocus = false;

              _this2._onBlur.next({
                chip: _this2
              });
            });
          });
        }
        /**
         * @private
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "_dispatchSelectionChange",
        value: function _dispatchSelectionChange() {
          var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.selectionChange.emit({
            source: this,
            isUserInput: isUserInput,
            selected: this._selected
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
          if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
          }
        }
      }, {
        key: "rippleDisabled",
        get: function get() {
          return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
        }
        /**
         * Whether the chip is selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          if (coercedValue !== this._selected) {
            this._selected = coercedValue;

            this._dispatchSelectionChange();
          }
        }
        /**
         * The value of the chip. Defaults to the content inside `<mat-chip>` tags.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value !== undefined ? this._value : this._elementRef.nativeElement.textContent;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._value = value;
        }
        /**
         * Whether or not the chip is selectable. When a chip is not selectable,
         * changes to its selected state are always ignored. By default a chip is
         * selectable, and it becomes non-selectable if its parent chip list is
         * not selectable.
         * @return {?}
         */

      }, {
        key: "selectable",
        get: function get() {
          return this._selectable && this.chipListSelectable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * Determines whether or not the chip displays the remove styling and emits (removed) events.
         * @return {?}
         */

      }, {
        key: "removable",
        get: function get() {
          return this._removable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * The ARIA selected applied to the chip.
         * @return {?}
         */

      }, {
        key: "ariaSelected",
        get: function get() {
          // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
          // it adds noise to NVDA users where "not selected" will be read out for each chip.
          return this.selectable && (this._chipListMultiple || this.selected) ? this.selected.toString() : null;
        }
      }]);

      return MatChip;
    }(_MatChipMixinBase);

    MatChip.ɵfac = function MatChip_Factory(t) {
      return new (t || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8));
    };

    MatChip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatChip,
      selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
      contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChipAvatar, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChipTrailingIcon, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChipRemove, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
        }
      },
      hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"],
      hostVars: 14,
      hostBindings: function MatChip_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChip_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          })("keydown", function MatChip_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("focus", function MatChip_focus_HostBindingHandler() {
            return ctx.focus();
          })("blur", function MatChip_blur_HostBindingHandler() {
            return ctx._blur();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
        }
      },
      inputs: {
        color: "color",
        disabled: "disabled",
        disableRipple: "disableRipple",
        tabIndex: "tabIndex",
        selected: "selected",
        value: "value",
        selectable: "selectable",
        removable: "removable"
      },
      outputs: {
        selectionChange: "selectionChange",
        destroyed: "destroyed",
        removed: "removed"
      },
      exportAs: ["matChip"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatChip.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    MatChip.propDecorators = {
      avatar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatChipAvatar]
      }],
      trailingIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatChipTrailingIcon]
      }],
      removeIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatChipRemove;
        })]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      selectable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      removable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      destroyed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      removed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
          inputs: ['color', 'disabled', 'disableRipple', 'tabIndex'],
          exportAs: 'matChip',
          host: {
            'class': 'mat-chip mat-focus-indicator',
            '[attr.tabindex]': 'disabled ? null : tabIndex',
            'role': 'option',
            '[class.mat-chip-selected]': 'selected',
            '[class.mat-chip-with-avatar]': 'avatar',
            '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
            '[class.mat-chip-disabled]': 'disabled',
            '[class._mat-animation-noopable]': '_animationsDisabled',
            '[attr.disabled]': 'disabled || null',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-selected]': 'ariaSelected',
            '(click)': '_handleClick($event)',
            '(keydown)': '_handleKeydown($event)',
            '(focus)': 'focus()',
            '(blur)': '_blur()'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, {
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatChipAvatar]
        }],
        trailingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatChipTrailingIcon]
        }],
        removeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatChipRemove;
          })]
        }]
      });
    })();

    if (false) {}
    /**
     * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
     * available at https://material.io/icons/#ic_cancel.
     *
     * Example:
     *
     *     `<mat-chip>
     *       <mat-icon matChipRemove>cancel</mat-icon>
     *     </mat-chip>`
     *
     * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
     * styles to properly center the icon within the chip.
     */


    var MatChipRemove =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _parentChip
       * @param {?=} elementRef
       */
      function MatChipRemove(_parentChip, // @breaking-change 11.0.0 `elementRef` parameter to be made required.
      elementRef) {
        _classCallCheck(this, MatChipRemove);

        this._parentChip = _parentChip; // @breaking-change 11.0.0 Remove null check for `elementRef`.

        if (elementRef && elementRef.nativeElement.nodeName === 'BUTTON') {
          elementRef.nativeElement.setAttribute('type', 'button');
        }
      }
      /**
       * Calls the parent chip's public `remove()` method if applicable.
       * @param {?} event
       * @return {?}
       */


      _createClass(MatChipRemove, [{
        key: "_handleClick",
        value: function _handleClick(event) {
          /** @type {?} */
          var parentChip = this._parentChip;

          if (parentChip.removable && !parentChip.disabled) {
            parentChip.remove();
          } // We need to stop event propagation because otherwise the event will bubble up to the
          // form field and cause the `onContainerClick` method to be invoked. This method would then
          // reset the focused chip that has been focused after chip removal. Usually the parent
          // the parent click listener of the `MatChip` would prevent propagation, but it can happen
          // that the chip is being removed before the event bubbles up.


          event.stopPropagation();
        }
      }]);

      return MatChipRemove;
    }();

    MatChipRemove.ɵfac = function MatChipRemove_Factory(t) {
      return new (t || MatChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatChip), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    MatChipRemove.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatChipRemove,
      selectors: [["", "matChipRemove", ""]],
      hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"],
      hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChipRemove_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          });
        }
      }
    });
    /** @nocollapse */

    MatChipRemove.ctorParameters = function () {
      return [{
        type: MatChip
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipRemove, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matChipRemove]',
          host: {
            'class': 'mat-chip-remove mat-chip-trailing-icon',
            '(click)': '_handleClick($event)'
          }
        }]
      }], function () {
        return [{
          type: MatChip
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/chip-default-options.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default options, for the chips module, that can be overridden.
     * @record
     */


    function MatChipsDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for the chips module.
     * @type {?}
     */


    var MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-chips-default-options');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/chip-list.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatChipList.

    /**
     * \@docs-private
     */

    var MatChipListBase =
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, MatChipListBase);

      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };

    if (false) {}
    /** @type {?} */


    var _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinErrorState"])(MatChipListBase); // Increasing integer for generating unique ids for chip-list components.

    /** @type {?} */


    var nextUniqueId = 0;
    /**
     * Change event object that is emitted when the chip list value has changed.
     */

    var MatChipListChange =
    /**
     * @param {?} source
     * @param {?} value
     */
    function MatChipListChange(source, value) {
      _classCallCheck(this, MatChipListChange);

      this.source = source;
      this.value = value;
    };

    if (false) {}
    /**
     * A material design chips component (named ChipList for its similarity to the List component).
     */


    var MatChipList =
    /*#__PURE__*/
    function (_MatChipListMixinBase2) {
      _inherits(MatChipList, _MatChipListMixinBase2);

      var _super2 = _createSuper(MatChipList);

      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} _dir
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} _defaultErrorStateMatcher
       * @param {?} ngControl
       */
      function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
        var _this3;

        _classCallCheck(this, MatChipList);

        _this3 = _super2.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        _this3._elementRef = _elementRef;
        _this3._changeDetectorRef = _changeDetectorRef;
        _this3._dir = _dir;
        _this3.ngControl = ngControl;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this3.controlType = 'mat-chip-list';
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */

        _this3._lastDestroyedChipIndex = null;
        /**
         * Subject that emits when the component has been destroyed.
         */

        _this3._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Uid of the chip list
         */

        _this3._uid = "mat-chip-list-".concat(nextUniqueId++);
        /**
         * Tab index for the chip list.
         */

        _this3._tabIndex = 0;
        /**
         * User defined tab index.
         * When it is not null, use user defined tab index. Otherwise use _tabIndex
         */

        _this3._userTabIndex = null;
        /**
         * Function when touched
         */

        _this3._onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Function when changed
         */


        _this3._onChange =
        /**
        * @return {?}
        */
        function () {};

        _this3._multiple = false;

        _this3._compareWith =
        /**
        * @param {?} o1
        * @param {?} o2
        * @return {?}
        */
        function (o1, o2) {
          return o1 === o2;
        };

        _this3._required = false;
        _this3._disabled = false;
        /**
         * Orientation of the chip list.
         */

        _this3.ariaOrientation = 'horizontal';
        _this3._selectable = true;
        /**
         * Event emitted when the selected chip list value has been changed by the user.
         */

        _this3.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the chip-list changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        _this3.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (_this3.ngControl) {
          _this3.ngControl.valueAccessor = _assertThisInitialized(_this3);
        }

        return _this3;
      }
      /**
       * The array of selected chips inside chip list.
       * @return {?}
       */


      _createClass(MatChipList, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this4 = this;

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusKeyManager"](this.chips).withWrap().withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} dir
            * @return {?}
            */
            function (dir) {
              return _this4._keyManager.withHorizontalOrientation(dir);
            });
          }

          this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this4._allowFocusEscape();
          }); // When the list changes, re-subscribe


          this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this4.disabled) {
              // Since this happens after the content has been
              // checked, we need to defer it to the next tick.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this4._syncChipsState();
              });
            }

            _this4._resetChips(); // Reset chips selected/deselected status


            _this4._initializeSelection(); // Check to see if we need to update our tab index


            _this4._updateTabIndex(); // Check to see if we have a destroyed chip and need to refocus


            _this4._updateFocusForDestroyedChips();

            _this4.stateChanges.next();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](this.multiple, undefined, false);
          this.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();

          this.stateChanges.complete();

          this._dropSubscriptions();
        }
        /**
         * Associates an HTML input element with this chip list.
         * @param {?} inputElement
         * @return {?}
         */

      }, {
        key: "registerInput",
        value: function registerInput(inputElement) {
          this._chipInput = inputElement;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} ids
         * @return {?}
         */

      }, {
        key: "setDescribedByIds",
        value: function setDescribedByIds(ids) {
          this._ariaDescribedby = ids.join(' ');
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this.chips) {
            this._setSelectionByValue(value, false);
          }
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
          this.stateChanges.next();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick(event) {
          if (!this._originatesFromChip(event)) {
            this.focus();
          }
        }
        /**
         * Focuses the first non-disabled chip in this chip list, or the associated input when there
         * are no eligible chips.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          if (this.disabled) {
            return;
          } // TODO: ARIA says this should focus the first `selected` chip if any are selected.
          // Focus on first element if there's no chipInput inside chip-list


          if (this._chipInput && this._chipInput.focused) {// do nothing
          } else if (this.chips.length > 0) {
            this._keyManager.setFirstItemActive();

            this.stateChanges.next();
          } else {
            this._focusInput(options);

            this.stateChanges.next();
          }
        }
        /**
         * Attempt to focus an input if we have one.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_focusInput",
        value: function _focusInput(options) {
          if (this._chipInput) {
            this._chipInput.focus(options);
          }
        }
        /**
         * Pass events to the keyboard manager. Available here for tests.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_keydown",
        value: function _keydown(event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target; // If they are on an empty input and hit backspace, focus the last chip

          if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"] && this._isInputEmpty(target)) {
            this._keyManager.setLastItemActive();

            event.preventDefault();
          } else if (target && target.classList.contains('mat-chip')) {
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["HOME"]) {
              this._keyManager.setFirstItemActive();

              event.preventDefault();
            } else if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["END"]) {
              this._keyManager.setLastItemActive();

              event.preventDefault();
            } else {
              this._keyManager.onKeydown(event);
            }

            this.stateChanges.next();
          }
        }
        /**
         * Check the tab index as you should not be allowed to focus an empty list.
         * @protected
         * @return {?}
         */

      }, {
        key: "_updateTabIndex",
        value: function _updateTabIndex() {
          // If we have 0 chips, we should not allow keyboard focus
          this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
        }
        /**
         * If the amount of chips changed, we need to update the
         * key manager state and focus the next closest chip.
         * @protected
         * @return {?}
         */

      }, {
        key: "_updateFocusForDestroyedChips",
        value: function _updateFocusForDestroyedChips() {
          // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
          if (this._lastDestroyedChipIndex != null) {
            if (this.chips.length) {
              /** @type {?} */
              var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);

              this._keyManager.setActiveItem(newChipIndex);
            } else {
              this.focus();
            }
          }

          this._lastDestroyedChipIndex = null;
        }
        /**
         * Utility to ensure all indexes are valid.
         *
         * @private
         * @param {?} index The index to be checked.
         * @return {?} True if the index is valid for our list of chips.
         */

      }, {
        key: "_isValidIndex",
        value: function _isValidIndex(index) {
          return index >= 0 && index < this.chips.length;
        }
        /**
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_isInputEmpty",
        value: function _isInputEmpty(element) {
          if (element && element.nodeName.toLowerCase() === 'input') {
            /** @type {?} */
            var input =
            /** @type {?} */
            element;
            return !input.value;
          }

          return false;
        }
        /**
         * @param {?} value
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "_setSelectionByValue",
        value: function _setSelectionByValue(value) {
          var _this5 = this;

          var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          this._clearSelection();

          this.chips.forEach(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.deselect();
          });

          if (Array.isArray(value)) {
            value.forEach(
            /**
            * @param {?} currentValue
            * @return {?}
            */
            function (currentValue) {
              return _this5._selectValue(currentValue, isUserInput);
            });

            this._sortValues();
          } else {
            /** @type {?} */
            var correspondingChip = this._selectValue(value, isUserInput); // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.


            if (correspondingChip) {
              if (isUserInput) {
                this._keyManager.setActiveItem(correspondingChip);
              }
            }
          }
        }
        /**
         * Finds and selects the chip based on its value.
         * @private
         * @param {?} value
         * @param {?=} isUserInput
         * @return {?} Chip that has the corresponding value.
         */

      }, {
        key: "_selectValue",
        value: function _selectValue(value) {
          var _this6 = this;

          var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          /** @type {?} */
          var correspondingChip = this.chips.find(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.value != null && _this6._compareWith(chip.value, value);
          });

          if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();

            this._selectionModel.select(correspondingChip);
          }

          return correspondingChip;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_initializeSelection",
        value: function _initializeSelection() {
          var _this7 = this;

          // Defer setting the value in order to avoid the "Expression
          // has changed after it was checked" errors from Angular.
          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            if (_this7.ngControl || _this7._value) {
              _this7._setSelectionByValue(_this7.ngControl ? _this7.ngControl.value : _this7._value, false);

              _this7.stateChanges.next();
            }
          });
        }
        /**
         * Deselects every chip in the list.
         * @private
         * @param {?=} skip Chip that should not be deselected.
         * @return {?}
         */

      }, {
        key: "_clearSelection",
        value: function _clearSelection(skip) {
          this._selectionModel.clear();

          this.chips.forEach(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            if (chip !== skip) {
              chip.deselect();
            }
          });
          this.stateChanges.next();
        }
        /**
         * Sorts the model values, ensuring that they keep the same
         * order that they have in the panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_sortValues",
        value: function _sortValues() {
          var _this8 = this;

          if (this._multiple) {
            this._selectionModel.clear();

            this.chips.forEach(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              if (chip.selected) {
                _this8._selectionModel.select(chip);
              }
            });
            this.stateChanges.next();
          }
        }
        /**
         * Emits change event to set the model value.
         * @private
         * @param {?=} fallbackValue
         * @return {?}
         */

      }, {
        key: "_propagateChanges",
        value: function _propagateChanges(fallbackValue) {
          /** @type {?} */
          var valueToEmit = null;

          if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip.value;
            });
          } else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
          }

          this._value = valueToEmit;
          this.change.emit(new MatChipListChange(this, valueToEmit));
          this.valueChange.emit(valueToEmit);

          this._onChange(valueToEmit);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * When blurred, mark the field as touched when focus moved outside the chip list.
         * @return {?}
         */

      }, {
        key: "_blur",
        value: function _blur() {
          var _this9 = this;

          if (!this._hasFocusedChip()) {
            this._keyManager.setActiveItem(-1);
          }

          if (!this.disabled) {
            if (this._chipInput) {
              // If there's a chip input, we should check whether the focus moved to chip input.
              // If the focus is not moved to chip input, mark the field as touched. If the focus moved
              // to chip input, do nothing.
              // Timeout is needed to wait for the focus() event trigger on chip input.
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                if (!_this9.focused) {
                  _this9._markAsTouched();
                }
              });
            } else {
              // If there's no chip input, then mark the field as touched.
              this._markAsTouched();
            }
          }
        }
        /**
         * Mark the field as touched
         * @return {?}
         */

      }, {
        key: "_markAsTouched",
        value: function _markAsTouched() {
          this._onTouched();

          this._changeDetectorRef.markForCheck();

          this.stateChanges.next();
        }
        /**
         * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
         * user to tab out of it. This prevents the list from capturing focus and redirecting
         * it back to the first chip, creating a focus trap, if it user tries to tab away.
         * @return {?}
         */

      }, {
        key: "_allowFocusEscape",
        value: function _allowFocusEscape() {
          var _this10 = this;

          if (this._tabIndex !== -1) {
            this._tabIndex = -1;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this10._tabIndex = _this10._userTabIndex || 0;

              _this10._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_resetChips",
        value: function _resetChips() {
          this._dropSubscriptions();

          this._listenToChipsFocus();

          this._listenToChipsSelection();

          this._listenToChipsRemoved();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_dropSubscriptions",
        value: function _dropSubscriptions() {
          if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();

            this._chipFocusSubscription = null;
          }

          if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();

            this._chipBlurSubscription = null;
          }

          if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();

            this._chipSelectionSubscription = null;
          }

          if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();

            this._chipRemoveSubscription = null;
          }
        }
        /**
         * Listens to user-generated selection events on each chip.
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToChipsSelection",
        value: function _listenToChipsSelection() {
          var _this11 = this;

          this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            event.source.selected ? _this11._selectionModel.select(event.source) : _this11._selectionModel.deselect(event.source); // For single selection chip list, make sure the deselected value is unselected.

            if (!_this11.multiple) {
              _this11.chips.forEach(
              /**
              * @param {?} chip
              * @return {?}
              */
              function (chip) {
                if (!_this11._selectionModel.isSelected(chip) && chip.selected) {
                  chip.deselect();
                }
              });
            }

            if (event.isUserInput) {
              _this11._propagateChanges();
            }
          });
        }
        /**
         * Listens to user-generated selection events on each chip.
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToChipsFocus",
        value: function _listenToChipsFocus() {
          var _this12 = this;

          this._chipFocusSubscription = this.chipFocusChanges.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var chipIndex = _this12.chips.toArray().indexOf(event.chip);

            if (_this12._isValidIndex(chipIndex)) {
              _this12._keyManager.updateActiveItem(chipIndex);
            }

            _this12.stateChanges.next();
          });
          this._chipBlurSubscription = this.chipBlurChanges.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this12._blur();

            _this12.stateChanges.next();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToChipsRemoved",
        value: function _listenToChipsRemoved() {
          var _this13 = this;

          this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var chip = event.chip;
            /** @type {?} */

            var chipIndex = _this13.chips.toArray().indexOf(event.chip); // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.


            if (_this13._isValidIndex(chipIndex) && chip._hasFocus) {
              _this13._lastDestroyedChipIndex = chipIndex;
            }
          });
        }
        /**
         * Checks whether an event comes from inside a chip element.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_originatesFromChip",
        value: function _originatesFromChip(event) {
          /** @type {?} */
          var currentElement =
          /** @type {?} */
          event.target;

          while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('mat-chip')) {
              return true;
            }

            currentElement = currentElement.parentElement;
          }

          return false;
        }
        /**
         * Checks whether any of the chips is focused.
         * @private
         * @return {?}
         */

      }, {
        key: "_hasFocusedChip",
        value: function _hasFocusedChip() {
          return this.chips.some(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip._hasFocus;
          });
        }
        /**
         * Syncs the list's state with the individual chips.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncChipsState",
        value: function _syncChipsState() {
          var _this14 = this;

          if (this.chips) {
            this.chips.forEach(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              chip.disabled = _this14._disabled;
              chip._chipListMultiple = _this14.multiple;
            });
          }
        }
      }, {
        key: "selected",
        get: function get() {
          return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        }
        /**
         * The ARIA role applied to the chip list.
         * @return {?}
         */

      }, {
        key: "role",
        get: function get() {
          return this.empty ? null : 'listbox';
        }
        /**
         * Whether the user should be allowed to select multiple chips.
         * @return {?}
         */

      }, {
        key: "multiple",
        get: function get() {
          return this._multiple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          this._syncChipsState();
        }
        /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */

      }, {
        key: "compareWith",
        get: function get() {
          return this._compareWith;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          this._compareWith = fn;

          if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
          }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.writeValue(value);
          this._value = value;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "id",
        get: function get() {
          return this._chipInput ? this._chipInput.id : this._uid;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

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
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          this.stateChanges.next();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "placeholder",
        get: function get() {
          return this._chipInput ? this._chipInput.placeholder : this._placeholder;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._placeholder = value;
          this.stateChanges.next();
        }
        /**
         * Whether any chips or the matChipInput inside of this chip-list has focus.
         * @return {?}
         */

      }, {
        key: "focused",
        get: function get() {
          return this._chipInput && this._chipInput.focused || this._hasFocusedChip();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "empty",
        get: function get() {
          return (!this._chipInput || this._chipInput.empty) && this.chips.length === 0;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "shouldLabelFloat",
        get: function get() {
          return !this.empty || this.focused;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.ngControl ? !!this.ngControl.disabled : this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          this._syncChipsState();
        }
        /**
         * Whether or not this chip list is selectable. When a chip list is not selectable,
         * the selected states for all the chips inside the chip list are always ignored.
         * @return {?}
         */

      }, {
        key: "selectable",
        get: function get() {
          return this._selectable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this15 = this;

          this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          if (this.chips) {
            this.chips.forEach(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip.chipListSelectable = _this15._selectable;
            });
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "tabIndex",
        set: function set(value) {
          this._userTabIndex = value;
          this._tabIndex = value;
        }
        /**
         * Combined stream of all of the child chips' selection change events.
         * @return {?}
         */

      }, {
        key: "chipSelectionChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.selectionChange;
          })));
        }
        /**
         * Combined stream of all of the child chips' focus change events.
         * @return {?}
         */

      }, {
        key: "chipFocusChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip._onFocus;
          })));
        }
        /**
         * Combined stream of all of the child chips' blur change events.
         * @return {?}
         */

      }, {
        key: "chipBlurChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip._onBlur;
          })));
        }
        /**
         * Combined stream of all of the child chips' remove change events.
         * @return {?}
         */

      }, {
        key: "chipRemoveChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.destroyed;
          })));
        }
      }]);

      return MatChipList;
    }(_MatChipListMixinBase);

    MatChipList.ɵfac = function MatChipList_Factory(t) {
      return new (t || MatChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], 10));
    };

    MatChipList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatChipList,
      selectors: [["mat-chip-list"]],
      contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChip, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chips = _t);
        }
      },
      hostAttrs: [1, "mat-chip-list"],
      hostVars: 15,
      hostBindings: function MatChipList_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatChipList_focus_HostBindingHandler() {
            return ctx.focus();
          })("blur", function MatChipList_blur_HostBindingHandler() {
            return ctx._blur();
          })("keydown", function MatChipList_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx._uid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
        }
      },
      inputs: {
        ariaOrientation: ["aria-orientation", "ariaOrientation"],
        multiple: "multiple",
        compareWith: "compareWith",
        value: "value",
        required: "required",
        placeholder: "placeholder",
        disabled: "disabled",
        selectable: "selectable",
        tabIndex: "tabIndex",
        errorStateMatcher: "errorStateMatcher"
      },
      outputs: {
        change: "change",
        valueChange: "valueChange"
      },
      exportAs: ["matChipList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
        useExisting: MatChipList
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "mat-chip-list-wrapper"]],
      template: function MatChipList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatChipList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }];
    };

    MatChipList.propDecorators = {
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      ariaOrientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['aria-orientation']
      }],
      selectable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      chips: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatChip, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-chip-list',
          template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
          exportAs: 'matChipList',
          host: {
            '[attr.tabindex]': 'disabled ? null : _tabIndex',
            '[attr.aria-describedby]': '_ariaDescribedby || null',
            '[attr.aria-required]': 'role ? required : null',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-invalid]': 'errorState',
            '[attr.aria-multiselectable]': 'multiple',
            '[attr.role]': 'role',
            '[class.mat-chip-list-disabled]': 'disabled',
            '[class.mat-chip-list-invalid]': 'errorState',
            '[class.mat-chip-list-required]': 'required',
            '[attr.aria-orientation]': 'ariaOrientation',
            'class': 'mat-chip-list',
            '(focus)': 'focus()',
            '(blur)': '_blur()',
            '(keydown)': '_keydown($event)',
            '[id]': '_uid'
          },
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
            useExisting: MatChipList
          }],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }];
      }, {
        ariaOrientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-orientation']
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        chips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatChip, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/chip-input.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Represents an input event on a `matChipInput`.
     * @record
     */


    function MatChipInputEvent() {}

    if (false) {} // Increasing integer for generating unique ids.

    /** @type {?} */


    var nextUniqueId$1 = 0;
    /**
     * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
     * May be placed inside or outside of an `<mat-chip-list>`.
     */

    var MatChipInput =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _defaultOptions
       */
      function MatChipInput(_elementRef, _defaultOptions) {
        _classCallCheck(this, MatChipInput);

        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /**
         * Whether the control is focused.
         */

        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */

        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /**
         * Emitted when a chip is to be added.
         */

        this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The input's placeholder text.
         */

        this.placeholder = '';
        /**
         * Unique id for the input.
         */

        this.id = "mat-chip-list-input-".concat(nextUniqueId$1++);
        this._disabled = false;
        this._inputElement =
        /** @type {?} */
        this._elementRef.nativeElement;
      }
      /**
       * Register input for chip list
       * @param {?} value
       * @return {?}
       */


      _createClass(MatChipInput, [{
        key: "ngOnChanges",

        /**
         * @return {?}
         */
        value: function ngOnChanges() {
          this._chipList.stateChanges.next();
        }
        /**
         * Utility method to make host definition/tests more clear.
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "_keydown",
        value: function _keydown(event) {
          // Allow the user's focus to escape when they're tabbing forward. Note that we don't
          // want to do this when going backwards, because focus should go back to the first chip.
          if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event, 'shiftKey')) {
            this._chipList._allowFocusEscape();
          }

          this._emitChipEnd(event);
        }
        /**
         * Checks to see if the blur should emit the (chipEnd) event.
         * @return {?}
         */

      }, {
        key: "_blur",
        value: function _blur() {
          if (this.addOnBlur) {
            this._emitChipEnd();
          }

          this.focused = false; // Blur the chip list if it is not focused

          if (!this._chipList.focused) {
            this._chipList._blur();
          }

          this._chipList.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_focus",
        value: function _focus() {
          this.focused = true;

          this._chipList.stateChanges.next();
        }
        /**
         * Checks to see if the (chipEnd) event needs to be emitted.
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "_emitChipEnd",
        value: function _emitChipEnd(event) {
          if (!this._inputElement.value && !!event) {
            this._chipList._keydown(event);
          }

          if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({
              input: this._inputElement,
              value: this._inputElement.value
            });

            if (event) {
              event.preventDefault();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onInput",
        value: function _onInput() {
          // Let chip list know whenever the value changes.
          this._chipList.stateChanges.next();
        }
        /**
         * Focuses the input.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._inputElement.focus(options);
        }
        /**
         * Checks whether a keycode is one of the configured separators.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_isSeparatorKey",
        value: function _isSeparatorKey(event) {
          if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event)) {
            return false;
          }
          /** @type {?} */


          var separators = this.separatorKeyCodes;
          /** @type {?} */

          var keyCode = event.keyCode;
          return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
        }
      }, {
        key: "chipList",
        set: function set(value) {
          if (value) {
            this._chipList = value;

            this._chipList.registerInput(this);
          }
        }
        /**
         * Whether or not the chipEnd event will be emitted when the input is blurred.
         * @return {?}
         */

      }, {
        key: "addOnBlur",
        get: function get() {
          return this._addOnBlur;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the input is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this._chipList && this._chipList.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the input is empty.
         * @return {?}
         */

      }, {
        key: "empty",
        get: function get() {
          return !this._inputElement.value;
        }
      }]);

      return MatChipInput;
    }();

    MatChipInput.ɵfac = function MatChipInput_Factory(t) {
      return new (t || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_CHIPS_DEFAULT_OPTIONS));
    };

    MatChipInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatChipInput,
      selectors: [["input", "matChipInputFor", ""]],
      hostAttrs: [1, "mat-chip-input", "mat-input-element"],
      hostVars: 5,
      hostBindings: function MatChipInput_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          })("blur", function MatChipInput_blur_HostBindingHandler() {
            return ctx._blur();
          })("focus", function MatChipInput_focus_HostBindingHandler() {
            return ctx._focus();
          })("input", function MatChipInput_input_HostBindingHandler() {
            return ctx._onInput();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
        }
      },
      inputs: {
        separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
        placeholder: "placeholder",
        id: "id",
        chipList: ["matChipInputFor", "chipList"],
        addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"],
        disabled: "disabled"
      },
      outputs: {
        chipEnd: "matChipInputTokenEnd"
      },
      exportAs: ["matChipInput", "matChipInputFor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    MatChipInput.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_CHIPS_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatChipInput.propDecorators = {
      chipList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matChipInputFor']
      }],
      addOnBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matChipInputAddOnBlur']
      }],
      separatorKeyCodes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matChipInputSeparatorKeyCodes']
      }],
      chipEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['matChipInputTokenEnd']
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'input[matChipInputFor]',
          exportAs: 'matChipInput, matChipInputFor',
          host: {
            'class': 'mat-chip-input mat-input-element',
            '(keydown)': '_keydown($event)',
            '(blur)': '_blur()',
            '(focus)': '_focus()',
            '(input)': '_onInput()',
            '[id]': 'id',
            '[attr.disabled]': 'disabled || null',
            '[attr.placeholder]': 'placeholder || null',
            '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
            '[attr.aria-required]': '_chipList && _chipList.required || null'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_CHIPS_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        separatorKeyCodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputSeparatorKeyCodes']
        }],
        chipEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['matChipInputTokenEnd']
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        chipList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputFor']
        }],
        addOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputAddOnBlur']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/chips-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var CHIP_DECLARATIONS = [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
    var ɵ0 = {
      separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]]
    };

    var MatChipsModule = function MatChipsModule() {
      _classCallCheck(this, MatChipsModule);
    };

    MatChipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatChipsModule
    });
    MatChipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatChipsModule_Factory(t) {
        return new (t || MatChipsModule)();
      },
      providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
        provide: MAT_CHIPS_DEFAULT_OPTIONS,
        useValue:
        /** @type {?} */
        ɵ0
      }]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatChipsModule, {
        declarations: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon],
        exports: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: CHIP_DECLARATIONS,
          declarations: CHIP_DECLARATIONS,
          providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue:
            /** @type {?} */
            ɵ0
          }]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=chips.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/compose-message/compose-message.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/compose-message/compose-message.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInboxComposeMessageComposeMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"broadcast-message-wrapper\">\n    <div class=\"card clear form-group\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">\n            <div class=\"\">\n                <h5>\n                    <span>Compose Mail</span>\n                </h5>\n                <div class=\"remainder\">\n                    <span>All fields with * are required.</span>\n                </div>\n            </div>\n            <ul class=\"list-inline float-right\">\n                <li class=\"list-inline-item\">\n                    <!-- <button class=\"btn blue mr-2\" (click)=\"ClearFormData()\">Cancel</button> -->\n                    <button class=\"btn blue mr-2\"\n                        (click)=\"submitCreateBroadcastMessageForm(createBroadcastMessageForm)\"\n                        [disabled]=\"createBroadcastMessageForm.invalid\">Submit</button>\n                </li>\n            </ul>\n        </div>\n        <div class=\"card-body p-0\">\n            <ng-container>\n                <form #createBroadcastMessageForm=\"ngForm\" name=\"createBroadcastMessageForm\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex plr-0 \">\n                            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 plr-0\" >\n                                <div class=\"row m-0 p-5 rowBorder\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"select-box\">\n                                            <label>Role Type</label>\n                                            <angular2-multiselect [data]=\"roleTypeArr.dropdownList\"\n                                                name=\"roleTypeDropDown\" [(ngModel)]=\"roleTypeArr.selectedItems\"\n                                                [settings]=\"roleTypedropdownSettings\"\n                                                (onSelect)=\"getAppartmentRole($event)\" (onDeSelect)=\"removeRole($event)\"\n                                                (onDeSelectAll)=\"removeRole($event)\"></angular2-multiselect>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"select-box\">\n                                            <label>Apartment Block</label>\n                                            <angular2-multiselect [data]=\"apartmentBlock.dropdownList\"\n                                                name=\"blockdropdown\" [(ngModel)]=\"apartmentBlock.selectedItems\"\n                                                [settings]=\"blockdropdownSettings\" (onSelect)=\"updateUsers()\"\n                                                (onDeSelect)=\"updateUsers()\" (onSelectAll)=\"updateUsers()\"\n                                                (onDeSelectAll)=\"removeDropdownItems('block')\"></angular2-multiselect>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"select-box\">\n                                            <label>Conditions</label>\n                                            <angular2-multiselect [data]=\"condition.dropdownList\"\n                                                name=\"conditiondropdown\" [(ngModel)]=\"condition.selectedItems\"\n                                                [settings]=\"roleDropdownSettings\" (onSelect)=\"updateUsers()\"\n                                                (onDeSelect)=\"updateUsers()\" (onSelectAll)=\"updateUsers()\"\n                                                (onDeSelectAll)=\"removeDropdownItems('condition')\">\n                                            </angular2-multiselect>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"select-box\">\n                                            <label>Role</label>\n                                            <angular2-multiselect [data]=\"roleCategory.dropdownList\" name=\"roleDropDown\"\n                                                [(ngModel)]=\"roleCategory.selectedItems\"\n                                                [settings]=\"roleDropdownSettings\"\n                                                (onSelect)=\"getstaffCategories($event)\"\n                                                (onDeSelect)=\"removeStaffCategories($event)\"\n                                                (onSelectAll)=\"getAllStaffCategories($event)\"\n                                                (onDeSelectAll)=\"removeAllStaffCategories($event)\">\n\n                                            </angular2-multiselect>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"select-box\">\n                                            <label>Broadcast Category<span class=\"mandatory\">*</span></label>\n                                            <angular2-multiselect [data]=\"broadCastCategory.dropdownList\"\n                                                name=\"broadcastDropDown\" [(ngModel)]=\"broadCastCategory.selectedItems\"\n                                                [settings]=\"broadCastdropdownSettings\" (onSelect)=\"categoryChange($event)\"\n                                                required></angular2-multiselect>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\" *ngIf=\"this.roleCategory.selectedItems.length>0 && isStaff\">\n                                        <div class=\"select-box\">\n                                            <label>Staff Category</label>\n                                            <angular2-multiselect [data]=\"staffCategory.dropdownList\"\n                                                name=\"staffDropDown\" [(ngModel)]=\"staffCategory.selectedItems\"\n                                                [settings]=\"dropdownSettings\" (onSelect)=\"getStaffSubCategories($event)\"\n                                                (onDeSelect)=\"removeSubStaffCategories($event)\"\n                                                (onSelectAll)=\"getAllSubStaffCategories($event)\"\n                                                (onDeSelectAll)=\"removeAllSubStaffCategories($event)\"\n                                                (onGroupDeSelect)=\"getGroupSubStaffCategories($event)\"\n                                                (onGroupSelect)=\"removeGroupSubStaffCategories($event)\">\n                                            </angular2-multiselect>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\" *ngIf=\"this.staffCategory.selectedItems.length>0\">\n                                        <div class=\"select-box\">\n                                            <label>Staff SubCategory</label>\n                                            <angular2-multiselect [data]=\"staffSubCategory.dropdownList\"\n                                                name=\"subStaffDropDown\" [(ngModel)]=\"staffSubCategory.selectedItems\"\n                                                [settings]=\"dropdownSettings\" (onSelect)=\"updateUsers()\"\n                                                (onDeSelect)=\"updateUsers()\" (onSelectAll)=\"updateUsers()\"\n                                                (onDeSelectAll)=\"updateUsers()\" (onGroupDeSelect)=\"updateUsers()\"\n                                                (onGroupSelect)=\"updateUsers()\"></angular2-multiselect>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 plr-0\">\n                                <div class=\"row m-0 p-5\">\n                                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\n                                        <label>Recipients</label>\n                                        <!-- <div class=\"col-sm-12 box\" *ngIf=\"IsBroadcast\">\n                                            <label *ngFor=\"let user of users\">\n                                                {{user.firstName+\" \"+user.middleName+\" \"+user.lastName+\",\"}}\n                                            </label>\n                                        </div>\n                                        <div class=\"col-sm-12 box\" *ngIf=\"!IsBroadcast\">\n                                            <label *ngFor=\"let user of AssignInterestUsers\">\n                                                {{user.userFullName +\",\"}}\n                                            </label>\n                                        </div> -->\n                                        <mat-form-field class=\"w-100\">\n                                            <mat-chip-list #receipt>\n                                              <mat-chip\n                                                *ngFor=\"let user of selectedReceipt\"\n                                                [selectable]=\"selectable\"\n                                                [removable]=\"removable\"\n                                                (removed)=\"remove(user)\">\n                                                {{user.firstName+\" \"+user.middleName+\" \"+user.lastName}}\n                                                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                                              </mat-chip>\n                                              <input\n                                                #receiptList\n                                                [formControl]=\"receiptCtrl\"\n                                                [matAutocomplete]=\"auto\"\n                                                [matChipInputFor]=\"receipt\"\n                                                (input)=\"filterItem(receiptList.value)\"\n                                                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\n                                            </mat-chip-list>\n                                            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n                                              <mat-option *ngFor=\"let user of users\" [value]=\"user.userId\">\n                                                {{user.firstName+\" \"+user.middleName+\" \"+user.lastName+\" \"+user.firstName+\" \"+user.middleName+\" \"+user.lastName}}\n                                              </mat-option>\n                                            </mat-autocomplete>\n                                          </mat-form-field>\n                                    </div>\n                                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\n                                        <div class=\"input-box\">\n                                            <label>Subject<span class=\"mandatory\">*</span></label>\n                                            <input type=\"text\" class=\"form-control form-group\" placeholder=\"Enter\"\n                                                name=\"subject\" [(ngModel)]=\"message.subject\" required>\n                                            <quill-editor class=\"quill-editor\" name=\"ckeditor\"\n                                                [placeholder]=\"editorPlacehorder\" [(ngModel)]=\"message.ckeditor\"\n                                                (onContentChanged)=\"onContentChanged($event)\" required>\n                                            </quill-editor>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\n                                       \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </form>\n            </ng-container>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/inbox-list/inbox-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/inbox-list/inbox-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInboxInboxListInboxListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <mat-card class=\"inbox  d-flex\">\n        <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-12 plr-0\">\n            <div class=\"inbox-list\">\n                <div class=\"inbox-head\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                            <div class=\"input-group-text\">\n                                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                            </div>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\"\n                            aria-label=\"Text input with checkbox\">\n                    </div>\n                </div>\n                <div class=\"inbox-content\">\n                    <mat-card class=\"inbox-main-content\" *ngFor=\"let item of [1,3,2,3,4,5,6,7,8,9,0];let i=index\" [ngClass]=\"{'active-inbox-list': i == 0}\" >\n                        <div class=\"content-name\">\n                            <span>Dharvesh Mydeen</span>\n                            <span>Jun 15 2020</span>\n                        </div>\n                        <div class=\"content-subject\">\n                            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting\n                            industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when\n                            an unknown printer took a galley of type and scrambled it to make a type specimen book it\n                            has\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-8 col-lg-8 col-sm-8 col-xs-12 plr-0\">\n            <div class=\"inbox-details\">\n                <div class=\"details-head\">\n                    <span>{{messageDate | date : 'medium'}}</span>\n                    <span>\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                        <i class=\"ml-4 fa fa-ellipsis-v\" aria-hidden=\"true\" [matMenuTriggerFor]=\"mail_options\"></i>\n                        <mat-menu #mail_options=\"matMenu\">\n                            <button mat-menu-item>Forward</button>\n                            <button mat-menu-item>Reply</button>\n                          </mat-menu>\n                    </span>\n                </div>\n                <div class=\"detail-address\">\n                    <img src=\"../../../../assets/images/img-users.jpg\" alt=\"\">\n                    <div>\n                        <span>Dharvesh Mydeen</span>\n                        <small>dharu@gmail.com</small>\n                    </div>\n                </div>\n                <div class=\"detail-subject\">\n                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting\n                    industry Lorem\n                </div>\n                <div class=\"detail-content\">\n                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting\n                    industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when\n                    an unknown printer took a galley of type and scrambled it to make a type specimen book it\n                    has\n                    <br>\n                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting\n                    industry Lorem\n                </div>\n                <div class=\"detail-attachment\">\n                    <div class=\"attach-head\">\n                        Attachement\n                    </div>\n                    <div class=\"attached-file\">\n                        <i class=\"fa fa-file-excel-o icon-excel mr-4\" title=\"excel.xlsx\" aria-hidden=\"true\"></i>\n                        <i class=\"fa fa-file-word-o icon-word mr-4\" aria-hidden=\"true\"></i>\n                        <i class=\"fa fa-file-pdf-o icon-pdf\" aria-hidden=\"true\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </mat-card>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/sent-list/sent-list.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/sent-list/sent-list.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInboxSentListSentListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>sent-list works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/trash/trash.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/trash/trash.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsInboxTrashTrashComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>trash works!</p>\n";
    /***/
  },

  /***/
  "./src/app/ams/inbox/compose-message/compose-message.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/ams/inbox/compose-message/compose-message.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInboxComposeMessageComposeMessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .ql-container {\n  height: 220px;\n}\n\n.broadcast-message-wrapper form input:required.ng-dirty.ng-invalid {\n  border: 1px solid #cccccc !important;\n}\n\n.broadcast-message-wrapper .remainder {\n  color: rgba(255, 0, 0, 0.8);\n  font-size: 10px;\n  padding: 5px 0px 0px 0px;\n  display: block;\n}\n\n.broadcast-message-wrapper .mandatory {\n  color: red;\n  font-size: 16px;\n}\n\n.broadcast-message-wrapper .nav-tabs .nav-item.show .nav-link, .broadcast-message-wrapper .nav-tabs .nav-link.active {\n  color: #0062cc;\n  background-color: transparent;\n  border-color: transparent transparent #f3f3f3;\n  border-bottom: 3px solid !important;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.broadcast-message-wrapper .tab-content > .active {\n  margin-top: 18px;\n}\n\n.broadcast-message-wrapper angular2-multiselect {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem !important;\n}\n\n.broadcast-message-wrapper .selected-list .c-list .c-token {\n  font-size: 1.2rem !important;\n}\n\n.broadcast-message-wrapper .c-btn {\n  font-size: 1.2rem !important;\n}\n\n.broadcast-message-wrapper .recipentsDiv {\n  margin-bottom: 10px;\n}\n\n.broadcast-message-wrapper .recipentsDiv .box {\n  border: 1px solid #ccc;\n  height: 150px;\n  overflow-y: auto;\n}\n\n.broadcast-message-wrapper .recipentsDiv .box label {\n  margin-right: 10px;\n}\n\n.rowBorder {\n  position: relative;\n}\n\n.rowBorder:after {\n  position: absolute;\n  content: \"\";\n  height: 90%;\n  width: 1px;\n  background-color: #cccccc;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5ib3gvY29tcG9zZS1tZXNzYWdlL2NvbXBvc2UtbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2luYm94L2NvbXBvc2UtbWVzc2FnZS9jb21wb3NlLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FDREo7O0FES0U7RUFDRSxvQ0FBQTtBQ0ZKOztBRElBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDRko7O0FESUE7RUFDRSxVQUFBO0VBQ0UsZUFBQTtBQ0ZKOztBRElFO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRElBO0VBQ0UsZ0JBQUE7QUNGRjs7QURJRTtFRThCQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VGaENNLDRCQUFBO0FDRVI7O0FEQ0k7RUFDRSw0QkFBQTtBQ0NOOztBREVJO0VBQ0UsNEJBQUE7QUNBTjs7QURFSTtFQUNFLG1CQUFBO0FDQU47O0FEQ007RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NSOztBREFRO0VBQ0Usa0JBQUE7QUNFVjs7QURNQTtFQUNJLGtCQUFBO0FDSEo7O0FESUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvYW1zL2luYm94L2NvbXBvc2UtbWVzc2FnZS9jb21wb3NlLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy9mb250cy5zY3NzXCI7XG5cbjo6bmctZGVlcCAucWwtY29udGFpbmVye1xuICAgIGhlaWdodDogMjIwcHg7XG59XG5cbi5icm9hZGNhc3QtbWVzc2FnZS13cmFwcGVye1xuICBmb3JtIGlucHV0OnJlcXVpcmVkLm5nLWRpcnR5Lm5nLWludmFsaWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2MgIWltcG9ydGFudDtcbn1cbi5yZW1haW5kZXJ7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbiAgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGNvbG9yOiAjMDA2MmNjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2YzZjNmMztcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGFiLWNvbnRlbnQ+LmFjdGl2ZSB7ICBcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbiAgYW5ndWxhcjItbXVsdGlzZWxlY3R7XG4gICAgICBAaW5jbHVkZSAgZGVzcC1yZWd1bGFyO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zZWxlY3RlZC1saXN0IC5jLWxpc3QgLmMtdG9rZW57XG4gICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jLWJ0bntcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yZWNpcGVudHNEaXZ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgLmJveHtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgICAgICBoZWlnaHQ6MTUwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICAgICAgbGFiZWx7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICBcbn1cblxuLnJvd0JvcmRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjphZnRlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgfVxufSIsIjo6bmctZGVlcCAucWwtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgZm9ybSBpbnB1dDpyZXF1aXJlZC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYyAhaW1wb3J0YW50O1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnJlbWFpbmRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLm1hbmRhdG9yeSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5icm9hZGNhc3QtbWVzc2FnZS13cmFwcGVyIC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5icm9hZGNhc3QtbWVzc2FnZS13cmFwcGVyIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICMwMDYyY2M7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmM2YzZjM7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnRhYi1jb250ZW50ID4gLmFjdGl2ZSB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG4uYnJvYWRjYXN0LW1lc3NhZ2Utd3JhcHBlciBhbmd1bGFyMi1tdWx0aXNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbn1cbi5icm9hZGNhc3QtbWVzc2FnZS13cmFwcGVyIC5zZWxlY3RlZC1saXN0IC5jLWxpc3QgLmMtdG9rZW4ge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLmMtYnRuIHtcbiAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbn1cbi5icm9hZGNhc3QtbWVzc2FnZS13cmFwcGVyIC5yZWNpcGVudHNEaXYge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmJyb2FkY2FzdC1tZXNzYWdlLXdyYXBwZXIgLnJlY2lwZW50c0RpdiAuYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5icm9hZGNhc3QtbWVzc2FnZS13cmFwcGVyIC5yZWNpcGVudHNEaXYgLmJveCBsYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnJvd0JvcmRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yb3dCb3JkZXI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICByaWdodDogMHB4O1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/ams/inbox/compose-message/compose-message.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/ams/inbox/compose-message/compose-message.component.ts ***!
    \************************************************************************/

  /*! exports provided: ComposeMessageComponent */

  /***/
  function srcAppAmsInboxComposeMessageComposeMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComposeMessageComponent", function () {
      return ComposeMessageComponent;
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


    var src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/Broadcast */
    "./src/app/api/controllers/Broadcast.ts");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Staff */
    "./src/app/api/controllers/Staff.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");

    var ComposeMessageComponent =
    /*#__PURE__*/
    function () {
      function ComposeMessageComponent(broadcastService, sharedService, cookieService, userService, staffService, apartmentService, injector) {
        _classCallCheck(this, ComposeMessageComponent);

        this.broadcastService = broadcastService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.userService = userService;
        this.staffService = staffService;
        this.apartmentService = apartmentService;
        this.injector = injector;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["COMMA"]];
        this.receiptCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.selectedReceipt = [];
        this.dropdownSettings = {};
        this.blockdropdownSettings = {};
        this.roleTypedropdownSettings = {};
        this.broadCastdropdownSettings = {};
        this.groupCategorySetting = {};
        this.roleDropdownSettings = {};
        this.staffCategoryMap = new Map();
        this.staffSubCategoryMap = new Map();
        this.rawSelectedUsers = [];
        this.roleTypeArr = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.roleCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.staffCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.staffSubCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.broadCastCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.apartmentBlock = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.condition = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.broadModeArr = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.broadCastGroupCategory = {
          "dropdownList": [],
          "selectedItems": []
        };
        this.allBroadcastMessageGroup = [];
        this.isFlashNotice = false;
        this.editorPlacehorder = "";
        this.filterOptions = {
          "roleids": "",
          "ApartmentId": 0,
          "blockids": "",
          "keyword": ""
        };
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
      }

      _createClass(ComposeMessageComponent, [{
        key: "onContentChanged",
        value: function onContentChanged(event) {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.message = {};
          this.IsBroadcast = true;
          this.loginedUser = parseInt(this.cookieService.get('userId'));
          this.apartmentID = parseInt(this.cookieService.get('apartmentId'));
          this.getAllUsers();
          this.getAllCategory();
          this.getAllRoleTypesList();
          this.getAllApartmentBlockList();
          this.getAllGroupCategory();
          this.getInterestGroupUsers();
          this.getAllInterestGroupUser();
          this.groupCategorySetting = {
            singleSelection: true,
            enableSearchFilter: true,
            labelKey: 'groupName',
            primaryKey: 'broadCastGroupCategoryId',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.dropdownSettings = {
            singleSelection: false,
            enableSearchFilter: true,
            labelKey: 'name',
            primaryKey: 'value',
            groupBy: "category",
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.roleDropdownSettings = {
            singleSelection: false,
            enableSearchFilter: true,
            labelKey: 'name',
            primaryKey: 'value',
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.blockdropdownSettings = {
            singleSelection: false,
            primaryKey: 'apartmentBlockId',
            labelKey: 'apartmentBlockNumber',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.roleTypedropdownSettings = {
            singleSelection: true,
            primaryKey: 'value',
            labelKey: 'name',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.broadCastdropdownSettings = {
            singleSelection: true,
            primaryKey: 'broadCastMessageCategoryId',
            labelKey: 'broadCastMessageCategory1',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
          };
          this.selectedTab = 'role';
        }
      }, {
        key: "currentTab",
        value: function currentTab(item) {
          this.selectedTab = item;

          if (this.selectedTab == 'interest') {
            // this.users=[];
            this.IsBroadcast = false;

            if (this.broadCastGroupCategory.selectedItems.length > 0) {
              this.selectInterestGroup(this.broadCastGroupCategory.selectedItems[0]);
            } else {
              this.users = [];
            }
          }

          if (this.selectedTab == 'role') {
            this.updateUsers();
            this.IsBroadcast = true;
          }
        }
      }, {
        key: "getAllInterestGroupUser",
        value: function getAllInterestGroupUser() {
          var _this16 = this;

          this.filterOptions.ApartmentId = this.apartmentID;
          this.userService.getUsersByKeyword(this.filterOptions).subscribe(function (res) {
            res.forEach(function (element) {
              element.userFullName = element.userName + " " + element.roleName + " " + element.apartmentBlockNumber + " " + element.apartmentBlockUnitNumber;
            });
            _this16.allnterestGroupUsers = res;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          var _this17 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.userService.getUsersByApartmentId(queryParamBase).subscribe(function (res) {
            res.forEach(function (element) {
              element.userFullName = element.userName + " " + element.roleName + " " + element.apartmentBlockNumber + " " + element.apartmentBlockUnitNumber;
            });
            _this17.allUsers = res;

            _this17.updateUsers();
          });
        }
      }, {
        key: "selectInterestGroup",
        value: function selectInterestGroup(item) {
          var categoryUsers = this.interestGroupUsers.filter(function (obj) {
            return obj.broadCastGroupCategoryId == item.broadCastGroupCategoryId;
          });
          var tempAssignUsers = [];

          var tempUsers = _toConsumableArray(this.allnterestGroupUsers);

          categoryUsers.forEach(function (element) {
            tempUsers.forEach(function (obj) {
              var isFound = obj.userId == element.userId && obj.roleID == element.roleId && obj.apartmentBlockID == element.apartmentBlockId && obj.apartmentBlockUnitID == element.unitId;

              if (isFound) {
                tempAssignUsers.push(obj);
              }
            });
          });
          this.AssignInterestUsers = [].concat(tempAssignUsers);
        }
      }, {
        key: "removeInterestGroup",
        value: function removeInterestGroup(item) {
          this.AssignInterestUsers = [];
        } //broadCastGroupCategoryId

      }, {
        key: "flashNotice",
        value: function flashNotice(bool) {
          this.isFlashNotice = bool;
        }
      }, {
        key: "categoryChange",
        value: function categoryChange(item) {
          var id = parseInt(item.broadCastMessageCategoryId);
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.allcategory, function (item) {
            if (item.broadCastMessageCategoryId === id) return item;
          });

          if (data === undefined || data === null || data.length == 0) {
            this.message.ckeditor = '';
          } else {
            this.message.ckeditor = data[0].template;
          }
        }
      }, {
        key: "getAllApartmentBlockList",
        value: function getAllApartmentBlockList() {
          var _this18 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.apartmentService.getApartmentBlockByApartmentId(queryParamBase).subscribe(function (res) {
            _this18.apartmentBlock.dropdownList = res;
            var broadCastModeArr = [{
              "name": "General SMS",
              "value": 40
            }, {
              "name": "Whatsapp",
              "value": 41
            }, {
              "name": "Email",
              "value": 42
            }];
            _this18.broadModeArr.dropdownList = broadCastModeArr;
          });
        } //Get All Broadcast Category
        //Get All Broadcast Category

      }, {
        key: "getAllCategory",
        value: function getAllCategory() {
          var _this19 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getBroadCastMessageCategories(queryParamBase).subscribe(function (res) {
            var allBroadCastCategory = res.filter(function (obj) {
              return obj.isActive;
            });
            _this19.allcategory = allBroadCastCategory;
            _this19.broadCastCategory.dropdownList = allBroadCastCategory;
          });
        }
      }, {
        key: "getAllRoleTypesList",
        value: function getAllRoleTypesList() {
          var _this20 = this;

          this.userService.getAllRoleTypes().subscribe(function (res) {
            _this20.roleTypeArr.dropdownList = res;
          });
        }
      }, {
        key: "getAppartmentRole",
        value: function getAppartmentRole(item) {
          var _this21 = this;

          this.roleCategory.selectedItems = [];
          this.staffCategory.selectedItems = [];
          var params = {
            'RoleTypeId': item.value,
            'ApartmentId': this.apartmentID
          };
          this.userService.getApartmentRolesByRoleTypeId(params).subscribe(function (res) {
            _this21.condtionRequired = parseInt(item.value) == 2 || parseInt(item.value) == 4;
            ;
            _this21.roleCategory.dropdownList = res;
            var conditinArr = [{
              "name": "IsLiving",
              "value": 1
            }, {
              "name": "IsPrimaryContact",
              "value": 2
            }];

            if (_this21.condtionRequired) {
              _this21.condition.dropdownList = conditinArr;
            } else {
              _this21.condition.dropdownList = [];
              _this21.condition.selectedItems = [];
            }

            _this21.updateUsers();
          });
        }
      }, {
        key: "updateUsers",
        value: function updateUsers() {
          var _this22 = this;

          //this.tempUsers=[...this.allUsers];
          this.getUserIds$().subscribe(function (res) {
            if (res.length > 0) {
              _this22.users = _this22.allUsers.filter(function (obj) {
                return res.includes(obj.userId);
              });
              _this22.rawSelectedUsers = JSON.parse(JSON.stringify(_this22.users));
            } else {
              _this22.users = [];
            }
          });
        }
      }, {
        key: "getAllGroupCategory",
        value: function getAllGroupCategory() {
          var _this23 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getAllBroadCastGroupCategory(queryParamBase).subscribe(function (res) {
            _this23.broadCastGroupCategory.dropdownList = res;
          });
        }
      }, {
        key: "getInterestGroupUsers",
        value: function getInterestGroupUsers() {
          var _this24 = this;

          var queryParamBase = {
            apartmentId: this.apartmentID
          };
          this.broadcastService.getBroadCastGroupCategoryUser(queryParamBase).subscribe(function (res) {
            _this24.interestGroupUsers = res;
          });
        }
      }, {
        key: "getstaffCategories",
        value: function getstaffCategories(item) {
          var _this25 = this;

          this.isStaff = this.roleTypeArr.selectedItems[0].name.toLowerCase() == "staff";

          if (this.isStaff) {
            if (this.staffCategoryMap.get(item.value) == undefined) {
              var params = {
                'roleId': item.value,
                'apartmentId': this.apartmentID
              };
              this.staffService.getStaffCategoryByRole(params).subscribe(function (res) {
                var temp = _toConsumableArray(_this25.staffCategory.dropdownList);

                res.forEach(function (element) {
                  element.category = item.name;
                  temp.push(element);
                });

                _this25.staffCategoryMap.set(item.value, res);

                _this25.staffCategory.dropdownList = temp;

                _this25.updateUsers();
              });
            } else {
              var temp = _toConsumableArray(this.staffCategory.dropdownList);

              var addStaffCategory = this.staffCategoryMap.get(item.value);
              addStaffCategory.forEach(function (element) {
                temp.push(element);
              });
              this.staffCategory.dropdownList = temp;
            }
          }

          this.updateUsers();
        }
      }, {
        key: "getAllStaffCategories",
        value: function getAllStaffCategories(items) {
          var _this26 = this;

          items.forEach(function (element) {
            _this26.getstaffCategories(element);
          });
        }
      }, {
        key: "removeAllStaffCategories",
        value: function removeAllStaffCategories(items) {
          this.roleCategory.selectedItems = [];
          this.staffCategory.dropdownList = [];
          this.staffCategory.selectedItems = [];
          this.updateUsers();
        }
      }, {
        key: "removeStaffCategories",
        value: function removeStaffCategories(item) {
          var _this27 = this;

          if (this.roleTypeArr.selectedItems[0].name.toLowerCase() == "staff") {
            var removeStaffCategory = this.staffCategoryMap.get(item.value);
            removeStaffCategory.forEach(function (element) {
              _this27.staffCategory.dropdownList = _this27.staffCategory.dropdownList.filter(function (obj) {
                return obj.value !== element.value;
              });
            });
          }

          this.updateUsers();
        }
      }, {
        key: "removeSubStaffCategories",
        value: function removeSubStaffCategories(item) {
          var _this28 = this;

          var removeSubStaffCategory = this.staffSubCategoryMap.get(item.value);
          removeSubStaffCategory.forEach(function (element) {
            _this28.staffSubCategory.dropdownList = _this28.staffSubCategory.dropdownList.filter(function (obj) {
              return obj.value !== element.value;
            });
          });
          this.updateUsers();
        }
      }, {
        key: "getStaffSubCategories",
        value: function getStaffSubCategories(item) {
          var _this29 = this;

          if (this.staffSubCategoryMap.get(item.value) == undefined) {
            var params = {
              'categoryId': item.value,
              'apartmentId': this.apartmentID
            };
            this.staffService.getSubStaffCategoryByCategory(params).subscribe(function (res) {
              var temp = _toConsumableArray(_this29.staffSubCategory.dropdownList);

              res.forEach(function (element) {
                element.category = item.name;
                temp.push(element);
              });

              _this29.staffSubCategoryMap.set(item.value, res);

              _this29.staffSubCategory.dropdownList = temp;

              _this29.updateUsers();
            });
          } else {
            var addSubStaffCategory = this.staffSubCategoryMap.get(item.value);

            var temp = _toConsumableArray(this.staffSubCategory.dropdownList);

            addSubStaffCategory.forEach(function (element) {
              temp.push(element);
            });
            this.staffSubCategory.dropdownList = temp;
            this.updateUsers();
          }
        }
      }, {
        key: "getAllSubStaffCategories",
        value: function getAllSubStaffCategories(items) {
          var _this30 = this;

          items.forEach(function (element) {
            _this30.getStaffSubCategories(element);
          });
        }
      }, {
        key: "removeRole",
        value: function removeRole(item) {
          this.roleCategory.dropdownList = [];
          this.condition.dropdownList = [];
          this.condition.selectedItems = [];
          this.removeAllStaffCategories([]);
          this.removeAllSubStaffCategories([]);
        }
      }, {
        key: "removeAllSubStaffCategories",
        value: function removeAllSubStaffCategories(items) {
          this.staffSubCategory.dropdownList = [];
          this.staffCategory.selectedItems = [];
          this.updateUsers();
        }
      }, {
        key: "removeGroupSubStaffCategories",
        value: function removeGroupSubStaffCategories(items) {
          var _this31 = this;

          items.list.forEach(function (element) {
            _this31.removeSubStaffCategories(element);
          });
          this.updateUsers();
        }
      }, {
        key: "getGroupSubStaffCategories",
        value: function getGroupSubStaffCategories(items) {
          var _this32 = this;

          items.list.forEach(function (element) {
            _this32.getStaffSubCategories(element);
          });
          this.updateUsers();
        }
      }, {
        key: "getUserIds$",
        value: function getUserIds$() {
          var roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) {
            return item.apartmentBlockId;
          }).join(",");
          var conditionIds = Array.prototype.map.call(this.condition.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var staffcategoryIds = Array.prototype.map.call(this.staffCategory.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var staffSubCategoryIds = Array.prototype.map.call(this.staffSubCategory.selectedItems, function (item) {
            return item.value;
          }).join(",");
          var params = {
            'roleIds': roleIds,
            'conditionIds': conditionIds,
            'appartmentbBlockIds': blockIds,
            'apartmentId': this.apartmentID,
            'staffcategoryIds': staffcategoryIds,
            'staffSubCategoryIds': staffSubCategoryIds
          };
          return this.userService.getUsersByFilter(params);
        } //Submit Category

      }, {
        key: "submitCreateBroadcastMessageForm",
        value: function submitCreateBroadcastMessageForm(form) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this33 = this;

            var broadCastGroupCategoryIDs, broadcastModeIds, broadcastMessage, params, roleIds, blockIds, conditionIds, staffcategoryIds, staffSubCategoryIds, roleTypeIds, _params, params2;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    broadCastGroupCategoryIDs = Array.prototype.map.call(this.broadCastGroupCategory.selectedItems, function (item) {
                      return item.broadCastGroupCategoryId;
                    }).join(",");
                    broadcastModeIds = Array.prototype.map.call(this.broadModeArr.selectedItems, function (item) {
                      return item.value;
                    }).join(",");
                    broadcastMessage = {
                      "broadCastMessageId": 0,
                      "apartmentId": this.apartmentID,
                      "subject": this.message.subject,
                      "broadcastMessage1": this.message.ckeditor,
                      "broadcastBy": this.loginedUser,
                      "broadcastOn": new Date().toISOString(),
                      "broadcastMessageCategoryId": 0,
                      "broadcastModeIds": broadcastModeIds,
                      "broadCastGroupcategoryId": null,
                      "userIds": null,
                      "isReadAllowed": false,
                      "isLater": true,
                      "laterDate": null,
                      "isFlashNotice": this.isFlashNotice,
                      "isActive": true,
                      "insertedBy": this.loginedUser,
                      "insertedOn": new Date().toISOString(),
                      "updatedBy": null,
                      "updatedOn": null,
                      "serialNo": 0,
                      "description": "",
                      "filterId": null
                    };

                    if (this.selectedTab == 'interest') {
                      broadcastMessage.broadCastGroupcategoryId = parseInt(broadCastGroupCategoryIDs);
                      broadcastMessage.broadcastMessageCategoryId = null;
                      broadcastMessage.userIds = Array.prototype.map.call(this.AssignInterestUsers, function (item) {
                        return item.userId;
                      }).join(",");

                      if (broadcastMessage.userIds.length == 0) {
                        this.modalService.showErrorModal("No such Users exists to broadcast message.");
                      } else {
                        params = {
                          "sourceBroadCastMessage_model": broadcastMessage
                        };
                        this.broadcastService.addBroadCastMessage(params).subscribe(function (res) {
                          if (res.message) {
                            _this33.sharedService.setAlertMessage("Broadcast Message sent successfully");

                            _this33.ClearFormData();
                          }
                        });
                      }
                    }

                    if (this.selectedTab == 'role') {
                      broadcastMessage.userIds = Array.prototype.map.call(this.users, function (item) {
                        return item.userId;
                      }).join(",");
                      broadcastMessage.broadcastMessageCategoryId = this.broadCastCategory.selectedItems[0].broadCastMessageCategoryId;
                      broadcastMessage.broadCastGroupcategoryId = null;
                      roleIds = Array.prototype.map.call(this.roleCategory.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      blockIds = Array.prototype.map.call(this.apartmentBlock.selectedItems, function (item) {
                        return item.apartmentBlockId;
                      }).join(",");
                      conditionIds = Array.prototype.map.call(this.condition.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      staffcategoryIds = Array.prototype.map.call(this.staffCategory.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      staffSubCategoryIds = Array.prototype.map.call(this.staffSubCategory.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      roleTypeIds = Array.prototype.map.call(this.roleTypeArr.selectedItems, function (item) {
                        return item.value;
                      }).join(",");
                      _params = {
                        'filterId': 0,
                        'roleIds': roleIds,
                        'conditions': conditionIds,
                        'appartmentbBlockIds': blockIds,
                        'apartmentId': this.apartmentID,
                        'staffCategoryIds': staffcategoryIds,
                        'subStaffCategoryIds': staffSubCategoryIds,
                        "insertedBy": this.loginedUser,
                        "insertedOn": new Date().toISOString(),
                        "updatedBy": null,
                        "updatedOn": null,
                        'isActive': true,
                        'roleTypeId': roleTypeIds
                      };
                      params2 = {
                        "broadCastFilters_model": _params
                      };
                      this.broadcastService.upsertBroadCastFilters(params2).subscribe(function (res) {
                        broadcastMessage.filterId = parseInt(res.message);

                        if (broadcastMessage.userIds.length == 0) {
                          _this33.modalService.showErrorModal("No such Users exists to broadcast message.");
                        } else {
                          var _params2 = {
                            "sourceBroadCastMessage_model": broadcastMessage
                          };

                          _this33.broadcastService.addBroadCastMessage(_params2).subscribe(function (res) {
                            if (res.message) {
                              _this33.sharedService.setAlertMessage("Broadcast Message sent successfully");

                              _this33.ClearFormData();
                            }
                          });
                        }
                      }); // .subscribe((res)=>{
                      //       broadcastMessage.filterId=parseInt(res);
                      //                   }).toPromise();
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "removeDropdownItems",
        value: function removeDropdownItems(type) {
          if (type == "block") {
            this.apartmentBlock.selectedItems = [];
          }

          if (type == "condition") {
            this.condition.selectedItems = [];
          }

          this.updateUsers();
        }
      }, {
        key: "ClearFormData",
        value: function ClearFormData() {
          this.message = {};
          this.roleTypeArr.selectedItems = [];
          this.broadCastCategory.selectedItems = [];
          this.apartmentBlock.selectedItems = [];
          this.broadModeArr.selectedItems = [];
          this.broadCastGroupCategory.selectedItems = [];
          this.removeRole([]);

          if (this.selectedTab == 'role') {
            this.users = _toConsumableArray(this.allUsers);
          }

          if (this.selectedTab == 'interest') {
            this.AssignInterestUsers = [];
          }
        }
      }, {
        key: "selected",
        value: function selected(event) {
          var _this34 = this;

          console.log(event, event.option.value);
          this.users.filter(function (key) {
            if (key.userId == event.option.value) {
              _this34.selectedReceipt.push(key);
            }
          });
          this.receiptList.nativeElement.value = '';
          this.receiptCtrl.setValue(null);
        }
      }, {
        key: "remove",
        value: function remove(user) {
          var index = this.selectedReceipt.indexOf(user);

          if (index >= 0) {
            this.selectedReceipt.splice(index, 1);
          }
        }
      }, {
        key: "filterItem",
        value: function filterItem(value) {
          if (!value) {
            // this.getTodoList();
            this.users = this.rawSelectedUsers;
          }

          this.users = Object.assign([], this.rawSelectedUsers).filter(function (item) {
            return item.firstName.toLowerCase().indexOf(value.toLowerCase()) > -1;
          });
        }
      }]);

      return ComposeMessageComponent;
    }();

    ComposeMessageComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"]
      }, {
        type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__["StaffService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_7__["ApartmentService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('receiptList'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ComposeMessageComponent.prototype, "receiptList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"])], ComposeMessageComponent.prototype, "matAutocomplete", void 0);
    ComposeMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-compose-message',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./compose-message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/compose-message/compose-message.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./compose-message.component.scss */
      "./src/app/ams/inbox/compose-message/compose-message.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Broadcast__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__["StaffService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_7__["ApartmentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], ComposeMessageComponent);
    /***/
  },

  /***/
  "./src/app/ams/inbox/inbox-list/inbox-list.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/ams/inbox/inbox-list/inbox-list.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInboxInboxListInboxListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inbox {\n  width: 100%;\n  padding: 0px;\n  border: 1px solid #dadada;\n  border-radius: 4px;\n  box-shadow: none;\n}\n.inbox .inbox-list {\n  width: 100%;\n  padding: 12px;\n  background-color: #fbfbfb;\n  border-radius: 6px;\n}\n.inbox .inbox-list .inbox-head .input-group-prepend .input-group-text {\n  background-color: white;\n}\n.inbox .inbox-list .inbox-head .input-group-prepend .input-group-text > i {\n  font-size: 16px;\n  color: #9E9E9E;\n}\n.inbox .inbox-list .inbox-content {\n  max-height: calc(100vh - 185px);\n  overflow: auto;\n  margin-top: 12px;\n}\n.inbox .inbox-list .inbox-content .active-inbox-list {\n  background-color: #673ab7 !important;\n}\n.inbox .inbox-list .inbox-content .active-inbox-list .content-name span {\n  color: #ffffff !important;\n}\n.inbox .inbox-list .inbox-content .active-inbox-list .content-subject {\n  color: #ffffff !important;\n}\n.inbox .inbox-list .inbox-content .inbox-main-content {\n  border-bottom: 1px solid #dadada;\n  background: transparent;\n  box-shadow: none;\n  padding: 12px;\n  font-family: \"Montserrat\", sans-serif;\n}\n.inbox .inbox-list .inbox-content .inbox-main-content:hover, .inbox .inbox-list .inbox-content .inbox-main-content:active {\n  background-color: #673ab7;\n}\n.inbox .inbox-list .inbox-content .inbox-main-content:hover .content-name span, .inbox .inbox-list .inbox-content .inbox-main-content:active .content-name span {\n  color: #ffffff;\n}\n.inbox .inbox-list .inbox-content .inbox-main-content:hover .content-subject, .inbox .inbox-list .inbox-content .inbox-main-content:active .content-subject {\n  color: #ffffff;\n}\n.inbox .inbox-list .inbox-content .inbox-main-content .content-name {\n  display: flex;\n  justify-content: space-between;\n}\n.inbox .inbox-list .inbox-content .inbox-main-content .content-name span {\n  color: #a5a2a2;\n}\n.inbox .inbox-list .inbox-content .inbox-main-content .content-name span:first-child {\n  font-size: 14px;\n}\n.inbox .inbox-list .inbox-content .inbox-main-content .content-name span:last-child {\n  font-size: 13px;\n}\n.inbox .inbox-list .inbox-content .inbox-main-content .content-subject {\n  margin-top: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000000;\n}\n.inbox .inbox-details {\n  width: 100%;\n  padding: 24px 12px;\n}\n.inbox .inbox-details .details-head {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px;\n}\n.inbox .inbox-details .details-head span {\n  color: #a5a2a2;\n  font-size: 14px;\n}\n.inbox .inbox-details .details-head span i {\n  font-size: 18px;\n}\n.inbox .inbox-details .detail-address {\n  width: 100%;\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 12px;\n}\n.inbox .inbox-details .detail-address > img {\n  width: 60px;\n  height: 56px;\n  border-radius: 8px;\n}\n.inbox .inbox-details .detail-address > div {\n  margin-left: 20px;\n  font-family: \"Montserrat\", sans-serif;\n  display: flex;\n  flex-direction: column;\n}\n.inbox .inbox-details .detail-address > div > span {\n  font-size: 16px;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #000000;\n  font-weight: 600;\n}\n.inbox .inbox-details .detail-address > div > small {\n  font-size: 12px;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #a5a2a2;\n}\n.inbox .inbox-details .detail-subject {\n  padding: 12px;\n  width: 100%;\n  font-family: \"Montserrat\", sans-serif;\n  color: #000000;\n  font-weight: 600;\n  font-size: 22px;\n  margin-top: 12px;\n}\n.inbox .inbox-details .detail-content {\n  padding: 12px;\n  width: 100%;\n  font-family: \"Montserrat\", sans-serif;\n  color: #a5a2a2;\n  font-size: 14px;\n}\n.inbox .inbox-details .detail-attachment {\n  padding: 12px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  margin-bottom: 12px;\n}\n.inbox .inbox-details .detail-attachment .attach-head {\n  color: #716d6d;\n  font-weight: 600;\n  font-size: 16px;\n  position: relative;\n  font-family: \"Montserrat\", sans-serif;\n}\n.inbox .inbox-details .detail-attachment .attach-head:after {\n  position: absolute;\n  content: \"\";\n  height: 1px;\n  width: 80%;\n  border-bottom: 1px solid #dadada;\n  right: 30px;\n  top: 12px;\n}\n.inbox .inbox-details .detail-attachment .attached-file {\n  margin-top: 12px;\n}\n.inbox .inbox-details .detail-attachment .attached-file i {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5ib3gvaW5ib3gtbGlzdC9pbmJveC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvaW5ib3gvaW5ib3gtbGlzdC9pbmJveC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRVI7QURDZ0I7RUFDSSx1QkFBQTtBQ0NwQjtBREFvQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRXhCO0FER1E7RUFDSSwrQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZaO0FER1k7RUFDSSxvQ0FBQTtBQ0RoQjtBREdvQjtFQUNJLHlCQUFBO0FDRHhCO0FESWdCO0VBQ0kseUJBQUE7QUNGcEI7QURLWTtFQUNJLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtBQ0hoQjtBRElnQjtFQUNJLHlCQUFBO0FDRnBCO0FESXdCO0VBQ0ksY0FBQTtBQ0Y1QjtBREtvQjtFQUNJLGNBQUE7QUNIeEI7QURNZ0I7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNKcEI7QURLb0I7RUFDSSxjQUFBO0FDSHhCO0FESXdCO0VBQ0ksZUFBQTtBQ0Y1QjtBREl3QjtFQUNJLGVBQUE7QUNGNUI7QURNZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNKcEI7QURTSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEUVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDTlo7QURPWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDTGhCO0FETWdCO0VBQ0ksZUFBQTtBQ0pwQjtBRFFRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDTlo7QURPWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMaEI7QURPWTtFQUNJLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNMaEI7QURNZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0pwQjtBRE1nQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0pwQjtBRFFRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ05aO0FEUVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNOWjtBRFFRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ05aO0FET1k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQ0xoQjtBRE1nQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0pwQjtBRE9ZO0VBQ0ksZ0JBQUE7QUNMaEI7QURNZ0I7RUFDSSxlQUFBO0FDSnBCIiwiZmlsZSI6InNyYy9hcHAvYW1zL2luYm94L2luYm94LWxpc3QvaW5ib3gtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAuaW5ib3gtbGlzdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgLmluYm94LWhlYWR7XG4gICAgICAgICAgICAuaW5wdXQtZ3JvdXAtcHJlcGVuZHtcbiAgICAgICAgICAgICAgICAuaW5wdXQtZ3JvdXAtdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgID5pe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5RTlFOUU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmluYm94LWNvbnRlbnR7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTg1cHgpO1xuICAgICAgICAgICAgLy8gbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE4NXB4KTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgIC5hY3RpdmUtaW5ib3gtbGlzdHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtbmFtZXtcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC1zdWJqZWN0e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbmJveC1tYWluLWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWRhZGE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAmOmhvdmVyLCY6YWN0aXZle1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1uYW1le1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXN1YmplY3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC1uYW1le1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojYTVhMmEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50LXN1YmplY3R7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5pbmJveC1kZXRhaWxze1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMjRweCAxMnB4O1xuICAgICAgICAuZGV0YWlscy1oZWFke1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTVhMmEyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBpe1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWwtYWRkcmVzc3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgID5pbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5kaXZ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICA+c3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+c21hbGx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2E1YTJhMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbC1zdWJqZWN0e1xuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlsLWNvbnRlbnR7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogI2E1YTJhMjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlsLWF0dGFjaG1lbnR7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICAgICAgLmF0dGFjaC1oZWFke1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzE2ZDZkO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWRhZGE7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmF0dGFjaGVkLWZpbGV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgICAgICBpe1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5pbmJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5pbmJveCAuaW5ib3gtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uaW5ib3ggLmluYm94LWxpc3QgLmluYm94LWhlYWQgLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5pbmJveCAuaW5ib3gtbGlzdCAuaW5ib3gtaGVhZCAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCA+IGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjOUU5RTlFO1xufVxuLmluYm94IC5pbmJveC1saXN0IC5pbmJveC1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE4NXB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uaW5ib3ggLmluYm94LWxpc3QgLmluYm94LWNvbnRlbnQgLmFjdGl2ZS1pbmJveC1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNyAhaW1wb3J0YW50O1xufVxuLmluYm94IC5pbmJveC1saXN0IC5pbmJveC1jb250ZW50IC5hY3RpdmUtaW5ib3gtbGlzdCAuY29udGVudC1uYW1lIHNwYW4ge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuLmluYm94IC5pbmJveC1saXN0IC5pbmJveC1jb250ZW50IC5hY3RpdmUtaW5ib3gtbGlzdCAuY29udGVudC1zdWJqZWN0IHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbi5pbmJveCAuaW5ib3gtbGlzdCAuaW5ib3gtY29udGVudCAuaW5ib3gtbWFpbi1jb250ZW50IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWRhZGE7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4uaW5ib3ggLmluYm94LWxpc3QgLmluYm94LWNvbnRlbnQgLmluYm94LW1haW4tY29udGVudDpob3ZlciwgLmluYm94IC5pbmJveC1saXN0IC5pbmJveC1jb250ZW50IC5pbmJveC1tYWluLWNvbnRlbnQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbn1cbi5pbmJveCAuaW5ib3gtbGlzdCAuaW5ib3gtY29udGVudCAuaW5ib3gtbWFpbi1jb250ZW50OmhvdmVyIC5jb250ZW50LW5hbWUgc3BhbiwgLmluYm94IC5pbmJveC1saXN0IC5pbmJveC1jb250ZW50IC5pbmJveC1tYWluLWNvbnRlbnQ6YWN0aXZlIC5jb250ZW50LW5hbWUgc3BhbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmluYm94IC5pbmJveC1saXN0IC5pbmJveC1jb250ZW50IC5pbmJveC1tYWluLWNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtc3ViamVjdCwgLmluYm94IC5pbmJveC1saXN0IC5pbmJveC1jb250ZW50IC5pbmJveC1tYWluLWNvbnRlbnQ6YWN0aXZlIC5jb250ZW50LXN1YmplY3Qge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pbmJveCAuaW5ib3gtbGlzdCAuaW5ib3gtY29udGVudCAuaW5ib3gtbWFpbi1jb250ZW50IC5jb250ZW50LW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaW5ib3ggLmluYm94LWxpc3QgLmluYm94LWNvbnRlbnQgLmluYm94LW1haW4tY29udGVudCAuY29udGVudC1uYW1lIHNwYW4ge1xuICBjb2xvcjogI2E1YTJhMjtcbn1cbi5pbmJveCAuaW5ib3gtbGlzdCAuaW5ib3gtY29udGVudCAuaW5ib3gtbWFpbi1jb250ZW50IC5jb250ZW50LW5hbWUgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pbmJveCAuaW5ib3gtbGlzdCAuaW5ib3gtY29udGVudCAuaW5ib3gtbWFpbi1jb250ZW50IC5jb250ZW50LW5hbWUgc3BhbjpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmluYm94IC5pbmJveC1saXN0IC5pbmJveC1jb250ZW50IC5pbmJveC1tYWluLWNvbnRlbnQgLmNvbnRlbnQtc3ViamVjdCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uaW5ib3ggLmluYm94LWRldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjRweCAxMnB4O1xufVxuLmluYm94IC5pbmJveC1kZXRhaWxzIC5kZXRhaWxzLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEycHg7XG59XG4uaW5ib3ggLmluYm94LWRldGFpbHMgLmRldGFpbHMtaGVhZCBzcGFuIHtcbiAgY29sb3I6ICNhNWEyYTI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pbmJveCAuaW5ib3gtZGV0YWlscyAuZGV0YWlscy1oZWFkIHNwYW4gaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5pbmJveCAuaW5ib3gtZGV0YWlscyAuZGV0YWlsLWFkZHJlc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmluYm94IC5pbmJveC1kZXRhaWxzIC5kZXRhaWwtYWRkcmVzcyA+IGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5pbmJveCAuaW5ib3gtZGV0YWlscyAuZGV0YWlsLWFkZHJlc3MgPiBkaXYge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmluYm94IC5pbmJveC1kZXRhaWxzIC5kZXRhaWwtYWRkcmVzcyA+IGRpdiA+IHNwYW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaW5ib3ggLmluYm94LWRldGFpbHMgLmRldGFpbC1hZGRyZXNzID4gZGl2ID4gc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNhNWEyYTI7XG59XG4uaW5ib3ggLmluYm94LWRldGFpbHMgLmRldGFpbC1zdWJqZWN0IHtcbiAgcGFkZGluZzogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5pbmJveCAuaW5ib3gtZGV0YWlscyAuZGV0YWlsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2E1YTJhMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmluYm94IC5pbmJveC1kZXRhaWxzIC5kZXRhaWwtYXR0YWNobWVudCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5pbmJveCAuaW5ib3gtZGV0YWlscyAuZGV0YWlsLWF0dGFjaG1lbnQgLmF0dGFjaC1oZWFkIHtcbiAgY29sb3I6ICM3MTZkNmQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4uaW5ib3ggLmluYm94LWRldGFpbHMgLmRldGFpbC1hdHRhY2htZW50IC5hdHRhY2gtaGVhZDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFkYWRhO1xuICByaWdodDogMzBweDtcbiAgdG9wOiAxMnB4O1xufVxuLmluYm94IC5pbmJveC1kZXRhaWxzIC5kZXRhaWwtYXR0YWNobWVudCAuYXR0YWNoZWQtZmlsZSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uaW5ib3ggLmluYm94LWRldGFpbHMgLmRldGFpbC1hdHRhY2htZW50IC5hdHRhY2hlZC1maWxlIGkge1xuICBmb250LXNpemU6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/inbox/inbox-list/inbox-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ams/inbox/inbox-list/inbox-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: InboxListComponent */

  /***/
  function srcAppAmsInboxInboxListInboxListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxListComponent", function () {
      return InboxListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InboxListComponent =
    /*#__PURE__*/
    function () {
      function InboxListComponent() {
        _classCallCheck(this, InboxListComponent);

        this.messageDate = new Date();
      }

      _createClass(InboxListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InboxListComponent;
    }();

    InboxListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inbox-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inbox-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/inbox-list/inbox-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inbox-list.component.scss */
      "./src/app/ams/inbox/inbox-list/inbox-list.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InboxListComponent);
    /***/
  },

  /***/
  "./src/app/ams/inbox/inbox-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/ams/inbox/inbox-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: InboxRouting */

  /***/
  function srcAppAmsInboxInboxRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxRouting", function () {
      return InboxRouting;
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


    var _trash_trash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./trash/trash.component */
    "./src/app/ams/inbox/trash/trash.component.ts");
    /* harmony import */


    var _sent_list_sent_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sent-list/sent-list.component */
    "./src/app/ams/inbox/sent-list/sent-list.component.ts");
    /* harmony import */


    var _inbox_list_inbox_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inbox-list/inbox-list.component */
    "./src/app/ams/inbox/inbox-list/inbox-list.component.ts");
    /* harmony import */


    var _compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./compose-message/compose-message.component */
    "./src/app/ams/inbox/compose-message/compose-message.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'compose',
      pathMatch: 'full'
    }, {
      path: 'inbox-list',
      component: _inbox_list_inbox_list_component__WEBPACK_IMPORTED_MODULE_5__["InboxListComponent"]
    }, {
      path: 'compose',
      component: _compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_6__["ComposeMessageComponent"]
    }, {
      path: 'sent',
      component: _sent_list_sent_list_component__WEBPACK_IMPORTED_MODULE_4__["SentListComponent"]
    }, {
      path: 'trash',
      component: _trash_trash_component__WEBPACK_IMPORTED_MODULE_3__["TrashComponent"]
    }, {
      path: '**',
      redirectTo: 'compose',
      pathMatch: 'full'
    }];

    var InboxRouting = function InboxRouting() {
      _classCallCheck(this, InboxRouting);
    };

    InboxRouting = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InboxRouting);
    /***/
  },

  /***/
  "./src/app/ams/inbox/inbox.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/ams/inbox/inbox.module.ts ***!
    \*******************************************/

  /*! exports provided: InboxModule */

  /***/
  function srcAppAmsInboxInboxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxModule", function () {
      return InboxModule;
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


    var _inbox_list_inbox_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inbox-list/inbox-list.component */
    "./src/app/ams/inbox/inbox-list/inbox-list.component.ts");
    /* harmony import */


    var _compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./compose-message/compose-message.component */
    "./src/app/ams/inbox/compose-message/compose-message.component.ts");
    /* harmony import */


    var _sent_list_sent_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sent-list/sent-list.component */
    "./src/app/ams/inbox/sent-list/sent-list.component.ts");
    /* harmony import */


    var _trash_trash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./trash/trash.component */
    "./src/app/ams/inbox/trash/trash.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./inbox-routing.module */
    "./src/app/ams/inbox/inbox-routing.module.ts");
    /* harmony import */


    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-multiselect-dropdown */
    "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");

    var InboxModule = function InboxModule() {
      _classCallCheck(this, InboxModule);
    };

    InboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_inbox_list_inbox_list_component__WEBPACK_IMPORTED_MODULE_3__["InboxListComponent"], _compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_4__["ComposeMessageComponent"], _sent_list_sent_list_component__WEBPACK_IMPORTED_MODULE_5__["SentListComponent"], _trash_trash_component__WEBPACK_IMPORTED_MODULE_6__["TrashComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _inbox_routing_module__WEBPACK_IMPORTED_MODULE_8__["InboxRouting"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"]]
    })], InboxModule);
    /***/
  },

  /***/
  "./src/app/ams/inbox/sent-list/sent-list.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/ams/inbox/sent-list/sent-list.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInboxSentListSentListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmJveC9zZW50LWxpc3Qvc2VudC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/inbox/sent-list/sent-list.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/ams/inbox/sent-list/sent-list.component.ts ***!
    \************************************************************/

  /*! exports provided: SentListComponent */

  /***/
  function srcAppAmsInboxSentListSentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SentListComponent", function () {
      return SentListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SentListComponent =
    /*#__PURE__*/
    function () {
      function SentListComponent() {
        _classCallCheck(this, SentListComponent);
      }

      _createClass(SentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SentListComponent;
    }();

    SentListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sent-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sent-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/sent-list/sent-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sent-list.component.scss */
      "./src/app/ams/inbox/sent-list/sent-list.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SentListComponent);
    /***/
  },

  /***/
  "./src/app/ams/inbox/trash/trash.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/ams/inbox/trash/trash.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsInboxTrashTrashComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmJveC90cmFzaC90cmFzaC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/inbox/trash/trash.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ams/inbox/trash/trash.component.ts ***!
    \****************************************************/

  /*! exports provided: TrashComponent */

  /***/
  function srcAppAmsInboxTrashTrashComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrashComponent", function () {
      return TrashComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TrashComponent =
    /*#__PURE__*/
    function () {
      function TrashComponent() {
        _classCallCheck(this, TrashComponent);
      }

      _createClass(TrashComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TrashComponent;
    }();

    TrashComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trash',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./trash.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/inbox/trash/trash.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./trash.component.scss */
      "./src/app/ams/inbox/trash/trash.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TrashComponent);
    /***/
  }
}]);
//# sourceMappingURL=inbox-inbox-module-es5.js.map